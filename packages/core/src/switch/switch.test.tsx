import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Switch } from "./switch";

describe("Switch", () => {
  it("renders correctly", () => {
    const { getByRole } = render(<Switch />);
    expect(getByRole("switch")).toBeTruthy();
  });
});
