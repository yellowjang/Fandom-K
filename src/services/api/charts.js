const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getCharts({gender = 'male', pageSize = 10}) {
  const response = await fetch(`${BASE_URL}/charts/{gender}?gender=${gender}&pageSize=${pageSize}`, {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  });
  const body = await response.json();

  return body;
}
