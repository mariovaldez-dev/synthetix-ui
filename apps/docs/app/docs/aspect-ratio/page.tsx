import type { Metadata } from "next";
import { CodeSnippet } from "@/components/code-snippet";
import { ComponentPreview } from "@/components/component-preview";
import { AspectRatioDemo } from "@/components/demos/display-demos";

export const metadata: Metadata = { title: "Aspect Ratio" };

export default function AspectRatioPage() {
  return (
    <div>
      <h1>Aspect Ratio</h1>
      <p>
        Documentación para el componente Aspect Ratio. Próximamente se añadirán ejemplos de uso y props detallados.
      </p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @synthetix-ui add aspect-ratio`} />

      <h2>Preview</h2><ComponentPreview code={`<AspectRatio ratio={16 / 9}>
  <img src="..." className="object-cover" />
</AspectRatio>`}><AspectRatioDemo /></ComponentPreview>

<h2>Uso básico</h2>
      <CodeSnippet
        code={`import { AspectRatio } from "@synthetix-ui/core";

export function Example() {
  return <AspectRatio />;
}`}
      />
    </div>
  );
}
