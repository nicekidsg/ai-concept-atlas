# Design QA

- Source visual truth: `/Users/lyxu/.codex/generated_images/019f597d-3447-7450-b6bd-d8e8733fd2f8/exec-e370072e-cb2f-46fa-90c2-584f138044c7.png`
- Implementation: `http://127.0.0.1:4173/` (local preview)
- Implementation screenshot: `/Users/lyxu/Documents/New project/ai-concept-atlas/qa/implementation-desktop.png`
- Mobile screenshot: `/Users/lyxu/Documents/New project/ai-concept-atlas/qa/implementation-mobile.png`
- Side-by-side comparison: `/Users/lyxu/Documents/New project/ai-concept-atlas/qa/comparison-desktop-final.jpg`
- Intended viewport: 1440 x 1024
- State: Agent Loop default result, 170-concept bilingual catalog, six semantic diagram families, with papers and open-source cases visible below

## Full-view comparison evidence

The source mock and Playwright-rendered implementation were placed in one 2880 x 1024 side-by-side comparison image at the same 1440 x 1024 crop. The implementation preserves the warm paper surface, ink-black editorial type, electric-blue accents, large search bar, two-column concept explanation, mechanism nodes, paper bibliography, GitHub case evidence, and related-concept footer.

The implementation intentionally extends below the initial viewport because the user requested richer paper and case evidence. The visual hierarchy remains consistent at the fold. The right mechanism panel now uses a user-directed semantic-diagram system instead of repeating the source mock's circular loop for every term; the default Loop state still uses the circular composition.

## Focused region comparison evidence

Desktop and 390 px mobile screenshots were opened directly. Focused diagram captures were reviewed for Loop (cycle), Agent and MCP (hub), Token and RAG (pipeline), Skill (layers), Test-time Compute (branch), and Guardrail (gate). These states preserve the same type, color, icon family, border weight, and paper surface while presenting different concept-specific relationships. The mobile view stacks pipeline nodes vertically and keeps hub, branch, gate, layer, and cycle structures readable without horizontal overflow or clipped controls.

## Functional checks completed

- Production build completed successfully.
- Search for `harness` switched the result to `智能体运行框架`.
- Search for `agent` switched the result to `智能体`.
- Chinese search for `词元` switched the result to `词元`.
- Search for `skill` switched the result to `智能体技能`.
- Ten representative concepts were checked against their intended diagram type: Loop, Agent, Token, Skill, MCP, RAG, RLHF, MoE, Test-time Compute, and Guardrail.
- All 170 concepts produced a valid four-node diagram; distribution: 29 cycles, 50 pipelines, 15 branches, 21 hubs, 24 layer diagrams, and 31 gates.
- The 2024 paper filter reduced the Harness paper list to two matching papers.
- The expandable directory exposed 169 alternate links plus the active result, confirming all 170 concepts are present.
- No console errors appeared in the final Playwright pass.
- All paper and project rows expose direct external links in the rendered DOM.
- The 390 x 844 responsive test reported no horizontal overflow.

## Findings

No actionable P0/P1/P2 differences remain. Typography, spacing, colors, icon family, content hierarchy, diagram semantics, mobile behavior, and core interaction states were checked against the selected mock and the user's diagram-specific correction.

## Follow-up polish

- [P3] The source mock uses a continuous circular connector around the four Loop nodes; the implementation uses a cleaner four-node orbit with a standard arrows icon at the center. This keeps the diagram accessible and avoids substituting a custom drawn asset.
- [P3] High-frequency concepts have bespoke node logic; long-tail concepts use category-aware semantic templates. A future editorial pass could hand-tune additional niche terms as usage data identifies them.
- [P3] The richer evidence requested by the user makes the full page slightly taller than the original mock; scrolling is expected and does not hide controls.

## Comparison history

- Initial render: blocked by duplicate React dependencies; fixed by deduplicating React in Vite and re-optimizing dependencies.
- First visual pass: horizontal mechanism layout drifted from the circular source and evidence rows were too tall.
- Fixes: changed the mechanism to a four-node orbit, moved the loop symbol to the center, reduced header and evidence spacing, and suppressed the favicon 404.
- Final visual pass: desktop and mobile screenshots inspected; side-by-side comparison completed; build, interactions, overflow, and console checks passed.
- Semantic-diagram pass: replaced the repeated orbit with six diagram families, added bespoke blueprints for core concepts, corrected the branch panel spacing, and recaptured desktop, focused, and mobile evidence. Post-fix checks passed with no overflow or console errors.

## Implementation checklist

- [x] Match the warm paper, black type, and electric-blue direction.
- [x] Preserve the large top search interaction.
- [x] Support English terms, Chinese equivalents, common aliases, and search suggestions across 170 concepts.
- [x] Keep the full catalog discoverable in a collapsed directory without crowding the main screen.
- [x] Add concise concept copy and mechanism flow.
- [x] Match each concept to an appropriate cycle, pipeline, branch, hub, layers, or gate diagram.
- [x] Add bespoke diagrams for high-frequency concepts including Agent, Token, Skill, MCP, RAG, RLHF, MoE, Guardrail, and Test-time Compute.
- [x] Add direct paper links and year filtering.
- [x] Add case popularity signals, timestamps, statuses, and source links.
- [x] Verify core interactions and production build.
- [x] Capture browser-rendered visual evidence and complete side-by-side comparison.

final result: passed
