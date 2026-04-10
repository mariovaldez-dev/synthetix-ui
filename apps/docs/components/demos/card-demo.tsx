"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardBody, CardFooter, Button, Badge } from "@synthetix-ui/core";

export function CardBasicDemo() {
  return (
    <div className="w-80">
      <Card>
        <CardHeader>
          <CardTitle>Título de la card</CardTitle>
          <CardDescription>Subtítulo opcional</CardDescription>
        </CardHeader>
        <CardBody>Contenido principal de la card con información relevante.</CardBody>
        <CardFooter>
          <Button variant="outline" size="sm">Cancelar</Button>
          <Button size="sm">Aceptar</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export function CardCustomizationDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <Card className="w-56 border-violet-200 bg-violet-50 dark:border-violet-800 dark:bg-violet-950/30">
        <CardHeader>
          <CardTitle className="text-violet-700 dark:text-violet-300">Violet</CardTitle>
          <CardDescription>Color de borde personalizado.</CardDescription>
        </CardHeader>
      </Card>
      <Card className="w-56 border-0 shadow-xl shadow-black/10 dark:shadow-black/40">
        <CardHeader>
          <CardTitle>Elevada</CardTitle>
          <CardDescription>Sombra prominente, sin borde.</CardDescription>
        </CardHeader>
      </Card>
      <Card className="w-56 border-dashed border-2">
        <CardHeader>
          <CardTitle>Dashed</CardTitle>
          <CardDescription>Borde discontinuo para borradores.</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}

export function CardNoPaddingDemo() {
  return (
    <div className="w-80">
      <Card noPadding>
        <div className="h-28 rounded-t-xl bg-gradient-to-br from-primary/60 to-primary" />
        <div className="p-5">
          <div className="flex items-start justify-between">
            <CardTitle>Producto destacado</CardTitle>
            <Badge variant="success">Nuevo</Badge>
          </div>
          <CardDescription className="mt-1">Descripción breve del producto.</CardDescription>
        </div>
      </Card>
    </div>
  );
}
