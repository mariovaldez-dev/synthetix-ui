"use client";

import { useState } from "react";
import { cn } from "@chassis-ui/utils";

interface CopyButtonProps {
  code: string;
  className?: string;
}

export function CopyButton({ code, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "rounded-md px-2 py-1 text-[11px] font-medium transition-colors",
        copied
          ? "bg-emerald-600/30 text-emerald-300"
          : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-zinc-200",
        className,
      )}
    >
      {copied ? "Copiado ✓" : "Copiar"}
    </button>
  );
}
