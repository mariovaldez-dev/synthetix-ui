export interface AccordionItem {
  id: string;
  trigger: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionProps {
  items: AccordionItem[];
  /** Permite tener múltiples items abiertos a la vez */
  multiple?: boolean;
  /** IDs abiertos por defecto */
  defaultOpen?: string[];
  className?: string;
}
