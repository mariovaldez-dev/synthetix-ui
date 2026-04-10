import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";

describe("Avatar", () => {
  it("renders fallback correctly", () => {
    const { getByText } = render(
      <Avatar>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    );
    expect(getByText("CN")).toBeTruthy();
  });
  it("renders image correctly", () => {
    const { container } = render(
      <Avatar>
        <AvatarImage src="https://example.com/avatar.jpg" alt="Avatar" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    );
    expect(container.firstChild).toBeTruthy();
  });
});
