import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";


export const RESUME_DATA = {
  name: "Yuanfeng Ji",
  initials: "YJ",
  location: "California, USA, PT",
  locationLink: "https://www.google.com/maps/place/California",
  about:
    "AI researcher focused on medical imaging and computer vision. Originally from Chaoshan region, China.",
  summary:
    "Postdoctoral researcher at Stanford University specializing in AI-driven precision medicine. I focus on developing innovative multimodal AI systems for medical imaging, with expertise spanning computer vision, generative models, and medical image analysis. My research bridges the gap between cutting-edge AI technology and real-world clinical applications.",
  avatarUrl: "/image.png",
  personalWebsiteUrl: "https://jiyuanfeng.github.io/",
  contact: {
    email: "yfj@stanford.edu",
    tel: "6504441771",
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
    {
      "title": "ChexGen: A Generative Foundation Model for Chest Radiography",
      "badges": ["arxiv"],
      "year": "2025",
      "authors": "Yuanfeng Ji, Dan Lin, Xiyue Wang, Lu Zhang, Wenhui Zhou, Chongjian Ge, Ruihang Chu, Xiaoli Yang, Junhan Zhao, Junsong Chen, Xiangde Luo, Sen Yang, Jin Fang, Ping Luo, Ruijiang Li",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2509.03903"
        }
      ]
    },
    {
      "title": "GMAI-VL-R1: Harnessing Reinforcement Learning for Multimodal Medical Reasoning",
      "badges": ["arxiv"],
      "year": "2025",
      "authors": "Yanzhou Su, Tianbin Li, Jiyao Liu, Chenglong Ma, Junzhi Ning, Cheng Tang, Sibo Ju, Jin Ye, Pengcheng Chen, Ming Hu, Shixiang Tang, Lihao Liu, Bin Fu, Wenqi Shao, Xiaowei Hu, Xiangwen Liao, Yuanfeng Ji#, Junjun He#",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2504.01886"
        },
        {
          "label": "code",
          "url": "https://github.com/uni-medical/GMAI-VL-R1"
        }
      ]
    },
    {
      "title": "MedITok: A Unified Tokenizer for Medical Image Synthesis and Interpretation",
      "badges": ["arxiv"],
      "year": "2024",
      "authors": "Chenglong Ma*, Yuanfeng Ji*, Jin Ye, Zilong Li, Chenhui Wang, Junzhi Ning, Wei Li, Lihao Liu, Qiushan Guo, Tianbin Li, Junjun He, Hongming Shan",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2505.19225"
        },
        {
          "label": "code",
          "url": "https://github.com/Masaaki-75/meditok"
        }
      ]
    },
    {
      "title": "Towards Interpretable Counterfactual Generation via Multimodal Autoregression",
      "badges": ["MICCAI25"],
      "year": "2024", 
      "authors": "Chenglong Ma*, Yuanfeng Ji*, Jin Ye, Lu Zhang, Ying Chen, Tianbin Li, Mingjie Li, Junjun He, Hongming Shan",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2503.23149"
        },
        {
          "label": "project",
          "url": "https://progemu.github.io"
        }
      ]
    },
    {
      "title": "SlideChat: A Large Vision-Language Assistant for Whole-Slide Pathology Image Understanding",
      "badges": ["CVPR25"],
      "authors": "Ying Chen*, Guoan Wang*, Yuanfeng Ji*#, Yanjun Li, Jin Ye, Tianbin Li, Bin Zhang, Nana Pei, Rongshan Yu, Yu Qiao, Junjun He#",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2410.11761"
        }
      ]
    },
    {
      "title": "CompGS: Unleashing 2D Compositionality for Compositional Text-to-3D via Dynamically Optimizing 3D Gaussians",
      "badges": ["CVPR25"],
      "authors": "Chongjian Ge, Chenfeng Xu, Yuanfeng Ji, Chensheng Peng, Masayoshi Tomizuka, Ping Luo, Mingyu Ding, Varun Jampani, Wei Zhan",
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
      "badges": ["arxiv"],
      "year": "2023",
      "authors": "Yuanfeng Ji, Yatao Bian, Guoji Fu, Peilin Zhao, Ping Luo",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2305.15156"
        },
        {
          "label": "code",
          "url": "https://github.com/JiYuanFeng/SyNDock"
        },
        {
          "label": "project",
          "url": "https://jiyuanfeng.github.io/SyNDock"
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
        },
        {
          "label": "code",
          "url": "https://github.com/JiYuanFeng/AutoBench"
        },
        {
          "label": "project",
          "url": "https://jiyuanfeng.github.io/AutoBench"
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
      "title": "DrugOOD: Out-of-Distribution (OOD) Dataset Curator and Benchmark for AI-aided Drug Discovery",
      "badges": ["AAAI23", "Oral"],
      "year": "2023",
      "authors": "Yuanfeng Ji*, Lu Zhang*, Jiaxiang Wu, Bingzhe Wu, Lanqing Li, Long-Kai Huang, Tingyang Xu, Yu Rong, Jie Ren, Ding Xue, Houtim Lai, Wei Liu, Junzhou Huang, Shuigeng Zhou, Ping Luo, Peilin Zhao, Yatao Bian",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2201.09637"
        },
        {
          "label": "code",
          "url": "https://github.com/JiYuanFeng/DrugOOD"
        },
        {
          "label": "project",
          "url": "https://jiyuanfeng.github.io/DrugOOD"
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
          "url": "https://jiyuanfeng.github.io/AMOS"
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
          "url": "https://github.com/JiYuanFeng/MCT"
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
        },
        {
          "label": "code",
          "url": "https://github.com/JiYuanFeng/UXNet"
        }
      ]
    },
    {
      "title": "RANet: Region Attention Network for Semantic Segmentation",
      "badges": ["Neuips2020"],
      "year": "2020",
      "authors": "Dingguo Shen*, Yuanfeng Ji*, Ping Li, Yi Wang, Di Lin",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2010.11725"
        },
        {
          "label": "code",
          "url": "https://github.com/JiYuanFeng/RANet"
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
      "title": "Multi-Scale Context Intertwining for Semantic Segmentation",
      "badge": "ECCV18",
      "badges": ["ECCV18"],
      "year": "2018",
      "authors": "Di Lin, Yuanfeng Ji, Dani Lischinski, Daniel Cohen-Or, Hui Huang",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/1807.00583"
        }
      ]
    }
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
      year: "2019",
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
      year: "2019",
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
      link: "https://amos-mm.grand-challenge.org/",
    },
  ],
  news: [
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
