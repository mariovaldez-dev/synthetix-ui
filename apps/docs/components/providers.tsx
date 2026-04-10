"use client";

import { TooltipProvider } from "@chassis-ui/core";

export function Providers({ children }: { children: React.ReactNode }) {
  return <TooltipProvider>{children}</TooltipProvider>;
}
