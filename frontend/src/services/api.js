import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export const register = (data) => api.post('/api/auth/register', data);
export const login = (data) => api.post('/api/auth/login', data);
export const uploadObject = (formData) => api.post('/api/objects/upload', formData, {
  headers: { 'Content-Type': 'multipart/form-data' }
});
