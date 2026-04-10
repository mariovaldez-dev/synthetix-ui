import type { Metadata } from "next";
import { CodeSnippet } from "@/components/code-snippet";
import { ComponentPreview } from "@/components/component-preview";
import { HoverCardDemo, HoverCardCustomizationDemo } from "@/components/demos/overlay-demos";

export const metadata: Metadata = { title: "Hover Card" };

export default function HoverCardPage() {
  return (
    <div>
      <h1>Hover Card</h1>
      <p>
        Documentación para el componente Hover Card. Próximamente se añadirán ejemplos de uso y props detallados.
      </p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @chassis-ui add hover-card`} />

      <h2>Preview</h2><ComponentPreview><HoverCardDemo /></ComponentPreview>

      <h2>Personalización</h2>
      <p>
        Usa <code>className</code> para personalizar estilos individuales. Para cambiar el color primario globalmente, usa el selector de tema en la barra superior.
      </p>
      <ComponentPreview>
        <HoverCardCustomizationDemo />
      </ComponentPreview>

<h2>Uso básico</h2>
      <CodeSnippet
        code={`import { HoverCard } from "@chassis-ui/core";

export function Example() {
  return <HoverCard />;
}`}
      />
    </div>
  );
}
