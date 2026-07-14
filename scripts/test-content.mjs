import { glossaryEntries } from "../src/glossary.js";
import {
  buildExplanationPoints,
  buildWhyItMatters,
  getConceptResearch,
  researchPapers,
  sourceCatalogSize,
  staticConceptKeys,
} from "../src/conceptResearch.js";

const coreKeys = [
  "loop", "harness", "scaffolding", "verifier", "test-time compute", "skill", "mcp", "subagent",
  "planner-executor", "guardrail", "memory", "tool-use", "multi-agent", "computer-use", "context-engineering",
];
const expectedKeys = [...coreKeys, ...glossaryEntries.map((entry) => entry.key)];
const boundKeys = new Set(staticConceptKeys);

if (expectedKeys.length !== 255) throw new Error(`Expected 255 static concepts, found ${expectedKeys.length}`);
if (boundKeys.size !== expectedKeys.length) throw new Error(`Expected ${expectedKeys.length} research bindings, found ${boundKeys.size}`);

for (const key of expectedKeys) {
  if (!boundKeys.has(key)) throw new Error(`Missing research binding for ${key}`);
  const research = getConceptResearch(key);
  if (!research.verified) throw new Error(`Static concept ${key} is not source-verified`);

  for (const [role, source] of [["origin", research.origin], ["authority", research.authority]]) {
    if (!source.title || !source.author || !source.year || !source.note || !source.url) {
      throw new Error(`${key} has incomplete ${role} source metadata`);
    }
  }

  const papers = researchPapers(research);
  if (papers.length < 1 || papers.length > 2) throw new Error(`${key} should expose one or two primary source cards`);
}

const labelSets = new Set();
for (const entry of glossaryEntries) {
  const research = getConceptResearch(entry.key, entry.category);
  const points = buildExplanationPoints(entry, research);
  if (points.length !== 3) throw new Error(`${entry.key} should have three tailored explanation points`);
  labelSets.add(points.map(([label]) => label).join("|"));

  const why = buildWhyItMatters(entry, research);
  if (!why.includes(entry.use)) throw new Error(`${entry.key} lost its concept-specific use context`);
}

if (labelSets.size < 8) throw new Error(`Expected all eight explanation modes, found ${labelSets.size}`);
if (sourceCatalogSize() < 90) throw new Error(`Expected a broad primary-source catalog, found ${sourceCatalogSize()}`);

console.log(JSON.stringify({
  concepts: expectedKeys.length,
  verifiedBindings: boundKeys.size,
  authoritativeSources: sourceCatalogSize(),
  explanationModes: labelSets.size,
}, null, 2));
