import type { Metadata } from "next";
import { PropsTable } from "@/components/component-preview";
import { CodeSnippet } from "@/components/code-snippet";

export const metadata: Metadata = { title: "useMediaQuery" };

export default function UseMediaQueryPage() {
  return (
    <div>
      <h1>useMediaQuery</h1>
      <p>Hook reactivo que se suscribe a una media query de CSS y devuelve si coincide o no.</p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @chassis-ui add hooks`} />

      <h2>Uso</h2>
      <CodeSnippet
        code={`import { useMediaQuery } from "@chassis-ui/hooks";

function MyComponent() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <div>
      {isMobile ? "Vista móvil" : "Vista escritorio"}
    </div>
  );
}`}
      />

      <h2>Parámetros</h2>
      <PropsTable
        props={[
          {
            name: "query",
            type: "string",
            description: "Media query de CSS (e.g. \"(max-width: 768px)\")",
          },
        ]}
      />

      <h2>Retorno</h2>
      <PropsTable
        props={[
          {
            name: "matches",
            type: "boolean",
            description: "true si la media query coincide con el viewport actual",
          },
        ]}
      />

      <h2>SSR</h2>
      <p>
        Durante el server-side rendering devuelve <code>false</code> de forma segura.
        El valor real se establece en el cliente tras la hidratación.
      </p>
    </div>
  );
}
