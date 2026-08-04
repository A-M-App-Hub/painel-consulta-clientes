import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../../components/Header";

describe("Header", () => {
  it("AC-3.1: deve exibir logo/título da aplicação", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    
    expect(screen.getByText(/Painel de Consulta de Clientes/i)).toBeInTheDocument();
  });

  it("AC-3.1: deve exibir área para informações do usuário", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    
    // Área de usuário deve existir (placeholder para CAS)
    expect(screen.getByTestId("user-area")).toBeInTheDocument();
  });

  it("AC-3.1: deve exibir botão de logout (preparado para CAS)", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    
    expect(screen.getByRole("button", { name: /logout/i })).toBeInTheDocument();
  });
});
