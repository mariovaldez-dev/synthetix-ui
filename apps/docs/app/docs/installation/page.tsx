import type { Metadata } from "next";
import { CodeSnippet } from "@/components/code-snippet";

export const metadata: Metadata = { title: "Instalación" };

export default function InstallationPage() {
  return (
    <div>
      <h1>Instalación</h1>
      <p>chassis-ui ofrece dos formas de consumir los componentes.</p>

      <h2>Opción 1 — CLI (recomendado)</h2>
      <p>
        Copia los componentes directamente a tu proyecto. Los archivos son tuyos:
        puedes modificarlos, extenderlos o eliminarlos sin restricciones.
      </p>

      <CodeSnippet
        code={`# Inicializa la configuración
npx @chassis-ui init

# Agrega componentes
npx @chassis-ui add button
npx @chassis-ui add button input card dialog`}
      />

      <p>
        Los componentes se copian a <code>src/components/ui/</code> por defecto.
        Puedes cambiar el destino con <code>--out-dir</code>:
      </p>

      <CodeSnippet code={`npx @chassis-ui add button --out-dir src/ui`} />

      <h2>Opción 2 — npm</h2>
      <p>Instala el paquete como dependencia estándar:</p>

      <CodeSnippet code={`pnpm add @chassis-ui/core @chassis-ui/utils`} />

      <CodeSnippet code={`import { Button } from "@chassis-ui/core";`} />

      <h2>Configurar Tailwind</h2>
      <p>Agrega el preset de chassis-ui en tu <code>tailwind.config.ts</code>:</p>

      <CodeSnippet
        code={`import type { Config } from "tailwindcss";
import chassisPreset from "@chassis-ui/tailwind-preset";

export default {
  presets: [chassisPreset],
  content: ["./src/**/*.{ts,tsx}"],
} satisfies Config;`}
      />

      <h2>Requisitos</h2>
      <ul>
        <li>Node.js 18+</li>
        <li>React 18+</li>
        <li>Tailwind CSS 3.4+</li>
        <li>TypeScript (recomendado)</li>
      </ul>
    </div>
  );
}
