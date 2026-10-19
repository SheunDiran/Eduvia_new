import { AuthoritativeTopicSpec, GradeAuthoritativeMap } from './types';
import { SubjectId } from '../../types';

// Junior Secondary Subjects Syllabus (Grades 6–9)
// Every subject provides exactly 3 authoritative curriculum topics, each with 5-question quizzes and key concepts.

const JUNIOR_CURRICULUM_SPECS: Record<string, [AuthoritativeTopicSpec, AuthoritativeTopicSpec, AuthoritativeTopicSpec]> = {
  math: [
    {
      title: 'Integers, Directed Numbers & The Number Line',
      subtitle: 'Positive and negative numbers, absolute value, and order of operations',
      quickInfo: 'Integers consist of whole numbers and their negative opposites. Adding a negative number shifts left on the number line; multiplying two negative numbers produces a positive product.',
      keyConcepts: [
        'Absolute value |x| represents the non-negative distance of a number from zero on the number line.',
        'Subtracting a negative turns into addition: a - (-b) = a + b.',
        'Multiplication signs: Positive × Negative = Negative; Negative × Negative = Positive.'
      ],
      quiz: [
        { q: 'What is -9 + 15?', opts: ['-24', '-6', '6', '24'], ans: 2, exp: '-9 + 15 = 6.' },
        { q: 'Calculate: (-6) × (-7)', opts: ['-42', '42', '-13', '13'], ans: 1, exp: 'Negative times negative is positive 42.' },
        { q: 'What is |-18|?', opts: ['-18', '0', '18', '36'], ans: 2, exp: 'Absolute value is strictly non-negative distance: 18.' },
        { q: 'Evaluate: 12 - (-5)', opts: ['7', '-7', '17', '-17'], ans: 2, exp: '12 - (-5) = 12 + 5 = 17.' },
        { q: 'Which temperature is lower: -8°C or -12°C?', opts: ['-8°C', '-12°C', 'They are equal', 'Neither'], ans: 1, exp: '-12°C is further left on the number line and colder.' }
      ]
    },
    {
      title: 'Linear Algebraic Expressions & 1-Step Equations',
      subtitle: 'Variables, coefficients, collecting like terms, and balancing inverse operations',
      quickInfo: 'Algebra uses letters (variables) to denote unknown numerical quantities. To solve an equation, apply inverse operations to both sides to isolate the variable.',
      keyConcepts: [
        'Like terms share identical variable bases and exponents (e.g., 5x + 3x = 8x).',
        'Inverse operations: addition undoes subtraction; multiplication undoes division.',
        'In 7x + 4 = 25, 7 is the coefficient, x is the variable, 4 and 25 are constants.'
      ],
      quiz: [
        { q: 'Simplify the algebraic expression: 5x + 8x - 3x', opts: ['10x', '16x', '10x²', '13x'], ans: 0, exp: '(5 + 8 - 3)x = 10x.' },
        { q: 'Solve for x: x + 14 = 31', opts: ['15', '17', '19', '45'], ans: 1, exp: 'Subtract 14 from both sides: 31 - 14 = 17.' },
        { q: 'Solve for y: 6y = 54', opts: ['6', '8', '9', '48'], ans: 2, exp: 'Divide both sides by 6: 54 / 6 = 9.' },
        { q: 'What is the coefficient of m in the term 12m?', opts: ['m', '12', '1', '24'], ans: 1, exp: 'The numerical factor 12 is the coefficient.' },
        { q: 'Solve: p / 5 = 7', opts: ['1.4', '12', '35', '70'], ans: 2, exp: 'Multiply both sides by 5: 7 × 5 = 35.' }
      ]
    },
    {
      title: 'Ratios, Rates, Proportions & Percentages',
      subtitle: 'Unit rates, equivalent ratios, cross multiplication, and percent increase/decrease',
      quickInfo: 'A ratio compares two quantities. A proportion equates two ratios (a/b = c/d) solved by cross-multiplying (ad = bc). Percentages represent ratios per hundred.',
      keyConcepts: [
        'Unit rate expresses a quantity per 1 unit of another (e.g., 60 km/h).',
        'Cross-multiplication rule: if a/b = c/d, then a × d = b × c.',
        'Percent change = (Change / Original Value) × 100%.'
      ],
      quiz: [
        { q: 'If 4 notebooks cost $12, what is the unit price per notebook?', opts: ['$2', '$3', '$4', '$48'], ans: 1, exp: '$12 / 4 = $3 per notebook.' },
        { q: 'What is 25% of 80?', opts: ['15', '20', '25', '30'], ans: 1, exp: '0.25 × 80 = 20.' },
        { q: 'Simplify the ratio 18 : 24 to simplest fractional form:', opts: ['2 : 3', '3 : 4', '4 : 5', '1 : 2'], ans: 1, exp: 'Divide both terms by 6: 3 : 4.' },
        { q: 'Solve the proportion: x / 8 = 9 / 12', opts: ['4', '6', '7', '10'], ans: 1, exp: '12x = 72 => x = 6.' },
        { q: 'An item priced at $40 is discounted by 15%. What is the discount amount?', opts: ['$4', '$6', '$8', '$10'], ans: 1, exp: '0.15 × $40 = $6.' }
      ]
    }
  ],
  'english-lang': [
    {
      title: 'Parts of Speech & Grammatical Roles',
      subtitle: 'Nouns, pronouns, verbs, adverbs, prepositions, conjunctions, and interjections',
      quickInfo: 'Every English word belongs to one of eight parts of speech. Identifying their syntactic roles eliminates comma splices, misplaced modifiers, and agreement errors.',
      keyConcepts: [
        'Pronouns (subject, object, possessive, relative) prevent repetitive noun usage.',
        'Adverbs modify verbs, adjectives, or other adverbs, answering how, when, or where.',
        'Prepositions show temporal or spatial relationships (in, on, under, during).'
      ],
      quiz: [
        { q: 'In the sentence "The cheetah ran exceptionally fast", what part of speech is "exceptionally"?', opts: ['Noun', 'Adjective', 'Adverb', 'Verb'], ans: 2, exp: '"Exceptionally" modifies the adverb "fast", making it an adverb.' },
        { q: 'Which of the following is a relative pronoun?', opts: ['She', 'Which', 'Quickly', 'Under'], ans: 1, exp: '"Which", "who", and "that" are relative pronouns.' },
        { q: 'Identify the preposition in: "The keys were left on the wooden counter."', opts: ['keys', 'were', 'on', 'wooden'], ans: 2, exp: '"On" expresses the spatial relationship.' },
        { q: 'Which word in "Neither Maya nor Alex arrived" functions as a correlative conjunction?', opts: ['Neither...nor', 'Maya', 'arrived', 'Alex'], ans: 0, exp: '"Neither...nor" is a correlative conjunction pair.' },
        { q: 'What part of speech expresses sudden strong emotion (e.g., "Ouch! That hurt!")?', opts: ['Conjunction', 'Interjection', 'Preposition', 'Adverb'], ans: 1, exp: 'Interjections express spontaneous feeling.' }
      ]
    },
    {
      title: 'Reading Comprehension & Summarizing Strategies',
      subtitle: 'Textual evidence, logical inferences, author tone, and distilling main ideas',
      quickInfo: 'Active readers distinguish between explicit facts and implied inferences, determine the author\'s tone and bias, and synthesize multi-paragraph passages into objective summaries.',
      keyConcepts: [
        'Direct textual evidence quotes or paraphrases exactly what the text states.',
        'Inferences combine explicit clues with logical deduction.',
        'Objective summaries include main thesis and major claims without personal opinions.'
      ],
      quiz: [
        { q: 'What is the definition of an "inference" in literary analysis?', opts: ['A word-for-word copy of a sentence', 'A reasoned conclusion deduced from textual clues and evidence', 'The biography of the author', 'The title of a poem'], ans: 1, exp: 'Inferences combine evidence with logic.' },
        { q: 'What is the "author\'s tone" in a non-fiction essay?', opts: ['How loudly it is read aloud', 'The author\'s emotional attitude toward the subject matter', 'The font style chosen', 'The number of pages'], ans: 1, exp: 'Tone conveys authorial attitude (e.g., critical, solemn, optimistic).' },
        { q: 'What should a well-written objective summary strictly omit?', opts: ['The central thesis', 'Major supporting arguments', 'Personal subjective opinions and unmentioned external facts', 'Key character names'], ans: 2, exp: 'Objective summaries never insert personal bias.' },
        { q: 'What are "context clues" in reading comprehension?', opts: ['Footnotes only', 'Information surrounding an unfamiliar word that reveals its meaning', 'The book cover artwork', 'The library catalogue number'], ans: 1, exp: 'Surrounding context unlocks vocabulary meaning.' },
        { q: 'Where is the main idea usually stated in an academic paragraph?', opts: ['In the topic sentence', 'Exclusively in the bibliography', 'In the margin', 'In parenthetical citations'], ans: 0, exp: 'The topic sentence announces the core claim.' }
      ]
    },
    {
      title: 'Formal Letter Writing & Argumentative Essays',
      subtitle: 'Official letter layouts, register, thesis statements, claims, and counter-arguments',
      quickInfo: 'Formal writing adheres to strict layout conventions (sender address, recipient address, date, salutation) and objective, respectful register.',
      keyConcepts: [
        'Formal letter sign-offs: "Yours faithfully" when starting "Dear Sir/Madam"; "Yours sincerely" when naming the recipient.',
        'An argumentative thesis must assert a debatable stance backed by verifiable evidence.',
        'Acknowledging a counterargument before providing a rebuttal strengthens credibility.'
      ],
      quiz: [
        { q: 'If a formal letter opens with "Dear Sir or Madam", what is the required sign-off?', opts: ['Yours sincerely', 'Yours faithfully', 'Warm regards', 'Best wishes'], ans: 1, exp: '"Yours faithfully" is paired with unnamed recipients.' },
        { q: 'What is a "thesis statement" in an essay?', opts: ['A list of references', 'The central arguable claim that the paper sets out to prove', 'The introductory greeting', 'The author\'s signature'], ans: 1, exp: 'The thesis states the essay\'s primary contention.' },
        { q: 'Which tone is appropriate for an official application letter to an institution?', opts: ['Informal with slang and text abbreviations', 'Formal, courteous, precise, and professional', 'Confrontational and demanding', 'Humorous and sarcastic'], ans: 1, exp: 'Professional formality is mandatory.' },
        { q: 'What is a "rebuttal" in an argumentative debate?', opts: ['Agreeing with the opponent completely', 'The evidence and reasoning that refutes an opposing counterargument', 'Ending the speech early', 'A spelling correction'], ans: 1, exp: 'Rebuttals disprove counterarguments.' },
        { q: 'In standard formal letter formatting, where is the sender\'s address placed?', opts: ['At the top right corner (or top left in modern block style)', 'At the very bottom below the signature', 'On the reverse side only', 'In the middle of paragraph two'], ans: 0, exp: 'The sender\'s address sits at the top of the letter.' }
      ]
    }
  ],
  'english-lit': [
    {
      title: 'Literary Devices: Figurative Language in Poetry',
      subtitle: 'Similes, metaphors, personification, hyperbole, alliteration, and sensory imagery',
      quickInfo: 'Poetic devices enrich verse by evoking vivid sensory imagery. Similes use comparison words; metaphors directly equate; personification grants human traits to non-human elements.',
      keyConcepts: [
        'Simile: explicit comparison using "like" or "as" (e.g., "fast as a cheetah").',
        'Metaphor: implicit identification (e.g., "the moon was a ghostly galleon").',
        'Personification: attributing sentience or human action to inanimate entities.'
      ],
      quiz: [
        { q: 'Identify the simile: "Her laughter sounded..."', opts: ['like silver bells chiming', 'musical', 'was silver bells', 'harmonious'], ans: 0, exp: '"Like silver bells chiming" compares using "like".' },
        { q: '"The assignment was a mountain of paperwork." This is an example of:', opts: ['A simile', 'A metaphor', 'Alliteration', 'Oxymoron'], ans: 1, exp: 'Direct comparison without "like" or "as" is a metaphor.' },
        { q: '"The morning sun crept gently into the sleeping bedroom." What literary device is used?', opts: ['Personification', 'Hyperbole', 'Irony', 'Onomatopoeia'], ans: 0, exp: 'Creeping gently assigns human agency to sunlight.' },
        { q: 'What poetic device repeats initial consonant sounds ("Peter Piper picked a peck")?', opts: ['Assonance', 'Alliteration', 'Consonance', 'Rhyme scheme'], ans: 1, exp: 'Alliteration repeats initial consonant sounds.' },
        { q: '"I have told you a thousand times!" is an example of which rhetorical device?', opts: ['Understatement', 'Hyperbole (deliberate exaggeration)', 'Litotes', 'Simile'], ans: 1, exp: 'Hyperbole magnifies claims for emphasis.' }
      ]
    },
    {
      title: 'Elements of Prose: Plot Structure, Conflict & Characterization',
      subtitle: 'Exposition, inciting incident, rising action, climax, and resolution',
      quickInfo: 'Prose narratives follow the dramatic story arc. Conflict (internal or external) propels character decisions through rising tension toward a climactic turning point.',
      keyConcepts: [
        'The dramatic arc: Exposition → Inciting Incident → Rising Action → Climax → Falling Action → Resolution.',
        'Conflict categories: Character vs Character, Character vs Self (internal), Character vs Nature/Society.',
        'Characterization: Direct (author states traits) vs Indirect (revealed via speech, actions, thoughts).'
      ],
      quiz: [
        { q: 'What is the point of highest dramatic tension or turning point in a fictional story?', opts: ['Exposition', 'Climax', 'Prologue', 'Falling action'], ans: 1, exp: 'The climax is the peak dramatic crisis.' },
        { q: 'What is an example of internal character conflict?', opts: ['A hero fighting a dragon', 'A pilot battling a storm', 'A teenager wrestling with feelings of guilt and jealousy', 'Two runners racing'], ans: 2, exp: 'Character vs. Self is internal emotional struggle.' },
        { q: 'What narrative section establishes the initial setting, mood, and characters?', opts: ['The Climax', 'The Exposition', 'The Epilogue', 'The Resolution'], ans: 1, exp: 'Exposition introduces baseline story world context.' },
        { q: 'Who is the main adversary or opposing force against the central protagonist?', opts: ['The deuteragonist', 'The antagonist', 'The narrator', 'The bystander'], ans: 1, exp: 'The antagonist opposes the protagonist.' },
        { q: 'What does "indirect characterization" mean?', opts: ['The narrator directly tells you a character is mean', 'A character\'s traits are revealed through their actions, dialogue, and reactions', 'The author hides the character\'s name', 'Characters with no dialogue'], ans: 1, exp: 'Indirect characterization shows rather than tells.' }
      ]
    },
    {
      title: 'Drama & Theater: Dialogue, Stage Directions & Soliloquy',
      subtitle: 'Dramatic script conventions, monologue, dramatic irony, and performance',
      quickInfo: 'Drama is literature written for stage performance. Dialogue reveals characters\' motivations, stage directions guide blocking, and dramatic irony creates audience suspense.',
      keyConcepts: [
        'Stage directions (in italics/brackets) govern movement, tone, lighting, and sound.',
        'Soliloquy: a character speaks their innermost private thoughts aloud alone on stage.',
        'Dramatic irony: the audience possesses knowledge unknown to characters on stage.'
      ],
      quiz: [
        { q: 'When a dramatic character speaks their private inner reflections alone on stage, it is a:', opts: ['Dialogue', 'Soliloquy', 'Prologue', 'Chorus'], ans: 1, exp: 'A soliloquy reveals unspoken thoughts.' },
        { q: 'What is "dramatic irony"?', opts: ['When a joke is misunderstood', 'When the audience knows a crucial secret that the characters on stage do not know', 'When lighting fails on stage', 'When an actor forgets lines'], ans: 1, exp: 'Privileged audience knowledge creates dramatic irony.' },
        { q: 'What is the role of stage directions in a published play script?', opts: ['To dictate ticket prices', 'To instruct actors on movement, emotional tone, and stage blocking', 'To summarize character biographies', 'To entertain readers'], ans: 1, exp: 'Stage directions instruct actors and directors.' },
        { q: 'What term designates an author who writes plays for the theater?', opts: ['A novelist', 'A playwright / dramatist', 'A poet laureate', 'A columnist'], ans: 1, exp: 'Writers of dramatic plays are playwrights.' },
        { q: 'How is a full-length theatrical drama conventionally divided structurally?', opts: ['Into chapters and verses', 'Into Acts and Scenes', 'Into stanzas and cantos', 'Into columns and rows'], ans: 1, exp: 'Plays are segmented into Acts and Scenes.' }
      ]
    }
  ],
  science: [
    {
      title: 'Living Cells, Organelles & Human Organ Systems',
      subtitle: 'Cell structure, plant vs animal cells, circulatory, and digestive systems',
      quickInfo: 'The cell is the basic structural and functional unit of all living organisms. Specialized organelles coordinate metabolic processes, while organs combine into systems.',
      keyConcepts: [
        'Organelles: Nucleus (DNA control), Mitochondria (ATP energy), Chloroplasts (photosynthesis in plants).',
        'Plant cells feature rigid cellulose cell walls, large central vacuoles, and chloroplasts.',
        'The circulatory system transports oxygenated blood via arteries and deoxygenated blood via veins.'
      ],
      quiz: [
        { q: 'Which cellular organelle produces cellular energy (ATP) through respiration?', opts: ['Ribosome', 'Mitochondria', 'Endoplasmic reticulum', 'Golgi apparatus'], ans: 1, exp: 'Mitochondria generate ATP energy.' },
        { q: 'Which structure is present in plant cells but absent from animal cells?', opts: ['Cell membrane', 'Cellulose cell wall', 'Mitochondria', 'Cytoplasm'], ans: 1, exp: 'Plant cells have cellulose cell walls.' },
        { q: 'Which blood vessels carry blood away from the heart to the rest of the body?', opts: ['Veins', 'Arteries', 'Capillaries only', 'Lymph vessels'], ans: 1, exp: 'Arteries carry blood Away from the heart.' },
        { q: 'Where does the majority of nutrient absorption into the bloodstream take place?', opts: ['The mouth', 'The stomach', 'The small intestine', 'The large intestine'], ans: 2, exp: 'The small intestine villi absorb nutrients.' },
        { q: 'What organelle contains the cell\'s genetic genetic instructions (DNA)?', opts: ['The vacuole', 'The nucleus', 'The lysosome', 'The ribosome'], ans: 1, exp: 'The nucleus houses eukaryotic genomic DNA.' }
      ]
    },
    {
      title: 'Matter, Density & Physical vs Chemical Transformations',
      subtitle: 'States of matter, particle theory, density (m/V), and conservation of mass',
      quickInfo: 'Matter consists of particles in constant motion. Physical changes alter physical state without changing chemical identity; chemical changes produce new substances with altered bonds.',
      keyConcepts: [
        'States of matter: Solids (fixed volume/shape), Liquids (fixed volume), Gases (expand to container).',
        'Density formula: Density = Mass / Volume (ρ = m/V).',
        'Chemical change evidence: evolution of gas, precipitate formation, temperature or color change.'
      ],
      quiz: [
        { q: 'Which of the following processes represents a chemical change?', opts: ['Melting of ice cubes', 'Dissolving sugar in warm water', 'Corrosion/rusting of iron in moist air', 'Chopping a wooden log'], ans: 2, exp: 'Rusting creates iron oxide, a new chemical substance.' },
        { q: 'An object has a mass of 48 grams and a volume of 6 cm³. What is its density?', opts: ['8 g/cm³', '0.125 g/cm³', '42 g/cm³', '288 g/cm³'], ans: 0, exp: 'Density = mass / volume = 48 / 6 = 8 g/cm³.' },
        { q: 'What state of matter has a definite volume but takes the shape of its container?', opts: ['Solid', 'Liquid', 'Gas', 'Plasma'], ans: 1, exp: 'Liquids have fixed volume and variable shape.' },
        { q: 'What is the phase transition from gas directly to liquid called?', opts: ['Evaporation', 'Sublimation', 'Condensation', 'Melting'], ans: 2, exp: 'Condensation is gas becoming liquid.' },
        { q: 'What happens to the total mass of reactants during a closed chemical reaction?', opts: ['It is destroyed', 'It remains exactly conserved', 'It doubles', 'It vanishes into heat'], ans: 1, exp: 'The Law of Conservation of Mass.' }
      ]
    },
    {
      title: 'Energy Forms, Transformations & Simple Machines',
      subtitle: 'Kinetic and potential energy, work (F × d), mechanical advantage, and levers',
      quickInfo: 'Energy is the capacity to do work. The Law of Conservation of Energy dictates that energy transforms between forms. Simple machines provide mechanical advantage to lift loads with less effort.',
      keyConcepts: [
        'Work is defined as Force multiplied by displacement in the direction of force (W = F × d).',
        'Law of Conservation of Energy: energy cannot be created or destroyed, only transformed.',
        'Simple machines: Levers, pulleys, inclined planes, wheels and axles, screws, and wedges.'
      ],
      quiz: [
        { q: 'What form of energy is stored in a stretched elastic rubber band or compressed spring?', opts: ['Kinetic energy', 'Elastic potential energy', 'Thermal energy', 'Chemical energy'], ans: 1, exp: 'Elastic deformation stores potential energy.' },
        { q: 'In physics, how is mechanical work calculated?', opts: ['Work = Mass × Velocity', 'Work = Force × Distance', 'Work = Power / Time', 'Work = Voltage × Current'], ans: 1, exp: 'W = F × d.' },
        { q: 'What is the fixed pivot point around which a lever pivots called?', opts: ['Effort', 'Load', 'Fulcrum', 'Axle'], ans: 2, exp: 'The fulcrum is the rotational pivot.' },
        { q: 'A wheelchair access ramp is an example of which simple machine?', opts: ['A lever', 'An inclined plane', 'A pulley', 'A screw'], ans: 1, exp: 'A ramp is an inclined plane.' },
        { q: 'What unit of measurement is used for both work and energy in the SI system?', opts: ['Watts', 'Joules (J)', 'Newtons', 'Pascals'], ans: 1, exp: 'The SI unit for energy and work is the Joule.' }
      ]
    }
  ],
  'basic-science': [
    {
      title: 'Living Cells, Organelles & Human Organ Systems',
      subtitle: 'Cell structure, plant vs animal cells, circulatory, and digestive systems',
      quickInfo: 'The cell is the basic structural and functional unit of all living organisms. Specialized organelles coordinate metabolic processes, while organs combine into systems.',
      keyConcepts: [
        'Organelles: Nucleus (DNA control), Mitochondria (ATP energy), Chloroplasts (photosynthesis in plants).',
        'Plant cells feature rigid cellulose cell walls, large central vacuoles, and chloroplasts.',
        'The circulatory system transports oxygenated blood via arteries and deoxygenated blood via veins.'
      ],
      quiz: [
        { q: 'Which cellular organelle produces cellular energy (ATP) through respiration?', opts: ['Ribosome', 'Mitochondria', 'Endoplasmic reticulum', 'Golgi apparatus'], ans: 1, exp: 'Mitochondria generate ATP energy.' },
        { q: 'Which structure is present in plant cells but absent from animal cells?', opts: ['Cell membrane', 'Cellulose cell wall', 'Mitochondria', 'Cytoplasm'], ans: 1, exp: 'Plant cells have cellulose cell walls.' },
        { q: 'Which blood vessels carry blood away from the heart to the rest of the body?', opts: ['Veins', 'Arteries', 'Capillaries only', 'Lymph vessels'], ans: 1, exp: 'Arteries carry blood Away from the heart.' },
        { q: 'Where does the majority of nutrient absorption into the bloodstream take place?', opts: ['The mouth', 'The stomach', 'The small intestine', 'The large intestine'], ans: 2, exp: 'The small intestine villi absorb nutrients.' },
        { q: 'What organelle contains the cell\'s genetic instructions (DNA)?', opts: ['The vacuole', 'The nucleus', 'The lysosome', 'The ribosome'], ans: 1, exp: 'The nucleus houses eukaryotic genomic DNA.' }
      ]
    },
    {
      title: 'Matter, Density & Physical vs Chemical Transformations',
      subtitle: 'States of matter, particle theory, density (m/V), and conservation of mass',
      quickInfo: 'Matter consists of particles in constant motion. Physical changes alter physical state without changing chemical identity; chemical changes produce new substances with altered bonds.',
      keyConcepts: [
        'States of matter: Solids (fixed volume/shape), Liquids (fixed volume), Gases (expand to container).',
        'Density formula: Density = Mass / Volume (ρ = m/V).',
        'Chemical change evidence: evolution of gas, precipitate formation, temperature or color change.'
      ],
      quiz: [
        { q: 'Which of the following processes represents a chemical change?', opts: ['Melting of ice cubes', 'Dissolving sugar in warm water', 'Corrosion/rusting of iron in moist air', 'Chopping a wooden log'], ans: 2, exp: 'Rusting creates iron oxide, a new chemical substance.' },
        { q: 'An object has a mass of 48 grams and a volume of 6 cm³. What is its density?', opts: ['8 g/cm³', '0.125 g/cm³', '42 g/cm³', '288 g/cm³'], ans: 0, exp: 'Density = mass / volume = 48 / 6 = 8 g/cm³.' },
        { q: 'What state of matter has a definite volume but takes the shape of its container?', opts: ['Solid', 'Liquid', 'Gas', 'Plasma'], ans: 1, exp: 'Liquids have fixed volume and variable shape.' },
        { q: 'What is the phase transition from gas directly to liquid called?', opts: ['Evaporation', 'Sublimation', 'Condensation', 'Melting'], ans: 2, exp: 'Condensation is gas becoming liquid.' },
        { q: 'What happens to the total mass of reactants during a closed chemical reaction?', opts: ['It is destroyed', 'It remains exactly conserved', 'It doubles', 'It vanishes into heat'], ans: 1, exp: 'The Law of Conservation of Mass.' }
      ]
    },
    {
      title: 'Energy Forms, Transformations & Simple Machines',
      subtitle: 'Kinetic and potential energy, work (F × d), mechanical advantage, and levers',
      quickInfo: 'Energy is the capacity to do work. The Law of Conservation of Energy dictates that energy transforms between forms. Simple machines provide mechanical advantage to lift loads with less effort.',
      keyConcepts: [
        'Work is defined as Force multiplied by displacement in the direction of force (W = F × d).',
        'Law of Conservation of Energy: energy cannot be created or destroyed, only transformed.',
        'Simple machines: Levers, pulleys, inclined planes, wheels and axles, screws, and wedges.'
      ],
      quiz: [
        { q: 'What form of energy is stored in a stretched elastic rubber band or compressed spring?', opts: ['Kinetic energy', 'Elastic potential energy', 'Thermal energy', 'Chemical energy'], ans: 1, exp: 'Elastic deformation stores potential energy.' },
        { q: 'In physics, how is mechanical work calculated?', opts: ['Work = Mass × Velocity', 'Work = Force × Distance', 'Work = Power / Time', 'Work = Voltage × Current'], ans: 1, exp: 'W = F × d.' },
        { q: 'What is the fixed pivot point around which a lever pivots called?', opts: ['Effort', 'Load', 'Fulcrum', 'Axle'], ans: 2, exp: 'The fulcrum is the rotational pivot.' },
        { q: 'A wheelchair access ramp is an example of which simple machine?', opts: ['A lever', 'An inclined plane', 'A pulley', 'A screw'], ans: 1, exp: 'A ramp is an inclined plane.' },
        { q: 'What unit of measurement is used for both work and energy in the SI system?', opts: ['Watts', 'Joules (J)', 'Newtons', 'Pascals'], ans: 1, exp: 'The SI unit for energy and work is the Joule.' }
      ]
    }
  ],
  'social-studies': [
    {
      title: 'Culture, Traditions & Socialization in Society',
      subtitle: 'Material vs non-material culture, family, schools, and cultural heritage',
      quickInfo: 'Culture is the totality of customs, values, arts, and institutions shared by a society. Socialization transmits social norms across generations through family, schools, and media.',
      keyConcepts: [
        'Material culture: clothing, tools, crafts; Non-material culture: beliefs, language, values.',
        'Primary socialization occurs in the family; secondary socialization takes place in schools and peer groups.',
        'Cultural diversity enriches society when paired with mutual tolerance and respect.'
      ],
      quiz: [
        { q: 'What constitutes non-material culture?', opts: ['Tools and buildings', 'Religious beliefs, ethical values, and oral folklore', 'Clothing and jewelry', 'Automobiles'], ans: 1, exp: 'Non-material culture encompasses abstract beliefs and customs.' },
        { q: 'What is the earliest primary agent of socialization for an infant?', opts: ['The peer group', 'The family', 'The mass media', 'The government'], ans: 1, exp: 'The family is the foundation of early socialization.' },
        { q: 'What is the benefit of cultural tolerance in a multi-ethnic country?', opts: ['It eliminates different languages', 'It promotes harmonious coexistence and social cohesion', 'It forbids international trade', 'It causes civil conflict'], ans: 1, exp: 'Tolerance ensures peaceful multi-ethnic collaboration.' },
        { q: 'Passing down community history through spoken tales and proverbs is called:', opts: ['Archaeological digging', 'Oral tradition', 'Written legislation', 'Digital streaming'], ans: 1, exp: 'Oral traditions preserve cultural heritage.' },
        { q: 'What social agency provides formalized academic knowledge and civic training?', opts: ['The school', 'The market', 'The cinema', 'The amusement park'], ans: 0, exp: 'Schools provide structured socialization.' }
      ]
    },
    {
      title: 'Global Geography: Continents, Oceans & Climate Zones',
      subtitle: 'Hemispheres, latitude, longitude, tropical rainforests, deserts, and polar zones',
      quickInfo: 'Earth is partitioned into seven continents and five major oceans. Global climate zones (tropical, temperate, arid, polar) depend on latitude and solar insolation.',
      keyConcepts: [
        'The Equator (0° latitude) separates Northern and Southern Hemispheres.',
        'The Prime Meridian (0° longitude) runs through Greenwich, England.',
        'Tropical climates receive direct solar rays year-round with high precipitation.'
      ],
      quiz: [
        { q: 'Which is the largest continent on Earth by land area and population?', opts: ['Africa', 'Asia', 'North America', 'Europe'], ans: 1, exp: 'Asia encompasses the largest territory and population.' },
        { q: 'What line of latitude lies at exactly 0 degrees?', opts: ['The Prime Meridian', 'The Equator', 'The Tropic of Cancer', 'The Arctic Circle'], ans: 1, exp: 'The Equator is the 0° latitude baseline.' },
        { q: 'Which is the deepest and most expansive ocean on planet Earth?', opts: ['The Atlantic Ocean', 'The Pacific Ocean', 'The Indian Ocean', 'The Arctic Ocean'], ans: 1, exp: 'The Pacific Ocean is the largest ocean.' },
        { q: 'What climate zone is characterized by intense year-round heat and high rainfall near the equator?', opts: ['The Polar Tundra', 'The Tropical Rainforest', 'The Temperate Steppe', 'The Desert'], ans: 1, exp: 'Tropical rainforests surround the equatorial belt.' },
        { q: 'Lines of longitude measure angular distance in degrees east and west of what reference line?', opts: ['The International Date Line', 'The Prime Meridian', 'The South Pole', 'The Tropic of Capricorn'], ans: 1, exp: 'The Prime Meridian is the 0° longitude baseline.' }
      ]
    },
    {
      title: 'Human Rights, Democratic Governance & Civic Responsibilities',
      subtitle: 'The Universal Declaration of Human Rights, rule of law, voting, and citizenship duties',
      quickInfo: 'Citizens in democratic states possess fundamental human rights protected by constitutional law. These rights are accompanied by civic obligations such as voting and paying taxes.',
      keyConcepts: [
        'The United Nations ratified the Universal Declaration of Human Rights (UDHR) in 1948.',
        'Core civic duties: obeying constitutional laws, voting in elections, paying lawful taxes.',
        'The rule of law ensures that all citizens, including leaders, are subject to the same laws.'
      ],
      quiz: [
        { q: 'In what year was the Universal Declaration of Human Rights proclaimed by the United Nations?', opts: ['1776', '1918', '1948', '2000'], ans: 2, exp: 'The UN proclaimed the UDHR in 1948.' },
        { q: 'What does the democratic principle "Rule of Law" guarantee?', opts: ['Only judges make rules', 'No person or leader is above the law, and laws apply equally to all', 'Laws change every day', 'Citizens have no rights'], ans: 1, exp: 'Equality under the law is the cornerstone of justice.' },
        { q: 'Which of the following is a mandatory civic responsibility for adult citizens?', opts: ['Buying expensive cars', 'Paying lawful taxes and observing legislation', 'Running for president', 'Traveling abroad'], ans: 1, exp: 'Tax compliance and lawfulness sustain public infrastructure.' },
        { q: 'What type of governance features power vested in the people who exercise it via elected officials?', opts: ['Absolute Monarchy', 'Representative Democracy', 'Totalitarian Dictatorship', 'Oligarchy'], ans: 1, exp: 'Democracy is government of the people, by the people.' },
        { q: 'Why is freedom of speech and expression protected in a democracy?', opts: ['To allow citizens to debate public policies and hold authority accountable', 'To make newspapers free of charge', 'To cancel elections', 'It is not protected'], ans: 0, exp: 'Free expression is vital for self-governance.' }
      ]
    }
  ],
  'basic-technology': [
    {
      title: 'Workshop Safety, Hand Tools & Measuring Instruments',
      subtitle: 'Personal protective equipment (PPE), rules, calipers, try squares, and bench vices',
      quickInfo: 'Workshop safety prevents workplace injuries through personal protective equipment (PPE) and proper handling of tools. Precision measuring tools ensure accurate cutting and assembly.',
      keyConcepts: [
        'PPE essentials: safety goggles, steel-toe boots, ear defenders, and workshop aprons.',
        'Measuring & marking out tools: steel rule, vernier calipers, try square, scriber, and center punch.',
        'Hand cutting tools: hacksaw (metal), tenon saw (wood), chisels, and files.'
      ],
      quiz: [
        { q: 'What safety gear is mandatory to protect eyes from flying metal shavings or wood chips?', opts: ['Sunglasses', 'Safety goggles', 'A headband', 'Contact lenses'], ans: 1, exp: 'Impact-resistant safety goggles protect vision.' },
        { q: 'Which woodworking tool is used to test and mark right angles (90 degrees)?', opts: ['A try square', 'A plumb bob', 'A tape measure', 'A center punch'], ans: 0, exp: 'Try squares check perpendicular 90° edges.' },
        { q: 'What tool is designed specifically for cutting metals in a workshop?', opts: ['A tenon saw', 'A hacksaw', 'A coping saw', 'A rip saw'], ans: 1, exp: 'Hacksaws feature hardened blades for cutting metal.' },
        { q: 'What precision instrument measures internal and external dimensions to fractions of a millimeter?', opts: ['A meter stick', 'A vernier caliper', 'A string', 'A plumb line'], ans: 1, exp: 'Vernier calipers measure with sub-millimeter precision.' },
        { q: 'What should you do immediately if an accident occurs in the workshop?', opts: ['Hide the broken tool', 'Switch off power and notify the teacher/instructor immediately', 'Continue working quietly', 'Leave the building alone'], ans: 1, exp: 'Prompt reporting and power isolation prevent further harm.' }
      ]
    },
    {
      title: 'Engineering Materials: Metals, Wood, Plastics & Ceramics',
      subtitle: 'Ferrous vs non-ferrous metals, hardwoods, softwoods, thermoplastics, and thermosets',
      quickInfo: 'Engineering materials possess distinct physical and mechanical properties. Ferrous metals contain iron and are magnetic; non-ferrous (aluminum, copper) resist corrosion.',
      keyConcepts: [
        'Ferrous metals contain iron and are prone to rust (steel, cast iron); Non-ferrous do not (copper, aluminum).',
        'Hardwoods come from broad-leaved deciduous trees (oak, mahogany); softwoods from conifers (pine).',
        'Thermoplastics can be remelted and reshaped (acrylic, PVC); thermosets harden permanently (epoxy).'
      ],
      quiz: [
        { q: 'What element must be present in a metal for it to be classified as "ferrous"?', opts: ['Copper', 'Iron', 'Gold', 'Zinc'], ans: 1, exp: 'Ferrous metals are iron-based.' },
        { q: 'Which non-ferrous metal is renowned for its high electrical conductivity and used in household wiring?', opts: ['Lead', 'Copper', 'Tin', 'Iron'], ans: 1, exp: 'Copper is an exceptional electrical conductor.' },
        { q: 'What type of plastic can be repeatedly softened by heating and reshaped upon cooling?', opts: ['Thermosetting plastic', 'Thermoplastic', 'Ceramic', 'Vulcanized rubber'], ans: 1, exp: 'Thermoplastics are recyclable via reheating.' },
        { q: 'Which wood is classified as a softwood harvested from needle-bearing evergreen trees?', opts: ['Oak', 'Teak', 'Pine', 'Mahogany'], ans: 2, exp: 'Pine is a coniferous softwood.' },
        { q: 'Why are ceramic tiles and bricks widely used in building construction?', opts: ['They are flexible', 'They exhibit high compressive strength, fire resistance, and durability', 'They are lightweight liquids', 'They conduct electricity easily'], ans: 1, exp: 'Ceramics resist heat and high compression.' }
      ]
    },
    {
      title: 'Technical Drawing: Orthographic Projection & Geometric Construction',
      subtitle: 'T-squares, drawing boards, front/plan/end elevations, and dimensioning conventions',
      quickInfo: 'Technical drawing is the universal graphic language of engineering. Orthographic projection represents 3D objects as 2D views (Front Elevation, Plan, and End Elevation).',
      keyConcepts: [
        'Equipment: Drawing board, T-square (horizontal lines), set squares (30°/60° and 45°).',
        'Orthographic projection: First Angle (European) and Third Angle (American) projections.',
        'Standard lines: Outlines (thick continuous), dimension lines (thin with arrows), center lines (long-short dashes).'
      ],
      quiz: [
        { q: 'What technical drawing tool slides along the edge of a drawing board to rule parallel horizontal lines?', opts: ['A compass', 'A T-square', 'A French curve', 'A protractor'], ans: 1, exp: 'T-squares draw horizontal guidelines.' },
        { q: 'In orthographic projection, what view represents an object looked at directly from above?', opts: ['Front elevation', 'Plan view', 'End elevation', 'Isometric projection'], ans: 1, exp: 'The plan view is viewed from overhead.' },
        { q: 'What type of line is drawn as an alternating chain of long and short thin dashes?', opts: ['A visible outline', 'A center line (axis of symmetry)', 'A dimension line', 'A cutting plane line'], ans: 1, exp: 'Center lines indicate axes of symmetry.' },
        { q: 'What set square angles are paired on the standard triangular drafting set squares?', opts: ['30°/60°/90° and 45°/45°/90°', '20°/70°/90°', '15°/75°/90°', '50°/50°/80°'], ans: 0, exp: 'Standard set squares are 45° and 30°/60°.' },
        { q: 'Why is accurate dimensioning critical on engineering drawings?', opts: ['To make the paper heavy', 'To allow fabricators and machinists to manufacture components to exact sizes', 'To use extra ink', 'For decoration only'], ans: 1, exp: 'Precise dimensions guide accurate manufacturing.' }
      ]
    }
  ],
  'agricultural-science': [
    {
      title: 'Classification of Crops & Soil Composition',
      subtitle: 'Food crops, cash crops, sand, silt, clay, loam, and soil humus',
      quickInfo: 'Agricultural crops are classified by life cycle (annuals, biennials, perennials) and economic purpose. Loamy soil with organic humus provides optimal aeration and moisture for root growth.',
      keyConcepts: [
        'Crop types: Cereals (maize, rice), Legumes (beans, groundnuts), Roots/Tubers (cassava, yam).',
        'Soil particle size: Sand (largest, well-draining), Silt (medium), Clay (smallest, high water retention).',
        'Loam soil balances sand, silt, clay, and decayed organic matter (humus) for fertile farming.'
      ],
      quiz: [
        { q: 'Which crop belongs to the legume family and enriches soil with fixed atmospheric nitrogen?', opts: ['Maize', 'Soybean / Cowpea', 'Cassava', 'Sugarcane'], ans: 1, exp: 'Legumes fix nitrogen via root nodule rhizobia.' },
        { q: 'Which soil type holds water tightly but drains very slowly due to microscopic particle size?', opts: ['Sandy soil', 'Clay soil', 'Gravel', 'Rocky soil'], ans: 1, exp: 'Clay has dense packing and poor drainage.' },
        { q: 'What is the dark organic material in soil formed by the decomposition of plant and animal matter?', opts: ['Clay', 'Humus', 'Sandstone', 'Silt'], ans: 1, exp: 'Humus provides vital nutrient fertility.' },
        { q: 'Which soil texture is considered best for most general agricultural farming?', opts: ['Pure dry sand', 'Loam soil', 'Heavy dense clay', 'Bedrock'], ans: 1, exp: 'Loam balances water retention and drainage.' },
        { q: 'Crops that complete their entire life cycle from germination to harvest within one year are:', opts: ['Perennials', 'Annuals', 'Biennials', 'Evergreens'], ans: 1, exp: 'Annuals complete their lifecycle in one season.' }
      ]
    },
    {
      title: 'Farm Animals: Monogastric vs Ruminant Digestion',
      subtitle: 'Cattle, goats, poultry, pigs, rumen fermentation, and feed nutrients',
      quickInfo: 'Livestock are grouped by digestive anatomy into ruminants (four-chambered stomach: rumen, reticulum, omasum, abomasum) and monogastrics (single simple stomach like pigs and poultry).',
      keyConcepts: [
        'Ruminants (cattle, sheep, goats) ferment fibrous cellulose grasses in the rumen.',
        'Monogastrics (pigs, chickens, humans) require easily digestible concentrated feeds.',
        'Livestock nutrients: Carbohydrates (energy), Proteins (muscle/eggs), Vitamins, Minerals, Water.'
      ],
      quiz: [
        { q: 'How many stomach compartments does a ruminant animal like a dairy cow possess?', opts: ['One', 'Two', 'Three', 'Four'], ans: 3, exp: 'Ruminants have four chambers: rumen, reticulum, omasum, abomasum.' },
        { q: 'Which of the following farm animals is a monogastric non-ruminant?', opts: ['A goat', 'A pig', 'A cow', 'A sheep'], ans: 1, exp: 'Pigs possess a single simple stomach.' },
        { q: 'What is the largest compartment of a cow\'s stomach where microbial fermentation occurs?', opts: ['The abomasum', 'The rumen', 'The gizzard', 'The crop'], ans: 1, exp: 'The rumen ferments fibrous plant matter.' },
        { q: 'What organ in poultry grinds swallowed seeds and grain using ingested small stones/grit?', opts: ['The crop', 'The gizzard', 'The liver', 'The spleen'], ans: 1, exp: 'The muscular gizzard grinds feed.' },
        { q: 'Why is colostrum (mother\'s first milk after birth) vital for newborn calves and piglets?', opts: ['It contains high levels of protective antibodies and essential nutrients', 'It is sweet tasting', 'It stops them from sleeping', 'It has no fat'], ans: 0, exp: 'Colostrum confers passive immunity.' }
      ]
    },
    {
      title: 'Crop Pests, Diseases & Sustainable Weed Management',
      subtitle: 'Insects, fungi, bacteria, biological control, crop rotation, and IPM',
      quickInfo: 'Weeds compete with crops for sunlight, water, and nutrients. Integrated Pest Management (IPM) combines cultural methods (crop rotation), biological predators, and minimal chemical spraying.',
      keyConcepts: [
        'Insect pest types: Biting and chewing (locusts), Piercing and sucking (aphids), Boring (stem borers).',
        'Crop rotation breaks pest and disease life cycles by rotating plant families across seasons.',
        'Biological control uses natural predators (e.g., ladybugs eating aphids) instead of toxic pesticides.'
      ],
      quiz: [
        { q: 'What is the agricultural definition of a "weed"?', opts: ['Any poisonous plant', 'Any plant growing where it is not wanted that competes with crops', 'A tree with flowers', 'A harvested grain'], ans: 1, exp: 'Weeds compete with cultivated crops.' },
        { q: 'Which insect pest damages crops by piercing plant tissues and sucking out sap?', opts: ['Locust', 'Aphid', 'Armyworm', 'Beetle'], ans: 1, exp: 'Aphids are piercing-sucking insect pests.' },
        { q: 'How does practicing crop rotation help reduce insect pests and soil-borne fungal diseases?', opts: ['It confuses the sun', 'It starves specific pests by depriving them of their preferred host plant next season', 'It makes weeds grow faster', 'It removes all water'], ans: 1, exp: 'Alternating crop species breaks pest cycles.' },
        { q: 'What is "biological pest control" in organic agriculture?', opts: ['Using chemical spray planes', 'Introducing natural living predators or parasites to control pest populations', 'Setting fire to the field', 'Flooding the soil with salt'], ans: 1, exp: 'Biological control uses ecological predators.' },
        { q: 'Which pathogen causes powdery mildew, smut, and rust diseases on cereal crops?', opts: ['Viruses', 'Fungi', 'Earthworms', 'Insects'], ans: 1, exp: 'Fungi cause powdery mildews and rusts.' }
      ]
    }
  ],
  'computer-science': [
    {
      title: 'Computer Architecture & The Central Processing Unit (CPU)',
      subtitle: 'Fetch-Decode-Execute cycle, ALU, Control Unit, RAM vs ROM, and secondary storage',
      quickInfo: 'The CPU is the brain of the computer. It executes instructions via the Fetch-Decode-Execute cycle, while RAM provides volatile high-speed working memory for active programs.',
      keyConcepts: [
        'Von Neumann architecture components: CPU, Memory (RAM/ROM), Input/Output devices.',
        'CPU subsystems: Arithmetic Logic Unit (ALU), Control Unit (CU), and Registers.',
        'Memory: RAM is fast and volatile (erased on power-off); ROM is non-volatile holding BIOS.'
      ],
      quiz: [
        { q: 'What three sequential stages constitute the foundational machine cycle of a CPU?', opts: ['Click-Drag-Drop', 'Fetch-Decode-Execute', 'Input-Output-Restart', 'Save-Edit-Print'], ans: 1, exp: 'The CPU continuously fetches, decodes, and executes instructions.' },
        { q: 'Which component of the CPU carries out mathematical arithmetic and logical comparisons?', opts: ['The Control Unit (CU)', 'The Arithmetic Logic Unit (ALU)', 'The hard drive', 'The heatsink'], ans: 1, exp: 'The ALU performs calculations and Boolean evaluations.' },
        { q: 'What happens to data stored in volatile RAM when the computer is powered down?', opts: ['It is saved to ROM', 'It is lost immediately', 'It is sent to the printer', 'It turns into a file'], ans: 1, exp: 'Volatile RAM loses contents without electrical power.' },
        { q: 'Which of the following is an example of non-volatile secondary storage?', opts: ['RAM', 'Solid State Drive (SSD)', 'CPU Cache', 'GPU Registers'], ans: 1, exp: 'SSDs retain stored files permanently.' },
        { q: 'What does "ROM" stand for in computer hardware?', opts: ['Random Only Memory', 'Read-Only Memory', 'Run Operating Machine', 'Rapid Output Module'], ans: 1, exp: 'ROM stores unmodifiable boot firmware.' }
      ]
    },
    {
      title: 'Algorithms, Flowcharts & Binary Logic',
      subtitle: 'Input-Process-Output, flowchart symbols, pseudocode, bits, bytes, and logic gates',
      quickInfo: 'An algorithm is a step-by-step procedure for solving a computational problem. Flowcharts visually depict algorithms using standardized geometric symbols.',
      keyConcepts: [
        'Flowchart symbols: Oval (Start/End), Rectangle (Process), Diamond (Decision), Parallelogram (Input/Output).',
        'Binary representation: 1 bit = 0 or 1; 1 byte = 8 bits; Kilobyte (KB) ≈ 1,024 bytes.',
        'Logic gates: AND (both 1), OR (at least one 1), NOT (inverts signal).'
      ],
      quiz: [
        { q: 'What standard flowchart shape represents a conditional decision (e.g., IF x > 5)?', opts: ['A rectangle', 'A diamond', 'An oval', 'A circle'], ans: 1, exp: 'Diamonds designate branching decision nodes.' },
        { q: 'How many binary bits are contained within a single byte of computer memory?', opts: ['4 bits', '8 bits', '16 bits', '64 bits'], ans: 1, exp: '8 bits equal one byte.' },
        { q: 'What is the output of an AND logic gate if Input A is 1 (True) and Input B is 0 (False)?', opts: ['1', '0', 'Both', 'Undefined'], ans: 1, exp: 'An AND gate requires all inputs to be 1 to output 1.' },
        { q: 'What is "pseudocode" in software development?', opts: ['Malicious code', 'Informal, human-readable outline of program steps without rigid syntax', 'Machine binary instructions', 'An encrypted password'], ans: 1, exp: 'Pseudocode outlines logic clearly before coding.' },
        { q: 'What decimal number does the 4-bit binary sequence 1010 represent?', opts: ['5', '8', '10', '12'], ans: 2, exp: '8 + 0 + 2 + 0 = 10.' }
      ]
    },
    {
      title: 'Computer Networks, The Internet & Cybersecurity',
      subtitle: 'LAN vs WAN, IP addresses, DNS, encryption, phishing, and malware prevention',
      quickInfo: 'Networks connect computers for communication and resource sharing. The global internet routes data packets using IP addresses and DNS. Cybersecurity safeguards data against threats.',
      keyConcepts: [
        'Network types: LAN (Local Area Network, e.g. school lab) vs WAN (Wide Area Network, e.g. the Internet).',
        'DNS (Domain Name System) maps web names (wikipedia.org) to numerical IP addresses.',
        'Cybersecurity hygiene: two-factor authentication (2FA), strong unique passwords, and avoiding phishing emails.'
      ],
      quiz: [
        { q: 'What network type connects devices across a small geographic area, such as a single classroom or home?', opts: ['WAN (Wide Area Network)', 'LAN (Local Area Network)', 'MAN (Metropolitan Area Network)', 'PAN only'], ans: 1, exp: 'A LAN covers a localized physical space.' },
        { q: 'What service translates readable website domain names into numerical IP addresses?', opts: ['HTTP', 'DNS (Domain Name System)', 'FTP', 'SMTP'], ans: 1, exp: 'DNS resolves human URLs to computer IP addresses.' },
        { q: 'What is "phishing" in internet cybersecurity?', opts: ['Fishing with a digital rod', 'Fraudulent attempts to steal sensitive credentials by impersonating trustworthy entities', 'Upgrading computer memory', 'Speeding up internet bandwidth'], ans: 1, exp: 'Phishing tricks users into disclosing passwords.' },
        { q: 'What does the "S" in HTTPS stand for in your web browser address bar?', opts: ['Speed', 'Secure (encrypted with SSL/TLS)', 'System', 'Software'], ans: 1, exp: 'HTTPS encrypts transmitted web traffic.' },
        { q: 'Why is two-factor authentication (2FA) recommended for securing online accounts?', opts: ['It makes logging in twice as slow', 'It requires a secondary verification code in addition to password, blocking unauthorized access', 'It deletes your password', 'It requires two computers'], ans: 1, exp: '2FA stops unauthorized logins even if passwords leak.' }
      ]
    }
  ],
  ict: [
    {
      title: 'Computer Architecture & The Central Processing Unit (CPU)',
      subtitle: 'Fetch-Decode-Execute cycle, ALU, Control Unit, RAM vs ROM, and secondary storage',
      quickInfo: 'The CPU is the brain of the computer. It executes instructions via the Fetch-Decode-Execute cycle, while RAM provides volatile high-speed working memory for active programs.',
      keyConcepts: [
        'Von Neumann architecture components: CPU, Memory (RAM/ROM), Input/Output devices.',
        'CPU subsystems: Arithmetic Logic Unit (ALU), Control Unit (CU), and Registers.',
        'Memory: RAM is fast and volatile (erased on power-off); ROM is non-volatile holding BIOS.'
      ],
      quiz: [
        { q: 'What three sequential stages constitute the foundational machine cycle of a CPU?', opts: ['Click-Drag-Drop', 'Fetch-Decode-Execute', 'Input-Output-Restart', 'Save-Edit-Print'], ans: 1, exp: 'The CPU continuously fetches, decodes, and executes instructions.' },
        { q: 'Which component of the CPU carries out mathematical arithmetic and logical comparisons?', opts: ['The Control Unit (CU)', 'The Arithmetic Logic Unit (ALU)', 'The hard drive', 'The heatsink'], ans: 1, exp: 'The ALU performs calculations and Boolean evaluations.' },
        { q: 'What happens to data stored in volatile RAM when the computer is powered down?', opts: ['It is saved to ROM', 'It is lost immediately', 'It is sent to the printer', 'It turns into a file'], ans: 1, exp: 'Volatile RAM loses contents without electrical power.' },
        { q: 'Which of the following is an example of non-volatile secondary storage?', opts: ['RAM', 'Solid State Drive (SSD)', 'CPU Cache', 'GPU Registers'], ans: 1, exp: 'SSDs retain stored files permanently.' },
        { q: 'What does "ROM" stand for in computer hardware?', opts: ['Random Only Memory', 'Read-Only Memory', 'Run Operating Machine', 'Rapid Output Module'], ans: 1, exp: 'ROM stores unmodifiable boot firmware.' }
      ]
    },
    {
      title: 'Algorithms, Flowcharts & Binary Logic',
      subtitle: 'Input-Process-Output, flowchart symbols, pseudocode, bits, bytes, and logic gates',
      quickInfo: 'An algorithm is a step-by-step procedure for solving a computational problem. Flowcharts visually depict algorithms using standardized geometric symbols.',
      keyConcepts: [
        'Flowchart symbols: Oval (Start/End), Rectangle (Process), Diamond (Decision), Parallelogram (Input/Output).',
        'Binary representation: 1 bit = 0 or 1; 1 byte = 8 bits; Kilobyte (KB) ≈ 1,024 bytes.',
        'Logic gates: AND (both 1), OR (at least one 1), NOT (inverts signal).'
      ],
      quiz: [
        { q: 'What standard flowchart shape represents a conditional decision (e.g., IF x > 5)?', opts: ['A rectangle', 'A diamond', 'An oval', 'A circle'], ans: 1, exp: 'Diamonds designate branching decision nodes.' },
        { q: 'How many binary bits are contained within a single byte of computer memory?', opts: ['4 bits', '8 bits', '16 bits', '64 bits'], ans: 1, exp: '8 bits equal one byte.' },
        { q: 'What is the output of an AND logic gate if Input A is 1 (True) and Input B is 0 (False)?', opts: ['1', '0', 'Both', 'Undefined'], ans: 1, exp: 'An AND gate requires all inputs to be 1 to output 1.' },
        { q: 'What is "pseudocode" in software development?', opts: ['Malicious code', 'Informal, human-readable outline of program steps without rigid syntax', 'Machine binary instructions', 'An encrypted password'], ans: 1, exp: 'Pseudocode outlines logic clearly before coding.' },
        { q: 'What decimal number does the 4-bit binary sequence 1010 represent?', opts: ['5', '8', '10', '12'], ans: 2, exp: '8 + 0 + 2 + 0 = 10.' }
      ]
    },
    {
      title: 'Computer Networks, The Internet & Cybersecurity',
      subtitle: 'LAN vs WAN, IP addresses, DNS, encryption, phishing, and malware prevention',
      quickInfo: 'Networks connect computers for communication and resource sharing. The global internet routes data packets using IP addresses and DNS. Cybersecurity safeguards data against threats.',
      keyConcepts: [
        'Network types: LAN (Local Area Network, e.g. school lab) vs WAN (Wide Area Network, e.g. the Internet).',
        'DNS (Domain Name System) maps web names (wikipedia.org) to numerical IP addresses.',
        'Cybersecurity hygiene: two-factor authentication (2FA), strong unique passwords, and avoiding phishing emails.'
      ],
      quiz: [
        { q: 'What network type connects devices across a small geographic area, such as a single classroom or home?', opts: ['WAN (Wide Area Network)', 'LAN (Local Area Network)', 'MAN (Metropolitan Area Network)', 'PAN only'], ans: 1, exp: 'A LAN covers a localized physical space.' },
        { q: 'What service translates readable website domain names into numerical IP addresses?', opts: ['HTTP', 'DNS (Domain Name System)', 'FTP', 'SMTP'], ans: 1, exp: 'DNS resolves human URLs to computer IP addresses.' },
        { q: 'What is "phishing" in internet cybersecurity?', opts: ['Fishing with a digital rod', 'Fraudulent attempts to steal sensitive credentials by impersonating trustworthy entities', 'Upgrading computer memory', 'Speeding up internet bandwidth'], ans: 1, exp: 'Phishing tricks users into disclosing passwords.' },
        { q: 'What does the "S" in HTTPS stand for in your web browser address bar?', opts: ['Speed', 'Secure (encrypted with SSL/TLS)', 'System', 'Software'], ans: 1, exp: 'HTTPS encrypts transmitted web traffic.' },
        { q: 'Why is two-factor authentication (2FA) recommended for securing online accounts?', opts: ['It makes logging in twice as slow', 'It requires a secondary verification code in addition to password, blocking unauthorized access', 'It deletes your password', 'It requires two computers'], ans: 1, exp: '2FA stops unauthorized logins even if passwords leak.' }
      ]
    }
  ],
  'business-studies': [
    {
      title: 'Introduction to Business, Trade & Commerce',
      subtitle: 'Aims of business, production stages, home vs foreign trade, and retailers',
      quickInfo: 'Business provides goods and services to satisfy human wants and generate profit. Trade is the buying and selling of goods, categorized into home (domestic) and foreign (international) trade.',
      keyConcepts: [
        'Production stages: Primary (extraction), Secondary (manufacturing), Tertiary (services and trade).',
        'Trade channels: Producer → Wholesaler → Retailer → Final Consumer.',
        'Aids to trade: Banking, insurance, warehousing, transport, advertising, and communication.'
      ],
      quiz: [
        { q: 'Which stage of production involves extracting raw natural resources from the earth or sea?', opts: ['Tertiary production', 'Primary production', 'Secondary production', 'Quaternary'], ans: 1, exp: 'Primary production extracts raw materials.' },
        { q: 'Who purchases goods in bulk quantities from manufacturers and sells them in smaller lots to retailers?', opts: ['Consumers', 'Wholesalers', 'Importers only', 'Brokers'], ans: 1, exp: 'Wholesalers break bulk quantities.' },
        { q: 'Which aid to trade protects businesses against financial losses from unforeseen risks like fire or theft?', opts: ['Warehousing', 'Insurance', 'Advertising', 'Transportation'], ans: 1, exp: 'Insurance indemnifies against risks.' },
        { q: 'What type of trade occurs between buyers and sellers within the borders of the same country?', opts: ['Foreign trade', 'Home (domestic) trade', 'Entrepot trade', 'Export trade'], ans: 1, exp: 'Domestic trade occurs within national borders.' },
        { q: 'What is the ultimate reward or primary objective of private commercial enterprise?', opts: ['Tax payment', 'Earning a profit', 'Charity', 'Advertising'], ans: 1, exp: 'Profit motivates private business enterprises.' }
      ]
    },
    {
      title: 'Office Equipment, Procedures & Business Documents',
      subtitle: 'Invoices, receipts, purchase orders, filing systems, and office departments',
      quickInfo: 'An office is the administrative information hub of an organization. It processes commercial documentation (quotations, orders, delivery notes, invoices) and maintains archival filing systems.',
      keyConcepts: [
        'Document sequence: Inquiry → Quotation → Purchase Order → Delivery Note → Invoice → Receipt.',
        'An invoice requests payment for supplied goods, stating quantities, unit prices, and credit terms.',
        'Filing methods: Alphabetical, numerical, geographical, subject, and chronological filing.'
      ],
      quiz: [
        { q: 'Which commercial document is sent by a seller to demand payment for goods sold on credit?', opts: ['An inquiry', 'An invoice', 'A receipt', 'A delivery note'], ans: 1, exp: 'An invoice bills the buyer for supplied goods.' },
        { q: 'What document serves as legal proof that payment has been received in full?', opts: ['A purchase order', 'A receipt', 'A quotation', 'A catalog'], ans: 1, exp: 'A receipt acknowledges received funds.' },
        { q: 'What office department handles employee recruitment, training, welfare, and records?', opts: ['Accounts department', 'Human Resources (Personnel) department', 'Purchasing', 'Marketing'], ans: 1, exp: 'HR manages personnel and staffing.' },
        { q: 'Arranging customer files in order of their surnames (A to Z) is which filing system?', opts: ['Numerical filing', 'Alphabetical filing', 'Chronological filing', 'Geographical filing'], ans: 1, exp: 'Alphabetical filing sorts by letters A-Z.' },
        { q: 'What office machine creates identical paper copies of an existing original printed sheet?', opts: ['A photocopier', 'A shredder', 'A laminator', 'A calculator'], ans: 0, exp: 'Photocopiers replicate physical documents.' }
      ]
    },
    {
      title: 'Consumer Rights, Responsibilities & Money Management',
      subtitle: 'Consumer protection agencies, budgeting, savings, and responsible shopping',
      quickInfo: 'Consumers have the right to safety, accurate information, choice, and redress against defective goods. Personal financial literacy requires budgeting, saving, and avoiding impulse purchases.',
      keyConcepts: [
        'Consumer rights: Right to safety, to be informed, to choose, to be heard, to redress.',
        'Consumer responsibilities: inspecting goods, checking expiry dates, requesting receipts.',
        'Budgeting: planning income versus expenditure so expenditures do not exceed income.'
      ],
      quiz: [
        { q: 'What should a responsible shopper always check on packaged food or medicine before purchase?', opts: ['The color of the box only', 'The manufacturing and expiry dates', 'The store owner\'s name', 'The weight of the bag'], ans: 1, exp: 'Expiry dates ensure consumption safety.' },
        { q: 'What consumer right guarantees compensation or replacement for faulty or dangerous products?', opts: ['Right to redress / compensation', 'Right to pay extra', 'Right to ignore rules', 'Right to advertise'], ans: 0, exp: 'The right to redress remedies defects.' },
        { q: 'What is a personal financial "budget"?', opts: ['A bank penalty', 'A written plan estimating income and allocating expenses over a specific period', 'A debt statement', 'An investment tip'], ans: 1, exp: 'A budget plans and balances finances.' },
        { q: 'Why is impulse buying considered poor financial management?', opts: ['It saves too much money', 'It involves buying unplanned items without considering necessity or budget limits', 'It is illegal', 'It increases taxes'], ans: 1, exp: 'Unplanned impulse spending causes budget deficits.' },
        { q: 'What is the primary role of government consumer protection agencies?', opts: ['To set store closing hours', 'To protect citizens from unsafe products, false advertising, and unfair trade practices', 'To run grocery stores', 'To collect personal receipts'], ans: 1, exp: 'Consumer protection agencies enforce fair standards.' }
      ]
    }
  ],
  french: [
    {
      title: 'Salutations, Présentations et Chiffres (1-100)',
      subtitle: 'Greetings, personal introductions, nationalities, professions, and numbers',
      quickInfo: 'Mastering everyday French starts with polite greetings (Bonjour, Bonsoir), formal vs informal address (vous vs tu), introducing oneself (Je m\'appelle...), and counting to 100.',
      keyConcepts: [
        'Polite greetings: "Bonjour" (daytime/formal), "Salut" (casual), "Bonsoir" (evening).',
        'Tu (informal singular for friends/family) vs Vous (formal singular or plural).',
        'Basic personal details: "Je m\'appelle...", "J\'ai 12 ans", "Je suis élève".'
      ],
      quiz: [
        { q: 'How do you say "Good morning" or "Hello" politely in French?', opts: ['Bonsoir', 'Bonjour', 'Bonne nuit', 'Au revoir'], ans: 1, exp: '"Bonjour" is standard daytime greeting.' },
        { q: 'What is the difference between "tu" and "vous" in French?', opts: ['"Tu" is plural; "vous" is singular', '"Tu" is informal for friends/peers; "vous" is formal or plural', 'They are used interchangeably with no rules', 'None'], ans: 1, exp: '"Vous" indicates formal politeness or plural.' },
        { q: 'How do you say "My name is Pierre" in French?', opts: ['Je m\'appelle Pierre', 'Mon ami est Pierre', 'Il est Pierre', 'Pierre c\'est moi'], ans: 0, exp: '"Je m\'appelle Pierre" means my name is Pierre.' },
        { q: 'What number is "vingt-cinq" in English?', opts: ['15', '20', '25', '50'], ans: 2, exp: 'Vingt (20) + cinq (5) = 25.' },
        { q: 'How do you say "Goodbye" in French?', opts: ['Merci', 'S\'il vous plaît', 'Au revoir', 'Pardon'], ans: 2, exp: '"Au revoir" is goodbye.' }
      ]
    },
    {
      title: 'La Conjugaison au Présent: Verbes Réguliers en -ER',
      subtitle: 'Parler, habiter, aimer, subject pronouns, and negative sentences (ne... pas)',
      quickInfo: 'Regular -er verbs follow a predictable pattern in the present tense: remove -er and add endings -e, -es, -e, -ons, -ez, -ent. Negation brackets the verb with "ne ... pas".',
      keyConcepts: [
        'Present endings for -er verbs: je -e, tu -es, il/elle -e, nous -ons, vous -ez, ils/elles -ent.',
        'Negative structure: Sujet + ne + verbe + pas (e.g., "Je ne parle pas espagnol").',
        'Auxiliary verbs: Être (to be) and Avoir (to have) are fundamental irregulars.'
      ],
      quiz: [
        { q: 'What is the correct conjugation of "parler" with "nous" (We speak)?', opts: ['Nous parles', 'Nous parlons', 'Nous parlez', 'Nous parlent'], ans: 1, exp: 'The "nous" ending is -ons: Nous parlons.' },
        { q: 'How do you make the sentence "Elle aime le chocolat" negative?', opts: ['Elle n\'aime pas le chocolat', 'Elle pas aime chocolat', 'Elle non aime chocolat', 'Elle aime non chocolat'], ans: 0, exp: '"Ne ... pas" brackets the conjugated verb: n\'aime pas.' },
        { q: 'Conjugate the irregular verb "être" for "Je" (I am):', opts: ['Je es', 'Je suis', 'Je a', 'Je somme'], ans: 1, exp: '"Je suis" means I am.' },
        { q: 'What does "J\'ai faim" literally mean in French?', opts: ['I am cold', 'I am hungry (literally: I have hunger)', 'I am thirsty', 'I am tired'], ans: 1, exp: 'French expresses hunger using avoir: "J\'ai faim".' },
        { q: 'Which subject pronoun corresponds to "they" (masculine or mixed group)?', opts: ['Ils', 'Elles', 'Nous', 'Vous'], ans: 0, exp: '"Ils" is masculine plural they.' }
      ]
    },
    {
      title: 'La Famille, Les Vêtements et La Maison',
      subtitle: 'Family members, articles (le, la, les, un, une), clothing, and colors',
      quickInfo: 'Every French noun has grammatical gender (masculine or feminine). Adjectives agree in gender and number with the noun they describe (e.g., une chemise bleue).',
      keyConcepts: [
        'Definite articles: le (masc), la (fem), l\' (before vowels), les (plural).',
        'Indefinite articles: un (masc), une (fem), des (plural).',
        'Adjective agreement: add "-e" for feminine and "-s" for plural (with irregular exceptions).'
      ],
      quiz: [
        { q: 'Which is the correct feminine definite article in French?', opts: ['Le', 'La', 'Les', 'Un'], ans: 1, exp: '"La" is the feminine singular definite article.' },
        { q: 'How do you say "my brother" in French?', opts: ['Mon frère', 'Ma sœur', 'Mon père', 'Ma mère'], ans: 0, exp: '"Frère" is brother; masculine possessive is "mon".' },
        { q: 'How does the adjective "vert" (green) change when describing "une robe" (a feminine dress)?', opts: ['une robe vert', 'une robe verte', 'une robe verts', 'une robe vertue'], ans: 1, exp: 'Feminine adds -e: une robe verte.' },
        { q: 'What room is "la cuisine" in a house?', opts: ['The bedroom', 'The bathroom', 'The kitchen', 'The garage'], ans: 2, exp: '"La cuisine" is the kitchen.' },
        { q: 'How do you say "What time is it?" in French?', opts: ['Quelle heure est-il?', 'Quel temps fait-il?', 'Combien ça coûte?', 'Où est la gare?'], ans: 0, exp: '"Quelle heure est-il?" asks for the time.' }
      ]
    }
  ],
  crs: [
    {
      title: 'Covenant, Abraham\'s Call & Patriarchal Faith',
      subtitle: 'Ur of the Chaldees, covenant promises, Isaac, Jacob, and Joseph\'s journey',
      quickInfo: 'God called Abram to leave his homeland for a promised land, establishing an everlasting covenant of blessings, descendants, and land. Abraham\'s faith became the foundation of biblical trust.',
      keyConcepts: [
        'The Abrahamic Covenant (Genesis 12 & 15): Great nation, blessed name, land of Canaan.',
        'Abraham demonstrated radical obedience in the testing of Isaac on Mount Moriah.',
        'Joseph\'s forgiveness: "You meant evil against me, but God meant it for good."'
      ],
      quiz: [
        { q: 'What ancient city did Abram leave in obedience to God\'s divine call?', opts: ['Babylon', 'Ur of the Chaldees', 'Nineveh', 'Jericho'], ans: 1, exp: 'Genesis 11-12 records Abram journeying from Ur.' },
        { q: 'What primary three promises constituted the Abrahamic Covenant?', opts: ['Gold, horses, and silver', 'Descendants as numerous as stars, divine blessing, and the land of Canaan', 'An army, chariots, and ships', 'A throne in Egypt'], ans: 1, exp: 'God promised land, seed, and universal blessing.' },
        { q: 'What did God provide as a substitute sacrifice in place of Isaac on Mount Moriah?', opts: ['A dove', 'A ram caught in a thicket by its horns', 'A bull', 'A gold coin'], ans: 1, exp: 'Genesis 22 records the ram provided by God.' },
        { q: 'What name meaning "he struggles with God" did God give Jacob after he wrestled at Peniel?', opts: ['Abraham', 'Israel', 'Judah', 'David'], ans: 1, exp: 'Jacob was renamed Israel.' },
        { q: 'How did Joseph respond when reunited with the brothers who had sold him into Egyptian slavery?', opts: ['He imprisoned them forever', 'He forgave them, recognizing God\'s providence to save lives', 'He took revenge', 'He fled to Canaan'], ans: 1, exp: 'Joseph demonstrated mercy and faith in God\'s providence.' }
      ]
    },
    {
      title: 'The Prophetic Tradition: Elijah, Amos & Isaiah',
      subtitle: 'Mount Carmel contest, social justice, the suffering servant, and messianic prophecies',
      quickInfo: 'Biblical prophets served as God\'s messengers, speaking truth to power. Elijah confronted pagan idolatry on Mount Carmel; Amos demanded social justice for the poor; Isaiah foresaw the Messiah.',
      keyConcepts: [
        'Elijah vs the 450 prophets of Baal on Mount Carmel: God answered by fire.',
        'Amos 5:24: "Let justice roll down like waters, and righteousness like an ever-flowing stream."',
        'Isaiah 53 prophecies: The Suffering Servant wounded for our transgressions.'
      ],
      quiz: [
        { q: 'On which mountain did the prophet Elijah challenge the 450 false prophets of Baal?', opts: ['Mount Sinai', 'Mount Carmel', 'Mount Nebo', 'Mount of Olives'], ans: 1, exp: '1 Kings 18 recounts the showdown at Mount Carmel.' },
        { q: 'How did God demonstrate His supremacy over Baal during Elijah\'s Mount Carmel prayer?', opts: ['A sudden earthquake', 'Fire fell from heaven consuming the soaked sacrifice and altar', 'A torrential flood only', 'A solar eclipse'], ans: 1, exp: 'Divine fire consumed the altar.' },
        { q: 'What central theme did the prophet Amos passionately preach in the northern kingdom of Israel?', opts: ['Building larger temples', 'Social justice, defending the oppressed, and moral righteousness', 'Military conquest', 'Collecting tithes only'], ans: 1, exp: 'Amos championed justice for the poor and vulnerable.' },
        { q: 'Which Old Testament prophet recorded detailed visions of the "Suffering Servant" in chapter 53?', opts: ['Jonah', 'Isaiah', 'Daniel', 'Malachi'], ans: 1, exp: 'Isaiah 53 depicts the Messiah bearing human griefs.' },
        { q: 'How was the prophet Elijah transported to heaven without seeing physical death?', opts: ['In a sailing ship', 'In a chariot of fire with horses of fire in a whirlwind', 'By an army of soldiers', 'In a dream'], ans: 1, exp: '2 Kings 2 describes Elijah taken in a whirlwind with fiery chariots.' }
      ]
    },
    {
      title: 'The Parables of Jesus & The Sermon on the Mount',
      subtitle: 'The Good Samaritan, the Prodigal Son, the Beatitudes, and ethical discipleship',
      quickInfo: 'Jesus taught kingdom principles through earthly stories with heavenly meanings (parables) and delivered the Sermon on the Mount (Beatitudes, loving enemies, the Golden Rule).',
      keyConcepts: [
        'The Good Samaritan: loving one\'s neighbor transcends ethnic and religious boundaries.',
        'The Prodigal Son: God\'s unconditional fatherly grace and joy over repentant sinners.',
        'The Beatitudes (Matthew 5): blessed are the peacemakers, the meek, the merciful.'
      ],
      quiz: [
        { q: 'In the Parable of the Good Samaritan, who stopped to care for the beaten traveler after religious leaders walked past?', opts: ['A Roman soldier', 'A Samaritan traveler who bound his wounds and paid for his lodging', 'A merchant from Tyre', 'No one'], ans: 1, exp: 'Luke 10 highlights the compassion of the Samaritan.' },
        { q: 'What is the central moral lesson of the Parable of the Prodigal Son in Luke 15?', opts: ['How to invest inheritance', 'God\'s boundless mercy, forgiveness, and fatherly celebration over a returned sinner', 'The dangers of traveling', 'Farming swine'], ans: 1, exp: 'The father\'s welcome represents divine grace.' },
        { q: 'According to Jesus in the Sermon on the Mount, who shall be called "the children of God"?', opts: ['The wealthiest donors', 'The peacemakers', 'The most famous leaders', 'The fastest runners'], ans: 1, exp: 'Matthew 5:9: "Blessed are the peacemakers."' },
        { q: 'What is the "Golden Rule" taught by Jesus in Matthew 7:12?', opts: ['"He who has the gold makes the rules"', '"Do to others what you would have them do to you"', '"An eye for an eye"', '"Never lend money"'], ans: 1, exp: 'Treating others as you wish to be treated.' },
        { q: 'In the Parable of the Sower, what does the "seed" falling on different soils represent?', opts: ['Actual wheat grain', 'The Word of God preached to various human hearts', 'Money scattered in a field', 'Rainwater'], ans: 1, exp: 'The seed is the Word of God.' }
      ]
    }
  ],
  pe: [
    {
      title: 'Athletics & Track and Field Mechanics',
      subtitle: 'Sprint mechanics, baton exchange in relays, long jump phases, and pacing',
      quickInfo: 'Track and field athletics develops speed, power, and cardiovascular endurance. Proper sprint form (drive angle, high knees) and non-visual relay baton exchanges shave critical fractions of seconds.',
      keyConcepts: [
        'Sprinting mechanics: 45° acceleration body lean, explosive arm swing, ball-of-foot contact.',
        'Relay races (4x100m): blind/non-visual downward sweep or upsweep baton transfer inside the changeover box.',
        'Long jump 4 phases: Approach run, takeoff, flight technique (hitch-kick/hang), and landing.'
      ],
      quiz: [
        { q: 'In a competitive 4x100m relay, what is the zone called where the baton must be legally handed over?', opts: ['The neutral circle', 'The changeover (exchange) zone', 'The pit stop', 'The penalty box'], ans: 1, exp: 'Baton exchange must occur within the marked changeover zone.' },
        { q: 'What is a "blind" or non-visual baton exchange in sprint relays?', opts: ['Exchanging with eyes closed', 'The outgoing runner sprints forward looking ahead, extending a hand back without turning around', 'Dropping the baton', 'Throwing the baton'], ans: 1, exp: 'Sprinters keep eyes forward to maintain acceleration.' },
        { q: 'What foot placement is recommended when sprinting at top velocity?', opts: ['Flat foot on heels', 'On the balls of the feet with reactive ankle stiffness', 'On the outer toes only', 'Dragging the heel'], ans: 1, exp: 'Forefoot contact promotes maximum elastic energy return.' },
        { q: 'What are the four recognized phases of the competitive track long jump?', opts: ['Sleep, walk, jump, sit', 'Approach run, Takeoff, Flight, and Landing', 'Sprint, roll, flip, stand', 'Hop, skip, jump, slide'], ans: 1, exp: 'The four phases of long jump.' },
        { q: 'What physical energy system powers short sprints like the 60m and 100m dashes?', opts: ['The ATP-CP anaerobic energy system', 'Aerobic oxygen metabolism', 'Digestive combustion', 'Static stretching'], ans: 0, exp: 'Short sprints rely on rapid anaerobic phosphagen stores.' }
      ]
    },
    {
      title: 'Team Ball Games: Soccer & Basketball Tactical Systems',
      subtitle: 'Offside rules, passing angles, zone vs man defense, and shooting biomechanics',
      quickInfo: 'Team sports require physical fitness, motor skills, and tactical spatial awareness. In soccer, understanding the offside rule and passing triangles controls possession.',
      keyConcepts: [
        'Soccer offside law: an attacker cannot be closer to the opponent\'s goal line than both ball and second-last opponent when played.',
        'Basketball BEEF shooting principle: Balance, Eyes on target, Elbow under ball, Follow-through.',
        'Defensive strategies: Man-to-man (marking specific players) vs Zone defense (protecting court areas).'
      ],
      quiz: [
        { q: 'Under FIFA soccer rules, when is an attacking player penalized for being "offside"?', opts: ['Whenever they score', 'When closer to opponent goal than ball and second-last defender at moment the ball is passed forward to them', 'When running fast', 'When in the center circle'], ans: 1, exp: 'The offside rule prevents goal-hanging.' },
        { q: 'In basketball shooting technique, what does the mnemonic "BEEF" stand for?', opts: ['Bounce, Effort, Energy, Foul', 'Balance, Eyes, Elbow, Follow-through', 'Backboard, Entry, Exit, Finish', 'Ball, Elevation, Extension, Floor'], ans: 1, exp: 'BEEF guides shooting biomechanics.' },
        { q: 'What is "man-to-man" defense in team basketball?', opts: ['Defending an area of the court', 'Each defender is assigned responsibility for guarding one specific opposing player', 'Double-teaming the referee', 'Not playing defense'], ans: 1, exp: 'Individual player-to-player marking.' },
        { q: 'How many players are on the field for one team during a regulation soccer match?', opts: ['9', '11', '12', '15'], ans: 1, exp: 'Regulation soccer has 11 players per side.' },
        { q: 'What violation occurs when a basketball player runs with the ball without dribbling?', opts: ['Traveling', 'Charging', 'Double dribble', 'Goaltending'], ans: 0, exp: 'Advancing without dribbling is traveling.' }
      ]
    },
    {
      title: 'First Aid, Safety in Sports & Injury Rehabilitation (R.I.C.E.)',
      subtitle: 'Sprains, strains, fractures, CPR basics, shock management, and hydration',
      quickInfo: 'Immediate first aid prevents secondary complications from athletic injuries. The R.I.C.E. protocol (Rest, Ice, Compression, Elevation) treats acute soft-tissue sprains and contusions.',
      keyConcepts: [
        'R.I.C.E. protocol: Rest (stop activity), Ice (reduce swelling), Compression (wrap), Elevation (above heart).',
        'Distinction: Sprain (injury to ligaments connecting bone to bone); Strain (injury to muscle or tendon).',
        'Dehydration prevention: replenishing water and electrolytes during prolonged exercise.'
      ],
      quiz: [
        { q: 'What does the emergency acronym "R.I.C.E." stand for in treating acute athletic sprains?', opts: ['Run, Incline, Check, Exercise', 'Rest, Ice, Compression, Elevation', 'Reheat, Immobilize, Clean, Exit', 'Rub, Ice, Cool, Extend'], ans: 1, exp: 'Rest, Ice, Compression, Elevation minimizes swelling.' },
        { q: 'What is the medical difference between a "sprain" and a "strain"?', opts: ['They are identical', 'A sprain injures ligaments; a strain injures muscles or tendons', 'A sprain is a broken bone', 'A strain only happens to feet'], ans: 1, exp: 'Ligament = sprain; muscle/tendon = strain.' },
        { q: 'Why is ice applied immediately to an acute athletic ankle sprain?', opts: ['To freeze the joint solid', 'To constrict blood vessels and reduce painful inflammation and swelling', 'To disinfect skin', 'To warm the bone'], ans: 1, exp: 'Cold constricts capillaries and curtails edema.' },
        { q: 'What should you never do if you suspect a competitor has a spinal or neck fracture?', opts: ['Call emergency medical services', 'Move, twist, or attempt to walk the injured athlete', 'Keep them calm and still', 'Cover them with a blanket'], ans: 1, exp: 'Moving a suspected spinal fracture can cause permanent paralysis.' },
        { q: 'What is the primary danger of severe dehydration during vigorous sports on hot days?', opts: ['Muscle cramping, heat exhaustion, and life-threatening heat stroke', 'Stronger muscles', 'Faster sprinting', 'Cold chills only'], ans: 0, exp: 'Dehydration compromises thermoregulation.' }
      ]
    }
  ],
  phe: [
    {
      title: 'Athletics & Track and Field Mechanics',
      subtitle: 'Sprint mechanics, baton exchange in relays, long jump phases, and pacing',
      quickInfo: 'Track and field athletics develops speed, power, and cardiovascular endurance. Proper sprint form (drive angle, high knees) and non-visual relay baton exchanges shave critical fractions of seconds.',
      keyConcepts: [
        'Sprinting mechanics: 45° acceleration body lean, explosive arm swing, ball-of-foot contact.',
        'Relay races (4x100m): blind/non-visual downward sweep or upsweep baton transfer inside the changeover box.',
        'Long jump 4 phases: Approach run, takeoff, flight technique (hitch-kick/hang), and landing.'
      ],
      quiz: [
        { q: 'In a competitive 4x100m relay, what is the zone called where the baton must be legally handed over?', opts: ['The neutral circle', 'The changeover (exchange) zone', 'The pit stop', 'The penalty box'], ans: 1, exp: 'Baton exchange must occur within the marked changeover zone.' },
        { q: 'What is a "blind" or non-visual baton exchange in sprint relays?', opts: ['Exchanging with eyes closed', 'The outgoing runner sprints forward looking ahead, extending a hand back without turning around', 'Dropping the baton', 'Throwing the baton'], ans: 1, exp: 'Sprinters keep eyes forward to maintain acceleration.' },
        { q: 'What foot placement is recommended when sprinting at top velocity?', opts: ['Flat foot on heels', 'On the balls of the feet with reactive ankle stiffness', 'On the outer toes only', 'Dragging the heel'], ans: 1, exp: 'Forefoot contact promotes maximum elastic energy return.' },
        { q: 'What are the four recognized phases of the competitive track long jump?', opts: ['Sleep, walk, jump, sit', 'Approach run, Takeoff, Flight, and Landing', 'Sprint, roll, flip, stand', 'Hop, skip, jump, slide'], ans: 1, exp: 'The four phases of long jump.' },
        { q: 'What physical energy system powers short sprints like the 60m and 100m dashes?', opts: ['The ATP-CP anaerobic energy system', 'Aerobic oxygen metabolism', 'Digestive combustion', 'Static stretching'], ans: 0, exp: 'Short sprints rely on rapid anaerobic phosphagen stores.' }
      ]
    },
    {
      title: 'Team Ball Games: Soccer & Basketball Tactical Systems',
      subtitle: 'Offside rules, passing angles, zone vs man defense, and shooting biomechanics',
      quickInfo: 'Team sports require physical fitness, motor skills, and tactical spatial awareness. In soccer, understanding the offside rule and passing triangles controls possession.',
      keyConcepts: [
        'Soccer offside law: an attacker cannot be closer to the opponent\'s goal line than both ball and second-last opponent when played.',
        'Basketball BEEF shooting principle: Balance, Eyes on target, Elbow under ball, Follow-through.',
        'Defensive strategies: Man-to-man (marking specific players) vs Zone defense (protecting court areas).'
      ],
      quiz: [
        { q: 'Under FIFA soccer rules, when is an attacking player penalized for being "offside"?', opts: ['Whenever they score', 'When closer to opponent goal than ball and second-last defender at moment the ball is passed forward to them', 'When running fast', 'When in the center circle'], ans: 1, exp: 'The offside rule prevents goal-hanging.' },
        { q: 'In basketball shooting technique, what does the mnemonic "BEEF" stand for?', opts: ['Bounce, Effort, Energy, Foul', 'Balance, Eyes, Elbow, Follow-through', 'Backboard, Entry, Exit, Finish', 'Ball, Elevation, Extension, Floor'], ans: 1, exp: 'BEEF guides shooting biomechanics.' },
        { q: 'What is "man-to-man" defense in team basketball?', opts: ['Defending an area of the court', 'Each defender is assigned responsibility for guarding one specific opposing player', 'Double-teaming the referee', 'Not playing defense'], ans: 1, exp: 'Individual player-to-player marking.' },
        { q: 'How many players are on the field for one team during a regulation soccer match?', opts: ['9', '11', '12', '15'], ans: 1, exp: 'Regulation soccer has 11 players per side.' },
        { q: 'What violation occurs when a basketball player runs with the ball without dribbling?', opts: ['Traveling', 'Charging', 'Double dribble', 'Goaltending'], ans: 0, exp: 'Advancing without dribbling is traveling.' }
      ]
    },
    {
      title: 'First Aid, Safety in Sports & Injury Rehabilitation (R.I.C.E.)',
      subtitle: 'Sprains, strains, fractures, CPR basics, shock management, and hydration',
      quickInfo: 'Immediate first aid prevents secondary complications from athletic injuries. The R.I.C.E. protocol (Rest, Ice, Compression, Elevation) treats acute soft-tissue sprains and contusions.',
      keyConcepts: [
        'R.I.C.E. protocol: Rest (stop activity), Ice (reduce swelling), Compression (wrap), Elevation (above heart).',
        'Distinction: Sprain (injury to ligaments connecting bone to bone); Strain (injury to muscle or tendon).',
        'Dehydration prevention: replenishing water and electrolytes during prolonged exercise.'
      ],
      quiz: [
        { q: 'What does the emergency acronym "R.I.C.E." stand for in treating acute athletic sprains?', opts: ['Run, Incline, Check, Exercise', 'Rest, Ice, Compression, Elevation', 'Reheat, Immobilize, Clean, Exit', 'Rub, Ice, Cool, Extend'], ans: 1, exp: 'Rest, Ice, Compression, Elevation minimizes swelling.' },
        { q: 'What is the medical difference between a "sprain" and a "strain"?', opts: ['They are identical', 'A sprain injures ligaments; a strain injures muscles or tendons', 'A sprain is a broken bone', 'A strain only happens to feet'], ans: 1, exp: 'Ligament = sprain; muscle/tendon = strain.' },
        { q: 'Why is ice applied immediately to an acute athletic ankle sprain?', opts: ['To freeze the joint solid', 'To constrict blood vessels and reduce painful inflammation and swelling', 'To disinfect skin', 'To warm the bone'], ans: 1, exp: 'Cold constricts capillaries and curtails edema.' },
        { q: 'What should you never do if you suspect a competitor has a spinal or neck fracture?', opts: ['Call emergency medical services', 'Move, twist, or attempt to walk the injured athlete', 'Keep them calm and still', 'Cover them with a blanket'], ans: 1, exp: 'Moving a suspected spinal fracture can cause permanent paralysis.' },
        { q: 'What is the primary danger of severe dehydration during vigorous sports on hot days?', opts: ['Muscle cramping, heat exhaustion, and life-threatening heat stroke', 'Stronger muscles', 'Faster sprinting', 'Cold chills only'], ans: 0, exp: 'Dehydration compromises thermoregulation.' }
      ]
    }
  ],
  'civic-education': [
    {
      title: 'Values, Integrity & Moral Obligations of Citizens',
      subtitle: 'Honesty, national symbols, respect for constituted authority, and community service',
      quickInfo: 'Civic education equips citizens with moral values, national consciousness, and knowledge of their democratic responsibilities. Integrity and selflessness build a prosperous society.',
      keyConcepts: [
        'National symbols: National Flag, Anthem, Pledge, Coat of Arms (representing dignity and unity).',
        'Core civic values: Honesty, discipline, justice, integrity, patriotism, and tolerance.',
        'Community development: contributing voluntary time and skills to advance civic welfare.'
      ],
      quiz: [
        { q: 'What does the green color on Nigeria\'s national flag represent?', opts: ['Peace and purity', 'Agriculture, forests, and abundant natural wealth', 'The sky', 'Mineral oil'], ans: 1, exp: 'Green represents rich agricultural wealth; white represents peace.' },
        { q: 'What core virtue involves being truthful, moral, and upright even when unwatched?', opts: ['Bribery', 'Integrity', 'Apathy', 'Nepotism'], ans: 1, exp: 'Integrity is moral uprightness and consistency.' },
        { q: 'Why is respect for constituted legal authority essential in a civilized state?', opts: ['To please leaders only', 'To prevent chaos, maintain public order, and ensure safety for all citizens', 'It makes taxes illegal', 'To eliminate voting'], ans: 1, exp: 'Law and constituted authority prevent anarchy.' },
        { q: 'What is "civic apathy"?', opts: ['Voting early', 'Lack of interest or refusal to participate in civic duties like elections', 'Running for governor', 'Obeying traffic lights'], ans: 1, exp: 'Apathy is disinterest in democratic processes.' },
        { q: 'Which national symbol displays the eagle and horses symbolizing strength and dignity?', opts: ['The currency note', 'The National Coat of Arms', 'The school bell', 'The road map'], ans: 1, exp: 'The Coat of Arms features the eagle (strength) and two horses (dignity).' }
      ]
    },
    {
      title: 'The Constitution, Rule of Law & The Three Arms of Government',
      subtitle: 'Legislature, Executive, Judiciary, checks and balances, and fundamental rights',
      quickInfo: 'The Constitution is the supreme law of the land. It distributes governmental power among the Legislature (lawmaking), Executive (administration), and Judiciary (interpretation).',
      keyConcepts: [
        'Separation of Powers: Legislature (makes laws), Executive (implements), Judiciary (interprets).',
        'Checks and balances prevent any single arm from abusing power or establishing tyranny.',
        'The Constitution guarantees fundamental human rights that no official can lawfully suspend arbitrarily.'
      ],
      quiz: [
        { q: 'Which arm of government is constitutionally empowered to interpret laws and administer justice?', opts: ['The Executive', 'The Legislature', 'The Judiciary', 'The Civil Service'], ans: 2, exp: 'The Judiciary interprets laws and arbitrates disputes.' },
        { q: 'What is the primary constitutional function of the Legislative arm (Parliament / National Assembly)?', opts: ['Executing laws', 'Debating and enacting statutory legislation', 'Commanding the police', 'Appointing ministers'], ans: 1, exp: 'The Legislature crafts and votes on laws.' },
        { q: 'What political doctrine divides power among three independent arms to avoid dictatorship?', opts: ['Totalitarianism', 'Separation of Powers with Checks and Balances', 'Monarchy', 'Military Junta'], ans: 1, exp: 'Separation of powers limits overreach.' },
        { q: 'What document stands as the supreme legal authority over all people and institutions in a democratic state?', opts: ['The National Budget', 'The National Constitution', 'A Ministerial Order', 'A newspaper editorial'], ans: 1, exp: 'The Constitution is the supreme law of the land.' },
        { q: 'What happens if a newly passed legislative law directly contradicts a provision of the Constitution?', opts: ['The Constitution is deleted', 'The law is declared null and void to the extent of its inconsistency', 'Both apply equally', 'The President decides secretly'], ans: 1, exp: 'Unconstitutional laws are void.' }
      ]
    },
    {
      title: 'Democracy, Voting & Combating Electoral Malpractice',
      subtitle: 'Free and fair elections, voter registration, ballot secret, and civic vigilance',
      quickInfo: 'Representative democracy thrives only when elections are free, fair, credible, and peaceful. Citizens must understand their voting franchise, register, and reject vote-buying and violence.',
      keyConcepts: [
        'Electoral principles: Universal adult suffrage, secret ballot, independent electoral commission.',
        'Electoral malpractices: ballot snatching, vote buying, falsification of results, voter intimidation.',
        'Civic vigilance: citizens peacefully monitoring voting processes and defending their constitutional vote.'
      ],
      quiz: [
        { q: 'What is the "secret ballot" system in democratic elections?', opts: ['Voting at midnight in secret', 'Voters mark their choice privately in a voting booth so no one can coerce or see their vote', 'Only officials can see the vote', 'Voting online secretly'], ans: 1, exp: 'The secret ballot safeguards voter autonomy.' },
        { q: 'What illegal practice involves offering money or gifts to induce voters to vote for a specific candidate?', opts: ['Canvassing', 'Vote buying', 'Voter education', 'Exit polling'], ans: 1, exp: 'Vote buying is a punishable electoral crime.' },
        { q: 'What independent body is tasked with conducting national and state elections in a democratic nation?', opts: ['The Armed Forces', 'The Independent Electoral Commission', 'The Supreme Court', 'Private corporations'], ans: 1, exp: 'Electoral commissions conduct transparent elections.' },
        { q: 'What is the minimum voting age for adult citizens in most modern democracies?', opts: ['12 years', '16 years', '18 years', '25 years'], ans: 2, exp: '18 years is the standard adult suffrage threshold.' },
        { q: 'Why is youth participation in peaceful democratic elections crucial?', opts: ['Youth represent the largest demographic and future leaders of the nation', 'Only young people can vote', 'It is an athletic event', 'To stop school'], ans: 0, exp: 'Youth engagement shapes democratic policy.' }
      ]
    }
  ]
};

export function getJuniorAuthoritativeMap(): GradeAuthoritativeMap {
  return JUNIOR_CURRICULUM_SPECS as GradeAuthoritativeMap;
}

export const JUNIOR_AUTHORITATIVE_CURRICULUM: Record<string, GradeAuthoritativeMap> = {
  'grade-6': JUNIOR_CURRICULUM_SPECS as GradeAuthoritativeMap,
  'grade-7': JUNIOR_CURRICULUM_SPECS as GradeAuthoritativeMap,
  'grade-8': JUNIOR_CURRICULUM_SPECS as GradeAuthoritativeMap,
  'grade-9': JUNIOR_CURRICULUM_SPECS as GradeAuthoritativeMap
};
