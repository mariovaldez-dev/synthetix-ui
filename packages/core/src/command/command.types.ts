import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";

export type CommandProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive>;
export type CommandDialogProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>;
export type CommandInputProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>;
export type CommandListProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>;
export type CommandEmptyProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>;
export type CommandGroupProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>;
export type CommandItemProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>;
export type CommandSeparatorProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>;
export type CommandShortcutProps = React.HTMLAttributes<HTMLSpanElement>;
