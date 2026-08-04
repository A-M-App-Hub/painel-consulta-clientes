import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Layout from "../../components/Layout";

describe("Layout", () => {
  it("AC-3.3: deve renderizar Header, conteúdo e Footer", () => {
    render(
      <BrowserRouter>
        <Layout>
          <div>Conteúdo de teste</div>
        </Layout>
      </BrowserRouter>
    );
    
    // Header (buscar pelo heading)
    expect(screen.getByRole("heading", { name: /Painel de Consulta de Clientes/i })).toBeInTheDocument();
    
    // Conteúdo
    expect(screen.getByText(/Conteúdo de teste/i)).toBeInTheDocument();
    
    // Footer
    expect(screen.getByText(/© 2025/i)).toBeInTheDocument();
  });

  it("AC-3.3: deve ter estrutura semântica HTML5", () => {
    const { container } = render(
      <BrowserRouter>
        <Layout>
          <div>Conteúdo</div>
        </Layout>
      </BrowserRouter>
    );
    
    expect(container.querySelector("header")).toBeInTheDocument();
    expect(container.querySelector("main")).toBeInTheDocument();
    expect(container.querySelector("footer")).toBeInTheDocument();
  });
});
