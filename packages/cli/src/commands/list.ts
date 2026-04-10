import pc from "picocolors";

import { listComponents } from "../registry.js";

export function runList(): void {
  const components = listComponents();
  console.log(`\n${pc.bold("Componentes disponibles:")}\n`);
  for (const c of components) {
    console.log(`  ${pc.cyan(c.name.padEnd(14))} ${pc.dim(c.description)}`);
  }
  console.log(`\n${pc.dim(`Total: ${components.length} componentes`)}\n`);
}
