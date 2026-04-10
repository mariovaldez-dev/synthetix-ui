import type { Metadata } from "next";
import { CodeSnippet } from "@/components/code-snippet";
import { ComponentPreview } from "@/components/component-preview";
import { InputOTPDemo, InputOTPCustomizationDemo } from "@/components/demos/form-extras-demos";

export const metadata: Metadata = { title: "Input OTP" };

export default function InputOTPPage() {
  return (
    <div>
      <h1>Input OTP</h1>
      <p>
        Entrada accesible de contraseña de un solo uso con soporte para grupos y separadores.
      </p>

      <h2>Preview</h2>
      <ComponentPreview>
        <InputOTPDemo />
      </ComponentPreview>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @synthetix-ui add input-otp`} />

      <h2>Personalización</h2>
      <p>
        Usa <code>className</code> para personalizar estilos individuales. Para cambiar el color primario globalmente, usa el selector de tema en la barra superior.
      </p>
      <ComponentPreview>
        <InputOTPCustomizationDemo />
      </ComponentPreview>

      <h2>Uso básico</h2>
      <CodeSnippet
        code={`import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@synthetix-ui/core"

export function Example() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
}`}
      />
    </div>
  );
}
