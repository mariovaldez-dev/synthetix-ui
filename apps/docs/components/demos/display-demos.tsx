"use client";

import * as React from "react";
import { 
  AspectRatio, 
  Avatar, 
  AvatarImage, 
  AvatarFallback, 
  Separator, 
  Skeleton, 
  Table, 
  TableHeader, 
  TableBody, 
  TableFooter, 
  TableRow, 
  TableHead, 
  TableCell, 
  TableCaption,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@synthetix-ui/core";

export function AspectRatioDemo() {
  return (
    <div className="w-[450px] overflow-hidden rounded-md border">
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2d6c5f10f84?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="h-full w-full object-cover"
        />
      </AspectRatio>
    </div>
  );
}

export function AvatarDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </div>
  );
}

export function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Chassis UI</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  );
}

export function SkeletonDemo() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

const tableData = [
  { invoice: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { invoice: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
  { invoice: "INV003", status: "Unpaid", method: "Bank Transfer", amount: "$350.00" },
];

export function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((item) => (
          <TableRow key={item.invoice}>
            <TableCell className="font-medium">{item.invoice}</TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell>{item.method}</TableCell>
            <TableCell className="text-right">{item.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$750.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <div className="flex aspect-square items-center justify-center rounded-xl border bg-card p-6">
                <span className="text-4xl font-semibold">{index + 1}</span>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export function AvatarCustomizationDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="h-14 w-14 ring-2 ring-violet-500 ring-offset-2 ring-offset-background">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="h-14 w-14 rounded-xl">
        <AvatarFallback className="rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 text-white font-bold">
          MF
        </AvatarFallback>
      </Avatar>
      <Avatar className="h-8 w-8 ring-1 ring-rose-400">
        <AvatarFallback className="bg-rose-100 text-rose-700 text-xs dark:bg-rose-950 dark:text-rose-300">
          AB
        </AvatarFallback>
      </Avatar>
    </div>
  );
}

export function SkeletonCustomizationDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-xl bg-violet-200 dark:bg-violet-800" />
        <div className="space-y-2">
          <Skeleton className="h-3 w-[200px] bg-violet-200 dark:bg-violet-800" />
          <Skeleton className="h-3 w-[150px] bg-violet-100 dark:bg-violet-900" />
        </div>
      </div>
      <Skeleton className="h-24 w-full rounded-xl bg-gradient-to-r from-muted to-muted/40" />
    </div>
  );
}

export function SeparatorCustomizationDemo() {
  return (
    <div className="w-64 space-y-4">
      <Separator className="bg-violet-400 h-px" />
      <Separator className="bg-gradient-to-r from-transparent via-primary to-transparent h-px" />
      <Separator className="bg-rose-400 h-0.5 rounded-full" />
    </div>
  );
}

export function TableCustomizationDemo() {
  return (
    <Table className="rounded-xl overflow-hidden border">
      <TableHeader className="bg-primary text-primary-foreground">
        <TableRow className="border-0 hover:bg-primary">
          <TableHead className="text-primary-foreground font-bold">Factura</TableHead>
          <TableHead className="text-primary-foreground font-bold">Estado</TableHead>
          <TableHead className="text-primary-foreground font-bold text-right">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="even:bg-muted/40">
          <TableCell className="font-mono text-xs">INV-001</TableCell>
          <TableCell><span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full dark:bg-emerald-950 dark:text-emerald-300">Pagado</span></TableCell>
          <TableCell className="text-right font-semibold">$250</TableCell>
        </TableRow>
        <TableRow className="even:bg-muted/40">
          <TableCell className="font-mono text-xs">INV-002</TableCell>
          <TableCell><span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full dark:bg-amber-950 dark:text-amber-300">Pendiente</span></TableCell>
          <TableCell className="text-right font-semibold">$150</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="w-[300px] space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
        <button onClick={() => setIsOpen(!isOpen)} className="rounded-md border p-1\">
          {isOpen ? "Close" : "Open"}
        </button>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm\">@radix-ui/primitives</div>
      {isOpen && (
        <div className="rounded-md border px-4 py-3 font-mono text-sm\">@radix-ui/react</div>
      )}
    </div>
  );
}
