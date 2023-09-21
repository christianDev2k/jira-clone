import axios, { CreateAxiosDefaults, AxiosRequestHeaders } from 'axios';
import { getAccessToken } from 'utils';

const TokenCyberSoft = import.meta.env.VITE_TOKEN_CYBERSOFT;
const Authorization = getAccessToken();

const apiInstance = (config?: CreateAxiosDefaults) => {
    const api = axios.create(config);

    api.interceptors.request.use(config => {
        return {
            ...config,
            headers: {
                TokenCyberSoft,
                Authorization,
            } as unknown as AxiosRequestHeaders,
        };
    });
    return api;
};

export default apiInstance;
