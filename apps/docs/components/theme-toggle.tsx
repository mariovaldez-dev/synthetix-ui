"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "chassis-ui-theme";

function getPreferredTheme(): "light" | "dark" {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function updateHtmlClass(theme: "light" | "dark") {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const currentTheme = getPreferredTheme();
    setTheme(currentTheme);
    updateHtmlClass(currentTheme);
  }, []);

  const handleToggle = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    updateHtmlClass(nextTheme);
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors duration-150 hover:bg-muted"
    >
      {theme === "dark" ? "☀️ Claro" : "🌙 Dark"}
    </button>
  );
}
