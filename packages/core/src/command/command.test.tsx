import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Command, CommandInput, CommandList, CommandEmpty } from "./command";

describe("Command", () => {
  it("renders correctly", () => {
    const { getByPlaceholderText } = render(
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
        </CommandList>
      </Command>
    );
    expect(getByPlaceholderText("Type a command or search...")).toBeTruthy();
  });
});
