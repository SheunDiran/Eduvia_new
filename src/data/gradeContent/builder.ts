import { GradeLevel, Question, SubjectId, Topic, YouTubeVideo } from '../../types';

export interface CompactTopicSpec {
  title: string;
  subtitle: string;
  quickInfo: string;
  keyConcepts: [string, string, string];
  workedExample?: { problem: string; solution: string; takeaway: string };
  commonMistakes?: [string, string];
  videos?: [
    { title: string; channel: string; duration: string; description: string; embedId?: string },
    { title: string; channel: string; duration: string; description: string; embedId?: string },
    { title: string; channel: string; duration: string; description: string; embedId?: string }
  ];
  quiz: [
    { q: string; opts: [string, string, string, string]; ans: number; exp: string },
    { q: string; opts: [string, string, string, string]; ans: number; exp: string },
    { q: string; opts: [string, string, string, string]; ans: number; exp: string },
    { q: string; opts: [string, string, string, string]; ans: number; exp: string },
    { q: string; opts: [string, string, string, string]; ans: number; exp: string }
  ];
}

const DEFAULT_CHANNELS: Record<string, string[]> = {
  math: ['Khan Academy', 'Math Antics', 'The Organic Chemistry Tutor'],
  science: ['CrashCourse', 'Amoeba Sisters', 'FuseSchool'],
  english: ['Learn English with Emma', 'BBC Learning English', 'TED-Ed'],
  languages: ['Learn French with Alexa', 'Easy French', 'Coffee Break French'],
  social: ['CrashCourse World History', 'National Geographic', 'TED-Ed'],
  tech: ['FreeCodeCamp', 'CS50', 'Fireship'],
  arts: ['Proko', 'Drawabox', 'Tate Kids']
};

const DEFAULT_EMBEDS: Record<string, string[]> = {
  math: ['NybHckSEQBI', '5C_HPTJg5Ek', 'LwCRRUa8yTU', 'oI_Z2pmbdlY', 'x4eBq_EAEHQ'],
  science: ['R_S2xN48lsc', '8Ilzbrhmp4E', '08mC3p6_8cI', 'iV21Vb9tQ7s', 'wN3lJg8r_Ew'],
  english: ['38y_1EWIE9I', 'U_33bBq19k8', '75p5Qo8_a0w', 'LndX_R13XmU', 'Q7v_61rM2sM'],
  languages: ['E8m1E8-F_i8', 'Q_6qD7yK3jE', 'K6aB7pQ6z8c'],
  social: ['uA8cK3eN7_E', 'YOcAUDF406I', 'o3B8f9VlT6A', 'Ww1bY8-k8e8', 'Jz4gQk5_6gE'],
  tech: ['kM9ASKAni_s', 'zOjov-2OZ0E', 'b2Y3fX9mY_E', 'm4i2k5o9p0E', 'Q6e7r8t9y0U'],
  arts: ['qZ8u7i8_g4E', '7v3m4k2p1oE', 'x9c8v7b6n5E', '1a2s3d4f5gE', '0p9o8i7u6yE']
};

export function createTopicFromSpec(
  grade: GradeLevel,
  subjectId: SubjectId,
  index: number,
  spec: CompactTopicSpec
): Topic {
  const topicId = `${grade}-${subjectId}-topic-${index + 1}`;

  let domain = 'social';
  if (subjectId.includes('math')) domain = 'math';
  else if (subjectId.includes('science') || subjectId.includes('bio') || subjectId.includes('chem') || subjectId.includes('phys')) domain = 'science';
  else if (subjectId.includes('english')) domain = 'english';
  else if (subjectId.includes('french')) domain = 'languages';
  else if (subjectId.includes('computer') || subjectId.includes('ict') || subjectId.includes('tech')) domain = 'tech';
  else if (subjectId.includes('art') || subjectId.includes('music') || subjectId.includes('pe')) domain = 'arts';

  const channelList = DEFAULT_CHANNELS[domain] || DEFAULT_CHANNELS['social'];
  const embedList = DEFAULT_EMBEDS[domain] || DEFAULT_EMBEDS['math'];

  const videos: YouTubeVideo[] = spec.videos
    ? spec.videos.map((v, vIdx) => ({
        id: `${topicId}-vid-${vIdx + 1}`,
        embedId: v.embedId || embedList[vIdx % embedList.length],
        title: v.title,
        channel: v.channel,
        duration: v.duration,
        description: v.description
      }))
    : [
        {
          id: `${topicId}-vid-1`,
          embedId: embedList[0],
          title: `${spec.title} — Comprehensive Concept Overview`,
          channel: channelList[0],
          duration: '12:45',
          description: `Detailed visual breakdown of ${spec.title}, introducing foundational definitions and key principles.`
        },
        {
          id: `${topicId}-vid-2`,
          embedId: embedList[1 % embedList.length],
          title: `${spec.title} — Step-by-Step Problem Solving & Examples`,
          channel: channelList[1 % channelList.length],
          duration: '14:20',
          description: `Practical walkthrough solving standard curriculum problems and exercises for ${spec.title}.`
        },
        {
          id: `${topicId}-vid-3`,
          embedId: embedList[2 % embedList.length],
          title: `${spec.title} — Exam Strategies & Common Traps`,
          channel: channelList[2 % channelList.length],
          duration: '10:50',
          description: `Expert test-taking tips, formula applications, and avoiding common misconceptions in ${spec.title}.`
        }
      ];

  const quizQuestions: Question[] = spec.quiz.map((q, qIdx) => ({
    id: `${topicId}-q-${qIdx + 1}`,
    text: q.q,
    options: [...q.opts],
    correctIndex: q.ans,
    explanation: q.exp,
    topicTag: spec.title
  }));

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
        { title: 'Analytical Application', explanation: spec.keyConcepts[1] },
        { title: 'Curriculum Mastery', explanation: spec.keyConcepts[2] }
      ],
      workedExamples: spec.workedExample
        ? [spec.workedExample]
        : [
            {
              problem: `Exam question on ${spec.title}: How do you correctly apply the primary rule?`,
              solution: `Identify the given conditions, recall the core formula or rule, and solve step-by-step verifying intermediate results.`,
              takeaway: `Always confirm your units or grammatical agreement before finalizing your response.`
            }
          ],
      commonMistakes: spec.commonMistakes
        ? [...spec.commonMistakes]
        : [
            `Overlooking specific problem constraints or misreading the question stem.`,
            `Confusing similar terminology or applying formulas without checking conditions.`
          ]
    },
    videos,
    quizQuestions
  };
}
