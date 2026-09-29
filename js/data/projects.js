export const projectsData = [
  {
    id: "voc-telecom",
    title: "Cross-Operator VoC Intelligence Engine",
    category: "Telecom Analytics",
    year: "2026",
    description: "Engineered an enterprise data pipeline extracting 4,500+ localized Google Play reviews across MyGP, MyBL, and MyRobi. Utilized an LLM semantic pipeline to normalize multilingual feedback (Bangla, English, Banglish) and built an interactive Power BI dashboard with custom DAX KPIs.",
    tags: ["Python", "LLM APIs", "Power BI", "DAX", "Star Schema"],
    media: "assets/images/projects/voc-dashboard.png",
    mediaAlt: "Power BI VoC intelligence preview",
    githubUrl: "https://github.com/rh61632/telecom-Voice-of-Customer_intelligence",
    caseStudyUrl: "projects/voc-telecom.html", // Dedicated static page
    badgeText: "Telecom BI"
  },
  {
    id: "prosthetic-thesis",
    title: "Machine Learning Prosthetic Device Integration",
    category: "Undergraduate Thesis",
    year: "2025 – 2026",
    description: "Assembled physical multi-articulated prosthetic hand hardware and integrated deep learning models to process biological surface electromyography (sEMG) signals. Enabled an ESP32 microcontroller setup to decode user intent and mimic human gestures in real time.",
    tags: ["ESP32", "C++", "Python", "TensorFlow", "sEMG Sensors"],
    media: null,
    mediaAlt: "Prosthetic hand prototype",
    githubUrl: null,
    caseStudyUrl: null, // Can add "projects/prosthetic-hand.html" later
    badgeText: "B.Sc. Capstone"
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
    caseStudyUrl: null,
    badgeText: "Vision Pipeline"
  }
];