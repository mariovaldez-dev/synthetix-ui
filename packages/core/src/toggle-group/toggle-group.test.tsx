import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

describe("ToggleGroup", () => {
  it("renders trigger correctly", () => {
    const { getByText } = render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
      </ToggleGroup>
    );
    expect(getByText("A")).toBeTruthy();
  });
});
