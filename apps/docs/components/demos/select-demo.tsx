"use client";

import { Select } from "@chassis-ui/core";

const LANGS = [
  { value: "es", label: "Español" },
  { value: "en", label: "English" },
  { value: "fr", label: "Français" },
  { value: "de", label: "Deutsch", disabled: true },
];

export function SelectBasicDemo() {
  return (
    <div className="w-64">
      <Select options={LANGS} label="Idioma" placeholder="Selecciona..." />
    </div>
  );
}

export function SelectCustomizationDemo() {
  return (
    <div className="flex flex-col gap-4 w-64">
      <Select options={LANGS} label="Redondeado" placeholder="Selecciona..." className="rounded-full" />
      <Select options={LANGS} label="Fondo muted" placeholder="Selecciona..." className="bg-muted border-transparent" />
    </div>
  );
}

export function SelectErrorDemo() {
  return (
    <div className="w-64">
      <Select options={LANGS} label="Idioma" placeholder="Selecciona..." errorText="Este campo es requerido" />
    </div>
  );
}
