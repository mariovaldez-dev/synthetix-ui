import type { Metadata } from "next";
import { CodeSnippet } from "@/components/code-snippet";
import { ComponentPreview } from "@/components/component-preview";
import { LabelDemo } from "@/components/demos/form-extras-demos";

export const metadata: Metadata = { title: "Label" };

export default function LabelPage() {
  return (
    <div>
      <h1>Label</h1>
      <p>
        Un componente de etiqueta accesible para controles de formulario.
      </p>

      <h2>Preview</h2>
      <ComponentPreview>
        <LabelDemo />
      </ComponentPreview>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @synthetix-ui add label`} />

      <h2>Uso básico</h2>
      <CodeSnippet
        code={`import { Label } from "@synthetix-ui/core";

export function Example() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  );
}`}
      />
    </div>
  );
}
