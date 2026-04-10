import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Toggle } from "./toggle";

describe("Toggle", () => {
  it("renders trigger correctly", () => {
    const { getByText } = render(<Toggle>Toggle me</Toggle>);
    expect(getByText("Toggle me")).toBeTruthy();
  });
});
