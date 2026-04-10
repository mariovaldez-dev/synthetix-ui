import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: { template: "%s — chassis-ui", default: "chassis-ui" },
  description: "Librería de componentes UI para React con Tailwind CSS",
};

const setInitialTheme = `(function() {
  try {
    const storedTheme = localStorage.getItem('chassis-ui-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = storedTheme === 'dark' || (!storedTheme && prefersDark) ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', theme === 'dark');
  } catch (error) {
    // Ignore
  }
})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="flex min-h-screen">
        <Script id="init-theme" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        <Providers>
          <Sidebar />
          <div className="flex flex-1 flex-col">
            <Header />
            <main className="flex-1 px-8 py-10 max-w-3xl mx-auto">
              <div className="prose">{children}</div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
