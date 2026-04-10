import type * as React from "react";
import type { FieldPath, FieldValues } from "react-hook-form";

export type FormItemContextValue = {
  name: string;
};

export interface FormMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {}
