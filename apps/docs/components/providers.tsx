"use client";

import { TooltipProvider } from "@synthetix-ui/core";

export function Providers({ children }: { children: React.ReactNode }) {
  return <TooltipProvider>{children}</TooltipProvider>;
}
