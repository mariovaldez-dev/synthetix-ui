import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Alert, AlertTitle, AlertDescription } from "./alert";

describe("Alert", () => {
  it("renders correctly", () => {
    const { container } = render(
      <Alert>
        <AlertTitle>Warning!</AlertTitle>
        <AlertDescription>Be careful here.</AlertDescription>
      </Alert>
    );
    expect(screen.getByText("Warning!")).toBeTruthy();
    expect(screen.getByText("Be careful here.")).toBeTruthy();
  });
});
