"use client";
// import { useEffect, useState } from "react";
// import CharacterCard from "@/components/CharacterCard";
// import FilterSection from "@/components/FilterSection";
// import CharacterList from '@/components/CharacterList';

// interface Character {
//   id: number;
//   name: string;
//   status: string;
//   species: string;
//   gender: string;
//   image: string;
//   location: {
//     name: string;
//   };
// }

export default function Home() {
  return (
    <main className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Rick and Morty Karakterleri
        </h1>
        {/* <FilterSection /> */}
        {/* <CharacterList /> */}
      </div>
    </main>
  );
}
