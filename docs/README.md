---
pageClass: home-page
# some data for the components

name: Yuanfeng Ji (纪源丰)
profile: /person.jpeg

socials:
  - title: github
    icon: "/icons/github.svg"
    link: https://github.com/czczup
  - title: email
    icon: "/icons/email.svg"
    link: 'mailto:wztxy89[at]163.com'
  - title: linkedin
    icon: "/icons/linkedin.svg"
    link: https://www.linkedin.com/in/yuanfeng-ji-7b0b3a1b0/
  - title: google-scholar
    icon: "/icons/gscholar.svg"
    link: https://scholar.google.com/citations?user=8Z3Z5YIAAAAJ&hl=en
  - title: resume
    icon: "/icons/cv.svg"
    link: /pdf/cv.pdf

email: u3008013@connect.hku.hk
---

<ProfileSection :frontmatter="$page.frontmatter" />

## About Me
As a final-year PhD student in the Department of Computer Science at The University of Hong Kong, I am engaged in cutting-edge research under the mentorship of [Prof. Ping Luo](luoping.me) and [Prof. Wenping Wang](https://engineering.tamu.edu/cse/profiles/Wang-Wenping.html). My academic journey commenced with a solid foundation in EE, obtained at Shenzhen University, nurtured by the guidance of [Prof. Lin Di](dilincv.github.io). 

My scholarly pursuits are presently anchored in the realm of AI, with a particular focus on its ethical integration into medicine, aiming to devise systems that are not only high-performing but also trustworthy. 

Inspired by luminaries in the field, my work strives to contribute to the transformative potential of AI in enhancing **healthcare diagnostics** and **treatment strategies**. The aspiration is to advance the interface of technology and healthcare, facilitating improved patient outcomes through innovative AI applications.

Feel free to reach out via email at u3008013@connect.hku.hk



## News
- [2023-11] I joint the [Ruijiang Li](https://scholar.google.com/citations?user=Y89JnCYAAAAJ&hl=en)'s group at Stanford University as a visiting student.
- [2023-07] DDP is accepted by ICCV23. See you in Paris
- [2022-11] DrugOOD is accepted by AAAI23.
- [2022-10] AMOS is accepted by NIPS22. See you in New Orleans


## Experience
I am deeply grateful for the growth and learning I've experienced under the guidance of my esteemed mentors.
- [2023-11 ~ Present] Visiting Student at Stanford University, advised by [Ruijiang Li](https://scholar.google.com/citations?user=Y89JnCYAAAAJ&hl=en)
- [2023-04 ~ 2023-11] Research Intern at Huawei Noah's Ark Lab, advised by [Enze Xie](https://xieenze.github.io/)
- [2021-04 ~ 2023-04] Research Intern at Tencent AI Lab, advised by [Yatao Bian](https://yataobian.com/)
- [2019-07 ~ 2020-10] Research Intern at SenseTime Research, advised by [Ruimao Zhang](http://zhangruimao.site/)
- [2018-05 ~ 2019-06] Research Intern at Imsight Medical Technology, advised by [Hao Chen](https://scholar.google.com.hk/citations?user=Z_t5DjwAAAAJ&hl=zh-TW)
## Publications


[→ Full list](/projects/)


<ProjectCard image="/projects/2023/padded_auto-bench.png" hideBorder=true>

  **Large Language Models as Automated Aligners for benchmarking Vision-Language Models**

  Yuanfeng Ji*, Chongjian Ge*, Weikai Kong, Enze Xie, Zhengying Liu, Zhengguo Li, Ping Luo

  Tech report

  Introduction: This research explores the potential of large language models as automated aligners, setting a new benchmark in vision-language model evaluation.

  [[Paper](https://arxiv.org/pdf/2311.14580.pdf)] [[Code&Data(wip)](https://jiyuanfeng.github.io/auto-bench.html)]

</ProjectCard>

<ProjectCard image="/projects/2023/padded_syncdock.png" hideBorder=true>

  **SyNDock: N Rigid Protein Docking via Learnable Transformation Synchronization**

  Yuanfeng Ji, Yatao Bian, Guoji Fu, Peilin Zhao, Ping Luo

  Tech report

  Introduction: SyNDock presents an innovative approach to protein docking, utilizing learnable transformation synchronization for enhanced accuracy and efficiency.

  [[Paper](https://arxiv.org/pdf/2305.15156v1.pdf)] [[Code&Data(wip)]()]

</ProjectCard>

<ProjectCard image="/projects/2023/padded_ddp.png  " hideBorder=true>

  **DDP: Diffusion Model for Dense Visual Prediction**

  **Yuanfeng Ji**, Zhe Chen, Enze Xie, Lanqing Hong, Xihui Liu, Zhaoqiang Liu, Tong Lu, Zhenguo Li, Ping Luo

  ICCV 2023

  Introduction: A groundbreaking approach to dense visual prediction, employing diffusion models to enhance accuracy and efficiency.

  [[Paper](https://arxiv.org/abs/2303.17559)] [[Code](https://github.com/JiYuanFeng/DDP)]

</ProjectCard>

<ProjectCard image="/projects/2021/padded_drugood.png" hideBorder=true>

  **DrugOOD: Out-of-Distribution (OOD) Dataset Curator and Benchmark for AI-aided Drug Discovery**

  Yuanfeng Ji*, Lu Zhang*, Jiaxiang Wu, Bingzhe Wu, Lanqing Li, Long-Kai Huang, Tingyang Xu, Yu Rong, Jie Ren, Ding Xue, Houtim Lai, Wei Liu, Junzhou Huang, Shuigeng Zhou, Ping Luo, Peilin Zhao, Yatao Bian

  AAAI 2023 (Oral)

  Introduction: DrugOOD serves as a curator and benchmark for AI-driven drug discovery, focusing on affinity prediction problems with noise annotations.

  [[Paper](https://arxiv.org/abs/2201.09637)] [[Code](https://github.com/tencent-ailab/DrugOOD)] [[Project](https://drugood.github.io)]

</ProjectCard>

<ProjectCard image="/projects/2022/padded_amos.png" hideBorder=true>

  **AMOS: A Large-Scale Abdominal Multi-Organ Benchmark for Versatile Medical Image Segmentation**

  **Yuanfeng Ji**, Haotian Bai, Chongjian Ge, Jie Yang, Ye Zhu, Ruimao Zhang, Zhen Li, Lingyan Zhang, Wanling Ma, Xiang Wan, Ping Luo

  Neuips 2022 (Oral)

  Introduction: AMOS stands as a large-scale benchmark for abdominal multi-organ segmentation, paving the way for advancements in medical image analysis.

  [[Paper](https://arxiv.org/pdf/2206.08023.pdf)] [[Code](https://github.com/JiYuanFeng/AMOS/tree/code)] [[Challenge](https://amos22.grand-challenge.org)]

</ProjectCard>

<ProjectCard image="/projects/2021/padded_miccai01.png" hideBorder=true>

  **Multi-compound Transformer for Accurate Biomedical Image Segmentation**

  **Yuanfeng Ji**, Ruimao Zhang, Huijie Wang, Zhen Li, Lingyun Wu, Shaoting Zhang, Ping Luo

  MICCAI 2021 (Early Accept)

  Introduction: This work introduces a transformative approach in biomedical image segmentation, leveraging a multi-compound transformer architecture for enhanced accuracy.

  [[Paper](https://arxiv.org/pdf/2106.14385)] [[Code](https://github.com/JiYuanFeng/MCTrans)]

</ProjectCard>

<ProjectCard image="/projects/2020/padded_miccai01.png" hideBorder=true>

  **UXNet: Searching Multi-level Feature Aggregation for 3D Medical Image Segmentation**

  **Yuanfeng Ji**, Ruimao Zhang, Zhen Li, Jiamin Ren, Shaoting Zhang, Ping Luo

  MICCAI 2021 (Early Accept)

  Introduction: UXNet propels the search for multi-level feature aggregation in 3D medical image segmentation through an AutoML tool for network design.

  [[Paper](https://arxiv.org/pdf/2009.07501)] [[Code(coming)]]

</ProjectCard>

<ProjectCard image="/projects/2019/padded_miccai01.png" hideBorder=true>

  **PRSNet: Part Relation and Selection Network For Bone Age Assessment**

  **Yuanfeng Ji**, Hao Chen, Dan Lin, Xiaohua Wu, Di Lin

  MICCAI 2020 (Early Accept)

  Introduction: PRSNet innovates bone age assessment by integrating part relation and selection networks to streamline the analysis process.

  [[Paper](https://arxiv.org/pdf/1909.056515)]

</ProjectCard>

<ProjectCard image="/projects/2020/padded_zigzag.png" hideBorder=false>

  **RANet: Region Attention Network for Semantic Segmentation**

  Dingguo Shen*, Yuanfeng Ji*, Ping Li, Yi Wang, Di Lin  

  Neuips 2020

  Introduction: RANet leverages region-based attention mechanisms to enhance the performance of semantic segmentation tasks.

  [[Paper](https://dilincv.github.io/ranet.pdf)] [[Code](https://github.com/dingguo1996/RANet)]

</ProjectCard>

<ProjectCard image="/projects/2019/padded_eccv1.jpg" hideBorder=true>

  **Multi-Scale Context Interwining for Semantic Segmentation**

  Di Lin, Yuanfeng Ji, Dani Lischinski, Daniel Cohen-Or, Hui Huang

  ECCV 2018

  Introduction: MSCI introduces an innovative approach to semantic segmentation by intertwining multi-scale contextual information, enhancing the accuracy and robustness of the segmentation process.

  [[Paper](https://dilincv.github.io/msci.pdf)] [[Project](https://vcc.tech/msci)]

</ProjectCard>

## Challenges & Achievements

- [2019] Ranked 5th in the [Kaggle RSNA Pneumonia Detection Challenge](https://www.kaggle.com/competitions/rsna-pneumonia-detection-challenge/leaderboard) (Gold Medal).
- [2019] Ranked 3rd in the [COCO 2019 Panoptic Segmentation Task](https://competitions.codalab.org/competitions/19507#results).
- [2018] Ranked 3rd in the [MICCAI 2018 ISIC Skin Lesion Segmentation Challenge](https://challenge.isic-archive.com/leaderboards/2018/).
- [2019] Ranked 87th in the [Kaggle Human Protein Atlas Image Classification Challenge](https://www.kaggle.com/competitions/human-protein-atlas-image-classification/leaderboard) (Silver Medal).

## Professional Activities

- Organizer for the [Multi-Modality Abdominal Multi-Organ Segmentation Challenge](https://amos22.grand-challenge.org/) at MICCAI 2022.
- Journal Reviewer for TMI, TMM.
- Conference Reviewer for CVPR, ICCV, ECCV, NeurIPS, ICML, ICLR, MICCAI.


<!-- Custom style for this page -->

<style lang="stylus">

.theme-container.home-page .page
  font-size 14px
  font-family "Arial", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 120px
        max-height 120px
    .card-content p
      -webkit-margin-after 0.2em

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img 
          width 100%
          max-width 400px

</style>
