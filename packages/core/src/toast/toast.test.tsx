import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Toaster } from "./toaster";
import { useToast } from "./use-toast";
import { toastStore } from "./toast-store";

function Setup() {
  const { toast, dismiss, clear } = useToast();
  return (
    <>
      <Toaster />
      <button onClick={() => toast({ title: "Guardado", variant: "success" })}>
        Mostrar éxito
      </button>
      <button onClick={() => toast({ title: "Error crítico", variant: "danger", description: "Detalle del error" })}>
        Mostrar error
      </button>
      <button onClick={() => toast({ title: "Persistente", duration: 0 })}>
        Persistente
      </button>
      <button onClick={() => dismiss(toastStore.getToasts()[0]?.id ?? "")}>
        Cerrar primero
      </button>
      <button onClick={() => clear()}>Limpiar todo</button>
    </>
  );
}

beforeEach(() => {
  toastStore.clear();
});

describe("Toast / useToast", () => {
  it("muestra un toast al llamar a toast()", async () => {
    const user = userEvent.setup();
    render(<Setup />);
    await user.click(screen.getByRole("button", { name: "Mostrar éxito" }));
    expect(screen.getByText("Guardado")).toBeInTheDocument();
  });

  it("muestra el título y la descripción", async () => {
    const user = userEvent.setup();
    render(<Setup />);
    await user.click(screen.getByRole("button", { name: "Mostrar error" }));
    expect(screen.getByText("Error crítico")).toBeInTheDocument();
    expect(screen.getByText("Detalle del error")).toBeInTheDocument();
  });

  it("cierra el toast al hacer clic en X", async () => {
    const user = userEvent.setup();
    render(<Setup />);
    await user.click(screen.getByRole("button", { name: "Mostrar éxito" }));
    await user.click(screen.getByRole("button", { name: "Cerrar notificación" }));
    expect(screen.queryByText("Guardado")).not.toBeInTheDocument();
  });

  it("cierra el toast con dismiss()", async () => {
    const user = userEvent.setup();
    render(<Setup />);
    await user.click(screen.getByRole("button", { name: "Mostrar éxito" }));
    await user.click(screen.getByRole("button", { name: "Cerrar primero" }));
    expect(screen.queryByText("Guardado")).not.toBeInTheDocument();
  });

  it("elimina todos los toasts con clear()", async () => {
    const user = userEvent.setup();
    render(<Setup />);
    await user.click(screen.getByRole("button", { name: "Mostrar éxito" }));
    await user.click(screen.getByRole("button", { name: "Mostrar error" }));
    await user.click(screen.getByRole("button", { name: "Limpiar todo" }));
    expect(screen.queryAllByRole("status")).toHaveLength(0);
  });

  it("no cierra automáticamente cuando duration=0", () => {
    vi.useFakeTimers();
    render(<Setup />);
    act(() => { toastStore.add({ title: "Sin expiración", duration: 0 }); });
    act(() => { vi.advanceTimersByTime(10000); });
    expect(screen.getByRole("status")).toBeInTheDocument();
    vi.useRealTimers();
  });

  it("se cierra automáticamente tras la duración", () => {
    vi.useFakeTimers();
    render(<Setup />);
    act(() => { toastStore.add({ title: "Auto-close", duration: 2000 }); });
    expect(screen.getByText("Auto-close")).toBeInTheDocument();
    act(() => { vi.advanceTimersByTime(2001); });
    expect(screen.queryByText("Auto-close")).not.toBeInTheDocument();
    vi.useRealTimers();
  });
});
