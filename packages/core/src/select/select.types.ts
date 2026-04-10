import type * as React from "react";
import type * as SelectPrimitive from "@radix-ui/react-select";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export type SelectProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> & {
  options?: SelectOption[];
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorText?: string;
  /** Applied to the SelectTrigger element */
  className?: string;
};

export type SelectGroupProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Group>;
export type SelectValueProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Value>;
export type SelectTriggerProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>;
export type SelectContentProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>;
export type SelectLabelProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>;
export type SelectItemProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>;
export type SelectSeparatorProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>;
export type SelectScrollUpButtonProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>;
export type SelectScrollDownButtonProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>;
