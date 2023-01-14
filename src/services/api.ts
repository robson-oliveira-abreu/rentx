import axios from "axios";

export const api = axios.create({
    baseURL: 'http://192.168.10.107:3333',
});
