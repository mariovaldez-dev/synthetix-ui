import type { Metadata } from "next";
import { ComponentPreview, PropsTable } from "@/components/component-preview";
import { CodeSnippet } from "@/components/code-snippet";
import { AccordionDemo, AccordionMultipleDemo, AccordionCustomizationDemo } from "@/components/demos/ui-demos";

export const metadata: Metadata = { title: "Accordion" };

export default function AccordionPage() {
  return (
    <div>
      <h1>Accordion</h1>
      <p>Lista de secciones expandibles con soporte para modo individual y múltiple.</p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @synthetix-ui add accordion`} />

      <h2>Uso</h2>
      <CodeSnippet
        code={`import { Accordion } from "@/components/ui/accordion";

const items = [
  { id: "q1", trigger: "¿Qué es synthetix-ui?", content: "Una librería de componentes UI para React." },
  { id: "q2", trigger: "¿Cómo se instala?", content: "Con npx @synthetix-ui add <componente>." },
];

export function Example() {
  return <Accordion items={items} />;
}`}
      />

      <h2>Individual (default)</h2>
      <ComponentPreview
        code={`<Accordion items={items} />`}
      >
        <AccordionDemo />
      </ComponentPreview>

      <h2>Múltiple</h2>
      <ComponentPreview
        code={`<Accordion items={items} multiple defaultOpen={["q1"]} />`}
      >
        <AccordionMultipleDemo />
      </ComponentPreview>

      <h2>Personalización</h2>
      <p>
        Usa <code>className</code> para personalizar estilos individuales. Para cambiar el color primario globalmente, usa el selector de tema en la barra superior.
      </p>
      <ComponentPreview
        code={`<Accordion
  items={items}
  className="rounded-xl border-2 border-primary/30 overflow-hidden"
/>`}
      >
        <AccordionCustomizationDemo />
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable
        props={[
          {
            name: "items",
            type: "AccordionItem[]",
            description: "Lista de ítems del accordion",
          },
          {
            name: "multiple",
            type: "boolean",
            default: "false",
            description: "Permite tener varios ítems abiertos simultáneamente",
          },
          {
            name: "defaultOpen",
            type: "string[]",
            description: "IDs de ítems abiertos por defecto",
          },
        ]}
      />

      <h2>AccordionItem</h2>
      <PropsTable
        props={[
          {
            name: "id",
            type: "string",
            description: "Identificador único del ítem",
          },
          {
            name: "trigger",
            type: "React.ReactNode",
            description: "Contenido del botón de apertura",
          },
          {
            name: "content",
            type: "React.ReactNode",
            description: "Contenido expandible",
          },
          {
            name: "disabled",
            type: "boolean",
            default: "false",
            description: "Deshabilita el ítem",
          },
        ]}
      />

      <h2>Accesibilidad</h2>
      <p>
        Implementa el patrón WAI-ARIA Accordion con <code>aria-expanded</code>,{" "}
        <code>aria-controls</code> y <code>aria-labelledby</code>. Navegable completamente
        por teclado.
      </p>
    </div>
  );
}