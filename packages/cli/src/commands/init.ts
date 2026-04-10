import { existsSync } from "fs";
import { writeFile, readFile } from "fs/promises";
import { join } from "path";
import pc from "picocolors";
import prompts from "prompts";
import fse from "fs-extra";

interface InitOptions {
  yes?: boolean;
}

interface ChassisConfig {
  outDir: string;
  tailwind: boolean;
}

export async function runInit(options: InitOptions = {}): Promise<void> {
  const cwd = process.cwd();
  const configPath = join(cwd, "chassis-ui.json");

  if (!options.yes && existsSync(configPath)) {
    const { ok } = await prompts({
      type: "confirm",
      name: "ok",
      message: `${pc.yellow("chassis-ui.json")} ya existe. ¿Sobreescribir?`,
      initial: false,
    });
    if (!ok) {
      console.log(pc.yellow("Cancelado."));
      return;
    }
  }

  let config: ChassisConfig = { outDir: "src/components/ui", tailwind: true };

  if (!options.yes) {
    const answers = await prompts([
      {
        type: "text",
        name: "outDir",
        message: "¿Dónde copiar los componentes?",
        initial: "src/components/ui",
      },
      {
        type: "confirm",
        name: "tailwind",
        message: "¿Usas Tailwind CSS?",
        initial: true,
      },
    ]);
    config = answers as ChassisConfig;
  }

  await writeFile(configPath, JSON.stringify(config, null, 2) + "\n");
  console.log(`\n${pc.green("✓")} ${pc.bold("chassis-ui.json")} creado.\n`);

  // Crear el directorio de componentes si no existe
  const destDir = join(cwd, config.outDir);
  await fse.ensureDir(destDir);

  if (config.tailwind) {
    console.log(`${pc.bold("Siguiente paso:")} agrega el preset en tu tailwind.config.ts:\n`);
    console.log(pc.dim(`  import chassisPreset from "@synthetix-ui/tailwind-preset";
  export default {
    presets: [chassisPreset],
    content: ["./src/**/*.{ts,tsx}"],
  };\n`));
  }
}
