import type { Metadata } from "next";
import { CodeSnippet } from "@/components/code-snippet";
import { ComponentPreview } from "@/components/component-preview";
import { SliderDemo, SliderCustomizationDemo } from "@/components/demos/form-extras-demos";

export const metadata: Metadata = { title: "Slider" };

export default function SliderPage() {
  return (
    <div>
      <h1>Slider</h1>
      <p>
        Una entrada que permite a los usuarios seleccionar un valor de un rango determinado.
      </p>

      <h2>Preview</h2>
      <ComponentPreview>
        <SliderDemo />
      </ComponentPreview>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @chassis-ui add slider`} />

      <h2>Personalización</h2>
      <p>
        Usa <code>className</code> para personalizar estilos individuales. Para cambiar el color primario globalmente, usa el selector de tema en la barra superior.
      </p>
      <ComponentPreview>
        <SliderCustomizationDemo />
      </ComponentPreview>

      <h2>Uso básico</h2>
      <CodeSnippet
        code={`import { Slider } from "@chassis-ui/core";

export function Example() {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
    />
  );
}`}
      />
    </div>
  );
}
