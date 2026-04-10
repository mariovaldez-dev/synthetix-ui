import { existsSync } from "fs";
import { readFile, writeFile, mkdir, copyFile } from "fs/promises";
import { join, dirname, basename, resolve, isAbsolute } from "path";
import pc from "picocolors";
import prompts from "prompts";
import fse from "fs-extra";

import { getComponent, listComponents } from "../registry.js";

interface AddOptions {
  /** Directorio destino de los componentes (relativo al cwd) */
  outDir?: string;
  /** Omitir preguntas interactivas */
  yes?: boolean;
}

function resolveMonorepoRoot(): string {
  // dist/index.js está en packages/cli/dist/
  // subimos 3 niveles: dist/ → cli/ → packages/ → monorepo root
  return join(dirname(new URL(import.meta.url).pathname), "..", "..", "..");
}

export async function runAdd(names: string[], options: AddOptions = {}): Promise<void> {
  const outDir = options.outDir ?? "src/components/ui";
  const cwd = process.cwd();

  // Si no se pasaron nombres, mostrar selector interactivo
  let targets = names;
  if (targets.length === 0) {
    const all = listComponents();
    const response = await prompts({
      type: "multiselect",
      name: "components",
      message: "¿Qué componentes quieres agregar?",
      choices: all.map((c) => ({ title: c.name, description: c.description, value: c.name })),
      min: 1,
    });
    if (!response.components?.length) {
      console.log(pc.yellow("No se seleccionó ningún componente."));
      return;
    }
    targets = response.components as string[];
  }

  // Validar que todos existan en el registry
  const invalid = targets.filter((n) => !getComponent(n));
  if (invalid.length > 0) {
    console.error(pc.red(`Componentes no encontrados: ${invalid.join(", ")}`));
    console.log(pc.dim("Usa `chassis-ui list` para ver los disponibles."));
    process.exit(1);
  }

  const destDir = isAbsolute(outDir) ? outDir : resolve(cwd, outDir);

  // Confirmar si el directorio ya existe y no se pasó --yes
  if (!options.yes && existsSync(destDir)) {
    const { ok } = await prompts({
      type: "confirm",
      name: "ok",
      message: `El directorio ${pc.cyan(outDir)} ya existe. ¿Continuar?`,
      initial: true,
    });
    if (!ok) {
      console.log(pc.yellow("Cancelado."));
      return;
    }
  }

  await fse.ensureDir(destDir);

  const monoRoot = resolveMonorepoRoot();
  const allDeps = new Set<string>();

  for (const name of targets) {
    const component = getComponent(name)!;
    console.log(`\n${pc.bold(`→ Agregando ${pc.cyan(name)}...`)}`);

    for (const relPath of component.files) {
      const srcPath = join(monoRoot, relPath);
      const fileName = basename(relPath);
      const destPath = join(destDir, fileName);

      if (!existsSync(srcPath)) {
        console.warn(pc.yellow(`  ⚠ Archivo no encontrado: ${relPath}`));
        continue;
      }

      await copyFile(srcPath, destPath);
      console.log(`  ${pc.green("✓")} ${fileName}`);
    }

    for (const dep of component.dependencies) {
      allDeps.add(dep);
    }
  }

  // Mostrar dependencias a instalar
  if (allDeps.size > 0) {
    const externalDeps = [...allDeps].filter((d) => !d.startsWith("@chassis-ui/"));
    const internalDeps = [...allDeps].filter((d) => d.startsWith("@chassis-ui/"));

    if (externalDeps.length > 0) {
      console.log(`\n${pc.bold("Instala las siguientes dependencias:")}`);
      console.log(`\n  ${pc.cyan("npm install")} ${externalDeps.join(" ")}`);
      console.log(`  ${pc.dim("# o con pnpm/yarn según tu proyecto")}`);
    }

    if (internalDeps.length > 0) {
      console.log(`\n${pc.bold("También necesitas:")}`);
      for (const dep of internalDeps) {
        console.log(`  ${pc.dim(`• ${dep}`)}`);
      }
    }
  }

  console.log(`\n${pc.green("✓")} ${pc.bold(`${targets.length} componente(s) agregado(s) en ${pc.cyan(outDir)}`)}\n`);
}
