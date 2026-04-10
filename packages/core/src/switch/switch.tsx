"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@synthetix-ui/utils";
import type { SwitchProps } from "./switch.types";

const switchVariants = cva(
  "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
  {
    variants: {
      size: {
        sm: "h-4 w-7",
        md: "h-5 w-9",
        lg: "h-6 w-11",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const thumbVariants = cva(
  "pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0",
  {
    variants: {
      size: {
        sm: "h-3 w-3 data-[state=checked]:translate-x-3",
        md: "h-4 w-4 data-[state=checked]:translate-x-4",
        lg: "h-5 w-5 data-[state=checked]:translate-x-5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, label, helperText, errorText, size, id: idProp, ...props }, ref) => {
  const generatedId = React.useId();
  const id          = idProp ?? generatedId;
  const errorId     = `${id}-error`;
  const helperId    = `${id}-helper`;
  const hasError    = Boolean(errorText);
  const describedBy = [hasError ? errorId : null, helperText ? helperId : null].filter(Boolean).join(" ");

  return (
    <div data-slot="switch-root" className={cn("flex flex-col gap-1.5", className)}>
      <div className="flex items-center gap-2.5">
        <SwitchPrimitives.Root
          className={cn(switchVariants({ size }), hasError && "border-destructive")}
          {...props}
          id={id}
          aria-invalid={hasError}
          aria-describedby={describedBy || undefined}
          ref={ref}
        >
          <SwitchPrimitives.Thumb className={cn(thumbVariants({ size }))} />
        </SwitchPrimitives.Root>
        {label && (
          <label
            data-slot="switch-label"
            htmlFor={id}
            className={cn(
              "font-medium leading-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
              size === "sm" ? "text-xs" : "text-sm",
            )}
          >
            {label}
          </label>
        )}
      </div>

      {hasError && (
        <p data-slot="switch-error" id={errorId} role="alert" className="text-xs text-destructive">{errorText}</p>
      )}
      {helperText && !hasError && (
        <p data-slot="switch-helper" id={helperId} className="text-xs text-muted-foreground">{helperText}</p>
      )}
    </div>
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;
