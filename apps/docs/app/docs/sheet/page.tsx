import type { Metadata } from "next";
import { CodeSnippet } from "@/components/code-snippet";
import { ComponentPreview } from "@/components/component-preview";
import { SheetDemo } from "@/components/demos/overlay-demos";

export const metadata: Metadata = { title: "Sheet" };

export default function SheetPage() {
  return (
    <div>
      <h1>Sheet</h1>
      <p>
        Documentación para el componente Sheet. Próximamente se añadirán ejemplos de uso y props detallados.
      </p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @chassis-ui add sheet`} />

      <h2>Preview</h2><ComponentPreview><SheetDemo /></ComponentPreview>

<h2>Uso básico</h2>
      <CodeSnippet
        code={`import { Sheet } from "@chassis-ui/core";

export function Example() {
  return <Sheet />;
}`}
      />
    </div>
  );
}
