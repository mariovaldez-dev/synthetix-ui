import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { Spinner } from "./spinner";

describe("Spinner", () => {
  it("renderiza con role=status", () => {
    render(<Spinner />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("usa la etiqueta por defecto", () => {
    render(<Spinner />);
    expect(screen.getByRole("status")).toHaveAccessibleName("Cargando...");
  });

  it("acepta una etiqueta personalizada", () => {
    render(<Spinner label="Procesando pago..." />);
    expect(screen.getByRole("status")).toHaveAccessibleName("Procesando pago...");
  });

  it("aplica tamaño sm", () => {
    render(<Spinner size="sm" />);
    const inner = screen.getByRole("status").firstChild as HTMLElement;
    expect(inner).toHaveClass("h-4", "w-4");
  });

  it("aplica tamaño lg", () => {
    render(<Spinner size="lg" />);
    const inner = screen.getByRole("status").firstChild as HTMLElement;
    expect(inner).toHaveClass("h-8", "w-8");
  });

  it("aplica color danger", () => {
    render(<Spinner color="danger" />);
    const inner = screen.getByRole("status").firstChild as HTMLElement;
    expect(inner).toHaveClass("text-destructive");
  });

  it("aplica color white", () => {
    render(<Spinner color="white" />);
    const inner = screen.getByRole("status").firstChild as HTMLElement;
    expect(inner).toHaveClass("text-white");
  });

  it("tiene la clase animate-spin", () => {
    render(<Spinner />);
    const inner = screen.getByRole("status").firstChild as HTMLElement;
    expect(inner).toHaveClass("animate-spin");
  });
});
