import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { SonnerToaster } from "./sonner";

import { vi } from "vitest";

// Mock next-themes hook and Sonner since this uses the client hook
vi.mock("next-themes", () => ({ useTheme: () => ({ theme: "light" }) }));
vi.mock("sonner", () => ({ Toaster: () => <div data-testid="sonner-toaster"></div> }));

describe("SonnerToaster", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<SonnerToaster />);
    expect(getByTestId("sonner-toaster")).toBeTruthy();
  });
});
