import { createRequire } from "module";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export interface ComponentEntry {
  name: string;
  description: string;
  dependencies: string[];
  files: string[];
}

export interface Registry {
  version: string;
  components: Record<string, ComponentEntry>;
}

let _registry: Registry | null = null;

export function getRegistry(): Registry {
  if (_registry) return _registry;
  const require = createRequire(import.meta.url);
  _registry = require(join(__dirname, "../registry.json")) as Registry;
  return _registry;
}

export function getComponent(name: string): ComponentEntry | undefined {
  return getRegistry().components[name];
}

export function listComponents(): ComponentEntry[] {
  return Object.values(getRegistry().components);
}
