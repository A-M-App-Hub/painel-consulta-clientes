import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../../components/Footer";

describe("Footer", () => {
  it("AC-3.2: deve exibir copyright", () => {
    render(<Footer />);
    
    expect(screen.getByText(/© 2025/i)).toBeInTheDocument();
  });

  it("AC-3.2: deve exibir links de suporte/ajuda", () => {
    render(<Footer />);
    
    expect(screen.getByText(/suporte/i)).toBeInTheDocument();
    expect(screen.getByText(/ajuda/i)).toBeInTheDocument();
  });
});
