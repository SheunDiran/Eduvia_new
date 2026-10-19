export type GradeLevel =
  | 'grade-1'
  | 'grade-2'
  | 'grade-3'
  | 'grade-4'
  | 'grade-5'
  | 'grade-6'
  | 'grade-7'
  | 'grade-8'
  | 'grade-9'
  | 'grade-10'
  | 'grade-11'
  | 'grade-12';

export interface GradeInfo {
  id: GradeLevel;
  number: number;
  label: string;
  stage: 'Primary / Elementary' | 'Junior Secondary / Middle' | 'Senior Secondary / High School';
  description: string;
}

export type SubjectId =
  | 'math'
  | 'english-lang'
  | 'english-lit'
  | 'science'
  | 'basic-science'
  | 'social-studies'
  | 'art'
  | 'pe'
  | 'phe'
  | 'computer-science'
  | 'ict'
  | 'music'
  | 'crs'
  | 'civic-education'
  | 'basic-technology'
  | 'agricultural-science'
  | 'french'
  | 'business-studies'
  | 'biology'
  | 'chemistry'
  | 'physics'
  | 'history'
  | 'geography'
  | 'government'
  | 'further-math'
  | 'accounting'
  | 'commerce'
  | 'economics';

export type SubjectCategory = 'All' | 'Sciences' | 'Humanities' | 'Languages' | 'Business & Social' | 'Tech & Applied';

export interface Subject {
  id: SubjectId;
  name: string;
  iconName: string;
  shortDesc: string;
  category: 'Sciences' | 'Humanities' | 'Languages' | 'Business & Social' | 'Tech & Applied';
  themeColor: string;
}

export interface YouTubeVideo {
  id: string;
  embedId: string;
  title: string;
  channel: string;
  duration: string;
  description: string;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  topicTag: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export interface Topic {
  id: string;
  subjectId: SubjectId;
  gradeLevels: GradeLevel[];
  title: string;
  subtitle: string;
  quickInfo?: string;
  estimatedMinutes: number;
  learnContent: {
    summary: string;
    keyConcepts: { title: string; explanation: string }[];
    workedExamples: { problem: string; solution: string; takeaway: string }[];
    commonMistakes: string[];
  };
  videos: YouTubeVideo[];
  quizQuestions: Question[];
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  grade: GradeLevel;
  joinedAt: string;
  avatarSeed?: string;
}

export interface MisconceptionDiagnosis {
  misconception: string;
  reasoningFlaw: string;
  correctionTip: string;
  category: 'Calculation Slip' | 'Formula Misapplication' | 'Conceptual Confusion' | 'Reading Misinterpretation' | 'Definition Gap' | 'Logical Fallacy';
  encouragement: string;
}

export interface MisconceptionRecord {
  id: string;
  userId: string;
  questionText: string;
  wrongAnswerText: string;
  correctAnswerText: string;
  misconception: string;
  reasoningFlaw: string;
  category: string;
  topicTag: string;
  subjectId: SubjectId;
  grade: GradeLevel;
  timestamp: string;
}

export interface QuizAttempt {
  id: string;
  userId: string;
  subjectId: SubjectId;
  topicId: string;
  grade: GradeLevel;
  score: number;
  total: number;
  answers: Record<string, number>;
  diagnoses?: Record<string, MisconceptionDiagnosis>;
  completedAt: string;
}

export interface TestResultRecord {
  id: string;
  userId: string;
  subjectId: SubjectId;
  grade: GradeLevel;
  score: number;
  totalQuestions: number;
  percentage: number;
  timeSpentSeconds: number;
  topicBreakdown: Record<string, { correct: number; total: number }>;
  wrongQuestions: {
    questionText: string;
    selectedAnswer: string;
    correctAnswer: string;
    topicTag: string;
  }[];
  completedAt: string;
}

export interface NoteItem {
  id: string;
  userId: string;
  title: string;
  content: string;
  subjectId?: SubjectId | '';
  topicId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface TaskItem {
  id: string;
  userId: string;
  text: string;
  completed: boolean;
  dueDate?: string; // YYYY-MM-DD
  dueTime?: string; // HH:mm
  earlyReminderMinutes?: number; // e.g. 15, 30, 60, 1440 mins before
  earlyNotified?: boolean;
  dueNotified?: boolean;
  priority: 'low' | 'medium' | 'high';
  subjectId?: SubjectId | '';
  createdAt: string;
}

export type EduviaAIMode = 'explain' | 'solve' | 'diagnose' | 'general';

export interface AIChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  mode?: EduviaAIMode;
  timestamp: string;
  metadata?: {
    subject?: string;
    topic?: string;
    diagnosis?: MisconceptionDiagnosis;
  };
}

export interface AIChatSession {
  id: string;
  userId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  messages: AIChatMessage[];
}
