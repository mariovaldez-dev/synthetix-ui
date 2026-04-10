import type { Metadata } from "next";
import { CodeSnippet } from "@/components/code-snippet";
import { ComponentPreview } from "@/components/component-preview";
import { SkeletonDemo, SkeletonCustomizationDemo } from "@/components/demos/display-demos";

export const metadata: Metadata = { title: "Skeleton" };

export default function SkeletonPage() {
  return (
    <div>
      <h1>Skeleton</h1>
      <p>
        Documentación para el componente Skeleton. Próximamente se añadirán ejemplos de uso y props detallados.
      </p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @chassis-ui add skeleton`} />

      <h2>Preview</h2><ComponentPreview><SkeletonDemo /></ComponentPreview>

      <h2>Personalización</h2>
      <p>
        Usa <code>className</code> para personalizar estilos individuales. Para cambiar el color primario globalmente, usa el selector de tema en la barra superior.
      </p>
      <ComponentPreview>
        <SkeletonCustomizationDemo />
      </ComponentPreview>

<h2>Uso básico</h2>
      <CodeSnippet
        code={`import { Skeleton } from "@chassis-ui/core";

export function Example() {
  return <Skeleton />;
}`}
      />
    </div>
  );
}
