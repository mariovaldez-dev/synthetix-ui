import type { Metadata } from "next";
import { CodeSnippet } from "@/components/code-snippet";
import { ComponentPreview, PropsTable } from "@/components/component-preview";
import { ScrollAreaDemo, ScrollAreaCustomizationDemo } from "@/components/demos/complex-demos";

export const metadata: Metadata = { title: "Scroll Area" };

export default function ScrollAreaPage() {
  return (
    <div>
      <h1>Scroll Area</h1>
      <p>
        Área de scroll con scrollbar personalizada y consistente entre navegadores y sistemas operativos.
        Construida sobre Radix UI Scroll Area.
      </p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @synthetix-ui add scroll-area`} />

      <h2>Uso</h2>
      <CodeSnippet
        code={`import { ScrollArea } from "@/components/ui/scroll-area";

export function Example() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        {items.map((item) => (
          <div key={item} className="text-sm py-1">{item}</div>
        ))}
      </div>
    </ScrollArea>
  );
}`}
      />

      <h2>Demo</h2>
      <ComponentPreview
        code={`<ScrollArea className="h-64 w-48 rounded-md border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium">Versiones</h4>
    {versions.map((tag) => (
      <div key={tag} className="text-sm py-1">{tag}</div>
    ))}
  </div>
</ScrollArea>`}
      >
        <ScrollAreaDemo />
      </ComponentPreview>

      <h2>Personalización</h2>
      <p>
        Usa <code>className</code> para cambiar altura, ancho, bordes y fondo del contenedor.
      </p>
      <ComponentPreview
        code={`<ScrollArea className="h-48 w-80 rounded-xl border-2 border-primary/20">
  <div className="p-4 space-y-3">
    {items.map((item) => (
      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted">
        <div className="h-8 w-8 rounded-full bg-primary/60" />
        <div className="text-sm font-medium">{item.name}</div>
      </div>
    ))}
  </div>
</ScrollArea>`}
      >
        <ScrollAreaCustomizationDemo />
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable
        props={[
          {
            name: "children",
            type: "React.ReactNode",
            description: "Contenido a renderizar dentro del área de scroll",
          },
          {
            name: "className",
            type: "string",
            description: "Clases para el contenedor (controla altura/ancho visible)",
          },
          {
            name: "type",
            type: `"auto" | "always" | "scroll" | "hover"`,
            default: `"hover"`,
            description: "Cuándo mostrar la scrollbar",
          },
        ]}
      />
    </div>
  );
}
