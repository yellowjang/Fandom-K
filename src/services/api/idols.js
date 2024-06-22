import axiosInstance from './axiosInstance';

export async function getIdols({ pageSize }) {
  const response = await axiosInstance.get(`/idols?pageSize=${pageSize}`);
  return response.data;
}
