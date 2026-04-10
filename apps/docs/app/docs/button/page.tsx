import type { Metadata } from "next";
import { ComponentPreview, PropsTable } from "@/components/component-preview";
import { CodeSnippet } from "@/components/code-snippet";
import {
  ButtonVariantsDemo,
  ButtonSizesDemo,
  ButtonLoadingDemo,
  ButtonCustomizationDemo,
} from "@/components/demos/button-demo";

export const metadata: Metadata = { title: "Button" };

export default function ButtonPage() {
  return (
    <div>
      <h1>Button</h1>
      <p>
        Botón con cinco variantes de estilo, tres tamaños y soporte para estado de
        carga. Construido con CVA para composición de clases segura.
      </p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @chassis-ui add button`} />

      <h2>Uso</h2>
      <CodeSnippet
        code={`import { Button } from "@/components/ui/button";

export function Example() {
  return <Button>Guardar cambios</Button>;
}`}
      />

      <h2>Variantes</h2>
      <ComponentPreview
        code={[
          `<Button variant="primary">Primary</Button>`,
          `<Button variant="secondary">Secondary</Button>`,
          `<Button variant="outline">Outline</Button>`,
          `<Button variant="ghost">Ghost</Button>`,
          `<Button variant="danger">Danger</Button>`,
        ].join("\n")}
      >
        <ButtonVariantsDemo />
      </ComponentPreview>

      <h2>Tamaños</h2>
      <ComponentPreview>
        <ButtonSizesDemo />
      </ComponentPreview>

      <h2>Estado de carga</h2>
      <ComponentPreview code={`<Button isLoading>Guardando...</Button>`}>
        <ButtonLoadingDemo />
      </ComponentPreview>

      <h2>Personalización</h2>
      <p>
        Todos los botones aceptan <code>className</code> para sobreescribir o extender estilos con Tailwind.
        Para un cambio global del color primario, usa el selector de tema en la barra superior.
      </p>
      <ComponentPreview
        code={`<Button className="bg-gradient-to-r from-violet-500 to-indigo-600 text-white border-transparent">
  Gradient
</Button>
<Button className="rounded-full border-2 border-rose-400 bg-transparent text-rose-500">
  Pill outline
</Button>
<Button className="bg-amber-400 text-amber-950 border-transparent font-bold">
  Amber
</Button>`}
      >
        <ButtonCustomizationDemo />
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable
        props={[
          {
            name: "variant",
            type: `"primary" | "secondary" | "outline" | "ghost" | "danger"`,
            default: `"primary"`,
            description: "Estilo visual del botón",
          },
          {
            name: "size",
            type: `"sm" | "md" | "lg" | "icon"`,
            default: `"md"`,
            description: "Tamaño del botón",
          },
          {
            name: "isLoading",
            type: "boolean",
            default: "false",
            description: "Muestra spinner y deshabilita el botón",
          },
          {
            name: "disabled",
            type: "boolean",
            default: "false",
            description: "Deshabilita el botón",
          },
          {
            name: "className",
            type: "string",
            description: "Clases adicionales de Tailwind",
          },
        ]}
      />
    </div>
  );
}
