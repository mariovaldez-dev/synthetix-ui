import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { ScrollArea } from "./scroll-area";

describe("ScrollArea", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <ScrollArea className="h-[200px] w-[350px]">
        <div>Content</div>
      </ScrollArea>
    );
    expect(getByText("Content")).toBeTruthy();
  });
});
