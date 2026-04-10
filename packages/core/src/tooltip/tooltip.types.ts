import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

export type TooltipProviderProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Provider>;
export type TooltipProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root> & {
  children: React.ReactNode;
  /** Contenido del tooltip (shorthand) */
  content?: React.ReactNode;
  /** Posición del tooltip (shorthand) */
  side?: "top" | "bottom" | "left" | "right";
  /** Delay en ms (shorthand) */
  delayMs?: number;
  /** Applied to the TooltipContent element */
  className?: string;
};
export type TooltipTriggerProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>;
export type TooltipContentProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>;

export type TooltipSide = "top" | "bottom" | "left" | "right";
