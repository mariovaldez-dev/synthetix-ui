import type { Metadata } from "next";
import { CodeSnippet } from "@/components/code-snippet";
import { ComponentPreview } from "@/components/component-preview";
import { CarouselDemo } from "@/components/demos/display-demos";

export const metadata: Metadata = { title: "Carousel" };

export default function CarouselPage() {
  return (
    <div>
      <h1>Carousel</h1>
      <p>
        Documentación para el componente Carousel. Próximamente se añadirán ejemplos de uso y props detallados.
      </p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @synthetix-ui add carousel`} />

      <h2>Preview</h2><ComponentPreview><CarouselDemo /></ComponentPreview>

<h2>Uso básico</h2>
      <CodeSnippet
        code={`import { Carousel } from "@synthetix-ui/core";

export function Example() {
  return <Carousel />;
}`}
      />
    </div>
  );
}
