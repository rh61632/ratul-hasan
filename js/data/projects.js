export const projectsData = [
  {
    id: "voc-telecom",
    title: "Telecom Voice-of-Customer (VoC) Intelligence Engine",
    category: "NLP & Production Intelligence",
    year: "2026",
    description: "Engineered an enterprise NLP & Business Intelligence pipeline analyzing 285,111 standardized customer reviews across Grameenphone Ltd., Robi Axiata Limited, and Banglalink Digital Communications Limited over a continuous 1,072-day common window (Oct 2023 – Sep 2026) within a 434.8k master corpus. Fine-tuned SOTA BUET BanglaBERT (91.6% CV Acc) alongside a high-throughput Hero Soft-Voting Ensemble (87.4% Category Acc, ~18.2k rev/s), verified through substantial human inter-annotator agreement (Cohen's Kappa κ = 0.77).",
    tags: ["Python 3.10", "BUET BanglaBERT (91.6% SOTA)", "Hero Ensemble (87.4%)", "285.1k Active Benchmark", "Master Corpus: 434.8k", "Cohen's Kappa (0.77)", "300 DPI Visuals"],
    media: "assets/images/thumbnails/voc-dashboard.png",
    mediaAlt: "Power BI VoC intelligence preview",
    githubUrl: "https://github.com/rh61632/telecom-Voice-of-Customer_intelligence",
    caseStudyUrl: "projects/voc-telecom.html", // Dedicated static page
    badgeText: "Enterprise NLP"
  },
  {
    id: "prosthetic-thesis",
    title: "Resource-Efficient sEMG-Driven Prosthetic Arm",
    category: "Undergraduate Thesis & Bionic Mechatronics",
    year: "2025 – 2026",
    description: "End-to-end engineering of an accessible transradial prosthetic arm executing deep learning intent classification directly on a commodity ESP32-S3 microcontroller. Features sparse 3-channel anatomical sensing, analog front-end conditioning, unquantized Float32 1D-CNN inference via TFLM, star-ground power isolation, and a tendon-driven 3D-printed anthropomorphic hand.",
    tags: ["ESP32-S3 (Xtensa LX7)", "TinyML / TFLM", "1D-CNN + GAP", "sEMG Signal Processing", "Tendon Kinematics", "Star Grounding", "Bare-Metal C++", "Sub-$150 BOM"],
    media: "assets/images/thumbnails/prosthetic.jpg",
    mediaAlt: "Resource-Efficient sEMG-Driven Prosthetic Hand Prototype",
    githubUrl: null,
    caseStudyUrl: "projects/prosthetic-arm.html", // Links to dedicated thesis case study
    badgeText: "B.Sc. Capstone Thesis"
  },
  {
    id: "hall-dining-erp",
    title: "Hall Dining Operations & Inventory Management System",
    category: "Operations Analytics",
    year: "2025 – 2026",
    description: "Spearheaded the complete digital transformation of university hall dining operations, replacing manual paper registers with an automated ERP spreadsheet system. Handled 1,100+ residents, tracked ~9,000 monthly meals across dual-slot menus, and engineered automated token audits with bKash cash reconciliation.",
    tags: ["Google Sheets ERP", "71,600+ Formulas", "XLOOKUP & SUMIF", "Token Audit", "bKash Balancing"],
    media: "assets/images/thumbnails/dining-erp.png",
    mediaAlt: "Hall dining operations ERP preview",
    githubUrl: "https://docs.google.com/spreadsheets/d/1YMRC2m48c165kfrgP7JzAwUkWMylTQVxI6k5dHKIv54/edit?usp=sharing",
    caseStudyUrl: "projects/hall-dining-erp.html",
    badgeText: "Operations ERP"
  },
  {
    id: "limiteye",
    title: "LimitEye: Speed & License Plate Recognition",
    category: "Computer Vision & Edge ML",
    year: "2024 – 2025",
    description: "Engineered an end-to-end intelligent traffic monitoring and automated penalty pipeline. Integrates custom YOLOv8 detection (91.0% accuracy), SORT Kalman-filter multi-object tracking, optical pixel-to-metric velocity calibration (~34.9ms inference latency), and automated violation invoicing dispatched via SMTP with Bengali license plate character extraction.",
    tags: ["Python 3.12", "Ultralytics YOLOv8", "SORT Tracking", "OpenCV", "Bengali ALPR", "Coordinate Calibration", "SMTP Protocol", "Sub-35ms Inference"],
    media: "assets/images/thumbnails/limiteye.png",
    mediaAlt: "LimitEye Computer Vision Detection & Automated Penalty Dashboard",
    githubUrl: null,
    caseStudyUrl: "projects/limiteye.html",
    badgeText: "Vision Pipeline"
  }
];
