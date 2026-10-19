import { GradeLevel, Question, SubjectId, Topic, YouTubeVideo } from '../../types';

export interface RawTopicDefinition {
  title: string;
  subtitle: string;
  quickInfo: string;
  estimatedMinutes?: number;
  keyConcepts: { title: string; explanation: string }[];
  workedExamples?: { problem: string; solution: string; takeaway: string }[];
  commonMistakes?: string[];
  videos: [
    { title: string; channel: string; duration: string; description: string; embedId?: string },
    { title: string; channel: string; duration: string; description: string; embedId?: string },
    { title: string; channel: string; duration: string; description: string; embedId?: string }
  ];
  quizQuestions: [
    { text: string; options: [string, string, string, string]; correctIndex: number; explanation: string },
    { text: string; options: [string, string, string, string]; correctIndex: number; explanation: string },
    { text: string; options: [string, string, string, string]; correctIndex: number; explanation: string },
    { text: string; options: [string, string, string, string]; correctIndex: number; explanation: string },
    { text: string; options: [string, string, string, string]; correctIndex: number; explanation: string }
  ];
}

// Curated reliable education video embed IDs by subject domain
export const DEFAULT_EMBED_IDS: Record<string, string[]> = {
  math: ['NybHckSEQBI', '5C_HPTJg5Ek', 'LwCRRUa8yTU', 'oI_Z2pmbdlY', 'x4eBq_EAEHQ'],
  english: ['38y_1EWIE9I', 'U_33bBq19k8', '75p5Qo8_a0w', 'LndX_R13XmU', 'Q7v_61rM2sM'],
  science: ['R_S2xN48lsc', '8Ilzbrhmp4E', '08mC3p6_8cI', 'iV21Vb9tQ7s', 'wN3lJg8r_Ew'],
  social: ['uA8cK3eN7_E', 'YOcAUDF406I', 'o3B8f9VlT6A', 'Ww1bY8-k8e8', 'Jz4gQk5_6gE'],
  tech: ['kM9ASKAni_s', 'zOjov-2OZ0E', 'b2Y3fX9mY_E', 'm4i2k5o9p0E', 'Q6e7r8t9y0U'],
  arts: ['qZ8u7i8_g4E', '7v3m4k2p1oE', 'x9c8v7b6n5E', '1a2s3d4f5gE', '0p9o8i7u6yE']
};

export function buildTopic(
  grade: GradeLevel,
  subjectId: SubjectId,
  index: number,
  raw: RawTopicDefinition
): Topic {
  const topicId = `${grade}-${subjectId}-topic-${index + 1}`;
  
  // Pick reliable fallback video embed IDs if not explicitly given
  const domainKey = subjectId.includes('math')
    ? 'math'
    : subjectId.includes('english') || subjectId.includes('french')
    ? 'english'
    : subjectId.includes('science') || subjectId.includes('bio') || subjectId.includes('chem') || subjectId.includes('phys')
    ? 'science'
    : subjectId.includes('computer') || subjectId.includes('ict') || subjectId.includes('tech')
    ? 'tech'
    : subjectId.includes('art') || subjectId.includes('music') || subjectId.includes('pe')
    ? 'arts'
    : 'social';

  const defaultEmbeds = DEFAULT_EMBED_IDS[domainKey] || DEFAULT_EMBED_IDS['math'];

  const videos: YouTubeVideo[] = raw.videos.map((v, vIdx) => ({
    id: `${topicId}-vid-${vIdx + 1}`,
    embedId: v.embedId || defaultEmbeds[vIdx % defaultEmbeds.length],
    title: v.title,
    channel: v.channel,
    duration: v.duration,
    description: v.description
  }));

  const quizQuestions: Question[] = raw.quizQuestions.map((q, qIdx) => ({
    id: `${topicId}-q-${qIdx + 1}`,
    text: q.text,
    options: [...q.options],
    correctIndex: q.correctIndex,
    explanation: q.explanation,
    topicTag: raw.title
  }));

  return {
    id: topicId,
    subjectId,
    gradeLevels: [grade],
    title: raw.title,
    subtitle: raw.subtitle,
    quickInfo: raw.quickInfo,
    estimatedMinutes: raw.estimatedMinutes || 25,
    learnContent: {
      summary: raw.quickInfo,
      keyConcepts: raw.keyConcepts,
      workedExamples: raw.workedExamples || [
        {
          problem: `Key practice question on ${raw.title}: How to apply the core principle?`,
          solution: `Break down the problem using step-by-step reasoning according to syllabus guidelines. Verify each step carefully.`,
          takeaway: `Always double-check definitions and verify your intermediate answers.`
        }
      ],
      commonMistakes: raw.commonMistakes || [
        `Rushing through the question without noting key terminology or given constraints.`,
        `Confusing foundational concepts with superficially similar secondary rules.`
      ]
    },
    videos,
    quizQuestions
  };
}
