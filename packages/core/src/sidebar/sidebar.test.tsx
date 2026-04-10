import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { SidebarProvider, Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "./sidebar";

describe("Sidebar", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <SidebarProvider>
        <Sidebar>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>Dashboard</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>
    );
    expect(getByText("Dashboard")).toBeTruthy();
  });
});
