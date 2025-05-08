import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://your-api-domain.com',
});

export const getServices = () => api.get('/services');
export const sendContactForm = (data) => api.post('/contact', data);
