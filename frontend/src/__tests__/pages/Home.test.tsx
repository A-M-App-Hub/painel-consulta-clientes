import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";

describe("Home", () => {
  it("AC-3.4: deve exibir título da página", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    
    expect(screen.getByRole("heading", { name: /Consulta de Clientes/i })).toBeInTheDocument();
  });

  it("AC-3.4: deve ter área para busca (placeholder para Story 4)", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    
    expect(screen.getByTestId("search-area")).toBeInTheDocument();
  });
});
