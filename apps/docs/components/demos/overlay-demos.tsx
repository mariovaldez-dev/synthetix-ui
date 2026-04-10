"use client";

import * as React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  Button,
  Input,
  Label
} from "@chassis-ui/core";

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">Name</Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>Back</ContextMenuItem>
        <ContextMenuItem disabled>Forward</ContextMenuItem>
        <ContextMenuItem>Reload</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

export function PopoverCustomizationDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Popover personalizado</Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 border-violet-200 bg-violet-50 dark:border-violet-800 dark:bg-violet-950">
        <p className="text-sm font-medium text-violet-900 dark:text-violet-100">
          Usa <code className="text-xs bg-violet-100 dark:bg-violet-900 px-1 rounded">className</code> en{" "}
          <code className="text-xs bg-violet-100 dark:bg-violet-900 px-1 rounded">PopoverContent</code> para
          personalizar fondo, borde y tipografía.
        </p>
      </PopoverContent>
    </Popover>
  );
}

export function DropdownMenuCustomizationDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Menú personalizado</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 rounded-xl border-violet-200 dark:border-violet-800">
        <DropdownMenuLabel className="text-violet-600 dark:text-violet-400">Mi cuenta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="focus:bg-violet-100 focus:text-violet-700 dark:focus:bg-violet-900 dark:focus:text-violet-300">
          Perfil
        </DropdownMenuItem>
        <DropdownMenuItem className="focus:bg-violet-100 focus:text-violet-700 dark:focus:bg-violet-900 dark:focus:text-violet-300">
          Configuración
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-destructive focus:bg-destructive/10 focus:text-destructive">
          Cerrar sesión
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function HoverCardCustomizationDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@chassis-ui</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-72 border-2 border-primary/20 shadow-xl">
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">@chassis-ui</h4>
          <p className="text-xs text-muted-foreground">
            Librería de componentes UI para React con Tailwind CSS y shadcn/ui philosophy.
          </p>
          <div className="flex gap-2 pt-1">
            <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">React</span>
            <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">Tailwind</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
             <div className="flex items-center justify-center space-x-2">
                <div className="flex-1 text-center">
                  <div className="text-7xl font-bold tracking-tighter">350</div>
                  <div className="text-[0.70rem] uppercase text-muted-foreground">Calories/day</div>
                </div>
             </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
