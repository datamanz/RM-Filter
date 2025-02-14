import { Character } from '@/types';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = async (filters: {
  status?: string;
  gender?: string;
}): Promise<{ results: Character[] }> => {
  const params = new URLSearchParams();
  if (filters.status) params.append('status', filters.status);
  if (filters.gender) params.append('gender', filters.gender);

  const response = await fetch(`${BASE_URL}/character?${params.toString()}`);
  if (!response.ok) throw new Error('API isteği başarısız oldu');
  
  return response.json();
}; 