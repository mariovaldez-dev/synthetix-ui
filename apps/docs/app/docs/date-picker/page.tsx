import type { Metadata } from "next";
import { CodeSnippet } from "@/components/code-snippet";
import { ComponentPreview } from "@/components/component-preview";
import { DatePickerDemo, DatePickerWithRangeDemo } from "@/components/demos/calendar-demos";

export const metadata: Metadata = { title: "Date Picker" };

export default function DatePickerPage() {
  return (
    <div>
      <h1>Date Picker</h1>
      <p>
        Un selector de fecha con entrada de texto y popover de calendario.
      </p>

      <div className="space-y-12">
        <section>
          <h2>Preview</h2>
          <ComponentPreview>
            <DatePickerDemo />
          </ComponentPreview>
        </section>

        <section>
          <h2>Instalación</h2>
          <CodeSnippet code={`npx @chassis-ui add date-picker`} />
        </section>

        <section>
          <h2>Date Range Picker</h2>
          <p>Permite seleccionar un rango de fechas utilizando un popover con dos calendarios.</p>
          <ComponentPreview>
            <DatePickerWithRangeDemo />
          </ComponentPreview>
        </section>

        <section>
          <h2>Uso básico</h2>
          <CodeSnippet
            code={`import { DatePicker } from "@chassis-ui/core";

export function Example() {
  const [date, setDate] = React.useState<Date>();
  return (
    <DatePicker
      selected={date}
      onSelect={setDate}
      placeholder="Selecciona una fecha"
    />
  );
}`}
          />
        </section>
      </div>
    </div>
  );
}
