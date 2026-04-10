import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Separator } from "./separator";

describe("Separator", () => {
  it("renders an element", () => {
    const { container } = render(<Separator />);
    expect(container.firstChild).toBeTruthy();
  });

  it("applies horizontal orientation by default", () => {
    const { container } = render(<Separator />);
    const separator = container.firstChild as HTMLElement;
    expect(separator.className).toContain("h-[1px]");
    expect(separator.className).toContain("w-full");
  });

  it("applies vertical orientation", () => {
    const { container } = render(<Separator orientation="vertical" />);
    const separator = container.firstChild as HTMLElement;
    expect(separator.className).toContain("h-full");
    expect(separator.className).toContain("w-[1px]");
  });
});
