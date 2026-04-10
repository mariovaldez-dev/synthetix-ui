import type { Metadata } from "next";
import { CodeSnippet } from "@/components/code-snippet";
import { ComponentPreview } from "@/components/component-preview";
import { RadioGroupDemo } from "@/components/demos/form-extras-demos";

export const metadata: Metadata = { title: "Radio Group" };

export default function RadioGroupPage() {
  return (
    <div>
      <h1>Radio Group</h1>
      <p>
        Un conjunto de botones de opción que permiten al usuario elegir una sola opción de una lista.
      </p>

      <h2>Preview</h2>
      <ComponentPreview>
        <RadioGroupDemo />
      </ComponentPreview>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @synthetix-ui add radio-group`} />

      <h2>Uso básico</h2>
      <CodeSnippet
        code={`import { RadioGroup, RadioGroupItem, Label } from "@synthetix-ui/core";

export function Example() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
    </RadioGroup>
  );
}`}
      />
    </div>
  );
}
