import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "@chassis-ui/core";

const LANGUAGES = [
  { value: "es", label: "Español" },
  { value: "en", label: "English" },
  { value: "fr", label: "Français" },
  { value: "de", label: "Deutsch", disabled: true },
];

const meta = {
  title: "Core/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [(Story) => <div className="w-72"><Story /></div>],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { options: LANGUAGES, placeholder: "Elige un idioma" },
};

export const WithLabel: Story = {
  args: { options: LANGUAGES, label: "Idioma", placeholder: "Selecciona..." },
};

export const WithHelperText: Story = {
  args: {
    options: LANGUAGES,
    label: "Idioma",
    placeholder: "Selecciona...",
    helperText: "Se usará en toda la interfaz",
  },
};

export const WithError: Story = {
  args: {
    options: LANGUAGES,
    label: "Idioma",
    placeholder: "Selecciona...",
    errorText: "Este campo es requerido",
  },
};

export const Disabled: Story = {
  args: { options: LANGUAGES, label: "Idioma", disabled: true, defaultValue: "es" },
};
