# CLAUDE.md — synthetix-ui

Archivo de contexto para Claude Code. Léelo antes de tocar cualquier archivo del proyecto.

---

## ¿Qué es este proyecto?

`synthetix-ui` es una librería de componentes UI estilo **shadcn/ui**: los componentes no se instalan como dependencia, se copian directamente al proyecto del consumidor via CLI. Adicionalmente se publican como paquetes npm para consumo directo.

**Scope npm:** `@synthetix-ui`

---

## Arquitectura del monorepo

```
synthetix-ui/
├── apps/
│   ├── docs/          # Sitio de documentación (Next.js)
│   ├── storybook/     # Stories de componentes
│   └── playground/    # Sandbox de pruebas (Vite)
├── packages/          # Núcleo de la librería
│   ├── core/          # Componentes base (Button, Input, Card, Dialog...)
│   ├── tokens/        # Design tokens (colores, tipografía, espaciado)
│   ├── utils/         # cn(), merge, helpers
│   ├── hooks/         # useMediaQuery, useFocus, etc.
│   ├── icons/         # SVGs optimizados con SVGR
│   ├── cli/           # CLI: npx @synthetix-ui add <component>
│   └── tailwind-preset/ # Plugin + theme extension para Tailwind
└── tooling/           # Configuraciones compartidas
    ├── tsconfig/      # base.json, react.json, node.json
    ├── eslint-config/ # base.ts, react.ts (ESLint flat config v9)
    └── prettier-config/ # index.ts con prettier-plugin-tailwindcss
```

---

## Stack tecnológico

| Herramienta | Uso |
|---|---|
| **pnpm** | Package manager |
| **Turborepo** | Orquestación del monorepo |
| **TypeScript** | Lenguaje principal (strict mode) |
| **React** | Framework de componentes |
| **Tailwind CSS** | Estilos utilitarios |
| **CVA** | `class-variance-authority` — variantes de componentes |
| **tsup** | Bundler (ESM + CJS + tipos) |
| **ESLint v9** | Flat config, parser TypeScript |
| **Prettier** | Formato, con `prettier-plugin-tailwindcss` |
| **Vitest** | Testing unitario |
| **Storybook** | Documentación visual |
| **Changesets** | Versionado y publicación |

---

## Reglas de código

### TypeScript
- Siempre usar **strict mode**.
- Nunca usar `any`. Preferir `unknown` y narrowing explícito.
- Usar `type` para importaciones de tipos: `import type { ... }`.
- Los `tsconfig` siempre son `.json` — nunca `.ts`.

### Archivos de configuración
- ESLint: `.ts` con flat config (ESLint v9).
- Prettier: `.ts` exportando un `Config` tipado.
- tsconfig: siempre `.json`.

### Componentes
- Variantes con **CVA** (`cva`, `VariantProps`).
- Props tipadas con `interface`, no `type` para props de componentes.
- Siempre exportar el tipo de props: `export type ButtonProps = ...`
- Accesibilidad obligatoria: `aria-*`, roles semánticos, navegación por teclado.
- No usar `React.FC`. Preferir funciones normales con tipo de retorno explícito.

```ts
// ✅ Correcto
export function Button({ variant, size, ...props }: ButtonProps) {
  return <button {...props} />;
}

// ❌ Incorrecto
const Button: React.FC<ButtonProps> = ({ variant }) => ...
```

### Estilos
- Solo clases de Tailwind, nunca CSS inline ni módulos CSS.
- Siempre usar `cn()` de `@synthetix-ui/utils` para combinar clases condicionalmente.
- Las clases de variantes van en CVA, no en condicionales manuales.

### Estructura de un componente en `packages/core`

```
src/
└── button/
    ├── button.tsx        # Implementación
    ├── button.types.ts   # Tipos / interfaces
    ├── button.test.tsx   # Tests con Vitest
    ├── button.stories.tsx # Story de Storybook
    └── index.ts          # Re-exportación pública
```

---

## Comandos frecuentes

```bash
# Instalar todas las dependencias
pnpm install

# Build de todos los paquetes
pnpm build

# Dev mode (watch)
pnpm dev

# Tests
pnpm test

# Lint
pnpm lint

# Ejecutar solo en un paquete
pnpm --filter @synthetix-ui/core build
pnpm --filter @synthetix-ui/core dev
```

---

## Convenciones de nombres

| Tipo | Convención | Ejemplo |
|---|---|---|
| Paquetes npm | kebab-case con scope | `@synthetix-ui/core` |
| Componentes | PascalCase | `Button`, `InputField` |
| Archivos de componente | kebab-case | `button.tsx` |
| Hooks | camelCase con `use` | `useMediaQuery` |
| Tipos / interfaces | PascalCase con sufijo | `ButtonProps`, `ButtonVariants` |
| Constantes | UPPER_SNAKE_CASE | `DEFAULT_VARIANT` |

---

## Distribución dual

Los componentes se distribuyen de dos formas:

1. **npm publish** — paquete instalable (`@synthetix-ui/core`) con salida ESM + CJS via `tsup`.
2. **copy-paste via CLI** — `npx @synthetix-ui add button` copia el componente directamente al proyecto usando un `registry.json`.

---

## Lo que NO hacer

- No publicar paquetes de `tooling/` (`@synthetix-ui/tsconfig`, etc.) — son `private: true`.
- No importar desde `packages/core` dentro de `tooling/`.
- No mezclar estilos CSS-in-JS con Tailwind.
- No agregar dependencias a la raíz del monorepo salvo tooling compartido.
- No usar `default export` en componentes — siempre named exports.
