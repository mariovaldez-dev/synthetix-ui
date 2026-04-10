import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";

describe("Tabs", () => {
  it("renders trigger correctly", () => {
    const { getByText } = render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
      </Tabs>
    );
    expect(getByText("Tab 1")).toBeTruthy();
    expect(getByText("Content 1")).toBeTruthy();
  });
});
