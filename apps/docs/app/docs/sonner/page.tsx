import type { Metadata } from "next";
import { CodeSnippet } from "@/components/code-snippet";
import { ComponentPreview, PropsTable } from "@/components/component-preview";
import { SonnerDemo } from "@/components/demos/complex-demos";

export const metadata: Metadata = { title: "Sonner" };

export default function SonnerPage() {
  return (
    <div>
      <h1>Sonner</h1>
      <p>
        Notificaciones toast de alta calidad usando la librería <code>sonner</code>, con soporte
        para promesas, acciones, rich content y temas. Alternativa más avanzada al Toast interno.
      </p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @synthetix-ui add sonner`} />

      <h2>Setup</h2>
      <p>
        Añade <code>{"<SonnerToaster />"}</code> en tu layout raíz. Se sincroniza automáticamente
        con el tema de la aplicación via <code>next-themes</code>:
      </p>
      <CodeSnippet
        code={`// app/layout.tsx
import { SonnerToaster } from "@synthetix-ui/core";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SonnerToaster richColors position="bottom-right" />
      </body>
    </html>
  );
}`}
      />

      <h2>Uso</h2>
      <CodeSnippet
        code={`import { toast } from "sonner";

// Variantes
toast.success("Cambios guardados");
toast.error("Error al guardar");
toast.warning("Atención requerida");
toast.info("3 notificaciones nuevas");

// Con descripción
toast.success("Operación exitosa", {
  description: "Los datos se actualizaron correctamente.",
});

// Con promesa
toast.promise(fetch("/api/data"), {
  loading: "Cargando...",
  success: "Datos cargados",
  error: "Error al cargar",
});

// Con acción
toast("Elemento eliminado", {
  action: { label: "Deshacer", onClick: () => restoreItem() },
});`}
      />

      <h2>Demo</h2>
      <ComponentPreview
        code={`import { toast } from "sonner";

<Button onClick={() => toast.success("Cambios guardados")}>Éxito</Button>
<Button onClick={() => toast.error("Error al guardar")}>Error</Button>
<Button onClick={() => toast.warning("Atención")}>Advertencia</Button>
<Button onClick={() => toast.info("Información")}>Info</Button>`}
      >
        <SonnerDemo />
      </ComponentPreview>

      <h2>Props — SonnerToaster</h2>
      <PropsTable
        props={[
          {
            name: "position",
            type: `"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"`,
            default: `"bottom-right"`,
            description: "Posición de las notificaciones",
          },
          {
            name: "richColors",
            type: "boolean",
            default: "false",
            description: "Activa colores más vivos en las variantes",
          },
          {
            name: "expand",
            type: "boolean",
            default: "false",
            description: "Muestra todos los toasts expandidos en lugar de apilados",
          },
          {
            name: "duration",
            type: "number",
            default: "4000",
            description: "Duración global en ms",
          },
          {
            name: "closeButton",
            type: "boolean",
            default: "false",
            description: "Muestra un botón de cerrar en cada toast",
          },
        ]}
      />

      <h2>Toast vs Sonner</h2>
      <p>
        synthetix-ui incluye dos sistemas de notificaciones:
      </p>
      <ul>
        <li><strong>Toast</strong> — implementación propia sin dependencias, API simple con <code>useToast()</code>.</li>
        <li><strong>Sonner</strong> — librería de terceros con más features: promesas, acciones, stacking y animaciones avanzadas.</li>
      </ul>
    </div>
  );
}
