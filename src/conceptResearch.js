const sourceCatalog = {
  nistGlossary: {
    title: "The Language of Trustworthy AI: An In-Depth Glossary of Terms",
    author: "NIST",
    year: 2023,
    kind: "权威术语表",
    url: "https://doi.org/10.6028/NIST.AI.100-3",
    note: "NIST 汇总跨学科语境中的 AI 与可信 AI 术语，适合处理没有唯一学术定义的基础概念。",
  },
  iso22989: {
    title: "ISO/IEC 22989: Artificial intelligence — Concepts and terminology",
    author: "ISO / IEC",
    year: 2022,
    kind: "国际标准",
    url: "https://www.iso.org/standard/74296.html",
    note: "该标准给出 AI、机器学习、模型、训练与推理等核心概念的规范化术语体系。",
  },
  nistRmf: {
    title: "Artificial Intelligence Risk Management Framework (AI RMF 1.0)",
    author: "NIST",
    year: 2023,
    kind: "治理框架",
    url: "https://doi.org/10.6028/NIST.AI.100-1",
    note: "NIST AI RMF 是解释可信、负责、安全与风险治理概念的权威公共框架。",
  },
  nistGenAi: {
    title: "Artificial Intelligence Risk Management Framework: Generative AI Profile",
    author: "NIST",
    year: 2024,
    kind: "权威指南",
    url: "https://doi.org/10.6028/NIST.AI.600-1",
    note: "该文档专门界定生成式 AI 的幻觉、内容风险、数据与评测问题。",
  },
  nistAdversarial: {
    title: "Adversarial Machine Learning: A Taxonomy and Terminology of Attacks and Mitigations",
    author: "NIST",
    year: 2025,
    kind: "安全分类标准",
    url: "https://doi.org/10.6028/NIST.AI.100-2e2025",
    note: "NIST 统一了数据投毒、规避、滥用与隐私攻击等对抗机器学习术语。",
  },
  owaspPrompt: {
    title: "LLM01:2025 Prompt Injection",
    author: "OWASP GenAI Security Project",
    year: 2025,
    kind: "安全标准",
    url: "https://genai.owasp.org/llmrisk/llm01-prompt-injection/",
    note: "OWASP 明确区分提示注入、间接注入与越狱，并给出实际风险边界。",
  },
  openAiAgents: {
    title: "A Practical Guide to Building Agents",
    author: "OpenAI",
    year: 2025,
    kind: "官方工程指南",
    url: "https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf",
    note: "该指南从模型、工具、指令、循环、编排与护栏解释生产级智能体的组成。",
  },
  agentSurvey: {
    title: "The Rise and Potential of Large Language Model Based Agents: A Survey",
    author: "Xi et al.",
    year: 2023,
    kind: "综述论文",
    url: "https://arxiv.org/abs/2309.07864",
    note: "该综述系统梳理了 LLM 智能体的感知、规划、记忆、行动与多智能体结构。",
  },
  mcpSpec: {
    title: "Model Context Protocol Specification",
    author: "Model Context Protocol",
    year: 2025,
    kind: "官方协议规范",
    url: "https://modelcontextprotocol.io/specification/2025-06-18/",
    note: "MCP 规范是协议消息、主机—客户端—服务端架构以及工具、资源、提示语义的来源。",
  },
  openTelemetry: {
    title: "OpenTelemetry Observability Primer",
    author: "CNCF OpenTelemetry",
    year: 2026,
    kind: "官方技术规范",
    url: "https://opentelemetry.io/docs/concepts/observability-primer/",
    note: "OpenTelemetry 用日志、指标、Span 与 Trace 给出可观测性和分布式追踪的工程定义。",
  },
  rfc9110: {
    title: "RFC 9110: HTTP Semantics",
    author: "IETF",
    year: 2022,
    kind: "互联网标准",
    url: "https://www.rfc-editor.org/rfc/rfc9110",
    note: "RFC 9110 对幂等、可安全重试的方法与 HTTP 语义给出规范定义。",
  },
  rfc9111: {
    title: "RFC 9111: HTTP Caching",
    author: "IETF",
    year: 2022,
    kind: "互联网标准",
    url: "https://www.rfc-editor.org/rfc/rfc9111",
    note: "RFC 9111 是缓存存储、复用、验证与失效语义的权威规范。",
  },
  sreBook: {
    title: "Site Reliability Engineering — Service Level Objectives",
    author: "Google",
    year: 2016,
    kind: "权威工程手册",
    url: "https://sre.google/sre-book/service-level-objectives/",
    note: "Google SRE 从用户体验与容量角度解释延迟、吞吐和服务指标。",
  },
  w3cRdf: {
    title: "RDF 1.1 Concepts and Abstract Syntax",
    author: "W3C",
    year: 2014,
    kind: "Web 标准",
    url: "https://www.w3.org/TR/rdf11-concepts/",
    note: "W3C RDF 标准用实体、关系与三元组给出语义网和图式知识表示的规范基础。",
  },
  jsonSchema: {
    title: "JSON Schema Specification",
    author: "JSON Schema",
    year: 2020,
    kind: "开放规范",
    url: "https://json-schema.org/specification",
    note: "JSON Schema 定义机器可验证的字段、类型与约束，是结构化输出的重要依据。",
  },
  mlCommons: {
    title: "MLPerf Benchmark Suite",
    author: "MLCommons",
    year: 2025,
    kind: "行业基准规范",
    url: "https://mlcommons.org/benchmarks/",
    note: "MLCommons 以可复现任务、数据、规则和报告要求规范模型与系统基准测试。",
  },
  deepLearningBook: {
    title: "Deep Learning",
    author: "Goodfellow, Bengio & Courville",
    year: 2016,
    kind: "权威教材",
    url: "https://www.deeplearningbook.org/",
    note: "该教材系统定义神经网络、优化、正则化、概率输出和深度学习训练的基础术语。",
  },
  esl: {
    title: "The Elements of Statistical Learning",
    author: "Hastie, Tibshirani & Friedman",
    year: 2009,
    kind: "权威教材",
    url: "https://hastie.su.domains/ElemStatLearn/",
    note: "该书是分类、回归、树模型、集成方法、偏差—方差与模型评估的经典依据。",
  },
  irBook: {
    title: "Introduction to Information Retrieval",
    author: "Manning, Raghavan & Schütze",
    year: 2008,
    kind: "权威教材",
    url: "https://nlp.stanford.edu/IR-book/",
    note: "该书给出检索、索引、排序、查询扩展以及 Precision / Recall 的标准解释。",
  },
  nlpBook: {
    title: "Speech and Language Processing",
    author: "Jurafsky & Martin",
    year: 2025,
    kind: "权威教材",
    url: "https://web.stanford.edu/~jurafsky/slp3/",
    note: "该书系统解释 NLP、语言模型、解码、语音、信息抽取与生成任务。",
  },
  rlBook: {
    title: "Reinforcement Learning: An Introduction (2nd ed.)",
    author: "Sutton & Barto",
    year: 2018,
    kind: "权威教材",
    url: "http://incompleteideas.net/book/the-book-2nd.html",
    note: "该书是状态、动作、策略、奖励、价值函数和强化学习目标的公认权威来源。",
  },
  dartmouth: {
    title: "A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence",
    author: "McCarthy, Minsky, Rochester & Shannon",
    year: 1955,
    kind: "术语源头",
    url: "http://www-formal.stanford.edu/jmc/history/dartmouth/dartmouth.html",
    note: "这份提案首次以 Artificial Intelligence 命名研究领域，并组织了 1956 年达特茅斯会议。",
  },
  turing1950: {
    title: "Computing Machinery and Intelligence",
    author: "Alan Turing",
    year: 1950,
    kind: "奠基论文",
    url: "https://doi.org/10.1093/mind/LIX.236.433",
    note: "图灵以“模仿游戏”替代抽象的机器思维争论，形成后来所谓图灵测试的原始版本。",
  },
  samuel1959: {
    title: "Some Studies in Machine Learning Using the Game of Checkers",
    author: "Arthur Samuel",
    year: 1959,
    kind: "早期奠基论文",
    url: "https://doi.org/10.1147/rd.33.0210",
    note: "Samuel 的跳棋程序工作是 machine learning 术语和“机器从经验改进”思想的早期代表。",
  },
  mccullochPitts: {
    title: "A Logical Calculus of the Ideas Immanent in Nervous Activity",
    author: "McCulloch & Pitts",
    year: 1943,
    kind: "奠基论文",
    url: "https://doi.org/10.1007/BF02478259",
    note: "该文用形式化计算单元描述神经活动，是人工神经网络的历史起点之一。",
  },
  deepLearning2015: {
    title: "Deep learning",
    author: "LeCun, Bengio & Hinton",
    year: 2015,
    kind: "权威综述",
    url: "https://doi.org/10.1038/nature14539",
    note: "Nature 综述以统一框架解释深度学习、表示学习、CNN、RNN 与反向传播。",
  },
  word2vec: {
    title: "Efficient Estimation of Word Representations in Vector Space",
    author: "Mikolov et al.",
    year: 2013,
    kind: "奠基论文",
    url: "https://arxiv.org/abs/1301.3781",
    note: "该文让词向量的分布式表示成为主流，并直观展示语义关系可在向量空间中计算。",
  },
  bpe: {
    title: "Neural Machine Translation of Rare Words with Subword Units",
    author: "Sennrich, Haddow & Birch",
    year: 2016,
    kind: "奠基论文",
    url: "https://aclanthology.org/P16-1162/",
    note: "该文把 BPE 引入神经机器翻译，奠定现代子词 token 与词表构造的常见方案。",
  },
  sentencePiece: {
    title: "SentencePiece: A simple and language independent subword tokenizer and detokenizer",
    author: "Kudo & Richardson",
    year: 2018,
    kind: "工具论文",
    url: "https://aclanthology.org/D18-2012/",
    note: "SentencePiece 给出直接从原始文本训练子词分词器与词表的可复现实现。",
  },
  transformer: {
    title: "Attention Is All You Need",
    author: "Vaswani et al.",
    year: 2017,
    kind: "原始论文",
    url: "https://proceedings.neurips.cc/paper_files/paper/2017/hash/3f5ee243547dee91fbd053c1c4a845aa-Abstract.html",
    note: "该文提出 Transformer，并给出多头注意力、位置编码和编码器—解码器结构的原始定义。",
  },
  attention: {
    title: "Neural Machine Translation by Jointly Learning to Align and Translate",
    author: "Bahdanau, Cho & Bengio",
    year: 2015,
    kind: "奠基论文",
    url: "https://arxiv.org/abs/1409.0473",
    note: "该文把可学习的软对齐机制用于翻译，是现代神经注意力的关键源头。",
  },
  seq2seq: {
    title: "Sequence to Sequence Learning with Neural Networks",
    author: "Sutskever, Vinyals & Le",
    year: 2014,
    kind: "奠基论文",
    url: "https://arxiv.org/abs/1409.3215",
    note: "该文确立编码器把输入压成表示、解码器逐步生成输出的经典序列到序列范式。",
  },
  nucleusSampling: {
    title: "The Curious Case of Neural Text Degeneration",
    author: "Holtzman et al.",
    year: 2020,
    kind: "原始论文",
    url: "https://arxiv.org/abs/1904.09751",
    note: "该文系统比较贪心、束搜索、Top-k 与 nucleus sampling，并提出 Top-p 采样。",
  },
  scalingLaws: {
    title: "Scaling Laws for Neural Language Models",
    author: "Kaplan et al.",
    year: 2020,
    kind: "奠基论文",
    url: "https://arxiv.org/abs/2001.08361",
    note: "该文量化模型参数、数据、计算与语言模型损失之间的经验幂律关系。",
  },
  bert: {
    title: "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
    author: "Devlin et al.",
    year: 2019,
    kind: "奠基论文",
    url: "https://aclanthology.org/N19-1423/",
    note: "BERT 清楚区分大规模预训练与下游微调，推动预训练—适配范式成为主流。",
  },
  flan: {
    title: "Finetuned Language Models Are Zero-Shot Learners",
    author: "Wei et al.",
    year: 2022,
    kind: "奠基论文",
    url: "https://arxiv.org/abs/2109.01652",
    note: "FLAN 系统展示用自然语言任务说明进行指令微调可提升未见任务的零样本能力。",
  },
  lora: {
    title: "LoRA: Low-Rank Adaptation of Large Language Models",
    author: "Hu et al.",
    year: 2022,
    kind: "原始论文",
    url: "https://arxiv.org/abs/2106.09685",
    note: "该文提出冻结原权重、只训练低秩增量矩阵的 LoRA 方法。",
  },
  distillation: {
    title: "Distilling the Knowledge in a Neural Network",
    author: "Hinton, Vinyals & Dean",
    year: 2015,
    kind: "奠基论文",
    url: "https://arxiv.org/abs/1503.02531",
    note: "该文系统化教师模型以软目标向学生模型传递知识的蒸馏范式。",
  },
  gptq: {
    title: "GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers",
    author: "Frantar et al.",
    year: 2023,
    kind: "代表论文",
    url: "https://arxiv.org/abs/2210.17323",
    note: "GPTQ 给出大模型训练后低比特量化的经典工程方法和误差权衡。",
  },
  pruning: {
    title: "Learning both Weights and Connections for Efficient Neural Networks",
    author: "Han et al.",
    year: 2015,
    kind: "奠基论文",
    url: "https://arxiv.org/abs/1506.02626",
    note: "该文通过删除不重要连接并再训练，形成现代神经网络剪枝的代表性流程。",
  },
  backprop: {
    title: "Learning representations by back-propagating errors",
    author: "Rumelhart, Hinton & Williams",
    year: 1986,
    kind: "奠基论文",
    url: "https://doi.org/10.1038/323533a0",
    note: "该文推动误差反向传播成为多层神经网络训练的核心方法。",
  },
  adam: {
    title: "Adam: A Method for Stochastic Optimization",
    author: "Kingma & Ba",
    year: 2015,
    kind: "原始论文",
    url: "https://arxiv.org/abs/1412.6980",
    note: "该文提出按参数自适应一阶矩与二阶矩估计更新学习率的 Adam 优化器。",
  },
  curriculum: {
    title: "Curriculum Learning",
    author: "Bengio et al.",
    year: 2009,
    kind: "原始论文",
    url: "https://doi.org/10.1145/1553374.1553380",
    note: "该文把从容易样本逐步过渡到困难样本的训练安排明确为课程学习。",
  },
  continual: {
    title: "Overcoming catastrophic forgetting in neural networks",
    author: "Kirkpatrick et al.",
    year: 2017,
    kind: "代表论文",
    url: "https://doi.org/10.1073/pnas.1611835114",
    note: "该文以弹性权重固化展示持续学习如何保护旧任务能力并缓解灾难性遗忘。",
  },
  activeLearning: {
    title: "Active Learning Literature Survey",
    author: "Burr Settles",
    year: 2009,
    kind: "权威综述",
    url: "https://minds.wisconsin.edu/handle/1793/60660",
    note: "该综述系统定义由模型选择最有信息量样本、再请求标注的主动学习循环。",
  },
  datasheets: {
    title: "Datasheets for Datasets",
    author: "Gebru et al.",
    year: 2021,
    kind: "数据治理论文",
    url: "https://arxiv.org/abs/1803.09010",
    note: "该文推动记录数据来源、采集、标注、用途与限制，成为数据策展和治理的重要依据。",
  },
  transferLearning: {
    title: "A Survey on Transfer Learning",
    author: "Pan & Yang",
    year: 2010,
    kind: "权威综述",
    url: "https://doi.org/10.1109/TKDE.2009.191",
    note: "该综述明确源域、目标域与知识迁移的关系，是迁移学习的标准分类来源。",
  },
  foundationModels: {
    title: "On the Opportunities and Risks of Foundation Models",
    author: "Bommasani et al.",
    year: 2021,
    kind: "术语奠基报告",
    url: "https://arxiv.org/abs/2108.07258",
    note: "该报告系统提出并界定基础模型，强调规模化训练、广泛适配与社会影响。",
  },
  gpt3: {
    title: "Language Models are Few-Shot Learners",
    author: "Brown et al.",
    year: 2020,
    kind: "里程碑论文",
    url: "https://arxiv.org/abs/2005.14165",
    note: "GPT-3 展示大规模自回归语言模型通过上下文完成多任务的能力，是现代 LLM 语义的重要参照。",
  },
  clip: {
    title: "Learning Transferable Visual Models From Natural Language Supervision",
    author: "Radford et al.",
    year: 2021,
    kind: "原始论文",
    url: "https://arxiv.org/abs/2103.00020",
    note: "该文提出 CLIP，用对比学习把图像与文本映射到共享语义空间。",
  },
  moe: {
    title: "Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer",
    author: "Shazeer et al.",
    year: 2017,
    kind: "奠基论文",
    url: "https://arxiv.org/abs/1701.06538",
    note: "该文提出可训练门控稀疏选择专家的现代 MoE 层，并展示容量与计算解耦。",
  },
  diffusion: {
    title: "Deep Unsupervised Learning using Nonequilibrium Thermodynamics",
    author: "Sohl-Dickstein et al.",
    year: 2015,
    kind: "奠基论文",
    url: "https://arxiv.org/abs/1503.03585",
    note: "该文建立逐步加噪与反向去噪的生成建模框架，是现代扩散模型的源头。",
  },
  worldModels: {
    title: "World Models",
    author: "Ha & Schmidhuber",
    year: 2018,
    kind: "代表论文",
    url: "https://arxiv.org/abs/1803.10122",
    note: "该文用潜在动力学模型预测环境变化，直观展示智能体如何在内部世界模型中规划。",
  },
  mamba: {
    title: "Mamba: Linear-Time Sequence Modeling with Selective State Spaces",
    author: "Gu & Dao",
    year: 2023,
    kind: "原始论文",
    url: "https://arxiv.org/abs/2312.00752",
    note: "该文提出选择性状态空间机制与 Mamba 架构，探索 Transformer 之外的线性时间序列建模。",
  },
  testTimeCompute: {
    title: "Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters",
    author: "Snell et al.",
    year: 2024,
    kind: "代表论文",
    url: "https://arxiv.org/abs/2408.03314",
    note: "该文系统研究在推理阶段增加搜索、采样与验证预算的收益。",
  },
  instructGpt: {
    title: "Training language models to follow instructions with human feedback",
    author: "Ouyang et al.",
    year: 2022,
    kind: "奠基论文",
    url: "https://arxiv.org/abs/2203.02155",
    note: "该文清楚展示 SFT、奖励模型与 PPO 三阶段 RLHF 流程。",
  },
  constitutionalAi: {
    title: "Constitutional AI: Harmlessness from AI Feedback",
    author: "Bai et al.",
    year: 2022,
    kind: "原始论文",
    url: "https://arxiv.org/abs/2212.08073",
    note: "该文提出以书面原则驱动自我批评、修订和 AI 反馈训练的宪法式 AI。",
  },
  dpo: {
    title: "Direct Preference Optimization: Your Language Model is Secretly a Reward Model",
    author: "Rafailov et al.",
    year: 2023,
    kind: "原始论文",
    url: "https://arxiv.org/abs/2305.18290",
    note: "该文把偏好优化改写为直接的分类式目标，绕开显式奖励模型和在线强化学习。",
  },
  ppo: {
    title: "Proximal Policy Optimization Algorithms",
    author: "Schulman et al.",
    year: 2017,
    kind: "原始论文",
    url: "https://arxiv.org/abs/1707.06347",
    note: "该文提出限制策略更新幅度的 PPO，兼顾训练稳定性与实现简洁性。",
  },
  deepSeekMath: {
    title: "DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models",
    author: "Shao et al.",
    year: 2024,
    kind: "方法来源",
    url: "https://arxiv.org/abs/2402.03300",
    note: "该文提出 GRPO，用组内相对奖励代替独立价值模型来降低强化学习训练成本。",
  },
  redTeam: {
    title: "Red Teaming Language Models with Language Models",
    author: "Perez et al.",
    year: 2022,
    kind: "代表论文",
    url: "https://arxiv.org/abs/2202.03286",
    note: "该文把语言模型用于自动发现另一模型的有害行为，是现代 LLM 红队方法的代表。",
  },
  calibration: {
    title: "On Calibration of Modern Neural Networks",
    author: "Guo et al.",
    year: 2017,
    kind: "奠基论文",
    url: "https://proceedings.mlr.press/v70/guo17a.html",
    note: "该文系统指出现代神经网络概率常失准，并推广温度缩放等校准方法。",
  },
  circuits: {
    title: "Zoom In: An Introduction to Circuits",
    author: "Olah et al.",
    year: 2020,
    kind: "奠基研究",
    url: "https://distill.pub/2020/circuits/zoom-in/",
    note: "该研究用特征与电路分析网络内部机制，是机制可解释性的代表性来源。",
  },
  modelCollapse: {
    title: "The Curse of Recursion: Training on Generated Data Makes Models Forget",
    author: "Shumailov et al.",
    year: 2024,
    kind: "术语来源论文",
    url: "https://doi.org/10.1038/s41586-024-07566-y",
    note: "该文分析反复用生成数据训练导致分布尾部丢失并最终模型坍塌的机制。",
  },
  rag: {
    title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
    author: "Lewis et al.",
    year: 2020,
    kind: "原始论文",
    url: "https://arxiv.org/abs/2005.11401",
    note: "该文确立检索外部文档、再由生成模型依据证据作答的 RAG 范式。",
  },
  dpr: {
    title: "Dense Passage Retrieval for Open-Domain Question Answering",
    author: "Karpukhin et al.",
    year: 2020,
    kind: "奠基论文",
    url: "https://arxiv.org/abs/2004.04906",
    note: "DPR 用双编码器和稠密向量完成开放域段落检索，奠定现代语义检索基础。",
  },
  hnsw: {
    title: "Efficient and robust approximate nearest neighbor search using Hierarchical Navigable Small World graphs",
    author: "Malkov & Yashunin",
    year: 2018,
    kind: "索引论文",
    url: "https://arxiv.org/abs/1603.09320",
    note: "HNSW 是许多向量数据库实现高效近邻搜索的核心索引算法。",
  },
  bm25: {
    title: "The Probabilistic Relevance Framework: BM25 and Beyond",
    author: "Robertson & Zaragoza",
    year: 2009,
    kind: "权威论文",
    url: "https://doi.org/10.1561/1500000019",
    note: "该文系统总结 BM25 的概率相关性框架，是关键词检索与混合检索的核心依据。",
  },
  sbert: {
    title: "Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks",
    author: "Reimers & Gurevych",
    year: 2019,
    kind: "代表论文",
    url: "https://aclanthology.org/D19-1410/",
    note: "SBERT 让句子级向量可直接比较，推动语义搜索与向量召回成为常用方案。",
  },
  hyde: {
    title: "Precise Zero-Shot Dense Retrieval without Relevance Labels",
    author: "Gao et al.",
    year: 2023,
    kind: "原始论文",
    url: "https://aclanthology.org/2023.acl-long.99/",
    note: "该文提出先生成假设文档、再用其向量检索真实文档的 HyDE 方法。",
  },
  graphRag: {
    title: "From Local to Global: A Graph RAG Approach to Query-Focused Summarization",
    author: "Edge et al.",
    year: 2024,
    kind: "原始论文",
    url: "https://arxiv.org/abs/2404.16130",
    note: "该文提出从实体关系图与社区摘要回答全局问题的 GraphRAG 方法。",
  },
  cot: {
    title: "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models",
    author: "Wei et al.",
    year: 2022,
    kind: "原始论文",
    url: "https://arxiv.org/abs/2201.11903",
    note: "该文用中间推理示例显著提升复杂任务表现，确立思维链提示范式。",
  },
  selfConsistency: {
    title: "Self-Consistency Improves Chain of Thought Reasoning in Language Models",
    author: "Wang et al.",
    year: 2023,
    kind: "原始论文",
    url: "https://arxiv.org/abs/2203.11171",
    note: "该文提出采样多条推理路径并对最终答案投票的自洽方法。",
  },
  treeThoughts: {
    title: "Tree of Thoughts: Deliberate Problem Solving with Large Language Models",
    author: "Yao et al.",
    year: 2023,
    kind: "原始论文",
    url: "https://arxiv.org/abs/2305.10601",
    note: "该文把线性推理扩展为可生成、评估、搜索和回退的思维树。",
  },
  reflexion: {
    title: "Reflexion: Language Agents with Verbal Reinforcement Learning",
    author: "Shinn et al.",
    year: 2023,
    kind: "代表论文",
    url: "https://arxiv.org/abs/2303.11366",
    note: "该文让智能体把失败总结为文字反馈并写入记忆，形成可复用的反思机制。",
  },
  debate: {
    title: "AI safety via debate",
    author: "Irving, Christiano & Amodei",
    year: 2018,
    kind: "概念论文",
    url: "https://arxiv.org/abs/1805.00899",
    note: "该文提出让模型互相辩论、由人判断胜者，以暴露单个回答难发现的问题。",
  },
  speculative: {
    title: "Fast Inference from Transformers via Speculative Decoding",
    author: "Leviathan, Kalman & Matias",
    year: 2023,
    kind: "原始论文",
    url: "https://arxiv.org/abs/2211.17192",
    note: "该文用小模型先提出候选、大模型并行验证，在不改变目标分布的前提下加速生成。",
  },
  flashAttention: {
    title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness",
    author: "Dao et al.",
    year: 2022,
    kind: "原始论文",
    url: "https://arxiv.org/abs/2205.14135",
    note: "该文通过减少 GPU 高带宽内存读写实现精确注意力加速。",
  },
  ctc: {
    title: "Connectionist Temporal Classification",
    author: "Graves et al.",
    year: 2006,
    kind: "奠基论文",
    url: "https://www.cs.toronto.edu/~graves/icml_2006.pdf",
    note: "CTC 允许不预先对齐输入帧与标签序列，是现代端到端语音识别的重要基础。",
  },
  showAndTell: {
    title: "Show and Tell: A Neural Image Caption Generator",
    author: "Vinyals et al.",
    year: 2015,
    kind: "奠基论文",
    url: "https://arxiv.org/abs/1411.4555",
    note: "该文以视觉编码器连接语言解码器，形成神经图像描述生成的经典范式。",
  },
  fcn: {
    title: "Fully Convolutional Networks for Semantic Segmentation",
    author: "Long, Shelhamer & Darrell",
    year: 2015,
    kind: "奠基论文",
    url: "https://arxiv.org/abs/1411.4038",
    note: "该文把分类网络改造成像素到像素预测网络，奠定现代语义分割。",
  },
  rt2: {
    title: "RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control",
    author: "Brohan et al.",
    year: 2023,
    kind: "代表论文",
    url: "https://arxiv.org/abs/2307.15818",
    note: "RT-2 把视觉语言模型输出空间扩展到机器人动作，展示通用知识到控制策略的迁移。",
  },
  bleu: {
    title: "BLEU: a Method for Automatic Evaluation of Machine Translation",
    author: "Papineni et al.",
    year: 2002,
    kind: "原始论文",
    url: "https://aclanthology.org/P02-1040/",
    note: "该文提出 BLEU，以带惩罚的 n-gram 重合度快速评估机器翻译。",
  },
  rouge: {
    title: "ROUGE: A Package for Automatic Evaluation of Summaries",
    author: "Lin",
    year: 2004,
    kind: "原始论文",
    url: "https://aclanthology.org/W04-1013/",
    note: "该文提出 ROUGE 指标家族，以参考摘要覆盖率衡量自动摘要。",
  },
  humanEval: {
    title: "Evaluating Large Language Models Trained on Code",
    author: "Chen et al.",
    year: 2021,
    kind: "指标来源论文",
    url: "https://arxiv.org/abs/2107.03374",
    note: "该文发布 HumanEval，并给出代码生成中 Pass@k 的无偏估计。",
  },
  dropout: {
    title: "Dropout: A Simple Way to Prevent Neural Networks from Overfitting",
    author: "Srivastava et al.",
    year: 2014,
    kind: "原始论文",
    url: "https://jmlr.org/papers/v15/srivastava14a.html",
    note: "该文系统提出训练时随机失活神经元以减少共适应和过拟合。",
  },
  randomForest: {
    title: "Random Forests",
    author: "Leo Breiman",
    year: 2001,
    kind: "原始论文",
    url: "https://doi.org/10.1023/A:1010933404324",
    note: "Breiman 明确定义随机森林为具有随机性的树集成，并分析其泛化性质。",
  },
  svm: {
    title: "Support-vector networks",
    author: "Cortes & Vapnik",
    year: 1995,
    kind: "原始论文",
    url: "https://doi.org/10.1007/BF00994018",
    note: "该文提出以最大间隔和核方法训练支持向量网络的经典形式。",
  },
  pca: {
    title: "On Lines and Planes of Closest Fit to Systems of Points in Space",
    author: "Karl Pearson",
    year: 1901,
    kind: "历史源头论文",
    url: "https://doi.org/10.1080/14786440109462720",
    note: "Pearson 以最小化投影误差的方式提出主轴拟合，是 PCA 的历史源头。",
  },
  lda: {
    title: "Latent Dirichlet Allocation",
    author: "Blei, Ng & Jordan",
    year: 2003,
    kind: "奠基论文",
    url: "https://jmlr.org/papers/v3/blei03a.html",
    note: "LDA 用文档—主题—词的生成概率模型推动现代主题建模。",
  },
  federated: {
    title: "Communication-Efficient Learning of Deep Networks from Decentralized Data",
    author: "McMahan et al.",
    year: 2017,
    kind: "术语奠基论文",
    url: "https://proceedings.mlr.press/v54/mcmahan17a.html",
    note: "该文提出 Federated Averaging，并把联邦学习确立为数据留在设备端的协同训练范式。",
  },
  maml: {
    title: "Model-Agnostic Meta-Learning for Fast Adaptation of Deep Networks",
    author: "Finn, Abbeel & Levine",
    year: 2017,
    kind: "代表论文",
    url: "https://proceedings.mlr.press/v70/finn17a.html",
    note: "MAML 直接优化一个容易被少量梯度步骤适配的初始化，清楚体现“学习如何学习”。",
  },
  multitask: {
    title: "Multitask Learning",
    author: "Rich Caruana",
    year: 1997,
    kind: "奠基论文",
    url: "https://doi.org/10.1023/A:1007379606734",
    note: "该文系统解释相关任务共享表示如何产生归纳迁移。",
  },
  gan: {
    title: "Generative Adversarial Nets",
    author: "Goodfellow et al.",
    year: 2014,
    kind: "原始论文",
    url: "https://proceedings.neurips.cc/paper/5423-generative-adversarial-nets",
    note: "该文提出生成器与判别器的极小极大博弈，确立 GAN 框架。",
  },
  lstm: {
    title: "Long Short-Term Memory",
    author: "Hochreiter & Schmidhuber",
    year: 1997,
    kind: "原始论文",
    url: "https://doi.org/10.1162/neco.1997.9.8.1735",
    note: "该文提出带门控与恒定误差流的 LSTM，以缓解长依赖训练困难。",
  },
  cnn: {
    title: "Gradient-Based Learning Applied to Document Recognition",
    author: "LeCun et al.",
    year: 1998,
    kind: "奠基论文",
    url: "http://yann.lecun.com/exdb/publis/pdf/lecun-98.pdf",
    note: "该文以 LeNet 系统展示卷积、共享权重、池化与端到端反向传播。",
  },
  auc: {
    title: "The meaning and use of the area under a receiver operating characteristic curve",
    author: "Hanley & McNeil",
    year: 1982,
    kind: "经典论文",
    url: "https://doi.org/10.1148/radiology.143.1.7063747",
    note: "该文给出 ROC AUC 的概率解释并规范其在诊断分类中的使用。",
  },
  sentiment: {
    title: "Thumbs up? Sentiment Classification using Machine Learning Techniques",
    author: "Pang, Lee & Vaithyanathan",
    year: 2002,
    kind: "奠基论文",
    url: "https://aclanthology.org/W02-1011/",
    note: "该文把电影评论情感倾向作为监督文本分类任务，推动现代情感分析。",
  },
  ner: {
    title: "Message Understanding Conference-6: A Brief History",
    author: "Grishman & Sundheim",
    year: 1996,
    kind: "任务来源论文",
    url: "https://aclanthology.org/C96-1079/",
    note: "MUC-6 明确了识别人名、组织、地点等 Named Entity 的评测任务。",
  },
  groupLens: {
    title: "GroupLens: An Open Architecture for Collaborative Filtering of Netnews",
    author: "Resnick et al.",
    year: 1994,
    kind: "奠基论文",
    url: "https://doi.org/10.1145/192844.192905",
    note: "GroupLens 把基于群体行为预测个人偏好的方法明确称为协同过滤。",
  },
  rankNet: {
    title: "Learning to Rank using Gradient Descent",
    author: "Burges et al.",
    year: 2005,
    kind: "奠基论文",
    url: "https://www.microsoft.com/en-us/research/publication/learning-to-rank-using-gradient-descent/",
    note: "RankNet 用成对偏好与梯度下降直接学习排序函数，是排序学习的重要源头。",
  },
  swarm: {
    title: "Particle Swarm Optimization",
    author: "Kennedy & Eberhart",
    year: 1995,
    kind: "奠基论文",
    url: "https://doi.org/10.1109/ICNN.1995.488968",
    note: "该文以群体个体共享局部信息的方式提出粒子群优化，成为群体智能代表方法。",
  },
};

const bindings = new Map();

function bind(keys, origin, authority = origin, mode = "mechanism", originType = "foundational") {
  const keyList = Array.isArray(keys) ? keys : keys.split(/\s+/).filter(Boolean);
  for (const key of keyList) {
    if (bindings.has(key)) throw new Error(`Duplicate research binding: ${key}`);
    bindings.set(key, { origin, authority, mode, originType });
  }
}

bind("loop harness scaffolding verifier skill subagent planner-executor guardrail memory tool-use multi-agent computer-use context-engineering workflow orchestration human-in-the-loop handoff delegation sandbox permissions state-machine", "agentSurvey", "openAiAgents", "system", "evolved");
bind("agent", "agentSurvey", "openAiAgents", "history", "evolved");
bind(["test-time compute"], "testTimeCompute", "testTimeCompute", "mechanism", "first");
bind("mcp", "mcpSpec", "mcpSpec", "system", "first");
bind("observability tracing", "openTelemetry", "openTelemetry", "system", "standard");
bind("latency throughput", "sreBook", "sreBook", "metric", "evolved");
bind("retry idempotency", "rfc9110", "rfc9110", "system", "standard");
bind("cache", "rfc9111", "rfc9111", "system", "standard");
bind("semantic-cache", "rfc9111", "irBook", "system", "evolved");
bind("eval-harness benchmark evaluation eval-set", "mlCommons", "mlCommons", "metric", "standard");

bind("artificial-intelligence", "dartmouth", "iso22989", "history", "first");
bind("turing-test", "turing1950", "nistGlossary", "history", "first");
bind("machine-learning", "samuel1959", "iso22989", "history", "evolved");
bind("deep-learning", "deepLearning2015", "deepLearningBook", "history", "evolved");
bind("generative-ai", "foundationModels", "nistGenAi", "history", "evolved");
bind("agi narrow-ai", "dartmouth", "nistGlossary", "contrast", "evolved");
bind("algorithm model feature parameter hyperparameter", "deepLearningBook", "iso22989", "contrast", "evolved");
bind("token vocabulary", "bpe", "nlpBook", "mechanism", "evolved");
bind("tokenizer", "sentencePiece", "nlpBook", "mechanism", "evolved");
bind("embedding", "word2vec", "nlpBook", "mechanism", "foundational");
bind("latent-space autoencoder", "deepLearningBook", "deepLearningBook", "mechanism", "evolved");
bind("checkpoint", "deepLearningBook", "deepLearningBook", "system", "evolved");
bind("transformer self-attention cross-attention positional-encoding", "transformer", "transformer", "mechanism", "first");
bind("attention", "attention", "transformer", "mechanism", "foundational");
bind("context-window", "transformer", "nlpBook", "system", "evolved");
bind("prompt system-prompt completion", "gpt3", "openAiAgents", "contrast", "evolved");
bind("inference logit softmax", "deepLearningBook", "deepLearningBook", "mechanism", "evolved");
bind("temperature top-k-sampling top-p-sampling", "nucleusSampling", "nlpBook", "contrast", "foundational");
bind("perplexity", "scalingLaws", "nlpBook", "metric", "evolved");
bind("nlp natural-language-generation", "nlpBook", "nlpBook", "task", "evolved");
bind("sentiment-analysis", "sentiment", "nlpBook", "task", "first");
bind("time-series", "esl", "esl", "data", "evolved");

bind("pretraining fine-tuning", "bert", "foundationModels", "contrast", "evolved");
bind("sft instruction-tuning", "flan", "instructGpt", "data", "evolved");
bind("lora peft", "lora", "lora", "mechanism", "first");
bind("distillation", "distillation", "deepLearningBook", "mechanism", "foundational");
bind("quantization", "gptq", "deepLearningBook", "mechanism", "evolved");
bind("pruning", "pruning", "deepLearningBook", "mechanism", "foundational");
bind("gradient-descent backpropagation", "backprop", "deepLearningBook", "mechanism", "foundational");
bind("loss-function optimizer learning-rate batch epoch", "adam", "deepLearningBook", "mechanism", "evolved");
bind("curriculum-learning", "curriculum", "deepLearningBook", "data", "first");
bind("continual-learning catastrophic-forgetting", "continual", "deepLearningBook", "risk", "evolved");
bind("active-learning", "activeLearning", "activeLearning", "data", "evolved");
bind("synthetic-data data-curation data-labeling", "datasheets", "nistGenAi", "data", "evolved");
bind("data-augmentation", "deepLearning2015", "deepLearningBook", "data", "evolved");
bind("transfer-learning", "transferLearning", "transferLearning", "contrast", "evolved");
bind("supervised-learning unsupervised-learning semi-supervised-learning", "deepLearningBook", "iso22989", "contrast", "evolved");
bind("reinforcement-learning value-function reward-function", "rlBook", "rlBook", "mechanism", "evolved");
bind("regularization overfitting underfitting", "deepLearningBook", "esl", "contrast", "evolved");
bind("dropout", "dropout", "deepLearningBook", "mechanism", "first");
bind("cross-validation validation", "esl", "esl", "metric", "evolved");
bind("feature-engineering", "esl", "esl", "data", "evolved");
bind("ensemble-learning boosting bias-variance-tradeoff", "esl", "esl", "contrast", "evolved");
bind("federated-learning", "federated", "federated", "system", "first");
bind("meta-learning", "maml", "maml", "mechanism", "evolved");
bind("multi-task-learning", "multitask", "multitask", "contrast", "first");
bind("classification regression", "esl", "esl", "contrast", "evolved");
bind("clustering naive-bayes decision-tree", "esl", "esl", "mechanism", "evolved");
bind("random-forest", "randomForest", "esl", "mechanism", "first");
bind("support-vector-machine", "svm", "esl", "mechanism", "first");
bind("pca", "pca", "esl", "mechanism", "first");
bind("topic-modeling", "lda", "nlpBook", "mechanism", "foundational");

bind("llm autoregressive-model", "gpt3", "foundationModels", "history", "evolved");
bind("foundation-model", "foundationModels", "foundationModels", "history", "first");
bind("slm", "foundationModels", "iso22989", "contrast", "evolved");
bind("multimodal-model vlm clip", "clip", "foundationModels", "mechanism", "foundational");
bind("encoder decoder encoder-decoder sequence-to-sequence", "seq2seq", "transformer", "mechanism", "foundational");
bind("moe expert-routing sparse-model", "moe", "moe", "mechanism", "foundational");
bind("diffusion-model image-generation", "diffusion", "nistGenAi", "mechanism", "foundational");
bind("diffusion-language-model", "diffusion", "nlpBook", "mechanism", "evolved");
bind("world-model", "worldModels", "worldModels", "mechanism", "foundational");
bind("reasoning-model", "testTimeCompute", "foundationModels", "contrast", "evolved");
bind("reward-model critic-model", "instructGpt", "rlBook", "contrast", "evolved");
bind("state-space-model mamba", "mamba", "mamba", "mechanism", "first");
bind("neural-network hidden-layer activation-function relu feed-forward-network", "mccullochPitts", "deepLearningBook", "mechanism", "foundational");
bind("cnn convolution pooling", "cnn", "deepLearningBook", "mechanism", "foundational");
bind("rnn", "backprop", "deepLearningBook", "mechanism", "foundational");
bind("lstm", "lstm", "deepLearningBook", "mechanism", "first");
bind("gan", "gan", "deepLearningBook", "mechanism", "first");

bind("alignment safety-alignment responsible-ai ai-safety", "nistRmf", "nistRmf", "risk", "evolved");
bind("rlhf", "instructGpt", "instructGpt", "mechanism", "foundational");
bind("rlaif constitutional-ai", "constitutionalAi", "constitutionalAi", "mechanism", "first");
bind("dpo", "dpo", "dpo", "mechanism", "first");
bind("ppo", "ppo", "rlBook", "mechanism", "first");
bind("grpo", "deepSeekMath", "deepSeekMath", "mechanism", "first");
bind("red-teaming", "redTeam", "nistRmf", "risk", "evolved");
bind("hallucination grounding", "nistGenAi", "nistGenAi", "risk", "evolved");
bind("calibration uncertainty confidence-interval", "calibration", "nistGlossary", "metric", "foundational");
bind("interpretability black-box", "nistGlossary", "nistRmf", "contrast", "evolved");
bind("mechanistic-interpretability", "circuits", "circuits", "mechanism", "evolved");
bind("jailbreak prompt-injection", "owaspPrompt", "owaspPrompt", "risk", "evolved");
bind("data-poisoning", "nistAdversarial", "nistAdversarial", "risk", "evolved");
bind("model-collapse", "modelCollapse", "nistGenAi", "risk", "first");
bind("bias toxicity deepfake", "nistRmf", "nistGenAi", "risk", "evolved");

bind("rag citation", "rag", "rag", "mechanism", "first");
bind("retrieval query-expansion chunking", "irBook", "irBook", "mechanism", "evolved");
bind("vector-database", "hnsw", "irBook", "system", "evolved");
bind("reranking", "irBook", "irBook", "mechanism", "evolved");
bind("semantic-search", "sbert", "irBook", "mechanism", "foundational");
bind("keyword-search hybrid-search", "bm25", "irBook", "contrast", "evolved");
bind("knowledge-graph semantic-web", "w3cRdf", "w3cRdf", "system", "standard");
bind("hyde", "hyde", "hyde", "mechanism", "first");
bind("graphrag", "graphRag", "graphRag", "mechanism", "first");
bind("recommendation-system collaborative-filtering", "groupLens", "irBook", "mechanism", "foundational");
bind("learning-to-rank", "rankNet", "irBook", "mechanism", "foundational");

bind("chain-of-thought scratchpad task-decomposition", "cot", "cot", "mechanism", "foundational");
bind("self-consistency", "selfConsistency", "selfConsistency", "mechanism", "first");
bind("tree-of-thoughts", "treeThoughts", "treeThoughts", "mechanism", "first");
bind("beam-search", "nlpBook", "nlpBook", "mechanism", "evolved");
bind("reflection critique", "reflexion", "agentSurvey", "mechanism", "foundational");
bind("debate", "debate", "debate", "mechanism", "first");
bind("structured-output", "jsonSchema", "jsonSchema", "system", "standard");
bind("constrained-decoding", "jsonSchema", "nlpBook", "mechanism", "evolved");
bind("speculative-decoding", "speculative", "speculative", "mechanism", "first");
bind("kv-cache", "transformer", "transformer", "system", "evolved");
bind("flash-attention", "flashAttention", "flashAttention", "mechanism", "first");

bind("computer-vision image-recognition", "deepLearning2015", "deepLearningBook", "task", "evolved");
bind("ocr", "deepLearning2015", "nlpBook", "task", "evolved");
bind("asr", "ctc", "nlpBook", "task", "foundational");
bind("tts speech-to-speech", "nlpBook", "nlpBook", "task", "evolved");
bind("video-generation", "diffusion", "nistGenAi", "task", "evolved");
bind("embodied-agent", "agentSurvey", "rt2", "task", "evolved");
bind("robotics-policy", "rt2", "rt2", "mechanism", "foundational");
bind("visual-grounding", "clip", "clip", "task", "evolved");
bind("image-captioning", "showAndTell", "showAndTell", "task", "foundational");
bind("semantic-segmentation bounding-box", "fcn", "deepLearningBook", "task", "foundational");
bind("machine-translation", "seq2seq", "nlpBook", "task", "foundational");
bind("named-entity-recognition", "ner", "nlpBook", "task", "first");

bind("accuracy precision recall f1-score false-positive false-negative confusion-matrix ground-truth", "irBook", "esl", "metric", "evolved");
bind("auc", "auc", "esl", "metric", "first");
bind("bleu", "bleu", "bleu", "metric", "first");
bind("rouge", "rouge", "rouge", "metric", "first");
bind("pass-at-k", "humanEval", "humanEval", "metric", "first");
bind("emergent-abilities", "scalingLaws", "foundationModels", "contrast", "evolved");

bind("edge-ai ai-as-a-service", "iso22989", "nistGlossary", "system", "evolved");
bind("gpu tpu vram cpu", "deepLearningBook", "deepLearningBook", "system", "evolved");
bind("rpa", "openAiAgents", "openAiAgents", "system", "evolved");
bind("swarm-intelligence", "swarm", "swarm", "mechanism", "foundational");

const fallbackAuthorities = {
  foundation: "iso22989",
  training: "deepLearningBook",
  architecture: "deepLearningBook",
  alignment: "nistRmf",
  retrieval: "irBook",
  reasoning: "nlpBook",
  multimodal: "deepLearning2015",
  operations: "openAiAgents",
  evaluation: "nistGlossary",
};

const originLabels = {
  first: "最早/原始来源",
  foundational: "奠基来源",
  evolved: "术语形成脉络",
  standard: "规范来源",
  community: "待核验来源",
};

export const staticConceptKeys = [...bindings.keys()];

export function getConceptResearch(key, category = "foundation") {
  const binding = bindings.get(key);
  if (binding) {
    return {
      ...binding,
      originLabel: originLabels[binding.originType],
      origin: { id: binding.origin, ...sourceCatalog[binding.origin] },
      authority: { id: binding.authority, ...sourceCatalog[binding.authority] },
      verified: true,
    };
  }

  const authorityKey = fallbackAuthorities[category] ?? "nistGlossary";
  return {
    originLabel: originLabels.community,
    originType: "community",
    mode: "task",
    verified: false,
    origin: {
      id: "community-pending",
      title: "社区登记：尚未找到可核验的首发来源",
      author: "概念回路",
      year: "待核验",
      kind: "社区草稿",
      url: null,
      note: "该词条由用户登记。找到原始论文、正式规范或作者说明后，才会升级为已核验词条。",
    },
    authority: { id: authorityKey, ...sourceCatalog[authorityKey] },
  };
}

const narrativeLabels = {
  history: ["今天怎么理解", "它为何出现", "别把历史名词当结论"],
  mechanism: ["它在内部做什么", "它解决哪一步", "抓住这个区别"],
  contrast: ["准确边界", "何时会用到", "最容易混淆的点"],
  metric: ["它到底在测什么", "什么时候这个数有用", "数字不会告诉你的事"],
  risk: ["风险从哪里来", "会影响什么", "处理时先记住"],
  system: ["它负责哪一层", "什么时候需要它", "工程上最重要的边界"],
  task: ["任务究竟是什么", "典型应用", "判断是否做对的关键"],
  data: ["数据在这里扮演什么角色", "它会改变什么", "最容易忽略的数据问题"],
};

export function buildExplanationPoints(entry, research) {
  const labels = narrativeLabels[research.mode] ?? narrativeLabels.mechanism;
  return [
    [labels[0], entry.definition],
    [labels[1], entry.use],
    [labels[2], entry.takeaway],
  ];
}

export function buildWhyItMatters(entry, research) {
  const lead = {
    metric: "它会直接改变你如何读一个模型分数、设阈值和做版本比较。",
    risk: "它决定系统在哪些情况下会失真、被利用或伤害真实用户。",
    system: "它不一定提高模型智力，却会直接影响系统能否稳定、安全地完成任务。",
    history: "弄清它最初要解决的问题，才能避免把后来扩张的含义混成一句口号。",
    data: "数据选择会改变模型学到的边界，因此这不是单纯的准备工作。",
    task: "先定义任务边界，才能选择正确的数据、模型和评测方式。",
    contrast: "边界一旦混淆，模型选型、成本估算和效果判断都会跟着出错。",
    mechanism: "理解这一步如何传递信息，才能判断能力、速度与成本来自哪里。",
  }[research.mode];
  return `${lead} ${entry.use}`;
}

export function researchPapers(research) {
  const sources = research.origin.id === research.authority.id
    ? [{ ...research.origin, role: `${research.originLabel} · 同时是权威定义依据` }]
    : [
        { ...research.origin, role: research.originLabel },
        { ...research.authority, role: "权威定义依据" },
      ];

  return sources.map((source) => ({
    year: source.year,
    title: source.title,
    venue: source.author,
    note: source.note,
    url: source.url,
    role: source.role,
    kind: source.kind,
  }));
}

export function sourceCatalogSize() {
  return Object.keys(sourceCatalog).length;
}
