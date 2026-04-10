import type * as React from "react";

export interface DatePickerProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, "onSelect"> {
  placeholder?: string;
  selected?: Date | undefined;
  onSelect?: (date: Date | undefined) => void;
}
