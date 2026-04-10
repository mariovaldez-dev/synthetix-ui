import type { Metadata } from "next";
import { CodeSnippet } from "@/components/code-snippet";
import { ComponentPreview } from "@/components/component-preview";
import { ContextMenuDemo } from "@/components/demos/overlay-demos";

export const metadata: Metadata = { title: "Context Menu" };

export default function ContextMenuPage() {
  return (
    <div>
      <h1>Context Menu</h1>
      <p>
        Documentación para el componente Context Menu. Próximamente se añadirán ejemplos de uso y props detallados.
      </p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @chassis-ui add context-menu`} />

      <h2>Preview</h2><ComponentPreview><ContextMenuDemo /></ComponentPreview>

<h2>Uso básico</h2>
      <CodeSnippet
        code={`import { ContextMenu } from "@chassis-ui/core";

export function Example() {
  return <ContextMenu />;
}`}
      />
    </div>
  );
}
