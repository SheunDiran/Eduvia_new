import { GradeLevel, Question, SubjectId, Topic, YouTubeVideo } from '../../types';

export interface AuthoritativeTopicSpec {
  title: string;
  subtitle: string;
  quickInfo: string;
  keyConcepts: string[];
  workedExample?: {
    problem: string;
    solution: string;
    takeaway: string;
  };
  commonMistakes?: [string, string];
  quiz: [
    { q: string; opts: [string, string, string, string]; ans: number; exp: string },
    { q: string; opts: [string, string, string, string]; ans: number; exp: string },
    { q: string; opts: [string, string, string, string]; ans: number; exp: string },
    { q: string; opts: [string, string, string, string]; ans: number; exp: string },
    { q: string; opts: [string, string, string, string]; ans: number; exp: string }
  ];
  // 15 additional questions strictly testing this topic for the 60-minute subject test (5 quiz + 15 testBank = 20 questions)
  testBank?: Array<{
    q: string;
    opts: [string, string, string, string];
    ans: number;
    exp: string;
  }>;
}

export type GradeAuthoritativeMap = Partial<Record<SubjectId, [AuthoritativeTopicSpec, AuthoritativeTopicSpec, AuthoritativeTopicSpec]>>;
