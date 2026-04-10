import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { cva } from "class-variance-authority";

import { cn } from "@chassis-ui/utils";

import { useToastStore } from "./use-toast";
import { toastStore } from "./toast-store";
import type { Toast, ToastPosition, ToastVariant } from "./toast.types";

const DEFAULT_DURATION = 4000;

const toastVariants = cva(
  [
    "flex w-full max-w-sm items-start gap-3 rounded-lg border p-4 shadow-lg",
    "animate-in fade-in duration-200",
  ],
  {
    variants: {
      variant: {
        default: "border-border bg-background text-foreground",
        success: "border-success/20 bg-success/8 text-success",
        warning: "border-warning/20 bg-warning/8 text-warning",
        danger:  "border-destructive/20 bg-destructive/8 text-destructive",
        info:    "border-info/20 bg-info/8 text-info",
      } satisfies Record<ToastVariant, string>,
    },
    defaultVariants: { variant: "default" },
  },
);

const positionConfig: Record<ToastPosition, { classes: string; order: "col" | "col-reverse" }> = {
  "top-left":      { classes: "top-4 left-4",                        order: "col-reverse" },
  "top-center":    { classes: "top-4 left-1/2 -translate-x-1/2",    order: "col-reverse" },
  "top-right":     { classes: "top-4 right-4",                       order: "col-reverse" },
  "bottom-left":   { classes: "bottom-4 left-4",                     order: "col" },
  "bottom-center": { classes: "bottom-4 left-1/2 -translate-x-1/2", order: "col" },
  "bottom-right":  { classes: "bottom-4 right-4",                    order: "col" },
};

function ToastIcon({ variant }: { variant: ToastVariant }) {
  if (variant === "default") return null;
  const icons: Record<Exclude<ToastVariant, "default">, React.JSX.Element> = {
    success: <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
    warning: <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
    danger:  <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>,
    info:    <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
  };
  return <span className="mt-0.5 shrink-0">{icons[variant]}</span>;
}

function ToastItem({ toast }: { toast: Toast }) {
  const duration = toast.duration ?? DEFAULT_DURATION;

  useEffect(() => {
    if (duration === 0) return;
    const timer = setTimeout(() => toastStore.remove(toast.id), duration);
    return () => clearTimeout(timer);
  }, [toast.id, duration]);

  return (
    <li
      data-slot="toast"
      data-variant={toast.variant ?? "default"}
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className={toastVariants({ variant: toast.variant })}
    >
      <ToastIcon variant={toast.variant ?? "default"} />
      <div className="flex-1 space-y-0.5">
        <p className="text-sm font-medium leading-snug">{toast.title}</p>
        {toast.description && <p className="text-xs opacity-75">{toast.description}</p>}
      </div>
      <button
        type="button"
        onClick={() => toastStore.remove(toast.id)}
        aria-label="Cerrar notificación"
        className="mt-0.5 shrink-0 rounded p-0.5 opacity-50 transition-opacity duration-150 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </li>
  );
}

interface ToasterProps {
  /** Posición de las notificaciones en pantalla. Default: "bottom-right" */
  position?: ToastPosition;
}

export function Toaster({ position = "bottom-right" }: ToasterProps): React.JSX.Element | null {
  const toasts  = useToastStore();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const { classes, order } = positionConfig[position];

  return createPortal(
    <ol
      aria-label="Notificaciones"
      className={cn(
        "fixed z-50 flex gap-2 w-[--toast-width,20rem]",
        order === "col" ? "flex-col" : "flex-col-reverse",
        classes,
      )}
    >
      {toasts.map((toast) => <ToastItem key={toast.id} toast={toast} />)}
    </ol>,
    document.body,
  );
}
