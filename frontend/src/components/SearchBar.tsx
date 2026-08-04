import { useState, useEffect, useRef } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onClear: () => void;
  debounce?: boolean;
  debounceMs?: number;
}

export default function SearchBar({ 
  onSearch, 
  onClear, 
  debounce = true,
  debounceMs = 300 
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!debounce) {
      return;
    }

    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    if (query.length === 0) {
      return;
    }

    if (query.length > 0 && query.length < 3) {
      setError("Digite pelo menos 3 caracteres");
      return;
    }

    setError("");
    
    debounceTimer.current = setTimeout(() => {
      onSearch(query);
    }, debounceMs);

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [query, debounce, debounceMs, onSearch]);

  const handleSearch = () => {
    if (query.length < 3) {
      setError("Digite pelo menos 3 caracteres");
      return;
    }
    setError("");
    onSearch(query);
  };

  const handleClear = () => {
    setQuery("");
    setError("");
    onClear();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-2">
      <div className="flex gap-2">
        <div className="flex-1">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Buscar cliente por nome, ID, email ou telefone..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Campo de busca"
          />
        </div>
        <button
          onClick={handleSearch}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Buscar
        </button>
        <button
          onClick={handleClear}
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Limpar
        </button>
      </div>
      {error && (
        <p className="text-red-600 text-sm">{error}</p>
      )}
    </div>
  );
}
