import { useQuery } from '@tanstack/react-query';
import { useCharacterStore } from '@/store/characters';
import { ApiResponse } from '@/types';

const BASE_URL = 'https://rickandmortyapi.com/api';

async function fetchCharacters(filters: { status: string; gender: string }) {
  const params = new URLSearchParams();
  
  if (filters.status) {
    params.append('status', filters.status);
  }
  if (filters.gender) {
    params.append('gender', filters.gender);
  }

  const queryString = params.toString();
  const url = `${BASE_URL}/character${queryString ? `?${queryString}` : ''}`;
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('API isteği başarısız oldu');
  }
  return response.json() as Promise<ApiResponse>;
}

export function useCharacters() {
  const filters = useCharacterStore(state => state.filters);

  return useQuery({
    queryKey: ['characters', filters],
    queryFn: () => fetchCharacters(filters),
  });
} 