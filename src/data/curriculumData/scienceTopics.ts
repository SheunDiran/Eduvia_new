import { Topic } from '../../types';

export const SCIENCE_TOPICS: Topic[] = [
  // ================= BIOLOGY: TOPIC 1 =================
  {
    id: 'bio-cellular-respiration',
    subjectId: 'biology',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Cellular Respiration & ATP Production',
    subtitle: 'Glycolysis, the Krebs cycle, and the electron transport chain',
    estimatedMinutes: 28,
    learnContent: {
      summary: 'Cellular respiration is the biochemical pathway by which living cells break down glucose molecules in the presence of oxygen to produce ATP, water, and carbon dioxide: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ~36-38 ATP.',
      keyConcepts: [
        {
          title: 'Glycolysis (Cytoplasm)',
          explanation: 'Anaerobic breakdown of 1 glucose (6-carbon) into 2 pyruvate (3-carbon) molecules, netting 2 ATP and 2 NADH.'
        },
        {
          title: 'Krebs / Citric Acid Cycle (Mitochondrial Matrix)',
          explanation: 'Pyruvate is converted into Acetyl-CoA, generating CO₂, NADH, FADH₂, and 2 ATP through cyclic oxidation.'
        },
        {
          title: 'Oxidative Phosphorylation & ETC (Inner Mitochondrial Membrane)',
          explanation: 'Electrons from NADH and FADH₂ pass along protein complexes, pumping protons into the intermembrane space to drive ATP synthase (chemiosmosis), producing ~32-34 ATP.'
        }
      ],
      workedExamples: [
        {
          problem: 'Why do human muscle cells undergo lactic acid fermentation during intense sprint exercise?',
          solution: 'When oxygen delivery is insufficient for aerobic ETC, NADH cannot donate electrons to oxygen. Fermentation reduces pyruvate to lactate, regenerating NAD⁺ so glycolysis can continue generating 2 ATP per glucose.',
          takeaway: 'Fermentation produces very little ATP directly; its primary purpose is recycling NAD⁺.'
        },
        {
          problem: 'What is the final electron acceptor in aerobic respiration, and what molecule is formed?',
          solution: 'Oxygen (O₂) is the final electron acceptor. It combines with protons (H⁺) and low-energy electrons to produce metabolic water (H₂O).',
          takeaway: 'Without oxygen to accept electrons at complex IV, the entire electron transport chain backs up and stops.'
        }
      ],
      commonMistakes: [
        'Confusing cellular respiration with breathing (ventilation). Breathing is physical gas exchange; respiration is chemical ATP synthesis inside cells.',
        'Thinking plants only perform photosynthesis. Plants carry out cellular respiration 24 hours a day in their mitochondria.',
        'Claiming glycolysis requires oxygen. Glycolysis is strictly anaerobic.'
      ]
    },
    videos: [
      {
        id: 'v7',
        embedId: '4Eo7Jt65Z6s',
        title: 'Cellular Respiration and the Mighty Mitochondria',
        channel: 'Amoeba Sisters',
        duration: '07:49',
        description: 'Fun, accessible cartoon breakdown of glycolysis, Krebs cycle, and electron transport chain with ATP counting.'
      },
      {
        id: 'v8',
        embedId: '00jbG_cfGuQ',
        title: 'ATP & Respiration: Crash Course Biology #7',
        channel: 'CrashCourse',
        duration: '13:26',
        description: 'Hank Green explains how glucose gets metabolized into energy currency with clear chemical visualizations.'
      },
      {
        id: 'v9',
        embedId: 'GHmY8ZzP_00',
        title: 'Electron Transport Chain and Chemiosmosis Step-by-Step',
        channel: 'Cognito',
        duration: '09:12',
        description: 'Detailed animation showing proton gradient buildup across cristae and ATP synthase rotary motion.'
      }
    ],
    quizQuestions: [
      {
        id: 'bq1',
        text: 'Where in the eukaryotic cell does glycolysis take place?',
        options: ['Cytoplasm / Cytosol', 'Mitochondrial Matrix', 'Inner Mitochondrial Membrane', 'Nucleus'],
        correctIndex: 0,
        explanation: 'Glycolysis occurs entirely within the fluid cytosol/cytoplasm outside the mitochondria.',
        topicTag: 'Cellular Respiration Stages'
      },
      {
        id: 'bq2',
        text: 'What is the net gain of ATP molecules produced strictly from one molecule of glucose during glycolysis?',
        options: ['2 ATP', '4 ATP', '36 ATP', '32 ATP'],
        correctIndex: 0,
        explanation: 'Glycolysis uses 2 ATP during investment and produces 4 ATP, yielding a net gain of 2 ATP.',
        topicTag: 'Glycolysis Yield'
      },
      {
        id: 'bq3',
        text: 'What molecule acts as the terminal electron acceptor at the end of the aerobic electron transport chain?',
        options: ['Oxygen (O₂)', 'Carbon Dioxide (CO₂)', 'Glucose', 'NAD⁺'],
        correctIndex: 0,
        explanation: 'Oxygen accepts electrons and combines with free protons (H⁺) to form metabolic water (H₂O).',
        topicTag: 'Electron Transport Chain'
      },
      {
        id: 'bq4',
        text: 'Which cellular structure creates the proton gradient that powers ATP synthase?',
        options: ['Inner Mitochondrial Membrane / Cristae', 'Outer Cell Wall', 'Ribosome', 'Golgi Apparatus'],
        correctIndex: 0,
        explanation: 'Electron transport complexes pump H⁺ ions across the inner mitochondrial membrane into the intermembrane space.',
        topicTag: 'Chemiosmosis'
      },
      {
        id: 'bq5',
        text: 'Under anaerobic conditions in human muscle cells, what product is generated to regenerate NAD⁺?',
        options: ['Lactic Acid / Lactate', 'Ethanol alcohol', 'Carbon monoxide', 'Citric acid'],
        correctIndex: 0,
        explanation: 'Lactate dehydrogenase reduces pyruvate into lactic acid, regenerating NAD⁺ for continued glycolysis.',
        topicTag: 'Fermentation'
      }
    ]
  },

  // ================= BIOLOGY: TOPIC 2 =================
  {
    id: 'bio-dna-protein-synthesis',
    subjectId: 'biology',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'DNA Structure, Replication & Protein Synthesis',
    subtitle: 'The double helix, semi-conservative replication, transcription, and translation',
    estimatedMinutes: 28,
    learnContent: {
      summary: 'DNA contains genetic instructions written in adenine, thymine, cytosine, and guanine base pairs. Protein synthesis converts DNA into mRNA (transcription in the nucleus) and mRNA into polypeptide amino acid chains (translation at ribosomes).',
      keyConcepts: [
        {
          title: 'Base Pairing Rules (Chargaff\'s Rules)',
          explanation: 'In DNA, Adenine (A) pairs with Thymine (T) via 2 hydrogen bonds; Cytosine (C) pairs with Guanine (G) via 3 hydrogen bonds. In RNA, Uracil (U) replaces Thymine.'
        },
        {
          title: 'Transcription (DNA to mRNA)',
          explanation: 'RNA polymerase reads the template DNA strand in the 3\' to 5\' direction and synthesizes a complementary single-stranded mRNA in the 5\' to 3\' direction.'
        },
        {
          title: 'Translation (mRNA to Protein)',
          explanation: 'Ribosomes read mRNA in three-base triplets called codons. tRNA molecules with matching anticodons deliver the corresponding amino acids to synthesize a peptide chain.'
        }
      ],
      workedExamples: [
        {
          problem: 'If a DNA template strand reads 3\'-TAC GGC TTA-5\', what is the complementary mRNA sequence?',
          solution: 'Apply RNA base pairing: T→A, A→U, C→G, G→C. 3\'-TAC GGC TTA-5\' transcribes to 5\'-AUG CCG AAU-3\'. Notice AUG is the universal start codon (Methionine).',
          takeaway: 'Remember that RNA has Uracil (U) instead of Thymine (T).'
        }
      ],
      commonMistakes: [
        'Writing Thymine (T) in an RNA sequence instead of Uracil (U).',
        'Confusing transcription (nucleus) with translation (ribosome/cytoplasm).',
        'Assuming all codons code for amino acids; UAA, UAG, and UGA are non-coding stop codons.'
      ]
    },
    videos: [
      {
        id: 'v-bio-d1',
        embedId: '8m6hH8_3uo4',
        title: 'DNA Replication: The Cell\'s Extreme Team Sport',
        channel: 'Amoeba Sisters',
        duration: '08:28',
        description: 'Helicase, DNA polymerase, primase, and ligase animated clearly to explain semi-conservative replication.'
      },
      {
        id: 'v-bio-d2',
        embedId: 'gG7uCskUOrA',
        title: 'Protein Synthesis: Transcription and Translation',
        channel: 'Amoeba Sisters',
        duration: '08:47',
        description: 'Step-by-step walkthrough of mRNA transcription in the nucleus and tRNA codon matching at ribosomes.'
      },
      {
        id: 'v-bio-d3',
        embedId: 'itsb2SqR-R0',
        title: 'DNA, Hot Pockets, & The Longest Word: Crash Course Biology #11',
        channel: 'CrashCourse',
        duration: '14:08',
        description: 'Hank Green explains transcription, translation, and genetic codons with humor and chemical detail.'
      }
    ],
    quizQuestions: [
      {
        id: 'bdq1',
        text: 'Which nitrogenous base is present in RNA but absent in DNA?',
        options: ['Uracil', 'Thymine', 'Guanine', 'Cytosine'],
        correctIndex: 0,
        explanation: 'RNA replaces Thymine with Uracil, which pairs with Adenine.',
        topicTag: 'RNA Bases'
      },
      {
        id: 'bdq2',
        text: 'What enzyme unzips and unwinds the DNA double helix during DNA replication?',
        options: ['DNA Helicase', 'DNA Ligase', 'RNA Polymerase', 'Amylase'],
        correctIndex: 0,
        explanation: 'Helicase breaks the hydrogen bonds between complementary base pairs to form the replication fork.',
        topicTag: 'Replication Enzymes'
      },
      {
        id: 'bdq3',
        text: 'What is the universal start codon in messenger RNA (mRNA) that codes for Methionine?',
        options: ['AUG', 'UAA', 'CUG', 'UAG'],
        correctIndex: 0,
        explanation: 'AUG signals the ribosome to begin translation and encodes the amino acid methionine.',
        topicTag: 'Genetic Codons'
      },
      {
        id: 'bdq4',
        text: 'Where does translation take place inside a eukaryotic cell?',
        options: ['At ribosomes in the cytoplasm / rough ER', 'Inside the nucleus', 'Inside the nucleolus', 'Inside lysosomes'],
        correctIndex: 0,
        explanation: 'Translation occurs at ribosomes in the cytoplasm or on the rough endoplasmic reticulum.',
        topicTag: 'Protein Synthesis Location'
      },
      {
        id: 'bdq5',
        text: 'If a sample of double-stranded DNA contains 30% Adenine, what percentage of Cytosine does it contain?',
        options: ['20%', '30%', '40%', '70%'],
        correctIndex: 0,
        explanation: 'By Chargaff\'s rules, %A = %T = 30% (total 60%). Remaining 40% is shared equally between G and C, so %C = 20%.',
        topicTag: 'Chargaff Rules'
      }
    ]
  },

  // ================= BIOLOGY: TOPIC 3 =================
  {
    id: 'bio-genetics-punnett',
    subjectId: 'biology',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Mendelian Genetics & Punnett Squares',
    subtitle: 'Dominant and recessive alleles, genotypes, phenotypes, and pedigree analysis',
    estimatedMinutes: 26,
    learnContent: {
      summary: 'Gregor Mendel formulated the laws of segregation and independent assortment. Punnett squares predict genotypic and phenotypic ratios resulting from genetic crosses between parents.',
      keyConcepts: [
        {
          title: 'Genotype vs. Phenotype',
          explanation: 'Genotype refers to the genetic allele composition (e.g. BB, Bb, bb). Phenotype refers to the observable physical trait expressed (e.g. brown eyes vs. blue eyes).'
        },
        {
          title: 'Homozygous vs. Heterozygous',
          explanation: 'Homozygous individuals carry two identical alleles (BB or bb). Heterozygous individuals carry one dominant and one recessive allele (Bb).'
        },
        {
          title: 'Monohybrid Cross Ratios',
          explanation: 'Crossing two heterozygous individuals (Bb × Bb) yields a genotypic ratio of 1 BB : 2 Bb : 1 bb and a classic phenotypic ratio of 3 dominant : 1 recessive (75% to 25%).'
        }
      ],
      workedExamples: [
        {
          problem: 'In pea plants, purple flowers (P) are dominant to white flowers (p). Cross a heterozygous purple plant (Pp) with a white plant (pp). What percentage of offspring will have white flowers?',
          solution: 'Punnett square crosses Pp × pp. Offspring genotypes: 2 Pp (purple) and 2 pp (white). 2 out of 4 = 50% white flowers.',
          takeaway: 'A test cross with a homozygous recessive individual confirms the genotype of a dominant parent.'
        }
      ],
      commonMistakes: [
        'Confusing genotype ratio (1:2:1) with phenotype ratio (3:1) in a heterozygous monohybrid cross.',
        'Believing dominant alleles are always more common or healthier in a population.',
        'Mislabeling sex-linked traits as autosomal traits.'
      ]
    },
    videos: [
      {
        id: 'v-bio-g1',
        embedId: 'i-0rSv6oxSY',
        title: 'Monohybrids and the Punnett Square Guinea Pigs',
        channel: 'Amoeba Sisters',
        duration: '06:28',
        description: 'Clear, fun animated introduction to alleles, dominant/recessive genotypes, and drawing Punnett squares.'
      },
      {
        id: 'v-bio-g2',
        embedId: 'CBezq1fFUEw',
        title: 'Heredity: Crash Course Biology #9',
        channel: 'CrashCourse',
        duration: '10:18',
        description: 'Hank Green explains Mendel’s pea experiments, segregation, and independent assortment.'
      },
      {
        id: 'v-bio-g3',
        embedId: 'd4izVAkhMPQ',
        title: 'Dihybrid and Two-Trait Crosses',
        channel: 'Amoeba Sisters',
        duration: '08:32',
        description: 'How to calculate probabilities for two independent genes yielding the famous 9:3:3:1 ratio.'
      }
    ],
    quizQuestions: [
      {
        id: 'bgq1',
        text: 'What phenotypic ratio is expected from a monohybrid cross between two heterozygous parents (Bb × Bb)?',
        options: ['3 : 1', '1 : 2 : 1', '9 : 3 : 3 : 1', '1 : 1'],
        correctIndex: 0,
        explanation: 'Three-quarters display the dominant phenotype (BB or Bb) and one-quarter displays the recessive phenotype (bb).',
        topicTag: 'Phenotypic Ratios'
      },
      {
        id: 'bgq2',
        text: 'An organism with genotype Tt is described as what?',
        options: ['Heterozygous', 'Homozygous dominant', 'Homozygous recessive', 'Hemizygous'],
        correctIndex: 0,
        explanation: 'Having two different alleles for a trait is defined as heterozygous.',
        topicTag: 'Genotype Terms'
      },
      {
        id: 'bgq3',
        text: 'If brown eyes (B) are dominant over blue eyes (b), what is the phenotype of an individual with genotype Bb?',
        options: ['Brown eyes', 'Blue eyes', 'Green eyes', 'One brown and one blue eye'],
        correctIndex: 0,
        explanation: 'The dominant allele masks the recessive allele, resulting in brown eyes.',
        topicTag: 'Dominance'
      },
      {
        id: 'bgq4',
        text: 'What is the probability of two heterozygous parents (Aa × Aa) producing a homozygous recessive (aa) child?',
        options: ['25% (1 in 4)', '50% (1 in 2)', '75% (3 in 4)', '0%'],
        correctIndex: 0,
        explanation: 'In the Punnett square (AA, Aa, Aa, aa), aa represents 1 of 4 quadrants = 25%.',
        topicTag: 'Punnett Probability'
      },
      {
        id: 'bgq5',
        text: 'Mendel’s Law of Independent Assortment applies to genes that are located on what?',
        options: ['Different non-homologous chromosomes', 'The exact same locus', 'Only the Y chromosome', 'Mitochondrial DNA'],
        correctIndex: 0,
        explanation: 'Genes on separate chromosomes assort independently during meiosis without linkage.',
        topicTag: 'Mendelian Laws'
      }
    ]
  },

  // ================= CHEMISTRY: TOPIC 1 =================
  {
    id: 'chem-stoichiometry',
    subjectId: 'chemistry',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Stoichiometry & The Mole Concept',
    subtitle: 'Molar mass, Avogadro\'s number (6.022 × 10²³), balanced equations, and limiting reactants',
    estimatedMinutes: 30,
    learnContent: {
      summary: 'Stoichiometry relates the quantities of reactants and products in balanced chemical reactions using the mole: 1 mole = 6.022 × 10²³ representative particles. Moles connect microscopic atoms to macroscopic laboratory masses.',
      keyConcepts: [
        {
          title: 'The Mole & Avogadro\'s Number',
          explanation: 'One mole of any substance contains 6.022 × 10²³ particles. Molar mass (g/mol) from the periodic table converts mass into moles: moles = mass / molar mass.'
        },
        {
          title: 'Mole Ratios in Balanced Equations',
          explanation: 'Coefficients in a balanced reaction provide conversion factors between reactants and products (e.g., in 2H₂ + O₂ → 2H₂O, 2 moles of H₂ react with 1 mole of O₂).'
        },
        {
          title: 'Limiting Reactant & Theoretical Yield',
          explanation: 'The reactant that produces the fewest moles of product limits the reaction and determines the maximum theoretical yield.'
        }
      ],
      workedExamples: [
        {
          problem: 'How many moles of water (H₂O) are produced when 4.0 moles of H₂ react with excess O₂ according to 2H₂ + O₂ → 2H₂O?',
          solution: 'From the balanced equation, mole ratio is 2 mol H₂ : 2 mol H₂O (1:1). Therefore, 4.0 moles of H₂ produce 4.0 moles of H₂O (72.08 grams).',
          takeaway: 'Always verify equations are balanced before computing mole ratios.'
        }
      ],
      commonMistakes: [
        'Attempting stoichiometric calculations using masses directly instead of converting to moles first.',
        'Forgetting that diatomic elements (H₂, N₂, O₂, F₂, Cl₂, Br₂, I₂) have double the atomic mass.',
        'Assuming the reactant with fewer starting grams is automatically the limiting reagent.'
      ]
    },
    videos: [
      {
        id: 'v10',
        embedId: 'UL1jmJaUkaQ',
        title: 'Stoichiometry Basic Introduction & Mole Ratios',
        channel: 'The Organic Chemistry Tutor',
        duration: '12:54',
        description: 'Clear conversions from grams to moles, mole-to-mole ratios, and theoretical yield.'
      },
      {
        id: 'v11',
        embedId: 'nZOVR8EMwTw',
        title: 'Limiting Reactant & Excess Reactant Practice Problems',
        channel: 'Tyler DeWitt',
        duration: '14:22',
        description: 'Intuitive sandwich analogy and step-by-step mathematical calculations for limiting reagents.'
      },
      {
        id: 'v12',
        embedId: '74-X94OP2XI',
        title: 'How to Balance Chemical Equations in 5 Easy Steps',
        channel: 'Wayne Breslyn',
        duration: '05:08',
        description: 'Visual tracking method using atom counts to balance combustion and replacement reactions.'
      }
    ],
    quizQuestions: [
      {
        id: 'cq1',
        text: 'What is Avogadro\'s number, representing the count of particles in exactly 1 mole?',
        options: ['6.022 × 10²³', '3.00 × 10⁸', '9.81 × 10²', '1.602 × 10⁻¹⁹'],
        correctIndex: 0,
        explanation: 'Avogadro\'s constant is defined as 6.02214076 × 10²³ mol⁻¹.',
        topicTag: 'Avogadro Constant'
      },
      {
        id: 'cq2',
        text: 'What is the molar mass of carbon dioxide (CO₂)? (C = 12.01 g/mol, O = 16.00 g/mol)',
        options: ['44.01 g/mol', '28.01 g/mol', '32.00 g/mol', '56.02 g/mol'],
        correctIndex: 0,
        explanation: 'Molar mass = 12.01 + 2(16.00) = 12.01 + 32.00 = 44.01 g/mol.',
        topicTag: 'Molar Mass'
      },
      {
        id: 'cq3',
        text: 'How many moles are in 36.0 grams of water (H₂O)? (Molar mass of H₂O ≈ 18.0 g/mol)',
        options: ['2.0 moles', '0.5 moles', '18.0 moles', '1.0 mole'],
        correctIndex: 0,
        explanation: 'Moles = mass / molar mass = 36.0 g / 18.0 g/mol = 2.0 moles.',
        topicTag: 'Mass to Moles'
      },
      {
        id: 'cq4',
        text: 'In the Haber process N₂ + 3H₂ → 2NH₃, how many moles of NH₃ are produced from 6 moles of H₂ with excess N₂?',
        options: ['4 moles', '2 moles', '6 moles', '18 moles'],
        correctIndex: 0,
        explanation: 'Mole ratio is 3 H₂ : 2 NH₃. (6 mol H₂) × (2 mol NH₃ / 3 mol H₂) = 4 moles NH₃.',
        topicTag: 'Mole Ratios'
      },
      {
        id: 'cq5',
        text: 'What is the substance that is completely consumed first in a chemical reaction called?',
        options: ['Limiting reactant', 'Excess reactant', 'Catalyst', 'Solvent'],
        correctIndex: 0,
        explanation: 'The limiting reactant is depleted first and dictates the maximum amount of product formed.',
        topicTag: 'Limiting Reactants'
      }
    ]
  },

  // ================= CHEMISTRY: TOPIC 2 =================
  {
    id: 'chem-atomic-structure',
    subjectId: 'chemistry',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Atomic Structure & Periodic Table Trends',
    subtitle: 'Protons, neutrons, electrons, electron configuration, ionization energy, and electronegativity',
    estimatedMinutes: 28,
    learnContent: {
      summary: 'Atoms consist of a dense nucleus containing protons and neutrons surrounded by electrons organized in discrete energy levels. Periodic table patterns govern atomic radius, ionization energy, and electronegativity.',
      keyConcepts: [
        {
          title: 'Subatomic Particles & Isotopes',
          explanation: 'Atomic number (Z) equals number of protons. Mass number (A) equals protons + neutrons. Isotopes share identical proton counts but differ in neutron counts.'
        },
        {
          title: 'Electronegativity Trends',
          explanation: 'Electronegativity increases across a period (left to right) due to greater effective nuclear charge, and decreases down a group due to electron shielding. Fluorine is the most electronegative element.'
        },
        {
          title: 'Atomic Radius Trends',
          explanation: 'Atomic radius decreases from left to right across a period as added protons pull the electron cloud tighter, and increases down a group as new principal electron shells are added.'
        }
      ],
      workedExamples: [
        {
          problem: 'How many protons, neutrons, and electrons are in a neutral atom of Carbon-14 (atomic number 6)?',
          solution: 'Protons = 6 (atomic number). Neutrons = Mass number - Protons = 14 - 6 = 8 neutrons. Electrons = 6 (neutral atom).',
          takeaway: 'Isotopes like C-14 have identical chemical behavior to C-12 because they have the exact same electron configuration.'
        }
      ],
      commonMistakes: [
        'Confusing mass number (always a whole number of nucleons) with atomic weight (a weighted decimal average of natural isotopes).',
        'Believing atomic radius increases across a period because mass increases; radius actually shrinks across periods.',
        'Forgetting noble gases generally have zero electronegativity on the Pauling scale because they have stable full valence octets.'
      ]
    },
    videos: [
      {
        id: 'v-chem-a1',
        embedId: 'FSyAehMdpyI',
        title: 'The Periodic Table: Crash Course Chemistry #4',
        channel: 'CrashCourse',
        duration: '11:21',
        description: 'Hank Green explains Mendeleev’s table, electron shells, groups, periods, and periodic trends.'
      },
      {
        id: 'v-chem-a2',
        embedId: 'rcKilE9CdaA',
        title: 'Periodic Trends: Electronegativity, Ionization Energy, Atomic Radius',
        channel: 'Tyler DeWitt',
        duration: '12:05',
        description: 'Visual explanation of why atomic radius shrinks across periods and electronegativity peaks at fluorine.'
      },
      {
        id: 'v-chem-a3',
        embedId: 'EM0_g1Pll38',
        title: 'Electron Configuration - Basic Introduction',
        channel: 'The Organic Chemistry Tutor',
        duration: '10:14',
        description: 'Aufbau principle, Hund’s rule, and Pauli exclusion principle for writing s, p, d orbital notations.'
      }
    ],
    quizQuestions: [
      {
        id: 'caq1',
        text: 'Which element possesses the highest electronegativity on the Pauling scale?',
        options: ['Fluorine (F)', 'Oxygen (O)', 'Chlorine (Cl)', 'Francium (Fr)'],
        correctIndex: 0,
        explanation: 'Fluorine has an electronegativity value of ~4.0, the highest of all elements.',
        topicTag: 'Electronegativity'
      },
      {
        id: 'caq2',
        text: 'What happens to the atomic radius of elements as you move from left to right across a period?',
        options: ['It decreases due to higher effective nuclear charge', 'It increases because mass increases', 'It remains strictly constant', 'It doubles every three elements'],
        correctIndex: 0,
        explanation: 'Added protons in the nucleus pull the valence electron cloud inward with greater electrostatic attraction.',
        topicTag: 'Atomic Radius'
      },
      {
        id: 'caq3',
        text: 'What subatomic particles reside in the atomic nucleus?',
        options: ['Protons and Neutrons', 'Protons and Electrons', 'Electrons and Neutrons', 'Electrons only'],
        correctIndex: 0,
        explanation: 'The nucleus contains positively charged protons and neutral neutrons (nucleons).',
        topicTag: 'Nucleus Composition'
      },
      {
        id: 'caq4',
        text: 'Two atoms that have the same number of protons but different numbers of neutrons are called what?',
        options: ['Isotopes', 'Allotropes', 'Isomers', 'Isobars'],
        correctIndex: 0,
        explanation: 'Isotopes are variants of a chemical element that differ only in neutron count.',
        topicTag: 'Isotopes'
      },
      {
        id: 'caq5',
        text: 'What is the maximum number of electrons that can occupy the 2p subshell?',
        options: ['6 electrons', '2 electrons', '8 electrons', '10 electrons'],
        correctIndex: 0,
        explanation: 'The p subshell has 3 orbitals (px, py, pz), each holding up to 2 electrons, totaling 6 electrons.',
        topicTag: 'Electron Orbitals'
      }
    ]
  },

  // ================= CHEMISTRY: TOPIC 3 =================
  {
    id: 'chem-chemical-bonding',
    subjectId: 'chemistry',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Ionic, Covalent & Metallic Chemical Bonding',
    subtitle: 'Octet rule, Lewis structures, polar vs. non-polar covalent bonds, and intermolecular forces',
    estimatedMinutes: 28,
    learnContent: {
      summary: 'Atoms bond to achieve stable electronic configurations, typically an octet of valence electrons. Ionic bonds involve electron transfer between metals and nonmetals; covalent bonds involve shared electron pairs; metallic bonds involve positive ions in a sea of delocalized electrons.',
      keyConcepts: [
        {
          title: 'Ionic Bonding',
          explanation: 'Electrostatic attraction between positive cations (metals losing electrons) and negative anions (nonmetals gaining electrons), forming crystalline lattices with high melting points.'
        },
        {
          title: 'Covalent Bonding & Polarity',
          explanation: 'Shared electron pairs between nonmetals. If electronegativity difference is >0.4 and <1.7, the bond is polar covalent, creating dipole moments.'
        },
        {
          title: 'Intermolecular Forces (IMFs)',
          explanation: 'London dispersion forces (weakest, in all molecules), dipole-dipole attractions (in polar molecules), and hydrogen bonding (strongest dipole attraction involving H bonded to N, O, or F).'
        }
      ],
      workedExamples: [
        {
          problem: 'Why does water (H₂O) have a much higher boiling point (100°C) than methane (CH₄, -161°C) despite having similar molecular weights?',
          solution: 'H₂O molecules form strong intermolecular hydrogen bonds between hydrogen and electronegative oxygen atoms. Methane is nonpolar and only held by weak London dispersion forces.',
          takeaway: 'Hydrogen bonding requires significantly more thermal energy to disrupt liquid molecules into the gas phase.'
        }
      ],
      commonMistakes: [
        'Confusing intramolecular bonds (ionic/covalent bonds holding atoms together inside a molecule) with intermolecular forces (forces between separate molecules).',
        'Believing all molecules with polar bonds are polar overall; symmetrical shapes like CO₂ and CCl₄ have canceling dipoles and are nonpolar.',
        'Assuming ionic solids conduct electricity; ionic compounds only conduct when molten or dissolved in water where ions can freely move.'
      ]
    },
    videos: [
      {
        id: 'v-chem-b1',
        embedId: 'QXT4OVM4vXI',
        title: 'Types of Chemical Bonds: Crash Course Chemistry #22',
        channel: 'CrashCourse',
        duration: '09:45',
        description: 'Hank Green explains ionic, covalent, and metallic bonds with electronegativity differences.'
      },
      {
        id: 'v-chem-b2',
        embedId: '7DjsD7Hcd9U',
        title: 'Ionic vs Molecular / Covalent Compounds',
        channel: 'Tyler DeWitt',
        duration: '11:18',
        description: 'How to easily classify compounds by looking at metals vs nonmetals on the periodic table.'
      },
      {
        id: 'v-chem-b3',
        embedId: '08kGgrqaZXA',
        title: 'Intermolecular Forces: Hydrogen Bonding, Dipole-Dipole, Dispersion',
        channel: 'The Organic Chemistry Tutor',
        duration: '15:10',
        description: 'Comprehensive guide to boiling points, vapor pressures, and identifying IMFs in molecules.'
      }
    ],
    quizQuestions: [
      {
        id: 'cbq1',
        text: 'What type of bond is formed when one atom completely transfers electrons to another atom?',
        options: ['Ionic bond', 'Non-polar covalent bond', 'Metallic bond', 'Hydrogen bond'],
        correctIndex: 0,
        explanation: 'Complete electron transfer produces opposing ions that attract electrostatically in an ionic bond.',
        topicTag: 'Ionic Bonds'
      },
      {
        id: 'cbq2',
        text: 'Which elements must hydrogen be directly bonded to in order to form hydrogen bonds between molecules?',
        options: ['Nitrogen, Oxygen, or Fluorine (N, O, F)', 'Carbon, Silicon, or Chlorine', 'Helium, Neon, or Argon', 'Sodium, Potassium, or Calcium'],
        correctIndex: 0,
        explanation: 'Hydrogen bonding requires highly electronegative small atoms: Nitrogen, Oxygen, or Fluorine.',
        topicTag: 'Hydrogen Bonding'
      },
      {
        id: 'cbq3',
        text: 'Why do metals conduct heat and electricity so efficiently?',
        options: ['They possess a delocalized "sea of mobile electrons"', 'Their nucleus contains extra neutrons', 'They have rigid covalent network bonds', 'They lack protons'],
        correctIndex: 0,
        explanation: 'Delocalized valence electrons move freely through the positive metallic cation lattice.',
        topicTag: 'Metallic Bonding'
      },
      {
        id: 'cbq4',
        text: 'Although the C=O bonds in carbon dioxide (CO₂) are polar, why is the overall CO₂ molecule non-polar?',
        options: ['The linear geometry causes opposing bond dipoles to cancel out exactly', 'Oxygen loses its electronegativity in CO₂', 'Carbon absorbs all electron density', 'CO₂ is an ionic salt'],
        correctIndex: 0,
        explanation: 'CO₂ is linear (180°), so the two equal and opposite dipole vectors sum to zero net dipole moment.',
        topicTag: 'Molecular Polarity'
      },
      {
        id: 'cbq5',
        text: 'Under what condition do solid ionic compounds like NaCl conduct electricity?',
        options: ['When molten (liquid) or dissolved in aqueous solution', 'When frozen solid at 0°C', 'When compressed under mechanical pressure', 'Ionic compounds never conduct electricity'],
        correctIndex: 0,
        explanation: 'In molten state or aqueous solution, the lattice breaks and ions are free to migrate toward electrodes.',
        topicTag: 'Ionic Conductivity'
      }
    ]
  },

  // ================= PHYSICS: TOPIC 1 =================
  {
    id: 'phys-newtons-laws',
    subjectId: 'physics',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Newton\'s Laws of Motion & Force Dynamics',
    subtitle: 'Inertia, F = ma, action-reaction pairs, friction, and free-body diagrams',
    estimatedMinutes: 30,
    learnContent: {
      summary: 'Classical mechanics describes the motion of macroscopic objects under applied forces. Newton\'s three laws define the relationship between mass, acceleration, net force, and interactive force pairs.',
      keyConcepts: [
        {
          title: 'Newton\'s First Law (Law of Inertia)',
          explanation: 'An object at rest remains at rest, and an object in uniform motion remains in motion at constant velocity unless acted upon by a net external force (ΣF = 0).'
        },
        {
          title: 'Newton\'s Second Law (ΣF = ma)',
          explanation: 'Acceleration is directly proportional to net force and inversely proportional to mass: a = ΣF / m. Force is measured in Newtons (1 N = 1 kg·m/s²).'
        },
        {
          title: 'Newton\'s Third Law (Action & Reaction)',
          explanation: 'For every action force, there is an equal and opposite reaction force (F_AB = -F_BA). These paired forces act on two different bodies and never cancel each other out.'
        }
      ],
      workedExamples: [
        {
          problem: 'A 5 kg block is pulled horizontally across a rough floor with a force of 30 N. If friction exerts a resisting force of 10 N, what is the acceleration of the block?',
          solution: 'Calculate net horizontal force: ΣF = 30 N - 10 N = 20 N. Apply Newton\'s second law: a = ΣF / m = 20 N / 5 kg = 4 m/s².',
          takeaway: 'Always subtract opposing frictional forces to determine net unbalanced force before computing acceleration.'
        }
      ],
      commonMistakes: [
        'Confusing mass (kilograms, scalar measure of inertia) with weight (Newtons, gravitational force W = mg).',
        'Believing an object moving at constant velocity must have a net force acting on it; constant velocity implies ΣF = 0.',
        'Thinking action-reaction pairs cancel each other on a single object; they act on distinct objects.'
      ]
    },
    videos: [
      {
        id: 'v13',
        embedId: 'kKKM8Y-u7ds',
        title: 'Newton\'s Laws: Crash Course Physics #5',
        channel: 'CrashCourse',
        duration: '09:55',
        description: 'Dr. Shini Somara explains inertia, F=ma, normal forces, and action-reaction pairs.'
      },
      {
        id: 'v14',
        embedId: 'NYVMlL0UMGM',
        title: 'Free Body Diagrams & Net Force Step by Step',
        channel: 'The Organic Chemistry Tutor',
        duration: '15:20',
        description: 'How to draw forces accurately, resolve components on inclines, and calculate acceleration.'
      },
      {
        id: 'v15',
        embedId: 'WzI9wA_V2E8',
        title: 'Static and Kinetic Friction Explained with Practice Problems',
        channel: 'Khan Academy',
        duration: '09:40',
        description: 'Differences between static friction coefficient and kinetic friction coefficient.'
      }
    ],
    quizQuestions: [
      {
        id: 'pq1',
        text: 'According to Newton\'s First Law, what happens to a spacecraft drifting in deep space far from any gravitational field when its engines shut off?',
        options: [
          'It continues moving in a straight line at constant velocity indefinitely',
          'It gradually slows down and comes to a complete halt',
          'It accelerates continuously',
          'It immediately changes direction by 90 degrees'
        ],
        correctIndex: 0,
        explanation: 'With zero net external force acting on it (ΣF = 0), inertia maintains its constant velocity.',
        topicTag: 'Inertia'
      },
      {
        id: 'pq2',
        text: 'A constant net force of 20 N is applied to a cart of mass 4 kg. What is the acceleration of the cart?',
        options: ['5 m/s²', '80 m/s²', '0.2 m/s²', '16 m/s²'],
        correctIndex: 0,
        explanation: 'a = F / m = 20 N / 4 kg = 5 m/s².',
        topicTag: 'Newton Second Law'
      },
      {
        id: 'pq3',
        text: 'If a horse pulls a cart forward with a force of 200 N, what force does the cart exert on the horse according to Newton\'s Third Law?',
        options: ['200 N backward on the horse', 'More than 200 N backward', 'Zero Newtons because the cart is passive', '400 N forward'],
        correctIndex: 0,
        explanation: 'Action and reaction forces are strictly equal in magnitude (200 N) and opposite in direction.',
        topicTag: 'Action Reaction'
      },
      {
        id: 'pq4',
        text: 'What is the weight of a 10 kg mass on Earth where g ≈ 9.8 m/s²?',
        options: ['98 N', '10 kg', '10 N', '0.98 N'],
        correctIndex: 0,
        explanation: 'Weight W = mg = 10 kg × 9.8 m/s² = 98 Newtons.',
        topicTag: 'Mass vs Weight'
      },
      {
        id: 'pq5',
        text: 'When a car rounds a curve at a steady speed of 60 km/h, is it accelerating?',
        options: ['Yes, because its direction of velocity is changing', 'No, because its speed is constant', 'Only if the driver hits the brakes', 'Acceleration is zero'],
        correctIndex: 0,
        explanation: 'Velocity is a vector quantity; changing direction constitutes centripetal acceleration even at constant speed.',
        topicTag: 'Centripetal Acceleration'
      }
    ]
  },

  // ================= PHYSICS: TOPIC 2 =================
  {
    id: 'phys-energy-work-power',
    subjectId: 'physics',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Work, Kinetic & Potential Energy Conservation',
    subtitle: 'Work-energy theorem (W = F·d·cosθ), gravitational potential energy, and mechanical power in Watts',
    estimatedMinutes: 28,
    learnContent: {
      summary: 'Energy is the capacity to do work. The Law of Conservation of Energy dictates that energy cannot be created or destroyed, only transformed between kinetic energy (KE = ½mv²), potential energy (PE = mgh), and thermal dissipation.',
      keyConcepts: [
        {
          title: 'Mechanical Work (W = F · d · cos(θ))',
          explanation: 'Work is performed only when a force causes displacement in the direction of the force. If force is perpendicular to displacement (cos(90°) = 0), work done is zero.'
        },
        {
          title: 'Kinetic and Gravitational Potential Energy',
          explanation: 'KE = ½mv² depends on the square of velocity. Gravitational PE = mgh depends on height relative to a reference frame.'
        },
        {
          title: 'Conservation of Mechanical Energy',
          explanation: 'In an isolated conservative system without friction: KE_initial + PE_initial = KE_final + PE_final.'
        }
      ],
      workedExamples: [
        {
          problem: 'A 2 kg ball is dropped from a height of 20 meters. Assuming zero air resistance (g = 9.8 m/s²), what is its velocity just before hitting the ground?',
          solution: 'Conservation of energy: PE_top = KE_bottom => mgh = ½mv² => v = √(2gh) = √(2 · 9.8 · 20) = √392 ≈ 19.8 m/s.',
          takeaway: 'Notice mass m cancels out; all falling objects accelerate identically in a vacuum regardless of mass.'
        }
      ],
      commonMistakes: [
        'Believing carrying a heavy box horizontally at constant velocity does work on the box; upward force is perpendicular to horizontal displacement, so W = 0.',
        'Doubling speed doubles kinetic energy; because KE ∝ v², doubling speed quadruples (4x) kinetic energy.',
        'Confusing work/energy (measured in Joules) with power (rate of doing work, measured in Watts = Joules/second).'
      ]
    },
    videos: [
      {
        id: 'v-phys-w1',
        embedId: 'w4QFJb9a8vo',
        title: 'Work, Energy, and Power: Crash Course Physics #9',
        channel: 'CrashCourse',
        duration: '09:55',
        description: 'Dr. Shini Somara breaks down work, springs, Joules, and the work-energy theorem.'
      },
      {
        id: 'v-phys-w2',
        embedId: 'zNmP1rFw2cM',
        title: 'Conservation of Energy: Free Fall, Pendulums & Roller Coasters',
        channel: 'The Organic Chemistry Tutor',
        duration: '16:40',
        description: 'Step-by-step problem solving converting potential energy into kinetic energy.'
      },
      {
        id: 'v-phys-w3',
        embedId: 'e29_q46xH9s',
        title: 'Kinetic Energy and Potential Energy Explained',
        channel: 'Khan Academy',
        duration: '08:30',
        description: 'Intuitive derivation of ½mv² and mgh with real-world sports examples.'
      }
    ],
    quizQuestions: [
      {
        id: 'peq1',
        text: 'If a car triples its speed from 20 km/h to 60 km/h, by what factor does its kinetic energy increase?',
        options: ['9 times (3²)', '3 times', '6 times', '27 times'],
        correctIndex: 0,
        explanation: 'Kinetic energy is proportional to velocity squared (KE ∝ v²), so 3² = 9-fold increase.',
        topicTag: 'Kinetic Energy'
      },
      {
        id: 'peq2',
        text: 'How much mechanical work is done by a waiter holding a 50 N tray motionless above their head for 10 minutes?',
        options: ['0 Joules', '500 Joules', '50 Joules', '30,000 Joules'],
        correctIndex: 0,
        explanation: 'Work = Force × Displacement. Because displacement d = 0, work done on the tray is exactly 0 Joules.',
        topicTag: 'Work Definition'
      },
      {
        id: 'peq3',
        text: 'What is the SI unit of power, equivalent to 1 Joule per second?',
        options: ['Watt (W)', 'Newton (N)', 'Pascal (Pa)', 'Coulomb (C)'],
        correctIndex: 0,
        explanation: 'Power is energy transfer rate: 1 Watt = 1 Joule per second.',
        topicTag: 'Power Units'
      },
      {
        id: 'peq4',
        text: 'A roller coaster car at the top of a 50m hill has 100,000 J of potential energy and 0 J of kinetic energy. What is its kinetic energy at the bottom if friction is neglected?',
        options: ['100,000 J', '50,000 J', '0 J', '200,000 J'],
        correctIndex: 0,
        explanation: 'Total mechanical energy is conserved: all 100,000 J of potential energy converts into kinetic energy.',
        topicTag: 'Energy Conservation'
      },
      {
        id: 'peq5',
        text: 'What happens to the mechanical energy of an object when kinetic friction does work against its motion?',
        options: ['It converts into non-mechanical thermal energy (heat)', 'It is permanently annihilated from the universe', 'It converts into gravitational potential energy', 'It increases acceleration'],
        correctIndex: 0,
        explanation: 'Frictional work dissipates mechanical energy into thermal vibration (heat).',
        topicTag: 'Thermal Dissipation'
      }
    ]
  },

  // ================= PHYSICS: TOPIC 3 =================
  {
    id: 'phys-wave-mechanics',
    subjectId: 'physics',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Wave Mechanics, Sound & The Electromagnetic Spectrum',
    subtitle: 'Transverse vs. longitudinal waves, wave equation (v = fλ), Doppler effect, and light reflection/refraction',
    estimatedMinutes: 28,
    learnContent: {
      summary: 'Waves transfer energy from one location to another through periodic oscillations without net transport of matter. Mechanical waves (sound) require a physical medium, while electromagnetic waves (light, radio, X-rays) travel through vacuum at c = 3 × 10⁸ m/s.',
      keyConcepts: [
        {
          title: 'The Universal Wave Equation',
          explanation: 'v = f · λ, where v is wave speed (m/s), f is frequency in Hertz (Hz), and λ is wavelength in meters.'
        },
        {
          title: 'Transverse vs. Longitudinal Waves',
          explanation: 'In transverse waves (light, ocean waves), particle oscillation is perpendicular to wave propagation. In longitudinal waves (sound), oscillation is parallel, creating compressions and rarefactions.'
        },
        {
          title: 'The Doppler Effect',
          explanation: 'The perceived frequency increases when a wave source approaches an observer (shorter observed wavelength) and decreases when receding (longer observed wavelength).'
        }
      ],
      workedExamples: [
        {
          problem: 'A tuning fork vibrates at a frequency of 440 Hz (concert A) in air where sound speed is 343 m/s. What is the wavelength of the sound wave?',
          solution: 'Apply wave equation v = fλ => λ = v / f = 343 m/s / 440 Hz ≈ 0.78 meters (78 cm).',
          takeaway: 'Higher frequencies correspond to shorter wavelengths at constant medium speed.'
        }
      ],
      commonMistakes: [
        'Believing sound waves can travel through empty outer space; sound is a mechanical wave requiring molecular collisions.',
        'Thinking wave speed changes when frequency increases in a given uniform medium; wave speed v is dictated by the medium properties.',
        'Confusing wave amplitude (which determines sound volume or light brightness) with frequency (which determines pitch or color).'
      ]
    },
    videos: [
      {
        id: 'v-phys-wm1',
        embedId: 'TfZpUsU41K8',
        title: 'Traveling Waves: Crash Course Physics #17',
        channel: 'CrashCourse',
        duration: '09:45',
        description: 'Dr. Shini Somara explains wave speed, amplitude, frequency, wavelength, and wave types.'
      },
      {
        id: 'v-phys-wm2',
        embedId: 'h4OnBYrbCjY',
        title: 'The Doppler Effect: What does motion do to waves?',
        channel: 'TED-Ed',
        duration: '03:02',
        description: 'Animated visual explanation of siren pitch changes and red-shift astronomical discoveries.'
      },
      {
        id: 'v-phys-wm3',
        embedId: 'IRBfpBPELmE',
        title: 'Electromagnetic Spectrum: Radio, Microwaves, Visible Light, X-Rays',
        channel: 'CrashCourse Astronomy',
        duration: '10:35',
        description: 'Phil Plait journeys across the electromagnetic spectrum from long radio waves to gamma rays.'
      }
    ],
    quizQuestions: [
      {
        id: 'pwm1',
        text: 'A sound wave has a frequency of 500 Hz and travels at 340 m/s. What is its wavelength?',
        options: ['0.68 meters', '1.47 meters', '170,000 meters', '500 meters'],
        correctIndex: 0,
        explanation: 'λ = v / f = 340 / 500 = 0.68 meters.',
        topicTag: 'Wave Equation'
      },
      {
        id: 'pwm2',
        text: 'What type of wave is a sound wave traveling through air?',
        options: ['Longitudinal mechanical wave', 'Transverse electromagnetic wave', 'Torsional wave', 'Gravitational wave'],
        correctIndex: 0,
        explanation: 'Sound travels via alternating compressions and rarefactions parallel to wave motion (longitudinal).',
        topicTag: 'Wave Types'
      },
      {
        id: 'pwm3',
        text: 'What phenomenon causes an ambulance siren to sound higher in pitch as it speeds toward you?',
        options: ['The Doppler Effect', 'Refraction', 'Photoelectric effect', 'Total internal reflection'],
        correctIndex: 0,
        explanation: 'Wavefronts bunch together ahead of the moving source, increasing received frequency/pitch.',
        topicTag: 'Doppler Effect'
      },
      {
        id: 'pwm4',
        text: 'Can sound waves propagate through a vacuum in outer space?',
        options: ['No, because sound requires a physical material medium to vibrate', 'Yes, sound travels faster in a vacuum', 'Only if the sound is louder than 100 dB', 'Yes, via electromagnetic waves'],
        correctIndex: 0,
        explanation: 'Sound is mechanical and cannot propagate without atoms or molecules to collide.',
        topicTag: 'Medium Requirement'
      },
      {
        id: 'pwm5',
        text: 'Which form of electromagnetic radiation has the highest frequency and shortest wavelength?',
        options: ['Gamma rays', 'Radio waves', 'Visible green light', 'Infrared waves'],
        correctIndex: 0,
        explanation: 'Gamma rays sit at the highest-energy end of the EM spectrum with sub-picometer wavelengths.',
        topicTag: 'Electromagnetic Spectrum'
      }
    ]
  }
];
