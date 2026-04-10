import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Accordion } from "./accordion";

const items = [
  { id: "q1", trigger: "¿Qué es chassis-ui?", content: "Una librería de componentes." },
  { id: "q2", trigger: "¿Cómo se instala?", content: "Con npx @chassis-ui add <component>." },
  { id: "q3", trigger: "¿Es gratis?", content: "Sí, es open source.", disabled: true },
];

describe("Accordion", () => {
  it("renderiza todos los triggers", () => {
    render(<Accordion items={items} />);
    expect(screen.getByRole("button", { name: "¿Qué es chassis-ui?" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "¿Cómo se instala?" })).toBeInTheDocument();
  });

  it("todos los paneles cerrados por defecto", () => {
    render(<Accordion items={items} />);
    expect(screen.getByRole("button", { name: "¿Qué es chassis-ui?" })).toHaveAttribute(
      "aria-expanded", "false",
    );
  });

  it("abre el panel al hacer clic en el trigger", async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} />);
    await user.click(screen.getByRole("button", { name: "¿Qué es chassis-ui?" }));
    expect(screen.getByRole("button", { name: "¿Qué es chassis-ui?" })).toHaveAttribute(
      "aria-expanded", "true",
    );
    expect(screen.getByText("Una librería de componentes.")).toBeVisible();
  });

  it("cierra el panel al hacer clic de nuevo", async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} />);
    await user.click(screen.getByRole("button", { name: "¿Qué es chassis-ui?" }));
    await user.click(screen.getByRole("button", { name: "¿Qué es chassis-ui?" }));
    expect(screen.getByRole("button", { name: "¿Qué es chassis-ui?" })).toHaveAttribute(
      "aria-expanded", "false",
    );
  });

  it("en modo single, cierra el anterior al abrir uno nuevo", async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} />);
    await user.click(screen.getByRole("button", { name: "¿Qué es chassis-ui?" }));
    await user.click(screen.getByRole("button", { name: "¿Cómo se instala?" }));
    expect(screen.getByRole("button", { name: "¿Qué es chassis-ui?" })).toHaveAttribute("aria-expanded", "false");
    expect(screen.getByRole("button", { name: "¿Cómo se instala?" })).toHaveAttribute("aria-expanded", "true");
  });

  it("en modo multiple, mantiene abiertos varios a la vez", async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} multiple />);
    await user.click(screen.getByRole("button", { name: "¿Qué es chassis-ui?" }));
    await user.click(screen.getByRole("button", { name: "¿Cómo se instala?" }));
    expect(screen.getByRole("button", { name: "¿Qué es chassis-ui?" })).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("button", { name: "¿Cómo se instala?" })).toHaveAttribute("aria-expanded", "true");
  });

  it("respeta defaultOpen", () => {
    render(<Accordion items={items} defaultOpen={["q2"]} />);
    expect(screen.getByRole("button", { name: "¿Cómo se instala?" })).toHaveAttribute("aria-expanded", "true");
  });

  it("el item deshabilitado no se puede abrir", async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} />);
    await user.click(screen.getByRole("button", { name: "¿Es gratis?" }));
    expect(screen.getByRole("button", { name: "¿Es gratis?" })).toHaveAttribute("aria-expanded", "false");
  });
});
