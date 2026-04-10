"use client";

import { useState, useEffect } from "react";
import {
  Button,
  Input,
  Badge,
  Spinner,
  Switch,
  Checkbox,
  Textarea,
  Select,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardBody,
  CardFooter,
  Accordion,
  Toaster,
  useToast,
} from "@synthetix-ui/core";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      type="button"
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle dark mode"
      className="fixed right-4 top-4 z-50 flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-foreground shadow-sm transition-colors hover:bg-accent"
    >
      {dark ? (
        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      )}
    </button>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{title}</h2>
      {children}
    </section>
  );
}

const FAQ = [
  { id: "q1", trigger: "¿Qué es synthetix-ui?", content: "Una librería de componentes UI para React con Tailwind CSS." },
  { id: "q2", trigger: "¿Cómo se instala?", content: "Con npx @synthetix-ui add <componente> o instalando @synthetix-ui/core." },
  { id: "q3", trigger: "¿Soporte dark mode?", content: "Sí. Añade la clase .dark al elemento html y el preset hace el resto." },
];

export function App() {
  const [inputVal, setInputVal]     = useState("");
  const [checked, setChecked]       = useState(false);
  const [switchOn, setSwitchOn]     = useState(false);
  const [textareaVal, setTextareaVal] = useState("");
  const [selectVal, setSelectVal]   = useState("");
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <Toaster />

      <div className="mx-auto max-w-2xl space-y-12 px-6 py-16">
        {/* Header */}
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">synthetix-ui</h1>
          <p className="text-sm text-muted-foreground">Playground de componentes. Usa el toggle arriba a la derecha para cambiar de tema.</p>
        </div>

        {/* Button */}
        <Section title="Button">
          <div className="flex flex-wrap gap-2">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="link">Link</Button>
            <Button isLoading>Loading</Button>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
          {/* asChild — Button como <a> */}
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">asChild — renderiza como &lt;a&gt; conservando todos los estilos:</p>
            <div className="flex gap-2">
              <Button asChild variant="primary">
                <a href="#top">Link primario</a>
              </Button>
              <Button asChild variant="outline">
                <a href="#top">Link outline</a>
              </Button>
            </div>
          </div>
        </Section>

        {/* Badge */}
        <Section title="Badge">
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success" dot>Online</Badge>
            <Badge variant="warning" dot>Advertencia</Badge>
            <Badge variant="danger">Error</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="primary" onRemove={() => {}}>Removable</Badge>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">asChild — Badge como &lt;button&gt;:</p>
            <Badge asChild variant="primary">
              <button type="button" onClick={() => toast({ title: "Badge clickeado", variant: "info" })}>
                Clickable badge
              </button>
            </Badge>
          </div>
        </Section>

        {/* Card */}
        <Section title="Card">
          <div className="grid gap-3 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Default card</CardTitle>
                <CardDescription>Borde sutil + shadow-sm</CardDescription>
              </CardHeader>
              <CardBody>Contenido principal de la card.</CardBody>
              <CardFooter>
                <Button variant="outline" size="sm">Cancelar</Button>
                <Button size="sm">Aceptar</Button>
              </CardFooter>
            </Card>
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Elevated</CardTitle>
                <CardDescription>Shadow-md para mayor jerarquía</CardDescription>
              </CardHeader>
              <CardBody>Ideal para modals o contenido destacado.</CardBody>
            </Card>
            <Card variant="flat">
              <CardHeader>
                <CardTitle>Flat</CardTitle>
                <CardDescription>Sin borde, fondo muted</CardDescription>
              </CardHeader>
              <CardBody>Áreas secundarias o sidebars.</CardBody>
            </Card>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">asChild — Card como &lt;article&gt;:</p>
            <Card asChild>
              <article>
                <CardHeader>
                  <CardTitle>Card semántica</CardTitle>
                  <CardDescription>Renderiza como article en el DOM</CardDescription>
                </CardHeader>
                <CardBody>Mejora el SEO y la accesibilidad sin perder los estilos.</CardBody>
              </article>
            </Card>
          </div>
        </Section>

        {/* Form */}
        <Section title="Form elements">
          <Input
            label="Nombre"
            placeholder="Tu nombre"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            helperText="Escribe tu nombre completo"
          />
          <Input label="Con error" placeholder="..." errorText="Este campo es obligatorio" />
          <div className="grid gap-3 sm:grid-cols-3">
            <Input label="Small" size="sm" placeholder="sm" />
            <Input label="Medium" size="md" placeholder="md" />
            <Input label="Large" size="lg" placeholder="lg" />
          </div>
          <Select
            label="País"
            placeholder="Selecciona un país"
            value={selectVal}
            onValueChange={(val) => setSelectVal(val)}
            options={[
              { value: "mx", label: "México" },
              { value: "es", label: "España" },
              { value: "ar", label: "Argentina" },
            ]}
          />
          <Textarea
            label="Descripción"
            placeholder="Escribe algo..."
            value={textareaVal}
            onChange={(e) => setTextareaVal(e.target.value)}
            maxLength={200}
            showCount
            autoResize
          />
          <div className="flex flex-col gap-3">
            <Checkbox
              label="Acepto los términos y condiciones"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <Switch
              label={`Notificaciones: ${switchOn ? "activadas" : "desactivadas"}`}
              checked={switchOn}
              onCheckedChange={(checked) => setSwitchOn(checked)}
            />
          </div>
        </Section>

        {/* Spinner */}
        <Section title="Spinner">
          <div className="flex items-center gap-4">
            <Spinner size="xs" /><Spinner size="sm" /><Spinner size="md" /><Spinner size="lg" /><Spinner size="xl" />
          </div>
        </Section>

        {/* Accordion */}
        <Section title="Accordion">
          <Accordion items={FAQ} />
        </Section>

        {/* Toast */}
        <Section title="Toast">
          <div className="flex flex-wrap gap-2">
            {(["default", "success", "warning", "danger", "info"] as const).map((v) => (
              <Button key={v} variant="outline" size="sm"
                onClick={() => toast({ title: v.charAt(0).toUpperCase() + v.slice(1), description: "Mensaje de ejemplo", variant: v })}
              >
                {v}
              </Button>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}
