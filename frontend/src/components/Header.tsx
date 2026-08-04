export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Painel de Consulta de Clientes</h1>
        
        <div data-testid="user-area" className="flex items-center gap-4">
          <span className="text-sm">Usuário: (aguardando CAS)</span>
          <button 
            className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition"
            onClick={() => console.log("Logout - CAS integration pending")}
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
