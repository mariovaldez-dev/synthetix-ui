"use client";

import * as React from "react";
import {
  Label,
  RadioGroup,
  RadioGroupItem,
  Slider,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  Button
} from "@synthetix-ui/core";

const Bold = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 12h9a4 4 0 0 1 0 8H6v-8Z"/><path d="M6 4h7a4 4 0 0 1 0 8H6V4Z"/></svg>
);

const Italic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/></svg>
);

const Underline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 4v6a6 6 0 0 0 12 0V4"/><line x1="4" x2="20" y1="20" y2="20"/></svg>
);

export function LabelDemo() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  );
}

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  );
}

export function SliderDemo() {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className="w-[60%]"
    />
  );
}

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
    </Toggle>
  );
}

export function ToggleGroupDemo() {
  return (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

export function SliderCustomizationDemo() {
  return (
    <div className="flex flex-col gap-6 w-64">
      {/* Override CSS variable scoped al elemento */}
      <div style={{ "--color-primary": "263 70% 50%" } as React.CSSProperties}>
        <Slider defaultValue={[60]} max={100} step={1} />
      </div>
      <div style={{ "--color-primary": "347 77% 50%" } as React.CSSProperties}>
        <Slider defaultValue={[40]} max={100} step={1} />
      </div>
      <div style={{ "--color-primary": "160 84% 38%" } as React.CSSProperties}>
        <Slider defaultValue={[80]} max={100} step={1} />
      </div>
    </div>
  );
}

export function ToggleCustomizationDemo() {
  return (
    <div className="flex gap-3">
      <Toggle
        aria-label="Violet"
        className="data-[state=on]:bg-violet-100 data-[state=on]:text-violet-700 dark:data-[state=on]:bg-violet-900 dark:data-[state=on]:text-violet-300"
      >
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle
        aria-label="Rose"
        className="data-[state=on]:bg-rose-100 data-[state=on]:text-rose-700 dark:data-[state=on]:bg-rose-900 dark:data-[state=on]:text-rose-300"
        defaultPressed
      >
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle
        aria-label="Emerald"
        className="rounded-full data-[state=on]:bg-emerald-100 data-[state=on]:text-emerald-700 dark:data-[state=on]:bg-emerald-900 dark:data-[state=on]:text-emerald-300"
      >
        <Underline className="h-4 w-4" />
      </Toggle>
    </div>
  );
}

export function ToggleGroupCustomizationDemo() {
  return (
    <ToggleGroup
      type="multiple"
      className="rounded-xl border-2 border-violet-200 bg-violet-50 p-1 dark:border-violet-800 dark:bg-violet-950/30"
    >
      <ToggleGroupItem
        value="bold"
        aria-label="Bold"
        className="data-[state=on]:bg-violet-600 data-[state=on]:text-white"
      >
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="italic"
        aria-label="Italic"
        className="data-[state=on]:bg-violet-600 data-[state=on]:text-white"
      >
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="underline"
        aria-label="Underline"
        className="data-[state=on]:bg-violet-600 data-[state=on]:text-white"
      >
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

export function InputOTPCustomizationDemo() {
  return (
    <div className="flex flex-col gap-6 items-center">
      <InputOTP maxLength={6}>
        <InputOTPGroup className="gap-2">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <InputOTPSlot
              key={i}
              index={i}
              className="rounded-xl border-2 border-violet-300 bg-violet-50 text-violet-900 dark:border-violet-700 dark:bg-violet-950 dark:text-violet-100"
            />
          ))}
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
}

export function InputOTPDemo() {
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
}
