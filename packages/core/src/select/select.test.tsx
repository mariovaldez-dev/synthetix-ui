import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Select, SelectTrigger, SelectValue } from "./select";

describe("Select", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
      </Select>
    );
    expect(getByText("Theme")).toBeTruthy();
  });
});
