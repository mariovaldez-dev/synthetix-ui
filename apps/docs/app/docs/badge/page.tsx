import type { Metadata } from "next";
import { ComponentPreview, PropsTable } from "@/components/component-preview";
import { CodeSnippet } from "@/components/code-snippet";
import {
  BadgeVariantsDemo,
  BadgeSizesDemo,
  BadgeCustomizationDemo,
} from "@/components/demos/badge-demo";

export const metadata: Metadata = { title: "Badge" };

export default function BadgePage() {
  return (
    <div>
      <h1>Badge</h1>
      <p>Etiqueta compacta para mostrar estado, categorías o contadores.</p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @chassis-ui add badge`} />

      <h2>Variantes</h2>
      <ComponentPreview>
        <BadgeVariantsDemo />
      </ComponentPreview>

      <h2>Tamaños</h2>
      <ComponentPreview>
        <BadgeSizesDemo />
      </ComponentPreview>

      <h2>Personalización</h2>
      <p>
        Usa <code>className</code> para crear badges con colores, bordes o tipografía personalizada.
      </p>
      <ComponentPreview
        code={`<Badge className="bg-violet-100 text-violet-700 border-violet-200">Violet</Badge>
<Badge className="bg-gradient-to-r from-pink-500 to-rose-500 text-white border-transparent">Gradient</Badge>
<Badge className="rounded-sm font-mono uppercase bg-zinc-900 text-zinc-100 border-transparent">MONO</Badge>`}
      >
        <BadgeCustomizationDemo />
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable
        props={[
          {
            name: "variant",
            type: `"default" | "primary" | "success" | "warning" | "danger" | "outline"`,
            default: `"default"`,
            description: "Color del badge",
          },
          {
            name: "size",
            type: `"sm" | "md" | "lg"`,
            default: `"md"`,
            description: "Tamaño del badge",
          },
        ]}
      />
    </div>
  );
}
