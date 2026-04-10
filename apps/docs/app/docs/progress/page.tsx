import type { Metadata } from "next";
import { CodeSnippet } from "@/components/code-snippet";
import { ComponentPreview } from "@/components/component-preview";
import { ProgressDemo, ProgressCustomizationDemo } from "@/components/demos/feedback-demos";

export const metadata: Metadata = { title: "Progress" };

export default function ProgressPage() {
  return (
    <div>
      <h1>Progress</h1>
      <p>
        Documentación para el componente Progress. Próximamente se añadirán ejemplos de uso y props detallados.
      </p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @chassis-ui add progress`} />

      <h2>Preview</h2><ComponentPreview><ProgressDemo /></ComponentPreview>

      <h2>Personalización</h2>
      <p>
        Usa <code>className</code> para personalizar estilos individuales. Para cambiar el color primario globalmente, usa el selector de tema en la barra superior.
      </p>
      <ComponentPreview>
        <ProgressCustomizationDemo />
      </ComponentPreview>

<h2>Uso básico</h2>
      <CodeSnippet
        code={`import { Progress } from "@chassis-ui/core";

export function Example() {
  return <Progress />;
}`}
      />
    </div>
  );
}
