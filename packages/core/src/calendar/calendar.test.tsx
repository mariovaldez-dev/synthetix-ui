import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Calendar } from "./calendar";

describe("Calendar", () => {
  it("renders correctly", () => {
    const { container } = render(<Calendar />);
    expect(container.firstChild).toBeTruthy();
  });
});
