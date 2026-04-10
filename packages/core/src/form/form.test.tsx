import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "./form";

describe("Form", () => {
  it("exports properly", () => {
    expect(Form).toBeTruthy();
    expect(FormItem).toBeTruthy();
    expect(FormLabel).toBeTruthy();
    expect(FormControl).toBeTruthy();
    expect(FormDescription).toBeTruthy();
    expect(FormMessage).toBeTruthy();
  });
});
