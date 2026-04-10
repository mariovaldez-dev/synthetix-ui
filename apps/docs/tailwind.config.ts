import type { Config } from "tailwindcss";
import chassisPreset from "@chassis-ui/tailwind-preset";

export default {
  darkMode: "class",
  presets: [chassisPreset],
  content: [
    "./app/**/*.{ts,tsx,md,mdx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/core/src/**/*.{ts,tsx}",
  ],
} satisfies Config;
