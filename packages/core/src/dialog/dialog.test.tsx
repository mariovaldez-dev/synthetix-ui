import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Dialog, DialogHeader, DialogBody, DialogFooter } from "./dialog";

function TestDialog({ isOpen = true, onClose = vi.fn() }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} aria-labelledby="title">
      <DialogHeader onClose={onClose}>
        <h2 id="title">Confirmar acción</h2>
      </DialogHeader>
      <DialogBody>¿Estás seguro de continuar?</DialogBody>
      <DialogFooter>
        <button onClick={onClose}>Cancelar</button>
        <button>Confirmar</button>
      </DialogFooter>
    </Dialog>
  );
}

describe("Dialog", () => {
  it("no renderiza nada cuando isOpen=false", () => {
    render(<TestDialog isOpen={false} />);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renderiza el dialog cuando isOpen=true", () => {
    render(<TestDialog />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("tiene aria-modal=true", () => {
    render(<TestDialog />);
    expect(screen.getByRole("dialog")).toHaveAttribute("aria-modal", "true");
  });

  it("muestra el contenido de los subcomponentes", () => {
    render(<TestDialog />);
    expect(screen.getByText("Confirmar acción")).toBeInTheDocument();
    expect(screen.getByText("¿Estás seguro de continuar?")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Cancelar" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Confirmar" })).toBeInTheDocument();
  });

  it("llama a onClose al presionar Escape", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<TestDialog onClose={onClose} />);
    await user.keyboard("{Escape}");
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("llama a onClose al hacer clic en el backdrop", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<TestDialog onClose={onClose} />);
    // El backdrop es el div con aria-hidden inmediatamente antes del panel
    const backdrop = document.querySelector("[aria-hidden='true']") as HTMLElement;
    await user.click(backdrop);
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("llama a onClose al hacer clic en el botón X", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<TestDialog onClose={onClose} />);
    await user.click(screen.getByRole("button", { name: "Cerrar" }));
    expect(onClose).toHaveBeenCalledOnce();
  });
});
