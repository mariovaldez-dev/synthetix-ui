import type { Metadata } from "next";
import { CodeSnippet } from "@/components/code-snippet";
import { ComponentPreview, PropsTable } from "@/components/component-preview";
import { MenubarDemo } from "@/components/demos/complex-demos";

export const metadata: Metadata = { title: "Menubar" };

export default function MenubarPage() {
  return (
    <div>
      <h1>Menubar</h1>
      <p>
        Barra de menús estilo aplicación de escritorio (Archivo, Editar, Ver…) con soporte para
        atajos de teclado, checkboxes, radio groups y submenús anidados.
        Construido sobre Radix UI Menubar.
      </p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @chassis-ui add menubar`} />

      <h2>Uso</h2>
      <CodeSnippet
        code={`import {
  Menubar, MenubarMenu, MenubarTrigger, MenubarContent,
  MenubarItem, MenubarSeparator, MenubarShortcut,
} from "@/components/ui/menubar";

export function Example() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Archivo</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Nuevo <MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
          <MenubarItem>Abrir <MenubarShortcut>⌘O</MenubarShortcut></MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Guardar <MenubarShortcut>⌘S</MenubarShortcut></MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}`}
      />

      <h2>Demo</h2>
      <ComponentPreview
        code={`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>Archivo</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Nuevo <MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Guardar <MenubarShortcut>⌘S</MenubarShortcut></MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Ver</MenubarTrigger>
    <MenubarContent>
      <MenubarCheckboxItem checked={showBookmarks} onCheckedChange={setShowBookmarks}>
        Mostrar favoritos
      </MenubarCheckboxItem>
      <MenubarRadioGroup value={zoom} onValueChange={setZoom}>
        <MenubarRadioItem value="100%">100%</MenubarRadioItem>
        <MenubarRadioItem value="125%">125%</MenubarRadioItem>
      </MenubarRadioGroup>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}
      >
        <MenubarDemo />
      </ComponentPreview>

      <h2>Subcomponentes</h2>
      <PropsTable
        props={[
          {
            name: "Menubar",
            type: "div",
            description: "Contenedor horizontal de menús",
          },
          {
            name: "MenubarMenu",
            type: "div",
            description: "Agrupa trigger + content de un menú",
          },
          {
            name: "MenubarTrigger",
            type: "button",
            description: "Botón que abre el menú desplegable",
          },
          {
            name: "MenubarContent",
            type: "div",
            description: "Panel de ítems del menú",
          },
          {
            name: "MenubarItem",
            type: "div",
            description: "Ítem de acción simple",
          },
          {
            name: "MenubarCheckboxItem",
            type: "div",
            description: "Ítem con estado booleano",
          },
          {
            name: "MenubarRadioGroup / MenubarRadioItem",
            type: "div",
            description: "Grupo de opciones excluyentes",
          },
          {
            name: "MenubarShortcut",
            type: "span",
            description: "Atajo de teclado alineado a la derecha",
          },
          {
            name: "MenubarSeparator",
            type: "div",
            description: "Línea divisora entre ítems",
          },
        ]}
      />
    </div>
  );
}
