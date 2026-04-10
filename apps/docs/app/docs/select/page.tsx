import type { Metadata } from "next";
import { ComponentPreview, PropsTable } from "@/components/component-preview";
import { CodeSnippet } from "@/components/code-snippet";
import { SelectBasicDemo, SelectErrorDemo, SelectCustomizationDemo } from "@/components/demos/select-demo";

export const metadata: Metadata = { title: "Select" };

export default function SelectPage() {
  return (
    <div>
      <h1>Select</h1>
      <p>Campo de selección nativo con soporte para label, placeholder y estado de error.</p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @synthetix-ui add select`} />

      <h2>Uso</h2>
      <CodeSnippet
        code={`import { Select } from "@/components/ui/select";

const options = [
  { value: "es", label: "Español" },
  { value: "en", label: "English" },
];

export function Example() {
  return <Select options={options} label="Idioma" placeholder="Selecciona..." />;
}`}
      />

      <h2>Básico</h2>
      <ComponentPreview
        code={`<Select
  options={[
    { value: "es", label: "Español" },
    { value: "en", label: "English" },
    { value: "fr", label: "Français" },
    { value: "de", label: "Deutsch", disabled: true },
  ]}
  label="Idioma"
  placeholder="Selecciona..."
/>`}
      >
        <SelectBasicDemo />
      </ComponentPreview>

      <h2>Con error</h2>
      <ComponentPreview
        code={`<Select
  options={options}
  label="Idioma"
  placeholder="Selecciona..."
  errorText="Este campo es requerido"
/>`}
      >
        <SelectErrorDemo />
      </ComponentPreview>

      <h2>Personalización</h2>
      <p>
        Usa <code>className</code> para personalizar estilos individuales. Para cambiar el color primario globalmente, usa el selector de tema en la barra superior.
      </p>
      <ComponentPreview
        code={`<Select options={options} label="Redondeado" placeholder="Selecciona..." className="rounded-full" />
<Select options={options} label="Fondo muted" placeholder="Selecciona..." className="bg-muted border-transparent" />`}
      >
        <SelectCustomizationDemo />
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
            name: "placeholder",
            type: "string",
            description: "Opción inicial deshabilitada",
          },
          {
            name: "options",
            type: "Array<{ value: string; label: string; disabled?: boolean }>",
            description: "Lista de opciones",
          },
          {
            name: "errorText",
            type: "string",
            description: "Mensaje de error (activa borde rojo)",
          },
          {
            name: "helperText",
            type: "string",
            description: "Texto de ayuda debajo del campo",
          },
          {
            name: "disabled",
            type: "boolean",
            default: "false",
            description: "Deshabilita el select",
          },
        ]}
      />
    </div>
  );
}
