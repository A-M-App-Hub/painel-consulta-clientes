import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ClientTable from "./components/ClientTable";
import { mockClients } from "./data/mockClients";
import { filterClients } from "./utils/filterClients";
import type { Client } from "./data/mockClients";

function App() {
  const [filteredClients, setFilteredClients] = useState<Client[]>(mockClients);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (query: string) => {
    setIsSearching(true);
    
    // Simular delay de busca (para feedback visual)
    setTimeout(() => {
      const results = filterClients(mockClients, query);
      setFilteredClients(results);
      setIsSearching(false);
    }, 100);
  };

  const handleClear = () => {
    setFilteredClients(mockClients);
    setIsSearching(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            Painel de Consulta de Clientes
          </h1>
          <p className="mt-2 text-center text-gray-600">
            Busque e visualize informações de clientes
          </p>
        </header>

        <div className="space-y-6">
          <SearchBar onSearch={handleSearch} onClear={handleClear} />
          
          {isSearching ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <>
              <div className="text-sm text-gray-600">
                Exibindo {filteredClients.length} de {mockClients.length} clientes
              </div>
              <ClientTable clients={filteredClients} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
