interface FilterSectionProps {
  filters: {
    status: string;
    gender: string;
  };
  setFilters: (filters: { status: string; gender: string }) => void;
}

export default function FilterSection({ filters, setFilters }: FilterSectionProps) {
  const statuses = ["", "Alive", "Dead", "unknown"];
  const genders = ["", "Female", "Male", "Genderless", "unknown"];

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
      <div className="flex flex-col gap-2">
        <label className="text-gray-700 dark:text-gray-300">Durum:</label>
        <select
          value={filters.status}
          onChange={(e) =>
            setFilters({ ...filters, status: e.target.value })
          }
          className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
        >
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status || "Tümü"}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-700 dark:text-gray-300">Cinsiyet:</label>
        <select
          value={filters.gender}
          onChange={(e) =>
            setFilters({ ...filters, gender: e.target.value })
          }
          className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
        >
          {genders.map((gender) => (
            <option key={gender} value={gender}>
              {gender || "Tümü"}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
} 