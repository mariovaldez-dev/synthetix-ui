import synthetixPreset from "@synthetix-ui/tailwind-preset";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  presets: [synthetixPreset],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "../../packages/core/src/**/*.{ts,tsx}",
  ],
};
