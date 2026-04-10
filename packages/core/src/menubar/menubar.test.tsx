import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from "./menubar";

describe("Menubar", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
    expect(getByText("File")).toBeTruthy();
  });
});
