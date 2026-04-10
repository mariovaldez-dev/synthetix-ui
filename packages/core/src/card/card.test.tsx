import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { Card, CardHeader, CardBody, CardFooter } from "./card";

describe("Card", () => {
  it("renderiza children", () => {
    render(<Card>Contenido</Card>);
    expect(screen.getByText("Contenido")).toBeInTheDocument();
  });

  it("incluye clase de padding por defecto", () => {
    const { container } = render(<Card>x</Card>);
    expect(container.firstChild).toHaveClass("p-5");
  });

  it("elimina padding con noPadding", () => {
    const { container } = render(<Card noPadding>x</Card>);
    expect(container.firstChild).not.toHaveClass("p-5");
  });

  it("acepta className adicional", () => {
    const { container } = render(<Card className="custom-class">x</Card>);
    expect(container.firstChild).toHaveClass("custom-class");
  });
});

describe("CardHeader", () => {
  it("renderiza children", () => {
    render(<CardHeader>Título</CardHeader>);
    expect(screen.getByText("Título")).toBeInTheDocument();
  });
});

describe("CardBody", () => {
  it("renderiza children", () => {
    render(<CardBody>Cuerpo</CardBody>);
    expect(screen.getByText("Cuerpo")).toBeInTheDocument();
  });
});

describe("CardFooter", () => {
  it("renderiza children", () => {
    render(<CardFooter>Footer</CardFooter>);
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });
});

describe("Card composición completa", () => {
  it("renderiza los cuatro subcomponentes juntos", () => {
    render(
      <Card>
        <CardHeader>Mi título</CardHeader>
        <CardBody>Descripción del contenido.</CardBody>
        <CardFooter>
          <button>Aceptar</button>
        </CardFooter>
      </Card>,
    );
    expect(screen.getByText("Mi título")).toBeInTheDocument();
    expect(screen.getByText("Descripción del contenido.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Aceptar" })).toBeInTheDocument();
  });
});
