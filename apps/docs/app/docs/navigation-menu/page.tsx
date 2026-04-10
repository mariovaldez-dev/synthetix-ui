import type { Metadata } from "next";
import { CodeSnippet } from "@/components/code-snippet";
import { ComponentPreview, PropsTable } from "@/components/component-preview";
import { NavigationMenuDemo } from "@/components/demos/complex-demos";

export const metadata: Metadata = { title: "Navigation Menu" };

export default function NavigationMenuPage() {
  return (
    <div>
      <h1>Navigation Menu</h1>
      <p>
        Menú de navegación accesible con soporte para submenús, contenido rich y animaciones.
        Construido sobre Radix UI Navigation Menu.
      </p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @chassis-ui add navigation-menu`} />

      <h2>Uso</h2>
      <CodeSnippet
        code={`import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Example() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Productos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-[400px]">
              <li>
                <NavigationMenuLink asChild>
                  <a href="/producto" className="block p-3 rounded-md hover:bg-accent">
                    <div className="text-sm font-medium">Producto 1</div>
                    <p className="text-sm text-muted-foreground">Descripción corta.</p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/docs">
            Documentación
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}`}
      />

      <h2>Demo</h2>
      <ComponentPreview
        code={`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Inicio</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-6 md:w-[400px] lg:grid-cols-[.75fr_1fr]">
          <ListItem title="Instalación" description="Cómo instalar chassis-ui." />
          <ListItem title="Theming" description="Personalización de colores." />
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
        Documentación
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}
      >
        <NavigationMenuDemo />
      </ComponentPreview>

      <h2>Subcomponentes</h2>
      <PropsTable
        props={[
          {
            name: "NavigationMenu",
            type: "nav",
            description: "Contenedor raíz del menú",
          },
          {
            name: "NavigationMenuList",
            type: "ul",
            description: "Lista de ítems de primer nivel",
          },
          {
            name: "NavigationMenuTrigger",
            type: "button",
            description: "Botón que abre el submenú con animación",
          },
          {
            name: "NavigationMenuContent",
            type: "div",
            description: "Panel de contenido del submenú",
          },
          {
            name: "NavigationMenuLink",
            type: "a",
            description: "Link dentro del menú (soporta asChild)",
          },
          {
            name: "navigationMenuTriggerStyle()",
            type: "function",
            description: "Helper que devuelve las clases del estilo de trigger estándar",
          },
        ]}
      />
    </div>
  );
}
