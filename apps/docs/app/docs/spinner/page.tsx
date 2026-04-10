import type { Metadata } from "next";
import { ComponentPreview, PropsTable } from "@/components/component-preview";
import { CodeSnippet } from "@/components/code-snippet";
import { SpinnerDemo, SpinnerColorsDemo, SpinnerCustomizationDemo } from "@/components/demos/ui-demos";

export const metadata: Metadata = { title: "Spinner" };

export default function SpinnerPage() {
  return (
    <div>
      <h1>Spinner</h1>
      <p>Indicador de carga animado con variantes de tamaño y color.</p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @synthetix-ui add spinner`} />

      <h2>Uso</h2>
      <CodeSnippet
        code={`import { Spinner } from "@/components/ui/spinner";

export function Example() {
  return <Spinner size="md" color="primary" />;
}`}
      />

      <h2>Tamaños</h2>
      <ComponentPreview
        code={`<Spinner size="xs" />
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
<Spinner size="xl" />`}
      >
        <SpinnerDemo />
      </ComponentPreview>

      <h2>Colores</h2>
      <ComponentPreview
        code={`<Spinner color="primary" />
<Spinner color="muted" />
<Spinner color="success" />
<Spinner color="danger" />
<Spinner color="white" />`}
      >
        <SpinnerColorsDemo />
      </ComponentPreview>

      <h2>Personalización</h2>
      <p>
        Usa <code>className</code> para personalizar estilos individuales. Para cambiar el color primario globalmente, usa el selector de tema en la barra superior.
      </p>
      <ComponentPreview
        code={`<Spinner className="text-violet-500" size="md" />
<Spinner className="text-rose-500" size="md" />
<Spinner className="text-emerald-500" size="md" />
<Spinner className="text-amber-500" size="lg" />`}
      >
        <SpinnerCustomizationDemo />
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable
        props={[
          {
            name: "size",
            type: `"xs" | "sm" | "md" | "lg" | "xl"`,
            default: `"md"`,
            description: "Tamaño del spinner",
          },
          {
            name: "color",
            type: `"primary" | "muted" | "white" | "success" | "danger"`,
            default: `"primary"`,
            description: "Color de la animación",
          },
          {
            name: "label",
            type: "string",
            default: `"Cargando..."`,
            description: "Texto para aria-label (accesibilidad)",
          },
        ]}
      />
    </div>
  );
}
