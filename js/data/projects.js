export const projectsData = [
  {
    id: "voc-telecom",
    title: "Telecom Voice-of-Customer (VoC) Intelligence Engine",
    category: "NLP & Production Intelligence",
    year: "2026",
    description: "Engineered an enterprise NLP & Business Intelligence pipeline analyzing 285,878 standardized customer reviews across Grameenphone Ltd., Robi Axiata Limited, and Banglalink Digital Communications Limited over a continuous 1,078-day common window (Oct 2023 – Oct 2026) within a 435.6k master corpus. Fine-tuned SOTA BUET BanglaBERT (91.6% CV Acc) alongside a high-throughput Hero Soft-Voting Ensemble (87.4% Category Acc, ~18.2k rev/s), verified through substantial human inter-annotator agreement (Cohen's Kappa κ = 0.77).",
    tags: ["Python 3.10", "BUET BanglaBERT (91.6% SOTA)", "Hero Ensemble (87.4%)", "285.9k Active Benchmark", "Master Corpus: 435.6k", "Cohen's Kappa (0.77)", "300 DPI Visuals"],
    media: "assets/images/thumbnails/voc-dashboard.png",
    mediaAlt: "Power BI VoC intelligence preview",
    githubUrl: "https://github.com/rh61632/telecom-Voice-of-Customer_intelligence",
    caseStudyUrl: "projects/voc-telecom.html", // Dedicated static page
    badgeText: "Enterprise NLP"
  },
  {
    id: "prosthetic-thesis",
    title: "Machine Learning Prosthetic Device Integration",
    category: "Undergraduate Thesis",
    year: "2025 – 2026",
    description: "Assembled physical multi-articulated prosthetic hand hardware and integrated deep learning models to process biological surface electromyography (sEMG) signals. Enabled an ESP32 microcontroller setup to decode user intent and mimic human gestures in real time.",
    tags: ["ESP32", "C++", "Python", "TensorFlow", "sEMG Sensors"],
    media: "assets/images/thumbnails/prosthetic.jpg",
    mediaAlt: "Prosthetic hand prototype",
    githubUrl: null,
    caseStudyUrl: "projects/prosthetic-arm.html", // Links to your new thesis page
    badgeText: "B.Sc. Capstone"
  },
  {
    id: "hall-dining-erp",
    title: "Hall Dining Operations & Inventory Management System",
    category: "Operations Analytics",
    year: "2025 – 2026",
    description: "Spearheaded the complete digital transformation of university hall dining operations, replacing manual paper registers with an automated ERP spreadsheet system. Handled 1,100+ residents, tracked ~9,000 monthly meals across dual-slot menus, and engineered automated token audits with bKash cash reconciliation.",
    tags: ["Google Sheets", "Financial Audit", "Supply Chain", "Operations Research", "Data Modeling"],
    media: "assets/images/thumbnails/dining-erp.png",
    mediaAlt: "Hall dining operations ERP preview",
    githubUrl: "https://docs.google.com/spreadsheets/d/1YMRC2m48c165kfrgP7JzAwUkWMylTQVxI6k5dHKIv54/edit?usp=sharing",
    caseStudyUrl: "projects/hall-dining-erp.html",
    badgeText: "Operations ERP"
  },
  {
    id: "limiteye",
    title: "LimitEye: Speed & License Plate Recognition",
    category: "Archived Prototype",
    year: "Computer Vision",
    description: "Engineered a computer vision system designed to monitor vehicular movement, calculate transit velocity across calibrated reference coordinates from video streams, and extract plate characters via automated license plate recognition (ALPR).",
    tags: ["Python", "OpenCV", "ALPR", "Object Tracking"],
    media: null,
    mediaAlt: "LimitEye pipeline",
    githubUrl: null,
    caseStudyUrl: "projects/limiteye.html",
    badgeText: "Vision Pipeline"
  }
];
