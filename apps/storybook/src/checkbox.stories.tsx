import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@chassis-ui/core";

const meta = {
  title: "Core/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "Acepto los términos y condiciones" },
};

export const Checked: Story = {
  args: { label: "Opción marcada", defaultChecked: true },
};

export const Indeterminate: Story = {
  args: { label: "Seleccionar todo (indeterminate)", indeterminate: true },
};

export const WithHelperText: Story = {
  args: {
    label: "Recibir notificaciones",
    helperText: "Te enviaremos un correo semanal con novedades",
  },
};

export const WithError: Story = {
  args: {
    label: "Acepto los términos",
    errorText: "Debes aceptar los términos para continuar",
  },
};

export const Disabled: Story = {
  args: { label: "Opción deshabilitada", disabled: true },
};

export const DisabledChecked: Story = {
  args: { label: "Opción deshabilitada y marcada", disabled: true, defaultChecked: true },
};

export const Group: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Checkbox label="React" defaultChecked />
      <Checkbox label="Vue" />
      <Checkbox label="Angular" />
      <Checkbox label="Svelte (próximamente)" disabled />
    </div>
  ),
};
