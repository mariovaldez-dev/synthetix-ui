import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, Button } from "@chassis-ui/core";

const meta = {
  title: "Core/Tooltip",
  parameters: { layout: "centered" },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Top: Story = {
  render: () => (
    <Tooltip content="Tooltip arriba" side="top" delayMs={0}>
      <Button variant="outline">Hover (top)</Button>
    </Tooltip>
  ),
};

export const Bottom: Story = {
  render: () => (
    <Tooltip content="Tooltip abajo" side="bottom" delayMs={0}>
      <Button variant="outline">Hover (bottom)</Button>
    </Tooltip>
  ),
};

export const Left: Story = {
  render: () => (
    <Tooltip content="Tooltip izquierda" side="left" delayMs={0}>
      <Button variant="outline">Hover (left)</Button>
    </Tooltip>
  ),
};

export const Right: Story = {
  render: () => (
    <Tooltip content="Tooltip derecha" side="right" delayMs={0}>
      <Button variant="outline">Hover (right)</Button>
    </Tooltip>
  ),
};

export const AllSides: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8">
      {(["top", "bottom", "left", "right"] as const).map((side) => (
        <Tooltip key={side} content={`Tooltip ${side}`} side={side} delayMs={0}>
          <Button variant="outline" size="sm">{side}</Button>
        </Tooltip>
      ))}
    </div>
  ),
};
