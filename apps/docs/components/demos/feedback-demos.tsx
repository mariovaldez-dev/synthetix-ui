"use client";

import * as React from "react";
import {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  Progress,
  Button
} from "@synthetix-ui/core";
const Terminal = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>
);

export function AlertDemo() {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  );
}

export function AlertVariantsDemo() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Alert variant="info">
        <AlertTitle>Note</AlertTitle>
        <AlertDescription>This is an informational alert.</AlertDescription>
      </Alert>
      <Alert variant="success">
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Action completed successfully.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>Please check your credentials.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Something went wrong.</AlertDescription>
      </Alert>
    </div>
  );
}

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Delete Account</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function AlertCustomizationDemo() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <Alert className="border-violet-200 bg-violet-50 text-violet-900 dark:border-violet-800 dark:bg-violet-950/40 dark:text-violet-200">
        <AlertTitle>Personalizado Violet</AlertTitle>
        <AlertDescription>Alerta con colores fuera de las variantes predefinidas.</AlertDescription>
      </Alert>
      <Alert className="border-0 bg-gradient-to-r from-rose-500/10 to-orange-500/10 border-l-4 border-l-rose-500 rounded-none rounded-r-md">
        <AlertTitle>Estilo borde lateral</AlertTitle>
        <AlertDescription>Bordes izquierdos son un patrón común en alertas.</AlertDescription>
      </Alert>
    </div>
  );
}

export function ProgressCustomizationDemo() {
  return (
    <div className="flex flex-col gap-4 w-64">
      <Progress value={60} className="h-2" indicatorClassName="bg-violet-500" />
      <Progress value={75} className="h-3 rounded-sm" indicatorClassName="bg-gradient-to-r from-emerald-400 to-teal-500" />
      <Progress value={40} className="h-4 rounded-full bg-rose-100 dark:bg-rose-950" indicatorClassName="bg-rose-500" />
    </div>
  );
}

export function ProgressDemo() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} className="w-[60%]" />;
}
