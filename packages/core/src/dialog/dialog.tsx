import { useEffect } from "react";
import { createPortal } from "react-dom";

import { cn } from "@chassis-ui/utils";
import { useFocusTrap } from "@chassis-ui/hooks";

import type { DialogProps, DialogHeaderProps, DialogBodyProps, DialogFooterProps } from "./dialog.types";

const sizeClasses = {
  sm:   "max-w-sm",
  md:   "max-w-md",
  lg:   "max-w-lg",
  xl:   "max-w-xl",
  full: "max-w-full m-4",
} as const;

export function Dialog({
  isOpen,
  onClose,
  children,
  size = "md",
  className,
  "aria-labelledby": labelledBy,
  "aria-describedby": describedBy,
}: DialogProps): React.JSX.Element | null {
  const trapRef = useFocusTrap<HTMLDivElement>(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div data-slot="dialog-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4" role="presentation">
      <div
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm animate-in fade-in duration-150"
        aria-hidden="true"
        onClick={onClose}
      />
      <div
        ref={trapRef}
        data-slot="dialog-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        aria-describedby={describedBy}
        className={cn(
          "relative z-10 w-full rounded-lg border border-border bg-background shadow-lg",
          "animate-in fade-in zoom-in-95 duration-150",
          sizeClasses[size],
          className,
        )}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}

export function DialogHeader({ onClose, className, children, ...props }: DialogHeaderProps): React.JSX.Element {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex items-start justify-between gap-4 border-b border-border px-5 py-4", className)}
      {...props}
    >
      <div className="flex-1">{children}</div>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="rounded-md p-1 text-muted-foreground transition-colors duration-150 hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
}

export function DialogBody({ className, children, ...props }: DialogBodyProps): React.JSX.Element {
  return (
    <div data-slot="dialog-body" className={cn("px-5 py-4 text-sm text-foreground", className)} {...props}>
      {children}
    </div>
  );
}

export function DialogFooter({ className, children, ...props }: DialogFooterProps): React.JSX.Element {
  return (
    <div
      data-slot="dialog-footer"
      className={cn("flex items-center justify-end gap-2 border-t border-border px-5 py-4", className)}
      {...props}
    >
      {children}
    </div>
  );
}
