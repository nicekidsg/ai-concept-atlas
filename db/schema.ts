import { sql } from "drizzle-orm";
import { index, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

export const conceptRequests = sqliteTable(
  "concept_requests",
  {
    id: text("id").primaryKey(),
    slug: text("slug").notNull(),
    term: text("term").notNull(),
    normalizedTerm: text("normalized_term").notNull(),
    context: text("context").notNull().default(""),
    sourceUrl: text("source_url"),
    status: text("status").notNull().default("draft"),
    generationMode: text("generation_mode").notNull().default("template"),
    conceptJson: text("concept_json").notNull(),
    createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
    updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => [
    uniqueIndex("concept_requests_slug_idx").on(table.slug),
    uniqueIndex("concept_requests_normalized_term_idx").on(table.normalizedTerm),
    index("concept_requests_status_created_idx").on(table.status, table.createdAt),
  ],
);
