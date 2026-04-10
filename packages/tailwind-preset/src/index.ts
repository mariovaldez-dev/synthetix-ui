import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";
import { fontFamily, fontSize, fontWeight, spacing, borderRadius, lightTokens, darkTokens, tokensToCSS } from "@synthetix-ui/tokens";

/**
 * Plugin de Tailwind que inyecta las CSS custom properties en :root y .dark
 * usando addBase(). Así los consumidores solo incluyen el preset y obtienen
 * el sistema de temas sin añadir CSS manual.
 */
export const cssVarsPlugin = plugin(({ addBase }) => {
  addBase({
    ":root": tokensToCSS(lightTokens),
    ".dark": tokensToCSS(darkTokens),
  });
});

/**
 * Colores semánticos que apuntan a CSS custom properties.
 * Los valores son `hsl(var(--color-*))` para que Tailwind pueda
 * componer opacidades: `bg-primary/50` → `hsl(var(--color-primary) / 0.5)`.
 */
const semanticColors = {
  background: "hsl(var(--color-background))",
  foreground: "hsl(var(--color-foreground))",
  card: {
    DEFAULT: "hsl(var(--color-card))",
    foreground: "hsl(var(--color-card-foreground))",
  },
  popover: {
    DEFAULT: "hsl(var(--color-popover))",
    foreground: "hsl(var(--color-popover-foreground))",
  },
  primary: {
    DEFAULT: "hsl(var(--color-primary))",
    foreground: "hsl(var(--color-primary-foreground))",
  },
  secondary: {
    DEFAULT: "hsl(var(--color-secondary))",
    foreground: "hsl(var(--color-secondary-foreground))",
  },
  muted: {
    DEFAULT: "hsl(var(--color-muted))",
    foreground: "hsl(var(--color-muted-foreground))",
  },
  accent: {
    DEFAULT: "hsl(var(--color-accent))",
    foreground: "hsl(var(--color-accent-foreground))",
  },
  destructive: {
    DEFAULT: "hsl(var(--color-destructive))",
    foreground: "hsl(var(--color-destructive-foreground))",
  },
  success: {
    DEFAULT: "hsl(var(--color-success))",
    foreground: "hsl(var(--color-success-foreground))",
  },
  warning: {
    DEFAULT: "hsl(var(--color-warning))",
    foreground: "hsl(var(--color-warning-foreground))",
  },
  info: {
    DEFAULT: "hsl(var(--color-info))",
    foreground: "hsl(var(--color-info-foreground))",
  },
  border: "hsl(var(--color-border))",
  input: "hsl(var(--color-input))",
  ring: "hsl(var(--color-ring))",
};

const preset = {
  content: [],
  theme: {
    extend: {
      colors: semanticColors,
      borderRadius: {
        ...borderRadius,
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: fontFamily as unknown as Record<string, string[]>,
      fontSize: fontSize as unknown as Record<string, [string, Record<string, string>]>,
      fontWeight,
      spacing,
      // Keyframes para animate-in (fade, zoom, slide) usado por Dialog, Toast, Tooltip
      keyframes: {
        "fade-in":             { from: { opacity: "0" } },
        "fade-out":            { to:   { opacity: "0" } },
        "zoom-in-95":          { from: { transform: "scale(0.95)" } },
        "zoom-out-95":         { to:   { transform: "scale(0.95)" } },
        "slide-in-from-right-5": { from: { transform: "translateX(1.25rem)" } },
      },
      animation: {
        "in":               "fade-in 0.15s ease-out",
        "out":              "fade-out 0.15s ease-in",
        "zoom-in-95":       "zoom-in-95 0.15s ease-out",
        "zoom-out-95":      "zoom-out-95 0.15s ease-in",
        "slide-in-from-right-5": "slide-in-from-right-5 0.2s ease-out",
      },
      boxShadow: {
        // Sombras ultra-sutiles para UI minimalista
        sm:  "0 1px 2px 0 rgb(0 0 0 / 0.04)",
        DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)",
        md:  "0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.07)",
        lg:  "0 10px 15px -3px rgb(0 0 0 / 0.07), 0 4px 6px -4px rgb(0 0 0 / 0.07)",
        xl:  "0 20px 25px -5px rgb(0 0 0 / 0.07), 0 8px 10px -6px rgb(0 0 0 / 0.07)",
      },
    },
  },
  plugins: [cssVarsPlugin],
} satisfies Config;

export default preset;
