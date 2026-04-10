import chassisPreset from "@chassis-ui/tailwind-preset";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  presets: [chassisPreset],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "../../packages/core/src/**/*.{ts,tsx}",
  ],
};
