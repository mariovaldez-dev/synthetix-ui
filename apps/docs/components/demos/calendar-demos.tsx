"use client";

import * as React from "react";
import {
  Calendar,
  DatePicker,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Badge,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@synthetix-ui/core";
import { addDays, format, isSameDay } from "date-fns";
import { DateRange } from "react-day-picker";
import { cn } from "@synthetix-ui/utils";

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
}

export function CalendarRangeDemo() {
  const defaultSelected: DateRange = {
    from: new Date(),
    to: addDays(new Date(), 7)
  };
  const [range, setRange] = React.useState<DateRange | undefined>(defaultSelected);

  return (
    <div className="flex flex-col gap-4">
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        className="rounded-md border shadow"
      />
      <p className="text-sm text-muted-foreground">
        {range?.from ? (
          range.to ? (
            <>
              {format(range.from, "LLL dd, y")} - {format(range.to, "LLL dd, y")}
            </>
          ) : (
            format(range.from, "LLL dd, y")
          )
        ) : (
          "Selecciona un rango"
        )}
      </p>
    </div>
  );
}

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>();

  return (
    <DatePicker
      selected={date}
      onSelect={setDate}
      placeholder="Pick a date"
    />
  );
}

export function DatePickerWithRangeDemo() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 20),
  });

  return (
    <div className="grid gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-4 w-4"
            >
              <path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" />
            </svg>
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from ?? new Date()}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

// Mock tasks for the advanced views
const MOCK_TASKS = [
  { id: "1", date: new Date(), title: "Reunión de Diseño", description: "Revisar los nuevos mockups de la interfaz de usuario con el equipo creativo.", time: "10:00 AM", variant: "default" },
  { id: "2", date: addDays(new Date(), 2), title: "Revisión de Código", description: "Sesión técnica para validar los pull requests pendientes del core.", time: "2:30 PM", variant: "secondary" },
  { id: "3", date: addDays(new Date(), 2), title: "Deploy Proyectos", description: "Lanzamiento de las nuevas versiones a producción.", time: "4:00 PM", variant: "destructive" },
  { id: "4", date: addDays(new Date(), 5), title: "Daily Sync", description: "Sincronización diaria rápida con el equipo de frontend.", time: "9:00 AM", variant: "outline" },
  { id: "5", date: addDays(new Date(), -1), title: "Workshop UX", description: "Taller interactivo sobre mejores prácticas de usabilidad.", time: "11:00 AM", variant: "default" },
];

export function CalendarFullViewDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [selectedDayTasks, setSelectedDayTasks] = React.useState<typeof MOCK_TASKS>([]);

  const handleDayClick = (dayDate: Date) => {
    const tasks = MOCK_TASKS.filter((t) => isSameDay(t.date, dayDate));
    setSelectedDayTasks(tasks);
    setIsDialogOpen(true);
  };

  return (
    <div className="w-full max-w-5xl p-4 bg-card rounded-xl border shadow-lg mx-auto overflow-hidden">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 px-2 gap-4">
        <div>
          <h3 className="text-2xl font-bold tracking-tight">Planificador Mensual</h3>
          <p className="text-muted-foreground text-sm">Gestiona tus eventos e tareas del mes.</p>
        </div>
        <Button size="sm">Añadir Tarea</Button>
      </div>

      <div className="border rounded-lg bg-background p-1 sm:p-4 w-full overflow-hidden">
        <div className="w-full overflow-x-auto">
          <div className="min-w-[700px] w-full">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="w-full p-0"
              classNames={{
                months: "w-full",
                month: "w-full space-y-4",
                table: "w-full border-collapse table-fixed",
                head_row: "flex w-full mb-2",
                row: "flex w-full",
                head_cell: "text-muted-foreground rounded-md font-bold text-[0.8rem] text-center w-[14.2857%] shrink-0",
                cell: "h-[110px] text-center text-sm p-0 m-0 relative border-[0.5px] border-border/10 focus-within:relative focus-within:z-20 w-[14.2857%] shrink-0 overflow-hidden",
                day: "h-full w-full p-0 font-normal aria-selected:opacity-100 flex flex-col items-center justify-start group",
              }}
              components={{
                Day: ({ date, displayMonth, ...props }) => {
                  const tasks = MOCK_TASKS.filter((t) => isSameDay(t.date, date));
                  const isToday = isSameDay(date, new Date());
                  const isOutside =
                    date.getMonth() !== displayMonth.getMonth() ||
                    date.getFullYear() !== displayMonth.getFullYear();
                  const maxVisible = 2;
                  const extra = tasks.length - maxVisible;

                  return (
                    <div
                      onClick={() => !isOutside && handleDayClick(date)}
                      className={cn(
                        "h-[110px] w-full p-1.5 flex flex-col items-start hover:bg-accent/50 transition-colors cursor-pointer overflow-hidden",
                        isOutside && "text-muted-foreground opacity-30 bg-muted/5 cursor-default pointer-events-none"
                      )}
                    >
                      <span
                        className={cn(
                          "text-xs font-semibold mb-1 w-6 h-6 flex items-center justify-center rounded-full shrink-0",
                          isToday && "bg-primary text-primary-foreground"
                        )}
                      >
                        {date.getDate()}
                      </span>
                      <div className="flex flex-col gap-0.5 w-full overflow-hidden">
                        {tasks.slice(0, maxVisible).map((task) => (
                          <div
                            key={task.id}
                            className={cn(
                              "px-1.5 py-0.5 text-[10px] w-full rounded truncate border font-semibold",
                              task.variant === "default" && "bg-primary/10 border-primary/30 text-primary dark:bg-primary/20",
                              task.variant === "secondary" && "bg-secondary/20 border-secondary/40 text-secondary-foreground",
                              task.variant === "destructive" && "bg-destructive/10 border-destructive/30 text-destructive dark:bg-destructive/20",
                              task.variant === "outline" && "bg-muted border-border text-muted-foreground"
                            )}
                          >
                            {task.title}
                          </div>
                        ))}
                        {extra > 0 && (
                          <span className="text-[10px] text-muted-foreground font-medium pl-1">
                            +{extra} más
                          </span>
                        )}
                      </div>
                    </div>
                  );
                },
              }}
            />
          </div>
        </div>
      </div>

      <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} size="md">
        <DialogHeader onClose={() => setIsDialogOpen(false)}>
          <h3 className="text-lg font-bold">
            Tareas para el {selectedDayTasks[0] ? format(selectedDayTasks[0].date, "PPP") : "Día Seleccionado"}
          </h3>
        </DialogHeader>
        <DialogBody>
          {selectedDayTasks.length > 0 ? (
            <div className="space-y-4">
              {selectedDayTasks.map((task) => (
                <div key={task.id} className="p-3 border rounded-lg bg-accent/30">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm">{task.title}</span>
                    <Badge variant={task.variant as any}>{task.time}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{task.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-center py-8 text-muted-foreground italic">
              No hay tareas programadas para este día.
            </p>
          )}
        </DialogBody>
        <DialogFooter>
          <Button onClick={() => setIsDialogOpen(false)} variant="outline">
            Cerrar
          </Button>
          <Button onClick={() => setIsDialogOpen(false)}>Añadir Nueva</Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export function CalendarWeeklyViewDemo() {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [selectedTask, setSelectedTask] = React.useState<typeof MOCK_TASKS[0] | null>(null);

  const hours = Array.from({ length: 12 }, (_, i) => i + 8); // 8 AM to 7 PM
  const days = Array.from({ length: 7 }, (_, i) => addDays(new Date(), i - new Date().getDay()));

  const handleTaskClick = (task: typeof MOCK_TASKS[0]) => {
    setSelectedTask(task);
    setIsDialogOpen(true);
  };

  return (
    <div className="w-full max-w-5xl p-4 bg-card rounded-xl border shadow-lg overflow-hidden mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 px-2 gap-4">
        <div>
          <h3 className="text-2xl font-bold tracking-tight">Vista Semanal</h3>
          <p className="text-muted-foreground text-sm">Cronograma de actividades semanales.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Hoy</Button>
          <Button size="sm">Nueva Tarea</Button>
        </div>
      </div>

      <div className="border rounded-lg bg-background overflow-auto h-[520px]">
        <div className="flex min-w-[580px]">
          {/* Time gutter — sticky left */}
          <div className="w-14 sm:w-16 shrink-0 sticky left-0 z-20 bg-muted/20 border-r">
            <div className="h-12 border-b bg-muted/10" />
            {hours.map(hour => (
              <div key={hour} className="h-[56px] border-b text-[10px] text-muted-foreground flex items-start justify-center pt-1.5">
                {hour > 12 ? `${hour - 12} PM` : `${hour} AM`}
              </div>
            ))}
          </div>

          {/* Day columns */}
          <div className="flex flex-1">
            {days.map((day, i) => {
              const dayTasks = MOCK_TASKS.filter(t => isSameDay(t.date, day));
              const isToday = isSameDay(day, new Date());

              return (
                <div key={i} className={cn(
                  "flex-1 border-r last:border-r-0 flex flex-col",
                  isToday && "bg-primary/[0.02]"
                )}>
                  {/* Sticky header per column */}
                  <div className={cn(
                    "h-12 border-b flex flex-col items-center justify-center p-1 sticky top-0 z-10 bg-background/95 backdrop-blur-sm",
                    isToday && "bg-primary/5"
                  )}>
                    <span className="text-[9px] uppercase font-bold text-muted-foreground">
                      {format(day, "eee")}
                    </span>
                    <span className={cn(
                      "text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full mt-0.5",
                      isToday && "bg-primary text-primary-foreground"
                    )}>
                      {day.getDate()}
                    </span>
                  </div>

                  {/* Hour grid + tasks */}
                  <div className="relative">
                    {hours.map((_, hIdx) => (
                      <div key={hIdx} className="h-[56px] border-b border-border/50 last:border-0" />
                    ))}

                    {dayTasks.map((task) => {
                      const time = task.time || "12:00 PM";
                      const hourStr = time.split(":")[0] ?? "12";
                      const isPM = time.includes("PM");
                      let hour = parseInt(hourStr);
                      if (isPM && hour !== 12) hour += 12;
                      if (!isPM && hour === 12) hour = 0;

                      const relativeHour = hour - 8;
                      const topPx = relativeHour * 56 + 4;

                      return (
                        <div
                          key={task.id}
                          onClick={() => handleTaskClick(task)}
                          className={cn(
                            "absolute left-0.5 right-0.5 p-1.5 rounded border text-[10px] cursor-pointer shadow-sm hover:brightness-95 transition-all overflow-hidden z-10",
                            task.variant === "default" && "bg-primary/20 border-primary text-primary dark:bg-primary/40",
                            task.variant === "secondary" && "bg-secondary/20 border-secondary text-secondary-foreground dark:bg-secondary/40",
                            task.variant === "destructive" && "bg-destructive/20 border-destructive text-destructive dark:bg-destructive/40",
                            task.variant === "outline" && "bg-muted border-border text-muted-foreground"
                          )}
                          style={{ top: `${topPx}px`, height: "48px" }}
                        >
                          <div className="font-bold truncate">{task.time}</div>
                          <div className="truncate font-medium opacity-80">{task.title}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} size="sm">
        <DialogHeader onClose={() => setIsDialogOpen(false)}>
          <h3 className="text-lg font-bold">Detalle de Evento</h3>
        </DialogHeader>
        <DialogBody>
          {selectedTask && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant={selectedTask.variant as any}>{selectedTask.time}</Badge>
                <span className="text-xs text-muted-foreground font-mono">{format(selectedTask.date, "PPP")}</span>
              </div>
              <div>
                <h4 className="text-xl font-bold tracking-tight">{selectedTask.title}</h4>
                <p className="text-sm text-foreground/80 mt-2 leading-relaxed">{selectedTask.description}</p>
              </div>
            </div>
          )}
        </DialogBody>
        <DialogFooter>
          <Button onClick={() => setIsDialogOpen(false)} variant="ghost" className="mr-auto text-destructive hover:text-destructive">Eliminar</Button>
          <Button onClick={() => setIsDialogOpen(false)} variant="outline">Editar</Button>
          <Button onClick={() => setIsDialogOpen(false)}>Entendido</Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
