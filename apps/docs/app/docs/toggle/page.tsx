import type { Metadata } from "next";
import { CodeSnippet } from "@/components/code-snippet";
import { ComponentPreview } from "@/components/component-preview";
import { ToggleDemo, ToggleCustomizationDemo } from "@/components/demos/form-extras-demos";

const Bold = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 12h9a4 4 0 0 1 0 8H6v-8Z"/><path d="M6 4h7a4 4 0 0 1 0 8H6V4Z"/></svg>
);

export const metadata: Metadata = { title: "Toggle" };

export default function TogglePage() {
  return (
    <div>
      <h1>Toggle</h1>
      <p>
        Un botón de dos estados que puede estar activado o desactivado.
      </p>

      <h2>Preview</h2>
      <ComponentPreview>
        <ToggleDemo />
      </ComponentPreview>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @synthetix-ui add toggle`} />

      <h2>Personalización</h2>
      <p>
        Usa <code>className</code> para personalizar estilos individuales. Para cambiar el color primario globalmente, usa el selector de tema en la barra superior.
      </p>
      <ComponentPreview>
        <ToggleCustomizationDemo />
      </ComponentPreview>

      <h2>Uso básico</h2>
      <CodeSnippet
        code={`import { Toggle } from "@synthetix-ui/core";
import { Bold } from "@synthetix-ui/icons";

export function Example() {
  return (
    <Toggle aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </Toggle>
  );
}`}
      />
    </div>
  );
}
