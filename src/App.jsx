import { useEffect, useMemo, useState } from "react";
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
  Plus,
  Robot,
  ShareNetwork,
  Sparkle,
  Wrench,
  X,
} from "@phosphor-icons/react";
import { categoryDetails, glossaryEntries, papersByCategory } from "./glossary";
import { buildDiagram, buildExistingDiagram, diagramTypeLabels } from "./diagrams";

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
  skill: {
    eyebrow: "AGENT SKILL",
    title: "智能体技能",
    aliases: ["skill", "skills", "agent skill", "agent skills", "智能体技能", "技能"],
    definition: "可被智能体按需发现和加载的能力包，通常包含操作说明、脚本与参考资料，用来稳定完成一类重复任务。",
    takeaway: "工具告诉智能体“能做什么”，Skill 则教它“什么时候、按什么步骤把这件事做好”。",
    why: "它把一次性的提示经验沉淀成可复用、可组合、可版本化的能力，是智能体从演示走向生产的重要模块。",
    points: [
      ["说明", "定义触发条件、操作步骤与完成标准。", BookmarkSimple],
      ["资源", "附带模板、示例与领域知识，减少临场猜测。", LinkIcon],
      ["脚本", "把确定性步骤交给代码执行，提高一致性。", Wrench],
    ],
    steps: [
      ["发现", "匹配任务", MagnifyingGlass],
      ["加载", "读取说明", BookmarkSimple],
      ["执行", "调用资源", Wrench],
      ["验证", "检查结果", CheckCircle],
    ],
    papers: [
      { year: 2026, title: "Agent Skills for Large Language Models: Architecture, Acquisition, Security, and the Path Forward", venue: "arXiv", note: "系统梳理技能的架构、获取方式、评测与安全问题。", url: "https://arxiv.org/abs/2602.12430" },
      { year: 2026, title: "Towards Secure Agent Skills: Understanding and Mitigating Security Risks", venue: "arXiv", note: "聚焦技能包的供应链、权限与指令注入风险。", url: "https://arxiv.org/abs/2604.02837" },
      { year: 2025, title: "Open Agent Skills Specification", venue: "开放标准", note: "给出以 SKILL.md 为核心的可移植技能包结构与字段约定。", url: "https://openagentskills.dev/docs/specification" },
    ],
  },
  mcp: {
    eyebrow: "MODEL CONTEXT PROTOCOL",
    title: "模型上下文协议",
    aliases: ["mcp", "model context protocol", "模型上下文协议", "上下文协议"],
    definition: "连接 AI 应用与外部工具、数据和提示资源的开放协议，用统一接口替代为每个系统单独开发集成。",
    takeaway: "MCP 像 AI 应用的 USB-C：用一套协议连接许多不同的数据源和工具。",
    why: "标准化的发现、调用与返回格式能显著降低集成成本，但也要求认真处理身份、权限与不可信工具。",
    points: [
      ["客户端", "由 AI 应用发起连接并管理会话。", Robot],
      ["服务端", "暴露工具、资源与提示能力。", Wrench],
      ["契约", "用结构化协议描述能力和调用结果。", CheckCircle],
    ],
    steps: [
      ["发现", "列出能力", MagnifyingGlass],
      ["连接", "建立会话", LinkIcon],
      ["调用", "发送参数", Wrench],
      ["返回", "接收结果", ArrowRight],
    ],
    papers: [
      { year: 2026, title: "SMCP: Secure Model Context Protocol", venue: "arXiv", note: "从身份、认证、策略与审计层面补强 MCP 的安全边界。", url: "https://arxiv.org/abs/2602.01129" },
      { year: 2025, title: "A Survey of Agent Interoperability Protocols", venue: "arXiv", note: "比较 MCP、ACP、A2A 与 ANP 在工具接入和智能体协作中的定位。", url: "https://arxiv.org/abs/2505.02279" },
      { year: 2024, title: "Model Context Protocol Specification", venue: "开放标准", note: "定义 MCP 的客户端—服务端架构、生命周期与核心消息格式。", url: "https://modelcontextprotocol.io/specification/2024-11-05/index" },
    ],
  },
  subagent: {
    eyebrow: "SUBAGENT",
    title: "子智能体",
    aliases: ["subagent", "sub-agent", "sub agent", "子智能体", "子代理"],
    definition: "由主智能体为明确子任务启动的独立工作单元，拥有受限上下文、工具和交付目标，完成后把结果汇总回来。",
    takeaway: "子智能体不是多开一个聊天窗口，而是把可并行的责任边界真正分出去。",
    why: "它能隔离上下文、并行推进不同专长的工作，但任务拆分和结果合并本身也会产生协调成本。",
    points: [
      ["范围", "为每个子任务定义清晰的输入与完成标准。", CheckCircle],
      ["隔离", "只提供必要上下文，减少相互干扰。", Circle],
      ["汇总", "把证据与结论交回主智能体统一决策。", ShareNetwork],
    ],
    steps: [
      ["拆分", "识别子任务", Brain],
      ["委派", "分配上下文", ShareNetwork],
      ["执行", "独立工作", Robot],
      ["合并", "汇总结果", CheckCircle],
    ],
    papers: [
      { year: 2023, title: "AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation", venue: "arXiv", note: "展示多个可配置智能体如何通过对话共同完成任务。", url: "https://arxiv.org/abs/2308.08155" },
      { year: 2023, title: "MetaGPT: Meta Programming for Multi-Agent Collaborative Framework", venue: "ICLR", note: "用角色、标准流程和结构化交付组织软件工程子任务。", url: "https://arxiv.org/abs/2308.00352" },
      { year: 2023, title: "CAMEL: Communicative Agents for Mind Exploration of Large Scale Language Model Society", venue: "NeurIPS", note: "研究角色化智能体之间如何分工并持续协作。", url: "https://arxiv.org/abs/2303.17760" },
    ],
  },
  "planner-executor": {
    eyebrow: "PLANNER–EXECUTOR",
    title: "规划—执行架构",
    aliases: ["planner-executor", "planner executor", "planner", "规划执行", "规划—执行架构", "规划器"],
    definition: "把“决定做什么”和“实际怎么做”分成两个角色：规划器拆解目标，执行器逐步调用工具，并根据结果重新规划。",
    takeaway: "先把路线想清楚，再逐步执行；环境变了，就重画路线。",
    why: "职责分离让长任务更容易检查和恢复，但过度规划也可能增加延迟，甚至在第一步就把错误放大。",
    points: [
      ["规划", "把目标拆成有顺序、可验证的步骤。", Brain],
      ["执行", "按计划调用工具并记录实际结果。", Wrench],
      ["重规划", "遇到失败或新信息时调整后续路径。", ArrowsClockwise],
    ],
    steps: [
      ["目标", "理解约束", Eye],
      ["计划", "拆分步骤", Brain],
      ["执行", "调用工具", Wrench],
      ["修订", "更新计划", ArrowsClockwise],
    ],
    papers: [
      { year: 2023, title: "Plan-and-Solve Prompting: Improving Zero-Shot Chain-of-Thought Reasoning", venue: "ACL", note: "明确提出先生成计划、再按计划完成子任务的两阶段方法。", url: "https://arxiv.org/abs/2305.04091" },
      { year: 2023, title: "Language Agent Tree Search Unifies Reasoning, Acting, and Planning", venue: "arXiv", note: "用搜索把规划、行动和环境反馈合并到同一过程。", url: "https://arxiv.org/abs/2310.04406" },
      { year: 2023, title: "ReAct: Synergizing Reasoning and Acting in Language Models", venue: "ICLR", note: "提供推理与行动交替进行的基础执行范式。", url: "https://arxiv.org/abs/2210.03629" },
    ],
  },
  guardrail: {
    eyebrow: "GUARDRAIL",
    title: "智能体护栏",
    aliases: ["guardrail", "guardrails", "rail", "护栏", "安全护栏", "智能体护栏"],
    definition: "在模型输入、工具调用和输出周围设置的运行时检查与策略，用来阻止越权、危险或不符合业务规则的行为。",
    takeaway: "护栏不是让模型永不犯错，而是在关键边界发现、拦截并升级风险。",
    why: "智能体能对外部系统采取行动，风险不再只是“说错话”，还包括错误调用、数据泄露和不可逆操作。",
    points: [
      ["输入", "识别注入、敏感数据与不合规请求。", Eye],
      ["行动", "用权限和策略限制工具调用范围。", Wrench],
      ["输出", "检查结果并在高风险时要求人工确认。", CheckCircle],
    ],
    steps: [
      ["识别", "判断风险", Eye],
      ["决策", "匹配策略", Brain],
      ["拦截", "限制行动", CheckCircle],
      ["升级", "交给人工", ShareNetwork],
    ],
    papers: [
      { year: 2024, title: "ShieldGemma: Generative AI Content Moderation Based on Gemma", venue: "arXiv", note: "展示面向输入与输出安全分类的开放权重审核模型。", url: "https://arxiv.org/abs/2407.21772" },
      { year: 2023, title: "NeMo Guardrails: A Toolkit for Controllable and Safe LLM Applications", venue: "EMNLP", note: "用可编程 rails 控制对话路径、主题和输出行为。", url: "https://arxiv.org/abs/2310.10501" },
      { year: 2022, title: "Constitutional AI: Harmlessness from AI Feedback", venue: "Anthropic", note: "用显式原则与自我批评塑造安全行为，是策略型护栏的重要基础。", url: "https://arxiv.org/abs/2212.08073" },
    ],
  },
  memory: {
    eyebrow: "AGENT MEMORY",
    title: "智能体记忆",
    aliases: ["memory", "agent memory", "long-term memory", "智能体记忆", "长期记忆", "记忆"],
    definition: "让智能体在当前上下文之外保存、检索和更新信息的机制，既可记录事实，也可沉淀经验与任务状态。",
    takeaway: "上下文是眼前的工作台，记忆是需要时能找回来的档案库。",
    why: "它支持跨会话连续性和长期任务，但记错、找错或保留过久，也会带来隐私与错误累积问题。",
    points: [
      ["写入", "判断哪些事实、事件或经验值得保存。", BookmarkSimple],
      ["检索", "根据当前任务召回最相关的信息。", MagnifyingGlass],
      ["更新", "合并新证据，淡化过期或冲突内容。", ArrowsClockwise],
    ],
    steps: [
      ["经历", "产生信息", Eye],
      ["存储", "形成记忆", BookmarkSimple],
      ["召回", "匹配任务", MagnifyingGlass],
      ["反思", "更新经验", Brain],
    ],
    papers: [
      { year: 2023, title: "MemGPT: Towards LLMs as Operating Systems", venue: "arXiv", note: "用分层记忆和显式换页管理有限上下文。", url: "https://arxiv.org/abs/2310.08560" },
      { year: 2023, title: "Generative Agents: Interactive Simulacra of Human Behavior", venue: "UIST", note: "把事件流、检索、反思和计划组合成长期行为记忆。", url: "https://arxiv.org/abs/2304.03442" },
      { year: 2023, title: "MemoryBank: Enhancing Large Language Models with Long-Term Memory", venue: "AAAI", note: "探索跨对话保存、遗忘和召回用户相关记忆。", url: "https://arxiv.org/abs/2305.10250" },
    ],
  },
  "tool-use": {
    eyebrow: "TOOL USE",
    title: "工具调用",
    aliases: ["tool use", "tool-use", "tool calling", "function calling", "工具调用", "函数调用"],
    definition: "模型根据任务选择外部能力，生成符合接口约束的参数，并把返回结果纳入后续推理的过程。",
    takeaway: "模型负责判断与组织，工具负责搜索、计算或真正改变外部世界。",
    why: "工具把语言模型的能力延伸到实时信息和确定性操作，同时也引入接口错误、权限与结果可信度问题。",
    points: [
      ["选择", "从可用工具中判断哪个最适合当前步骤。", Brain],
      ["参数", "按照结构化定义生成合法调用。", Wrench],
      ["吸收", "理解返回结果并决定下一步。", ArrowsClockwise],
    ],
    steps: [
      ["意图", "识别需求", Eye],
      ["选择", "匹配工具", Brain],
      ["调用", "传入参数", Wrench],
      ["整合", "使用结果", CheckCircle],
    ],
    papers: [
      { year: 2023, title: "ToolLLM: Facilitating Large Language Models to Master 16000+ Real-world APIs", venue: "ICLR", note: "围绕大规模真实 API 构建工具学习数据与评测。", url: "https://arxiv.org/abs/2307.16789" },
      { year: 2023, title: "Gorilla: Large Language Model Connected with Massive APIs", venue: "arXiv", note: "研究模型如何准确选择 API，并降低工具调用幻觉。", url: "https://arxiv.org/abs/2305.15334" },
      { year: 2023, title: "Toolformer: Language Models Can Teach Themselves to Use Tools", venue: "NeurIPS", note: "让模型自监督学习何时调用工具、传什么参数以及如何使用结果。", url: "https://arxiv.org/abs/2302.04761" },
    ],
  },
  "multi-agent": {
    eyebrow: "MULTI-AGENT",
    title: "多智能体系统",
    aliases: ["multi-agent", "multi agent", "multi-agent system", "mas", "多智能体", "多智能体系统"],
    definition: "让多个拥有不同角色、上下文或工具的智能体通过通信、分工与协商共同完成任务的系统。",
    takeaway: "多个智能体的价值不在数量，而在是否有互补角色和清晰的协作协议。",
    why: "它适合并行探索、交叉检查和专长分工，但也可能带来重复劳动、意见循环和更高成本。",
    points: [
      ["角色", "为每个智能体分配互补的职责与权限。", Robot],
      ["通信", "用结构化消息共享必要信息和证据。", ShareNetwork],
      ["协调", "处理依赖、冲突和最终结果归属。", CheckCircle],
    ],
    steps: [
      ["分工", "分配角色", ShareNetwork],
      ["协作", "交换信息", ArrowsClockwise],
      ["复核", "发现冲突", Eye],
      ["汇总", "形成结论", CheckCircle],
    ],
    papers: [
      { year: 2023, title: "AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation", venue: "arXiv", note: "提供可配置、可组合的多智能体对话框架。", url: "https://arxiv.org/abs/2308.08155" },
      { year: 2023, title: "MetaGPT: Meta Programming for Multi-Agent Collaborative Framework", venue: "ICLR", note: "把软件公司的角色与标准流程映射为多智能体协作。", url: "https://arxiv.org/abs/2308.00352" },
      { year: 2023, title: "CAMEL: Communicative Agents for Mind Exploration of Large Scale Language Model Society", venue: "NeurIPS", note: "研究基于角色扮演的智能体社会与协作方式。", url: "https://arxiv.org/abs/2303.17760" },
    ],
  },
  "computer-use": {
    eyebrow: "COMPUTER USE",
    title: "计算机操作智能体",
    aliases: ["computer use", "computer-use", "computer use agent", "gui agent", "计算机操作", "计算机操作智能体", "电脑智能体"],
    definition: "通过截图或界面结构理解桌面与网页，并像人一样点击、输入、滚动和跨应用完成任务的智能体。",
    takeaway: "API 直连像走员工通道，Computer Use 则让智能体从所有人都能看到的界面进入。",
    why: "它能覆盖没有 API 的旧系统和长尾软件，但界面变化、视觉误判和高风险点击会显著影响可靠性。",
    points: [
      ["感知", "读取截图、文字与当前交互状态。", Eye],
      ["定位", "找到正确控件并判断可执行动作。", MagnifyingGlass],
      ["操作", "点击、输入、滚动并观察界面变化。", Wrench],
    ],
    steps: [
      ["截图", "观察界面", Eye],
      ["定位", "识别控件", MagnifyingGlass],
      ["操作", "鼠标键盘", Wrench],
      ["确认", "检查变化", CheckCircle],
    ],
    papers: [
      { year: 2024, title: "Agent S: An Open Agentic Framework that Uses Computers Like a Human", venue: "arXiv", note: "结合经验检索和分层规划完成复杂桌面任务。", url: "https://arxiv.org/abs/2410.08164" },
      { year: 2024, title: "OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments", venue: "NeurIPS", note: "在真实操作系统和应用中评测通用计算机操作能力。", url: "https://arxiv.org/abs/2404.07972" },
      { year: 2023, title: "WebArena: A Realistic Web Environment for Building Autonomous Agents", venue: "ICLR", note: "提供可复现的真实网站环境与长链网页任务。", url: "https://arxiv.org/abs/2307.13854" },
    ],
  },
  "context-engineering": {
    eyebrow: "CONTEXT ENGINEERING",
    title: "上下文工程",
    aliases: ["context engineering", "context-engineering", "上下文工程", "上下文设计"],
    definition: "系统设计模型每一步能看到的信息：选择哪些指令、记忆、检索结果、工具反馈和示例，并控制它们的顺序与篇幅。",
    takeaway: "Prompt 是一段指令；Context Engineering 管的是模型作答前看到的整张工作台。",
    why: "上下文窗口再长也不等于信息都会被正确使用，相关性、位置、噪声和更新时机同样决定结果质量。",
    points: [
      ["选择", "只保留对当前决策真正有用的信息。", MagnifyingGlass],
      ["组织", "把指令、证据和历史放在清晰位置。", BookmarkSimple],
      ["更新", "随着任务推进压缩、替换或补充上下文。", ArrowsClockwise],
    ],
    steps: [
      ["收集", "获取信息", LinkIcon],
      ["筛选", "判断相关", MagnifyingGlass],
      ["编排", "组织上下文", Brain],
      ["刷新", "保持有效", ArrowsClockwise],
    ],
    papers: [
      { year: 2023, title: "LongBench: A Bilingual, Multitask Benchmark for Long Context Understanding", venue: "ACL", note: "从多类任务评测长上下文理解，而不只看窗口长度。", url: "https://arxiv.org/abs/2308.14508" },
      { year: 2023, title: "Lost in the Middle: How Language Models Use Long Contexts", venue: "TACL", note: "揭示关键信息所处位置会显著影响模型使用效果。", url: "https://arxiv.org/abs/2307.03172" },
      { year: 2020, title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks", venue: "NeurIPS", note: "奠定按需检索外部知识并注入生成上下文的经典范式。", url: "https://arxiv.org/abs/2005.11401" },
    ],
  },
};

const flowIcons = [Eye, Brain, Wrench, CheckCircle];

Object.entries(concepts).forEach(([key, concept]) => {
  concept.diagram = buildExistingDiagram(key, concept);
});

Object.assign(
  concepts,
  Object.fromEntries(
    glossaryEntries.map((entry) => {
      const category = categoryDetails[entry.category];
      return [entry.key, {
        eyebrow: `${category.label} · ${entry.term.toUpperCase()}`,
        title: entry.title,
        category: category.label,
        aliases: [...new Set([
          entry.term,
          entry.key.replaceAll("-", " "),
          entry.title,
          ...entry.aliases,
        ])],
        definition: entry.definition,
        takeaway: entry.takeaway,
        why: category.why,
        points: [
          ["是什么", entry.definition, Eye],
          ["用在哪里", entry.use, Wrench],
          ["一眼记住", entry.takeaway, Sparkle],
        ],
        steps: category.steps.map(([label, caption], index) => [label, caption, flowIcons[index]]),
        diagram: buildDiagram(entry.key, entry),
        papers: papersByCategory[entry.category],
      }];
    }),
  ),
);

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

const baseCatalog = Object.entries(concepts)
  .map(([key, concept]) => ({
    key,
    label: concept.aliases[0],
    title: concept.title,
    category: concept.category ?? "智能体核心",
  }))
  .sort((a, b) => a.label.localeCompare(b.label, "en"));

function normalizeConceptTerm(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[–—_]/g, " ")
    .replace(/\s+/g, " ");
}

function resolveConcept(input, conceptSource = concepts) {
  const normalized = normalizeConceptTerm(input);
  return Object.entries(conceptSource).find(([, concept]) =>
    concept.aliases.some((alias) => normalizeConceptTerm(alias) === normalized),
  )?.[0];
}

function EvidenceLink({ href, label }) {
  return (
    <a className="evidence-link" href={href} target="_blank" rel="noreferrer" aria-label={label}>
      <ArrowSquareOut size={20} weight="regular" />
    </a>
  );
}

const diagramIcons = {
  input: Eye,
  observe: Eye,
  search: MagnifyingGlass,
  reason: Brain,
  act: Wrench,
  verify: CheckCircle,
  goal: Sparkle,
  memory: BookmarkSimple,
  link: LinkIcon,
  output: ArrowRight,
  generate: Robot,
  retry: ArrowsClockwise,
  orchestrate: ShareNetwork,
  share: ShareNetwork,
  server: Wrench,
  success: CheckCircle,
  stop: Circle,
  fast: ArrowRight,
  spark: Sparkle,
};

const sitesBackendOrigin = "https://ai-concept-atlas.leyangsh.chatgpt.site";

function backendUrl(path) {
  return window.location.hostname === "nicekidsg.github.io" ? `${sitesBackendOrigin}${path}` : path;
}

function hydrateCommunityConcept(rawConcept) {
  return {
    ...rawConcept,
    aliases: rawConcept.aliases?.length ? rawConcept.aliases : [rawConcept.title],
    points: (rawConcept.points ?? []).map(([title, body, role]) => [
      title,
      body,
      diagramIcons[role] ?? Sparkle,
    ]),
    papers: rawConcept.papers ?? [],
  };
}

async function requestJson(path, options) {
  const response = await fetch(backendUrl(path), options);
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.error || "请求失败，请稍后再试。");
  return payload;
}

function DiagramNode({ node, className = "" }) {
  const [label, caption, role] = node;
  const Icon = diagramIcons[role] ?? Brain;
  return (
    <div className={`diagram-node ${className}`}>
      <Icon size={29} weight="regular" aria-hidden="true" />
      <strong>{label}</strong>
      <span>{caption}</span>
    </div>
  );
}

function DiagramArrow() {
  return (
    <span className="diagram-arrow" aria-hidden="true">
      <ArrowRight className="desktop-arrow" size={23} weight="bold" />
      <ArrowDown className="mobile-arrow" size={23} weight="bold" />
    </span>
  );
}

function DiagramStage({ diagram }) {
  if (diagram.type === "cycle") {
    return (
      <div className="diagram-stage diagram-cycle">
        {diagram.nodes.map((node, index) => (
          <DiagramNode node={node} className={`cycle-node cycle-node-${index + 1}`} key={node[0]} />
        ))}
        <ArrowsClockwise className="cycle-mark" size={58} weight="regular" aria-hidden="true" />
      </div>
    );
  }

  if (diagram.type === "pipeline") {
    return (
      <div className="diagram-stage diagram-pipeline">
        {diagram.nodes.map((node, index) => (
          <div className="pipeline-step" key={node[0]}>
            <DiagramNode node={node} />
            {index < diagram.nodes.length - 1 && <DiagramArrow />}
          </div>
        ))}
      </div>
    );
  }

  if (diagram.type === "hub") {
    return (
      <div className="diagram-stage diagram-hub">
        <DiagramNode node={diagram.center} className="hub-center" />
        {diagram.nodes.map((node, index) => (
          <DiagramNode node={node} className={`hub-node hub-node-${index + 1}`} key={node[0]} />
        ))}
      </div>
    );
  }

  if (diagram.type === "layers") {
    return (
      <div className="diagram-stage diagram-layers">
        {diagram.nodes.map((node, index) => (
          <div className="layer-step" key={node[0]}>
            <DiagramNode node={node} />
            {index < diagram.nodes.length - 1 && <ArrowDown size={20} weight="bold" aria-hidden="true" />}
          </div>
        ))}
      </div>
    );
  }

  if (diagram.type === "branch") {
    return (
      <div className="diagram-stage diagram-branch">
        <DiagramNode node={diagram.nodes[0]} className="branch-root" />
        <ArrowDown className="branch-arrow branch-arrow-first" size={22} weight="bold" aria-hidden="true" />
        <div className="branch-options">
          <DiagramNode node={diagram.nodes[1]} />
          <DiagramNode node={diagram.nodes[2]} />
        </div>
        <ArrowDown className="branch-arrow" size={22} weight="bold" aria-hidden="true" />
        <DiagramNode node={diagram.nodes[3]} className="branch-result" />
      </div>
    );
  }

  return (
    <div className="diagram-stage diagram-gate">
      <div className="gate-path">
        <DiagramNode node={diagram.nodes[0]} />
        <DiagramArrow />
        <DiagramNode node={diagram.nodes[1]} className="gate-core" />
      </div>
      <ArrowDown className="gate-arrow" size={23} weight="bold" aria-hidden="true" />
      <div className="gate-outcomes">
        <DiagramNode node={diagram.nodes[2]} className="gate-pass" />
        <DiagramNode node={diagram.nodes[3]} className="gate-stop" />
      </div>
    </div>
  );
}

function ConceptDiagram({ concept }) {
  const { diagram } = concept;
  const nodeLabels = diagram.nodes.map(([label]) => label);
  const summary = diagram.type === "hub"
    ? `${diagram.center[0]} ↔ ${nodeLabels.join(" · ")}`
    : diagram.type === "branch"
      ? `${nodeLabels[0]} → ${nodeLabels[1]} / ${nodeLabels[2]} → ${nodeLabels[3]}`
      : diagram.type === "gate"
        ? `${nodeLabels[0]} → ${nodeLabels[1]} → ${nodeLabels[2]} / ${nodeLabels[3]}`
        : `${nodeLabels.join(" → ")}${diagram.type === "cycle" ? " ↺" : ""}`;

  return (
    <aside className={`mechanism mechanism-${diagram.type}`} aria-label={`${concept.title}${diagramTypeLabels[diagram.type]}`}>
      <div className="diagram-heading">
        <span>{diagramTypeLabels[diagram.type]}</span>
        <strong>{concept.title}</strong>
        <p>{concept.takeaway}</p>
      </div>
      <DiagramStage diagram={diagram} />
      <p className="flow-summary">{summary}</p>
    </aside>
  );
}

export function App() {
  const [activeKey, setActiveKey] = useState("loop");
  const [query, setQuery] = useState("loop");
  const [paperYear, setPaperYear] = useState("all");
  const [saved, setSaved] = useState(false);
  const [notice, setNotice] = useState("");
  const [missingTerm, setMissingTerm] = useState("");
  const [communityConcepts, setCommunityConcepts] = useState({});
  const [registrationOpen, setRegistrationOpen] = useState(false);
  const [registrationStatus, setRegistrationStatus] = useState("idle");
  const [registrationError, setRegistrationError] = useState("");
  const [registration, setRegistration] = useState({ term: "", context: "", sourceUrl: "", website: "" });
  const allConcepts = useMemo(() => ({ ...concepts, ...communityConcepts }), [communityConcepts]);
  const catalog = useMemo(() => [
    ...baseCatalog,
    ...Object.entries(communityConcepts).map(([key, item]) => ({
      key,
      label: item.aliases[0],
      title: item.title,
      category: item.category ?? "社区新词",
    })),
  ].sort((a, b) => a.label.localeCompare(b.label, "en")), [communityConcepts]);
  const concept = allConcepts[activeKey];
  const conceptCases = concept.community ? [] : cases;

  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("concept");
    if (!slug) return undefined;
    if (concepts[slug]) {
      setActiveKey(slug);
      setQuery(concepts[slug].aliases[0]);
      return undefined;
    }

    let cancelled = false;
    requestJson(`/api/concepts/${encodeURIComponent(slug)}`)
      .then(({ concept: rawConcept }) => {
        if (cancelled) return;
        const hydrated = hydrateCommunityConcept(rawConcept);
        setCommunityConcepts((current) => ({ ...current, [hydrated.key]: hydrated }));
        setActiveKey(hydrated.key);
        setQuery(hydrated.aliases[0]);
      })
      .catch((error) => {
        if (!cancelled) setNotice(error.message);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const filteredPapers = useMemo(
    () => concept.papers.filter((paper) => paperYear === "all" || String(paper.year) === paperYear),
    [concept, paperYear],
  );

  const setConceptUrl = (key) => {
    const url = new URL(window.location.href);
    url.searchParams.set("concept", key);
    window.history.replaceState({}, "", url);
  };

  const showConcept = (key, shouldScroll = false) => {
    setActiveKey(key);
    setQuery(allConcepts[key].aliases[0]);
    setPaperYear("all");
    setNotice("");
    setMissingTerm("");
    setConceptUrl(key);
    if (shouldScroll) window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const runSearch = (event) => {
    event?.preventDefault();
    const found = resolveConcept(query, allConcepts);
    if (!found) {
      const term = query.trim();
      setMissingTerm(term);
      setNotice(`“${term}”暂未收录。你可以登记它，后台会立即建立一份待核验的解释页。`);
      return;
    }
    showConcept(found);
  };

  const chooseConcept = (label) => {
    setQuery(label);
    const found = resolveConcept(label, allConcepts);
    if (found) showConcept(found, true);
  };

  const openRegistration = (seedTerm = "") => {
    setRegistration((current) => ({ ...current, term: seedTerm || current.term || query }));
    setRegistrationStatus("idle");
    setRegistrationError("");
    setRegistrationOpen(true);
  };

  const submitRegistration = async (event) => {
    event.preventDefault();
    setRegistrationStatus("submitting");
    setRegistrationError("");
    try {
      const payload = await requestJson("/api/concepts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registration),
      });
      const hydrated = hydrateCommunityConcept(payload.concept);
      setCommunityConcepts((current) => ({ ...current, [hydrated.key]: hydrated }));
      setActiveKey(hydrated.key);
      setQuery(hydrated.aliases[0]);
      setPaperYear("all");
      setMissingTerm("");
      setConceptUrl(hydrated.key);
      setNotice(payload.created ? "解释页已生成，并保存到社区词库。" : "这个词已经登记过，已打开现有解释页。");
      setRegistrationStatus("success");
      setRegistrationOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      setRegistrationStatus("error");
      setRegistrationError(error.message);
    }
  };

  const share = async () => {
    const url = new URL(window.location.href);
    url.searchParams.set("concept", activeKey);
    const text = `概念回路：${concept.title} — ${concept.definition}\n${url}`;
    try {
      await navigator.clipboard.writeText(text);
      setNotice("概念摘要和词条链接已复制，可以分享给同事了。");
      setMissingTerm("");
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
          <button className="register-nav" type="button" onClick={() => openRegistration()}>
            <Plus size={17} weight="bold" /> 登记新词
          </button>
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
            placeholder="输入中英文 AI 概念，例如 agent、智能体、token…"
            list="concept-options"
          />
          <datalist id="concept-options">
            {catalog.flatMap((item) => [
              <option key={`${item.key}-en`} value={item.label}>{item.title}</option>,
              <option key={`${item.key}-zh`} value={item.title}>{item.label}</option>,
            ])}
          </datalist>
          <button className="search-button" type="submit">
            搜索 <ArrowRight size={22} weight="bold" />
          </button>
        </form>
        {notice && (
          <div className={`notice ${missingTerm ? "notice-action" : ""}`} role="status">
            <p>{notice}</p>
            {missingTerm && (
              <button type="button" onClick={() => openRegistration(missingTerm)}>
                <Plus size={17} weight="bold" /> 登记“{missingTerm}”
              </button>
            )}
          </div>
        )}
      </section>

      <section className="concept-grid" aria-live="polite">
        <article className="concept-copy">
          <div className="concept-meta">
            <div className="concept-labels">
              <span>{concept.eyebrow}</span>
              {concept.community && (
                <small>
                  社区登记 · {concept.community.generationMode === "ai" ? "AI 草稿" : "自动草稿"} · {concept.community.status}
                </small>
              )}
            </div>
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

        <ConceptDiagram concept={concept} />
      </section>

      <section className="evidence" aria-label="论文与优秀案例">
        <div className="papers">
          <div className="section-heading">
            <div>
              <span className="section-kicker">PAPERS & SPECS</span>
              <h2>论文与标准</h2>
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
            )) : (
              <p className="empty-state">
                {concept.community ? "自动草稿不会编造论文；补充原始来源后，这里才会显示证据。" : "这个年份暂无收录论文。"}
              </p>
            )}
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
            {conceptCases.length > 0 ? conceptCases.map((item) => (
              <article className="case-row" key={item.name}>
                <div className="case-name"><GithubLogo size={30} weight="fill" /><strong>{item.name}</strong></div>
                <p>{item.use}</p>
                <div className="case-signal">
                  <a href={item.url} target="_blank" rel="noreferrer">GitHub · ★ {item.stars}</a>
                  <span>更新于 2026-07-13 · {item.status}</span>
                </div>
                <EvidenceLink href={item.url} label={`打开 GitHub 项目：${item.name}`} />
              </article>
            )) : <p className="empty-state">社区草稿暂不自动匹配案例，避免把高星项目错误关联到新概念。</p>}
          </div>
          <p className="method-note">Stars 是公开关注度信号，不等于技术质量；入选同时参考项目定位、近期维护状态与社区采用度。</p>
        </div>
      </section>

      <footer id="related" className="related">
        <span>概念词库 · {catalog.length}</span>
        <details className="concept-directory">
          <summary>浏览全部中英文概念</summary>
          <div className="directory-list">
            {catalog.filter((item) => item.key !== activeKey).map((item) => (
              <button type="button" key={item.key} onClick={() => chooseConcept(item.label)}>
                <LinkIcon size={18} /> {item.label}<small>{item.title}</small>
              </button>
            ))}
          </div>
        </details>
        <p id="about">论文与案例均提供原始来源；热度数据为 2026-07-13 的公开快照。</p>
      </footer>

      {registrationOpen && (
        <div className="register-backdrop" role="presentation">
          <section className="register-dialog" role="dialog" aria-modal="true" aria-labelledby="register-title">
            <div className="register-heading">
              <div>
                <span>COMMUNITY INBOX</span>
                <h2 id="register-title">登记一个没看懂的词</h2>
                <p>提交后，后台会去重、生成简洁解释与专属图示，并保存成可分享页面。</p>
              </div>
              <button className="register-close" type="button" onClick={() => setRegistrationOpen(false)} aria-label="关闭登记窗口">
                <X size={25} />
              </button>
            </div>

            <form className="register-form" onSubmit={submitRegistration}>
              <label>
                <span>概念词 <strong>必填</strong></span>
                <input
                  autoFocus
                  required
                  minLength={2}
                  maxLength={80}
                  value={registration.term}
                  onChange={(event) => setRegistration((current) => ({ ...current, term: event.target.value }))}
                  placeholder="例如 inference-time scaling / 推理时扩展"
                />
              </label>
              <label>
                <span>你在哪里看到它？ <small>推荐填写</small></span>
                <textarea
                  maxLength={600}
                  rows={4}
                  value={registration.context}
                  onChange={(event) => setRegistration((current) => ({ ...current, context: event.target.value }))}
                  placeholder="贴一小段原句，或说明它出现在论文、产品还是讨论中。上下文越清楚，解释越准确。"
                />
              </label>
              <label>
                <span>原始链接 <small>可选</small></span>
                <input
                  type="url"
                  maxLength={500}
                  value={registration.sourceUrl}
                  onChange={(event) => setRegistration((current) => ({ ...current, sourceUrl: event.target.value }))}
                  placeholder="https://…"
                />
              </label>
              <label className="form-honeypot" aria-hidden="true">
                <span>Website</span>
                <input
                  tabIndex={-1}
                  autoComplete="off"
                  value={registration.website}
                  onChange={(event) => setRegistration((current) => ({ ...current, website: event.target.value }))}
                />
              </label>
              {registrationError && <p className="register-error" role="alert">{registrationError}</p>}
              <div className="register-submit">
                <p><CheckCircle size={19} /> 不自动编造论文或 GitHub 案例；没有可靠来源时会明确标注“待核验”。</p>
                <button className="search-button" type="submit" disabled={registrationStatus === "submitting"}>
                  {registrationStatus === "submitting" ? "正在生成…" : "生成解释页"}
                  {registrationStatus !== "submitting" && <ArrowRight size={21} weight="bold" />}
                </button>
              </div>
            </form>
          </section>
        </div>
      )}
    </main>
  );
}
