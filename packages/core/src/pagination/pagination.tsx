import * as React from "react";
import { cn } from "@chassis-ui/utils";
import type {
  PaginationProps,
  PaginationContentProps,
  PaginationItemProps,
  PaginationLinkProps,
  PaginationPreviousProps,
  PaginationNextProps,
  PaginationEllipsisProps,
} from "./pagination.types";

export const Pagination = ({ className, ...props }: PaginationProps) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);

export const PaginationContent = React.forwardRef<
  HTMLDivElement,
  PaginationContentProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

export const PaginationItem = React.forwardRef<
  HTMLDivElement,
  PaginationItemProps
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

export const PaginationLink = ({
  className,
  isActive,
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      "inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors cursor-pointer select-none no-underline",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
      isActive
        ? "bg-primary text-primary-foreground border border-primary shadow-sm"
        : "text-foreground hover:bg-accent border border-transparent",
      className
    )}
    {...props}
  />
);

export const PaginationPrevious = ({
  className,
  ...props
}: PaginationPreviousProps) => (
  <a
    aria-label="Ir a la página anterior"
    className={cn(
      "inline-flex h-9 items-center justify-center gap-1.5 rounded-md px-3 text-sm font-medium transition-colors cursor-pointer select-none no-underline",
      "text-muted-foreground hover:bg-accent hover:text-foreground",
      "aria-disabled:pointer-events-none aria-disabled:opacity-50",
      className
    )}
    {...props}
  >
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m15 18-6-6 6-6" />
    </svg>
    <span className="hidden sm:inline">Anterior</span>
  </a>
);

export const PaginationNext = ({
  className,
  ...props
}: PaginationNextProps) => (
  <a
    aria-label="Ir a la página siguiente"
    className={cn(
      "inline-flex h-9 items-center justify-center gap-1.5 rounded-md px-3 text-sm font-medium transition-colors cursor-pointer select-none no-underline",
      "text-muted-foreground hover:bg-accent hover:text-foreground",
      "aria-disabled:pointer-events-none aria-disabled:opacity-50",
      className
    )}
    {...props}
  >
    <span className="hidden sm:inline">Siguiente</span>
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m9 18 6-6-6-6" />
    </svg>
  </a>
);

export const PaginationEllipsis = ({
  className,
  ...props
}: PaginationEllipsisProps) => (
  <span
    aria-hidden
    className={cn(
      "inline-flex h-9 w-9 items-center justify-center text-muted-foreground select-none",
      className
    )}
    {...props}
  >
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="5" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" />
    </svg>
    <span className="sr-only">Más páginas</span>
  </span>
);
