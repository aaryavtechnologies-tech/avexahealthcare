/**
 * Avexa Healthcare & Path Labs - Master Diagnostic Test Directory
 * Tokarkhada, Silvassa
 */

window.AVEXA_TESTS = [
  {
    id: "cbc-01",
    name: "Complete Blood Count (CBC) with ESR",
    category: "Hematology",
    sample: "Whole Blood (EDTA)",
    fasting: "Not Required",
    tat: "Same Day (4 Hours)",
    price: 350,
    popular: true,
    description: "Evaluates red blood cells, white blood cells, platelets, hemoglobin, hematocrit and infection markers (ESR). Essential for screening anemia, infections, leukemia and general wellness.",
    parameters: ["Hemoglobin", "RBC Count", "WBC Total Count", "Differential Count (5-part)", "Platelet Count", "PCV/Hematocrit", "MCV, MCH, MCHC", "RDW-CV", "ESR (Westergren)"]
  },
  {
    id: "fbs-02",
    name: "Fasting Blood Sugar (FBS)",
    category: "Biochemistry",
    sample: "Fluoride Plasma",
    fasting: "8 - 10 Hours Strict Fasting",
    tat: "Same Day (2 Hours)",
    price: 100,
    popular: true,
    description: "Measures blood glucose concentration after an overnight fast. Primary screening test for prediabetes and diabetes mellitus.",
    parameters: ["Fasting Plasma Glucose"]
  },
  {
    id: "ppbs-03",
    name: "Post Prandial Blood Sugar (PPBS)",
    category: "Biochemistry",
    sample: "Fluoride Plasma",
    fasting: "Exactly 2 Hours after Meal",
    tat: "Same Day (2 Hours)",
    price: 100,
    popular: true,
    description: "Assesses body's insulin response and glucose clearance after carbohydrate intake.",
    parameters: ["Post-Prandial Plasma Glucose"]
  },
  {
    id: "hba1c-04",
    name: "HbA1c (Glycated Hemoglobin) - HPLC Method",
    category: "Biochemistry",
    sample: "Whole Blood (EDTA)",
    fasting: "Not Required",
    tat: "Same Day (4 Hours)",
    price: 450,
    popular: true,
    description: "Reflects average blood glucose levels over the past 2 to 3 months. Gold standard for long-term diabetes monitoring and glycemic control.",
    parameters: ["HbA1c Percentage", "Estimated Average Glucose (eAG)"]
  },
  {
    id: "lipid-05",
    name: "Lipid Profile (Complete Heart & Cholesterol Panel)",
    category: "Biochemistry",
    sample: "Serum",
    fasting: "10 - 12 Hours Fasting",
    tat: "Same Day (5 Hours)",
    price: 650,
    popular: true,
    description: "Comprehensive cardiovascular risk assessment evaluating bad cholesterol (LDL), good cholesterol (HDL), triglycerides, and atherogenic ratios.",
    parameters: ["Total Cholesterol", "HDL Cholesterol (Good)", "LDL Cholesterol (Bad)", "VLDL Cholesterol", "Triglycerides", "Total Chol/HDL Ratio", "LDL/HDL Ratio"]
  },
  {
    id: "lft-06",
    name: "Liver Function Test (LFT with Enzymes & Proteins)",
    category: "Biochemistry",
    sample: "Serum",
    fasting: "8 Hours Fasting Recommended",
    tat: "Same Day (5 Hours)",
    price: 700,
    popular: true,
    description: "Evaluates liver health, bile duct function, protein synthesis, and detects hepatic inflammation or jaundice.",
    parameters: ["Bilirubin Total", "Bilirubin Direct & Indirect", "SGOT / AST", "SGPT / ALT", "Alkaline Phosphatase (ALP)", "Total Protein", "Albumin", "Globulin", "A:G Ratio", "GGTP"]
  },
  {
    id: "kft-07",
    name: "Kidney / Renal Function Test (KFT / RFT with Electrolytes)",
    category: "Biochemistry",
    sample: "Serum",
    fasting: "Not Required (Water intake normal)",
    tat: "Same Day (5 Hours)",
    price: 750,
    popular: true,
    description: "Checks renal filtration efficiency, waste clearance, electrolyte balance, and screens for chronic kidney disease.",
    parameters: ["Blood Urea", "BUN (Blood Urea Nitrogen)", "Serum Creatinine", "Serum Uric Acid", "Serum Calcium", "Sodium (Na+)", "Potassium (K+)", "Chloride (Cl-)", "eGFR"]
  },
  {
    id: "thyroid-08",
    name: "Thyroid Profile Total (T3, T4, TSH)",
    category: "Immunology",
    sample: "Serum",
    fasting: "Morning sample preferred",
    tat: "Same Day (6 Hours)",
    price: 500,
    popular: true,
    description: "Chemiluminescent assay assessing thyroid gland functioning for hypothyroidism, hyperthyroidism, weight fluctuations, and fatigue.",
    parameters: ["Total Triiodothyronine (T3)", "Total Thyroxine (T4)", "Thyroid Stimulating Hormone (TSH)"]
  },
  {
    id: "thyroid-09",
    name: "Thyroid Profile Free (FT3, FT4, Ultrasensitive TSH)",
    category: "Immunology",
    sample: "Serum",
    fasting: "Morning sample preferred",
    tat: "Same Day (6 Hours)",
    price: 750,
    popular: false,
    description: "Measures biologically active unbound thyroid hormones, crucial for pregnant women and patients on thyroid medications.",
    parameters: ["Free T3", "Free T4", "Ultrasensitive TSH 3rd Gen"]
  },
  {
    id: "vit-d-10",
    name: "Vitamin D3 (25-Hydroxy Cholecalciferol)",
    category: "Immunology",
    sample: "Serum",
    fasting: "Not Required",
    tat: "Same Day (6 Hours)",
    price: 900,
    popular: true,
    description: "Measures active circulating Vitamin D essential for bone density, calcium absorption, muscle recovery, and immune competence.",
    parameters: ["25-OH Vitamin D Total"]
  },
  {
    id: "vit-b12-11",
    name: "Vitamin B12 (Cyanocobalamin)",
    category: "Immunology",
    sample: "Serum",
    fasting: "10 Hours Fasting Recommended",
    tat: "Same Day (6 Hours)",
    price: 800,
    popular: true,
    description: "Essential for nerve health, brain function, and red blood cell production. Common deficiency among vegetarian populations in India.",
    parameters: ["Vitamin B12 Level"]
  },
  {
    id: "urine-12",
    name: "Urine Routine & Microscopic Examination",
    category: "Clinical Pathology",
    sample: "Clean-catch Midstream Urine",
    fasting: "First Morning Urine Preferred",
    tat: "Same Day (2 Hours)",
    price: 150,
    popular: true,
    description: "Screens for urinary tract infections (UTI), kidney disease, proteinuria, glucosuria, presence of crystals, pus cells, and microscopic hematuria.",
    parameters: ["Color & Transparency", "pH & Specific Gravity", "Urine Protein / Albumin", "Urine Sugar", "Pus Cells / Leucocytes", "RBCs", "Epithelial Cells", "Casts & Crystals"]
  },
  {
    id: "dengue-13",
    name: "Dengue Duo Combo (NS1 Antigen + IgM/IgG Rapid & Elisa)",
    category: "Serology",
    sample: "Serum / Whole Blood",
    fasting: "Not Required",
    tat: "Same Day (2 Hours)",
    price: 950,
    popular: true,
    description: "Early detection of Dengue viral infection from Day 1 of fever (NS1) as well as subacute immune response (IgM/IgG antibodies).",
    parameters: ["Dengue NS1 Antigen", "Dengue IgM Antibody", "Dengue IgG Antibody"]
  },
  {
    id: "crp-14",
    name: "C-Reactive Protein (Quantitative hs-CRP)",
    category: "Biochemistry",
    sample: "Serum",
    fasting: "Not Required",
    tat: "Same Day (4 Hours)",
    price: 450,
    popular: false,
    description: "High-sensitivity marker indicating systemic inflammation, acute bacterial/viral infections, and long-term cardiac inflammation risk.",
    parameters: ["High-Sensitivity CRP Level"]
  },
  {
    id: "iron-15",
    name: "Iron Deficiency Profile (Iron, TIBC, Ferritin, % Saturation)",
    category: "Biochemistry",
    sample: "Serum",
    fasting: "12 Hours Fasting Required",
    tat: "Same Day (6 Hours)",
    price: 1100,
    popular: false,
    description: "Comprehensive evaluation of iron stores, binding capacity, and ferritin reserves. Essential for diagnosing stubborn anemia.",
    parameters: ["Serum Iron", "Total Iron Binding Capacity (TIBC)", "UIBC", "% Transferrin Saturation", "Serum Ferritin"]
  },
  {
    id: "ecg-16",
    name: "12-Lead Digital ECG with Doctor Interpretation",
    category: "Diagnostics",
    sample: "Physiological Recording",
    fasting: "Not Required",
    tat: "Immediate (15 Minutes)",
    price: 300,
    popular: true,
    description: "High-precision digital recording of cardiac electrical rhythms to diagnose arrhythmias, ischemia, heart strain, or acute infarction.",
    parameters: ["Heart Rate", "PR Interval", "QRS Duration", "QT/QTc", "Rhythm Analysis", "Ischemic ST-T Changes"]
  },
  {
    id: "ind-17",
    name: "Industrial Pre-Employment Medical Examination",
    category: "Industrial Health",
    sample: "Blood, Urine & Physical",
    fasting: "10 Hours Fasting",
    tat: "24 Hours (Full Certificate)",
    price: 850,
    popular: true,
    description: "Certified fitness evaluation for factory employees and corporate personnel compliant with Gujarat & DNH Industrial Factories Act.",
    parameters: ["CBC with ESR", "Blood Group & Rh", "Urine Routine", "Fasting Blood Sugar", "Physical Vitals & BMI", "Color Vision (Ishihara)", "Medical Fitness Certificate"]
  },
  {
    id: "ind-18",
    name: "Annual Factory Worker Fitness Screen (Factory Act Form 32/33)",
    category: "Industrial Health",
    sample: "Multimodal Screen",
    fasting: "Fasting Preferred",
    tat: "24-48 Hours",
    price: 1250,
    popular: true,
    description: "Mandatory statutory occupational health checkup including lung function test (Spirometry) and Pure Tone Audiometry for noise-exposed workers.",
    parameters: ["CBC + Hemogram", "Blood Sugar", "Urine R/M", "Digital ECG", "Pure Tone Audiometry", "Spirometry (Lung Capacity)", "Eye & Vision Testing", "Doctor Physical Fitness Form"]
  }
];

window.AVEXA_PACKAGES = [
  {
    id: "pkg-basic",
    name: "Avexa Basic Health Screen",
    badge: "Essential Screening",
    parametersCount: 38,
    price: 899,
    originalPrice: 1600,
    discount: "44% OFF",
    fasting: "10-12 Hours Fasting",
    tat: "Same Day Digital Report",
    recommendedFor: "Young adults, students & annual baseline checks",
    description: "Comprehensive basic health baseline covering complete blood count, blood sugar, lipid overview, liver enzymes, and kidney indicators.",
    categories: [
      "Complete Blood Count (CBC - 24 Parameters)",
      "Fasting Blood Glucose",
      "Lipid Screen (Cholesterol, Triglycerides, HDL)",
      "Kidney Screen (Serum Creatinine, Blood Urea)",
      "Liver Screen (SGPT, SGOT)",
      "Urine Routine Examination"
    ]
  },
  {
    id: "pkg-wellness",
    name: "Avexa Complete Wellness Package",
    badge: "Most Popular",
    parametersCount: 65,
    price: 1799,
    originalPrice: 3200,
    discount: "45% OFF",
    fasting: "10-12 Hours Fasting",
    tat: "Same Day Digital Report",
    recommendedFor: "Men & women (25-50 yrs) seeking comprehensive preventive care",
    description: "Extensive health evaluation including full lipid profile, complete liver & kidney function tests, thyroid screen, and diabetic monitoring.",
    categories: [
      "Complete Blood Count (CBC - 24 Parameters) + ESR",
      "Complete Liver Function Test (LFT - 11 Parameters)",
      "Complete Kidney Function Test (KFT - 9 Parameters)",
      "Complete Lipid Profile (Heart - 7 Parameters)",
      "Thyroid Profile Total (T3, T4, TSH)",
      "Fasting Blood Sugar & HbA1c (3-Month Sugar)",
      "Urine Routine & Microscopic (10 Parameters)",
      "Digital 12-Lead ECG"
    ]
  },
  {
    id: "pkg-master",
    name: "Avexa Comprehensive Master Full Body Health",
    badge: "Maximum Value",
    parametersCount: 86,
    price: 2999,
    originalPrice: 5800,
    discount: "48% OFF",
    fasting: "10-12 Hours Fasting",
    tat: "24 Hours Complete Report",
    recommendedFor: "Executive health checkups, senior citizens & full preventive audit",
    description: "Our most exhaustive full body screening covering vitamins, cardiac risk, thyroid, complete metabolic panel, electrolytes, and doctor consultation.",
    categories: [
      "Everything in Complete Wellness Package (65 Parameters)",
      "Vitamin D3 (25-OH Cholecalciferol)",
      "Vitamin B12 Level",
      "High-Sensitivity CRP (hs-CRP)",
      "Serum Electrolytes (Sodium, Potassium, Chloride)",
      "Serum Calcium & Phosphorus",
      "Serum Uric Acid (Gout Screen)",
      "Iron Deficiency Panel (Iron, Ferritin, TIBC)",
      "Digital 12-Lead ECG with Interpretation",
      "Complimentary Pathologist Report Summary"
    ]
  },
  {
    id: "pkg-diabetic",
    name: "Avexa Advanced Diabetic & Heart Care",
    badge: "Specialized Care",
    parametersCount: 52,
    price: 1999,
    originalPrice: 3800,
    discount: "47% OFF",
    fasting: "10-12 Hours Fasting",
    tat: "Same Day Digital Report",
    recommendedFor: "Diabetic, pre-diabetic, hypertensive patients & family history",
    description: "Targeted protocol designed to protect kidneys, eyes, cardiovascular vessels and nerves from diabetic complications.",
    categories: [
      "Fasting & Post-Prandial Blood Glucose",
      "HbA1c (Glycated Hemoglobin HPLC)",
      "Average Estimated Blood Sugar (eAG)",
      "Complete Lipid Profile with Atherogenic Ratios",
      "Kidney Function Test with eGFR & Microalbuminuria",
      "Serum Electrolytes & Uric Acid",
      "Digital 12-Lead ECG",
      "Urine Routine with Ketones & Albumin"
    ]
  },
  {
    id: "pkg-senior",
    name: "Avexa Senior Citizen Care (Male / Female)",
    badge: "Age 50+ Specialist",
    parametersCount: 75,
    price: 2499,
    originalPrice: 4700,
    discount: "47% OFF",
    fasting: "10-12 Hours Fasting",
    tat: "Same Day Digital Report",
    recommendedFor: "Elderly parents, joint pain, osteoporosis & cardiac monitoring",
    description: "Specialized protocol monitoring bone strength, arthritis markers, heart condition, renal health, vitamins, and prostate/hormonal factors.",
    categories: [
      "Complete Hemogram with Platelet & ESR",
      "Bone Health Panel: Vitamin D3, Calcium, Phosphorus",
      "Nerve Health: Vitamin B12",
      "Complete Liver & Kidney Profiles",
      "Lipid & Cardiac Risk Markers",
      "Serum Uric Acid (Joint & Gout Screen)",
      "Digital ECG",
      "Thyroid Stimulating Hormone (TSH)",
      "PSA for Men (Prostate Screen) / CA-125 for Women (Optional)"
    ]
  },
  {
    id: "pkg-industrial",
    name: "Avexa Corporate & Industrial Health Protocol",
    badge: "Factories & Corporates",
    parametersCount: "Customized",
    price: 750,
    originalPrice: 1500,
    discount: "Bulk Corporate Rates",
    fasting: "Fasting / Random available",
    tat: "Onsite Camps & 24h Portal",
    recommendedFor: "Silvassa, Piparia, Amli, Masat & Naroli manufacturing units",
    description: "Statutory health checkup customized to specific industry hazards (chemical, noise, dust, night-shift) with Form 32/33 certification.",
    categories: [
      "Pre-Employment & Annual Fitness Certifications",
      "Audiometry Testing (Noise exposure compliance)",
      "Spirometry / Pulmonary Function Test (Dust/Chemicals)",
      "Vision Screening & Color Perception (Ishihara)",
      "Pathology Screen (CBC, Blood Group, Sugar, Urine)",
      "On-Site Factory Camp Setup & Mobile Phlebotomy Team"
    ]
  }
];
