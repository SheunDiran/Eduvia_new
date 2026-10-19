import { Topic } from '../../types';

export const HUMANITIES_TOPICS: Topic[] = [
  // ================= ENGLISH LANGUAGE: TOPIC 1 =================
  {
    id: 'eng-lang-rhetoric',
    subjectId: 'english-lang',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Rhetorical Appeals: Ethos, Pathos, and Logos',
    subtitle: 'Aristotelian persuasion, rhetorical devices, and persuasive argument analysis',
    estimatedMinutes: 25,
    learnContent: {
      summary: 'Aristotle categorized persuasion into three core rhetorical appeals: Ethos (credibility and moral character of the speaker), Pathos (emotional resonance with the audience), and Logos (logical reasoning, data, and structured syllogisms).',
      keyConcepts: [
        {
          title: 'Ethos (Credibility & Character)',
          explanation: 'Establishing trust, demonstrating expertise, acknowledging counter-perspectives fairly, and using respectful professional tone.'
        },
        {
          title: 'Pathos (Emotional Connection)',
          explanation: 'Evoking empathy, urgency, shared values, or indignation through vivid sensory imagery, evocative narratives, and poignant metaphors.'
        },
        {
          title: 'Logos (Logic & Evidence)',
          explanation: 'Constructing deductions from sound premises, citing verified empirical statistics, avoiding logical fallacies, and framing causal relationships.'
        }
      ],
      workedExamples: [
        {
          problem: 'Identify the primary appeal: "As a practicing pediatrician with over twenty years in adolescent healthcare, I strongly recommend vaccination."',
          solution: 'This is Ethos. The speaker establishes direct authority, professional credentials, and medical expertise to command trust.',
          takeaway: 'Look for references to qualifications, ethical duty, and firsthand experience.'
        }
      ],
      commonMistakes: [
        'Believing pathos is purely negative manipulation; ethical storytelling and relatable human examples are legitimate uses of pathos.',
        'Confusing correlation with causation when analyzing logos (cum hoc ergo propter hoc fallacy).',
        'Failing to recognize that great speeches integrate all three modes harmoniously.'
      ]
    },
    videos: [
      {
        id: 'v19',
        embedId: '3klMM9BkW5o',
        title: 'Ethos, Pathos, and Logos: Aristotle\'s Secret to Persuasion',
        channel: 'CrashCourse Study Skills',
        duration: '10:45',
        description: 'Hank Green explains how Greek rhetoricians analyzed arguments and how to spot appeals in real speeches.'
      },
      {
        id: 'v20',
        embedId: 'oKtQEnERhSY',
        title: 'How to use rhetoric to get what you want',
        channel: 'TED-Ed',
        duration: '04:30',
        description: 'Camille A. Langston breaks down forensic, epideictic, and deliberative rhetoric with animated examples.'
      },
      {
        id: 'v21',
        embedId: '7L_qK1uTjXk',
        title: 'Logical Fallacies in Rhetoric and Debate',
        channel: 'CrashCourse',
        duration: '09:20',
        description: 'Ad hominem, straw man, false dilemma, and slippery slope fallacies that compromise logos.'
      }
    ],
    quizQuestions: [
      {
        id: 'eq1',
        text: 'Which rhetorical appeal relies on citing verified statistical research, facts, and structured deductive reasoning?',
        options: ['Logos', 'Ethos', 'Pathos', 'Kairos'],
        correctIndex: 0,
        explanation: 'Logos is the appeal to logical reasoning, evidence, and intellectual coherence.',
        topicTag: 'Rhetorical Appeals'
      },
      {
        id: 'eq2',
        text: 'A speaker states: "I have spent 30 years researching climate science at Oxford University." Which appeal is primarily being employed?',
        options: ['Ethos (Credibility)', 'Pathos (Emotion)', 'Logos (Logic)', 'Bathos (Anticlimax)'],
        correctIndex: 0,
        explanation: 'Citing professional background, tenure, and specialized credentials builds authorial credibility (Ethos).',
        topicTag: 'Ethos'
      },
      {
        id: 'eq3',
        text: 'An advertisement showing neglected animals in need of rescue to inspire donations is an example of which appeal?',
        options: ['Pathos (Emotional appeal)', 'Logos (Logical appeal)', 'Ethos (Ethical appeal)', 'Deduction'],
        correctIndex: 0,
        explanation: 'Pathos triggers empathetic feelings and emotional urgency in the audience.',
        topicTag: 'Pathos'
      },
      {
        id: 'eq4',
        text: 'What is the logical fallacy of attacking an opponent\'s personal character rather than addressing their actual argument?',
        options: ['Ad hominem', 'Straw man', 'False dilemma', 'Post hoc ergo propter hoc'],
        correctIndex: 0,
        explanation: 'An ad hominem attack targets the individual rather than the merits of their claim.',
        topicTag: 'Logical Fallacies'
      },
      {
        id: 'eq5',
        text: 'What Greek concept refers to the opportune, strategically ideal moment to deliver an argument?',
        options: ['Kairos', 'Hubris', 'Hamartia', 'Catharsis'],
        correctIndex: 0,
        explanation: 'Kairos represents timeliness and situational appropriateness in rhetorical discourse.',
        topicTag: 'Kairos'
      }
    ]
  },

  // ================= ENGLISH LANGUAGE: TOPIC 2 =================
  {
    id: 'eng-lang-essay-thesis',
    subjectId: 'english-lang',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Argumentative Essay Structure & Strong Thesis Statements',
    subtitle: 'Crafting arguable claims, organizing body paragraphs with topic sentences, and refuting counterarguments',
    estimatedMinutes: 26,
    learnContent: {
      summary: 'A strong argumentative essay establishes a defensible, debatable thesis statement and supports it through disciplined paragraphs using claim, evidence, reasoning (CER), and thorough refutation of opposing viewpoints.',
      keyConcepts: [
        {
          title: 'The Debatable Thesis Statement',
          explanation: 'A thesis must make an arguable assertion rather than stating an indisputable fact or vague opinion. It serves as the analytical roadmap for the entire essay.'
        },
        {
          title: 'Claim-Evidence-Reasoning (CER)',
          explanation: 'Every body paragraph begins with a focused topic sentence (Claim), integrates cited textual or empirical support (Evidence), and explains how the evidence validates the thesis (Reasoning).'
        },
        {
          title: 'Addressing Counterclaims (Refutation)',
          explanation: 'Conceding the validity of a counterargument before dismantling it demonstrates intellectual maturity and strengthens overall persuasive power.'
        }
      ],
      workedExamples: [
        {
          problem: 'Is "Pollution is bad for the planet" an effective essay thesis?',
          solution: 'No. It is a simplistic, universally accepted fact with no debate. An effective thesis would be: "To combat urban air pollution, municipal governments should implement congestion pricing on diesel vehicles while reinvesting revenues into electrified rapid transit."',
          takeaway: 'A strong thesis proposes specific policy or analytical claims that rational people could reasonably contest.'
        }
      ],
      commonMistakes: [
        'Dropping quotes into paragraphs without introductory lead-ins or explanatory commentary (quote-bombing).',
        'Summarizing the plot rather than analyzing argumentative technique or thematic meaning.',
        'Writing a conclusion that merely repeats the introduction verbatim.'
      ]
    },
    videos: [
      {
        id: 'v-eng-e1',
        embedId: 'GgkRoYPLhts',
        title: 'How to Write an Argumentative Essay & Strong Thesis',
        channel: 'TED-Ed / Learn English',
        duration: '09:15',
        description: 'Step-by-step method for generating defensible claims and outlining five-paragraph essays.'
      },
      {
        id: 'v-eng-e2',
        embedId: 'w3uv8rIuJk8',
        title: 'Developing a Strong, Debatable Thesis Statement',
        channel: 'Khan Academy',
        duration: '08:12',
        description: 'Transforming simple topic observations into sophisticated arguable thesis assertions.'
      },
      {
        id: 'v-eng-e3',
        embedId: 'h8k_4m9k9_Q',
        title: 'Counterarguments and Rebuttals in Academic Writing',
        channel: 'Smrt English',
        duration: '06:40',
        description: 'Techniques for acknowledging opposing viewpoints and constructing bulletproof refutations.'
      }
    ],
    quizQuestions: [
      {
        id: 'eet1',
        text: 'Which of the following is a characteristic of a high-scoring academic thesis statement?',
        options: [
          'It makes a specific, debatable claim that requires evidence to defend',
          'It is a widely accepted factual statement that nobody disputes',
          'It is an announcement like "In this essay I will talk about dogs"',
          'It asks an open rhetorical question without taking any stance'
        ],
        correctIndex: 0,
        explanation: 'A rigorous thesis takes a clear, defensible position with specific supporting prongs.',
        topicTag: 'Thesis Quality'
      },
      {
        id: 'eet2',
        text: 'In the Claim-Evidence-Reasoning (CER) framework, what is the role of "Reasoning"?',
        options: [
          'To explain explicitly how the evidence supports and proves the claim',
          'To introduce a completely unrelated secondary topic',
          'To copy-paste a second long quote without citation',
          'To state the title of the book'
        ],
        correctIndex: 0,
        explanation: 'Reasoning bridges evidence to the claim, explaining the analytical connection.',
        topicTag: 'CER Framework'
      },
      {
        id: 'eet3',
        text: 'Where does a thesis statement typically appear in a standard academic essay?',
        options: [
          'At the end of the introductory paragraph',
          'In the middle of the third body paragraph',
          'Only in the title of the essay',
          'On the back of the grading sheet'
        ],
        correctIndex: 0,
        explanation: 'Standard conventions place the thesis at the climax of the introductory paragraph.',
        topicTag: 'Thesis Placement'
      },
      {
        id: 'eet4',
        text: 'What is the purpose of addressing a counterargument in an essay?',
        options: [
          'To demonstrate balance, strengthen credibility, and prove why your position remains superior',
          'To show that you cannot make up your mind',
          'To pad the word count without adding thoughts',
          'To agree entirely with the opposing side and surrender'
        ],
        correctIndex: 0,
        explanation: 'Acknowledging and refuting counterclaims preempts reader skepticism.',
        topicTag: 'Counterarguments'
      },
      {
        id: 'eet5',
        text: 'What is "quote-bombing" or "orphan quoting" in essay composition?',
        options: [
          'Dropping a direct quotation into a paragraph without contextual lead-in or analysis',
          'Using quotation marks around slang words',
          'Writing an entire paper without any research',
          'Quoting only Shakespeare'
        ],
        correctIndex: 0,
        explanation: 'Quotations must always be framed with introductory context and analytical commentary.',
        topicTag: 'Evidence Integration'
      }
    ]
  },

  // ================= ENGLISH LANGUAGE: TOPIC 3 =================
  {
    id: 'eng-lang-sentence-mechanics',
    subjectId: 'english-lang',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Active Voice, Parallel Structure & Syntax Clarity',
    subtitle: 'Eliminating passive voice, correcting dangling modifiers, and mastering parallel sentence construction',
    estimatedMinutes: 24,
    learnContent: {
      summary: 'Vigorous writing requires direct syntax. In active voice, the grammatical subject performs the action. Parallel structure requires grammatically identical forms in lists and comparisons, ensuring elegance and readability.',
      keyConcepts: [
        {
          title: 'Active vs. Passive Voice',
          explanation: 'Active: "The researcher conducted the experiment." (Subject performs verb). Passive: "The experiment was conducted by the researcher." Passive weakens agency and introduces wordiness.'
        },
        {
          title: 'Parallel Structure',
          explanation: 'Items in a series must share grammatical form. Correct: "She loves swimming, running, and cycling." Incorrect: "She loves swimming, running, and to cycle."'
        },
        {
          title: 'Dangling and Misplaced Modifiers',
          explanation: 'A modifying descriptive phrase must immediately precede or follow the specific noun it describes to avoid comic confusion.'
        }
      ],
      workedExamples: [
        {
          problem: 'Correct this sentence: "Walking down the street, the library came into view."',
          solution: 'As written, the library appears to be walking. Correction: "Walking down the street, Maria saw the library come into view."',
          takeaway: 'Always place the actor who is performing the participial action right after the comma.'
        }
      ],
      commonMistakes: [
        'Confusing past tense with passive voice; "She ran" is past tense active, while "She was chased" is passive.',
        'Mismatched verb forms in coordinate conjunctions (not only... but also).',
        'Overusing passive constructions to sound falsely "scientific" or pretentious.'
      ]
    },
    videos: [
      {
        id: 'v-eng-m1',
        embedId: 'p3jFfEwW6hU',
        title: 'Active vs. Passive Voice & Sentence Clarity',
        channel: 'Khan Academy',
        duration: '07:30',
        description: 'How to spot forms of "to be" + past participle and flip passive sentences into strong active verbs.'
      },
      {
        id: 'v-eng-m2',
        embedId: '2OwqGfQ6hM0',
        title: 'Parallel Structure in Writing: Rules & Examples',
        channel: 'Learn English with Emma',
        duration: '08:45',
        description: 'Balancing gerunds, infinitives, clauses, and correlative conjunctions.'
      },
      {
        id: 'v-eng-m3',
        embedId: 'oN2ZgS9a0oQ',
        title: 'Dangling and Misplaced Modifiers - How to Fix Them',
        channel: 'Scribbr',
        duration: '05:15',
        description: 'Clear visual examples showing how misplaced modifying phrases change sentence meaning.'
      }
    ],
    quizQuestions: [
      {
        id: 'esm1',
        text: 'Which of the following sentences is written strictly in the ACTIVE voice?',
        options: [
          'The committee approved the school expansion budget unanimously',
          'The school expansion budget was approved by the committee',
          'Mistakes were made during the budgeting process',
          'The proposal is being considered by board members'
        ],
        correctIndex: 0,
        explanation: 'The subject ("The committee") directly performs the action ("approved").',
        topicTag: 'Active Voice'
      },
      {
        id: 'esm2',
        text: 'Which sentence demonstrates correct parallel structure?',
        options: [
          'During summer vacation, Liam enjoys swimming, hiking, and camping',
          'During summer vacation, Liam enjoys swimming, to hike, and camping',
          'During summer vacation, Liam enjoys swimming, hikes, and to camp',
          'During summer vacation, Liam enjoys to swim, hiking, and camp'
        ],
        correctIndex: 0,
        explanation: 'All three activities share the identical gerund (-ing) grammatical form.',
        topicTag: 'Parallelism'
      },
      {
        id: 'esm3',
        text: 'Identify the error in: "Covered in melted cheese, Elena devoured the hot pizza."',
        options: [
          'There is no error; the sentence is correct and modifier clearly describes the pizza',
          'Elena is covered in melted cheese (dangling/misplaced modifier)',
          'The sentence lacks a predicate',
          'Devoured is spelled incorrectly'
        ],
        correctIndex: 1,
        explanation: 'The modifying phrase "Covered in melted cheese" sits next to "Elena", implying Elena is covered in cheese.',
        topicTag: 'Misplaced Modifiers'
      },
      {
        id: 'esm4',
        text: 'What is the grammatical term for two independent clauses joined only by a comma without a coordinating conjunction?',
        options: ['Comma splice', 'Sentence fragment', 'Run-on clause', 'Subordinate clause'],
        correctIndex: 0,
        explanation: 'Joining two complete sentences with merely a comma creates a comma splice error.',
        topicTag: 'Comma Splice'
      },
      {
        id: 'esm5',
        text: 'Why do writing editors advise against excessive passive voice in academic writing?',
        options: [
          'It obscures the agent of action and leads to bloated, wordy sentences',
          'It is grammatically illegal in English',
          'It cannot be used with past tense verbs',
          'It is only allowed in poetry'
        ],
        correctIndex: 0,
        explanation: 'Active verbs produce punchy, transparent, and direct communication.',
        topicTag: 'Style & Clarity'
      }
    ]
  },

  // ================= ENGLISH LITERATURE: TOPIC 1 =================
  {
    id: 'lit-macbeth-themes',
    subjectId: 'english-lit',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Shakespeare\'s Macbeth: Tragic Flaws & Ambition',
    subtitle: 'Hubris, the supernatural prophecies, Lady Macbeth\'s manipulation, and the psychological decay of guilt',
    estimatedMinutes: 28,
    learnContent: {
      summary: 'Shakespeare\'s Macbeth depicts the tragic trajectory of a Scottish general whose fatal flaw (hamartia)—unchecked vaulting ambition—is ignited by prophetic witches and manipulated by Lady Macbeth, spiraling into tyranny, psychological madness, and downfall.',
      keyConcepts: [
        {
          title: 'Hamartia & Vaulting Ambition',
          explanation: 'Macbeth acknowledges his "vaulting ambition, which o\'erleaps itself." His thirst for the Scottish crown eclipses moral conscience and fealty.'
        },
        {
          title: 'The Motif of Guilt & Blood',
          explanation: 'Blood symbolizes indelible guilt. In Act 2, Macbeth fears Neptune\'s ocean cannot wash blood from his hands; in Act 5, Lady Macbeth hallucinates permanent bloodspots in her sleepwalking breakdown.'
        },
        {
          title: 'The Reversal of Natural Order',
          explanation: 'The murder of King Duncan (regicide) violates the Divine Right of Kings, symbolized by horses eating one another and unnatural eclipses ("Fair is foul, and foul is fair").'
        }
      ],
      workedExamples: [
        {
          problem: 'What does the famous soliloquy "Tomorrow, and tomorrow, and tomorrow" signify about Macbeth\'s worldview by Act 5?',
          solution: 'Upon hearing of Lady Macbeth\'s death, Macbeth reflects on the ultimate futility and nihilism of life, describing it as "a tale told by an idiot, full of sound and fury, signifying nothing."',
          takeaway: 'Tragic downfall concludes in absolute moral and existential emptiness.'
        }
      ],
      commonMistakes: [
        'Viewing Lady Macbeth as permanently cold and unfeeling; her rapid psychological descent into guilt and suicide shows her profound moral fracture.',
        'Blaming the witches entirely; the witches provide riddles and prophecies, but Macbeth freely chooses to commit bloody murders.',
        'Confusing dramatic irony with situational irony in Shakespearean tragedy.'
      ]
    },
    videos: [
      {
        id: 'v-lit-m1',
        embedId: 'x0G2e-x9fB4',
        title: 'Shakespeare’s Macbeth: Plot, Themes & Motifs',
        channel: 'CrashCourse Literature',
        duration: '12:35',
        description: 'John Green explores hubris, the witches’ prophecies, and the nature of tragic guilt.'
      },
      {
        id: 'v-lit-m2',
        embedId: 'uk6nQh2xTz8',
        title: 'The Tragic Hero & Hamartia in Drama',
        channel: 'TED-Ed',
        duration: '08:45',
        description: 'Aristotle’s poetics, tragic flaws, dramatic irony, and catharsis explained.'
      },
      {
        id: 'v-lit-m3',
        embedId: 'pG3vFhH8UaM',
        title: 'Lady Macbeth: Character Analysis & Motifs',
        channel: 'Course Hero',
        duration: '06:50',
        description: 'Analysis of "Unsex me here", guilt hallucinations, and sleepwalking breakdown in Act 5.'
      }
    ],
    quizQuestions: [
      {
        id: 'lmq1',
        text: 'What is Macbeth\'s primary fatal flaw (hamartia) that drives his downfall?',
        options: ['Unchecked vaulting ambition', 'Cowardice in physical battle', 'Financial greed', 'Blind religious fanaticism'],
        correctIndex: 0,
        explanation: 'Macbeth openly recognizes that his ambition overrides all moral restraint.',
        topicTag: 'Hamartia'
      },
      {
        id: 'lmq2',
        text: 'What phrase chanted by the Three Witches in Act 1 establishes the moral paradox of the play?',
        options: ['"Fair is foul, and foul is fair"', '"To be or not to be"', '"All the world\'s a stage"', '"Beware the Ides of March"'],
        correctIndex: 0,
        explanation: 'This paradoxical chant establishes the inversion of morality and reality throughout the tragedy.',
        topicTag: 'Shakespearean Motifs'
      },
      {
        id: 'lmq3',
        text: 'What persistent hallucination torments Lady Macbeth during her Act 5 sleepwalking scene?',
        options: ['An indelible spot of blood on her hands that will not wash out', 'A hovering dagger with its handle toward her', 'Banquo\'s ghost sitting at the banquet', 'The sound of galloping horses'],
        correctIndex: 0,
        explanation: 'Her desperate cry "Out, damned spot!" symbolizes inescapable psychological guilt.',
        topicTag: 'Symbolism of Guilt'
      },
      {
        id: 'lmq4',
        text: 'Whose ghost appears at Macbeth\'s royal banquet, causing him to scream in terror before his nobles?',
        options: ['Banquo', 'King Duncan', 'Macduff', 'King Edward'],
        correctIndex: 0,
        explanation: 'Banquo, whom Macbeth ordered assassinated to secure his lineage, appears silently in Macbeth\'s chair.',
        topicTag: 'Banquet Scene'
      },
      {
        id: 'lmq5',
        text: 'Why is Macduff able to slay Macbeth despite the prophecy that "none of woman born shall harm Macbeth"?',
        options: ['Macduff was delivered via Caesarean section ("untimely ripped")', 'Macduff wore magic armor', 'The witches lied about the prophecy', 'Macduff was an adopted foreigner'],
        correctIndex: 0,
        explanation: 'Macduff was taken from his mother\'s womb prematurely via surgical delivery, fulfilling the prophecy\'s double meaning.',
        topicTag: 'Prophecy Resolution'
      }
    ]
  },

  // ================= ENGLISH LITERATURE: TOPIC 2 =================
  {
    id: 'lit-poetry-analysis',
    subjectId: 'english-lit',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Poetic Meter, Imagery & Figurative Language',
    subtitle: 'Iambic pentameter, sonnet structures, metaphors, personification, and sensory imagery',
    estimatedMinutes: 26,
    learnContent: {
      summary: 'Poetry compresses profound meaning into rhythm, meter, and vivid figurative language. Mastering poetic devices like metaphors, similes, personification, and iambic meter allows students to decipher subtext and thematic craft.',
      keyConcepts: [
        {
          title: 'Iambic Pentameter',
          explanation: 'A line of five metrical feet (iambs), each consisting of one unstressed syllable followed by one stressed syllable (da-DUM da-DUM da-DUM da-DUM da-DUM, 10 syllables total).'
        },
        {
          title: 'Petrarchan vs. Shakespearean Sonnets',
          explanation: '14-line lyric poems. Shakespearean sonnets feature three quatrains and a rhyming heroic couplet (ABAB CDCD EFEF GG); Petrarchan sonnets feature an octave and a sestet with a volta (turn).'
        },
        {
          title: 'Figurative Devices (Metaphor, Simile, Personification)',
          explanation: 'Metaphors make direct identity comparisons without "like" or "as"; similes use explicit comparison words; personification attributes human emotional volition to inanimate objects.'
        }
      ],
      workedExamples: [
        {
          problem: 'Scan the meter of: "Shall I compare thee to a summer\'s day?"',
          solution: 'Shall I (unstressed, stressed) com-PARE (unstressed, stressed) thee TO (unstressed, stressed) a SUM- (unstressed, stressed) mer\'s DAY (unstressed, stressed). Five iambic feet = Iambic Pentameter.',
          takeaway: 'Count both the syllables (10) and verify the heartbeat rising stress pattern.'
        }
      ],
      commonMistakes: [
        'Confusing rhyme scheme with meter; rhyme deals with end-line sound matching, while meter measures rhythmic syllable stresses.',
        'Asserting every poem has a hidden secret "code"; poets use craft to evoke emotional, sensory, and philosophical truths.',
        'Overlooking the volta (turning point) where the tone shifts in a sonnet.'
      ]
    },
    videos: [
      {
        id: 'v-lit-p1',
        embedId: 'z_v4a-w9mC8',
        title: 'How to Read and Analyze Poetry: Meter, Rhythm & Stanzas',
        channel: 'CrashCourse Literature',
        duration: '10:20',
        description: 'Unpacking poetic meters (iambic pentameter), sensory imagery, and figurative language.'
      },
      {
        id: 'v-lit-p2',
        embedId: 'I5lsuyunKeY',
        title: 'Shakespeare\'s Sonnets and Iambic Pentameter',
        channel: 'TED-Ed',
        duration: '05:12',
        description: 'Why Shakespeare loved the rhythm of the human heartbeat in his verses.'
      },
      {
        id: 'v-lit-p3',
        embedId: 'T8g4K1C-qI4',
        title: 'Figurative Language: Metaphor, Simile, Personification',
        channel: 'BBC Bitesize',
        duration: '06:18',
        description: 'How sensory imagery and metaphor bring abstract emotional themes to life.'
      }
    ],
    quizQuestions: [
      {
        id: 'lpq1',
        text: 'How many total syllables are contained in a standard line of unrhymed iambic pentameter (blank verse)?',
        options: ['10 syllables (5 metrical feet)', '8 syllables', '12 syllables', '14 syllables'],
        correctIndex: 0,
        explanation: 'Each of the 5 iambs contains two syllables (unstressed/stressed) = 10 syllables.',
        topicTag: 'Poetic Meter'
      },
      {
        id: 'lpq2',
        text: 'What is the rhyme scheme of a standard Shakespearean (English) Sonnet?',
        options: ['ABAB CDCD EFEF GG', 'ABBA ABBA CDECDE', 'AABB CCDD EEFF GG', 'AAAA BBBB CCCC DD'],
        correctIndex: 0,
        explanation: 'Three alternating quatrains capped by a final rhyming couplet (GG).',
        topicTag: 'Sonnet Structure'
      },
      {
        id: 'lpq3',
        text: 'What poetic term describes the thematic or emotional "turn" in a sonnet?',
        options: ['The Volta', 'The Caesura', 'The Refrain', 'The Enjambment'],
        correctIndex: 0,
        explanation: 'The volta marks the dramatic shift in thought or resolution, typically before the final sestet or couplet.',
        topicTag: 'Volta'
      },
      {
        id: 'lpq4',
        text: 'What literary device is used when a sentence runs over from one poetic line to the next without terminal punctuation?',
        options: ['Enjambment', 'End-stopping', 'Alliteration', 'Hyperbole'],
        correctIndex: 0,
        explanation: 'Enjambment carries syntactic meaning across line breaks without pause.',
        topicTag: 'Enjambment'
      },
      {
        id: 'lpq5',
        text: '"The wind whispered mournfully through the barren branches." What figurative device is being used?',
        options: ['Personification', 'Synecdoche', 'Oxymoron', 'Simile'],
        correctIndex: 0,
        explanation: 'Attributing the human action of "whispering mournfully" to the wind is personification.',
        topicTag: 'Personification'
      }
    ]
  },

  // ================= ENGLISH LITERATURE: TOPIC 3 =================
  {
    id: 'lit-prose-narrative',
    subjectId: 'english-lit',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Narrative Voice, Point of View & Allegory',
    subtitle: 'First-person unreliable narrators, third-person omniscient vs. limited, symbolism, and political allegory in prose',
    estimatedMinutes: 26,
    learnContent: {
      summary: 'Prose fiction constructs fictional worlds through deliberate narrative voice. Point of view controls what the reader experiences, while allegory allows entire novels to function as symbolic representations of historical or political events.',
      keyConcepts: [
        {
          title: 'Points of View (POV)',
          explanation: 'First-person ("I", subjective, potentially biased/unreliable); Third-person limited (follows thoughts of one protagonist); Third-person omniscient (all-knowing narrator exploring multiple characters\' minds).'
        },
        {
          title: 'The Unreliable Narrator',
          explanation: 'A storyteller whose credibility is compromised by youth, mental instability, bias, or deliberate deceit, forcing readers to read between the lines.'
        },
        {
          title: 'Allegory (e.g. Animal Farm)',
          explanation: 'A narrative with two distinct levels of meaning: the surface story (animals rebelling on a farm) and a deeper symbolic meaning (critique of the 1917 Russian Revolution and totalitarianism).'
        }
      ],
      workedExamples: [
        {
          problem: 'Why is George Orwell\'s Animal Farm classified as a political allegory rather than merely an animal fairy tale?',
          solution: 'Every major character represents a historical figure or collective class of the Russian Revolution: Old Major (Marx/Lenin), Napoleon (Stalin), Snowball (Trotsky), and Boxer (the exploited working class).',
          takeaway: 'Allegories use extended metaphorical worlds to critique real-world political and moral failures.'
        }
      ],
      commonMistakes: [
        'Confusing the narrator\'s viewpoint with the author\'s personal viewpoint.',
        'Overlooking subtle irony when reading an unreliable narrator.',
        'Assuming symbols in literature have only one single rigid meaning.'
      ]
    },
    videos: [
      {
        id: 'v-lit-pr1',
        embedId: 'mPnWbH8_4jI',
        title: 'Point of View: First, Second, and Third Person',
        channel: 'Khan Academy',
        duration: '06:12',
        description: 'How narrative perspective changes empathy, intimacy, and narrative suspense.'
      },
      {
        id: 'v-lit-pr2',
        embedId: '6TyoFz3s3v8',
        title: 'George Orwell\'s Animal Farm: Themes & Historical Allegory',
        channel: 'CrashCourse Literature',
        duration: '11:45',
        description: 'John Green decodes how Orwell satirized the corruption of socialist ideals into dictatorship.'
      },
      {
        id: 'v-lit-pr3',
        embedId: '3mK6_v8HjX0',
        title: 'The Power of the Unreliable Narrator',
        channel: 'TED-Ed',
        duration: '04:55',
        description: 'Why writers use biased storytellers to create psychological depth and mystery.'
      }
    ],
    quizQuestions: [
      {
        id: 'lnq1',
        text: 'In George Orwell\'s novella Animal Farm, what historical figure does the pig Napoleon represent?',
        options: ['Joseph Stalin', 'Winston Churchill', 'Leon Trotsky', 'Tsar Nicholas II'],
        correctIndex: 0,
        explanation: 'Napoleon represents Joseph Stalin, who consolidated totalitarian control over the Soviet state.',
        topicTag: 'Allegory'
      },
      {
        id: 'lnq2',
        text: 'What type of narrator has complete access to the innermost thoughts and motives of every character in a story?',
        options: ['Third-person omniscient narrator', 'First-person central narrator', 'Third-person limited narrator', 'Second-person imperative narrator'],
        correctIndex: 0,
        explanation: 'Omniscient (all-knowing) third-person narrators reveal thoughts across multiple characters.',
        topicTag: 'Narrative POV'
      },
      {
        id: 'lnq3',
        text: 'What is an "unreliable narrator"?',
        options: [
          'A narrator whose credibility is compromised by delusion, dishonesty, youth, or strong bias',
          'An author who misses book publication deadlines',
          'A character who refuses to speak to other characters',
          'A narrator who writes in rhyming verse'
        ],
        correctIndex: 0,
        explanation: 'Unreliable narrators present skewed versions of reality that readers must critically re-evaluate.',
        topicTag: 'Unreliable Narrator'
      },
      {
        id: 'lnq4',
        text: 'In Animal Farm, which loyal workhorse character symbolizes the hard-working, exploited working class (proletariat)?',
        options: ['Boxer', 'Squealer', 'Mollie', 'Benjamin'],
        correctIndex: 0,
        explanation: 'Boxer\'s motto "I will work harder" symbolizes the exploited working masses.',
        topicTag: 'Character Symbolism'
      },
      {
        id: 'lnq5',
        text: 'What literary term describes an extended narrative in which characters and actions represent deeper moral, religious, or political meanings?',
        options: ['Allegory', 'Alliteration', 'Aphorism', 'Anthology'],
        correctIndex: 0,
        explanation: 'An allegory operates on both literal and symbolic levels throughout the work.',
        topicTag: 'Allegory Definition'
      }
    ]
  },

  // ================= HISTORY: TOPIC 1 =================
  {
    id: 'hist-industrial-revolution',
    subjectId: 'history',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'The Industrial Revolution & Global Urbanization',
    subtitle: 'Steam power, mechanization, labor movements, and the shift from agrarian life to industrial capitalism',
    estimatedMinutes: 28,
    learnContent: {
      summary: 'Beginning in late 18th-century Britain, the Industrial Revolution replaced manual labor with steam engines and mechanized factories, sparking massive rural-to-urban migrations, modern capitalism, and labor rights movements.',
      keyConcepts: [
        {
          title: 'Why Britain Led the Revolution',
          explanation: 'Britain possessed abundant coal and iron deposits, advanced colonial trade routes for raw cotton, capital from commercial banking, and an agricultural enclosure movement that freed rural labor.'
        },
        {
          title: 'Technological Innovations',
          explanation: 'James Watt\'s improved steam engine, James Hargreaves\' Spinning Jenny, and steam locomotives radically accelerated manufacturing speed and transportation networks.'
        },
        {
          title: 'Social and Political Consequences',
          explanation: 'Unregulated factory conditions spurred child labor, urban slums, cholera outbreaks, and ultimately led to the rise of trade unions, the Factory Acts, and Karl Marx\'s communist manifesto.'
        }
      ],
      workedExamples: [
        {
          problem: 'How did the enclosure acts in rural Britain accelerate industrial factory production in cities?',
          solution: 'Enclosing common agricultural lands into private fenced estates displaced peasant farmers, forcing thousands of impoverished rural families into industrial cities (like Manchester) seeking factory work, creating a massive pool of cheap wage labor.',
          takeaway: 'Agricultural changes directly enabled industrial urbanization.'
        }
      ],
      commonMistakes: [
        'Assuming the Industrial Revolution took place in a few short years; it unfolded over multiple centuries in two distinct waves (First: steam and textiles; Second: steel, oil, and electricity).',
        'Believing living standards rose immediately for all workers; the early decades brought hazardous working hours and declining urban sanitation.',
        'Overlooking the reliance on colonial raw materials (such as American slave-grown cotton) to fuel British textile mills.'
      ]
    },
    videos: [
      {
        id: 'v-hist-i1',
        embedId: 'zhL5DCizj5c',
        title: 'Coal, Steam, and The Industrial Revolution: Crash Course World History #32',
        channel: 'CrashCourse',
        duration: '11:05',
        description: 'John Green explains why the Industrial Revolution began in Britain and how steam transformed human civilization.'
      },
      {
        id: 'v-hist-i2',
        embedId: '3Efq-aXkhG8',
        title: 'Urbanization and Working Conditions in Industrial Manchester',
        channel: 'Simple History',
        duration: '08:20',
        description: 'Animated documentary showing life inside 19th-century cotton mills, tenements, and child labor.'
      },
      {
        id: 'v-hist-i3',
        embedId: '4Q2AZgS9vQ0',
        title: 'Capitalism vs. Socialism: Responses to Industrial Inequality',
        channel: 'CrashCourse World History',
        duration: '14:12',
        description: 'Adam Smith’s free market theory compared to Karl Marx’s labor theory of value.'
      }
    ],
    quizQuestions: [
      {
        id: 'hiq1',
        text: 'In which country did the Industrial Revolution originate during the mid-to-late 18th century?',
        options: ['Great Britain', 'United States', 'Germany', 'Japan'],
        correctIndex: 0,
        explanation: 'Britain had accessible coal reserves, iron, capital, and colonial trade networks.',
        topicTag: 'Origins of Industrialization'
      },
      {
        id: 'hiq2',
        text: 'Whose crucial technological improvements to the steam engine revolutionized factory machinery and locomotives?',
        options: ['James Watt', 'Thomas Edison', 'Eli Whitney', 'Henry Ford'],
        correctIndex: 0,
        explanation: 'James Watt improved steam engine efficiency with a separate condenser in 1769.',
        topicTag: 'Steam Engine'
      },
      {
        id: 'hiq3',
        text: 'What major demographic shift occurred as a result of factory mechanization?',
        options: [
          'Rapid urbanization (massive migration from rural villages to factory cities)',
          'Migration away from cities into nomadic rural farming',
          'Universal decline in total global population',
          'Complete abandonment of maritime trade'
        ],
        correctIndex: 0,
        explanation: 'Millions of agrarian workers moved to industrial cities seeking wage employment.',
        topicTag: 'Urbanization'
      },
      {
        id: 'hiq4',
        text: 'What political and economic text was co-authored by Karl Marx and Friedrich Engels in 1848 in response to industrial labor exploitation?',
        options: ['The Communist Manifesto', 'The Wealth of Nations', 'Common Sense', 'Leviathan'],
        correctIndex: 0,
        explanation: 'Marx and Engels analyzed class struggle between the bourgeoisie and proletariat.',
        topicTag: 'Marxism'
      },
      {
        id: 'hiq5',
        text: 'Which legislative measures in 19th-century Britain established safety limits on child labor and working hours in textile mills?',
        options: ['The Factory Acts', 'The Stamp Act', 'The Emancipation Proclamation', 'The Treaty of Versailles'],
        correctIndex: 0,
        explanation: 'The Factory Acts gradually restricted child labor and mandated schooling hours.',
        topicTag: 'Labor Reform'
      }
    ]
  },

  // ================= HISTORY: TOPIC 2 =================
  {
    id: 'hist-ww1-causes',
    subjectId: 'history',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'The M-A-I-N Causes of World War I',
    subtitle: 'Militarism, Alliances, Imperialism, Nationalism, and the Sarajevo assassination of 1914',
    estimatedMinutes: 28,
    learnContent: {
      summary: 'World War I (1914–1918) was ignited by systemic geopolitical rivalries summarized by the acronym M-A-I-N: Militarism, Alliances, Imperialism, and Nationalism. The spark was the assassination of Archduke Franz Ferdinand in Sarajevo.',
      keyConcepts: [
        {
          title: 'The M-A-I-N Acronym',
          explanation: 'Militarism (naval arms race between Britain and Germany); Alliances (Triple Entente vs. Triple Alliance); Imperialism (scramble for African and Asian colonies); Nationalism (Pan-Slavic pride in the Balkans "powder keg").'
        },
        {
          title: 'The Domino Effect of Entangling Alliances',
          explanation: 'Austria-Hungary\'s declaration of war on Serbia pulled in Russia, which triggered Germany to declare war on Russia and France, which prompted Britain\'s entry when Germany invaded neutral Belgium.'
        },
        {
          title: 'Trench Warfare & Industrialized Attrition',
          explanation: 'Machine guns, poison gas, artillery, and barbed wire created devastating defensive stalemates across the Western Front.'
        }
      ],
      workedExamples: [
        {
          problem: 'Why did the assassination of Archduke Franz Ferdinand in Sarajevo trigger a continent-wide war rather than remaining a local regional conflict?',
          solution: 'Because of the rigid secret alliance system: Germany gave Austria-Hungary a "blank check" of unconditional support; Russia mobilized to protect fellow Slavic Serbians; France backed Russia; and Britain honored its treaty protecting Belgian neutrality.',
          takeaway: 'Interconnected mutual defense treaties transformed a local crisis into a global war.'
        }
      ],
      commonMistakes: [
        'Believing the assassination was the sole cause of WWI; it was merely the catalyst that detonated decades of deep imperial and military rivalry.',
        'Confusing the Triple Entente (Britain, France, Russia) with the Central Powers (Germany, Austria-Hungary, Ottoman Empire).',
        'Assuming trench warfare was equally dominant on the Eastern Front, which was far more mobile.'
      ]
    },
    videos: [
      {
        id: 'v-hist-w1',
        embedId: '_XPZQ0LAlR4',
        title: 'Archdukes, Cynicism, and World War I: Crash Course World History #36',
        channel: 'CrashCourse',
        duration: '11:44',
        description: 'John Green breaks down the web of alliances, mobilization timetables, and tragic miscalculations.'
      },
      {
        id: 'v-hist-w2',
        embedId: '24T4T6x9iR0',
        title: 'The M.A.I.N. Causes of World War One Explained',
        channel: 'Simple History',
        duration: '07:35',
        description: 'Animated visual breakdown of Militarism, Alliances, Imperialism, and Nationalism.'
      },
      {
        id: 'v-hist-w3',
        embedId: 'dHSQAEam2yc',
        title: 'Life in the Trenches: Western Front Technology and Stalemate',
        channel: 'The Great War',
        duration: '09:50',
        description: 'Documentary footage and primary sources detailing trench construction, no man’s land, and artillery.'
      }
    ],
    quizQuestions: [
      {
        id: 'hwq1',
        text: 'What four long-term systemic causes of World War I are commonly remembered by the acronym M-A-I-N?',
        options: [
          'Militarism, Alliances, Imperialism, Nationalism',
          'Monarchy, Anarchy, Inflation, Navigation',
          'Megalomania, Aggression, Industry, Navy',
          'Mercantilism, Autocracy, Invasion, Neutrality'
        ],
        correctIndex: 0,
        explanation: 'M-A-I-N stands for Militarism, Alliances, Imperialism, and Nationalism.',
        topicTag: 'MAIN Acronym'
      },
      {
        id: 'hwq2',
        text: 'Whose assassination in Sarajevo on June 28, 1914, sparked the diplomatic crisis leading to World War I?',
        options: ['Archduke Franz Ferdinand of Austria', 'Kaiser Wilhelm II', 'Czar Nicholas II', 'Otto von Bismarck'],
        correctIndex: 0,
        explanation: 'Gavrilo Princip, a Serbian nationalist with the Black Hand, assassinated Archduke Franz Ferdinand.',
        topicTag: 'Sarajevo Spark'
      },
      {
        id: 'hwq3',
        text: 'Which nations comprised the original Triple Entente before the outbreak of World War I?',
        options: ['Great Britain, France, and Russia', 'Germany, Austria-Hungary, and Italy', 'United States, Canada, and Britain', 'Ottoman Empire, Bulgaria, and Germany'],
        correctIndex: 0,
        explanation: 'The diplomatic alliance between Great Britain, France, and the Russian Empire was the Triple Entente.',
        topicTag: 'Alliance System'
      },
      {
        id: 'hwq4',
        text: 'Why did Great Britain officially enter the war against Germany in August 1914?',
        options: [
          'Germany invaded neutral Belgium, violating the 1839 Treaty of London',
          'German submarines sank a British luxury liner in 1913',
          'Russia attacked London',
          'The Ottoman Empire closed the Suez Canal'
        ],
        correctIndex: 0,
        explanation: 'Britain had guaranteed Belgian neutrality, which Germany breached under the Schlieffen Plan.',
        topicTag: 'British Entry'
      },
      {
        id: 'hwq5',
        text: 'What military defensive reality characterized combat on the Western Front for most of the war?',
        options: ['Stalemate in complex trench systems dominated by machine guns and artillery', 'Rapid cavalry charges across open prairies', 'Continuous naval battles on rivers', 'Aerial dogfights deciding 90% of territory'],
        correctIndex: 0,
        explanation: 'Defensive technology (machine guns, barbed wire, heavy artillery) produced massive trench stalemates.',
        topicTag: 'Trench Warfare'
      }
    ]
  },

  // ================= HISTORY: TOPIC 3 =================
  {
    id: 'hist-decolonization-cold-war',
    subjectId: 'history',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'The Cold War, Decolonization & Nuclear Deterrence',
    subtitle: 'US vs. USSR ideological conflict, proxy wars (Korea, Vietnam), MAD doctrine, and post-colonial independence in Africa and Asia',
    estimatedMinutes: 28,
    learnContent: {
      summary: 'Following World War II, the global geopolitical landscape was defined by the Cold War—a confrontation between democratic capitalism (US/NATO) and Soviet communism (USSR/Warsaw Pact)—accompanied by the historic wave of decolonization in Asia and Africa.',
      keyConcepts: [
        {
          title: 'Ideological Polarization & Containment',
          explanation: 'The US Truman Doctrine aimed to "contain" the spread of Soviet communism through foreign economic aid (Marshall Plan) and military alliances (NATO).'
        },
        {
          title: 'Mutually Assured Destruction (MAD)',
          explanation: 'The accumulation of vast nuclear arsenals deterred direct military conflict between superpowers, shifting conflict into proxy wars (Korean War, Vietnam War, Cuban Missile Crisis).'
        },
        {
          title: 'Decolonization Movements',
          explanation: 'Weakened European colonial empires collapsed, leading to sovereign independence across India (1947), Ghana (1957), Nigeria (1960), and Kenya, often giving rise to the Non-Aligned Movement.'
        }
      ],
      workedExamples: [
        {
          problem: 'Why was the confrontation between the United States and the Soviet Union called a "Cold" war?',
          solution: 'Because the two superpowers never directly engaged in open military combat against each other on the battlefield; nuclear deterrence (MAD) made direct warfare suicidal, so they competed through espionage, propaganda, space race, and proxy conflicts.',
          takeaway: 'Cold refers to the absence of hot direct shooting warfare between the two core superpowers.'
        }
      ],
      commonMistakes: [
        'Believing newly independent nations automatically allied with either the US or USSR; many joined the Non-Aligned Movement led by India, Egypt, and Yugoslavia.',
        'Assuming decolonization was entirely peaceful; nations like Algeria and Vietnam fought protracted anti-colonial wars of liberation.',
        'Thinking the Berlin Wall divided Germany in 1945; the Berlin Wall was erected in 1961 to stop East Germans fleeing to West Berlin.'
      ]
    },
    videos: [
      {
        id: 'v-hist-c1',
        embedId: '9C72ISMF_D0',
        title: 'USA vs USSR Fight! The Cold War: Crash Course World History #39',
        channel: 'CrashCourse',
        duration: '12:16',
        description: 'John Green explores atomic competition, proxy wars, containment, and ideological battlefields.'
      },
      {
        id: 'v-hist-c2',
        embedId: 'T_sGTspaF4Y',
        title: 'Decolonization and Nationalism Triumphant: Crash Course World History #40',
        channel: 'CrashCourse',
        duration: '12:45',
        description: 'How post-WWII European weakness birthed independent nations across Africa and Asia.'
      },
      {
        id: 'v-hist-c3',
        embedId: 'wVqziNV7dGY',
        title: 'The Cuban Missile Crisis - Thirteen Days on the Brink of Nuclear War',
        channel: 'TED-Ed',
        duration: '05:35',
        description: 'Animated documentary showing how JFK and Khrushchev negotiated back from nuclear catastrophe in 1962.'
      }
    ],
    quizQuestions: [
      {
        id: 'hcq1',
        text: 'What military doctrine prevented the US and Soviet Union from launching direct nuclear attacks on each other?',
        options: [
          'Mutually Assured Destruction (MAD)',
          'The Monroe Doctrine',
          'The Domino Theory',
          'First-Strike Exemption'
        ],
        correctIndex: 0,
        explanation: 'MAD guaranteed that any nuclear strike would result in the total destruction of both belligerents.',
        topicTag: 'Nuclear Deterrence'
      },
      {
        id: 'hcq2',
        text: 'What American economic initiative injected over $13 billion into Western European economies to rebuild after WWII and prevent communist influence?',
        options: ['The Marshall Plan', 'The New Deal', 'The Lend-Lease Act', 'The Dawes Plan'],
        correctIndex: 0,
        explanation: 'Secretary of State George Marshall designed the plan to rebuild war-torn European democracies.',
        topicTag: 'Marshall Plan'
      },
      {
        id: 'hcq3',
        text: 'What diplomatic coalition of newly independent Asian and African states refused to align with either Washington or Moscow?',
        options: ['The Non-Aligned Movement (NAM)', 'The Warsaw Pact', 'The League of Nations', 'NATO'],
        correctIndex: 0,
        explanation: 'Initiated at the 1955 Bandung Conference, NAM promoted sovereignty outside the Cold War blocs.',
        topicTag: 'Non-Aligned Movement'
      },
      {
        id: 'hcq4',
        text: 'In what year did the Berlin Wall fall, symbolizing the collapse of Soviet domination over Eastern Europe?',
        options: ['1989', '1945', '1961', '1975'],
        correctIndex: 0,
        explanation: 'Mass protests prompted the opening and dismantling of the Berlin Wall in November 1989.',
        topicTag: 'Fall of Berlin Wall'
      },
      {
        id: 'hcq5',
        text: 'Which African nation became the first south of the Sahara to gain independence from British colonial rule in 1957 under Kwame Nkrumah?',
        options: ['Ghana', 'Nigeria', 'Kenya', 'Zimbabwe'],
        correctIndex: 0,
        explanation: 'Ghana achieved independence in 1957, igniting the pan-African decolonization wave.',
        topicTag: 'African Independence'
      }
    ]
  },

  // ================= GOVERNMENT: TOPIC 1 =================
  {
    id: 'gov-separation-powers',
    subjectId: 'government',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Separation of Powers & Constitutional Checks and Balances',
    subtitle: 'Montesquieu\'s doctrine, executive vs. legislative vs. judicial branches, and preventing tyranny',
    estimatedMinutes: 26,
    learnContent: {
      summary: 'To prevent despotic tyranny, democratic constitutions disperse governmental authority across three distinct, co-equal branches: the Legislature (makes laws), the Executive (enforces laws), and the Judiciary (interprets laws), each possessing checks to restrain the others.',
      keyConcepts: [
        {
          title: 'The Tripartite Separation (Montesquieu)',
          explanation: 'Baron de Montesquieu argued in The Spirit of the Laws that political liberty requires keeping legislative, executive, and judicial powers in distinct hands.'
        },
        {
          title: 'System of Checks and Balances',
          explanation: 'The Executive can veto legislative bills; the Legislature can override vetoes and impeach officials; the Judiciary can declare acts unconstitutional via judicial review.'
        },
        {
          title: 'The Rule of Law',
          explanation: 'No person, president, or prime minister is above the law. All laws must be publicly promulgated, equally enforced, and independently adjudicated.'
        }
      ],
      workedExamples: [
        {
          problem: 'How does the legislature check the power of the executive when the president nominates a Supreme Court justice?',
          solution: 'In a presidential democracy (such as the US or Nigerian constitution), the president has the power to nominate judicial appointments, but the legislature (Senate) must scrutinize and confirm the nominee before they can take office.',
          takeaway: 'Nomination power is balanced by confirmation power.'
        }
      ],
      commonMistakes: [
        'Confusing separation of powers (dividing authority among branches) with federalism (dividing authority between national and regional state governments).',
        'Assuming parliamentary systems feature the same strict separation as presidential systems; in parliamentary models, the executive is fused into the legislature.',
        'Believing judicial review is explicitly written into all older constitutions; in the US, it was established via Marbury v. Madison (1803).'
      ]
    },
    videos: [
      {
        id: 'v25',
        embedId: '0bf3CwYCxXw',
        title: 'Separation of Powers and Checks and Balances: Crash Course Government #3',
        channel: 'CrashCourse',
        duration: '08:31',
        description: 'Craig Benzine explains how legislative, executive, and judicial branches hold vetoes over each other.'
      },
      {
        id: 'v26',
        embedId: 'Ulkw_uNeqs0',
        title: 'How is power divided in the United States government?',
        channel: 'TED-Ed',
        duration: '03:45',
        description: 'Belinda Stutzman breaks down the constitution’s tripartite architecture.'
      },
      {
        id: 'v27',
        embedId: 'mXw-hEB263E',
        title: 'Rule of Law and Constitutional Governance',
        channel: 'Khan Academy',
        duration: '06:12',
        description: 'Why independent judges and constitutional limits prevent democratic backsliding.'
      }
    ],
    quizQuestions: [
      {
        id: 'gq1',
        text: 'Which Enlightenment philosopher articulated the doctrine of the separation of powers into three branches in The Spirit of the Laws?',
        options: ['Baron de Montesquieu', 'Thomas Hobbes', 'Jean-Jacques Rousseau', 'Niccolò Machiavelli'],
        correctIndex: 0,
        explanation: 'Montesquieu argued that dispersing power among three branches protects civic liberty.',
        topicTag: 'Political Theory'
      },
      {
        id: 'gq2',
        text: 'What power allows the judiciary to invalidate laws that violate the constitution?',
        options: ['Judicial Review', 'Executive Privilege', 'Filibuster', 'Gerrymandering'],
        correctIndex: 0,
        explanation: 'Judicial review empowers constitutional courts to examine legislative acts and strike them down if unconstitutional.',
        topicTag: 'Judicial Review'
      },
      {
        id: 'gq3',
        text: 'In a presidential system, who typically serves as head of state and head of government?',
        options: ['The President', 'The Chief Justice', 'The Speaker of the House', 'The Prime Minister'],
        correctIndex: 0,
        explanation: 'In a presidential democracy, the president combines the roles of ceremonial head of state and operational head of government.',
        topicTag: 'System of Government'
      },
      {
        id: 'gq4',
        text: 'What is the primary function of the legislative arm of government?',
        options: ['To debate, draft, and pass legislation (laws)', 'To command the armed forces', 'To adjudicate courtroom civil disputes', 'To manage foreign diplomacy daily'],
        correctIndex: 0,
        explanation: 'The legislature holds law-making power and the power of the purse (authorizing budgets).',
        topicTag: 'Legislature'
      },
      {
        id: 'gq5',
        text: 'What fundamental constitutional principle guarantees that all citizens and government officials are equally accountable to the law?',
        options: ['The Rule of Law', 'Divine Right of Kings', 'Martial Law', 'Anarchy'],
        correctIndex: 0,
        explanation: 'The Rule of Law ensures that laws are publicly promulgated, equally enforced, and independently adjudicated.',
        topicTag: 'Rule of Law'
      }
    ]
  },

  // ================= GOVERNMENT: TOPIC 2 =================
  {
    id: 'gov-electoral-systems',
    subjectId: 'government',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Electoral Systems: First-Past-The-Post vs. Proportional Representation',
    subtitle: 'Majoritarian voting, coalition governments, voter turnout, gerrymandering, and electoral integrity',
    estimatedMinutes: 26,
    learnContent: {
      summary: 'Electoral systems translate citizen votes into legislative seats. First-Past-The-Post (FPTP) favors single-party majorities and geographic accountability, while Proportional Representation (PR) allocates seats based on overall party vote percentage, encouraging multi-party coalitions.',
      keyConcepts: [
        {
          title: 'First-Past-The-Post (Plurality / Winner-Take-All)',
          explanation: 'The candidate with the most votes in a single-member district wins the seat, even if they win less than 50% of the total vote. Leads to Duverger\'s Law (two-party dominance).'
        },
        {
          title: 'Proportional Representation (PR)',
          explanation: 'Parties win legislative seats proportional to their national or regional percentage of votes (e.g. 20% of votes = ~20% of seats), fostering coalition negotiations and minority party representation.'
        },
        {
          title: 'Gerrymandering',
          explanation: 'The deliberate manipulation of legislative district boundaries to grant unfair partisan advantages to a political party (packing and cracking).'
        }
      ],
      workedExamples: [
        {
          problem: 'In a single-member district election, Candidate A gets 38%, Candidate B gets 34%, and Candidate C gets 28%. Under First-Past-The-Post, who wins?',
          solution: 'Candidate A wins the seat entirely because they achieved a plurality (the highest single count), even though 62% of voters voted against Candidate A.',
          takeaway: 'FPTP does not require an absolute majority (50%+1), only a plurality.'
        }
      ],
      commonMistakes: [
        'Confusing plurality (getting the most votes) with absolute majority (getting over 50% of votes).',
        'Believing proportional representation produces unstable governments; many thriving democracies (like Germany and the Netherlands) operate stable coalition cabinets.',
        'Thinking gerrymandering can happen under pure national proportional representation; PR has no single-member geographical districts to manipulate.'
      ]
    },
    videos: [
      {
        id: 'v-gov-e1',
        embedId: 's7tWHJfhiyo',
        title: 'The Problems with First Past the Post Voting Explained',
        channel: 'CGP Grey',
        duration: '06:30',
        description: 'Visual animation explaining spoiler effects, tactical voting, and minority rule under FPTP.'
      },
      {
        id: 'v-gov-e2',
        embedId: 'QT0I-sdoSXU',
        title: 'How Proportional Representation Works (Single Transferable Vote)',
        channel: 'CGP Grey',
        duration: '08:15',
        description: 'Clear geometric demonstration of allocating seats proportionally to match voter preferences.'
      },
      {
        id: 'v-gov-e3',
        embedId: 'bGLRJ12uqzc',
        title: 'Gerrymandering: How drawing lines distorts democracy',
        channel: 'TED-Ed',
        duration: '05:40',
        description: 'Visualizing packing and cracking and how district line manipulation protects incumbents.'
      }
    ],
    quizQuestions: [
      {
        id: 'geq1',
        text: 'Under a First-Past-The-Post (FPTP) voting system, what condition is required for a candidate to win a constituency seat?',
        options: [
          'They must receive more votes than any other individual candidate (a plurality)',
          'They must receive an absolute majority of over 50% of the votes cast',
          'They must pass a constitutional exam',
          'They must receive 100% of the vote'
        ],
        correctIndex: 0,
        explanation: 'FPTP is a plurality system where the single candidate with the most votes wins.',
        topicTag: 'FPTP Rules'
      },
      {
        id: 'geq2',
        text: 'What is the primary advantage of Proportional Representation (PR) over majoritarian systems?',
        options: [
          'The percentage of legislative seats closely matches the actual percentage of votes received by each party',
          'It guarantees only one political party ever exists',
          'It eliminates the need for ballots',
          'Elections only need to be held every 25 years'
        ],
        correctIndex: 0,
        explanation: 'PR ensures fair legislative representation proportional to public vote shares.',
        topicTag: 'Proportional Representation'
      },
      {
        id: 'geq3',
        text: 'What is the political term for redrawing voting district boundaries to deliberately favor one political party?',
        options: ['Gerrymandering', 'Filibuster', 'Cloture', 'Impeachment'],
        correctIndex: 0,
        explanation: 'Gerrymandering manipulates district maps to pack or crack opposing voter blocks.',
        topicTag: 'Gerrymandering'
      },
      {
        id: 'geq4',
        text: 'What political science principle states that single-member district plurality voting systems tend to produce a two-party system?',
        options: ['Duverger\'s Law', 'Moore\'s Law', 'Occam\'s Razor', 'Pareto Principle'],
        correctIndex: 0,
        explanation: 'Maurice Duverger observed that FPTP inherently penalizes third parties via spoiler effects.',
        topicTag: 'Duverger Law'
      },
      {
        id: 'geq5',
        text: 'In a parliamentary democracy with proportional representation, when no single party wins an outright majority, what must be formed?',
        options: ['A coalition government', 'A military dictatorship', 'A monarchy', 'A supreme court council'],
        correctIndex: 0,
        explanation: 'Multiple parties negotiate formal power-sharing agreements to command a parliamentary majority.',
        topicTag: 'Coalition Governments'
      }
    ]
  },

  // ================= GOVERNMENT: TOPIC 3 =================
  {
    id: 'gov-civil-liberties',
    subjectId: 'government',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Fundamental Human Rights, Civil Liberties & Due Process',
    subtitle: 'UDHR principles, freedom of expression, habeas corpus, fair trials, and judicial protection of liberties',
    estimatedMinutes: 26,
    learnContent: {
      summary: 'Civil liberties protect individuals from arbitrary government overreach. Grounded in the Universal Declaration of Human Rights (1948) and constitutional bills of rights, they guarantee fundamental freedoms (speech, conscience, press) and due process of law.',
      keyConcepts: [
        {
          title: 'Civil Liberties vs. Civil Rights',
          explanation: 'Civil liberties are basic negative freedoms that restrain government interference (e.g. freedom of speech and religion). Civil rights are positive protections against discrimination guaranteeing equal access.'
        },
        {
          title: 'Procedural Due Process & Habeas Corpus',
          explanation: 'Habeas corpus prevents unlawful indefinite detention without court charges. Due process guarantees fair trial procedures, legal counsel, and the presumption of innocence.'
        },
        {
          title: 'Balancing Rights Against Public Order',
          explanation: 'Rights are rarely absolute. Free speech does not protect direct incitement of violence, defamation, or immediate danger (e.g., falsely yelling fire in a crowded theater).'
        }
      ],
      workedExamples: [
        {
          problem: 'What is the purpose of a writ of habeas corpus?',
          solution: 'A legal order demanding that a detained person be brought before a judge or court so that the lawfulness of their imprisonment can be verified. If the state lacks lawful charges, the prisoner must be released.',
          takeaway: 'Habeas corpus is the foundational legal protection against arbitrary police detention.'
        }
      ],
      commonMistakes: [
        'Believing freedom of speech protects citizens from consequences from private employers or social media companies; constitutional rights restrain the state.',
        'Assuming fundamental human rights can be voted away by simple majority vote; constitutional rights exist specifically to protect minorities against the tyranny of the majority.',
        'Confusing the presumption of innocence with proof of innocence; the burden of proof rests entirely on the prosecution.'
      ]
    },
    videos: [
      {
        id: 'v-gov-r1',
        embedId: 'kbwsF-AecZk',
        title: 'Civil Liberties and the Bill of Rights: Crash Course Government #23',
        channel: 'CrashCourse',
        duration: '08:42',
        description: 'Craig Benzine explains fundamental liberties, selective incorporation, and substantive due process.'
      },
      {
        id: 'v-gov-r2',
        embedId: '54xflsP7m1Q',
        title: 'What are the universal human rights? - Benedetta Berti',
        channel: 'TED-Ed',
        duration: '04:47',
        description: 'History and universal principles of the 1948 United Nations Universal Declaration of Human Rights.'
      },
      {
        id: 'v-gov-r3',
        embedId: 'Y9jA0y3N4aY',
        title: 'Due Process of Law and the Right to a Fair Trial',
        channel: 'Khan Academy',
        duration: '07:18',
        description: 'Procedural protections, right to legal counsel, search warrants, and avoiding self-incrimination.'
      }
    ],
    quizQuestions: [
      {
        id: 'gcl1',
        text: 'What ancient legal writ safeguards individuals against arbitrary unlawful imprisonment by requiring detainees to be brought before a court?',
        options: ['Habeas corpus', 'Subpoena duces tecum', 'Ex post facto', 'Certiorari'],
        correctIndex: 0,
        explanation: 'Habeas corpus (Latin for "you shall have the body") prevents unlawful police detention.',
        topicTag: 'Habeas Corpus'
      },
      {
        id: 'gcl2',
        text: 'In what year was the landmark Universal Declaration of Human Rights (UDHR) adopted by the United Nations General Assembly?',
        options: ['1948', '1776', '1919', '2001'],
        correctIndex: 0,
        explanation: 'Chaired by Eleanor Roosevelt, the UDHR was adopted in 1948 after World War II.',
        topicTag: 'UDHR History'
      },
      {
        id: 'gcl3',
        text: 'What legal principle dictates that an accused individual is considered innocent until proven guilty beyond a reasonable doubt?',
        options: ['Presumption of innocence', 'Double jeopardy', 'Eminent domain', 'Judicial activism'],
        correctIndex: 0,
        explanation: 'The burden of proof rests entirely on the government prosecution.',
        topicTag: 'Due Process'
      },
      {
        id: 'gcl4',
        text: 'Can constitutional free speech be legally restricted by government authorities?',
        options: [
          'Yes, in cases of direct incitement of imminent lawless action, defamation, or genuine security threats',
          'No, free speech has never had any legal limits in any country',
          'Only during leap years',
          'Only if the president gives an executive order'
        ],
        correctIndex: 0,
        explanation: 'Courts recognize narrow limits on speech that incites violence or causes direct harm.',
        topicTag: 'Speech Limits'
      },
      {
        id: 'gcl5',
        text: 'What is the constitutional protection that prevents an individual from being tried twice for the exact same crime after an acquittal?',
        options: ['Double jeopardy protection', 'Habeas corpus', 'Self-incrimination privilege', 'Plea bargaining'],
        correctIndex: 0,
        explanation: 'The protection against double jeopardy prevents repeated prosecutions for the same offense.',
        topicTag: 'Double Jeopardy'
      }
    ]
  },

  // ================= GEOGRAPHY: TOPIC 1 =================
  {
    id: 'geo-plate-tectonics',
    subjectId: 'geography',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Plate Tectonics, Earthquakes & Volcanism',
    subtitle: 'Lithospheric plates, mantle convection, convergent/divergent boundaries, seismic waves, and the Pacific Ring of Fire',
    estimatedMinutes: 28,
    learnContent: {
      summary: 'Earth\'s outer rigid crust and upper mantle (lithosphere) is fractured into tectonic plates that float and move atop the semi-fluid asthenosphere powered by mantle convection currents, shaping continents, ocean trenches, earthquakes, and volcanic arcs.',
      keyConcepts: [
        {
          title: 'Three Types of Plate Boundaries',
          explanation: 'Divergent (plates pull apart, forming mid-ocean ridges and rift valleys); Convergent (plates collide, forming subduction trenches and mountain ranges); Transform (plates grind horizontally, causing severe earthquakes).'
        },
        {
          title: 'Subduction Zones & The Ring of Fire',
          explanation: 'When dense oceanic crust collides with continental crust, the oceanic slab sinks into the mantle (subduction), melting into magma that rises to fuel volcanic arcs around the Pacific Basin.'
        },
        {
          title: 'Seismic Waves (P-waves and S-waves)',
          explanation: 'Primary waves (P-waves) are fast longitudinal waves that travel through solids and liquids; Secondary waves (S-waves) are slower transverse shear waves that travel only through solids.'
        }
      ],
      workedExamples: [
        {
          problem: 'How did scientists discover that Earth\'s outer core is molten liquid rather than solid rock?',
          solution: 'By analyzing earthquake seismograms globally. S-waves cannot travel through liquids and produce a complete "S-wave shadow zone" on the opposite side of Earth from an earthquake epicenter, proving the outer core is liquid iron-nickel.',
          takeaway: 'Seismic wave velocity and refraction map Earth\'s deep interior.'
        }
      ],
      commonMistakes: [
        'Believing tectonic plates float on boiling liquid magma; the asthenosphere is solid rock that deforms plastically under extreme pressure and heat.',
        'Confusing the Richter scale / moment magnitude (which measures total seismic energy released at the focus) with the Mercalli scale (which measures surface damage observed by humans).',
        'Thinking earthquakes only occur on plate boundaries; intraplate earthquakes can occur on ancient relict faults.'
      ]
    },
    videos: [
      {
        id: 'v-geo-t1',
        embedId: 'ryrXAGY1VJr',
        title: 'Plate Tectonics Explained: Boundaries, Subduction & Drift',
        channel: 'CrashCourse Geography',
        duration: '11:15',
        description: 'Explore Earth\'s crust, convective heat engines, seafloor spreading, and mountain building.'
      },
      {
        id: 'v-geo-t2',
        embedId: 'e7ho6z32yyo',
        title: 'What causes earthquakes? - Anita Foeman',
        channel: 'TED-Ed',
        duration: '04:22',
        description: 'Fault lines, elastic rebound theory, seismic wave propagation, and fault rupture.'
      },
      {
        id: 'v-geo-t3',
        embedId: '1-HwPR_4mP4',
        title: 'Volcanoes 101 | National Geographic',
        channel: 'National Geographic',
        duration: '04:59',
        description: 'Magma chambers, shield volcanoes, stratovolcanoes, pyroclastic flows, and the Pacific Ring of Fire.'
      }
    ],
    quizQuestions: [
      {
        id: 'gtq1',
        text: 'At what type of tectonic boundary do two plates pull apart from each other, creating new oceanic crust at mid-ocean ridges?',
        options: ['Divergent boundary', 'Convergent boundary', 'Transform fault', 'Subduction zone'],
        correctIndex: 0,
        explanation: 'Divergent boundaries pull apart, allowing rising mantle magma to cool into new seafloor.',
        topicTag: 'Plate Boundaries'
      },
      {
        id: 'gtq2',
        text: 'Which seismic waves are the fastest and can travel through both solid rock and liquid layers inside Earth?',
        options: ['Primary waves (P-waves)', 'Secondary waves (S-waves)', 'Rayleigh surface waves', 'Love waves'],
        correctIndex: 0,
        explanation: 'P-waves are compressional waves that propagate through all states of matter.',
        topicTag: 'Seismic Waves'
      },
      {
        id: 'gtq3',
        text: 'What major horseshoe-shaped geological basin circles the Pacific Ocean, containing over 75% of Earth\'s active volcanoes?',
        options: ['The Pacific Ring of Fire', 'The Mid-Atlantic Ridge', 'The Great Rift Valley', 'The Mariana Trench'],
        correctIndex: 0,
        explanation: 'The Ring of Fire is formed by dense oceanic plates subducting beneath continental margins.',
        topicTag: 'Ring of Fire'
      },
      {
        id: 'gtq4',
        text: 'What famous transform fault in California marks the horizontal sliding boundary between the Pacific and North American plates?',
        options: ['The San Andreas Fault', 'The New Madrid Fault', 'The Anatolian Fault', 'The Alpine Fault'],
        correctIndex: 0,
        explanation: 'The San Andreas Fault is a classic strike-slip transform boundary.',
        topicTag: 'Transform Faults'
      },
      {
        id: 'gtq5',
        text: 'What thermal mechanism inside Earth\'s mantle drives the horizontal movement of tectonic plates?',
        options: ['Mantle convection currents', 'Lunar tidal gravity', 'Solar radiation absorption', 'Ocean currents'],
        correctIndex: 0,
        explanation: 'Convective heat circulation transfers thermal energy from the core upward, driving plate motion.',
        topicTag: 'Mantle Convection'
      }
    ]
  },

  // ================= GEOGRAPHY: TOPIC 2 =================
  {
    id: 'geo-climate-biomes',
    subjectId: 'geography',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Atmospheric Circulation, Weather & Global Biomes',
    subtitle: 'Hadley cells, Coriolis effect, rainforests, savannas, deserts, tundra, and the Köppen climate system',
    estimatedMinutes: 28,
    learnContent: {
      summary: 'Unequal solar heating across Earth\'s spherical surface drives global atmospheric circulation cells (Hadley, Ferrel, Polar) and the Coriolis effect, establishing distinct global climate zones and ecological biomes.',
      keyConcepts: [
        {
          title: 'Hadley Cells & The Intertropical Convergence Zone (ITCZ)',
          explanation: 'Intense equatorial heating causes warm air to rise, cool, and condense into heavy daily rainfall (tropical rainforests). The dry air descends around 30° North and South, creating Earth\'s major desert belts (Sahara, Kalahari).'
        },
        {
          title: 'The Coriolis Effect',
          explanation: 'Earth\'s eastward rotation deflects moving winds and ocean currents to the right in the Northern Hemisphere and to the left in the Southern Hemisphere.'
        },
        {
          title: 'Global Biomes and Vegetation Adaptations',
          explanation: 'Biomes (rainforest, savanna, Mediterranean, temperate deciduous, taiga/boreal, tundra) are governed by average annual temperature and precipitation regimes.'
        }
      ],
      workedExamples: [
        {
          problem: 'Why are the world\'s largest subtropical hot deserts located near 30° latitude rather than directly at the equator?',
          solution: 'At the equator, intense rising air causes continuous convective precipitation. As that air moves poleward at high altitude, it cools, loses moisture, and descends at ~30° latitude as high-pressure, dry air that inhibits cloud formation.',
          takeaway: 'Descending air creates dry, arid high-pressure desert zones.'
        }
      ],
      commonMistakes: [
        'Confusing weather (day-to-day atmospheric fluctuations) with climate (long-term statistical weather averages over 30+ years).',
        'Assuming deserts are defined purely by high temperature; deserts are defined strictly by low precipitation (<250 mm/year); Antarctica is a polar desert.',
        'Believing seasons are caused by Earth\'s changing distance from the sun; seasons are caused by Earth\'s permanent 23.5° axial tilt.'
      ]
    },
    videos: [
      {
        id: 'v-geo-c1',
        embedId: '7fd03fBR060',
        title: 'Global Atmospheric Circulation: Hadley, Ferrel, and Polar Cells',
        channel: 'CrashCourse Geography',
        duration: '10:45',
        description: 'How atmospheric pressure belts and the Coriolis effect create trade winds and biomes.'
      },
      {
        id: 'v-geo-c2',
        embedId: 'mZ7bG4ACtTg',
        title: 'The Coriolis Effect Explained with a Merry-Go-Round',
        channel: 'National Geographic',
        duration: '03:15',
        description: 'Simple visual experiment showing how rotating reference frames bend wind trajectories.'
      },
      {
        id: 'v-geo-c3',
        embedId: 'dTaWsZ5uU4U',
        title: 'Major Biomes of the World: Rainforests to Tundra',
        channel: 'MooMooMath and Science',
        duration: '08:30',
        description: 'Tour of tropical rainforests, grasslands, temperate forests, taiga, and permafrost tundra.'
      }
    ],
    quizQuestions: [
      {
        id: 'gcq1',
        text: 'What primary atmospheric mechanism causes the high concentration of deserts around 30° North and South latitudes?',
        options: [
          'High-pressure descending dry air from the Hadley circulation cell',
          'Intense monsoonal ocean currents',
          'Heavy daily cloud cover blocking solar rays',
          'Frequent volcanic ash clouds'
        ],
        correctIndex: 0,
        explanation: 'Descending dry air in the subtropics suppresses cloud formation and rainfall.',
        topicTag: 'Hadley Cells'
      },
      {
        id: 'gcq2',
        text: 'Which biome is characterized by permanently frozen subsoil (permafrost) and treeless vegetation?',
        options: ['Tundra', 'Tropical Savanna', 'Taiga / Boreal forest', 'Chaparral'],
        correctIndex: 0,
        explanation: 'Tundra regions have permafrost that prevents deep tree root systems from growing.',
        topicTag: 'Biomes'
      },
      {
        id: 'gcq3',
        text: 'Due to the Coriolis effect, in which direction are moving wind currents deflected in the Northern Hemisphere?',
        options: ['To the right', 'To the left', 'Directly straight upward', 'Directly downward into the soil'],
        correctIndex: 0,
        explanation: 'Earth\'s rotation deflects paths to the right in the North and to the left in the South.',
        topicTag: 'Coriolis Effect'
      },
      {
        id: 'gcq4',
        text: 'What is the primary scientific reason for Earth experiencing distinct seasons throughout the year?',
        options: [
          'Earth\'s permanent 23.5-degree axial tilt as it orbits the sun',
          'Changing distance from the sun during elliptical orbit',
          'Periodic fluctuations in solar flare output',
          'Ocean tidal friction'
        ],
        correctIndex: 0,
        explanation: 'Axial tilt alters the angle and duration of solar insolation throughout the orbit.',
        topicTag: 'Seasons'
      },
      {
        id: 'gcq5',
        text: 'What is the low-pressure belt around the equator where Northeast and Southeast trade winds converge called?',
        options: ['Intertropical Convergence Zone (ITCZ)', 'The Horse Latitudes', 'The Polar Front', 'The Prime Meridian'],
        correctIndex: 0,
        explanation: 'The ITCZ is characterized by rising moist air, frequent thunderstorms, and calm doldrums.',
        topicTag: 'ITCZ'
      }
    ]
  },

  // ================= GEOGRAPHY: TOPIC 3 =================
  {
    id: 'geo-urbanization-demographics',
    subjectId: 'geography',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Demographics, Population Pyramids & Urban Settlement',
    subtitle: 'Demographic Transition Model (DTM), birth/death rates, megacities, rural-to-urban migration, and sustainable planning',
    estimatedMinutes: 26,
    learnContent: {
      summary: 'Human geography investigates how populations grow, migrate, and organize across spatial landscapes. The Demographic Transition Model (DTM) tracks modernization from high birth/death rates to low fertility aging societies.',
      keyConcepts: [
        {
          title: 'The Demographic Transition Model (DTM)',
          explanation: 'Stage 1 (high birth/high death); Stage 2 (death rates plummet due to sanitation and medicine while birth rates stay high, population explodes); Stage 3 (birth rates decline); Stage 4 (low birth/low death stabilized).'
        },
        {
          title: 'Population Pyramids',
          explanation: 'Age-sex cohort diagrams. Expansive broad-based pyramids indicate youthful rapidly growing populations; constrictive narrow-based pyramids indicate aging, shrinking populations.'
        },
        {
          title: 'Urban Pull Factors & Megacities',
          explanation: 'Cities of over 10 million inhabitants (megacities) like Tokyo, Delhi, and Lagos expand rapidly driven by rural poverty push factors and urban economic pull factors.'
        }
      ],
      workedExamples: [
        {
          problem: 'A country has a population pyramid with a very narrow base and a wide top (ages 60+). What demographic challenges will this society face?',
          solution: 'This indicates Stage 4/5 of the DTM with below-replacement fertility. The society will face an aging population, shrinking labor workforce, rising dependency ratio, and strain on healthcare and pensions.',
          takeaway: 'Population age structure dictates future economic dependency ratios.'
        }
      ],
      commonMistakes: [
        'Believing high birth rates alone drive population explosions; rapid growth occurs in Stage 2 because death rates drop dramatically while birth rates remain high.',
        'Confusing population density (people per square kilometer) with total population size.',
        'Overlooking push vs. pull factors in voluntary and forced human migration.'
      ]
    },
    videos: [
      {
        id: 'v-geo-d1',
        embedId: '2b3xG_YjgvI',
        title: 'The Demographic Transition Model Explained',
        channel: 'CrashCourse Geography',
        duration: '11:20',
        description: 'How industrialization, sanitation, female education, and healthcare transform birth and death rates.'
      },
      {
        id: 'v-geo-d2',
        embedId: 'RLmKfXwWQtE',
        title: 'Population Pyramids: How to Read Age-Sex Cohorts',
        channel: 'Khan Academy',
        duration: '08:15',
        description: 'Analyzing expanding, stationary, and contracting population structures with real country data.'
      },
      {
        id: 'v-geo-d3',
        embedId: 'fKnAJCSPEWQ',
        title: 'Megacities: The Future of Global Urban Living',
        channel: 'BBC Ideas',
        duration: '06:10',
        description: 'Housing density, rapid transit, urban heat island effects, and sustainable city engineering.'
      }
    ],
    quizQuestions: [
      {
        id: 'gdq1',
        text: 'In which stage of the Demographic Transition Model (DTM) does a rapid population explosion occur due to falling death rates while birth rates stay high?',
        options: ['Stage 2', 'Stage 1', 'Stage 4', 'Stage 5'],
        correctIndex: 0,
        explanation: 'In Stage 2, improved medicine and sanitation lower mortality while traditional high birth rates persist.',
        topicTag: 'DTM Stages'
      },
      {
        id: 'gdq2',
        text: 'What does a wide-based triangular population pyramid indicate about a country\'s demographic profile?',
        options: [
          'High birth rates and a young, rapidly expanding population',
          'Low birth rates and a rapidly aging society',
          'Zero population growth',
          'More elderly citizens than children'
        ],
        correctIndex: 0,
        explanation: 'A broad base represents high birth rates and high youth proportions.',
        topicTag: 'Population Pyramids'
      },
      {
        id: 'gdq3',
        text: 'By international urban geography standards, what minimum population defines a "megacity"?',
        options: ['10 million residents', '1 million residents', '50 million residents', '500,000 residents'],
        correctIndex: 0,
        explanation: 'A megacity is defined as a metropolitan agglomeration with over 10 million inhabitants.',
        topicTag: 'Megacities'
      },
      {
        id: 'gdq4',
        text: 'Which of the following is considered an urban "pull factor" attracting rural migrants to metropolitan cities?',
        options: ['Access to diversified employment opportunities, universities, and medical facilities', 'Severe crop failure and drought in the village', 'War and conflict in rural provinces', 'Lack of rural electrical infrastructure'],
        correctIndex: 0,
        explanation: 'Pull factors are positive attributes of a destination that attract migrants.',
        topicTag: 'Migration Factors'
      },
      {
        id: 'gdq5',
        text: 'What is the demographic metric that measures the ratio of economically dependent individuals (children and retirees) relative to the working-age population?',
        options: ['Dependency Ratio', 'Gini Coefficient', 'Fertility Replacement Index', 'Infant Mortality Rate'],
        correctIndex: 0,
        explanation: 'The dependency ratio compares dependent young and old age brackets against active workers.',
        topicTag: 'Dependency Ratio'
      }
    ]
  }
];
