import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { RadioGroup, RadioGroupItem } from "./radio-group";

describe("RadioGroup", () => {
  it("renders correctly", () => {
    const { getByRole } = render(
      <RadioGroup>
        <RadioGroupItem value="1" />
      </RadioGroup>
    );
    expect(getByRole("radio")).toBeTruthy();
  });
});
