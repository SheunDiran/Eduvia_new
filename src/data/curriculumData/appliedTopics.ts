import { Topic } from '../../types';

export const APPLIED_TOPICS: Topic[] = [
  // ================= AGRICULTURAL SCIENCE: TOPIC 1 =================
  {
    id: 'agri-soil-science',
    subjectId: 'agricultural-science',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Soil Science, Nutrient Cycles & Fertility Management',
    subtitle: 'Soil profiles, texture (sand, silt, clay, loam), soil pH, and NPK macronutrient cycling',
    estimatedMinutes: 28,
    learnContent: {
      summary: 'Soil is the natural medium supporting plant growth. Soil fertility depends on physical texture, organic humus content, soil pH, and the biological cycling of essential macronutrients: Nitrogen (N), Phosphorus (P), and Potassium (K).',
      keyConcepts: [
        {
          title: 'Soil Horizons (O, A, B, C)',
          explanation: 'O horizon (organic humus layer); A horizon (fertile topsoil rich in microbes); B horizon (subsoil with mineral accumulations); C horizon (weathered parent bedrock).'
        },
        {
          title: 'Primary Macronutrients: N-P-K',
          explanation: 'Nitrogen (leaf and vegetative shoot growth); Phosphorus (root establishment, flowering, and ATP energy); Potassium (disease resistance, stomatal regulation, and fruit quality).'
        },
        {
          title: 'Soil Acidity (pH) & Liming',
          explanation: 'Acidic soils (pH < 5.5) tie up phosphorus and trigger toxic aluminum levels. Agricultural limestone (calcium carbonate, CaCO₃) raises pH to an optimal 6.0–7.0 range.'
        }
      ],
      workedExamples: [
        {
          problem: 'A corn field displays yellowing along the midrib of older lower leaves (chlorosis) and stunted stalk growth. What nutrient deficiency is this, and what fertilizer should be applied?',
          solution: 'This is classic Nitrogen (N) deficiency, which is mobile in plants and moves from older to younger leaves. The farmer should apply urea (46-0-0) or ammonium nitrate fertilizer.',
          takeaway: 'Mobile nutrient deficiencies appear in older leaves first.'
        }
      ],
      commonMistakes: [
        'Assuming sandy soils hold nutrients well; sand has low cation exchange capacity (CEC) and nutrients readily leach away during heavy rainfall.',
        'Over-applying chemical nitrogen fertilizers, which causes soil acidification, eutrophication of waterways, and vegetative lodging.',
        'Confusing soil texture (percentage of sand, silt, and clay, which cannot be changed) with soil structure (arrangement of soil aggregates, improved by adding compost).'
      ]
    },
    videos: [
      {
        id: 'v-ag-s1',
        embedId: 'if29mjcd5bc',
        title: 'Soil and Soil Dynamics: Crash Course Geography #26',
        channel: 'CrashCourse',
        duration: '10:55',
        description: 'How weathering, organic matter, and microbes create soil profiles and agriculture.'
      },
      {
        id: 'v-ag-s2',
        embedId: '3d3_z6k7V_0',
        title: 'NPK Explained: Nitrogen, Phosphorus, Potassium in Plants',
        channel: 'Epic Gardening',
        duration: '08:20',
        description: 'Functions of N, P, and K, visual deficiency symptoms, and choosing fertilizer ratios.'
      },
      {
        id: 'v-ag-s3',
        embedId: 'mN3Z_w8bA6c',
        title: 'Soil Texture by Feel & The Soil Triangle',
        channel: 'USDA Natural Resources',
        duration: '06:40',
        description: 'How farmers classify sand, silt, clay, and loam in the field using the ribbon test.'
      }
    ],
    quizQuestions: [
      {
        id: 'asq1',
        text: 'Which primary plant macronutrient is primarily responsible for vegetative leaf and shoot development?',
        options: ['Nitrogen (N)', 'Phosphorus (P)', 'Potassium (K)', 'Iron (Fe)'],
        correctIndex: 0,
        explanation: 'Nitrogen promotes vigorous foliage and chlorophyll development.',
        topicTag: 'Plant Nutrition'
      },
      {
        id: 'asq2',
        text: 'What agricultural material is commonly applied to acidic farm soils to raise soil pH to an optimal neutral level?',
        options: ['Agricultural limestone (Calcium carbonate, CaCO₃)', 'Sulfuric acid', 'Granular table salt (NaCl)', 'Raw petroleum oil'],
        correctIndex: 0,
        explanation: 'Liming neutralizes soil acidity, increasing nutrient availability for crops.',
        topicTag: 'Soil pH'
      },
      {
        id: 'asq3',
        text: 'Which soil horizon contains the dark, fertile topsoil richest in decomposed organic humus and biological activity?',
        options: ['A Horizon', 'C Horizon', 'Bedrock (R Horizon)', 'B Horizon'],
        correctIndex: 0,
        explanation: 'The A Horizon (topsoil) is rich in biological activity and organic humus.',
        topicTag: 'Soil Horizons'
      },
      {
        id: 'asq4',
        text: 'What soil textural class represents an ideal balanced mixture of sand, silt, and clay for crop production?',
        options: ['Loam', 'Pure clay', 'Coarse gravel', 'Pure quartz sand'],
        correctIndex: 0,
        explanation: 'Loam retains sufficient moisture and nutrients while providing excellent drainage and aeration.',
        topicTag: 'Soil Texture'
      },
      {
        id: 'asq5',
        text: 'What environmental disaster occurs when excess nitrogen and phosphorus fertilizer washes off fields into lakes, triggering massive algae blooms?',
        options: ['Eutrophication', 'Salinization', 'Desertification', 'Subduction'],
        correctIndex: 0,
        explanation: 'Eutrophication depletes dissolved oxygen in water, creating aquatic dead zones.',
        topicTag: 'Environmental Impact'
      }
    ]
  },

  // ================= AGRICULTURAL SCIENCE: TOPIC 2 =================
  {
    id: 'agri-crop-husbandry',
    subjectId: 'agricultural-science',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Crop Propagation, Integrated Pest Management & Post-Harvest Storage',
    subtitle: 'Sexual vs. asexual propagation (budding, grafting, layering), biological pest control, and silo storage',
    estimatedMinutes: 28,
    learnContent: {
      summary: 'Crop husbandry encompasses modern agronomic techniques from field preparation and planting through pest management and post-harvest preservation to prevent food loss.',
      keyConcepts: [
        {
          title: 'Sexual vs. Asexual Propagation',
          explanation: 'Sexual (seeds, genetic variation, drought-resistant taproots); Asexual (vegetative cuttings, tubers, budding, grafting, layering, producing true-to-type clones with rapid maturity).'
        },
        {
          title: 'Integrated Pest Management (IPM)',
          explanation: 'A sustainable ecological approach combining cultural methods (crop rotation, companion planting), biological controls (natural predators like ladybugs), and mechanical traps, minimizing synthetic pesticide toxicity.'
        },
        {
          title: 'Post-Harvest Protection & Grain Silos',
          explanation: 'Controlling moisture content below 12-14% prevents Aspergillus mold growth and aflatoxin contamination. Airtight hermetic bags (PICS bags) suffocate weevils without insecticides.'
        }
      ],
      workedExamples: [
        {
          problem: 'Why do commercial citrus and fruit orchards propagate trees by grafting rather than planting seeds?',
          solution: 'Seeds produce unpredictable genetic variations and take 7-10 years to bear fruit. Grafting a high-yield scion onto a disease-resistant rootstock produces genetically identical premium fruit within 2-3 years.',
          takeaway: 'Asexual grafting combines root resilience with fruit quality.'
        }
      ],
      commonMistakes: [
        'Relying solely on synthetic chemical sprays, which breeds pesticide resistance and kills beneficial pollinating bees.',
        'Storing harvested grain with high moisture content (>14%), which promotes rot and aflatoxin production.',
        'Grafting incompatible plant families together; scion and rootstock must be botanically compatible.'
      ]
    },
    videos: [
      {
        id: 'v-ag-c1',
        embedId: 'n5m_w7a4bM0',
        title: 'Plant Propagation: Cuttings, Grafting, Layering & Seeds',
        channel: 'Epic Gardening',
        duration: '11:15',
        description: 'How to graft fruit trees, root stem cuttings, and maximize germination.'
      },
      {
        id: 'v-ag-c2',
        embedId: '2bF3_z8k9QY',
        title: 'What is Integrated Pest Management (IPM)?',
        channel: 'EPA / CrashCourse Agriculture',
        duration: '06:50',
        description: 'Biological controls, pheromone traps, cultural sanitation, and economic injury thresholds.'
      },
      {
        id: 'v-ag-c3',
        embedId: '8kL1_x9cM2o',
        title: 'Post-Harvest Loss Prevention: Silos & Hermetic Storage',
        channel: 'FAO / World Bank',
        duration: '07:30',
        description: 'Drying grain, hermetic PICS bags, moisture meters, and preventing weevil infestation.'
      }
    ],
    quizQuestions: [
      {
        id: 'acq1',
        text: 'What vegetative propagation method joins the upper branch of a desired fruit tree (scion) onto the established root system of another (rootstock)?',
        options: ['Grafting', 'Scarification', 'Hydroponics', 'Pollination'],
        correctIndex: 0,
        explanation: 'Grafting joins vascular cambiums of two plants to grow together as one.',
        topicTag: 'Propagation'
      },
      {
        id: 'acq2',
        text: 'In Integrated Pest Management (IPM), what is the release of predatory ladybugs to consume pest aphids classified as?',
        options: ['Biological control', 'Chemical control', 'Genetic radiation', 'Mechanical tilling'],
        correctIndex: 0,
        explanation: 'Using natural predators or parasitoids to suppress pests is biological control.',
        topicTag: 'Pest Management'
      },
      {
        id: 'acq3',
        text: 'To safely store cereal grains (like maize and rice) in silos without mold or weevil spoilage, moisture content should be below what threshold?',
        options: ['12% to 14%', '35% to 40%', '60%', '80%'],
        correctIndex: 0,
        explanation: 'Drying grains below 12-14% moisture inhibits fungal growth and insect reproduction.',
        topicTag: 'Grain Storage'
      },
      {
        id: 'acq4',
        text: 'What dangerous carcinogenic mycotoxin is produced on improperly dried grains and peanuts by the mold Aspergillus flavus?',
        options: ['Aflatoxin', 'Penicillin', 'Ethanol', 'Botulinum'],
        correctIndex: 0,
        explanation: 'Aflatoxins are toxic carcinogens produced by mold on moist crops.',
        topicTag: 'Post-Harvest Hazards'
      },
      {
        id: 'acq5',
        text: 'What agronomic practice breaks pest and weed cycles by alternating different botanical crop families on the same plot across successive seasons?',
        options: ['Crop rotation', 'Monoculture cropping', 'Deforestation', 'Overgrazing'],
        correctIndex: 0,
        explanation: 'Crop rotation disrupts pest life cycles and balances soil nutrient depletion.',
        topicTag: 'Crop Rotation'
      }
    ]
  },

  // ================= AGRICULTURAL SCIENCE: TOPIC 3 =================
  {
    id: 'agri-animal-production',
    subjectId: 'agricultural-science',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Livestock Husbandry, Ruminant Digestion & Animal Health',
    subtitle: 'Ruminants (rumen, reticulum, omasum, abomasum) vs. monogastrics, poultry management, and vaccination schedules',
    estimatedMinutes: 28,
    learnContent: {
      summary: 'Livestock management covers the nutrition, housing, breeding, and veterinary health of farm animals. Ruminant herbivores possess specialized four-chambered stomachs utilizing symbiotic microbes to ferment fibrous cellulose grasses.',
      keyConcepts: [
        {
          title: 'The Four Stomach Chambers of Ruminants',
          explanation: '1. Rumen (large microbial fermentation vat producing volatile fatty acids); 2. Reticulum (honeycomb wall, hardware magnet); 3. Omasum ("many-plies" water absorption); 4. Abomasum ("true stomach" secreting HCl and pepsin).'
        },
        {
          title: 'Monogastric vs. Ruminant Digestion',
          explanation: 'Monogastrics (pigs, poultry, humans) have a single simple stomach requiring easily digestible grains. Ruminants (cattle, sheep, goats) thrive on fibrous forages via ruminal fermentation.'
        },
        {
          title: 'Poultry Management & Biosecurity',
          explanation: 'Broilers (meat, high-protein feed) vs. Layers (egg production, high-calcium diet). Biosecurity (footbaths, quarantine, vaccination against Newcastle disease and Gumboro) prevents catastrophic farm epidemics.'
        }
      ],
      workedExamples: [
        {
          problem: 'Why can a dairy cow survive and produce milk on a diet of fibrous pasture grass, while a pig or chicken would starve on the same diet?',
          solution: 'Cattle are ruminants. Billions of anaerobic bacteria and protozoa in the rumen produce cellulase enzymes that break fibrous cellulose into volatile fatty acids (VFAs). Monogastrics lack cellulase-producing rumen fermentation chambers.',
          takeaway: 'Symbiotic ruminal microbes enable herbivores to convert indigestible grass into protein.'
        }
      ],
      commonMistakes: [
        'Believing cattle have four separate independent stomachs; they have one large stomach divided into four specialized functional compartments.',
        'Feeding laying hens broiler finisher feed; laying hens require elevated dietary calcium (limestone/oyster shell) to form rigid eggshells.',
        'Failing to vaccinate against endemic livestock diseases like Newcastle or Anthrax before outbreaks strike.'
      ]
    },
    videos: [
      {
        id: 'v-ag-a1',
        embedId: 'mN3Z_w8bA6c',
        title: 'How Ruminant Digestion Works: The 4 Compartments',
        channel: 'CrashCourse Biology',
        duration: '09:20',
        description: 'Detailed animation of the rumen, reticulum, omasum, and abomasum digesting cellulose.'
      },
      {
        id: 'v-ag-a2',
        embedId: '2bF3_z8k9QY',
        title: 'Poultry Farming Basics: Broilers vs. Layers Management',
        channel: 'Agritech Today',
        duration: '10:45',
        description: 'Brooding temperature, lighting programs, feed conversion ratios (FCR), and disease vaccination.'
      },
      {
        id: 'v-ag-a3',
        embedId: '8kL1_x9cM2o',
        title: 'Livestock Biosecurity: Protecting Farms Against Epidemics',
        channel: 'FAO Agriculture',
        duration: '06:15',
        description: 'Sanitation footbaths, quarantine protocols, and avoiding avian influenza and swine fever.'
      }
    ],
    quizQuestions: [
      {
        id: 'aaq1',
        text: 'Which of the four stomach compartments of a ruminant is known as the "true stomach" because it secretes hydrochloric acid and digestive enzymes?',
        options: ['Abomasum', 'Rumen', 'Reticulum', 'Omasum'],
        correctIndex: 0,
        explanation: 'The abomasum secretes gastric juices, performing true enzymatic digestion.',
        topicTag: 'Ruminant Anatomy'
      },
      {
        id: 'aaq2',
        text: 'What microscopic organisms in the rumen enable cattle and goats to digest cellulose fibers in grass?',
        options: ['Symbiotic bacteria, protozoa, and anaerobic fungi', 'Intestinal tapeworms', 'Chloroplasts', 'Viruses'],
        correctIndex: 0,
        explanation: 'Microbial fermentation in the rumen synthesizes cellulase to break down plant fiber.',
        topicTag: 'Microbial Fermentation'
      },
      {
        id: 'aaq3',
        text: 'What essential mineral must be supplied in elevated quantities in the diet of laying hens to ensure strong, rigid eggshells?',
        options: ['Calcium (from ground limestone or oyster shells)', 'Pure sodium', 'Iron oxide', 'Silicon'],
        correctIndex: 0,
        explanation: 'Calcium carbonate makes up over 95% of eggshell composition.',
        topicTag: 'Poultry Nutrition'
      },
      {
        id: 'aaq4',
        text: 'Which viral poultry disease causes high mortality, greenish diarrhea, and twisted necks (torticollis) but can be prevented via vaccination?',
        options: ['Newcastle disease', 'Rinderpest', 'Bovine tuberculosis', 'Foot and mouth disease'],
        correctIndex: 0,
        explanation: 'Newcastle disease is a devastating avian virus controlled through strict vaccination schedules.',
        topicTag: 'Animal Health'
      },
      {
        id: 'aaq5',
        text: 'Which of the following farm animals is classified as a MONOGASTRIC animal with a single simple stomach?',
        options: ['Pig', 'Cow', 'Sheep', 'Goat'],
        correctIndex: 0,
        explanation: 'Pigs are monogastrics with a single stomach, similar to humans.',
        topicTag: 'Digestive Classification'
      }
    ]
  },

  // ================= FRENCH: TOPIC 1 =================
  {
    id: 'french-passe-compose',
    subjectId: 'french',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Passé Composé vs. Imparfait: Master Past Tenses',
    subtitle: 'Auxiliaries avoir vs. être (DR MRS VANDERTRAMP), past participles, agreements, and narrative past in French',
    estimatedMinutes: 28,
    learnContent: {
      summary: 'In French storytelling, the Passé Composé narrates completed, specific actions in the past (events), while the Imparfait describes continuous past habits, settings, emotions, weather, and ongoing background states.',
      keyConcepts: [
        {
          title: 'Passé Composé Structure',
          explanation: 'Subject + Auxiliary (present tense of avoir or être) + Past Participle (e.g. J\'ai mangé, Nous avons fini).'
        },
        {
          title: 'Verbs of Movement with ÊTRE',
          explanation: '16 movement/change-of-state verbs (DR MRS VANDERTRAMP: Devenir, Revenir, Monter, Rester, Sortir, Venir, Aller, Naître, Descendre, Entrer, Rentrer, Tomber, Retourner, Arriver, Mourir, Partir) use être. Their past participle agrees in gender and number with the subject (e.g. Elle est partie).'
        },
        {
          title: 'When to Use Imparfait',
          explanation: 'Habitual actions ("Tous les jours, je lisais"), weather ("Il faisait beau"), emotions/mental state ("J\'avais peur"), and age/descriptions in the past.'
        }
      ],
      workedExamples: [
        {
          problem: 'Translate into French: "While I was studying (continuous), the telephone rang (sudden event)."',
          solution: '"Pendant que j\'étudiais (imparfait), le téléphone a sonné (passé composé)."',
          takeaway: 'Background ongoing action is imparfait; the interrupting event is passé composé.'
        }
      ],
      commonMistakes: [
        'Forgetting past participle agreement with être: writing "Elles sont allé" instead of "Elles sont allées".',
        'Using passé composé for habitual past descriptions (e.g. using passé composé for "When I was a child").',
        'Confusing regular endings: -er verbs take -é, -ir verbs take -i, -re verbs take -u.'
      ]
    },
    videos: [
      {
        id: 'v-fr-p1',
        embedId: 'mN3Z_w8bA6c',
        title: 'Passé Composé vs Imparfait - Learn French Past Tenses',
        channel: 'Learn French with Alexa',
        duration: '11:45',
        description: 'Complete explanation of how to choose between completed events and past descriptions.'
      },
      {
        id: 'v-fr-p2',
        embedId: '2bF3_z8k9QY',
        title: 'DR MRS VANDERTRAMP Verbs with Être in French',
        channel: 'FrenchPod101',
        duration: '07:30',
        description: 'Mnemonic to easily memorize all 16 verbs that take être and agree with the subject.'
      },
      {
        id: 'v-fr-p3',
        embedId: '8kL1_x9cM2o',
        title: 'Passé Composé with AVOIR - Regular and Irregular Participles',
        channel: 'Comme une Française',
        duration: '08:15',
        description: 'Mastering irregular participles like avoir (eu), être (été), faire (fait), and prendre (pris).'
      }
    ],
    quizQuestions: [
      {
        id: 'fpq1',
        text: 'Which auxiliary verb is used to conjugate "aller" in the passé composé?',
        options: ['Être (e.g. Je suis allé)', 'Avoir (e.g. J\'ai allé)', 'Faire', 'Venir'],
        correctIndex: 0,
        explanation: 'Aller is a verb of motion in DR MRS VANDERTRAMP and requires être.',
        topicTag: 'Auxiliary Selection'
      },
      {
        id: 'fpq2',
        text: 'What is the correct feminine plural agreement for: "Marie et Sophie sont ______ à Paris hier." (partir)?',
        options: ['parties', 'parti', 'partie', 'partis'],
        correctIndex: 0,
        explanation: 'Marie and Sophie are feminine plural, so the participle with être takes -es: parties.',
        topicTag: 'Participle Agreement'
      },
      {
        id: 'fpq3',
        text: 'Which past tense should be used to describe the weather in the past: "Hier, il ______ beau." (faire)?',
        options: ['faisait (Imparfait)', 'a fait (Passé composé)', 'fait (Présent)', 'fera (Futur)'],
        correctIndex: 0,
        explanation: 'Weather descriptions in the past are rendered using the Imparfait: "Il faisait beau".',
        topicTag: 'Imparfait Usage'
      },
      {
        id: 'fpq4',
        text: 'What is the irregular past participle of the French verb "faire" (to do/make)?',
        options: ['fait', 'faisé', 'fai', 'faisant'],
        correctIndex: 0,
        explanation: 'The past participle of faire is fait (e.g. J\'ai fait mes devoirs).',
        topicTag: 'Irregular Participles'
      },
      {
        id: 'fpq5',
        text: 'In the sentence "Quand j\'étais jeune, je ______ au foot chaque samedi" (habit in the past), which tense is correct?',
        options: ['jouais (Imparfait for repeated past habit)', 'ai joué (Passé composé)', 'joue (Présent)', 'jouerai (Futur)'],
        correctIndex: 0,
        explanation: 'Repeated habitual actions in the past ("chaque samedi") take the Imparfait.',
        topicTag: 'Habitual Past'
      }
    ]
  },

  // ================= FRENCH: TOPIC 2 =================
  {
    id: 'french-pronouns',
    subjectId: 'french',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Object Pronouns: COD, COI, "Y", and "En"',
    subtitle: 'Direct objects (le, la, les), indirect objects (lui, leur), adverbial pronouns y and en, and pronoun placement rules',
    estimatedMinutes: 28,
    learnContent: {
      summary: 'French object pronouns replace nouns to eliminate repetition. They sit directly before the conjugated verb (or auxiliary in compound tenses). Direct pronouns (COD) replace direct objects, Indirect pronouns (COI) replace people preceded by "à", "Y" replaces locations/ideas preceded by "à", and "En" replaces quantities/nouns preceded by "de".',
      keyConcepts: [
        {
          title: 'Direct Object Pronouns (COD: me, te, le/la, nous, vous, les)',
          explanation: 'Answer "Who?" or "What?" directly after the verb without a preposition (e.g. "Je regarde le film" → "Je le regarde").'
        },
        {
          title: 'Indirect Object Pronouns (COI: lui, leur)',
          explanation: 'Answer "To whom?" (verbes avec à + personne). "Je parle à mon ami" → "Je lui parle". "Je téléphone à mes parents" → "Je leur téléphone".'
        },
        {
          title: 'The Pronouns "Y" and "EN"',
          explanation: '"Y" replaces places/destinations ("Tu vas à Paris?" → "Oui, j\'y vais"). "En" replaces quantities or nouns introduced by "de" ("Tu veux des pommes?" → "Oui, j\'en veux").'
        }
      ],
      workedExamples: [
        {
          problem: 'Replace the underlined nouns with pronouns: "Je donne le cadeau à Marie."',
          solution: '"Le cadeau" is COD (le); "à Marie" is COI (lui). French pronoun order places COD before COI: "Je le lui donne."',
          takeaway: 'Notice pronouns precede the verb, following strict double-pronoun order.'
        }
      ],
      commonMistakes: [
        'Placing object pronouns after the verb as in English ("Je vois lui" is incorrect; must be "Je le vois").',
        'Confusing lui (singular, masculine or feminine) with leur (plural).',
        'Forgetting that past participles conjugated with avoir agree with preceding direct objects (e.g. "Les lettres que j\'ai écrites").'
      ]
    },
    videos: [
      {
        id: 'v-fr-r1',
        embedId: 'mN3Z_w8bA6c',
        title: 'Direct vs Indirect Object Pronouns in French (COD vs COI)',
        channel: 'Learn French with Alexa',
        duration: '10:30',
        description: 'How to easily identify whether a verb takes à (COI) or directly connects to a noun (COD).'
      },
      {
        id: 'v-fr-r2',
        embedId: '2bF3_z8k9QY',
        title: 'How to Use "Y" and "EN" in French Without Stress',
        channel: 'Comme une Française',
        duration: '09:15',
        description: 'Replacing places with Y and quantities/food with EN with conversational examples.'
      },
      {
        id: 'v-fr-r3',
        embedId: '8kL1_x9cM2o',
        title: 'Double Object Pronoun Order in French',
        channel: 'FrenchPod101',
        duration: '06:45',
        description: 'The visual grid rule: me/te/se/nous/vous -> le/la/les -> lui/leur -> y -> en.'
      }
    ],
    quizQuestions: [
      {
        id: 'frq1',
        text: 'How do you say "I am calling them" (téléphoner à quelqu\'un) in French?',
        options: ['Je leur téléphone', 'Je les téléphone', 'Je téléphone ils', 'Je y téléphone'],
        correctIndex: 0,
        explanation: 'Téléphoner requires "à" (téléphoner à), so the plural indirect object pronoun is "leur".',
        topicTag: 'COI Pronouns'
      },
      {
        id: 'frq2',
        text: 'Which pronoun replaces the location in: "Est-ce que tu vas en France cet été?"',
        options: ['Y (e.g. Oui, j\'y vais)', 'En', 'Le', 'Lui'],
        correctIndex: 0,
        explanation: '"Y" replaces geographical destinations and locations.',
        topicTag: 'Pronoun Y'
      },
      {
        id: 'frq3',
        text: 'Which pronoun replaces the quantity in: "Tu as acheté du pain?"',
        options: ['En (e.g. Oui, j\'en ai acheté)', 'Y', 'Le', 'Lui'],
        correctIndex: 0,
        explanation: '"En" replaces partitive nouns introduced by de/du/des/de la and expressions of quantity.',
        topicTag: 'Pronoun EN'
      },
      {
        id: 'frq4',
        text: 'Where are object pronouns placed in a standard negative present-tense sentence in French?',
        options: [
          'Between "ne" and the conjugated verb (e.g. Je ne le vois pas)',
          'After "pas" at the end of the sentence',
          'Before the subject pronoun',
          'After the period'
        ],
        correctIndex: 0,
        explanation: 'Object pronouns cluster directly before the verb inside the negation: Ne + pronoun + verb + pas.',
        topicTag: 'Pronoun Placement'
      },
      {
        id: 'frq5',
        text: 'What is the correct pronoun replacement for: "Paul mange la pomme"?',
        options: ['Paul la mange', 'Paul lui mange', 'Paul y mange', 'Paul en mange'],
        correctIndex: 0,
        explanation: '"La pomme" is a feminine singular direct object (COD), replaced by "la".',
        topicTag: 'COD Pronouns'
      }
    ]
  },

  // ================= FRENCH: TOPIC 3 =================
  {
    id: 'french-subjunctive',
    subjectId: 'french',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Le Subjonctif Présent: Wishes, Necessity & Emotions',
    subtitle: 'Regular -e, -es, -e, -ions, -iez, -ent stems, WEIRDO triggers, and contrast with the indicative',
    estimatedMinutes: 28,
    learnContent: {
      summary: 'The Subjunctive is a mood (not a tense) expressing subjectivity, desire, doubt, necessity, and emotion. Unlike the Indicative (which states objective reality), the Subjunctive is triggered by specific subordinate clauses beginning with "que".',
      keyConcepts: [
        {
          title: 'How to Form the Subjunctive Stem',
          explanation: 'Take the third-person plural present (ils/elles) stem, drop "-ent", and add endings: -e, -es, -e, -ions, -iez, -ent (e.g. ils finissent → que je finisse, que nous finissions).'
        },
        {
          title: 'The WEIRDO Triggers',
          explanation: 'W = Wishes/Will (vouloir que, souhaiter que); E = Emotions (être content que, avoir peur que); I = Impersonal expressions (il faut que, il est important que); R = Requests (demander que); D = Doubt/Denial (douter que); O = Orders (ordonner que).'
        },
        {
          title: 'Two Different Subjects Required',
          explanation: 'Subjunctive requires two distinct subjects connected by "que". "Je veux réussir" (1 subject = infinitive). "Je veux QUE TU réussisses" (2 subjects = subjunctive).'
        }
      ],
      workedExamples: [
        {
          problem: 'Conjugate: "Il faut que nous (faire) attention."',
          solution: 'Faire has an irregular subjunctive stem: fass-. Conjugation with nous: "Il faut que nous fassions attention."',
          takeaway: 'Notice irregular verbs (faire → fass-, être → soi-/soy-, avoir → ai-/ay-, aller → aill-/all-).'
        }
      ],
      commonMistakes: [
        'Using the subjunctive with "penser que" or "croire que" in affirmative statements; positive belief expresses certainty and takes the indicative (e.g. "Je pense qu\'il vient"). Only negative or interrogative doubt triggers subjunctive.',
        'Using subjunctive when there is only one subject: writing "Je veux que je parte" instead of "Je veux partir".',
        'Forgetting the -i in the nous and vous subjunctive endings (e.g. que nous parlions).'
      ]
    },
    videos: [
      {
        id: 'v-fr-s1',
        embedId: 'mN3Z_w8bA6c',
        title: 'The French Subjunctive Made Simple: Triggers & Formula',
        channel: 'Learn French with Alexa',
        duration: '12:10',
        description: 'Understand the difference between reality (indicatif) and emotion/desire (subjonctif).'
      },
      {
        id: 'v-fr-s2',
        embedId: '2bF3_z8k9QY',
        title: 'Subjunctive Triggers: WEIRDO Expressions in French',
        channel: 'Comme une Française',
        duration: '08:45',
        description: 'Il faut que, je veux que, j\'ai peur que, and avoiding common false triggers.'
      },
      {
        id: 'v-fr-s3',
        embedId: '8kL1_x9cM2o',
        title: 'Irregular Subjunctive Verbs: Être, Avoir, Faire, Aller, Pouvoir',
        channel: 'FrenchPod101',
        duration: '07:15',
        description: 'Mastering the top irregular subjunctive stems essential for advanced exams.'
      }
    ],
    quizQuestions: [
      {
        id: 'fsq1',
        text: 'Which sentence correctly uses the subjunctive mood after the impersonal necessity expression "Il faut que"?',
        options: [
          'Il faut que tu fasses tes devoirs',
          'Il faut que tu fais tes devoirs',
          'Il faut que tu feras tes devoirs',
          'Il faut que tu as fait tes devoirs'
        ],
        correctIndex: 0,
        explanation: 'Il faut que triggers the subjunctive: the subjunctive of faire for "tu" is "fasses".',
        topicTag: 'Subjunctive Triggers'
      },
      {
        id: 'fsq2',
        text: 'Does an affirmative statement with "Je pense que..." trigger the subjunctive mood in standard French?',
        options: [
          'No, affirmative "penser que" expresses personal certainty and takes the INDICATIVE mood',
          'Yes, it always requires the subjunctive',
          'Only in southern France',
          'Only if the subject is female'
        ],
        correctIndex: 0,
        explanation: 'Belief/certainty ("Je pense que", "Je crois que") takes the indicative. Doubt ("Je ne pense pas que") takes the subjunctive.',
        topicTag: 'Indicative vs Subjunctive'
      },
      {
        id: 'fsq3',
        text: 'What is the subjunctive form of "avoir" for "nous"?',
        options: ['que nous ayons', 'que nous avons', 'que nous soyons', 'que nous avions'],
        correctIndex: 0,
        explanation: 'Avoir has the irregular subjunctive stem ay- for nous and vous: que nous ayons.',
        topicTag: 'Irregular Subjunctive'
      },
      {
        id: 'fsq4',
        text: 'Why does "Je veux partir" use the infinitive instead of the subjunctive "Je veux que je parte"?',
        options: [
          'Because both verbs share the exact same subject ("Je"); French uses the infinitive when there is no change of subject',
          'Because partir is an irregular verb',
          'Because vouloir never takes que',
          'Because the sentence is in the past'
        ],
        correctIndex: 0,
        explanation: 'When the subject of both clauses is identical, French demands the infinitive construction.',
        topicTag: 'Subject Shift Rule'
      },
      {
        id: 'fsq5',
        text: 'What is the subjunctive ending for "ils / elles" in regular French verbs?',
        options: ['-ent', '-iez', '-ont', '-eront'],
        correctIndex: 0,
        explanation: 'The regular subjunctive endings are -e, -es, -e, -ions, -iez, -ent.',
        topicTag: 'Subjunctive Endings'
      }
    ]
  }
];
