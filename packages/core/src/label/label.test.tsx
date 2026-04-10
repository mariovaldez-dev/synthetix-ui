import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Label } from "./label";

describe("Label", () => {
  it("renders the label content", () => {
    render(<Label>Test Label</Label>);
    const label = screen.getByText("Test Label");
    expect(label).toBeTruthy();
  });

  it("applies custom class names", () => {
    render(<Label className="custom-class">Test Label</Label>);
    const label = screen.getByText("Test Label");
    expect(label.className).toContain("custom-class");
  });
});
