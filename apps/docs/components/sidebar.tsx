"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@synthetix-ui/utils";

const NAV = [
  {
    group: "Comenzar",
    items: [
      { href: "/", label: "Introducción" },
      { href: "/docs/installation", label: "Instalación" },
      { href: "/docs/theming", label: "Theming" },
    ],
  },
  {
    group: "General",
    items: [
      { href: "/docs/button", label: "Button" },
      { href: "/docs/badge", label: "Badge" },
      { href: "/docs/spinner", label: "Spinner" },
    ],
  },
  {
    group: "Form",
    items: [
      { href: "/docs/input", label: "Input" },
      { href: "/docs/textarea", label: "Textarea" },
      { href: "/docs/select", label: "Select" },
      { href: "/docs/checkbox", label: "Checkbox" },
      { href: "/docs/switch", label: "Switch" },
      { href: "/docs/form", label: "Form" },
      { href: "/docs/radio-group", label: "Radio Group" },
      { href: "/docs/slider", label: "Slider" },
      { href: "/docs/toggle", label: "Toggle" },
      { href: "/docs/toggle-group", label: "Toggle Group" },
      { href: "/docs/input-otp", label: "Input OTP" },
      { href: "/docs/label", label: "Label" },
      { href: "/docs/date-picker", label: "Date Picker" },
      { href: "/docs/calendar", label: "Calendar" },
    ],
  },
  {
    group: "Data Display",
    items: [
      { href: "/docs/card", label: "Card" },
      { href: "/docs/table", label: "Table" },
      { href: "/docs/avatar", label: "Avatar" },
      { href: "/docs/accordion", label: "Accordion" },
      { href: "/docs/aspect-ratio", label: "Aspect Ratio" },
      { href: "/docs/carousel", label: "Carousel" },
      { href: "/docs/chart", label: "Chart" },
      { href: "/docs/skeleton", label: "Skeleton" },
    ],
  },
  {
    group: "Navigation",
    items: [
      { href: "/docs/breadcrumb", label: "Breadcrumb" },
      { href: "/docs/pagination", label: "Pagination" },
      { href: "/docs/menubar", label: "Menubar" },
      { href: "/docs/navigation-menu", label: "Navigation Menu" },
      { href: "/docs/tabs", label: "Tabs" },
      { href: "/docs/sidebar", label: "Sidebar" },
    ],
  },
  {
    group: "Feedback",
    items: [
      { href: "/docs/alert", label: "Alert" },
      { href: "/docs/alert-dialog", label: "Alert Dialog" },
      { href: "/docs/dialog", label: "Dialog" },
      { href: "/docs/drawer", label: "Drawer" },
      { href: "/docs/progress", label: "Progress" },
      { href: "/docs/sonner", label: "Sonner" },
      { href: "/docs/toast", label: "Toast" },
      { href: "/docs/tooltip", label: "Tooltip" },
    ],
  },
  {
    group: "Overlay",
    items: [
      { href: "/docs/command", label: "Command" },
      { href: "/docs/context-menu", label: "Context Menu" },
      { href: "/docs/dropdown-menu", label: "Dropdown Menu" },
      { href: "/docs/hover-card", label: "Hover Card" },
      { href: "/docs/popover", label: "Popover" },
      { href: "/docs/sheet", label: "Sheet" },
    ],
  },
  {
    group: "Utilities",
    items: [
      { href: "/docs/resizable", label: "Resizable" },
      { href: "/docs/scroll-area", label: "Scroll Area" },
      { href: "/docs/separator", label: "Separator" },
      { href: "/docs/collapsible", label: "Collapsible" },
    ],
  },
  {
    group: "Hooks",
    items: [
      { href: "/docs/use-media-query", label: "useMediaQuery" },
      { href: "/docs/use-disclosure", label: "useDisclosure" },
      { href: "/docs/use-focus-trap", label: "useFocusTrap" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 h-screen w-[260px] shrink-0 overflow-y-auto border-r border-border bg-muted/50 px-4 py-6">
      <Link href="/" className="mb-6 flex items-center gap-2 px-2">
        <span className="text-base font-bold text-foreground">Synthetix UI</span>
        <span className="rounded-full bg-success px-1.5 py-0.5 text-[10px] font-medium text-primary">
          beta
        </span>
      </Link>

      <nav className="space-y-6 pb-12">
        {NAV.map((section) => (
          <div key={section.group}>
            <p className="mb-1.5 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {section.group}
            </p>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-md px-2 py-1.5 text-sm transition-colors",
                        isActive
                          ? "dark:bg-primary bg-foreground/10 font-medium text-foreground"
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
