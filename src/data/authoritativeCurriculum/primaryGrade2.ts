import { GradeAuthoritativeMap } from './types';

export const GRADE_2_CURRICULUM: GradeAuthoritativeMap = {
  math: [
    {
      title: 'Place Value: Hundreds, Tens and Ones',
      subtitle: 'Understanding 3-digit numbers, expanded form, and base-ten blocks',
      quickInfo: 'Three-digit numbers are built from hundreds, tens, and ones. For example, 345 means 3 hundreds (300), 4 tens (40), and 5 ones (5).',
      keyConcepts: [
        'The hundreds place is two positions to the left of the ones place.',
        'Expanded form breaks numbers into values: 426 = 400 + 20 + 6.',
        'Comparing numbers starts from the highest place value column.'
      ],
      quiz: [
        { q: 'What is the value of the digit 4 in 482?', opts: ['4', '40', '400', '48'], ans: 2, exp: 'The 4 is in the hundreds column, representing 400.' },
        { q: 'Which number is equal to 300 + 50 + 7?', opts: ['357', '375', '537', '753'], ans: 0, exp: '300 + 50 + 7 = 357.' },
        { q: 'Which symbol makes this true: 528 ___ 582?', opts: ['>', '<', '=', '+'], ans: 1, exp: '528 is less than 582 because 2 tens is less than 8 tens.' },
        { q: 'What number is 10 more than 290?', opts: ['291', '300', '310', '390'], ans: 1, exp: '290 + 10 = 300.' },
        { q: 'How many tens are in the number 70?', opts: ['0', '7', '70', '700'], ans: 1, exp: '7 groups of 10 equal 70.' }
      ]
    },
    {
      title: 'Two-Digit Addition and Subtraction with Regrouping',
      subtitle: 'Carrying over to tens and borrowing from tens columns',
      quickInfo: 'When adding ones gives 10 or more, we regroup 10 ones into 1 ten. When subtracting and the top digit is smaller, we borrow 1 ten as 10 ones.',
      keyConcepts: [
        'Always start adding or subtracting from the ones column on the right.',
        'Regrouping addition: 7 + 8 = 15 ones, which is 1 ten and 5 ones.',
        'Checking subtraction: Difference + Subtrahend = Minuend.'
      ],
      quiz: [
        { q: 'Calculate: 38 + 25', opts: ['53', '63', '61', '55'], ans: 1, exp: '8 + 5 = 13 (write 3, carry 1); 1 + 3 + 2 = 6; total 63.' },
        { q: 'Calculate: 52 - 19', opts: ['43', '33', '37', '47'], ans: 1, exp: 'Borrow 1 ten: 12 - 9 = 3; 4 - 1 = 3; total 33.' },
        { q: 'In vertical addition, which column do you add first?', opts: ['Hundreds column', 'Tens column', 'Ones column', 'Any column'], ans: 2, exp: 'Always begin calculations in the ones column.' },
        { q: 'What is 46 + 34?', opts: ['70', '78', '80', '82'], ans: 2, exp: '6 + 4 = 10 (carry 1); 1 + 4 + 3 = 8; total 80.' },
        { q: 'What is 60 - 24?', opts: ['36', '44', '46', '34'], ans: 0, exp: 'Borrow 1 ten: 10 - 4 = 6; 5 - 2 = 3; total 36.' }
      ]
    },
    {
      title: 'Telling Time to 5-Minute Intervals and Money Math',
      subtitle: 'Analog clocks, quarter past, half past, coins, and making change',
      quickInfo: 'The short hand shows the hour and the long hand shows minutes, counting by 5s around the dial. Money combines quarters, dimes, nickels, and pennies.',
      keyConcepts: [
        'Each number on the clock face represents 5 minutes (12 × 5 = 60 min).',
        '1 quarter = 25¢, 1 dime = 10¢, 1 nickel = 5¢, 1 penny = 1¢.',
        '100 cents equal 1 dollar ($1.00).'
      ],
      quiz: [
        { q: 'When the minute hand points to 6, how many minutes past the hour is it?', opts: ['6 minutes', '15 minutes', '30 minutes (half past)', '45 minutes'], ans: 2, exp: '6 × 5 = 30 minutes.' },
        { q: 'How much money is 2 quarters, 1 dime, and 1 nickel?', opts: ['55¢', '60¢', '65¢', '70¢'], ans: 2, exp: '25 + 25 + 10 + 5 = 65 cents.' },
        { q: 'What time is shown when the hour hand is between 2 and 3 and the minute hand points to 3?', opts: ['2:15', '3:15', '2:03', '3:02'], ans: 0, exp: 'Hour is 2; 3 × 5 = 15; time is 2:15.' },
        { q: 'How many dimes make one dollar ($1.00)?', opts: ['4', '5', '10', '20'], ans: 2, exp: '10 dimes × 10¢ = 100¢ = $1.00.' },
        { q: 'If a toy costs 75¢ and you pay with $1.00, what is your change?', opts: ['15¢', '25¢', '30¢', '35¢'], ans: 1, exp: '100 - 75 = 25 cents.' }
      ]
    }
  ],
  'english-lang': [
    {
      title: 'Nouns, Verbs & Adjectives in Action',
      subtitle: 'Naming words, action words, describing words, and plurals',
      quickInfo: 'Nouns name a person, place, or thing. Verbs show actions or states of being. Adjectives describe nouns, telling what kind, color, or how many.',
      keyConcepts: [
        'Common nouns (cat, chair) vs proper nouns (London, Sarah).',
        'Action verbs tell what someone or something does (run, jump, think).',
        'Adjectives add descriptive color, size, and texture to sentences.'
      ],
      quiz: [
        { q: 'Which word in this sentence is an adjective: "The playful puppy barked"?', opts: ['The', 'playful', 'puppy', 'barked'], ans: 1, exp: '"Playful" describes what kind of puppy.' },
        { q: 'Which word is an action verb?', opts: ['Quick', 'Apple', 'Swim', 'Blue'], ans: 2, exp: '"Swim" is an action someone performs.' },
        { q: 'What is the plural of the noun "box"?', opts: ['boxs', 'boxes', 'boxies', 'boxen'], ans: 1, exp: 'Nouns ending in -x form plurals by adding -es.' },
        { q: 'Which word is a proper noun that must be capitalized?', opts: ['city', 'paris', 'country', 'river'], ans: 1, exp: 'Paris is a specific city name and must be capitalized.' },
        { q: 'Find the noun in: "She read an exciting book."', opts: ['She', 'read', 'exciting', 'book'], ans: 3, exp: '"Book" is a thing (noun).' }
      ]
    },
    {
      title: 'Compound Sentences with Conjunctions',
      subtitle: 'Joining thoughts with and, but, or, and so using commas',
      quickInfo: 'A compound sentence connects two complete thoughts (independent clauses) using a comma and a coordinating conjunction like and, but, or so.',
      keyConcepts: [
        'Conjunctions link sentences: "and" adds, "but" contrasts, "so" shows result.',
        'A comma is placed before the conjunction when joining two complete sentences.',
        'Run-on sentences can be fixed with a period or a conjunction.'
      ],
      quiz: [
        { q: 'Which conjunction shows a contrast or difference between two ideas?', opts: ['and', 'but', 'so', 'because'], ans: 1, exp: '"But" introduces contrasting information.' },
        { q: 'Which sentence is a correctly joined compound sentence?', opts: ['I like milk I like juice.', 'I like milk, and I like juice.', 'I like milk and, I like juice.', 'I like milk so.'], ans: 1, exp: 'Uses comma and coordinating conjunction "and".' },
        { q: 'What does the conjunction "so" explain in a sentence?', opts: ['A question', 'A cause or result', 'A color', 'An opposite'], ans: 1, exp: '"So" shows the effect or result of an action.' },
        { q: 'Where does the comma belong: "The rain started __ so we opened our umbrellas"?', opts: ['After "started"', 'Before "so"', 'After "umbrellas"', 'After "we"'], ans: 1, exp: 'Comma precedes the coordinating conjunction.' },
        { q: 'Which conjunction shows a choice between two options?', opts: ['or', 'and', 'but', 'yet'], ans: 0, exp: '"Or" presents alternatives.' }
      ]
    },
    {
      title: 'Reading Comprehension: Finding the Main Idea',
      subtitle: 'Topic sentences, supporting details, and summarizing short passages',
      quickInfo: 'The main idea is the big, central point of a paragraph. Supporting details give extra facts, examples, and proof to explain the main idea.',
      keyConcepts: [
        'The main idea is often found in the first or last sentence of a paragraph.',
        'Supporting details answer who, what, where, when, why, and how.',
        'A good summary retells the big point in one clear sentence.'
      ],
      quiz: [
        { q: 'What is the "main idea" of a story or paragraph?', opts: ['The longest word', 'The central point the author wants you to understand', 'The author\'s age', 'The last illustration'], ans: 1, exp: 'The main idea is the overarching message.' },
        { q: 'What do "supporting details" do in a paragraph?', opts: ['Contradict the main idea', 'Provide facts and proof that explain the main idea', 'End the book', 'Number the pages'], ans: 1, exp: 'Supporting details reinforce the main idea.' },
        { q: 'If a text talks about honeycombs, queens, and pollen, what is the main topic?', opts: ['Airplanes', 'Life of honeybees', 'School lunches', 'River fish'], ans: 1, exp: 'The details center around bees and their work.' },
        { q: 'Where is the topic sentence most commonly located in informational texts?', opts: ['In the middle of nowhere', 'Near the beginning of the paragraph', 'Only on the title page', 'In the glossary'], ans: 1, exp: 'Authors usually introduce main points early.' },
        { q: 'What is a helpful question to ask yourself to find the main idea?', opts: ['"What is this mostly about?"', '"What page am I on?"', '"Is it lunch time?"', '"How many commas are there?"'], ans: 0, exp: 'Asking what the text is mostly about reveals the main idea.' }
      ]
    }
  ],
  science: [
    {
      title: 'Animal Habitats & Living Environments',
      subtitle: 'Deserts, rainforests, oceans, arctic tundra, and adaptations',
      quickInfo: 'A habitat provides an animal with food, water, shelter, and space. Animals develop physical adaptations to thrive in their specific environments.',
      keyConcepts: [
        'Habitats include aquatic (oceans, freshwater) and terrestrial (forests, deserts, arctic).',
        'Camouflage allows animals to blend into their surroundings for protection.',
        'Polar bears have thick blubber and fur; desert camels store fat in humps.'
      ],
      quiz: [
        { q: 'What habitat is extremely cold with ice, snow, and freezing winds?', opts: ['Tropical rainforest', 'Arctic tundra', 'Sahara desert', 'Savanna'], ans: 1, exp: 'The Arctic tundra is a frozen biome.' },
        { q: 'How does camouflage help an animal in its habitat?', opts: ['It makes loud noises', 'It helps the animal blend into its environment to hide', 'It helps it swim faster', 'It changes its diet'], ans: 1, exp: 'Camouflage conceals animals from predators or prey.' },
        { q: 'Which animal is specially adapted to live in dry, hot deserts?', opts: ['Polar bear', 'Camel', 'Penguin', 'Dolphin'], ans: 1, exp: 'Camels withstand heat and water scarcity.' },
        { q: 'What four things must every healthy habitat provide for wildlife?', opts: ['Money, toys, cars, and candy', 'Food, water, shelter, and space', 'Fire, ice, rocks, and mud', 'Electricity, glass, wood, and iron'], ans: 1, exp: 'Food, water, shelter, and space are vital habitat components.' },
        { q: 'Where do freshwater fish like trout live?', opts: ['Deep salty ocean', 'Rivers, streams, and lakes', 'Dry sand dunes', 'Mountain caves'], ans: 1, exp: 'Trout inhabit freshwater bodies.' }
      ]
    },
    {
      title: 'States of Matter: Solids, Liquids & Gases',
      subtitle: 'Mass, volume, melting, freezing, and evaporation transitions',
      quickInfo: 'Matter is anything that has mass and takes up space. It exists in three primary states: solids (fixed shape), liquids (takes container shape), and gases (fills entire container).',
      keyConcepts: [
        'Solids have a definite shape and volume (e.g., an ice cube).',
        'Liquids flow and take the shape of their container (e.g., liquid water).',
        'Gases spread out to fill any space completely (e.g., water vapor, air).'
      ],
      quiz: [
        { q: 'Which state of matter keeps its own definite shape and volume?', opts: ['Gas', 'Liquid', 'Solid', 'Steam'], ans: 2, exp: 'Solids maintain their shape.' },
        { q: 'What happens when liquid water freezes at 0°C (32°F)?', opts: ['It turns into solid ice', 'It turns into air', 'It disappears', 'It boils into smoke'], ans: 0, exp: 'Freezing converts liquid water into solid ice.' },
        { q: 'What state of matter is the helium inside a floating balloon?', opts: ['Solid', 'Liquid', 'Gas', 'Rock'], ans: 2, exp: 'Helium is a light gas.' },
        { q: 'What process changes liquid water into water vapor when heated?', opts: ['Freezing', 'Evaporation', 'Melting', 'Condensation'], ans: 1, exp: 'Evaporation converts liquid to vapor.' },
        { q: 'Which of the following is an example of a liquid?', opts: ['A wooden block', 'Milk in a glass', 'A cotton shirt', 'An iron nail'], ans: 1, exp: 'Milk is a flowing liquid.' }
      ]
    },
    {
      title: 'Weather Patterns, Clouds and the Water Cycle',
      subtitle: 'Evaporation, condensation, precipitation, rain gauges, and thermometers',
      quickInfo: 'Water continuously cycles between Earth and sky through evaporation, condensation into clouds, and precipitation as rain or snow.',
      keyConcepts: [
        'The water cycle: Evaporation → Condensation → Precipitation → Collection.',
        'Clouds form when water vapor cools and condenses on tiny dust particles.',
        'A thermometer measures temperature in degrees Celsius or Fahrenheit.'
      ],
      quiz: [
        { q: 'What is the term for rain, snow, sleet, or hail falling from clouds?', opts: ['Evaporation', 'Condensation', 'Precipitation', 'Collection'], ans: 2, exp: 'Precipitation is moisture falling from the sky.' },
        { q: 'What instrument is used to measure how hot or cold the air is?', opts: ['Barometer', 'Thermometer', 'Rain gauge', 'Wind vane'], ans: 1, exp: 'Thermometers measure temperature.' },
        { q: 'What forms in the sky when water vapor cools down and condenses?', opts: ['Stars', 'Clouds', 'Rainbows', 'Air currents'], ans: 1, exp: 'Clouds are made of condensed water droplets.' },
        { q: 'Where does the energy that powers Earth\'s water cycle come from?', opts: ['The Sun', 'The ocean floor', 'Electric power plants', 'The Moon'], ans: 0, exp: 'Solar radiation drives the water cycle.' },
        { q: 'What instrument collects and measures the amount of rainfall?', opts: ['A rain gauge', 'A compass', 'A microscope', 'A speedometer'], ans: 0, exp: 'Rain gauges measure precipitation depth.' }
      ]
    }
  ],
  'social-studies': [
    {
      title: 'Local Geography: Maps, Cardinal Directions and Landmarks',
      subtitle: 'North, South, East, West, compass rose, map legends, and scale',
      quickInfo: 'Maps are visual representations of places viewed from above. A compass rose points North, South, East, and West, while a map legend explains symbols.',
      keyConcepts: [
        'The four cardinal directions are North, South, East, and West (Never Eat Soggy Waffles).',
        'A map key or legend explains what icons and colors represent.',
        'Landmarks are recognizable natural or man-made features that help guide travel.'
      ],
      quiz: [
        { q: 'Which tool on a map shows cardinal directions (N, S, E, W)?', opts: ['Scale bar', 'Compass rose', 'Index', 'Title box'], ans: 1, exp: 'A compass rose indicates orientation.' },
        { q: 'If you face North, which direction is directly behind you?', opts: ['East', 'West', 'South', 'Northwest'], ans: 2, exp: 'South is opposite to North.' },
        { q: 'What part of a map explains what symbols and colors stand for?', opts: ['Map legend or key', 'Border line', 'Copyright notice', 'Margin'], ans: 0, exp: 'The map key or legend decodes symbols.' },
        { q: 'The sun rises in the __ and sets in the __.', opts: ['West; East', 'East; West', 'North; South', 'South; North'], ans: 1, exp: 'Earth\'s rotation causes the sun to rise in the East and set in the West.' },
        { q: 'What is an example of a man-made landmark?', opts: ['A tall city hall tower', 'A naturally formed mountain', 'A rushing river', 'A forest clearing'], ans: 0, exp: 'City hall is constructed by humans.' }
      ]
    },
    {
      title: 'Communities and Cultural Traditions',
      subtitle: 'Urban, suburban, and rural communities, festivals, and heritage',
      quickInfo: 'People live in urban (cities), suburban (towns near cities), or rural (countryside) areas. Communities celebrate cultural traditions through food, music, and festivals.',
      keyConcepts: [
        'Urban areas are densely populated cities with skyscrapers and subways.',
        'Rural areas have open fields, farms, and spread-out homes.',
        'Cultural traditions pass down stories, recipes, and celebrations through generations.'
      ],
      quiz: [
        { q: 'What kind of community features tall skyscrapers, subways, and lots of traffic?', opts: ['Rural community', 'Urban community (city)', 'Suburban neighborhood', 'Wilderness'], ans: 1, exp: 'Urban environments have high population density.' },
        { q: 'What is a rural community characterized by?', opts: ['Farmland, open space, and barns', 'Crowded sidewalks', 'Airports on every block', 'Underground subway trains'], ans: 0, exp: 'Rural areas feature agricultural lands and spaciousness.' },
        { q: 'Why do families and communities celebrate cultural traditions?', opts: ['To forget the past', 'To share heritage, values, and memories across generations', 'Because laws force them', 'To avoid cooking'], ans: 1, exp: 'Traditions preserve heritage and foster belonging.' },
        { q: 'What is a suburban community?', opts: ['A town or neighborhood located just outside a major city', 'The deepest ocean floor', 'A deserted desert', 'A mountaintop village'], ans: 0, exp: 'Suburbs surround urban centers.' },
        { q: 'Which of the following is a cultural celebration?', opts: ['Harvest festivals and Thanksgiving', 'Taking a math test', 'Buying groceries', 'Charging a phone'], ans: 0, exp: 'Harvest festivals celebrate cultural heritage.' }
      ]
    },
    {
      title: 'Goods and Services: Producers and Consumers',
      subtitle: 'Economic needs vs wants, making choices, and scarcity',
      quickInfo: 'Goods are physical items you can touch, like books and apples. Services are helpful actions people perform, like hair cutting and dentistry. Producers make goods; consumers buy them.',
      keyConcepts: [
        'Goods: tangible products (shoes, pencils, bread).',
        'Services: work performed for others (bus driving, medical care, teaching).',
        'Needs (food, shelter, water) are essential for survival; wants are nice to have.'
      ],
      quiz: [
        { q: 'Which of the following is an example of a "good"?', opts: ['A haircut by a barber', 'A loaf of fresh bread', 'A guitar lesson', 'A doctor\'s checkup'], ans: 1, exp: 'Bread is a physical product (a good).' },
        { q: 'Which of the following is an example of a "service"?', opts: ['A pair of running shoes', 'A fire truck washing', 'A new bicycle', 'A toy robot'], ans: 1, exp: 'Washing or repairing is a service performed for someone.' },
        { q: 'What is someone called who buys and uses goods or services?', opts: ['A producer', 'A consumer', 'An inventor', 'A supplier'], ans: 1, exp: 'Consumers purchase and utilize products.' },
        { q: 'What is the economic difference between a "need" and a "want"?', opts: ['Needs are required for survival; wants are desires that make life enjoyable', 'Wants are free', 'Needs are only for pets', 'There is no difference'], ans: 0, exp: 'Needs are essential for survival.' },
        { q: 'Who is a "producer" in an economy?', opts: ['Someone who throws away food', 'Someone who makes goods or provides services for sale', 'Someone who only buys things', 'A bank customer'], ans: 1, exp: 'Producers supply goods and services.' }
      ]
    }
  ],
  art: [
    {
      title: 'Secondary Colors and Decorative Patterns',
      subtitle: 'Mixing green, orange, and violet, and designing geometric motifs',
      quickInfo: 'Secondary colors (green, orange, purple) are created by mixing equal parts of two primary colors. Artists repeat shapes and colors to form decorative patterns.',
      keyConcepts: [
        'Yellow + Blue = Green, Red + Yellow = Orange, Blue + Red = Violet/Purple.',
        'Patterns use repeating elements (AB, ABB, ABC) to create visual rhythm.',
        'Decorative patterns appear in cultural textiles, mosaics, and architecture.'
      ],
      quiz: [
        { q: 'Which colors are the three secondary colors?', opts: ['Red, Yellow, Blue', 'Green, Orange, Purple', 'Black, White, Gray', 'Pink, Cyan, Brown'], ans: 1, exp: 'Green, orange, and purple are secondary colors.' },
        { q: 'What creates an art pattern?', opts: ['Splashing random paint once', 'Repeating colors, lines, or shapes in a regular order', 'Drawing a single dot', 'Erasing the paper'], ans: 1, exp: 'Repetition forms rhythmic patterns.' },
        { q: 'If an artist paints: Blue circle, Red square, Blue circle, Red square, what comes next?', opts: ['Green star', 'Blue circle', 'Yellow line', 'Black dot'], ans: 1, exp: 'Following the AB pattern, blue circle is next.' },
        { q: 'Which two primary colors mix together to create orange paint?', opts: ['Blue and Red', 'Yellow and Red', 'Blue and Yellow', 'Black and White'], ans: 1, exp: 'Red + Yellow = Orange.' },
        { q: 'Where can you commonly see decorative geometric patterns in everyday life?', opts: ['In woven rugs, wallpaper, and tiled floors', 'Only in outer space', 'Nowhere', 'Inside clouds'], ans: 0, exp: 'Rugs and tiles showcase decorative patterns.' }
      ]
    },
    {
      title: 'Texture in Art: Smooth, Rough and Bumpy',
      subtitle: 'Visual texture vs tactile texture, rubbing, and crayon frottage',
      quickInfo: 'Tactile texture is how an object actually feels when touched. Visual texture is how an artist tricks the eye into thinking a surface is rough, fur-like, or shiny.',
      keyConcepts: [
        'Frottage is making a rubbing over a textured surface (like tree bark or coins).',
        'Tactile texture can be felt with fingertips; visual texture is drawn illusion.',
        'Short hatching strokes can make an animal look soft and furry.'
      ],
      quiz: [
        { q: 'What art technique involves placing paper over a leaf and rubbing it with a crayon?', opts: ['Sculpture', 'Frottage (rubbing)', 'Ceramics', 'Oil painting'], ans: 1, exp: 'Frottage captures surface textures through rubbing.' },
        { q: 'What is the difference between visual texture and tactile texture?', opts: ['Tactile is real feeling; visual is painted to look like a texture', 'Visual is louder', 'Tactile is invisible', 'They are identical'], ans: 0, exp: 'Tactile is physically felt; visual is an optical effect.' },
        { q: 'Which object has a prickly, rough texture?', opts: ['A silk pillow', 'A cactus or pinecone', 'A glass window', 'A smooth pebble'], ans: 1, exp: 'Cacti and pinecones have rough textures.' },
        { q: 'How can an artist illustrate the soft fur of a kitten?', opts: ['By drawing one giant black circle', 'Using tiny, soft, overlapping pencil strokes', 'Pouring water on the drawing', 'Cutting holes in the paper'], ans: 1, exp: 'Fine strokes simulate fine hairs and fur.' },
        { q: 'What does sandpaper feel like?', opts: ['Slippery and wet', 'Rough and abrasive', 'Fluffy', 'Sticky'], ans: 1, exp: 'Sandpaper has a coarse, rough texture.' }
      ]
    },
    {
      title: 'Clay Sculptures and 3D Modeling',
      subtitle: 'Pinch pots, coils, slabs, and three-dimensional forms',
      quickInfo: 'Unlike flat 2D drawings, sculptures are 3D objects with height, width, and depth that can be viewed from all sides. Clay is pinched, rolled, and shaped.',
      keyConcepts: [
        '3D forms have height, width, and depth (volume).',
        'Pinch pots are made by pressing your thumb into a clay ball and pinching walls.',
        'Coils are long clay snakes rolled out to build layered pottery walls.'
      ],
      quiz: [
        { q: 'What dimension does a 3D sculpture have that a 2D drawing does not?', opts: ['Color', 'Depth (thickness)', 'Lines', 'Title'], ans: 1, exp: '3D objects have depth and volume.' },
        { q: 'How is a basic clay "pinch pot" started?', opts: ['By smashing clay with a hammer', 'By rolling a ball of clay and pressing your thumb into the center', 'By cutting clay with scissors', 'By painting water on dry clay'], ans: 1, exp: 'Thumb indentation starts a pinch pot.' },
        { q: 'What are long, rolled-out ropes of clay used for pottery called?', opts: ['Coils', 'Slabs', 'Brushes', 'Ribbons'], ans: 0, exp: 'Coils are clay ropes used to build forms.' },
        { q: 'Why is wet clay fired inside a special high-heat kiln oven?', opts: ['To melt it into water', 'To harden it permanently into ceramic pottery', 'To change its smell', 'To freeze it'], ans: 1, exp: 'Firing hardens clay into durable ceramic.' },
        { q: 'Can you walk all the way around a freestanding 3D sculpture to see all sides?', opts: ['Yes, sculptures can be observed from 360 degrees', 'No, only one side exists', 'Only with special glasses', 'Never'], ans: 0, exp: 'Sculptures are fully three-dimensional.' }
      ]
    }
  ],
  pe: [
    {
      title: 'Static & Dynamic Balance and Gymnastic Stances',
      subtitle: 'One-foot balances, airplane stance, traveling beam walks, and core stability',
      quickInfo: 'Static balance is holding still in one position (like the tree pose). Dynamic balance is maintaining control while moving along a line or balance beam.',
      keyConcepts: [
        'Core muscles in the abdomen and back support upright equilibrium.',
        'Fixing eyes on a steady, stationary spot improves balance.',
        'Arms outstretched like airplane wings provide lateral counter-balance.'
      ],
      quiz: [
        { q: 'What is the difference between static balance and dynamic balance?', opts: ['Static is balancing while standing still; dynamic is balancing while moving', 'Static uses shoes', 'Dynamic is sitting down', 'They are the exact same'], ans: 0, exp: 'Static is still; dynamic is in motion.' },
        { q: 'What should your arms do to help steady your body on a narrow line?', opts: ['Cross tightly behind your back', 'Extend outward to the sides like airplane wings', 'Keep hands inside your pockets', 'Cover your eyes'], ans: 1, exp: 'Outstretched arms act as counter-balances.' },
        { q: 'Where should your eyes focus to keep from toppling over in a one-foot stance?', opts: ['At your wiggling toes', 'At a steady, still point straight ahead', 'At the ceiling fan', 'Close both eyes tightly'], ans: 1, exp: 'A visual anchor point maintains balance.' },
        { q: 'Which gymnastics stance looks like an airplane gliding?', opts: ['Balancing on one foot with the other leg extended backward and arms out', 'Curling into a tight ball on the mat', 'Lying flat on your back', 'A headstand'], ans: 0, exp: 'The arabesque/airplane pose extends one leg back.' },
        { q: 'Which muscle group is most important for maintaining body balance?', opts: ['Ear muscles', 'Core abdominal and back muscles', 'Fingertip muscles', 'Tongue muscles'], ans: 1, exp: 'Core strength stabilizes the torso and balance.' }
      ]
    },
    {
      title: 'Relay Races, Agility Drills and Spatial Boundaries',
      subtitle: 'Baton passing, shuttle runs, zigzag cone drills, and teamwork',
      quickInfo: 'Relay races teach speed and team cooperation. Runners stay in their assigned lanes and pass a baton cleanly without dropping it.',
      keyConcepts: [
        'A relay team consists of runners who take turns sprinting their legs.',
        'The baton must be passed securely hand-to-hand inside the exchange zone.',
        'Staying inside your marked lane prevents collisions with other runners.'
      ],
      quiz: [
        { q: 'What object is carried and handed off between runners in a relay race?', opts: ['A volleyball', 'A relay baton', 'A heavy dumbbell', 'A stop sign'], ans: 1, exp: 'A baton is passed from runner to runner.' },
        { q: 'What should a runner do immediately after receiving the baton?', opts: ['Drop it on the grass', 'Sprint forward toward the finish line or next teammate', 'Run backward', 'Sit down to catch their breath'], ans: 1, exp: 'The runner accelerates forward.' },
        { q: 'Why do track runners have assigned lanes marked with white lines?', opts: ['To look pretty', 'To prevent runners from colliding into each other', 'To make races slower', 'Lanes are optional'], ans: 1, exp: 'Lanes provide safe, dedicated running paths.' },
        { q: 'What physical skill is improved by running zigzag patterns through cones?', opts: ['Agility and quick directional change', 'Sleepiness', 'Singing voice', 'Typing speed'], ans: 0, exp: 'Cone drills develop foot agility.' },
        { q: 'What is good sportsmanship when your relay team does not win first place?', opts: ['Shouting angrily at teammates', 'Congratulating the winners and cheering everyone\'s effort', 'Refusing to shake hands', 'Throwing the baton'], ans: 1, exp: 'Good sportsmanship congratulates competitors.' }
      ]
    },
    {
      title: 'Nutrition: The Five Food Groups and Healthy Snacking',
      subtitle: 'Fruits, vegetables, proteins, grains, dairy, and hydration',
      quickInfo: 'A balanced diet fuels active growing bodies. We need nutrients from all five food groups: fruits, vegetables, grains, proteins, and dairy.',
      keyConcepts: [
        'Fruits and vegetables provide essential vitamins, minerals, and dietary fiber.',
        'Proteins (eggs, beans, fish, meat) repair and build growing muscles.',
        'Whole grains provide steady, long-lasting energy for school and play.'
      ],
      quiz: [
        { q: 'Which food belongs to the protein group and helps build strong muscles?', opts: ['An apple', 'Eggs, beans, and fish', 'White sugar', 'A butter cracker'], ans: 1, exp: 'Eggs, beans, and lean meat are rich in protein.' },
        { q: 'What nutrient from milk, yogurt, and cheese strengthens teeth and bones?', opts: ['Sugar', 'Calcium', 'Salt', 'Caffeine'], ans: 1, exp: 'Calcium fortifies bone density.' },
        { q: 'Which of the following makes a nutritious, energizing afternoon snack?', opts: ['A candy bar and soda', 'Apple slices with peanut butter', 'A bag of salty chips', 'Frosting from a can'], ans: 1, exp: 'Fruit and nut butter provide fiber and healthy energy.' },
        { q: 'Why are whole grains (like brown rice and oatmeal) better than sugary sweets?', opts: ['They provide steady, long-lasting energy without sugar crashes', 'They taste like cardboard', 'They have no nutrients', 'They are completely white'], ans: 0, exp: 'Complex grains release glucose gradually.' },
        { q: 'How many servings of colorful fruits and vegetables should we eat every day?', opts: ['0 servings', 'At least 4 to 5 servings', '50 servings', 'Only once a month'], ans: 1, exp: 'Nutritional guidelines recommend 4-5 servings daily.' }
      ]
    }
  ],
  'computer-science': [
    {
      title: 'Keyboard Operations: Spacebar, Enter, Backspace & Shift',
      subtitle: 'Touch typing posture, homerow awareness, uppercase letters, and deleting errors',
      quickInfo: 'Keyboards have special operational keys: Spacebar inserts a gap between words, Enter creates a new line, Backspace deletes errors to the left, and Shift types capital letters.',
      keyConcepts: [
        'The Spacebar is the long horizontal key pressed with thumbs.',
        'Backspace erases characters to the immediate left of the cursor.',
        'Holding Shift while pressing a letter produces an uppercase capital letter.'
      ],
      quiz: [
        { q: 'Which is the longest key on a computer keyboard?', opts: ['The Enter key', 'The Spacebar', 'The Shift key', 'The Escape key'], ans: 1, exp: 'The spacebar spans the bottom row.' },
        { q: 'What key moves your typing cursor down to a fresh new line?', opts: ['Backspace', 'The Enter (or Return) key', 'The Spacebar', 'The Tab key'], ans: 1, exp: 'Enter begins a new line.' },
        { q: 'If you make a spelling typo, which key erases the letter to the left?', opts: ['Backspace', 'Spacebar', 'Enter', 'Caps Lock'], ans: 0, exp: 'Backspace deletes backward.' },
        { q: 'How do you type a capital letter "A" without turning on Caps Lock?', opts: ['Press Spacebar twice', 'Hold down the Shift key while pressing "A"', 'Click the mouse', 'Unplug the keyboard'], ans: 1, exp: 'Shift capitalizes individual letters.' },
        { q: 'What is the correct posture when sitting at a computer keyboard?', opts: ['Slouching down low', 'Sitting upright with feet flat on the floor and wrists relaxed', 'Lying on your stomach', 'Typing with elbows'], ans: 1, exp: 'Ergonomic posture prevents back and wrist fatigue.' }
      ]
    },
    {
      title: 'Step-by-Step Sequencing and Algorithmic Instructions',
      subtitle: 'Order of operations, giving clear directions, and debugging routines',
      quickInfo: 'An algorithm is a step-by-step list of instructions to complete a task. Computers follow instructions in the exact order they are written.',
      keyConcepts: [
        'Computers follow instructions literally in precise sequential order.',
        'If an instruction is out of order (e.g., putting shoes on before socks), an error occurs.',
        'Debugging is finding and fixing mistakes in an algorithmic sequence.'
      ],
      quiz: [
        { q: 'What is an "algorithm" in computer science?', opts: ['A computer monitor', 'A step-by-step list of instructions to solve a problem', 'A broken mouse', 'A video game score'], ans: 1, exp: 'An algorithm is an ordered procedural routine.' },
        { q: 'What happens if a recipe leaves out the step of turning on the oven?', opts: ['The cake bakes automatically', 'The cake will not bake (the algorithm fails)', 'The cake cooks faster', 'Nothing happens'], ans: 1, exp: 'Missing algorithmic steps cause failure.' },
        { q: 'What is the correct sequence for brushing teeth?', opts: ['Rinse → Brush → Put paste on brush', 'Put paste on brush → Brush teeth for 2 minutes → Spit and rinse', 'Spit → Put brush away → Put paste', 'Brush dry → Eat food'], ans: 1, exp: 'Order matters in sequential routines.' },
        { q: 'What does "debugging" mean in computer programming?', opts: ['Spraying bug spray on the screen', 'Finding and fixing errors in code instructions', 'Deleting all files', 'Playing games'], ans: 1, exp: 'Debugging is the process of locating and correcting bugs.' },
        { q: 'Can a computer guess what you meant if you give it the wrong instruction?', opts: ['Yes, computers read your mind', 'No, computers follow only the exact instructions given', 'Sometimes on weekends', 'Only if you speak loudly'], ans: 1, exp: 'Computers strictly execute exact instructions.' }
      ]
    },
    {
      title: 'Digital Devices: Comparing Tablets, Laptops and Desktops',
      subtitle: 'Touchscreens, trackpads, portability, battery power, and peripherals',
      quickInfo: 'Different computing devices serve different needs. Tablets use touchscreens and are portable; laptops have fold-up screens and keyboards; desktops stay on desks with separate towers.',
      keyConcepts: [
        'Tablets use finger gestures and virtual keyboards for portability.',
        'Laptops are battery-powered portable computers with built-in trackpads.',
        'Desktop computers require continuous wall power and separate monitors.'
      ],
      quiz: [
        { q: 'Which digital device is designed with a touchscreen and easily carried in one hand?', opts: ['A desktop computer tower', 'A tablet (e.g., iPad)', 'A mainframe', 'A heavy CRT monitor'], ans: 1, exp: 'Tablets are mobile touchscreen devices.' },
        { q: 'What makes a laptop computer portable?', opts: ['It has wheels', 'It has a built-in battery, fold-up screen, and keyboard', 'It only works outdoors', 'It is made of helium'], ans: 1, exp: 'Internal batteries and compact folding design enable portability.' },
        { q: 'Where do desktop computers get their electrical power?', opts: ['From the wind', 'Plugged directly into a wall power outlet', 'From sunshine only', 'They need no power'], ans: 1, exp: 'Desktops plug into AC power mains.' },
        { q: 'What flat touch area on a laptop replaces a separate mouse?', opts: ['The webcam', 'The trackpad / touchpad', 'The CD tray', 'The speaker grille'], ans: 1, exp: 'Trackpads detect fingertip navigation.' },
        { q: 'Why is it important to shut down or sleep digital devices when not in use?', opts: ['To save battery life and reduce electricity waste', 'To make them disappear', 'To delete your homework', 'Because screens get lonely'], ans: 0, exp: 'Power management saves energy and extends hardware life.' }
      ]
    }
  ],
  music: [
    {
      title: 'Rhythm Patterns: Quarter Notes and Eighth Notes',
      subtitle: 'Ta and Ti-Ti rhythms, clapping beats, and musical note values',
      quickInfo: 'Notes have duration. A quarter note (Ta) receives 1 beat. Two eighth notes (Ti-Ti) divide that 1 beat into two equal halves.',
      keyConcepts: [
        'A quarter note (♩) = 1 steady beat (pronounced "Ta").',
        'A pair of eighth notes (♫) = 2 sounds sharing 1 beat (pronounced "Ti-Ti").',
        'A quarter rest () represents 1 beat of silence.'
      ],
      quiz: [
        { q: 'How many beats does a standard quarter note (♩) receive in 4/4 time?', opts: ['Half a beat', '1 beat', '2 beats', '4 beats'], ans: 1, exp: 'A quarter note lasts 1 beat.' },
        { q: 'What rhythm syllables represent two eighth notes followed by a quarter note?', opts: ['Ta Ta Ta', 'Ti-Ti Ta', 'Shh Shh Ta', 'Largo Largo'], ans: 1, exp: '♫ is Ti-Ti; ♩ is Ta.' },
        { q: 'What does a musical "rest" tell the musician to do?', opts: ['Play as loudly as possible', 'Be silent for the duration of that beat', 'Sing out of tune', 'Close the piano'], ans: 1, exp: 'Rests represent measured silences.' },
        { q: 'How many eighth notes fit into the time value of one quarter note?', opts: ['1', '2', '4', '8'], ans: 1, exp: 'Two eighth notes equal one quarter note.' },
        { q: 'What is the regular repeating pulse you tap your foot to in music?', opts: ['The pitch', 'The beat / pulse', 'The treble clef', 'The volume knob'], ans: 1, exp: 'The beat is the heartbeat of the music.' }
      ]
    },
    {
      title: 'Dynamics: Loud (Forte) and Soft (Piano)',
      subtitle: 'Italian dynamic markings, crescendos, and expressing musical emotion',
      quickInfo: 'Dynamics describe the volume of music. Forte (f) means loud and energetic, while Piano (p) means quiet and gentle.',
      keyConcepts: [
        'Forte (f) = loud; Piano (p) = soft/quiet.',
        'Crescendo (<) means gradually getting louder.',
        'Decrescendo / Diminuendo (>) means gradually getting softer.'
      ],
      quiz: [
        { q: 'In music notation, what does the Italian word "Forte" (f) mean?', opts: ['Very fast', 'Loud', 'Very soft', 'Silent'], ans: 1, exp: 'Forte means loud.' },
        { q: 'What does the letter "p" (Piano) indicate in a musical score?', opts: ['Play softly / quietly', 'Play rapidly', 'Stop playing', 'Play on the piano only'], ans: 0, exp: 'Piano indicates soft volume.' },
        { q: 'What is it called when music gradually gets louder and louder?', opts: ['Staccato', 'Crescendo', 'Decrescendo', 'Adagio'], ans: 1, exp: 'Crescendo is a gradual increase in volume.' },
        { q: 'Why do composers use different dynamics in their songs?', opts: ['To confuse the musicians', 'To create emotion, drama, and contrast', 'Because ink is expensive', 'To test hearing aids'], ans: 1, exp: 'Dynamics communicate mood and dramatic intensity.' },
        { q: 'What does a decrescendo mark instruct musicians to do?', opts: ['Gradually play softer', 'Speed up the tempo', 'Jump off the stage', 'Play backwards'], ans: 0, exp: 'Decrescendo indicates getting softer.' }
      ]
    },
    {
      title: 'Call-and-Response Folk Singing Traditions',
      subtitle: 'Leader and chorus, sea shanties, work songs, and community singing',
      quickInfo: 'Call-and-response is a musical conversation where a leader sings a line (call) and the group replies with a repeating phrase (response).',
      keyConcepts: [
        'Found widely in African traditional music, gospel, sea shanties, and blues.',
        'Encourages community participation without requiring everyone to memorize every verse.',
        'The chorus answers in unison with consistent rhythm and pitch.'
      ],
      quiz: [
        { q: 'What is the musical structure where a solo leader sings and a group answers?', opts: ['Solo concerto', 'Call-and-response', 'Silent meditation', 'Duet'], ans: 1, exp: 'The leader calls; the group responds.' },
        { q: 'Where are call-and-response singing traditions historically prominent?', opts: ['African traditional folk music, gospel, and work songs', 'In silent libraries', 'Only in outer space', 'Underwater only'], ans: 0, exp: 'Rooted in African, gospel, and maritime folk songs.' },
        { q: 'Who sings the "call" in call-and-response music?', opts: ['The entire audience at once', 'The lead singer / song leader', 'The drummer only', 'Nobody'], ans: 1, exp: 'The song leader delivers the call.' },
        { q: 'How does call-and-response help a group of people working together?', opts: ['It helps them coordinate effort, keep rhythm, and lift spirits', 'It puts everyone to sleep', 'It makes work harder', 'It causes arguments'], ans: 0, exp: 'Work songs synchronized physical labor.' },
        { q: 'Can the response in a call-and-response song be clapping instead of singing?', opts: ['Yes, rhythmic clapping can serve as the response', 'No, rules forbid clapping', 'Only on Sundays', 'Never'], ans: 0, exp: 'Clapping and percussion can be the response.' }
      ]
    }
  ],
  crs: [
    {
      title: 'Noah\'s Ark and the Covenant of the Rainbow',
      subtitle: 'The great flood, building the wooden ark, preserving animal pairs, and God\'s promise',
      quickInfo: 'God instructed faithful Noah to build a great ark of gopher wood to preserve his family and animal pairs from the flood. God set a rainbow in the sky as a covenant of peace.',
      keyConcepts: [
        'Noah demonstrated righteous obedience when others turned away from God.',
        'God sent pairs of living creatures into the ark for preservation.',
        'The rainbow is God\'s everlasting sign that the earth will never again be destroyed by a flood.'
      ],
      quiz: [
        { q: 'Why did God choose Noah to build the ark?', opts: ['He was the richest man', 'Noah was righteous, faithful, and obedient to God', 'He was a ship captain', 'Nobody else was home'], ans: 1, exp: 'Noah walked faithfully with God.' },
        { q: 'What sign did God place in the clouds as a promise never to flood the whole earth again?', opts: ['A thunderstorm', 'A bright rainbow', 'A comet', 'A crescent moon'], ans: 1, exp: 'The rainbow represents God\'s covenant in Genesis 9.' },
        { q: 'What bird did Noah send out that returned with a fresh olive leaf in its beak?', opts: ['An eagle', 'A dove', 'A seagull', 'A raven'], ans: 1, exp: 'The dove returned with an olive leaf showing dry land.' },
        { q: 'What kind of wood did Noah use to build the ark?', opts: ['Gopher wood', 'Oak only', 'Balsa wood', 'Plastic'], ans: 0, exp: 'Scripture records the ark was built of gopher wood.' },
        { q: 'What mountain did Noah\'s ark come to rest upon after waters receded?', opts: ['Mount Sinai', 'Mount Ararat', 'Mount Carmel', 'Mount Zion'], ans: 1, exp: 'The ark rested on the mountains of Ararat.' }
      ]
    },
    {
      title: 'The Nativity: The Birth of Jesus in Bethlehem',
      subtitle: 'Mary, Joseph, the manger in Bethlehem, angelic chorus, and the shepherds',
      quickInfo: 'Jesus was born in Bethlehem in Judea. Because there was no room in the inn, Mary wrapped baby Jesus in swaddling cloths and laid Him in a humble manger.',
      keyConcepts: [
        'The Angel Gabriel announced the birth of the Savior to Mary.',
        'Jesus was born in a humble stable/manger in Bethlehem.',
        'Angels appeared to shepherds in the night fields proclaiming good tidings of great joy.'
      ],
      quiz: [
        { q: 'In which town was Jesus Christ born?', opts: ['Jerusalem', 'Bethlehem', 'Nazareth', 'Rome'], ans: 1, exp: 'Jesus was born in Bethlehem of Judea.' },
        { q: 'Why was baby Jesus placed in a humble manger (feeding trough)?', opts: ['Because the family preferred barns', 'Because there was no room for them in the traveler\'s inn', 'Because mangers are made of gold', 'They were lost'], ans: 1, exp: 'There was no room at the inn.' },
        { q: 'To whom did angels first appear at night announcing the birth of Jesus?', opts: ['Roman emperors', 'Shepherds watching their flocks in fields', 'Merchants in Egypt', 'Fishermen at sea'], ans: 1, exp: 'Shepherds keeping night watch received the angelic message.' },
        { q: 'What angel brought the message to Mary that she would give birth to God\'s Son?', opts: ['Michael', 'Gabriel', 'Raphael', 'Uriel'], ans: 1, exp: 'The Angel Gabriel was sent by God to Mary.' },
        { q: 'What did the angelic host sing when praising God in the sky?', opts: ['"Glory to God in the highest, and on earth peace, good will toward men"', '"Sleep well tonight"', '"Long live the kings"', '"Winter has arrived"'], ans: 0, exp: 'Luke 2:14 records the angelic hymn of peace.' }
      ]
    },
    {
      title: 'Kindness, Generosity and Helping the Elderly',
      subtitle: 'Respecting grandparents, sharing meals, and compassionate service',
      quickInfo: 'Christian teachings place deep value on honoring elders and helping the vulnerable. Generosity and gentle respect reflect the love of Christ in family and society.',
      keyConcepts: [
        'Honoring elders brings wisdom and community harmony.',
        'Cheerfully sharing food, toys, and resources is commended by God.',
        'Small acts of kindness to the lonely or sick are done as unto the Lord.'
      ],
      quiz: [
        { q: 'How should young children treat grandparents and older members of the community?', opts: ['With respect, patience, and helpfulness', 'Ignore them', 'Interrupt them constantly', 'Argue loudly'], ans: 0, exp: 'Scripture instructs honor and kindness toward elders.' },
        { q: 'What does the Bible teach about sharing with those who have less than us?', opts: ['God loves a cheerful giver who shares generously', 'Keep everything for yourself', 'Only share broken things', 'Demand payment'], ans: 0, exp: 'Generosity and cheerful giving are valued in Scripture.' },
        { q: 'What is a practical way to show kindness to an elderly neighbor?', opts: ['Helping carry groceries or opening doors politely', 'Playing loud music near their window', 'Running through their flower bed', 'Hiding their mail'], ans: 0, exp: 'Assisting with everyday tasks demonstrates love.' },
        { q: 'According to Jesus, how does God view kindness shown to the needy or sick?', opts: ['It is a waste of time', 'It is as if you did it directly unto Jesus Himself', 'It only matters if you take photos', 'It has no spiritual value'], ans: 1, exp: 'Matthew 25 teaches that serving others serves Christ.' },
        { q: 'What fruit of the Spirit describes treating others gently and charitably?', opts: ['Anger', 'Kindness and gentleness', 'Pride', 'Greed'], ans: 1, exp: 'Galatians 5 lists kindness and gentleness as fruits of the Spirit.' }
      ]
    }
  ]
};
