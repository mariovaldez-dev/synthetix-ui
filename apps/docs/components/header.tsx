import Link from "next/link";
import { SearchIcon } from "@chassis-ui/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { ThemePicker } from "@/components/theme-picker";

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b border-border bg-background/90 px-8 backdrop-blur-sm">
      <div className="flex items-center gap-2 rounded-md border border-border bg-muted px-3 py-1.5 text-sm text-muted-foreground w-56">
        <SearchIcon size={14} />
        <span>Buscar...</span>
        <kbd className="ml-auto rounded border border-border bg-background px-1.5 py-0.5 text-xs text-muted-foreground">
          ⌘K
        </kbd>
      </div>

      <div className="flex items-center gap-4">
        <ThemePicker />
        <ThemeToggle />
        <Link
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          GitHub
        </Link>
        <Link
          href="/docs/button"
          className="rounded-md bg-muted px-3 py-1.5 text-xs font-medium text-foreground hover:bg-accent transition-colors"
        >
          Componentes →
        </Link>
      </div>
    </header>
  );
}
