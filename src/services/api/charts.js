import axiosInstance from './axiosInstance';

export async function getCharts(gender = 'male', pageSize = 10, cursor = null) {
  const query =
    `gender=${gender}&pageSize=${pageSize}` +
    (cursor ? `&cursor=${cursor}` : '');
  const response = await axiosInstance.get(`/charts/%7Bgender%7D?${query}`);
  return response.data;
}
