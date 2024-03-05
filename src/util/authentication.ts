import axios from 'axios';
import qs from 'qs';
import { LoginData } from "types/LoginData";
import { BASE_URL } from './requests';

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