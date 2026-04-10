import type { Metadata } from "next";
import { PropsTable } from "@/components/component-preview";
import { CodeSnippet } from "@/components/code-snippet";

export const metadata: Metadata = { title: "useFocusTrap" };

export default function UseFocusTrapPage() {
  return (
    <div>
      <h1>useFocusTrap</h1>
      <p>
        Hook que atrapa el foco de teclado dentro de un contenedor cuando está activo.
        Esencial para modales y paneles accesibles según WAI-ARIA.
      </p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @synthetix-ui add hooks`} />

      <h2>Uso</h2>
      <CodeSnippet
        code={`import { useFocusTrap } from "@synthetix-ui/hooks";

function MyModal({ isOpen }: { isOpen: boolean }) {
  const containerRef = useFocusTrap(isOpen);

  return (
    <div ref={containerRef} role="dialog" aria-modal="true">
      <button>Primer foco</button>
      <input type="text" />
      <button>Cerrar</button>
    </div>
  );
}`}
      />

      <h2>Parámetros</h2>
      <PropsTable
        props={[
          {
            name: "active",
            type: "boolean",
            description: "Activa o desactiva la trampa de foco",
          },
        ]}
      />

      <h2>Retorno</h2>
      <PropsTable
        props={[
          {
            name: "ref",
            type: "React.RefObject<HTMLElement>",
            description: "Ref que debes asignar al contenedor que encierra el foco",
          },
        ]}
      />

      <h2>Comportamiento</h2>
      <ul>
        <li>Cuando <code>active</code> cambia a <code>true</code>, mueve el foco al primer elemento focusable del contenedor.</li>
        <li>Tab y Shift+Tab ciclan dentro del contenedor sin salir.</li>
        <li>Cuando <code>active</code> vuelve a <code>false</code>, restaura el foco al elemento que lo tenía antes de activarse.</li>
      </ul>

      <h2>Nota</h2>
      <p>
        El componente <code>Dialog</code> de synthetix-ui ya usa <code>useFocusTrap</code>{" "}
        internamente. Solo necesitas usarlo directamente si construyes tu propio componente modal.
      </p>
    </div>
  );
}
