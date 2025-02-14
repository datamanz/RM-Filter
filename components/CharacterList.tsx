'use client';

import { useCharacters } from '@/hooks/useCharacters';
import CharacterCard from './CharacterCard';
import { Skeleton } from '@/components/ui/skeleton';

export default function CharacterList(): JSX.Element {
  const { data, isLoading, error } = useCharacters();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        Karakterler yüklenirken bir hata oluştu
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data?.results.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
} 