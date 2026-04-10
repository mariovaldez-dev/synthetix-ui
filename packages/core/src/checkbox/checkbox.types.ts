import type { InputHTMLAttributes } from "react";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** Texto del label */
  label?: string;
  /** Estado indeterminado (línea en lugar de check) */
  indeterminate?: boolean;
  /** Mensaje de error */
  errorText?: string;
  /** Texto de ayuda */
  helperText?: string;
}
