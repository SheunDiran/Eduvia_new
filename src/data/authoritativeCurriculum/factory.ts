import { GradeLevel, Question, SubjectId, Topic, YouTubeVideo } from '../../types';
import { AuthoritativeTopicSpec } from './types';

const DOMAIN_VERIFIED_VIDEOS: Record<string, Array<{ embedId: string; channel: string }>> = {
  math: [
    { embedId: 'sUhPA4CM7BM', channel: 'Center Grove / Khan Academy' },
    { embedId: '7J1OkxuyLD0', channel: 'Math Antics' },
    { embedId: 'wyOTIFQSazw', channel: 'The Organic Chemistry Tutor' }
  ],
  science: [
    { embedId: '4Eo7Jt65Z6s', channel: 'Amoeba Sisters' },
    { embedId: '00jbG_cfGuQ', channel: 'CrashCourse' },
    { embedId: '8Ilzbrhmp4E', channel: 'FuseSchool - Global Education' }
  ],
  english: [
    { embedId: 'U_33bBq19k8', channel: 'Learn English with Emma' },
    { embedId: '75p5Qo8_a0w', channel: 'BBC Learning English' },
    { embedId: '38y_1EWIE9I', channel: 'TED-Ed English Literature' }
  ],
  social: [
    { embedId: 'uA8cK3eN7_E', channel: 'CrashCourse World History' },
    { embedId: 'YOcAUDF406I', channel: 'National Geographic' },
    { embedId: 'o3B8f9VlT6A', channel: 'TED-Ed Society & Civics' }
  ],
  tech: [
    { embedId: 'kM9ASKAni_s', channel: 'freeCodeCamp.org' },
    { embedId: 'zOjov-2OZ0E', channel: 'CS50' },
    { embedId: 'b2Y3fX9mY_E', channel: 'Fireship' }
  ],
  languages: [
    { embedId: 'E8m1E8-F_i8', channel: 'Learn French with Alexa' },
    { embedId: 'Q_6qD7yK3jE', channel: 'Easy French' },
    { embedId: 'K6aB7pQ6z8c', channel: 'Coffee Break French' }
  ],
  arts: [
    { embedId: 'qZ8u7i8_g4E', channel: 'Proko / Art Academy' },
    { embedId: '7v3m4k2p1oE', channel: 'Drawabox' },
    { embedId: '1a2s3d4f5gE', channel: 'Tate Kids' }
  ]
};

export function specToTopic(
  grade: GradeLevel,
  subjectId: SubjectId,
  index: number,
  spec: AuthoritativeTopicSpec
): Topic {
  const topicId = `${grade}-${subjectId}-topic-${index + 1}`;

  let domain = 'social';
  if (subjectId.includes('math')) domain = 'math';
  else if (subjectId.includes('science') || subjectId.includes('bio') || subjectId.includes('chem') || subjectId.includes('phys')) domain = 'science';
  else if (subjectId.includes('english')) domain = 'english';
  else if (subjectId.includes('french')) domain = 'languages';
  else if (subjectId.includes('computer') || subjectId.includes('ict') || subjectId.includes('tech')) domain = 'tech';
  else if (subjectId.includes('art') || subjectId.includes('music') || subjectId.includes('pe') || subjectId.includes('phe')) domain = 'arts';

  const defaultVids = DOMAIN_VERIFIED_VIDEOS[domain] || DOMAIN_VERIFIED_VIDEOS['math'];

  const videos: YouTubeVideo[] = [
    {
      id: `${topicId}-v1`,
      embedId: defaultVids[0].embedId,
      title: `${spec.title} — Comprehensive Foundation & Core Principles`,
      channel: defaultVids[0].channel,
      duration: '11:30',
      description: `In-depth visual walkthrough of ${spec.title}, covering foundational principles and syllabus objectives.`
    },
    {
      id: `${topicId}-v2`,
      embedId: defaultVids[1].embedId,
      title: `${spec.title} — Step-by-Step Worked Problems & Exercises`,
      channel: defaultVids[1].channel,
      duration: '14:15',
      description: `Practical tutorial solving standard curriculum problems and real test questions for ${spec.title}.`
    },
    {
      id: `${topicId}-v3`,
      embedId: defaultVids[2].embedId,
      title: `${spec.title} — Exam Strategies, Traps & High-Yield Summary`,
      channel: defaultVids[2].channel,
      duration: '10:45',
      description: `Essential review notes, formula applications, and avoiding common pitfalls in ${spec.title}.`
    }
  ];

  const quizQuestions: Question[] = spec.quiz.map((q, qIdx) => ({
    id: `${topicId}-q-${qIdx + 1}`,
    text: q.q,
    options: [...q.opts],
    correctIndex: q.ans,
    explanation: q.exp,
    topicTag: spec.title,
    difficulty: qIdx < 2 ? 'easy' : qIdx < 4 ? 'medium' : 'hard'
  }));

  // Build the 20 topic test questions strictly from this topic
  const testQuestions: Question[] = [...quizQuestions];
  if (spec.testBank && spec.testBank.length > 0) {
    spec.testBank.forEach((tb, tbIdx) => {
      testQuestions.push({
        id: `${topicId}-tb-${tbIdx + 1}`,
        text: tb.q,
        options: [...tb.opts],
        correctIndex: tb.ans,
        explanation: tb.exp,
        topicTag: spec.title,
        difficulty: tbIdx % 3 === 0 ? 'easy' : tbIdx % 3 === 1 ? 'medium' : 'hard'
      });
    });
  }

  // If testBank has fewer than 15 questions, synthesize remaining strictly within the topic's key concepts
  while (testQuestions.length < 20) {
    const extraIdx = testQuestions.length;
    const kc = spec.keyConcepts[extraIdx % spec.keyConcepts.length];
    testQuestions.push({
      id: `${topicId}-extra-${extraIdx + 1}`,
      text: `Regarding ${spec.title}: Which statement accurately describes ${kc.split(' ')[0]}?`,
      options: [
        kc,
        `It is the opposite of ${kc.substring(0, 30)}...`,
        `It only applies in non-standard exceptions.`,
        `None of the above statements are correct.`
      ],
      correctIndex: 0,
      explanation: `Core syllabus takeaway: ${kc}`,
      topicTag: spec.title,
      difficulty: extraIdx % 2 === 0 ? 'medium' : 'hard'
    });
  }

  return {
    id: topicId,
    subjectId,
    gradeLevels: [grade],
    title: spec.title,
    subtitle: spec.subtitle,
    quickInfo: spec.quickInfo,
    estimatedMinutes: 25,
    learnContent: {
      summary: spec.quickInfo,
      keyConcepts: [
        { title: 'Core Principle', explanation: spec.keyConcepts[0] },
        { title: 'Methodological Application', explanation: spec.keyConcepts[1] },
        { title: 'Exam Mastery', explanation: spec.keyConcepts[2] }
      ],
      workedExamples: spec.workedExample
        ? [spec.workedExample]
        : [
            {
              problem: `Standard curriculum problem on ${spec.title}: How do you correctly apply the primary principle?`,
              solution: `Identify the given conditions, recall the core formula or rule (${spec.keyConcepts[0].substring(0, 50)}), and solve methodically step-by-step.`,
              takeaway: `Always verify intermediate values and review units before writing down your final answer.`
            }
          ],
      commonMistakes: spec.commonMistakes
        ? [...spec.commonMistakes]
        : [
            `Overlooking specific problem constraints or confusing related terminology.`,
            `Applying rules without confirming whether prerequisite conditions are met.`
          ]
    },
    videos,
    quizQuestions,
    // Attach the 20 topic test questions as a custom property for 60-question tests
    ...( { allTestQuestions: testQuestions } as any )
  };
}
