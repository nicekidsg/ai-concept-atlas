import { chromium } from "/Users/lyxu/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/.pnpm/playwright@1.61.1/node_modules/playwright/index.mjs";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const baseUrl = process.env.QA_URL ?? "http://127.0.0.1:4173/";
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

const diagramChecks = [
  ["loop", "智能体循环", "cycle"],
  ["agent", "智能体", "hub"],
  ["词元", "词元", "pipeline"],
  ["skill", "智能体技能", "layers"],
  ["MCP", "模型上下文协议", "hub"],
  ["RAG", "检索增强生成", "pipeline"],
  ["RLHF", "人类反馈强化学习", "pipeline"],
  ["MoE", "专家混合模型", "hub"],
  ["test-time compute", "推理时计算", "branch"],
  ["guardrail", "智能体护栏", "gate"],
];

for (const [query, heading, type] of diagramChecks) {
  await desktop.getByLabel("输入一个 AI 概念").fill(query);
  await desktop.getByRole("button", { name: "搜索" }).click();
  await desktop.getByRole("heading", { name: heading }).waitFor();
  const diagram = desktop.locator(`.mechanism-${type}`);
  await diagram.waitFor();
  await desktop.mouse.move(0, 0);
  const diagramBox = await diagram.boundingBox();
  await desktop.screenshot({
    path: fileURLToPath(new URL(`diagram-${query.toLowerCase().replaceAll(" ", "-")}.png`, outputDir)),
    clip: diagramBox,
  });
}

await desktop.getByLabel("输入一个 AI 概念").fill("harness");
await desktop.getByRole("button", { name: "搜索" }).click();
await desktop.getByRole("heading", { name: "智能体运行框架" }).waitFor();
await desktop.getByRole("combobox", { name: "按年份" }).selectOption("2024");
const visiblePapers = await desktop.locator(".paper-row").count();
if (visiblePapers !== 2) throw new Error(`Expected 2 filtered papers, found ${visiblePapers}`);

await desktop.getByText("浏览全部中英文概念").click();
const directoryConcepts = await desktop.locator(".directory-list button").count();
if (directoryConcepts !== 254) throw new Error(`Expected 254 directory links, found ${directoryConcepts}`);

const glossarySourceLinks = await desktop.locator(".glossary-sources a").count();
if (glossarySourceLinks !== 4) throw new Error(`Expected 4 glossary source links, found ${glossarySourceLinks}`);

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mobile.goto(baseUrl, { waitUntil: "networkidle" });
let overflow = false;
for (const [query, heading] of diagramChecks.slice(0, 6)) {
  await mobile.getByLabel("输入一个 AI 概念").fill(query);
  await mobile.getByRole("button", { name: "搜索" }).click();
  await mobile.getByRole("heading", { name: heading }).waitFor();
  overflow ||= await mobile.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
}
if (overflow) throw new Error("A mobile diagram has horizontal overflow");
await mobile.screenshot({ path: mobileShot, fullPage: true });

await browser.close();

console.log(JSON.stringify({ baseUrl, diagramChecks: diagramChecks.length, visiblePapers, directoryConcepts, glossarySourceLinks, mobileOverflow: overflow, consoleErrors }, null, 2));
