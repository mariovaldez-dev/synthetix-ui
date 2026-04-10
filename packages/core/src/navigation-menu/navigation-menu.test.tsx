import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "./navigation-menu";

describe("NavigationMenu", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/">Home</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    expect(getByText("Home")).toBeTruthy();
  });
});
