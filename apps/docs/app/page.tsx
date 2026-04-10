"use client";

import Link from "next/link";
import { Badge } from "@chassis-ui/core";

export default function HomePage() {
  return (
    <div>
      <div className="mb-3 flex items-center gap-2">
        <Badge variant="primary">Beta</Badge>
        <span className="text-xs text-neutral-500">v0.0.0</span>
      </div>

      <h1>chassis-ui</h1>

      <p>
        Librería de componentes UI para React con Tailwind CSS. Los componentes
        se copian directamente a tu proyecto —sin dependencias ocultas, sin
        caja negra— para que los adaptes como necesites.
      </p>

      <h2>Instalación rápida</h2>

      <p>Agrega componentes a tu proyecto con el CLI:</p>

      <pre>
        <code>{`npx @chassis-ui add button
npx @chassis-ui add input card dialog`}</code>
      </pre>

      <p>
        O instala el paquete completo como dependencia npm:
      </p>

      <pre>
        <code>{`pnpm add @chassis-ui/core @chassis-ui/utils`}</code>
      </pre>

      <h2>Componentes disponibles</h2>

      <ul>
        {COMPONENTS.map((c) => (
          <li key={c.href}>
            <Link href={c.href}>{c.label}</Link>
            {" — "}
            <span className="text-neutral-500">{c.description}</span>
          </li>
        ))}
      </ul>

      <h2>Requisitos</h2>
      <ul>
        <li>React 18+</li>
        <li>Tailwind CSS 3.4+</li>
        <li>TypeScript (recomendado)</li>
      </ul>
    </div>
  );
}

const COMPONENTS = [
  { href: "/docs/button", label: "Button", description: "Botón con variantes y estados" },
  { href: "/docs/input", label: "Input", description: "Campo de texto con label y error" },
  { href: "/docs/card", label: "Card", description: "Contenedor con Header, Body y Footer" },
  { href: "/docs/dialog", label: "Dialog", description: "Modal accesible con focus trap" },
  { href: "/docs/badge", label: "Badge", description: "Etiqueta de estado con colores" },
  { href: "/docs/select", label: "Select", description: "Select nativo accesible" },
  { href: "/docs/toast", label: "Toast", description: "Notificaciones con useToast" },
  { href: "/docs/checkbox", label: "Checkbox", description: "Checkbox con indeterminate" },
  { href: "/docs/textarea", label: "Textarea", description: "Textarea con autoResize y contador" },
  { href: "/docs/spinner", label: "Spinner", description: "Indicador de carga animado" },
  { href: "/docs/switch", label: "Switch", description: "Toggle accesible con role=switch" },
  { href: "/docs/tooltip", label: "Tooltip", description: "Tooltip con delay y posición" },
  { href: "/docs/accordion", label: "Accordion", description: "Accordion single y multiple" },
];
