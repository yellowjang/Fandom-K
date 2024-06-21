import axios from 'axios';
import { TIMEOUT } from '@/constants/timeout.js';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getDonations() {
  const response = await axios.get(`${BASE_URL}/donations`);
  return response.data;
}

export async function creditDonation({ id, data }) {
  const response = await axios.put(
    `${BASE_URL}/donations/${id}/contribute`,
    data,
    { timeout: TIMEOUT }
  );
  return response.data;
}
