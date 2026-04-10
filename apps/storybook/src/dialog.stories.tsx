import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button, Input } from "@synthetix-ui/core";

const meta = {
  title: "Core/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Abrir Dialog</Button>
        <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)} aria-labelledby="dialog-title">
          <DialogHeader onClose={() => setIsOpen(false)}>
            <h2 id="dialog-title" className="text-lg font-semibold text-foreground">
              Confirmar acción
            </h2>
          </DialogHeader>
          <DialogBody>
            <p>¿Estás seguro de que deseas continuar? Esta acción no se puede deshacer.</p>
          </DialogBody>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancelar
            </Button>
            <Button variant="danger" onClick={() => setIsOpen(false)}>
              Eliminar
            </Button>
          </DialogFooter>
        </Dialog>
      </>
    );
  },
};

export const WithForm: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Nuevo usuario</Button>
        <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)} aria-labelledby="form-title">
          <DialogHeader onClose={() => setIsOpen(false)}>
            <h2 id="form-title" className="text-lg font-semibold text-foreground">
              Crear usuario
            </h2>
          </DialogHeader>
          <DialogBody>
            <div className="flex flex-col gap-4">
              <Input label="Nombre" placeholder="Mario Flores" fullWidth />
              <Input label="Correo" type="email" placeholder="mario@ejemplo.com" fullWidth />
            </div>
          </DialogBody>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={() => setIsOpen(false)}>Crear</Button>
          </DialogFooter>
        </Dialog>
      </>
    );
  },
};
