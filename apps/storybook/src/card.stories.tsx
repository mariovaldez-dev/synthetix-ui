import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardTitle, CardDescription, CardBody, CardFooter, Button } from "@chassis-ui/core";

const meta = {
  title: "Core/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Contenido simple de la card.",
  },
};

export const WithSubcomponents: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Título de la card</CardTitle>
        <CardDescription>Subtítulo opcional</CardDescription>
      </CardHeader>
      <CardBody>
        Este es el cuerpo de la card con información relevante para el usuario.
      </CardBody>
      <CardFooter>
        <Button variant="outline" size="sm">Cancelar</Button>
        <Button size="sm">Aceptar</Button>
      </CardFooter>
    </Card>
  ),
};

export const Elevated: Story = {
  render: () => (
    <Card variant="elevated">
      <CardHeader>
        <CardTitle>Card Elevated</CardTitle>
        <CardDescription>Sombra más pronunciada para mayor jerarquía visual.</CardDescription>
      </CardHeader>
      <CardBody>Contenido con variante elevated.</CardBody>
    </Card>
  ),
};

export const Flat: Story = {
  render: () => (
    <Card variant="flat">
      <CardHeader>
        <CardTitle>Card Flat</CardTitle>
        <CardDescription>Sin borde, fondo muted. Ideal para áreas secundarias.</CardDescription>
      </CardHeader>
      <CardBody>Contenido con variante flat.</CardBody>
    </Card>
  ),
};

export const NoPadding: Story = {
  render: () => (
    <Card noPadding>
      <img
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
        alt="Montaña"
        className="h-40 w-full rounded-t-xl object-cover"
      />
      <div className="p-4">
        <CardTitle>Card con imagen</CardTitle>
        <CardDescription className="mt-1">Usando noPadding para control total.</CardDescription>
      </div>
    </Card>
  ),
};
