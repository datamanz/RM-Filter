import { useQuery } from '@tanstack/react-query';
import { getCharacters } from '@/services/api';
import { useCharacterStore } from '@/store/useCharacterStore';

export const useCharacters = () => {
  const filters = useCharacterStore((state) => state.filters);

  return useQuery({
    queryKey: ['characters', filters],
    queryFn: () => getCharacters(filters),
  });
}; 