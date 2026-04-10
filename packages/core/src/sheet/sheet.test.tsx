import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "./sheet";

describe("Sheet", () => {
  it("renders trigger correctly", () => {
    const { getByText } = render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent>
          <SheetTitle>Menu</SheetTitle>
        </SheetContent>
      </Sheet>
    );
    expect(getByText("Open Sheet")).toBeTruthy();
  });
});
