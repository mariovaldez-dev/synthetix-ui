import type { Metadata } from "next";
import { CodeSnippet } from "@/components/code-snippet";
import { ComponentPreview } from "@/components/component-preview";
import { ToggleGroupDemo, ToggleGroupCustomizationDemo } from "@/components/demos/form-extras-demos";

const Bold = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 12h9a4 4 0 0 1 0 8H6v-8Z"/><path d="M6 4h7a4 4 0 0 1 0 8H6V4Z"/></svg>
);

const Italic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/></svg>
);

export const metadata: Metadata = { title: "Toggle Group" };

export default function ToggleGroupPage() {
  return (
    <div>
      <h1>Toggle Group</h1>
      <p>
        Un conjunto de botones de dos estados que pueden estar activados o desactivados.
      </p>

      <h2>Preview</h2>
      <ComponentPreview>
        <ToggleGroupDemo />
      </ComponentPreview>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @chassis-ui add toggle-group`} />

      <h2>Personalización</h2>
      <p>
        Usa <code>className</code> para personalizar estilos individuales. Para cambiar el color primario globalmente, usa el selector de tema en la barra superior.
      </p>
      <ComponentPreview>
        <ToggleGroupCustomizationDemo />
      </ComponentPreview>

      <h2>Uso básico</h2>
      <CodeSnippet
        code={`import { ToggleGroup, ToggleGroupItem } from "@chassis-ui/core";
import { Bold, Italic, Underline } from "@chassis-ui/icons";

export function Example() {
  return (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}`}
      />
    </div>
  );
}
