import { useId, useRef, useCallback, useState } from "react";

import { cn } from "@synthetix-ui/utils";

import type { TextareaProps } from "./textarea.types";

export function Textarea({
  label,
  helperText,
  errorText,
  autoResize = false,
  showCount = false,
  fullWidth = false,
  className,
  disabled,
  id: idProp,
  maxLength,
  defaultValue,
  value,
  onChange,
  rows = 3,
  ...props
}: TextareaProps): React.JSX.Element {
  const generatedId = useId();
  const id          = idProp ?? generatedId;
  const errorId     = `${id}-error`;
  const helperId    = `${id}-helper`;
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const isControlled = value !== undefined;
  const [internalLength, setInternalLength] = useState<number>(() => {
    const initial = isControlled ? String(value) : String(defaultValue ?? "");
    return initial.length;
  });

  const currentLength = isControlled ? String(value).length : internalLength;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (!isControlled) setInternalLength(e.target.value.length);
      if (autoResize && textareaRef.current) {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
      onChange?.(e);
    },
    [autoResize, isControlled, onChange],
  );

  const hasError    = Boolean(errorText);
  const describedBy = [hasError ? errorId : null, helperText ? helperId : null].filter(Boolean).join(" ");

  return (
    <div data-slot="textarea-root" className={cn("flex flex-col gap-1.5", fullWidth && "w-full", className)}>
      {label && (
        <label data-slot="textarea-label" htmlFor={id} className="text-sm font-medium leading-none text-foreground">
          {label}
        </label>
      )}

      <textarea
        data-slot="textarea"
        data-error={hasError || undefined}
        ref={textareaRef}
        id={id}
        rows={rows}
        disabled={disabled}
        maxLength={maxLength}
        value={value}
        defaultValue={defaultValue}
        aria-invalid={hasError}
        aria-describedby={describedBy || undefined}
        onChange={handleChange}
        className={cn(
          "w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground outline-none",
          "placeholder:text-muted-foreground/60 transition-colors duration-150",
          "focus:ring-2",
          hasError
            ? "border-destructive focus:border-destructive focus:ring-destructive/20"
            : "border-input focus:border-ring focus:ring-ring/20",
          disabled && "cursor-not-allowed bg-muted opacity-60",
          autoResize && "resize-none overflow-hidden",
        )}
        {...props}
      />

      <div className="flex items-start justify-between gap-2">
        <div>
          {hasError && (
            <p data-slot="textarea-error" id={errorId} role="alert" className="text-xs text-destructive">{errorText}</p>
          )}
          {helperText && !hasError && (
            <p data-slot="textarea-helper" id={helperId} className="text-xs text-muted-foreground">{helperText}</p>
          )}
        </div>
        {showCount && maxLength !== undefined && (
          <p
            data-slot="textarea-count"
            className={cn("ml-auto shrink-0 text-xs tabular-nums", currentLength >= maxLength ? "text-destructive" : "text-muted-foreground")}
            aria-live="polite"
          >
            {currentLength}/{maxLength}
          </p>
        )}
      </div>
    </div>
  );
}
