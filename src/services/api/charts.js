import axios from 'axios';
import { TIMEOUT } from '@/constants/timeout.js';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getCharts(gender = 'male', pageSize = 10, cursor = null) {
  const query =
    `gender=${gender}&pageSize=${pageSize}` +
    (cursor ? `&cursor=${cursor}` : '');
  const response = await axios.get(`${BASE_URL}/charts/%7Bgender%7D?${query}`, {
    timeout: TIMEOUT,
  });
  return response.data;
}
