import type { Metadata } from "next";
import { CodeSnippet } from "@/components/code-snippet";
import { ComponentPreview, PropsTable } from "@/components/component-preview";
import {
  PaginationDemo,
  PaginationRoundedDemo,
  PaginationSquareDemo,
  PaginationMinimalDemo,
  PaginationCustomizationDemo,
} from "@/components/demos/nav-demos";

export const metadata: Metadata = { title: "Pagination" };

export default function PaginationPage() {
  return (
    <div>
      <h1>Pagination</h1>
      <p>
        Navegación entre páginas con lógica de elipsis automática, botones anterior/siguiente
        y soporte para manejo de estado externo. Disponible en cuatro variantes visuales.
      </p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @synthetix-ui add pagination`} />

      <h2>Variante: Default</h2>
      <p>Botones cuadrados con borde, envueltos en un contenedor con sombra.</p>
      <ComponentPreview
        code={`const [page, setPage] = useState(3);
const pages = getVisiblePages(page, 12); // [1,"ellipsis",2,3,4,"ellipsis",12]

<div className="inline-flex items-center rounded-xl border bg-background shadow-sm px-2 py-1.5 gap-0.5">
  <PaginationPrevious onClick={() => setPage(p => Math.max(1, p - 1))} aria-disabled={page === 1} />
  {pages.map((p, i) =>
    p === "ellipsis"
      ? <PaginationEllipsis key={\`e\${i}\`} />
      : <PaginationLink key={p} isActive={p === page} onClick={() => setPage(p)}>{p}</PaginationLink>
  )}
  <PaginationNext onClick={() => setPage(p => Math.min(12, p + 1))} aria-disabled={page === 12} />
</div>`}
      >
        <PaginationDemo />
      </ComponentPreview>

      <h2>Variante: Rounded</h2>
      <p>Botones circulares dentro de un contenedor pill. El activo escala ligeramente.</p>
      <ComponentPreview
        code={`<div className="inline-flex items-center rounded-full border bg-background shadow-sm px-3 py-1.5 gap-1">
  <button className="h-7 w-7 rounded-full text-muted-foreground hover:bg-accent" onClick={prev}>
    ‹
  </button>
  {pages.map((p, i) =>
    p === "ellipsis"
      ? <span key={\`e\${i}\`} className="w-5 text-center text-muted-foreground text-xs">···</span>
      : <button key={p} onClick={() => setPage(p)}
          className={p === page
            ? "h-7 w-7 rounded-full bg-primary text-primary-foreground scale-110"
            : "h-7 w-7 rounded-full hover:bg-accent"}>
          {p}
        </button>
  )}
  <button className="h-7 w-7 rounded-full text-muted-foreground hover:bg-accent" onClick={next}>
    ›
  </button>
</div>`}
      >
        <PaginationRoundedDemo />
      </ComponentPreview>

      <h2>Variante: Square / Flat</h2>
      <p>Fondo muted sin bordes individuales. El activo tiene fill sólido de primary.</p>
      <ComponentPreview
        code={`<div className="inline-flex items-center rounded-lg border bg-muted/40 px-1.5 py-1.5 gap-0.5">
  <button className="h-8 w-8 rounded-md text-muted-foreground hover:bg-background hover:shadow-sm" onClick={prev}>
    ‹
  </button>
  {pages.map((p, i) =>
    p === "ellipsis"
      ? <span key={\`e\${i}\`} className="w-6 text-center text-muted-foreground text-xs">···</span>
      : <button key={p} onClick={() => setPage(p)}
          className={p === page
            ? "h-8 w-8 rounded-md bg-primary text-primary-foreground shadow-sm"
            : "h-8 w-8 rounded-md text-foreground hover:bg-background hover:shadow-sm"}>
          {p}
        </button>
  )}
  <button className="h-8 w-8 rounded-md text-muted-foreground hover:bg-background hover:shadow-sm" onClick={next}>
    ›
  </button>
</div>`}
      >
        <PaginationSquareDemo />
      </ComponentPreview>

      <h2>Variante: Minimal / Text</h2>
      <p>Sin cajas. Anterior/Siguiente como texto + ícono. Página activa con subrayado.</p>
      <ComponentPreview
        code={`<div className="inline-flex items-center gap-1">
  <button className="flex items-center gap-1 px-2 py-1 rounded-md text-sm text-primary font-medium hover:bg-primary/8" onClick={prev}>
    ‹ Anterior
  </button>
  {pages.map((p, i) =>
    p === "ellipsis"
      ? <span key={\`e\${i}\`} className="text-muted-foreground text-xs px-1">···</span>
      : <button key={p} onClick={() => setPage(p)}
          className={p === page
            ? "h-8 w-8 text-sm font-semibold text-primary underline underline-offset-4"
            : "h-8 w-8 text-sm text-muted-foreground hover:text-foreground"}>
          {p}
        </button>
  )}
  <button className="flex items-center gap-1 px-2 py-1 rounded-md text-sm text-primary font-medium hover:bg-primary/8" onClick={next}>
    Siguiente ›
  </button>
</div>`}
      >
        <PaginationMinimalDemo />
      </ComponentPreview>

      <h2>Personalización con componentes base</h2>
      <p>
        Los componentes primitivos (<code>PaginationLink</code>, <code>PaginationPrevious</code>,{" "}
        <code>PaginationNext</code>) aceptan <code>className</code> para sobreescribir estilos.
        Ejemplo con variante violet + rounded-full:
      </p>
      <ComponentPreview
        code={`<Pagination>
  <PaginationContent className="gap-1.5">
    <PaginationItem>
      <PaginationPrevious className="rounded-full border" onClick={prev} aria-disabled={page === 1} />
    </PaginationItem>
    {[1, 2, 3, 4, 5].map((p) => (
      <PaginationItem key={p}>
        <PaginationLink
          isActive={p === page}
          onClick={() => setPage(p)}
          className={p === page
            ? "rounded-full bg-violet-600 text-white border-violet-600"
            : "rounded-full border hover:bg-violet-50"}
        >
          {p}
        </PaginationLink>
      </PaginationItem>
    ))}
    <PaginationItem>
      <PaginationNext className="rounded-full border" onClick={next} aria-disabled={page === 5} />
    </PaginationItem>
  </PaginationContent>
</Pagination>`}
      >
        <PaginationCustomizationDemo />
      </ComponentPreview>

      <h2>Uso — lógica de elipsis</h2>
      <CodeSnippet
        code={`import { useState } from "react";
import {
  Pagination, PaginationContent, PaginationItem,
  PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis,
} from "@/components/ui/pagination";

function getVisiblePages(current: number, total: number): (number | "ellipsis")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 4) return [1, 2, 3, 4, 5, "ellipsis", total];
  if (current >= total - 3) return [1, "ellipsis", total - 4, total - 3, total - 2, total - 1, total];
  return [1, "ellipsis", current - 1, current, current + 1, "ellipsis", total];
}

export function Example() {
  const [page, setPage] = useState(1);
  const total = 30;
  const pages = getVisiblePages(page, total);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => setPage(p => Math.max(1, p - 1))}
            aria-disabled={page === 1}
          />
        </PaginationItem>
        {pages.map((p, i) =>
          p === "ellipsis" ? (
            <PaginationItem key={\`e\${i}\`}><PaginationEllipsis /></PaginationItem>
          ) : (
            <PaginationItem key={p}>
              <PaginationLink isActive={p === page} onClick={() => setPage(p)}>{p}</PaginationLink>
            </PaginationItem>
          )
        )}
        <PaginationItem>
          <PaginationNext
            onClick={() => setPage(p => Math.min(total, p + 1))}
            aria-disabled={page === total}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}`}
      />

      <h2>Props — PaginationLink</h2>
      <PropsTable
        props={[
          {
            name: "isActive",
            type: "boolean",
            default: "false",
            description: 'Marca la página activa (aria-current="page" + estilo filled)',
          },
          {
            name: "href",
            type: "string",
            description: "URL destino (para navegación con links reales)",
          },
          {
            name: "onClick",
            type: "() => void",
            description: "Handler para manejo de estado en cliente",
          },
          {
            name: "className",
            type: "string",
            description: "Clases adicionales de Tailwind para sobreescribir estilos",
          },
        ]}
      />

      <h2>Subcomponentes</h2>
      <PropsTable
        props={[
          {
            name: "Pagination",
            type: "nav",
            description: 'Contenedor raíz con role="navigation"',
          },
          {
            name: "PaginationContent",
            type: "div",
            description: "Wrapper flex que aloja los items",
          },
          {
            name: "PaginationItem",
            type: "div",
            description: "Contenedor individual de cada elemento",
          },
          {
            name: "PaginationPrevious",
            type: "a",
            description: 'Botón "Anterior" con ícono chevron izquierdo',
          },
          {
            name: "PaginationNext",
            type: "a",
            description: 'Botón "Siguiente" con ícono chevron derecho',
          },
          {
            name: "PaginationEllipsis",
            type: "span",
            description: "Indicador de páginas omitidas (···)",
          },
        ]}
      />
    </div>
  );
}
