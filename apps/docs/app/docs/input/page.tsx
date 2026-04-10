import type { Metadata } from "next";
import { ComponentPreview, PropsTable } from "@/components/component-preview";
import { CodeSnippet } from "@/components/code-snippet";
import {
  InputBasicDemo,
  InputHelperDemo,
  InputErrorDemo,
  InputIconDemo,
  InputCustomizationDemo,
} from "@/components/demos/input-demo";

export const metadata: Metadata = { title: "Input" };

export default function InputPage() {
  return (
    <div>
      <h1>Input</h1>
      <p>
        Campo de texto accesible con soporte para label, mensajes de ayuda y error,
        elementos decoradores y gestión automática de IDs con <code>useId</code>.
      </p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @synthetix-ui add input`} />

      <h2>Uso</h2>
      <CodeSnippet
        code={`import { Input } from "@/components/ui/input";

export function Example() {
  return <Input label="Nombre" placeholder="Mario Flores" />;
}`}
      />

      <h2>Uso básico</h2>
      <ComponentPreview
        code={`<Input label="Nombre" placeholder="Mario Flores" />`}
      >
        <InputBasicDemo />
      </ComponentPreview>

      <h2>Con texto de ayuda</h2>
      <ComponentPreview
        code={`<Input label="Contraseña" type="password" helperText="Mínimo 8 caracteres" />`}
      >
        <InputHelperDemo />
      </ComponentPreview>

      <h2>Con error</h2>
      <ComponentPreview
        code={`<Input label="Email" defaultValue="no-es-email" errorText="Introduce un email válido" />`}
      >
        <InputErrorDemo />
      </ComponentPreview>

      <h2>Con icono</h2>
      <ComponentPreview
        code={`import { SearchIcon } from "@synthetix-ui/icons";

<Input
  label="Buscar"
  placeholder="Buscar componentes..."
  leftElement={<SearchIcon size={14} />}
/>`}
      >
        <InputIconDemo />
      </ComponentPreview>

      <h2>Personalización</h2>
      <p>
        Usa <code>className</code> para personalizar estilos individuales. Para cambiar el color primario globalmente, usa el selector de tema en la barra superior.
      </p>
      <ComponentPreview
        code={`<Input label="Redondeado" placeholder="Buscar..." className="rounded-full px-4" />
<Input
  label="Sin borde inferior"
  placeholder="Estilo underline"
  className="rounded-none border-0 border-b-2 border-primary shadow-none px-0 focus-visible:ring-0"
/>
<Input
  label="Fondo de acento"
  placeholder="Relleno suave"
  className="bg-muted border-transparent focus-visible:bg-background"
/>`}
      >
        <InputCustomizationDemo />
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable
        props={[
          { name: "label", type: "string", description: "Texto del label visible" },
          { name: "helperText", type: "string", description: "Texto de ayuda debajo del input" },
          { name: "errorText", type: "string", description: "Mensaje de error — activa estado error" },
          { name: "leftElement", type: "ReactNode", description: "Elemento a la izquierda (icono, texto)" },
          { name: "rightElement", type: "ReactNode", description: "Elemento a la derecha (icono, botón)" },
          { name: "fullWidth", type: "boolean", default: "false", description: "Ocupa todo el ancho" },
        ]}
      />
    </div>
  );
}
