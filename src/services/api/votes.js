import axiosInstance from './axiosInstance';

export async function postVotes(idolId) {
  const response = await axiosInstance.post(`/votes`, { idolId: idolId });
  return response.data;
}
