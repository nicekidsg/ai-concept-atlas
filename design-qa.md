# Design QA

- Source visual truth: `/Users/lyxu/.codex/generated_images/019f597d-3447-7450-b6bd-d8e8733fd2f8/exec-e370072e-cb2f-46fa-90c2-584f138044c7.png`
- Implementation: `http://172.31.41.27:4173/` (local preview)
- Implementation screenshot: `/Users/lyxu/Documents/New project/ai-concept-atlas/qa/implementation-desktop.png`
- Mobile screenshot: `/Users/lyxu/Documents/New project/ai-concept-atlas/qa/implementation-mobile.png`
- Side-by-side comparison: `/Users/lyxu/Documents/New project/ai-concept-atlas/qa/comparison-desktop-final.jpg`
- Intended viewport: 1440 x 1024
- State: Agent Loop default result, with papers and open-source cases visible below

## Full-view comparison evidence

The source mock and Playwright-rendered implementation were placed in one 2880 x 1070 side-by-side comparison image at the same 1440 x 1024 crop. The implementation preserves the warm paper surface, ink-black editorial type, electric-blue accents, large search bar, two-column concept explanation, mechanism nodes, paper bibliography, GitHub case evidence, and related-concept footer.

The implementation intentionally extends below the initial viewport because the user requested richer paper and case evidence. The visual hierarchy remains consistent at the fold, with the evidence area starting in the same place as the revised mock.

## Focused region comparison evidence

Desktop and 390 px mobile screenshots were opened directly. The focused evidence review confirms three paper links with year and reading value, plus LangGraph, AutoGen, and CrewAI rows with GitHub Stars, update date, maintenance status, and source links. The mobile view stacks the diagram and evidence without horizontal overflow or clipped controls.

## Functional checks completed

- Production build completed successfully.
- Search for `harness` switched the result to `智能体运行框架`.
- The 2024 paper filter reduced the Harness paper list to two matching papers.
- The related-concept `Scaffolding` control switched the result to `能力脚手架`.
- No console errors appeared in the final Playwright pass.
- All paper and project rows expose direct external links in the rendered DOM.
- The 390 x 844 responsive test reported no horizontal overflow.

## Findings

No actionable P0/P1/P2 differences remain. Typography, spacing, colors, icon family, content hierarchy, mobile behavior, and core interaction states were checked against the selected mock.

## Follow-up polish

- [P3] The source mock uses a continuous circular connector around the four mechanism nodes; the implementation uses a cleaner four-node orbit with a standard arrows icon at the center. This keeps the diagram accessible and avoids substituting a custom drawn asset.
- [P3] The richer evidence requested by the user makes the full page slightly taller than the original mock; scrolling is expected and does not hide controls.

## Comparison history

- Initial render: blocked by duplicate React dependencies; fixed by deduplicating React in Vite and re-optimizing dependencies.
- First visual pass: horizontal mechanism layout drifted from the circular source and evidence rows were too tall.
- Fixes: changed the mechanism to a four-node orbit, moved the loop symbol to the center, reduced header and evidence spacing, and suppressed the favicon 404.
- Final visual pass: desktop and mobile screenshots inspected; side-by-side comparison completed; build, interactions, overflow, and console checks passed.

## Implementation checklist

- [x] Match the warm paper, black type, and electric-blue direction.
- [x] Preserve the large top search interaction.
- [x] Add concise concept copy and mechanism flow.
- [x] Add direct paper links and year filtering.
- [x] Add case popularity signals, timestamps, statuses, and source links.
- [x] Verify core interactions and production build.
- [x] Capture browser-rendered visual evidence and complete side-by-side comparison.

final result: passed
