import type { Metadata } from "next";
import { ComponentPreview, PropsTable } from "@/components/component-preview";
import { CodeSnippet } from "@/components/code-snippet";
import { ToastDemo, ToastPositionDemo } from "@/components/demos/toast-demo";

export const metadata: Metadata = { title: "Toast" };

export default function ToastPage() {
  return (
    <div>
      <h1>Toast</h1>
      <p>Notificaciones no bloqueantes con auto-cierre, variantes de estado y posición configurable.</p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @chassis-ui add toast`} />

      <h2>Setup — Toaster</h2>
      <p>
        Añade <code>{"<Toaster />"}</code> una sola vez en tu layout raíz. Las notificaciones
        se rendericen via <code>createPortal</code> al <code>document.body</code>:
      </p>
      <CodeSnippet
        code={`// app/layout.tsx
import { Toaster } from "@chassis-ui/core";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}`}
      />

      <h2>Demo</h2>
      <ComponentPreview
        code={`const { toast, clear } = useToast();

<Button onClick={() => toast({ title: "Cambios guardados", variant: "success" })}>
  Éxito
</Button>
<Button onClick={() => toast({ title: "Error al guardar", variant: "danger" })}>
  Error
</Button>
<Button onClick={() => toast({ title: "Atención", variant: "warning" })}>
  Advertencia
</Button>
<Button onClick={() => toast({ title: "Información disponible", variant: "info" })}>
  Info
</Button>`}
      >
        <ToastDemo />
      </ComponentPreview>

      <h2>Posición</h2>
      <p>
        El prop <code>position</code> en <code>{"<Toaster />"}</code> controla dónde aparecen
        las notificaciones. Soporta las 6 esquinas/centros de la pantalla.
      </p>
      <ComponentPreview
        code={`<Toaster position="top-center" />
// Opciones: "top-left" | "top-center" | "top-right"
//           "bottom-left" | "bottom-center" | "bottom-right"`}
      >
        <ToastPositionDemo />
      </ComponentPreview>

      <h2>Uso</h2>
      <CodeSnippet
        code={`import { useToast } from "@chassis-ui/core";

function MyComponent() {
  const { toast, clear } = useToast();

  return (
    <button onClick={() => toast({ title: "Guardado", variant: "success", duration: 3000 })}>
      Guardar
    </button>
  );
}`}
      />

      <h2>Props — toast()</h2>
      <PropsTable
        props={[
          {
            name: "title",
            type: "string",
            description: "Texto principal de la notificación",
          },
          {
            name: "description",
            type: "string",
            description: "Texto secundario opcional",
          },
          {
            name: "variant",
            type: `"default" | "success" | "warning" | "danger" | "info"`,
            default: `"default"`,
            description: "Color e ícono de la notificación",
          },
          {
            name: "duration",
            type: "number",
            default: "4000",
            description: "Milisegundos antes del auto-cierre. 0 = persistente",
          },
        ]}
      />

      <h2>Props — Toaster</h2>
      <PropsTable
        props={[
          {
            name: "position",
            type: `"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"`,
            default: `"bottom-right"`,
            description: "Posición de las notificaciones en pantalla",
          },
        ]}
      />

      <h2>Arquitectura</h2>
      <p>
        El store de toasts es un singleton pub/sub sin Context de React.
        <code>useToast()</code> usa <code>useSyncExternalStore</code> para suscribirse a los cambios.
        Funciona desde cualquier componente sin Provider.
      </p>
    </div>
  );
}
