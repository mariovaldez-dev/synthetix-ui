import type { Metadata } from "next";
import { CodeSnippet } from "@/components/code-snippet";
import { ComponentPreview } from "@/components/component-preview";
import { DrawerDemo } from "@/components/demos/overlay-demos";

export const metadata: Metadata = { title: "Drawer" };

export default function DrawerPage() {
  return (
    <div>
      <h1>Drawer</h1>
      <p>
        Documentación para el componente Drawer. Próximamente se añadirán ejemplos de uso y props detallados.
      </p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @chassis-ui add drawer`} />

      <h2>Preview</h2><ComponentPreview><DrawerDemo /></ComponentPreview>

<h2>Uso básico</h2>
      <CodeSnippet
        code={`import { Drawer } from "@chassis-ui/core";

export function Example() {
  return <Drawer />;
}`}
      />
    </div>
  );
}
