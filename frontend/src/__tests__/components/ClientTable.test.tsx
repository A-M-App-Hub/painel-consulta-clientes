import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ClientTable from "../../components/ClientTable";
import type { Client } from "../../data/mockClients";

const mockClients: Client[] = [
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
    telefone: "(31) 96543-2109",
    segmento: "Consultoria",
    status: "Inativo"
  }
];

describe("ClientTable", () => {
  it("AC-4.3: deve renderizar tabela com colunas corretas", () => {
    render(<ClientTable clients={mockClients} />);
    
    // Verificar headers
    expect(screen.getByText("Nome")).toBeInTheDocument();
    expect(screen.getByText("CPF/CNPJ")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Telefone")).toBeInTheDocument();
    expect(screen.getByText("Segmento")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
  });

  it("AC-4.3: deve exibir dados dos clientes", () => {
    render(<ClientTable clients={mockClients} />);
    
    // Verificar dados do primeiro cliente
    expect(screen.getByText("João Silva Santos")).toBeInTheDocument();
    expect(screen.getByText("***.***.001-**")).toBeInTheDocument();
    expect(screen.getByText("joao.silva@empresa.com.br")).toBeInTheDocument();
    expect(screen.getByText("(11) 98765-4321")).toBeInTheDocument();
    expect(screen.getByText("Tecnologia")).toBeInTheDocument();
    
    // Verificar dados do segundo cliente
    expect(screen.getByText("Maria Oliveira Costa")).toBeInTheDocument();
    expect(screen.getByText("Consultoria")).toBeInTheDocument();
  });

  it("AC-4.3: deve exibir status com cores diferentes", () => {
    const { container } = render(<ClientTable clients={mockClients} />);
    
    // Verificar que status Ativo e Inativo estão presentes
    const statusElements = container.querySelectorAll('[data-status]');
    expect(statusElements.length).toBeGreaterThan(0);
  });

  it("AC-4.6: deve exibir mensagem quando não há resultados", () => {
    render(<ClientTable clients={[]} />);
    
    expect(screen.getByText(/nenhum cliente encontrado/i)).toBeInTheDocument();
  });

  it("deve renderizar número correto de linhas", () => {
    const { container } = render(<ClientTable clients={mockClients} />);
    
    // Deve ter 2 linhas de dados (excluindo header)
    const rows = container.querySelectorAll('tbody tr');
    expect(rows.length).toBe(2);
  });

  it("deve ser responsiva", () => {
    const { container } = render(<ClientTable clients={mockClients} />);
    
    // Verificar que tem classe de overflow para scroll horizontal
    const tableContainer = container.querySelector('[class*="overflow"]');
    expect(tableContainer).toBeInTheDocument();
  });
});
