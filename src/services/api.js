import axios from 'axios';

const api = axios.create({
    baseURL: 'https://scriptsky-back.herokuapp.com/api'
});

export default api;