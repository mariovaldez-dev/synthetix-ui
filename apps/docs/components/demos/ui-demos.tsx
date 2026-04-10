"use client";

import { Spinner, Tooltip, Accordion, Button } from "@synthetix-ui/core";

export function SpinnerDemo() {
  return (
    <div className="flex items-center gap-6">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  );
}

export function SpinnerColorsDemo() {
  return (
    <div className="flex items-center gap-6">
      <Spinner color="primary" />
      <Spinner color="muted" />
      <Spinner color="success" />
      <Spinner color="danger" />
      <div className="rounded-lg bg-neutral-800 p-3">
        <Spinner color="white" />
      </div>
    </div>
  );
}

export function TooltipDemo() {
  return (
    <div className="flex flex-wrap gap-6">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Tooltip key={side} content={`Tooltip ${side}`} side={side} delayMs={0}>
          <Button variant="outline" size="sm">{side}</Button>
        </Tooltip>
      ))}
    </div>
  );
}

const FAQ = [
  { id: "q1", trigger: "¿Qué es synthetix-ui?", content: "Una librería de componentes UI para React con Tailwind CSS." },
  { id: "q2", trigger: "¿Cómo se instala?", content: "Con npx @synthetix-ui add <componente> o instalando @synthetix-ui/core como dependencia npm." },
  { id: "q3", trigger: "¿Es open source?", content: "Sí, publicado bajo licencia MIT.", disabled: false },
];

export function AccordionDemo() {
  return (
    <div className="w-full max-w-lg">
      <Accordion items={FAQ} />
    </div>
  );
}

export function SpinnerCustomizationDemo() {
  return (
    <div className="flex items-center gap-6">
      <Spinner className="text-violet-500" size="md" />
      <Spinner className="text-rose-500" size="md" />
      <Spinner className="text-emerald-500" size="md" />
      <Spinner className="text-amber-500" size="lg" />
      <div className="rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 p-3">
        <Spinner color="white" size="md" />
      </div>
    </div>
  );
}

export function TooltipCustomizationDemo() {
  return (
    <div className="flex gap-6">
      <Tooltip
        content="Tooltip oscuro"
        side="top"
        delayMs={0}
        className="bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900"
      >
        <Button variant="outline" size="sm">Oscuro</Button>
      </Tooltip>
      <Tooltip
        content="Tooltip violet"
        side="top"
        delayMs={0}
        className="bg-violet-600 text-white"
      >
        <Button variant="outline" size="sm">Violet</Button>
      </Tooltip>
      <Tooltip
        content="Tooltip success"
        side="top"
        delayMs={0}
        className="bg-emerald-600 text-white"
      >
        <Button variant="outline" size="sm">Emerald</Button>
      </Tooltip>
    </div>
  );
}

export function AccordionCustomizationDemo() {
  const items = [
    { id: "a", trigger: "Ítem con borde primario", content: "Contenido personalizado con className en el Accordion." },
    { id: "b", trigger: "Ítem con fondo accent", content: "Cada ítem puede tener estilos distintos." },
  ];
  return (
    <div className="w-full max-w-lg">
      <Accordion
        items={items}
        className="rounded-xl border-2 border-primary/30 overflow-hidden"
      />
    </div>
  );
}

export function AccordionMultipleDemo() {
  return (
    <div className="w-full max-w-lg">
      <Accordion items={FAQ} multiple defaultOpen={["q1"]} />
    </div>
  );
}
