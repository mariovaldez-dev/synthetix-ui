import * as React from "react";

import { cn } from "@synthetix-ui/utils";
import type { SkeletonProps } from "./skeleton.types";

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-primary/10",
        className
      )}
      {...props}
    />
  );
}
