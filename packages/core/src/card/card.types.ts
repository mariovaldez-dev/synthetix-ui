import type { HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  noPadding?: boolean;
  variant?: "default" | "elevated" | "flat";
  /**
   * Fusiona las props del Card con su único hijo.
   * Permite: <Card asChild><article>...</article></Card>
   */
  asChild?: boolean;
}

export type CardHeaderProps      = HTMLAttributes<HTMLDivElement>;
export type CardTitleProps       = HTMLAttributes<HTMLHeadingElement>;
export type CardDescriptionProps = HTMLAttributes<HTMLParagraphElement>;
export type CardBodyProps        = HTMLAttributes<HTMLDivElement>;
export type CardFooterProps      = HTMLAttributes<HTMLDivElement>;
