import type { Metadata } from "next";
import { CodeSnippet } from "@/components/code-snippet";
import { ComponentPreview } from "@/components/component-preview";
import { TabsDemo, TabsCustomizationDemo } from "@/components/demos/nav-demos";

export const metadata: Metadata = { title: "Tabs" };

export default function TabsPage() {
  return (
    <div>
      <h1>Tabs</h1>
      <p>
        Documentación para el componente Tabs. Próximamente se añadirán ejemplos de uso y props detallados.
      </p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @chassis-ui add tabs`} />

      <h2>Preview</h2><ComponentPreview><TabsDemo /></ComponentPreview>

      <h2>Personalización</h2>
      <p>
        Usa <code>className</code> para personalizar estilos individuales. Para cambiar el color primario globalmente, usa el selector de tema en la barra superior.
      </p>
      <ComponentPreview>
        <TabsCustomizationDemo />
      </ComponentPreview>

<h2>Uso básico</h2>
      <CodeSnippet
        code={`import { Tabs } from "@chassis-ui/core";

export function Example() {
  return <Tabs />;
}`}
      />
    </div>
  );
}
