import {
  AIChatMessage,
  AIChatSession,
  GradeLevel,
  MisconceptionDiagnosis,
  MisconceptionRecord,
  NoteItem,
  Question,
  QuizAttempt,
  SubjectId,
  TaskItem,
  TestResultRecord,
  UserProfile,
  YouTubeVideo
} from '../types';
import { getTopicsForSubjectAndGrade } from '../data/curriculum';

const STORAGE_KEYS = {
  USER: 'eduvia_current_user',
  TOKEN: 'eduvia_auth_token',
  REMEMBER_ME: 'eduvia_remember_me',
  REGISTERED_ACCOUNTS: 'eduvia_registered_accounts',
  NOTES: 'eduvia_notes',
  TASKS: 'eduvia_tasks',
  MISCONCEPTIONS: 'eduvia_misconceptions',
  QUIZ_ATTEMPTS: 'eduvia_quiz_attempts',
  TEST_RESULTS: 'eduvia_test_results',
  COMPLETED_TOPICS: 'eduvia_completed_topics',
  WATCHED_VIDEOS: 'eduvia_watched_videos',
  CHAT_SESSIONS: 'eduvia_ai_chat_sessions',
  SAVED_OPPORTUNITIES: 'eduvia_saved_opps'
};

interface RegisteredAccount {
  id: string;
  name: string;
  email: string;
  password: string;
  grade: GradeLevel;
  joinedAt: string;
}

function getLocalAccounts(): RegisteredAccount[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.REGISTERED_ACCOUNTS);
    const existing: RegisteredAccount[] = raw ? JSON.parse(raw) : [];
    if (!existing.some((a) => a.email.toLowerCase() === 'student@eduvia.org')) {
      existing.push({
        id: 'student-demo',
        name: 'Maya Chen (Demo Student)',
        email: 'student@eduvia.org',
        password: 'demo123',
        grade: 'grade-10',
        joinedAt: '2026-09-01T08:00:00.000Z'
      });
      existing.push({
        id: 'uni-demo',
        name: 'Alex Rivera (University Scholar)',
        email: 'university@eduvia.org',
        password: 'demo123',
        grade: 'uni-sophomore',
        joinedAt: '2026-09-01T08:00:00.000Z'
      });
      saveLocalAccounts(existing);
    }
    return existing;
  } catch {
    return [];
  }
}

function saveLocalAccounts(accounts: RegisteredAccount[]) {
  try {
    localStorage.setItem(STORAGE_KEYS.REGISTERED_ACCOUNTS, JSON.stringify(accounts));
  } catch {
    // LocalStorage restriction fallback
  }
}

// ================= AUTH =================

export function getStoredUser(): UserProfile | null {
  try {
    // Check localStorage (persists across browser restarts if "Remember Me" is enabled)
    const rawLocal = localStorage.getItem(STORAGE_KEYS.USER);
    if (rawLocal) {
      return JSON.parse(rawLocal);
    }
    // Also check sessionStorage (for single-session student logins)
    const rawSession = sessionStorage.getItem(STORAGE_KEYS.USER);
    if (rawSession) {
      return JSON.parse(rawSession);
    }
    return null;
  } catch {
    return null;
  }
}

export const getStoredSession = getStoredUser;

export function getRememberedEmail(): string {
  try {
    return localStorage.getItem('eduvia_remembered_email') || '';
  } catch {
    return '';
  }
}

export function getRememberedAccount(): { email: string; name?: string; grade?: GradeLevel } | null {
  try {
    const email = localStorage.getItem('eduvia_remembered_email');
    if (!email) return null;
    const name = localStorage.getItem('eduvia_remembered_name') || undefined;
    const grade = (localStorage.getItem('eduvia_remembered_grade') as GradeLevel) || undefined;
    return { email, name, grade };
  } catch {
    return null;
  }
}

export function setStoredUser(user: UserProfile | null, token?: string, rememberMe = true) {
  if (user) {
    if (rememberMe) {
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
      localStorage.setItem(STORAGE_KEYS.REMEMBER_ME, 'true');
      localStorage.setItem('eduvia_remembered_email', user.email);
      localStorage.setItem('eduvia_remembered_name', user.name);
      if (user.grade) localStorage.setItem('eduvia_remembered_grade', user.grade);
      if (token) localStorage.setItem(STORAGE_KEYS.TOKEN, token);
      sessionStorage.removeItem(STORAGE_KEYS.USER);
      sessionStorage.removeItem(STORAGE_KEYS.TOKEN);
    } else {
      sessionStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
      if (token) sessionStorage.setItem(STORAGE_KEYS.TOKEN, token);
      localStorage.removeItem(STORAGE_KEYS.USER);
      localStorage.removeItem(STORAGE_KEYS.TOKEN);
      localStorage.removeItem(STORAGE_KEYS.REMEMBER_ME);
    }
  } else {
    localStorage.removeItem(STORAGE_KEYS.USER);
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
    localStorage.removeItem(STORAGE_KEYS.REMEMBER_ME);
    sessionStorage.removeItem(STORAGE_KEYS.USER);
    sessionStorage.removeItem(STORAGE_KEYS.TOKEN);
  }
}

export function removeStoredSession() {
  setStoredUser(null);
}

export async function loginDemoUser(type: 'highschool' | 'university' = 'highschool', rememberMe = true): Promise<UserProfile> {
  const isUni = type === 'university';
  try {
    const res = await fetch('/api/auth/demo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type })
    });
    if (res.ok) {
      const data = await res.json();
      if (data.user) {
        setStoredUser(data.user, data.token, rememberMe);
        return data.user;
      }
    }
  } catch (e) {
    console.warn('Demo login fetch failed, falling back to local demo profile:', e);
  }

  const fallbackUser: UserProfile = {
    id: isUni ? 'uni-demo' : 'student-demo',
    name: isUni ? 'Alex Rivera (University Scholar)' : 'Maya Chen (Demo Student)',
    email: isUni ? 'university@eduvia.org' : 'student@eduvia.org',
    grade: isUni ? 'uni-sophomore' : 'grade-10',
    joinedAt: '2026-09-01T08:00:00.000Z'
  };
  setStoredUser(fallbackUser, 'demo-token-' + fallbackUser.id, rememberMe);
  return fallbackUser;
}

export async function loginUser(email: string, password: string, rememberMe = true): Promise<UserProfile> {
  const normalizedEmail = email.trim().toLowerCase();

  // 1. Try server backend authentication
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: normalizedEmail, password })
    });
    const data = await res.json();
    if (res.ok && data.user) {
      const userProfile: UserProfile = {
        id: data.user.id,
        name: data.user.name,
        email: data.user.email,
        grade: data.user.grade,
        joinedAt: data.user.joinedAt || data.user.createdAt || new Date().toISOString(),
        avatarSeed: data.user.avatarSeed
      };
      setStoredUser(userProfile, data.token, rememberMe);
      return userProfile;
    }
    // If backend gave invalid credentials error, check local registered accounts
    if (!res.ok && data.error && !data.error.includes('fetch')) {
      const accounts = getLocalAccounts();
      const matched = accounts.find((a) => a.email.toLowerCase() === normalizedEmail && a.password === password);
      if (matched) {
        const localProf: UserProfile = {
          id: matched.id,
          name: matched.name,
          email: matched.email,
          grade: matched.grade,
          joinedAt: matched.joinedAt
        };
        setStoredUser(localProf, 'token-' + matched.id, rememberMe);
        return localProf;
      }
      throw new Error(data.error);
    }
  } catch (err: any) {
    if (err?.message && !err.message.includes('fetch') && !err.message.includes('Network')) {
      // Check local accounts
      const accounts = getLocalAccounts();
      const matched = accounts.find((a) => a.email.toLowerCase() === normalizedEmail && a.password === password);
      if (matched) {
        const localProf: UserProfile = {
          id: matched.id,
          name: matched.name,
          email: matched.email,
          grade: matched.grade,
          joinedAt: matched.joinedAt
        };
        setStoredUser(localProf, 'token-' + matched.id, rememberMe);
        return localProf;
      }
      throw err;
    }
  }

  // 2. Check local client accounts
  const accounts = getLocalAccounts();
  const matched = accounts.find((a) => a.email.toLowerCase() === normalizedEmail && a.password === password);
  if (matched) {
    const userProfile: UserProfile = {
      id: matched.id,
      name: matched.name,
      email: matched.email,
      grade: matched.grade,
      joinedAt: matched.joinedAt
    };
    setStoredUser(userProfile, 'token-' + matched.id, rememberMe);
    return userProfile;
  }

  throw new Error('Invalid email or password. Please verify your credentials or create a new student account.');
}

export async function signupUser(
  name: string,
  email: string,
  password: string,
  grade: GradeLevel,
  rememberMe = true
): Promise<UserProfile> {
  const normalizedEmail = email.trim().toLowerCase();
  const accounts = getLocalAccounts();

  if (accounts.some((a) => a.email.toLowerCase() === normalizedEmail)) {
    throw new Error('An account with this email address already exists. Please sign in instead.');
  }

  let serverProfile: UserProfile | null = null;
  let serverToken: string = 'token-' + Date.now();

  try {
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name.trim(), email: normalizedEmail, password, grade })
    });
    const data = await res.json();
    if (res.ok && data.user) {
      serverProfile = {
        id: data.user.id,
        name: data.user.name,
        email: data.user.email,
        grade: data.user.grade,
        joinedAt: data.user.joinedAt || data.user.createdAt || new Date().toISOString(),
        avatarSeed: data.user.avatarSeed
      };
      serverToken = data.token;
    } else if (!res.ok && data.error) {
      throw new Error(data.error);
    }
  } catch (err: any) {
    if (err?.message && !err.message.includes('fetch')) {
      throw err;
    }
  }

  const userProfile: UserProfile = serverProfile || {
    id: 'student-' + Date.now(),
    name: name.trim(),
    email: normalizedEmail,
    grade,
    joinedAt: new Date().toISOString()
  };

  accounts.push({
    id: userProfile.id,
    name: userProfile.name,
    email: userProfile.email,
    password,
    grade,
    joinedAt: userProfile.joinedAt
  });
  saveLocalAccounts(accounts);

  setStoredUser(userProfile, serverToken, rememberMe);
  return userProfile;
}

export function logoutUser(): void {
  setStoredUser(null);
}

export async function updateUserGrade(userId: string, grade: GradeLevel): Promise<void> {
  const current = getStoredUser();
  if (current) {
    current.grade = grade;
    setStoredUser(current);
  }
  const accounts = getLocalAccounts();
  const accIndex = accounts.findIndex((a) => a.id === userId);
  if (accIndex !== -1) {
    accounts[accIndex].grade = grade;
    saveLocalAccounts(accounts);
  }
  try {
    await fetch('/api/user/grade', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, grade })
    });
  } catch (e) {
    console.warn('Backend grade update warning:', e);
  }
  // Notify listeners to recalculate progress for the new grade
  window.dispatchEvent(new CustomEvent('eduvia-progress-updated', { detail: { userId, grade } }));
}

// ================= EDUVIA AI API =================

export async function aiExplainTopic(params: {
  subject: string;
  grade: string;
  topic: string;
  learnSummary?: string;
  query?: string;
}): Promise<string> {
  const res = await fetch('/api/ai/explain', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params)
  });
  let data: any = {};
  try {
    data = await res.json();
  } catch {
    throw new Error(`Server returned HTTP ${res.status}`);
  }
  if (!res.ok) throw new Error(data.error || 'Failed to get explanation from Eduvia AI');
  return data.text;
}

export async function aiSocraticSolve(params: {
  subject: string;
  grade: string;
  topic: string;
  questionText: string;
  studentAttempt?: string;
  hintLevel?: string;
}): Promise<string> {
  const res = await fetch('/api/ai/solve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params)
  });
  let data: any = {};
  try {
    data = await res.json();
  } catch {
    throw new Error(`Server returned HTTP ${res.status}`);
  }
  if (!res.ok) throw new Error(data.error || 'Failed to get Socratic hint from Eduvia AI');
  return data.text;
}

export async function aiDiagnoseMisconception(params: {
  question: string;
  correct_answer: string;
  wrong_answer: string;
  subject: string;
  grade: string;
  topic: string;
}): Promise<MisconceptionDiagnosis> {
  const res = await fetch('/api/ai/diagnose', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params)
  });
  let data: any = {};
  try {
    data = await res.json();
  } catch {
    throw new Error(`Server returned HTTP ${res.status}`);
  }
  if (!res.ok) throw new Error(data.error || 'Failed to diagnose misconception');
  return data;
}

export async function aiGeneralChat(params: {
  messages: { role: 'user' | 'assistant'; content: string }[];
  context: { subject?: string; grade?: string; topic?: string };
}): Promise<string> {
  const res = await fetch('/api/ai/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params)
  });
  let data: any = {};
  try {
    data = await res.json();
  } catch {
    throw new Error(`Server returned HTTP ${res.status}`);
  }
  if (!res.ok) throw new Error(data.error || 'Failed to get Eduvia AI response');
  return data.text;
}

export async function aiStreamGeneralChat(
  params: {
    messages: { role: 'user' | 'assistant'; content: string }[];
    context: { subject?: string; grade?: string; topic?: string };
  },
  onChunk: (accumulatedText: string) => void
): Promise<string> {
  const res = await fetch('/api/ai/chat/stream', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params)
  });

  if (!res.ok) {
    throw new Error(`Server returned HTTP ${res.status}`);
  }

  if (!res.body) {
    // Fallback to unary if stream not supported
    const fallbackText = await aiGeneralChat(params);
    onChunk(fallbackText);
    return fallbackText;
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let fullText = '';
  let buffer = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop() || '';

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed.startsWith('data:')) continue;
      const dataStr = trimmed.slice(5).trim();
      if (dataStr === '[DONE]') break;
      try {
        const parsed = JSON.parse(dataStr);
        if (parsed.error) {
          throw new Error(parsed.error);
        }
        if (parsed.text) {
          fullText += parsed.text;
          onChunk(fullText);
        }
      } catch (err: any) {
        if (err.message && !err.message.includes('Unexpected token') && !err.message.includes('JSON')) {
          throw err;
        }
      }
    }
  }

  return fullText;
}

export async function aiAutoNameChat(message: string): Promise<string> {
  try {
    const res = await fetch('/api/ai/auto-name-chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });
    if (res.ok) {
      const data = await res.json();
      if (data.title) return data.title;
    }
  } catch (err) {
    console.warn('aiAutoNameChat failed, falling back:', err);
  }
  const clean = message.replace(/[^a-zA-Z0-9 ]/g, '').trim();
  const words = clean.split(/\s+/).slice(0, 4).join(' ');
  return words ? words.charAt(0).toUpperCase() + words.slice(1) : 'New Study Session';
}

export async function aiGenerateQuizFromVideo(params: {
  videoTitle: string;
  videoDescription: string;
  channel: string;
  topicTitle: string;
  subject: string;
  grade: string;
}): Promise<Question[]> {
  try {
    const res = await fetch('/api/ai/generate-quiz-from-video', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params)
    });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.questions) && data.questions.length > 0) {
        return data.questions;
      }
    }
  } catch (err) {
    console.warn('aiGenerateQuizFromVideo failed:', err);
  }
  return [];
}

// ================= CHAT SESSIONS PERSISTENCE =================

export function getChatSessions(userId: string): AIChatSession[] {
  try {
    const raw = localStorage.getItem(`${STORAGE_KEYS.CHAT_SESSIONS}_${userId}`);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveChatSession(userId: string, session: AIChatSession): void {
  try {
    const sessions = getChatSessions(userId);
    const index = sessions.findIndex((s) => s.id === session.id);
    if (index >= 0) {
      sessions[index] = session;
    } else {
      sessions.unshift(session);
    }
    localStorage.setItem(`${STORAGE_KEYS.CHAT_SESSIONS}_${userId}`, JSON.stringify(sessions));
  } catch (e) {
    console.error('Failed to save chat session:', e);
  }
}

export function deleteChatSession(userId: string, sessionId: string): void {
  try {
    const sessions = getChatSessions(userId).filter((s) => s.id !== sessionId);
    localStorage.setItem(`${STORAGE_KEYS.CHAT_SESSIONS}_${userId}`, JSON.stringify(sessions));
  } catch (e) {
    console.error('Failed to delete chat session:', e);
  }
}

// ================= SAVED OPPORTUNITIES =================

export function getSavedOpportunityIds(userId: string): string[] {
  try {
    const raw = localStorage.getItem(`${STORAGE_KEYS.SAVED_OPPORTUNITIES}_${userId}`);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleSavedOpportunityId(userId: string, oppId: string): string[] {
  try {
    const current = getSavedOpportunityIds(userId);
    const updated = current.includes(oppId)
      ? current.filter((id) => id !== oppId)
      : [...current, oppId];
    localStorage.setItem(`${STORAGE_KEYS.SAVED_OPPORTUNITIES}_${userId}`, JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}

// ================= MISCONCEPTIONS =================

export async function logMisconceptionRecord(record: Omit<MisconceptionRecord, 'id' | 'timestamp'>): Promise<MisconceptionRecord> {
  const fullRecord: MisconceptionRecord = {
    ...record,
    id: 'misc-' + Date.now(),
    timestamp: new Date().toISOString()
  };

  // Local storage cache
  try {
    const current = getLocalMisconceptions();
    current.unshift(fullRecord);
    localStorage.setItem(STORAGE_KEYS.MISCONCEPTIONS, JSON.stringify(current));
  } catch (e) {
    console.error(e);
  }

  // Server sync
  try {
    await fetch('/api/misconceptions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(fullRecord)
    });
  } catch (e) {
    console.warn('Server sync warning:', e);
  }

  return fullRecord;
}

export function getLocalMisconceptions(): MisconceptionRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.MISCONCEPTIONS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export async function fetchMisconceptions(userId: string): Promise<{ records: MisconceptionRecord[]; patterns: any }> {
  try {
    const res = await fetch(`/api/misconceptions?userId=${encodeURIComponent(userId)}`);
    if (res.ok) {
      const data = await res.json();
      if (data.records && data.records.length > 0) {
        localStorage.setItem(STORAGE_KEYS.MISCONCEPTIONS, JSON.stringify(data.records));
        return data;
      }
    }
  } catch (e) {
    console.warn('Could not fetch remote misconceptions:', e);
  }

  const local = getLocalMisconceptions();
  const categoryCounts: Record<string, number> = {};
  const topicCounts: Record<string, number> = {};
  local.forEach((m) => {
    categoryCounts[m.category] = (categoryCounts[m.category] || 0) + 1;
    topicCounts[m.topicTag] = (topicCounts[m.topicTag] || 0) + 1;
  });

  const topCategory = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1])[0];
  const topTopic = Object.entries(topicCounts).sort((a, b) => b[1] - a[1])[0];

  return {
    records: local,
    patterns: {
      totalLogged: local.length,
      topCategory: topCategory ? { name: topCategory[0], count: topCategory[1] } : null,
      topTopic: topTopic ? { name: topTopic[0], count: topTopic[1] } : null,
      breakdownByCategory: categoryCounts,
      breakdownByTopic: topicCounts
    }
  };
}

// ================= QUIZZES & TESTS =================

export async function saveQuizAttempt(attempt: Omit<QuizAttempt, 'id' | 'completedAt'>): Promise<QuizAttempt> {
  const full: QuizAttempt = {
    ...attempt,
    id: 'quiz-' + Date.now(),
    completedAt: new Date().toISOString()
  };

  try {
    const current = getLocalQuizAttempts();
    current.unshift(full);
    localStorage.setItem(STORAGE_KEYS.QUIZ_ATTEMPTS, JSON.stringify(current));
    window.dispatchEvent(new CustomEvent('eduvia-progress-updated', { detail: { userId: full.userId, topicId: full.topicId } }));
  } catch (e) {
    console.error(e);
  }

  try {
    await fetch('/api/quizzes/attempt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(full)
    });
  } catch (e) {
    console.warn(e);
  }

  return full;
}

export function getLocalQuizAttempts(userId?: string): QuizAttempt[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.QUIZ_ATTEMPTS);
    const list: QuizAttempt[] = raw ? JSON.parse(raw) : [];
    if (userId) {
      return list.filter((a) => a.userId === userId);
    }
    return list;
  } catch {
    return [];
  }
}

export async function saveTestResult(result: Omit<TestResultRecord, 'id' | 'completedAt'>): Promise<TestResultRecord> {
  const full: TestResultRecord = {
    ...result,
    id: 'test-' + Date.now(),
    completedAt: new Date().toISOString()
  };

  try {
    const current = getLocalTestResults();
    current.unshift(full);
    localStorage.setItem(STORAGE_KEYS.TEST_RESULTS, JSON.stringify(current));
  } catch (e) {
    console.error(e);
  }

  try {
    await fetch('/api/tests/result', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(full)
    });
  } catch (e) {
    console.warn(e);
  }

  return full;
}

export function getLocalTestResults(userId?: string): TestResultRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.TEST_RESULTS);
    const list: TestResultRecord[] = raw ? JSON.parse(raw) : [];
    if (userId) {
      return list.filter((r) => r.userId === userId);
    }
    return list;
  } catch {
    return [];
  }
}

export interface UserCompletedTopic {
  userId: string;
  topicId: string;
  subjectId: string;
  completedAt: string;
}

export interface WatchedVideoRecord {
  userId: string;
  topicId: string;
  watchedAt: string;
}

export function getWatchedVideos(userId: string): string[] {
  if (!userId) return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.WATCHED_VIDEOS);
    const list: WatchedVideoRecord[] = raw ? JSON.parse(raw) : [];
    return list.filter((item) => item.userId === userId).map((item) => item.topicId);
  } catch {
    return [];
  }
}

export function isTopicVideoWatched(userId: string, topicId: string): boolean {
  if (!userId || !topicId) return false;
  return getWatchedVideos(userId).includes(topicId);
}

export function markTopicVideoWatched(userId: string, topicId: string, watched: boolean = true): void {
  if (!userId || !topicId) return;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.WATCHED_VIDEOS);
    let list: WatchedVideoRecord[] = raw ? JSON.parse(raw) : [];
    if (watched) {
      if (!list.some((item) => item.userId === userId && item.topicId === topicId)) {
        list.push({
          userId,
          topicId,
          watchedAt: new Date().toISOString()
        });
      }
    } else {
      list = list.filter((item) => !(item.userId === userId && item.topicId === topicId));
    }
    localStorage.setItem(STORAGE_KEYS.WATCHED_VIDEOS, JSON.stringify(list));
    window.dispatchEvent(new CustomEvent('eduvia-progress-updated', { detail: { userId, topicId } }));
  } catch (e) {
    console.error(e);
  }
}

export function isTopicQuizFinished(userId: string, topicId: string): boolean {
  if (!userId || !topicId) return false;
  return getLocalQuizAttempts(userId).some((a) => a.topicId === topicId);
}

/**
 * Returns topic completion percentage (0 - 100%):
 * - If manually completed: 100%
 * - Video watched: +50%
 * - Topic quiz finished: +50%
 * - Both: 100%
 * - Neither: 0%
 */
export function getTopicProgress(userId: string, topicId: string): number {
  if (!userId || !topicId) return 0;
  if (isTopicCompleted(userId, topicId)) {
    return 100;
  }
  const videoWatched = isTopicVideoWatched(userId, topicId);
  const quizFinished = isTopicQuizFinished(userId, topicId);

  if (videoWatched && quizFinished) return 100;
  if (videoWatched || quizFinished) return 50;
  return 0;
}

export function getCompletedTopics(userId: string): string[] {
  if (!userId) return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.COMPLETED_TOPICS);
    const list: UserCompletedTopic[] = raw ? JSON.parse(raw) : [];
    return list.filter((item) => item.userId === userId).map((item) => item.topicId);
  } catch {
    return [];
  }
}

export function isTopicCompleted(userId: string, topicId: string): boolean {
  if (!userId || !topicId) return false;
  return getCompletedTopics(userId).includes(topicId);
}

export function markTopicCompleted(userId: string, topicId: string, subjectId?: string): void {
  if (!userId || !topicId) return;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.COMPLETED_TOPICS);
    const list: UserCompletedTopic[] = raw ? JSON.parse(raw) : [];
    if (!list.some((item) => item.userId === userId && item.topicId === topicId)) {
      list.push({
        userId,
        topicId,
        subjectId: subjectId || topicId.split('-')[0] || 'general',
        completedAt: new Date().toISOString()
      });
      localStorage.setItem(STORAGE_KEYS.COMPLETED_TOPICS, JSON.stringify(list));
      window.dispatchEvent(new CustomEvent('eduvia-progress-updated', { detail: { userId, topicId } }));
    }
  } catch (e) {
    console.error(e);
  }
}

export function unmarkTopicCompleted(userId: string, topicId: string): void {
  if (!userId || !topicId) return;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.COMPLETED_TOPICS);
    const list: UserCompletedTopic[] = raw ? JSON.parse(raw) : [];
    const updated = list.filter((item) => !(item.userId === userId && item.topicId === topicId));
    localStorage.setItem(STORAGE_KEYS.COMPLETED_TOPICS, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('eduvia-progress-updated', { detail: { userId, topicId } }));
  } catch (e) {
    console.error(e);
  }
}

/**
 * Calculates a subject's overall progress percentage as the exact average of its topics' progress.
 * Scoped strictly to the selected grade/class level:
 * - When grade is passed or active, uses the exact topics designated for that grade and subject.
 * - Changing grades starts with a fresh 0% progress for that grade's topics without carrying over prior grade's work.
 */
export function calculateUserSubjectProgress(
  userId: string,
  subjectId: SubjectId,
  gradeOrTopicIds?: GradeLevel | string[],
  topicIds?: string[]
): number {
  if (!userId) return 0;

  let explicitTopicIds: string[] | undefined = undefined;
  let targetGrade: GradeLevel | undefined = undefined;

  if (Array.isArray(gradeOrTopicIds)) {
    explicitTopicIds = gradeOrTopicIds;
  } else if (typeof gradeOrTopicIds === 'string' && gradeOrTopicIds.startsWith('grade-')) {
    targetGrade = gradeOrTopicIds as GradeLevel;
    if (Array.isArray(topicIds)) {
      explicitTopicIds = topicIds;
    }
  }

  // 1. If explicit topic IDs provided (standard flow in TopicsView)
  if (explicitTopicIds && explicitTopicIds.length > 0) {
    const totalProgress = explicitTopicIds.reduce((sum, tid) => sum + getTopicProgress(userId, tid), 0);
    return Math.min(100, Math.max(0, Math.round(totalProgress / explicitTopicIds.length)));
  }

  // 2. If targetGrade is known, fetch the topics strictly for that subject and grade!
  if (targetGrade) {
    try {
      const gradeTopics = getTopicsForSubjectAndGrade(subjectId, targetGrade);
      if (gradeTopics && gradeTopics.length > 0) {
        const tids = gradeTopics.map((t) => t.id);
        const totalProgress = tids.reduce((sum, tid) => sum + getTopicProgress(userId, tid), 0);
        return Math.min(100, Math.max(0, Math.round(totalProgress / tids.length)));
      }
    } catch {
      // fallback
    }
  }

  // 3. If stored user has an active grade, calculate against that grade's topics
  const storedUser = getStoredUser();
  if (storedUser?.grade) {
    try {
      const gradeTopics = getTopicsForSubjectAndGrade(subjectId, storedUser.grade);
      if (gradeTopics && gradeTopics.length > 0) {
        const tids = gradeTopics.map((t) => t.id);
        const totalProgress = tids.reduce((sum, tid) => sum + getTopicProgress(userId, tid), 0);
        return Math.min(100, Math.max(0, Math.round(totalProgress / tids.length)));
      }
    } catch {
      // fallback
    }
  }

  // Fallback: check storage for topics completed/in-progress for this subject
  try {
    const watched = getWatchedVideos(userId).filter((id) => id.startsWith(subjectId) || id.includes(subjectId));
    const quizAttempts = getLocalQuizAttempts(userId).filter((q) => q.subjectId === subjectId);
    const completedList = getCompletedTopics(userId);

    const relevantTopicIds = new Set<string>([
      ...watched,
      ...quizAttempts.map((q) => q.topicId),
      ...completedList.filter((id) => id.startsWith(subjectId) || id.includes(subjectId))
    ]);

    if (relevantTopicIds.size === 0) return 0;

    let sum = 0;
    relevantTopicIds.forEach((id) => {
      sum += getTopicProgress(userId, id);
    });

    return Math.min(100, Math.max(0, Math.round(sum / 3)));
  } catch {
    return 0;
  }
}

/**
 * Resets progress specifically for a single grade level, ensuring clean separate tracking.
 */
export function resetGradeProgress(userId: string, grade: GradeLevel): void {
  if (!userId) return;
  try {
    const rawComp = localStorage.getItem(STORAGE_KEYS.COMPLETED_TOPICS);
    if (rawComp) {
      const list: UserCompletedTopic[] = JSON.parse(rawComp);
      const filtered = list.filter((item) => !(item.userId === userId && item.topicId.includes(grade)));
      localStorage.setItem(STORAGE_KEYS.COMPLETED_TOPICS, JSON.stringify(filtered));
    }

    const rawWatched = localStorage.getItem(STORAGE_KEYS.WATCHED_VIDEOS);
    if (rawWatched) {
      const list: WatchedVideoRecord[] = JSON.parse(rawWatched);
      const filtered = list.filter((item) => !(item.userId === userId && item.topicId.includes(grade)));
      localStorage.setItem(STORAGE_KEYS.WATCHED_VIDEOS, JSON.stringify(filtered));
    }

    const rawQuizzes = localStorage.getItem(STORAGE_KEYS.QUIZ_ATTEMPTS);
    if (rawQuizzes) {
      const list: QuizAttempt[] = JSON.parse(rawQuizzes);
      const filtered = list.filter((item) => !(item.userId === userId && (item.grade === grade || item.topicId.includes(grade))));
      localStorage.setItem(STORAGE_KEYS.QUIZ_ATTEMPTS, JSON.stringify(filtered));
    }

    window.dispatchEvent(new CustomEvent('eduvia-progress-updated', { detail: { userId, grade } }));
  } catch (e) {
    console.error('Error resetting grade progress:', e);
  }
}

// ================= NOTES & TASKS =================

export async function fetchNotes(userId: string): Promise<NoteItem[]> {
  try {
    const res = await fetch(`/api/notes?userId=${encodeURIComponent(userId)}`);
    if (res.ok) {
      const data = await res.json();
      if (data.notes) {
        localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(data.notes));
        return data.notes;
      }
    }
  } catch (e) {
    console.warn(e);
  }

  try {
    const local = localStorage.getItem(STORAGE_KEYS.NOTES);
    return local ? JSON.parse(local) : [];
  } catch {
    return [];
  }
}

export async function createNote(note: Omit<NoteItem, 'id' | 'createdAt' | 'updatedAt'>): Promise<NoteItem> {
  const newNote: NoteItem = {
    ...note,
    id: 'note-' + Date.now(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  const current = await fetchNotes(note.userId);
  current.unshift(newNote);
  localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(current));

  try {
    await fetch('/api/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newNote)
    });
  } catch (e) {
    console.warn(e);
  }

  return newNote;
}

export async function saveNote(
  userId: string,
  note: { title: string; content: string; subjectId?: string; topicId?: string }
): Promise<NoteItem> {
  return createNote({
    userId,
    title: note.title,
    content: note.content,
    subjectId: (note.subjectId as SubjectId) || 'math',
    topicId: note.topicId
  });
}

export async function updateNote(
  id: string,
  updates: Partial<Omit<NoteItem, 'id' | 'userId' | 'createdAt'>>,
  userId: string
): Promise<NoteItem | null> {
  const current = await fetchNotes(userId);
  const noteIndex = current.findIndex((n) => n.id === id);
  if (noteIndex === -1) return null;

  const updatedNote: NoteItem = {
    ...current[noteIndex],
    ...updates,
    updatedAt: new Date().toISOString()
  };

  current[noteIndex] = updatedNote;
  localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(current));

  try {
    await fetch(`/api/notes/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, ...updates })
    });
  } catch (e) {
    console.warn(e);
  }

  return updatedNote;
}

export async function removeNote(id: string, userId: string): Promise<void> {
  const current = await fetchNotes(userId);
  const filtered = current.filter((n) => n.id !== id);
  localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(filtered));

  try {
    await fetch(`/api/notes/${id}?userId=${encodeURIComponent(userId)}`, { method: 'DELETE' });
  } catch (e) {
    console.warn(e);
  }
}

export async function fetchTasks(userId: string): Promise<TaskItem[]> {
  try {
    const res = await fetch(`/api/tasks?userId=${encodeURIComponent(userId)}`);
    if (res.ok) {
      const data = await res.json();
      if (data.tasks) {
        localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(data.tasks));
        return data.tasks;
      }
    }
  } catch (e) {
    console.warn(e);
  }

  try {
    const local = localStorage.getItem(STORAGE_KEYS.TASKS);
    return local ? JSON.parse(local) : [];
  } catch {
    return [];
  }
}

export async function createTask(task: Omit<TaskItem, 'id' | 'createdAt'>): Promise<TaskItem> {
  const newTask: TaskItem = {
    ...task,
    id: 'task-' + Date.now(),
    createdAt: new Date().toISOString()
  };

  const current = await fetchTasks(task.userId);
  current.unshift(newTask);
  localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(current));

  try {
    await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTask)
    });
  } catch (e) {
    console.warn(e);
  }

  return newTask;
}

export async function toggleTaskCompletion(id: string, completed: boolean, userId: string): Promise<void> {
  const current = await fetchTasks(userId);
  const task = current.find((t) => t.id === id);
  if (task) {
    task.completed = completed;
    localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(current));
  }

  try {
    await fetch(`/api/tasks/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed, userId })
    });
  } catch (e) {
    console.warn(e);
  }
}

export async function updateTask(
  id: string,
  updates: Partial<Omit<TaskItem, 'id' | 'userId' | 'createdAt'>>,
  userId: string
): Promise<TaskItem | null> {
  const current = await fetchTasks(userId);
  const taskIndex = current.findIndex((t) => t.id === id);
  if (taskIndex === -1) return null;

  const updatedTask: TaskItem = {
    ...current[taskIndex],
    ...updates
  };

  current[taskIndex] = updatedTask;
  localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(current));

  try {
    await fetch(`/api/tasks/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, ...updates })
    });
  } catch (e) {
    console.warn(e);
  }

  return updatedTask;
}

export async function removeTask(id: string, userId: string): Promise<void> {
  const current = await fetchTasks(userId);
  const filtered = current.filter((t) => t.id !== id);
  localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(filtered));

  try {
    await fetch(`/api/tasks/${id}?userId=${encodeURIComponent(userId)}`, { method: 'DELETE' });
  } catch (e) {
    console.warn(e);
  }
}

// ================= LIVE YOUTUBE VIDEO SEARCH =================

export async function fetchLiveTopicVideos(
  topicTitle: string,
  subjectName?: string,
  grade?: string
): Promise<YouTubeVideo[]> {
  const cacheKey = `eduvia_yt_${(topicTitle + '_' + (subjectName || '') + '_' + (grade || '')).toLowerCase().replace(/[^a-z0-9]/g, '_')}`;
  try {
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch {}

  try {
    const params = new URLSearchParams();
    if (topicTitle) params.set('topicTitle', topicTitle);
    if (subjectName) params.set('subject', subjectName);
    if (grade) params.set('grade', grade);

    const res = await fetch(`/api/youtube/search?${params.toString()}`);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.videos) && data.videos.length > 0) {
        try {
          sessionStorage.setItem(cacheKey, JSON.stringify(data.videos));
        } catch {}
        return data.videos;
      }
    }
  } catch (err) {
    console.warn('[Eduvia API] Error fetching live YouTube videos:', err);
  }

  // Resilient fallback with real, working educational videos
  return [
    {
      id: `yt-fb-1`,
      embedId: 'sUhPA4CM7BM',
      title: `${topicTitle} - Foundation & Core Concepts`,
      channel: 'Center Grove Schools / Curated Educator',
      duration: '10:00',
      description: `Comprehensive video tutorial for ${topicTitle}`
    },
    {
      id: `yt-fb-2`,
      embedId: '7J1OkxuyLD0',
      title: `${topicTitle} - Worked Examples & Applications`,
      channel: 'Scratch Garden / Academy',
      duration: '12:00',
      description: `Step-by-step visual lesson on ${topicTitle}`
    },
    {
      id: `yt-fb-3`,
      embedId: 'wyOTIFQSazw',
      title: `${topicTitle} - Practice Drills & Common Mistakes`,
      channel: 'Math (and More) in Minutes',
      duration: '14:00',
      description: `Mastery review for ${topicTitle}`
    }
  ];
}

// ================= MULTIMODAL PHOTO SOLVER =================

export async function aiSolvePhoto(params: {
  imageBase64: string;
  mimeType?: string;
  studentNote?: string;
  subject?: string;
  grade?: string;
}): Promise<string> {
  const res = await fetch('/api/ai/solve-photo', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params)
  });
  let data: any = {};
  try {
    data = await res.json();
  } catch {
    throw new Error(`Server returned HTTP ${res.status}`);
  }
  if (!res.ok) throw new Error(data.error || 'Failed to analyze homework photo');
  return data.text;
}

// ================= GLOBAL BOOKS LIBRARY =================

export async function searchBooks(query: string) {
  const res = await fetch(`/api/books/search?q=${encodeURIComponent(query)}`);
  if (!res.ok) throw new Error('Failed to search books');
  return res.json();
}

export async function getBookChapterSummary(params: {
  bookTitle: string;
  author?: string;
  chapterNumber: number;
}) {
  const res = await fetch('/api/books/summary', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params)
  });
  if (!res.ok) throw new Error('Failed to generate chapter summary');
  return res.json();
}

// ================= BRAINFEED MICRO-LEARNING =================

export async function fetchBrainFeed(category?: string) {
  const url = category && category !== 'All' ? `/api/ai/brainfeed?category=${encodeURIComponent(category)}` : '/api/ai/brainfeed';
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to load BrainFeed cards');
  return res.json();
}

