import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // URL base do seu backend
});

export default api;
