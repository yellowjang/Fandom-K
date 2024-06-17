const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function postVotes(idolId) {
  try {
    const response = await fetch(`${BASE_URL}/votes`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ idolId: idolId }),
    });

    if (!response.ok) {
      throw new Error('투표에 실패했습니다.');
    }

    const body = await response.json();

    return body;
  } catch (error) {
    return { error: error.message };
  }
}
