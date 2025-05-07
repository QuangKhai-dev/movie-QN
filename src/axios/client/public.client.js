import axios from 'axios';
import { BASE_URL, TOKEN_CYBERSOFT } from '../../utils/config';

import qs from 'query-string';

export const publicClient = axios.create({
    baseURL: BASE_URL,
    headers:{
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json-patch+json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
        TokenCybersoft: TOKEN_CYBERSOFT,
    },
    paramsSerializer:{
        serialize:(params) => qs.stringify(params)
    }
});

publicClient.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error);
});

publicClient.interceptors.response.use(response => {
    return response;
}, error => {
    return Promise.reject(error);
});

