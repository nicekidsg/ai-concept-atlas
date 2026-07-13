const coreDiagrams = {
  loop: {
    type: "cycle",
    nodes: [["观察", "读取环境", "observe"], ["推理", "选择行动", "reason"], ["行动", "改变环境", "act"], ["反馈", "检查结果", "verify"]],
  },
  harness: {
    type: "layers",
    nodes: [["目标层", "定义任务与边界", "goal"], ["模型层", "理解并生成意图", "reason"], ["编排层", "连接工具与记忆", "orchestrate"], ["治理层", "权限、日志与评测", "verify"]],
  },
  scaffolding: {
    type: "branch",
    nodes: [["复杂目标", "原始问题", "goal"], ["路径 A", "规划与搜索", "search"], ["路径 B", "记忆与反思", "memory"], ["可靠结果", "比较后收敛", "verify"]],
  },
  verifier: {
    type: "gate",
    nodes: [["候选答案", "生成多个结果", "generate"], ["验证器", "检查并评分", "verify"], ["通过", "输出最佳结果", "success"], ["退回", "修订或重试", "retry"]],
  },
  "test-time compute": {
    type: "branch",
    nodes: [["问题", "判断难度", "observe"], ["少量计算", "直接作答", "fast"], ["更多计算", "采样、搜索、验证", "reason"], ["最佳答案", "按预算选择", "verify"]],
  },
  skill: {
    type: "layers",
    nodes: [["触发条件", "什么时候使用", "search"], ["操作说明", "按什么步骤做", "memory"], ["脚本资源", "用什么执行", "act"], ["完成标准", "怎样算做好", "verify"]],
  },
  mcp: {
    type: "hub",
    center: ["MCP 客户端", "统一连接入口", "link"],
    nodes: [["工具", "执行动作", "act"], ["资源", "读取数据", "memory"], ["提示", "复用模板", "spark"], ["服务端", "暴露能力", "server"]],
  },
  subagent: {
    type: "hub",
    center: ["主智能体", "拆分与汇总", "orchestrate"],
    nodes: [["研究子任务", "搜集证据", "search"], ["实现子任务", "独立执行", "act"], ["评审子任务", "检查质量", "verify"], ["共享结果", "返回主线程", "share"]],
  },
  "planner-executor": {
    type: "pipeline",
    nodes: [["目标", "理解约束", "goal"], ["规划器", "拆分步骤", "reason"], ["执行器", "调用工具", "act"], ["重规划", "根据反馈修订", "retry"]],
  },
  guardrail: {
    type: "gate",
    nodes: [["请求 / 行动", "进入风险边界", "observe"], ["策略检查", "权限与安全规则", "verify"], ["放行", "在边界内执行", "success"], ["拦截", "拒绝或交给人工", "stop"]],
  },
  memory: {
    type: "cycle",
    nodes: [["经历", "产生新信息", "observe"], ["写入", "保存事实与经验", "memory"], ["召回", "按任务检索", "search"], ["更新", "合并或遗忘", "retry"]],
  },
  "tool-use": {
    type: "pipeline",
    nodes: [["任务意图", "识别外部需求", "goal"], ["选择工具", "匹配接口", "search"], ["结构化调用", "发送参数", "act"], ["整合结果", "继续推理", "verify"]],
  },
  "multi-agent": {
    type: "hub",
    center: ["协调者", "分工与合并", "orchestrate"],
    nodes: [["规划角色", "拆解任务", "reason"], ["执行角色", "完成子任务", "act"], ["研究角色", "寻找证据", "search"], ["评审角色", "交叉检查", "verify"]],
  },
  "computer-use": {
    type: "cycle",
    nodes: [["截图", "观察界面", "observe"], ["定位", "识别控件", "search"], ["操作", "点击与输入", "act"], ["确认", "检查界面变化", "verify"]],
  },
  "context-engineering": {
    type: "layers",
    nodes: [["系统指令", "最高优先级规则", "goal"], ["任务上下文", "用户目标与历史", "memory"], ["外部证据", "检索与工具结果", "search"], ["当前工作集", "压缩后送入模型", "reason"]],
  },
  agent: {
    type: "hub",
    center: ["Agent", "面向目标行动", "orchestrate"],
    nodes: [["目标", "定义成功", "goal"], ["环境", "观察变化", "observe"], ["工具", "执行动作", "act"], ["记忆", "保持连续", "memory"]],
  },
  token: {
    type: "pipeline",
    nodes: [["原始文本", "AI 是什么？", "input"], ["分词器", "切分并编号", "search"], ["Token IDs", "例如 35 · 128", "memory"], ["模型", "读取数字序列", "reason"]],
  },
  tokenizer: {
    type: "pipeline",
    nodes: [["文本", "未处理字符串", "input"], ["切分规则", "字、子词或符号", "search"], ["词表映射", "找到 token 编号", "memory"], ["ID 序列", "送入模型", "output"]],
  },
  embedding: {
    type: "pipeline",
    nodes: [["对象", "文本、图片或用户", "input"], ["嵌入模型", "提取语义特征", "reason"], ["向量", "连续数字坐标", "memory"], ["相似度", "检索、聚类、推荐", "search"]],
  },
  transformer: {
    type: "layers",
    nodes: [["Token 嵌入", "输入表示", "input"], ["自注意力", "连接上下文", "link"], ["前馈网络", "变换每个位置", "reason"], ["残差与归一化", "稳定深层计算", "verify"]],
  },
  attention: {
    type: "pipeline",
    nodes: [["Query", "当前要找什么", "search"], ["Key", "每项提供索引", "memory"], ["权重", "计算相关程度", "reason"], ["Value 聚合", "读取重要信息", "output"]],
  },
  "context-window": {
    type: "layers",
    nodes: [["系统指令", "基础行为规则", "goal"], ["对话历史", "之前发生什么", "memory"], ["参考资料", "当前可用证据", "search"], ["待生成空间", "回答也占 token", "output"]],
  },
  prompt: {
    type: "pipeline",
    nodes: [["目标", "想让模型完成什么", "goal"], ["Prompt", "指令、上下文、示例", "input"], ["模型", "理解并生成", "reason"], ["结果", "按格式输出", "output"]],
  },
  "system-prompt": {
    type: "layers",
    nodes: [["系统消息", "角色与最高优先规则", "goal"], ["开发者规则", "产品行为约束", "verify"], ["用户消息", "当前任务目标", "input"], ["工具与上下文", "可用信息和能力", "act"]],
  },
  inference: {
    type: "pipeline",
    nodes: [["输入", "新请求", "input"], ["前向计算", "使用已训练参数", "reason"], ["概率分布", "下一个 token 候选", "generate"], ["解码", "形成最终输出", "output"]],
  },
  temperature: {
    type: "branch",
    nodes: [["Logits", "原始候选分数", "input"], ["低温度", "更集中、更稳定", "fast"], ["高温度", "更平坦、更多样", "spark"], ["采样结果", "按场景选择", "output"]],
  },
  llm: {
    type: "layers",
    nodes: [["Token 序列", "离散语言输入", "input"], ["Transformer 层", "提取上下文关系", "reason"], ["参数知识", "训练中学到的模式", "memory"], ["Token 概率", "逐步生成文字", "generate"]],
  },
  moe: {
    type: "hub",
    center: ["路由器", "为每个 token 选专家", "orchestrate"],
    nodes: [["语言专家", "通用表达", "reason"], ["代码专家", "程序模式", "act"], ["数学专家", "计算推理", "spark"], ["激活专家", "只计算少数路径", "success"]],
  },
  "diffusion-model": {
    type: "pipeline",
    nodes: [["随机噪声", "初始信号", "input"], ["条件", "文字或参考图", "goal"], ["多步去噪", "逐渐恢复结构", "retry"], ["生成样本", "图像、视频或音频", "output"]],
  },
  "world-model": {
    type: "cycle",
    nodes: [["当前状态", "世界现在怎样", "observe"], ["候选行动", "如果这样做", "act"], ["预测未来", "会发生什么", "reason"], ["比较现实", "修正内部模型", "verify"]],
  },
  rlhf: {
    type: "pipeline",
    nodes: [["候选回答", "模型生成样本", "generate"], ["人类排序", "表达偏好", "share"], ["奖励模型", "学习偏好分数", "verify"], ["强化学习", "更新语言模型", "retry"]],
  },
  dpo: {
    type: "pipeline",
    nodes: [["偏好数据", "Chosen / Rejected", "input"], ["参考模型", "提供比较基线", "memory"], ["DPO 目标", "直接优化偏好差", "reason"], ["对齐模型", "提高偏好回答概率", "output"]],
  },
  rag: {
    type: "pipeline",
    nodes: [["用户问题", "形成查询", "input"], ["检索器", "寻找相关资料", "search"], ["证据上下文", "筛选并重排", "memory"], ["有依据回答", "生成并引用", "output"]],
  },
  "vector-database": {
    type: "hub",
    center: ["查询向量", "寻找最近邻", "search"],
    nodes: [["文档向量", "文本片段", "memory"], ["图片向量", "视觉内容", "observe"], ["元数据", "权限与过滤", "verify"], ["Top-K 结果", "返回最相似项", "output"]],
  },
  "chain-of-thought": {
    type: "pipeline",
    nodes: [["问题", "复杂任务", "input"], ["中间步骤", "逐步展开", "reason"], ["自检", "发现遗漏或错误", "verify"], ["最终答案", "汇总输出", "output"]],
  },
  "self-consistency": {
    type: "branch",
    nodes: [["同一问题", "重复采样", "input"], ["推理路径 A", "得到候选答案", "reason"], ["推理路径 B", "得到另一候选", "spark"], ["一致性投票", "选择多数结果", "verify"]],
  },
  "structured-output": {
    type: "gate",
    nodes: [["模型内容", "待结构化结果", "generate"], ["Schema", "字段与类型约束", "verify"], ["合法 JSON", "交给程序使用", "success"], ["格式错误", "重试或修复", "retry"]],
  },
};

const fallbackByCategory = {
  foundation: (entry) => ({
    type: "pipeline",
    nodes: [["输入", "原始信息", "input"], [entry.title, "核心概念", "reason"], ["内部表示", "模型可计算形式", "memory"], ["任务输出", "用于理解或生成", "output"]],
  }),
  training: (entry) => ({
    type: "cycle",
    nodes: [["训练数据", "准备样本", "input"], [entry.title, "应用训练方法", "reason"], ["参数更新", "能力发生变化", "retry"], ["验证效果", "检查质量与成本", "verify"]],
  }),
  architecture: (entry) => ({
    type: "layers",
    nodes: [["输入层", "接收信息", "input"], [entry.title, "核心结构", "reason"], ["表示层", "整合特征", "memory"], ["输出层", "服务下游任务", "output"]],
  }),
  alignment: (entry) => ({
    type: "gate",
    nodes: [["模型行为", "待检查或优化", "generate"], [entry.title, "应用对齐信号", "verify"], ["符合目标", "继续输出", "success"], ["发现偏差", "修订或拦截", "retry"]],
  }),
  retrieval: (entry) => ({
    type: "pipeline",
    nodes: [["查询", "表达信息需求", "input"], [entry.title, "寻找并组织知识", "search"], ["相关证据", "筛选可靠内容", "memory"], ["任务结果", "返回或用于生成", "output"]],
  }),
  reasoning: (entry) => ({
    type: "branch",
    nodes: [["问题", "明确目标", "input"], ["候选路径", `使用${entry.title}`, "reason"], ["检查路径", "比较质量与约束", "verify"], ["结论", "选择最终结果", "output"]],
  }),
  multimodal: (entry) => ({
    type: "pipeline",
    nodes: [["多模态信号", "文字、图像或声音", "observe"], [entry.title, "提取或生成信息", "reason"], ["语义对齐", "连接不同模态", "link"], ["任务输出", "理解、生成或行动", "output"]],
  }),
  operations: (entry) => ({
    type: "hub",
    center: [entry.title, "智能体工程模块", "orchestrate"],
    nodes: [["目标", "明确任务边界", "goal"], ["能力", "模型与工具", "act"], ["状态", "上下文与记录", "memory"], ["结果", "交付并检查", "verify"]],
  }),
  evaluation: (entry) => ({
    type: "gate",
    nodes: [["模型结果", "准备评测样本", "generate"], [entry.title, "计算比较信号", "verify"], ["达到目标", "允许进入下一阶段", "success"], ["未达目标", "定位问题并改进", "retry"]],
  }),
};

export const diagramTypeLabels = {
  cycle: "闭环演示",
  pipeline: "流程演示",
  branch: "分支演示",
  hub: "关系演示",
  layers: "分层演示",
  gate: "决策演示",
};

export function buildDiagram(key, entry) {
  return coreDiagrams[key] ?? fallbackByCategory[entry.category](entry);
}

export function buildExistingDiagram(key, concept) {
  return coreDiagrams[key] ?? {
    type: "pipeline",
    nodes: concept.steps.map(([label, caption]) => [label, caption, "reason"]),
  };
}
