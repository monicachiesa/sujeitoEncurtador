import axios from 'axios';

export const key = "26ad01539a31a9cb8ed5991b8ccdb0649f0fe063";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
       'Authorization' : `Bearer ${key}`
    }
})

export default api;