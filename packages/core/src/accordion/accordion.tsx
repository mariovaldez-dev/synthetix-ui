import { useState } from "react";

import { cn } from "@chassis-ui/utils";

import type { AccordionProps } from "./accordion.types";

export function Accordion({ items, multiple = false, defaultOpen = [], className }: AccordionProps): React.JSX.Element {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(defaultOpen));

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) { next.delete(id); }
      else { if (!multiple) next.clear(); next.add(id); }
      return next;
    });
  };

  return (
    <div data-slot="accordion" className={cn("divide-y divide-border rounded-lg border border-border", className)}>
      {items.map((item) => {
        const isOpen     = openIds.has(item.id);
        const triggerId  = `accordion-trigger-${item.id}`;
        const panelId    = `accordion-panel-${item.id}`;

        return (
          <div key={item.id} data-slot="accordion-item" data-state={isOpen ? "open" : "closed"}>
            <h3>
              <button
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                disabled={item.disabled}
                onClick={() => toggle(item.id)}
                data-slot="accordion-trigger"
                className={cn(
                  "flex w-full items-center justify-between px-4 py-3.5 text-left text-sm font-medium",
                  "transition-colors duration-150 hover:bg-accent hover:text-accent-foreground",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring",
                  isOpen ? "text-foreground" : "text-foreground",
                  item.disabled && "cursor-not-allowed opacity-50",
                )}
              >
                {item.trigger}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={14}
                  height={14}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className={cn("shrink-0 text-muted-foreground transition-transform duration-200", isOpen && "rotate-180")}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              data-slot="accordion-content"
              className={cn(
                "grid transition-[grid-template-rows] duration-200 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div className="px-4 pb-3.5 pt-0 text-sm text-muted-foreground">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
