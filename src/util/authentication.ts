import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';
import { LoginData } from "types/LoginData";
import { BASE_URL } from './requests';
import { LoginResponse } from 'types/LoginResponse';

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

export const requestBackEnd = (axiosConfig : AxiosRequestConfig) => {

    const headers = axiosConfig.withCredentials ? {
        ...axiosConfig.headers,
        Authorization: "Bearer " + getLocalStorageData().access_token
    } : axiosConfig.headers;

    return axios({...axiosConfig, baseURL: BASE_URL, headers});
}