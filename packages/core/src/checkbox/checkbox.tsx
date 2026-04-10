import { useId, useRef, useEffect } from "react";

import { cn } from "@chassis-ui/utils";

import type { CheckboxProps } from "./checkbox.types";

export function Checkbox({
  label,
  indeterminate = false,
  errorText,
  helperText,
  className,
  disabled,
  id: idProp,
  ...props
}: CheckboxProps): React.JSX.Element {
  const generatedId = useId();
  const id          = idProp ?? generatedId;
  const errorId     = `${id}-error`;
  const helperId    = `${id}-helper`;
  const ref         = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);

  const hasError    = Boolean(errorText);
  const describedBy = [hasError ? errorId : null, helperText ? helperId : null].filter(Boolean).join(" ");

  return (
    <div data-slot="checkbox-root" className={cn("flex flex-col gap-1.5", className)}>
      <div className="flex items-start gap-2.5">
        <input
          ref={ref}
          data-slot="checkbox"
          data-error={hasError || undefined}
          id={id}
          type="checkbox"
          disabled={disabled}
          aria-invalid={hasError}
          aria-describedby={describedBy || undefined}
          className={cn(
            "mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border transition-colors duration-150",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background",
            hasError ? "border-destructive accent-destructive" : "border-input accent-primary",
            disabled && "cursor-not-allowed opacity-50",
          )}
          {...props}
        />
        {label && (
          <label
            data-slot="checkbox-label"
            htmlFor={id}
            className={cn("text-sm leading-5 text-foreground", disabled && "cursor-not-allowed opacity-50")}
          >
            {label}
          </label>
        )}
      </div>

      {hasError && (
        <p data-slot="checkbox-error" id={errorId} role="alert" className="text-xs text-destructive">{errorText}</p>
      )}
      {helperText && !hasError && (
        <p data-slot="checkbox-helper" id={helperId} className="text-xs text-muted-foreground">{helperText}</p>
      )}
    </div>
  );
}
