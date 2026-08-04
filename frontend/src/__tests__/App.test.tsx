import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

describe("App", () => {
  it("AC-3.6: deve renderizar a aplicação completa com roteamento", () => {
    render(
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    );
    
    // Header
    expect(screen.getByRole("heading", { name: /Painel de Consulta de Clientes/i, level: 1 })).toBeInTheDocument();
    
    // Home page
    expect(screen.getByRole("heading", { name: /Consulta de Clientes/i, level: 2 })).toBeInTheDocument();
    
    // Footer
    expect(screen.getByText(/© 2025/i)).toBeInTheDocument();
  });

  it("AC-3.6: deve ter estrutura completa (header + main + footer)", () => {
    const { container } = render(
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    );
    
    expect(container.querySelector("header")).toBeInTheDocument();
    expect(container.querySelector("main")).toBeInTheDocument();
    expect(container.querySelector("footer")).toBeInTheDocument();
  });
});
