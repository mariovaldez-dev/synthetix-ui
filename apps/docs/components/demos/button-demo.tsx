"use client";

import { Button } from "@synthetix-ui/core";

export function ButtonVariantsDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  );
}

export function ButtonSizesDemo() {
  return (
    <div className="flex items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}

export function ButtonLoadingDemo() {
  return <Button isLoading>Guardando...</Button>;
}

export function ButtonCustomizationDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button className="bg-gradient-to-r from-violet-500 to-indigo-600 text-white shadow-lg shadow-violet-500/30 hover:from-violet-600 hover:to-indigo-700 border-transparent">
        Gradient
      </Button>
      <Button className="rounded-full border-2 border-rose-400 bg-transparent text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950">
        Pill outline
      </Button>
      <Button className="bg-amber-400 text-amber-950 hover:bg-amber-500 border-transparent font-bold tracking-wide">
        Amber
      </Button>
      <Button className="bg-transparent border border-dashed border-border text-muted-foreground hover:border-foreground hover:text-foreground">
        Dashed
      </Button>
    </div>
  );
}
