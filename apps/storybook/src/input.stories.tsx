import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@synthetix-ui/core";
import { SearchIcon } from "@synthetix-ui/icons";

const meta = {
  title: "Core/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Escribe algo...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Correo electrónico",
    placeholder: "tu@ejemplo.com",
    type: "email",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Contraseña",
    type: "password",
    helperText: "Mínimo 8 caracteres",
  },
};

export const WithError: Story = {
  args: {
    label: "Nombre",
    defaultValue: "J",
    errorText: "El nombre debe tener al menos 2 caracteres",
  },
};

export const Disabled: Story = {
  args: {
    label: "Campo bloqueado",
    defaultValue: "Valor fijo",
    disabled: true,
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: "Buscar",
    placeholder: "Buscar componentes...",
    leftElement: <SearchIcon size={14} />,
  },
};

export const FullWidth: Story = {
  args: {
    label: "Descripción",
    placeholder: "Escribe una descripción...",
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-lg">
        <Story />
      </div>
    ),
  ],
};
