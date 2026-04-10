import { useId } from "react";
import { cva } from "class-variance-authority";

import { cn } from "@chassis-ui/utils";

import type { InputProps } from "./input.types";

const wrapperVariants = cva(
  "relative flex items-center rounded-md border transition-colors duration-150",
  {
    variants: {
      hasError: {
        true:  "border-destructive focus-within:ring-2 focus-within:ring-destructive/25",
        false: "border-input bg-background focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/20",
      },
      disabled: {
        true:  "cursor-not-allowed bg-muted opacity-60",
        false: "bg-background",
      },
    },
    defaultVariants: { hasError: false, disabled: false },
  },
);

const sizeClasses = {
  sm: { input: "h-8 px-2.5 text-xs",  addon: "px-2.5" },
  md: { input: "h-9 px-3 text-sm",    addon: "px-3" },
  lg: { input: "h-10 px-4 text-base", addon: "px-4" },
} as const;

export function Input({
  label,
  helperText,
  errorText,
  leftElement,
  rightElement,
  fullWidth = false,
  size = "md",
  className,
  disabled,
  id: idProp,
  ...props
}: InputProps): React.JSX.Element {
  const generatedId = useId();
  const id = idProp ?? generatedId;
  const helperId = `${id}-helper`;
  const errorId  = `${id}-error`;

  const hasError   = Boolean(errorText);
  const describedBy = [hasError ? errorId : null, helperText ? helperId : null]
    .filter(Boolean).join(" ");

  const sz = sizeClasses[size];

  return (
    <div data-slot="input-root" className={cn("flex flex-col gap-1.5", fullWidth && "w-full", className)}>
      {label && (
        <label
          data-slot="input-label"
          htmlFor={id}
          className="text-sm font-medium leading-none text-foreground"
        >
          {label}
        </label>
      )}

      <div
        data-slot="input-wrapper"
        data-error={hasError || undefined}
        className={wrapperVariants({ hasError, disabled: Boolean(disabled) })}
      >
        {leftElement && (
          <span data-slot="input-left-element" className={cn("flex shrink-0 items-center text-muted-foreground", sz.addon)}>
            {leftElement}
          </span>
        )}

        <input
          data-slot="input"
          id={id}
          disabled={disabled}
          aria-invalid={hasError}
          aria-describedby={describedBy || undefined}
          className={cn(
            "flex-1 bg-transparent py-2 text-foreground outline-none",
            "placeholder:text-muted-foreground/60",
            "disabled:cursor-not-allowed",
            leftElement  ? "pl-1.5" : sz.input.split(" ")[1],
            rightElement ? "pr-1.5" : sz.input.split(" ")[1],
            sz.input.split(" ")[0],
            sz.input.split(" ")[2],
          )}
          {...props}
        />

        {hasError && !rightElement && (
          <span data-slot="input-error-icon" className="flex shrink-0 items-center pr-3 text-destructive" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </span>
        )}

        {rightElement && (
          <span data-slot="input-right-element" className={cn("flex shrink-0 items-center text-muted-foreground", sz.addon)}>
            {rightElement}
          </span>
        )}
      </div>

      {hasError && (
        <p data-slot="input-error" id={errorId} role="alert" className="text-xs text-destructive">
          {errorText}
        </p>
      )}
      {helperText && !hasError && (
        <p data-slot="input-helper" id={helperId} className="text-xs text-muted-foreground">
          {helperText}
        </p>
      )}
    </div>
  );
}
