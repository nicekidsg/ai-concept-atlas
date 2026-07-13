import { copyFile, cp, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const projectRoot = new URL("../", import.meta.url);
const serverDir = new URL("dist/server/", projectRoot);

await mkdir(serverDir, { recursive: true });
await copyFile(
  fileURLToPath(new URL("worker/index.js", projectRoot)),
  fileURLToPath(new URL("index.js", serverDir)),
);

const metadataDir = new URL("dist/.openai/", projectRoot);
await mkdir(metadataDir, { recursive: true });
await copyFile(
  fileURLToPath(new URL(".openai/hosting.json", projectRoot)),
  fileURLToPath(new URL("hosting.json", metadataDir)),
);

try {
  await cp(
    fileURLToPath(new URL("drizzle/", projectRoot)),
    fileURLToPath(new URL("drizzle/", metadataDir)),
    { recursive: true },
  );
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}
