import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept',
  },
});

export default axiosInstance;
