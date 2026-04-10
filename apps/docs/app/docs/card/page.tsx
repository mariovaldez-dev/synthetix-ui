import type { Metadata } from "next";
import { ComponentPreview, PropsTable } from "@/components/component-preview";
import { CodeSnippet } from "@/components/code-snippet";
import { CardBasicDemo, CardNoPaddingDemo, CardCustomizationDemo } from "@/components/demos/card-demo";

export const metadata: Metadata = { title: "Card" };

export default function CardPage() {
  return (
    <div>
      <h1>Card</h1>
      <p>Contenedor con borde y fondo para agrupar contenido relacionado.</p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @chassis-ui add card`} />

      <h2>Uso</h2>
      <CodeSnippet
        code={`import { Card, CardHeader, CardTitle, CardDescription, CardBody, CardFooter } from "@/components/ui/card";

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Título</CardTitle>
        <CardDescription>Subtítulo</CardDescription>
      </CardHeader>
      <CardBody>Contenido principal.</CardBody>
      <CardFooter>
        <Button>Aceptar</Button>
      </CardFooter>
    </Card>
  );
}`}
      />

      <h2>Básico</h2>
      <ComponentPreview
        code={`<Card>
  <CardHeader>
    <CardTitle>Título de la card</CardTitle>
    <CardDescription>Subtítulo opcional</CardDescription>
  </CardHeader>
  <CardBody>Contenido principal de la card con información relevante.</CardBody>
  <CardFooter>
    <Button variant="outline" size="sm">Cancelar</Button>
    <Button size="sm">Aceptar</Button>
  </CardFooter>
</Card>`}
      >
        <CardBasicDemo />
      </ComponentPreview>

      <h2>Sin padding interno</h2>
      <ComponentPreview
        code={`<Card noPadding>
  <div className="h-28 rounded-t-xl bg-gradient-to-br from-primary/60 to-primary" />
  <div className="p-5">
    <CardTitle>Producto destacado</CardTitle>
    <CardDescription className="mt-1">Descripción breve del producto.</CardDescription>
  </div>
</Card>`}
      >
        <CardNoPaddingDemo />
      </ComponentPreview>

      <h2>Personalización</h2>
      <p>
        Usa <code>className</code> para personalizar estilos individuales. Para cambiar el color primario globalmente, usa el selector de tema en la barra superior.
      </p>
      <ComponentPreview
        code={`<Card className="border-violet-200 bg-violet-50 dark:border-violet-800 dark:bg-violet-950/30">
  <CardHeader>
    <CardTitle className="text-violet-700 dark:text-violet-300">Violet</CardTitle>
  </CardHeader>
</Card>
<Card className="border-0 shadow-xl">
  <CardHeader><CardTitle>Elevada</CardTitle></CardHeader>
</Card>
<Card className="border-dashed border-2">
  <CardHeader><CardTitle>Dashed</CardTitle></CardHeader>
</Card>`}
      >
        <CardCustomizationDemo />
      </ComponentPreview>

      <h2>Props — Card</h2>
      <PropsTable
        props={[
          {
            name: "children",
            type: "React.ReactNode",
            description: "Contenido del card",
          },
          {
            name: "noPadding",
            type: "boolean",
            default: "false",
            description: "Elimina el padding interno para contenido a sangre",
          },
          {
            name: "className",
            type: "string",
            description: "Clases adicionales de Tailwind",
          },
        ]}
      />

      <h2>Subcomponentes</h2>
      <p>
        <code>CardHeader</code>, <code>CardBody</code> y <code>CardFooter</code> añaden
        padding y separadores automáticos entre secciones.
      </p>
    </div>
  );
}
