import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@chassis-ui/utils";

import type {
  CardProps,
  CardHeaderProps,
  CardTitleProps,
  CardDescriptionProps,
  CardBodyProps,
  CardFooterProps,
} from "./card.types";

const cardVariants = cva(
  "rounded-lg border bg-card text-card-foreground",
  {
    variants: {
      variant: {
        default:  "border-border shadow-sm",
        elevated: "border-border shadow-md",
        flat:     "border-transparent shadow-none bg-muted",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export function Card({
  variant = "default",
  noPadding = false,
  asChild = false,
  className,
  children,
  ...props
}: CardProps): React.JSX.Element {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      data-slot="card"
      data-variant={variant}
      className={cn(cardVariants({ variant }), !noPadding && "p-5", className)}
      {...props}
    >
      {children}
    </Comp>
  );
}

export function CardHeader({ className, children, ...props }: CardHeaderProps): React.JSX.Element {
  return (
    <div data-slot="card-header" className={cn("flex flex-col gap-1 pb-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ className, children, ...props }: CardTitleProps): React.JSX.Element {
  return (
    <h3
      data-slot="card-title"
      className={cn("text-base font-semibold leading-none tracking-tight text-card-foreground", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({ className, children, ...props }: CardDescriptionProps): React.JSX.Element {
  return (
    <p data-slot="card-description" className={cn("text-sm text-muted-foreground", className)} {...props}>
      {children}
    </p>
  );
}

export function CardBody({ className, children, ...props }: CardBodyProps): React.JSX.Element {
  return (
    <div data-slot="card-body" className={cn("text-sm text-foreground", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ className, children, ...props }: CardFooterProps): React.JSX.Element {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center justify-end gap-2 pt-4", className)}
      {...props}
    >
      {children}
    </div>
  );
}
