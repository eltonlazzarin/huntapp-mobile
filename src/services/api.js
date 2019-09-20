import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-product-hunt-app.herokuapp.com/api'
});

export default api;