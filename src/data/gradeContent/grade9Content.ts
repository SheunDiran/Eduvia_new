import { GradeLevel, SubjectId, Topic } from '../../types';
import { CompactTopicSpec, createTopicFromSpec } from './builder';

type Grade9Specs = Partial<Record<SubjectId, [CompactTopicSpec, CompactTopicSpec, CompactTopicSpec]>>;

const GRADE_9_SPECS: Grade9Specs = {
  math: [
    {
      title: 'Simultaneous Linear Equations & Substitution',
      subtitle: 'Elimination method, graphical intersection, and word problems',
      quickInfo: 'Simultaneous equations involve two linear equations with two unknown variables (x and y). The solution is the exact pair (x, y) where their lines intersect.',
      keyConcepts: ['Substitution replaces one variable with an expression in terms of the other.', 'Elimination adds or subtracts equations to cancel out one variable.', 'Graphically, the solution is the point of intersection of the two lines.'],
      quiz: [
        { q: 'Solve the system: x + y = 10 and x - y = 4', opts: ['x = 7, y = 3', 'x = 6, y = 4', 'x = 8, y = 2', 'x = 5, y = 5'], ans: 0, exp: 'Adding equations: 2x = 14 => x = 7; 7 + y = 10 => y = 3.' },
        { q: 'If two linear equations represent parallel lines, how many solutions exist?', opts: ['One unique solution', 'Zero solutions', 'Infinitely many', 'Two solutions'], ans: 1, exp: 'Parallel lines never intersect, yielding no common solution.' },
        { q: 'In substitution, if y = 2x + 1 and 3x + y = 11, what is the value of x?', opts: ['1', '2', '3', '4'], ans: 1, exp: '3x + (2x + 1) = 11 => 5x = 10 => x = 2.' },
        { q: 'Which operation eliminates y in: 2x + 3y = 12 and 5x - 3y = 9?', opts: ['Multiply the equations', 'Add the two equations together', 'Subtract the second from first', 'Divide by 3'], ans: 1, exp: '3y + (-3y) = 0; adding eliminates the variable y.' },
        { q: 'What does the intersection point of two linear graphs represent?', opts: ['The x-intercept only', 'The simultaneous solution to both equations', 'The gradient of the first line', 'The midpoint'], ans: 1, exp: 'The coordinates (x, y) at intersection satisfy both equations simultaneously.' }
      ]
    },
    {
      title: 'Introductory Quadratic Equations: Factorization Method',
      subtitle: 'Standard form ax² + bx + c = 0, binomial factors, and roots',
      quickInfo: 'A quadratic equation contains a variable squared as its highest power. In standard form ax² + bx + c = 0, we factor into two binomials and apply the zero-product rule.',
      keyConcepts: ['Standard form is ax² + bx + c = 0 where a ≠ 0.', 'Zero-product property: if A × B = 0, then A = 0 or B = 0.', 'Factoring finds two numbers that multiply to c and add to b when a = 1.'],
      quiz: [
        { q: 'What are the roots of x² - 5x + 6 = 0?', opts: ['x = 2 and x = 3', 'x = -2 and x = -3', 'x = 1 and x = 6', 'x = -1 and x = 6'], ans: 0, exp: '(x - 2)(x - 3) = 0 => x = 2 or x = 3.' },
        { q: 'What is the standard form of a quadratic equation?', opts: ['y = mx + b', 'ax² + bx + c = 0', 'a² + b² = c²', 'x³ + y³ = z³'], ans: 1, exp: 'ax² + bx + c = 0 is standard quadratic form.' },
        { q: 'Factor the quadratic expression: x² - 9', opts: ['(x - 3)²', '(x - 3)(x + 3)', '(x - 9)(x + 1)', 'x(x - 9)'], ans: 1, exp: 'Difference of two squares: a² - b² = (a - b)(a + b).' },
        { q: 'Solve: x(x - 7) = 0', opts: ['x = 7 only', 'x = 0 and x = 7', 'x = -7 and x = 0', 'x = 1 and x = 7'], ans: 1, exp: 'By zero-product property: x = 0 or x - 7 = 0 (x = 7).' },
        { q: 'What geometric shape is the graph of a quadratic function y = ax² + bx + c?', opts: ['Straight line', 'Parabola', 'Circle', 'Hyperbola'], ans: 1, exp: 'Quadratic functions graph as parabolas.' }
      ]
    },
    {
      title: 'Pythagorean Theorem & Trigonometric Ratios (SOH CAH TOA)',
      subtitle: 'Right-angled triangles, sine, cosine, and tangent calculations',
      quickInfo: 'In right-angled triangles, the Pythagorean theorem states a² + b² = c². The trigonometric ratios Sine, Cosine, and Tangent relate acute angles to sides (SOH CAH TOA).',
      keyConcepts: ['Hypotenuse c is the longest side opposite the 90° right angle.', 'sin(θ) = Opposite/Hypotenuse, cos(θ) = Adjacent/Hypotenuse.', 'tan(θ) = Opposite/Adjacent.'],
      quiz: [
        { q: 'In a right triangle with legs of length 3 and 4, what is the hypotenuse?', opts: ['5', '6', '7', '25'], ans: 0, exp: '3² + 4² = 9 + 16 = 25 => √25 = 5.' },
        { q: 'In SOH CAH TOA, what does "SOH" stand for?', opts: ['Sine = Opposite / Hypotenuse', 'Sine = Other / Height', 'Speed = Over / Hour', 'Side = Opposite / Horizontal'], ans: 0, exp: 'Sin = Opposite / Hypotenuse.' },
        { q: 'What is tan(45°)?', opts: ['0', '0.5', '1', '√3'], ans: 2, exp: 'In an isosceles right triangle (45-45-90), opposite = adjacent, so tan(45°) = 1.' },
        { q: 'Which side of a right triangle is always the longest?', opts: ['Adjacent side', 'Opposite side', 'Hypotenuse', 'Altitude'], ans: 2, exp: 'The hypotenuse opposite the 90° angle is always longest.' },
        { q: 'If cos(θ) = 8/10, what is the simplified ratio?', opts: ['3/5', '4/5', '5/4', '1/2'], ans: 1, exp: '8/10 simplifies by dividing by 2 to 4/5.' }
      ]
    }
  ],
  biology: [
    {
      title: 'Cell Division: Mitosis, Meiosis & Chromosomes',
      subtitle: 'Somatic growth, gamete production, DNA replication, and phases',
      quickInfo: 'Mitosis produces two genetically identical diploid cells for bodily growth and repair. Meiosis produces four unique haploid gametes for sexual reproduction.',
      keyConcepts: ['Mitosis phases: Prophase, Metaphase, Anaphase, Telophase (PMAT).', 'Meiosis introduces genetic variation via crossing-over in Prophase I.', 'Human somatic cells have 46 chromosomes (23 homologous pairs).'],
      quiz: [
        { q: 'What is the biological purpose of mitosis?', opts: ['Gamete egg/sperm production', 'Growth, tissue repair, and asexual reproduction', 'Energy digestion', 'Protein synthesis'], ans: 1, exp: 'Mitosis creates identical daughter cells for somatic growth and repair.' },
        { q: 'How many chromosomes are in a normal human gamete (sperm or egg)?', opts: ['23', '46', '92', '12'], ans: 0, exp: 'Gametes are haploid, containing 23 unpaired chromosomes.' },
        { q: 'During which phase of mitosis do chromosomes align along the center equator?', opts: ['Prophase', 'Metaphase', 'Anaphase', 'Telophase'], ans: 1, exp: 'Metaphase is Middle alignment along the metaphase plate.' },
        { q: 'What process in Meiosis I generates genetic diversity between siblings?', opts: ['Cytokinesis', 'Crossing over (recombination)', 'Cloning', 'Spindle formation'], ans: 1, exp: 'Crossing over swaps DNA segments between homologous chromatids.' },
        { q: 'How many daughter cells are produced at the end of meiosis?', opts: ['Two identical cells', 'Four genetically diverse haploid cells', 'One diploid cell', 'Eight cells'], ans: 1, exp: 'Meiosis involves two divisions producing 4 haploid gametes.' }
      ]
    },
    {
      title: 'Human Respiratory & Circulatory Systems',
      subtitle: 'Gas exchange in alveoli, cardiac cycle, and hemoglobin mechanics',
      quickInfo: 'The respiratory system takes in oxygen via alveolar diffusion. The cardiovascular system pumps oxygenated blood via systemic arteries and returns carbon dioxide via veins.',
      keyConcepts: ['Gas exchange occurs across single-cell alveoli walls into capillaries.', 'The left ventricle pumps oxygenated blood under high pressure to the entire body.', 'Red blood cells contain hemoglobin which binds oxygen molecules.'],
      quiz: [
        { q: 'Where does actual gas exchange (O₂ and CO₂) occur in human lungs?', opts: ['Trachea', 'Bronchi', 'Alveoli air sacs', 'Diaphragm'], ans: 2, exp: 'Alveoli are surrounded by capillaries where diffusion takes place.' },
        { q: 'Which heart chamber pumps oxygen-rich blood into the aorta for systemic circulation?', opts: ['Right atrium', 'Right ventricle', 'Left ventricle', 'Left atrium'], ans: 2, exp: 'The muscular left ventricle pumps blood to the whole body.' },
        { q: 'What protein in red blood cells carries oxygen throughout the body?', opts: ['Insulin', 'Hemoglobin', 'Keratin', 'Collagen'], ans: 1, exp: 'Hemoglobin is the iron-rich oxygen-binding protein.' },
        { q: 'What muscular sheet contracts and flattens to pull air into the lungs?', opts: ['Rib cage', 'Diaphragm', 'Esophagus', 'Pharynx'], ans: 1, exp: 'Contraction of the diaphragm increases thoracic volume for inhalation.' },
        { q: 'Which blood vessels have valves to prevent the backflow of low-pressure blood?', opts: ['Arteries', 'Veins', 'Capillaries', 'Arterioles'], ans: 1, exp: 'Veins contain one-way valves preventing backflow.' }
      ]
    },
    {
      title: 'Ecosystems, Food Webs & Biogeochemical Cycles',
      subtitle: 'Trophic levels, energy pyramid rule of 10%, and nitrogen cycle',
      quickInfo: 'Ecosystems depend on solar energy captured by autotrophic producers. Energy transfers up trophic levels with approximately 90% lost as metabolic heat at each step.',
      keyConcepts: ['Producers convert solar energy into chemical sugars via photosynthesis.', 'Only about 10% of energy transfers from one trophic level to the next.', 'Decomposers break organic detritus down, recycling nutrients into soil.'],
      quiz: [
        { q: 'According to the 10% ecological rule, if producers have 10,000 kJ of energy, how much reaches primary consumers?', opts: ['10,000 kJ', '1,000 kJ', '100 kJ', '10 kJ'], ans: 1, exp: '10% of 10,000 is 1,000 kJ; 90% is dissipated as heat.' },
        { q: 'What organisms form the foundational base of all terrestrial food chains?', opts: ['Apex predators', 'Decomposers', 'Autotrophic green producers (plants)', 'Herbivores'], ans: 2, exp: 'Producers synthesize organic glucose from sunlight and carbon dioxide.' },
        { q: 'What bacteria in legume root nodules convert atmospheric nitrogen into usable nitrates?', opts: ['Nitrogen-fixing bacteria (Rhizobium)', 'E. coli', 'Viruses', 'Yeast'], ans: 0, exp: 'Rhizobium fixes gaseous N₂ into plant-absorbable ammonium/nitrates.' },
        { q: 'An animal that consumes both plants and other animals is classified as an:', opts: ['Herbivore', 'Carnivore', 'Omnivore', 'Autotroph'], ans: 2, exp: 'Omnivores feed on both plant vegetation and animal matter.' },
        { q: 'What happens to toxic pollutants as they move up a food chain?', opts: ['They disappear', 'They undergo biomagnification (concentrate in higher predators)', 'They turn into water', 'They decrease by 90%'], ans: 1, exp: 'Biomagnification concentrates persistent toxins at apex trophic levels.' }
      ]
    }
  ],
  chemistry: [
    {
      title: 'Atomic Structure & Periodic Table Trends',
      subtitle: 'Protons, neutrons, electrons, electron shells, and valence trends',
      quickInfo: 'Atoms consist of a dense nucleus of protons and neutrons surrounded by orbiting electrons. Elements in the same periodic group share the same valence electron count.',
      keyConcepts: ['Atomic number (Z) is the number of protons in the nucleus.', 'Mass number (A) = protons + neutrons.', 'Group numbers indicate the number of valence electrons in the outermost shell.'],
      quiz: [
        { q: 'What subatomic particle carries a negative electrical charge?', opts: ['Proton', 'Neutron', 'Electron', 'Positron'], ans: 2, exp: 'Electrons carry a -1 relative charge.' },
        { q: 'If Carbon has atomic number 6 and mass number 14, how many neutrons are in its nucleus?', opts: ['6', '8', '14', '20'], ans: 1, exp: 'Neutrons = Mass number - Atomic number = 14 - 6 = 8.' },
        { q: 'Why do elements in Group 1 (alkali metals) react similarly?', opts: ['They have the same mass', 'They all have 1 valence electron in their outermost shell', 'They are all gases', 'They have no electrons'], ans: 1, exp: 'Chemical reactivity is governed by valence electron configurations.' },
        { q: 'Which particles reside in the central nucleus of an atom?', opts: ['Electrons and protons', 'Protons and neutrons', 'Electrons only', 'Neutrons and photons'], ans: 1, exp: 'The nucleus contains nucleons: protons and neutrons.' },
        { q: 'What is the maximum number of electrons that the first electron shell can hold?', opts: ['2', '8', '18', '32'], ans: 0, exp: 'The n=1 shell holds a maximum of 2 electrons (2n² rule).' }
      ]
    },
    {
      title: 'Chemical Bonding: Ionic vs Covalent Compounds',
      subtitle: 'Electron transfer, electrostatic lattices, electron sharing, and Lewis dots',
      quickInfo: 'Ionic bonding occurs between metals and non-metals via electron transfer, forming crystalline salt lattices. Covalent bonding occurs when non-metals share electron pairs.',
      keyConcepts: ['Metals lose electrons to form positive cations; non-metals gain to form anions.', 'Ionic compounds have high melting points and conduct electricity when molten or dissolved.', 'Covalent compounds share electrons to satisfy the stable octet rule.'],
      quiz: [
        { q: 'What type of chemical bond forms between Sodium (metal) and Chlorine (non-metal)?', opts: ['Covalent bond', 'Ionic bond', 'Metallic bond', 'Hydrogen bond'], ans: 1, exp: 'Metal + non-metal results in electron transfer, creating an ionic bond.' },
        { q: 'In a molecule of water (H₂O), the bonds between oxygen and hydrogen atoms are:', opts: ['Ionic bonds', 'Covalent bonds', 'Radioactive bonds', 'Ionic lattices'], ans: 1, exp: 'Non-metals sharing valence electrons form covalent bonds.' },
        { q: 'Why do solid ionic compounds (like dry table salt) NOT conduct electricity?', opts: ['They have no electrons', 'Their ions are locked rigidly in a crystal lattice and cannot move', 'They are metals', 'They melt instantly'], ans: 1, exp: 'Conduction requires mobile charge carriers; solid ions cannot migrate.' },
        { q: 'How many electrons are shared in a double covalent bond (such as O₂)?', opts: ['1', '2', '4 (two pairs)', '8'], ans: 2, exp: 'A double bond consists of 2 shared pairs, meaning 4 shared electrons.' },
        { q: 'What rule describes the tendency of main-group atoms to achieve 8 valence electrons?', opts: ['Aufbau principle', 'Octet rule', 'Hund\'s rule', 'Conservation of mass'], ans: 1, exp: 'The octet rule dictates noble gas electronic configuration.' }
      ]
    },
    {
      title: 'Acids, Bases, pH Scale & Neutralization Reactions',
      subtitle: 'H+ ions, OH- ions, litmus indicators, and titration neutralization',
      quickInfo: 'Acids release hydrogen ions (H+) in aqueous solutions with pH < 7. Bases produce hydroxide ions (OH-) with pH > 7. An acid and a base neutralize to form salt and water.',
      keyConcepts: ['pH scale ranges from 0 to 14: 7 is neutral, <7 is acidic, >7 is alkaline.', 'Acid + Base → Salt + Water (Neutralization).', 'Litmus paper turns red in acidic solutions and blue in basic solutions.'],
      quiz: [
        { q: 'What is the pH value of pure distilled water at 25°C?', opts: ['0', '7 (neutral)', '14', '1'], ans: 1, exp: 'Pure neutral water has equal H⁺ and OH⁻ concentrations, giving pH 7.' },
        { q: 'What color does blue litmus paper turn when dipped in lemon juice (acid)?', opts: ['Remains blue', 'Turns bright red', 'Turns green', 'Turns black'], ans: 1, exp: 'Acids turn litmus paper red.' },
        { q: 'What are the products of the reaction: HCl + NaOH?', opts: ['NaCl (salt) + H₂O (water)', 'NaH + ClO', 'H₂ + Cl₂', 'NaOH₂ + Cl'], ans: 0, exp: 'Acid-base neutralization yields salt (NaCl) and water (H₂O).' },
        { q: 'Which ion is responsible for the acidic properties of an aqueous solution?', opts: ['OH⁻ (hydroxide)', 'H⁺ / H₃O⁺ (hydrogen/hydronium ion)', 'Na⁺ (sodium)', 'Cl⁻ (chloride)'], ans: 1, exp: 'Arrhenius acids dissociate to produce aqueous H⁺ ions.' },
        { q: 'Household bleach has a pH around 12. This substance is classified as:', opts: ['Strongly acidic', 'Neutral', 'Basic / Alkaline', 'Pure acid'], ans: 2, exp: 'A pH value above 7 indicates an alkaline or basic substance.' }
      ]
    }
  ],
  physics: [
    {
      title: 'Newton\'s Laws of Motion & Net Force Analysis',
      subtitle: 'Inertia, F = ma, action-reaction pairs, and free body diagrams',
      quickInfo: 'Newton\'s Three Laws govern classical dynamics: 1st Law (Inertia), 2nd Law (F = ma), and 3rd Law (Every action has an equal and opposite reaction).',
      keyConcepts: ['Inertia resists changes in state of motion and is proportional to mass.', 'Acceleration is directly proportional to net force and inversely proportional to mass.', 'Action-reaction force pairs act on two DIFFERENT interacting objects.'],
      quiz: [
        { q: 'If a 10 kg box accelerates at 3 m/s², what is the net force acting on it?', opts: ['3.33 N', '13 N', '30 N', '300 N'], ans: 2, exp: 'F = m × a = 10 kg × 3 m/s² = 30 N.' },
        { q: 'Newton\'s First Law of Motion is commonly called the Law of:', opts: ['Gravity', 'Inertia', 'Conservation of Momentum', 'Friction'], ans: 1, exp: 'Objects persist in uniform motion unless acted upon by an external net force.' },
        { q: 'When you jump off a rowboat onto a dock, the boat pushes backwards. Which law explains this?', opts: ['Newton\'s First Law', 'Newton\'s Second Law', 'Newton\'s Third Law', 'Coulomb\'s Law'], ans: 2, exp: 'Action and reaction forces are equal in magnitude and opposite in direction.' },
        { q: 'What is the SI unit of force?', opts: ['Joule', 'Newton (N)', 'Watt', 'Pascal'], ans: 1, exp: 'Force is measured in Newtons (1 N = 1 kg·m/s²).' },
        { q: 'What happens to the acceleration of an object if you double the force while keeping mass constant?', opts: ['Acceleration is halved', 'Acceleration doubles', 'Acceleration quadruples', 'Remains unchanged'], ans: 1, exp: 'a = F/m; doubling F doubles a.' }
      ]
    },
    {
      title: 'Current Electricity, Voltage & Ohm\'s Law',
      subtitle: 'Circuits, V = IR, series vs parallel resistors, and electrical power',
      quickInfo: 'Electric current is the flow of charge (I = Q/t). Ohm\'s Law relates potential difference (V), current (I), and resistance (R) through the formula V = I × R.',
      keyConcepts: ['Current (I) is measured in Amperes; potential difference (V) in Volts; resistance (R) in Ohms (Ω).', 'In series circuits, current is identical everywhere; voltages add up.', 'In parallel circuits, voltage across branches is identical; currents split.'],
      quiz: [
        { q: 'If a resistor of 5 Ω has a potential difference of 20 V across it, what current flows?', opts: ['4 A', '15 A', '25 A', '100 A'], ans: 0, exp: 'I = V / R = 20 / 5 = 4 Amperes.' },
        { q: 'What instrument is connected in series to measure electric current in a circuit?', opts: ['Voltmeter', 'Ammeter', 'Barometer', 'Ohmmeter'], ans: 1, exp: 'Ammeters are placed in series to measure full current.' },
        { q: 'In a series circuit with two light bulbs, what happens if one bulb burns out?', opts: ['The other bulb shines brighter', 'The circuit breaks and both bulbs turn off', 'Nothing changes', 'The battery catches fire'], ans: 1, exp: 'A series circuit provides only one continuous conductive loop.' },
        { q: 'What formula calculates electrical power (P)?', opts: ['P = V × I', 'P = V / R', 'P = I / V', 'P = R / I'], ans: 0, exp: 'Power = Voltage × Current (P = VI).' },
        { q: 'What is the unit of electrical resistance?', opts: ['Ampere', 'Volt', 'Ohm (Ω)', 'Coulomb'], ans: 2, exp: 'Resistance is measured in Ohms.' }
      ]
    },
    {
      title: 'Wave Properties, Sound & Electromagnetic Spectrum',
      subtitle: 'Frequency, wavelength, v = fλ, sound reflection, and light waves',
      quickInfo: 'Waves transfer energy without permanently transferring matter. Transverse waves oscillate perpendicular to travel; longitudinal sound waves compress along the direction of travel.',
      keyConcepts: ['Wave equation: Velocity = frequency × wavelength (v = f × λ).', 'Sound requires a material medium to propagate; it cannot travel in a vacuum.', 'Light is an electromagnetic wave traveling at 3.0 × 10⁸ m/s in vacuum.'],
      quiz: [
        { q: 'If a wave has frequency 10 Hz and wavelength 3 meters, what is its speed?', opts: ['0.3 m/s', '3.3 m/s', '13 m/s', '30 m/s'], ans: 3, exp: 'v = f × λ = 10 × 3 = 30 m/s.' },
        { q: 'Can sound waves travel through a complete vacuum in outer space?', opts: ['Yes, at the speed of light', 'No, sound requires a physical medium to transmit vibrations', 'Only low bass frequencies can', 'Yes, but very quietly'], ans: 1, exp: 'Sound is a mechanical wave that requires matter to vibrate.' },
        { q: 'Which wave type causes medium particles to oscillate perpendicular to wave motion?', opts: ['Longitudinal wave', 'Transverse wave', 'Sound wave only', 'Pressure wave'], ans: 1, exp: 'Transverse waves oscillate at 90 degrees to propagation.' },
        { q: 'What part of the electromagnetic spectrum has the highest frequency and energy?', opts: ['Radio waves', 'Infrared', 'Visible light', 'Gamma rays'], ans: 3, exp: 'Gamma rays possess the shortest wavelength and highest frequency.' },
        { q: 'What phenomenon causes a wave to bounce off an impermeable barrier?', opts: ['Refraction', 'Reflection', 'Diffraction', 'Polarization'], ans: 1, exp: 'Bouncing back from a boundary is reflection (like an echo).' }
      ]
    }
  ]
};

export function getGrade9Topics(subjectId: SubjectId): Topic[] {
  const specs = GRADE_9_SPECS[subjectId] || GRADE_9_SPECS['math']!;
  return specs.map((spec, idx) => createTopicFromSpec('grade-9', subjectId, idx, spec));
}
