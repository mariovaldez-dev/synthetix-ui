import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Drawer, DrawerTrigger, DrawerContent } from "./drawer";

describe("Drawer", () => {
  it("renders trigger correctly", () => {
    const { getByText } = render(
      <Drawer>
        <DrawerTrigger>Open Drawer</DrawerTrigger>
      </Drawer>
    );
    expect(getByText("Open Drawer")).toBeTruthy();
  });
});
