// @ts-nocheck
import * as React from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import type {
  CollapsibleProps,
  CollapsibleTriggerProps,
  CollapsibleContentProps,
} from "./collapsible.types";

export const Collapsible: React.FC<CollapsibleProps> = CollapsiblePrimitive.Root;
export const CollapsibleTrigger: React.FC<CollapsibleTriggerProps> = CollapsiblePrimitive.CollapsibleTrigger;
export const CollapsibleContent: React.FC<CollapsibleContentProps> = CollapsiblePrimitive.CollapsibleContent;
