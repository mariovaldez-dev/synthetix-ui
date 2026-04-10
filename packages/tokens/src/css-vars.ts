/**
 * CSS custom properties para el sistema de temas de chassis-ui.
 *
 * Patrón: los valores son canales HSL sin la función hsl() para que
 * Tailwind pueda componer opacidades: `hsl(var(--color-primary) / 0.5)`.
 *
 * Palette base: zinc — fría, neutral, profesional (estilo Linear / Vercel).
 */

export type CssVarTokens = {
  "--color-background": string;
  "--color-foreground": string;
  "--color-card": string;
  "--color-card-foreground": string;
  "--color-popover": string;
  "--color-popover-foreground": string;
  "--color-primary": string;
  "--color-primary-foreground": string;
  "--color-secondary": string;
  "--color-secondary-foreground": string;
  "--color-muted": string;
  "--color-muted-foreground": string;
  "--color-accent": string;
  "--color-accent-foreground": string;
  "--color-destructive": string;
  "--color-destructive-foreground": string;
  "--color-success": string;
  "--color-success-foreground": string;
  "--color-warning": string;
  "--color-warning-foreground": string;
  "--color-info": string;
  "--color-info-foreground": string;
  "--color-border": string;
  "--color-input": string;
  "--color-ring": string;
  "--radius": string;
};

export const lightTokens: CssVarTokens = {
  // Off-white base — no pure white, evita el "glare"
  "--color-background":         "0 0% 98%",
  "--color-foreground":         "240 10% 7%",

  // Card levemente más blanca que el background
  "--color-card":               "0 0% 100%",
  "--color-card-foreground":    "240 10% 7%",

  "--color-popover":            "0 0% 100%",
  "--color-popover-foreground": "240 10% 7%",

  // Primary action — neutral / low contrast
  "--color-primary":            "240 4% 92%",
  "--color-primary-foreground": "240 10% 7%",

  // Secondary — fondo neutro suave
  "--color-secondary":            "240 4% 96%",
  "--color-secondary-foreground": "240 10% 15%",

  // Muted — muy neutro para superficies y etiquetas
  "--color-muted":            "240 5% 95%",
  "--color-muted-foreground": "240 5% 50%",

  // Accent — hover sutil y moderno
  "--color-accent":            "240 4% 92%",
  "--color-accent-foreground": "240 10% 7%",

  // Estados semánticos
  "--color-destructive":            "0 72.2% 50.6%",
  "--color-destructive-foreground": "0 0% 100%",

  "--color-success":            "142.4 71.8% 29.2%",
  "--color-success-foreground": "0 0% 100%",

  "--color-warning":            "25 95% 43%",
  "--color-warning-foreground": "0 0% 100%",

  "--color-info":            "224 76% 48%",
  "--color-info-foreground": "0 0% 100%",

  // Bordes — neutro cálido
  "--color-border": "240 4% 89%",
  "--color-input":  "240 4% 89%",
  "--color-ring":   "240 4% 92%",

  // Radio base 6px — preciso, no "bubbly"
  "--radius": "0.375rem",
};

export const darkTokens: CssVarTokens = {
  // zinc-950 base
  "--color-background":         "240 10% 7%",
  "--color-foreground":         "0 0% 96%",

  // Card ligeramente más clara que background
  "--color-card":               "240 10% 9%",
  "--color-card-foreground":    "0 0% 96%",

  "--color-popover":            "240 10% 9%",
  "--color-popover-foreground": "0 0% 96%",

  // Primary — neutral oscuro para acciones
  "--color-primary":            "240 4% 18%",
  "--color-primary-foreground": "0 0% 96%",

  // Secondary — neutro oscuro suave
  "--color-secondary":            "240 4% 16%",
  "--color-secondary-foreground": "0 0% 96%",

  // Muted — neutro profundo
  "--color-muted":            "240 4% 14%",
  "--color-muted-foreground": "240 5% 68%",

  // Accent
  "--color-accent":            "240 4% 16%",
  "--color-accent-foreground": "0 0% 96%",

  "--color-destructive":            "0 63% 31%",
  "--color-destructive-foreground": "0 0% 98%",

  "--color-success":            "142 72% 36%",
  "--color-success-foreground": "0 0% 98%",

  "--color-warning":            "38 92% 50%",
  "--color-warning-foreground": "25 95% 10%",

  "--color-info":            "217 91% 65%",
  "--color-info-foreground": "224 76% 10%",

  // Bordes — neutro profundo
  "--color-border": "240 4% 18%",
  "--color-input":  "240 4% 18%",
  "--color-ring":   "240 4% 16%",

  "--radius": "0.375rem",
};

export function tokensToCSS(tokens: CssVarTokens): Record<string, string> {
  return tokens as unknown as Record<string, string>;
}
