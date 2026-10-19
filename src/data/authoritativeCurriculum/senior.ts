import { AuthoritativeTopicSpec, GradeAuthoritativeMap } from './types';
import { SubjectId } from '../../types';

// Senior Secondary Subjects Syllabus (Grades 10–12 / SSS 1–3)
// Every subject provides exactly 3 authoritative curriculum topics, each with 5-question quizzes and key concepts.

const SENIOR_CURRICULUM_SPECS: Record<string, [AuthoritativeTopicSpec, AuthoritativeTopicSpec, AuthoritativeTopicSpec]> = {
  math: [
    {
      title: 'Trigonometric Identities & Sine/Cosine Laws',
      subtitle: 'Non-right triangles, ambiguous case, compound angles, and unit circle',
      quickInfo: 'Trigonometry extends to general triangles using the Law of Sines (a/sin A = b/sin B = c/sin C) and Law of Cosines (c² = a² + b² - 2ab cos C). Pythagorean identities form the cornerstone of calculus prep.',
      keyConcepts: [
        'Fundamental identity: sin²(θ) + cos²(θ) = 1.',
        'Law of Sines applies when an angle and its opposite side are known.',
        'Law of Cosines calculates the third side from two sides and the included angle.'
      ],
      quiz: [
        { q: 'In any triangle, what formula relates three sides and one angle?', opts: ['c² = a² + b² - 2ab cos(C)', 'a² + b² = c²', 'sin(A) = cos(B)', 'tan(θ) = sin(θ)cos(θ)'], ans: 0, exp: 'The Law of Cosines generalises Pythagoras for any triangle: c² = a² + b² - 2ab cos(C).' },
        { q: 'What is the exact value of sin²(37°) + cos²(37°)?', opts: ['0', '0.5', '1', '1.414'], ans: 2, exp: 'For any real angle θ, sin²(θ) + cos²(θ) = 1.' },
        { q: 'What is sin(90°)?', opts: ['0', '0.5', '1', '-1'], ans: 2, exp: 'On the unit circle, the y-coordinate at 90° (π/2 radians) is 1.' },
        { q: 'When is the Law of Cosines necessary instead of the Law of Sines?', opts: ['When given 3 angles', 'When given two sides and the included angle (SAS) or all three sides (SSS)', 'Only in right triangles', 'Never'], ans: 1, exp: 'SAS and SSS cases have no known opposite angle-side pair, requiring the Law of Cosines.' },
        { q: 'What is the period of the standard sine function y = sin(x)?', opts: ['90° (π/2)', '180° (π)', '360° (2π)', '720° (4π)'], ans: 2, exp: 'The trigonometric sine wave repeats every 360 degrees or 2π radians.' }
      ]
    },
    {
      title: 'Polynomial Functions & Quadratic Formula Derivation',
      subtitle: 'Discriminant analysis, synthetic division, and remainder theorem',
      quickInfo: 'Higher-degree polynomials are analyzed using factor and remainder theorems. The discriminant Δ = b² - 4ac characterizes quadratic roots as real distinct, repeated, or complex conjugates.',
      keyConcepts: [
        'Quadratic formula: x = (-b ± √(b² - 4ac)) / (2a).',
        'If Δ > 0: two distinct real roots; Δ = 0: one repeated root; Δ < 0: two complex conjugate roots.',
        'The Remainder Theorem: dividing P(x) by (x - c) yields remainder P(c).'
      ],
      quiz: [
        { q: 'What does a negative discriminant (b² - 4ac < 0) indicate about quadratic roots?', opts: ['Two distinct real roots', 'One real repeated root', 'Two complex conjugate roots (no real intercepts)', 'Roots are zero'], ans: 2, exp: 'Square roots of negative numbers yield imaginary/complex numbers.' },
        { q: 'Solve x² - 4x - 5 = 0 using factorization or the quadratic formula', opts: ['x = 5 and x = -1', 'x = -5 and x = 1', 'x = 2 and x = -2', 'x = 4 and x = 5'], ans: 0, exp: '(x - 5)(x + 1) = 0 => x = 5 or x = -1.' },
        { q: 'According to the Factor Theorem, (x - 2) is a factor of P(x) if and only if:', opts: ['P(2) = 0', 'P(-2) = 0', 'P(0) = 2', 'P(2) = 2'], ans: 0, exp: 'A linear term is a factor if evaluating the polynomial at the root gives zero.' },
        { q: 'What is the vertex x-coordinate of the parabola y = ax² + bx + c?', opts: ['x = -b / (2a)', 'x = b / a', 'x = -c / a', 'x = √(b² - 4ac)'], ans: 0, exp: 'The axis of symmetry occurs at x = -b / (2a).' },
        { q: 'What is the degree of the polynomial P(x) = 5x⁴ - 3x² + 7x - 12?', opts: ['2', '3', '4', '5'], ans: 2, exp: 'The degree is the highest exponent of the variable, which is 4.' }
      ]
    },
    {
      title: 'Differential Calculus: Limits & Derivatives',
      subtitle: 'Power rule, product rule, chain rule, and finding stationary points',
      quickInfo: 'Calculus investigates rates of change. The derivative f\'(x) defines the instantaneous slope of a curve. The power rule d/dx[xⁿ] = n·xⁿ⁻¹ powers velocity and optimization problems.',
      keyConcepts: [
        'The derivative represents the instantaneous rate of change and tangent slope.',
        'Power rule: d/dx [a·xⁿ] = n·a·xⁿ⁻¹.',
        'At local maxima and minima (stationary points), f\'(x) = 0.'
      ],
      quiz: [
        { q: 'What is the derivative of f(x) = 4x³ with respect to x?', opts: ['12x²', '12x³', '4x²', '7x²'], ans: 0, exp: 'Power rule: 3 × 4x^(3-1) = 12x².' },
        { q: 'What is the derivative of a constant number, such as d/dx [7]?', opts: ['7', '1', '0', 'undefined'], ans: 2, exp: 'Constants have zero rate of change; slope of a horizontal line is 0.' },
        { q: 'If position s(t) = 5t², what is the instantaneous velocity v(t) = s\'(t)?', opts: ['5t', '10t', '10', '25t'], ans: 1, exp: 'd/dt [5t²] = 2 × 5t = 10t.' },
        { q: 'How do you find stationary turning points on a smooth curve y = f(x)?', opts: ['Set y = 0', 'Set f\'(x) = 0 and solve for x', 'Square the equation', 'Divide by x'], ans: 1, exp: 'Stationary points have zero gradient: f\'(x) = 0.' },
        { q: 'What is the product rule for differentiating u(x) · v(x)?', opts: ['u\'v\'', 'u\'v + uv\'', 'u\' / v\'', '(uv)\' = u + v'], ans: 1, exp: 'Product rule: (uv)\' = u\'v + uv\'.' }
      ]
    }
  ],
  'further-math': [
    {
      title: 'Matrix Algebra, Determinants & Inverse Matrices',
      subtitle: 'Matrix multiplication, Cramer\'s rule for 3x3 systems, and eigenvalues',
      quickInfo: 'Matrices represent linear transformations and systems of equations. A square matrix possesses a multiplicative inverse A⁻¹ = (1/det A) · adj(A) provided its determinant is non-zero.',
      keyConcepts: [
        'Matrix multiplication AB is valid only when columns of A equal rows of B.',
        'A matrix with det(A) = 0 is singular and has no inverse.',
        'Determinant of 2x2 matrix [a b; c d] is ad - bc.'
      ],
      quiz: [
        { q: 'What is the determinant of matrix [[3, 2], [1, 4]]?', opts: ['10', '14', '12', '8'], ans: 0, exp: 'det = (3)(4) - (2)(1) = 12 - 2 = 10.' },
        { q: 'If the determinant of a matrix is 0, what is that matrix called?', opts: ['Identity matrix', 'Singular matrix', 'Symmetric matrix', 'Diagonal matrix'], ans: 1, exp: 'A singular matrix has det = 0 and cannot be inverted.' },
        { q: 'What is the product of matrix A and its inverse A⁻¹?', opts: ['Null matrix 0', 'Identity matrix I', 'Transpose A^T', 'Scalar 1'], ans: 1, exp: 'A · A⁻¹ = I (the identity matrix).' },
        { q: 'Can you multiply a 2x3 matrix by another 2x3 matrix?', opts: ['Yes, directly', 'No, inner dimensions must match (columns of A must equal rows of B)', 'Only if all entries are positive', 'Yes, by transposing both'], ans: 1, exp: '(2x3) × (2x3) is invalid because 3 ≠ 2.' },
        { q: 'What is the trace of a square matrix?', opts: ['The determinant', 'The sum of elements along the main diagonal', 'The largest eigenvalue', 'The rank'], ans: 1, exp: 'The trace is the sum of main diagonal entries.' }
      ]
    },
    {
      title: 'Vectors in 3-Dimensional Space & Dot/Cross Products',
      subtitle: 'Magnitude, unit vectors, scalar dot product, and vector cross product',
      quickInfo: 'Vectors have magnitude and direction. The scalar dot product (u · v = |u||v|cos θ) tests orthogonality, while the vector cross product (u × v) computes an orthogonal normal vector.',
      keyConcepts: [
        'Two non-zero vectors are perpendicular if their dot product equals 0.',
        'The magnitude of vector v = ai + bj + ck is |v| = √(a² + b² + c²).',
        'Cross product magnitude |u × v| equals the area of the spanned parallelogram.'
      ],
      quiz: [
        { q: 'If two non-zero vectors u and v are orthogonal (perpendicular), their dot product u · v is:', opts: ['1', '0', '-1', 'Infinity'], ans: 1, exp: 'cos(90°) = 0, so the dot product is exactly 0.' },
        { q: 'Calculate the magnitude of vector v = 3i + 4j + 0k', opts: ['5', '7', '12', '25'], ans: 0, exp: '√(3² + 4²) = √(9 + 16) = √25 = 5.' },
        { q: 'What is the geometric result of the cross product u × v of two 3D vectors?', opts: ['A scalar number', 'A vector perpendicular to both u and v', 'A parallel vector', 'An angle'], ans: 1, exp: 'The cross product generates a vector normal to the plane of u and v.' },
        { q: 'What is the dot product of (2i + 3j) and (4i - 1j)?', opts: ['5', '8', '11', '14'], ans: 0, exp: '(2)(4) + (3)(-1) = 8 - 3 = 5.' },
        { q: 'What is the cross product of any vector with itself: v × v?', opts: ['|v|²', 'The zero vector 0', '2v', '1'], ans: 1, exp: 'The angle is 0°; sin(0°) = 0, yielding the zero vector.' }
      ]
    },
    {
      title: 'Integration Techniques: Substitution & By Parts',
      subtitle: 'Definite integrals, u-substitution, ∫u dv = uv - ∫v du, and areas',
      quickInfo: 'Integration is anti-differentiation. Definite integrals compute the net area bounded beneath curves. Advanced techniques include substitution (reverse chain rule) and integration by parts.',
      keyConcepts: [
        'Fundamental Theorem of Calculus: ∫[a to b] f(x) dx = F(b) - F(a).',
        'Integration by parts formula: ∫ u dv = u·v - ∫ v du.',
        'Power rule for integration: ∫ xⁿ dx = (xⁿ⁺¹)/(n + 1) + C (for n ≠ -1).'
      ],
      quiz: [
        { q: 'What is the indefinite integral ∫ 3x² dx?', opts: ['x³ + C', '6x + C', 'x⁴ + C', '3x³ + C'], ans: 0, exp: '3(x³/3) + C = x³ + C.' },
        { q: 'What is the integration by parts formula?', opts: ['∫ u dv = uv - ∫ v du', '∫ u dv = u\'v\'', '∫ u dv = u/v + C', '∫ u dv = uv + ∫ v du'], ans: 0, exp: 'Integration by parts is ∫ u dv = uv - ∫ v du.' },
        { q: 'What is ∫ (1/x) dx for x > 0?', opts: ['-1/x² + C', 'ln(x) + C', 'x⁰ + C', 'e^x + C'], ans: 1, exp: 'The derivative of ln(x) is 1/x, so its anti-derivative is ln(x) + C.' },
        { q: 'What represents the constant "C" added to an indefinite integral?', opts: ['Constant of integration', 'Speed of light', 'Celsius temperature', 'Circumference'], ans: 0, exp: 'Indefinite integrals include an arbitrary constant of integration C.' },
        { q: 'Evaluate the definite integral ∫[0 to 2] 2x dx', opts: ['2', '4', '8', '16'], ans: 1, exp: '[x²] evaluated from 0 to 2 = 2² - 0² = 4.' }
      ]
    }
  ],
  'english-lang': [
    {
      title: 'Grammar: Advanced Concord, Clauses & Synthesis',
      subtitle: 'Subject-verb agreement, subjunctive mood, relative clauses, and sentence combining',
      quickInfo: 'Mastery of advanced English syntax ensures stylistic sophistication in academic writing. Concord rules govern proximity agreement, collective nouns, and correlative pairs.',
      keyConcepts: [
        'Proximity concord: with "either... or" / "neither... nor", the verb agrees with the nearer subject.',
        'The subjunctive mood expresses wishes, demands, or hypothetical conditions ("I suggest that he be present").',
        'Independent clauses can be conjoined by coordinating conjunctions (FANBOYS) or semicolons.'
      ],
      quiz: [
        { q: 'Choose the correct verb: "Neither the teacher nor the students ___ present."', opts: ['was', 'were', 'is', 'being'], ans: 1, exp: 'In "neither... nor", the verb agrees with the nearer subject "students" (plural: were).' },
        { q: 'Identify the sentence in the subjunctive mood:', opts: ['She works very hard every day', 'The committee recommended that he step down immediately', 'They are going to the mall', 'Will you come with us?'], ans: 1, exp: '"That he step down" uses the base subjunctive form.' },
        { q: 'What punctuation mark correctly separates two independent clauses without a conjunction?', opts: ['A comma', 'A semicolon (;)', 'A hyphen', 'An exclamation mark'], ans: 1, exp: 'A semicolon links related independent clauses.' },
        { q: 'Which relative pronoun correctly refers to people in the objective case?', opts: ['Which', 'Whom', 'Whose', 'What'], ans: 1, exp: '"Whom" is the objective relative pronoun for persons.' },
        { q: 'What error occurs when two complete independent clauses are joined with only a comma?', opts: ['Dangling modifier', 'Comma splice', 'Split infinitive', 'Ellipsis'], ans: 1, exp: 'Joining two independent clauses with just a comma is a comma splice.' }
      ]
    },
    {
      title: 'Lexis & Structure: Idioms, Collocations & Phrasal Verbs',
      subtitle: 'Figurative expressions, register, prepositional phrases, and vocabulary precision',
      quickInfo: 'Lexis and structure questions in senior secondary examinations test nuanced English usage. Phrasal verbs (verb + particle) convey idiomatic meanings distinct from literal verbs.',
      keyConcepts: [
        'Collocations are natural word partnerships (e.g., "commit a crime", not "make a crime").',
        'Phrasal verbs change meaning based on prepositions (e.g., "give in", "give up", "give away").',
        'Connotations carry emotional overtones distinct from literal denotative definitions.'
      ],
      quiz: [
        { q: 'What is the meaning of the phrasal verb "to call off"?', opts: ['To shout loudly', 'To cancel an event or meeting', 'To postpone indefinitely', 'To summon someone'], ans: 1, exp: '"Call off" means to cancel.' },
        { q: 'Select the idiomatic natural collocation in English:', opts: ['Do a mistake', 'Make a mistake', 'Commit a mistake', 'Perform a mistake'], ans: 1, exp: 'The natural collocation is "make a mistake".' },
        { q: 'What does the idiom "to burn the midnight oil" mean?', opts: ['To set fire to a lamp', 'To study or work late into the night', 'To waste electricity', 'To cause destruction'], ans: 1, exp: 'Working or studying late into the night.' },
        { q: 'Complete the sentence: "She is accustomed ___ waking up early."', opts: ['with', 'to', 'for', 'in'], ans: 1, exp: 'The fixed preposition is "accustomed to".' },
        { q: 'What is the antonym of the word "meticulous"?', opts: ['Careful', 'Careless / Sloppy', 'Thorough', 'Punctual'], ans: 1, exp: 'Meticulous means showing great care; its antonym is careless.' }
      ]
    },
    {
      title: 'Expository & Argumentative Essay Composition',
      subtitle: 'Thesis development, rhetorical appeals, counterarguments, and cohesive transitions',
      quickInfo: 'Senior essays require structured development. Argumentative compositions employ Aristotelian rhetorical appeals (Ethos, Pathos, Logos), anticipate counterarguments, and build persuasive conclusions.',
      keyConcepts: [
        'Rhetorical appeals: Ethos (credibility), Logos (logic and empirical facts), Pathos (emotional resonance).',
        'Cohesive devices: transitional adverbs (moreover, furthermore, conversely, consequently).',
        'Refutation strategy: acknowledge opponent counterclaims respectfully, then demonstrate flaws.'
      ],
      quiz: [
        { q: 'Which rhetorical appeal relies primarily on verifiable logic, facts, and statistical data?', opts: ['Ethos', 'Logos', 'Pathos', 'Kairos'], ans: 1, exp: 'Logos appeals to logical reasoning and data.' },
        { q: 'What transitional phrase signals a direct logical contradiction or opposing viewpoint?', opts: ['Furthermore', 'On the contrary / Conversely', 'Similarly', 'In addition'], ans: 1, exp: '"Conversely" and "on the contrary" introduce opposing viewpoints.' },
        { q: 'Where should the primary thesis statement be situated in a standard five-paragraph essay?', opts: ['In the middle of the bibliography', 'At the conclusion of the introductory paragraph', 'In the third body paragraph', 'On the title page only'], ans: 1, exp: 'The thesis statement anchors the introduction.' },
        { q: 'What is the role of "topic sentences" in body paragraphs?', opts: ['To conclude the whole paper', 'To introduce the specific sub-claim argued in that paragraph', 'To list references', 'To introduce characters'], ans: 1, exp: 'Topic sentences direct the focus of body paragraphs.' },
        { q: 'Why is addressing a counterargument beneficial in persuasive discourse?', opts: ['It proves you lack conviction', 'It demonstrates intellectual objectivity and strengthens credibility (Ethos)', 'It confuses the reader', 'It makes the essay shorter'], ans: 1, exp: 'Refuting opposing views enhances authorial credibility.' }
      ]
    }
  ],
  'english-lit': [
    {
      title: 'Shakespearean Drama & Renaissance Theatrical Conventions',
      subtitle: 'Tragic flaw (hamartia), dramatic irony, soliloquy, blank verse, and catharsis',
      quickInfo: 'Shakespearean tragedies (Hamlet, Macbeth, Othello) explore human ambition, moral frailty, and fate. Plays utilize iambic pentameter (blank verse) and culminate in dramatic catharsis.',
      keyConcepts: [
        'Tragic flaw (hamartia) leads to the eventual downfall of a noble protagonist.',
        'Catharsis: the emotional purging of pity and terror experienced by the audience.',
        'Blank verse: unrhymed lines of iambic pentameter (ten syllables with unstressed/stressed meter).'
      ],
      quiz: [
        { q: 'What Greek theatrical term denotes the fatal flaw or error of judgment in a tragic hero?', opts: ['Hubris', 'Hamartia', 'Catharsis', 'Anagnorisis'], ans: 1, exp: 'Hamartia is the protagonist\'s tragic flaw.' },
        { q: 'What poetic meter consists of five unrhymed iambic poetic feet per line?', opts: ['Free verse', 'Blank verse (iambic pentameter)', 'Trochaic octameter', 'Anapestic tetrameter'], ans: 1, exp: 'Shakespeare wrote largely in blank verse.' },
        { q: 'What is "catharsis" in Aristotelian dramatic theory?', opts: ['The sudden arrival of actors', 'The emotional purging or release of pity and fear in the audience', 'The intermission break', 'The death of the villain only'], ans: 1, exp: 'Catharsis releases audience emotional tension.' },
        { q: 'In Macbeth, what is Macbeth\'s primary tragic flaw driving his moral ruin?', opts: ['Cowardice', 'Vaulting and uncontrolled ambition', 'Jealousy', 'Avarice'], ans: 1, exp: 'Macbeth is undone by unrestrained ambition.' },
        { q: 'What term describes an actor\'s quick remark directed to the audience that other characters cannot hear?', opts: ['An aside', 'A soliloquy', 'A monologue', 'An epilogue'], ans: 0, exp: 'An aside is heard only by the audience.' }
      ]
    },
    {
      title: 'African Prose & The Post-Colonial Condition',
      subtitle: 'Themes of colonial collision, cultural disillusionment, proverb usage, and narrative voice',
      quickInfo: 'African literature (Achebe, Ngugi, Chimamanda Adichie) examines the socio-political impact of colonial encounters, cultural identity, governance crises, and the richness of oral proverbs.',
      keyConcepts: [
        'Chinua Achebe\'s famous axiom: "Proverbs are the palm-oil with which words are eaten."',
        'Colonial collision: traditional social structures destabilized by Western religious and political systems.',
        'Themes: Cultural alienation, patriarchal expectations, corruption, and the search for modern identity.'
      ],
      quiz: [
        { q: 'Who wrote the seminal post-colonial African masterpiece novel "Things Fall Apart"?', opts: ['Wole Soyinka', 'Chinua Achebe', 'Ngugi wa Thiong\'o', 'Ben Okri'], ans: 1, exp: 'Chinua Achebe published Things Fall Apart in 1958.' },
        { q: 'In Things Fall Apart, what cultural saying illustrates the elevated importance of proverbs in Igbo society?', opts: ['"Words are sharper than swords"', '"Proverbs are the palm-oil with which words are eaten"', '"Silence is golden"', '"Knowledge is wealth"'], ans: 1, exp: 'Proverbs enrich cultural communication.' },
        { q: 'What central thematic conflict drives Things Fall Apart?', opts: ['Space travel', 'The clash between traditional Igbo culture and the arrival of British colonial administrators/missionaries', 'An underwater voyage', 'A detective mystery'], ans: 1, exp: 'Colonial encounter destabilizes Umuofia.' },
        { q: 'Who was the first African recipient of the Nobel Prize in Literature (awarded in 1986)?', opts: ['Chinua Achebe', 'Wole Soyinka', 'Nadine Gordimer', 'Naguib Mahfouz'], ans: 1, exp: 'Nigerian playwright and poet Wole Soyinka won in 1986.' },
        { q: 'What is a recurring theme in post-independence African political literature?', opts: ['Disillusionment with military regimes, corruption, and neocolonial exploitation', 'Extraterrestrial invasions', 'Medieval castles in Europe', 'Ice-skating championships'], ans: 0, exp: 'Post-independence disillusionment is prominent in African fiction.' }
      ]
    },
    {
      title: 'Poetic Analysis: Modernist & Romantic Poetic Traditions',
      subtitle: 'Metaphor, sensory imagery, enjambment, tone, meter, and socio-political themes',
      quickInfo: 'Poetic analysis dissects how formal architecture (rhyme scheme, meter, enjambment) and figurative imagery combine to express profound philosophical and political truths.',
      keyConcepts: [
        'Romanticism emphasizes sublime nature, emotion, and individualism (Wordsworth, Keats).',
        'Modernism breaks conventional meter to mirror a fractured modern world (T.S. Eliot).',
        'Enjambment: the continuation of a sentence without pause beyond the end of a poetic line.'
      ],
      quiz: [
        { q: 'What is "enjambment" in poetry?', opts: ['A rhyming couplet', 'Running a sentence across line breaks without terminal punctuation', 'A poetic footnote', 'A pause in the middle of a line'], ans: 1, exp: 'Enjambment carries syntax past line ends.' },
        { q: 'What movement celebrated emotional intimacy, sensory imagination, and the sublime power of wild nature?', opts: ['The Industrial Era', 'The Romantic Movement', 'The Classical Era', 'The Realist Period'], ans: 1, exp: 'Romanticism prioritized emotion and sublime nature.' },
        { q: 'What is a 14-line lyric poem typically composed in iambic pentameter called?', opts: ['An ode', 'An elegy', 'A sonnet', 'A ballad'], ans: 2, exp: 'A sonnet has exactly 14 lines.' },
        { q: 'What does a poetic "caesura" represent in verse scansion?', opts: ['A sudden change in rhyme scheme', 'A deliberate rhythmic pause or break within a line of poetry', 'The final stanza', 'A repeated chorus'], ans: 1, exp: 'A caesura is a pause within a poetic line.' },
        { q: 'What type of poem is written in solemn mourning of a deceased individual?', opts: ['An epigram', 'An elegy', 'A limerick', 'An epic'], ans: 1, exp: 'An elegy is a poetic lamentation for the dead.' }
      ]
    }
  ],
  biology: [
    {
      title: 'Cell Division: Mitosis, Meiosis & Chromosomes',
      subtitle: 'Somatic growth, gamete production, DNA replication, and phases',
      quickInfo: 'Mitosis produces two genetically identical diploid cells for bodily growth and repair. Meiosis produces four unique haploid gametes for sexual reproduction.',
      keyConcepts: [
        'Mitosis phases: Prophase, Metaphase, Anaphase, Telophase (PMAT).',
        'Meiosis introduces genetic variation via crossing-over in Prophase I.',
        'Human somatic cells have 46 chromosomes (23 homologous pairs).'
      ],
      quiz: [
        { q: 'What is the biological purpose of mitosis?', opts: ['Gamete egg/sperm production', 'Growth, tissue repair, and asexual reproduction', 'Energy digestion', 'Protein synthesis'], ans: 1, exp: 'Mitosis creates identical daughter cells for somatic growth and repair.' },
        { q: 'How many chromosomes are in a normal human gamete (sperm or egg)?', opts: ['23', '46', '92', '12'], ans: 0, exp: 'Gametes are haploid, containing 23 unpaired chromosomes.' },
        { q: 'During which phase of mitosis do chromosomes align along the center equator?', opts: ['Prophase', 'Metaphase', 'Anaphase', 'Telophase'], ans: 1, exp: 'Metaphase is Middle alignment along the metaphase plate.' },
        { q: 'What process in Meiosis I generates genetic diversity between siblings?', opts: ['Cytokinesis', 'Crossing over (recombination)', 'Cloning', 'Spindle formation'], ans: 1, exp: 'Crossing over swaps DNA segments between homologous chromatids.' },
        { q: 'How many daughter cells are produced at the end of meiosis?', opts: ['Two identical cells', 'Four genetically diverse haploid cells', 'One diploid cell', 'Eight cells'], ans: 1, exp: 'Meiosis involves two divisions producing 4 haploid gametes.' }
      ]
    },
    {
      title: 'Mendelian Genetics & Patterns of Inheritance',
      subtitle: 'Monohybrid crosses, Punnett squares, dominant vs recessive alleles, and sex linkage',
      quickInfo: 'Gregor Mendel formulated the laws of Segregation and Independent Assortment. Monohybrid crosses determine phenotypic and genotypic ratios (e.g., 3:1 phenotype in heterozygous crosses).',
      keyConcepts: [
        'Genotype represents the genetic makeup (BB, Bb, bb); phenotype is the observable trait.',
        'Sex-linked traits (e.g., hemophilia, red-green color blindness) are carried on the X chromosome.',
        'Mendel\'s Law of Segregation: paired alleles separate during gamete formation.'
      ],
      quiz: [
        { q: 'In a cross between two heterozygous brown-eyed parents (Bb × Bb), what is the expected phenotypic ratio of brown to blue eyes?', opts: ['1 : 1', '3 : 1', '1 : 2 : 1', '4 : 0'], ans: 1, exp: 'BB, Bb, Bb (3 brown) : bb (1 blue) = 3:1.' },
        { q: 'What term describes an individual possessing two identical alleles for a given gene (e.g., TT or tt)?', opts: ['Heterozygous', 'Homozygous', 'Hemizygous', 'Polygenic'], ans: 1, exp: 'Homozygous means identical alleles.' },
        { q: 'Why are X-linked recessive genetic conditions (like color blindness) far more common in human males?', opts: ['Males have two X chromosomes', 'Males possess only one X chromosome, so a single recessive allele manifests the trait', 'Females have no X chromosomes', 'Male hormones activate it'], ans: 1, exp: 'Males have XY chromosomes with no second X to mask recessive alleles.' },
        { q: 'Who is revered as the historical father of classical genetics for his experiments on garden pea plants?', opts: ['Charles Darwin', 'Gregor Mendel', 'Louis Pasteur', 'James Watson'], ans: 1, exp: 'Gregor Mendel discovered the laws of inheritance.' },
        { q: 'What is the physical, observable appearance of an organism\'s genetic makeup called?', opts: ['Genotype', 'Phenotype', 'Karyotype', 'Prototype'], ans: 1, exp: 'Phenotype is the expressed observable trait.' }
      ]
    },
    {
      title: 'Ecology: Ecosystems, Energy Flow & Biogeochemical Cycles',
      subtitle: 'Food webs, trophic levels, 10% energy transfer rule, and nitrogen/carbon cycles',
      quickInfo: 'Ecosystems encompass living biological communities interacting with abiotic environments. Solar energy cascades through trophic levels (producers, consumers, decomposers) with ~90% energy lost as metabolic heat.',
      keyConcepts: [
        'Producers (autotrophs) fix solar energy via photosynthesis.',
        '10% ecological efficiency rule: only ~10% of energy transfers from one trophic level to the next.',
        'Nitrogen fixation: atmospheric N₂ is converted to usable nitrates by Rhizobium bacteria.'
      ],
      quiz: [
        { q: 'Approximately what percentage of energy is transferred from one trophic level to the next higher level?', opts: ['100%', '50%', '10%', '1%'], ans: 2, exp: 'The 10% ecological rule: ~90% is lost as metabolic heat and respiration.' },
        { q: 'What group of organisms forms the fundamental base of any terrestrial ecological food chain?', opts: ['Primary consumers (herbivores)', 'Autotrophic primary producers (green plants)', 'Apex predators', 'Decomposers only'], ans: 1, exp: 'Autotrophs harness sunlight to generate biomass.' },
        { q: 'Which bacteria living in legume root nodules convert atmospheric nitrogen gas into absorbable soil nitrates?', opts: ['E. coli', 'Rhizobium bacteria', 'Lactobacillus', 'Salmonella'], ans: 1, exp: 'Rhizobium performs symbiotic nitrogen fixation.' },
        { q: 'What term describes all interacting living organisms of different species within a specific geographic habitat?', opts: ['A population', 'A community', 'A biome', 'A niche'], ans: 1, exp: 'A biological community comprises multiple species populations.' },
        { q: 'What is the role of fungi and saprophytic bacteria in an ecosystem?', opts: ['To hunt live prey', 'To decompose dead organic matter and recycle vital nutrients back to the soil', 'To produce oxygen directly', 'To pollinate flowers'], ans: 1, exp: 'Decomposers recycle locked organic nutrients.' }
      ]
    }
  ],
  chemistry: [
    {
      title: 'Atomic Structure, Periodic Trends & Chemical Bonding',
      subtitle: 'Electrons, ionization energy, electronegativity, ionic, covalent, and metallic bonds',
      quickInfo: 'Atoms consist of protons, neutrons, and electrons. Periodic table trends (electronegativity, atomic radius) dictate chemical bonding: ionic (electron transfer), covalent (electron sharing), or metallic.',
      keyConcepts: [
        'Electronegativity increases across a period (left to right) and decreases down a group.',
        'Ionic bonds form between metals and non-metals via electrostatic attraction between oppositely charged ions.',
        'Covalent bonds involve shared pairs of valence electrons between non-metal atoms.'
      ],
      quiz: [
        { q: 'Which element is the most electronegative on the entire periodic table?', opts: ['Oxygen', 'Fluorine', 'Chlorine', 'Francium'], ans: 1, exp: 'Fluorine has the highest electronegativity (4.0 on the Pauling scale).' },
        { q: 'What type of chemical bond forms between sodium (metal) and chlorine (non-metal) in NaCl?', opts: ['Covalent bond', 'Ionic bond', 'Metallic bond', 'Hydrogen bond'], ans: 1, exp: 'Sodium transfers an electron to chlorine, creating an ionic bond.' },
        { q: 'What happens to the atomic radius of elements as you move from left to right across a periodic row?', opts: ['It increases', 'It decreases (due to increasing nuclear charge pulling electrons closer)', 'It stays exactly the same', 'It doubles'], ans: 1, exp: 'Higher nuclear charge pulls electrons tighter, shrinking radius.' },
        { q: 'How many valence electrons does a neutral carbon atom have in its ground state?', opts: ['2', '4', '6', '8'], ans: 1, exp: 'Carbon (Group 14) has 4 valence electrons.' },
        { q: 'What model describes the bonding in solid metals as positive ions surrounded by a "sea of mobile delocalized electrons"?', opts: ['Ionic crystal model', 'Metallic bonding model', 'Covalent network model', 'Molecular lattice model'], ans: 1, exp: 'Delocalized electron sea explains electrical conductivity in metals.' }
      ]
    },
    {
      title: 'Stoichiometry & The Mole Concept',
      subtitle: 'Avogadro\'s number (6.022 × 10²³), molar mass, empirical formulas, and molarity',
      quickInfo: 'Stoichiometry uses balanced chemical equations to calculate reaction quantities. One mole equals 6.022 × 10²³ particles (Avogadro\'s constant). Molar volume of any ideal gas at STP is 22.4 dm³.',
      keyConcepts: [
        'Number of moles (n) = Mass (m) / Molar Mass (M).',
        'At STP (Standard Temperature and Pressure), 1 mole of any ideal gas occupies 22.4 dm³ (litres).',
        'Molarity (C) = Moles of solute / Volume of solution in dm³ (C = n / V).'
      ],
      quiz: [
        { q: 'How many particles are contained within exactly one mole of any pure chemical substance?', opts: ['3.141 × 10⁸', '6.022 × 10²³ (Avogadro\'s number)', '9.81 × 10²', '1.602 × 10⁻¹⁹'], ans: 1, exp: 'Avogadro\'s constant is 6.022 × 10²³ particles/mol.' },
        { q: 'What is the molar mass of water (H₂O), given H = 1 g/mol and O = 16 g/mol?', opts: ['17 g/mol', '18 g/mol', '32 g/mol', '34 g/mol'], ans: 1, exp: '(2 × 1) + 16 = 18 g/mol.' },
        { q: 'What volume does 2 moles of oxygen gas (O₂) occupy at standard temperature and pressure (STP)?', opts: ['11.2 dm³', '22.4 dm³', '44.8 dm³', '89.6 dm³'], ans: 2, exp: '2 moles × 22.4 dm³/mol = 44.8 dm³.' },
        { q: 'How many moles are in 88 grams of carbon dioxide (CO₂), with molar mass 44 g/mol?', opts: ['1 mole', '2 moles', '4 moles', '0.5 moles'], ans: 1, exp: '88 / 44 = 2 moles.' },
        { q: 'What is the concentration of a solution with 0.5 moles of NaCl dissolved in 2 dm³ of water?', opts: ['0.25 mol/dm³', '1.0 mol/dm³', '2.5 mol/dm³', '4.0 mol/dm³'], ans: 0, exp: 'C = n / V = 0.5 / 2 = 0.25 mol/dm³.' }
      ]
    },
    {
      title: 'Acids, Bases, pH & Acid-Base Titrations',
      subtitle: 'Arrhenius vs Bronsted-Lowry theories, neutralization, indicators, and titration curves',
      quickInfo: 'Acids donate protons (H⁺); bases accept protons. The pH scale measures hydrogen ion concentration (-log[H⁺]). Volumetric titration determines the unknown concentration of an acid or base.',
      keyConcepts: [
        'pH = -log₁₀[H⁺]; neutral pH is 7; acidic is < 7; basic/alkaline is > 7.',
        'Neutralization: Acid + Base → Salt + Water (HCl + NaOH → NaCl + H₂O).',
        'Titration formula: (C_a × V_a) / (C_b × V_b) = n_a / n_b from balanced equation.'
      ],
      quiz: [
        { q: 'What is the pH of a neutral pure water solution at 25°C?', opts: ['0', '1', '7', '14'], ans: 2, exp: 'Neutral pure water has pH 7.' },
        { q: 'According to the Brønsted-Lowry definition, what is an acid?', opts: ['An electron pair donor', 'A proton (H⁺) donor', 'A hydroxide ion producer', 'A salt'], ans: 1, exp: 'Brønsted-Lowry acids donate protons.' },
        { q: 'What color does phenolphthalein indicator turn in a strongly basic/alkaline solution?', opts: ['Colorless', 'Deep pink / magenta', 'Bright yellow', 'Red'], ans: 1, exp: 'Phenolphthalein turns vivid pink in alkaline media.' },
        { q: 'What are the products when hydrochloric acid (HCl) reacts with sodium hydroxide (NaOH)?', opts: ['Chlorine gas and hydrogen', 'Sodium chloride salt and water', 'Sodium hydride and oxygen', 'Carbon dioxide and water'], ans: 1, exp: 'Neutralization yields NaCl + H₂O.' },
        { q: 'What laboratory glassware is used to deliver precisely measured volumes of titrant during a titration?', opts: ['A beaker', 'A burette', 'A test tube', 'A graduated cylinder'], ans: 1, exp: 'A burette delivers precise titrant volumes.' }
      ]
    }
  ],
  physics: [
    {
      title: 'Newton\'s Laws of Motion & Momentum Conservation',
      subtitle: 'Inertia, F = ma, action-reaction, impulse, and elastic vs inelastic collisions',
      quickInfo: 'Classical mechanics describes force and motion. Newton\'s 1st Law defines inertia; 2nd Law states F = ma; 3rd Law establishes equal and opposite action-reaction forces. Momentum is conserved in collisions.',
      keyConcepts: [
        'Newton\'s 1st Law (Inertia): an object remains at rest or constant velocity unless acted upon by a net force.',
        'Newton\'s 2nd Law: Force = mass × acceleration (F = ma); Impulse = change in momentum (J = Δp = FΔt).',
        'Law of Conservation of Linear Momentum: total momentum before collision equals total momentum after.'
      ],
      quiz: [
        { q: 'What force is required to accelerate a 5 kg mass at a rate of 4 m/s²?', opts: ['1.25 N', '9 N', '20 N', '40 N'], ans: 2, exp: 'F = ma = 5 kg × 4 m/s² = 20 N.' },
        { q: 'Newton\'s third law of motion dictates that for every action force, there is:', opts: ['A greater opposite reaction', 'An equal and opposite reaction acting on a different body', 'No reaction', 'A delayed reaction'], ans: 1, exp: 'Action and reaction forces are equal in magnitude and opposite in direction.' },
        { q: 'What is the linear momentum of a 1,200 kg car traveling at a velocity of 20 m/s?', opts: ['60 kg·m/s', '24,000 kg·m/s', '120,000 kg·m/s', '2,400 kg·m/s'], ans: 1, exp: 'p = mv = 1200 × 20 = 24,000 kg·m/s.' },
        { q: 'What physical quantity is defined as the rate of change of linear momentum with time?', opts: ['Kinetic energy', 'Net Force', 'Power', 'Work'], ans: 1, exp: 'F = dp/dt (Newton\'s 2nd Law).' },
        { q: 'In an elastic collision between two billiard balls, what is conserved?', opts: ['Kinetic energy only', 'Linear momentum only', 'Both linear momentum and total kinetic energy', 'Neither'], ans: 2, exp: 'Elastic collisions conserve both momentum and kinetic energy.' }
      ]
    },
    {
      title: 'Wave Motion, Light Optics & The Electromagnetic Spectrum',
      subtitle: 'Wave equation v = fλ, Snell\'s law of refraction, total internal reflection, and lenses',
      quickInfo: 'Waves transfer energy without transferring matter. Light refracts according to Snell\'s Law (n₁ sin θ₁ = n₂ sin θ₂). When light travels from a dense to rare medium past the critical angle, total internal reflection occurs.',
      keyConcepts: [
        'Wave equation: Velocity = frequency × wavelength (v = f·λ).',
        'Snell\'s Law of Refraction: n₁ sin(θ₁) = n₂ sin(θ₂).',
        'Total Internal Reflection powers fiber optics when angle of incidence exceeds critical angle θ_c.'
      ],
      quiz: [
        { q: 'A sound wave has a frequency of 500 Hz and travels at 340 m/s. What is its wavelength?', opts: ['0.68 m', '1.47 m', '170 m', '170,000 m'], ans: 0, exp: 'λ = v / f = 340 / 500 = 0.68 m.' },
        { q: 'What optical phenomenon occurs when light attempts to cross from glass into air at an angle greater than the critical angle?', opts: ['Diffraction', 'Total Internal Reflection', 'Dispersion', 'Polarization'], ans: 1, exp: 'Total internal reflection reflects light completely.' },
        { q: 'What type of lens is thinner in the center and thicker at the edges, causing parallel light rays to diverge?', opts: ['Convex lens (converging)', 'Concave lens (diverging)', 'Cylindrical lens', 'Plano-convex lens'], ans: 1, exp: 'Concave lenses diverge light rays.' },
        { q: 'Which wave in the electromagnetic spectrum has the highest frequency and photon energy?', opts: ['Radio waves', 'Visible green light', 'Gamma rays', 'Microwaves'], ans: 2, exp: 'Gamma rays possess the highest frequencies.' },
        { q: 'What is the speed of light in a vacuum?', opts: ['3 × 10⁸ m/s', '3 × 10⁶ m/s', '340 m/s', '9.8 m/s'], ans: 0, exp: 'Speed of light c ≈ 3.00 × 10⁸ m/s.' }
      ]
    },
    {
      title: 'Current Electricity, Circuits & Electromagnetism',
      subtitle: 'Ohm\'s Law (V = IR), series vs parallel circuits, electrical power (P = IV), and induction',
      quickInfo: 'Electric current is the rate of flow of charge (I = Q/t). Components in series share identical current; in parallel, they share identical voltage. Faraday\'s Law of induction powers electric generators.',
      keyConcepts: [
        'Ohm\'s Law: Potential difference = Current × Resistance (V = I·R).',
        'Power formulas: P = I·V = I²·R = V² / R.',
        'Faraday\'s Law: an induced electromotive force (EMF) is proportional to the rate of change of magnetic flux.'
      ],
      quiz: [
        { q: 'If a 12 V battery is connected across a 4 Ω resistor, what current flows through the circuit?', opts: ['0.33 A', '3 A', '8 A', '48 A'], ans: 1, exp: 'I = V / R = 12 / 4 = 3 A.' },
        { q: 'What is the equivalent resistance of two 6 Ω resistors connected in parallel?', opts: ['12 Ω', '6 Ω', '3 Ω', '1.5 Ω'], ans: 2, exp: '1/R = 1/6 + 1/6 = 2/6 => R = 3 Ω.' },
        { q: 'How much electrical power is consumed by a light bulb drawing 2 A from a 220 V supply?', opts: ['110 W', '222 W', '440 W', '880 W'], ans: 2, exp: 'P = I × V = 2 × 220 = 440 W.' },
        { q: 'What happens to the total resistance of an electrical circuit as more resistors are added in parallel?', opts: ['It increases', 'It decreases', 'It remains constant', 'It drops to zero'], ans: 1, exp: 'Adding parallel branches reduces total equivalent resistance.' },
        { q: 'What device steps alternating electric voltage up or down using mutual electromagnetic induction?', opts: ['A capacitor', 'A transformer', 'A diode', 'A resistor'], ans: 1, exp: 'Transformers convert AC voltages via induction.' }
      ]
    }
  ],
  economics: [
    {
      title: 'The Price Mechanism: Demand, Supply & Market Equilibrium',
      subtitle: 'Law of demand, shifts vs movements, elasticity of demand, and equilibrium price',
      quickInfo: 'Market economies allocate scarce resources through price signals. The intersection of downward-sloping demand and upward-sloping supply establishes market clearing price and equilibrium quantity.',
      keyConcepts: [
        'Law of Demand: as price rises, quantity demanded falls (ceteris paribus).',
        'Price Elasticity of Demand (PED) = (% Change in Qty Demanded) / (% Change in Price).',
        'Market equilibrium occurs where Quantity Demanded equals Quantity Supplied (Qd = Qs).'
      ],
      quiz: [
        { q: 'What happens to the market equilibrium price when consumer demand increases while supply stays constant?', opts: ['Price falls', 'Price rises', 'Price stays constant', 'Quantity drops to zero'], ans: 1, exp: 'Increased demand shifts the demand curve rightward, raising price.' },
        { q: 'If a 10% increase in price leads to a 25% drop in quantity demanded, demand is:', opts: ['Inelastic (PED < 1)', 'Price elastic (PED > 1)', 'Unit elastic (PED = 1)', 'Perfectively inelastic'], ans: 1, exp: '25% / 10% = 2.5 > 1, so demand is elastic.' },
        { q: 'Which factor causes a movement along a demand curve rather than a shift of the curve?', opts: ['A change in consumer income', 'A change in the price of the good itself', 'A change in consumer tastes', 'The price of a substitute good'], ans: 1, exp: 'Only price changes cause movements along the curve.' },
        { q: 'What economic situation arises when the government sets a legal price ceiling below market equilibrium?', opts: ['A market surplus', 'A persistent market shortage / excess demand', 'Zero demand', 'Falling production costs'], ans: 1, exp: 'Price ceilings below equilibrium cause shortages.' },
        { q: 'Goods that are consumed together (like cars and petrol) are called:', opts: ['Substitute goods', 'Complementary goods', 'Inferior goods', 'Giffen goods'], ans: 1, exp: 'Complementary goods have negative cross-price elasticity.' }
      ]
    },
    {
      title: 'Macroeconomic Indicators: GDP, Inflation & Unemployment',
      subtitle: 'Nominal vs real GDP, CPI calculation, demand-pull vs cost-push inflation, and types of unemployment',
      quickInfo: 'Macroeconomics analyzes whole economies. Gross Domestic Product (GDP) measures total national output. Inflation measures sustained price increases, and central banks deploy monetary policy to stabilize it.',
      keyConcepts: [
        'GDP = Consumption (C) + Investment (I) + Government Spending (G) + Net Exports (X - M).',
        'Real GDP adjusts nominal GDP for inflation using the GDP deflator.',
        'Unemployment categories: Frictional, structural, cyclical (demand-deficient), and seasonal.'
      ],
      quiz: [
        { q: 'What is the standard macroeconomic expenditure formula for calculating Gross Domestic Product (GDP)?', opts: ['GDP = C + I + G + (X - M)', 'GDP = Revenue - Costs', 'GDP = Taxes + Debt', 'GDP = Exports + Imports'], ans: 0, exp: 'GDP = C + I + G + (X - M).' },
        { q: 'What type of inflation is caused by aggregate consumer demand outpacing the economy\'s production capacity?', opts: ['Cost-push inflation', 'Demand-pull inflation', 'Hyper-stagnation', 'Imported inflation'], ans: 1, exp: 'Excess demand pulling up prices is demand-pull inflation.' },
        { q: 'What is "real GDP" compared to "nominal GDP"?', opts: ['Real GDP is estimated; nominal is exact', 'Real GDP is adjusted to remove the distorting effects of inflation', 'Real GDP includes taxes', 'Nominal GDP only counts cash'], ans: 1, exp: 'Real GDP measures output at constant base-year prices.' },
        { q: 'What type of unemployment occurs when workers\' skills no longer match the requirements of new industries?', opts: ['Frictional unemployment', 'Structural unemployment', 'Seasonal unemployment', 'Voluntary unemployment'], ans: 1, exp: 'Technological shifts create structural unemployment.' },
        { q: 'What tool does a Central Bank use to rein in high inflation under contractionary monetary policy?', opts: ['Lowering interest rates', 'Raising monetary policy interest rates and reserve requirements', 'Printing more currency', 'Abolishing taxes'], ans: 1, exp: 'Higher interest rates reduce aggregate borrowing.' }
      ]
    },
    {
      title: 'Fiscal Policy, Monetary Policy & International Trade',
      subtitle: 'Taxation, government expenditure, comparative advantage, exchange rates, and tariffs',
      quickInfo: 'Governments steer economic performance using fiscal policy (taxes and public spending) and monetary policy. International trade relies on David Ricardo\'s law of comparative advantage.',
      keyConcepts: [
        'Fiscal policy: expansionary (lower taxes, higher spending) vs contractionary.',
        'David Ricardo\'s Law of Comparative Advantage: countries gain by specializing in goods with lower opportunity costs.',
        'Protectionist trade barriers include import tariffs, quotas, and embargoes.'
      ],
      quiz: [
        { q: 'Who formulates and implements monetary policy in a modern national economy?', opts: ['The Ministry of Sports', 'The Central Bank (e.g., CBN, Fed, Bank of England)', 'Commercial banks', 'Private stock brokers'], ans: 1, exp: 'Central banks control money supply and policy rates.' },
        { q: 'What does a nation possess when it can produce a good at a lower opportunity cost than another trading partner?', opts: ['Absolute advantage', 'Comparative advantage', 'Monopoly power', 'Trade deficit'], ans: 1, exp: 'Lower opportunity cost defines comparative advantage.' },
        { q: 'What is a tax imposed on imported foreign goods called?', opts: ['A subsidy', 'An excise duty', 'A tariff (customs duty)', 'A dividend'], ans: 2, exp: 'Tariffs tax imported commodities.' },
        { q: 'What is a budget deficit in government fiscal finance?', opts: ['When revenues exceed expenditures', 'When annual government expenditures exceed tax revenues', 'When trade equals zero', 'When all debts are paid'], ans: 1, exp: 'Spending > Revenue constitutes a fiscal deficit.' },
        { q: 'When a country\'s currency depreciates on the foreign exchange market, what happens to its exports?', opts: ['Exports become more expensive for foreign buyers', 'Exports become cheaper and more competitive overseas', 'Exports are banned', 'Imports become cheaper'], ans: 1, exp: 'Currency depreciation makes domestic exports cheaper.' }
      ]
    }
  ],
  accounting: [
    {
      title: 'Double-Entry Bookkeeping & General Ledger Accounts',
      subtitle: 'Debit vs Credit rules, asset/liability accounting equation, and journals',
      quickInfo: 'The fundamental accounting equation is Assets = Liabilities + Equity. Under double-entry bookkeeping, every financial transaction impacts at least two accounts with total Debits equaling total Credits.',
      keyConcepts: [
        'Assets and expenses increase with Debits (Dr); decrease with Credits (Cr).',
        'Liabilities, equity, and revenues increase with Credits (Cr); decrease with Debits (Dr).',
        'The general ledger compiles individual T-accounts summarizing balances.'
      ],
      quiz: [
        { q: 'What is the fundamental accounting equation?', opts: ['Assets = Liabilities + Owner\'s Equity', 'Assets + Revenue = Expenses', 'Profit = Sales - Assets', 'Cash = Capital - Debt'], ans: 0, exp: 'Assets = Liabilities + Owner\'s Equity is the bedrock of balance sheets.' },
        { q: 'When a business purchases inventory with cash, what is the double entry?', opts: ['Debit Inventory, Credit Cash', 'Debit Cash, Credit Inventory', 'Debit Capital, Credit Cash', 'Debit Sales, Credit Bank'], ans: 0, exp: 'Asset inventory increases (Dr), and asset cash decreases (Cr).' },
        { q: 'Which types of accounts are increased by a DEBIT entry?', opts: ['Assets and Expenses', 'Liabilities and Revenues', 'Equity and Capital', 'Sales and Loans'], ans: 0, exp: 'The acronym DEAL: Dividends, Expenses, Assets, Losses increase with Debits.' },
        { q: 'What financial book records transactions in chronological order before posting to ledgers?', opts: ['Balance Sheet', 'General Journal (Book of Original Entry)', 'Trial Balance', 'Income Statement'], ans: 1, exp: 'Journals record chronological original entries.' },
        { q: 'If total debits do not equal total credits in a journal entry, what is violated?', opts: ['Tax law only', 'The double-entry principle', 'Depreciation schedule', 'Inflation rate'], ans: 1, exp: 'Double entry strictly requires total Debits = total Credits.' }
      ]
    },
    {
      title: 'Trial Balance Preparation & Suspense Accounts',
      subtitle: 'Balancing verification, errors of omission, commission, and correcting entries',
      quickInfo: 'A trial balance tests the mathematical equality of debit and credit balances. Errors that do not affect trial balance agreement include errors of omission, commission, and principle.',
      keyConcepts: [
        'A trial balance confirms that total debits equal total credits.',
        'Errors of omission (transaction completely forgotten) do not unbalance the trial balance.',
        'A Suspense Account temporarily holds differences until errors are traced.'
      ],
      quiz: [
        { q: 'What is the primary purpose of preparing a Trial Balance?', opts: ['To calculate net profit', 'To verify the arithmetic accuracy of double-entry ledger postings', 'To submit taxes', 'To pay dividends'], ans: 1, exp: 'It proves whether total debits equal total credits across all ledgers.' },
        { q: 'Which error will cause a Trial Balance to be out of balance?', opts: ['Error of omission', 'Error of principle', 'Single-sided posting or mathematical addition error in a ledger', 'Compensating error'], ans: 2, exp: 'A one-sided debit with no corresponding credit causes an imbalance.' },
        { q: 'What temporary account is created when a trial balance debit and credit column do not match?', opts: ['Suspense Account', 'Capital Account', 'Drawings Account', 'Reserve Fund'], ans: 0, exp: 'Differences are placed in a suspense account pending reconciliation.' },
        { q: 'What is an "error of principle"?', opts: ['Entering the wrong spelling', 'Violating fundamental accounting principles (e.g., treating capital expenditure as revenue expense)', 'Omitting an invoice', 'Typing a transposed number'], ans: 1, exp: 'Treating a fixed asset purchase as a routine repair expense is an error of principle.' },
        { q: 'Does a balanced trial balance guarantee that the accounts are 100% free of errors?', opts: ['Yes, always', 'No, balanced errors like omission, principle, and reversal can still exist', 'Only if approved by bank', 'Yes, legally'], ans: 1, exp: 'Many compensating errors do not disrupt the debit-credit total equality.' }
      ]
    },
    {
      title: 'Financial Statements: Income Statement & Balance Sheet',
      subtitle: 'Gross profit, net profit, accruals, depreciation, and working capital',
      quickInfo: 'The Income Statement calculates gross and net profit across a trading period. The Balance Sheet presents the financial position—assets, liabilities, and equity—at a specific date.',
      keyConcepts: [
        'Gross Profit = Revenue - Cost of Goods Sold (COGS).',
        'Net Profit = Gross Profit - Operating Expenses.',
        'Working Capital = Current Assets - Current Liabilities.'
      ],
      quiz: [
        { q: 'How is Gross Profit calculated on the trading account?', opts: ['Revenue - Cost of Goods Sold (COGS)', 'Net Sales - Total Expenses', 'Assets - Liabilities', 'Cash in Bank - Debt'], ans: 0, exp: 'Gross Profit = Sales Revenue - Cost of Goods Sold.' },
        { q: 'What financial statement shows the assets, liabilities, and capital of a business at a specific point in time?', opts: ['Income Statement', 'Statement of Financial Position (Balance Sheet)', 'Cash Flow Statement', 'Bank Statement'], ans: 1, exp: 'The balance sheet snapshots financial position at a single date.' },
        { q: 'What is "depreciation" in accounting?', opts: ['Cash lost in transit', 'The systematic allocation of the cost of a tangible fixed asset over its useful life', 'Bank interest charges', 'Tax penalties'], ans: 1, exp: 'Depreciation expenses wear and tear of long-term capital assets.' },
        { q: 'What is the formula for Working Capital?', opts: ['Fixed Assets - Loans', 'Current Assets - Current Liabilities', 'Total Sales - Cost of Sales', 'Equity / Debt'], ans: 1, exp: 'Working Capital = Current Assets - Current Liabilities.' },
        { q: 'Which item is classified as a Current Liability on a balance sheet?', opts: ['Factory building', 'Trade accounts payable (creditors due in 30 days)', 'Common shares', 'Machinery'], ans: 1, exp: 'Debts due within one operating cycle (1 year) are current liabilities.' }
      ]
    }
  ],
  commerce: [
    {
      title: 'Channels of Distribution & Wholesaling/Retailing',
      subtitle: 'Functions of middlemen, chain stores, supermarkets, e-commerce, and logistics',
      quickInfo: 'Distribution channels transport goods from manufacturing points to end consumers. Wholesalers bridge producers and retailers by breaking bulk, financing trade, and warehousing stock.',
      keyConcepts: [
        'Channel stages: Manufacturer → Wholesaler → Retailer → Final Consumer.',
        'Wholesalers break bulk, provide warehousing, bear market risk, and finance retailers via trade credit.',
        'Modern retail formats: Department stores, multiple (chain) stores, hypermarkets, and e-commerce.'
      ],
      quiz: [
        { q: 'What primary commercial function does a wholesaler perform by buying massive quantities and selling smaller cartons?', opts: ['Advertising', 'Breaking bulk', 'Manufacturing', 'Auditing'], ans: 1, exp: 'Wholesalers purchase in volume and break bulk for retailers.' },
        { q: 'Which retail establishment operates identical branch stores across different towns under unified central management?', opts: ['A general village shop', 'Multiple shops (chain stores)', 'A hawker stall', 'A boutique'], ans: 1, exp: 'Chain stores operate uniform retail branches.' },
        { q: 'What document does a retailer send to an existing supplier requesting merchandise delivery?', opts: ['A purchase order', 'An invoice', 'A receipt', 'A tender notice'], ans: 0, exp: 'A purchase order formalizes merchandise orders.' },
        { q: 'What commercial function does warehousing provide in the distribution chain?', opts: ['Price setting only', 'Storage and preservation of goods until needed to stabilize supply and prices', 'Tax collection', 'Packaging only'], ans: 1, exp: 'Warehousing buffers seasonal production surpluses.' },
        { q: 'Which channel eliminates middlemen completely?', opts: ['Direct selling (Manufacturer to Consumer)', 'Wholesale trade', 'International brokerage', 'Retail franchising'], ans: 0, exp: 'Direct-to-consumer eliminates intermediary margins.' }
      ]
    },
    {
      title: 'Banking, Foreign Exchange & Commercial Credit Instruments',
      subtitle: 'Central banks, commercial banks, cheques, bills of exchange, and letters of credit',
      quickInfo: 'Financial institutions facilitate commerce through payments, clearing, and credit. Commercial banks accept deposits and issue loans; Letters of Credit guarantee international trade payments.',
      keyConcepts: [
        'Commercial bank functions: accepting deposits (savings/current), lending (loans/overdrafts), money transfers.',
        'A cheque involves three parties: Drawer (issuer), Drawee (the bank), Payee (recipient).',
        'Letter of Credit (LC): a bank guarantee assuring payment to foreign exporters upon document compliance.'
      ],
      quiz: [
        { q: 'In a standard banking cheque, who is the "drawee"?', opts: ['The person writing the cheque', 'The specific bank instructed to pay the money', 'The person receiving the cash', 'The tax collector'], ans: 1, exp: 'The drawee is the bank where the account is held.' },
        { q: 'What is a "bank overdraft"?', opts: ['A gift from the bank manager', 'A credit facility permitting an account holder to draw more funds than currently deposited up to an agreed limit', 'A bounced check', 'A fixed deposit'], ans: 1, exp: 'Overdrafts provide short-term working capital.' },
        { q: 'Which instrument guarantees payment to an exporter in overseas international trade?', opts: ['An IOU note', 'A Commercial Letter of Credit (LC)', 'A debit card', 'A receipt'], ans: 1, exp: 'Letters of credit mitigate cross-border payment risk.' },
        { q: 'What is a "crossed cheque" designed to prevent?', opts: ['Overspending', 'Immediate over-the-counter cash encashment by unauthorized bearers', 'Taxation', 'Printing errors'], ans: 1, exp: 'Crossed cheques must be deposited into a bank account.' },
        { q: 'What type of bank account earns interest and does not typically issue cheque books?', opts: ['Current account', 'Savings / Fixed deposit account', 'Overdraft account', 'Suspense account'], ans: 1, exp: 'Savings accounts accrue interest on deposits.' }
      ]
    },
    {
      title: 'Insurance Principles & Risk Management in Business',
      subtitle: 'Insurable interest, indemnity, utmost good faith (uberrimae fidei), and subrogation',
      quickInfo: 'Insurance pools financial risks to protect enterprises from catastrophic losses. It operates on strict legal principles: Insurable Interest, Utmost Good Faith, Indemnity, and Proximate Cause.',
      keyConcepts: [
        'Utmost Good Faith (Uberrimae Fidei): full and honest disclosure of all material facts.',
        'Indemnity: restoring the insured to their exact financial position prior to the loss (no profit from loss).',
        'Insurable Interest: the policyholder must suffer a direct financial loss if the insured event occurs.'
      ],
      quiz: [
        { q: 'What fundamental insurance principle states that the insured must not make a financial profit from a claim?', opts: ['Subrogation', 'The principle of Indemnity', 'Uberrimae fidei', 'Proximate cause'], ans: 1, exp: 'Indemnity restores the exact pre-loss financial position.' },
        { q: 'What does the legal doctrine "Uberrimae Fidei" require during insurance contract signing?', opts: ['Paying in cash only', 'Utmost good faith and truthful disclosure of all material facts', 'Signing with witnesses', 'Insuring two properties'], ans: 1, exp: 'Utmost good faith requires honest disclosure.' },
        { q: 'Can a person legally purchase fire insurance on their neighbor\'s house that they do not own or rent?', opts: ['Yes, anytime', 'No, because they lack an insurable interest in the property', 'Only if the neighbor agrees', 'Yes, with a fee'], ans: 1, exp: 'Insurable interest requires direct financial stake.' },
        { q: 'What is the regular fee paid by the policyholder to the insurance company called?', opts: ['A dividend', 'An insurance Premium', 'A commission', 'An indemnity'], ans: 1, exp: 'The premium purchases insurance coverage.' },
        { q: 'What is the principle of "Subrogation" in property insurance?', opts: ['Canceling the policy', 'The insurer stepping into the legal shoes of the insured to recover damages from responsible third parties', 'Splitting profits', 'Double insuring'], ans: 1, exp: 'Subrogation transfers third-party claim rights to insurer.' }
      ]
    }
  ],
  government: [
    {
      title: 'Forms of Government, Sovereignty & The State',
      subtitle: 'Unitary vs federal systems, parliamentary vs presidential, and constitutionalism',
      quickInfo: 'Political science analyzes political systems and structures. Presidential systems feature separation of powers between executive and legislative branches; parliamentary systems fuse executive and legislative authority.',
      keyConcepts: [
        'Characteristics of a sovereign state: Population, Defined Territory, Government, Sovereignty.',
        'Federal systems divide powers between central and regional/state governments (Exclusive, Concurrent, Residual lists).',
        'Presidential system: President is both Head of State and Head of Government, elected independently of parliament.'
      ],
      quiz: [
        { q: 'What are the four essential attributes of a sovereign state in political science?', opts: ['Army, Navy, Air Force, Police', 'Population, Territory, Government, and Sovereignty', 'Gold, Oil, Land, Money', 'Flag, Anthem, President, Court'], ans: 1, exp: 'Population, territory, government, and sovereignty define a state.' },
        { q: 'In a Presidential system of government, who is the President?', opts: ['A ceremonial figure only', 'Both Head of State and Head of Government with executive powers', 'The Speaker of the House', 'Appointed by parliament'], ans: 1, exp: 'The President combines Head of State and Government.' },
        { q: 'In a federal system of government, which legislative list contains powers reserved exclusively for the central federal government?', opts: ['The Concurrent List', 'The Exclusive Legislative List', 'The Residual List', 'The Regional List'], ans: 1, exp: 'Defense and foreign affairs reside on the Exclusive List.' },
        { q: 'What characterizes a "Unitary" system of government (such as the United Kingdom)?', opts: ['Power is divided equally between 50 states', 'Constitutional supreme authority is centralized in one national government', 'There is no constitution', 'Rule by military decree'], ans: 1, exp: 'Unitary states centralize sovereignty.' },
        { q: 'What concept limits government power through enforceable constitutional laws?', opts: ['Totalitarianism', 'Constitutionalism', 'Anarchism', 'Feudalism'], ans: 1, exp: 'Constitutionalism restrains arbitrary state power.' }
      ]
    },
    {
      title: 'Political Ideologies, Parties & Pressure Groups',
      subtitle: 'Democracy, socialism, capitalism, party systems, lobbying, and civil society',
      quickInfo: 'Political ideologies offer comprehensive worldviews on social and economic organization. Political parties seek to win elections and form governments, while pressure groups lobby to influence policy.',
      keyConcepts: [
        'Capitalism promotes private ownership and free enterprise; Socialism emphasizes public ownership of key industries.',
        'Political parties seek governmental power through competitive democratic elections.',
        'Pressure groups (e.g., labor unions, environmental advocates) lobby officials without seeking political office.'
      ],
      quiz: [
        { q: 'What is the primary operational distinction between a political party and a pressure group?', opts: ['Parties have more members', 'Political parties aim to win power and control government, while pressure groups seek to influence policy', 'Pressure groups run in elections', 'There is no difference'], ans: 1, exp: 'Political parties contest elections for government power.' },
        { q: 'Which economic-political ideology advocates state ownership and democratic regulation of the major means of production?', opts: ['Fascism', 'Socialism', 'Laissez-faire capitalism', 'Monarchism'], ans: 1, exp: 'Socialism advocates public control of key resources.' },
        { q: 'What is "lobbying" in legislative politics?', opts: ['Bribery', 'Persuading legislators and public officials to support or vote against specific policies', 'Sleeping in government lobbies', 'Counting ballots'], ans: 1, exp: 'Lobbying presents interest group arguments to lawmakers.' },
        { q: 'What is a "two-party system" in democratic governance?', opts: ['Only two people can vote', 'Two dominant political parties realistically alternate power in government', 'Parties are banned', 'A party with two leaders'], ans: 1, exp: 'Two major parties dominate national politics (e.g., USA).' },
        { q: 'What constitutional freedom protects citizens\' rights to form trade unions and political associations?', opts: ['Freedom of association and assembly', 'Freedom of navigation', 'Habeas corpus', 'Eminent domain'], ans: 0, exp: 'Freedom of association permits collective advocacy.' }
      ]
    },
    {
      title: 'International Organizations: The UN, AU & ECOWAS',
      subtitle: 'Security Council, African Union treaties, peacekeeping, and regional integration',
      quickInfo: 'Sovereign nations collaborate through international and regional bodies to maintain global peace, safeguard human rights, and promote economic development.',
      keyConcepts: [
        'United Nations organs: General Assembly, Security Council (5 permanent veto members), ICJ, Secretariat.',
        'The African Union (AU) promotes Pan-African unity, development, and democratic governance.',
        'ECOWAS aims to create an economic trade union and free movement zone in West Africa.'
      ],
      quiz: [
        { q: 'Which five nations hold permanent seats and veto power on the United Nations Security Council?', opts: ['USA, UK, France, Russia, and China', 'USA, Germany, Japan, India, Brazil', 'UK, France, Italy, Canada, Australia', 'Nigeria, South Africa, Egypt, Ghana, Kenya'], ans: 0, exp: 'The P5 members: USA, UK, France, Russia, and China.' },
        { q: 'What regional economic community was founded in 1975 to foster economic integration in West Africa?', opts: ['SADC', 'ECOWAS', 'The Arab League', 'ASEAN'], ans: 1, exp: 'ECOWAS promotes West African regional integration.' },
        { q: 'Where is the administrative headquarters of the African Union (AU) located?', opts: ['Cairo, Egypt', 'Addis Ababa, Ethiopia', 'Lagos, Nigeria', 'Johannesburg, South Africa'], ans: 1, exp: 'The AU headquarters is in Addis Ababa, Ethiopia.' },
        { q: 'What is the principal judicial organ of the United Nations situated at The Hague?', opts: ['The Security Council', 'The International Court of Justice (ICJ)', 'INTERPOL', 'The General Assembly'], ans: 1, exp: 'The ICJ settles inter-state legal disputes.' },
        { q: 'What is the primary mission of United Nations Peacekeeping Operations (Blue Helmets)?', opts: ['To annex territory', 'To protect civilians and support the implementation of peace accords in conflict areas', 'To collect taxes', 'To overthrow governments'], ans: 1, exp: 'Peacekeepers maintain fragile truces and protect civilians.' }
      ]
    }
  ],
  history: [
    {
      title: 'Pre-Colonial African Empires: Mali, Songhai & Benin',
      subtitle: 'Trans-Saharan trade routes, Mansa Musa, Timbuktu scholars, and Benin bronze casting',
      quickInfo: 'Pre-colonial Africa boasted powerful empires with sophisticated trade networks, scholarly centers, and renowned metallurgical arts. The Mali Empire prospered from trans-Saharan gold-salt trade.',
      keyConcepts: [
        'Mansa Musa of Mali: legendary 1324 pilgrimage to Mecca displayed Mali\'s immense gold wealth.',
        'Timbuktu: global intellectual center of Islamic scholarship, manuscripts, and the University of Sankore.',
        'Kingdom of Benin: advanced urban planning and lost-wax cast bronze artistic masterpieces.'
      ],
      quiz: [
        { q: 'Which famous Malian emperor astonished the medieval world during his 1324 pilgrimage to Mecca with immense gold wealth?', opts: ['Sundiata Keita', 'Mansa Musa', 'Askia the Great', 'Sunni Ali'], ans: 1, exp: 'Mansa Musa\'s pilgrimage distributed vast amounts of gold.' },
        { q: 'What major trade route connected West African gold and salt deposits to North African and Mediterranean markets?', opts: ['The Silk Road', 'The Trans-Saharan Trade Route', 'The Atlantic Triangular Trade', 'The Spice Route'], ans: 1, exp: 'Trans-Saharan caravans linked West Africa with the Mediterranean.' },
        { q: 'What city was renowned across medieval Africa and the Islamic world as a center of scholarship and libraries?', opts: ['Alexandria only', 'Timbuktu', 'Gao', 'Kano'], ans: 1, exp: 'Timbuktu was famous for universities and manuscripts.' },
        { q: 'What metallurgy art technique was perfected by the ancient artisans of the Kingdom of Benin?', opts: ['Iron smelting only', 'Lost-wax bronze and brass casting', 'Glassblowing', 'Porcelain firing'], ans: 1, exp: 'Benin bronzes were crafted using lost-wax casting.' },
        { q: 'Who was the founder and first ruler of the Mali Empire, immortalized in West African epic oral tradition?', opts: ['Sundiata Keita', 'Sonni Ali', 'Idris Alooma', 'Uthman dan Fodio'], ans: 0, exp: 'Sundiata Keita founded the Mali Empire in 1235.' }
      ]
    },
    {
      title: 'The Scramble for Africa & The Berlin Conference (1884-1885)',
      subtitle: 'European imperialism, artificial borders, resistance movements, and direct/indirect rule',
      quickInfo: 'The 1884–1885 Berlin Conference partitioned the African continent among European imperial powers without African representation, drawing arbitrary colonial frontiers that sparked long-term consequences.',
      keyConcepts: [
        'The Berlin Conference (1884-1885) formalized the "Scramble for Africa" under the principle of Effective Occupation.',
        'British colonial policy utilized Indirect Rule (Lord Lugard); French colonial policy favored Assimilation.',
        'African armed resistance: Queen Yaa Asantewaa (Ashanti War of the Golden Stool), Maji Maji rebellion.'
      ],
      quiz: [
        { q: 'What international conference organized by Otto von Bismarck in 1884–1885 partitioned the African continent among European powers?', opts: ['The Treaty of Versailles', 'The Berlin Conference', 'The Geneva Convention', 'The Congress of Vienna'], ans: 1, exp: 'The Berlin Conference carved Africa into colonial territories.' },
        { q: 'What colonial administrative system did Britain employ using existing traditional rulers and chiefs?', opts: ['Direct Assimilation', 'Indirect Rule', 'Apartheid', 'Direct Annexation'], ans: 1, exp: 'Lord Lugard instituted Indirect Rule.' },
        { q: 'Which two African nations successfully resisted 19th-century European colonial conquest and maintained their sovereignty?', opts: ['Ghana and Nigeria', 'Ethiopia and Liberia', 'Kenya and Uganda', 'Senegal and Mali'], ans: 1, exp: 'Ethiopia defeated Italy at Adwa; Liberia was recognized independent.' },
        { q: 'Who was the valiant Queen Mother of Ejisu who led the Ashanti resistance in the War of the Golden Stool (1900)?', opts: ['Queen Amina', 'Queen Yaa Asantewaa', 'Queen Nzinga', 'Moremi'], ans: 1, exp: 'Yaa Asantewaa commanded Ashanti resistance against British forces.' },
        { q: 'What was a primary lasting consequence of colonial borders drawn across Africa?', opts: ['Borders respected ancient tribal boundaries perfectly', 'Arbitrary lines split ethnic groups across different modern nations, seeding post-colonial border tensions', 'Europeans left after one year', 'All African languages disappeared'], ans: 1, exp: 'Arbitrary colonial borders divided communities.' }
      ]
    },
    {
      title: 'World War II, Decolonization & The Rise of African Nationalism',
      subtitle: 'The Atlantic Charter, Pan-African Congress, Kwame Nkrumah, and independence movements',
      quickInfo: 'World War II shattered the myth of European invulnerability. Returning African soldiers and foreign-educated nationalist intellectuals catalyzed independence movements across the continent.',
      keyConcepts: [
        'The 1941 Atlantic Charter affirmed "the right of all peoples to choose the form of government under which they will live."',
        'The 5th Pan-African Congress in Manchester (1945) demanded total independence for African colonies.',
        'Ghana under Kwame Nkrumah achieved independence in 1957, igniting a wave of continental freedom.'
      ],
      quiz: [
        { q: 'Which sub-Saharan African colony achieved independence from British colonial rule first in 1957?', opts: ['Nigeria', 'Ghana (formerly Gold Coast)', 'Kenya', 'Zimbabwe'], ans: 1, exp: 'Ghana attained independence under Kwame Nkrumah in 1957.' },
        { q: 'Who was the Pan-African leader and first President of independent Ghana?', opts: ['Nnamdi Azikiwe', 'Kwame Nkrumah', 'Jomo Kenyatta', 'Julius Nyerere'], ans: 1, exp: 'Dr. Kwame Nkrumah led Ghana to sovereignty.' },
        { q: 'What landmark joint Allied declaration during World War II affirmed self-determination for all colonized peoples?', opts: ['The Warsaw Pact', 'The Atlantic Charter (1941)', 'The Balfour Declaration', 'The Treaty of Ghent'], ans: 1, exp: 'The Atlantic Charter inspired anti-colonial nationalists.' },
        { q: 'What was the armed anti-colonial uprising against British settlers in 1950s Kenya called?', opts: ['The Mau Mau rebellion', 'The Boxer rebellion', 'The Boer War', 'The Zulu War'], ans: 0, exp: 'The Mau Mau fought for land and freedom in Kenya.' },
        { q: 'What year is widely celebrated as the "Year of Africa", when 17 African nations gained sovereign independence?', opts: ['1945', '1960', '1975', '1990'], ans: 1, exp: 'In 1960, seventeen African countries gained independence.' }
      ]
    }
  ],
  geography: [
    {
      title: 'Plate Tectonics, Earthquakes & Volcanism',
      subtitle: 'Continental drift, crustal plates, subduction zones, fault lines, and the Ring of Fire',
      quickInfo: 'The Earth\'s lithosphere is fragmented into tectonic plates floating on the semi-fluid asthenosphere. Plate boundary interactions (convergent, divergent, transform) generate earthquakes, volcanoes, and mountain chains.',
      keyConcepts: [
        'Alfred Wegener\'s Continental Drift hypothesis and modern Plate Tectonics theory.',
        'Boundaries: Divergent (spreading ridges), Convergent (subduction / collision), Transform (San Andreas fault).',
        'Seismic waves: P-waves (compressional, fastest), S-waves (shear, transverse through solids only).'
      ],
      quiz: [
        { q: 'What boundary occurs where two tectonic plates collide, forcing one beneath the other into the mantle?', opts: ['Divergent boundary', 'Subduction / Convergent boundary', 'Transform fault', 'Passive continental margin'], ans: 1, exp: 'Convergent subduction forces denser oceanic plates downward.' },
        { q: 'What instrument records and measures seismic shockwaves produced by earthquakes?', opts: ['A barometer', 'A seismograph / seismometer', 'An anemometer', 'A hygrometer'], ans: 1, exp: 'Seismometers record seismic ground vibrations.' },
        { q: 'What is the vast horseshoe-shaped zone of frequent earthquakes and active volcanoes encircling the Pacific Ocean called?', opts: ['The Mid-Atlantic Ridge', 'The Pacific Ring of Fire', 'The Great Rift Valley', 'The Marianas Arc'], ans: 1, exp: 'The Pacific Ring of Fire contains over 75% of active volcanoes.' },
        { q: 'Which seismic earthquake waves travel fastest and pass through both solids and liquids?', opts: ['Primary waves (P-waves)', 'Secondary waves (S-waves)', 'Surface Love waves', 'Rayleigh waves'], ans: 0, exp: 'P-waves are fast longitudinal compressional waves.' },
        { q: 'What supercontinent existed approximately 250 million years ago before breaking apart into modern continents?', opts: ['Gondwana only', 'Pangaea', 'Laurasia only', 'Atlantis'], ans: 1, exp: 'Pangaea was the primeval supercontinent.' }
      ]
    },
    {
      title: 'Weathering, Fluvial Processes & River Landforms',
      subtitle: 'Mechanical and chemical weathering, hydraulic action, meanders, oxbow lakes, and deltas',
      quickInfo: 'Rivers shape landscapes through erosion, transportation, and deposition across their upper, middle, and lower courses. Landforms include V-shaped valleys, waterfalls, meanders, oxbow lakes, and deltas.',
      keyConcepts: [
        'Fluvial erosion processes: Hydraulic action, abrasion/corrasion, attrition, and solution/corrosion.',
        'Upper course features steep gradients (waterfalls, gorges); middle course develops wide meanders.',
        'Oxbow lakes form when a river cuts through a narrow meander neck during high flood discharge.'
      ],
      quiz: [
        { q: 'What U-shaped lake forms when a meandering river breaches its narrow neck during a flood and cuts a straight channel?', opts: ['A crater lake', 'An oxbow lake', 'A glacial tarn', 'A coastal lagoon'], ans: 1, exp: 'Abandoned meander loops form oxbow lakes.' },
        { q: 'What type of river erosion involves the mechanical scraping of bed and banks by transported pebbles and boulders?', opts: ['Attrition', 'Abrasion (corrasion)', 'Hydraulic action', 'Cavitation'], ans: 1, exp: 'Abrasion acts like sandpaper gouging rock.' },
        { q: 'What triangular depositional landform develops at a river mouth where sediment drops into standing sea water?', opts: ['An alluvial fan', 'A river delta', 'A gorge', 'A terrace'], ans: 1, exp: 'Deltas accumulate deposited alluvium at river mouths.' },
        { q: 'In which course of a river are vertical erosion, V-shaped valleys, and waterfalls most prominent?', opts: ['The lower plain course', 'The upper youthful course', 'The middle course', 'The coastal estuary'], ans: 1, exp: 'Steep slopes drive vertical downcutting in upper courses.' },
        { q: 'What chemical weathering process dissolves limestone rock in rainwater containing dissolved carbon dioxide?', opts: ['Oxidation', 'Carbonation', 'Hydration', 'Freeze-thaw'], ans: 1, exp: 'Carbonic acid in rainwater carbonizes calcium carbonate.' }
      ]
    },
    {
      title: 'Human Settlement, Urbanization & Demographic Transition',
      subtitle: 'Rural-urban migration, population pyramids, megacities, and sustainable cities',
      quickInfo: 'Demography investigates population dynamics. The Demographic Transition Model (DTM) charts mortality and birth rate declines during industrialization. Rapid urbanization poses environmental and infrastructure challenges.',
      keyConcepts: [
        'The Demographic Transition Model (Stages 1 through 5: pre-industrial to post-industrial aging).',
        'Push factors (rural poverty, crop failure) and Pull factors (urban jobs, healthcare, universities).',
        'Megacities (urban agglomerations exceeding 10 million inhabitants) require sustainable transit and waste management.'
      ],
      quiz: [
        { q: 'What graphical diagram illustrates the age and sex distribution of a given population?', opts: ['A scatter plot', 'A population pyramid', 'A choropleth map', 'A flowline chart'], ans: 1, exp: 'Population pyramids display cohort demographics by gender.' },
        { q: 'In Stage 2 of the Demographic Transition Model, why does rapid population growth occur?', opts: ['Birth rates double', 'Death rates drop dramatically due to sanitation/medicine while birth rates remain high', 'Mass immigration from abroad', 'Life expectancy decreases'], ans: 1, exp: 'Falling death rates alongside high birth rates spur rapid growth.' },
        { q: 'What is a "pull factor" encouraging rural-urban migration?', opts: ['Severe drought in villages', 'Better employment opportunities, higher wages, and superior schools in cities', 'Rural pest outbreaks', 'Land shortages'], ans: 1, exp: 'Urban amenities and jobs act as magnetic pull factors.' },
        { q: 'What is an urban metropolitan area with a total population exceeding 10 million residents officially termed?', opts: ['A metropolis', 'A megacity', 'A conurbation', 'A township'], ans: 1, exp: 'Megacities have over 10 million inhabitants.' },
        { q: 'What environmental hazard is heightened when natural vegetation is replaced by asphalt and concrete across urban centers?', opts: ['Tidal bores', 'The Urban Heat Island effect and flash flooding from impermeable surfaces', 'Glacial surges', 'Avalanches'], ans: 1, exp: 'Concrete absorbs heat and blocks stormwater infiltration.' }
      ]
    }
  ],
  'civic-education': [
    {
      title: 'Citizenship, Fundamental Rights & Constitutional Obligations',
      subtitle: 'Acquisition of citizenship, Bill of Rights, limitations on rights, and national loyalty',
      quickInfo: 'Citizenship confers constitutional rights and civic responsibilities. Fundamental human rights (life, liberty, fair trial) can be limited only under strict constitutional conditions such as states of emergency.',
      keyConcepts: [
        'Ways to acquire citizenship: Birth, Descent, Registration (marriage), and Naturalization.',
        'Fundamental Rights (Chapter IV of 1999 Nigerian Constitution): Right to life, dignity, personal liberty, fair hearing.',
        'Civic duties: Defending the nation, paying lawful taxes, protecting public utilities, and obeying traffic laws.'
      ],
      quiz: [
        { q: 'How can a foreign citizen legally acquire citizenship in a country through residency and vetting?', opts: ['By conquest', 'Through legal Naturalization', 'By buying a tourist visa', 'By staying for 3 days'], ans: 1, exp: 'Naturalization is the legal pathway to citizenship.' },
        { q: 'Under what specific legal circumstance can certain constitutional rights (like free movement) be temporarily restricted?', opts: ['Whenever politicians want', 'During a constitutionally declared State of Emergency or curfew for public safety', 'On public holidays', 'During sports events'], ans: 1, exp: 'Emergencies legally restrict certain liberties.' },
        { q: 'What is an essential civic obligation of every employed citizen that funds public infrastructure?', opts: ['Purchasing luxury goods', 'Paying lawful income taxes promptly', 'Watching the news', 'Traveling on airlines'], ans: 1, exp: 'Tax revenues fund schools, roads, and hospitals.' },
        { q: 'What is the writ of "Habeas Corpus" designed to protect in constitutional law?', opts: ['Property tax rates', 'Freedom from unlawful, arbitrary detention without charge or court hearing', 'The right to inherit land', 'Trade secrets'], ans: 1, exp: 'Habeas corpus protects individuals from illegal custody.' },
        { q: 'What does "dual citizenship" mean in constitutional jurisprudence?', opts: ['Voting twice in elections', 'Holding legal citizenship in two sovereign nations simultaneously', 'Having two passports from one country', 'Marrying two citizens'], ans: 1, exp: 'Dual citizenship permits dual national allegiance.' }
      ]
    },
    {
      title: 'Rule of Law, Separation of Powers & Combating Corruption',
      subtitle: 'Judicial independence, anti-graft agencies (EFCC/ICPC), accountability, and transparency',
      quickInfo: 'Good governance requires that authority is exercised according to law. The anti-corruption framework empowers agencies (such as EFCC and ICPC) to investigate financial misconduct and uphold public integrity.',
      keyConcepts: [
        'Dicey\'s three principles of the Rule of Law: Absolute supremacy of regular law, equality before the law, fundamental rights.',
        'Independent judiciary: judges must be shielded from executive intimidation or bribery.',
        'Public accountability: transparency, asset declaration, freedom of information, and whistleblower protections.'
      ],
      quiz: [
        { q: 'According to A.V. Dicey, what does "Equality before the law" mean?', opts: ['Everyone earns equal salary', 'All citizens, regardless of wealth or political status, are subject to the same ordinary laws', 'Laws apply only to commoners', 'No one can be arrested'], ans: 1, exp: 'No individual is exempt from legal accountability.' },
        { q: 'What Nigerian statutory anti-graft agency investigates and prosecutes economic and financial crimes?', opts: ['FRSC', 'The EFCC (Economic and Financial Crimes Commission)', 'NEMA', 'NURTW'], ans: 1, exp: 'The EFCC investigates financial crimes and fraud.' },
        { q: 'Why is judicial security of tenure (preventing arbitrary dismissal of judges) critical in a democracy?', opts: ['To give judges higher salaries', 'To guarantee judicial independence so judges can rule without fear of executive retribution', 'To prevent courts from closing', 'To lengthen trials'], ans: 1, exp: 'Security of tenure ensures impartial judicial decisions.' },
        { q: 'What is "nepotism" in public service administration?', opts: ['Hard work', 'Favoritism shown to relatives or friends in appointments and contracts regardless of merit', 'Collecting tax receipts', 'Filing reports on time'], ans: 1, exp: 'Nepotism awards positions based on kinship rather than qualifications.' },
        { q: 'What legal mechanism allows citizens and investigative journalists to request public government records?', opts: ['The Official Secrets Act', 'The Freedom of Information (FOI) Act', 'The Tax Code', 'The Penal Code'], ans: 1, exp: 'FOI legislation promotes institutional transparency.' }
      ]
    },
    {
      title: 'Human Trafficking, Drug Abuse & Youth Empowerment',
      subtitle: 'NAPTLEA/NDLEA roles, social consequences of addiction, skills acquisition, and civil society',
      quickInfo: 'Social vices like human trafficking and substance abuse threaten youth development and national security. Combating them requires specialized enforcement (NAPTIP, NDLEA) alongside vocational training.',
      keyConcepts: [
        'Human trafficking: recruitment, transportation, or harboring of persons through force or deception for exploitation.',
        'Substance abuse damages psychological health, destroys academic potential, and fuels violent crime.',
        'Youth empowerment: vocational training, digital skills, mentorship, and micro-enterprise capital.'
      ],
      quiz: [
        { q: 'What specialized federal agency in Nigeria is charged with combating human trafficking and rehabilitating victims?', opts: ['NDLEA', 'NAPTIP (National Agency for the Prohibition of Trafficking in Persons)', 'NURTW', 'INEC'], ans: 1, exp: 'NAPTIP leads the fight against human trafficking.' },
        { q: 'Which statutory enforcement agency is mandated to eradicate the illicit trafficking and abuse of narcotic drugs?', opts: ['FRSC', 'NDLEA (National Drug Law Enforcement Agency)', 'FAAN', 'NEMA'], ans: 1, exp: 'NDLEA interdicts illicit drugs and narcotics.' },
        { q: 'What is a devastating psychological and social effect of chronic drug addiction among youth?', opts: ['High academic performance', 'Cognitive decline, mental illness, social isolation, and increased criminality', 'Improved athletic endurance', 'Financial prosperity'], ans: 1, exp: 'Addiction causes severe psychological and societal harms.' },
        { q: 'What constitutes human trafficking under international protocol?', opts: ['Traveling with an international passport', 'The recruitment, transport, or harbor of people through coercion, fraud, or force for labor or sexual exploitation', 'Touring a foreign city', 'Applying for a student visa'], ans: 1, exp: 'Trafficking involves coercion and exploitation.' },
        { q: 'Why is technical and vocational skills training considered a lasting solution to youth unemployment?', opts: ['It eliminates school entirely', 'It equips youth with self-reliant, marketable trades to establish enterprises and employ others', 'It makes taxes illegal', 'It replaces college degrees completely'], ans: 1, exp: 'Vocational skills empower self-reliant enterprise.' }
      ]
    }
  ],
  crs: [
    {
      title: 'The Early Church: Pentecost, Fellowship & Stephen\'s Martyrdom',
      subtitle: 'The Holy Spirit outpouring, communal living in Jerusalem, deacons, and Stephen\'s witness',
      quickInfo: 'The Christian church began on the Day of Pentecost with the outpouring of the Holy Spirit. Early believers lived in fellowship, appointed deacons to care for the vulnerable, and witnessed Stephen\'s martyrdom.',
      keyConcepts: [
        'Day of Pentecost (Acts 2): Holy Spirit descended as tongues of fire; Peter preached and 3,000 were converted.',
        'Early church fellowship (Acts 2:42-47): Devoted to apostles\' teaching, breaking of bread, and sharing possessions.',
        'Stephen, the first Christian martyr, prayed for his persecutors: "Lord, do not hold this sin against them."'
      ],
      quiz: [
        { q: 'On what Jewish festival day did the Holy Spirit descend upon the apostles gathered in Jerusalem in Acts 2?', opts: ['Passover', 'The Day of Pentecost', 'The Feast of Tabernacles', 'Purim'], ans: 1, exp: 'The Holy Spirit was poured out on Pentecost.' },
        { q: 'How many souls were converted and baptized following the Apostle Peter\'s bold sermon at Pentecost?', opts: ['120', '500', 'About 3,000 souls', '10,000'], ans: 2, exp: 'Acts 2:41 records approximately 3,000 believers added.' },
        { q: 'Why were the first seven deacons (including Stephen and Philip) appointed by the Apostles in Acts 6?', opts: ['To write new scriptures', 'To oversee the daily distribution of food to widows so apostles could focus on prayer and ministry', 'To fight Roman soldiers', 'To build church buildings'], ans: 1, exp: 'Deacons managed charitable food distribution.' },
        { q: 'Who is recognized in the New Testament as the first recorded Christian martyr (stoned for his faith)?', opts: ['Apostle James', 'Stephen', 'John the Baptist', 'Barnabas'], ans: 1, exp: 'Acts 7 documents the martyrdom of Stephen.' },
        { q: 'What young man stood by approvingly consenting to Stephen\'s death, guarding the cloaks of those stoning him?', opts: ['Cornelius', 'Saul of Tarsus (later Paul)', 'Nicodemus', 'Gamaliel'], ans: 1, exp: 'Saul approved Stephen\'s death before his Damascus conversion.' }
      ]
    },
    {
      title: 'The Missionary Journeys of Paul & The Council of Jerusalem',
      subtitle: 'Damascus road conversion, journeys with Barnabas/Silas, church planting, and Acts 15',
      quickInfo: 'Saul was miraculously converted on the Damascus road to become Paul, the Apostle to the Gentiles. His three extensive missionary journeys planted churches across the Greco-Roman world, culminating in Acts 15.',
      keyConcepts: [
        'Conversion on the road to Damascus (Acts 9): "Saul, Saul, why do you persecute me?"',
        'Paul\'s missionary journeys took the gospel through Cyprus, Asia Minor, Macedonia, Greece, and Rome.',
        'The Council of Jerusalem (Acts 15) resolved that Gentile converts are saved by grace without circumcision.'
      ],
      quiz: [
        { q: 'On what road did the resurrected Christ confront Saul in a blinding light from heaven?', opts: ['The Jericho road', 'The road to Damascus', 'The Appian Way', 'The road to Emmaus'], ans: 1, exp: 'Saul encountered Jesus on the Damascus road.' },
        { q: 'What companion accompanied the Apostle Paul on his first recorded missionary journey from Antioch?', opts: ['Silas', 'Barnabas', 'Luke', 'Timothy'], ans: 1, exp: 'Barnabas and John Mark accompanied Paul on his first journey.' },
        { q: 'What landmark decision was reached at the Council of Jerusalem in Acts 15 regarding Gentile converts?', opts: ['Gentiles must observe the entire Mosaic ceremonial law', 'Gentiles are saved through grace through faith and need not be circumcised', 'Gentiles cannot join the church', 'Gentiles must worship in Rome only'], ans: 1, exp: 'The Council upheld salvation by grace without ceremonial requirements.' },
        { q: 'In which Greek philosophical city did Paul address intellectual thinkers at the Areopagus (Mars\' Hill)?', opts: ['Corinth', 'Athens', 'Ephesus', 'Philippi'], ans: 1, exp: 'Acts 17 describes Paul addressing the Athenians.' },
        { q: 'What profession did Paul practice to support his missionary travels without burdening the churches?', opts: ['Fisherman', 'Tentmaker (leatherworker)', 'Tax collector', 'Blacksmith'], ans: 1, exp: 'Acts 18 records Paul\'s trade as a tentmaker.' }
      ]
    },
    {
      title: 'Justification by Faith & Pauline Epistles',
      subtitle: 'Romans 3-8, Galatians, the fruit of the Spirit, spiritual armor, and love in 1 Corinthians 13',
      quickInfo: 'Paul\'s theological epistles form the backbone of Christian doctrine. Romans establishes justification by faith in Christ apart from works of the law. Galatians contrasts the works of the flesh with the Fruit of the Spirit.',
      keyConcepts: [
        'Justification by Faith (Romans 3:23-24): all have sinned and are justified freely by grace.',
        'Fruit of the Spirit (Galatians 5:22-23): Love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control.',
        '1 Corinthians 13: Love is patient, kind, does not envy or boast, and never fails.'
      ],
      quiz: [
        { q: 'According to Paul\'s Epistle to the Romans, how is a sinner justified before a holy God?', opts: ['By strictly keeping every ceremonial ritual', 'Freely by God\'s grace through faith in Jesus Christ', 'By personal wealth and charity alone', 'By human perfection'], ans: 1, exp: 'Romans 3:28: Justified by faith apart from works of the law.' },
        { q: 'Which of the following is listed as a fruit of the Holy Spirit in Galatians 5:22-23?', opts: ['Envy and rivalry', 'Love, joy, and peace', 'Pride and ambition', 'Doubt and fear'], ans: 1, exp: 'Love, joy, peace are cardinal fruits of the Spirit.' },
        { q: 'In 1 Corinthians 13, which theological virtue is proclaimed as the greatest of all?', opts: ['Prophecy', 'Knowledge', 'Love (Agape charity)', 'Miracles'], ans: 2, exp: '"The greatest of these is love" (1 Corinthians 13:13).' },
        { q: 'What piece of spiritual armor in Ephesians 6 is identified as the "Sword of the Spirit"?', opts: ['The shield of faith', 'The Word of God', 'The breastplate of righteousness', 'The helmet of salvation'], ans: 1, exp: 'Ephesians 6:17 defines the Sword of the Spirit as the Word of God.' },
        { q: 'What did Paul declare about the law in relation to grace in his Epistle to the Galatians?', opts: ['The law was our guardian/tutor until Christ came, so that we might be justified by faith', 'The law saves everybody', 'Grace makes the law evil', 'The law should be forgotten'], ans: 0, exp: 'The law served as a schoolmaster leading to Christ.' }
      ]
    }
  ],
  french: [
    {
      title: 'Les Temps du Passé: Passé Composé vs Imparfait',
      subtitle: 'Auxiliary verbs avoir/être, past participles, background descriptions, and completed actions',
      quickInfo: 'French past narration balances the Passé Composé (completed, punctual actions) with the Imparfait (habitual past actions, ongoing states, descriptions, weather, and feelings).',
      keyConcepts: [
        'Passé Composé: Auxiliaire (avoir ou être) + participe passé (e.g., "J\'ai mangé", "Elle est partie").',
        'Imparfait: Radical de nous au présent + terminaisons -ais, -ais, -ait, -ions, -iez, -aient.',
        'DR & MRS VANDERTRAMP: Verbs of movement taking être as auxiliary with subject agreement.'
      ],
      quiz: [
        { q: 'Which auxiliary verb is used to form the passé composé of the movement verb "aller" (to go)?', opts: ['Avoir', 'Être', 'Faire', 'Prendre'], ans: 1, exp: '"Aller" conjugates with être: "Je suis allé(e)".' },
        { q: 'When is the Imparfait tense used instead of the Passé Composé?', opts: ['For a single sudden interrupted action', 'For continuous ongoing past descriptions, habits, or weather', 'Only in futuristic plans', 'To express commands'], ans: 1, exp: 'The imparfait sets backgrounds, habits, and conditions.' },
        { q: 'What is the past participle of the irregular verb "faire"?', opts: ['Faisé', 'Fait', 'Fais', 'Fart'], ans: 1, exp: 'The past participle of faire is "fait".' },
        { q: 'In the sentence "Quand j\'étais petit, je ___ souvent au football", choose the correct verb:', opts: ['ai joué', 'jouais (imparfait for childhood habit)', 'jouera', 'jouant'], ans: 1, exp: 'Childhood habits require the imparfait: "je jouais".' },
        { q: 'Conjugate "finir" with "nous" in the imparfait tense:', opts: ['Nous finissions', 'Nous avons fini', 'Nous finirons', 'Nous finissons'], ans: 0, exp: 'Imparfait ending for nous is -ions: "finissions".' }
      ]
    },
    {
      title: 'Le Futur Simple & Le Conditionnel Présent',
      subtitle: 'Infinitive stems, future endings (-ai, -as, -a, -ons, -ez, -ont), and polite requests',
      quickInfo: 'The Future tense expresses actions that will happen. The Conditional tense expresses hypothetical events ("Si clauses"), wishes, and polite requests ("Je voudrais...").',
      keyConcepts: [
        'Futur Simple: Full infinitive + future endings (-ai, -as, -a, -ons, -ez, -ont).',
        'Conditionnel: Future stem + Imparfait endings (-ais, -ais, -ait, -ions, -iez, -aient).',
        'Hypothetical Si clause: Si + Imparfait → Conditionnel présent ("Si j\'avais de l\'argent, je voyagerais").'
      ],
      quiz: [
        { q: 'What is the future simple stem of the irregular verb "aller"?', opts: ['all-', 'ir-', 'vas-', 'part-'], ans: 1, exp: 'The future stem of aller is "ir-" (e.g., "J\'irai").' },
        { q: 'How do you say "I would like a coffee, please" politely using the conditional?', opts: ['Je veux un café', 'Je voudrais un café, s\'il vous plaît', 'J\'avais un café', 'J\'aurai un café'], ans: 1, exp: '"Je voudrais" is the polite conditional form.' },
        { q: 'What are the endings for the futur simple in French?', opts: ['-e, -es, -e, -ons, -ez, -ent', '-ai, -as, -a, -ons, -ez, -ont', '-ais, -ais, -ait, -ions, -iez, -aient', '-is, -it, -issons'], ans: 1, exp: 'Future endings derive from avoir: -ai, -as, -a, -ons, -ez, -ont.' },
        { q: 'Complete the hypothetical sentence: "Si j\'avais le temps, je ___ ce roman."', opts: ['lis', 'lirais (conditionnel)', 'lirai', 'ai lu'], ans: 1, exp: 'Si + imparfait triggers the conditionnel: "je lirais".' },
        { q: 'What is the future simple of "être" for "Il" (He will be)?', opts: ['Il sera', 'Il aura', 'Il est', 'Il soit'], ans: 0, exp: '"Il sera" is he will be.' }
      ]
    },
    {
      title: 'Le Subjonctif Présent & L\'Argumentation Écrite',
      subtitle: 'Expressions of doubt, necessity, emotion, and writing formal French essays',
      quickInfo: 'The Subjunctive mood is triggered by expressions of necessity ("Il faut que..."), emotion, doubt, or will. Senior French essay writing requires logical connectives (d\'abord, d\'ailleurs, en revanche, en conclusion).',
      keyConcepts: [
        'Trigger expressions: "Il faut que...", "Bien que...", "Je doute que...", "Je souhaite que...".',
        'Subjunctive endings: -e, -es, -e, -ions, -iez, -ent added to the third-person plural present stem.',
        'Logical connectors: "D\'abord" (firstly), "Néanmoins" (nevertheless), "Par conséquent" (consequently).'
      ],
      quiz: [
        { q: 'Which introductory expression obligatorily requires the following verb to be in the subjonctif mood?', opts: ['Je pense que...', 'Il est certain que...', 'Il faut que...', 'Je sais que...'], ans: 2, exp: '"Il faut que" (necessity) always requires the subjunctive.' },
        { q: 'What is the subjunctive form of "faire" for "que vous"?', opts: ['Que vous faites', 'Que vous fassiez', 'Que vous faisiez', 'Que vous ferez'], ans: 1, exp: 'The subjunctive of faire is "fassiez".' },
        { q: 'What does the French transition word "Néanmoins" signify in an essay?', opts: ['Furthermore', 'Nevertheless / Nonetheless', 'Firstly', 'Because'], ans: 1, exp: '"Néanmoins" introduces a concession or contrast.' },
        { q: 'Complete: "Bien qu\'il ___ malade, il est venu au travail."', opts: ['est', 'soit (subjonctif)', 'sera', 'était'], ans: 1, exp: '"Bien que" triggers the subjunctive: "soit".' },
        { q: 'Which connective is ideal for concluding an argumentative French discourse?', opts: ['Au début', 'En conclusion / Pour conclure', 'D\'abord', 'Soudainement'], ans: 1, exp: '"En conclusion" signs off the argument.' }
      ]
    }
  ]
};

export function getSeniorAuthoritativeMap(): GradeAuthoritativeMap {
  return SENIOR_CURRICULUM_SPECS as GradeAuthoritativeMap;
}

export const SENIOR_AUTHORITATIVE_CURRICULUM: Record<string, GradeAuthoritativeMap> = {
  'grade-10': SENIOR_CURRICULUM_SPECS as GradeAuthoritativeMap,
  'grade-11': SENIOR_CURRICULUM_SPECS as GradeAuthoritativeMap,
  'grade-12': SENIOR_CURRICULUM_SPECS as GradeAuthoritativeMap
};
