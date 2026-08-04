import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center py-16">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-2xl text-gray-600 mb-8">Página não encontrada</p>
      
      <Link 
        to="/" 
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition inline-block"
      >
        Voltar para a Home
      </Link>
    </div>
  );
}
