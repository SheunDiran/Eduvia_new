import { GradeLevel, SubjectId, Topic } from '../../types';
import { CompactTopicSpec, createTopicFromSpec } from './builder';

type JuniorSubjectSpecs = Partial<Record<SubjectId, [CompactTopicSpec, CompactTopicSpec, CompactTopicSpec]>>;

const JUNIOR_SPECS: JuniorSubjectSpecs = {
  math: [
    {
      title: 'Integers, Directed Numbers & Number Line',
      subtitle: 'Positive and negative integers, absolute value, and algebraic operations',
      quickInfo: 'Integers comprise positive whole numbers, zero, and negative whole numbers. Adding a negative is like subtracting, and multiplying two negatives produces a positive.',
      keyConcepts: ['Absolute value |x| is the distance of a number from zero.', 'Subtracting a negative number turns into adding: a - (-b) = a + b.', 'Multiplying negative by negative yields positive: (-3) × (-4) = +12.'],
      quiz: [
        { q: 'What is -7 + 12?', opts: ['-19', '-5', '5', '19'], ans: 2, exp: '-7 + 12 = 5.' },
        { q: 'What is (-4) × (-6)?', opts: ['-24', '-10', '24', '10'], ans: 2, exp: 'Negative times negative is positive: 24.' },
        { q: 'What is the absolute value of -15, written |-15|?', opts: ['-15', '0', '15', '30'], ans: 2, exp: 'Absolute value is always non-negative distance: 15.' },
        { q: 'Calculate: 8 - (-5)', opts: ['3', '-3', '13', '-13'], ans: 2, exp: '8 - (-5) = 8 + 5 = 13.' },
        { q: 'Which number is the coldest temperature?', opts: ['-2°C', '-14°C', '0°C', '5°C'], ans: 1, exp: '-14°C is farthest left on the number line.' }
      ]
    },
    {
      title: 'Linear Algebraic Expressions & Solving 1-Step Equations',
      subtitle: 'Variables, coefficients, like terms, and inverse operations',
      quickInfo: 'Algebra uses letters (variables) to represent unknown values. We balance equations by applying the same inverse operation to both sides.',
      keyConcepts: ['Like terms share the exact same variable and exponent (e.g., 3x + 5x = 8x).', 'Addition and subtraction are inverse operations.', 'Multiplication and division undo each other.'],
      quiz: [
        { q: 'Simplify: 4x + 7x - 2x', opts: ['9x', '11x', '9x²', '13x'], ans: 0, exp: '(4 + 7 - 2)x = 9x.' },
        { q: 'Solve for x: x + 9 = 23', opts: ['12', '14', '16', '32'], ans: 1, exp: 'Subtract 9 from both sides: 23 - 9 = 14.' },
        { q: 'Solve for y: 5y = 45', opts: ['5', '8', '9', '40'], ans: 2, exp: 'Divide both sides by 5: 45 / 5 = 9.' },
        { q: 'In the expression 7a + 12, what is the coefficient?', opts: ['7', 'a', '12', '19'], ans: 0, exp: 'The coefficient is the numerical factor multiplying the variable (7).' },
        { q: 'Solve: m / 4 = 6', opts: ['1.5', '10', '20', '24'], ans: 3, exp: 'Multiply both sides by 4: 6 × 4 = 24.' }
      ]
    },
    {
      title: 'Ratios, Rates, Proportions & Percentages',
      subtitle: 'Unit rates, percentage increase/decrease, and scale drawings',
      quickInfo: 'A ratio compares two quantities by division. A proportion states that two ratios are equivalent, solved by cross-multiplication.',
      keyConcepts: ['A unit rate compares a quantity to one unit (e.g., miles per hour).', 'Percentages represent fractions out of 100: 25% = 25/100 = 0.25.', 'Cross products in a true proportion a/b = c/d are equal: ad = bc.'],
      quiz: [
        { q: 'If 3 pens cost $6, what is the unit price per pen?', opts: ['$1', '$2', '$3', '$18'], ans: 1, exp: '$6 / 3 = $2 per pen.' },
        { q: 'What is 20% of 80?', opts: ['8', '16', '24', '40'], ans: 1, exp: '0.20 × 80 = 16.' },
        { q: 'Simplify the ratio 15 : 25 to lowest terms', opts: ['1 : 2', '3 : 5', '5 : 3', '2 : 5'], ans: 1, exp: 'Divide both by 5: 3:5.' },
        { q: 'Solve the proportion: x / 6 = 10 / 12', opts: ['3', '5', '6', '10'], ans: 1, exp: '12x = 60 => x = 5.' },
        { q: 'A jacket costs $50 and is on 10% discount. What is the sale price?', opts: ['$40', '$45', '$48', '$49'], ans: 1, exp: 'Discount is $5; $50 - $5 = $45.' }
      ]
    }
  ],
  'english-lang': [
    {
      title: 'Parts of Speech & Sentence Syntactics',
      subtitle: 'Nouns, pronouns, verbs, adverbs, prepositions, and conjunctions',
      quickInfo: 'Every English word performs a grammatical function in a sentence. Understanding parts of speech allows precise sentence structuring and eliminates comma splices.',
      keyConcepts: ['Pronouns replace nouns (he, she, they, which).', 'Adverbs modify verbs, adjectives, or other adverbs.', 'Conjunctions connect words, phrases, or independent clauses.'],
      quiz: [
        { q: 'In "She ran quickly across the bridge", what part of speech is "quickly"?', opts: ['Noun', 'Adjective', 'Adverb', 'Preposition'], ans: 2, exp: '"Quickly" modifies the verb "ran", so it is an adverb.' },
        { q: 'Which word is a coordinating conjunction (FANBOYS)?', opts: ['Because', 'Although', 'And', 'Since'], ans: 2, exp: '"And" is one of the 7 coordinating conjunctions.' },
        { q: 'Identify the preposition in: "The book is on the wooden table."', opts: ['book', 'is', 'on', 'wooden'], ans: 2, exp: '"On" shows spatial relationship.' },
        { q: 'What is a pronoun in: "Marcus lost his notebook in the corridor"?', opts: ['Marcus', 'his', 'notebook', 'corridor'], ans: 1, exp: '"His" is a possessive pronoun.' },
        { q: 'Which sentence contains an action verb?', opts: ['The sky is blue.', 'She painted a vibrant mural.', 'He felt tired.', 'They were happy.'], ans: 1, exp: '"Painted" is an action verb.' }
      ]
    },
    {
      title: 'Reading Comprehension & Summarizing Strategies',
      subtitle: 'Inference, context clues, author tone, and extracting main ideas',
      quickInfo: 'Active reading requires finding explicit textual evidence, drawing logical inferences, and synthesizing lengthy passages into concise summaries.',
      keyConcepts: ['Direct evidence is explicitly stated in the text.', 'Inference is reading between the lines combining evidence and background knowledge.', 'Summarizing captures the central thesis without minor trivia.'],
      quiz: [
        { q: 'What is an "inference" in reading?', opts: ['A direct quote', 'A logical conclusion drawn from textual clues', 'The book title', 'The page number'], ans: 1, exp: 'Inferences combine text evidence with deduction.' },
        { q: 'What should a concise summary contain?', opts: ['Every single detail', 'The main thesis and central supporting ideas', 'Only the last sentence', 'Personal opinions only'], ans: 1, exp: 'Summaries capture main points objectively.' },
        { q: 'What are "context clues"?', opts: ['Hints the author gives nearby to help define a difficult word', 'The table of contents', 'Illustrations only', 'Grammar rules'], ans: 0, exp: 'Context clues help readers deduce unfamiliar vocabulary.' },
        { q: 'Author\'s "tone" refers to:', opts: ['How loud the book is', 'The author\'s attitude toward the subject', 'The typeface chosen', 'The publisher name'], ans: 1, exp: 'Tone reflects emotional attitude.' },
        { q: 'What is the topic sentence of a paragraph?', opts: ['The last word', 'The sentence that states the central focus of the paragraph', 'A question mark', 'The footnote'], ans: 1, exp: 'Topic sentences introduce the main idea of a paragraph.' }
      ]
    },
    {
      title: 'Formal Letter Writing & Argumentative Essays',
      subtitle: 'Addresses, salutations, formal register, and thesis arguments',
      quickInfo: 'Formal writing adheres to strict conventions: official addresses, professional tone, formal salutations, and persuasive, evidence-backed arguments.',
      keyConcepts: ['Formal letters include sender address, date, recipient address, and salutation.', 'Salutation "Dear Sir/Madam" concludes with "Yours faithfully".', 'Argumentative essays require clear claims, counterarguments, and refutations.'],
      quiz: [
        { q: 'If a formal letter begins with "Dear Sir or Madam", what is the proper sign-off?', opts: ['Cheers', 'Yours faithfully', 'Warm regards', 'Love'], ans: 1, exp: 'When recipient name is unknown, standard sign-off is "Yours faithfully".' },
        { q: 'What is a thesis statement in an essay?', opts: ['A list of sources', 'The central claim or argument the essay defends', 'A decorative title', 'The concluding signature'], ans: 1, exp: 'A thesis statement defines the main argument.' },
        { q: 'Which tone is appropriate for an official letter to a school principal?', opts: ['Slang and abbreviations', 'Formal, respectful, and polite', 'Playful and joking', 'Aggressive'], ans: 1, exp: 'Professional respect is required.' },
        { q: 'What is a "counterargument"?', opts: ['Agreeing with everyone', 'Acknowledging an opposing point of view to refute it', 'Changing the topic', 'A spelling mistake'], ans: 1, exp: 'A counterargument considers opposing viewpoints.' },
        { q: 'Where does the sender\'s address go in a standard formal letter layout?', opts: ['Top right corner (or top left in modern block format)', 'Bottom center', 'Inside the envelope only', 'Behind the signature'], ans: 0, exp: 'Sender\'s address is at the top of the letter.' }
      ]
    }
  ],
  'english-lit': [
    {
      title: 'Literary Devices: Figurative Language in Poetry',
      subtitle: 'Similes, metaphors, personification, hyperbole, and imagery',
      quickInfo: 'Literary devices elevate writing beyond literal descriptions. Poets use similes, metaphors, and evocative sensory imagery to provoke deep emotional responses.',
      keyConcepts: ['A simile compares two things using "like" or "as".', 'A metaphor asserts one thing IS another without using comparison words.', 'Personification assigns human feelings or actions to non-human things.'],
      quiz: [
        { q: 'Identify the simile: "The athlete ran..."', opts: ['like lightning', 'fast', 'was lightning', 'swiftly'], ans: 0, exp: '"Like lightning" uses "like" to make a direct comparison.' },
        { q: '"The classroom was a zoo." This sentence is an example of:', opts: ['Simile', 'Metaphor', 'Hyperbole', 'Alliteration'], ans: 1, exp: 'It directly equates the classroom to a zoo without "like" or "as".' },
        { q: '"The angry wind howled at the window." This figure of speech is:', opts: ['Personification', 'Oxymoron', 'Irony', 'Understatement'], ans: 0, exp: 'Assigning the human act of howling in anger to the wind is personification.' },
        { q: '"I have told you a million times!" is an example of:', opts: ['Hyperbole (extreme exaggeration)', 'Literal fact', 'Simile', 'Rhyme'], ans: 0, exp: 'Hyperbole is deliberate exaggeration for dramatic emphasis.' },
        { q: 'What is alliteration?', opts: ['Repetition of initial consonant sounds in nearby words', 'A type of sonnet', 'An unstressed vowel', 'A plot climax'], ans: 0, exp: 'Alliteration repeats initial consonant sounds (e.g. Peter Piper picked).' }
      ]
    },
    {
      title: 'Elements of Prose: Plot, Conflict & Characterization',
      subtitle: 'Exposition, rising action, climax, falling action, and resolution',
      quickInfo: 'Prose narratives follow the dramatic narrative arc: exposition introduces characters, conflict drives rising tension toward the climax, followed by resolution.',
      keyConcepts: ['Protagonist is the central character; antagonist creates the opposition.', 'Internal conflict is character vs self; external conflict is character vs society/nature/other.', 'Climax is the peak dramatic turning point of the story.'],
      quiz: [
        { q: 'What is the highest point of dramatic tension in a story called?', opts: ['Exposition', 'Climax', 'Prologue', 'Resolution'], ans: 1, exp: 'The climax is the major dramatic turning point.' },
        { q: 'What happens in the "exposition" of a novel?', opts: ['The final battle', 'Introduction of characters, setting, and initial situation', 'The credits roll', 'All problems are solved'], ans: 1, exp: 'Exposition sets up the background context.' },
        { q: 'What is an example of internal conflict?', opts: ['A warrior battling a dragon', 'A student struggling with guilt over a lie', 'A ship surviving a storm', 'Two racers competing'], ans: 1, exp: 'Character vs. self is internal moral/emotional conflict.' },
        { q: 'What is the main character in a narrative called?', opts: ['Antagonist', 'Protagonist', 'Narrator only', 'Spectator'], ans: 1, exp: 'The protagonist is the central leading character.' },
        { q: 'What is the "resolution" of a story?', opts: ['The opening line', 'The unfolding where conflicts are concluded', 'The printing date', 'The chapter index'], ans: 1, exp: 'The resolution brings closure to narrative threads.' }
      ]
    },
    {
      title: 'Drama & Play Analysis: Dialogue, Stage Directions & Monologue',
      subtitle: 'Scripts, theatrical staging, soliloquy, and dramatic irony',
      quickInfo: 'Plays are written to be performed. Dialogue carries plot and character revelation, while stage directions guide movement, lighting, and performance tone.',
      keyConcepts: ['Stage directions (in italics/brackets) direct physical action on stage.', 'A soliloquy reveals a character\'s innermost thoughts spoken aloud alone.', 'Dramatic irony occurs when the audience knows secrets that characters on stage do not.'],
      quiz: [
        { q: 'What are stage directions in a dramatic script?', opts: ['The actor\'s salary', 'Instructions in brackets indicating movement, lighting, and tone', 'The ticket sales', 'Lines memorized by chorus only'], ans: 1, exp: 'Stage directions instruct actors and stage crews.' },
        { q: 'When a character speaks their private thoughts alone on stage, it is called a:', opts: ['Dialogue', 'Soliloquy / Monologue', 'Prologue', 'Epilogue'], ans: 1, exp: 'A soliloquy is an introspective speech spoken alone.' },
        { q: 'What is "dramatic irony"?', opts: ['When a joke falls flat', 'When the audience knows a crucial fact that the characters do not', 'A sad song', 'A theater fire'], ans: 1, exp: 'Dramatic irony heightens suspense through privileged audience knowledge.' },
        { q: 'Who is the author of a theatrical play called?', opts: ['Poet', 'Playwright / Dramatist', 'Director', 'Composer'], ans: 1, exp: 'A writer of plays is a playwright.' },
        { q: 'What separates major sections of a full-length play?', opts: ['Paragraphs', 'Acts and Scenes', 'Verses and Stanzas', 'Pages only'], ans: 1, exp: 'Plays are divided into Acts, which are divided into Scenes.' }
      ]
    }
  ],
  'basic-science': [
    {
      title: 'Living Cells, Tissues & Human Body Systems',
      subtitle: 'Cell structure, organ systems, digestive & circulatory mechanics',
      quickInfo: 'The cell is the structural unit of life. Groups of cells form tissues, tissues form organs, and organs cooperate in systems like digestion and circulation.',
      keyConcepts: ['Plant cells contain chloroplasts and a rigid cellulose cell wall; animal cells do not.', 'The heart pumps oxygenated blood through arteries to body tissues.', 'The digestive tract breaks complex food into absorbable nutrients.'],
      quiz: [
        { q: 'What organelle is known as the "powerhouse" of the cell?', opts: ['Nucleus', 'Mitochondria', 'Vacuole', 'Cell wall'], ans: 1, exp: 'Mitochondria generate ATP energy through cellular respiration.' },
        { q: 'Which structure is found in plant cells but NOT in animal cells?', opts: ['Cell membrane', 'Cytoplasm', 'Cellulose cell wall', 'Ribosome'], ans: 2, exp: 'Plant cells have rigid cell walls and chloroplasts.' },
        { q: 'Which blood vessels carry blood away from the heart?', opts: ['Veins', 'Arteries', 'Capillaries only', 'Lymph nodes'], ans: 1, exp: 'Arteries carry blood away (A = Away).' },
        { q: 'Where does most chemical digestion and nutrient absorption occur?', opts: ['Mouth', 'Stomach', 'Small intestine', 'Large intestine'], ans: 2, exp: 'The small intestine absorbs most nutrients into the bloodstream.' },
        { q: 'What organ controls thought, movement, and bodily autonomic functions?', opts: ['Liver', 'Brain', 'Kidney', 'Lungs'], ans: 1, exp: 'The brain is the command center of the nervous system.' }
      ]
    },
    {
      title: 'Matter, States, Density & Physical vs Chemical Changes',
      subtitle: 'Solids, liquids, gases, melting, freezing, and irreversible reactions',
      quickInfo: 'Matter has mass and takes up volume. Physical changes (like melting ice) alter state without creating new substances; chemical changes create brand new molecules.',
      keyConcepts: ['Solids have fixed shape and volume; gases expand to fill any container.', 'Density = Mass / Volume (d = m/V).', 'Burning wood is a chemical change; tearing paper is a physical change.'],
      quiz: [
        { q: 'Which of the following is an example of a chemical change?', opts: ['Melting ice into water', 'Dissolving sugar in tea', 'Rusting of iron in moist air', 'Cutting a piece of cloth'], ans: 2, exp: 'Rusting creates a new chemical compound (iron oxide).' },
        { q: 'What state of matter has no fixed shape but a fixed volume?', opts: ['Solid', 'Liquid', 'Gas', 'Plasma'], ans: 1, exp: 'Liquids flow to match container shape but retain constant volume.' },
        { q: 'If an object has mass 40g and volume 10cm³, what is its density?', opts: ['4 g/cm³', '0.25 g/cm³', '50 g/cm³', '300 g/cm³'], ans: 0, exp: 'Density = mass / volume = 40 / 10 = 4 g/cm³.' },
        { q: 'What change of state occurs when a gas cools into a liquid?', opts: ['Sublimation', 'Evaporation', 'Condensation', 'Freezing'], ans: 2, exp: 'Gas condensing into liquid is condensation.' },
        { q: 'Is tearing a piece of paper a physical or chemical change?', opts: ['Chemical change', 'Physical change', 'Nuclear reaction', 'Biological change'], ans: 1, exp: 'Physical change: the chemical composition of the paper remains unchanged.' }
      ]
    },
    {
      title: 'Energy Forms, Transformations & Simple Machines',
      subtitle: 'Kinetic, potential, levers, pulleys, inclined planes, and work',
      quickInfo: 'Energy cannot be created or destroyed, only transformed. Simple machines like levers and pulleys reduce the input effort required to lift heavy loads.',
      keyConcepts: ['Kinetic energy is energy of motion; potential energy is stored energy.', 'Work is done when force moves an object through distance (W = F × d).', 'A lever uses a fulcrum, effort arm, and load arm to multiply force.'],
      quiz: [
        { q: 'What kind of energy does a stretched bow or compressed spring hold?', opts: ['Kinetic energy', 'Elastic potential energy', 'Thermal energy', 'Nuclear energy'], ans: 1, exp: 'Stored mechanical energy is elastic potential energy.' },
        { q: 'What is the law of conservation of energy?', opts: ['Energy can be created easily', 'Energy cannot be created or destroyed, only converted', 'Energy only flows backwards', 'Energy disappears when used'], ans: 1, exp: 'The first law of thermodynamics states total energy is conserved.' },
        { q: 'A ramp used to roll heavy wheelbarrows into a truck is which simple machine?', opts: ['Pulley', 'Inclined plane', 'Wedge', 'Screw'], ans: 1, exp: 'A ramp is an inclined plane.' },
        { q: 'The pivot point around which a lever turns is called the:', opts: ['Load', 'Effort', 'Fulcrum', 'Axle'], ans: 2, exp: 'The fulcrum is the fixed pivot of a lever.' },
        { q: 'In physics, work is calculated using which formula?', opts: ['Mass × Velocity', 'Force × Distance', 'Speed / Time', 'Power + Energy'], ans: 1, exp: 'Work = Force × distance in the direction of force.' }
      ]
    }
  ],
  'social-studies': [
    {
      title: 'Culture, Traditions & Socialization in Society',
      subtitle: 'Beliefs, norms, family structures, and cultural diversity',
      quickInfo: 'Culture is the total way of life of a society, including language, diet, art, and values. Socialization transmits these traditions from generation to generation.',
      keyConcepts: ['Material culture includes clothing and architecture; non-material includes beliefs and folklore.', 'Socialization agencies include family, schools, peer groups, and media.', 'Cultural tolerance prevents social prejudice and tribalism.'],
      quiz: [
        { q: 'What is culture?', opts: ['Only traditional music', 'The total way of life shared by a group of people', 'Government decrees', 'Television programs only'], ans: 1, exp: 'Culture encompasses language, customs, values, and crafts.' },
        { q: 'Which is the primary agent of socialization for a newborn child?', opts: ['The family', 'The university', 'The political party', 'Workplace colleagues'], ans: 0, exp: 'The family is the earliest socialization environment.' },
        { q: 'Which of the following is part of material culture?', opts: ['Religious beliefs', 'Traditional pottery and woven textiles', 'Moral values', 'Philosophical ideas'], ans: 1, exp: 'Physical artifacts constitute material culture.' },
        { q: 'What does cultural tolerance promote in a diverse nation?', opts: ['Conflict and discrimination', 'Peaceful coexistence and mutual understanding', 'Isolation', 'Eradication of languages'], ans: 1, exp: 'Tolerance fosters harmony in multicultural societies.' },
        { q: 'Passing traditions down orally through storytelling is called:', opts: ['Digital archiving', 'Oral tradition', 'Written legislation', 'Archaeology'], ans: 1, exp: 'Oral tradition preserves folklore across generations.' }
      ]
    },
    {
      title: 'Global Geography: Continents, Oceans & Climate Zones',
      subtitle: 'Latitude, longitude, hemispheres, and equatorial rainforests',
      quickInfo: 'Earth has seven continents and five oceans. Climate zones—tropical, temperate, and polar—are governed by latitude and the angle of solar radiation.',
      keyConcepts: ['The Equator (0° latitude) receives direct sunlight year-round.', 'Prime Meridian (0° longitude) runs through Greenwich, England.', 'The seven continents: Asia, Africa, North America, South America, Antarctica, Europe, Australia.'],
      quiz: [
        { q: 'Which is the largest continent by both land area and population?', opts: ['Africa', 'Asia', 'Europe', 'North America'], ans: 1, exp: 'Asia is the largest continent in area and population.' },
        { q: 'What imaginary horizontal line divides the Earth into Northern and Southern Hemispheres?', opts: ['Prime Meridian', 'Equator', 'Tropic of Cancer', 'Arctic Circle'], ans: 1, exp: 'The Equator is at 0 degrees latitude.' },
        { q: 'Which is the deepest and largest ocean on Earth?', opts: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'], ans: 2, exp: 'The Pacific Ocean is the largest and deepest ocean.' },
        { q: 'Which climate zone experiences warm temperatures throughout the year?', opts: ['Polar zones', 'Tropical zone near the Equator', 'Sub-arctic tundra', 'Alpine peak'], ans: 1, exp: 'The tropics receive consistent solar insulation.' },
        { q: 'Lines of longitude measure distances east and west of the:', opts: ['International Date Line', 'Prime Meridian', 'South Pole', 'Equator'], ans: 1, exp: 'Longitude lines measure degrees East/West of the Prime Meridian.' }
      ]
    },
    {
      title: 'Human Rights, Leadership & Civic Responsibility',
      subtitle: 'Universal Declaration of Human Rights, democratic citizenship, and duties',
      quickInfo: 'Every citizen enjoys inalienable human rights—such as the right to life, freedom of speech, and education—accompanied by responsibilities like obeying laws.',
      keyConcepts: ['The UN adopted the Universal Declaration of Human Rights in 1948.', 'Rights come with civic duties, including tax compliance and voting.', 'Democratic leadership derives its legitimate authority from the people.'],
      quiz: [
        { q: 'What international document proclaimed fundamental human rights in 1948?', opts: ['Magna Carta', 'Universal Declaration of Human Rights (UDHR)', 'Treaty of Versailles', 'Geneva Convention'], ans: 1, exp: 'The United Nations adopted the UDHR in 1948.' },
        { q: 'Which of the following is a basic civic right?', opts: ['Right to fair trial and education', 'Right to break traffic laws', 'Right to damage public parks', 'Right to skip taxes'], ans: 0, exp: 'Education and fair legal trial are fundamental rights.' },
        { q: 'What is a core duty of every responsible citizen in a democracy?', opts: ['Voting during elections and respecting the law', 'Ignoring community issues', 'Spreading false rumors', 'Refusing community service'], ans: 0, exp: 'Civic participation and lawfulness are vital.' },
        { q: 'What type of leadership involves citizens electing their own representatives?', opts: ['Autocracy', 'Monarchy', 'Representative Democracy', 'Dictatorship'], ans: 2, exp: 'Democracy is government by the consent of the governed.' },
        { q: 'Why is freedom of the press essential in a society?', opts: ['To print advertisements only', 'To hold leaders accountable and keep the public informed', 'To eliminate books', 'To control opinions'], ans: 1, exp: 'A free press informs citizens and investigates abuse of power.' }
      ]
    }
  ]
};

// Return Junior Secondary (Grades 6–8) topics
export function getJuniorTopics(grade: GradeLevel, subjectId: SubjectId): Topic[] {
  const gradeNum = parseInt(grade.replace('grade-', ''), 10) || 7;
  const baseSpecs = JUNIOR_SPECS[subjectId] || JUNIOR_SPECS['math']!;

  return baseSpecs.map((spec, idx) => {
    return createTopicFromSpec(grade, subjectId, idx, {
      ...spec,
      title: gradeNum === 6 ? spec.title : `Year ${gradeNum}: ${spec.title}`,
      subtitle: `Grade ${gradeNum} (JSS ${gradeNum - 5}) syllabus mastery.`,
      quickInfo: `Grade ${gradeNum} standard: ${spec.quickInfo}`
    });
  });
}
