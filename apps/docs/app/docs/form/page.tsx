import type { Metadata } from "next";
import { CodeSnippet } from "@/components/code-snippet";
import { ComponentPreview, PropsTable } from "@/components/component-preview";
import { FormDemo } from "@/components/demos/complex-demos";

export const metadata: Metadata = { title: "Form" };

export default function FormPage() {
  return (
    <div>
      <h1>Form</h1>
      <p>
        Wrapper de <code>react-hook-form</code> con componentes accesibles para labels,
        mensajes de error y descripción. Gestiona IDs automáticamente via <code>useId</code>.
      </p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @synthetix-ui add form`} />

      <h2>Demo visual</h2>
      <p>
        Los componentes de synthetix-ui (<code>Input</code>, <code>Select</code>, <code>Textarea</code>) se pueden combinar libremente en formularios:
      </p>
      <ComponentPreview
        code={`<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
  <Input label="Nombre completo" placeholder="Mario Flores" {...register("name")} />
  <Select label="País" options={countries} {...register("country")} />
  <Textarea label="Mensaje" placeholder="Tu mensaje..." rows={3} {...register("message")} />
  <Button type="submit">Enviar</Button>
</form>`}
      >
        <FormDemo />
      </ComponentPreview>

      <h2>Integración con react-hook-form</h2>
      <CodeSnippet
        code={`import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form, FormField, FormItem, FormLabel,
  FormControl, FormDescription, FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

const schema = z.object({
  username: z.string().min(2, "Mínimo 2 caracteres"),
  email: z.string().email("Email inválido"),
});

export function ProfileForm() {
  const form = useForm({ resolver: zodResolver(schema) });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => console.log(data))} className="space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de usuario</FormLabel>
              <FormControl>
                <input className="flex h-9 w-full rounded-md border px-3 py-1 text-sm" {...field} />
              </FormControl>
              <FormDescription>Nombre visible en tu perfil.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Guardar</Button>
      </form>
    </Form>
  );
}`}
      />

      <h2>Subcomponentes</h2>
      <PropsTable
        props={[
          {
            name: "Form",
            type: "FormProvider",
            description: "Wrapper de react-hook-form FormProvider",
          },
          {
            name: "FormField",
            type: "Controller",
            description: "Conecta un campo con react-hook-form via render prop",
          },
          {
            name: "FormItem",
            type: "div",
            description: "Contenedor de un campo con context de ID compartido",
          },
          {
            name: "FormLabel",
            type: "label",
            description: "Label con color rojo automático en estado de error",
          },
          {
            name: "FormControl",
            type: "Slot",
            description: "Pasa aria-invalid y aria-describedby al input hijo",
          },
          {
            name: "FormDescription",
            type: "p",
            description: "Texto de ayuda asociado al campo",
          },
          {
            name: "FormMessage",
            type: "p",
            description: "Mensaje de validación de react-hook-form",
          },
        ]}
      />
    </div>
  );
}
