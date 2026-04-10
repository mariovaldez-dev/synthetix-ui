import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@synthetix-ui/core";

const meta = {
  title: "Core/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "danger"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "icon"],
    },
    isLoading: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Guardar cambios",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Cancelar",
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    children: "Ver detalles",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    children: "Más opciones",
    variant: "ghost",
  },
};

export const Danger: Story = {
  args: {
    children: "Eliminar",
    variant: "danger",
  },
};

export const Loading: Story = {
  args: {
    children: "Guardando...",
    variant: "primary",
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "No disponible",
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    children: "Pequeño",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Grande",
    size: "lg",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};
