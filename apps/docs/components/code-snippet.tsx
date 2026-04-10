import { codeToHtml } from "shiki";
import { CopyButton } from "./copy-button";

interface CodeSnippetProps {
  code: string;
  label?: string;
  lang?: string;
}

function detectLang(code: string): string {
  const trimmed = code.trimStart();
  if (/^(npm|npx|pnpm|yarn|bun)\s/.test(trimmed)) return "bash";
  if (/^(import|export|const|function|type|interface|<)/.test(trimmed)) return "tsx";
  return "bash";
}

export async function CodeSnippet({ code, label, lang }: CodeSnippetProps) {
  const language = lang ?? detectLang(code);

  const html = await codeToHtml(code, {
    lang: language,
    themes: {
      light: "github-light",
      dark: "github-dark-dimmed",
    },
    defaultColor: false,
  });

  return (
    <div className="not-prose my-6 overflow-hidden rounded-xl border border-border">
      <div className="flex items-center justify-between border-b border-border bg-muted px-4 py-2.5">
        {label ? (
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {label}
          </span>
        ) : (
          <span className="text-xs font-medium text-muted-foreground">{language}</span>
        )}
        <CopyButton code={code} />
      </div>
      <div
        className="bg-muted [&>pre]:m-0 [&>pre]:overflow-x-auto [&>pre]:px-5 [&>pre]:py-4 [&>pre]:text-[13px] [&>pre]:leading-6"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
