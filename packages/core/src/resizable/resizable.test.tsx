import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "./resizable";

describe("Resizable", () => {
  it("is defined", () => {
    expect(ResizablePanelGroup).toBeDefined();
    expect(ResizablePanel).toBeDefined();
    expect(ResizableHandle).toBeDefined();
  });
});

