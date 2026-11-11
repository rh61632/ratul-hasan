export const projectsData = [
  {
    id: "voc-telecom",
    title: "Telecom Voice-of-Customer (VoC) Intelligence Engine",
    category: "NLP & Production Intelligence",
    year: "2026",
    shortSummary: "Analyzing 655,649 telecom reviews across <span class=\"text-[#0090ff] dark:text-[#38bdf8] font-semibold\">Grameenphone</span>, <span class=\"text-[#e60000] dark:text-[#ff4d4d] font-semibold\">Robi</span>, and <span class=\"text-[#ff7a00] dark:text-[#ff922b] font-semibold\">Banglalink</span> (2016–2026) with an interactive live comment classifier.",
    description: "Enterprise NLP & Business Intelligence architecture analyzing 655,649 reviews across <span class=\"text-[#0090ff] dark:text-[#38bdf8] font-semibold\">Grameenphone Ltd.</span>, <span class=\"text-[#e60000] dark:text-[#ff4d4d] font-semibold\">Robi Axiata Limited</span>, and <span class=\"text-[#ff7a00] dark:text-[#ff922b] font-semibold\">Banglalink Digital Communications Limited</span> (2016–2026) with an interactive live comment classifier, fine-tuned BUET BanglaBERT (91.6% Acc), and Soft-Voting Ensemble (87.4% Cat).",
    highlights: [
      "BUET BanglaBERT SOTA: 91.60% CV Acc (0.8598 F1)",
      "Soft-Voting Ensemble: 87.5% Sent / 87.4% Cat (Sub-ms CPU)",
      "Surge-Filtered Stability: -44.5% BL noise (κ=0.77 Gold)"
    ],
    tags: ["Interactive Classifier", "BUET BanglaBERT", "Soft-Voting Ensemble", "Banglish NLP", "655.6k Benchmark"],
    featuredTag: "Interactive Classifier",
    media: "assets/images/thumbnails/voc-dashboard.png",
    mediaAlt: "Power BI VoC intelligence preview",
    githubUrl: "https://github.com/rh61632/telecom-Voice-of-Customer_intelligence",
    caseStudyUrl: "projects/voc-telecom.html",
    badgeText: "NLP · Live Classifier"
  },
  {
    id: "prosthetic-thesis",
    title: "Resource-Efficient sEMG-Driven Prosthetic Arm",
    category: "Undergraduate Thesis & Bionic Mechatronics",
    year: "2025 – 2026",
    shortSummary: "Accessible transradial bionic arm executing deep learning intent classification directly on an ESP32-S3 microcontroller. Features sparse 3-channel anatomical sensing, analog front-end conditioning, unquantized Float32 1D-CNN inference via TFLM, and a 3D-printed anthropomorphic hand.",
    description: "End-to-end engineering of an accessible transradial prosthetic arm executing deep learning intent classification directly on a commodity ESP32-S3 microcontroller. Features sparse 3-channel anatomical sensing, analog front-end conditioning, unquantized Float32 1D-CNN inference via TFLM, star-ground power isolation, and a tendon-driven 3D-printed anthropomorphic hand under $150 total hardware cost.",
    highlights: [
      "Edge Microcontroller: ESP32-S3 @ 240 MHz Float32",
      "Deep Learning Intent: 1D-CNN + GAP on TFLM",
      "Analog Front-End: 3-channel sEMG sensing"
    ],
    tags: ["ESP32-S3", "TinyML / TFLM", "1D-CNN + GAP", "Sub-$150 Hardware Cost"],
    media: "assets/images/thumbnails/prosthetic.jpg",
    mediaAlt: "Resource-Efficient sEMG-Driven Prosthetic Hand Prototype",
    githubUrl: null,
    caseStudyUrl: "projects/prosthetic-arm.html",
    badgeText: "B.Sc. Capstone Thesis"
  },
  {
    id: "hall-dining-erp",
    title: "Hall Dining Operations & Inventory Management System",
    category: "Operations Analytics",
    year: "2025 – 2026",
    shortSummary: "Automated dining operations and inventory system for 1,102 residents across 210 rooms. Replaced paper registers with real-time Student ID meal booking, ledger-backed accounts, 71,600+ formulas, and next-day kitchen protein forecasting with Provost oversight.",
    description: "Spearheaded the complete digital transformation of Shaheed Mashiur Rahman Hall dining, replacing bulky paper registers with an automated spreadsheet system. Mapped 1,102 residents across 210 four-student rooms, introduced direct Student ID meal booking, personal credit/deposit balance accounts to eliminate student churn, next-day kitchen protein forecasting, and real-time oversight for the Provost Body.",
    highlights: [
      "Operations Scale: 1,102 active residents in 210 rooms",
      "Formula Matrix: 71,600+ multi-criteria formulas",
      "Provost Oversight: Real-time meal headcounts & audit"
    ],
    tags: ["Google Sheets ERP", "71,600+ Formulas", "Token Audit", "bKash Balancing"],
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
    shortSummary: "Modular edge computer vision pipeline integrating custom YOLOv8 detection (91.0% accuracy), SORT Kalman-filter tracking, optical pixel-to-metric velocity calibration (~34.9ms latency), and automated violation invoicing dispatched via SMTP with Bengali plate extraction.",
    description: "Engineered an end-to-end intelligent traffic monitoring and automated penalty pipeline. Integrates custom YOLOv8 detection (91.0% accuracy), SORT Kalman-filter multi-object tracking, optical pixel-to-metric velocity calibration (~34.9ms inference latency), and automated violation invoicing dispatched via SMTP with Bengali license plate character extraction.",
    highlights: [
      "Object Detection: Custom YOLOv8 reaching 91% Acc",
      "Kinematic Tracking: SORT Kalman filter + Hungarian",
      "Speed Calibration: Homography (<35ms latency)"
    ],
    tags: ["Python 3.12", "Ultralytics YOLOv8", "SORT Tracking", "OpenCV"],
    media: "assets/images/thumbnails/limiteye.png",
    mediaAlt: "LimitEye Computer Vision Detection & Automated Penalty Dashboard",
    githubUrl: null,
    caseStudyUrl: "projects/limiteye.html",
    badgeText: "Vision Pipeline"
  }
];
