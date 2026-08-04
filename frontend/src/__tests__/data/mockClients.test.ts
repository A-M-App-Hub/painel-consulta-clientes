import { describe, it, expect } from "vitest";
import { mockClients } from "../../data/mockClients";

describe("mockClients", () => {
  it("AC-4.5: deve ter mínimo 20 clientes", () => {
    expect(mockClients.length).toBeGreaterThanOrEqual(20);
  });

  it("AC-4.5: cada cliente deve ter todos os campos obrigatórios", () => {
    mockClients.forEach((client) => {
      expect(client).toHaveProperty("id");
      expect(client).toHaveProperty("nome");
      expect(client).toHaveProperty("cpf_cnpj");
      expect(client).toHaveProperty("email");
      expect(client).toHaveProperty("telefone");
      expect(client).toHaveProperty("segmento");
      expect(client).toHaveProperty("status");
      
      // Validar tipos
      expect(typeof client.id).toBe("string");
      expect(typeof client.nome).toBe("string");
      expect(typeof client.cpf_cnpj).toBe("string");
      expect(typeof client.email).toBe("string");
      expect(typeof client.telefone).toBe("string");
      expect(typeof client.segmento).toBe("string");
      expect(client.status).toMatch(/^(Ativo|Inativo)$/);
    });
  });

  it("AC-4.5: IDs devem ser únicos", () => {
    const ids = mockClients.map((c) => c.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(mockClients.length);
  });

  it("AC-4.5: deve ter dados realistas", () => {
    // Verificar que há pelo menos alguns ativos e inativos
    const ativos = mockClients.filter((c) => c.status === "Ativo");
    const inativos = mockClients.filter((c) => c.status === "Inativo");
    
    expect(ativos.length).toBeGreaterThan(0);
    expect(inativos.length).toBeGreaterThan(0);
    
    // Verificar que emails têm formato válido
    mockClients.forEach((client) => {
      expect(client.email).toMatch(/@/);
    });
  });
});
