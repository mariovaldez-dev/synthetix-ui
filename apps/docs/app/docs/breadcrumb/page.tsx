import type { Metadata } from "next";
import { CodeSnippet } from "@/components/code-snippet";
import { ComponentPreview } from "@/components/component-preview";
import { BreadcrumbDemo, BreadcrumbCustomizationDemo } from "@/components/demos/nav-demos";

export const metadata: Metadata = { title: "Breadcrumb" };

export default function BreadcrumbPage() {
  return (
    <div>
      <h1>Breadcrumb</h1>
      <p>
        Documentación para el componente Breadcrumb. Próximamente se añadirán ejemplos de uso y props detallados.
      </p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @chassis-ui add breadcrumb`} />

      <h2>Preview</h2><ComponentPreview><BreadcrumbDemo /></ComponentPreview>

      <h2>Personalización</h2>
      <p>
        Usa <code>className</code> para personalizar estilos individuales. Para cambiar el color primario globalmente, usa el selector de tema en la barra superior.
      </p>
      <ComponentPreview>
        <BreadcrumbCustomizationDemo />
      </ComponentPreview>

<h2>Uso básico</h2>
      <CodeSnippet
        code={`import { Breadcrumb } from "@chassis-ui/core";

export function Example() {
  return <Breadcrumb />;
}`}
      />
    </div>
  );
}
