import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';
import { LoginData } from "types/LoginData";
import { BASE_URL } from './requests';
import { LoginResponse } from 'types/LoginResponse';
import { Role } from 'types/Role';
import { TokenData } from 'types/TokenData';
import jwtDecode from 'jwt-decode';

const CLIENT_ID = 'myclientid';
const CLIENT_SECRET = 'myclientsecret';

const basicHeader = () => {
    return 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET);
}

export const requestBackendLogin = (loginData : LoginData) => {

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
         Authorization: basicHeader()
    }

    const data = qs.stringify({
        ...loginData,
        grant_type: 'password'
    });

    return axios({method: 'POST', baseURL: BASE_URL, url: '/oauth/token', data, headers});
}

export const saveLocalStorageData = (loginData : LoginData) => {
    localStorage.setItem('authContent', JSON.stringify(loginData));
}

export const getLocalStorageData = () => {
    const storage = localStorage.getItem('authContent') ?? '{}';
    return JSON.parse(storage) as LoginResponse;
}

export const removeLocalStorage = () => {
    localStorage.removeItem('authContent');
}

export const requestBackEnd = (axiosConfig : AxiosRequestConfig) => {

    const headers = axiosConfig.withCredentials ? {
        ...axiosConfig.headers,
        Authorization: "Bearer " + getLocalStorageData().access_token
    } : axiosConfig.headers;

    return axios({...axiosConfig, baseURL: BASE_URL, headers});
}

export const getTokenData = () : TokenData | undefined => {
    try {
        return jwtDecode(getLocalStorageData().access_token) as TokenData;
    } catch (error) {
        return undefined;
    }
}

export const hasAnyRoles = (roles: Role[]) : boolean => {

    if (roles.length === 0) {
        return true;
    }

    const tokenData = getTokenData();

    if (tokenData !== undefined) {
        return roles.some(role => tokenData?.authorities.includes(role));
    }
    return false;
}

export const isAuthenticated = () : boolean => {
    const tokenData = getTokenData();
    return (tokenData && tokenData.exp * 1000 > Date.now()) ? true : false;
}