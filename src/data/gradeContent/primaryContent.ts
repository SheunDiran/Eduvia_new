import { GradeLevel, SubjectId, Topic } from '../../types';
import { CompactTopicSpec, createTopicFromSpec } from './builder';

type GradeSubjectSpecs = Partial<Record<SubjectId, [CompactTopicSpec, CompactTopicSpec, CompactTopicSpec]>>;

const GRADE_1_SPECS: GradeSubjectSpecs = {
  math: [
    {
      title: 'Counting to 100 & Number Patterns',
      subtitle: 'Recognizing numbers, skip counting by 2s, 5s, and 10s',
      quickInfo: 'Counting to 100 builds foundational number sense. We learn to count forward, backward, and spot patterns like tens and ones.',
      keyConcepts: ['Place value shows digits in the tens and ones place.', 'Skip counting by 2s (2, 4, 6, 8) helps group items fast.', 'Odd numbers cannot be paired evenly; even numbers can.'],
      quiz: [
        { q: 'What number comes directly after 49?', opts: ['48', '50', '51', '60'], ans: 1, exp: 'Counting sequentially forward: 48, 49, 50.' },
        { q: 'Which of the following is an even number?', opts: ['7', '9', '12', '15'], ans: 2, exp: '12 can be divided evenly into two groups of 6.' },
        { q: 'What is the pattern: 5, 10, 15, 20, __?', opts: ['22', '24', '25', '30'], ans: 2, exp: 'The sequence is counting up by 5s. 20 + 5 = 25.' },
        { q: 'In the number 34, what digit is in the tens place?', opts: ['3', '4', '7', '34'], ans: 0, exp: 'In 34, 3 represents 3 tens (30) and 4 represents 4 ones.' },
        { q: 'Which number is smaller than 20?', opts: ['21', '25', '18', '30'], ans: 2, exp: '18 comes before 20 on the number line.' }
      ]
    },
    {
      title: 'Basic Addition & Subtraction within 20',
      subtitle: 'Combining sets, taking away, and number bonds to 10',
      quickInfo: 'Addition is putting groups together to find the total sum. Subtraction is taking items away to find the difference.',
      keyConcepts: ['The plus sign (+) means add; the minus sign (-) means take away.', 'Number bonds to 10 include 7 + 3, 6 + 4, 8 + 2.', 'Zero added to any number leaves it unchanged.'],
      quiz: [
        { q: 'What is 7 + 5?', opts: ['10', '11', '12', '13'], ans: 2, exp: '7 + 5 = 12.' },
        { q: 'If you have 9 apples and eat 3, how many remain?', opts: ['5', '6', '7', '12'], ans: 1, exp: '9 - 3 = 6 apples remaining.' },
        { q: 'What number makes this true: 6 + __ = 10?', opts: ['3', '4', '5', '6'], ans: 1, exp: '6 + 4 = 10.' },
        { q: 'What is 15 - 0?', opts: ['0', '1', '14', '15'], ans: 3, exp: 'Subtracting 0 from any number leaves it unchanged.' },
        { q: 'What is 8 + 8?', opts: ['14', '15', '16', '18'], ans: 2, exp: 'Doubles fact: 8 + 8 = 16.' }
      ]
    },
    {
      title: '2D Shapes and Sorting Objects',
      subtitle: 'Circles, triangles, squares, and grouping by attributes',
      quickInfo: '2D flat shapes have straight sides and corners, while circles have a continuous curved edge with no corners.',
      keyConcepts: ['A triangle always has 3 straight sides and 3 corners.', 'A square has 4 equal sides and 4 square corners.', 'Shapes can be sorted by color, size, or number of sides.'],
      quiz: [
        { q: 'How many sides does a triangle have?', opts: ['2', '3', '4', '5'], ans: 1, exp: 'A triangle has exactly 3 sides.' },
        { q: 'Which shape has 4 equal sides?', opts: ['Circle', 'Rectangle', 'Square', 'Oval'], ans: 2, exp: 'A square has four equal sides and four right angles.' },
        { q: 'How many corners does a circle have?', opts: ['0', '1', '2', '4'], ans: 0, exp: 'A circle is curved with no corners.' },
        { q: 'A stop sign is shaped like an octagon. How many sides does an octagon have?', opts: ['6', '7', '8', '10'], ans: 2, exp: 'Octa means eight; an octagon has 8 sides.' },
        { q: 'Which shape looks like an unrolled wheel or the sun?', opts: ['Triangle', 'Square', 'Circle', 'Star'], ans: 2, exp: 'Circles are round like wheels.' }
      ]
    }
  ],
  'english-lang': [
    {
      title: 'Phonics, Alphabet & CVC Words',
      subtitle: 'Vowel sounds, consonant blends, and rhyming words',
      quickInfo: 'Phonics connects letters with their sounds. CVC words (Consonant-Vowel-Consonant) like cat and dog form our earliest reading steps.',
      keyConcepts: ['Vowels are A, E, I, O, U.', 'CVC words blend beginning, middle, and ending sounds.', 'Rhyming words end with the same sound (e.g., hat and bat).'],
      quiz: [
        { q: 'Which letter is a vowel?', opts: ['B', 'E', 'K', 'T'], ans: 1, exp: 'The vowels are A, E, I, O, U.' },
        { q: 'Which word is a CVC word?', opts: ['cat', 'play', 'blue', 'tree'], ans: 0, exp: 'C-A-T is Consonant-Vowel-Consonant.' },
        { q: 'Which word rhymes with "sun"?', opts: ['sit', 'run', 'sad', 'top'], ans: 1, exp: '"Sun" and "run" share the same ending sound.' },
        { q: 'What sound does the word "dog" start with?', opts: ['/b/', '/d/', '/g/', '/p/'], ans: 1, exp: '"Dog" begins with the /d/ sound.' },
        { q: 'What is the missing letter in c_p to make a word for drinking?', opts: ['u', 'z', 'q', 'x'], ans: 0, exp: 'C-U-P spells cup.' }
      ]
    },
    {
      title: 'Capital Letters, Spaces & Periods',
      subtitle: 'Basic sentence structure and punctuation rules',
      quickInfo: 'Every sentence begins with a capital letter, separates words with finger spaces, and ends with a punctuation mark like a period.',
      keyConcepts: ['Always capitalize the first word of a sentence.', 'Capitalize names of people and the word "I".', 'A period (.) ends a telling statement.'],
      quiz: [
        { q: 'How should every sentence begin?', opts: ['With a number', 'With a capital letter', 'With a period', 'With a space'], ans: 1, exp: 'Sentences always start with a capital letter.' },
        { q: 'What punctuation mark ends a normal statement?', opts: ['Question mark', 'Exclamation mark', 'Period', 'Comma'], ans: 2, exp: 'A period (.) ends a statement.' },
        { q: 'Which sentence is written correctly?', opts: ['the dog barks.', 'The dog barks', 'The dog barks.', 'the Dog barks.'], ans: 2, exp: 'Capital T at start and a period at the end.' },
        { q: 'The word "I" when talking about yourself should always be:', opts: ['Lowercase', 'Capitalized', 'Underlined', 'Skipped'], ans: 1, exp: 'The pronoun "I" is always capitalized.' },
        { q: 'What do we put between words so they do not touch?', opts: ['Hyphens', 'Finger spaces', 'Dots', 'Slashes'], ans: 1, exp: 'Spaces separate words so they are legible.' }
      ]
    },
    {
      title: 'Story Reading: Characters & Settings',
      subtitle: 'Identifying who is in the story and where it takes place',
      quickInfo: 'Stories are built of characters (who is in the story) and the setting (where and when the story happens).',
      keyConcepts: ['Characters can be people, talking animals, or magical creatures.', 'The setting describes the location (forest, school, space) and time.', 'The plot tells the events that happen from beginning to end.'],
      quiz: [
        { q: 'Who or what is a "character" in a story?', opts: ['The book cover', 'A person or animal in the story', 'The library shelf', 'The title'], ans: 1, exp: 'Characters are the individuals or creatures in a story.' },
        { q: 'What is the "setting" of a story?', opts: ['The price of the book', 'Where and when the story happens', 'The author name', 'The ending song'], ans: 1, exp: 'Setting tells where and when the story takes place.' },
        { q: 'If Goldilocks visits the bears in the woods, what is the setting?', opts: ['The school', 'The beach', 'The forest/cabin', 'The moon'], ans: 2, exp: 'The story is set in the forest and the bears\' cabin.' },
        { q: 'Which of these is a character in Little Red Riding Hood?', opts: ['The Big Bad Wolf', 'The airplane', 'The computer', 'The ocean'], ans: 0, exp: 'The wolf is a primary character.' },
        { q: 'What part of a story tells how it all wraps up?', opts: ['Title', 'Beginning', 'Ending', 'Index'], ans: 2, exp: 'The conclusion/ending wraps up the story.' }
      ]
    }
  ],
  science: [
    {
      title: 'Living vs Non-Living Things',
      subtitle: 'What plants and animals need to grow and thrive',
      quickInfo: 'Living things grow, move, reproduce, and need air, water, and food. Non-living things do not grow or need food.',
      keyConcepts: ['Living things need sunlight, air, water, and nourishment.', 'Animals move on their own; plants grow toward the sun.', 'Rocks, toys, and cars are non-living objects.'],
      quiz: [
        { q: 'Which of these is a living thing?', opts: ['A stone', 'A puppy', 'A toy car', 'A pencil'], ans: 1, exp: 'Puppies breathe, eat, grow, and are living animals.' },
        { q: 'What do green plants need to make their food?', opts: ['Ice cream', 'Sunlight, water, and air', 'Salt', 'Dark rooms'], ans: 1, exp: 'Plants need sunlight, water, and carbon dioxide.' },
        { q: 'Which item is non-living?', opts: ['Oak tree', 'Goldfish', 'Plastic chair', 'Butterfly'], ans: 2, exp: 'A chair is made of plastic and does not grow.' },
        { q: 'Can a rock have babies?', opts: ['Yes', 'No', 'Only in summer', 'Sometimes'], ans: 1, exp: 'Non-living things cannot reproduce.' },
        { q: 'What happens to living things over time?', opts: ['They stay identical', 'They grow and change', 'They turn into stone', 'Nothing'], ans: 1, exp: 'Growth and change are key traits of life.' }
      ]
    },
    {
      title: 'Parts of a Plant & Seeds',
      subtitle: 'Roots, stems, leaves, flowers, and how seeds germinate',
      quickInfo: 'Plants have roots in the soil to drink water, stems to stand tall, leaves to absorb sunlight, and flowers to produce seeds.',
      keyConcepts: ['Roots hold the plant firmly in the soil and absorb water.', 'The stem carries water and nutrients up to the leaves.', 'Leaves use sunlight to create food for the plant.'],
      quiz: [
        { q: 'Which plant part takes in water from the soil?', opts: ['Flower', 'Stem', 'Roots', 'Leaves'], ans: 2, exp: 'Roots drink water and anchor the plant in soil.' },
        { q: 'What part of the plant holds it upright like a straw?', opts: ['Root', 'Stem', 'Petal', 'Seed'], ans: 1, exp: 'The stem supports the plant and transports water.' },
        { q: 'What do green leaves do for a plant?', opts: ['They eat soil', 'They capture sunlight to make food', 'They sleep', 'They produce seeds'], ans: 1, exp: 'Leaves perform photosynthesis using sunlight.' },
        { q: 'What grows into a new baby plant?', opts: ['A rock', 'A leaf', 'A seed', 'A twig'], ans: 2, exp: 'Seeds germinate and sprout into new plants.' },
        { q: 'Which part of the plant is often colorful and attracts bees?', opts: ['Roots', 'Flower', 'Bark', 'Soil'], ans: 1, exp: 'Flowers have colorful petals to attract pollinators.' }
      ]
    },
    {
      title: 'The Five Human Senses',
      subtitle: 'Sight, hearing, smell, taste, and touch',
      quickInfo: 'Our five senses help us observe and interact safely with the world: eyes to see, ears to hear, nose to smell, tongue to taste, and skin to feel.',
      keyConcepts: ['Eyes detect light, shapes, and vibrant colors.', 'Ears capture sound vibrations from whispers to thunder.', 'Skin senses temperature (hot/cold), textures (soft/rough), and pressure.'],
      quiz: [
        { q: 'Which organ is used for the sense of hearing?', opts: ['Nose', 'Ears', 'Eyes', 'Tongue'], ans: 1, exp: 'Ears capture sounds.' },
        { q: 'Which organ detects sweet, sour, salty, and bitter flavors?', opts: ['Tongue', 'Nose', 'Hands', 'Eyes'], ans: 0, exp: 'Taste buds on the tongue detect flavors.' },
        { q: 'What sense allows you to feel if water is warm or cold?', opts: ['Taste', 'Touch', 'Smell', 'Sight'], ans: 1, exp: 'Skin receptors detect temperature through touch.' },
        { q: 'What organ do you use to see a rainbow?', opts: ['Ears', 'Eyes', 'Nose', 'Fingers'], ans: 1, exp: 'Eyes are our organs of sight.' },
        { q: 'Which sense alerts you when cookies are baking in the oven?', opts: ['Touch', 'Smell', 'Hearing', 'Balance'], ans: 1, exp: 'Our nose smells aromas in the air.' }
      ]
    }
  ],
  'social-studies': [
    {
      title: 'My Family, Home & School Community',
      subtitle: 'Roles of family members and cooperating with classmates',
      quickInfo: 'Families and schools are our earliest communities. Members care for one another, follow rules, and share responsibilities.',
      keyConcepts: ['Families provide shelter, love, nutrition, and guidance.', 'School communities include teachers, students, principals, and helpers.', 'Cooperation means working together peacefully.'],
      quiz: [
        { q: 'What is a family?', opts: ['A store', 'A group of people related by love and blood who care for each other', 'A playground game', 'A textbook'], ans: 1, exp: 'A family cares for and supports each other.' },
        { q: 'Who helps guide students and teaches lessons in a classroom?', opts: ['The bus driver', 'The teacher', 'The chef', 'The firefighter'], ans: 1, exp: 'Teachers guide and instruct students.' },
        { q: 'What does cooperation mean?', opts: ['Fighting for a toy', 'Working together nicely and sharing', 'Ignoring others', 'Running away'], ans: 1, exp: 'Cooperation is working cooperatively as a team.' },
        { q: 'Why do classrooms have rules?', opts: ['To make learning fun and keep everyone safe', 'To make everyone sad', 'Rules do not matter', 'To waste paper'], ans: 0, exp: 'Rules keep us safe and promote fairness.' },
        { q: 'How can you help at home?', opts: ['Leaving toys on the floor', 'Cleaning up your toys and helping set the table', 'Shouting', 'Ignoring parents'], ans: 1, exp: 'Pitching in keeps the home clean and organized.' }
      ]
    },
    {
      title: 'Helpers in Our Neighborhood',
      subtitle: 'Firefighters, doctors, nurses, police, and sanitation workers',
      quickInfo: 'Community helpers provide essential services that keep our neighborhoods safe, healthy, clean, and organized.',
      keyConcepts: ['Firefighters extinguish fires and rescue people and animals.', 'Doctors and nurses treat illnesses and keep us healthy.', 'Sanitation workers collect trash and keep streets clean.'],
      quiz: [
        { q: 'Who drives a fire engine and puts out fires?', opts: ['Dentist', 'Firefighter', 'Pilot', 'Baker'], ans: 1, exp: 'Firefighters put out fires and respond to emergencies.' },
        { q: 'Who checks your heartbeat and helps when you feel sick?', opts: ['Doctor', 'Mechanic', 'Librarian', 'Astronaut'], ans: 0, exp: 'Doctors and medical professionals treat sickness.' },
        { q: 'Who helps deliver mail and packages to homes?', opts: ['Mail carrier', 'Chef', 'Plumber', 'Gardener'], ans: 0, exp: 'Postal and delivery workers deliver letters and parcels.' },
        { q: 'Who helps direct traffic and keeps our neighborhoods safe?', opts: ['Police officer', 'Carpenter', 'Musician', 'Artist'], ans: 0, exp: 'Police officers maintain peace and safety.' },
        { q: 'What number is used in many countries for emergency help?', opts: ['123', '911', '0000', '411'], ans: 1, exp: '911 is the universal emergency call number in North America.' }
      ]
    },
    {
      title: 'Symbols of Our Nation & Flags',
      subtitle: 'Pledges, anthems, flags, and respect for our country',
      quickInfo: 'National symbols such as flags, anthems, and seals represent the unity, history, and values of a nation.',
      keyConcepts: ['A national flag uses specific colors and symbols to represent freedom and unity.', 'The national anthem is the official song of a country.', 'Showing respect means standing quietly during anthems.'],
      quiz: [
        { q: 'What is a national flag?', opts: ['A piece of clothing', 'A special cloth symbol that represents a country', 'A kitchen towel', 'A rug'], ans: 1, exp: 'A flag is an official national emblem.' },
        { q: 'How should you stand during the national anthem?', opts: ['Jumping around', 'Respectfully and attentively', 'Lying down', 'Singing loud funny songs'], ans: 1, exp: 'Standing respectfully honors the anthem.' },
        { q: 'What bird is the national symbol of the United States?', opts: ['Penguin', 'Bald Eagle', 'Parrot', 'Rooster'], ans: 1, exp: 'The Bald Eagle is the national bird of the USA.' },
        { q: 'What do symbols on a flag represent?', opts: ['Random doodles', 'Important historical values, peace, or land', 'Advertisements', 'Recipes'], ans: 1, exp: 'Flag symbols hold deep cultural meaning.' },
        { q: 'What is the official patriotic song of a country called?', opts: ['Pop song', 'National Anthem', 'Lullaby', 'Nursery rhyme'], ans: 1, exp: 'The national anthem is the country\'s official hymn.' }
      ]
    }
  ],
  art: [
    {
      title: 'Primary Colors & Color Mixing',
      subtitle: 'Red, Yellow, Blue and discovering Secondary Colors',
      quickInfo: 'The three primary colors are Red, Yellow, and Blue. By mixing pairs of primary colors, we create Orange, Green, and Purple.',
      keyConcepts: ['Primary colors cannot be made by mixing other colors.', 'Red + Yellow = Orange; Yellow + Blue = Green; Blue + Red = Purple.', 'White makes colors lighter; black makes them darker.'],
      quiz: [
        { q: 'Which three colors are the Primary Colors?', opts: ['Red, Yellow, Blue', 'Green, Orange, Purple', 'Pink, Black, White', 'Brown, Gray, Gold'], ans: 0, exp: 'Red, Yellow, and Blue are primary colors.' },
        { q: 'What color do you get when you mix Red and Yellow?', opts: ['Green', 'Orange', 'Purple', 'Brown'], ans: 1, exp: 'Red + Yellow = Orange.' },
        { q: 'What color do you get when you mix Blue and Yellow?', opts: ['Red', 'Green', 'Purple', 'Black'], ans: 1, exp: 'Blue + Yellow = Green.' },
        { q: 'What color do you get when you mix Blue and Red?', opts: ['Orange', 'Purple', 'Yellow', 'Pink'], ans: 1, exp: 'Blue + Red = Purple.' },
        { q: 'What happens when you add white paint to red paint?', opts: ['It turns black', 'It turns pink', 'It turns green', 'Nothing'], ans: 1, exp: 'Adding white creates a tint, making red turn pink.' }
      ]
    },
    {
      title: 'Lines and Shapes in Drawing',
      subtitle: 'Straight, curved, zigzag lines, and basic geometric forms',
      quickInfo: 'Artists use different lines—straight, wavy, zigzag, and dotted—to build shapes like circles, squares, and stars.',
      keyConcepts: ['Lines guide the viewer\'s eye across a composition.', 'Closing a line creates a shape.', 'Thick lines feel heavy and bold; thin lines feel delicate.'],
      quiz: [
        { q: 'What kind of line looks like lightning or mountain peaks?', opts: ['Curved', 'Zigzag', 'Dotted', 'Straight'], ans: 1, exp: 'Zigzag lines have sharp alternating angles.' },
        { q: 'What happens when a line connects back to its starting point?', opts: ['It disappears', 'It forms a closed shape', 'It becomes music', 'It breaks'], ans: 1, exp: 'Connecting a line creates a shape.' },
        { q: 'Which line is gentle like ocean waves?', opts: ['Wavy/curved line', 'Zigzag line', 'Vertical line', 'Cracked line'], ans: 0, exp: 'Curved wavy lines look like ripples and waves.' },
        { q: 'What tool do artists use to draw lines on paper?', opts: ['A fork', 'A pencil or crayon', 'A hammer', 'A sponge only'], ans: 1, exp: 'Pencils, crayons, and markers are drawing tools.' },
        { q: 'What shape has no straight lines at all?', opts: ['Triangle', 'Square', 'Circle', 'Rectangle'], ans: 2, exp: 'A circle is completely curved.' }
      ]
    },
    {
      title: 'Collage & Paper Crafts',
      subtitle: 'Tearing, cutting safely, and arranging layered textures',
      quickInfo: 'Collage is the art of gluing various materials—paper scraps, fabric, photos, and leaves—onto a surface to make new images.',
      keyConcepts: ['Collage comes from the French word "coller", meaning to glue.', 'Layering means placing one paper piece partially over another.', 'Always use scissors safely with blades pointed away from your body.'],
      quiz: [
        { q: 'What is a collage in art?', opts: ['A painting on canvas only', 'Artwork made by gluing paper scraps and textures together', 'A stone sculpture', 'A song'], ans: 1, exp: 'Collage combines cut or torn materials glued to a surface.' },
        { q: 'How should you carry safety scissors?', opts: ['Running with blades open', 'Holding closed blades in your fist pointing down', 'Tossing them', 'In your teeth'], ans: 1, exp: 'Always walk with blades held closed in your palm pointing down.' },
        { q: 'What adhesive is commonly used to stick paper down?', opts: ['Glue stick', 'Water', 'Salt', 'Butter'], ans: 0, exp: 'Glue sticks and school paste are standard.' },
        { q: 'What does "layering" paper mean?', opts: ['Throwing paper away', 'Putting pieces on top of or overlapping each other', 'Burning paper', 'Wetting paper'], ans: 1, exp: 'Layering overlaps materials to create depth.' },
        { q: 'Can you use magazine cutouts in a collage?', opts: ['Yes, absolutely', 'No, never', 'Only on Sundays', 'Only plastic is allowed'], ans: 0, exp: 'Magazine clippings are classic collage elements.' }
      ]
    }
  ],
  pe: [
    {
      title: 'Locomotor Movements: Running, Hopping & Skipping',
      subtitle: 'Developing balance, coordination, and agility on the playground',
      quickInfo: 'Locomotor movements are actions that travel through space: walking, running, hopping on one foot, jumping on two feet, and skipping.',
      keyConcepts: ['Hopping uses one foot; jumping lands on both feet together.', 'Skipping is a step-hop pattern with rhythmic arm swings.', 'Looking forward helps maintain steady balance and prevents collisions.'],
      quiz: [
        { q: 'What is the difference between hopping and jumping?', opts: ['They are identical', 'Hopping is on one foot; jumping takes off or lands on two feet', 'Hopping is swimming', 'Jumping is sitting'], ans: 1, exp: 'Hopping uses one foot; jumping uses both feet.' },
        { q: 'What movement combines a step and a hop together rhythmically?', opts: ['Skipping', 'Crawling', 'Galloping', 'Rolling'], ans: 0, exp: 'Skipping is a coordinated step-hop combination.' },
        { q: 'Where should your eyes look when running forward?', opts: ['Directly at your shoes', 'Forward in the direction you are traveling', 'At the sky', 'Behind you'], ans: 1, exp: 'Looking forward avoids obstacles and maintains balance.' },
        { q: 'What should you do before starting energetic exercise?', opts: ['Eat a huge meal', 'Warm up your muscles with gentle movements', 'Take a nap', 'Drink hot soup'], ans: 1, exp: 'Warm-ups prepare your joints and muscles for activity.' },
        { q: 'Which activity is great for building heart strength?', opts: ['Sitting still', 'Playing tag and running', 'Watching screens', 'Sleeping'], ans: 1, exp: 'Running games exercise your heart and lungs.' }
      ]
    },
    {
      title: 'Hand-Eye Coordination: Catching & Throwing',
      subtitle: 'Underhand throws, soft catches with two hands, and target aim',
      quickInfo: 'Hand-eye coordination trains your eyes to track a moving ball while your hands coordinate to catch or throw it smoothly.',
      keyConcepts: ['To throw underhand: step with your opposite foot and swing arm forward.', 'To catch: keep your eyes on the ball and open hands like a soft basket.', 'Bring the ball into your chest softly upon catching.'],
      quiz: [
        { q: 'When throwing with your right hand, which foot should step forward?', opts: ['Right foot', 'Left foot (opposite foot)', 'Both feet together', 'Neither'], ans: 1, exp: 'Stepping with the opposite foot provides balance and power.' },
        { q: 'How should your hands be positioned to catch a chest-level ball?', opts: ['Pockets closed', 'Open like a basket with thumbs together', 'Arms folded behind back', 'One finger pointing'], ans: 1, exp: 'Thumbs together forms a secure receiving pocket.' },
        { q: 'What is the best way to watch a ball you want to catch?', opts: ['Close your eyes', 'Keep your eyes tracked on the ball until it hits your hands', 'Look at the audience', 'Look down'], ans: 1, exp: 'Tracking the ball visually ensures accurate catches.' },
        { q: 'Why is practicing throwing and catching beneficial?', opts: ['It strengthens hand-eye coordination', 'It makes you sleepy', 'It has no benefit', 'It only helps in golf'], ans: 0, exp: 'It trains hand-eye reflexes and motor precision.' },
        { q: 'What type of ball is safest for first-time catching practice?', opts: ['A rock', 'A soft foam or yarn ball', 'A heavy iron sphere', 'A glass ball'], ans: 1, exp: 'Soft foam balls prevent injury while building confidence.' }
      ]
    },
    {
      title: 'Healthy Habits, Rest & Hydration',
      subtitle: 'Drinking water, eating fresh fruit, and post-exercise rest',
      quickInfo: 'Our bodies need plenty of pure water, nourishing meals, active play, and restful sleep every night to stay energetic and strong.',
      keyConcepts: ['Water replaces fluids lost during active play and sweating.', 'Sleeping 9 to 11 hours helps children grow and repair muscles.', 'Fruits and vegetables give vitamins that shield against sickness.'],
      quiz: [
        { q: 'What is the best drink when you are thirsty after running?', opts: ['Soda', 'Pure water', 'Sweet syrup', 'Coffee'], ans: 1, exp: 'Water hydrates your cells without added sugars.' },
        { q: 'Why does our body sweat during intense sports?', opts: ['To cool our skin down', 'To change color', 'Because it is sad', 'To make noise'], ans: 0, exp: 'Sweat evaporates to cool the body down.' },
        { q: 'About how many hours of sleep do growing children need each night?', opts: ['2 hours', '5 hours', '9 to 11 hours', '20 hours'], ans: 2, exp: 'School-age kids thrive on 9-11 hours of sleep.' },
        { q: 'Which food provides vitamins that keep you healthy?', opts: ['Fresh apples and carrots', 'Candy wrappers', 'Fried donuts only', 'Chips'], ans: 0, exp: 'Fruits and veggies provide vital nutrients.' },
        { q: 'What should you do after playing outdoors before eating?', opts: ['Wash hands with soap and water', 'Rub eyes', 'Wipe hands on dirt', 'Nothing'], ans: 0, exp: 'Handwashing prevents bacteria from entering your food.' }
      ]
    }
  ],
  'computer-science': [
    {
      title: 'Parts of a Computer (Hardware)',
      subtitle: 'Monitor, keyboard, mouse, CPU, and caring for technology',
      quickInfo: 'A computer consists of hardware parts you can see and touch: the monitor displays images, the keyboard types words, and the mouse clicks.',
      keyConcepts: ['The monitor (screen) lets us see pictures and text.', 'The keyboard has letter, number, and space keys.', 'The computer tower or CPU is the brain running the system.'],
      quiz: [
        { q: 'What computer part displays pictures and words on a screen?', opts: ['Keyboard', 'Monitor', 'Mouse', 'Printer'], ans: 1, exp: 'The monitor is the visual display screen.' },
        { q: 'What tool do you click to select items on a desktop?', opts: ['Mouse', 'Headphones', 'Camera', 'Speaker'], ans: 0, exp: 'The mouse moves the cursor and clicks icons.' },
        { q: 'What part has keys with letters from A to Z?', opts: ['Keyboard', 'Webcam', 'Microphone', 'Battery'], ans: 0, exp: 'The keyboard is used for typing text and numbers.' },
        { q: 'Why should drinks and sticky snacks be kept away from computers?', opts: ['Computers like juice', 'Spills can damage the delicate electrical parts', 'To make computers angry', 'No reason'], ans: 1, exp: 'Liquid spills cause short circuits and permanent damage.' },
        { q: 'What is the long bar at the bottom of the keyboard called?', opts: ['Enter key', 'Spacebar', 'Shift key', 'Backspace'], ans: 1, exp: 'The spacebar creates spaces between words.' }
      ]
    },
    {
      title: 'Using the Mouse: Point, Click & Drag',
      subtitle: 'Cursor navigation, clicking icons, and opening learning games',
      quickInfo: 'The mouse arrow on the screen is called the cursor. We hold the mouse gently, click the left button, and drag items smoothly.',
      keyConcepts: ['Moving the mouse moves the pointer (cursor) on the screen.', 'Single click selects an item; double click opens an application.', 'Drag-and-drop moves an object from one place to another.'],
      quiz: [
        { q: 'What is the arrow moving on the computer screen called?', opts: ['Rocket', 'Cursor / Pointer', 'Ant', 'Pixel'], ans: 1, exp: 'The mouse pointer or cursor shows where you are pointing.' },
        { q: 'Which mouse button do you use for most standard clicks?', opts: ['Left button', 'Right button', 'Bottom wire', 'Back wheel only'], ans: 0, exp: 'The left button is the primary click button.' },
        { q: 'What action means holding down the mouse button while moving it?', opts: ['Double click', 'Drag and drop', 'Restart', 'Type'], ans: 1, exp: 'Dragging moves an item across the screen.' },
        { q: 'How do you rest your hand on the mouse?', opts: ['Squeezing tightly', 'Gently with index finger resting on left button', 'Using two feet', 'Flipping it upside down'], ans: 1, exp: 'A relaxed grip prevents fatigue and ensures control.' },
        { q: 'What does a double-click mean?', opts: ['Clicking twice quickly in a row', 'Clicking with two mice', 'Clicking tomorrow', 'Unplugging the mouse'], ans: 0, exp: 'A double-click is two quick consecutive presses.' }
      ]
    },
    {
      title: 'Internet Safety: Keeping Passwords Private',
      subtitle: 'Staying safe online, asking adults, and private information',
      quickInfo: 'The internet is a vast digital library. Always keep your full name, home address, and passwords secret, and ask trusted adults for guidance.',
      keyConcepts: ['Never share passwords with anyone except your parents or teachers.', 'Do not share personal info like home address or phone number online.', 'If something on the screen feels uncomfortable, tell an adult immediately.'],
      quiz: [
        { q: 'Who is it safe to share your computer password with?', opts: ['A stranger online', 'Your parent or teacher', 'Anyone on a gaming chat', 'Everyone on social media'], ans: 1, exp: 'Only trusted parents and teachers should know passwords.' },
        { q: 'Which of these is private personal information?', opts: ['Your favorite color', 'Your home address and phone number', 'Your favorite animal', 'The color of grass'], ans: 1, exp: 'Home addresses and phone numbers must remain private.' },
        { q: 'What should you do if an unfamiliar pop-up appears on screen?', opts: ['Click every button quickly', 'Ask a parent or teacher to check it', 'Turn off the house lights', 'Cry quietly'], ans: 1, exp: 'Always ask a trusted adult when unsure.' },
        { q: 'Is everything found on the internet always true?', opts: ['Yes, always', 'No, not everything online is real or accurate', 'Computers never make mistakes', 'Only cartoons are true'], ans: 1, exp: 'Critical thinking is needed; not all internet claims are factual.' },
        { q: 'A good password is:', opts: ['1234', 'Secret and known only to you and your guardian', 'Your pet\'s name on a poster', 'The word password'], ans: 1, exp: 'Passwords must remain secret and strong.' }
      ]
    }
  ],
  music: [
    {
      title: 'Pitch: High Sounds & Low Sounds',
      subtitle: 'Bird chirps vs bear roars and listening to melodies',
      quickInfo: 'Pitch describes how high or low a musical sound vibrates. A tiny bird chirp has a high pitch, while a deep thunder rumble has a low pitch.',
      keyConcepts: ['High pitch vibrates rapidly; low pitch vibrates slowly.', 'Flutes and violins make high pitches; tubas and bass make low pitches.', 'Singing scales moves step-by-step from low to high.'],
      quiz: [
        { q: 'Which sound is an example of a high pitch?', opts: ['A tiny bird chirping', 'A deep bear roar', 'A giant bass drum', 'Thunder rumble'], ans: 0, exp: 'Bird tweets are high-frequency vibrations.' },
        { q: 'Which instrument makes deep, low-pitched notes?', opts: ['Flute', 'Triangle', 'Tuba / Bass drum', 'Whistle'], ans: 2, exp: 'Large brass and bass instruments produce low tones.' },
        { q: 'What word describes how high or low a note sounds?', opts: ['Tempo', 'Pitch', 'Volume', 'Color'], ans: 1, exp: 'Pitch is the perceived frequency of a sound.' },
        { q: 'When singing "Do-Re-Mi-Fa-Sol", is the pitch getting higher or lower?', opts: ['Higher', 'Lower', 'Staying unchanged', 'Silent'], ans: 0, exp: 'The standard musical scale rises in pitch.' },
        { q: 'Which string on a guitar or violin usually makes the lowest sound?', opts: ['The thinnest string', 'The thickest string', 'The shortest string', 'The wooden bow'], ans: 1, exp: 'Thicker strings vibrate more slowly, making lower pitches.' }
      ]
    },
    {
      title: 'Tempo: Fast (Presto) & Slow (Largo)',
      subtitle: 'Walking beats, marching speed, and clapping rhythms',
      quickInfo: 'Tempo is the speed of the musical beat. Fast music makes us want to run and dance; slow music helps us relax and fall asleep.',
      keyConcepts: ['Tempo measures how fast or slow the steady pulse travels.', 'Allegro/Presto means fast; Adagio/Largo means slow.', 'A metronome clicks steadily to help musicians keep the correct tempo.'],
      quiz: [
        { q: 'What does "tempo" mean in music?', opts: ['The loudness of sound', 'The speed of the beat', 'The color of the instrument', 'The lyrics'], ans: 1, exp: 'Tempo is the speed at which music is played.' },
        { q: 'Which animal moves like a slow, largo tempo?', opts: ['Cheetah', 'Tortoise / Snail', 'Hummingbird', 'Rabbit'], ans: 1, exp: 'A tortoise moves slowly like a slow tempo.' },
        { q: 'What device ticks like a clock to help musicians practice tempo?', opts: ['Metronome', 'Telescope', 'Thermometer', 'Compass'], ans: 0, exp: 'A metronome clicks steady beats at set speeds.' },
        { q: 'Lullabies sung to help babies sleep usually have what kind of tempo?', opts: ['Super fast and loud', 'Slow and gentle', 'Chaotic', 'Explosive'], ans: 1, exp: 'Slow tempos calm the nervous system.' },
        { q: 'If the conductor waves their baton faster, what should the orchestra do?', opts: ['Play slower', 'Play faster', 'Stop playing', 'Put instruments away'], ans: 1, exp: 'Conductors signal tempo adjustments with their hands.' }
      ]
    },
    {
      title: 'Instrument Families: Strings, Woodwinds, Brass & Percussion',
      subtitle: 'How different instruments produce their unique sound',
      quickInfo: 'Musical instruments belong to four main families: Strings have plucked/bowed strings, Woodwinds use air, Brass uses lip buzzing, and Percussion is struck.',
      keyConcepts: ['Strings: violin, cello, guitar, harp.', 'Woodwinds: flute, clarinet, oboe, saxophone.', 'Percussion: drums, cymbals, xylophone, triangle (struck or shaken).'],
      quiz: [
        { q: 'Which family does the violin and guitar belong to?', opts: ['Brass', 'Strings', 'Woodwinds', 'Percussion'], ans: 1, exp: 'Both have strings that vibrate when plucked or bowed.' },
        { q: 'How does a drummer make sound on a drum?', opts: ['Blowing through a tube', 'Striking it with sticks or hands', 'Plucking a wire', 'Whispering to it'], ans: 1, exp: 'Percussion instruments produce sound by being struck.' },
        { q: 'Which of these is made of shiny metal with valves and buzzed lips?', opts: ['Trumpet (Brass)', 'Recorder', 'Triangle', 'Piano string'], ans: 0, exp: 'Trumpets belong to the brass family.' },
        { q: 'What family does a wooden flute or clarinet belong to?', opts: ['Percussion', 'Woodwinds', 'Strings', 'Electronics'], ans: 1, exp: 'Flutes and clarinets belong to the woodwind family.' },
        { q: 'Which instrument has black and white keys that cause little hammers to hit strings inside?', opts: ['Flute', 'Piano', 'Drum', 'Kazoo'], ans: 1, exp: 'The piano is a keyboard instrument with internal hammered strings.' }
      ]
    }
  ],
  crs: [
    {
      title: 'The Story of Creation: God Makes the World',
      subtitle: 'Light, earth, seas, plants, creatures, and human stewardship',
      quickInfo: 'The biblical creation account tells of God creating the heavens and the earth, forming light, seas, nature, and calling all creation good.',
      keyConcepts: ['God creates light, separating day from night.', 'Nature, seas, and animal life were created with divine purpose.', 'Humans were appointed as caretakers (stewards) of the Earth.'],
      quiz: [
        { q: 'According to Genesis, what did God create on the very first day?', opts: ['Cell phones', 'Light', 'Dinosaurs', 'Clouds only'], ans: 1, exp: 'God said, "Let there be light," on Day 1.' },
        { q: 'What did God declare about each part of creation after making it?', opts: ['It was broken', 'It was good', 'It was boring', 'It was useless'], ans: 1, exp: 'God saw that it was good.' },
        { q: 'What special responsibility were humans given in the Garden?', opts: ['To harm plants', 'To care for and steward the Earth and animals', 'To ignore nature', 'To build skyscrapers'], ans: 1, exp: 'Humans are called to care for God\'s creation.' },
        { q: 'On which day did God rest from all the work of creation?', opts: ['Day 1', 'Day 3', 'Day 7', 'Day 10'], ans: 2, exp: 'God rested on the seventh day (the Sabbath).' },
        { q: 'What great lights were created to rule the day and the night?', opts: ['Torches', 'The Sun and the Moon', 'Stars only', 'Candles'], ans: 1, exp: 'The sun governs the day and the moon the night.' }
      ]
    },
    {
      title: 'God\'s Love & Kindness: The Good Samaritan',
      subtitle: 'Loving our neighbors, showing empathy, and helping others',
      quickInfo: 'Jesus taught the parable of the Good Samaritan to show that anyone in need is our neighbor, and we should show them mercy and care.',
      keyConcepts: ['A traveler was injured, and religious travelers passed him by.', 'A Samaritan stranger stopped, treated his wounds, and paid for his shelter.', 'True religion is shown through active kindness and mercy.'],
      quiz: [
        { q: 'Who stopped to help the injured traveler on the road to Jericho?', opts: ['A merchant', 'The Good Samaritan', 'A Roman guard', 'Nobody'], ans: 1, exp: 'The Samaritan showed compassion and stopped to help.' },
        { q: 'What lesson did Jesus teach with the parable of the Good Samaritan?', opts: ['Only help your close friends', 'Love and show mercy to anyone in need', 'Walk away from trouble', 'Keep all your coins secret'], ans: 1, exp: 'We must love and help our neighbors with mercy.' },
        { q: 'What did the Good Samaritan use to bandage the wounded man?', opts: ['Oil, wine, and clean bandages', 'Dirt', 'Leaves only', 'Nothing'], ans: 0, exp: 'He poured oil and wine to soothe the wounds and bandaged him.' },
        { q: 'Where did the Samaritan take the injured man to recover?', opts: ['To an inn/shelter and paid for his care', 'Back to the ditch', 'To the river', 'To a castle'], ans: 0, exp: 'He brought him to an inn and paid the innkeeper.' },
        { q: 'Who is our "neighbor" according to Jesus\'s teaching?', opts: ['Only the person living next door', 'Anyone who needs our love and assistance', 'Only people in our school', 'Only famous people'], ans: 1, exp: 'Anyone in need is our neighbor.' }
      ]
    },
    {
      title: 'Obedience, Respect & The Ten Commandments',
      subtitle: 'Honoring parents, telling the truth, and living peacefully',
      quickInfo: 'God gave the Ten Commandments to Moses on Mount Sinai as loving guidelines to help people live peacefully with God and with one another.',
      keyConcepts: ['The Commandments teach reverence for God and love for others.', 'Honoring father and mother brings blessing and community strength.', 'Honesty, kindness, and respecting others\' property build trust.'],
      quiz: [
        { q: 'To whom did God give the Ten Commandments on Mount Sinai?', opts: ['David', 'Moses', 'Noah', 'Peter'], ans: 1, exp: 'God gave the stone tablets to Moses on Mount Sinai.' },
        { q: 'What does the commandment "Honor your father and your mother" teach us?', opts: ['Disobey parents', 'Love, respect, and listen to your parents', 'Run away', 'Argue constantly'], ans: 1, exp: 'It commands respect and care for parents.' },
        { q: 'What does the commandment against stealing mean?', opts: ['Take whatever you want', 'Respect other people\'s things and do not take them without permission', 'Borrow forever', 'Hide toys'], ans: 1, exp: 'Stealing takes what belongs to someone else.' },
        { q: 'Why is telling the truth (not bearing false witness) essential?', opts: ['It builds trust and honest friendships', 'It makes people mad', 'Lying is fun', 'It does not matter'], ans: 0, exp: 'Honesty builds trust and integrity in community.' },
        { q: 'How many commandments were on the stone tablets?', opts: ['5', '7', '10', '100'], ans: 2, exp: 'There are Ten Commandments.' }
      ]
    }
  ]
};

// Generate Grade 1–5 topic dictionaries using grade-level adaptations
export function getPrimaryTopics(grade: GradeLevel, subjectId: SubjectId): Topic[] {
  const gradeNum = parseInt(grade.replace('grade-', ''), 10) || 1;
  const baseSpecs = GRADE_1_SPECS[subjectId] || GRADE_1_SPECS['math']!;

  return baseSpecs.map((spec, idx) => {
    // Adapt titles and context slightly for higher primary grades (Grade 2 to 5)
    let adaptedTitle = spec.title;
    let adaptedSubtitle = spec.subtitle;
    let adaptedQuickInfo = spec.quickInfo;

    if (gradeNum > 1) {
      if (subjectId === 'math') {
        const mathTitles = [
          ['Two-Digit Regrouping & Place Value', 'Repeated Addition & Multiplication Prep', 'Telling Time to 5-Min & Money Math'],
          ['Multiplication & Division Fact Families', 'Fractions: Halves, Thirds & Number Lines', 'Perimeter, Area Grids & Bar Graphs'],
          ['Multi-Digit Long Multiplication', 'Equivalent Fractions & Adding Decimals', 'Angle Types, Lines & Symmetry'],
          ['Decimals Operations & Multi-step Problems', 'Adding Fractions with Unlike Denominators', 'Volume of Prisms & Coordinate Graphing']
        ][gradeNum - 2];
        if (mathTitles && mathTitles[idx]) {
          adaptedTitle = mathTitles[idx];
          adaptedSubtitle = `Grade ${gradeNum} curriculum mastery with step-by-step applications.`;
          adaptedQuickInfo = `Grade ${gradeNum} level exploration of ${adaptedTitle}, focusing on precision and mathematical reasoning.`;
        }
      } else if (subjectId === 'english-lang') {
        const engTitles = [
          ['Nouns, Verbs & Adjectives in Action', 'Finding the Main Idea in Stories', 'Compound Sentences with Conjunctions'],
          ['Paragraph Structure & Topic Sentences', 'Prefixes, Suffixes & Root Words', 'Figurative Language: Similes & Metaphors'],
          ['Informative & Persuasive Essay Drafts', 'Complex Sentences & Prepositional Phrases', 'Author\'s Purpose & Point of View'],
          ['Narrative Story Crafting & Dialogue', 'Advanced Grammar & Verb Tenses', 'Researching & Synthesizing Text Evidence']
        ][gradeNum - 2];
        if (engTitles && engTitles[idx]) {
          adaptedTitle = engTitles[idx];
          adaptedSubtitle = `Grade ${gradeNum} language mechanics and reading comprehension.`;
          adaptedQuickInfo = `Grade ${gradeNum} focused mastery on ${adaptedTitle}, advancing your communication and grammar confidence.`;
        }
      } else {
        adaptedTitle = `Grade ${gradeNum}: ${spec.title}`;
        adaptedSubtitle = `Grade ${gradeNum} level: ${spec.subtitle}`;
        adaptedQuickInfo = `Grade ${gradeNum} curriculum topic: ${spec.quickInfo}`;
      }
    }

    return createTopicFromSpec(grade, subjectId, idx, {
      ...spec,
      title: adaptedTitle,
      subtitle: adaptedSubtitle,
      quickInfo: adaptedQuickInfo
    });
  });
}
