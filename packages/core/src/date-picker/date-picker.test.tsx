import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { DatePicker } from "./date-picker";

describe("DatePicker", () => {
  it("renders with placeholder", () => {
    const { getByText } = render(<DatePicker placeholder="Select date" />);
    expect(getByText("Select date")).toBeTruthy();
  });
});
