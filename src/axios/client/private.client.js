import axios from 'axios';
import { BASE_URL, TOKEN_CYBERSOFT, userLocalStorage } from '../utils/config';
import qs from 'query-string';

export const privateClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json-patch+json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization: 'Bearer ' + userLocalStorage.get()?.accessToken
    },
    paramsSerializer:{
        serialize:(params) => qs.stringify(params)
    }});

privateClient.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error);
});

privateClient.interceptors.response.use(response => {
    return response;
}, error => {
    return Promise.reject(error);
});
