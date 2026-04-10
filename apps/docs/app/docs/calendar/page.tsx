import type { Metadata } from "next";
import { CodeSnippet } from "@/components/code-snippet";
import { ComponentPreview } from "@/components/component-preview";
import { 
  CalendarDemo, 
  CalendarRangeDemo, 
  CalendarFullViewDemo,
  CalendarWeeklyViewDemo
} from "@/components/demos/calendar-demos";

export const metadata: Metadata = { title: "Calendar" };

export default function CalendarPage() {
  return (
    <div className="max-w-4xl">
      <h1>Calendar</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Un componente de calendario flexible y accesible construido sobre react-day-picker.
      </p>

      <div className="space-y-16">
        <section>
          <h2>Preview Básico</h2>
          <ComponentPreview>
            <CalendarDemo />
          </ComponentPreview>
          <h3 className="mt-4">Código</h3>
          <CodeSnippet
            code={`import { Calendar } from "@chassis-ui/core";
import * as React from "react";

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow"
    />
  );
}`}
          />
        </section>

        <section>
          <h2>Selección de Rango</h2>
          <p className="mb-4">Utiliza el modo <code>range</code> para permitir a los usuarios seleccionar un intervalo de fechas.</p>
          <ComponentPreview>
            <CalendarRangeDemo />
          </ComponentPreview>
          <CodeSnippet
            code={`import { Calendar } from "@chassis-ui/core";
import { DateRange } from "react-day-picker";
import { format, addDays } from "date-fns";

export function CalendarRangeDemo() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7)
  });

  return (
    <Calendar
      mode="range"
      selected={range}
      onSelect={setRange}
      className="rounded-md border shadow"
    />
  );
}`}
          />
        </section>

        <section>
          <h2>Planificador Mensual (Interactivo)</h2>
          <p className="mb-4 text-muted-foreground">
            Una vista avanzada con etiquetas de tareas y diálogos de detalle.
          </p>
          <ComponentPreview>
            <CalendarFullViewDemo />
          </ComponentPreview>
          <h3 className="mt-8">Implementación Sugerida</h3>
          <p className="text-sm mb-4">Esta vista utiliza el componente <code>Day</code> personalizado para renderizar tareas dentro de las celdas.</p>
          <CodeSnippet
            code={`import { Calendar, Dialog, DialogHeader, DialogBody, DialogFooter, Button } from "@chassis-ui/core";
import { isSameDay, format } from "date-fns";

export function MonthlyPlanner() {
  return (
    <Calendar
      mode="single"
      className="w-full"
      classNames={{
        months: "w-full",
        month: "w-full space-y-4",
        table: "w-full border-collapse",
        head_row: "flex w-full mb-2",
        row: "flex w-full",
        head_cell: "text-muted-foreground rounded-md w-[14.285%]",
        cell: "min-h-[120px] relative w-[14.285%] border-[0.5px] border-border/10",
        day: "h-full w-full p-0 flex flex-col items-center justify-start",
      }}
      components={{
        Day: ({ date, displayMonth }) => {
          const tasks = getTasksForDay(date); // Tu lógica de filtrado
          return (
            <div onClick={() => openDialog(date)} className="relative min-h-[120px] w-full p-2">
              <span className="text-xs font-semibold">{date.getDate()}</span>
              {tasks.map(task => (
                <div key={task.id} className="truncate text-[10px] bg-primary/10 border p-0.5 rounded">
                  {task.title}
                </div>
              ))}
            </div>
          );
        }
      }}
    />
  );
}`}
          />
        </section>

        <section>
          <h2>Vista Semanal (Google Calendar Style)</h2>
          <p className="mb-4 text-muted-foreground">
            Cronograma semanal con bloques de tiempo y scroll horizontal.
          </p>
          <ComponentPreview>
            <CalendarWeeklyViewDemo />
          </ComponentPreview>
          <h3 className="mt-8">Lógica de Columnas y Tiempo</h3>
          <CodeSnippet
            code={`import { ScrollArea, Dialog, Badge } from "@chassis-ui/core";

export function WeeklyView() {
  const hours = Array.from({ length: 12 }, (_, i) => i + 8); // 8 AM - 7 PM
  const days = getDayArrayForCurrentWeek(); // Array de 7 fechas

  return (
    <div className="flex border rounded-lg h-[600px] relative">
      <div className="w-20 border-r bg-muted/20 shrink-0">
        {/* Sidebar de Horas */}
      </div>
      <ScrollArea className="flex-1 overflow-x-auto">
        <div className="flex min-w-[800px] h-full">
          {days.map(day => (
            <div className="flex-1 border-r relative">
              {/* Bloques de Eventos posicionados absolutamente */}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}`}
          />
        </section>

        <section>
          <h2>Instalación</h2>
          <CodeSnippet code={`npx @chassis-ui add calendar`} />
        </section>
      </div>
    </div>
  );
}
