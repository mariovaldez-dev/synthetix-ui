import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full text-xs font-medium leading-none transition-colors duration-150",
  {
    variants: {
      variant: {
        default:  "bg-muted text-foreground",
        primary:  "bg-secondary text-secondary-foreground",
        success:  "bg-success/10 text-success",
        warning:  "bg-warning/10 text-warning",
        danger:   "bg-destructive/10 text-destructive",
        outline:  "border border-border bg-background text-foreground",
      },
      size: {
        sm: "px-2 py-0.5",
        md: "px-2.5 py-1",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export const dotColorMap: Record<string, string> = {
  default: "bg-muted-foreground",
  primary: "bg-secondary-foreground",
  success: "bg-success",
  warning: "bg-warning",
  danger:  "bg-destructive",
  outline: "bg-foreground",
};

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  onRemove?: () => void;
  dot?: boolean;
  asChild?: boolean;
  className?: string;
}
