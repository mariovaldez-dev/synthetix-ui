import type { Metadata } from "next";
import { CodeSnippet } from "@/components/code-snippet";
import { ComponentPreview } from "@/components/component-preview";
import { DropdownMenuDemo, DropdownMenuCustomizationDemo } from "@/components/demos/overlay-demos";

export const metadata: Metadata = { title: "Dropdown Menu" };

export default function DropdownMenuPage() {
  return (
    <div>
      <h1>Dropdown Menu</h1>
      <p>
        Documentación para el componente Dropdown Menu. Próximamente se añadirán ejemplos de uso y props detallados.
      </p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @synthetix-ui add dropdown-menu`} />

      <h2>Preview</h2><ComponentPreview><DropdownMenuDemo /></ComponentPreview>

      <h2>Personalización</h2>
      <p>
        Usa <code>className</code> para personalizar estilos individuales. Para cambiar el color primario globalmente, usa el selector de tema en la barra superior.
      </p>
      <ComponentPreview>
        <DropdownMenuCustomizationDemo />
      </ComponentPreview>

<h2>Uso básico</h2>
      <CodeSnippet
        code={`import { DropdownMenu } from "@synthetix-ui/core";

export function Example() {
  return <DropdownMenu />;
}`}
      />
    </div>
  );
}
