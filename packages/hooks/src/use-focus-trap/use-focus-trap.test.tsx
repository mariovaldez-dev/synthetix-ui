import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { useFocusTrap } from "./use-focus-trap";

function Trap({ active }: { active: boolean }) {
  const ref = useFocusTrap<HTMLDivElement>(active);
  return (
    <div ref={ref}>
      <button>Primero</button>
      <button>Segundo</button>
      <button>Tercero</button>
    </div>
  );
}

describe("useFocusTrap", () => {
  it("mueve el foco al primer elemento cuando se activa", () => {
    render(<Trap active={true} />);
    expect(screen.getByRole("button", { name: "Primero" })).toHaveFocus();
  });

  it("no mueve el foco cuando está inactivo", () => {
    render(<Trap active={false} />);
    expect(document.body).toHaveFocus();
  });

  it("avanza el foco con Tab entre elementos", async () => {
    const user = userEvent.setup();
    render(<Trap active={true} />);
    expect(screen.getByRole("button", { name: "Primero" })).toHaveFocus();
    await user.tab();
    expect(screen.getByRole("button", { name: "Segundo" })).toHaveFocus();
    await user.tab();
    expect(screen.getByRole("button", { name: "Tercero" })).toHaveFocus();
  });

  it("vuelve al primer elemento al hacer Tab desde el último", async () => {
    const user = userEvent.setup();
    render(<Trap active={true} />);
    screen.getByRole("button", { name: "Tercero" }).focus();
    await user.tab();
    expect(screen.getByRole("button", { name: "Primero" })).toHaveFocus();
  });

  it("vuelve al último elemento al hacer Shift+Tab desde el primero", async () => {
    const user = userEvent.setup();
    render(<Trap active={true} />);
    screen.getByRole("button", { name: "Primero" }).focus();
    await user.tab({ shift: true });
    expect(screen.getByRole("button", { name: "Tercero" })).toHaveFocus();
  });
});
