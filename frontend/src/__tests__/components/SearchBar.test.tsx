import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "../../components/SearchBar";

describe("SearchBar", () => {
  it("AC-4.1: deve renderizar campo de busca com placeholder", () => {
    render(<SearchBar onSearch={vi.fn()} onClear={vi.fn()} />);
    
    const input = screen.getByPlaceholderText(/buscar cliente/i);
    expect(input).toBeInTheDocument();
  });

  it("AC-4.1: deve ter botão de buscar", () => {
    render(<SearchBar onSearch={vi.fn()} onClear={vi.fn()} />);
    
    const button = screen.getByRole("button", { name: /buscar/i });
    expect(button).toBeInTheDocument();
  });

  it("AC-4.1: deve ter botão de limpar", () => {
    render(<SearchBar onSearch={vi.fn()} onClear={vi.fn()} />);
    
    const button = screen.getByRole("button", { name: /limpar/i });
    expect(button).toBeInTheDocument();
  });

  it("AC-4.1: deve chamar onSearch ao clicar em buscar", async () => {
    const onSearch = vi.fn();
    const user = userEvent.setup();
    
    render(<SearchBar onSearch={onSearch} onClear={vi.fn()} />);
    
    const input = screen.getByPlaceholderText(/buscar cliente/i);
    const button = screen.getByRole("button", { name: /buscar/i });
    
    await user.type(input, "João");
    await user.click(button);
    
    expect(onSearch).toHaveBeenCalledWith("João");
  });

  it("AC-4.1: deve validar mínimo 3 caracteres", async () => {
    const onSearch = vi.fn();
    const user = userEvent.setup();
    
    render(<SearchBar onSearch={onSearch} onClear={vi.fn()} />);
    
    const input = screen.getByPlaceholderText(/buscar cliente/i);
    const button = screen.getByRole("button", { name: /buscar/i });
    
    // Digitar menos de 3 caracteres
    await user.type(input, "Jo");
    await user.click(button);
    
    // Deve mostrar erro
    expect(screen.getByText(/digite pelo menos 3 caracteres/i)).toBeInTheDocument();
    expect(onSearch).not.toHaveBeenCalled();
    
    // Digitar 3 ou mais
    await user.clear(input);
    await user.type(input, "João");
    await user.click(button);
    
    expect(onSearch).toHaveBeenCalledWith("João");
  });

  it("AC-4.8: deve implementar debounce de 300ms", () => {
    vi.useFakeTimers();
    const onSearch = vi.fn();
    
    render(<SearchBar onSearch={onSearch} onClear={vi.fn()} debounce={true} />);
    
    const input = screen.getByPlaceholderText(/buscar cliente/i);
    
    // Simular digitação com fireEvent (síncrono)
    fireEvent.change(input, { target: { value: "João Silva" } });
    
    // Não deve ter chamado ainda
    expect(onSearch).not.toHaveBeenCalled();
    
    // Avançar 299ms (ainda não deve chamar)
    vi.advanceTimersByTime(299);
    expect(onSearch).not.toHaveBeenCalled();
    
    // Avançar mais 1ms (total 300ms)
    vi.advanceTimersByTime(1);
    
    // Agora deve ter chamado
    expect(onSearch).toHaveBeenCalledWith("João Silva");
    
    vi.useRealTimers();
  });

  it("AC-4.4: botão limpar deve resetar input e chamar onClear", async () => {
    const onClear = vi.fn();
    const user = userEvent.setup();
    
    render(<SearchBar onSearch={vi.fn()} onClear={onClear} debounce={false} />);
    
    const input = screen.getByPlaceholderText(/buscar cliente/i) as HTMLInputElement;
    const clearButton = screen.getByRole("button", { name: /limpar/i });
    
    // Digitar algo
    await user.type(input, "teste");
    expect(input.value).toBe("teste");
    
    // Clicar em limpar
    await user.click(clearButton);
    
    expect(input.value).toBe("");
    expect(onClear).toHaveBeenCalled();
  });
});
