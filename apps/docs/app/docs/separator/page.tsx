import type { Metadata } from "next";
import { CodeSnippet } from "@/components/code-snippet";
import { ComponentPreview } from "@/components/component-preview";
import { SeparatorDemo, SeparatorCustomizationDemo } from "@/components/demos/display-demos";

export const metadata: Metadata = { title: "Separator" };

export default function SeparatorPage() {
  return (
    <div>
      <h1>Separator</h1>
      <p>
        Documentación para el componente Separator. Próximamente se añadirán ejemplos de uso y props detallados.
      </p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @synthetix-ui add separator`} />

      <h2>Preview</h2><ComponentPreview><SeparatorDemo /></ComponentPreview>

      <h2>Personalización</h2>
      <p>
        Usa <code>className</code> para personalizar estilos individuales. Para cambiar el color primario globalmente, usa el selector de tema en la barra superior.
      </p>
      <ComponentPreview>
        <SeparatorCustomizationDemo />
      </ComponentPreview>

<h2>Uso básico</h2>
      <CodeSnippet
        code={`import { Separator } from "@synthetix-ui/core";

export function Example() {
  return <Separator />;
}`}
      />
    </div>
  );
}
