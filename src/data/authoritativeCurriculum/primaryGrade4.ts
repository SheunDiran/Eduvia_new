import { GradeAuthoritativeMap } from './types';

export const GRADE_4_CURRICULUM: GradeAuthoritativeMap = {
  math: [
    {
      title: 'Multi-Digit Multiplication & Long Division',
      subtitle: 'Standard algorithms, partial products, area models, and remainders',
      quickInfo: 'Students master multi-digit multiplication using the standard algorithm or partial products (e.g., 24 × 36), and perform long division with single-digit divisors and remainders.',
      keyConcepts: [
        'Partial products break numbers into place values: (20 + 4) × (30 + 6).',
        'Standard division algorithm: Divide, Multiply, Subtract, Bring down (DMSB).',
        'Remainders represent fractional portions of the divisor that remain.'
      ],
      quiz: [
        { q: 'What is 34 × 12?', opts: ['398', '408', '418', '428'], ans: 1, exp: '34 × 10 = 340; 34 × 2 = 68; 340 + 68 = 408.' },
        { q: 'Divide 85 ÷ 4. What is the quotient and remainder?', opts: ['21 R 1', '20 R 5', '21 R 2', '22 R 0'], ans: 0, exp: '4 × 21 = 84; 85 - 84 = remainder 1.' },
        { q: 'In the acronym "Does McDonald\'s Serve Burgers" for long division, what does S stand for?', opts: ['Start', 'Subtract', 'Skip', 'Solve'], ans: 1, exp: 'The sequence is Divide, Multiply, Subtract, Bring down.' },
        { q: 'What is 500 × 60?', opts: ['3,000', '30,000', '300,000', '300'], ans: 1, exp: '5 × 6 = 30, append three zeros = 30,000.' },
        { q: 'What is the product of 45 × 100?', opts: ['450', '4,500', '45,000', '4.5'], ans: 1, exp: 'Multiplying by 100 shifts digits two places to the left: 4,500.' }
      ]
    },
    {
      title: 'Equivalent Fractions & Adding Fractions with Common Denominators',
      subtitle: 'Simplifying fractions, mixed numbers, improper fractions, and unit fractions',
      quickInfo: 'Equivalent fractions represent the same quantity (e.g., 2/4 = 1/2). When fractions share a common denominator, add their numerators while leaving the denominator unchanged.',
      keyConcepts: [
        'Multiply or divide numerator and denominator by the same number to find equivalents.',
        'Addition with common denominators: a/c + b/c = (a + b)/c.',
        'Mixed number (1 1/2) converted to improper fraction: (1 × 2 + 1)/2 = 3/2.'
      ],
      quiz: [
        { q: 'Which fraction is equivalent to 2/3?', opts: ['4/6', '3/4', '4/9', '5/6'], ans: 0, exp: 'Multiply numerator and denominator by 2: (2×2)/(3×2) = 4/6.' },
        { q: 'Calculate: 3/8 + 4/8 = ?', opts: ['7/16', '7/8', '12/8', '1/8'], ans: 1, exp: 'When denominators match, add numerators: 3 + 4 = 7; denominator stays 8.' },
        { q: 'Convert the improper fraction 7/4 into a mixed number:', opts: ['1 1/4', '1 3/4', '2 1/4', '7 1/4'], ans: 1, exp: '7 ÷ 4 = 1 with remainder 3; hence 1 3/4.' },
        { q: 'Simplify the fraction 6/12 to its simplest form:', opts: ['1/3', '1/2', '2/4', '3/6'], ans: 1, exp: 'Divide both top and bottom by 6: 6÷6 / 12÷6 = 1/2.' },
        { q: 'What is 5/6 - 2/6?', opts: ['3/6 (or 1/2)', '3/0', '7/6', '2/6'], ans: 0, exp: '5/6 - 2/6 = 3/6, which reduces to 1/2.' }
      ]
    },
    {
      title: 'Perimeter, Area & Angle Measurement (Protractor Basics)',
      subtitle: 'Linear boundary length, square units, acute, right, obtuse, and 180° straight angles',
      quickInfo: 'Perimeter is the distance around the outer boundary (sum of all sides). Area is the space inside measured in square units (Length × Width). Angles are measured in degrees (°).',
      keyConcepts: [
        'Perimeter of a rectangle = 2 × (Length + Width).',
        'Area of a rectangle = Length × Width.',
        'Right angle = exactly 90°; Acute < 90°; Obtuse > 90° and < 180°.'
      ],
      quiz: [
        { q: 'A garden bed has a length of 8 meters and a width of 5 meters. What is its perimeter?', opts: ['40 meters', '26 meters', '13 meters', '52 meters'], ans: 1, exp: 'Perimeter = 2 × (8 + 5) = 2 × 13 = 26 meters.' },
        { q: 'What is the area of a rug measuring 6 feet by 9 feet?', opts: ['30 square feet', '54 square feet', '15 square feet', '108 square feet'], ans: 1, exp: 'Area = 6 × 9 = 54 sq ft.' },
        { q: 'What kind of angle measures exactly 90 degrees, like the corner of a sheet of paper?', opts: ['Acute angle', 'Right angle', 'Obtuse angle', 'Straight angle'], ans: 1, exp: 'A 90° angle is a right angle.' },
        { q: 'An angle measuring 45 degrees is classified as which type of angle?', opts: ['Acute angle', 'Right angle', 'Obtuse angle', 'Reflex angle'], ans: 0, exp: 'Angles less than 90° are acute.' },
        { q: 'What instrument is used to measure and draw angles in degrees?', opts: ['A thermometer', 'A protractor', 'A barometer', 'A scale'], ans: 1, exp: 'A protractor measures angles in degrees.' }
      ]
    }
  ],
  'english-lang': [
    {
      title: 'Figurative Language: Similes, Metaphors & Idioms',
      subtitle: 'Comparisons using like or as, direct metaphors, personification, and common idioms',
      quickInfo: 'Figurative language goes beyond literal word definitions. A simile compares using like or as ("brave as a lion"), a metaphor equates directly ("time is a thief"), and idioms have figurative cultural meanings.',
      keyConcepts: [
        'Simile: uses "like" or "as" for comparison.',
        'Metaphor: directly states one thing is another without "like" or "as".',
        'Idiom: an expression whose meaning cannot be deduced from literal words (e.g., "piece of cake").'
      ],
      quiz: [
        { q: 'Which of the following sentences contains a simile?', opts: ['The classroom was a zoo.', 'She was as fast as lightning on the soccer pitch.', 'The wind whispered through the pines.', 'Time flies when having fun.'], ans: 1, exp: 'Compares using "as fast as" (simile).' },
        { q: 'What does the idiom "It is raining cats and dogs" mean?', opts: ['Animals are falling from clouds', 'It is raining extremely heavily', 'Pets are barking outside', 'A veterinary clinic opened'], ans: 1, exp: 'It idiomatically means heavy rain.' },
        { q: '"Her heart is a fortress of stone." This sentence is an example of:', opts: ['A simile', 'A metaphor', 'Alliteration', 'Onomatopoeia'], ans: 1, exp: 'Direct equation without "like" or "as" is a metaphor.' },
        { q: 'What does the idiom "bite the bullet" mean in everyday speech?', opts: ['Eat metal', 'Endure a painful or difficult situation with bravery', 'Go hunting', 'Visit the dentist'], ans: 1, exp: 'Enduring difficulty courageously.' },
        { q: 'Which figure of speech gives human traits to non-human things ("The proud flowers danced in the breeze")?', opts: ['Metaphor', 'Hyperbole', 'Personification', 'Simile'], ans: 2, exp: 'Personification attributes human actions to non-humans.' }
      ]
    },
    {
      title: 'Informational Text Structures: Cause/Effect and Chronology',
      subtitle: 'Problem/solution, compare/contrast, sequence of events, and signal keywords',
      quickInfo: 'Informational authors organize non-fiction text using structures: Chronological (time order), Cause and Effect (reasons and outcomes), and Compare and Contrast (similarities and differences).',
      keyConcepts: [
        'Chronological signal words: first, next, subsequently, in 1945, finally.',
        'Cause and effect signal words: because, therefore, as a result, consequently.',
        'Compare and contrast signal words: similarly, however, on the other hand, unlike.'
      ],
      quiz: [
        { q: 'Which text structure organizes historical events in the order in which they occurred in time?', opts: ['Chronological / Sequential order', 'Problem and solution', 'Cause and effect', 'Spatial order'], ans: 0, exp: 'Chronological order follows a time timeline.' },
        { q: 'Which signal word indicates a cause-and-effect relationship?', opts: ['Simultaneously', 'Because / Consequently', 'Beside', 'Meanwhile'], ans: 1, exp: '"Consequently" and "because" show causal links.' },
        { q: 'If an article highlights how renewable solar power solves air pollution, which structure is primarily used?', opts: ['Chronological biography', 'Problem and solution', 'Random listing', 'Fantasy narrative'], ans: 1, exp: 'Outlining a problem and its answer.' },
        { q: 'What graphic organizer is best for comparing and contrasting two historical leaders?', opts: ['A timeline', 'A Venn diagram', 'A pie chart', 'A bar graph'], ans: 1, exp: 'Venn diagrams map shared and unique traits.' },
        { q: 'What do headings and subheadings help readers do in informational texts?', opts: ['Count syllables', 'Preview topics and locate specific sections easily', 'Ignore paragraphs', 'Read backwards'], ans: 1, exp: 'Headings organize text hierarchy.' }
      ]
    },
    {
      title: 'Dialogue Mechanics, Quotation Marks & Direct Speech',
      subtitle: 'Dialogue tags, capitalization, comma placement, and new speaker new line rule',
      quickInfo: 'Direct quotation puts the exact words spoken inside quotation marks ("..."). Punctuation (commas and periods) goes inside the quotes, and each new speaker starts a new indented line.',
      keyConcepts: [
        'Quotation marks surround the exact words spoken: "We leave at dawn," said Maya.',
        'Commas separate dialogue tags from quotes: He asked, "Are you ready?"',
        'Start a new paragraph every time a different character speaks.'
      ],
      quiz: [
        { q: 'Which sentence demonstrates correct dialogue punctuation?', opts: ['"I love reading" shouted Carlos.', '"I love reading," shouted Carlos.', '"I love reading shouted Carlos".', 'I love reading, "shouted Carlos."'], ans: 1, exp: 'Comma goes inside quotation marks before dialogue tag.' },
        { q: 'What rule must you follow when writing a conversation between two characters?', opts: ['Put everyone\'s words in one single huge paragraph', 'Start a new paragraph every time the speaker changes', 'Never use commas', 'Write backwards'], ans: 1, exp: 'New speaker = new paragraph line.' },
        { q: 'Where does the question mark go in direct speech?', opts: ['Outside the quotes', 'Inside the closing quotation mark', 'At the very end of the page', 'In parentheses'], ans: 1, exp: '"Can we go now?" asked Tim.' },
        { q: 'What is a "dialogue tag" in storytelling?', opts: ['A price sticker', 'Phrases like "she whispered," "he replied," or "they yelled"', 'A character\'s name tag', 'The book chapter title'], ans: 1, exp: 'Dialogue tags attribute spoken words.' },
        { q: 'Identify the spoken words in: Dr. Ramos said, "Please wash your hands."', opts: ['Dr. Ramos said', 'Please wash your hands', 'Dr. Ramos', 'None'], ans: 1, exp: 'The spoken text is inside the quotation marks.' }
      ]
    }
  ],
  science: [
    {
      title: 'Energy Transformations: Potential, Kinetic & Electrical',
      subtitle: 'Conservation of energy, circuits, light, sound, thermal energy, and batteries',
      quickInfo: 'Energy cannot be created or destroyed, only transformed from one form to another. Potential energy is stored energy; kinetic energy is energy of motion.',
      keyConcepts: [
        'Law of Conservation of Energy: energy changes forms but total energy is conserved.',
        'Potential (stored energy, e.g., roller coaster at top) converts to Kinetic (motion).',
        'A closed electrical circuit allows electrons to flow from a battery to light a bulb.'
      ],
      quiz: [
        { q: 'What type of energy does a roller coaster car have at the very peak of the highest hill?', opts: ['Kinetic energy only', 'Gravitational potential (stored) energy', 'Nuclear energy', 'Sound energy only'], ans: 1, exp: 'High elevated objects possess high gravitational potential energy.' },
        { q: 'What must be true for electrical current to light a lightbulb?', opts: ['The circuit must be open and broken', 'The circuit must form a complete, unbroken closed loop', 'The wire must be made of rubber', 'The battery must be removed'], ans: 1, exp: 'Current only flows in closed circuits.' },
        { q: 'When a battery powers a flashlight, what energy transformation occurs?', opts: ['Chemical energy → Electrical energy → Light & Thermal energy', 'Sound energy → Solar energy', 'Kinetic energy → Nuclear energy', 'Light energy → Chemical energy'], ans: 0, exp: 'Chemical energy in batteries converts to electrical, then light.' },
        { q: 'What scientific law states that energy can neither be created nor destroyed?', opts: ['Newton\'s First Law', 'The Law of Conservation of Energy', 'Boyle\'s Law', 'Ohm\'s Law'], ans: 1, exp: 'The Law of Conservation of Energy.' },
        { q: 'Which of the following materials is an electrical conductor?', opts: ['Rubber eraser', 'Copper metal wire', 'Dry wood stick', 'Plastic ruler'], ans: 1, exp: 'Copper is a good electrical conductor.' }
      ]
    },
    {
      title: 'Earth\'s Layers, Rocks and the Rock Cycle',
      subtitle: 'Crust, mantle, outer core, inner core, igneous, sedimentary, and metamorphic rocks',
      quickInfo: 'Earth is structured in layers: crust, mantle, molten outer core, and solid inner core. Rocks cycle between igneous (cooled magma), sedimentary (compressed layers), and metamorphic (heat & pressure).',
      keyConcepts: [
        'Igneous rocks form from cooling magma or lava (e.g., basalt, granite).',
        'Sedimentary rocks form from compressed layers and often contain fossils (e.g., limestone, sandstone).',
        'Metamorphic rocks form when existing rocks undergo intense heat and pressure (e.g., marble).'
      ],
      quiz: [
        { q: 'Which layer of the Earth do humans, plants, and oceans rest upon?', opts: ['The inner core', 'The crust', 'The mantle', 'The molten outer core'], ans: 1, exp: 'The crust is the thin outer shell of Earth.' },
        { q: 'What type of rock is formed when molten lava from a volcano cools and solidifies?', opts: ['Sedimentary rock', 'Igneous rock', 'Metamorphic rock', 'Plastic rock'], ans: 1, exp: 'Igneous rocks crystalize from magma or lava.' },
        { q: 'In which type of rock are ancient animal and plant fossils most commonly preserved?', opts: ['Igneous rock', 'Sedimentary rock', 'Metamorphic rock', 'Liquid rock'], ans: 1, exp: 'Gentle sediment accumulation preserves fossils.' },
        { q: 'How does limestone transform into metamorphic marble?', opts: ['By melting into lava', 'Under intense underground heat and crushing tectonic pressure', 'By dissolving in rainwater', 'By freezing in winter'], ans: 1, exp: 'Heat and pressure create metamorphic rocks.' },
        { q: 'What is the hottest, solid center layer of planet Earth composed primarily of iron and nickel?', opts: ['The crust', 'The mantle', 'The inner core', 'The atmosphere'], ans: 2, exp: 'The inner core is a solid iron-nickel sphere.' }
      ]
    },
    {
      title: 'Sensory Receptors and the Nervous System',
      subtitle: 'Brain, spinal cord, sensory nerves, reflex arcs, and electrical impulses',
      quickInfo: 'The nervous system controls our body. Sensory receptors in eyes, ears, skin, and tongue detect environmental signals and send rapid nerve impulses to the brain for processing.',
      keyConcepts: [
        'Central Nervous System: Brain (control center) and Spinal Cord.',
        'Peripheral nerves transmit sensory input to brain and motor commands to muscles.',
        'Reflex arcs (like pulling a hand off a hot stove) bypass the brain for lightning-fast protection.'
      ],
      quiz: [
        { q: 'Which organ acts as the central command headquarters of the human nervous system?', opts: ['The stomach', 'The brain', 'The lungs', 'The liver'], ans: 1, exp: 'The brain processes sensory inputs and commands.' },
        { q: 'What major bundle of nerves connects the brain to the rest of the body along the backbone?', opts: ['The aorta', 'The spinal cord', 'The femur', 'The esophagus'], ans: 1, exp: 'The spinal cord routes nerve signals.' },
        { q: 'Why does your hand pull back automatically from a hot stove before you even feel the pain?', opts: ['A rapid spinal reflex arc bypasses conscious brain processing to prevent burns', 'Your hand has its own brain', 'Skin does not feel heat', 'It is pure luck'], ans: 0, exp: 'Reflex arcs provide instant spinal protection.' },
        { q: 'What specialized cells carry electrical and chemical messages throughout the nervous system?', opts: ['Red blood cells', 'Neurons (nerve cells)', 'Bone cells', 'Skin cells'], ans: 1, exp: 'Neurons conduct nerve impulses.' },
        { q: 'What sensory receptors in the eye detect light and send signals to the optic nerve?', opts: ['Cochlea', 'Rods and cones (in the retina)', 'Taste buds', 'Eardrum'], ans: 1, exp: 'Retinal rods and cones detect light photons.' }
      ]
    }
  ],
  'social-studies': [
    {
      title: 'Regions, Geography and Natural Resources',
      subtitle: 'Northeast, South, Midwest, West, renewable vs nonrenewable resources',
      quickInfo: 'Geographic regions are defined by climate, landforms, and natural resources. Renewable resources (timber, wind, water) replenish naturally, while non-renewable (coal, oil) are finite.',
      keyConcepts: [
        'Geographic regions share physical geography, climate, and economic industries.',
        'Renewable resources: solar, wind, freshwater, timber (can regenerate).',
        'Non-renewable resources: fossil fuels, minerals, petroleum (deplete permanently).'
      ],
      quiz: [
        { q: 'Which of the following is considered a renewable natural resource?', opts: ['Coal', 'Petroleum oil', 'Solar sunlight and wind', 'Natural gas'], ans: 2, exp: 'Sunlight and wind replenish endlessly.' },
        { q: 'Why are fossil fuels like petroleum and coal classified as non-renewable?', opts: ['They take millions of years to form and cannot be replaced within human lifetimes', 'They are made of water', 'They grow on trees', 'They never run out'], ans: 0, exp: 'Fossil fuels have finite subterranean reserves.' },
        { q: 'What agricultural region of the United States is often called "America\'s Breadbasket"?', opts: ['The Desert Southwest', 'The Midwest (Great Plains)', 'The Rocky Mountains', 'The Alaskan Tundra'], ans: 1, exp: 'The fertile Midwest produces massive grain crops.' },
        { q: 'How does geography influence where major human cities develop?', opts: ['Cities only appear on mountain peaks', 'Cities typically grow near waterways, rivers, and natural harbors for trade and drinking water', 'Cities avoid water', 'Location is chosen randomly'], ans: 1, exp: 'Water access facilitates transportation and human settlement.' },
        { q: 'What is the conservation of natural resources?', opts: ['Using up all resources as fast as possible', 'Protecting, managing, and using resources sustainably to prevent exhaustion', 'Burning forests', 'Polluting rivers'], ans: 1, exp: 'Conservation ensures sustainable resource management.' }
      ]
    },
    {
      title: 'The Age of Exploration and Transatlantic Encounters',
      subtitle: 'Caravels, navigation, Columbian exchange, and impact on native peoples',
      quickInfo: 'In the 15th-17th centuries, European explorers sailed across oceans seeking trade routes to Asia. This initiated the Columbian Exchange of plants, animals, and diseases, impacting native populations.',
      keyConcepts: [
        'Navigational tech: Astrolabe, magnetic compass, and caravel sailing ships.',
        'The Columbian Exchange transferred crops (potatoes, corn) and livestock (horses).',
        'Devastating introduction of European epidemic diseases to indigenous populations.'
      ],
      quiz: [
        { q: 'What navigational tool helped sailors determine their latitude by measuring the angle of the sun or stars?', opts: ['A barometer', 'An astrolabe', 'A telescope', 'A steam engine'], ans: 1, exp: 'Astrolabes calculate celestial coordinates.' },
        { q: 'What was the "Columbian Exchange"?', opts: ['A Wall Street stock exchange', 'The global transfer of plants, animals, culture, and diseases between Eastern and Western Hemispheres', 'A coin collection', 'A train route'], ans: 1, exp: 'The transatlantic biological and cultural exchange.' },
        { q: 'Which animal was introduced to the Americas by Spanish explorers, transforming Plains Native cultures?', opts: ['The Bison', 'The Horse', 'The Turkey', 'The Raccoon'], ans: 1, exp: 'Horses were reintroduced to the Americas by Europeans.' },
        { q: 'What European disease had catastrophic mortality effects on Native American populations with no natural immunity?', opts: ['Smallpox', 'The common cold only', 'Hay fever', 'Sunburn'], ans: 0, exp: 'Smallpox caused catastrophic mortality.' },
        { q: 'What primary economic motive drove initial European ocean explorations in the 1400s?', opts: ['Finding direct sea trade routes to Asia for spices and silk', 'Looking for penguins in Antarctica', 'Mapping outer space', 'Building ski resorts'], ans: 0, exp: 'Spice and silk routes spurred maritime voyages.' }
      ]
    },
    {
      title: 'Three Branches of Government: Legislative, Executive & Judicial',
      subtitle: 'Checks and balances, Congress, the President, and the Supreme Court',
      quickInfo: 'The United States Constitution separates government power into three branches to prevent tyranny: Legislative (makes laws), Executive (enforces laws), and Judicial (interprets laws).',
      keyConcepts: [
        'Legislative: Congress (Senate and House of Representatives) crafts and passes legislation.',
        'Executive: President, Vice President, and Cabinet enforce and administer federal laws.',
        'Judicial: Supreme Court and federal courts interpret laws and evaluate constitutionality.'
      ],
      quiz: [
        { q: 'Which branch of the United States government writes and passes federal laws?', opts: ['The Executive branch', 'The Legislative branch (Congress)', 'The Judicial branch', 'The Military branch'], ans: 1, exp: 'Congress is the legislative body.' },
        { q: 'Who is the leader of the Executive branch of the US federal government?', opts: ['The Chief Justice', 'The President of the United States', 'The Speaker of the House', 'The Governor'], ans: 1, exp: 'The President directs executive administration.' },
        { q: 'What is the primary responsibility of the Judicial branch (Supreme Court)?', opts: ['Collecting sales tax', 'Interpreting the laws and determining if they violate the Constitution', 'Commanding the army', 'Printing dollar bills'], ans: 1, exp: 'The Supreme Court reviews constitutionality.' },
        { q: 'What system prevents any one branch of government from becoming all-powerful?', opts: ['Checks and Balances', 'Monarchy', 'Dictatorship', 'Lottery system'], ans: 0, exp: 'Checks and balances limit unilateral authority.' },
        { q: 'How many justices currently serve on the United States Supreme Court?', opts: ['7', '9', '12', '50'], ans: 1, exp: 'The US Supreme Court has 9 appointed justices.' }
      ]
    }
  ],
  art: [
    {
      title: 'Monochromatic Value Scales and Tonal Shading',
      subtitle: 'Tints, shades, cross-hatching, gradients, and rendering 3D spheres',
      quickInfo: 'Value is the lightness or darkness of a hue. A monochromatic palette uses one single color modified with white (tints) and black (shades) to render 3D volume with light and shadow.',
      keyConcepts: [
        'Value scale ranges from pure white (highlight) to deep black (core shadow).',
        'Shading techniques: Blending, cross-hatching, stippling.',
        'Cast shadows ground objects on a surface opposite the light source.'
      ],
      quiz: [
        { q: 'What is an artwork that uses only variations of one single color called?', opts: ['Polychromatic', 'Monochromatic', 'Complementary', 'Abstract'], ans: 1, exp: '"Mono" = one; "chroma" = color.' },
        { q: 'How do you create a "tint" of the color blue?', opts: ['Add black paint', 'Add white paint', 'Add yellow paint', 'Add water only'], ans: 1, exp: 'Tints are lightened with white.' },
        { q: 'What shading technique uses criss-crossing sets of parallel lines to create darker values?', opts: ['Stippling', 'Cross-hatching', 'Frottage', 'Glazing'], ans: 1, exp: 'Intersecting cross-hatched lines create tone.' },
        { q: 'Where does a "cast shadow" fall relative to a sphere illuminated by a desk lamp?', opts: ['Directly toward the light bulb', 'On the table on the opposite side away from the light source', 'Inside the light bulb', 'Nowhere'], ans: 1, exp: 'Cast shadows fall opposite light rays.' },
        { q: 'What is the brightest, most reflective point on a shaded 3D drawing called?', opts: ['The core shadow', 'The highlight', 'The midtone', 'The vanishing point'], ans: 1, exp: 'The highlight reflects maximum light.' }
      ]
    },
    {
      title: 'One-Point Perspective: Horizon Lines and Vanishing Points',
      subtitle: 'Foreshortening, converging orthogonal lines, depth, and street scenes',
      quickInfo: 'One-point perspective creates the optical illusion of depth on a flat canvas. All receding parallel lines (orthogonals) converge toward a single vanishing point on the horizon line.',
      keyConcepts: [
        'Horizon line represents the viewer\'s eye level.',
        'Vanishing point is the single point on the horizon where parallel lines appear to meet.',
        'Objects appear progressively smaller as they approach the vanishing point.'
      ],
      quiz: [
        { q: 'In one-point linear perspective, where do all parallel receding lines converge?', opts: ['At four different corners', 'At a single vanishing point on the horizon line', 'They never meet', 'In a circle in the sky'], ans: 1, exp: 'Orthogonals converge at the vanishing point.' },
        { q: 'What does the "horizon line" in a landscape drawing represent to the viewer?', opts: ['The color of the grass', 'The artist\'s eye level', 'The edge of the wooden frame', 'A telephone wire'], ans: 1, exp: 'The horizon corresponds to eye level.' },
        { q: 'As telephone poles or trees line a road receding into the distance, how should they be drawn?', opts: ['Progressively taller and wider', 'Progressively smaller and closer together', 'Identical in size everywhere', 'Upside down'], ans: 1, exp: 'Perspective causes distant objects to shrink.' },
        { q: 'What are the lines that point diagonally back toward the vanishing point called?', opts: ['Horizontal lines', 'Orthogonal lines', 'Wavy lines', 'Perpendicular lines'], ans: 1, exp: 'Orthogonals establish depth convergence.' },
        { q: 'During which historical artistic period was mathematical perspective systematically developed?', opts: ['The Stone Age', 'The Italian Renaissance', 'Modern Digital era', 'Ancient Egyptian dynasties'], ans: 1, exp: 'Brunelleschi and Renaissance masters developed linear perspective.' }
      ]
    },
    {
      title: 'Renaissance Masters: Leonardo da Vinci and Michelangelo',
      subtitle: 'The Mona Lisa, Sistine Chapel, fresco painting, and scientific anatomical observation',
      quickInfo: 'The Renaissance was a cultural rebirth of art and science in Europe. Leonardo da Vinci (the Mona Lisa) and Michelangelo (the Sistine Chapel) combined artistic mastery with anatomy and invention.',
      keyConcepts: [
        'Leonardo da Vinci: Polymath, inventor, painter of The Last Supper and Mona Lisa (sfumato technique).',
        'Michelangelo: Sculptor (David, Pieta) and fresco painter of the Sistine Chapel ceiling in Rome.',
        'Emphasis on humanism, anatomical realism, and proportional harmony.'
      ],
      quiz: [
        { q: 'Who painted the world-famous portrait of the Mona Lisa with her enigmatic smile?', opts: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Claude Monet'], ans: 1, exp: 'Da Vinci painted the Mona Lisa.' },
        { q: 'What monumental religious building\'s ceiling was painted in fresco by Michelangelo in Vatican City?', opts: ['The Parthenon', 'The Sistine Chapel', 'The Colosseum', 'Notre Dame Cathedral'], ans: 1, exp: 'Michelangelo painted the Sistine Chapel ceiling frescoes.' },
        { q: 'What does the historical French word "Renaissance" literally translate to?', opts: ['"Great War"', '"Rebirth"', '"Dark Age"', '"New Religion"'], ans: 1, exp: 'Renaissance means rebirth of classical learning.' },
        { q: 'What famous colossal marble statue of an Old Testament hero did Michelangelo sculpt in Florence?', opts: ['The Thinker', 'David', 'The Sphinx', 'Venus de Milo'], ans: 1, exp: 'Michelangelo sculpted the marble David.' },
        { q: 'Why is Leonardo da Vinci regarded as the quintessential "Renaissance Man"?', opts: ['He lived in many cities', 'He excelled across diverse fields: painting, engineering, anatomy, botany, and architecture', 'He was very tall', 'He wrote songs only'], ans: 1, exp: 'Polymath expertise defines the Renaissance ideal.' }
      ]
    }
  ],
  pe: [
    {
      title: 'Track and Field: Long Jump, Sprints and Hurdles',
      subtitle: 'Pacing, starting blocks, approach runs, takeoff boards, and plyometrics',
      quickInfo: 'Track and field develops explosive speed, endurance, and power. Sprints require rapid acceleration from starting blocks, while the long jump converts horizontal speed into vertical lift.',
      keyConcepts: [
        'Sprint mechanics: High knees, forward body lean, explosive arm drive.',
        'Long jump phases: Approach sprint, takeoff from board, flight hang, and pit landing.',
        'Pacing: Sprinting requires maximum anaerobic output; middle distance requires pacing.'
      ],
      quiz: [
        { q: 'What is the primary physical energy system used in a 100-meter sprint?', opts: ['Aerobic endurance', 'Explosive anaerobic power', 'Sleep state', 'Static flexibility'], ans: 1, exp: 'Sprinting relies on explosive anaerobic bursts.' },
        { q: 'In the track long jump, what must the athlete hit before leaping into the sand pit?', opts: ['The high hurdle', 'The takeoff board (without crossing the foul line)', 'A trampoline', 'The finish line tape'], ans: 1, exp: 'Takeoff occurs from behind the foul line.' },
        { q: 'What body posture is optimal during the initial acceleration phase of a sprint?', opts: ['Leaning backward stiffly', 'Forward body lean with powerful knee drive and arm pumps', 'Looking sideways at competitors', 'Walking upright'], ans: 1, exp: 'Forward lean maximizes forward drive.' },
        { q: 'What track event involves sprinting while leaping over evenly spaced barriers?', opts: ['The Marathon', 'Hurdles', 'Shot put', 'Pole vault'], ans: 1, exp: 'Hurdle events combine sprinting with leaping.' },
        { q: 'Why is it important to run completely through the finish line instead of slowing down before it?', opts: ['To prevent falling', 'To maintain maximum speed across the timing line', 'Because stopping is illegal', 'To save energy'], ans: 1, exp: 'Decelerating early costs valuable fractions of a second.' }
      ]
    },
    {
      title: 'Team Sports Basics: Basketball Dribbling, Passing & Layups',
      subtitle: 'Chest pass, bounce pass, double dribble, triple threat stance, and court rules',
      quickInfo: 'Basketball requires agility, hand-eye coordination, and spatial teamwork. Players move the ball by continuous dribbling or passing (chest, bounce, overhead) without traveling.',
      keyConcepts: [
        'Dribbling: Bouncing the ball continuously with finger pads, not the palm.',
        'Violations: Traveling (walking without dribbling) and Double Dribble (dribbling again after stopping).',
        'Passing fundamentals: Step into the pass and snap wrists outward with thumbs down.'
      ],
      quiz: [
        { q: 'What violation occurs in basketball if a player stops dribbling, holds the ball with both hands, and dribbles again?', opts: ['Traveling', 'Double Dribble', 'Goal tending', 'Free throw'], ans: 1, exp: 'Dribbling twice is a double dribble violation.' },
        { q: 'Which pass bounces off the court floor roughly two-thirds of the way to the receiver\'s chest?', opts: ['Chest pass', 'Bounce pass', 'Overhead lob', 'Baseball pass'], ans: 1, exp: 'A bounce pass hits the court before reaching teammates.' },
        { q: 'What part of your hand should touch and control the basketball when dribbling?', opts: ['The flat palm of your hand', 'The fingertips and finger pads for soft control', 'The back of your wrist', 'The knuckles only'], ans: 1, exp: 'Finger pads provide tactile ball control.' },
        { q: 'What is the standard height of a regulation basketball hoop rim from the floor?', opts: ['8 feet', '10 feet', '12 feet', '15 feet'], ans: 1, exp: 'Regulation basketball rims are 10 feet high.' },
        { q: 'What is "traveling" in basketball?', opts: ['Taking steps with the ball without dribbling', 'Driving the team bus', 'Passing to the wrong team', 'Missing a shot'], ans: 0, exp: 'Walking or running without dribbling is traveling.' }
      ]
    },
    {
      title: 'Water Safety: Lifejackets, Treading Water and Swimming Strokes',
      subtitle: 'PFD guidelines, pool rules, buddy system, freestyle, and backstroke mechanics',
      quickInfo: 'Swimming is a life-saving physical skill. Safe aquatic behavior requires swimming only with lifeguards present, understanding lifejackets (PFDs), and mastering survival treading.',
      keyConcepts: [
        'Always swim in designated zones under active lifeguard supervision (Buddy System).',
        'A certified Personal Flotation Device (PFD/Lifejacket) is mandatory on boats.',
        'Treading water uses a scissor or eggbeater kick to keep the head above water.'
      ],
      quiz: [
        { q: 'What should you never do around a wet swimming pool deck?', opts: ['Walk carefully', 'Run on the slippery tile surface', 'Wear a towel', 'Listen to the lifeguard'], ans: 1, exp: 'Running on wet pool decks causes dangerous slips.' },
        { q: 'What swimming survival technique allows you to keep your head above water without traveling forward?', opts: ['Diving', 'Treading water', 'Flip turn', 'Cannonball'], ans: 1, exp: 'Treading water conserves energy in deep water.' },
        { q: 'What does "PFD" stand for in aquatic water safety?', opts: ['Public Fast Diving', 'Personal Flotation Device (Lifejacket)', 'Pool Free Depth', 'Paddle Fun Drill'], ans: 1, exp: 'PFD is a lifejacket.' },
        { q: 'What is the "buddy system" in swimming activities?', opts: ['Swimming alone in secret', 'Pairing with a partner so both people keep watch over each other', 'Sharing one pair of goggles', 'Racing against strangers'], ans: 1, exp: 'The buddy system ensures mutual accountability.' },
        { q: 'Which swimming stroke is performed on the back with alternating backward arm windmill circles?', opts: ['Breaststroke', 'Backstroke', 'Butterfly', 'Dog paddle'], ans: 1, exp: 'The backstroke is swum face-up.' }
      ]
    }
  ],
  'computer-science': [
    {
      title: 'Conditionals: If-Then-Else Decision Making in Code',
      subtitle: 'Boolean logic (True/False), comparison operators (<, >, ==), and branching flow',
      quickInfo: 'Conditionals allow programs to make decisions based on changing conditions. "IF score > 10 THEN show next level ELSE keep playing." Boolean logic tests whether conditions are True or False.',
      keyConcepts: [
        'A conditional branches code execution based on a Boolean test.',
        'If condition is True, the "then" branch executes; otherwise the "else" branch executes.',
        'Comparison operators: > (greater), < (less), == (equal to), != (not equal).'
      ],
      quiz: [
        { q: 'What values can a Boolean expression evaluate to in computer programming?', opts: ['Any decimal number', 'Only True or False', 'Letters of the alphabet', 'Colors'], ans: 1, exp: 'Boolean logic resolves strictly to True or False.' },
        { q: 'In the code: IF lives == 0 THEN Game Over ELSE Continue Playing, what happens when lives = 3?', opts: ['Game Over', 'Continue Playing', 'The computer shuts down', 'Score resets'], ans: 1, exp: 'Because lives == 0 is False, the Else branch executes.' },
        { q: 'What coding structure allows programs to choose between two different paths of action?', opts: ['A variable', 'An If-Then-Else conditional statement', 'A comment', 'A mouse pointer'], ans: 1, exp: 'Conditionals direct branching control flow.' },
        { q: 'Which symbol is typically used in coding to test whether two numbers are equal in value?', opts: ['=', '==', '+', '??'], ans: 1, exp: 'Double equals (==) is the equality operator.' },
        { q: 'Why are conditionals essential for video game programming?', opts: ['To make games colorful', 'To handle game logic like collisions, scoring, and winning conditions', 'To type faster', 'They are not used in games'], ans: 1, exp: 'Games require constant condition evaluation.' }
      ]
    },
    {
      title: 'Input and Output Devices: Sensors, Keyboards & Displays',
      subtitle: 'Microphones, webcams, speakers, printers, and data signal flow',
      quickInfo: 'Computers process information via Input → Processing → Output (IPO). Input devices send data into the CPU (keyboard, mic), while output devices display results (screen, speakers).',
      keyConcepts: [
        'Input devices: Mouse, keyboard, webcam, microphone, touchscreen, temperature sensor.',
        'Processing: The CPU and GPU process raw input data.',
        'Output devices: Monitor display, audio speakers, headphones, ink printer.'
      ],
      quiz: [
        { q: 'Which of the following is an "input" device that sends voice data into the computer?', opts: ['Audio speaker', 'Microphone', 'Inkjet printer', 'Monitor screen'], ans: 1, exp: 'Microphones capture audio as digital input.' },
        { q: 'Which device is an "output" device that provides a physical paper printout?', opts: ['A printer', 'A flatbed scanner', 'A keyboard', 'A webcam'], ans: 0, exp: 'Printers output hardcopy documents.' },
        { q: 'What computer cycle describes: taking in information, calculating it, and presenting results?', opts: ['Download-Upload-Delete', 'Input → Processing → Output (IPO)', 'Click-Drag-Drop', 'Sleep-Wake-Restart'], ans: 1, exp: 'The IPO cycle is fundamental to computing.' },
        { q: 'Is a smartphone touchscreen an input device, an output device, or both?', opts: ['Input only', 'Output only', 'Both: it inputs touch gestures and outputs visual display', 'Neither'], ans: 2, exp: 'Touchscreens combine input and display output.' },
        { q: 'What type of sensor in a smart tablet detects when you rotate the device from portrait to landscape?', opts: ['A microphone', 'An accelerometer / gyroscope', 'A printer ribbon', 'A power plug'], ans: 1, exp: 'Accelerometers measure device orientation.' }
      ]
    },
    {
      title: 'Search Engines: Keywords, Boolean Search & Credibility',
      subtitle: 'Evaluating web sources, quotation queries, domain extensions (.edu, .gov), and bias',
      quickInfo: 'The internet contains trillions of web pages. Effective research requires selecting precise keywords, using quotation marks for exact phrases, and evaluating source credibility.',
      keyConcepts: [
        'Keywords: specific search terms yield more accurate results than vague questions.',
        'Exact match: searching in quotation marks ("polar bear diet") searches the exact phrase.',
        'Domain credibility: .gov (government) and .edu (universities) generally offer vetted data.'
      ],
      quiz: [
        { q: 'What search trick searches for an exact phrase together rather than separate words?', opts: ['Putting the phrase inside quotation marks ("...")', 'Typing in all capital letters', 'Adding lots of exclamation marks', 'Deleting vowels'], ans: 0, exp: 'Quotes enforce exact phrase matches.' },
        { q: 'Which website domain extension indicates an accredited educational university or college?', opts: ['.com', '.edu', '.biz', '.tv'], ans: 1, exp: '.edu is reserved for educational institutions.' },
        { q: 'Why is it risky to believe the very first search result without verifying it with other sources?', opts: ['Anyone can publish unverified or biased information online', 'First results are always broken', 'Search engines are illegal', 'Web pages expire every hour'], ans: 0, exp: 'Critical evaluation verifies factual reliability.' },
        { q: 'What does the Boolean search term "AND" do when searching (e.g., dolphins AND pollution)?', opts: ['Finds pages with dolphins only', 'Finds only pages that contain both terms together', 'Deletes results', 'Plays a video'], ans: 1, exp: '"AND" narrows search to documents containing both.' },
        { q: 'What is "plagiarism" in student research writing?', opts: ['Using a computer', 'Copying someone else\'s words or ideas without giving proper credit / citation', 'Borrowing a pencil', 'Checking out library books'], ans: 1, exp: 'Plagiarism is intellectual theft.' }
      ]
    }
  ],
  music: [
    {
      title: 'The Bass Clef & Grand Staff (Good Boys Do Fine Always)',
      subtitle: 'F Clef, bass staff lines G-B-D-F-A, spaces A-C-E-G, and Middle C connection',
      quickInfo: 'The Bass Clef (F Clef) is used for low-pitched instruments and male voices. Its lines are G-B-D-F-A and spaces are A-C-E-G. Together with Treble Clef, it forms the Grand Staff.',
      keyConcepts: [
        'Bass Clef lines from bottom to top: G, B, D, F, A ("Good Boys Do Fine Always").',
        'Bass Clef spaces from bottom to top: A, C, E, G ("All Cows Eat Grass").',
        'Middle C sits on the ledger line between Treble and Bass staves.'
      ],
      quiz: [
        { q: 'What mnemonic helps remember the spaces of the Bass Clef from bottom to top: A, C, E, G?', opts: ['All Cows Eat Grass', 'Every Good Boy Does Fine', 'FACE', 'Great Big Dogs Fight Animals'], ans: 0, exp: 'All Cows Eat Grass represents A-C-E-G.' },
        { q: 'What note sits on the imaginary ledger line directly between the Treble and Bass staves?', opts: ['Middle C', 'High G', 'Low F', 'Treble A'], ans: 0, exp: 'Middle C links the two staves on the Grand Staff.' },
        { q: 'What two dots curl around the fourth line of the Bass Clef, giving it the name F Clef?', opts: ['The F line', 'The C line', 'The G line', 'The B line'], ans: 0, exp: 'The bass clef dots surround the F line.' },
        { q: 'Which instrument plays its music in the Bass Clef?', opts: ['Piccolo', 'Cello or Tuba', 'Violin', 'Soprano flute'], ans: 1, exp: 'Cello and tuba read low-pitched bass clef.' },
        { q: 'What are the five lines of the Bass Clef from bottom to top?', opts: ['E-G-B-D-F', 'G-B-D-F-A', 'F-A-C-E', 'A-B-C-D-E'], ans: 1, exp: 'G-B-D-F-A are the bass clef lines.' }
      ]
    },
    {
      title: 'Time Signatures: 4/4, 3/4 (Waltz Time) and 2/4 (March)',
      subtitle: 'Top number (beats per measure), bottom number (note getting the beat), and barlines',
      quickInfo: 'A time signature tells how rhythm is counted. The top number specifies beats per measure; the bottom shows note value. 4/4 is common time, 3/4 is waltz time, and 2/4 is marching time.',
      keyConcepts: [
        'Top number = beats in each measure; Bottom number = note value (4 = quarter note).',
        '4/4 (Common Time): 4 quarter note beats per measure.',
        '3/4 (Waltz Time): 3 quarter note beats per measure (ONE-two-three, ONE-two-three).'
      ],
      quiz: [
        { q: 'In a 3/4 time signature, how many beats are in each measure?', opts: ['2 beats', '3 beats', '4 beats', '6 beats'], ans: 1, exp: 'The top number specifies 3 beats per bar.' },
        { q: 'What famous dance rhythm is traditionally written in 3/4 time?', opts: ['The March', 'The Waltz', 'Hip-hop', 'Samba'], ans: 1, exp: 'Waltzes are characterized by 3/4 triple meter.' },
        { q: 'What does the bottom number "4" in a 4/4 time signature stand for?', opts: ['Four whole notes', 'The quarter note receives 1 beat', 'Four instruments', 'Four minutes long'], ans: 1, exp: '4 in the denominator denotes the quarter note.' },
        { q: 'What vertical lines divide the musical staff into measures of equal beats?', opts: ['Barlines', 'Ledger lines', 'Slurs', 'Clefs'], ans: 0, exp: 'Barlines segment measures.' },
        { q: 'Which time signature is characteristic of a military marching band (LEFT, right, LEFT, right)?', opts: ['3/4 time', '2/4 time', '7/8 time', '12/8 time'], ans: 1, exp: '2/4 duple meter matches marching strides.' }
      ]
    },
    {
      title: 'Woodwind Reeds: Clarinets, Oboes and Saxophones',
      subtitle: 'Single reed vs double reed, embouchure, acoustic resonance, and keypads',
      quickInfo: 'Most woodwind instruments rely on vibrating wooden cane reeds. Clarinets and saxophones use a single reed tied to a mouthpiece; oboes and bassoons use double reeds that vibrate together.',
      keyConcepts: [
        'Single reed instruments: Clarinet and Saxophone (reed clamped with ligature).',
        'Double reed instruments: Oboe, English Horn, and Bassoon (two cane blades tied together).',
        'The flute is a reedless woodwind, sound is made by blowing across an open hole.'
      ],
      quiz: [
        { q: 'Which woodwind instrument uses a single flat reed clamped to a mouthpiece?', opts: ['The Clarinet', 'The Oboe', 'The Bassoon', 'The Triangle'], ans: 0, exp: 'Clarinets use a single cane reed.' },
        { q: 'What material are orchestral woodwind reeds traditionally carved from?', opts: ['Plastic only', 'Natural giant cane (Arundo donax grass)', 'Metal wire', 'Rubber'], ans: 1, exp: 'Arundo donax cane is the traditional reed material.' },
        { q: 'Which of the following is a "double-reed" instrument?', opts: ['Saxophone', 'Oboe', 'Flute', 'Trumpet'], ans: 1, exp: 'The oboe uses two cane reeds vibrating together.' },
        { q: 'Why is the brass-bodied Saxophone classified as a woodwind rather than a brass instrument?', opts: ['Because it is painted yellow', 'Because it produces sound via a wooden vibrating reed rather than buzzing lips', 'Because it plays quiet notes', 'By mistake'], ans: 1, exp: 'Instruments with reeds belong to the woodwind family.' },
        { q: 'What is the musician\'s mouth and lip position around a woodwind mouthpiece called?', opts: ['Posture', 'Embouchure', 'Pizzicato', 'Arpeggio'], ans: 1, exp: 'Embouchure is the facial and lip muscle positioning.' }
      ]
    }
  ],
  crs: [
    {
      title: 'Moses, the Exodus and the Crossing of the Red Sea',
      subtitle: 'The burning bush, Pharaoh, the ten plagues, Passover, and parting the waters',
      quickInfo: 'God commanded Moses to lead the enslaved Israelites out of Egypt. After ten plagues, Pharaoh released them. When Egyptian chariots pursued them, God parted the Red Sea for their miraculous escape.',
      keyConcepts: [
        'God revealed His divine name (I AM) to Moses through a burning bush on Mount Horeb.',
        'Passover commemorates the angel passing over houses marked with lamb\'s blood.',
        'The miraculous parting of the Red Sea demonstrated God\'s deliverance and power.'
      ],
      quiz: [
        { q: 'How did God first appear to Moses in the desert of Midian?', opts: ['In a roaring whirlwind', 'In a burning bush that was not consumed by the fire', 'As an Egyptian prince', 'In a dream about stars'], ans: 1, exp: 'Exodus 3 records God speaking from the unburnt burning bush.' },
        { q: 'What demand did Moses repeatedly make to the Egyptian Pharaoh on behalf of God?', opts: ['"Pay us taxes"', '"Let my people go, that they may worship me"', '"Build more pyramids"', '"Crown me king"'], ans: 1, exp: '"Let my people go" was Moses\'s prophetic proclamation.' },
        { q: 'What happened when Moses held out his staff over the waters of the Red Sea?', opts: ['The water turned into ice', 'God divided the waters with a strong east wind, allowing Israel to cross on dry ground', 'The sea vanished forever', 'Boats fell from the sky'], ans: 1, exp: 'The waters were divided, forming a dry path.' },
        { q: 'What annual feast remembers the night God spared Israelite firstborns in Egypt?', opts: ['Hanukkah', 'Passover', 'Pentecost', 'Feast of Tabernacles'], ans: 1, exp: 'Passover commemorates this deliverance.' },
        { q: 'What food did God miraculously rain down from heaven to feed the Israelites in the wilderness?', opts: ['Bread loaves', 'Manna and quail', 'Figs and olives', 'Fish'], ans: 1, exp: 'God provided daily manna in the wilderness.' }
      ]
    },
    {
      title: 'The Wisdom of Solomon and Building the Temple',
      subtitle: 'The prayer at Gibeon, ruling between two mothers, and constructing Jerusalem\'s temple',
      quickInfo: 'When God offered young King Solomon whatever he wished, Solomon asked not for riches or long life, but for wisdom to govern God\'s people justly. Solomon built the magnificent First Temple in Jerusalem.',
      keyConcepts: [
        'Solomon requested a discerning heart to govern and judge between right and wrong.',
        'God blessed Solomon with incomparable wisdom, plus wealth and honor.',
        'Solomon built the First Temple on Mount Moriah using cedar of Lebanon and gold.'
      ],
      quiz: [
        { q: 'What did young King Solomon ask God for when offered any gift in a dream?', opts: ['Infinite gold and wealth', 'Victory over all his enemies', 'A discerning heart of wisdom to govern the people justly', 'Long physical life'], ans: 2, exp: 'Solomon chose wisdom over wealth or power.' },
        { q: 'How did Solomon solve the dispute between two women claiming the same baby?', opts: ['He flipped a coin', 'He proposed cutting the baby in half, revealing the true compassionate mother who begged to save the child', 'He gave the baby to a guard', 'He exiled both women'], ans: 1, exp: 'The true mother\'s love revealed her identity.' },
        { q: 'What monumental holy building did Solomon construct in the city of Jerusalem?', opts: ['The Tower of Babel', 'The First Temple of the Lord', 'The Colosseum', 'The Pyramids'], ans: 1, exp: 'Solomon built the First Temple.' },
        { q: 'What famous queen traveled across Arabia with camels bearing spices and gold to test Solomon\'s wisdom?', opts: ['The Queen of Sheba', 'Queen Esther', 'Queen Jezebel', 'Queen Cleopatra'], ans: 0, exp: 'The Queen of Sheba visited Solomon.' },
        { q: 'Which biblical book of practical wisdom sayings is largely attributed to Solomon?', opts: ['Psalms', 'Proverbs', 'Genesis', 'Acts'], ans: 1, exp: 'Solomon authored many proverbs.' }
      ]
    },
    {
      title: 'The Fruit of the Spirit: Love, Joy, Peace, Patience',
      subtitle: 'Paul\'s epistle to the Galatians, character virtues, and living by the Spirit',
      quickInfo: 'In Galatians 5, the Apostle Paul describes the Fruit of the Spirit—nine godly character traits produced in believers: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control.',
      keyConcepts: [
        'The nine fruits: Love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control.',
        'The fruit is singular ("fruit", not "fruits"), representing a unified godly character.',
        'These virtues reflect the nature of Christ in daily relationships.'
      ],
      quiz: [
        { q: 'In which New Testament epistle does the Apostle Paul describe the Fruit of the Spirit?', opts: ['Revelation', 'Galatians (Chapter 5)', 'Romans', 'James'], ans: 1, exp: 'Galatians 5:22-23 lists the Fruit of the Spirit.' },
        { q: 'Which of the following is NOT one of the nine fruits of the Spirit?', opts: ['Patience', 'Kindness', 'Self-control', 'Selfish ambition'], ans: 3, exp: 'Selfish ambition is contrary to the Spirit.' },
        { q: 'What fruit of the Spirit describes the ability to stay calm and endure delays or provocations without anger?', opts: ['Patience (long-suffering)', 'Wrath', 'Pride', 'Envy'], ans: 0, exp: 'Patience endures delay with peaceful composure.' },
        { q: 'What does "self-control" mean in Christian living?', opts: ['Controlling other people', 'Disciplining one\'s own desires, impulses, and tongue', 'Doing whatever you feel like', 'Avoiding all work'], ans: 1, exp: 'Self-control governs personal actions and speech.' },
        { q: 'According to Paul, is there any law that opposes or forbids these spiritual virtues?', opts: ['Yes, Roman law forbade them', '"Against such things there is no law"', 'Only in winter', 'They are strictly forbidden'], ans: 1, exp: 'Galatians 5:23 declares: "Against such things there is no law."' }
      ]
    }
  ]
};
