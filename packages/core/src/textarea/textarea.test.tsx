import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Textarea } from "./textarea";

describe("Textarea", () => {
  it("renderiza el textarea", () => {
    render(<Textarea />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("muestra el label asociado", () => {
    render(<Textarea label="Descripción" />);
    expect(screen.getByRole("textbox")).toHaveAccessibleName("Descripción");
  });

  it("muestra helperText cuando no hay error", () => {
    render(<Textarea helperText="Máximo 500 caracteres" />);
    expect(screen.getByText("Máximo 500 caracteres")).toBeInTheDocument();
  });

  it("muestra errorText y aplica aria-invalid", () => {
    render(<Textarea errorText="Campo requerido" />);
    expect(screen.getByRole("alert")).toHaveTextContent("Campo requerido");
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("oculta helperText cuando hay error", () => {
    render(<Textarea helperText="Ayuda" errorText="Error" />);
    expect(screen.queryByText("Ayuda")).not.toBeInTheDocument();
  });

  it("queda deshabilitado", () => {
    render(<Textarea disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("acepta input del usuario", async () => {
    const user = userEvent.setup();
    render(<Textarea />);
    await user.type(screen.getByRole("textbox"), "Hola mundo");
    expect(screen.getByRole("textbox")).toHaveValue("Hola mundo");
  });

  it("muestra contador cuando showCount y maxLength están definidos", () => {
    render(<Textarea showCount maxLength={100} defaultValue="Hola" />);
    expect(screen.getByText("4/100")).toBeInTheDocument();
  });

  it("actualiza el contador al escribir", async () => {
    const user = userEvent.setup();
    render(<Textarea showCount maxLength={50} />);
    expect(screen.getByText("0/50")).toBeInTheDocument();
    await user.type(screen.getByRole("textbox"), "abc");
    expect(screen.getByText("3/50")).toBeInTheDocument();
  });

  it("respeta maxLength en el DOM", () => {
    render(<Textarea maxLength={20} />);
    expect(screen.getByRole("textbox")).toHaveAttribute("maxlength", "20");
  });
});
