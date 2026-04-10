import type { Config } from "tailwindcss";
import synthetixPreset from "@synthetix-ui/tailwind-preset";

export default {
  darkMode: "class",
  presets: [synthetixPreset],
  content: [
    "./app/**/*.{ts,tsx,md,mdx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/core/src/**/*.{ts,tsx}",
  ],
} satisfies Config;
