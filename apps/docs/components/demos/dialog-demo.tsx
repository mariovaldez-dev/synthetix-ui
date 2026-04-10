"use client";

import { useState } from "react";
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button, Input } from "@synthetix-ui/core";

export function DialogBasicDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Abrir Dialog</Button>
      <Dialog isOpen={open} onClose={() => setOpen(false)} aria-labelledby="dlg-title">
        <DialogHeader onClose={() => setOpen(false)}>
          <h2 id="dlg-title" className="text-base font-semibold text-foreground">Confirmar acción</h2>
        </DialogHeader>
        <DialogBody>
          <p>¿Estás seguro de que deseas continuar? Esta acción no se puede deshacer.</p>
        </DialogBody>
        <DialogFooter>
          <Button variant="outline" size="sm" onClick={() => setOpen(false)}>Cancelar</Button>
          <Button variant="danger" size="sm" onClick={() => setOpen(false)}>Eliminar</Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export function DialogCustomizationDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>Dialog personalizado</Button>
      <Dialog
        isOpen={open}
        onClose={() => setOpen(false)}
        className="border-violet-200 dark:border-violet-800"
      >
        <DialogHeader
          onClose={() => setOpen(false)}
          className="bg-gradient-to-r from-violet-500 to-indigo-600 rounded-t-xl"
        >
          <h2 className="text-base font-semibold text-white">Header con gradiente</h2>
        </DialogHeader>
        <DialogBody>
          <p className="text-sm text-muted-foreground">
            Puedes aplicar <code className="text-xs bg-muted px-1 py-0.5 rounded">className</code> al
            Dialog y sus sub-componentes para personalizar colores, bordes y fondos.
          </p>
        </DialogBody>
        <DialogFooter>
          <Button size="sm" onClick={() => setOpen(false)}>Cerrar</Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export function DialogFormDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>Nuevo usuario</Button>
      <Dialog isOpen={open} onClose={() => setOpen(false)} aria-labelledby="dlg-form-title">
        <DialogHeader onClose={() => setOpen(false)}>
          <h2 id="dlg-form-title" className="text-base font-semibold text-foreground">Crear usuario</h2>
        </DialogHeader>
        <DialogBody>
          <div className="flex flex-col gap-4">
            <Input label="Nombre" placeholder="Mario Flores" fullWidth />
            <Input label="Correo" type="email" placeholder="mario@ejemplo.com" fullWidth />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button variant="outline" size="sm" onClick={() => setOpen(false)}>Cancelar</Button>
          <Button size="sm" onClick={() => setOpen(false)}>Crear</Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
