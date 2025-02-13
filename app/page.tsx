"use client";
import { useEffect, useState } from "react";
import CharacterCard from "@/components/CharacterCard";
import FilterSection from "@/components/FilterSection";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  location: {
    name: string;
  };
}

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filters, setFilters] = useState({
    status: "",
    gender: "",
  });

  useEffect(() => {
    const fetchCharacters = async () => {
      let url = "https://rickandmortyapi.com/api/character/?";
      if (filters.status) url += `status=${filters.status}`;
      if (filters.gender) url += `${filters.status ? "&" : ""}gender=${filters.gender}`;

      const res = await fetch(url);
      const data = await res.json();
      setCharacters(data.results);
    };

    fetchCharacters();
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Rick and Morty Karakterleri
        </h1>
        
        <FilterSection filters={filters} setFilters={setFilters} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </div>
    </div>
  );
}
