"use client";

import * as React from "react";
import { Checkbox, Textarea, Switch } from "@chassis-ui/core";

export function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-3">
      <Checkbox label="Acepto los términos y condiciones" />
      <Checkbox label="Recibir notificaciones" defaultChecked />
      <Checkbox label="Opción deshabilitada" disabled />
      <Checkbox label="Seleccionar todo" indeterminate />
    </div>
  );
}

export function CheckboxErrorDemo() {
  return (
    <Checkbox
      label="Acepto los términos"
      errorText="Debes aceptar los términos para continuar"
    />
  );
}

export function TextareaBasicDemo() {
  return (
    <div className="w-80">
      <Textarea label="Descripción" placeholder="Describe tu proyecto..." rows={4} />
    </div>
  );
}

export function TextareaCounterDemo() {
  return (
    <div className="w-80">
      <Textarea
        label="Mensaje"
        placeholder="Escribe tu mensaje..."
        maxLength={280}
        showCount
        rows={4}
      />
    </div>
  );
}

export function CheckboxCustomizationDemo() {
  return (
    <div className="flex flex-col gap-3">
      <div style={{ "--color-primary": "263 70% 50%" } as React.CSSProperties}>
        <Checkbox label="Violet (override CSS var)" defaultChecked />
      </div>
      <div style={{ "--color-primary": "347 77% 50%" } as React.CSSProperties}>
        <Checkbox label="Rose (override CSS var)" defaultChecked />
      </div>
      <div style={{ "--color-primary": "160 84% 38%" } as React.CSSProperties}>
        <Checkbox label="Emerald (override CSS var)" defaultChecked />
      </div>
    </div>
  );
}

export function TextareaCustomizationDemo() {
  return (
    <div className="flex flex-col gap-4 w-80">
      <Textarea
        label="Redondeado"
        placeholder="Estilo pill..."
        rows={2}
        className="rounded-xl"
      />
      <Textarea
        label="Fondo muted"
        placeholder="Sin borde visible..."
        rows={2}
        className="bg-muted border-transparent focus-visible:bg-background"
      />
    </div>
  );
}

export function SwitchCustomizationDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div style={{ "--color-primary": "263 70% 50%" } as React.CSSProperties}>
        <Switch label="Violet (override CSS var)" defaultChecked />
      </div>
      <div style={{ "--color-primary": "347 77% 50%" } as React.CSSProperties}>
        <Switch label="Rose (override CSS var)" defaultChecked />
      </div>
      <div style={{ "--color-primary": "160 84% 38%" } as React.CSSProperties}>
        <Switch label="Emerald (override CSS var)" defaultChecked />
      </div>
    </div>
  );
}

export function SwitchDemo() {
  return (
    <div className="flex flex-col gap-4">
      <Switch label="Modo oscuro" />
      <Switch label="Notificaciones activas" defaultChecked />
      <Switch label="Opción deshabilitada" disabled />
      <Switch
        label="Correos de marketing"
        helperText="Recibirás ofertas cada semana"
        size="lg"
      />
    </div>
  );
}
