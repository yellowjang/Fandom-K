import axiosInstance from './axiosInstance';

export async function getDonations() {
  const response = await axiosInstance.get('/donations');
  return response.data;
}

export async function creditDonation({ id, data }) {
  const response = await axiosInstance.put(`/donations/${id}/contribute`, data);
  return response.data;
}
