import type { HTMLAttributes } from "react";

export interface DialogProps {
  /** Controla si el dialog está abierto */
  isOpen: boolean;
  /** Callback al cerrar (click en overlay o Escape) */
  onClose: () => void;
  /** Contenido del dialog */
  children: React.ReactNode;
  /** Tamaño del panel */
  size?: "sm" | "md" | "lg" | "xl" | "full";
  /** Clases adicionales para el panel del dialog */
  className?: string;
  /** aria-labelledby apunta al ID del título */
  "aria-labelledby"?: string;
  /** aria-describedby apunta al ID de la descripción */
  "aria-describedby"?: string;
}

export interface DialogHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /** Muestra el botón de cierre (X) */
  onClose?: () => void;
}

export type DialogBodyProps = HTMLAttributes<HTMLDivElement>;
export type DialogFooterProps = HTMLAttributes<HTMLDivElement>;
