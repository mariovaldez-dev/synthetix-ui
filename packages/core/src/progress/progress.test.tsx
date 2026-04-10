import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Progress } from "./progress";

describe("Progress", () => {
  it("renders correctly", () => {
    const { container } = render(<Progress value={60} />);
    expect(container.firstChild).toBeTruthy();
  });
  it("renders with 0 value", () => {
    const { container } = render(<Progress value={0} />);
    expect(container.firstChild).toBeTruthy();
  });
});
