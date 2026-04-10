import type { Config } from "tailwindcss";
import chassisPreset from "@chassis-ui/tailwind-preset";

export default {
  presets: [chassisPreset],
  content: [
    "./src/**/*.{ts,tsx}",
    "../../packages/core/src/**/*.{ts,tsx}",
    "../../packages/icons/src/**/*.{ts,tsx}",
  ],
} satisfies Config;
