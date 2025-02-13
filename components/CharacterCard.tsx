interface CharacterCardProps {
  character: {
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    location: {
      name: string;
    };
  };
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const statusColor = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-gray-500",
  }[character.status];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          {character.name}
        </h2>
        <div className="flex items-center mb-2">
          <span className={`w-2 h-2 rounded-full ${statusColor} mr-2`}></span>
          <span className="text-gray-600 dark:text-gray-300">
            {character.status} - {character.species}
          </span>
        </div>
        <div className="text-gray-600 dark:text-gray-300">
          <p>Cinsiyet: {character.gender}</p>
          <p>Konum: {character.location.name}</p>
        </div>
      </div>
    </div>
  );
} 