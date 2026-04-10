import type { Metadata } from "next";
import { CodeSnippet } from "@/components/code-snippet";
import { ComponentPreview } from "@/components/component-preview";
import { PopoverDemo, PopoverCustomizationDemo } from "@/components/demos/overlay-demos";

export const metadata: Metadata = { title: "Popover" };

export default function PopoverPage() {
  return (
    <div>
      <h1>Popover</h1>
      <p>
        Documentación para el componente Popover. Próximamente se añadirán ejemplos de uso y props detallados.
      </p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @synthetix-ui add popover`} />

      <h2>Preview</h2><ComponentPreview><PopoverDemo /></ComponentPreview>

      <h2>Personalización</h2>
      <p>
        Usa <code>className</code> para personalizar estilos individuales. Para cambiar el color primario globalmente, usa el selector de tema en la barra superior.
      </p>
      <ComponentPreview>
        <PopoverCustomizationDemo />
      </ComponentPreview>

<h2>Uso básico</h2>
      <CodeSnippet
        code={`import { Popover } from "@synthetix-ui/core";

export function Example() {
  return <Popover />;
}`}
      />
    </div>
  );
}
