import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Input } from "./input";

describe("Input", () => {
  it("renderiza el input correctamente", () => {
    render(<Input placeholder="Escribe algo" />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("muestra el label y lo asocia al input", () => {
    render(<Input label="Nombre" />);
    const label = screen.getByText("Nombre");
    const input = screen.getByRole("textbox");
    expect(label).toBeInTheDocument();
    expect(input).toHaveAccessibleName("Nombre");
  });

  it("muestra helperText cuando no hay error", () => {
    render(<Input helperText="Mínimo 3 caracteres" />);
    expect(screen.getByText("Mínimo 3 caracteres")).toBeInTheDocument();
  });

  it("muestra errorText y aplica aria-invalid", () => {
    render(<Input errorText="Campo requerido" />);
    const input = screen.getByRole("textbox");
    expect(screen.getByRole("alert")).toHaveTextContent("Campo requerido");
    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  it("oculta helperText cuando hay error", () => {
    render(<Input helperText="Ayuda" errorText="Error" />);
    expect(screen.queryByText("Ayuda")).not.toBeInTheDocument();
    expect(screen.getByText("Error")).toBeInTheDocument();
  });

  it("el input queda deshabilitado", () => {
    render(<Input disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("acepta input del usuario", async () => {
    const user = userEvent.setup();
    render(<Input />);
    const input = screen.getByRole("textbox");
    await user.type(input, "Hola");
    expect(input).toHaveValue("Hola");
  });

  it("renderiza leftElement y rightElement", () => {
    render(
      <Input
        leftElement={<span data-testid="left">$</span>}
        rightElement={<span data-testid="right">USD</span>}
      />,
    );
    expect(screen.getByTestId("left")).toBeInTheDocument();
    expect(screen.getByTestId("right")).toBeInTheDocument();
  });
});
