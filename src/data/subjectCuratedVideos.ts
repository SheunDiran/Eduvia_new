import { SubjectId, YouTubeVideo } from '../types';

export const SUBJECT_CURATED_VIDEOS: Partial<Record<SubjectId, YouTubeVideo[]>> = {
  'math': [
    {
      id: 'v-math-1',
      embedId: 'mxBoni8N70Y',
      title: 'Algebra and Graphing Functions Masterclass',
      channel: 'The Organic Chemistry Tutor',
      duration: '14:20',
      description: 'Step-by-step walkthrough of algebraic functions, coordinate graphing, and equation solving.'
    },
    {
      id: 'v-math-2',
      embedId: 'i7idZfS8t8w',
      title: 'Core Algebraic Foundations & Problem Solving',
      channel: 'Khan Academy',
      duration: '11:45',
      description: 'Intuitive visual approach to solving multi-step equations and factoring.'
    },
    {
      id: 'v-math-3',
      embedId: '3ayhvAI3IeY',
      title: 'Formula Derivations & Avoiding Sign Errors',
      channel: 'Brian McLogan',
      duration: '09:10',
      description: 'High-yield breakdown of typical exam questions and arithmetic traps.'
    }
  ],
  'english-lang': [
    {
      id: 'v-eng-1',
      embedId: '3klMM9BkW5o',
      title: 'Ethos, Pathos, and Logos: Persuasive Rhetoric',
      channel: 'CrashCourse Study Skills',
      duration: '10:45',
      description: 'Hank Green explains Aristotle’s three modes of persuasion and rhetorical appeals.'
    },
    {
      id: 'v-eng-2',
      embedId: 'p3jFfEwW6hU',
      title: 'Active vs. Passive Voice & Sentence Clarity',
      channel: 'Khan Academy',
      duration: '07:30',
      description: 'How to eliminate passive voice traps and build vigorous, clear declarative sentences.'
    },
    {
      id: 'v-eng-3',
      embedId: 'GgkRoYPLhts',
      title: 'How to Write an Argumentative Essay & Strong Thesis',
      channel: 'TED-Ed / Learn English',
      duration: '09:15',
      description: 'Frameworks for organizing evidence, formulating counter-arguments, and concluding persuasively.'
    }
  ],
  'english-lit': [
    {
      id: 'v-lit-1',
      embedId: 'x0G2e-x9fB4',
      title: 'Shakespeare’s Macbeth: Plot, Themes & Motifs',
      channel: 'CrashCourse Literature',
      duration: '12:35',
      description: 'John Green explores hubris, the witches’ prophecies, and the nature of tragic guilt.'
    },
    {
      id: 'v-lit-2',
      embedId: 'uk6nQh2xTz8',
      title: 'The Tragic Hero & Hamartia in Drama',
      channel: 'TED-Ed',
      duration: '08:45',
      description: 'Aristotle’s poetics, tragic flaws, dramatic irony, and catharsis explained.'
    },
    {
      id: 'v-lit-3',
      embedId: 'z_v4a-w9mC8',
      title: 'How to Read and Analyze Poetry: Meter, Rhythm & Stanzas',
      channel: 'CrashCourse Literature',
      duration: '10:20',
      description: 'Unpacking poetic meters (iambic pentameter), sensory imagery, and figurative language.'
    }
  ],
  'biology': [
    {
      id: 'v-bio-1',
      embedId: '4Eo7Jt65Z6s',
      title: 'Cellular Respiration and the Mighty Mitochondria',
      channel: 'Amoeba Sisters',
      duration: '07:49',
      description: 'Visual breakdown of glycolysis, the Krebs cycle, and electron transport chain ATP yield.'
    },
    {
      id: 'v-bio-2',
      embedId: '8m6hH8_3uo4',
      title: 'DNA Structure, Replication & Protein Synthesis',
      channel: 'Amoeba Sisters',
      duration: '08:28',
      description: 'Helicase, polymerase, transcription, and translation explained with clear visual animations.'
    },
    {
      id: 'v-bio-3',
      embedId: '00jbG_cfGuQ',
      title: 'ATP & Respiration: Crash Course Biology #7',
      channel: 'CrashCourse',
      duration: '13:26',
      description: 'Hank Green explains how glucose is metabolized into ATP through cellular respiration.'
    }
  ],
  'chemistry': [
    {
      id: 'v-chem-1',
      embedId: 'UL1jmJaUkaQ',
      title: 'Stoichiometry Basic Introduction & Mole Conversions',
      channel: 'The Organic Chemistry Tutor',
      duration: '15:20',
      description: 'Dimensional analysis conversion factors for converting between grams, moles, and liters of gas.'
    },
    {
      id: 'v-chem-2',
      embedId: '0RRVV4Diomg',
      title: 'Periodic Table Trends: Electronegativity & Ionization',
      channel: 'Tyler DeWitt',
      duration: '11:15',
      description: 'Why atomic radius decreases across a period and increases down a group.'
    },
    {
      id: 'v-chem-3',
      embedId: 'fPnwBITSmgU',
      title: 'The Periodic Table: Crash Course Chemistry #4',
      channel: 'CrashCourse',
      duration: '11:22',
      description: 'Mendeleev’s table, electron shells, orbitals, and periodic periodicity.'
    }
  ],
  'physics': [
    {
      id: 'v-phys-1',
      embedId: 'kKKM8Y-u7ds',
      title: 'Newton’s Laws of Motion: Crash Course Physics #5',
      channel: 'CrashCourse',
      duration: '11:04',
      description: 'Inertia, F = ma, action-reaction pairs, and free-body diagram setup.'
    },
    {
      id: 'v-phys-2',
      embedId: 'NYVMlL0UauQ',
      title: 'Drawing Free Body Diagrams Like a Pro',
      channel: 'Khan Academy',
      duration: '09:40',
      description: 'Normal force, friction vectors, gravity components on inclined planes.'
    },
    {
      id: 'v-phys-3',
      embedId: 'T1m1V8k9w0s',
      title: 'Traveling Waves & Sound Mechanics',
      channel: 'CrashCourse Physics',
      duration: '10:35',
      description: 'Transverse vs longitudinal waves, frequency, wave speed equation v = fλ.'
    }
  ],
  'economics': [
    {
      id: 'v-econ-1',
      embedId: 'g9aDizJpd_s',
      title: 'Supply and Demand: Crash Course Economics #4',
      channel: 'CrashCourse',
      duration: '10:22',
      description: 'Market equilibrium, shifts vs movements along curves, and shortage/surplus.'
    },
    {
      id: 'v-econ-2',
      embedId: 'ewPNtCSAoWU',
      title: 'Shifts in Demand vs Changes in Quantity Demanded',
      channel: 'Khan Academy',
      duration: '08:50',
      description: 'Determinants of demand: consumer income, preferences, substitute and complementary goods.'
    },
    {
      id: 'v-econ-3',
      embedId: '13JgnmzKPtw',
      title: 'Price Ceilings, Price Floors & Deadweight Loss',
      channel: 'Jacob Clifford - ACDC Econ',
      duration: '09:12',
      description: 'Government intervention in competitive markets and economic efficiency.'
    }
  ],
  'government': [
    {
      id: 'v-gov-1',
      embedId: '0bf3CwYCxXw',
      title: 'Separation of Powers & Checks and Balances',
      channel: 'CrashCourse Government #3',
      duration: '08:31',
      description: 'Legislative, Executive, and Judicial branches balancing state power.'
    },
    {
      id: 'v-gov-2',
      embedId: 'WKehy98f-zE',
      title: 'Presidential vs. Parliamentary Systems',
      channel: 'TED-Ed',
      duration: '06:50',
      description: 'Executive formation, votes of no confidence, and coalition governments.'
    },
    {
      id: 'v-gov-3',
      embedId: 's7tWHJfhiyo',
      title: 'Electoral Systems and Democratic Representation',
      channel: 'CrashCourse Government',
      duration: '09:45',
      description: 'How electoral rules shape political parties, candidate viability, and civic engagement.'
    }
  ],
  'history': [
    {
      id: 'v-hist-1',
      embedId: 'zhL5DCizj5c',
      title: 'The Industrial Revolution: Crash Course World History #32',
      channel: 'CrashCourse',
      duration: '11:05',
      description: 'Why steam, coal, and mechanized textile mills began in Britain and spread globally.'
    },
    {
      id: 'v-hist-2',
      embedId: 'Cd2ch4XV84s',
      title: 'How World War I Started: The M-A-I-N Causes',
      channel: 'CrashCourse World History',
      duration: '12:15',
      description: 'Militarism, Alliances, Imperialism, and Nationalism that triggered global war in 1914.'
    },
    {
      id: 'v-hist-3',
      embedId: 'bO7FQsCcbD8',
      title: 'Urbanization, Social Classes & The Labor Movement',
      channel: 'Khan Academy',
      duration: '09:30',
      description: 'The shift from agrarian rural life to industrial factory cities and trade unions.'
    }
  ],
  'geography': [
    {
      id: 'v-geo-1',
      embedId: 'RA2-Vc4RIOQ',
      title: 'Plate Tectonics Explained: Continental Drift & Boundaries',
      channel: 'National Geographic',
      duration: '08:55',
      description: 'Convergent, divergent, and transform boundaries forming mountains and trenches.'
    },
    {
      id: 'v-geo-2',
      embedId: 'kwfNGatxUJI',
      title: 'Continental Drift, Earthquakes & Volcanoes',
      channel: 'CrashCourse Geography #2',
      duration: '10:48',
      description: 'Mantle convection currents, magma chambers, and seismic fault line zones.'
    },
    {
      id: 'v-geo-3',
      embedId: 'hIYn4bE9n8w',
      title: 'Global Climate Zones, Hadley Cells & Biomes',
      channel: 'CrashCourse Geography',
      duration: '11:15',
      description: 'Atmospheric circulation, rain shadows, tropical rainforests vs arid desert belts.'
    }
  ],
  'computer-science': [
    {
      id: 'v-cs-1',
      embedId: '__vX2sjlpXU',
      title: 'Big O Notation in 100 Seconds: Algorithmic Complexity',
      channel: 'Fireship',
      duration: '02:18',
      description: 'Constant O(1), linear O(n), quadratic O(n²), and logarithmic O(log n) time complexities.'
    },
    {
      id: 'v-cs-2',
      embedId: 'RBSGKlAnoiM',
      title: 'Data Structures: Arrays, Linked Lists & Stacks',
      channel: 'Fireship',
      duration: '06:45',
      description: 'Contiguous memory vs pointer-linked nodes, push/pop operations and use cases.'
    },
    {
      id: 'v-cs-3',
      embedId: 'MFhxShGxHWc',
      title: 'Binary Search Algorithm Visualized Step-by-Step',
      channel: 'CS Dojo',
      duration: '09:30',
      description: 'Divide-and-conquer searching on sorted arrays, midpoint calculations, and termination checks.'
    }
  ],
  'accounting': [
    {
      id: 'v-acc-1',
      embedId: 'mXwE3qV9YQ8',
      title: 'The Accounting Equation: Assets = Liabilities + Equity',
      channel: 'Accounting Stuff',
      duration: '08:24',
      description: 'Clear breakdown of double-entry bookkeeping and how every debit matches a credit.'
    },
    {
      id: 'v-acc-2',
      embedId: 'V-8uKk8p1aA',
      title: 'Debit and Credit Rules for Beginners (DEAD CLIC)',
      channel: 'Farhat\'s Accounting Lectures',
      duration: '11:10',
      description: 'How to correctly classify balance sheet accounts and profit and loss accounts.'
    },
    {
      id: 'v-acc-3',
      embedId: 'd8k9m0X-q5s',
      title: 'Understanding the Balance Sheet and Income Statement',
      channel: 'Accounting Stuff',
      duration: '10:15',
      description: 'Revenue, expenses, retained earnings, and asset depreciation calculations.'
    }
  ],
  'agricultural-science': [
    {
      id: 'v-agri-1',
      embedId: '13_5tP3Q5lY',
      title: 'Soil Science: Texture, Structure, pH and NPK Nutrients',
      channel: 'AgriHub & Soil Care',
      duration: '12:10',
      description: 'Clay, sand, silt soil profiles, nitrogen-phosphorus-potassium fertilizers, and aeration.'
    },
    {
      id: 'v-agri-2',
      embedId: 'FfQk1W5h0Xk',
      title: 'Crop Rotation, Weed Control & Sustainable Agronomy',
      channel: 'CrashCourse Ecology',
      duration: '10:45',
      description: 'Preventing soil depletion, pest life cycle disruption, and organic farming techniques.'
    },
    {
      id: 'v-agri-3',
      embedId: 'yF8vP7m0_8Q',
      title: 'Livestock Nutrition and Ruminant Digestion Physiology',
      channel: 'Animal Science Hub',
      duration: '09:35',
      description: 'Rumen, reticulum, omasum, abomasum digestion in cattle and nutritional feed ratios.'
    }
  ],
  'further-math': [
    {
      id: 'v-fmath-1',
      embedId: 'kYB8IZa5AuE',
      title: 'Vectors & Linear Combinations: Essence of Linear Algebra',
      channel: '3Blue1Brown',
      duration: '09:58',
      description: 'Visual geometric understanding of vector spaces, span, and basis vectors.'
    },
    {
      id: 'v-fmath-2',
      embedId: 'XkY2DOUCWMU',
      title: 'Matrix Multiplication as Linear Transformation',
      channel: '3Blue1Brown',
      duration: '10:59',
      description: 'Why matrix multiplication is defined the way it is: composing spatial transformations.'
    },
    {
      id: 'v-fmath-3',
      embedId: '9vKqVkMQHKk',
      title: 'The Essence of Calculus: Visual Derivative Foundations',
      channel: '3Blue1Brown',
      duration: '17:04',
      description: 'Geometric intuition for rates of change, tangent slopes, and instantaneous velocity.'
    }
  ],
  'french': [
    {
      id: 'v-french-1',
      embedId: 'H5tJ1a6n5jY',
      title: 'Le Passé Composé avec Avoir et Être (DR MRS VANDERTRAMP)',
      channel: 'Learn French With Alexa',
      duration: '11:42',
      description: 'Auxiliary verb selection, agreement rules for verbs conjugated with être, and regular endings.'
    },
    {
      id: 'v-french-2',
      embedId: 'k8n_X9fL0m4',
      title: 'Passé Composé vs Imparfait: Master the Difference',
      channel: 'Comme une Française',
      duration: '09:15',
      description: 'When to use completed action aspect vs continuous descriptive habitual past in French.'
    },
    {
      id: 'v-french-3',
      embedId: 'P0v4_mL9xY2',
      title: 'Common Irregular Verbs in French (Faire, Aller, Prendre, Venir)',
      channel: 'FrenchPod101',
      duration: '10:05',
      description: 'High-frequency verb conjugations with accurate native pronunciation examples.'
    }
  ],
  'commerce': [
    {
      id: 'v-comm-1',
      embedId: 'Z-2vG-Xn9uA',
      title: 'Channels of Distribution & Supply Chain Explained',
      channel: 'Two Teachers',
      duration: '08:45',
      description: 'Understanding wholesalers, retailers, agents, and modern e-commerce disintermediation.'
    },
    {
      id: 'v-comm-2',
      embedId: 'y2f8B3m4k1Q',
      title: 'International Trade, Tariffs & Balance of Payments',
      channel: 'CrashCourse',
      duration: '10:18',
      description: 'How foreign exchange, import restrictions, and bilateral trade pacts shape commercial markets.'
    },
    {
      id: 'v-comm-3',
      embedId: 'mN3k9xP1w9E',
      title: 'Commercial Business Documents & Banking Instruments',
      channel: 'Tutor2u Business',
      duration: '07:50',
      description: 'Invoices, bills of exchange, letters of credit, and electronic payment gateways.'
    }
  ],
  'civic-education': [
    {
      id: 'v-civic-1',
      embedId: '5X3eJq5m8eA',
      title: 'Fundamental Human Rights and the Universal Declaration',
      channel: 'Amnesty International',
      duration: '06:30',
      description: 'Civil, political, and social rights guaranteed to every citizen under constitutional law.'
    },
    {
      id: 'v-civic-2',
      embedId: 'rZ8q7xL2m1A',
      title: 'Rule of Law, Constitutionalism & Judicial Independence',
      channel: 'CrashCourse Government',
      duration: '09:40',
      description: 'Principles preventing arbitrary exercise of power and safeguarding equal justice.'
    },
    {
      id: 'v-civic-3',
      embedId: 'xP8k2w9N1mE',
      title: 'Democratic Institutions and Citizen Participation',
      channel: 'TED-Ed',
      duration: '08:12',
      description: 'The separation of powers between executive, legislative, and judicial branches.'
    }
  ]
};
