"use client";

import { Badge } from "@synthetix-ui/core";

export function BadgeVariantsDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  );
}

export function BadgeSizesDemo() {
  return (
    <div className="flex items-center gap-3">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  );
}

export function BadgeCustomizationDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge className="bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950 dark:text-violet-300 dark:border-violet-800">
        Violet
      </Badge>
      <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 text-white border-transparent">
        Gradient
      </Badge>
      <Badge className="rounded-sm font-mono text-[10px] tracking-widest uppercase bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 border-transparent">
        MONO
      </Badge>
      <Badge className="border-2 border-amber-400 bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300">
        Bordered
      </Badge>
      <Badge className="bg-teal-500/10 text-teal-600 border-teal-500/30 dark:text-teal-400">
        Teal
      </Badge>
    </div>
  );
}
