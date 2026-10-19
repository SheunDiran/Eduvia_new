import { GradeAuthoritativeMap } from './types';

export const GRADE_3_CURRICULUM: GradeAuthoritativeMap = {
  math: [
    {
      title: 'Multiplication as Equal Groups and Arrays',
      subtitle: 'Repeated addition, array grids, commutative property, and times tables',
      quickInfo: 'Multiplication is fast repeated addition of equal groups. An array with 4 rows of 5 dots has 4 × 5 = 20 total items. Order does not matter (commutative property: 4 × 5 = 5 × 4).',
      keyConcepts: [
        'Multiplication represents equal groups: 3 groups of 6 = 3 × 6 = 18.',
        'Commutative property: a × b = b × a.',
        'Identity property (×1) and zero property (×0).'
      ],
      quiz: [
        { q: 'Which repeated addition sentence matches 4 × 6?', opts: ['4 + 6', '6 + 6 + 6 + 6', '4 + 4 + 4 + 4', '6 × 4'], ans: 1, exp: '4 groups of 6 means adding 6 four times (24).' },
        { q: 'If an array has 5 rows and 7 columns, how many items are there in total?', opts: ['12', '30', '35', '40'], ans: 2, exp: '5 × 7 = 35 items.' },
        { q: 'According to the commutative property of multiplication, 8 × 3 is equal to what?', opts: ['8 + 3', '3 × 8', '8 - 3', '24 × 1'], ans: 1, exp: 'Factors can swap order without changing the product.' },
        { q: 'What is any number multiplied by 0?', opts: ['The number itself', '1', '0', '10'], ans: 2, exp: 'The zero property states n × 0 = 0.' },
        { q: 'What is 9 × 4?', opts: ['32', '36', '40', '45'], ans: 1, exp: '9 × 4 = 36.' }
      ]
    },
    {
      title: 'Basic Division & Fact Families',
      subtitle: 'Sharing equally, division as inverse multiplication, and remainders',
      quickInfo: 'Division is partitioning a total into equal groups. Multiplication and division form fact families: if 6 × 7 = 42, then 42 ÷ 7 = 6 and 42 ÷ 6 = 7.',
      keyConcepts: [
        'Dividend ÷ Divisor = Quotient.',
        'Division is sharing equally or finding how many groups fit.',
        'A fact family contains three related numbers linked by multiplication and division.'
      ],
      quiz: [
        { q: 'If 24 cookies are shared equally among 4 children, how many cookies does each child receive?', opts: ['4', '5', '6', '8'], ans: 2, exp: '24 ÷ 4 = 6 cookies each.' },
        { q: 'Which equation is in the same fact family as 5 × 8 = 40?', opts: ['40 - 8 = 32', '40 ÷ 5 = 8', '5 + 8 = 13', '40 × 5 = 200'], ans: 1, exp: '40 ÷ 5 = 8 is part of the 5, 8, 40 fact family.' },
        { q: 'What is the quotient of 36 ÷ 6?', opts: ['5', '6', '7', '8'], ans: 1, exp: '36 ÷ 6 = 6.' },
        { q: 'In the division problem 20 ÷ 5 = 4, what is the number 20 called?', opts: ['The quotient', 'The dividend', 'The divisor', 'The remainder'], ans: 1, exp: 'The total number being divided is the dividend.' },
        { q: 'What is 0 divided by 7?', opts: ['0', '7', '1', 'Undefined'], ans: 0, exp: '0 divided by any non-zero number is 0.' }
      ]
    },
    {
      title: 'Fractions on a Number Line (Halves, Thirds, Fourths)',
      subtitle: 'Numerator, denominator, unit fractions, and comparing fraction sizes',
      quickInfo: 'A fraction represents equal parts of a whole. The denominator (bottom) tells how many equal parts the whole is divided into; the numerator (top) counts the parts.',
      keyConcepts: [
        'Numerator = parts counted; Denominator = total equal parts in the whole.',
        'Unit fractions have 1 as numerator: 1/2, 1/3, 1/4.',
        'As denominator increases, each individual slice becomes smaller (1/2 > 1/4).'
      ],
      quiz: [
        { q: 'In the fraction 3/4, what does the number 4 represent?', opts: ['The parts we have', 'The total number of equal parts in the whole (denominator)', 'The whole number', 'The remainder'], ans: 1, exp: 'The bottom number is the denominator.' },
        { q: 'Which fraction is greater: 1/2 or 1/4?', opts: ['1/4 is greater', '1/2 is greater', 'They are equal', 'Neither is a fraction'], ans: 1, exp: 'Cutting a pie into 2 pieces produces larger slices than cutting into 4.' },
        { q: 'What fraction of a shape is shaded if 2 out of 3 equal parts are colored?', opts: ['1/3', '2/3', '3/2', '2/5'], ans: 1, exp: '2 parts out of 3 equal parts is 2/3.' },
        { q: 'Where is the fraction 1/2 located on a number line from 0 to 1?', opts: ['At 0', 'Exactly halfway between 0 and 1', 'Past 1', 'Near 1/8'], ans: 1, exp: '1/2 is the exact midpoint between 0 and 1.' },
        { q: 'What fraction is equivalent to one whole (1)?', opts: ['3/4', '4/4', '1/4', '4/10'], ans: 1, exp: 'When numerator equals denominator, the fraction equals 1.' }
      ]
    }
  ],
  'english-lang': [
    {
      title: 'Prefixes, Suffixes & Root Words',
      subtitle: 'Un-, re-, pre-, -ful, -less, -ly, and decoding complex vocabulary',
      quickInfo: 'Morphology examines word parts. Adding a prefix (like un- or re-) to the front or a suffix (like -ful or -less) to the end modifies the base root word\'s meaning.',
      keyConcepts: [
        'Root words are the base building blocks (e.g., help, play, joy).',
        'Prefixes: re- (again), un- / dis- (not/opposite), pre- (before).',
        'Suffixes: -ful (full of), -less (without), -ly (how something is done).'
      ],
      quiz: [
        { q: 'What does the prefix "un-" mean in words like "unhappy" and "unlock"?', opts: ['Very', 'Not or opposite of', 'Again', 'Before'], ans: 1, exp: '"Un-" negates the base word: not happy.' },
        { q: 'What is the root word of "carefully"?', opts: ['care', 'ful', 'ly', 'careful'], ans: 0, exp: '"Care" is the base root word.' },
        { q: 'What does the word "fearless" mean?', opts: ['Full of fear', 'Without fear (brave)', 'Fearing again', 'Before fear'], ans: 1, exp: 'Suffix "-less" means without.' },
        { q: 'Which word contains a prefix meaning "again"?', opts: ['Reread', 'Preheat', 'Untie', 'Playful'], ans: 0, exp: '"Re-" means again; reread = read again.' },
        { q: 'What suffix can you add to the adjective "quick" to make it an adverb?', opts: ['-ed', '-ly (quickly)', '-est', '-ing'], ans: 1, exp: '"-ly" turns adjectives into adverbs of manner.' }
      ]
    },
    {
      title: 'Paragraph Structure: Topic, Supporting & Concluding Sentences',
      subtitle: 'Organizing ideas, paragraph indents, transition words, and cohesion',
      quickInfo: 'A well-constructed paragraph focuses on one main idea. It opens with a topic sentence, develops supporting evidence and examples, and wraps up with a concluding sentence.',
      keyConcepts: [
        'Topic sentence introduces the central focus of the paragraph.',
        'Supporting sentences supply facts, sensory details, and explanations.',
        'Concluding sentence restates the main takeaway using fresh words.'
      ],
      quiz: [
        { q: 'What is the purpose of the first sentence in an informative paragraph?', opts: ['To list bibliography citations', 'To introduce the main topic (topic sentence)', 'To conclude the essay', 'To ask for a grade'], ans: 1, exp: 'The topic sentence announces the main idea.' },
        { q: 'Which transition word indicates a conclusion or summary?', opts: ['First', 'In addition', 'In conclusion / finally', 'Meanwhile'], ans: 2, exp: '"In conclusion" signals the paragraph wrap-up.' },
        { q: 'What do body sentences in a paragraph provide?', opts: ['Random unrelated facts', 'Supporting details and examples that prove the topic', 'Jokes only', 'Page numbers'], ans: 1, exp: 'Body sentences substantiate the topic sentence.' },
        { q: 'What typography format signals the start of a new written paragraph?', opts: ['An indent or blank line space', 'Writing in all uppercase', 'A question mark', 'Circling the words'], ans: 0, exp: 'Paragraphs are indented or spaced.' },
        { q: 'Why shouldn\'t a writer introduce a completely unrelated topic in the same paragraph?', opts: ['Because it confuses the reader and breaks paragraph unity', 'Because paper is too thin', 'Because commas will run out', 'Because letters will fade'], ans: 0, exp: 'Paragraph unity requires keeping one core focus.' }
      ]
    },
    {
      title: 'Fables, Folktales & Central Moral Lessons',
      subtitle: 'Aesop fables, animal personification, trickster tales, and extracting morals',
      quickInfo: 'Fables are traditional stories that teach moral lessons about character, wisdom, and honesty, often using anthropomorphic animal characters.',
      keyConcepts: [
        'Anthropomorphism / personification gives human traits to animals.',
        'The "moral" is the ethical lesson or principle taught by the tale.',
        'Classic examples: The Tortoise and the Hare, The Boy Who Cried Wolf.'
      ],
      quiz: [
        { q: 'What is the primary purpose of a traditional fable?', opts: ['To teach a clear moral lesson or life value', 'To teach advanced algebra', 'To report the daily weather', 'To sell books'], ans: 0, exp: 'Fables convey moral lessons.' },
        { q: 'What moral lesson does Aesop\'s fable "The Tortoise and the Hare" teach?', opts: ['Speed is everything', 'Slow and steady wins the race', 'Hares are always winners', 'Never run outside'], ans: 1, exp: 'Perseverance beats overconfident complacency.' },
        { q: 'In fables, animals often speak and act like humans. What literary device is this?', opts: ['Alliteration', 'Personification', 'Rhyme scheme', 'Punctuation'], ans: 1, exp: 'Personification attributes human qualities to non-humans.' },
        { q: 'What lesson is learned from "The Boy Who Cried Wolf"?', opts: ['Liars are not believed even when they tell the truth', 'Wolves are friendly', 'Shepherds should sleep', 'Shouting is fun'], ans: 0, exp: 'False alarms destroy credibility.' },
        { q: 'Who is the legendary ancient Greek storyteller associated with classic animal fables?', opts: ['Aesop', 'Shakespeare', 'Homer', 'Plato'], ans: 0, exp: 'Aesop is credited with classic moral fables.' }
      ]
    }
  ],
  science: [
    {
      title: 'Forces & Motion: Pushes, Pulls, Friction & Gravity',
      subtitle: 'Balanced and unbalanced forces, magnetism, and Newton\'s basics',
      quickInfo: 'A force is a push or a pull that can make objects speed up, slow down, or change direction. Friction resists motion between sliding surfaces, while gravity pulls downward.',
      keyConcepts: [
        'Force = push or pull that changes an object\'s state of motion.',
        'Friction generates resistance and heat when two surfaces rub together.',
        'Gravity is the invisible attractive force pulling objects toward Earth\'s center.'
      ],
      quiz: [
        { q: 'What is a force defined as in physics?', opts: ['Only electricity', 'A push or a pull acting on an object', 'Speed over time', 'The color of an object'], ans: 1, exp: 'A force is any push or pull.' },
        { q: 'What force pulls an apple downward from a tree branch to the ground?', opts: ['Magnetism', 'Friction', 'Gravity', 'Wind power'], ans: 2, exp: 'Gravity pulls objects toward Earth.' },
        { q: 'Why is it harder to slide a heavy cardboard box across rough carpet than smooth ice?', opts: ['The carpet has greater friction', 'Ice has more gravity', 'The box becomes heavier on carpet', 'Carpet has no mass'], ans: 0, exp: 'Rough surfaces generate high frictional resistance.' },
        { q: 'What happens when two balanced, equal forces push against each other in opposite directions?', opts: ['The object accelerates wildly', 'The object does not move (net force is zero)', 'The object turns into gas', 'The object disappears'], ans: 1, exp: 'Balanced forces produce no change in motion.' },
        { q: 'Which poles of two magnets attract each other?', opts: ['North and North', 'South and South', 'Opposite poles (North and South)', 'Magnets cannot attract'], ans: 2, exp: 'Opposite magnetic poles attract; like poles repel.' }
      ]
    },
    {
      title: 'Plant & Animal Life Cycles and Metamorphosis',
      subtitle: 'Complete vs incomplete metamorphosis, butterflies, frogs, and seeds',
      quickInfo: 'All living organisms progress through life cycles: birth, growth, reproduction, and death. Metamorphosis is a dramatic biological transformation in body structure.',
      keyConcepts: [
        'Complete metamorphosis: Egg → Larva (caterpillar) → Pupa (chrysalis) → Adult butterfly.',
        'Frog life cycle: Egg → Tadpole (gills/tail) → Froglet → Adult frog (lungs/legs).',
        'Flowering plants produce seeds that germinate, mature, and flower.'
      ],
      quiz: [
        { q: 'What are the four stages of complete butterfly metamorphosis in order?', opts: ['Egg → Pupa → Larva → Adult', 'Egg → Larva (caterpillar) → Pupa (chrysalis) → Adult', 'Adult → Tadpole → Pupa → Egg', 'Seed → Sprout → Flower → Adult'], ans: 1, exp: 'Egg, larva, pupa, adult is the complete cycle.' },
        { q: 'What does a young frog tadpole use to breathe underwater before developing lungs?', opts: ['Lungs', 'Gills', 'Wings', 'Nose pores'], ans: 1, exp: 'Tadpoles utilize aquatic gills.' },
        { q: 'What protective structure does a butterfly caterpillar form around itself during the pupa stage?', opts: ['A shell', 'A chrysalis', 'A nest', 'A spiderweb'], ans: 1, exp: 'Chrysalis encloses the transforming pupa.' },
        { q: 'What is the early growth stage of a seed sprouting roots and shoots called?', opts: ['Germination', 'Photosynthesis', 'Pollination', 'Evaporation'], ans: 0, exp: 'Germination is seed sprouting.' },
        { q: 'Why are life cycles cyclical rather than linear?', opts: ['Adults produce offspring, continuing the species generation after generation', 'Because clocks are round', 'They only happen in circles', 'Scientists prefer circles'], ans: 0, exp: 'Reproduction restarts the cycle for new generations.' }
      ]
    },
    {
      title: 'Ecosystems and Food Chains: Producers, Consumers & Decomposers',
      subtitle: 'Herbivores, carnivores, omnivores, energy flow from sunlight, and habitats',
      quickInfo: 'In an ecosystem, living things depend on one another for energy. Sunlight fuels green plant producers, which are eaten by consumers, and broken down by decomposers.',
      keyConcepts: [
        'Producers (plants) make their own food using sunlight.',
        'Consumers eat other organisms: Herbivores (plants), Carnivores (meat), Omnivores (both).',
        'Decomposers (fungi, earthworms, bacteria) recycle dead organic nutrients into soil.'
      ],
      quiz: [
        { q: 'Why are green plants classified as "producers" in a food chain?', opts: ['They produce trash', 'They create their own food energy using sunlight (photosynthesis)', 'They buy goods at markets', 'They hunt smaller animals'], ans: 1, exp: 'Plants produce organic glucose from sunlight.' },
        { q: 'What is an animal that eats only plants called?', opts: ['Carnivore', 'Herbivore', 'Omnivore', 'Decomposer'], ans: 1, exp: 'Herbivores consume plant matter exclusively.' },
        { q: 'In the food chain: Sun → Grass → Grasshopper → Frog → Snake, who is the secondary consumer?', opts: ['Grass', 'Grasshopper', 'Frog', 'Sun'], ans: 2, exp: 'Grass is producer; grasshopper is primary consumer; frog is secondary consumer.' },
        { q: 'What vital role do decomposers like earthworms and fungi play in an ecosystem?', opts: ['They destroy all water', 'They break down dead plants and animals into fertile soil nutrients', 'They block sunlight', 'They hunt lions'], ans: 1, exp: 'Decomposers recycle organic matter.' },
        { q: 'What is an animal called that eats both plants and animals (e.g., bears and humans)?', opts: ['Herbivore', 'Carnivore', 'Omnivore', 'Insectivore'], ans: 2, exp: 'Omnivores eat both flora and fauna.' }
      ]
    }
  ],
  'social-studies': [
    {
      title: 'Map Projections, Continents & Oceans of the World',
      subtitle: 'Seven continents, five oceans, equator, prime meridian, and hemispheres',
      quickInfo: 'Earth has seven continents (Asia, Africa, North America, South America, Antarctica, Europe, Australia) and five oceans, divided into Northern and Southern hemispheres by the equator.',
      keyConcepts: [
        'Continents: Asia is the largest; Antarctica is the coldest.',
        'Five oceans: Pacific (largest), Atlantic, Indian, Arctic, Southern.',
        'The Equator is 0° latitude; the Prime Meridian is 0° longitude.'
      ],
      quiz: [
        { q: 'How many continents are there on planet Earth?', opts: ['5', '6', '7', '10'], ans: 2, exp: 'There are 7 major continental landmasses.' },
        { q: 'Which is the largest and deepest ocean in the world?', opts: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'], ans: 2, exp: 'The Pacific Ocean covers over 30% of Earth\'s surface.' },
        { q: 'What imaginary line circles the middle of Earth dividing it into Northern and Southern hemispheres?', opts: ['The Prime Meridian', 'The Equator (0° latitude)', 'The Tropic of Cancer', 'The International Date Line'], ans: 1, exp: 'The Equator divides North and South.' },
        { q: 'Which continent is located at the South Pole and covered permanently in ice sheets?', opts: ['Australia', 'Antarctica', 'Greenland', 'Europe'], ans: 1, exp: 'Antarctica surrounds the South Pole.' },
        { q: 'Which is the most populous continent on Earth?', opts: ['Europe', 'Asia', 'South America', 'North America'], ans: 1, exp: 'Asia is home to approximately 60% of the world population.' }
      ]
    },
    {
      title: 'Early Indigenous Civilizations & Native Cultures',
      subtitle: 'Native American nations, dwellings, storytelling, and respect for nature',
      quickInfo: 'Indigenous peoples thrived across the Americas for thousands of years prior to European contact, building sophisticated cultures adapted to their environments.',
      keyConcepts: [
        'Dwellings matched regions: Pueblo adobe houses, Plains teepees, Woodland longhouses.',
        'Oral history and storytelling preserved cultural traditions across generations.',
        'Deep respect and ecological harmony with wildlife, rivers, and seasonal cycles.'
      ],
      quiz: [
        { q: 'What type of home was made of sun-dried clay bricks by Southwest indigenous peoples?', opts: ['Igloo', 'Pueblo adobe dwelling', 'Teepee', 'Log cabin'], ans: 1, exp: 'Pueblos were constructed with adobe clay.' },
        { q: 'Why did Plains indigenous nations build portable teepees of buffalo hides?', opts: ['They didn\'t know how to build wood homes', 'They were nomadic hunters following migrating bison herds', 'Because it was cold in summer', 'Because they had no rivers'], ans: 1, exp: 'Teepees offered portable shelter for buffalo hunters.' },
        { q: 'How did indigenous tribes preserve their history before written alphabets?', opts: ['Through oral storytelling, songs, petroglyphs, and ceremonies', 'By printing newspapers', 'Through radio broadcasts', 'They did not remember anything'], ans: 0, exp: 'Oral traditions passed history down orally.' },
        { q: 'What animal was central to the survival, tools, clothing, and shelter of Plains tribes?', opts: ['The Kangaroo', 'The American Bison (Buffalo)', 'The Penguin', 'The Camel'], ans: 1, exp: 'Bison provided food, leather, bones, and tools.' },
        { q: 'What value did indigenous traditions place on natural land and resources?', opts: ['Exploitation and waste', 'Reverence, gratitude, and sustainable stewardship', 'Ignoring the earth', 'Paving everything'], ans: 1, exp: 'Indigenous cultures practiced deep reverence for nature.' }
      ]
    },
    {
      title: 'Civic Duties: Voting, Laws & Local Government',
      subtitle: 'Mayors, city councils, citizen responsibilities, elections, and public taxes',
      quickInfo: 'Communities need government to establish order, maintain public parks, roads, and schools. Citizens have rights and responsibilities, including voting and following laws.',
      keyConcepts: [
        'Local government: The Mayor leads the executive branch; City Council passes local ordinances.',
        'Taxes fund public services: police, fire departments, libraries, and public roads.',
        'Voting allows citizens to choose leaders democratically.'
      ],
      quiz: [
        { q: 'Who is the elected leader of a city or town government?', opts: ['The Governor', 'The Mayor', 'The President', 'The Police Chief'], ans: 1, exp: 'A mayor oversees town and city administration.' },
        { q: 'What is a citizen\'s fundamental civic responsibility in a democratic election?', opts: ['Selling their vote', 'Voting thoughtfully for leaders and policies', 'Ignoring election day', 'Hiding ballot boxes'], ans: 1, exp: 'Voting is the bedrock of civic democracy.' },
        { q: 'What do city taxes pay for in our neighborhoods?', opts: ['Private family vacations', 'Public roads, parks, firefighters, schools, and libraries', 'Store merchandise', 'Movie tickets for politicians'], ans: 1, exp: 'Taxes fund community infrastructure.' },
        { q: 'Why do communities have laws and traffic signs?', opts: ['To make driving slower', 'To protect public safety, ensure fairness, and keep order', 'To collect fines only', 'For decoration'], ans: 1, exp: 'Laws preserve public safety and justice.' },
        { q: 'What group of elected officials creates local rules and ordinances in a town?', opts: ['The School Cafeteria staff', 'The City or Town Council', 'The Weather Bureau', 'The Postal Service'], ans: 1, exp: 'City councils vote on local municipal ordinances.' }
      ]
    }
  ],
  art: [
    {
      title: 'Warm vs Cool Color Schemes and Moods',
      subtitle: 'Red, yellow, orange energy vs blue, green, violet calm',
      quickInfo: 'Colors evoke psychological moods. Warm colors (red, orange, yellow) feel fiery, cozy, or energetic. Cool colors (blue, green, purple) evoke calm, water, and chilly skies.',
      keyConcepts: [
        'Warm colors: Red, Orange, Yellow (associated with sun, fire, and autumn).',
        'Cool colors: Blue, Green, Violet (associated with water, grass, and ice).',
        'Artists use color temperature to establish mood and dramatic contrast.'
      ],
      quiz: [
        { q: 'Which color palette contains only warm colors?', opts: ['Blue, green, and violet', 'Red, orange, and yellow', 'Black, white, and gray', 'Navy, teal, and lime'], ans: 1, exp: 'Red, orange, and yellow are warm colors.' },
        { q: 'What emotional feeling or mood do cool colors like blue and green often create?', opts: ['Rage and anger', 'Calmness, tranquility, and peace', 'Loudness and noise', 'Extreme panic'], ans: 1, exp: 'Cool tones evoke serenity and calmness.' },
        { q: 'If you want to paint a blazing desert sunset, which colors should dominate?', opts: ['Icy blues and grays', 'Vibrant reds, oranges, and warm yellows', 'Dark greens and purples', 'Pure black and white'], ans: 1, exp: 'Warm tones convey the heat of a desert sunset.' },
        { q: 'Which of the following is considered a cool color?', opts: ['Orange', 'Scarlet red', 'Forest green', 'Golden yellow'], ans: 2, exp: 'Green is on the cool side of the color wheel.' },
        { q: 'What is the color wheel tool used for in art studio classes?', opts: ['To test paint brushes', 'To visually organize colors and understand their relationships', 'To measure canvas length', 'To mix clay'], ans: 1, exp: 'The color wheel demonstrates chromatic relationships.' }
      ]
    },
    {
      title: 'Printmaking Techniques: Stamps, Stencils and Relief',
      subtitle: 'Brayers, relief blocks, multiple impressions, and positive/negative space',
      quickInfo: 'Printmaking is the process of transferring ink from a master matrix (like a carved block, foam stamp, or stencil) onto paper, allowing identical images to be reproduced.',
      keyConcepts: [
        'Relief printing: Raised areas receive ink while carved recessed areas stay white.',
        'A brayer is a rubber hand roller used to spread printmaking ink evenly.',
        'Printmakers number their duplicate prints in an edition (e.g., 1/20).'
      ],
      quiz: [
        { q: 'What is the unique advantage of printmaking compared to a single drawing?', opts: ['Prints are always painted in oil', 'Multiple identical impressions can be produced from one printing plate', 'Prints never dry', 'Prints must be round'], ans: 1, exp: 'Printmaking enables editioned reproduction.' },
        { q: 'What is the rubber hand-roller used to roll ink over a print block called?', opts: ['A spatula', 'A brayer', 'A chisel', 'A compass'], ans: 1, exp: 'A brayer rolls ink smoothly across the block.' },
        { q: 'In relief printmaking, which part of the plate transfers ink onto the paper?', opts: ['The deeply gouged out areas', 'The raised surface that touches the inked roller', 'The wooden back', 'The border margins'], ans: 1, exp: 'Relief ink sits on raised surfaces.' },
        { q: 'What is an "edition" in fine art printmaking?', opts: ['A spelling mistake', 'The total numbered set of identical prints pulled from a block', 'The title of the frame', 'The artist\'s pencil'], ans: 1, exp: 'An edition is a numbered series of prints.' },
        { q: 'How does a stencil work in printmaking?', opts: ['Ink passes through open cutouts onto the paper beneath', 'It blocks all ink completely', 'It soaks up ink like a sponge', 'It cuts the paper in half'], ans: 0, exp: 'Cutout apertures in stencils allow ink through.' }
      ]
    },
    {
      title: 'Folk Art and Cultural Textile Patterns',
      subtitle: 'Quilting, adinkra symbols, Mexican amate paintings, and artisan heritage',
      quickInfo: 'Folk art represents artistic expressions created by everyday artisans reflecting cultural heritage, community traditions, and practical beauty like quilts and tapestries.',
      keyConcepts: [
        'Folk art is rooted in community life rather than academic formal traditions.',
        'Story quilts (e.g., Faith Ringgold) combine stitched fabric with painted narrative.',
        'West African Adinkra stamps convey proverbs, wisdom, and spiritual values.'
      ],
      quiz: [
        { q: 'What characterizes traditional "folk art"?', opts: ['High-tech digital animations', 'Art made by community craftspeople expressing cultural traditions and heritage', 'Abstract museum sculptures only', 'Advertisements on TV'], ans: 1, exp: 'Folk art reflects local artisan traditions.' },
        { q: 'What is a "story quilt"?', opts: ['A bedsheet with no stitching', 'A textile artwork made of pieced fabrics illustrating a historical or personal narrative', 'A paper book', 'A stone sculpture'], ans: 1, exp: 'Story quilts stitch together visual narratives.' },
        { q: 'What do traditional West African Adinkra cloth symbols communicate?', opts: ['Math equations', 'Proverbs, cultural wisdom, and moral principles', 'Train schedules', 'Food prices'], ans: 1, exp: 'Adinkra symbols represent traditional proverbs.' },
        { q: 'Which materials are commonly used in traditional Mexican Amate folk paintings?', opts: ['Synthetic plastic sheets', 'Handmade tree bark paper with bright tempera colors', 'Marble stone', 'Glass windows'], ans: 1, exp: 'Amate uses hand-pounded tree bark paper.' },
        { q: 'Why do cultural communities pass down craft and weaving patterns across generations?', opts: ['To preserve cultural memory, storytelling, and family identity', 'Because they have no other clothing', 'Because machines are illegal', 'They don\'t pass them down'], ans: 0, exp: 'Artisan craft preserves cultural legacy.' }
      ]
    }
  ],
  pe: [
    {
      title: 'Cardiovascular Fitness and Aerobic Heart Rates',
      subtitle: 'Pulse checks, heart health, aerobic exercise, and stamina building',
      quickInfo: 'Aerobic exercise (running, swimming, jumping rope) strengthens the heart muscle and lungs. We check our pulse at the wrist or neck to measure our heart rate.',
      keyConcepts: [
        'The heart is a muscular pump circulating oxygen-rich blood throughout the body.',
        'Aerobic activities elevate heart rate and breathing for sustained periods.',
        'Pulse is felt at the radial artery (wrist) or carotid artery (neck).'
      ],
      quiz: [
        { q: 'What organ is strengthened most by aerobic exercise like running and swimming?', opts: ['The stomach', 'The heart (cardiac muscle)', 'The fingernails', 'The hair follicles'], ans: 1, exp: 'Cardiovascular exercise conditions the heart.' },
        { q: 'Where can you place two fingers to feel your pulse heartbeat?', opts: ['On the side of your neck (carotid) or inner wrist (radial)', 'On your elbow', 'On your knee cap', 'On your earlobe'], ans: 0, exp: 'Radial and carotid arteries reveal pulse.' },
        { q: 'What happens to your heart rate when you sprint around the soccer field?', opts: ['It slows down to zero', 'It speeds up to pump more oxygen to your working muscles', 'It stays identical to when sleeping', 'It stops completely'], ans: 1, exp: 'Heart rate increases to supply oxygen.' },
        { q: 'Which of the following is an example of cardiovascular aerobic exercise?', opts: ['Jumping rope for 10 minutes', 'Sitting on the sofa watching cartoons', 'Sleeping with eyes open', 'Staring at a wall'], ans: 0, exp: 'Jump roping engages continuous aerobic energy.' },
        { q: 'Why is having good cardiovascular endurance beneficial in everyday life?', opts: ['You can run, play, and climb stairs without becoming overly exhausted', 'You never need to eat food', 'You can sleep without breathing', 'You grow taller instantly'], ans: 0, exp: 'Cardio stamina reduces physical fatigue.' }
      ]
    },
    {
      title: 'Team Sports Basics: Soccer Dribbling, Passing & Trapping',
      subtitle: 'Footwork, instep passing, shielding the ball, and sportsmanship',
      quickInfo: 'Soccer develops foot-eye coordination and teamwork. Players control the ball by dribbling with the inside and outside of feet and pass accurately using the instep.',
      keyConcepts: [
        'Dribbling keeps the soccer ball close to the feet while moving.',
        'Passes are made using the flat inside of the foot for accuracy.',
        'Trapping cushions and brings a moving ball under immediate control.'
      ],
      quiz: [
        { q: 'Which part of the foot gives the most control and accuracy when passing a soccer ball?', opts: ['The tip of the big toe', 'The inside of the foot (instep)', 'The heel only', 'The shin bone'], ans: 1, exp: 'The broad inside of the foot directs passes accurately.' },
        { q: 'What is "dribbling" in the sport of soccer?', opts: ['Dropping water on the ball', 'Moving the ball forward with short, controlled taps using your feet', 'Carrying the ball in both hands', 'Kicking the ball into the parking lot'], ans: 1, exp: 'Dribbling advances the ball at your feet.' },
        { q: 'Who is the only player on a soccer field permitted to use hands during live play inside the penalty box?', opts: ['The striker', 'The goalkeeper (goalie)', 'The referee', 'The team captain'], ans: 1, exp: 'Goalkeepers can touch the ball inside the box.' },
        { q: 'What soccer skill is used to stop or cushion a received pass?', opts: ['Trapping', 'Heading out of bounds', 'Sprinting away', 'Fouling'], ans: 0, exp: 'Trapping brings the ball under control.' },
        { q: 'Why is keeping your head up while dribbling important?', opts: ['To watch birds', 'To see open teammates and avoid defenders', 'To look at the scoreboard', 'To balance your hat'], ans: 1, exp: 'Field vision informs passing and dribbling choices.' }
      ]
    },
    {
      title: 'Personal Safety: Fire Drills, Bicycle Helmets and First Aid',
      subtitle: 'Stop Drop and Roll, helmet fitting, pedestrian safety, and cleaning cuts',
      quickInfo: 'Safety rules protect against preventable injuries. We wear properly fitted helmets when cycling, know fire exit procedures, and apply basic first aid to minor scrapes.',
      keyConcepts: [
        'Wear a helmet level across your forehead (two finger rule above eyebrows).',
        'If clothing catches fire: Stop, Drop to the ground, and Roll.',
        'Wash minor cuts with clean water and soap, then apply a clean bandage.'
      ],
      quiz: [
        { q: 'What is the life-saving procedure if your clothes ever catch fire?', opts: ['Run as fast as possible', 'Stop, Drop, and Roll', 'Wave your arms and scream', 'Jump onto a wooden chair'], ans: 1, exp: 'Stop, drop, and roll smothers flames.' },
        { q: 'How should a bicycle helmet sit on your head to protect your brain properly?', opts: ['Tilted all the way back off your forehead', 'Level and low on the forehead, about two finger-widths above eyebrows', 'Hanging loosely around your neck', 'Over your eyes'], ans: 1, exp: 'A level helmet protects the frontal lobe.' },
        { q: 'What is the first step in treating a minor scrape on your knee?', opts: ['Paint it with nail polish', 'Rinse gently with clean water and wash with soap', 'Cover it with dirt', 'Ignore it for a week'], ans: 1, exp: 'Cleaning prevents bacterial contamination.' },
        { q: 'During a school fire evacuation drill, what should students do?', opts: ['Stop to pack up all backpack toys', 'Walk quickly, quietly, and calmly with your teacher to the assigned exit', 'Run in circles shouting', 'Hide under desks'], ans: 1, exp: 'Calm, rapid evacuation ensures everyone is accounted for.' },
        { q: 'When crossing a street at a pedestrian crosswalk, what should you do first?', opts: ['Run across with your eyes shut', 'Look Left, Look Right, and Look Left again', 'Look down at your shoes', 'Wait for a horn to honk'], ans: 1, exp: 'Checking traffic in both directions prevents accidents.' }
      ]
    }
  ],
  'computer-science': [
    {
      title: 'Block-Based Visual Coding: Loops and Events',
      subtitle: 'Scratch basics, when green flag clicked, repeat loops, and sprite motion',
      quickInfo: 'Block-based coding uses interlocking visual puzzle pieces. Events (like clicking a green flag) start programs, and loops repeat instructions without rewriting code.',
      keyConcepts: [
        'Events trigger code: "When green flag clicked" or "When key pressed".',
        'Loops repeat code: "Repeat 10 times" or "Forever" loops.',
        'Sprites are graphical characters controlled by scripts on a stage.'
      ],
      quiz: [
        { q: 'In Scratch coding, what block commonly triggers a program to start running?', opts: ['When green flag clicked', 'Stop all', 'Delete sprite', 'Turn off screen'], ans: 0, exp: 'The green flag event initiates execution.' },
        { q: 'What coding concept allows a character to walk 10 steps over and over without repeating code blocks?', opts: ['A variable', 'A loop (repeat block)', 'A comment', 'A mouse pad'], ans: 1, exp: 'Loops iterate actions automatically.' },
        { q: 'What is the on-screen character or object called in Scratch?', opts: ['A pixel', 'A sprite', 'A cursor', 'A mainframe'], ans: 1, exp: 'Sprites are interactive actors on the stage.' },
        { q: 'What block would you use to keep music playing in a continuous loop during a game?', opts: ['Repeat 1 time', 'Forever loop', 'Wait 10 seconds', 'Stop script'], ans: 1, exp: 'A forever loop cycles indefinitely.' },
        { q: 'If a sprite moves 10 steps, waits 1 second, and repeats 4 times, how many total steps does it take?', opts: ['10 steps', '20 steps', '40 steps', '14 steps'], ans: 2, exp: '10 steps × 4 repetitions = 40 steps.' }
      ]
    },
    {
      title: 'Digital Footprint, Privacy & Respectful Online Communication',
      subtitle: 'Cyberbullying prevention, permanent digital tracks, and netiquette',
      quickInfo: 'Everything you post, search, or share online creates your digital footprint. Practicing digital citizenship means being respectful, kind, and protecting private data.',
      keyConcepts: [
        'A digital footprint is the permanent trail of data left by online activity.',
        'Netiquette: Communicating respectfully without insults, spam, or shouting (ALL CAPS).',
        'Cyberbullying is using technology to hurt, intimidate, or embarrass others.'
      ],
      quiz: [
        { q: 'What is a "digital footprint"?', opts: ['A dirty shoe print on a tablet screen', 'The permanent record of things you do, post, and share online', 'A new computer model', 'A type of battery'], ans: 1, exp: 'Digital footprint records online history.' },
        { q: 'Can photos or messages posted on public social websites be easily deleted forever?', opts: ['Yes, they vanish immediately in 5 seconds', 'No, once posted online, copies can be saved or screenshotted permanently', 'Only if you restart the device', 'Yes, always'], ans: 1, exp: 'Digital media can be duplicated and archived.' },
        { q: 'What should you do if someone is being mean or bullying another student in a chat room?', opts: ['Join in the teasing', 'Do not participate; save evidence and report it to a trusted adult/teacher', 'Post private addresses', 'Cheer them on'], ans: 1, exp: 'Reporting cyberbullying protects students.' },
        { q: 'In online typing netiquette, what does typing in ALL CAPITAL LETTERS represent?', opts: ['Whispering politely', 'SHOUTING or being aggressive', 'Writing poetry', 'Correct grammar'], ans: 1, exp: 'All-caps text is perceived as shouting.' },
        { q: 'Why should you never share your school name or daily schedule on public gaming forums?', opts: ['It takes too long to type', 'To protect your physical safety and privacy from strangers', 'Because games don\'t allow letters', 'Because it crashes the game'], ans: 1, exp: 'Protecting personal routine prevents safety risks.' }
      ]
    },
    {
      title: 'Data Representation: Sorting Lists and Simple Graphs',
      subtitle: 'Bar charts, tally charts, tables, and binary on/off states',
      quickInfo: 'Computers organize and analyze information using data structures. We collect data in tally charts, visualize trends with bar graphs, and sort lists alphabetically or numerically.',
      keyConcepts: [
        'Data is raw facts and numbers collected for reference or analysis.',
        'Tally marks group numbers into bundles of five for quick counting.',
        'Bar graphs compare categories using vertical or horizontal rectangular bars.'
      ],
      quiz: [
        { q: 'How is the number 5 typically represented using tally marks?', opts: ['Five separate vertical lines', 'Four vertical lines with a diagonal slash across them', 'A circle with a dot', 'Two horizontal lines'], ans: 1, exp: 'Tally marks bundle in groups of five.' },
        { q: 'What visual chart uses rectangular bars of different heights to compare categories?', opts: ['A pie crust', 'A bar graph (or bar chart)', 'A word search', 'A paragraph'], ans: 1, exp: 'Bar graphs visualize comparative quantities.' },
        { q: 'What does "sorting data in ascending order" mean?', opts: ['From largest to smallest', 'From smallest to largest (e.g., 1, 2, 3...)', 'In random mixed order', 'Deleting every second item'], ans: 1, exp: 'Ascending orders from least to greatest.' },
        { q: 'At the most fundamental hardware level, what two states do computers use to represent all data?', opts: ['Red and green', 'Binary: 0 and 1 (Off and On)', 'Yes and Maybe', 'Hot and Cold'], ans: 1, exp: 'Binary states (0/1) encode all computer data.' },
        { q: 'What does the label on the X-axis (horizontal bottom line) of a graph tell you?', opts: ['The author of the graph', 'The categories being compared (e.g., favorite fruit)', 'The date of birth', 'The room temperature'], ans: 1, exp: 'The X-axis classifies independent categories.' }
      ]
    }
  ],
  music: [
    {
      title: 'The Treble Clef & Musical Staff (Every Good Boy Does Fine)',
      subtitle: 'Five lines, four spaces, note letter names E-G-B-D-F and F-A-C-E',
      quickInfo: 'Musical notes are written on a five-line staff. The Treble Clef (G Clef) marks high-pitched notes. The lines are E-G-B-D-F and the spaces spell F-A-C-E.',
      keyConcepts: [
        'The staff has 5 horizontal lines and 4 spaces, numbered from bottom to top.',
        'Treble staff lines: E, G, B, D, F ("Every Good Boy Does Fine").',
        'Treble staff spaces from bottom to top spell: F, A, C, E.'
      ],
      quiz: [
        { q: 'How many lines are on a standard musical staff?', opts: ['3', '4', '5', '6'], ans: 2, exp: 'A musical staff consists of 5 lines and 4 spaces.' },
        { q: 'What word do the four spaces of the treble clef spell from bottom to top?', opts: ['NOTE', 'FACE', 'BEAT', 'DRUM'], ans: 1, exp: 'Spaces from bottom to top are F, A, C, E.' },
        { q: 'What mnemonic helps remember the five lines of the treble staff: E, G, B, D, F?', opts: ['Every Good Boy Does Fine', 'Eat Great Big Delicious Fruit', 'Elephant Goes By Dog Fast', 'Any of the above'], ans: 3, exp: 'Common mnemonics represent E-G-B-D-F.' },
        { q: 'What is another common name for the Treble Clef because it curls around the G line?', opts: ['The Bass Clef', 'The G Clef', 'The Percussion Clef', 'The Alto Clef'], ans: 1, exp: 'The treble clef wraps around the G line.' },
        { q: 'What note sits on the very bottom (first) line of the treble staff?', opts: ['C', 'D', 'E', 'F'], ans: 2, exp: 'Line 1 is the note E.' }
      ]
    },
    {
      title: 'Ostinato Patterns and Rhythmic Accents',
      subtitle: 'Repeated accompaniment rhythms, syncopation, and musical polyrhythms',
      quickInfo: 'An ostinato is a short melodic or rhythmic pattern that repeats continuously throughout a section of music, creating a steady foundation for melody.',
      keyConcepts: [
        'An ostinato is a persistently repeated musical phrase or rhythm.',
        'An accent (>) marks a note that should be struck with extra emphasis.',
        'Layering different ostinatos creates exciting polyrhythmic textures.'
      ],
      quiz: [
        { q: 'What is an "ostinato" in music composition?', opts: ['A very long opera solo', 'A short rhythmic or melodic pattern repeated persistently throughout a song', 'A broken violin string', 'The final bow at the end of a concert'], ans: 1, exp: 'Ostinatos are repeating musical motifs.' },
        { q: 'What does an accent mark (>) placed over a musical note tell the performer to do?', opts: ['Play that note softer than usual', 'Play that note with stronger force and emphasis', 'Skip the note completely', 'Play it backwards'], ans: 1, exp: 'Accents emphasize particular notes.' },
        { q: 'Which famous percussion piece or rhythm often uses an ostinato rhythm?', opts: ['The Queen song "We Will Rock You" (stomp stomp clap)', 'Complete silence', 'A random car horn', 'A whisper'], ans: 0, exp: 'Stomp-stomp-clap is a classic rhythmic ostinato.' },
        { q: 'Can an ostinato pattern be played on melodic instruments like the xylophone?', opts: ['Yes, a repeating 3-note melody can be a melodic ostinato', 'No, ostinatos are only for drums', 'Only in brass bands', 'Never'], ans: 0, exp: 'Ostinatos can be melodic or rhythmic.' },
        { q: 'How does an ostinato help the lead singer or soloist?', opts: ['It distracts the audience', 'It provides a reliable, steady rhythmic and harmonic anchor', 'It speeds up the tempo', 'It makes the song end quickly'], ans: 1, exp: 'Ostinatos anchor musical continuity.' }
      ]
    },
    {
      title: 'Percussion Ensembles: Boomwhackers, Shakers and Triangles',
      subtitle: 'Pitched vs unpitched percussion, striking techniques, and dynamics',
      quickInfo: 'Percussion instruments produce sound when hit, shaken, or scraped. Pitched percussion (Boomwhackers, xylophones) play exact notes, while unpitched (triangles, maracas) provide texture.',
      keyConcepts: [
        'Pitched percussion: Glokenspiel, Xylophone, Boomwhackers (exact pitches).',
        'Unpitched percussion: Triangle, Maracas, Tambourine, Woodblock (rhythmic timbre).',
        'Boomwhackers are color-coded plastic tubes that resonate notes when tapped.'
      ],
      quiz: [
        { q: 'Which of the following is a "pitched" percussion instrument capable of playing melodies?', opts: ['Snare drum', 'Xylophone / Glockenspiel', 'Maracas', 'Triangle'], ans: 1, exp: 'Xylophones produce tuned musical pitches.' },
        { q: 'What are Boomwhackers?', opts: ['Heavy wooden hammers', 'Color-coded tuned plastic tubes that produce pitch when struck', 'Electronic synthesizers', 'Brass horns'], ans: 1, exp: 'Boomwhackers are tuned resonant tubes.' },
        { q: 'What geometric metal percussion instrument is struck with a metal beater?', opts: ['The Octagon', 'The Triangle', 'The Square', 'The Circle'], ans: 1, exp: 'The triangle produces a bright ringing tone.' },
        { q: 'How do you stop a ringing triangle or cymbal from making sound (damping)?', opts: ['Blow on it', 'Touch it gently with your fingertips to stop the metal vibration', 'Drop it on the floor', 'Turn off the lights'], ans: 1, exp: 'Touching dampens vibration waves.' },
        { q: 'What instrument is shaken to create a rattling sound like seeds in a gourd?', opts: ['Maracas', 'Trombone', 'Cello', 'Piccolo'], ans: 0, exp: 'Maracas contain rattling beads or seeds.' }
      ]
    }
  ],
  crs: [
    {
      title: 'The Call of Abraham and the Promised Land',
      subtitle: 'Faithful obedience, God\'s covenant, blessing all nations, and Canaan',
      quickInfo: 'God called Abraham to leave his homeland of Ur and travel to the land of Canaan. God made a sacred covenant promising to make Abraham the father of many nations.',
      keyConcepts: [
        'Abraham demonstrated radical faith by obeying God\'s call to journey into an unknown land.',
        'God\'s covenant promised: descendants as numerous as the stars, land, and blessings.',
        'Sarah and Abraham received the promise of their son Isaac in old age.'
      ],
      quiz: [
        { q: 'What did God promise to make Abraham if he obeyed His voice?', opts: ['A Roman king', 'The father of a great nation with descendants like the stars', 'A wealthy merchant in Ur', 'A sea captain'], ans: 1, exp: 'Genesis 12 & 15 record the Abrahamic covenant.' },
        { q: 'What was Abraham\'s response when God told him to leave his home for a new land?', opts: ['He refused to go', 'He packed up his family and went in faithful obedience', 'He hid inside a cave', 'He complained for ten years'], ans: 1, exp: 'Abraham obeyed God in faith.' },
        { q: 'What was the name of the son born to Abraham and Sarah in their old age?', opts: ['Jacob', 'Isaac', 'Joseph', 'Moses'], ans: 1, exp: 'Isaac was the son of promise.' },
        { q: 'What does the word "covenant" mean in the Bible?', opts: ['A temporary loan', 'A sacred, solemn promise and agreement between God and His people', 'A battle weapon', 'A type of food'], ans: 1, exp: 'A covenant is a binding spiritual relationship.' },
        { q: 'What was Abraham\'s original name before God changed it?', opts: ['Abram', 'Aaron', 'Adam', 'Amos'], ans: 0, exp: 'God renamed Abram to Abraham, meaning "father of many".' }
      ]
    },
    {
      title: 'The Parable of the Sower and Good Soil',
      subtitle: 'Four soils, the seed as the Word of God, and bearing fruitful lives',
      quickInfo: 'Jesus taught the Parable of the Sower: seeds fell on the path, rocky ground, thorns, and good soil. Only the seed in good, fertile soil sprouted and produced a bountiful harvest.',
      keyConcepts: [
        'The seed represents the Word of God and message of the Kingdom.',
        'The soils represent different human heart responses (hard, shallow, crowded, receptive).',
        'Good soil hears the word, understands it, and bears fruit through good deeds.'
      ],
      quiz: [
        { q: 'In the Parable of the Sower, what does the "seed" represent?', opts: ['Physical grain for bread', 'The Word of God and message of the Kingdom', 'Gold coins', 'Raindrops'], ans: 1, exp: 'Jesus explained the seed is God\'s Word.' },
        { q: 'What happened to the seeds that fell along the hard footpath?', opts: ['They grew into oak trees', 'Birds came and devoured them quickly', 'They turned into flowers', 'They soaked into the dirt'], ans: 1, exp: 'Birds ate the seeds on the trampled path.' },
        { q: 'Why did the seed sown on rocky ground wither away quickly when the sun rose?', opts: ['Because it had no deep roots to draw moisture', 'Because it was too cold', 'Because it had too much water', 'Because stones ate it'], ans: 0, exp: 'Shallow soil prevents deep root systems.' },
        { q: 'What do the "thorns" that choke out the growing plant represent in human life?', opts: ['Gardening tools', 'Worries of life and the deceitfulness of wealth', 'Heavy rain showers', 'Fresh fruit'], ans: 1, exp: 'Worldly worries choke out spiritual growth.' },
        { q: 'What happened to the seed sown in "good soil"?', opts: ['It died', 'It grew, blossomed, and produced a harvest 30, 60, or 100 times what was sown', 'It blew away', 'It turned into sand'], ans: 1, exp: 'Good soil yields an abundant spiritual harvest.' }
      ]
    },
    {
      title: 'The Beatitudes: Blessed Are the Peacemakers',
      subtitle: 'The Sermon on the Mount, humility, mercy, and pure hearts',
      quickInfo: 'In the Sermon on the Mount, Jesus shared the Beatitudes, teaching that true happiness and blessing come not from wealth or power, but from humility, mercy, and peacemaking.',
      keyConcepts: [
        'Beatitudes begin: "Blessed are the poor in spirit, for theirs is the Kingdom of Heaven."',
        '"Blessed are the peacemakers, for they will be called children of God."',
        'Mercy and pure motives are celebrated in God\'s Kingdom.'
      ],
      quiz: [
        { q: 'Where did Jesus preach the famous sermon containing the Beatitudes?', opts: ['On a fishing boat', 'On a mountain (The Sermon on the Mount)', 'Inside a Roman palace', 'In the desert wilderness'], ans: 1, exp: 'Matthew 5-7 records the Sermon on the Mount.' },
        { q: 'According to Jesus, who will be called "children of God"?', opts: ['The victorious soldiers', 'The peacemakers', 'The loudest speakers', 'The wealthiest kings'], ans: 1, exp: '"Blessed are the peacemakers, for they shall be called sons of God."' },
        { q: 'What did Jesus say about those who show mercy to others?', opts: ['They will be mocked', 'They will receive mercy from God', 'They are weak', 'They will lose their money'], ans: 1, exp: '"Blessed are the merciful, for they shall obtain mercy."' },
        { q: 'What does the word "Beatitude" mean?', opts: ['Supreme blessing and divine happiness', 'A musical beat', 'An angry debate', 'A rule book'], ans: 0, exp: 'Beatitude comes from the Latin for blessedness.' },
        { q: 'What should Christians be like in the world according to the Sermon on the Mount?', opts: ['Invisible shadows', '"Salt of the earth" and "Light of the world"', 'Fierce warriors', 'Cold ice'], ans: 1, exp: 'Believers are called to be salt and light.' }
      ]
    }
  ]
};
