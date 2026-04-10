import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./dropdown-menu";

describe("DropdownMenu", () => {
  it("renders trigger correctly", () => {
    const { getByText } = render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    expect(getByText("Open")).toBeTruthy();
  });
});
