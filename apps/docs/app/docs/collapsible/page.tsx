import type { Metadata } from "next";
import { CodeSnippet } from "@/components/code-snippet";
import { ComponentPreview } from "@/components/component-preview";
import { CollapsibleDemo } from "@/components/demos/display-demos";

export const metadata: Metadata = { title: "Collapsible" };

export default function CollapsiblePage() {
  return (
    <div>
      <h1>Collapsible</h1>
      <p>
        Documentación para el componente Collapsible. Próximamente se añadirán ejemplos de uso y props detallados.
      </p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @chassis-ui add collapsible`} />

      <h2>Preview</h2><ComponentPreview><CollapsibleDemo /></ComponentPreview>

<h2>Uso básico</h2>
      <CodeSnippet
        code={`import { Collapsible } from "@chassis-ui/core";

export function Example() {
  return <Collapsible />;
}`}
      />
    </div>
  );
}
