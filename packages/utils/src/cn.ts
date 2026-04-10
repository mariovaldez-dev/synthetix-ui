import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import type { ClassValue } from "clsx";

/**
 * Combines clsx and tailwind-merge.
 * Use this everywhere you need to merge Tailwind classes conditionally.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
