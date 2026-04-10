import type { Metadata } from "next";
import { PropsTable } from "@/components/component-preview";
import { CodeSnippet } from "@/components/code-snippet";

export const metadata: Metadata = { title: "useDisclosure" };

export default function UseDisclosurePage() {
  return (
    <div>
      <h1>useDisclosure</h1>
      <p>
        Hook para manejar el estado abierto/cerrado de modales, dropdowns, drawers y
        cualquier elemento que tenga dos estados de visibilidad.
      </p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @chassis-ui add hooks`} />

      <h2>Uso</h2>
      <CodeSnippet
        code={`import { useDisclosure } from "@chassis-ui/hooks";
import { Dialog, Button } from "@chassis-ui/core";

function MyComponent() {
  const { isOpen, open, close, toggle } = useDisclosure();

  return (
    <>
      <Button onClick={open}>Abrir dialog</Button>
      <Dialog isOpen={isOpen} onClose={close} aria-labelledby="dlg-title">
        <h2 id="dlg-title">Mi dialog</h2>
        <p>Contenido del dialog</p>
      </Dialog>
    </>
  );
}`}
      />

      <h2>Parámetros</h2>
      <PropsTable
        props={[
          {
            name: "defaultOpen",
            type: "boolean",
            default: "false",
            description: "Estado inicial del disclosure",
          },
        ]}
      />

      <h2>Retorno</h2>
      <PropsTable
        props={[
          {
            name: "isOpen",
            type: "boolean",
            description: "Estado actual",
          },
          {
            name: "open",
            type: "() => void",
            description: "Abre el disclosure",
          },
          {
            name: "close",
            type: "() => void",
            description: "Cierra el disclosure",
          },
          {
            name: "toggle",
            type: "() => void",
            description: "Alterna entre abierto y cerrado",
          },
        ]}
      />
    </div>
  );
}
