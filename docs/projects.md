# Projects

这个页面现在不再写成泛化的“作品集”，而是围绕你上传的 5 篇论文和公开可验证的研究项目来整理。整体上分成两类：计算病理和 DTI 预测。

## Computational Pathology

### Patch-Based Coupled Attention Network to Predict MSI Status in Colon Cancer

这是你在 ISBRA 2024 的工作，面向 colon cancer 中 MSI status 的预测。核心问题是如何从超大规模 WSI 中稳定提取与标志物相关的关键区域特征。

- Task: MSI status prediction from whole-slide images
- Core idea: patch-based coupled attention for local-global feature fusion
- Venue: ISBRA 2024
- Link: [ISBRA proceedings](https://link.springer.com/book/10.1007/978-981-97-5131-0)

### A Continuously Coupled Attention Neural Network for MSI Status Classification in Whole Slide Images

这篇工作可以看作上一个 MSI 方向工作的进一步扩展。论文说明模型同时引入 tile-level local branch 和 patch-level global branch，并通过 coupled attention unit 做对齐与融合。

- Task: MSI classification in colon cancer pathology WSIs
- Method: continuous residual encoders + transformer encoders + coupled attention units
- Contribution: 在局部细胞级和全局上下文之间建立更强的信息耦合
- Link: [ScienceDirect article](https://www.sciencedirect.com/science/article/abs/pii/S1746809425016131)

### A Depth-Wise Separable Residual Neural Network for PCDH8 Status Prediction in Thyroid Cancer Pathological Images

这篇工作将病理图像方向进一步扩展到 thyroid cancer。论文给出的任务是直接从 WSI 预测 PCDH8 状态，模型核心是 DSRNet。

- Task: noninvasive PCDH8 status prediction from thyroid cancer WSIs
- Method: depth-wise separable convolution + residual mechanism + multiscale modeling
- Result highlight: 论文摘要报告了较高 accuracy / AUC，并展示了较好的泛化潜力
- Link: [Intelligent Oncology article](https://www.sciencedirect.com/science/article/pii/S2950261625000494)

## Drug-Target Interaction Prediction

### M3ST-DTI

`M3ST-DTI` 关注 DTI prediction 中的多模态特征交互和多阶段对齐问题。论文标题本身已经很清楚地指出了两点：multi-task learning 和 multi-stage alignment。

- Inputs: textual, structural and functional features
- Design: self-attention + hybrid pooling graph attention + early/late-stage alignment
- Goal: 提升 predictive performance 和 generalization
- Link: [IEEE Xplore](https://ieeexplore.ieee.org/document/11356749)

### CDI-DTI

`CDI-DTI` 是你近期工作里很强的一篇代表性研究，重点是 cross-domain、cold-start 和 interpretability。

- Focus: cross-domain generalization, cold-start prediction, interpretability
- Inputs: textual, structural and functional modalities
- Design:
  - multi-source cross-attention
  - bidirectional cross-attention
  - deep orthogonal fusion
  - Gram-loss-based feature alignment
- Links:
  - [GitHub Repository](https://github.com/xiangyuli-bio/CDI-DTI)
  - [Journal article](https://pubs.acs.org/doi/10.1021/acs.jcim.5c02908)

## Suggested Sections to Add Later

### Publications

我已经把一页单独的 Publications 页面补好了，后面可以继续加 citation、DOI、PDF 和代码链接。

### Benchmarks / Results

可以进一步把 ROC-AUC、PR-AUC、cold-start、ablation study 或 pathology prediction 指标做成摘要表格。

### Experience / Education

等你确认后，再补学校、研究方向、实验室或合作经历，会比现在更完整。

## A Good Project Description Usually Includes

1. Problem: 这个模型要解决什么研究问题。
2. Method: 核心模型结构和输入模态是什么。
3. Dataset: 在哪些 benchmark 上验证。
4. Contribution: 相比已有工作，新增了什么能力或 insight。
