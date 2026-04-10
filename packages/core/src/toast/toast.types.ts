export type ToastVariant = "default" | "success" | "warning" | "danger" | "info";

export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export interface Toast {
  id: string;
  title: string;
  description?: string;
  variant?: ToastVariant;
  /** Duración en ms. 0 = no se cierra automáticamente. Default: 4000 */
  duration?: number;
}

export type ToastInput = Omit<Toast, "id">;
