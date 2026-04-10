import type { Metadata } from "next";
import { CodeSnippet } from "@/components/code-snippet";
import { ComponentPreview, PropsTable } from "@/components/component-preview";
import { ResizableDemo, ResizableCustomizationDemo } from "@/components/demos/complex-demos";

export const metadata: Metadata = { title: "Resizable" };

export default function ResizablePage() {
  return (
    <div>
      <h1>Resizable</h1>
      <p>
        Paneles redimensionables con handle arrastrable, soporte para layouts horizontal y vertical,
        y tamaños mínimos/máximos. Construido sobre <code>react-resizable-panels</code>.
      </p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @synthetix-ui add resizable`} />

      <h2>Uso</h2>
      <CodeSnippet
        code={`import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";

export function Example() {
  return (
    <ResizablePanelGroup direction="horizontal" className="min-h-[200px] rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          Panel izquierdo
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          Panel derecho
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}`}
      />

      <h2>Demo</h2>
      <ComponentPreview
        code={`<ResizablePanelGroup direction="horizontal" className="min-h-[200px] rounded-lg border">
  <ResizablePanel defaultSize={50}>Panel izquierdo</ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={50}>
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel defaultSize={50}>Panel arriba</ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>Panel abajo</ResizablePanel>
    </ResizablePanelGroup>
  </ResizablePanel>
</ResizablePanelGroup>`}
      >
        <ResizableDemo />
      </ComponentPreview>

      <h2>Personalización</h2>
      <ComponentPreview
        code={`<ResizablePanelGroup direction="horizontal" className="rounded-xl border-2 border-primary/20">
  <ResizablePanel defaultSize={30} minSize={20}>
    <div className="bg-primary/5 p-4">Sidebar</div>
  </ResizablePanel>
  <ResizableHandle className="bg-primary/20 hover:bg-primary/40 transition-colors" />
  <ResizablePanel defaultSize={70}>Contenido</ResizablePanel>
</ResizablePanelGroup>`}
      >
        <ResizableCustomizationDemo />
      </ComponentPreview>

      <h2>Props — ResizablePanelGroup</h2>
      <PropsTable
        props={[
          {
            name: "direction",
            type: `"horizontal" | "vertical"`,
            description: "Dirección del layout de paneles",
          },
          {
            name: "className",
            type: "string",
            description: "Clases adicionales de Tailwind",
          },
        ]}
      />

      <h2>Props — ResizablePanel</h2>
      <PropsTable
        props={[
          {
            name: "defaultSize",
            type: "number",
            description: "Tamaño inicial en porcentaje (0-100)",
          },
          {
            name: "minSize",
            type: "number",
            description: "Tamaño mínimo en porcentaje",
          },
          {
            name: "maxSize",
            type: "number",
            description: "Tamaño máximo en porcentaje",
          },
        ]}
      />

      <h2>Props — ResizableHandle</h2>
      <PropsTable
        props={[
          {
            name: "withHandle",
            type: "boolean",
            default: "false",
            description: "Muestra el grip visual en el centro del handle",
          },
          {
            name: "className",
            type: "string",
            description: "Clases adicionales para el handle",
          },
        ]}
      />
    </div>
  );
}
