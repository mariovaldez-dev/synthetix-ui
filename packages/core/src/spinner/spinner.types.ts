import type { VariantProps } from "class-variance-authority";

import type { spinnerVariants } from "./spinner";

export interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
  /** Etiqueta accesible. Default: "Cargando..." */
  label?: string;
  className?: string;
}
