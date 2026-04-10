import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";

import { useDisclosure } from "./use-disclosure";

describe("useDisclosure", () => {
  it("inicia cerrado por defecto", () => {
    const { result } = renderHook(() => useDisclosure());
    expect(result.current.isOpen).toBe(false);
  });

  it("respeta el estado inicial", () => {
    const { result } = renderHook(() => useDisclosure(true));
    expect(result.current.isOpen).toBe(true);
  });

  it("open() abre el disclosure", () => {
    const { result } = renderHook(() => useDisclosure());
    act(() => result.current.open());
    expect(result.current.isOpen).toBe(true);
  });

  it("close() cierra el disclosure", () => {
    const { result } = renderHook(() => useDisclosure(true));
    act(() => result.current.close());
    expect(result.current.isOpen).toBe(false);
  });

  it("toggle() alterna el estado", () => {
    const { result } = renderHook(() => useDisclosure());
    act(() => result.current.toggle());
    expect(result.current.isOpen).toBe(true);
    act(() => result.current.toggle());
    expect(result.current.isOpen).toBe(false);
  });

  it("las funciones son estables entre renders", () => {
    const { result, rerender } = renderHook(() => useDisclosure());
    const { open, close, toggle } = result.current;
    rerender();
    expect(result.current.open).toBe(open);
    expect(result.current.close).toBe(close);
    expect(result.current.toggle).toBe(toggle);
  });
});
