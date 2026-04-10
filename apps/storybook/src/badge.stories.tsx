import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@synthetix-ui/core";

const meta = {
  title: "Core/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "success", "warning", "danger", "outline"],
    },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { children: "Default" } };
export const Primary: Story = { args: { children: "Nuevo", variant: "primary" } };
export const Success: Story = { args: { children: "Activo", variant: "success" } };
export const Warning: Story = { args: { children: "Pendiente", variant: "warning" } };
export const Danger: Story = { args: { children: "Error", variant: "danger" } };
export const Outline: Story = { args: { children: "Outline", variant: "outline" } };

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};
