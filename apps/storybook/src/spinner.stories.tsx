import type { Meta, StoryObj } from "@storybook/react";
import { Spinner, Button } from "@chassis-ui/core";

const meta = {
  title: "Core/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl"] },
    color: { control: "select", options: ["primary", "muted", "white", "success", "danger"] },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner size="xs" label="xs" />
      <Spinner size="sm" label="sm" />
      <Spinner size="md" label="md" />
      <Spinner size="lg" label="lg" />
      <Spinner size="xl" label="xl" />
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner color="primary" />
      <Spinner color="muted" />
      <Spinner color="success" />
      <Spinner color="danger" />
      <div className="rounded-lg bg-neutral-800 p-3">
        <Spinner color="white" />
      </div>
    </div>
  ),
};

export const InButton: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary" disabled>
        <Spinner size="sm" color="white" label="Guardando..." />
        Guardando...
      </Button>
      <Button variant="outline" disabled>
        <Spinner size="sm" color="muted" label="Cargando..." />
        Cargando...
      </Button>
    </div>
  ),
};

export const CustomLabel: Story = {
  args: { label: "Procesando pago..." },
};
