import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@synthetix-ui/core";

const meta = {
  title: "Core/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { label: "Modo oscuro" } };
export const Checked: Story = { args: { label: "Notificaciones activas", defaultChecked: true } };
export const Disabled: Story = { args: { label: "Opción bloqueada", disabled: true } };
export const DisabledChecked: Story = { args: { label: "Siempre activo", disabled: true, defaultChecked: true } };

export const WithHelperText: Story = {
  args: {
    label: "Correos de marketing",
    helperText: "Recibirás ofertas y novedades cada semana",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch label="Small" size="sm" />
      <Switch label="Medium" size="md" />
      <Switch label="Large" size="lg" />
    </div>
  ),
};
