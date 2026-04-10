import type { Metadata } from "next";
import { CodeSnippet } from "@/components/code-snippet";
import { ComponentPreview, PropsTable } from "@/components/component-preview";
import { SidebarDemo } from "@/components/demos/complex-demos";

export const metadata: Metadata = { title: "Sidebar" };

export default function SidebarPage() {
  return (
    <div>
      <h1>Sidebar</h1>
      <p>
        Componente de layout para navegación lateral con soporte para colapsar, variantes flotante
        e inset, modo mobile (Sheet), tooltips en modo icono y atajo de teclado <kbd>⌘B</kbd>.
      </p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @chassis-ui add sidebar`} />

      <h2>Demo</h2>
      <ComponentPreview
        code={`<SidebarProvider>
  <Sidebar collapsible="icon">
    <SidebarHeader>
      <span className="font-semibold">Mi App</span>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Navegación</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton isActive>Dashboard</SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>Componentes</SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
  <SidebarInset>
    {/* tu contenido aquí */}
  </SidebarInset>
</SidebarProvider>`}
      >
        <SidebarDemo />
      </ComponentPreview>

      <h2>Setup en layout</h2>
      <CodeSnippet
        code={`// app/layout.tsx
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function AppLayout({ children }) {
  return (
    <SidebarProvider defaultOpen>
      <Sidebar collapsible="icon">
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive>
                <a href="/dashboard">Dashboard</a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex items-center gap-2 p-4 border-b">
          <SidebarTrigger />
          <h1>Mi App</h1>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}`}
      />

      <h2>Props — Sidebar</h2>
      <PropsTable
        props={[
          {
            name: "side",
            type: `"left" | "right"`,
            default: `"left"`,
            description: "Lado donde aparece el sidebar",
          },
          {
            name: "variant",
            type: `"sidebar" | "floating" | "inset"`,
            default: `"sidebar"`,
            description: "Variante visual del sidebar",
          },
          {
            name: "collapsible",
            type: `"offcanvas" | "icon" | "none"`,
            default: `"offcanvas"`,
            description: "Modo de colapso: oculto, solo iconos, o no colapsable",
          },
        ]}
      />

      <h2>Props — SidebarProvider</h2>
      <PropsTable
        props={[
          {
            name: "defaultOpen",
            type: "boolean",
            default: "true",
            description: "Estado inicial del sidebar",
          },
          {
            name: "open",
            type: "boolean",
            description: "Control externo del estado (modo controlado)",
          },
          {
            name: "onOpenChange",
            type: "(open: boolean) => void",
            description: "Callback al cambiar el estado",
          },
        ]}
      />

      <h2>Atajo de teclado</h2>
      <p>
        <kbd>⌘B</kbd> / <kbd>Ctrl+B</kbd> alterna el sidebar automáticamente desde cualquier punto de la app.
      </p>
    </div>
  );
}
