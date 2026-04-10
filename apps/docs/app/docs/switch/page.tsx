import type { Metadata } from "next";
import { ComponentPreview, PropsTable } from "@/components/component-preview";
import { CodeSnippet } from "@/components/code-snippet";
import { SwitchDemo, SwitchCustomizationDemo } from "@/components/demos/form-demos";

export const metadata: Metadata = { title: "Switch" };

export default function SwitchPage() {
  return (
    <div>
      <h1>Switch</h1>
      <p>Toggle booleano accesible implementado sobre <code>input[type=checkbox]</code> con animación CSS.</p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @chassis-ui add switch`} />

      <h2>Uso</h2>
      <CodeSnippet
        code={`import { Switch } from "@/components/ui/switch";

export function Example() {
  return <Switch label="Modo oscuro" />;
}`}
      />

      <h2>Demo</h2>
      <ComponentPreview
        code={`<Switch label="Modo oscuro" />
<Switch label="Notificaciones activas" defaultChecked />
<Switch label="Opción deshabilitada" disabled />
<Switch
  label="Correos de marketing"
  helperText="Recibirás ofertas cada semana"
  size="lg"
/>`}
      >
        <SwitchDemo />
      </ComponentPreview>

      <h2>Personalización</h2>
      <p>
        Usa <code>className</code> para personalizar estilos individuales. Para cambiar el color primario globalmente, usa el selector de tema en la barra superior.
      </p>
      <ComponentPreview
        code={`<div style={{ "--color-primary": "263 70% 50%" }}>
  <Switch label="Violet" defaultChecked />
</div>
<div style={{ "--color-primary": "347 77% 50%" }}>
  <Switch label="Rose" defaultChecked />
</div>
<div style={{ "--color-primary": "160 84% 38%" }}>
  <Switch label="Emerald" defaultChecked />
</div>`}
      >
        <SwitchCustomizationDemo />
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable
        props={[
          {
            name: "label",
            type: "string",
            description: "Etiqueta visible del switch",
          },
          {
            name: "checked",
            type: "boolean",
            description: "Estado controlado",
          },
          {
            name: "defaultChecked",
            type: "boolean",
            description: "Estado inicial no controlado",
          },
          {
            name: "onChange",
            type: "(e: React.ChangeEvent<HTMLInputElement>) => void",
            description: "Callback al cambiar de estado",
          },
          {
            name: "disabled",
            type: "boolean",
            default: "false",
            description: "Deshabilita el switch",
          },
        ]}
      />

      <h2>Implementación</h2>
      <p>
        Usa un <code>{"<input type=\"checkbox\" class=\"peer sr-only\">"}</code> oculto con
        un elemento hermano estilizado via clases <code>peer-checked:</code> de Tailwind.
        Esto garantiza accesibilidad nativa sin JavaScript adicional.
      </p>
    </div>
  );
}
