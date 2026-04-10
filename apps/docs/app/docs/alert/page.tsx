import type { Metadata } from "next";
import { CodeSnippet } from "@/components/code-snippet";
import { ComponentPreview } from "@/components/component-preview";
import { AlertDemo, AlertVariantsDemo, AlertCustomizationDemo } from "@/components/demos/feedback-demos";

export const metadata: Metadata = { title: "Alert" };

export default function AlertPage() {
  return (
    <div>
      <h1>Alert</h1>
      <p>
        Documentación para el componente Alert. Próximamente se añadirán ejemplos de uso y props detallados.
      </p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @synthetix-ui add alert`} />

      <h2>Preview</h2><h3>Básico</h3><ComponentPreview><AlertDemo /></ComponentPreview><h3>Variantes</h3><ComponentPreview><AlertVariantsDemo /></ComponentPreview>

      <h2>Personalización</h2>
      <p>
        Usa <code>className</code> para personalizar estilos individuales. Para cambiar el color primario globalmente, usa el selector de tema en la barra superior.
      </p>
      <ComponentPreview>
        <AlertCustomizationDemo />
      </ComponentPreview>

<h2>Uso básico</h2>
      <CodeSnippet
        code={`import { Alert } from "@synthetix-ui/core";

export function Example() {
  return <Alert />;
}`}
      />
    </div>
  );
}
