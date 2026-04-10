import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "@synthetix-ui/core";

const FAQ = [
  { id: "q1", trigger: "¿Qué es synthetix-ui?", content: "Una librería de componentes UI estilo shadcn/ui: los componentes se copian directamente al proyecto del consumidor via CLI." },
  { id: "q2", trigger: "¿Cómo instalo un componente?", content: "Ejecuta npx @synthetix-ui add button en tu proyecto. El componente se copiará a src/components/ui/." },
  { id: "q3", trigger: "¿Puedo usarlo como paquete npm?", content: "Sí, también publicamos @synthetix-ui/core en npm para consumo directo como dependencia." },
  { id: "q4", trigger: "¿Es compatible con Tailwind CSS?", content: "Sí, usa Tailwind CSS con un preset propio (@synthetix-ui/tailwind-preset) que extiende el theme con design tokens.", disabled: false },
  { id: "q5", trigger: "Próximamente (deshabilitado)", content: "Contenido no disponible aún.", disabled: true },
];

const meta = {
  title: "Core/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [(Story) => <div className="w-[560px]"><Story /></div>],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { items: FAQ } };
export const Multiple: Story = { args: { items: FAQ, multiple: true } };
export const WithDefaultOpen: Story = { args: { items: FAQ, defaultOpen: ["q1", "q3"] } };
export const MultipleWithDefaultOpen: Story = {
  args: { items: FAQ, multiple: true, defaultOpen: ["q1", "q2"] },
};
