import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@synthetix-ui/core";

const meta = {
  title: "Core/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: "Escribe algo..." },
};

export const WithLabel: Story = {
  args: { label: "Descripción", placeholder: "Describe tu proyecto..." },
};

export const WithHelperText: Story = {
  args: {
    label: "Bio",
    placeholder: "Cuéntanos sobre ti...",
    helperText: "Aparecerá en tu perfil público",
  },
};

export const WithError: Story = {
  args: {
    label: "Comentario",
    defaultValue: "x",
    errorText: "El comentario debe tener al menos 10 caracteres",
  },
};

export const WithCounter: Story = {
  args: {
    label: "Mensaje",
    placeholder: "Escribe tu mensaje...",
    maxLength: 280,
    showCount: true,
    rows: 4,
  },
};

export const AutoResize: Story = {
  args: {
    label: "Notas (crece automáticamente)",
    placeholder: "Escribe varias líneas y verás cómo crece...",
    autoResize: true,
    rows: 2,
  },
};

export const Disabled: Story = {
  args: {
    label: "Campo bloqueado",
    defaultValue: "Contenido fijo no editable",
    disabled: true,
  },
};
