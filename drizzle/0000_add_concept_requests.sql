CREATE TABLE `concept_requests` (
	`id` text PRIMARY KEY NOT NULL,
	`slug` text NOT NULL,
	`term` text NOT NULL,
	`normalized_term` text NOT NULL,
	`context` text DEFAULT '' NOT NULL,
	`source_url` text,
	`status` text DEFAULT 'draft' NOT NULL,
	`generation_mode` text DEFAULT 'template' NOT NULL,
	`concept_json` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `concept_requests_slug_idx` ON `concept_requests` (`slug`);
--> statement-breakpoint
CREATE UNIQUE INDEX `concept_requests_normalized_term_idx` ON `concept_requests` (`normalized_term`);
--> statement-breakpoint
CREATE INDEX `concept_requests_status_created_idx` ON `concept_requests` (`status`,`created_at`);
