import { GradeLevel, Question, SubjectId, Topic } from '../types';
import { SUBJECT_CURATED_VIDEOS } from './subjectCuratedVideos';
import { MATH_TOPICS } from './curriculumData/mathTopics';
import { SCIENCE_TOPICS } from './curriculumData/scienceTopics';
import { HUMANITIES_TOPICS } from './curriculumData/humanitiesTopics';
import { COMMERCIAL_TOPICS } from './curriculumData/commercialTopics';
import { TECH_AND_CIVIC_TOPICS } from './curriculumData/techTopics';
import { APPLIED_TOPICS } from './curriculumData/appliedTopics';
import { STAGE_CURRICULUM_DATA } from './curriculumData/stageTopics';
import { getTopicsForGradeAndSubject, gradeContent } from './gradeContent';

export { gradeContent, getTopicsForGradeAndSubject };

export const CURRICULUM_TOPICS: Topic[] = [
  ...MATH_TOPICS,
  ...SCIENCE_TOPICS,
  ...HUMANITIES_TOPICS,
  ...COMMERCIAL_TOPICS,
  ...TECH_AND_CIVIC_TOPICS,
  ...APPLIED_TOPICS,
];

export function getGradeStage(grade: GradeLevel): 'primary' | 'junior' | 'senior' {
  const gradeNum = parseInt(grade.replace('grade-', ''), 10) || 10;
  if (gradeNum <= 5) return 'primary';
  if (gradeNum <= 8) return 'junior';
  if (gradeNum === 9) return 'junior';
  return 'senior';
}

// Helper to retrieve topics strictly by subject and grade level
// Follows strict GRADE -> SUBJECT -> 3 TOPICS -> 3 VIDEOS -> QUICK INFO -> QUIZ
export function getTopicsForSubjectAndGrade(subjectId: SubjectId, grade: GradeLevel): Topic[] {
  return getTopicsForGradeAndSubject(grade, subjectId);
}

// Dynamically generate structured topic for any subject and grade with 3 curated YouTube videos and 5 quiz questions
export function generateDynamicTopicForSubjectAndGrade(subjectId: SubjectId, grade: GradeLevel, variantIndex = 1): Topic {
  const stage = getGradeStage(grade);
  const gradeNum = parseInt(grade.replace('grade-', ''), 10) || 10;

  // 1. Check if we have handcrafted stage curriculum metadata in STAGE_CURRICULUM_DATA
  const stageMeta = STAGE_CURRICULUM_DATA[subjectId]?.[stage]?.[variantIndex - 1];
  if (stageMeta) {
    return {
      id: `${subjectId}-${grade}-stage-topic-${variantIndex}`,
      subjectId,
      gradeLevels: [grade],
      title: stageMeta.title,
      subtitle: stageMeta.subtitle,
      estimatedMinutes: stage === 'primary' ? 15 : stage === 'junior' ? 20 : 25,
      learnContent: {
        summary: stageMeta.summary,
        keyConcepts: stageMeta.keyConcepts,
        workedExamples: [
          {
            problem: stageMeta.exampleProblem,
            solution: stageMeta.exampleSolution,
            takeaway: stageMeta.exampleTakeaway
          }
        ],
        commonMistakes: stageMeta.commonMistakes
      },
      videos: SUBJECT_CURATED_VIDEOS[subjectId] || SUBJECT_CURATED_VIDEOS['math'] || [],
      quizQuestions: stageMeta.questions.map((q, idx) => ({
        id: `q-${subjectId}-${grade}-${variantIndex}-${idx + 1}`,
        text: q.text,
        options: q.options,
        correctIndex: q.correctIndex,
        explanation: q.explanation,
        topicTag: q.topicTag
      }))
    };
  }

  // 2. Stage-appropriate fallback mapping for any other subjects
  const stageTitles: Partial<
    Record<
      SubjectId,
      {
        primary: { title: string; subtitle: string; concept: string };
        junior: { title: string; subtitle: string; concept: string };
        senior: { title: string; subtitle: string; concept: string };
      }
    >
  > = {
    'math': {
      primary: {
        title: 'Foundational Numbers, Counting & Simple Shapes',
        subtitle: 'Addition, subtraction, simple fractions, and 2D shapes',
        concept: 'Numbers help us count objects, tell time, and measure things in everyday life.'
      },
      junior: {
        title: 'Integers, Pre-Algebra & Proportional Reasoning',
        subtitle: 'Directed numbers, ratio calculations, and linear equations',
        concept: 'Algebraic equations allow us to solve for unknown quantities using balanced steps.'
      },
      senior: {
        title: 'Advanced Algebraic Expressions & Functions',
        subtitle: 'Polynomial operations, rational exponents, and coordinate graphing',
        concept: 'Algebraic reasoning provides the foundational symbolic framework for modern quantitative problem solving.'
      }
    },
    'english-lang': {
      primary: {
        title: 'Phonics, Vocabulary Building & Simple Sentences',
        subtitle: 'Nouns, action verbs, punctuation marks, and story reading',
        concept: 'Using capital letters and periods makes our sentences easy and fun to read.'
      },
      junior: {
        title: 'Grammar Mechanics, Clauses & Paragraph Writing',
        subtitle: 'Sentence structure, active vs passive voice, and reading comprehension',
        concept: 'Well-structured paragraphs connect ideas logically with clear topic sentences.'
      },
      senior: {
        title: 'Expository Writing & Advanced Synthesis',
        subtitle: 'Crafting persuasive thesis statements and evidence integration',
        concept: 'Effective written expression demands both syntactic clarity and logical coherence between arguments.'
      }
    },
    'english-lit': {
      primary: {
        title: 'Fables, Folktales & Moral Stories',
        subtitle: 'Characters, settings, story plots, and reading aloud',
        concept: 'Stories and poems teach us empathy, imagination, and important life lessons.'
      },
      junior: {
        title: 'Prose, Poetry Elements & Drama Fundamentals',
        subtitle: 'Metaphors, similes, character arcs, and stage dialogue',
        concept: 'Literary devices evoke vivid sensory imagery and convey deeper emotional meaning.'
      },
      senior: {
        title: 'Dramatic Analysis, Motifs & Character Development',
        subtitle: 'Tragic flaws, historical context, symbolism, and figurative language in major plays',
        concept: 'Literary works mirror societal values, human psychology, and philosophical dilemmas through narrative craft.'
      }
    },
    'biology': {
      primary: {
        title: 'Living Things, Plants & Animal Habitats',
        subtitle: 'Parts of a plant, animal classification, and healthy living',
        concept: 'Living organisms grow, breathe, need nutrition, and adapt to their habitats.'
      },
      junior: {
        title: 'Cell Biology, Organ Systems & Ecological Food Chains',
        subtitle: 'Microscopic organelles, human digestion, and energy pyramids',
        concept: 'All life is organized hierarchically from microscopic cells to complex ecosystems.'
      },
      senior: {
        title: 'Mendelian Genetics & DNA Inheritance Patterns',
        subtitle: 'Punnett squares, monohybrid crosses, and molecular genetics',
        concept: 'Living organisms transmit genetic instructions across generations using DNA codes.'
      }
    },
    'chemistry': {
      primary: {
        title: 'Solids, Liquids & Everyday Materials',
        subtitle: 'Melting ice, dissolving sugar, and properties of wood, glass, and metal',
        concept: 'Matter changes state when heated or cooled, and materials have unique physical properties.'
      },
      junior: {
        title: 'Elements, Compounds & Separation Techniques',
        subtitle: 'Filtration, distillation, the periodic table, and pH acids/bases',
        concept: 'Chemical elements bond together to form compounds with entirely new properties.'
      },
      senior: {
        title: 'Atomic Structure & Periodic Table Periodicity',
        subtitle: 'Electronegativity, ionization energy trends, and valence shell configurations',
        concept: 'The electronic configuration of atoms determines how elements bond and interact chemically.'
      }
    },
    'physics': {
      primary: {
        title: 'Pushes, Pulls, Light & Sounds Around Us',
        subtitle: 'Forces, friction, shadows, reflections, and vibrations',
        concept: 'Forces make objects move or stop, and vibrations travel as sound to our ears.'
      },
      junior: {
        title: 'Speed, Energy Forms & Heat Transfer',
        subtitle: 'Speed = distance / time, kinetic energy, conduction, and convection',
        concept: 'Energy cannot be created or destroyed, only transferred from one form to another.'
      },
      senior: {
        title: 'Wave Mechanics, Sound & Electromagnetic Radiation',
        subtitle: 'Frequency, wavelength, Doppler effect, and the electromagnetic spectrum',
        concept: 'Waves transfer energy from one location to another through vibrations without transferring matter.'
      }
    },
    'economics': {
      primary: {
        title: 'Needs vs Wants, Money & Saving',
        subtitle: 'Coins, paper currency, saving in banks, and buying goods',
        concept: 'Making smart choices between things we need and things we want helps us save money.'
      },
      junior: {
        title: 'Scarcity, Choice & Market Demand and Supply',
        subtitle: 'Opportunity cost, producers, consumers, and price determination',
        concept: 'Limited resources mean individuals and societies must make decisions with opportunity costs.'
      },
      senior: {
        title: 'Fiscal Policy, Taxation & Macroeconomic Stability',
        subtitle: 'Government spending, national budget deficits, and inflation controls',
        concept: 'Governments use fiscal levers to smooth economic business cycles and promote sustainable employment.'
      }
    },
    'government': {
      primary: {
        title: 'Community Rules, Fairness & Good Citizenship',
        subtitle: 'Helping others, honesty, school rules, and community helpers',
        concept: 'Rules help people live and work together in peace and fairness.'
      },
      junior: {
        title: 'Forms of Government & Democratic Principles',
        subtitle: 'Democracy, monarchy, the three arms of government, and citizen rights',
        concept: 'Separation of powers ensures no single branch of government holds absolute authority.'
      },
      senior: {
        title: 'Constitutional Rights, Civil Liberties & Electoral Systems',
        subtitle: 'First-past-the-post vs proportional representation and judicial protection of rights',
        concept: 'Democratic constitutions balance individual freedoms against collective social order.'
      }
    },
    'history': {
      primary: {
        title: 'Family Roots & Inventions of the Past',
        subtitle: 'Early tools, the wheel, sailing ships, and historical stories',
        concept: 'Looking back at how people lived long ago helps us appreciate modern inventions.'
      },
      junior: {
        title: 'Ancient Empires, Trade Routes & Colonization',
        subtitle: 'Civilizations, cultural heritage, and independence movements',
        concept: 'Historical events and migrations shape the culture and borders of our world today.'
      },
      senior: {
        title: 'The Industrial Revolution & Modern Global Economic Shifts',
        subtitle: 'Steam power, urbanization, labor movements, and global technological acceleration',
        concept: 'Technological transformations in energy and production profoundly reshape social and economic structures.'
      }
    },
    'geography': {
      primary: {
        title: 'Maps, Cardinal Directions & Continents',
        subtitle: 'North, South, East, West, the seven continents, oceans, and weather',
        concept: 'Maps use symbols and compass directions to guide us around planet Earth.'
      },
      junior: {
        title: 'Map Scale, Landforms & Weather Systems',
        subtitle: 'Contour lines, rivers, mountains, weathering, and climate zones',
        concept: 'Natural forces of water, wind, and tectonics constantly shape Earth’s topography.'
      },
      senior: {
        title: 'Plate Tectonics, Earthquakes & Volcanic Geomorphology',
        subtitle: 'Continental drift, tectonic boundaries, fault lines, and seismic waves',
        concept: 'The dynamic movement of Earth’s lithospheric plates continuously sculpts continents and ocean basins.'
      }
    },
    'computer-science': {
      primary: {
        title: 'Computer Basics: Mouse, Keyboard & Monitor',
        subtitle: 'Hardware, typing skills, step-by-step commands, and internet safety',
        concept: 'Computers follow step-by-step instructions called programs to perform helpful tasks.'
      },
      junior: {
        title: 'Algorithms, Flowcharts & Binary Logic',
        subtitle: 'Input-Process-Output, pseudocode, bits and bytes, and intro to Python',
        concept: 'Breaking complex problems down into step-by-step algorithmic sequences is the core of coding.'
      },
      senior: {
        title: 'Data Structures: Arrays, Linked Lists & Binary Search Trees',
        subtitle: 'Memory representation, pointer traversals, and abstract data types',
        concept: 'Selecting the optimal data structure drastically optimizes both algorithmic execution time and memory footprint.'
      }
    },
    'accounting': {
      primary: {
        title: 'Pocket Money Records & Simple Savings',
        subtitle: 'Tracking income, gifts, expenses, and counting change accurately',
        concept: 'Recording money received and spent helps you know exactly how much you have saved.'
      },
      junior: {
        title: 'Bookkeeping Fundamentals & Ledgers',
        subtitle: 'Double-entry bookkeeping, debit and credit rules, and sales receipts',
        concept: 'Every transaction involves a value given and a value received, keeping accounts in balance.'
      },
      senior: {
        title: 'The Balance Sheet Equation & Financial Statements',
        subtitle: 'Assets = Liabilities + Owner’s Equity, and double-entry recording',
        concept: 'Every financial transaction has dual financial consequences that maintain fundamental accounting equality.'
      }
    },
    'agricultural-science': {
      primary: {
        title: 'School Gardens & Caring for Farm Animals',
        subtitle: 'Planting seeds, watering vegetables, and animal care basics',
        concept: 'Agriculture provides fresh food, vegetables, fruits, and dairy for healthy living.'
      },
      junior: {
        title: 'Crop Classification, Soils & Livestock Management',
        subtitle: 'Cereals, legumes, soil compost, and animal feed nutrients',
        concept: 'Sustainable crop rotation and soil enrichment maintain agricultural productivity.'
      },
      senior: {
        title: 'Soil Science, Nutrient Cycles & Crop Husbandry',
        subtitle: 'Nitrogen-phosphorus-potassium (NPK) ratios, soil pH, and sustainable irrigation',
        concept: 'Healthy soil biology and responsible stewardship directly determine global food security.'
      }
    },
    'further-math': {
      primary: {
        title: 'Patterns, Symmetry & Math Puzzles',
        subtitle: 'Number sequences, geometric tiling, tangrams, and logic riddles',
        concept: 'Recognizing repeating visual and numerical patterns develops sharp problem-solving instincts.'
      },
      junior: {
        title: 'Set Theory, Indices & Geometric Theorems',
        subtitle: 'Venn diagrams, laws of exponents, and angle properties of polygons',
        concept: 'Rigorous mathematical sets and geometric deductions build proof-based reasoning.'
      },
      senior: {
        title: 'Matrices, Determinants & Systems of Linear Equations',
        subtitle: 'Matrix multiplication, inverse calculations, and Cramer’s rule solutions',
        concept: 'Matrix transformations provide the mathematical engine for computer graphics, physics, and data science.'
      }
    },
    'french': {
      primary: {
        title: 'Bonjour! Salutations, Chiffres et Couleurs',
        subtitle: 'Greetings, numbers 1–20, colors, and introducing yourself in French',
        concept: 'Learning polite French greetings and everyday words opens the door to a new language.'
      },
      junior: {
        title: 'Verbes Présents, Famille et Vocabulaire Quotidien',
        subtitle: 'Regular -er verbs, talking about hobbies, asking directions, and telling time',
        concept: 'Conjugating present-tense verbs allows you to form clear conversational French sentences.'
      },
      senior: {
        title: 'Les Verbes au Passé Composé et à l’Imparfait',
        subtitle: 'Choosing between completed past actions and descriptive past states in French',
        concept: 'Distinguishing between snapshot actions and continuous past backgrounds is essential for storytelling in French.'
      }
    },
    'commerce': {
      primary: {
        title: 'Community Shops, Markets & Honest Trade',
        subtitle: 'Buying, selling, customer courtesy, and how goods reach our homes',
        concept: 'Stores and markets allow people to buy the food, clothes, and supplies they need.'
      },
      junior: {
        title: 'Wholesale, Retail & Trade Documents',
        subtitle: 'Supply chains, receipts, invoices, advertising, and consumer protection',
        concept: 'Wholesalers and retailers bridge the gap between factories and consumers.'
      },
      senior: {
        title: 'Channels of Distribution & E-Commerce Infrastructure',
        subtitle: 'Wholesalers, retailers, direct-to-consumer logistics, and commercial documents',
        concept: 'Commerce bridges the logistical and temporal gap between product manufacturing and end-consumer fulfillment.'
      }
    },
    'civic-education': {
      primary: {
        title: 'National Pride, Symbols & Living in Harmony',
        subtitle: 'The flag, anthem, respect for elders, and honesty in community',
        concept: 'Respecting others and caring for our school and neighborhood makes our community strong.'
      },
      junior: {
        title: 'Constitution, Human Rights & Civic Duties',
        subtitle: 'Fundamental human rights, voting, the rule of law, and obeying regulations',
        concept: 'Citizens have both constitutional rights to enjoy and civic duties to uphold.'
      },
      senior: {
        title: 'Constitutional Rights, Democratic Pillars & Active Citizenship',
        subtitle: 'The rule of law, civil liberties, and the separation of government powers',
        concept: 'Active civic awareness and constitutional adherence protect individual liberties in a participatory democracy.'
      }
    }
  };

  const subjectConfig = stageTitles[subjectId]?.[stage] || {
    title: stage === 'primary' ? 'Everyday Basics & Core Concepts' : stage === 'junior' ? 'Foundations & Methods' : 'Core Principles & Analytical Applications',
    subtitle: stage === 'primary' ? 'Fundamental ideas and practical real-world examples' : 'Step-by-step problem solving and methods',
    concept: 'Understanding foundational principles enables critical thinking and problem mastery.'
  };

  const titleSuffix = variantIndex > 1 ? ` (Part ${variantIndex})` : '';

  return {
    id: `${subjectId}-${grade}-topic-${variantIndex}`,
    subjectId,
    gradeLevels: [grade],
    title: `${subjectConfig.title}${titleSuffix}`,
    subtitle: subjectConfig.subtitle,
    estimatedMinutes: stage === 'primary' ? 15 : stage === 'junior' ? 20 : 25,
    learnContent: {
      summary: `${subjectConfig.title} is an essential module for ${grade.replace('-', ' ').toUpperCase()} students. ${subjectConfig.concept}`,
      keyConcepts: [
        {
          title: stage === 'primary' ? 'Basic Idea & Definition' : 'Foundational Definitions',
          explanation: stage === 'primary' 
            ? 'What this concept means in simple, clear everyday words.' 
            : 'Clear conceptual understanding of the terminology, core axioms, and operational criteria.'
        },
        {
          title: stage === 'primary' ? 'Everyday Practice' : 'Methodological Application',
          explanation: stage === 'primary'
            ? 'How we use this idea at home, in the classroom, or on the playground.'
            : 'Systematic step-by-step problem-solving methods tested in examinations.'
        },
        {
          title: stage === 'primary' ? 'Fun Fact & Takeaway' : 'Critical Analysis & Real-World Context',
          explanation: stage === 'primary'
            ? 'An interesting fact connecting what you learned to the world around you.'
            : 'Connecting theoretical concepts to empirical experiments and contemporary industry applications.'
        }
      ],
      workedExamples: [
        {
          problem: stage === 'primary'
            ? `How do we apply ${subjectConfig.title} to solve a simple question?`
            : `Apply standard analytical procedure to solve a Grade ${gradeNum} level problem in this domain.`,
          solution: stage === 'primary'
            ? 'Look at the clues, follow the rule step by step, and verify your answer with a smile!'
            : 'Identify the known variables, select the governing law or model, substitute carefully, and check dimensional units.',
          takeaway: stage === 'primary'
            ? 'Practicing step by step makes learning easy and fun!'
            : 'Consistent step-by-step documentation guarantees full examination credit.'
        }
      ],
      commonMistakes: [
        stage === 'primary' ? 'Rushing without reading the whole sentence carefully.' : 'Skipping foundational definitions before attempting complex applications.',
        stage === 'primary' ? 'Forgetting to double-check your answer.' : 'Misreading problem prompts under examination time pressure.',
        stage === 'primary' ? 'Not asking for help when a word looks new.' : 'Overlooking unit conversions and final verification steps.'
      ]
    },
    videos: SUBJECT_CURATED_VIDEOS[subjectId] || SUBJECT_CURATED_VIDEOS['math'] || [],
    quizQuestions: [
      {
        id: `q-${subjectId}-${grade}-${variantIndex}-1`,
        text: stage === 'primary'
          ? `Why is learning about ${subjectConfig.title} important?`
          : `In the study of ${subjectId.replace('-', ' ')}, what is the primary significance of understanding ${subjectConfig.title}?`,
        options: [
          stage === 'primary' ? 'It helps us understand the world and solve everyday problems' : 'It establishes the fundamental principles required for advanced problem solving',
          stage === 'primary' ? 'It is not useful at all' : 'It is purely historical and no longer used in modern science',
          stage === 'primary' ? 'It only matters for robots' : 'It only applies to theoretical lab settings without practical value',
          stage === 'primary' ? 'It replaces the need to read' : 'It replaces the need for mathematical or grammatical formulas'
        ],
        correctIndex: 0,
        explanation: stage === 'primary'
          ? 'Understanding basic concepts gives you strong foundations for all learning.'
          : 'Foundational principles allow students to model problems systematically and extrapolate to complex scenarios.',
        topicTag: 'Core Principles'
      },
      {
        id: `q-${subjectId}-${grade}-${variantIndex}-2`,
        text: stage === 'primary'
          ? 'What should you do first when starting a new exercise?'
          : 'When approaching multi-step problems in this subject, what is always the recommended first step?',
        options: [
          stage === 'primary' ? 'Read the instructions carefully from beginning to end' : 'Carefully read the prompt, identify given parameters, and state the objective clearly',
          stage === 'primary' ? 'Guess without reading' : 'Guess the final answer immediately to save time',
          stage === 'primary' ? 'Close the book' : 'Skip writing down intermediate equations',
          stage === 'primary' ? 'Skip to the end' : 'Only check the units at the very beginning without tracking them through equations'
        ],
        correctIndex: 0,
        explanation: 'Carefully understanding the prompt prevents mistakes.',
        topicTag: 'Methodology'
      },
      {
        id: `q-${subjectId}-${grade}-${variantIndex}-3`,
        text: stage === 'primary'
          ? 'If you make a mistake while practicing, what is the best thing to do?'
          : 'Which of the following best characterizes a systematic reasoning error versus a mere calculation slip?',
        options: [
          stage === 'primary' ? 'Learn from the error, see why it happened, and try again' : 'A misconception of the underlying rule or law rather than an accidental arithmetic typo',
          stage === 'primary' ? 'Give up forever' : 'Writing down the wrong digit due to poor handwriting',
          stage === 'primary' ? 'Ignore it completely' : 'Running out of time on the exam clock',
          stage === 'primary' ? 'Tear up your paper' : 'Forgetting a negative sign in basic addition'
        ],
        correctIndex: 0,
        explanation: 'Mistakes are natural learning steps that help you improve.',
        topicTag: 'Error Diagnosis'
      },
      {
        id: `q-${subjectId}-${grade}-${variantIndex}-4`,
        text: stage === 'primary'
          ? 'What is a great habit to do before turning in your schoolwork?'
          : 'How should a student verify their final result before submitting their work?',
        options: [
          stage === 'primary' ? 'Review each answer carefully to check that it makes sense' : 'Perform a sanity check: verify units, sign conventions, and order of magnitude',
          stage === 'primary' ? 'Never look at it again' : 'Never check work because the first impulse is always correct',
          stage === 'primary' ? 'Erase everything' : 'Change every answer to option C',
          stage === 'primary' ? 'Leave early without checking' : 'Erase all working out so only the final number is visible'
        ],
        correctIndex: 0,
        explanation: 'Checking your work catches small slips and builds confidence.',
        topicTag: 'Verification'
      },
      {
        id: `q-${subjectId}-${grade}-${variantIndex}-5`,
        text: stage === 'primary'
          ? 'How do you become really confident and good at this topic?'
          : 'What is the most effective way to retain mastery over this topic long term?',
        options: [
          stage === 'primary' ? 'Practice a little bit regularly and ask questions when curious' : 'Spaced retrieval practice, active quiz self-testing, and reviewing misconception logs',
          stage === 'primary' ? 'Never practice' : 'Cramming passively the night before an exam',
          stage === 'primary' ? 'Only study once a year' : 'Re-reading highlighted notes without ever testing oneself',
          stage === 'primary' ? 'Stay silent when confused' : 'Avoiding solving any practice questions'
        ],
        correctIndex: 0,
        explanation: 'Regular active practice is the best pathway to true understanding.',
        topicTag: 'Study Science'
      }
    ]
  };
}

// Generate the 60 questions for the 60-minute subject test for the selected grade
// Strictly derived from the 3 authoritative topics for this subject and grade
export function generateSubjectTestQuestionBank(subjectId: SubjectId, grade: GradeLevel): Question[] {
  const topics = getTopicsForSubjectAndGrade(subjectId, grade);
  const questions: Question[] = [];

  // 1. Gather questions strictly from each of the 3 authoritative topics (20 questions each)
  for (const topic of topics) {
    if ((topic as any).allTestQuestions && Array.isArray((topic as any).allTestQuestions)) {
      questions.push(...(topic as any).allTestQuestions.slice(0, 20));
    } else {
      questions.push(...topic.quizQuestions);
    }
  }

  // 2. If any topic provided fewer than 20 questions, synthesize strictly from its key concepts
  const targetCount = 60;
  let counter = 1;
  while (questions.length < targetCount && topics.length > 0) {
    const topic = topics[(counter - 1) % topics.length];
    const kc = topic.learnContent.keyConcepts[(counter - 1) % topic.learnContent.keyConcepts.length];
    questions.push({
      id: `test-q-${subjectId}-${grade}-${counter}`,
      text: `In ${topic.title}: Which statement regarding ${kc.title.toLowerCase()} is correct?`,
      options: [
        kc.explanation,
        `It contradicts ${kc.explanation.substring(0, 35)}...`,
        `This principle is an exception only valid in non-standard systems.`,
        `None of the above statements are accurate.`
      ],
      correctIndex: 0,
      explanation: `Syllabus key takeaway: ${kc.explanation}`,
      topicTag: topic.title,
      difficulty: counter % 3 === 0 ? 'hard' : counter % 2 === 0 ? 'medium' : 'easy'
    });
    counter++;
  }

  return questions.slice(0, 60);
}
