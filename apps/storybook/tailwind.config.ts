import type { Config } from "tailwindcss";
import synthetixPreset from "@synthetix-ui/tailwind-preset";

export default {
  presets: [synthetixPreset],
  content: [
    "./src/**/*.{ts,tsx}",
    "../../packages/core/src/**/*.{ts,tsx}",
    "../../packages/icons/src/**/*.{ts,tsx}",
  ],
} satisfies Config;
