import axios from 'axios';
import { TIMEOUT } from '@/constants/timeout.js';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getIdols({ pageSize }) {
  const response = await axios.get(`${BASE_URL}/idols?pageSize=${pageSize}`, {
    timeout: TIMEOUT,
  });
  return response.data;
}
