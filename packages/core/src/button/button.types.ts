import type { ButtonHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";

import type { buttonVariants } from "./button";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Muestra un indicador de carga y deshabilita el botón */
  isLoading?: boolean;
  /**
   * Fusiona las props del Button con su único hijo en lugar de
   * envolver en un <button>. Permite: <Button asChild><a href="/">Home</a></Button>
   */
  asChild?: boolean;
}
