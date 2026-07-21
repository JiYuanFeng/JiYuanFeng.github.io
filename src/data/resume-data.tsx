import { NSNLogo } from "@/images/logos";
import { GitHubIcon, GoogleScholarIcon, LinkedInIcon } from "@/components/icons";


export const RESUME_DATA = {
  name: "Yuanfeng Ji",
  initials: "YJ",
  location: "California, USA, PT",
  locationLink: "https://www.google.com/maps/place/California",
  about:
    "AI researcher building foundation models for biomedicine.",
  researchFocus: [
    "Biomedical Foundation Models",
    "Medical Computer Vision",
    "AI Agents",
  ],
  summary:
    "Postdoctoral scholar at Stanford University with <a href=\"https://profiles.stanford.edu/ruijiang-li\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground\">Prof. Ruijiang Li</a>, developing AI foundation models for biomedicine, with a focus on computational pathology, radiology, and spatial biology. I received my PhD from <a href=\"https://mmlab.hk/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground\">HKU MMLab</a> in 2024, advised by <a href=\"https://luoping.me/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground\">Prof. Ping Luo</a>. My work spans generative models, vision-language models, and AI agents, translating frontier AI methods into clinically impactful tools for clinical diagnosis, treatment, and biomedical discovery.",
  avatarUrl: "/image.png",
  personalWebsiteUrl: "https://jiyuanfeng.github.io/",
  contact: {
    email: "yfj@stanford.edu",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/JiYuanFeng",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yuanfeng-ji/",
        icon: LinkedInIcon,
      },
      {
        name: "Google Scholar",
        url: "https://scholar.google.com/citations?user=7HGv1bkAAAAJ",
        icon: GoogleScholarIcon,
      },
    ],
  },
  education: [
    {
      school: "Shenzhen University",
      degree: "Bachelor's Degree in Electronic Information Engineering",
      start: "2014",
      end: "2018",
    },
    {
      school: "City University of Hong Kong",
      degree: "Master's Degree in Electronic Information Engineering",
      start: "2019",
      end: "2020",
    },
    {
      school: "The University of Hong Kong",
      degree: "MPhil in Computer Science",
      start: "2020",
      end: "2022",
    },
    {
      school: "The University of Hong Kong",
      degree: "Ph.D. in Computer Science",
      start: "2022",
      end: "2024",
    },
  ],
  publications: [
    /* {
      "title": "A Multimodal Generative AI Assistant for Whole Slide Computational Pathology",
      "badges": ["Nature Cancer"],
      "year": "2026",
      "authors": "Ying Chen, et al. Yuanfeng Ji#",
      links: [
        {
          label: "paper",
          url: "https://arxiv.org/abs/2410.11761"
        }
      ]
    }, */
    {
      "title": "ChexGen: A Generative Foundation Model for Chest Radiography",
      "badges": ["NEJM AI"],
      "year": "2026",
      "authors": "Yuanfeng Ji*, Dan Lin*, Xiyue Wang*, Lu Zhang, Wenhui Zhou, Chongjian Ge, Ruihang Chu, Xiaoli Yang, Junhan Zhao, Junsong Chen, Xiangde Luo, Sen Yang, Jin Fang, Ping Luo#, Ruijiang Li#",
      links: [
        {
          label: "paper",
          url: "https://arxiv.org/abs/2509.03903"
        },
        {
          label: "article",
          url: "https://ai.nejm.org/doi/abs/10.1056/AIoa2500799"
        },
        {
          label: "code",
          url: "https://github.com/era-ai-biomed/ChexGen"
        },
        {
          label: "NotebookLLM",
          url: "https://notebooklm.google.com/notebook/46829136-2367-47ec-a683-8e06b929a2bd?authuser=2"
        }
      ]
    },
    /* {
      "title": "A Unified Foundation Model of Spatial Proteomics for Biomedical Discovery",
      "badges": ["Under Review @ Nature"],
      "year": "2026",
      "authors": "Yuanfeng Ji*, et al.",
      "links": []
    },
    {
      "title": "BioMaker: Towards Agentic Development for Biomedical Image Analysis",
      "badges": ["Under Review @ Nature Biomedical Engineering"],
      "year": "2026",
      "authors": "Zhongzhen Huang, et al. Yuanfeng Ji#",
      "links": []
    },
    {
      "title": "A Generative World Model for Tomographic Medical Imaging",
      "badges": ["Under Review @ Nature Machine Intelligence"],
      "year": "2026",
      "authors": "Jin Ye, et al. Yuanfeng Ji#",
      "links": []
    }, */
    {
      "title": "Cellular Architecture and Neighborhood-informed Virtual Spatial Tumor Profiling from Histopathology",
      "badges": ["Cell"],
      "year": "2026",
      "authors": "Yuchen Li*, Zhe Li*, Ryan Quinton, Yuanfeng Ji, Xiaoming Zhang, Jinxi Xiang, Xiyue Wang, Sen Yang, Feyisope Eweje, Yijiang Chen, Xiangde Luo, Yuanyuan Li, Jonathan Mulholland, Siwei Chen, Colin Bergstrom, Ted Kim, Francesca Maria Olguin, Sierra Willens, Steven H. Lin, Jeffrey J. Nirschl, Robert West, Joel Neal, Maximilian Diehn, Ruijiang Li#",
      "links": [
        {
          "label": "paper",
          "url": "https://www.cell.com/cell/fulltext/S0092-8674(26)00590-8"
        }
      ]
    },
    {
      "title": "nnMIL: A Generalizable Multiple Instance Learning Framework for Computational Pathology",
      "badges": ["In Principle Accepted @ Nature Biomedical Engineering"],
      "year": "2026",
      "authors": "Xiangde Luo, Jinxi Xiang, Yuanfeng Ji, Ruijiang Li",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2511.14907"
        },
        {
          "label": "code",
          "url": "https://github.com/Luoxd1996/nnMIL"
        },
        {
          "label": "project",
          "url": "https://jinxixiang.com/publication/preprint-nnmil/"
        }
      ]
    },
    /* {
      "title": "Ensemble Learning of Foundation Models for Precision Oncology",
      "badges": ["Major Revision @ Cancer Cell"],
      "year": "2026",
      "authors": "Xiangde Luo, Xiyue Wang, ..., Yuanfeng Ji, et al.",
      "links": []
    }, */
    {
      "title": "SP-Mind: An Autonomous Reasoning Agent for Spatial Proteomics Analysis",
      "badges": ["ICML26"],
      "year": "2026",
      "authors": "Yuchen Yuan*, Yuanfeng Ji*, Zhongxiao Li, Ruijiang Li",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2606.24235"
        },
        {
          "label": "code",
          "url": "https://github.com/tomtommyyuan/spmind"
        },
        {
          "label": "dataset",
          "url": "https://huggingface.co/datasets/tomyuanyucheng/spmind"
        }
      ]
    },
    {
      "title": "UniMedVL: Unifying Medical Multimodal Understanding and Generation Through Observation-Knowledge-Analysis",
      "badges": ["ICML26"],
      "year": "2026",
      "authors": "Junzhi Ning, Wei Li, ..., Yuanfeng Ji, et al.",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2510.15710"
        },
        {
          "label": "code",
          "url": "https://github.com/uni-medical/UniMedVL"
        },
        {
          "label": "project",
          "url": "https://uni-medical.github.io/UniMedVL_Web/"
        },
        {
          "label": "model",
          "url": "https://huggingface.co/General-Medical-AI/UniMedVL"
        },
        {
          "label": "dataset",
          "url": "https://huggingface.co/datasets/General-Medical-AI/UniMedVL-5M"
        }
      ]
    },
    {
      "title": "GMAI-VL-R1: Harnessing Reinforcement Learning for Multimodal Medical Reasoning",
      "badges": ["Arxiv"],
      "year": "2025",
      "authors": "Yanzhou Su, Tianbin Li, Jiyao Liu, Chenglong Ma, Junzhi Ning, Cheng Tang, Sibo Ju, Jin Ye, Pengcheng Chen, Ming Hu, Shixiang Tang, Lihao Liu, Bin Fu, Wenqi Shao, Xiaowei Hu, Xiangwen Liao, Yuanfeng Ji#, Junjun He#",
      links: [
        {
          label: "paper",
          url: "https://arxiv.org/abs/2504.01886"
        },
        {
          label: "code",
          url: "https://github.com/uni-medical/GMAI-VL-R1"
        },
        {
          label: "dataset",
          url: "https://huggingface.co/datasets/General-Medical-AI/GMAI-Reasoning10K"
        }
      ]
    },
    {
      "title": "GMAI-VL & GMAI-VL-5.5M: A Large Vision-Language Model and A Comprehensive Multimodal Dataset Towards General Medical AI",
      "badges": ["AAAI25"],
      "year": "2025",
      "authors": "Tianbin Li, Yanzhou Su, Wei Li, ..., Yuanfeng Ji, et al.",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2411.14522"
        },
        {
          "label": "code",
          "url": "https://github.com/uni-medical/GMAI-VL"
        },
        {
          "label": "dataset",
          "url": "https://huggingface.co/datasets/General-Medical-AI/GMAI-VL-5.5M"
        }
      ]
    },
    {
      "title": "A Survey of Scientific Large Language Models: From Data Foundations to Agent Frontiers",
      "badges": ["Arxiv"],
      "year": "2025",
      "authors": "Ming Hu, Chenglong Ma, ..., Yuanfeng Ji, et al.",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2508.21148"
        }
      ]
    },
    {
      "title": "Pancancer Outcome Prediction via a Unified Weakly Supervised Deep Learning Model",
      "badges": ["Signal Transduction and Targeted Therapy"],
      "year": "2025",
      "authors": "Wenhua Yuan, Ying Chen, ..., Yuanfeng Ji, et al.",
      "links": [
        {
          "label": "paper",
          "url": "https://www.nature.com/articles/s41392-025-02374-w"
        },
        {
          "label": "code",
          "url": "https://github.com/Valeyards/ProgPath"
        }
      ]
    },
    {
      "title": "MedShapeNet: A Large-Scale Dataset of 3D Medical Shapes for Computer Vision",
      "badges": ["Biomedical Engineering"],
      "year": "2025",
      "authors": "Jianning Li, Zongwei Zhou, Jiancheng Yang, ..., Yuanfeng Ji, et al.",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2308.16139"
        },
        {
          "label": "project",
          "url": "https://medshapenet.ikim.nrw/"
        },
        {
          "label": "api",
          "url": "https://github.com/GLARKI/MedShapeNet2.0"
        }
      ]
    },
    {
      "title": "RetinaLogos: Fine-Grained Synthesis of High-Resolution Retinal Images Through Captions",
      "badges": ["MICCAI25"],
      "year": "2025",
      "authors": "Junzhi Ning, Cheng Tang, ..., Yuanfeng Ji, et al.",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2505.12887"
        },
        {
          "label": "code",
          "url": "https://github.com/uni-medical/retina-text2cfp"
        }
      ]
    },
    {
      "title": "MedITok: A Unified Tokenizer for Medical Image Synthesis and Interpretation",
      "badges": ["Arxiv"],
      "year": "2025",
      "authors": "Chenglong Ma*, Yuanfeng Ji*, Jin Ye, Zilong Li, Chenhui Wang, Junzhi Ning, Wei Li, Lihao Liu, Qiushan Guo, Tianbin Li, Junjun He, Hongming Shan",
      links: [
        {
          label: "paper",
          url: "https://arxiv.org/abs/2505.19225"
        },
        {
          label: "code",
          url: "https://github.com/Masaaki-75/meditok"
        },
        {
          label: "model",
          url: "https://huggingface.co/massaki75/meditok/tree/main"
        },
        {
          label: "NotebookLLM",
          url: "https://notebooklm.google.com/notebook/4c5428e8-6fcc-4ee6-97ad-a85b704a65a8?authuser=2"
        }
      ]
    },
    {
      "title": "Towards Interpretable Counterfactual Generation via Multimodal Autoregression",
      "badges": ["MICCAI25"],
      "year": "2025",
      "authors": "Chenglong Ma*, Yuanfeng Ji*, Jin Ye, Lu Zhang, Ying Chen, Tianbin Li, Mingjie Li, Junjun He, Hongming Shan",
      links: [
        {
          label: "paper",
          url: "https://arxiv.org/abs/2503.23149"
        },
        {
          label: "code",
          url: "https://github.com/Masaaki-75/progemu"
        },
        {
          label: "project",
          url: "https://progemu.github.io"
        },
        {
          label: "model",
          url: "https://huggingface.co/massaki75/progemu/tree/main"
        },
        {
          label: "NotebookLLM",
          url: "https://notebooklm.google.com/notebook/b4db2610-d118-4fbe-9f89-0c692bda3ea6?authuser=2"
        }
      ]
    },
    {
      "title": "SlideChat: A Large Vision-Language Assistant for Whole-Slide Pathology Image Understanding",
      "year": "2025",
      "badges": ["CVPR25"],
      "authors": "Ying Chen*, Guoan Wang*, Yuanfeng Ji*#, Yanjun Li, Jin Ye, Tianbin Li, Bin Zhang, Nana Pei, Rongshan Yu, Yu Qiao, Junjun He#",
      links: [
        {
          label: "paper",
          url: "https://arxiv.org/abs/2410.11761"
        },
        {
          label: "code",
          url: "https://github.com/uni-medical/SlideChat"
        },
        {
          label: "project",
          url: "https://uni-medical.github.io/SlideChat.github.io/"
        },
        {
          label: "NotebookLLM",
          url: "https://notebooklm.google.com/notebook/22733947-ab84-4f5c-8f4a-2d0765f4efaf?authuser=2"
        }
      ]
    },
    {
      "title": "CompGS: Unleashing 2D Compositionality for Compositional Text-to-3D via Dynamically Optimizing 3D Gaussians",
      "year": "2025",
      "badges": ["CVPR25"],
      "authors": "Chongjian Ge, Chenfeng Xu, Yuanfeng Ji, et al.",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2410.20723"
        },
        {
          "label": "project",
          "url": "https://chongjiange.github.io/compgs.html"
        }
      ]
    },
    {
      "title": "SyNDock: N Rigid Protein Docking via Learnable Group Synchronization",
      "badges": ["Arxiv"],
      "year": "2023",
      "authors": "Yuanfeng Ji, Yatao Bian, Guoji Fu, Peilin Zhao, Ping Luo",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2305.15156"
        }
      ]
    },    
    {
      "title": "Large Language Models as Automated Aligners for Benchmarking Vision-Language Models",
      "badges": ["ICLR24"],
      "year": "2024",
      "authors": "Yuanfeng Ji*, Chongjian Ge*, Weikai Kong, Enze Xie, Zhengying Liu, Zhengguo Li, Ping Luo",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2311.14580"
        }
      ]
    },
    {
      "title": "DDP: Diffusion Model for Dense Visual Prediction",
      "badges": ["ICCV23"],
      "year": "2023",
      "authors": "Yuanfeng Ji*, Zhe Chen*, Enze Xie, Lanqing Hong, Xihui Liu, Zhaoqiang Liu, Tong Lu, Zhenguo Li, Ping Luo",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2303.17559"
        },
        {
          "label": "code",
          "url": "https://github.com/JiYuanFeng/DDP"
        }
      ]
    },
    {
      "title": "DrugOOD: Out-of-Distribution Dataset Curator and Benchmark for AI-aided Drug Discovery",
      "badges": ["AAAI22", "Oral"],
      "year": "2022",
      "authors": "Yuanfeng Ji*, Lu Zhang*, Jiaxiang Wu, Bingzhe Wu, Lanqing Li, Long-Kai Huang, Tingyang Xu, Yu Rong, Jie Ren, Ding Xue, Houtim Lai, Wei Liu, Junzhou Huang, Shuigeng Zhou, Ping Luo, Peilin Zhao, Yatao Bian",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2201.09637"
        },
        {
          "label": "code",
          "url": "https://github.com/tencent-ailab/DrugOOD"
        },
        {
          "label": "project",
          "url": "https://drugood.github.io/"
        }
      ]
    },
    {
      "title": "AMOS: A Large-Scale Abdominal Multi-Organ Benchmark for Versatile Medical Image Segmentation",
      "badges": ["NeurIPS22", "Oral"],
      "year": "2022",
      "authors": "Yuanfeng Ji, Haotian Bai, Chongjian Ge, Jie Yang, Ye Zhu, Ruimao Zhang, Zhen Li, Lingyan Zhang, Wanling Ma, Xiang Wan, Ping Luo",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2206.08023"
        },
        {
          "label": "code",
          "url": "https://github.com/JiYuanFeng/AMOS"
        },
        {
          "label": "project",
          "url": "https://amos22.grand-challenge.org/"
        }
      ]
    },
    {
      "title": "The Medical Segmentation Decathlon",
      "badges": ["Nature Communications"],
      "year": "2022",
      "authors": "Michela Antonelli, Annika Reinke, Spyridon Bakas, ..., Yuanfeng Ji, et al.",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2106.05735"
        },
        {
          "label": "project",
          "url": "http://medicaldecathlon.com/"
        },
        {
          "label": "dataset",
          "url": "http://medicaldecathlon.com/dataaws/"
        }
      ]
    },
    {
      "title": "Multi-Compound Transformer for Accurate Biomedical Image Segmentation",
      "badges": ["MICCAI21"],
      "year": "2021",
      "authors": "Yuanfeng Ji, Ruimao Zhang, Huijie Wang, Zhen Li, Lingyun Wu, Shaoting Zhang, Ping Luo",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2106.14385"
        },
        {
          "label": "code",
          "url": "https://github.com/JiYuanFeng/MCTrans"
        }
      ]
    },
    {
      "title": "Multi-Frame Collaboration for Effective Endoscopic Video Polyp Detection",
      "badges": ["MICCAI21"],
      "year": "2021",
      "authors": "Lingyun Wu, Zhiqiang Hu, Yuanfeng Ji, Ping Luo, Shaoting Zhang",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2107.03609"
        },
        {
          "label": "code",
          "url": "https://github.com/lingyunwu14/STFT"
        }
      ]
    },
    {
      "title": "UXNet: Searching Multi-level Feature Aggregation for 3D Medical Image Segmentation",
      "badges": ["MICCAI20"],
      "year": "2020",
      "authors": "Yuanfeng Ji, Ruimao Zhang, Zhen Li, Jiamin Ren, Shaoting Zhang, Ping Luo",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2009.07501"
        }
      ]
    },
    {
      "title": "RANet: Region Attention Network for Semantic Segmentation",
      "badges": ["NeurIPS20"],
      "year": "2020",
      "authors": "Dingguo Shen*, Yuanfeng Ji*, Ping Li, Yi Wang, Di Lin",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2010.11725"
        },
        {
          "label": "code",
          "url": "https://github.com/dingguo1996/RANet"
        }
      ]
    },
    {
      "title": "PRSNet: Part Relation and Selection Network for Bone Age Assessment",
      "badge": "MICCAI19",
      "badges": ["MICCAI2019"],
      "year": "2019",
      "authors": "Yuanfeng Ji, Hao Chen, Dan Lin, Xiaohua Wu, Di Lin",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/1909.05651"
        }
      ]
    },
    {
      "title": "ZigZagNet: Fusing Top-Down and Bottom-Up Context for Object Segmentation",
      "badges": ["CVPR19"],
      "year": "2019",
      "authors": "Di Lin, Dingguo Shen, Siyang Shen, Yuanfeng Ji, et al.",
      "links": [
        {
          "label": "paper",
          "url": "https://openaccess.thecvf.com/content_CVPR_2019/html/Lin_ZigZagNet_Fusing_Top-Down_and_Bottom-Up_Context_for_Object_Segmentation_CVPR_2019_paper.html"
        },
        {
          "label": "code",
          "url": "https://github.com/sitingshen/Detectron-ZZNet"
        }
      ]
    },
    {
      "title": "SCN: Switchable Context Network for Semantic Segmentation of RGB-D Images",
      "badges": ["IEEE T-Cybernetics"],
      "year": "2018",
      "authors": "Di Lin, Ruimao Zhang, Yuanfeng Ji, Ping Li, Hui Huang",
      "links": [
        {
          "label": "paper",
          "url": "https://web.comp.polyu.edu.hk/pinli/CoRR/TCYB/TCYB2020_1.pdf"
        }
      ]
    },
  ],
  work: [
    {
      company: "Stanford University",
      link: "https://profiles.stanford.edu/yuanfeng-ji",
      badges: [],
      title: "Postdoctoral Researcher",
      logo: NSNLogo,
      start: "2024",
      end: null,
      description:
        "Engaged in AI applications for precision medicine under the guidance of Prof. Ruijiang Li.",
    },
    {
      company: "Stanford University",
      link: "https://profiles.stanford.edu/yuanfeng-ji",
      badges: [],
      title: "Visiting Student Researcher",
      logo: NSNLogo,
      start: "2023",
      end: "2024",
      description:
        "Engaged in AI applications for precision medicine under the guidance of Prof. Ruijiang Li.",
    },
    {
      company: "Huawei Noah's Ark Lab",
      link: "https://www.noahlab.com.hk/",
      badges: [],
      title: "Research Intern",
      logo: NSNLogo,
      start: "2022",
      end: "2023",
      description:
        "Worked on vision foundation models.",
    },
    {
      company: "Tencent AI Lab",
      link: "https://ai.tencent.com/ailab/en/index",
      badges: [],
      title: "Research Intern",
      logo: NSNLogo,
      start: "2021",
      end: "2022",
      description:
        "Led the development of a DrugAI dataset and benchmark for out-of-distribution generalization; developed multi-protein docking algorithms incorporating graph-based deep learning techniques.",
    },
    {
      company: "SenseTime Research",
      link: "https://www.sensetime.com/",
      badges: [],
      title: "Research Intern",
      logo: NSNLogo,
      start: "2019",
      end: "2020",
      description:
        "Developed automated machine learning algorithms for medical image analysis; led the creation of a multi-site abdominal organ segmentation dataset and benchmark.",
    },
    {
      company: "Imsight Medical Technology",
      link: "https://www.imsightmed.com/",
      badges: [],
      title: "Deep Learning Researcher",
      logo: NSNLogo,
      start: "2018",
      end: "2019",
      description:
        "Led the development of CAD products implemented in several institutions in Hong Kong, including a chest X-ray diagnostic system detecting 17 lung diseases and a sequencing algorithm optimizing diagnostic queues at medical facilities.",
    },
    {
      "company": "Visual Computing Research Center, Shenzhen University",
      "link": "https://vcc.tech/",
      "badges": [],
      "title": "Research Assistant",
      "logo": "VCCLogo",  // Replace with the actual VCC logo
      "start": "2018",
      "end": "2019",
      "description": "Under the supervision of Prof. Hui Huang and Prof. Di Lin, contributed to research on semantic segmentation.",
    }
  ],
  skills: [
    "Computer Vision",
    "Medical Image Analysis",
    "Artificial Intelligence",
    "Deep Learning",
    "Machine Learning",
    "Python",
    "TensorFlow",
    "PyTorch",
  ],
  projects: [
    {
      title: "DDP: Diffusion Model for Dense Visual Prediction",
      techStack: ["Research Project", "Python", "PyTorch"],
      description:
        "Developed a framework for dense visual predictions based on the conditional diffusion pipeline, following a 'noise-to-map' generative paradigm.",
      logo: NSNLogo,
      link: {
        label: "arXiv",
        href: "https://arxiv.org/abs/2303.17559",
      },
    },
    {
      title: "AMOS: A Large-Scale Abdominal Multi-Organ Benchmark",
      techStack: ["Research Project", "Python", "TensorFlow"],
      description:
        "Created a comprehensive benchmark for abdominal multi-organ segmentation, facilitating advancements in medical image analysis.",
      logo: NSNLogo,
      link: {
        label: "NeurIPS",
        href: "https://neurips.cc/virtual/2022/poster/55771",
      },
    },
    {
      title: "DrugOOD: Out-of-Distribution Dataset Curator and Benchmark",
      techStack: ["Research Project", "Python", "PyTorch"],
      description:
        "Developed a dataset curator and benchmark for AI-aided drug discovery, focusing on affinity prediction problems with noisy annotations.",
      logo: NSNLogo,
      link: {
        label: "AAAI",
        href: "https://arxiv.org/abs/2201.09637",
      },
    },
  ],
  challenges: [
    {
      title: "Kaggle RSNA Pneumonia Detection Challenge",
      year: "2018",
      rank: "Ranked 5th (Gold Medal)",
      link: "https://www.kaggle.com/c/rsna-pneumonia-detection-challenge",
    },
    {
      title: "COCO 2019 Panoptic Segmentation Task",
      year: "2019",
      rank: "Ranked 3rd",
      link: "https://cocodataset.org/#panoptic-2019",
    },
    {
      title: "MICCAI 2018 ISIC Skin Lesion Segmentation Challenge",
      year: "2018",
      rank: "Ranked 3rd",
      link: "https://challenge2018.isic-archive.com/",
    },
    {
      title: "Kaggle Human Protein Atlas Image Classification Challenge",
      year: "2018",
      rank: "Ranked 87th (Silver Medal)",
      link: "https://www.kaggle.com/c/human-protein-atlas-image-classification",
    }
  ],
  activities: [
    {
      title: "GAIA: Generative AI for Biomedical Image Analysis Workshop",
      year: "ICCV 2025",
      link: "https://era-ai-biomed.github.io/GAIA/",
    },
    {
      title: "AMOS: Abdominal Multi-Organ Segmentation Challenge",
      year: "MICCAI 2022",
      link: "https://amos22.grand-challenge.org/",
    },
    {
      title: "AMOS-MM: Abdominal Multimodal Analysis Challenge",
      year: "MICCAI 2024",
      link: "https://www.codabench.org/competitions/3137/",
    },
  ],
  news: [
    {
      title: "Received a Biswas Family Foundation Fast Grant",
      date: "2026-07-10",
      description: "Received USD 50,000 in funding to lead the 2026–2027 project\n“An AI Co-Scientist for Spatial-Proteomics Biomarker Discovery.”",
      link: "https://www.biswasfamilyfoundation.org/science/fast-grants",
    },
    {
      title: "Cell Paper Published",
      date: "2026-06-17",
      description: "Congratulations to Yuchen Li on the Cell paper.",
      link: "https://www.cell.com/cell/fulltext/S0092-8674(26)00590-8",
    },
    {
      title: "nnMIL Accepted by Nature Biomedical Engineering",
      date: "2026-06-17",
      description: "Congratulations to Xiangde Luo on nnMIL.",
      link: "https://arxiv.org/abs/2511.14907",
    },
    {
      title: "Two Papers Accepted by ICML 2026",
      date: "2026-05-01",
      description: "Two papers have been accepted by ICML 2026. Congratulations to all collaborators!",
      link: "",
    },
    /* {
      title: "Paper In Principle Accepted by Nature Cancer",
      date: "2026-04-10",
      description: "Our paper 'A Multimodal Generative AI Assistant for Whole Slide Computational Pathology' has been in principle accepted by Nature Cancer! Grateful to all my collaborators for their excellent work.",
      link: "",
    }, */
    {
      title: "ChexGen Accepted by NEJM AI",
      date: "2026-04-01",
      description: "Our paper 'ChexGen: A Generative Foundation Model for Chest Radiography' has been accepted by NEJM AI! Grateful to all my collaborators for their outstanding contributions.",
      link: "https://arxiv.org/abs/2509.03903",
    },
    {
      title: "GAIA Workshop Now Accepting Paper Submissions",
      date: "2025-06-15",
      description: "Our ICCV 2025 workshop 'GAIA: Generative AI for Biomedical Image Analysis' is now accepting paper submissions! Paper submission deadline is August 20, 2025. We welcome submissions on medical image generation, vision-language foundation models, clinical workflow intelligence, and more.",
      link: "https://era-ai-biomed.github.io/GAIA/",
    },
    {
      title: "Two Papers Accepted by MICCAI 2025",
      date: "2025-06-15",
      description: "Two papers have been accepted by MICCAI 2025! 'Towards Interpretable Counterfactual Generation via Multimodal Autoregression' was accepted as Early Accept, and another paper on medical imaging analysis was also accepted. Grateful to all my collaborators for their excellent work!",
      link: "",
    },
    {
      title: "GAIA Workshop Proposal Accepted at ICCV 2025",
      date: "2025-06-04",
      description: "Our workshop proposal 'GAIA: Generative AI for Biomedical Image Analysis - Opportunities, Challenges and Futures' has been accepted at ICCV 2025! Looking forward to bringing together leading researchers to explore the future of generative AI in medical imaging.",
      link: "https://era-ai-biomed.github.io/GAIA/",
    },
    {
      title: "Served as an Area Chair for MICCAI 2025",
      date: "2025-02-28",
      description: "I'm very excited to have the opportunity to contribute to the community!",
      link: "",
    },
    {
      title: "Two papers accepted by CVPR 2025",
      date: "2025-02-28",
      description: "Congratulations to my co-authors for their excellent work!",
      link: "",
    },
    {
      title: "Joined LiLab as a Postdoctoral Researcher",
      date: "2024-11-1",
      description: "I completed my Ph.D. in August 2024 and have joined Li Lab at Stanford University as a postdoctoral researcher.",
      link: "https://profiles.stanford.edu/yuanfeng-ji",
    }
  ]
} as const;
