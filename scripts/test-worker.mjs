import assert from "node:assert/strict";
import worker from "../worker/index.js";

class MockStatement {
  constructor(database, sql) {
    this.database = database;
    this.sql = sql;
    this.values = [];
  }

  bind(...values) {
    this.values = values;
    return this;
  }

  async first() {
    const [value] = this.values;
    const row = this.sql.includes("normalized_term")
      ? this.database.rows.find((item) => item.normalized_term === value)
      : this.database.rows.find((item) => item.slug === value);
    return row ? { concept_json: row.concept_json } : null;
  }

  async run() {
    const [id, slug, term, normalizedTerm, context, sourceUrl, generationMode, conceptJson, createdAt] = this.values;
    if (this.database.rows.some((item) => item.normalized_term === normalizedTerm)) {
      return { meta: { changes: 0 } };
    }
    this.database.rows.push({
      id,
      slug,
      term,
      normalized_term: normalizedTerm,
      context,
      source_url: sourceUrl,
      generation_mode: generationMode,
      concept_json: conceptJson,
      created_at: createdAt,
    });
    return { meta: { changes: 1 } };
  }

  async all() {
    return { results: this.database.rows.map((row) => ({ concept_json: row.concept_json })) };
  }
}

class MockDatabase {
  rows = [];

  prepare(sql) {
    return new MockStatement(this, sql);
  }
}

const database = new MockDatabase();
const env = {
  DB: database,
  ASSETS: { fetch: () => new Response("asset") },
};
const origin = "https://nicekidsg.github.io";

async function register(body) {
  return worker.fetch(new Request("https://example.com/api/concepts", {
    method: "POST",
    headers: { "Content-Type": "application/json", Origin: origin },
    body: JSON.stringify(body),
  }), env);
}

const createdResponse = await register({
  term: "Inference Router",
  context: "在一个智能体系统中，根据任务难度选择不同模型。",
  sourceUrl: "https://example.com/paper",
  website: "",
});
assert.equal(createdResponse.status, 201);
assert.equal(createdResponse.headers.get("Access-Control-Allow-Origin"), origin);
const created = await createdResponse.json();
assert.equal(created.created, true);
assert.equal(created.concept.community.generationMode, "template");
assert.equal(created.concept.community.status, "待核验");
assert.equal(created.concept.points.length, 3);
assert.ok(created.concept.diagram.type);
assert.equal(created.concept.papers.length, 1);

const duplicateResponse = await register({ term: "inference router" });
assert.equal(duplicateResponse.status, 200);
assert.equal((await duplicateResponse.json()).created, false);

const readResponse = await worker.fetch(
  new Request(`https://example.com/api/concepts/${created.concept.key}`, { headers: { Origin: origin } }),
  env,
);
assert.equal(readResponse.status, 200);
assert.equal((await readResponse.json()).concept.key, created.concept.key);

console.log("Worker registration flow passed.");
