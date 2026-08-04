import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("App - Integração", () => {
  it("AC-4.1: deve renderizar título e SearchBar", () => {
    render(<App />);
    
    expect(screen.getByText(/painel de consulta de clientes/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/buscar cliente/i)).toBeInTheDocument();
  });

  it("AC-4.2 + AC-4.3: deve buscar e exibir resultados na tabela", async () => {
    const user = userEvent.setup();
    render(<App />);
    
    const input = screen.getByPlaceholderText(/buscar cliente/i);
    const searchButton = screen.getByRole("button", { name: /buscar/i });
    
    await user.type(input, "joão");
    await user.click(searchButton);
    
    // Aguardar loading terminar
    await waitFor(() => {
      expect(screen.getByText(/joão silva santos/i)).toBeInTheDocument();
    });
  });

  it("AC-4.4: botão limpar deve resetar busca e exibir todos os clientes", async () => {
    const user = userEvent.setup();
    render(<App />);
    
    const input = screen.getByPlaceholderText(/buscar cliente/i);
    const searchButton = screen.getByRole("button", { name: /buscar/i });
    const clearButton = screen.getByRole("button", { name: /limpar/i });
    
    // Fazer uma busca
    await user.type(input, "joão");
    await user.click(searchButton);
    
    await waitFor(() => {
      expect(screen.getByText(/joão silva santos/i)).toBeInTheDocument();
    });
    
    // Verificar que está mostrando apenas 1 cliente
    expect(screen.getByText(/exibindo 1 de/i)).toBeInTheDocument();
    
    // Limpar
    await user.click(clearButton);
    
    // Deve voltar a mostrar todos os clientes
    await waitFor(() => {
      const allRows = screen.getAllByRole("row");
      expect(allRows.length).toBeGreaterThan(20); // Deve ter todos os clientes
    });
  });

  it("AC-4.6: deve exibir mensagem quando não há resultados", async () => {
    const user = userEvent.setup();
    render(<App />);
    
    const input = screen.getByPlaceholderText(/buscar cliente/i);
    const searchButton = screen.getByRole("button", { name: /buscar/i });
    
    await user.type(input, "nome-inexistente-xyz");
    await user.click(searchButton);
    
    await waitFor(() => {
      expect(screen.getByText(/nenhum cliente encontrado/i)).toBeInTheDocument();
    });
  });

  it("AC-4.7: busca deve ser case-insensitive", async () => {
    const user = userEvent.setup();
    render(<App />);
    
    const input = screen.getByPlaceholderText(/buscar cliente/i);
    const searchButton = screen.getByRole("button", { name: /buscar/i });
    
    // Buscar em minúsculas
    await user.type(input, "joão");
    await user.click(searchButton);
    
    // Aguardar loading terminar
    await waitFor(() => {
      expect(screen.getByText(/joão silva santos/i)).toBeInTheDocument();
    });
  });

  it("AC-4.8: deve implementar debounce na busca", async () => {
    render(<App />);
    
    const input = screen.getByPlaceholderText(/buscar cliente/i);
    
    // Digitar rapidamente (debounce deve evitar múltiplas buscas)
    fireEvent.change(input, { target: { value: "J" } });
    fireEvent.change(input, { target: { value: "Jo" } });
    fireEvent.change(input, { target: { value: "João" } });
    
    // Aguardar debounce (300ms) + loading (100ms)
    await waitFor(() => {
      expect(screen.getByText(/joão silva santos/i)).toBeInTheDocument();
    }, { timeout: 500 });
  });

  it("deve exibir todos os clientes inicialmente", () => {
    render(<App />);
    
    // Deve ter pelo menos 20 linhas de clientes (+ header)
    const rows = screen.getAllByRole("row");
    expect(rows.length).toBeGreaterThan(20);
  });
});
