"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  ScrollArea,
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
  SonnerToaster,
  Button,
  Input,
  Select,
  Textarea,
} from "@chassis-ui/core";
import { toast } from "sonner";
import { cn } from "@chassis-ui/utils";

/* ─── Navigation Menu ─────────────────────────────────────── */

const components: { title: string; description: string }[] = [
  { title: "Button", description: "Botón con variantes, tamaños y estado de carga." },
  { title: "Input", description: "Campo de texto con label, ayuda y error." },
  { title: "Card", description: "Contenedor con borde para agrupar contenido." },
  { title: "Dialog", description: "Modal accesible con trampa de foco." },
  { title: "Select", description: "Selector nativo con placeholder y error." },
  { title: "Tooltip", description: "Etiqueta flotante sobre elementos trigger." },
];

function ListItem({ title, description, className }: { title: string; description: string; className?: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
          "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-[12px] leading-snug text-muted-foreground">{description}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Inicio</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/20 to-primary/5 p-6 no-underline outline-none focus:shadow-md">
                    <div className="mb-2 mt-4 text-lg font-medium">chassis-ui</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Librería de componentes UI para React con Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem title="Instalación" description="Cómo instalar chassis-ui en tu proyecto." />
              <ListItem title="Theming" description="Personalización de colores y estilos." />
              <ListItem title="Componentes" description="Explora todos los componentes disponibles." />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Componentes</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((c) => (
                <ListItem key={c.title} title={c.title} description={c.description} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
            Documentación
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

/* ─── Menubar ─────────────────────────────────────────────── */

export function MenubarDemo() {
  const [showBookmarks, setShowBookmarks] = React.useState(true);
  const [zoom, setZoom] = React.useState("100%");

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Archivo</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Nuevo <MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
          <MenubarItem>Abrir <MenubarShortcut>⌘O</MenubarShortcut></MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Guardar <MenubarShortcut>⌘S</MenubarShortcut></MenubarItem>
          <MenubarItem>Guardar como...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Cerrar ventana <MenubarShortcut>⌘W</MenubarShortcut></MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Editar</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Deshacer <MenubarShortcut>⌘Z</MenubarShortcut></MenubarItem>
          <MenubarItem>Rehacer <MenubarShortcut>⇧⌘Z</MenubarShortcut></MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Cortar <MenubarShortcut>⌘X</MenubarShortcut></MenubarItem>
          <MenubarItem>Copiar <MenubarShortcut>⌘C</MenubarShortcut></MenubarItem>
          <MenubarItem>Pegar <MenubarShortcut>⌘V</MenubarShortcut></MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Ver</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked={showBookmarks} onCheckedChange={setShowBookmarks}>
            Mostrar favoritos
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarRadioGroup value={zoom} onValueChange={setZoom}>
            <MenubarRadioItem value="75%">75%</MenubarRadioItem>
            <MenubarRadioItem value="100%">100%</MenubarRadioItem>
            <MenubarRadioItem value="125%">125%</MenubarRadioItem>
            <MenubarRadioItem value="150%">150%</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

/* ─── Scroll Area ─────────────────────────────────────────── */

const TAGS = [
  "v1.0.0", "v1.1.0", "v1.2.0", "v1.3.0", "v2.0.0",
  "v2.1.0", "v2.2.0", "v2.3.0", "v3.0.0", "v3.1.0",
  "v3.2.0", "v3.3.0", "v4.0.0", "v4.1.0", "v4.2.0",
];

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-64 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Versiones</h4>
        {TAGS.map((tag) => (
          <React.Fragment key={tag}>
            <div className="text-sm py-1">{tag}</div>
            <div className="border-t" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  );
}

export function ScrollAreaCustomizationDemo() {
  return (
    <ScrollArea className="h-48 w-80 rounded-xl border-2 border-primary/20">
      <div className="p-4 space-y-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary/60 to-primary shrink-0" />
            <div className="space-y-1">
              <div className="text-sm font-medium">Elemento {i + 1}</div>
              <div className="text-xs text-muted-foreground">Descripción breve del elemento.</div>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}

/* ─── Resizable ───────────────────────────────────────────── */

export function ResizableDemo() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold text-sm">Panel izquierdo</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-4">
              <span className="font-semibold text-sm">Panel arriba</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-4">
              <span className="font-semibold text-sm">Panel abajo</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export function ResizableCustomizationDemo() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[160px] max-w-sm rounded-xl border-2 border-primary/20 overflow-hidden"
    >
      <ResizablePanel defaultSize={30} minSize={20}>
        <div className="flex h-full flex-col gap-2 bg-primary/5 p-4">
          <div className="h-2 w-full rounded bg-primary/20" />
          <div className="h-2 w-3/4 rounded bg-primary/20" />
          <div className="h-2 w-1/2 rounded bg-primary/20" />
        </div>
      </ResizablePanel>
      <ResizableHandle className="bg-primary/20 hover:bg-primary/40 transition-colors" />
      <ResizablePanel defaultSize={70}>
        <div className="flex h-full items-center justify-center text-sm text-muted-foreground p-4">
          Contenido principal
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

/* ─── Sonner ─────────────────────────────────────────────── */

export function SonnerDemo() {
  return (
    <>
      <SonnerToaster richColors position="bottom-right" />
      <div className="flex flex-wrap gap-2">
        <Button size="sm" onClick={() => toast.success("Cambios guardados", { description: "Los datos se guardaron correctamente." })}>
          Éxito
        </Button>
        <Button size="sm" variant="danger" onClick={() => toast.error("Error al guardar", { description: "Revisa tu conexión e inténtalo de nuevo." })}>
          Error
        </Button>
        <Button size="sm" variant="secondary" onClick={() => toast.warning("Atención", { description: "Esta acción puede tener consecuencias." })}>
          Advertencia
        </Button>
        <Button size="sm" variant="outline" onClick={() => toast.info("Información", { description: "Tienes 3 notificaciones nuevas." })}>
          Info
        </Button>
        <Button size="sm" variant="ghost" onClick={() => toast.dismiss()}>Limpiar</Button>
      </div>
    </>
  );
}

/* ─── Form ───────────────────────────────────────────────── */

const COUNTRY_OPTIONS = [
  { value: "mx", label: "México" },
  { value: "es", label: "España" },
  { value: "ar", label: "Argentina" },
  { value: "co", label: "Colombia" },
  { value: "cl", label: "Chile" },
];

export function FormDemo() {
  const [submitted, setSubmitted] = React.useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl border border-success/20 bg-success/8 p-8 text-success w-80">
        <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        <p className="text-sm font-medium">¡Formulario enviado!</p>
        <Button size="sm" variant="outline" onClick={() => setSubmitted(false)}>Volver</Button>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-4 w-80"
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
    >
      <Input label="Nombre completo" placeholder="Mario Flores" required />
      <Input label="Correo electrónico" type="email" placeholder="mario@ejemplo.com" required />
      <Select
        label="País"
        options={COUNTRY_OPTIONS}
        placeholder="Selecciona tu país..."
      />
      <Textarea label="Mensaje" placeholder="Cuéntanos sobre tu proyecto..." rows={3} />
      <Button type="submit">Enviar</Button>
    </form>
  );
}

/* ─── Sidebar (minimal static demo) ──────────────────────── */

const NAV_ITEMS = [
  { label: "Button", active: true },
  { label: "Input", active: false },
  { label: "Card", active: false },
  { label: "Dialog", active: false },
  { label: "Toast", active: false },
];

export function SidebarDemo() {
  const [active, setActive] = React.useState("Button");

  return (
    <div className="flex h-64 w-full max-w-xl overflow-hidden rounded-xl border">
      {/* Sidebar panel */}
      <aside className="flex w-44 shrink-0 flex-col border-r bg-card">
        <div className="flex items-center gap-2 border-b px-3 py-3">
          <div className="h-5 w-5 rounded bg-primary" />
          <span className="text-sm font-semibold">chassis-ui</span>
        </div>
        <nav className="flex flex-col gap-0.5 p-2 flex-1 overflow-y-auto">
          <p className="px-2 pb-1 pt-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Componentes
          </p>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className={cn(
                "flex w-full items-center rounded-md px-2 py-1.5 text-sm transition-colors text-left",
                active === item.label
                  ? "bg-accent text-accent-foreground font-medium"
                  : "text-foreground hover:bg-muted"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>
      {/* Main content */}
      <main className="flex flex-1 items-center justify-center text-sm text-muted-foreground bg-background">
        <span>Documentación de <strong className="text-foreground">{active}</strong></span>
      </main>
    </div>
  );
}
