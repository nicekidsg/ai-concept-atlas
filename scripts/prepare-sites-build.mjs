import { copyFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const projectRoot = new URL("../", import.meta.url);
const serverDir = new URL("dist/server/", projectRoot);

await mkdir(serverDir, { recursive: true });
await copyFile(
  fileURLToPath(new URL("worker/index.js", projectRoot)),
  fileURLToPath(new URL("index.js", serverDir)),
);
