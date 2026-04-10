"use client";

import * as React from "react";
import type { ToastPosition } from "@synthetix-ui/core";
import { Toaster, useToast, Button } from "@synthetix-ui/core";

export function ToastDemo() {
  const { toast, clear } = useToast();
  return (
    <>
      <Toaster />
      <div className="flex flex-wrap gap-2">
        <Button size="sm" onClick={() => toast({ title: "Cambios guardados", variant: "success" })}>
          Éxito
        </Button>
        <Button size="sm" variant="danger" onClick={() => toast({ title: "Error al guardar", description: "Revisa tu conexión.", variant: "danger" })}>
          Error
        </Button>
        <Button size="sm" variant="secondary" onClick={() => toast({ title: "Atención", variant: "warning" })}>
          Advertencia
        </Button>
        <Button size="sm" variant="outline" onClick={() => toast({ title: "Información disponible", variant: "info" })}>
          Info
        </Button>
        <Button size="sm" variant="ghost" onClick={clear}>Limpiar</Button>
      </div>
    </>
  );
}

const POSITIONS: ToastPosition[] = [
  "top-left", "top-center", "top-right",
  "bottom-left", "bottom-center", "bottom-right",
];

export function ToastPositionDemo() {
  const [position, setPosition] = React.useState<ToastPosition>("bottom-right");
  const { toast, clear } = useToast();

  return (
    <>
      <Toaster position={position} />
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-1.5 w-fit">
          {POSITIONS.map((pos) => (
            <button
              key={pos}
              onClick={() => setPosition(pos)}
              className={[
                "rounded-md border px-2.5 py-1 text-xs font-medium transition-colors",
                position === pos
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-foreground hover:bg-muted border-border",
              ].join(" ")}
            >
              {pos}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <Button
            size="sm"
            onClick={() => toast({ title: "Notificación de prueba", description: `Posición: ${position}`, variant: "info" })}
          >
            Disparar toast
          </Button>
          <Button size="sm" variant="ghost" onClick={clear}>Limpiar</Button>
        </div>
      </div>
    </>
  );
}
