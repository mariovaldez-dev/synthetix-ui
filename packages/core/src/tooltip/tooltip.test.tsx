import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import { Tooltip, TooltipProvider } from "./tooltip";

beforeEach(() => {
  // Radix UI Tooltip depends on ResizeObserver in some environments
  global.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }));
});

describe("Tooltip", () => {
  it("no muestra el tooltip inicialmente", () => {
    render(
      <TooltipProvider>
        <Tooltip content="Información útil">
          <button>Hover me</button>
        </Tooltip>
      </TooltipProvider>,
    );
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });

  it("muestra el tooltip al hacer hover", async () => {
    render(
      <TooltipProvider>
        <Tooltip content="Información útil" delayMs={0}>
          <button>Hover me</button>
        </Tooltip>
      </TooltipProvider>,
    );
    
    const trigger = screen.getByRole("button");
    fireEvent.mouseEnter(trigger);
    
    // We use findByRole which is async and uses internal waiting
    const tooltip = await screen.findByRole("tooltip", {}, { timeout: 2000 });
    expect(tooltip).toHaveTextContent("Información útil");
  });

  it("oculta el tooltip al quitar el hover", async () => {
    render(
      <TooltipProvider>
        <Tooltip content="Información útil" delayMs={0}>
          <button>Hover me</button>
        </Tooltip>
      </TooltipProvider>,
    );
    
    const trigger = screen.getByRole("button");
    fireEvent.mouseEnter(trigger);
    
    const tooltip = await screen.findByRole("tooltip");
    expect(tooltip).toBeInTheDocument();
    
    fireEvent.mouseLeave(trigger);
    
    await waitFor(() => {
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    }, { timeout: 2000 });
  });

  it("muestra el tooltip al recibir foco", async () => {
    render(
      <TooltipProvider>
        <Tooltip content="Foco info" delayMs={0}>
          <button>Focus me</button>
        </Tooltip>
      </TooltipProvider>,
    );
    
    const trigger = screen.getByRole("button");
    fireEvent.focus(trigger);
    
    const tooltip = await screen.findByRole("tooltip");
    expect(tooltip).toBeInTheDocument();
  });
});
