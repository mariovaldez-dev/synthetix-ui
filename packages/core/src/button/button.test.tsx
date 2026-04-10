import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "./button";

describe("Button", () => {
  it("renderiza el texto correctamente", () => {
    render(<Button>Guardar</Button>);
    expect(screen.getByRole("button", { name: "Guardar" })).toBeInTheDocument();
  });

  it("aplica la variante primary por defecto", () => {
    render(<Button>Default</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-muted");
  });

  it("aplica la variante danger", () => {
    render(<Button variant="danger">Eliminar</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-destructive");
  });

  it("deshabilita el botón cuando disabled=true", () => {
    render(<Button disabled>Bloqueado</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("deshabilita el botón y muestra aria-busy cuando isLoading=true", () => {
    render(<Button isLoading>Cargando</Button>);
    const btn = screen.getByRole("button");
    expect(btn).toBeDisabled();
    expect(btn).toHaveAttribute("aria-busy", "true");
  });

  it("llama a onClick al hacer clic", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click</Button>);
    await user.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("no llama a onClick cuando está deshabilitado", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button disabled onClick={onClick}>Click</Button>);
    await user.click(screen.getByRole("button"));
    expect(onClick).not.toHaveBeenCalled();
  });
});
