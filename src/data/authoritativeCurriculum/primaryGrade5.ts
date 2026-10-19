import { GradeAuthoritativeMap } from './types';

export const GRADE_5_CURRICULUM: GradeAuthoritativeMap = {
  math: [
    {
      title: 'Fractions with Unlike Denominators & Multiplying Fractions',
      subtitle: 'Least common multiples, cross-canceling, and multiplying fractions by whole numbers',
      quickInfo: 'To add or subtract fractions with unlike denominators, find the Least Common Denominator (LCD). To multiply fractions, multiply numerators straight across and denominators straight across.',
      keyConcepts: [
        'Find LCD using Least Common Multiple (LCM): e.g., for 1/3 and 1/4, LCD is 12.',
        'Multiplying fractions: (a/b) × (c/d) = (a × c) / (b × d).',
        'Cross-canceling simplifies factors before multiplying numerators and denominators.'
      ],
      quiz: [
        { q: 'What is the sum of 1/3 + 1/4?', opts: ['2/7', '7/12', '1/12', '5/12'], ans: 1, exp: '1/3 = 4/12; 1/4 = 3/12; 4/12 + 3/12 = 7/12.' },
        { q: 'Multiply: 2/5 × 3/4. What is the simplified answer?', opts: ['5/9', '6/20 (reduces to 3/10)', '8/15', '6/9'], ans: 1, exp: '(2×3)/(5×4) = 6/20 = 3/10.' },
        { q: 'What is the least common denominator (LCD) for fractions with denominators 6 and 8?', opts: ['14', '24', '48', '16'], ans: 1, exp: 'Multiples of 6: 6, 12, 18, 24; multiples of 8: 8, 16, 24. LCD = 24.' },
        { q: 'Calculate: 3 × 2/5 = ?', opts: ['6/5 (or 1 1/5)', '6/15', '5/5', '1/5'], ans: 0, exp: '3/1 × 2/5 = 6/5 = 1 1/5.' },
        { q: 'What is 5/6 - 1/2?', opts: ['4/4', '2/6 (or 1/3)', '1/6', '3/6'], ans: 1, exp: '5/6 - 3/6 = 2/6 = 1/3.' }
      ]
    },
    {
      title: 'Decimals: Place Value, Addition, Subtraction & Multiplication',
      subtitle: 'Tenths, hundredths, thousandths, lining up decimal points, and shifting points',
      quickInfo: 'Decimals extend base-ten numbers to parts of a whole: tenths (0.1), hundredths (0.01), and thousandths (0.001). When adding or subtracting, always align decimal points vertically.',
      keyConcepts: [
        'Place values right of the decimal: tenths, hundredths, thousandths.',
        'Lining up decimal points keeps place values properly aligned in addition/subtraction.',
        'When multiplying decimals, count total decimal places in factors and place in the product.'
      ],
      quiz: [
        { q: 'What is the place value of the digit 7 in the number 4.279?', opts: ['Tens', 'Tenths', 'Hundredths', 'Thousandths'], ans: 2, exp: 'The 7 is two places right of the decimal (hundredths).' },
        { q: 'Calculate: 14.5 + 3.75', opts: ['17.80', '18.25', '17.25', '18.50'], ans: 1, exp: '14.50 + 3.75 = 18.25.' },
        { q: 'Calculate: 20.0 - 6.45', opts: ['13.55', '14.55', '13.65', '14.65'], ans: 0, exp: '20.00 - 6.45 = 13.55.' },
        { q: 'What is 0.3 × 0.4?', opts: ['1.2', '0.12', '0.012', '12.0'], ans: 1, exp: '3 × 4 = 12; two total decimal places = 0.12.' },
        { q: 'Which decimal is greater: 0.5 or 0.059?', opts: ['0.059 is greater', '0.5 is greater', 'They are equal', 'Neither'], ans: 1, exp: '0.500 is much greater than 0.059.' }
      ]
    },
    {
      title: 'Volume of Rectangular Prisms & 3D Geometry',
      subtitle: 'Cubic units, Volume = Length × Width × Height, and composite 3D solids',
      quickInfo: 'Volume measures the 3D space enclosed inside a solid in cubic units (cm³, in³). For a rectangular prism, Volume = Length × Width × Height (or Base Area × Height).',
      keyConcepts: [
        'Volume formula: V = l × w × h or V = B × h (where B is base area).',
        'Cubic units (cm³, m³, in³) indicate three-dimensional volume.',
        'Decompose complex composite shapes into separate rectangular prisms to sum volumes.'
      ],
      quiz: [
        { q: 'What is the volume of a rectangular shipping box measuring 5 cm by 4 cm by 3 cm?', opts: ['60 cm³', '12 cm³', '24 cm³', '120 cm³'], ans: 0, exp: 'Volume = 5 × 4 × 3 = 60 cubic centimeters.' },
        { q: 'If the base area of a storage tank is 25 square meters and its height is 4 meters, what is its volume?', opts: ['29 m³', '100 m³', '50 m³', '200 m³'], ans: 1, exp: 'Volume = Base Area × Height = 25 × 4 = 100 m³.' },
        { q: 'What unit is used to measure volume?', opts: ['Centimeters (cm)', 'Square centimeters (cm²)', 'Cubic centimeters (cm³)', 'Degrees Celsius'], ans: 2, exp: 'Volume is measured in 3D cubic units.' },
        { q: 'How many faces does a rectangular prism have?', opts: ['4', '6', '8', '12'], ans: 1, exp: 'A rectangular prism has 6 rectangular faces.' },
        { q: 'What is the volume of a cube whose edges are each 4 inches long?', opts: ['16 in³', '48 in³', '64 in³', '128 in³'], ans: 2, exp: 'Volume = 4 × 4 × 4 = 64 cubic inches.' }
      ]
    }
  ],
  'english-lang': [
    {
      title: 'Persuasive Writing: Claims, Evidence & Counterarguments',
      subtitle: 'Thesis statements, rhetorical appeals (ethos, pathos, logos), and rebuttals',
      quickInfo: 'Persuasive writing aims to convince readers of an opinion or call to action. A strong essay presents a clear claim/thesis, backs it with verified facts/evidence, and addresses counterarguments.',
      keyConcepts: [
        'Claim / Thesis: the author\'s central debatable position.',
        'Evidence: verifiable facts, statistics, research studies, and expert quotations.',
        'Counterargument and Rebuttal: acknowledging an opposing view and showing why yours is stronger.'
      ],
      quiz: [
        { q: 'What is a "claim" or "thesis statement" in persuasive writing?', opts: ['A question about the author\'s life', 'The primary debatable argument the writer is defending', 'A quote from a friend', 'The dictionary definition of a word'], ans: 1, exp: 'A claim defines the author\'s core stance.' },
        { q: 'What makes evidence strong and reliable in an argumentative essay?', opts: ['Personal insults against opponents', 'Verified statistics, factual studies, and credible expert testimony', 'Repeating your opinion louder', 'Writing in bold font'], ans: 1, exp: 'Credible, verifiable data supports claims.' },
        { q: 'What is a "rebuttal" in persuasive debate?', opts: ['Giving up on your argument', 'The explanation of why an opposing counterargument is flawed or insufficient', 'A concluding signature', 'A spelling check'], ans: 1, exp: 'Rebuttals refute counterarguments.' },
        { q: 'Which rhetorical appeal appeals to logic, data, and reasoning?', opts: ['Pathos', 'Logos', 'Ethos', 'Mythos'], ans: 1, exp: 'Logos is logical reasoning and evidence.' },
        { q: 'Why should a persuasive writer acknowledge the opposing viewpoint?', opts: ['To confuse the reader', 'To demonstrate fairness and strengthen credibility before disproving it', 'Because it is required by law', 'To surrender'], ans: 1, exp: 'Addressing counterarguments builds rhetorical credibility.' }
      ]
    },
    {
      title: 'Complex Sentences: Independent vs Dependent Clauses',
      subtitle: 'Subordinating conjunctions (although, because, since, while) and comma rules',
      quickInfo: 'A complex sentence contains one independent clause (can stand alone) and at least one dependent clause (cannot stand alone). When the dependent clause comes first, use a comma.',
      keyConcepts: [
        'Independent clause: complete thought with subject and predicate.',
        'Dependent clause: starts with a subordinating conjunction (since, although, because).',
        'Comma rule: Dependent clause first = comma needed; Independent first = no comma needed.'
      ],
      quiz: [
        { q: 'Which of the following is a dependent clause that cannot stand alone as a sentence?', opts: ['The train arrived early.', 'Although she practiced every afternoon', 'We ate dinner together.', 'The dogs ran outside.'], ans: 1, exp: '"Although she practiced..." is an incomplete dependent clause.' },
        { q: 'Which sentence is correctly punctuated?', opts: ['Because it was raining we postponed the game.', 'Because it was raining, we postponed the game.', 'Because it was raining we, postponed the game.', 'We postponed the game, because it was raining.'], ans: 1, exp: 'Dependent clause introductory phrase requires a comma.' },
        { q: 'What type of conjunction introduces a dependent clause (e.g., although, since, unless)?', opts: ['Coordinating conjunction', 'Subordinating conjunction', 'Correlative conjunction', 'Interjection'], ans: 1, exp: 'Subordinating conjunctions create dependent clauses.' },
        { q: 'Which sentence is a complex sentence?', opts: ['The sun rose, and birds began to chirp.', 'When the bell rang, the students opened their notebooks.', 'She walked to the park.', 'I like apples, oranges, and pears.'], ans: 1, exp: 'Combines dependent clause ("When the bell rang") with independent clause.' },
        { q: 'What is the core difference between a clause and a phrase?', opts: ['Clauses contain both a subject and a verb; phrases do not', 'Phrases are longer', 'Clauses are always questions', 'There is no difference'], ans: 0, exp: 'Clauses have subject-predicate structure.' }
      ]
    },
    {
      title: 'Theme vs Topic in Literature',
      subtitle: 'Universal life lessons, author\'s message, motifs, and textual proof',
      quickInfo: 'A topic is what a story is about in a word or two (e.g., friendship, courage). The theme is the deeper universal life lesson or message the author reveals about human nature.',
      keyConcepts: [
        'Topic = subject (e.g., loyalty, perseverance, grief).',
        'Theme = full statement/lesson (e.g., "True friends stand by each other during hardship").',
        'Themes are universal and apply beyond the specific characters to real human life.'
      ],
      quiz: [
        { q: 'What is the key difference between a literary "topic" and a literary "theme"?', opts: ['Topic is the subject word; theme is the full message or universal life lesson', 'Theme is always the title', 'Topic is fiction only', 'They are exact synonyms'], ans: 0, exp: 'Topic is the broad subject; theme is the underlying message.' },
        { q: 'Which of the following is an example of a literary "theme"?', opts: ['Courage', 'Dogs', '"Bravery is not the absence of fear, but acting despite it"', 'Chapter 4'], ans: 2, exp: 'A full universal statement about human experience is a theme.' },
        { q: 'How does an analytical reader identify the theme of a novel?', opts: ['By counting the number of pages', 'By analyzing how characters change, overcome conflicts, and what lessons they learn', 'By reading only the first sentence', 'By checking the price tag'], ans: 1, exp: 'Character growth and conflict resolution reveal theme.' },
        { q: 'Can a story have more than one theme?', opts: ['Yes, complex literary works often develop multiple thematic messages', 'No, rules forbid more than one theme', 'Only if written in verse', 'Never'], ans: 0, exp: 'Rich narratives weave multiple themes.' },
        { q: 'What is a recurring object, concept, or symbol that helps develop a theme called?', opts: ['A motif', 'A font', 'A margin', 'An index'], ans: 0, exp: 'A motif is a repeating thematic element.' }
      ]
    }
  ],
  science: [
    {
      title: 'Earth Systems: Geosphere, Hydrosphere, Atmosphere & Biosphere',
      subtitle: 'Four sphere interactions, carbon cycles, water distribution, and climate',
      quickInfo: 'Earth operates as four interconnected subsystems: Geosphere (rocks/land), Hydrosphere (all water/ice), Atmosphere (air envelope), and Biosphere (all living organisms).',
      keyConcepts: [
        'Geosphere: Earth\'s crust, mantle, core, rocks, soils, and landforms.',
        'Hydrosphere: oceans, lakes, rivers, glaciers, and groundwater (97% is ocean saltwater).',
        'Atmosphere: nitrogen, oxygen, and trace greenhouse gases protecting life.',
        'Biosphere: all living plants, animals, fungi, and microbes.'
      ],
      quiz: [
        { q: 'Which Earth sphere includes all of the planet\'s liquid water, oceans, rivers, and polar ice?', opts: ['The Atmosphere', 'The Hydrosphere', 'The Geosphere', 'The Biosphere'], ans: 1, exp: 'Hydrosphere encompasses all planetary water.' },
        { q: 'What percentage of Earth\'s total water is saline saltwater found in oceans?', opts: ['About 50%', 'About 70%', 'About 97%', 'About 10%'], ans: 2, exp: 'Approximately 97% is ocean saltwater; only ~3% is fresh.' },
        { q: 'When plants (biosphere) draw up water (hydrosphere) from soil (geosphere) and release vapor into air (atmosphere), what does this demonstrate?', opts: ['Spheres never interact', 'Dynamic interactions connecting all four Earth systems', 'That Earth is collapsing', 'A malfunction of gravity'], ans: 1, exp: 'Earth\'s spheres interact continuously.' },
        { q: 'What gas makes up approximately 78% of Earth\'s atmosphere?', opts: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Argon'], ans: 2, exp: 'Nitrogen comprises ~78% of atmospheric air.' },
        { q: 'Which sphere contains solid rock, continental crust, and volcanic magma?', opts: ['The Geosphere', 'The Biosphere', 'The Stratosphere', 'The Mesosphere'], ans: 0, exp: 'The geosphere is the solid mineral body of Earth.' }
      ]
    },
    {
      title: 'Solar System, Sun\'s Gravity & Planetary Orbits',
      subtitle: 'Inner rocky vs outer gas planets, Kepler\'s laws, rotation vs revolution',
      quickInfo: 'Our solar system consists of the Sun orbited by eight planets, dwarf planets, moons, and asteroids. The Sun\'s massive gravity keeps planets in elliptical orbits.',
      keyConcepts: [
        'Inner rocky planets: Mercury, Venus, Earth, Mars (dense and smaller).',
        'Outer gas/ice giants: Jupiter, Saturn, Uranus, Neptune (massive with rings/moons).',
        'Rotation (spinning on axis) creates day/night; Revolution (orbiting Sun) creates seasons/years.'
      ],
      quiz: [
        { q: 'What keeps planets in stable elliptical orbits around the Sun rather than flying off into space?', opts: ['Solar wind', 'The Sun\'s immense gravitational attraction', 'Magnetic repulsion', 'Cosmic strings'], ans: 1, exp: 'Solar gravity dictates planetary orbital motion.' },
        { q: 'What causes the daily cycle of day and night on planet Earth?', opts: ['Earth revolving around the Sun', 'Earth rotating once every 24 hours on its tilted axis', 'The Moon blocking sunlight', 'Sun turning on and off'], ans: 1, exp: 'Axial rotation produces daylight and nighttime.' },
        { q: 'Which of the following planets is a rocky terrestrial planet?', opts: ['Jupiter', 'Saturn', 'Mars', 'Neptune'], ans: 2, exp: 'Mercury, Venus, Earth, and Mars are terrestrial rocky planets.' },
        { q: 'Which is the largest planet in our solar system by both mass and volume?', opts: ['Saturn', 'Jupiter', 'Earth', 'Uranus'], ans: 1, exp: 'Jupiter is the massive gas giant king of the solar system.' },
        { q: 'Approximately how long does it take Earth to complete one full revolution around the Sun?', opts: ['24 hours', '28 days', '365.25 days (one year)', '10 years'], ans: 2, exp: 'One orbital revolution takes ~365.25 days.' }
      ]
    },
    {
      title: 'Chemical vs Physical Changes in Matter',
      subtitle: 'Evidence of chemical reactions, precipitates, conservation of mass, and reversibility',
      quickInfo: 'A physical change alters appearance or state without changing chemical identity (e.g., melting ice). A chemical change forms new substances with different chemical properties (e.g., rusting iron).',
      keyConcepts: [
        'Physical changes: phase changes (melting, boiling), cutting, dissolving (reversible).',
        'Chemical changes: combustion, rusting, baking, oxidation (produces new matter).',
        'Evidence of chemical reaction: gas production (bubbles), odor change, color shift, temperature change.'
      ],
      quiz: [
        { q: 'Which of the following is an example of a chemical change?', opts: ['Tearing a sheet of paper in half', 'Melting an ice cube in a cup', 'An iron nail rusting outdoors', 'Dissolving sugar in hot tea'], ans: 2, exp: 'Rusting forms a new substance (iron oxide).' },
        { q: 'What happens to the total mass of substances during any physical or chemical change?', opts: ['Mass is destroyed', 'Mass is completely conserved (remains exactly equal)', 'Mass doubles automatically', 'Mass turns into heat completely'], ans: 1, exp: 'The Law of Conservation of Mass.' },
        { q: 'What is a strong visual clue that a chemical reaction has taken place?', opts: ['Spilling water', 'Unexpected gas bubbles, color change, or release of heat and light', 'Changing the shape with clay', 'Freezing water'], ans: 1, exp: 'Gas, color change, or thermal changes signal chemical reactions.' },
        { q: 'Is dissolving table salt in water a physical or chemical change?', opts: ['A physical change, because salt can be recovered by evaporating the water', 'A chemical change, because salt vanishes forever', 'A nuclear change', 'Neither'], ans: 0, exp: 'Dissolution is physical and reversible.' },
        { q: 'Why is baking a cake in an oven considered a chemical change?', opts: ['Because the cake turns into liquid', 'Heat causes irreversible chemical reactions between ingredients producing a new substance', 'Because you can un-bake it easily', 'Because it gets cold'], ans: 1, exp: 'Thermal baking reactions transform chemical compounds irreversibly.' }
      ]
    }
  ],
  'social-studies': [
    {
      title: 'The American Revolution and the Declaration of Independence',
      subtitle: 'Taxation without representation, Boston Tea Party, 1776, and Thomas Jefferson',
      quickInfo: 'In 1776, thirteen American colonies declared independence from Great Britain. Frustrated by taxation without representation, leaders signed Thomas Jefferson\'s Declaration of Independence.',
      keyConcepts: [
        'Causes: Stamp Act, Tea Act, Boston Massacre, and lack of colonial voice in Parliament.',
        'The Declaration of Independence (July 4, 1776): all men have unalienable rights to life, liberty, and pursuit of happiness.',
        'George Washington commanded the Continental Army to victory.'
      ],
      quiz: [
        { q: 'What famous colonial slogan protested British taxes levied without colonial parliamentary voice?', opts: ['"Liberty or Taxes"', '"No Taxation Without Representation"', '"Peace at All Costs"', '"Kings Rule Forever"'], ans: 1, exp: '"No taxation without representation" galvanized the revolution.' },
        { q: 'Who was the primary draftsman of the historic Declaration of Independence in 1776?', opts: ['Benjamin Franklin', 'Thomas Jefferson', 'George Washington', 'Alexander Hamilton'], ans: 1, exp: 'Jefferson drafted the Declaration.' },
        { q: 'According to the Declaration of Independence, what are three unalienable human rights?', opts: ['Life, Liberty, and Property', 'Life, Liberty, and the pursuit of Happiness', 'Health, Wealth, and Fame', 'Power, Glory, and Land'], ans: 1, exp: 'Life, liberty, and the pursuit of happiness.' },
        { q: 'What colonial protest involved dumping 342 chests of British tea into the harbor in 1773?', opts: ['The Boston Tea Party', 'The Philadelphia Convention', 'The Tea Riot of New York', 'The Stamp Act Rebellion'], ans: 0, exp: 'The Boston Tea Party resisted tea tax monopolies.' },
        { q: 'Who served as commander-in-chief of the American Continental Army during the Revolutionary War?', opts: ['John Adams', 'George Washington', 'Paul Revere', 'Patrick Henry'], ans: 1, exp: 'George Washington led Continental forces.' }
      ]
    },
    {
      title: 'The United States Constitution & Bill of Rights',
      subtitle: 'Preamble, Philadelphia Convention 1787, federalism, and the first ten amendments',
      quickInfo: 'In 1787, the Constitutional Convention drafted the supreme law of the United States. The Bill of Rights (first 10 amendments) guarantees fundamental liberties like speech, religion, and press.',
      keyConcepts: [
        'Preamble: "We the People of the United States, in Order to form a more perfect Union..."',
        'Federalism: power shared between federal national government and individual states.',
        'First Amendment guarantees: freedom of speech, religion, press, assembly, and petition.'
      ],
      quiz: [
        { q: 'What opening three words establish the concept of popular sovereignty in the US Constitution\'s Preamble?', opts: ['"In God We Trust"', '"We the People"', '"Four score and"', '"Congress shall make"'], ans: 1, exp: '"We the People" declares governance stems from citizens.' },
        { q: 'What are the first ten amendments to the United States Constitution collectively called?', opts: ['The Articles of Confederation', 'The Bill of Rights', 'The Federalist Papers', 'The Magna Carta'], ans: 1, exp: 'The Bill of Rights safeguards individual civil liberties.' },
        { q: 'Which amendment protects freedom of speech, press, religion, and peaceful assembly?', opts: ['The First Amendment', 'The Second Amendment', 'The Fifth Amendment', 'The Tenth Amendment'], ans: 0, exp: 'The First Amendment enshrines fundamental expressive freedoms.' },
        { q: 'In which historic city did delegates gather in 1787 to write the United States Constitution?', opts: ['Boston', 'Philadelphia', 'Washington, D.C.', 'New York City'], ans: 1, exp: 'The Constitutional Convention met at Independence Hall in Philadelphia.' },
        { q: 'What does "Federalism" mean in the American constitutional framework?', opts: ['The President has total dictatorial power', 'Power is divided and shared between national and state governments', 'Only cities make laws', 'No government exists'], ans: 1, exp: 'Federalism divides authority between state and federal levels.' }
      ]
    },
    {
      title: 'Westward Expansion and the Transcontinental Railroad',
      subtitle: 'Manifest destiny, Oregon Trail, Gold Rush of 1849, and impact on Native Americans',
      quickInfo: 'In the 19th century, millions migrated west via trails and the 1869 Transcontinental Railroad. This expansion spurred economic growth but displaced Native American tribal nations.',
      keyConcepts: [
        'The 1849 California Gold Rush sparked mass westward migration.',
        'The Transcontinental Railroad (promontory point, Utah 1869) connected East and West coasts.',
        'Indian Removal policies and westward treaties fractured native sovereignty and lands.'
      ],
      quiz: [
        { q: 'What event in 1848-1849 caused hundreds of thousands of "Forty-Niners" to rush to California?', opts: ['Discovery of gold at Sutter\'s Mill', 'The Civil War', 'The opening of Disney', 'Cheap farmland'], ans: 0, exp: 'The 1849 Gold Rush drove rapid settlement.' },
        { q: 'Where did the Union Pacific and Central Pacific railroads meet in 1869 to complete the Transcontinental Railroad?', opts: ['Promontory Summit, Utah', 'Chicago, Illinois', 'Denver, Colorado', 'Sacramento, California'], ans: 0, exp: 'The Golden Spike was driven at Promontory Summit.' },
        { q: 'What was the rigorous 2,000-mile wagon trail traversed by pioneer families from Missouri to the Pacific Northwest called?', opts: ['The Santa Fe Trail', 'The Oregon Trail', 'The Appalachian Trail', 'The Route 66'], ans: 1, exp: 'The Oregon Trail carried westward wagon trains.' },
        { q: 'What devastating impact did 19th-century westward expansion have on indigenous tribes?', opts: ['Immediate equality for all', 'Forced relocation, loss of ancestral territories, and depletion of bison herds', 'Tribes were unaffected', 'Universal peace treaties'], ans: 1, exp: 'Expansion caused severe displacement and ecological devastation.' },
        { q: 'What communication technology revolutionized instant messaging across the continent in the 1840s?', opts: ['The telegraph using Morse code', 'The telephone', 'The internet', 'The radio broadcast'], ans: 0, exp: 'Morse telegraphy enabled rapid cross-country communications.' }
      ]
    }
  ],
  art: [
    {
      title: 'Two-Point Perspective & Vanishing Points',
      subtitle: 'Corner views, left and right vanishing points, and architectural drawing',
      quickInfo: 'Two-point perspective is used when viewing an object or building from an angle corner rather than head-on. Receding orthogonal lines travel toward two separate vanishing points on the horizon line.',
      keyConcepts: [
        'Two vanishing points (VP1 and VP2) placed on opposite sides of the horizon line.',
        'Vertical edges remain strictly vertical and perpendicular to the horizon.',
        'Creates realistic architectural depth for buildings, street corners, and interior rooms.'
      ],
      quiz: [
        { q: 'How many vanishing points are situated on the horizon line in two-point perspective?', opts: ['1', '2', '3', 'Infinite'], ans: 1, exp: 'Two-point perspective uses two vanishing points.' },
        { q: 'When looking at a building in two-point perspective, what part of the building faces the viewer directly?', opts: ['A flat rectangular wall', 'The corner edge of the building', 'The roof only', 'The back alley'], ans: 1, exp: 'The viewer looks directly at the vertical corner.' },
        { q: 'In two-point perspective, what direction do true vertical lines (like corners of walls) run?', opts: ['Diagonally to the right VP', 'Diagonally to the left VP', 'Straight up and down (perpendicular to horizon)', 'In circles'], ans: 2, exp: 'Vertical corner lines remain vertical.' },
        { q: 'What happens if you place the two vanishing points too close together on the paper?', opts: ['The drawing becomes invisible', 'The perspective looks distorted and unnaturally pinched', 'The paper tears', 'It turns into 3D glasses'], ans: 1, exp: 'Close vanishing points cause optical distortion.' },
        { q: 'What profession heavily utilizes two-point perspective drawing daily?', opts: ['Architects and concept designers', 'Accountants', 'Librarians', 'Dentists'], ans: 0, exp: 'Architects sketch structural concepts in two-point perspective.' }
      ]
    },
    {
      title: 'Principles of Design: Contrast, Balance & Rhythm',
      subtitle: 'Symmetrical vs asymmetrical balance, emphasis, unity, and visual movement',
      quickInfo: 'The principles of design organize the elements of art. Balance creates visual stability (symmetrical or asymmetrical), contrast creates visual drama, and rhythm guides the viewer\'s eye.',
      keyConcepts: [
        'Symmetrical balance: mirror-image equality; Asymmetrical balance: visual weight equality without identical sides.',
        'Contrast: juxtaposing opposites (dark/light, rough/smooth, large/small) for visual pop.',
        'Emphasis / Focal Point: the first area that attracts attention in an artwork.'
      ],
      quiz: [
        { q: 'What is the visual focal point in a work of art?', opts: ['The artist\'s signature', 'The primary area of interest that commands the viewer\'s eye first', 'The bottom left corner', 'The wooden easel'], ans: 1, exp: 'The focal point is the center of visual emphasis.' },
        { q: 'What type of balance features two halves of an artwork that are exact mirror images of each other?', opts: ['Asymmetrical balance', 'Symmetrical (formal) balance', 'Radial balance', 'Chaos'], ans: 1, exp: 'Symmetry is mirror-image reflection.' },
        { q: 'How can an artist create powerful visual "contrast" in a painting?', opts: ['Using only identical shades of beige', 'Placing deep black shadows directly beside brilliant white highlights', 'Making all shapes small', 'Erasing the canvas'], ans: 1, exp: 'Opposites in value or hue create high contrast.' },
        { q: 'What principle of design refers to the feeling of completeness and visual harmony across the entire composition?', opts: ['Unity', 'Isolation', 'Confusion', 'Disproportion'], ans: 0, exp: 'Unity ties compositional elements together harmoniously.' },
        { q: 'How does radial balance organize visual elements in an artwork?', opts: ['Radiating outwards from a central point (like a mandala or wheel)', 'In a flat horizontal line', 'Randomly in one corner', 'In an upside-down pyramid'], ans: 0, exp: 'Radial balance radiates from a central nexus.' }
      ]
    },
    {
      title: 'Impressionism: Claude Monet and Light Studies',
      subtitle: 'En plein air, broken color brushwork, water lilies, and capturing transient sunlight',
      quickInfo: 'Impressionism emerged in 19th-century France. Artists like Claude Monet painted outdoors (en plein air) using short, visible brushstrokes to capture fleeting optical impressions of natural sunlight.',
      keyConcepts: [
        'Painting "en plein air" means setting up easels outdoors directly before natural scenes.',
        'Short, broken brushstrokes of pure color blend optically in the viewer\'s eye.',
        'Monet painted serial studies (Water Lilies, Rouen Cathedral) at different hours of the day.'
      ],
      quiz: [
        { q: 'Who is considered the leading pioneer of French Impressionism, famous for his Water Lilies paintings in Giverny?', opts: ['Pablo Picasso', 'Claude Monet', 'Vincent van Gogh', 'Salvador Dalí'], ans: 1, exp: 'Monet pioneered Impressionist landscapes.' },
        { q: 'What French term describes painting outdoors directly in front of the natural landscape rather than in a studio?', opts: ['En plein air', 'Coup d\'état', 'Faux pas', 'Carte blanche'], ans: 0, exp: 'En plein air is outdoor open-air painting.' },
        { q: 'Why did Impressionist painters use short, unblended dabs of contrasting color?', opts: ['They were in a hurry to catch trains', 'Colors blend optically in the human eye to convey shimmering sunlight', 'Paint was too expensive to mix', 'They had only tiny brushes'], ans: 1, exp: 'Optical color mixing simulates luminous sunlight.' },
        { q: 'Why did Claude Monet paint the exact same haystacks and cathedral dozens of times?', opts: ['He forgot he had already painted them', 'To observe how shifting light, weather, and time of day altered appearance', 'He had no other subjects', 'For comic books'], ans: 1, exp: 'Serial studies recorded shifting illumination.' },
        { q: 'Which city was the vibrant birthplace and center of the 1870s Impressionist movement?', opts: ['London', 'Paris', 'Rome', 'Madrid'], ans: 1, exp: 'Paris was the capital of Impressionism.' }
      ]
    }
  ],
  pe: [
    {
      title: 'Fitnessgram Components: Flexibility, Muscular Strength & Agility',
      subtitle: 'Pacer test, push-ups, curl-ups, sit-and-reach, and target health zones',
      quickInfo: 'Physical fitness comprises five core components: cardiovascular endurance (PACER), muscular strength (push-ups), muscular endurance (curl-ups), flexibility (sit-and-reach), and body composition.',
      keyConcepts: [
        'Aerobic capacity is measured by the progressive multi-stage PACER shuttle run.',
        'Muscular strength and endurance are evaluated via 90° push-ups and curl-up tests.',
        'Sit-and-reach assesses hamstring and lower back flexibility.'
      ],
      quiz: [
        { q: 'What physical fitness component does the Sit-and-Reach test primarily evaluate?', opts: ['Arm strength', 'Hamstring and lower back flexibility', 'Running speed', 'Lung capacity'], ans: 1, exp: 'Sit-and-reach measures posterior chain flexibility.' },
        { q: 'What is the progressive 20-meter shuttle run test used to measure aerobic capacity called?', opts: ['The PACER test', 'The Sprint Dash', 'The Marathon', 'The Bench Press'], ans: 0, exp: 'The PACER test assesses cardiovascular endurance.' },
        { q: 'What is the difference between muscular strength and muscular endurance?', opts: ['Strength is maximum force generated once; endurance is sustaining contractions repeatedly', 'Endurance is only for legs', 'They are identical', 'Strength is flexibility'], ans: 0, exp: 'Strength is peak force; endurance is stamina over time.' },
        { q: 'Why is static stretching recommended during a cool-down after workouts rather than before?', opts: ['Warm muscles are more pliable, improving range of motion without risk of muscle strain', 'Cold muscles stretch better', 'It takes less time', 'To fall asleep on the floor'], ans: 0, exp: 'Stretching warm muscles promotes flexibility and recovery.' },
        { q: 'What does achieving your "Healthy Fitness Zone" on a test indicate?', opts: ['You are ready for professional sports', 'Your fitness level provides meaningful protection against health risks', 'You never need to exercise again', 'You have zero body fat'], ans: 1, exp: 'Healthy Fitness Zones designate protective physical conditioning.' }
      ]
    },
    {
      title: 'Volleyball Basics: Bumping, Setting & Underhand Serves',
      subtitle: 'Forearm pass platform, overhead fingertip set, court rotation, and 3-touch rule',
      quickInfo: 'Volleyball is a non-contact team sport where teams volley a ball over a high net. Teams have up to 3 touches (Bump, Set, Spike) to return the ball over the net.',
      keyConcepts: [
        'Forearm pass (Bump): flat platform created by clasped hands and extended straight elbows.',
        'Overhead pass (Set): soft fingertip contact above the forehead directing the ball upward.',
        'Rotation: players rotate clockwise when gaining service rights.'
      ],
      quiz: [
        { q: 'What is the maximum number of touches a volleyball team is allowed to return the ball over the net?', opts: ['1 touch', '2 touches', '3 touches', '5 touches'], ans: 2, exp: 'Teams are permitted a maximum of 3 touches.' },
        { q: 'How should your arms be positioned when executing a forearm pass ("bump") in volleyball?', opts: ['Bent at the elbows like swinging bats', 'Locked straight together creating a flat, consistent forearm platform', 'Behind your back', 'Waving above your head'], ans: 1, exp: 'Straight forearms provide a controlled rebounding platform.' },
        { q: 'In which direction do players rotate positions on the court when their team wins the serve?', opts: ['Counter-clockwise', 'Clockwise', 'Diagonally', 'No rotation exists'], ans: 1, exp: 'Volleyball rotation is strictly clockwise.' },
        { q: 'What part of the hand makes contact with the ball during an overhead "set"?', opts: ['The palms only', 'The soft pads of all ten spread fingertips above the forehead', 'The wrists', 'The elbows'], ans: 1, exp: 'Fingertip control directs the set.' },
        { q: 'Is the ball allowed to touch the net on a serve and continue over into the opponent\'s court?', opts: ['Yes, a let serve that lands in bounds remains live play', 'No, it is an immediate fault', 'Only on Fridays', 'Only in beach volleyball'], ans: 0, exp: 'Under modern rally scoring, net serves in bounds are live.' }
      ]
    },
    {
      title: 'Stress Management, Mental Wellness & Sleep Hygiene',
      subtitle: 'Cortisol, diaphragmatic box breathing, digital sunsets, and mindfulness',
      quickInfo: 'Mental wellness is as vital as physical fitness. Managing school stress involves box breathing (4s in, 4s hold, 4s out, 4s hold), positive self-talk, and removing blue-light screens before bed.',
      keyConcepts: [
        'Stress triggers the fight-or-flight sympathetic response; deep breathing activates parasympathetic calm.',
        'Box breathing: 4 counts inhale, 4 counts hold, 4 counts exhale, 4 counts hold.',
        'Sleep hygiene: dark, cool room and shutting off electronic screens 60 minutes before bed.'
      ],
      quiz: [
        { q: 'How does deep diaphragmatic breathing ("belly breathing") help reduce acute anxiety or stress?', opts: ['It accelerates heart panic', 'It stimulates the vagus nerve and activates the body\'s calming parasympathetic response', 'It shuts down lung function', 'It makes you dizzy'], ans: 1, exp: 'Deep breathing triggers parasympathetic calming.' },
        { q: 'Why is using smartphone or tablet screens in bed detrimental to restful sleep?', opts: ['Screens get too hot', 'Blue light suppresses the brain\'s release of the sleep hormone melatonin', 'Screens make sounds', 'Batteries drain faster'], ans: 1, exp: 'Blue light suppresses melatonin secretion.' },
        { q: 'What is "box breathing" technique used by athletes and high-stress professionals?', opts: ['Breathing into a cardboard box', 'Inhaling for 4 seconds, holding for 4, exhaling for 4, and holding for 4', 'Holding breath for 5 minutes', 'Hyperventilating rapidly'], ans: 1, exp: 'Equal 4-count breath cycles stabilize the nervous system.' },
        { q: 'What is a healthy psychological strategy when facing academic frustration or exam worry?', opts: ['Self-criticism and isolation', 'Breaking tasks into smaller goals, mindfulness pauses, and seeking help from teachers/counselors', 'Skipping school entirely', 'Staying up all night'], ans: 1, exp: 'Structured action and support reduce anxiety.' },
        { q: 'What hormone promotes restorative sleep cycles in the human brain?', opts: ['Adrenaline', 'Melatonin', 'Cortisol', 'Insulin'], ans: 1, exp: 'Melatonin regulates circadian sleep-wake cycles.' }
      ]
    }
  ],
  'computer-science': [
    {
      title: 'Variables, Data Types and Score Tracking in Code',
      subtitle: 'Integers, strings, booleans, floats, declaring variables, and incrementing values',
      quickInfo: 'A variable is a named container in computer memory storing data that can change during execution. Data types include integers (whole numbers), floats (decimals), strings (text), and booleans.',
      keyConcepts: [
        'Variables hold values that can be updated: score = score + 10.',
        'Data types: String ("Player1"), Integer (42), Float (3.14), Boolean (True/False).',
        'Concatenation joins strings together: "High Score: " + score.'
      ],
      quiz: [
        { q: 'What is a "variable" in computer programming?', opts: ['A fixed number that can never change', 'A named storage location in memory that holds a value that can be read or modified', 'A physical mouse button', 'A programming error'], ans: 1, exp: 'Variables store mutable program state.' },
        { q: 'Which data type is appropriate for storing a user\'s name like "Ada Lovelace"?', opts: ['Integer', 'Boolean', 'String (text characters)', 'Float'], ans: 2, exp: 'Strings store alphanumeric text sequences.' },
        { q: 'If variable score = 50, what is the value of score after running: score = score + 15?', opts: ['50', '65', '15', '5015'], ans: 1, exp: '50 + 15 = 65.' },
        { q: 'Which of the following represents a Boolean value?', opts: ['"Hello"', '42', 'True', '3.1415'], ans: 2, exp: 'Boolean values are strictly True or False.' },
        { q: 'What occurs when you add two string variables: "Super" + "Star"?', opts: ['It causes a math error', 'It concatenates them into "SuperStar"', 'It deletes both words', 'It multiplies them'], ans: 1, exp: 'String concatenation combines text.' }
      ]
    },
    {
      title: 'Computer Networks: The Internet, Routers & IP Addresses',
      subtitle: 'Packets, TCP/IP protocol, DNS lookup, Wi-Fi vs Ethernet, and cybersecurity',
      quickInfo: 'The internet is a global network of interconnected computers. When you request a webpage, data is broken into digital packets routed across routers using IP addresses and reassembled at your device.',
      keyConcepts: [
        'An IP (Internet Protocol) address uniquely identifies every device on a network.',
        'DNS (Domain Name System) translates human URLs (google.com) into numerical IP addresses.',
        'Packet switching breaks files into small labeled chunks traveling optimal paths.'
      ],
      quiz: [
        { q: 'What is the function of an IP address on a computer network?', opts: ['It shows the computer\'s retail price', 'It serves as a unique numerical identifier locating a device on the network', 'It counts typing speed', 'It is a password'], ans: 1, exp: 'IP addresses provide distinct network addressing.' },
        { q: 'How does information travel across the internet when you stream a video?', opts: ['As one giant solid file through copper pipe', 'Broken into millions of tiny labeled packets routed independently and reassembled', 'Through radio waves only', 'By physical postal courier'], ans: 1, exp: 'Packet switching routes data efficiently.' },
        { q: 'What service translates website names like "wikipedia.org" into computer-readable IP addresses?', opts: ['DNS (Domain Name System)', 'USB', 'HDMI', 'CPU'], ans: 0, exp: 'DNS acts as the internet\'s phonebook.' },
        { q: 'What networking hardware device directs packet traffic between your home network and the global internet?', opts: ['A keyboard', 'A router / modem', 'A monitor screen', 'A printer'], ans: 1, exp: 'Routers forward data packets between networks.' },
        { q: 'What does the lock icon in a browser address bar (HTTPS) indicate?', opts: ['The website is closed today', 'The connection between your browser and the web server is securely encrypted', 'The website has no images', 'Your battery is low'], ans: 1, exp: 'HTTPS encrypts data in transit.' }
      ]
    },
    {
      title: 'Digital Media Creation: Vector vs Raster Graphics',
      subtitle: 'Pixels, resolution, SVG vs PNG/JPEG, scaling, and digital animation frames',
      quickInfo: 'Digital images are either raster (grids of colored pixels that pixelate when enlarged, like PNG/JPEG) or vector (mathematical paths that scale infinitely without quality loss, like SVG).',
      keyConcepts: [
        'Raster graphics (bitmap): Pixels in a fixed grid (JPEG, PNG, GIF). Zooming in shows jagged pixels.',
        'Vector graphics: Mathematical equations defining lines, curves, and fills (SVG). Infinite scalability.',
        'Animation is creating the illusion of movement by rapidly displaying sequential frames (FPS).'
      ],
      quiz: [
        { q: 'What happens to a raster (pixel-based) image when you zoom in very closely?', opts: ['It becomes sharper and clearer', 'Individual square pixels become visible and the image appears blurry/jagged', 'It turns into 3D', 'It transforms into audio'], ans: 1, exp: 'Pixel grids pixelate under high magnification.' },
        { q: 'Why are company logos often designed as vector graphics (SVG)?', opts: ['They take up all computer storage', 'They can scale to any size (from business cards to massive billboards) without losing sharpness', 'They only work on TVs', 'They cannot be printed'], ans: 1, exp: 'Vectors scale infinitely via mathematical formulas.' },
        { q: 'What file format supports lossless compression and transparent image backgrounds?', opts: ['JPEG', 'PNG', 'TXT', 'MP3'], ans: 1, exp: 'PNG supports alpha channel transparency.' },
        { q: 'What is the tiny individual square unit of color that makes up a digital screen display called?', opts: ['A byte', 'A pixel (picture element)', 'A vector', 'A circuit'], ans: 1, exp: 'Pixels are base display picture elements.' },
        { q: 'What does "FPS" stand for in digital video and video game rendering?', opts: ['Files Per Second', 'Frames Per Second', 'Fast Processing System', 'Format Pixel Scale'], ans: 1, exp: 'Frames Per Second measures animation playback rate.' }
      ]
    }
  ],
  music: [
    {
      title: 'Major Scales, Key Signatures & Solfege (Do-Re-Mi)',
      subtitle: 'Whole steps and half steps (W-W-H-W-W-W-H), sharps, flats, and tonality',
      quickInfo: 'A major scale is a sequence of eight notes following the interval pattern: Whole, Whole, Half, Whole, Whole, Whole, Half. Solfege syllables (Do, Re, Mi, Fa, Sol, La, Ti, Do) train ear pitch.',
      keyConcepts: [
        'Major scale formula: Whole, Whole, Half, Whole, Whole, Whole, Half (W-W-H-W-W-W-H).',
        'C Major has no sharps or flats: C-D-E-F-G-A-B-C.',
        'Solfege hand signs (Curwen signs) pair visual gestures with scale pitches.'
      ],
      quiz: [
        { q: 'What is the interval pattern of whole steps (W) and half steps (H) that forms every major scale?', opts: ['W-H-W-H-W-H-W', 'W-W-H-W-W-W-H', 'H-H-W-W-H-H-W', 'W-W-W-W-W-W-W'], ans: 1, exp: 'W-W-H-W-W-W-H is the universal major scale formula.' },
        { q: 'Which major scale contains zero sharps and zero flats?', opts: ['G Major', 'F Major', 'C Major', 'D Major'], ans: 2, exp: 'C Major consists entirely of natural notes.' },
        { q: 'What solfege syllable follows "Mi" in an ascending major scale?', opts: ['Do', 'Re', 'Fa', 'Sol'], ans: 2, exp: 'Do - Re - Mi - Fa - Sol - La - Ti - Do.' },
        { q: 'What does a sharp symbol (♯) placed before a note do to its pitch?', opts: ['Lowers it by one half step', 'Raises it by one half step', 'Mutes the instrument', 'Doubles the volume'], ans: 1, exp: 'Sharps elevate pitch by a semitone.' },
        { q: 'What does a flat symbol (♭) do to a musical note?', opts: ['Lowers it by one half step', 'Raises it by one whole step', 'Increases tempo', 'Stops the song'], ans: 0, exp: 'Flats depress pitch by a semitone.' }
      ]
    },
    {
      title: 'Choir Harmony: Soprano, Alto, Tenor, Bass (SATB)',
      subtitle: 'Vocal ranges, chords, polyphony, round singing, and blend',
      quickInfo: 'Choirs blend vocal timbres across four primary registers: Soprano (high female), Alto (low female), Tenor (high male), and Bass (low male). Singing in parts creates rich harmonic chords.',
      keyConcepts: [
        'SATB choir structure: Soprano, Alto, Tenor, Bass.',
        'Singing in unison means everyone sings the same pitch; harmony means complementary pitches.',
        'Chords are built by stacking thirds (e.g., C-E-G forms a C Major triad).'
      ],
      quiz: [
        { q: 'What vocal voice part sings the highest pitches in a traditional four-part choir?', opts: ['Bass', 'Tenor', 'Alto', 'Soprano'], ans: 3, exp: 'Soprano is the highest female vocal range.' },
        { q: 'What voice classification represents the lowest male vocal register in SATB choral music?', opts: ['Tenor', 'Baritone', 'Bass', 'Alto'], ans: 2, exp: 'Bass provides deep low harmony.' },
        { q: 'What is it called when a choir sings different musical notes simultaneously that blend pleasingly?', opts: ['Monophony', 'Harmony', 'Dissonance only', 'Unison'], ans: 1, exp: 'Harmony combines simultaneous complementary pitches.' },
        { q: 'When all singers in a choir sing the exact same pitch together, they are singing in:', opts: ['Unison', 'Polyphony', 'Four-part counterpoint', 'A round'], ans: 0, exp: 'Unison is singing identical pitch together.' },
        { q: 'What three notes stacked in thirds form the fundamental C Major triad chord?', opts: ['C - D - E', 'C - E - G', 'C - F - A', 'C - G - B'], ans: 1, exp: 'Root (C), third (E), and fifth (G) form the major triad.' }
      ]
    },
    {
      title: 'Beethoven and the Classical-to-Romantic Transition',
      subtitle: 'Symphony No. 5 motif, deafness, Ode to Joy, and emotional expression in music',
      quickInfo: 'Ludwig van Beethoven bridged the Classical and Romantic eras. Despite losing his hearing, he composed monumental works expressing human drama, triumph, and brotherhood.',
      keyConcepts: [
        'Beethoven\'s 5th Symphony opening: famous 4-note motif ("short-short-short-LONG").',
        'Composed groundbreaking late masterpieces (including 9th Symphony) while completely deaf.',
        'Shifted music from Classical restraint to intense Romantic emotional expression.'
      ],
      quiz: [
        { q: 'Which iconic 4-note rhythmic motif ("da-da-da-DUM") opens Beethoven\'s famous Symphony No. 5?', opts: ['Long-long-short-short', 'Short-short-short-LONG', 'All equal length', 'Whisper-sing-hum-cry'], ans: 1, exp: 'Three short notes followed by one sustained long note.' },
        { q: 'What physical disability afflicted Beethoven during the height of his composing career?', opts: ['Blindness', 'Total hearing loss (deafness)', 'Inability to walk', 'Broken hands'], ans: 1, exp: 'Beethoven composed while profoundly deaf.' },
        { q: 'What choral melody celebrating universal human brotherhood did Beethoven incorporate into his 9th Symphony?', opts: ['The Hallelujah Chorus', 'Ode to Joy', 'Ave Maria', 'Canon in D'], ans: 1, exp: 'Schiller\'s "Ode to Joy" is the finale of the 9th Symphony.' },
        { q: 'Beethoven helped transition Western art music between which two major historical eras?', opts: ['Medieval to Renaissance', 'Classical to Romantic era', 'Baroque to Jazz', 'Modern to Digital'], ans: 1, exp: 'Beethoven bridged Classical to Romantic.' },
        { q: 'In which European musical capital did Beethoven spend most of his adult composing life?', opts: ['Vienna, Austria', 'Madrid, Spain', 'Stockholm, Sweden', 'Dublin, Ireland'], ans: 0, exp: 'Vienna was the center of Beethoven\'s musical career.' }
      ]
    }
  ],
  crs: [
    {
      title: 'David, Goliath and the Psalms of Worship',
      subtitle: 'Shepherd boy, faith vs armor, sling and stone, king of Israel, and poetic praise',
      quickInfo: 'Young shepherd David defeated the giant Philistine champion Goliath not with physical armor, but with faith in God and a simple sling and stone. David became Israel\'s king and wrote beloved Psalms.',
      keyConcepts: [
        'David refused King Saul\'s heavy armor, relying on the name of the Lord of Hosts.',
        'A single smooth stone from a sling brought down the defiant giant Goliath.',
        'David authored many Psalms (e.g., Psalm 23: "The Lord is my shepherd; I shall not want").'
      ],
      quiz: [
        { q: 'What weapon did young David use to defeat the Philistine champion Goliath?', opts: ['Saul\'s bronze sword', 'A simple sling and five smooth stones from the brook', 'A golden spear', 'A chariot'], ans: 1, exp: '1 Samuel 17 records David\'s sling and stones.' },
        { q: 'Why did David have confidence facing the terrifying warrior Goliath when all Israel was afraid?', opts: ['David had a larger army', 'David knew that the battle belonged to the living God', 'Goliath was sleeping', 'David had heavy armor'], ans: 1, exp: 'David trusted in the power of God.' },
        { q: 'What famous Psalm opens with: "The Lord is my shepherd; I shall not want"?', opts: ['Psalm 1', 'Psalm 23', 'Psalm 91', 'Psalm 150'], ans: 1, exp: 'Psalm 23 is David\'s shepherd psalm.' },
        { q: 'What musical instrument did David play skillfully to soothe King Saul\'s troubled spirit?', opts: ['The harp / lyre', 'The trumpet', 'The flute', 'The drum'], ans: 0, exp: 'David was a skilled lyre/harp musician.' },
        { q: 'What city did King David capture and establish as the religious and political capital of Israel?', opts: ['Nazareth', 'Jerusalem (City of David)', 'Hebron', 'Damascus'], ans: 1, exp: 'Jerusalem became the capital of Israel.' }
      ]
    },
    {
      title: 'The Life of the Early Church and Pentecost',
      subtitle: 'The Holy Spirit, tongues of fire, fellowship, communal generosity, and Peter\'s sermon',
      quickInfo: 'On Pentecost, the Holy Spirit descended upon the apostles like tongues of fire. Peter preached boldly, 3,000 were baptized, and the early church gathered daily in prayer, fellowship, and shared meals.',
      keyConcepts: [
        'Pentecost: Sound of rushing wind, tongues of fire, and speaking in other tongues.',
        'Peter\'s sermon proclaimed Jesus\'s resurrection, leading 3,000 people to faith.',
        'Acts 2 community: believers shared possessions, broke bread, and cared for the needy.'
      ],
      quiz: [
        { q: 'What supernatural event occurred on the Day of Pentecost in Acts chapter 2?', opts: ['An earthquake swallowed the temple', 'The Holy Spirit descended upon the disciples like a rushing wind and tongues of fire', 'The sun went dark for seven days', 'A great flood'], ans: 1, exp: 'Acts 2 recounts the outpouring of the Holy Spirit.' },
        { q: 'About how many people repented, believed, and were baptized after Peter\'s Pentecost sermon?', opts: ['12', '70', 'About 3,000 people', '50,000'], ans: 2, exp: 'Acts 2:41 records approximately 3,000 souls were added.' },
        { q: 'How did the believers in the earliest Christian church live in community in Jerusalem?', opts: ['They hoarded food in secret', 'They met daily, shared possessions with those in need, and broke bread with glad hearts', 'They fought over titles', 'They moved to Rome'], ans: 1, exp: 'Acts 2:42-47 describes their loving fellowship.' },
        { q: 'Which apostle was martyred as the first recorded Christian deacon and martyr in Acts 7?', opts: ['Stephen', 'Paul', 'Barnabas', 'Silas'], ans: 0, exp: 'Stephen was the first Christian martyr.' },
        { q: 'What biblical New Testament book chronicles the missionary journeys and growth of the early church?', opts: ['Genesis', 'The Acts of the Apostles', 'Leviticus', 'Revelation'], ans: 1, exp: 'Acts of the Apostles narrates early church history.' }
      ]
    },
    {
      title: 'The Great Commission and World Mission',
      subtitle: 'Making disciples of all nations, baptizing, teaching, and Christ\'s continual presence',
      quickInfo: 'Before ascending into heaven, the risen Christ gave the Great Commission to His disciples: "Go therefore and make disciples of all nations, baptizing them in the name of the Father, Son, and Holy Spirit."',
      keyConcepts: [
        'The Great Commission (Matthew 28:18-20): proclaim the Gospel globally.',
        'Baptizing in the name of the Father, and of the Son, and of the Holy Spirit.',
        'Christ\'s closing promise: "I am with you always, even to the end of the age."'
      ],
      quiz: [
        { q: 'Where in the Gospels is the Great Commission recorded?', opts: ['Matthew 28:18-20', 'John 1:1', 'Mark 1:1', 'Luke 2:10'], ans: 0, exp: 'Matthew 28 contains the definitive Great Commission.' },
        { q: 'What core mission did Jesus entrust to His followers in the Great Commission?', opts: ['To conquer lands by military force', 'To go and make disciples of all nations, baptizing and teaching them', 'To build golden palaces', 'To keep faith a secret'], ans: 1, exp: 'Discipling, baptizing, and teaching all nations.' },
        { q: 'In whose name did Jesus instruct disciples to baptize new believers?', opts: ['In Moses\'s name', 'In the name of the Father, and of the Son, and of the Holy Spirit', 'In the Roman Emperor\'s name', 'In their own name'], ans: 1, exp: 'The Trinitarian baptismal formula.' },
        { q: 'What comforting promise did Jesus give at the very end of Matthew\'s Gospel?', opts: ['"You will never face difficulties"', '"I am with you always, to the very end of the age"', '"Only study quietly"', '"Do not leave Jerusalem"'], ans: 1, exp: 'Christ\'s promise of perpetual presence.' },
        { q: 'What does the word "apostle" mean in ancient Greek?', opts: ['A ruler', '"One who is sent forth" with a mission', 'A silent hermit', 'A soldier'], ans: 1, exp: 'Apostolos means one sent forth as a messenger.' }
      ]
    }
  ]
};
