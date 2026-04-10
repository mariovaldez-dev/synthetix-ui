import type { Metadata } from "next";
import { ComponentPreview, PropsTable } from "@/components/component-preview";
import { CodeSnippet } from "@/components/code-snippet";
import { TextareaBasicDemo, TextareaCounterDemo, TextareaCustomizationDemo } from "@/components/demos/form-demos";

export const metadata: Metadata = { title: "Textarea" };

export default function TextareaPage() {
  return (
    <div>
      <h1>Textarea</h1>
      <p>Campo de texto multilínea con auto-resize y contador de caracteres opcional.</p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @chassis-ui add textarea`} />

      <h2>Uso</h2>
      <CodeSnippet
        code={`import { Textarea } from "@/components/ui/textarea";

export function Example() {
  return <Textarea label="Descripción" placeholder="Describe tu proyecto..." rows={4} />;
}`}
      />

      <h2>Básico</h2>
      <ComponentPreview
        code={`<Textarea label="Descripción" placeholder="Describe tu proyecto..." rows={4} />`}
      >
        <TextareaBasicDemo />
      </ComponentPreview>

      <h2>Con contador</h2>
      <ComponentPreview
        code={`<Textarea
  label="Mensaje"
  placeholder="Escribe tu mensaje..."
  maxLength={280}
  showCount
  rows={4}
/>`}
      >
        <TextareaCounterDemo />
      </ComponentPreview>

      <h2>Personalización</h2>
      <p>
        Usa <code>className</code> para personalizar estilos individuales. Para cambiar el color primario globalmente, usa el selector de tema en la barra superior.
      </p>
      <ComponentPreview
        code={`<Textarea label="Redondeado" placeholder="Estilo pill..." rows={2} className="rounded-xl" />
<Textarea
  label="Fondo muted"
  placeholder="Sin borde visible..."
  rows={2}
  className="bg-muted border-transparent focus-visible:bg-background"
/>`}
      >
        <TextareaCustomizationDemo />
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable
        props={[
          {
            name: "label",
            type: "string",
            description: "Etiqueta visible del campo",
          },
          {
            name: "autoResize",
            type: "boolean",
            default: "false",
            description: "Crece automáticamente al escribir",
          },
          {
            name: "maxLength",
            type: "number",
            description: "Límite de caracteres",
          },
          {
            name: "showCount",
            type: "boolean",
            default: "false",
            description: "Muestra contador caracteres / maxLength",
          },
          {
            name: "error",
            type: "string",
            description: "Mensaje de error",
          },
          {
            name: "helperText",
            type: "string",
            description: "Texto de ayuda",
          },
        ]}
      />
    </div>
  );
}
