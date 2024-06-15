const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getDonations() {
  try {
    const response = await fetch(`${BASE_URL}/donations`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('데이터를 불러오지 못했습니다.');
    }

    const body = await response.json();

    return body;
  } catch (error) {
    return { error: error.message };
  }
}

export async function creditDonation({ id, data }) {
  try {
    const response = await fetch(`${BASE_URL}/donations/${id}/contribute`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('후원에 실패했습니다.');
    }

    const responseBody = await response.json();

    return responseBody;
  } catch (error) {
    return { error: error.message };
  }
}
