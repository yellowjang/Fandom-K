const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getDonations() {
  const response = await fetch(`${BASE_URL}/donations`, {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  });
  const body = await response.json();

  return body;
}