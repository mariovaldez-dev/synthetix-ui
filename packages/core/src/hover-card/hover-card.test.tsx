import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./hover-card";

describe("HoverCard", () => {
  it("renders trigger correctly", () => {
    const { getByText } = render(
      <HoverCard>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
        <HoverCardContent>Info</HoverCardContent>
      </HoverCard>
    );
    expect(getByText("Hover me")).toBeTruthy();
  });
});
