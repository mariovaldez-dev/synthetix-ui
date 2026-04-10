import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from "./context-menu";

describe("ContextMenu", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <ContextMenu>
        <ContextMenuTrigger>Right click me</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Item 1</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    );
    expect(getByText("Right click me")).toBeTruthy();
  });
});
