import type { Client } from "../data/mockClients";

/**
 * Filtra clientes por query de busca (case-insensitive)
 * Busca nos campos: nome, id, email, telefone
 * 
 * AC-4.2: Filtro de clientes por nome, ID ou outros critérios funciona corretamente
 * AC-4.7: Busca é case-insensitive
 */
export function filterClients(clients: Client[], query: string): Client[] {
  // Se query vazia ou apenas espaços, retorna todos
  const trimmedQuery = query.trim();
  if (!trimmedQuery) {
    return clients;
  }

  const lowerQuery = trimmedQuery.toLowerCase();

  return clients.filter((client) => {
    // Buscar em: nome, id, email, telefone
    return (
      client.nome.toLowerCase().includes(lowerQuery) ||
      client.id.toLowerCase().includes(lowerQuery) ||
      client.email.toLowerCase().includes(lowerQuery) ||
      client.telefone.toLowerCase().includes(lowerQuery) ||
      client.segmento.toLowerCase().includes(lowerQuery)
    );
  });
}
