import { API_FILTERS, BASE_API_URL } from './consts';

export const fetchData = async (query: string) => {
  const response = await fetch(`${BASE_API_URL}/name/${query}${API_FILTERS}`);

  if (!response.ok) {
    const secondResponse = await fetch(
      `${BASE_API_URL}/capital/${query}${API_FILTERS}`
    );
    if (!secondResponse.ok) {
      throw new Error('Not Found');
    }
    const data = await secondResponse.json();
    return data[0].name.common;
  }

  const data = await response.json();
  return data[0].capital[0];
};
