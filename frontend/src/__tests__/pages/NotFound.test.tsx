import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NotFound from "../../pages/NotFound";

describe("NotFound", () => {
  it("AC-3.5: deve exibir mensagem 404", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    
    expect(screen.getByText(/404/i)).toBeInTheDocument();
    expect(screen.getByText(/página não encontrada/i)).toBeInTheDocument();
  });

  it("AC-3.5: deve ter link para voltar à home", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    
    expect(screen.getByRole("link", { name: /voltar/i })).toBeInTheDocument();
  });
});
