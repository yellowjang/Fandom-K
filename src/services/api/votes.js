import axios from 'axios';
import { TIMEOUT } from '@/constants/timeout.js';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function postVotes(idolId) {
  const response = await axios.post(
    `${BASE_URL}/votes`,
    { idolId: idolId },
    { timeout: TIMEOUT }
  );
  return response.data;
}
