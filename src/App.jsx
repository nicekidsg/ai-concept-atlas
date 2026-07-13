import { useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowsClockwise,
  ArrowRight,
  ArrowSquareOut,
  BookmarkSimple,
  Brain,
  CheckCircle,
  Circle,
  Eye,
  GithubLogo,
  Link as LinkIcon,
  MagnifyingGlass,
  Robot,
  ShareNetwork,
  Sparkle,
  Wrench,
} from "@phosphor-icons/react";

const concepts = {
  loop: {
    eyebrow: "AGENT LOOP",
    title: "智能体循环",
    aliases: ["loop", "agent loop", "智能体循环", "循环"],
    definition: "智能体通过观察环境、推理决策、执行行动并接收反馈，不断迭代以达成目标的闭环过程。",
    takeaway: "循环让 AI 不只回答一次，而是边做、边检查、边修正。",
    why: "它把一次性回答变成可持续改进的任务过程，是智能体完成复杂、长期目标的核心机制。",
    points: [
      ["感知", "从环境、工具返回和记忆中获取当前状态。", Eye],
      ["决策", "基于目标与上下文推理，选择下一步最合适的行动。", Brain],
      ["行动", "调用工具或执行操作，改变环境并推进任务。", Wrench],
    ],
    steps: [
      ["观察", "读取环境", Eye],
      ["推理", "形成决策", Brain],
      ["行动", "执行操作", Wrench],
      ["反馈", "检查结果", CheckCircle],
    ],
    papers: [
      { year: 2025, title: "Scaling Test-time Compute for LLM Agents", venue: "arXiv", note: "系统研究增加推理、反思与验证轮次如何影响智能体表现。", url: "https://arxiv.org/abs/2506.12928" },
      { year: 2023, title: "Reflexion: Language Agents with Verbal Reinforcement Learning", venue: "NeurIPS", note: "展示智能体如何把自然语言反馈写入记忆，并用于下一轮决策。", url: "https://arxiv.org/abs/2303.11366" },
      { year: 2023, title: "ReAct: Synergizing Reasoning and Acting in Language Models", venue: "ICLR", note: "奠定“推理与行动交替进行”的经典智能体循环范式。", url: "https://arxiv.org/abs/2210.03629" },
    ],
  },
  harness: {
    eyebrow: "AGENT HARNESS",
    title: "智能体运行框架",
    aliases: ["harness", "agent harness", "框架", "运行框架"],
    definition: "围绕模型组织工具、记忆、规则、权限与评测的一层工程系统，让智能体能够稳定、可控地工作。",
    takeaway: "模型像发动机，harness 则是方向盘、仪表盘和安全带。",
    why: "同一个模型放进不同 harness，可靠性、可观测性和任务完成率可能完全不同。",
    points: [
      ["工具", "规定模型能调用什么，以及如何安全地调用。", Wrench],
      ["记忆", "保存关键上下文，让多轮任务保持连续。", BookmarkSimple],
      ["约束", "用规则、权限和评测限制错误扩散。", CheckCircle],
    ],
    steps: [
      ["模型", "生成意图", Brain],
      ["编排", "选择工具", Sparkle],
      ["执行", "调用环境", Wrench],
      ["评测", "记录反馈", CheckCircle],
    ],
    papers: [
      { year: 2024, title: "SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering", venue: "NeurIPS", note: "说明为模型设计合适的计算机接口，本身就是智能体能力的一部分。", url: "https://arxiv.org/abs/2405.15793" },
      { year: 2024, title: "τ-bench: A Benchmark for Tool-Agent-User Interaction", venue: "arXiv", note: "用工具、用户和规则共同构成更接近真实业务的智能体评测环境。", url: "https://arxiv.org/abs/2406.12045" },
      { year: 2023, title: "AgentBench: Evaluating LLMs as Agents", venue: "ICLR", note: "从多种交互环境衡量模型作为智能体时的实际能力。", url: "https://arxiv.org/abs/2308.03688" },
    ],
  },
  scaffolding: {
    eyebrow: "SCAFFOLDING",
    title: "能力脚手架",
    aliases: ["scaffolding", "脚手架", "能力脚手架"],
    definition: "用规划、搜索、记忆、反思等外部结构，把模型的单次生成组织成更可靠的复杂任务流程。",
    takeaway: "脚手架不改变模型参数，却能改变模型解决问题的方式。",
    why: "它把能力拆成可检查的中间步骤，常用于提升长任务的稳定性与可解释性。",
    points: [
      ["拆解", "把模糊目标转换成清晰的子任务。", Sparkle],
      ["搜索", "探索多个候选路径，而不是一次定答案。", MagnifyingGlass],
      ["反思", "根据结果回看过程，修正下一步策略。", CheckCircle],
    ],
    steps: [
      ["目标", "理解任务", Eye],
      ["规划", "拆分步骤", Brain],
      ["探索", "比较路径", MagnifyingGlass],
      ["修正", "收敛结果", CheckCircle],
    ],
    papers: [
      { year: 2023, title: "Tree of Thoughts: Deliberate Problem Solving with Large Language Models", venue: "NeurIPS", note: "把单一路径推理扩展为可搜索、可回退的思维树。", url: "https://arxiv.org/abs/2305.10601" },
      { year: 2023, title: "Language Agent Tree Search Unifies Reasoning, Acting, and Planning", venue: "arXiv", note: "把搜索、行动与环境反馈组合成统一的智能体脚手架。", url: "https://arxiv.org/abs/2310.04406" },
      { year: 2023, title: "Voyager: An Open-Ended Embodied Agent with Large Language Models", venue: "arXiv", note: "通过技能库、自动课程与迭代提示支持长期自主探索。", url: "https://arxiv.org/abs/2305.16291" },
    ],
  },
  verifier: {
    eyebrow: "VERIFIER",
    title: "验证器",
    aliases: ["verifier", "验证器", "验证模型"],
    definition: "对候选答案或中间步骤进行检查、评分与排序的组件，帮助系统选择更可靠的结果。",
    takeaway: "生成器负责提出答案，验证器负责判断哪个答案更值得相信。",
    why: "当系统生成多个候选结果时，验证器是把额外计算转化为质量提升的关键。",
    points: [
      ["检查", "识别答案或过程中的明显错误。", CheckCircle],
      ["评分", "给多个候选结果分配可比较的质量信号。", Sparkle],
      ["选择", "把最佳候选交给用户或下一步流程。", ArrowRight],
    ],
    steps: [
      ["生成", "多个候选", Robot],
      ["检查", "过程与结果", Eye],
      ["评分", "比较质量", Sparkle],
      ["选择", "输出最佳", CheckCircle],
    ],
    papers: [
      { year: 2024, title: "Generative Verifiers: Reward Modeling as Next-Token Prediction", venue: "arXiv", note: "把验证重新表述为生成任务，研究更灵活的奖励建模方式。", url: "https://arxiv.org/abs/2408.15240" },
      { year: 2024, title: "Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters", venue: "arXiv", note: "展示验证器如何参与推理时搜索与计算分配。", url: "https://arxiv.org/abs/2408.03314" },
      { year: 2023, title: "Let's Verify Step by Step", venue: "arXiv", note: "强调对推理过程逐步反馈，往往比只检查最终答案更有效。", url: "https://arxiv.org/abs/2305.20050" },
    ],
  },
  "test-time compute": {
    eyebrow: "TEST-TIME COMPUTE",
    title: "推理时计算",
    aliases: ["test-time compute", "test time compute", "推理时计算", "测试时计算", "ttc"],
    definition: "模型参数不变，在回答问题时投入更多采样、搜索、反思或验证计算，以提高结果质量。",
    takeaway: "不是把模型再训练一遍，而是让它在作答时更会分配思考预算。",
    why: "它提供了训练扩展之外的另一条性能增长路径，但必须同时考虑延迟与成本。",
    points: [
      ["采样", "生成多个候选思路或答案。", Sparkle],
      ["搜索", "在候选路径中继续展开更有希望的分支。", MagnifyingGlass],
      ["验证", "用评分器选择更可靠的结果。", CheckCircle],
    ],
    steps: [
      ["问题", "估计难度", Eye],
      ["预算", "分配计算", Brain],
      ["探索", "生成候选", Sparkle],
      ["选择", "验证输出", CheckCircle],
    ],
    papers: [
      { year: 2026, title: "ThinkBooster: A Unified Framework for Seamless Test-Time Scaling of LLM Reasoning", venue: "arXiv", note: "统一比较推理时扩展策略、评分器与质量—成本权衡。", url: "https://arxiv.org/abs/2606.06915" },
      { year: 2025, title: "Scaling Test-time Compute for LLM Agents", venue: "arXiv", note: "把推理时扩展系统应用到语言智能体，并比较反思与合并策略。", url: "https://arxiv.org/abs/2506.12928" },
      { year: 2024, title: "Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters", venue: "arXiv", note: "研究按题目难度自适应分配推理计算的收益。", url: "https://arxiv.org/abs/2408.03314" },
    ],
  },
};

const cases = [
  {
    name: "LangGraph",
    stars: "34.6k",
    use: "构建有状态、长运行、可恢复的智能体工作流。",
    url: "https://github.com/langchain-ai/langgraph",
    status: "持续活跃",
  },
  {
    name: "AutoGen",
    stars: "59.5k",
    use: "多智能体协作与事件驱动编排的代表性框架。",
    url: "https://github.com/microsoft/autogen",
    status: "维护模式",
  },
  {
    name: "CrewAI",
    stars: "53.6k",
    use: "以角色和任务为中心组织多智能体协作。",
    url: "https://github.com/crewAIInc/crewAI",
    status: "持续活跃",
  },
];

const suggestions = ["Harness", "Scaffolding", "Verifier", "Test-time compute"];

function resolveConcept(input) {
  const normalized = input.trim().toLowerCase();
  return Object.entries(concepts).find(([, concept]) =>
    concept.aliases.some((alias) => alias.toLowerCase() === normalized),
  )?.[0];
}

function EvidenceLink({ href, label }) {
  return (
    <a className="evidence-link" href={href} target="_blank" rel="noreferrer" aria-label={label}>
      <ArrowSquareOut size={20} weight="regular" />
    </a>
  );
}

export function App() {
  const [activeKey, setActiveKey] = useState("loop");
  const [query, setQuery] = useState("loop");
  const [paperYear, setPaperYear] = useState("all");
  const [saved, setSaved] = useState(false);
  const [notice, setNotice] = useState("");
  const concept = concepts[activeKey];

  const filteredPapers = useMemo(
    () => concept.papers.filter((paper) => paperYear === "all" || String(paper.year) === paperYear),
    [concept, paperYear],
  );

  const runSearch = (event) => {
    event?.preventDefault();
    const found = resolveConcept(query);
    if (!found) {
      setNotice("暂未收录这个词，试试 loop、harness、scaffolding、verifier 或 test-time compute。");
      return;
    }
    setActiveKey(found);
    setQuery(concepts[found].aliases[0]);
    setPaperYear("all");
    setNotice("");
  };

  const chooseConcept = (label) => {
    setQuery(label);
    const found = resolveConcept(label);
    if (found) {
      setActiveKey(found);
      setPaperYear("all");
      setNotice("");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const share = async () => {
    const text = `概念回路：${concept.title} — ${concept.definition}`;
    try {
      await navigator.clipboard.writeText(text);
      setNotice("概念摘要已复制，可以分享给同事了。");
    } catch {
      setNotice(text);
    }
  };

  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="概念回路首页">
          <span className="brand-name">概念回路</span>
          <Circle className="brand-dot" size={11} weight="fill" />
          <span className="brand-subtitle">AI 概念知识图谱</span>
        </a>
        <nav aria-label="主导航">
          <a href="#search">探索</a>
          <a href="#related">主题</a>
          <button type="button" onClick={() => setSaved((value) => !value)}>{saved ? "已收藏" : "收藏"}</button>
          <a href="#about">关于</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <form id="search" className="search" onSubmit={runSearch}>
          <MagnifyingGlass size={34} weight="regular" aria-hidden="true" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="输入一个 AI 概念"
            placeholder="输入一个 AI 概念，例如 loop、harness…"
          />
          <button className="search-button" type="submit">
            搜索 <ArrowRight size={22} weight="bold" />
          </button>
        </form>
        {notice && <p className="notice" role="status">{notice}</p>}
      </section>

      <section className="concept-grid" aria-live="polite">
        <article className="concept-copy">
          <div className="concept-meta">
            <span>{concept.eyebrow}</span>
            <div className="concept-actions">
              <button type="button" onClick={() => setSaved((value) => !value)} aria-pressed={saved}>
                <BookmarkSimple size={20} weight={saved ? "fill" : "regular"} /> {saved ? "已收藏" : "收藏"}
              </button>
              <button type="button" onClick={share}><ShareNetwork size={20} /> 分享</button>
            </div>
          </div>
          <h1>{concept.title}</h1>
          <p className="definition">{concept.definition}</p>

          <div className="point-list">
            {concept.points.map(([title, body, Icon]) => (
              <div className="point" key={title}>
                <Icon size={32} weight="regular" aria-hidden="true" />
                <strong>{title}</strong>
                <p>{body}</p>
              </div>
            ))}
            <div className="point why-point">
              <Sparkle size={31} weight="fill" aria-hidden="true" />
              <strong>为什么重要</strong>
              <p>{concept.why}</p>
            </div>
          </div>
        </article>

        <aside className="mechanism" aria-label={`${concept.title}机制图`}>
          <div className="flow-diagram">
            <div className="mechanism-title">
              <ArrowsClockwise size={45} weight="regular" />
              <strong>{concept.title}</strong>
              <span>{concept.takeaway}</span>
            </div>
            {concept.steps.map(([label, caption, Icon], index) => (
              <div className={`flow-fragment flow-fragment-${index + 1}`} key={label}>
                <div className="flow-node">
                  <Icon size={31} weight="regular" />
                  <strong>{label}</strong>
                  <span>{caption}</span>
                </div>
                {index < concept.steps.length - 1 && <ArrowDown className="mobile-arrow" size={24} weight="bold" />}
              </div>
            ))}
          </div>
          <p className="flow-summary">{concept.steps.map(([label]) => label).join(" → ")}</p>
        </aside>
      </section>

      <section className="evidence" aria-label="论文与优秀案例">
        <div className="papers">
          <div className="section-heading">
            <div>
              <span className="section-kicker">PAPERS</span>
              <h2>近期论文</h2>
            </div>
            <label>
              <span>按年份</span>
              <select value={paperYear} onChange={(event) => setPaperYear(event.target.value)}>
                <option value="all">全部</option>
                {[...new Set(concept.papers.map((paper) => paper.year))].map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="evidence-rows">
            {filteredPapers.length > 0 ? filteredPapers.map((paper, index) => (
              <article className="paper-row" key={paper.url}>
                <span className="row-number">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <a href={paper.url} target="_blank" rel="noreferrer">{paper.title}</a>
                  <span className="paper-meta">{paper.venue} · {paper.year}</span>
                </div>
                <p><strong>为什么值得读</strong>{paper.note}</p>
                <EvidenceLink href={paper.url} label={`打开论文：${paper.title}`} />
              </article>
            )) : <p className="empty-state">这个年份暂无收录论文。</p>}
          </div>
        </div>

        <div className="cases">
          <div className="section-heading">
            <div>
              <span className="section-kicker">CASES</span>
              <h2>优秀案例</h2>
            </div>
            <p>入选依据：GitHub Stars / 社区活跃度</p>
          </div>
          <div className="evidence-rows">
            {cases.map((item) => (
              <article className="case-row" key={item.name}>
                <div className="case-name"><GithubLogo size={30} weight="fill" /><strong>{item.name}</strong></div>
                <p>{item.use}</p>
                <div className="case-signal">
                  <a href={item.url} target="_blank" rel="noreferrer">GitHub · ★ {item.stars}</a>
                  <span>更新于 2026-07-13 · {item.status}</span>
                </div>
                <EvidenceLink href={item.url} label={`打开 GitHub 项目：${item.name}`} />
              </article>
            ))}
          </div>
          <p className="method-note">Stars 是公开关注度信号，不等于技术质量；入选同时参考项目定位、近期维护状态与社区采用度。</p>
        </div>
      </section>

      <footer id="related" className="related">
        <span>相关概念</span>
        <div>
          {suggestions.filter((item) => item.toLowerCase() !== concept.aliases[0]).map((item) => (
            <button type="button" key={item} onClick={() => chooseConcept(item)}>
              <LinkIcon size={20} /> {item}
            </button>
          ))}
        </div>
        <p id="about">论文与案例均提供原始来源；热度数据为 2026-07-13 的公开快照。</p>
      </footer>
    </main>
  );
}
