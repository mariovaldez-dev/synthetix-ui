import type { Meta, StoryObj } from "@storybook/react";
import { Toaster, useToast, Button } from "@chassis-ui/core";

const meta = {
  title: "Core/Toast",
  parameters: { layout: "centered" },
} satisfies Meta;

export default meta;
type Story = StoryObj;

function ToastDemo() {
  const { toast, clear } = useToast();
  return (
    <>
      <Toaster />
      <div className="flex flex-wrap gap-3">
        <Button onClick={() => toast({ title: "Cambios guardados", variant: "success" })}>
          Éxito
        </Button>
        <Button
          variant="danger"
          onClick={() =>
            toast({
              title: "Error al guardar",
              description: "Revisa tu conexión e intenta de nuevo.",
              variant: "danger",
            })
          }
        >
          Error
        </Button>
        <Button
          variant="secondary"
          onClick={() =>
            toast({
              title: "Atención",
              description: "Este cambio afecta a todos los usuarios.",
              variant: "warning",
            })
          }
        >
          Advertencia
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast({
              title: "Información",
              description: "La próxima versión estará disponible el lunes.",
              variant: "info",
            })
          }
        >
          Info
        </Button>
        <Button variant="ghost" onClick={() => toast({ title: "Operación completada" })}>
          Default
        </Button>
        <Button
          variant="ghost"
          onClick={() =>
            toast({ title: "No se cierra solo", description: "duration: 0", duration: 0 })
          }
        >
          Persistente
        </Button>
        <Button variant="outline" onClick={clear}>
          Limpiar todo
        </Button>
      </div>
    </>
  );
}

export const Playground: Story = { render: () => <ToastDemo /> };
