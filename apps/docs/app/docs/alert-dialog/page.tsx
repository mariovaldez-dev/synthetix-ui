import type { Metadata } from "next";
import { CodeSnippet } from "@/components/code-snippet";
import { ComponentPreview } from "@/components/component-preview";
import { AlertDialogDemo } from "@/components/demos/feedback-demos";

export const metadata: Metadata = { title: "Alert Dialog" };

export default function AlertDialogPage() {
  return (
    <div>
      <h1>Alert Dialog</h1>
      <p>
        Documentación para el componente Alert Dialog. Próximamente se añadirán ejemplos de uso y props detallados.
      </p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @chassis-ui add alert-dialog`} />

      <h2>Preview</h2><ComponentPreview><AlertDialogDemo /></ComponentPreview>

<h2>Uso básico</h2>
      <CodeSnippet
        code={`import { AlertDialog } from "@chassis-ui/core";

export function Example() {
  return <AlertDialog />;
}`}
      />
    </div>
  );
}
