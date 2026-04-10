import { cva } from "class-variance-authority";

import { cn } from "@chassis-ui/utils";

import type { SpinnerProps } from "./spinner.types";

export const spinnerVariants = cva(
  "animate-spin rounded-full border-2 border-current border-t-transparent",
  {
    variants: {
      size: {
        xs: "h-3 w-3",
        sm: "h-4 w-4",
        md: "h-6 w-6",
        lg: "h-8 w-8",
        xl: "h-12 w-12",
      },
      color: {
        primary:     "text-primary",
        muted:       "text-muted-foreground",
        white:       "text-white",
        success:     "text-success",
        danger:      "text-destructive",
      },
    },
    defaultVariants: { size: "md", color: "primary" },
  },
);

export function Spinner({ size, color, label = "Cargando...", className }: SpinnerProps): React.JSX.Element {
  return (
    <span data-slot="spinner" role="status" aria-label={label} className={cn("inline-flex", className)}>
      <span className={spinnerVariants({ size, color })} />
      <span className="sr-only">{label}</span>
    </span>
  );
}
