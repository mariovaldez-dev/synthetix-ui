import type { SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  /** Tamaño del icono en px. Aplica width y height iguales. */
  size?: number;
}
