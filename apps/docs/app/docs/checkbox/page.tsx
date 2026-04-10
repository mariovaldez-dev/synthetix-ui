import type { Metadata } from "next";
import { ComponentPreview, PropsTable } from "@/components/component-preview";
import { CodeSnippet } from "@/components/code-snippet";
import { CheckboxDemo, CheckboxErrorDemo, CheckboxCustomizationDemo } from "@/components/demos/form-demos";

export const metadata: Metadata = { title: "Checkbox" };

export default function CheckboxPage() {
  return (
    <div>
      <h1>Checkbox</h1>
      <p>Campo de selección booleana con soporte para estado indeterminado, error y helper text.</p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @synthetix-ui add checkbox`} />

      <h2>Uso</h2>
      <CodeSnippet
        code={`import { Checkbox } from "@/components/ui/checkbox";

export function Example() {
  return <Checkbox label="Acepto los términos y condiciones" />;
}`}
      />

      <h2>Básico</h2>
      <ComponentPreview
        code={`<Checkbox label="Acepto los términos y condiciones" />
<Checkbox label="Recibir notificaciones" defaultChecked />
<Checkbox label="Opción deshabilitada" disabled />
<Checkbox label="Seleccionar todo" indeterminate />`}
      >
        <CheckboxDemo />
      </ComponentPreview>

      <h2>Con error</h2>
      <ComponentPreview
        code={`<Checkbox
  label="Acepto los términos"
  errorText="Debes aceptar los términos para continuar"
/>`}
      >
        <CheckboxErrorDemo />
      </ComponentPreview>

      <h2>Personalización</h2>
      <p>
        Usa <code>className</code> para personalizar estilos individuales. Para cambiar el color primario globalmente, usa el selector de tema en la barra superior.
      </p>
      <ComponentPreview
        code={`<div style={{ "--color-primary": "263 70% 50%" }}>
  <Checkbox label="Violet" defaultChecked />
</div>
<div style={{ "--color-primary": "347 77% 50%" }}>
  <Checkbox label="Rose" defaultChecked />
</div>`}
      >
        <CheckboxCustomizationDemo />
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable
        props={[
          {
            name: "label",
            type: "string",
            description: "Texto de la etiqueta",
          },
          {
            name: "indeterminate",
            type: "boolean",
            default: "false",
            description: "Activa el estado indeterminado (vía ref)",
          },
          {
            name: "errorText",
            type: "string",
            description: "Mensaje de error",
          },
          {
            name: "helperText",
            type: "string",
            description: "Texto de ayuda",
          },
          {
            name: "disabled",
            type: "boolean",
            default: "false",
            description: "Deshabilita el checkbox",
          },
        ]}
      />
    </div>
  );
}
