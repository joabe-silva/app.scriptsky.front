import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.0.105:3001/api'
});

export default api;