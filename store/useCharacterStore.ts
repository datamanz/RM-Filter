import { create } from 'zustand';

interface FilterState {
  status: string;
  gender: string;
}

interface CharacterStore {
  filters: FilterState;
  setFilters: (filters: Partial<FilterState>) => void;
  resetFilters: () => void;
}

export const useCharacterStore = create<CharacterStore>((set) => ({
  filters: {
    status: '',
    gender: '',
  },
  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),
  resetFilters: () =>
    set(() => ({
      filters: { status: '', gender: '' },
    })),
})); 