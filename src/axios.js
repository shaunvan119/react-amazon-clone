import axios from "axios";

const instance = axios.create({
    baseURL: '...' // The API {cloud funtion} URL
});

export default instance;