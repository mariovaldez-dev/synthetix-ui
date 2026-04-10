import type { Metadata } from "next";
import { CodeSnippet } from "@/components/code-snippet";
import { ThemePicker } from "@/components/theme-picker";

export const metadata: Metadata = { title: "Theming" };

const semanticColors = [
  { name: "background", label: "Background", class: "bg-background border border-border" },
  { name: "foreground", label: "Foreground", class: "bg-foreground" },
  { name: "primary", label: "Primary", class: "bg-primary" },
  { name: "primary-fg", label: "Primary FG", class: "bg-primary-foreground border border-border" },
  { name: "secondary", label: "Secondary", class: "bg-secondary" },
  { name: "muted", label: "Muted", class: "bg-muted" },
  { name: "accent", label: "Accent", class: "bg-accent" },
  { name: "destructive", label: "Destructive", class: "bg-destructive" },
  { name: "success", label: "Success", class: "bg-success" },
  { name: "warning", label: "Warning", class: "bg-warning" },
  { name: "info", label: "Info", class: "bg-info" },
  { name: "border", label: "Border", class: "bg-border" },
];

export default function ThemingPage() {
  return (
    <div>
      <h1>Theming</h1>
      <p>
        chassis-ui usa CSS custom properties (HSL) para su sistema de colores.
        El preset de Tailwind inyecta automáticamente las variables en <code>:root</code> y{" "}
        <code>.dark</code>, habilitando dark mode sin configuración adicional.
      </p>

      <h2>Selector de tema interactivo</h2>
      <p>
        Usa el selector de color en la barra superior para cambiar el color primario de todos
        los componentes en tiempo real. Puedes elegir entre presets predefinidos o introducir
        cualquier color hexadecimal personalizado. La selección persiste entre visitas.
      </p>

      <div className="not-prose my-6 flex items-center gap-4 rounded-xl border border-border bg-muted px-5 py-4">
        <div className="flex-1">
          <p className="text-sm font-medium text-foreground">Prueba el selector de tema</p>
          <p className="text-xs text-muted-foreground mt-0.5">
            Cambia el color primario y observa cómo se actualiza la paleta de abajo.
          </p>
        </div>
        <ThemePicker />
      </div>

      <h2>¿Cómo funciona?</h2>
      <p>
        Cada color semántico es una variable CSS con canales HSL sin <code>hsl()</code>,
        lo que permite que Tailwind compose opacidades: <code>bg-primary/50</code>.
      </p>

      <CodeSnippet
        lang="css"
        label="Variables generadas"
        code={`/* Generado automáticamente por cssVarsPlugin */
:root {
  --color-primary: 221.2 83.2% 53.3%;
  --color-background: 0 0% 100%;
  /* ... */
}
.dark {
  --color-primary: 217.2 91.2% 59.8%;
  --color-background: 222.2 84% 4.9%;
  /* ... */
}`}
      />

      <h2>Personalizar tu tema en CSS</h2>
      <p>Sobreescribe las variables CSS en tu hoja de estilos global:</p>

      <CodeSnippet
        lang="css"
        label="globals.css"
        code={`/* globals.css */
:root {
  /* Cambia el color primario a violeta */
  --color-primary: 270 95% 60%;
  --color-primary-foreground: 0 0% 100%;
  --radius: 0.75rem;
}`}
      />

      <h2>Paleta semántica</h2>
      <p>Estos son los tokens de color disponibles como clases de Tailwind:</p>

      <div className="not-prose my-4 grid grid-cols-4 gap-3 sm:grid-cols-6">
        {semanticColors.map((c) => (
          <div key={c.name} className="flex flex-col items-center gap-1.5">
            <div className={`h-10 w-full rounded-md shadow-sm ${c.class}`} />
            <span className="text-center text-[10px] text-muted-foreground leading-tight">{c.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
