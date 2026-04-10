import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Checkbox } from "./checkbox";

describe("Checkbox", () => {
  it("renderiza el checkbox", () => {
    render(<Checkbox />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("muestra el label y lo asocia al checkbox", () => {
    render(<Checkbox label="Acepto los términos" />);
    expect(screen.getByRole("checkbox")).toHaveAccessibleName("Acepto los términos");
  });

  it("empieza desmarcado por defecto", () => {
    render(<Checkbox label="Check" />);
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  it("empieza marcado con defaultChecked", () => {
    render(<Checkbox label="Check" defaultChecked />);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("permite marcar y desmarcar", async () => {
    const user = userEvent.setup();
    render(<Checkbox label="Check" />);
    const cb = screen.getByRole("checkbox");
    await user.click(cb);
    expect(cb).toBeChecked();
    await user.click(cb);
    expect(cb).not.toBeChecked();
  });

  it("queda deshabilitado", () => {
    render(<Checkbox label="Check" disabled />);
    expect(screen.getByRole("checkbox")).toBeDisabled();
  });

  it("muestra errorText y aplica aria-invalid", () => {
    render(<Checkbox label="Check" errorText="Debes aceptar" />);
    expect(screen.getByRole("alert")).toHaveTextContent("Debes aceptar");
    expect(screen.getByRole("checkbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("muestra helperText cuando no hay error", () => {
    render(<Checkbox label="Check" helperText="Texto de ayuda" />);
    expect(screen.getByText("Texto de ayuda")).toBeInTheDocument();
  });

  it("aplica estado indeterminate en el DOM", () => {
    render(<Checkbox label="Seleccionar todo" indeterminate />);
    const cb = screen.getByRole("checkbox") as HTMLInputElement;
    expect(cb.indeterminate).toBe(true);
  });
});
