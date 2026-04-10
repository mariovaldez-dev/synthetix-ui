import type { Metadata } from "next";
import { CodeSnippet } from "@/components/code-snippet";
import { ComponentPreview } from "@/components/component-preview";
import { AvatarDemo, AvatarCustomizationDemo } from "@/components/demos/display-demos";

export const metadata: Metadata = { title: "Avatar" };

export default function AvatarPage() {
  return (
    <div>
      <h1>Avatar</h1>
      <p>
        Documentación para el componente Avatar. Próximamente se añadirán ejemplos de uso y props detallados.
      </p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @synthetix-ui add avatar`} />

      <h2>Preview</h2><ComponentPreview><AvatarDemo /></ComponentPreview>

      <h2>Personalización</h2>
      <p>
        Usa <code>className</code> para personalizar estilos individuales. Para cambiar el color primario globalmente, usa el selector de tema en la barra superior.
      </p>
      <ComponentPreview>
        <AvatarCustomizationDemo />
      </ComponentPreview>

<h2>Uso básico</h2>
      <CodeSnippet
        code={`import { Avatar } from "@synthetix-ui/core";

export function Example() {
  return <Avatar />;
}`}
      />
    </div>
  );
}
