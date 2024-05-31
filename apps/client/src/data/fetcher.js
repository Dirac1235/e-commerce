
import axios from 'axios';
import { cookies } from 'next/headers';

const fetcher = axios.create();

fetcher.defaults.baseURL = 'http://localhost:8000'

fetcher.interceptors.request.use(async (request) => {
    const cookieStore = cookies()
    const accessToken = cookieStore.get('accessToken')?.value
    if (accessToken) {
        request.headers.Authorization = `Bearer ${accessToken}`;
    }
    return request;
});


fetcher.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        return Promise.resolve(error.response);
    },
);


export default fetcher;