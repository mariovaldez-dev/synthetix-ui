import { cn } from "@chassis-ui/utils";
import { codeToHtml } from "shiki";
import { CopyButton } from "./copy-button";

interface ComponentPreviewProps {
  children: React.ReactNode;
  className?: string;
  /** Código a mostrar en la pestaña de código */
  code?: string;
}

export async function ComponentPreview({ children, className, code }: ComponentPreviewProps) {
  let highlightedHtml: string | null = null;

  if (code) {
    highlightedHtml = await codeToHtml(code, {
      lang: "tsx",
      themes: {
        light: "github-light",
        dark: "github-dark-dimmed",
      },
      defaultColor: false,
    });
  }

  return (
    <div className="not-prose my-6 overflow-hidden rounded-xl border border-border">
      {/* Preview */}
      <div className={cn("flex min-h-32 items-center justify-center bg-background p-8", className)}>
        {children}
      </div>

      {/* Code block */}
      {highlightedHtml && (
        <div className="border-t border-border bg-muted">
          <div className="flex items-center justify-between border-b border-border px-4 py-2">
            <span className="text-xs font-medium text-muted-foreground">tsx</span>
            <CopyButton code={code!} />
          </div>
          <div
            className="bg-muted [&>pre]:m-0 [&>pre]:overflow-x-auto [&>pre]:px-5 [&>pre]:py-4 [&>pre]:text-[13px] [&>pre]:leading-6"
            dangerouslySetInnerHTML={{ __html: highlightedHtml }}
          />
        </div>
      )}
    </div>
  );
}

interface PropsTableProps {
  props: Array<{
    name: string;
    type: string;
    default?: string;
    description: string;
    required?: boolean;
  }>;
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="not-prose my-6 overflow-hidden rounded-xl border border-border">
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b border-border bg-muted">
            <th className="px-4 py-2.5 text-left font-semibold text-foreground">Prop</th>
            <th className="px-4 py-2.5 text-left font-semibold text-foreground">Tipo</th>
            <th className="px-4 py-2.5 text-left font-semibold text-foreground">Default</th>
            <th className="px-4 py-2.5 text-left font-semibold text-foreground">Descripción</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {props.map((p) => (
            <tr key={p.name} className="bg-background">
              <td className="px-4 py-2.5 font-mono text-primary">
                {p.name}
                {p.required && <span className="ml-1 text-destructive">*</span>}
              </td>
              <td className="px-4 py-2.5 font-mono text-muted-foreground">{p.type}</td>
              <td className="px-4 py-2.5 font-mono text-muted-foreground">{p.default ?? "—"}</td>
              <td className="px-4 py-2.5 text-muted-foreground">{p.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
