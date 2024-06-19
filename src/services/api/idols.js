import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getIdols({ pageSize }) {
  const response = await axios.get(`${BASE_URL}/idols?pageSize=${pageSize}`);
  return response.data;
}

// export async function getIdols({ pageSize }) {
//   const response = await fetch(`${BASE_URL}/idols?pageSize=${pageSize}`, {
//     headers: {
//       Accept: 'application/json',
//     },
//     method: 'GET',
//   });
//   const body = await response.json();

//   return body;
// }
