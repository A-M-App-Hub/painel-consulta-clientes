import { describe, it, expect } from "vitest";
import { filterClients } from "../../utils/filterClients";
import type { Client } from "../../data/mockClients";

const mockData: Client[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    nome: "João Silva Santos",
    cpf_cnpj: "***.***.001-**",
    email: "joao.silva@empresa.com.br",
    telefone: "(11) 98765-4321",
    segmento: "Tecnologia",
    status: "Ativo"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    nome: "Maria Oliveira Costa",
    cpf_cnpj: "**.***.***/0001-**",
    email: "maria.oliveira@consultoria.com",
    telefone: "(21) 97654-3210",
    segmento: "Consultoria",
    status: "Ativo"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    nome: "Pedro Henrique Alves",
    cpf_cnpj: "***.***.003-**",
    email: "pedro.alves@tech.com.br",
    telefone: "(31) 96543-2109",
    segmento: "Tecnologia",
    status: "Inativo"
  }
];

describe("filterClients", () => {
  it("AC-4.7: deve ser case-insensitive", () => {
    const result1 = filterClients(mockData, "joão");
    const result2 = filterClients(mockData, "JOÃO");
    const result3 = filterClients(mockData, "JoÃo");
    
    expect(result1).toHaveLength(1);
    expect(result2).toHaveLength(1);
    expect(result3).toHaveLength(1);
    expect(result1[0].id).toBe(result2[0].id);
  });

  it("AC-4.2: deve buscar por nome", () => {
    const result = filterClients(mockData, "João Silva");
    expect(result).toHaveLength(1);
    expect(result[0].nome).toBe("João Silva Santos");
  });

  it("AC-4.2: deve buscar por ID", () => {
    const result = filterClients(mockData, "550e8400-e29b-41d4-a716-446655440001");
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("550e8400-e29b-41d4-a716-446655440001");
  });

  it("AC-4.2: deve buscar por email", () => {
    const result = filterClients(mockData, "maria.oliveira@consultoria.com");
    expect(result).toHaveLength(1);
    expect(result[0].email).toBe("maria.oliveira@consultoria.com");
  });

  it("AC-4.2: deve buscar por telefone", () => {
    const result = filterClients(mockData, "(31) 96543-2109");
    expect(result).toHaveLength(1);
    expect(result[0].telefone).toBe("(31) 96543-2109");
  });

  it("AC-4.2: deve buscar por parte do nome", () => {
    const result = filterClients(mockData, "Silva");
    expect(result).toHaveLength(1);
    expect(result[0].nome).toContain("Silva");
  });

  it("AC-4.6: deve retornar array vazio para busca sem resultados", () => {
    const result = filterClients(mockData, "nome-inexistente");
    expect(result).toHaveLength(0);
  });

  it("AC-4.2: deve buscar em múltiplos campos simultaneamente", () => {
    const result = filterClients(mockData, "Tecnologia");
    expect(result).toHaveLength(2); // João e Pedro são de Tecnologia
  });

  it("deve retornar todos os clientes para query vazia", () => {
    const result = filterClients(mockData, "");
    expect(result).toHaveLength(mockData.length);
  });

  it("deve retornar todos os clientes para query com apenas espaços", () => {
    const result = filterClients(mockData, "   ");
    expect(result).toHaveLength(mockData.length);
  });
});
