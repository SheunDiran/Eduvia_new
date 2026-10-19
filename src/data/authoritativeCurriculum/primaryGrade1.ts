import { GradeAuthoritativeMap } from './types';

export const GRADE_1_CURRICULUM: GradeAuthoritativeMap = {
  math: [
    {
      title: 'Counting to 100 & Number Patterns',
      subtitle: 'Recognizing numbers, skip counting by 2s, 5s, and 10s',
      quickInfo: 'Counting to 100 builds foundational number sense. We learn to count forward, backward, and spot patterns like tens and ones.',
      keyConcepts: [
        'Place value shows digits in the tens and ones place.',
        'Skip counting by 2s (2, 4, 6, 8) helps group items quickly.',
        'Odd numbers cannot be paired evenly; even numbers end in 0, 2, 4, 6, 8.'
      ],
      quiz: [
        { q: 'What number comes directly after 49?', opts: ['48', '50', '51', '60'], ans: 1, exp: 'Counting sequentially forward: 48, 49, 50.' },
        { q: 'Which of the following is an even number?', opts: ['7', '9', '12', '15'], ans: 2, exp: '12 ends in 2 and can be divided into two equal groups of 6.' },
        { q: 'What is the next number in the pattern: 5, 10, 15, 20, __?', opts: ['22', '24', '25', '30'], ans: 2, exp: 'The sequence counts up by 5s. 20 + 5 = 25.' },
        { q: 'In the number 34, what digit is in the tens place?', opts: ['3', '4', '7', '34'], ans: 0, exp: 'In 34, 3 represents 3 tens (30) and 4 represents 4 ones.' },
        { q: 'Which number is smaller than 20?', opts: ['21', '25', '18', '30'], ans: 2, exp: '18 comes before 20 on the number line.' }
      ]
    },
    {
      title: 'Addition and Subtraction Within 20',
      subtitle: 'Combining sets, taking away, and number bonds to 10 and 20',
      quickInfo: 'Addition is putting groups together to find the total sum. Subtraction is taking items away to find the difference.',
      keyConcepts: [
        'The plus sign (+) means add; the minus sign (-) means subtract.',
        'Number bonds to 10 include 7 + 3, 6 + 4, 8 + 2.',
        'Zero added to any number leaves that number unchanged.'
      ],
      quiz: [
        { q: 'What is 7 + 5?', opts: ['10', '11', '12', '13'], ans: 2, exp: '7 + 5 = 12.' },
        { q: 'If you have 9 apples and eat 3, how many apples remain?', opts: ['5', '6', '7', '12'], ans: 1, exp: '9 - 3 = 6 apples remaining.' },
        { q: 'What number makes this true: 6 + __ = 10?', opts: ['3', '4', '5', '6'], ans: 1, exp: '6 + 4 = 10.' },
        { q: 'What is 15 - 0?', opts: ['0', '1', '14', '15'], ans: 3, exp: 'Subtracting 0 from any number leaves it unchanged.' },
        { q: 'What is 8 + 8?', opts: ['14', '15', '16', '18'], ans: 2, exp: 'Doubles fact: 8 + 8 = 16.' }
      ]
    },
    {
      title: '2D Shapes and Sorting Objects',
      subtitle: 'Circles, triangles, squares, rectangles, and grouping by attributes',
      quickInfo: '2D flat shapes have straight sides and corners, while circles have a continuous curved edge with no corners.',
      keyConcepts: [
        'A triangle always has 3 straight sides and 3 corners.',
        'A square has 4 equal straight sides and 4 square corners.',
        'Objects can be categorized and sorted by color, size, or number of sides.'
      ],
      quiz: [
        { q: 'How many sides does a triangle have?', opts: ['2', '3', '4', '5'], ans: 1, exp: 'A triangle has exactly 3 sides.' },
        { q: 'Which shape has 4 equal sides and 4 corners?', opts: ['Circle', 'Rectangle', 'Square', 'Oval'], ans: 2, exp: 'A square has 4 equal sides and 4 right angles.' },
        { q: 'How many corners does a circle have?', opts: ['0', '1', '2', '4'], ans: 0, exp: 'A circle is completely round with no corners.' },
        { q: 'A stop sign is shaped like an octagon. How many sides does an octagon have?', opts: ['6', '7', '8', '10'], ans: 2, exp: 'Octa means eight; an octagon has 8 sides.' },
        { q: 'Which shape looks like a round coin or the full moon?', opts: ['Triangle', 'Square', 'Circle', 'Star'], ans: 2, exp: 'Circles are round.' }
      ]
    }
  ],
  'english-lang': [
    {
      title: 'Phonics, Alphabet & CVC Words',
      subtitle: 'Vowel sounds, consonant blends, and sounding out simple words',
      quickInfo: 'Phonics connects printed letters with their spoken sounds. CVC words (Consonant-Vowel-Consonant) like cat and dog form our earliest reading steps.',
      keyConcepts: [
        'The five vowels are A, E, I, O, and U.',
        'CVC words blend beginning, middle, and ending sounds.',
        'Rhyming words end with the same sound (e.g., bat, cat, hat).'
      ],
      quiz: [
        { q: 'Which letter is a vowel?', opts: ['B', 'E', 'K', 'T'], ans: 1, exp: 'The vowels are A, E, I, O, U.' },
        { q: 'Which word is a CVC word?', opts: ['cat', 'play', 'blue', 'tree'], ans: 0, exp: 'C-A-T is Consonant-Vowel-Consonant.' },
        { q: 'Which word rhymes with "sun"?', opts: ['sit', 'run', 'sad', 'top'], ans: 1, exp: '"Sun" and "run" share the /un/ ending sound.' },
        { q: 'What sound does the word "dog" start with?', opts: ['/b/', '/d/', '/g/', '/p/'], ans: 1, exp: '"Dog" begins with the letter D sound /d/.' },
        { q: 'What is the missing letter in c_p to make a word for drinking?', opts: ['u', 'z', 'q', 'x'], ans: 0, exp: 'C-U-P spells cup.' }
      ]
    },
    {
      title: 'Capital Letters, Spaces & Periods',
      subtitle: 'Sentence boundaries, finger spaces, and punctuation basics',
      quickInfo: 'Every complete sentence begins with a capital letter, uses finger spaces between words, and ends with a period, exclamation mark, or question mark.',
      keyConcepts: [
        'Always capitalize the first letter of a sentence and the word "I".',
        'Proper nouns (names of people, pets, cities) always take capital letters.',
        'A statement sentence concludes with a period (full stop).'
      ],
      quiz: [
        { q: 'What should every sentence start with?', opts: ['A number', 'A capital letter', 'A comma', 'A lowercase letter'], ans: 1, exp: 'Sentences always begin with a capital letter.' },
        { q: 'Which sentence has correct punctuation?', opts: ['the dog ran', 'The dog ran.', 'The dog ran,', 'the Dog Ran.'], ans: 1, exp: 'Starts with capital T and ends with a period.' },
        { q: 'What mark goes at the end of a question?', opts: ['Period (.)', 'Question mark (?)', 'Exclamation mark (!)', 'Comma (,)'], ans: 1, exp: 'Questions require a question mark (?).' },
        { q: 'Which word should always be capitalized no matter where it is?', opts: ['the', 'and', 'I', 'with'], ans: 2, exp: 'The pronoun "I" is always capitalized.' },
        { q: 'Why do we leave spaces between words when writing?', opts: ['To make writing take longer', 'So words do not run together and can be read easily', 'Because teachers say so', 'To use more paper'], ans: 1, exp: 'Spaces separate words for readability.' }
      ]
    },
    {
      title: 'Story Reading: Characters & Settings',
      subtitle: 'Identifying who is in the story and where the story takes place',
      quickInfo: 'Every story has characters (who the story is about) and a setting (where and when the story happens).',
      keyConcepts: [
        'Characters can be people, talking animals, or magical creatures.',
        'The setting tells the location (e.g., a forest, a school) and time (e.g., long ago, yesterday).',
        'Illustrations in a picture book provide visual clues about the story.'
      ],
      quiz: [
        { q: 'Who or what is a "character" in a story?', opts: ['The price of the book', 'The people or animals in the story', 'The cover page', 'The page number'], ans: 1, exp: 'Characters are the individuals or creatures in a story.' },
        { q: 'In Goldilocks and the Three Bears, who are the characters?', opts: ['Goldilocks and the bears', 'The forest trees only', 'The soup bowls', 'The bed makers'], ans: 0, exp: 'Goldilocks and the three bears are the characters.' },
        { q: 'What is the "setting" of a story?', opts: ['The author\'s favorite food', 'Where and when the story takes place', 'The number of words in a chapter', 'The font color'], ans: 1, exp: 'Setting describes the time and place.' },
        { q: 'If a story takes place in a castle in winter, that is the story\'s:', opts: ['Character', 'Setting', 'Punctuation', 'Title'], ans: 1, exp: 'A castle in winter is the setting.' },
        { q: 'What is the beginning of a story usually used for?', opts: ['Ending the mystery', 'Introducing the characters and setting', 'Listing references', 'Giving grades'], ans: 1, exp: 'Story openings introduce who and where.' }
      ]
    }
  ],
  science: [
    {
      title: 'Living vs Non-Living Things',
      subtitle: 'Growth, nutrition, reproduction, and movement characteristics',
      quickInfo: 'Living things grow, need food and water, breathe, and reproduce. Non-living things do not grow or need nourishment.',
      keyConcepts: [
        'Living things (plants and animals) need food, water, air, and sunlight.',
        'Non-living things (rocks, plastic toys, desks) cannot grow or reproduce.',
        'Plants are living even though they do not walk around.'
      ],
      quiz: [
        { q: 'Which of the following is a living thing?', opts: ['A wooden pencil', 'A green tree', 'A toy car', 'A plastic ruler'], ans: 1, exp: 'Trees grow, absorb water, and reproduce.' },
        { q: 'What do living animals need to survive?', opts: ['Batteries and electricity', 'Food, clean water, and air', 'Gasoline', 'Paint'], ans: 1, exp: 'All living animals need water, food, and air.' },
        { q: 'Which is a non-living object?', opts: ['A butterfly', 'A puppy', 'A river stone', 'A rose bush'], ans: 2, exp: 'A stone does not grow, breathe, or reproduce.' },
        { q: 'Can a bicycle grow bigger on its own?', opts: ['Yes, if you feed it', 'No, because it is a non-living object', 'Yes, in summer', 'Only on weekends'], ans: 1, exp: 'Non-living objects do not grow.' },
        { q: 'Do plants breathe or exchange gases?', opts: ['No, plants are dead', 'Yes, plants exchange gases through tiny pores', 'Only at night', 'Never'], ans: 1, exp: 'Plants exchange carbon dioxide and oxygen.' }
      ]
    },
    {
      title: 'Parts of a Plant & Seeds',
      subtitle: 'Roots, stems, leaves, flowers, and the plant life cycle',
      quickInfo: 'Plants are made up of roots (which take in water from soil), stems (which transport nutrients), leaves (which catch sunlight), and flowers (which produce seeds).',
      keyConcepts: [
        'Roots anchor the plant firmly in soil and absorb water and minerals.',
        'Leaves capture sunlight to make food through photosynthesis.',
        'Seeds sprout when they have warmth, moisture, and air.'
      ],
      quiz: [
        { q: 'Which part of the plant absorbs water from the soil?', opts: ['Flowers', 'Leaves', 'Roots', 'Bark'], ans: 2, exp: 'Roots drink in water and nutrients from the soil.' },
        { q: 'What part of the plant holds it upright and transports water?', opts: ['Petal', 'Stem', 'Seed coat', 'Fruit'], ans: 1, exp: 'The stem acts as a pipeline carrying water upward.' },
        { q: 'What do green leaves need from the sky to make food?', opts: ['Moonlight', 'Sunlight', 'Snow', 'Smoke'], ans: 1, exp: 'Leaves use sunlight to produce energy.' },
        { q: 'What grows into a new plant when planted in moist soil?', opts: ['A dry stick', 'A healthy seed', 'A pebble', 'A leaf fragment'], ans: 1, exp: 'Seeds germinate into new baby plants.' },
        { q: 'Which plant part often has colorful petals to attract bees?', opts: ['The root', 'The flower', 'The stem', 'The underground tuber'], ans: 1, exp: 'Flowers attract pollinators with bright colors.' }
      ]
    },
    {
      title: 'The Five Human Senses',
      subtitle: 'Sight, hearing, smell, taste, and touch sensory organs',
      quickInfo: 'Humans explore and stay safe in the world using five senses: eyes for sight, ears for hearing, nose for smell, tongue for taste, and skin for touch.',
      keyConcepts: [
        'Eyes detect light and color; ears receive sound vibrations.',
        'The tongue tastes sweet, salty, sour, bitter, and umami.',
        'Skin is our largest organ, detecting pressure, heat, cold, and pain.'
      ],
      quiz: [
        { q: 'Which organ do we use to see colors and shapes?', opts: ['Ears', 'Nose', 'Eyes', 'Hands'], ans: 2, exp: 'Our eyes provide the sense of sight.' },
        { q: 'Which sense alerts you that a bell is ringing?', opts: ['Smell', 'Hearing', 'Taste', 'Touch'], ans: 1, exp: 'We hear sounds with our ears.' },
        { q: 'Which body part detects whether lemonade is sweet or sour?', opts: ['Tongue', 'Elbow', 'Nose', 'Fingernail'], ans: 0, exp: 'Taste buds on the tongue detect sweet, sour, and salty.' },
        { q: 'What sense warns you that a stove burner is very hot?', opts: ['Sight only', 'Touch (skin)', 'Smell only', 'Taste'], ans: 1, exp: 'Nerve endings in our skin detect heat.' },
        { q: 'How many primary senses do human beings have?', opts: ['3', '4', '5', '10'], ans: 2, exp: 'The five senses are sight, hearing, smell, taste, and touch.' }
      ]
    }
  ],
  'social-studies': [
    {
      title: 'My Family, Home & School Community',
      subtitle: 'Roles in the home, cooperation, and school rules',
      quickInfo: 'Families provide love and support. At school, teachers and classmates work together following rules that keep everyone safe and happy.',
      keyConcepts: [
        'A nuclear family includes parents and children; an extended family includes grandparents and cousins.',
        'Cooperation and helping with household chores keeps homes peaceful.',
        'School rules ensure fairness, safety, and focused learning.'
      ],
      quiz: [
        { q: 'What is a nuclear family made up of?', opts: ['Only grandparents', 'Parents and their children', 'The entire school', 'Neighbors'], ans: 1, exp: 'A nuclear family consists of parents and children.' },
        { q: 'Why do schools have rules like "walk, don\'t run in hallways"?', opts: ['To make recess shorter', 'To keep every student safe from injury', 'To be noisy', 'Rules do not matter'], ans: 1, exp: 'Rules protect students and maintain order.' },
        { q: 'How can children contribute positively at home?', opts: ['Leaving toys everywhere', 'Helping tidy up their rooms and listening respectfully', 'Arguing with parents', 'Refusing meals'], ans: 1, exp: 'Helping out and respecting family members builds a healthy home.' },
        { q: 'Who are members of an extended family?', opts: ['Classmates only', 'Aunts, uncles, cousins, and grandparents', 'Police officers', 'Librarians'], ans: 1, exp: 'Extended families include relatives beyond parents and siblings.' },
        { q: 'What does cooperation mean?', opts: ['Working together to accomplish a goal', 'Playing alone silently', 'Demanding to win every game', 'Hiding school books'], ans: 0, exp: 'Cooperation is teamwork and mutual support.' }
      ]
    },
    {
      title: 'Helpers in Our Neighborhood',
      subtitle: 'Firefighters, police officers, doctors, and community workers',
      quickInfo: 'Community helpers provide essential services. Doctors and nurses keep us healthy, firefighters put out fires, and teachers educate us.',
      keyConcepts: [
        'Emergency workers (firefighters, paramedics, police) respond when called.',
        'Sanitation workers keep streets clean and hygienic.',
        'Every community job contributes to public welfare and safety.'
      ],
      quiz: [
        { q: 'Who helps put out dangerous fires in our neighborhoods?', opts: ['Chefs', 'Firefighters', 'Mail carriers', 'Artists'], ans: 1, exp: 'Firefighters extinguish fires and rescue people.' },
        { q: 'Who examines you when you are sick and prescribes medicine?', opts: ['A mechanic', 'A doctor or pediatrician', 'A pilot', 'A farmer'], ans: 1, exp: 'Doctors diagnose illnesses and provide healthcare.' },
        { q: 'What community helper delivers letters and packages to our doors?', opts: ['A mail carrier / postal worker', 'A lifeguard', 'A librarian', 'A police officer'], ans: 0, exp: 'Postal workers deliver mail.' },
        { q: 'Why are sanitation workers essential to a city?', opts: ['They collect trash to keep neighborhoods healthy and clean', 'They sell groceries', 'They build airplanes', 'They test water pipes'], ans: 0, exp: 'Waste management prevents disease and pollution.' },
        { q: 'What emergency number is called for immediate police, fire, or ambulance help in North America?', opts: ['000', '911', '411', '123'], ans: 1, exp: '911 is the universal emergency response code.' }
      ]
    },
    {
      title: 'Symbols of Our Nation & Flags',
      subtitle: 'National flag colors, pledges, anthems, and monuments',
      quickInfo: 'National symbols represent a country\'s values, history, and people. We stand respectfully for the national anthem and honor our national flag.',
      keyConcepts: [
        'National flags use specific colors and emblems to convey values.',
        'The national anthem is a country\'s official patriotic song.',
        'National monuments honor key historical leaders and milestones.'
      ],
      quiz: [
        { q: 'How should people show respect when their national anthem plays?', opts: ['Run around noisily', 'Stand respectfully at attention', 'Turn on loud music', 'Leave the room'], ans: 1, exp: 'Standing respectfully honors the nation.' },
        { q: 'What does a national flag represent?', opts: ['A commercial brand', 'A country, its people, and its history', 'A soccer club only', 'A toy store'], ans: 1, exp: 'Flags symbolize national identity and heritage.' },
        { q: 'What bird is the national symbol of the United States?', opts: ['The Bald Eagle', 'The Pigeon', 'The Hummingbird', 'The Flamingo'], ans: 0, exp: 'The Bald Eagle is the national bird of the USA.' },
        { q: 'What do stars or stripes on national flags often represent?', opts: ['Types of candy', 'States, provinces, or founding historical eras', 'Favorite animals', 'Weather patterns'], ans: 1, exp: 'Flag symbols commonly represent provinces or states.' },
        { q: 'Why do nations create public monuments and memorials?', opts: ['To remember important leaders, heroes, and events', 'To block traffic', 'To hide buildings', 'Because they have extra stone'], ans: 0, exp: 'Monuments preserve cultural and historical memory.' }
      ]
    }
  ],
  art: [
    {
      title: 'Primary Colors & Color Mixing',
      subtitle: 'Red, blue, and yellow foundations, and making secondary colors',
      quickInfo: 'Red, yellow, and blue are primary colors that cannot be made by mixing other colors. Mixing them produces orange, green, and purple.',
      keyConcepts: [
        'Primary colors: Red, Yellow, Blue.',
        'Red + Yellow = Orange; Blue + Yellow = Green; Red + Blue = Purple.',
        'White makes a color lighter (a tint); black makes it darker (a shade).'
      ],
      quiz: [
        { q: 'Which of the following is a primary color?', opts: ['Green', 'Orange', 'Blue', 'Purple'], ans: 2, exp: 'Red, yellow, and blue are the three primary colors.' },
        { q: 'What secondary color do you get by mixing yellow and blue?', opts: ['Orange', 'Green', 'Purple', 'Brown'], ans: 1, exp: 'Yellow + Blue = Green.' },
        { q: 'What color do you get when you mix red and yellow?', opts: ['Green', 'Purple', 'Orange', 'Pink'], ans: 2, exp: 'Red + Yellow = Orange.' },
        { q: 'What color is produced by mixing red and blue?', opts: ['Purple (violet)', 'Green', 'Yellow', 'Black'], ans: 0, exp: 'Red + Blue = Purple.' },
        { q: 'What happens when you add white paint to red paint?', opts: ['It turns into green', 'It turns into pink', 'It turns into black', 'It disappears'], ans: 1, exp: 'White lightens red into pink.' }
      ]
    },
    {
      title: 'Lines and Shapes in Drawing',
      subtitle: 'Straight, curved, zigzag, and dashed lines creating pictures',
      quickInfo: 'Artists use different types of lines—wavy, straight, zigzag, and spiral—to draw shapes and show movement in artwork.',
      keyConcepts: [
        'Lines can be horizontal (flat), vertical (tall), or diagonal (slanted).',
        'When a line connects back to where it started, it encloses a shape.',
        'Zigzag lines can show energy, lightning, or sharp grass.'
      ],
      quiz: [
        { q: 'What kind of line goes straight up and down like a tree trunk?', opts: ['Horizontal line', 'Vertical line', 'Spiral line', 'Dotted line'], ans: 1, exp: 'Vertical lines go straight up and down.' },
        { q: 'What happens when a continuous line connects back to its start?', opts: ['It erases the paper', 'It creates a closed shape', 'It becomes invisible', 'It breaks the crayon'], ans: 1, exp: 'Connecting lines creates closed geometric or organic shapes.' },
        { q: 'What kind of line looks like ocean waves?', opts: ['Zigzag line', 'Wavy curved line', 'Dashed line', 'Square line'], ans: 1, exp: 'Curved, wavy lines depict waves.' },
        { q: 'Which line type shows sharp mountains or lightning bolts?', opts: ['Gentle curve', 'Zigzag line', 'Circle', 'Flat line'], ans: 1, exp: 'Zigzag lines have sharp angular turns.' },
        { q: 'What line lies flat like the horizon where sky meets the sea?', opts: ['Horizontal line', 'Vertical line', 'Twisted line', 'Diagonal line'], ans: 0, exp: 'Horizontal lines run left to right like the horizon.' }
      ]
    },
    {
      title: 'Collage & Paper Crafts',
      subtitle: 'Tearing, cutting with safety scissors, and layering paper compositions',
      quickInfo: 'Collage is an art technique where paper, fabric, and textures are cut or torn and glued onto a surface to build a layered picture.',
      keyConcepts: [
        'Safety scissors should always be carried with blades facing downward.',
        'Layering background paper first allows foreground details to pop.',
        'Different paper textures (glossy, matte, crinkled) add tactile interest.'
      ],
      quiz: [
        { q: 'What is an artwork made by gluing cut or torn paper onto paper called?', opts: ['A sculpture', 'A collage', 'A ceramic pot', 'A fresco'], ans: 1, exp: 'A collage is made by assembling various materials.' },
        { q: 'How should you safely hold scissors when walking across the classroom?', opts: ['Blades pointing up in the air', 'Closed with blades held safely in your palm', 'Open and waving', 'By the tip'], ans: 1, exp: 'Always walk with blades closed and held downwards.' },
        { q: 'When making a landscape collage, which layer goes down first?', opts: ['The foreground flowers', 'The sky background', 'The glue on your fingers', 'The frame'], ans: 1, exp: 'Background elements are glued down first.' },
        { q: 'What tool is used to stick paper shapes onto cardboard?', opts: ['A paint scraper', 'A glue stick or paste', 'A ruler', 'An eraser'], ans: 1, exp: 'Glue adheres materials together.' },
        { q: 'What does "texture" in an art collage mean?', opts: ['The smell of the glue', 'How the surface looks or feels (smooth, bumpy, rough)', 'The weight of the paper', 'The price of the scissors'], ans: 1, exp: 'Texture describes how surfaces feel.' }
      ]
    }
  ],
  pe: [
    {
      title: 'Locomotor Movements: Running, Hopping & Skipping',
      subtitle: 'Gross motor agility, directional movement, and spatial awareness',
      quickInfo: 'Locomotor skills travel from one point to another. Hopping uses one foot, jumping uses two feet, and skipping combines a step and a hop.',
      keyConcepts: [
        'Hopping is taking off and landing on the same single foot.',
        'Jumping uses two feet for take-off and landing with bent knees.',
        'Spatial awareness means moving safely without bumping into peers.'
      ],
      quiz: [
        { q: 'What foot pattern is used when "hopping"?', opts: ['Taking off and landing on the same foot', 'Using both feet together', 'Walking backwards', 'Crawling'], ans: 0, exp: 'Hopping is done on one foot only.' },
        { q: 'What is the best way to land safely after a jump?', opts: ['With stiff, locked straight knees', 'With soft, bent knees to absorb impact', 'On your heels only', 'Falling flat'], ans: 1, exp: 'Bent knees cushion the joints upon landing.' },
        { q: 'Which movement combines a step forward and a quick hop?', opts: ['Galloping', 'Skipping', 'Running', 'Sliding'], ans: 1, exp: 'Skipping is a step-hop, step-hop rhythm.' },
        { q: 'What does having good "spatial awareness" mean in PE class?', opts: ['Looking at outer space', 'Knowing where your body is so you do not collide with others', 'Running as fast as possible with eyes closed', 'Standing completely still'], ans: 1, exp: 'Spatial awareness prevents collisions.' },
        { q: 'Why do athletes warm up their muscles before sprinting?', opts: ['To prepare muscles and prevent cramps or strains', 'To get tired quickly', 'To waste gym time', 'To make shoes shiny'], ans: 0, exp: 'Warming up increases blood flow and prevents injury.' }
      ]
    },
    {
      title: 'Hand-Eye Coordination: Catching & Throwing',
      subtitle: 'Underhand tosses, target aim, two-handed catching, and focus',
      quickInfo: 'Throwing and catching require hand-eye coordination. We step with the opposite foot when throwing underhand and bring hands together like a basket to catch.',
      keyConcepts: [
        'Step forward with the opposite foot when throwing a ball.',
        'Keep eyes fixed on the ball from the moment it leaves the thrower\'s hand.',
        'Catch using two hands with fingers relaxed and fingers spread.'
      ],
      quiz: [
        { q: 'Which foot should step forward when you throw a ball with your right hand?', opts: ['Right foot', 'Left foot (opposite foot)', 'Both feet together', 'Neither foot'], ans: 1, exp: 'Stepping with the opposite foot provides balance and momentum.' },
        { q: 'Where should your eyes be focused when a ball is tossed to you?', opts: ['At your shoes', 'On the ball the entire flight', 'At the scoreboard', 'At the gym ceiling'], ans: 1, exp: 'Tracking the ball visually ensures successful catching.' },
        { q: 'How should your hands be shaped when catching a ball near your chest?', opts: ['Tight fists', 'Two hands open together creating a soft basket', 'Hands behind your back', 'One hand in your pocket'], ans: 1, exp: 'Open hands absorb the catch securely.' },
        { q: 'In an underhand toss, where does the arm swing start?', opts: ['Behind the ear', 'Down low past the hip and swing forward smoothly', 'Above the head', 'Spinning around'], ans: 1, exp: 'Underhand throws swing pendulum-style from below the waist.' },
        { q: 'What helps you improve hand-eye coordination over time?', opts: ['Practice and repetitive drill exercises', 'Skipping gym class', 'Watching TV in the dark', 'Wearing heavy boots'], ans: 0, exp: 'Repetitive motor practice strengthens coordination.' }
      ]
    },
    {
      title: 'Healthy Habits, Rest & Hydration',
      subtitle: 'Drinking water, sleeping 10 hours, and fueling an active body',
      quickInfo: 'Our bodies need plenty of clean water, healthy fruits and vegetables, and 10 to 11 hours of sleep each night to grow strong.',
      keyConcepts: [
        'Water keeps our cells hydrated and cools the body through sweat.',
        'Children need 9 to 11 hours of restful sleep every night for brain growth.',
        'Eating a rainbow of fruits and vegetables supplies essential vitamins.'
      ],
      quiz: [
        { q: 'What is the healthiest beverage to drink after active physical exercise?', opts: ['Sugary soda', 'Clean water', 'Cough syrup', 'Coffee'], ans: 1, exp: 'Water restores hydration without artificial sugars.' },
        { q: 'About how many hours of sleep should a Grade 1 child get each night?', opts: ['3 to 4 hours', '9 to 11 hours', '18 hours', '1 hour'], ans: 1, exp: 'Primary school children require 9 to 11 hours of sleep.' },
        { q: 'Why does your body sweat during strenuous exercise?', opts: ['To change skin color', 'To cool the body down and regulate temperature', 'To make you slippery', 'To lose your clothes'], ans: 1, exp: 'Evaporation of sweat cools the skin.' },
        { q: 'What food group gives our body calcium to grow strong bones and teeth?', opts: ['Candy bars', 'Dairy (milk, yogurt) and fortified greens', 'Potato chips', 'Fried dough'], ans: 1, exp: 'Calcium from milk and greens strengthens bones.' },
        { q: 'Why is washing hands with soap before eating an important health habit?', opts: ['It removes germs and bacteria that cause illness', 'It makes food taste like soap', 'It wastes water', 'It softens fingernails'], ans: 0, exp: 'Handwashing prevents infectious diseases.' }
      ]
    }
  ],
  'computer-science': [
    {
      title: 'Parts of a Computer (Hardware)',
      subtitle: 'Monitor, keyboard, mouse, CPU, and audio speakers',
      quickInfo: 'A computer is made of hardware you can see and touch: the screen displays information, the keyboard inputs letters, and the mouse points.',
      keyConcepts: [
        'Hardware is any physical computer component you can touch.',
        'The monitor (screen) is an output device displaying pictures and text.',
        'The CPU (Central Processing Unit) acts as the brain that processes instructions.'
      ],
      quiz: [
        { q: 'Which part of a computer displays images, videos, and words?', opts: ['The mouse', 'The monitor (screen)', 'The keyboard', 'The power cord'], ans: 1, exp: 'The monitor displays visual output.' },
        { q: 'What physical part do you use to type letters, numbers, and words?', opts: ['Monitor', 'Keyboard', 'Microphone', 'Webcam'], ans: 1, exp: 'The keyboard is used for typing text input.' },
        { q: 'Which device is called the "brain" of the computer system?', opts: ['The mouse pad', 'The CPU (Central Processing Unit)', 'The speaker', 'The printer paper'], ans: 1, exp: 'The CPU processes computational instructions.' },
        { q: 'Which of these is an example of computer hardware?', opts: ['A computer game app', 'A physical computer mouse', 'A web browser webpage', 'An email message'], ans: 1, exp: 'Hardware consists of physical, tangible components.' },
        { q: 'What device allows you to hear music or speech from a computer?', opts: ['Speakers or headphones', 'The keyboard', 'The mouse wheel', 'The power supply'], ans: 0, exp: 'Speakers output sound.' }
      ]
    },
    {
      title: 'Using the Mouse: Point, Click & Drag',
      subtitle: 'Left-click, right-click, scrolling, and dragging digital objects',
      quickInfo: 'A computer mouse controls the on-screen cursor arrow. We left-click to select, double-click to open, and drag to move items across the desktop.',
      keyConcepts: [
        'The left mouse button is used to click, select, and activate buttons.',
        'Dragging means holding down the left button while sliding the mouse.',
        'The mouse cursor changes appearance (pointer, hand, text bar) based on context.'
      ],
      quiz: [
        { q: 'What does the cursor on your computer screen look like when pointing?', opts: ['A flashing square', 'An arrow pointer', 'A spinning coin', 'A question mark'], ans: 1, exp: 'The standard cursor is an arrow.' },
        { q: 'What mouse action is used to open a program icon on the desktop?', opts: ['Double-clicking the left button quickly', 'Shaking the mouse vigorously', 'Pressing the power strip', 'Turning off the monitor'], ans: 0, exp: 'Double-clicking launches desktop applications.' },
        { q: 'How do you "click and drag" an object on screen?', opts: ['Click and walk away', 'Hold down the mouse button while moving the mouse across the pad', 'Throw the mouse', 'Press the keyboard spacebar'], ans: 1, exp: 'Holding the button down moves the selected item.' },
        { q: 'What part of the mouse scrolls a web page up and down smoothly?', opts: ['The scroll wheel in the center', 'The USB plug', 'The mouse cable', 'The battery door'], ans: 0, exp: 'The central wheel scrolls documents.' },
        { q: 'Why is it important to rest your palm gently on the mouse?', opts: ['To prevent hand strain and improve control', 'To make the mouse sleep', 'To heat the plastic', 'To click faster'], ans: 0, exp: 'Proper ergonomics prevents hand and wrist fatigue.' }
      ]
    },
    {
      title: 'Internet Safety: Keeping Passwords Private',
      subtitle: 'Strong passwords, digital privacy, and asking adults for help',
      quickInfo: 'The internet is a vast digital library. We must protect our privacy by never sharing real passwords, addresses, or phone numbers with strangers online.',
      keyConcepts: [
        'Passwords are like secret keys—never share them with friends or strangers.',
        'Only share personal details (address, school name) with trusted parents or teachers.',
        'If something confusing, scary, or unfamiliar appears online, tell an adult immediately.'
      ],
      quiz: [
        { q: 'Who is the only person you should share your computer password with?', opts: ['Your best friend at recess', 'A friendly stranger online', 'Your parent, guardian, or teacher', 'A video game chat room'], ans: 2, exp: 'Passwords should only be shared with parents or trusted guardians.' },
        { q: 'Which of the following is considered personal information that should stay private?', opts: ['Your home address and phone number', 'Your favorite color', 'The color of your shoes', 'Your favorite cartoon show'], ans: 0, exp: 'Addresses and phone numbers must remain private.' },
        { q: 'What should you do if an unfamiliar or frightening pop-up appears on screen?', opts: ['Click all the flashing buttons', 'Immediately ask a parent or teacher for help', 'Turn off all classroom lights', 'Cry silently'], ans: 1, exp: 'Always alert a trusted adult when encountering strange content.' },
        { q: 'What makes a password harder for hackers to guess?', opts: ['Using "12345"', 'Using your own first name', 'A mix of letters, numbers, and symbols', 'Using "password"'], ans: 2, exp: 'Mixed characters make strong, resilient passwords.' },
        { q: 'Is it safe to agree to meet an online stranger in real life?', opts: ['Yes, if they seem nice', 'Never, always protect yourself and tell a parent', 'Only on weekends', 'Yes, at the park'], ans: 1, exp: 'Never agree to meet strangers met online.' }
      ]
    }
  ],
  music: [
    {
      title: 'Pitch: High Sounds & Low Sounds',
      subtitle: 'Bird chirps vs lion roars, ascending scales, and treble pitch',
      quickInfo: 'Pitch describes how high or low a musical sound is. A tiny bird chirp is high-pitched, while a big tuba or thunder rumble is low-pitched.',
      keyConcepts: [
        'High pitch is produced by fast vibrations; low pitch by slow vibrations.',
        'Smaller instruments (piccolo, violin) generally produce higher pitches.',
        'Larger instruments (bass drum, double bass, tuba) produce lower pitches.'
      ],
      quiz: [
        { q: 'Which sound is an example of a high-pitched sound?', opts: ['A roaring lion', 'A tiny bird tweeting', 'A bass drum booming', 'A heavy freight train'], ans: 1, exp: 'Bird tweets are high-pitched vibrations.' },
        { q: 'Which instrument produces very low, deep notes in an orchestra?', opts: ['Tuba', 'Flute', 'Triangle', 'Piccolo'], ans: 0, exp: 'The tuba produces deep bass notes.' },
        { q: 'What determines the pitch of a sound vibration?', opts: ['How bright the stage lights are', 'The speed of the sound waves/vibrations', 'The color of the instrument', 'The weight of the musician'], ans: 1, exp: 'Faster vibration frequencies produce higher pitches.' },
        { q: 'When singing do-re-mi up the scale, what happens to the pitch?', opts: ['The pitch gets lower', 'The pitch gets higher (ascending)', 'The music stops', 'It becomes silent'], ans: 1, exp: 'Singing up the scale raises the pitch.' },
        { q: 'Does a short, thin guitar string make a higher sound than a thick, loose string?', opts: ['Yes, shorter, tighter strings vibrate faster and sound higher', 'No, all strings sound identical', 'It makes no sound at all', 'Only on Tuesdays'], ans: 0, exp: 'Tighter, shorter strings produce higher pitch.' }
      ]
    },
    {
      title: 'Tempo: Fast (Presto) & Slow (Largo)',
      subtitle: 'Beat speed, walking tempo (Andante), and clapping rhythms',
      quickInfo: 'Tempo is the speed of the musical beat. Music can move fast like a galloping horse (presto) or slow like a walking turtle (largo).',
      keyConcepts: [
        'Tempo is measured in beats per minute (BPM).',
        'Largo means slow and broad; Presto means very quick and lively.',
        'A steady beat provides the rhythmic heartbeat of any song.'
      ],
      quiz: [
        { q: 'What musical word describes how fast or slow a song is played?', opts: ['Pitch', 'Tempo', 'Volume', 'Alphabet'], ans: 1, exp: 'Tempo is the musical term for speed.' },
        { q: 'Which animal moves with a slow "Largo" tempo?', opts: ['A cheetah sprinting', 'A giant tortoise lumbering along', 'A hummingbird beating its wings', 'A racehorse'], ans: 1, exp: 'A tortoise represents a slow, deliberate tempo.' },
        { q: 'What does the music term "Presto" mean?', opts: ['Very slow and sleepy', 'Very fast and energetic', 'Silent', 'Out of tune'], ans: 1, exp: 'Presto indicates a fast, lively tempo.' },
        { q: 'What instrument in an orchestra helps keep the steady beat for everyone?', opts: ['The snare drum or timpani', 'The microphone wire', 'The music stand', 'The velvet curtain'], ans: 0, exp: 'Drums anchor the steady pulse and beat.' },
        { q: 'What is "Andante" tempo compared to in everyday human movement?', opts: ['A rocket launching', 'A comfortable walking pace', 'A frozen statue', 'A sprint race'], ans: 1, exp: 'Andante translates to a gentle walking pace.' }
      ]
    },
    {
      title: 'Instrument Families: Strings, Winds, Brass & Percussion',
      subtitle: 'Violins, flutes, trumpets, drums, and how they make sound',
      quickInfo: 'Orchestral instruments belong to four main families based on how they make sound: Strings (plucked/bowed), Woodwinds (blown air), Brass (buzzing lips), and Percussion (struck).',
      keyConcepts: [
        'Strings: Violin, Cello, Guitar, Harp (vibrating strings).',
        'Brass: Trumpet, French Horn, Trombone, Tuba (musician buzzes lips into mouthpiece).',
        'Percussion: Snare drum, Xylophone, Cymbals (struck, shaken, or scraped).'
      ],
      quiz: [
        { q: 'Which instrument belongs to the Strings family?', opts: ['Flute', 'Violin', 'Trombone', 'Snare drum'], ans: 1, exp: 'The violin has four strings played with a bow.' },
        { q: 'How does a brass player produce sound on a trumpet?', opts: ['By shaking wooden sticks', 'By buzzing their lips against a metal mouthpiece', 'By plucking nylon strings', 'By tapping the bell'], ans: 1, exp: 'Lip buzzing vibrates air inside brass instruments.' },
        { q: 'Which instrument is a member of the Percussion family?', opts: ['Clarinet', 'Xylophone', 'Cello', 'Oboe'], ans: 1, exp: 'A xylophone is struck with mallets, making it percussion.' },
        { q: 'Which woodwind instrument is made of metal today but still uses blowing breath?', opts: ['The Flute', 'The Harp', 'The Piano', 'The Banjo'], ans: 0, exp: 'The modern flute is a woodwind instrument played by blowing across an embouchure.' },
        { q: 'How many primary instrument families make up a classical symphony orchestra?', opts: ['2', '4', '8', '20'], ans: 1, exp: 'The four families are Strings, Woodwinds, Brass, and Percussion.' }
      ]
    }
  ],
  crs: [
    {
      title: 'The Story of Creation: God Makes the World',
      subtitle: 'The seven days of creation, light, oceans, animals, and humanity',
      quickInfo: 'In Genesis, God created the heavens and the earth, separating light from darkness, forming dry land, plants, sea creatures, animals, and human beings.',
      keyConcepts: [
        'God spoke light into existence on the first day ("Let there be light").',
        'Humanity was formed in God\'s image to care for the earth and its creatures.',
        'On the seventh day, God rested and declared creation very good.'
      ],
      quiz: [
        { q: 'What did God create on the very first day according to Genesis 1?', opts: ['Dry land', 'Light (separating light from darkness)', 'Elephants', 'Sun and moon'], ans: 1, exp: 'God commanded: "Let there be light," separating it from darkness.' },
        { q: 'What did God do on the seventh day after finishing creation?', opts: ['He started over', 'He rested and made it a holy day of rest', 'He made rain fall', 'He built a castle'], ans: 1, exp: 'God rested on the seventh day and blessed it.' },
        { q: 'According to Scripture, what special responsibility did God give humans?', opts: ['To ignore the animals', 'To steward, tend, and care for creation', 'To cut down every tree', 'To stay inside caves'], ans: 1, exp: 'Humankind was entrusted to care for and steward creation.' },
        { q: 'What phrase did God repeat when looking at what was made?', opts: ['"It is difficult"', '"It is good"', '"It needs painting"', '"It is finished early"'], ans: 1, exp: 'Scripture states: "And God saw that it was good."' },
        { q: 'In which book of the Bible is the story of creation recorded?', opts: ['Exodus', 'Psalms', 'Genesis', 'Matthew'], ans: 2, exp: 'Genesis is the book of beginnings.' }
      ]
    },
    {
      title: 'God\'s Love & Kindness: The Good Samaritan',
      subtitle: 'Loving our neighbors, showing empathy, and helping others in need',
      quickInfo: 'Jesus taught the parable of the Good Samaritan to demonstrate that anyone in need is our neighbor, and we should show unconditional kindness and mercy.',
      keyConcepts: [
        'A wounded traveler was ignored by religious leaders passing by.',
        'A Samaritan stranger stopped, bandaged his wounds, and paid for his shelter.',
        'True faith is expressed through compassionate action toward all people.'
      ],
      quiz: [
        { q: 'Who stopped to rescue the injured traveler on the road to Jericho?', opts: ['A priest', 'A Levite', 'The Good Samaritan', 'A Roman soldier'], ans: 2, exp: 'The Samaritan showed mercy and stopped to help.' },
        { q: 'What core lesson did Jesus teach through the Good Samaritan parable?', opts: ['Love and show mercy to anyone in need', 'Only help your best friends', 'Walk past people in trouble', 'Keep money hidden'], ans: 0, exp: 'We are called to love our neighbors with active mercy.' },
        { q: 'Where did the Good Samaritan take the injured man to recover?', opts: ['Back to the road ditch', 'To an inn, paying for his lodging and care', 'To the riverbank', 'To a marketplace'], ans: 1, exp: 'He brought him to an inn and paid the innkeeper.' },
        { q: 'Who is our "neighbor" according to Jesus\'s teaching?', opts: ['Only the person living right next door', 'Anyone who needs our love, care, and assistance', 'Only classmates who share snacks', 'Nobody'], ans: 1, exp: 'Anyone in need is our neighbor.' },
        { q: 'What did the Good Samaritan use to soothe and clean the man\'s wounds?', opts: ['Sand and dry leaves', 'Oil, wine, and clean bandages', 'Cold snow', 'Nothing at all'], ans: 1, exp: 'He applied soothing oil and wine and bandaged him.' }
      ]
    },
    {
      title: 'Obedience, Respect & The Ten Commandments',
      subtitle: 'Honoring parents, telling the truth, and living peacefully with others',
      quickInfo: 'God gave Moses the Ten Commandments on Mount Sinai as loving rules to teach people how to love God and live in peace and fairness with one another.',
      keyConcepts: [
        'The Commandments teach love and reverence for God and neighbor.',
        'Honoring father and mother brings blessings and community strength.',
        'Honesty, kindness, and respecting the property of others build trust.'
      ],
      quiz: [
        { q: 'To whom did God give the Ten Commandments on Mount Sinai?', opts: ['David', 'Moses', 'Noah', 'Abraham'], ans: 1, exp: 'God gave the stone tablets of the law to Moses.' },
        { q: 'What does the commandment "Honor your father and mother" mean?', opts: ['Disobey their instructions', 'Love, respect, and listen to your parents', 'Run away from home', 'Argue daily'], ans: 1, exp: 'It commands honor and respect for parents.' },
        { q: 'What does the commandment against stealing instruct us to do?', opts: ['Take anything we want', 'Respect what belongs to others and never take without permission', 'Borrow and never return', 'Hide toys'], ans: 1, exp: 'Stealing takes what belongs to someone else without consent.' },
        { q: 'Why is telling the truth (not lying) so important?', opts: ['It creates trust, friendship, and peace in community', 'It is confusing', 'It makes friends angry', 'It does not matter'], ans: 0, exp: 'Truthfulness establishes integrity and trust.' },
        { q: 'How many commandments did God engrave on the stone tablets?', opts: ['5', '7', '10', '100'], ans: 2, exp: 'There are Ten Commandments.' }
      ]
    }
  ]
};
