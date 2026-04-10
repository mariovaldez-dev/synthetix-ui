"use client";

import { Input } from "@chassis-ui/core";
import { SearchIcon } from "@chassis-ui/icons";

export function InputBasicDemo() {
  return (
    <div className="w-72">
      <Input label="Nombre" placeholder="Mario Flores" />
    </div>
  );
}

export function InputHelperDemo() {
  return (
    <div className="w-72">
      <Input label="Contraseña" type="password" helperText="Mínimo 8 caracteres" />
    </div>
  );
}

export function InputErrorDemo() {
  return (
    <div className="w-72">
      <Input label="Email" defaultValue="no-es-email" errorText="Introduce un email válido" />
    </div>
  );
}

export function InputCustomizationDemo() {
  return (
    <div className="flex flex-col gap-4 w-72">
      <Input
        label="Redondeado"
        placeholder="Buscar..."
        className="rounded-full px-4"
      />
      <Input
        label="Sin borde inferior"
        placeholder="Estilo underline"
        className="rounded-none border-0 border-b-2 border-primary shadow-none px-0 focus-visible:ring-0"
      />
      <Input
        label="Fondo de acento"
        placeholder="Relleno suave"
        className="bg-muted border-transparent focus-visible:bg-background"
      />
    </div>
  );
}

export function InputIconDemo() {
  return (
    <div className="w-72">
      <Input
        label="Buscar"
        placeholder="Buscar componentes..."
        leftElement={<SearchIcon size={14} />}
      />
    </div>
  );
}
