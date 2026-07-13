import { chromium } from "/Users/lyxu/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/.pnpm/playwright@1.61.1/node_modules/playwright/index.mjs";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const baseUrl = process.env.QA_URL ?? "http://172.31.41.27:4173/";
const outputDir = new URL("../qa/", import.meta.url);
const desktopShot = fileURLToPath(new URL("implementation-desktop.png", outputDir));
const mobileShot = fileURLToPath(new URL("implementation-mobile.png", outputDir));

await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});

const desktop = await browser.newPage({ viewport: { width: 1440, height: 1024 } });
const consoleErrors = [];
desktop.on("console", (message) => {
  if (message.type() === "error") consoleErrors.push(message.text());
});
await desktop.goto(baseUrl, { waitUntil: "networkidle" });
await desktop.screenshot({ path: desktopShot, fullPage: true });

await desktop.getByLabel("输入一个 AI 概念").fill("harness");
await desktop.getByRole("button", { name: "搜索" }).click();
await desktop.getByRole("heading", { name: "智能体运行框架" }).waitFor();
await desktop.getByRole("combobox", { name: "按年份" }).selectOption("2024");
const visiblePapers = await desktop.locator(".paper-row").count();
if (visiblePapers !== 2) throw new Error(`Expected 2 filtered papers, found ${visiblePapers}`);

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mobile.goto(baseUrl, { waitUntil: "networkidle" });
const overflow = await mobile.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
if (overflow) throw new Error("Mobile layout has horizontal overflow");
await mobile.screenshot({ path: mobileShot, fullPage: true });

await browser.close();

console.log(JSON.stringify({ baseUrl, visiblePapers, mobileOverflow: overflow, consoleErrors }, null, 2));
