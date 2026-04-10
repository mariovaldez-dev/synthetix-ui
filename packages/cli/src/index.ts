import pc from "picocolors";

import { runAdd } from "./commands/add.js";
import { runList } from "./commands/list.js";
import { runInit } from "./commands/init.js";

const VERSION = "0.0.0";

function printHelp(): void {
  console.log(`
${pc.bold("@synthetix-ui/cli")} v${VERSION}

${pc.bold("Uso:")}
  npx @synthetix-ui <comando> [opciones]

${pc.bold("Comandos:")}
  ${pc.cyan("add")} [componentes...]   Copia componentes a tu proyecto
  ${pc.cyan("list")}                   Lista todos los componentes disponibles
  ${pc.cyan("init")}                   Inicializa chassis-ui.json en tu proyecto

${pc.bold("Opciones:")}
  ${pc.cyan("-o, --out-dir")} <dir>    Directorio destino (default: src/components/ui)
  ${pc.cyan("-y, --yes")}              Omitir confirmaciones
  ${pc.cyan("-v, --version")}          Muestra la versión
  ${pc.cyan("-h, --help")}             Muestra esta ayuda

${pc.bold("Ejemplos:")}
  ${pc.dim("npx @synthetix-ui add button")}
  ${pc.dim("npx @synthetix-ui add button input card --out-dir src/ui")}
  ${pc.dim("npx @synthetix-ui list")}
  ${pc.dim("npx @synthetix-ui init")}
`);
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const command = args[0];

  if (!command || command === "--help" || command === "-h") {
    printHelp();
    return;
  }

  if (command === "--version" || command === "-v") {
    console.log(VERSION);
    return;
  }

  // Parsear flags comunes
  const yes = args.includes("--yes") || args.includes("-y");
  const outDirIdx = args.findIndex((a) => a === "--out-dir" || a === "-o");
  const outDir = outDirIdx !== -1 ? args[outDirIdx + 1] : undefined;

  if (command === "list") {
    runList();
    return;
  }

  if (command === "init") {
    await runInit({ yes });
    return;
  }

  if (command === "add") {
    // Los componentes son los args que no son flags
    const names = args
      .slice(1)
      .filter((a) => !a.startsWith("-") && a !== outDir);
    await runAdd(names, { outDir, yes });
    return;
  }

  console.error(pc.red(`Comando desconocido: ${command}`));
  printHelp();
  process.exit(1);
}

main().catch((err: unknown) => {
  console.error(pc.red("Error inesperado:"), err);
  process.exit(1);
});
