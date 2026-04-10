"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@synthetix-ui/utils";

type ThemePreset = {
  id: string;
  name: string;
  swatch: string;
  vars: {
    light: Record<string, string>;
    dark: Record<string, string>;
  };
};

const PRESETS: ThemePreset[] = [
  {
    id: "zinc",
    name: "Zinc",
    swatch: "#3f3f46",
    vars: {
      light: {
        "--color-primary": "240 4% 16%",
        "--color-primary-foreground": "0 0% 98%",
        "--color-ring": "240 4% 16%",
      },
      dark: {
        "--color-primary": "240 5% 88%",
        "--color-primary-foreground": "240 6% 10%",
        "--color-ring": "240 5% 88%",
      },
    },
  },
  {
    id: "violet",
    name: "Violet",
    swatch: "#7c3aed",
    vars: {
      light: {
        "--color-primary": "263 70% 50%",
        "--color-primary-foreground": "0 0% 100%",
        "--color-ring": "263 70% 50%",
      },
      dark: {
        "--color-primary": "263 70% 65%",
        "--color-primary-foreground": "0 0% 100%",
        "--color-ring": "263 70% 65%",
      },
    },
  },
  {
    id: "blue",
    name: "Blue",
    swatch: "#2563eb",
    vars: {
      light: {
        "--color-primary": "221 83% 53%",
        "--color-primary-foreground": "0 0% 100%",
        "--color-ring": "221 83% 53%",
      },
      dark: {
        "--color-primary": "221 83% 65%",
        "--color-primary-foreground": "0 0% 100%",
        "--color-ring": "221 83% 65%",
      },
    },
  },
  {
    id: "rose",
    name: "Rose",
    swatch: "#e11d48",
    vars: {
      light: {
        "--color-primary": "347 77% 50%",
        "--color-primary-foreground": "0 0% 100%",
        "--color-ring": "347 77% 50%",
      },
      dark: {
        "--color-primary": "347 77% 65%",
        "--color-primary-foreground": "0 0% 100%",
        "--color-ring": "347 77% 65%",
      },
    },
  },
  {
    id: "orange",
    name: "Orange",
    swatch: "#ea580c",
    vars: {
      light: {
        "--color-primary": "24 95% 45%",
        "--color-primary-foreground": "0 0% 100%",
        "--color-ring": "24 95% 45%",
      },
      dark: {
        "--color-primary": "24 95% 58%",
        "--color-primary-foreground": "0 0% 100%",
        "--color-ring": "24 95% 58%",
      },
    },
  },
  {
    id: "emerald",
    name: "Emerald",
    swatch: "#059669",
    vars: {
      light: {
        "--color-primary": "160 84% 35%",
        "--color-primary-foreground": "0 0% 100%",
        "--color-ring": "160 84% 35%",
      },
      dark: {
        "--color-primary": "160 84% 55%",
        "--color-primary-foreground": "0 0% 100%",
        "--color-ring": "160 84% 55%",
      },
    },
  },
];

const STYLE_ID = "chassis-theme-override";
const STORAGE_KEY = "synthetix-ui-color-theme";

function hexToHsl(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;

  if (max === min) return [0, 0, Math.round(l * 100)];

  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;

  switch (max) {
    case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
    case g: h = ((b - r) / d + 2) / 6; break;
    case b: h = ((r - g) / d + 4) / 6; break;
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function injectStyle(css: string) {
  document.getElementById(STYLE_ID)?.remove();
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = css;
  document.head.appendChild(el);
}

function applyPreset(preset: ThemePreset) {
  const light = Object.entries(preset.vars.light).map(([k, v]) => `  ${k}: ${v};`).join("\n");
  const dark = Object.entries(preset.vars.dark).map(([k, v]) => `  ${k}: ${v};`).join("\n");
  injectStyle(`:root {\n${light}\n}\n.dark {\n${dark}\n}`);
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ type: "preset", id: preset.id }));
}

function applyCustomHex(hex: string) {
  const [h, s] = hexToHsl(hex);
  injectStyle(
    `:root { --color-primary: ${h} ${s}% 48%; --color-primary-foreground: 0 0% 100%; --color-ring: ${h} ${s}% 48%; }` +
    `.dark { --color-primary: ${h} ${s}% 65%; --color-primary-foreground: 0 0% 100%; --color-ring: ${h} ${s}% 65%; }`
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ type: "custom", hex }));
}

function resetTheme() {
  document.getElementById(STYLE_ID)?.remove();
  localStorage.removeItem(STORAGE_KEY);
}

function restoreFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const saved = JSON.parse(raw);
    if (saved.type === "preset") {
      const preset = PRESETS.find((p) => p.id === saved.id);
      if (preset) { applyPreset(preset); return saved; }
    }
    if (saved.type === "custom" && saved.hex) {
      applyCustomHex(saved.hex);
      return saved;
    }
  } catch { /* ignore */ }
  return null;
}

export function ThemePicker() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [customHex, setCustomHex] = useState("#6366f1");
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = restoreFromStorage();
    if (saved?.type === "preset") setActiveId(saved.id);
    if (saved?.type === "custom") { setActiveId("custom"); setCustomHex(saved.hex); }
  }, []);

  // Close panel on outside click
  useEffect(() => {
    if (!open) return;
    function handler(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const currentSwatch =
    activeId === "custom"
      ? customHex
      : PRESETS.find((p) => p.id === activeId)?.swatch ?? null;

  function handlePreset(preset: ThemePreset) {
    applyPreset(preset);
    setActiveId(preset.id);
  }

  function handleCustom(hex: string) {
    setCustomHex(hex);
    applyCustomHex(hex);
    setActiveId("custom");
  }

  function handleReset() {
    resetTheme();
    setActiveId(null);
  }

  return (
    <div className="relative" ref={panelRef}>
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        title="Cambiar tema de color"
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-full border-2 border-border transition-all hover:scale-110",
          open && "ring-2 ring-ring ring-offset-1 ring-offset-background"
        )}
        style={currentSwatch ? { backgroundColor: currentSwatch } : undefined}
      >
        {!currentSwatch && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted-foreground"
          >
            <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
            <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
            <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
            <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
          </svg>
        )}
      </button>

      {/* Dropdown panel */}
      {open && (
        <div className="absolute right-0 top-10 z-50 w-64 rounded-xl border border-border bg-popover p-4 shadow-lg">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Tema de color
            </p>
            <button
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" /><path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          {/* Preset swatches */}
          <div className="grid grid-cols-6 gap-2 mb-4">
            {PRESETS.map((preset) => (
              <button
                key={preset.id}
                type="button"
                title={preset.name}
                onClick={() => handlePreset(preset)}
                className={cn(
                  "h-8 w-8 rounded-full border-2 transition-all hover:scale-110",
                  activeId === preset.id
                    ? "border-foreground shadow-md scale-110"
                    : "border-transparent"
                )}
                style={{ backgroundColor: preset.swatch }}
              />
            ))}
          </div>

          {/* Preset names */}
          <div className="grid grid-cols-3 gap-x-2 gap-y-1 mb-4">
            {PRESETS.map((preset) => (
              <button
                key={preset.id}
                onClick={() => handlePreset(preset)}
                className={cn(
                  "text-left text-[11px] transition-colors",
                  activeId === preset.id
                    ? "font-semibold text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {preset.name}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-popover px-2 text-[10px] text-muted-foreground">
                personalizado
              </span>
            </div>
          </div>

          {/* Custom color */}
          <div className="flex items-center gap-2 mb-4">
            <div className="relative">
              <input
                type="color"
                value={customHex}
                onChange={(e) => handleCustom(e.target.value)}
                className="h-8 w-8 cursor-pointer rounded-full border-2 border-border bg-transparent p-0 opacity-0 absolute inset-0"
              />
              <div
                className={cn(
                  "h-8 w-8 rounded-full border-2 pointer-events-none transition-all",
                  activeId === "custom" ? "border-foreground scale-110" : "border-border"
                )}
                style={{ backgroundColor: customHex }}
              />
            </div>
            <input
              type="text"
              value={customHex}
              onChange={(e) => {
                const v = e.target.value;
                if (/^#[0-9a-fA-F]{6}$/.test(v)) handleCustom(v);
                else setCustomHex(v);
              }}
              className="flex-1 rounded-md border border-border bg-background px-2 py-1.5 font-mono text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              placeholder="#6366f1"
              maxLength={7}
            />
          </div>

          {/* Reset */}
          {activeId && (
            <button
              onClick={handleReset}
              className="w-full rounded-md border border-border py-1.5 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              Restablecer por defecto
            </button>
          )}
        </div>
      )}
    </div>
  );
}
