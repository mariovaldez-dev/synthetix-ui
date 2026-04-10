import type { Metadata } from "next";
import { ComponentPreview, PropsTable } from "@/components/component-preview";
import { CodeSnippet } from "@/components/code-snippet";
import { TooltipDemo, TooltipCustomizationDemo } from "@/components/demos/ui-demos";

export const metadata: Metadata = { title: "Tooltip" };

export default function TooltipPage() {
  return (
    <div>
      <h1>Tooltip</h1>
      <p>Etiqueta flotante que aparece al hacer hover o focus sobre un elemento trigger.</p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @chassis-ui add tooltip`} />

      <h2>Uso</h2>
      <CodeSnippet
        code={`import { Tooltip } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export function Example() {
  return (
    <Tooltip content="Este es un tooltip" side="top">
      <Button variant="outline">Hover sobre mí</Button>
    </Tooltip>
  );
}`}
      />

      <h2>Posiciones</h2>
      <ComponentPreview
        code={`<Tooltip content="Tooltip top" side="top">
  <Button variant="outline" size="sm">top</Button>
</Tooltip>
<Tooltip content="Tooltip right" side="right">
  <Button variant="outline" size="sm">right</Button>
</Tooltip>
<Tooltip content="Tooltip bottom" side="bottom">
  <Button variant="outline" size="sm">bottom</Button>
</Tooltip>
<Tooltip content="Tooltip left" side="left">
  <Button variant="outline" size="sm">left</Button>
</Tooltip>`}
      >
        <TooltipDemo />
      </ComponentPreview>

      <h2>Personalización</h2>
      <p>
        Usa <code>className</code> para personalizar estilos individuales. Para cambiar el color primario globalmente, usa el selector de tema en la barra superior.
      </p>
      <ComponentPreview
        code={`<Tooltip content="Tooltip oscuro" className="bg-zinc-900 text-zinc-50">
  <Button variant="outline" size="sm">Oscuro</Button>
</Tooltip>
<Tooltip content="Tooltip violet" className="bg-violet-600 text-white">
  <Button variant="outline" size="sm">Violet</Button>
</Tooltip>
<Tooltip content="Tooltip success" className="bg-emerald-600 text-white">
  <Button variant="outline" size="sm">Emerald</Button>
</Tooltip>`}
      >
        <TooltipCustomizationDemo />
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable
        props={[
          {
            name: "content",
            type: "React.ReactNode",
            description: "Contenido del tooltip",
          },
          {
            name: "side",
            type: `"top" | "right" | "bottom" | "left"`,
            default: `"top"`,
            description: "Posición relativa al trigger",
          },
          {
            name: "delayMs",
            type: "number",
            default: "300",
            description: "Retraso en ms antes de mostrar",
          },
          {
            name: "children",
            type: "React.ReactElement",
            description: "Elemento trigger (debe aceptar ref y eventos de mouse/focus)",
          },
        ]}
      />

      <h2>Accesibilidad</h2>
      <p>
        El tooltip se activa tanto en hover como en focus, siendo accesible por teclado.
        El contenido se asocia al trigger via <code>aria-describedby</code>.
      </p>
    </div>
  );
}
