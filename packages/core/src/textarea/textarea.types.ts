import type { TextareaHTMLAttributes } from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Texto del label */
  label?: string;
  /** Mensaje de ayuda */
  helperText?: string;
  /** Mensaje de error */
  errorText?: string;
  /** Crece automáticamente con el contenido */
  autoResize?: boolean;
  /** Muestra contador "actual / max" cuando maxLength está definido */
  showCount?: boolean;
  /** Ocupa todo el ancho */
  fullWidth?: boolean;
}
