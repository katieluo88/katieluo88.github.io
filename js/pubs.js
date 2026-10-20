/* ============================================================
   PUBLICATIONS DATA
   ------------------------------------------------------------
   To add a paper: copy a block and fill it in.
   To re-group: change `topic` to one of the TOPICS keys below,
   and/or reorder the TOPICS array. That's it — layout follows.

   Fields:
     topic    one of the TOPICS keys
     title    string
     venue    e.g. "NeurIPS 2024"  ("In Submission" is fine)
     oral     true -> shows an "Oral" badge (optional)
     year     number (used to sort within a topic, newest first)
     authors  array; your name is auto-bolded, add "*" for co-first
     img      filename in assets/pubs/ , or null for a text-only entry
     links    { pdf, code, project, dataset, video }  (omit unused)
   ============================================================ */

// TODO (in progress): these themes will be replaced with new categories once the
// "My research centers on..." paragraph in index.html is rewritten to match my
// research statement thesis. Then re-assign each paper's `topic` below.
// Display order of publication themes. Reorder freely — the page follows.
// `label` is the full accordion heading; `short` is the intro nav chip.
const TOPICS = [
  { key: "multimodal",  short: "Multimodal Foundations",  label: "Multimodal Foundations: Reasoning & Representations" },
  { key: "perception",  short: "3D Perception",           label: "Label-Free & Self-Supervised 3D Perception" },
  { key: "cooperative", short: "Cooperative Perception",  label: "Multi-Agent & Map-Augmented Perception" },
  { key: "planning",    short: "Prediction & Planning",   label: "Prediction, Planning & Decision-Making" },
];

const PUBLICATIONS = [
  /* ---------- Multimodal Foundations: Reasoning & Representations ---------- */
  {
    topic: "multimodal", title: "Self-Supervised Bootstrapping of Action-Predictive Embodied Reasoning",
    venue: "RSS 2026", year: 2026, img: "rnbencore.jpg",
    authors: ["M. Ganai*", "Katie Luo*", "J. Frey", "C. Barrett", "Marco Pavone"],
    links: { pdf: "https://arxiv.org/abs/2602.08167" }, // VERIFY
  },
  {
    topic: "multimodal", title: "Bridging Structure and Language: Graph-Based Visual Reasoning for Autonomous Road Understanding",
    venue: "In Submission (NeurIPS 2026)", year: 2026, img: "roadunderstanding.png",
    authors: ["L. Wild", "Katie Z Luo", "Marco Pavone"],
    links: { pdf: "https://arxiv.org/abs/2605.20942" }, // VERIFY
  },
  {
    topic: "multimodal", title: "Learning from Synthetic Data Improves Multi-hop Reasoning",
    venue: "ICLR 2026", year: 2026, img: "syntheticreasoning.png",
    authors: ["A. Kabra", "A. Gong", "Y. Yin", "K. Stankevičiūtė", "D. Go", "Katie Z Luo", "J. Lee", "C. P. Gomes", "et al."],
    links: {},
  },
  {
    topic: "multimodal", title: "S4-Driver: Scalable Self-Supervised Driving Multimodal LLM with Spatio-Temporal Visual Representation",
    venue: "CVPR 2025", year: 2025, img: "s4driver.png",
    authors: ["Yichen Xie", "Runsheng Xu", "Tong He", "Jyh-Jing Hwang", "Katie Luo", "Jingwei Ji", "Hubert Lin", "et al."],
    links: {},
  },
  {
    topic: "multimodal", title: "Enhanced Motion Forecasting with Plug-and-Play Multimodal Large Language Models",
    venue: "IROS 2025", year: 2025, img: "plugnplay.png",
    authors: ["Katie Luo", "Jingwei Ji", "Tong He", "Runsheng Xu", "Yichen Xie", "Dragomir Anguelov", "Mingxing Tan"],
    links: {},
  },
  {
    topic: "multimodal", title: "Denoising Vision Transformers",
    venue: "ECCV 2024", oral: true, year: 2024, img: "denoisingvit.png",
    authors: ["Jiawei Yang*", "Katie Z Luo*", "Jiefeng Li", "Congyue Deng", "Leonidas Guibas", "Dilip Krishnan", "Kilian Q. Weinberger", "Yonglong Tian", "Yue Wang"],
    links: { pdf: "https://arxiv.org/pdf/2401.02957.pdf", code: "https://github.com/Jiawei-Yang/Denoising-ViT", project: "https://jiawei-yang.github.io/DenoisingViT/" },
  },
  {
    topic: "multimodal", title: "Orchestrating LLMs with Different Personalizations",
    venue: "Preprint", year: 2024, img: "orchestratingllms.png",
    authors: ["Jia-Ping Zhou", "Katie Z Luo", "Jingru Gu", "Jason Yuan", "Kilian Q. Weinberger", "Wen Sun"],
    links: { pdf: "https://arxiv.org/abs/2407.04181" },
  },
  {
    topic: "multimodal", title: "Stay Positive: Non-Negative Image Synthesis for Augmented Reality",
    venue: "CVPR 2021", oral: true, year: 2021, img: "staypositive.png",
    authors: ["Katie Luo", "Guandao Yang", "Wenqi Xian", "Harald Haraldsson", "Bharath Hariharan", "Serge Belongie"],
    links: { pdf: "https://openaccess.thecvf.com/content/CVPR2021/papers/Luo_Stay_Positive_Non-Negative_Image_Synthesis_for_Augmented_Reality_CVPR_2021_paper.pdf", code: "https://github.com/katieluo88/StayPositive", project: "https://katieluo88.github.io/StayPositive/", video: "https://www.youtube.com/watch?v=wYEbZWtQ-T4" },
  },
  {
    topic: "multimodal", title: "Residual Aligned: Gradient Optimization for Non-Negative Image Synthesis",
    venue: "CV4ARVR Workshop, ICCV 2021", year: 2021, img: "residualaligned.png",
    authors: ["Fangyin Shen", "Katie Luo", "Guandao Yang", "Harald Haraldsson", "Serge Belongie"],
    links: { pdf: "https://arxiv.org/abs/2202.04036", code: "https://github.com/Florassss/ResidualAligned", video: "https://www.youtube.com/watch?v=lAfM5I8b6vM" },
  },

  /* ---------- Label-Free & Self-Supervised 3D Perception ---------- */
  {
    topic: "perception", title: "On the Feasibility and Opportunity of Autoregressive 3D Object Detection",
    venue: "Preprint", year: 2026, img: "autoreg3d.png",
    authors: ["Z. Huang", "J. Y. S. Jeon", "Z. Liu", "M. Campbell", "Kilian Q. Weinberger", "B. Hariharan", "et al."],
    links: {},
  },
  {
    topic: "perception", title: "DiffuBox: Refining 3D Object Detection with Point Diffusion",
    venue: "NeurIPS 2024", year: 2024, img: "diffubox.png",
    authors: ["Xiangyu Chen*", "Zhenzhen Liu*", "Katie Z Luo*", "Siddhartha Datta", "Adhitya Polavaram", "Yan Wang", "Yurong You", "Boyi Li", "Marco Pavone", "Wei-Lun Chao", "Mark Campbell", "Bharath Hariharan", "Kilian Q. Weinberger"],
    links: { pdf: "https://arxiv.org/pdf/2405.16034", code: "https://github.com/cxy1997/DiffuBox" },
  },
  {
    topic: "perception", title: "Better Monocular 3D Detectors with LiDAR from the Past",
    venue: "ICRA 2024", year: 2024, img: "imagehindsight.png",
    authors: ["Yurong You*", "Cheng Perng Phoo*", "Carlos A. Diaz-Ruiz", "Katie Z Luo", "Wei-Lun Chao", "Mark Campbell", "Bharath Hariharan", "Kilian Q. Weinberger"],
    links: {},
  },
  {
    topic: "perception", title: "Pre-training LiDAR-based 3D Object Detectors through Colorization",
    venue: "ICLR 2024", year: 2024, img: "pointcoloring.png",
    authors: ["Tai-Yu Pan", "Chenyang Ma", "Tianle Chen", "Cheng Perng Phoo", "Katie Z Luo", "Yurong You", "Mark Campbell", "Kilian Q. Weinberger", "Bharath Hariharan", "Wei-Lun Chao"],
    links: { pdf: "https://openreview.net/pdf?id=fB1iiH9xo7", code: "https://github.com/tydpan/GPC/" },
  },
  {
    topic: "perception", title: "Reward Finetuning for Faster and More Accurate Unsupervised Object Discovery",
    venue: "NeurIPS 2023", year: 2023, img: "drift.png",
    authors: ["Katie Z Luo*", "Zhenzhen Liu*", "Xiangyu Chen*", "Yurong You", "Cheng Perng Phoo", "Sagie Benaim", "Mark Campbell", "Wen Sun", "Bharath Hariharan", "Kilian Q. Weinberger"],
    links: { pdf: "https://arxiv.org/pdf/2310.19080.pdf", code: "https://github.com/katieluo88/DRIFT" },
  },
  {
    topic: "perception", title: "Unsupervised Domain Adaptation for Self-Driving from Past Traversal Features",
    venue: "BRAVO Workshop, ICCV 2023", year: 2023, img: "histda.png",
    authors: ["Travis Zhang", "Katie Luo", "Cheng Perng Phoo", "Yurong You", "Wei-Lun Chao", "Bharath Hariharan", "Mark Campbell", "Kilian Q. Weinberger"],
    links: { pdf: "https://openaccess.thecvf.com/content/ICCV2023W/BRAVO/papers/Zhang_Unsupervised_Domain_Adaptation_for_Self-Driving_from_Past_Traversal_Features_ICCVW_2023_paper.pdf", code: "https://github.com/zhangtravis/Hist-DA" },
  },
  {
    topic: "perception", title: "Learning to Detect Mobile Objects from LiDAR Scans Without Labels",
    venue: "CVPR 2022", year: 2022, img: "modest.jpg",
    authors: ["Yurong You", "Katie Luo", "Cheng Perng Phoo", "Wei-Lun Chao", "Wen Sun", "Bharath Hariharan", "Mark Campbell", "Kilian Q. Weinberger"],
    links: { pdf: "https://arxiv.org/pdf/2203.15882.pdf", code: "https://github.com/YurongYou/MODEST" },
  },
  {
    topic: "perception", title: "Unsupervised Adaptation from Repeated Traversals for Autonomous Driving",
    venue: "NeurIPS 2022", year: 2022, img: "roteda.jpg",
    authors: ["Yurong You", "Cheng Perng Phoo", "Katie Z Luo", "Travis Zhang", "Wei-Lun Chao", "Bharath Hariharan", "Mark Campbell", "Kilian Q. Weinberger"],
    links: { pdf: "https://openreview.net/pdf?id=0fKlU1OlANc", code: "https://github.com/YurongYou/Rote-DA" },
  },
  {
    topic: "perception", title: "Hindsight is 20/20: Leveraging Past Traversals to Aid 3D Perception",
    venue: "ICLR 2022", year: 2022, img: "hindsight.jpg",
    authors: ["Yurong You", "Katie Z Luo", "Xiangyu Chen", "Junan Chen", "Wei-Lun Chao", "Wen Sun", "Bharath Hariharan", "Mark Campbell", "Kilian Q. Weinberger"],
    links: { pdf: "https://openreview.net/pdf?id=qsZoGvFiJn1", code: "https://github.com/YurongYou/Hindsight", video: "https://www.youtube.com/watch?v=x_8CUoY8Dxs" },
  },

  /* ---------- Multi-Agent & Map-Augmented Perception ---------- */
  {
    topic: "cooperative", title: "When the City Teaches the Car: Label-Free 3D Perception from Infrastructure",
    venue: "ECCV 2026", year: 2026, img: "cityteachingcar.png",
    authors: ["Z. Xu", "J. Yoo", "C. Bautista", "Z. Huang", "T.-Y. Pan", "Z. Liu", "Katie Z Luo", "M. Campbell", "et al."],
    links: { pdf: "https://arxiv.org/abs/2603.16742" }, // VERIFY
  },
  {
    topic: "cooperative", title: "Mixed Signals: A Diverse Point Cloud Dataset for Heterogeneous LiDAR V2X Collaboration",
    venue: "ICCV 2025", year: 2025, img: "mixedsignals.png",
    authors: ["Katie Z Luo*", "Minh-Quan Dao*", "Zhenzhen Liu*", "Mark Campbell", "Wei-Lun Chao", "Kilian Q. Weinberger", "Ezio Malis", "Vincent Frémont", "Bharath Hariharan", "Mao Shan", "Stewart Worrall", "Julie Stephany Berrio Perez"],
    links: { pdf: "https://arxiv.org/abs/2502.14156", code: "https://github.com/chinitaberrio/Mixed-Signals", dataset: "https://ieee-dataport.org/documents/mixed-signals-v2x-dataset", project: "https://mixedsignalsdataset.cs.cornell.edu/" },
  },
  {
    topic: "cooperative", title: "Endangered Alert: A Field-Validated Self-Training Scheme for Detecting and Protecting Threatened Wildlife on Roads",
    venue: "IEEE RA-L 2025", year: 2025, img: "endangeredalert.png",
    authors: ["K. Li", "Mao Shan", "Julie Stephany Berrio Perez", "Katie Luo", "Stewart Worrall"],
    links: {},
  },
  {
    topic: "cooperative", title: "Augmenting Lane Perception and Topology Understanding with Standard Definition Navigation Maps",
    venue: "ICRA 2024", year: 2024, img: "smerf.png",
    authors: ["Katie Z Luo", "Xinshuo Weng", "Yan Wang", "Shuang Wu", "Jie Li", "Kilian Q. Weinberger", "Yue Wang", "Marco Pavone"],
    links: { pdf: "https://arxiv.org/pdf/2311.04079v1.pdf", code: "https://github.com/NVlabs/SMERF", project: "https://katieluo88.github.io/SMERF/" },
  },
  {
    topic: "cooperative", title: "Ithaca365: Dataset and Driving Perception under Repeated and Challenging Weather Conditions",
    venue: "CVPR 2022", year: 2022, img: "ithaca365.jpg",
    authors: ["Carlos A. Diaz-Ruiz", "Youya Xia", "Yurong You", "Jose Nino", "Junan Chen", "Josephine Monica", "Xiangyu Chen", "Katie Luo", "et al."],
    links: {},
  },

  /* ---------- Prediction, Planning & Decision-Making ---------- */
  {
    topic: "planning", title: "Benchmark Datasets for Lead-Lag Forecasting on Social Platforms",
    venue: "KDD 2026", year: 2026, img: "leadlag.png",
    authors: ["K. Kazemian", "Zhenzhen Liu", "Y. Yang", "Katie Luo", "S. Gu", "A. Du", "X. Yang", "J. Jansons", "et al."],
    links: { pdf: "https://arxiv.org/abs/2511.03877" },
  },
  {
    topic: "planning", title: "DIRECT: When and Where Should You Allocate Test-Time Compute in Embodied Planners?",
    venue: "In Submission (CoRL 2026)", year: 2026, img: "direct.png",
    authors: ["J. Dao", "M. Ganai", "Y. Abukhadra", "A. Sridhar", "M. N. Azadani", "Katie Luo", "C. Barrett", "et al."],
    links: { pdf: "https://arxiv.org/abs/2606.12402" }, // VERIFY
  },
  {
    topic: "planning", title: "Rethinking Training & Inference for Forecasting: Linking Winner-Take-All back to GMMs",
    venue: "ECCV 2026", year: 2026, img: "gmm2wta.png",
    authors: ["Qi Wu", "Katie Z Luo", "Bharath Hariharan", "Wei-Lun Chao", "Mark Campbell"],
    links: { pdf: "https://arxiv.org/abs/2606.26424" }, // VERIFY
  },
  {
    topic: "planning", title: "Safety-Oriented Pedestrian Motion and Scene Occupancy Forecasting",
    venue: "IROS 2021", year: 2021, img: "pedpred.png",
    authors: ["Katie Luo", "Sergio Casas", "Renjie Liao", "Xinchen Yan", "Yuwen Xiong", "Wenyuan Zeng", "Raquel Urtasun"],
    links: { pdf: "https://arxiv.org/abs/2101.02385", video: "https://youtu.be/VW1LBoaXIkU" },
  },
  {
    topic: "planning", title: "Implicit Latent Variable Model for Scene-Consistent Motion Forecasting",
    venue: "ECCV 2020", year: 2020, img: "ilvm.png",
    authors: ["Sergio Casas", "Cole Gulino", "Simon Suo", "Katie Luo", "Renjie Liao", "Raquel Urtasun"],
    links: { pdf: "https://arxiv.org/abs/2007.12036", video: "https://youtu.be/dBOVZ2Tulp4" },
  },
  {
    topic: "planning", title: "Learning Robust Rewards with Adversarial Inverse Reinforcement Learning",
    venue: "ICLR 2018", year: 2017, img: "airl.png",
    authors: ["Justin Fu", "Katie Luo", "Sergey Levine"],
    links: { pdf: "https://arxiv.org/abs/1710.11248" },
  },
];
