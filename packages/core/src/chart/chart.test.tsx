import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { ChartContainer, BarChart, Bar, XAxis, YAxis } from "./chart";

const config = {
  desktop: { label: "Desktop", color: "hsl(var(--chart-1))" },
};
const data = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
];

describe("Chart", () => {
  it("renders ChartContainer correctly", () => {
    const { container } = render(
      <ChartContainer config={config} className="h-[200px]">
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Bar dataKey="desktop" fill="var(--color-desktop)" />
        </BarChart>
      </ChartContainer>
    );
    expect(container.firstChild).toBeTruthy();
  });
});
