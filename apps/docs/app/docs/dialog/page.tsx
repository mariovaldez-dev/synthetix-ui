import type { Metadata } from "next";
import { ComponentPreview, PropsTable } from "@/components/component-preview";
import { CodeSnippet } from "@/components/code-snippet";
import { DialogBasicDemo, DialogFormDemo, DialogCustomizationDemo } from "@/components/demos/dialog-demo";

export const metadata: Metadata = { title: "Dialog" };

export default function DialogPage() {
  return (
    <div>
      <h1>Dialog</h1>
      <p>Modal accesible con trampa de foco, cierre con Escape y portal al body.</p>

      <h2>Instalación</h2>
      <CodeSnippet code={`npx @synthetix-ui add dialog`} />

      <h2>Uso</h2>
      <CodeSnippet
        code={`import { useState } from "react";
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button } from "@/components/ui/dialog";

export function Example() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Abrir Dialog</Button>
      <Dialog isOpen={open} onClose={() => setOpen(false)}>
        <DialogHeader onClose={() => setOpen(false)}>
          <h2>Confirmar acción</h2>
        </DialogHeader>
        <DialogBody>¿Estás seguro de que deseas continuar?</DialogBody>
        <DialogFooter>
          <Button variant="outline" size="sm" onClick={() => setOpen(false)}>Cancelar</Button>
          <Button size="sm" onClick={() => setOpen(false)}>Confirmar</Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}`}
      />

      <h2>Básico</h2>
      <ComponentPreview
        code={`<Button onClick={() => setOpen(true)}>Abrir Dialog</Button>
<Dialog isOpen={open} onClose={() => setOpen(false)}>
  <DialogHeader onClose={() => setOpen(false)}>
    <h2>Confirmar acción</h2>
  </DialogHeader>
  <DialogBody>
    <p>¿Estás seguro de que deseas continuar? Esta acción no se puede deshacer.</p>
  </DialogBody>
  <DialogFooter>
    <Button variant="outline" size="sm" onClick={() => setOpen(false)}>Cancelar</Button>
    <Button variant="danger" size="sm" onClick={() => setOpen(false)}>Eliminar</Button>
  </DialogFooter>
</Dialog>`}
      >
        <DialogBasicDemo />
      </ComponentPreview>

      <h2>Con formulario</h2>
      <ComponentPreview
        code={`<Dialog isOpen={open} onClose={() => setOpen(false)}>
  <DialogHeader onClose={() => setOpen(false)}>
    <h2>Crear usuario</h2>
  </DialogHeader>
  <DialogBody>
    <div className="flex flex-col gap-4">
      <Input label="Nombre" placeholder="Mario Flores" fullWidth />
      <Input label="Correo" type="email" placeholder="mario@ejemplo.com" fullWidth />
    </div>
  </DialogBody>
  <DialogFooter>
    <Button variant="outline" size="sm" onClick={() => setOpen(false)}>Cancelar</Button>
    <Button size="sm" onClick={() => setOpen(false)}>Crear</Button>
  </DialogFooter>
</Dialog>`}
      >
        <DialogFormDemo />
      </ComponentPreview>

      <h2>Personalización</h2>
      <p>
        Usa <code>className</code> para personalizar estilos individuales. Para cambiar el color primario globalmente, usa el selector de tema en la barra superior.
      </p>
      <ComponentPreview
        code={`<Dialog isOpen={open} onClose={() => setOpen(false)} className="border-violet-200">
  <DialogHeader
    onClose={() => setOpen(false)}
    className="bg-gradient-to-r from-violet-500 to-indigo-600 rounded-t-xl"
  >
    <h2 className="text-white">Header con gradiente</h2>
  </DialogHeader>
  <DialogBody>Contenido personalizado.</DialogBody>
  <DialogFooter>
    <Button size="sm" onClick={() => setOpen(false)}>Cerrar</Button>
  </DialogFooter>
</Dialog>`}
      >
        <DialogCustomizationDemo />
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable
        props={[
          {
            name: "isOpen",
            type: "boolean",
            description: "Controla la visibilidad del dialog",
          },
          {
            name: "onClose",
            type: "() => void",
            description: "Callback al cerrar (Escape o clic en overlay)",
          },
          {
            name: "children",
            type: "React.ReactNode",
            description: "Contenido del dialog",
          },
          {
            name: "className",
            type: "string",
            description: "Clases adicionales de Tailwind para el panel",
          },
        ]}
      />

      <h2>Accesibilidad</h2>
      <ul>
        <li>Trampa de foco dentro del dialog mientras está abierto</li>
        <li>Cierre con tecla <kbd>Escape</kbd></li>
        <li>Scroll del body bloqueado mientras el dialog está abierto</li>
        <li>Renderizado via <code>createPortal</code> al <code>document.body</code></li>
      </ul>
    </div>
  );
}
