---
title: Home
pageClass: home-academic
---

<div class="profile-shell">
  <div class="profile-hero">
    <div class="profile-copy">
      <p class="eyebrow">Bioinformatics Research</p>
      <h1>Xiangyuli</h1>
      <p class="profile-role">Drug-Target Interaction Prediction • Computational Pathology • Interpretable AI</p>
      <p class="profile-summary">
        这个站点现在根据你上传的 5 篇论文整理成研究主页，主要覆盖两条公开可验证的工作线：
        一条是 drug-target interaction prediction 与多模态融合，另一条是 computational pathology 中
        基于 whole-slide images 的生物标志物状态预测。
      </p>
      <div class="profile-actions">
        <a class="profile-button primary" href="/projects">Selected Projects</a>
        <a class="profile-button" href="https://scholar.google.com/citations?user=cDmPBF4AAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar</a>
        <a class="profile-button" href="/notes/">Notes</a>
        <a class="profile-button" href="https://github.com/xiangyuli-bio" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>
    <div class="profile-aside">
      <img src="/profile-badge.svg" alt="Profile badge" class="profile-art" />
      <dl class="profile-meta">
        <div>
          <dt>Location</dt>
          <dd>China</dd>
        </div>
        <div>
          <dt>Focus</dt>
          <dd>DTI prediction, multimodal learning, whole-slide image biomarker prediction</dd>
        </div>
        <div>
          <dt>Email</dt>
          <dd><a href="mailto:3217452489@qq.com">3217452489@qq.com</a></dd>
        </div>
      </dl>
    </div>
  </div>
</div>

## About

我希望这个站点像一份长期维护的研究主页。它不仅展示项目结果，也尽量把研究主题、公开代码和持续积累的方向组织得更清楚。

目前可以公开确认的内容主要来自你上传的 5 篇论文和公开项目页面，整体上形成了两条比较清晰的研究方向：

- 药物-靶标相互作用预测（DTI）与多模态表示学习
- whole-slide image（WSI）上的生物标志物状态预测
- 跨模态对齐、跨域泛化与可解释建模
- 面向药物发现与病理智能分析的深度学习方法

## Research / Interests

根据这 5 篇论文，我把研究兴趣整理成下面几组更贴近真实工作的主题：

- Drug-Target Interaction Prediction：关注药物分子与蛋白之间的相互作用建模。
- Computational Pathology：关注基于 whole-slide images 的 MSI、PCDH8 等关键标志物状态预测。
- Multi-modal Fusion：结合序列、结构、功能与图像多尺度信息提升模型性能。
- Interpretability：不仅追求准确率，也关注结合位点、病理区域和跨模态对齐的可解释性。
- Cross-domain / Cold-start Generalization：提升模型在真实药物发现任务中的实用性。

## Selected Projects

### CDI-DTI

`CDI-DTI` 是你公开仓库里信息最完整、研究指向也最清晰的项目之一。仓库 README 和 arXiv 摘要都显示它重点解决
cross-domain generalization、cold-start prediction 和 interpretability。

- Multi-modal encoder：整合文本、结构与功能模态
- Model design：引入 cross-attention、deep orthogonal fusion 和 feature alignment
- Benchmarks：README 明确提到在 BindingDB 与 Davis 上表现强，尤其面向 cold-start / cross-domain 场景
- Source: [GitHub Repository](https://github.com/xiangyuli-bio/CDI-DTI)
- Paper: [arXiv: CDI-DTI](https://arxiv.org/abs/2510.19520)

### M3ST-DTI

`M3ST-DTI` 继续沿着 DTI 方向推进，但更强调 multi-task learning、multi-stage alignment 和 multi-modal feature integration。

- Multi-task learning：同时优化多任务目标以增强泛化能力
- Feature design：结合 textual、structural、functional 三类模态
- Alignment strategy：引入多阶段对齐与正交融合减少冗余
- Paper: [IEEE Xplore](https://ieeexplore.ieee.org/document/11356749)

### CCANet / CovAttnNet for MSI Prediction

在计算病理方向，你的论文把 attention 和 patch / tile 级建模用于结肠癌 MSI 状态预测，研究主题非常明确：如何从超大 WSI 中提取兼顾局部和全局的信息。

- ISBRA 2024 work：提出 patch-based coupled attention network 预测 colon cancer 中的 MSI status
- Journal extension：进一步发展为 CCANet，结合 tile-level local branch 与 patch-level global branch
- Application：面向结肠癌辅助诊断中的关键标志物识别
- Paper: [ISBRA 2024](https://link.springer.com/book/10.1007/978-981-97-5131-0)
- Paper: [CCANet article](https://www.sciencedirect.com/science/article/abs/pii/S1746809425016131)

### DSRNet for PCDH8 Prediction

在甲状腺癌病理图像方向，你的论文提出了 `DSRNet`，目标是直接从 WSIs 非侵入式预测 PCDH8 基因表达状态。

- Task：thyroid cancer pathological images 上的 PCDH8 status prediction
- Model design：depth-wise separable convolution、residual connection 和多尺度特征建模
- Value：兼顾效率、准确性和潜在临床可解释性
- Paper: [Intelligent Oncology article](https://www.sciencedirect.com/science/article/pii/S2950261625000494)

## Education / Timeline

这一部分现在可以比之前更真实一些，因为论文里已经能看出你的研究路径轮廓，但我还是避免补没有明确公开依据的个人履历。

### Current public trajectory

- 早期公开工作集中在 colon cancer / thyroid cancer 的 WSI biomarker prediction
- 近期研究进一步延展到 drug-target interaction prediction、多模态特征融合与跨域可解释建模
- Scholar 页面已经挂入导航，后续可以继续补 citation 和正式论文清单

### Future additions

- 教育背景
- 研究经历 / 实验室信息
- 论文列表与 citation 数据
- 项目时间线与 benchmark 结果汇总

## Contact

如果你是通过 GitHub 或这个主页找到我，欢迎继续交流。

- GitHub: [xiangyuli-bio](https://github.com/xiangyuli-bio)
- Google Scholar: [Scholar Profile](https://scholar.google.com/citations?user=cDmPBF4AAAAJ&hl=en)
- Email: [3217452489@qq.com](mailto:3217452489@qq.com)
- More details: [Contact page](/contact)
