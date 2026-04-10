import * as React from "react";
import type * as PopoverPrimitive from "@radix-ui/react-popover";

export interface PopoverProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Root> {}

export interface PopoverTriggerProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger> {}

export interface PopoverAnchorProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Anchor> {}

export interface PopoverContentProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {}
