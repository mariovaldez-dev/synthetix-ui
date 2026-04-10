import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { AspectRatio } from "./aspect-ratio";

describe("AspectRatio", () => {
  it("renders correctly", () => {
    const { container } = render(
      <AspectRatio ratio={16 / 9}>Content</AspectRatio>
    );
    expect(container.firstChild).toBeTruthy();
  });
});
