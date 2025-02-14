import { create } from 'zustand';

interface Filters {
  status: string;
  gender: string;
}

interface CharacterStore {
  filters: Filters;
  setFilters: (newFilters: Partial<Filters>) => void;
  resetFilters: () => void;
}

export const useCharacterStore = create<CharacterStore>((set) => ({
  filters: {
    status: '',
    gender: '',
  },
  setFilters: (newFilters) => 
    set((state) => ({
      filters: {
        ...state.filters,
        ...newFilters,
      },
    })),
  resetFilters: () => 
    set({
      filters: {
        status: '',
        gender: '',
      },
    }),
})); 