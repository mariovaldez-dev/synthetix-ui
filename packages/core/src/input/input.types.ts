import type { InputHTMLAttributes } from "react";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Texto del label visible */
  label?: string;
  /** Mensaje de ayuda debajo del input */
  helperText?: string;
  /** Mensaje de error — activa el estado error visualmente */
  errorText?: string;
  /** Elemento a la izquierda del input (icono, texto) */
  leftElement?: React.ReactNode;
  /** Elemento a la derecha del input (icono, botón) */
  rightElement?: React.ReactNode;
  /** Ocupa todo el ancho del contenedor */
  fullWidth?: boolean;
  /** Tamaño del input */
  size?: "sm" | "md" | "lg";
}
