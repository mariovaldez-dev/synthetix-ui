import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Skeleton } from "./skeleton";

describe("Skeleton", () => {
  it("renders correctly", () => {
    const { container } = render(<Skeleton className="w-[100px] h-[20px] rounded-full" />);
    expect(container.firstChild).toBeTruthy();
  });
  it("applies custom className", () => {
    const { container } = render(<Skeleton className="w-64 h-4" />);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain("w-64");
  });
});
