"use client";

import * as React from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@chassis-ui/core";
import { cn } from "@chassis-ui/utils";

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="mt-4 border p-4 rounded-md">
        <p className="text-sm text-muted-foreground">Make changes to your account here.</p>
      </TabsContent>
      <TabsContent value="password" className="mt-4 border p-4 rounded-md">
        <p className="text-sm text-muted-foreground">Change your password here.</p>
      </TabsContent>
    </Tabs>
  );
}

export function BreadcrumbDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export function TabsCustomizationDemo() {
  return (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList className="bg-violet-100 dark:bg-violet-950 rounded-xl">
        <TabsTrigger
          value="tab1"
          className="data-[state=active]:bg-violet-600 data-[state=active]:text-white rounded-lg"
        >
          Diseño
        </TabsTrigger>
        <TabsTrigger
          value="tab2"
          className="data-[state=active]:bg-violet-600 data-[state=active]:text-white rounded-lg"
        >
          Código
        </TabsTrigger>
        <TabsTrigger
          value="tab3"
          className="data-[state=active]:bg-violet-600 data-[state=active]:text-white rounded-lg"
        >
          Preview
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="mt-3 text-sm text-muted-foreground">Vista de diseño.</TabsContent>
      <TabsContent value="tab2" className="mt-3 text-sm text-muted-foreground">Vista de código.</TabsContent>
      <TabsContent value="tab3" className="mt-3 text-sm text-muted-foreground">Vista previa.</TabsContent>
    </Tabs>
  );
}

export function BreadcrumbCustomizationDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbList className="bg-muted px-4 py-2 rounded-full text-xs">
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="text-primary font-medium">Inicio</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-primary/40">/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs" className="text-primary font-medium">Docs</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-primary/40">/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage className="font-semibold">Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

const TOTAL_PAGES = 12;

function getVisiblePages(current: number, total: number): (number | "ellipsis")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 4) return [1, 2, 3, 4, 5, "ellipsis", total];
  if (current >= total - 3) return [1, "ellipsis", total - 4, total - 3, total - 2, total - 1, total];
  return [1, "ellipsis", current - 1, current, current + 1, "ellipsis", total];
}

/* ── Variant 1: Default — bordered squares with shadow container ── */
export function PaginationDemo() {
  const [page, setPage] = React.useState(3);
  const pages = getVisiblePages(page, TOTAL_PAGES);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="inline-flex items-center rounded-xl border bg-background shadow-sm px-2 py-1.5 gap-0.5">
        <PaginationPrevious
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          aria-disabled={page === 1}
          className={cn(
            "h-8 px-2.5 rounded-lg text-xs",
            page === 1 && "pointer-events-none opacity-40"
          )}
        />
        {pages.map((p, i) =>
          p === "ellipsis" ? (
            <PaginationEllipsis key={`e${i}`} className="h-8 w-8" />
          ) : (
            <PaginationLink
              key={p}
              isActive={p === page}
              onClick={() => setPage(p)}
              className="h-8 w-8 rounded-lg text-xs"
            >
              {p}
            </PaginationLink>
          )
        )}
        <PaginationNext
          onClick={() => setPage((p) => Math.min(TOTAL_PAGES, p + 1))}
          aria-disabled={page === TOTAL_PAGES}
          className={cn(
            "h-8 px-2.5 rounded-lg text-xs",
            page === TOTAL_PAGES && "pointer-events-none opacity-40"
          )}
        />
      </div>
      <p className="text-xs text-muted-foreground">Página {page} de {TOTAL_PAGES}</p>
    </div>
  );
}

/* ── Variant 2: Rounded — full circles, pill wrapper ── */
export function PaginationRoundedDemo() {
  const [page, setPage] = React.useState(1);
  const pages = getVisiblePages(page, TOTAL_PAGES);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="inline-flex items-center rounded-full border bg-background shadow-sm px-3 py-1.5 gap-1">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          aria-label="Anterior"
          className="inline-flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:opacity-40 disabled:pointer-events-none"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        {pages.map((p, i) =>
          p === "ellipsis" ? (
            <span key={`e${i}`} className="inline-flex h-7 w-5 items-center justify-center text-xs text-muted-foreground select-none">···</span>
          ) : (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={cn(
                "inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium transition-all",
                p === page
                  ? "bg-primary text-primary-foreground shadow-sm scale-110"
                  : "text-foreground hover:bg-accent"
              )}
            >
              {p}
            </button>
          )
        )}
        <button
          onClick={() => setPage((p) => Math.min(TOTAL_PAGES, p + 1))}
          disabled={page === TOTAL_PAGES}
          aria-label="Siguiente"
          className="inline-flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:opacity-40 disabled:pointer-events-none"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
        </button>
      </div>
      <p className="text-xs text-muted-foreground">Página {page} de {TOTAL_PAGES}</p>
    </div>
  );
}

/* ── Variant 3: Square/Flat — borderless, active = solid primary ── */
export function PaginationSquareDemo() {
  const [page, setPage] = React.useState(1);
  const pages = getVisiblePages(page, TOTAL_PAGES);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="inline-flex items-center rounded-lg border bg-muted/40 px-1.5 py-1.5 gap-0.5">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          aria-label="Anterior"
          className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-background hover:text-foreground hover:shadow-sm disabled:opacity-40 disabled:pointer-events-none"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        {pages.map((p, i) =>
          p === "ellipsis" ? (
            <span key={`e${i}`} className="inline-flex h-8 w-6 items-center justify-center text-xs text-muted-foreground select-none">···</span>
          ) : (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={cn(
                "inline-flex h-8 w-8 items-center justify-center rounded-md text-xs font-medium transition-all",
                p === page
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-foreground hover:bg-background hover:shadow-sm"
              )}
            >
              {p}
            </button>
          )
        )}
        <button
          onClick={() => setPage((p) => Math.min(TOTAL_PAGES, p + 1))}
          disabled={page === TOTAL_PAGES}
          aria-label="Siguiente"
          className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-background hover:text-foreground hover:shadow-sm disabled:opacity-40 disabled:pointer-events-none"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
        </button>
      </div>
      <p className="text-xs text-muted-foreground">Página {page} de {TOTAL_PAGES}</p>
    </div>
  );
}

/* ── Variant 4: Minimal/Text — no box, prev/next as text ── */
export function PaginationMinimalDemo() {
  const [page, setPage] = React.useState(3);
  const pages = getVisiblePages(page, TOTAL_PAGES);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="inline-flex items-center gap-1">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-sm text-primary font-medium transition-colors hover:bg-primary/8 disabled:opacity-40 disabled:pointer-events-none"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          Anterior
        </button>
        <div className="flex items-center gap-0.5 mx-1">
          {pages.map((p, i) =>
            p === "ellipsis" ? (
              <span key={`e${i}`} className="inline-flex h-8 w-6 items-center justify-center text-xs text-muted-foreground select-none">···</span>
            ) : (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={cn(
                  "inline-flex h-8 w-8 items-center justify-center rounded-md text-sm transition-colors",
                  p === page
                    ? "font-semibold text-primary underline underline-offset-4"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {p}
              </button>
            )
          )}
        </div>
        <button
          onClick={() => setPage((p) => Math.min(TOTAL_PAGES, p + 1))}
          disabled={page === TOTAL_PAGES}
          className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-sm text-primary font-medium transition-colors hover:bg-primary/8 disabled:opacity-40 disabled:pointer-events-none"
        >
          Siguiente
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
        </button>
      </div>
      <p className="text-xs text-muted-foreground">Página {page} de {TOTAL_PAGES}</p>
    </div>
  );
}

/* ── Customization demo (className overrides on base component) ── */
export function PaginationCustomizationDemo() {
  const [page, setPage] = React.useState(2);
  const pages = getVisiblePages(page, 5);

  return (
    <Pagination>
      <PaginationContent className="gap-1.5">
        <PaginationItem>
          <PaginationPrevious
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            aria-disabled={page === 1}
            className={cn(
              "rounded-full h-8 px-3 text-xs border border-border",
              page === 1 && "pointer-events-none opacity-40"
            )}
          />
        </PaginationItem>
        {pages.map((p, i) =>
          p === "ellipsis" ? (
            <PaginationItem key={`e${i}`}>
              <PaginationEllipsis className="h-8 w-8" />
            </PaginationItem>
          ) : (
            <PaginationItem key={p}>
              <PaginationLink
                isActive={p === page}
                onClick={() => setPage(p)}
                className={cn(
                  "rounded-full h-8 w-8 text-xs border",
                  p === page
                    ? "bg-violet-600 text-white border-violet-600 hover:bg-violet-700"
                    : "border-border hover:bg-violet-50 dark:hover:bg-violet-950/30"
                )}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          )
        )}
        <PaginationItem>
          <PaginationNext
            onClick={() => setPage((p) => Math.min(5, p + 1))}
            aria-disabled={page === 5}
            className={cn(
              "rounded-full h-8 px-3 text-xs border border-border",
              page === 5 && "pointer-events-none opacity-40"
            )}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
