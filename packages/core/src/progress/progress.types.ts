import type * as React from "react";
import type * as ProgressPrimitive from "@radix-ui/react-progress";

export interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  /** Clases adicionales para la barra de progreso interior */
  indicatorClassName?: string;
}
