import type { Metadata } from "next";
import { CodeSnippet } from "@/components/code-snippet";

export const metadata: Metadata = { title: "Command" };

export default function CommandPage() {
  return (
    <div>
      <h1>Command</h1>
      <p>
        Documentación para el componente Command. Próximamente se añadirán ejemplos de uso y props detallados.
      </p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @chassis-ui add command`} />

      <h2>Uso básico</h2>
      <CodeSnippet
        code={`import { Command } from "@chassis-ui/core";

export function Example() {
  return <Command />;
}`}
      />
    </div>
  );
}
