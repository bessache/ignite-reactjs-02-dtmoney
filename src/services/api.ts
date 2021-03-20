import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://172.30.220.66:3000/api'
})