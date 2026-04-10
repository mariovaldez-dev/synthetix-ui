import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { Badge } from "./badge";

describe("Badge", () => {
  it("renderiza el texto", () => {
    render(<Badge>Nuevo</Badge>);
    expect(screen.getByText("Nuevo")).toBeInTheDocument();
  });

  it("aplica variante default por defecto", () => {
    render(<Badge>Default</Badge>);
    expect(screen.getByText("Default")).toHaveClass("bg-muted");
  });

  it("aplica variante primary", () => {
    render(<Badge variant="primary">Primary</Badge>);
    expect(screen.getByText("Primary")).toHaveClass("bg-secondary");
  });

  it("aplica variante success", () => {
    render(<Badge variant="success">Activo</Badge>);
    expect(screen.getByText("Activo")).toHaveClass("bg-success/10");
  });

  it("aplica variante danger", () => {
    render(<Badge variant="danger">Error</Badge>);
    expect(screen.getByText("Error")).toHaveClass("bg-destructive/10");
  });

  it("aplica variante warning", () => {
    render(<Badge variant="warning">Pendiente</Badge>);
    expect(screen.getByText("Pendiente")).toHaveClass("bg-warning/10");
  });

  it("aplica variante outline", () => {
    render(<Badge variant="outline">Outline</Badge>);
    expect(screen.getByText("Outline")).toHaveClass("border");
  });

  it("aplica tamaño sm", () => {
    render(<Badge size="sm">Sm</Badge>);
    expect(screen.getByText("Sm")).toHaveClass("text-xs", "px-2");
  });

  it("aplica tamaño lg", () => {
    render(<Badge size="lg">Lg</Badge>);
    expect(screen.getByText("Lg")).toHaveClass("text-sm", "px-3");
  });

  it("acepta className adicional", () => {
    render(<Badge className="custom">Custom</Badge>);
    expect(screen.getByText("Custom")).toHaveClass("custom");
  });
});
