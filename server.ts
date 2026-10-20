import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { GoogleGenAI, Type, ThinkingLevel } from '@google/genai';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory / server-persisted storage store (only real registered accounts)
interface UserRecord {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  grade: string;
  createdAt: string;
}

const dbUsers: Map<string, UserRecord> = new Map();
const dbMisconceptions: Map<string, any[]> = new Map(); // userId -> records
const dbQuizAttempts: Map<string, any[]> = new Map(); // userId -> attempts
const dbTestResults: Map<string, any[]> = new Map(); // userId -> test results
const dbNotes: Map<string, any[]> = new Map(); // userId -> notes
const dbTasks: Map<string, any[]> = new Map(); // userId -> tasks

const DB_FILE_PATH = path.resolve(process.cwd(), '.eduvia_db.json');

// Seed fallback tasks and notes for guest/unauthenticated requests
const defaultGuestId = 'student-guest';

// Pre-seeded demo student accounts for judges and students
const demoStudentUser: UserRecord = {
  id: 'student-demo',
  name: 'Maya Chen (Demo Student)',
  email: 'student@eduvia.org',
  passwordHash: 'demo123',
  grade: 'grade-10',
  createdAt: '2026-09-01T08:00:00.000Z'
};

const demoUniUser: UserRecord = {
  id: 'uni-demo',
  name: 'Alex Rivera (University Scholar)',
  email: 'university@eduvia.org',
  passwordHash: 'demo123',
  grade: 'uni-sophomore',
  createdAt: '2026-09-01T08:00:00.000Z'
};

function saveDatabaseToFile() {
  try {
    const data = {
      users: Array.from(dbUsers.entries()),
      misconceptions: Array.from(dbMisconceptions.entries()),
      quizAttempts: Array.from(dbQuizAttempts.entries()),
      testResults: Array.from(dbTestResults.entries()),
      notes: Array.from(dbNotes.entries()),
      tasks: Array.from(dbTasks.entries())
    };
    fs.writeFileSync(DB_FILE_PATH, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.warn('Could not write database to disk:', err);
  }
}

function loadDatabaseFromFile() {
  try {
    if (fs.existsSync(DB_FILE_PATH)) {
      const raw = fs.readFileSync(DB_FILE_PATH, 'utf-8');
      const data = JSON.parse(raw);
      if (Array.isArray(data.users)) {
        for (const [k, v] of data.users) dbUsers.set(k, v);
      }
      if (Array.isArray(data.misconceptions)) {
        for (const [k, v] of data.misconceptions) dbMisconceptions.set(k, v);
      }
      if (Array.isArray(data.quizAttempts)) {
        for (const [k, v] of data.quizAttempts) dbQuizAttempts.set(k, v);
      }
      if (Array.isArray(data.testResults)) {
        for (const [k, v] of data.testResults) dbTestResults.set(k, v);
      }
      if (Array.isArray(data.notes)) {
        for (const [k, v] of data.notes) dbNotes.set(k, v);
      }
      if (Array.isArray(data.tasks)) {
        for (const [k, v] of data.tasks) dbTasks.set(k, v);
      }
    }
  } catch (err) {
    console.warn('Could not load database from disk:', err);
  }
  // Guarantee demo accounts always exist and are valid
  dbUsers.set(demoStudentUser.email, demoStudentUser);
  dbUsers.set(demoUniUser.email, demoUniUser);
}

loadDatabaseFromFile();

if (!dbTasks.has(defaultGuestId)) {
  dbTasks.set(defaultGuestId, [
  {
    id: 'task-1',
    userId: defaultGuestId,
    text: 'Review Quadratic Formula discriminant cases before Friday quiz',
    completed: false,
    dueDate: new Date().toISOString().split('T')[0], // Due Today!
    dueTime: '16:00',
    priority: 'high',
    subjectId: 'math',
    createdAt: new Date().toISOString()
  },
  {
    id: 'task-2',
    userId: defaultGuestId,
    text: 'Watch Cognito video on Cellular Respiration electron transport chain',
    completed: false,
    dueDate: new Date(Date.now() + 86400000).toISOString().split('T')[0], // Upcoming
    dueTime: '18:30',
    priority: 'medium',
    subjectId: 'biology',
    createdAt: new Date().toISOString()
  },
  {
    id: 'task-3',
    userId: defaultGuestId,
    text: 'Draft rhetorical analysis paragraph using active voice',
    completed: true,
    dueDate: new Date(Date.now() + 172800000).toISOString().split('T')[0],
    dueTime: '20:00',
    priority: 'low',
    subjectId: 'english-lang',
    createdAt: new Date().toISOString()
  }
  ]);
}

if (!dbNotes.has(defaultGuestId)) {
  dbNotes.set(defaultGuestId, [
  {
    id: 'note-1',
    userId: defaultGuestId,
    title: 'Key Math Formulas: Quadratic Discriminant',
    content: 'Δ = b² - 4ac.\n• Δ > 0: 2 real roots\n• Δ = 0: 1 repeated root\n• Δ < 0: No real roots (complex conjugate roots).\nRemember: Always divide the ENTIRE numerator by 2a, not just the square root!',
    subjectId: 'math',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 86400000).toISOString()
  },
  {
    id: 'note-2',
    userId: defaultGuestId,
    title: 'Cellular Respiration ATP Summary',
    content: '1. Glycolysis (Cytoplasm): 2 ATP + 2 NADH.\n2. Krebs Cycle (Mitochondrial Matrix): 2 ATP + NADH + FADH₂.\n3. Oxidative Phosphorylation (Inner Membrane): ~32-34 ATP.\nTotal yield: ~36-38 ATP per glucose molecule.',
    subjectId: 'biology',
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    updatedAt: new Date(Date.now() - 172800000).toISOString()
  }
  ]);
}

// Initialize Gemini Client safely
let geminiClient: GoogleGenAI | null = null;

function getGemini(): GoogleGenAI {
  if (!geminiClient) {
    geminiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build'
        }
      }
    });
  }
  return geminiClient;
}

// -------------------------------------------------------------
// HEALTH CHECK
// -------------------------------------------------------------
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', name: 'Eduvia Server', timestamp: new Date().toISOString() });
});

// -------------------------------------------------------------
// AUTH ENDPOINTS
// -------------------------------------------------------------

app.post('/api/auth/signup', (req: Request, res: Response) => {
  const { name, email, password, grade } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email, and password are required' });
  }

  const normalizedEmail = email.toLowerCase().trim();
  if (dbUsers.has(normalizedEmail)) {
    return res.status(409).json({ error: 'An account with this email already exists' });
  }

  const id = 'user-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7);
  const newUser: UserRecord = {
    id,
    name: name.trim(),
    email: normalizedEmail,
    passwordHash: password,
    grade: grade || 'grade-10',
    createdAt: new Date().toISOString()
  };

  dbUsers.set(normalizedEmail, newUser);
  dbTasks.set(id, []);
  dbNotes.set(id, []);
  dbMisconceptions.set(id, []);
  dbQuizAttempts.set(id, []);
  dbTestResults.set(id, []);
  saveDatabaseToFile();

  return res.json({
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      grade: newUser.grade,
      joinedAt: newUser.createdAt,
      createdAt: newUser.createdAt
    },
    token: 'jwt-session-' + newUser.id
  });
});

app.post('/api/auth/login', (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  const normalizedEmail = email.toLowerCase().trim();
  const user = dbUsers.get(normalizedEmail);

  if (!user || user.passwordHash !== password) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  return res.json({
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      grade: user.grade,
      joinedAt: user.createdAt,
      createdAt: user.createdAt
    },
    token: 'jwt-session-' + user.id
  });
});

app.post('/api/auth/demo', (req: Request, res: Response) => {
  const { type } = req.body;
  const isUni = type === 'university';
  const user = isUni ? demoUniUser : demoStudentUser;

  return res.json({
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      grade: user.grade,
      joinedAt: user.createdAt,
      createdAt: user.createdAt
    },
    token: 'jwt-session-' + user.id
  });
});

app.patch('/api/user/grade', (req: Request, res: Response) => {
  const { userId, grade } = req.body;
  if (!userId || !grade) {
    return res.status(400).json({ error: 'userId and grade are required' });
  }

  for (const user of dbUsers.values()) {
    if (user.id === userId) {
      user.grade = grade;
      return res.json({ success: true, grade: user.grade });
    }
  }

  return res.status(404).json({ error: 'User not found' });
});

// Helper to call Gemini models with resilient fallback across supported models
async function callEduviaAI(options: {
  contents: any;
  systemInstruction?: string;
  temperature?: number;
}): Promise<string> {
  const ai = getGemini();
  // Primary: gemini-3.1-flash-lite (instantaneous ~1s latency, ultra-smooth)
  // Fallback: gemini-3.8-flash (configured with ThinkingLevel.LOW to prevent 40s thinking delays)
  const candidateModels = ['gemini-3.1-flash-lite', 'gemini-3.8-flash'];
  let lastError: any = null;

  for (const model of candidateModels) {
    try {
      const config: any = {};
      if (options.systemInstruction) {
        config.systemInstruction = options.systemInstruction;
      }
      if (options.temperature !== undefined) {
        config.temperature = options.temperature;
      }
      if (model === 'gemini-3.8-flash') {
        config.thinkingConfig = { thinkingLevel: ThinkingLevel.LOW };
      }

      const response = await ai.models.generateContent({
        model,
        contents: options.contents,
        config: Object.keys(config).length > 0 ? config : undefined
      });

      const text =
        (response?.text || '').trim() ||
        (response?.candidates?.[0]?.content?.parts || [])
          .map((p: any) => p.text)
          .filter(Boolean)
          .join('\n')
          .trim();

      if (text) {
        return text;
      }
    } catch (err: any) {
      console.warn(`[Eduvia AI] Model ${model} returned error (${err?.message || err}). Trying fallback...`);
      lastError = err;
    }
  }

  throw lastError || new Error('All Eduvia AI models failed to respond');
}

function cleanJsonString(raw: string): string {
  let cleaned = raw.trim();
  const jsonBlockRegex = /```(?:json)?\s*([\s\S]*?)\s*```/i;
  const match = cleaned.match(jsonBlockRegex);
  if (match) {
    cleaned = match[1].trim();
  } else {
    // If no markdown block found, extract between outermost [ ] or { }
    const firstBracket = cleaned.indexOf('[');
    const lastBracket = cleaned.lastIndexOf(']');
    const firstBrace = cleaned.indexOf('{');
    const lastBrace = cleaned.lastIndexOf('}');

    if (firstBracket !== -1 && lastBracket !== -1 && (firstBrace === -1 || firstBracket < firstBrace)) {
      cleaned = cleaned.slice(firstBracket, lastBracket + 1);
    } else if (firstBrace !== -1 && lastBrace !== -1) {
      cleaned = cleaned.slice(firstBrace, lastBrace + 1);
    }
  }
  return cleaned.trim();
}

// -------------------------------------------------------------
// EDUVIA AI ENDPOINTS (powered by Gemini server-side)
// -------------------------------------------------------------

// Mode 1: Explain — explains the current topic simply with student-friendly analogies
app.post('/api/ai/explain', async (req: Request, res: Response) => {
  try {
    const { subject, grade, topic, learnSummary, query } = req.body;

    const prompt = `You are Eduvia AI, an enthusiastic, expert, student-friendly AI academic tutor designed for high school and secondary students.
Context:
- Subject: ${subject || 'General'}
- Grade Level: ${grade || 'High School'}
- Current Topic: ${topic || 'General Topic'}
- Topic Summary: ${learnSummary || 'None provided'}

Student's request:
${query || 'Please explain this topic to me in a simple, clear, and memorable way with a real-world analogy and key points.'}

Instructions:
1. Explain the concept in intuitive, engaging language appropriate for this grade level.
2. Use a vivid real-world analogy to make it memorable.
3. List 2-3 key takeaways or rules using markdown bullet points.
4. Keep the tone warm, empowering, and academic.
5. Identify yourself ONLY as Eduvia AI if asked. Never mention Gemini or backend model details.`;

    const text = await callEduviaAI({
      contents: prompt,
      temperature: 0.7
    });

    return res.json({ text });
  } catch (error: any) {
    console.error('Eduvia AI Explain Error:', error);
    return res.status(500).json({
      error: error?.message || 'Eduvia AI could not generate an explanation right now. Please try again.'
    });
  }
});

// Mode 2: Help Me Solve — Socratic-style hints when stuck without giving the direct answer
app.post('/api/ai/solve', async (req: Request, res: Response) => {
  try {
    const { subject, grade, topic, questionText, studentAttempt, hintLevel } = req.body;

    const prompt = `You are Eduvia AI, a master Socratic tutor helping a student who is stuck on a problem.
Context:
- Subject: ${subject || 'General'}
- Grade Level: ${grade || 'High School'}
- Topic: ${topic || 'General Topic'}
- Question: ${questionText}
- Student's current thinking / attempt: ${studentAttempt || 'I do not know where to start'}
- Requested Hint Level: ${hintLevel || 'Hint 1 (Conceptual nudge)'}

CRITICAL PEDAGOGICAL RULE:
DO NOT GIVE AWAY THE DIRECT FINAL ANSWER.
Your goal is to guide the student to discover the answer themselves through Socratic questioning.

Format your response:
1. **Validation**: Acknowledge where their reasoning is on the right track (or gently point out what to reconsider).
2. **Key Clue / Guiding Question**: Ask a focused, leading question or highlight a specific formula or definition they should examine next.
3. **Actionable Next Step**: Tell them what specific calculation, diagram, or comparison to write down right now.`;

    const text = await callEduviaAI({
      contents: prompt,
      temperature: 0.7
    });

    return res.json({ text });
  } catch (error: any) {
    console.error('Eduvia AI Solve Error:', error);
    return res.status(500).json({
      error: error?.message || 'Eduvia AI could not generate a Socratic hint right now. Please try again.'
    });
  }
});

// Mode 3: Why Am I Getting This Wrong? — diagnoses the likely reasoning error behind a student's specific wrong answer
app.post('/api/ai/diagnose', async (req: Request, res: Response) => {
  try {
    const { question, correct_answer, wrong_answer, subject, grade, topic } = req.body;

    const prompt = `You are Eduvia AI, an expert educational diagnostic system that pinpoints the cognitive misconceptions behind student errors.
Analyze the following student mistake:
- Subject: ${subject || 'General'}
- Grade Level: ${grade || 'High School'}
- Topic: ${topic || 'General'}
- Question: "${question}"
- Correct Answer: "${correct_answer}"
- Student's Chosen Wrong Answer: "${wrong_answer}"

Diagnose the exact cognitive or procedural error. Why would a thoughtful student pick "${wrong_answer}"? What specific misconception, formula trap, arithmetic slip, or reading misinterpretation caused this choice?

You MUST respond strictly with a valid JSON object matching this schema (no extra commentary outside the JSON):
{
  "misconception": "Short 1-sentence statement of the core misunderstanding (e.g. 'Confused instantaneous rate of change with average speed')",
  "reasoningFlaw": "Detailed explanation of why the student arrived at this specific wrong answer and what assumption misled them.",
  "correctionTip": "Clear, actionable rule or mental check to avoid this exact pitfall in future exams.",
  "category": "Must be one of: Calculation Slip | Formula Misapplication | Conceptual Confusion | Reading Misinterpretation | Definition Gap | Logical Fallacy",
  "encouragement": "A short, positive, uplifting 1-sentence note affirming the student's progress."
}`;

    const rawText = await callEduviaAI({
      contents: prompt,
      temperature: 0.4
    });

    let parsed: any;
    try {
      parsed = JSON.parse(cleanJsonString(rawText));
    } catch {
      // Fallback object if JSON was slightly malformed
      parsed = {
        misconception: `Cognitive gap regarding ${topic || 'this concept'}`,
        reasoningFlaw: rawText.slice(0, 300),
        correctionTip: 'Review the underlying formula definition and verify each intermediate step.',
        category: 'Conceptual Confusion',
        encouragement: 'Every mistake teaches us something valuable. Keep going!'
      };
    }

    return res.json(parsed);
  } catch (error: any) {
    console.error('Eduvia AI Diagnose Error:', error);
    return res.status(500).json({
      error: error?.message || 'Eduvia AI could not diagnose the misconception right now. Please try again.'
    });
  }
});

// Mode 4: General Help — open chat mode for homework/assignments/any question, accessible app-wide via floating Eduvia AI button
app.post('/api/ai/chat', async (req: Request, res: Response) => {
  try {
    const { messages, context } = req.body;

    const systemInstruction = `You are Eduvia AI, a world-class academic study partner combining the deep reasoning, structural clarity, and elegant explanation of Claude with the speed, responsiveness, and interactive helpfulness of ChatGPT.
You assist high school and secondary students across all subjects (Mathematics, Sciences, Humanities, Languages, and Exam Strategy).

Guidelines:
1. **Direct Value & Clarity**: Start answering directly and clearly without repetitive meta-introductions or conversational filler.
2. **Beautiful Markdown Formatting**: Use bolding, bullet points, numbered step walkthroughs, and clear formulas for readability.
3. **Memorable Analogies**: Ground difficult abstract concepts with crisp real-world analogies.
4. **Socratic Insight**: When helping with homework or problem-solving, explain the "why" behind every step so the student builds intuition.
5. **Identity**: You are Eduvia AI. Never disclose backend API names or model IDs.`;

    // Format conversation history for Gemini ensuring strict turn alternation (user -> model -> user)
    const contents: any[] = [];
    if (Array.isArray(messages) && messages.length > 0) {
      // Find the first user message index to discard initial static UI greetings
      const firstUserIdx = messages.findIndex((m: any) => m && m.role === 'user');
      const validMessages = firstUserIdx !== -1 ? messages.slice(firstUserIdx) : messages;

      for (const m of validMessages) {
        if (!m || typeof m.content !== 'string') continue;
        const text = m.content.trim();
        if (!text) continue;
        // Ignore previous error notifications
        if (text.includes('issue connecting to Eduvia AI') || text.includes('All Eduvia AI models failed')) continue;

        const role = m.role === 'assistant' ? 'model' : 'user';

        if (contents.length > 0 && contents[contents.length - 1].role === role) {
          // Merge consecutive turns with identical role
          contents[contents.length - 1].parts[0].text += `\n\n${text}`;
        } else {
          contents.push({
            role,
            parts: [{ text }]
          });
        }
      }
    }

    if (contents.length === 0) {
      contents.push({
        role: 'user',
        parts: [{ text: req.body.prompt || 'Hello Eduvia AI!' }]
      });
    }

    // Ensure first turn is from user
    if (contents[0].role !== 'user') {
      contents.shift();
      if (contents.length === 0) {
        contents.push({
          role: 'user',
          parts: [{ text: req.body.prompt || 'Hello Eduvia AI!' }]
        });
      }
    }

    // Ensure last turn is from user
    if (contents[contents.length - 1].role !== 'user') {
      contents.push({
        role: 'user',
        parts: [{ text: 'Please continue and assist me with this.' }]
      });
    }

    const text = await callEduviaAI({
      contents,
      systemInstruction,
      temperature: 0.7
    });

    return res.json({ text });
  } catch (error: any) {
    console.error('Eduvia AI Chat Error:', error);
    return res.status(500).json({
      error: error?.message || 'Eduvia AI chat is temporarily unavailable. Please try again.'
    });
  }
});

// Streaming Chat Endpoint (ChatGPT / Claude style live token-by-token streaming)
app.post('/api/ai/chat/stream', async (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders?.();

  try {
    const { messages, context } = req.body;

    const systemInstruction = `You are Eduvia AI, a world-class academic study partner combining the deep reasoning, structural clarity, and elegant explanation of Claude with the speed, responsiveness, and interactive helpfulness of ChatGPT.
You assist high school and secondary students across all subjects (Mathematics, Sciences, Humanities, Languages, and Exam Strategy).

Guidelines:
1. **Direct Value & Clarity**: Start answering directly and clearly without repetitive meta-introductions or conversational filler.
2. **Beautiful Markdown Formatting**: Use bolding, bullet points, numbered step walkthroughs, and clear formulas for readability.
3. **Memorable Analogies**: Ground difficult abstract concepts with crisp real-world analogies.
4. **Socratic Insight**: When helping with homework or problem-solving, explain the "why" behind every step so the student builds intuition.
5. **Identity**: You are Eduvia AI. Never disclose backend API names or model IDs.`;

    const contents: any[] = [];
    if (Array.isArray(messages) && messages.length > 0) {
      const firstUserIdx = messages.findIndex((m: any) => m && m.role === 'user');
      const validMessages = firstUserIdx !== -1 ? messages.slice(firstUserIdx) : messages;

      for (const m of validMessages) {
        if (!m || typeof m.content !== 'string') continue;
        const text = m.content.trim();
        if (!text) continue;
        if (text.includes('issue connecting to Eduvia AI') || text.includes('All Eduvia AI models failed')) continue;

        const role = m.role === 'assistant' ? 'model' : 'user';

        if (contents.length > 0 && contents[contents.length - 1].role === role) {
          contents[contents.length - 1].parts[0].text += `\n\n${text}`;
        } else {
          contents.push({
            role,
            parts: [{ text }]
          });
        }
      }
    }

    if (contents.length === 0) {
      contents.push({
        role: 'user',
        parts: [{ text: req.body.prompt || 'Hello Eduvia AI!' }]
      });
    }

    if (contents[0].role !== 'user') {
      contents.shift();
      if (contents.length === 0) {
        contents.push({
          role: 'user',
          parts: [{ text: req.body.prompt || 'Hello Eduvia AI!' }]
        });
      }
    }

    if (contents[contents.length - 1].role !== 'user') {
      contents.push({
        role: 'user',
        parts: [{ text: 'Please continue and assist me with this.' }]
      });
    }

    const ai = getGemini();
    const candidateModels = ['gemini-3.1-flash-lite', 'gemini-3.8-flash'];
    let streamSuccess = false;

    for (const model of candidateModels) {
      try {
        const config: any = {
          systemInstruction,
          temperature: 0.7
        };
        if (model === 'gemini-3.8-flash') {
          config.thinkingConfig = { thinkingLevel: ThinkingLevel.LOW };
        }

        const stream = await ai.models.generateContentStream({
          model,
          contents,
          config
        });

        for await (const chunk of stream) {
          const chunkText = chunk.text;
          if (chunkText) {
            res.write(`data: ${JSON.stringify({ text: chunkText })}\n\n`);
          }
        }
        streamSuccess = true;
        break;
      } catch (err: any) {
        console.warn(`[Eduvia Stream] Model ${model} failed, trying next:`, err?.message || err);
      }
    }

    if (!streamSuccess) {
      throw new Error('All Eduvia AI models failed to stream');
    }

    res.write('data: [DONE]\n\n');
    res.end();
  } catch (error: any) {
    console.error('Eduvia AI Stream Error:', error);
    res.write(`data: ${JSON.stringify({ error: error?.message || 'Eduvia AI stream error' })}\n\n`);
    res.end();
  }
});

// Mode 5: Auto-name Chat Session (ChatGPT / Claude style conversation auto-titling)
app.post('/api/ai/auto-name-chat', async (req: Request, res: Response) => {
  try {
    const { message } = req.body;
    if (!message || typeof message !== 'string') {
      return res.json({ title: 'New Study Session' });
    }

    const prompt = `Summarize the following student inquiry into a concise, professional conversation title of exactly 3 to 5 words (e.g. "Quadratic Formula Discriminant", "Macbeth Tragic Flaws", "Photosynthesis Light Reaction", "Newton's Second Law Dynamics").
Output ONLY the 3 to 5 words title with no quotation marks, no punctuation, and no emojis.

Student inquiry: "${message.slice(0, 300)}"`;

    const raw = await callEduviaAI({
      contents: prompt,
      temperature: 0.3
    });

    let cleanTitle = raw.replace(/["'\n\r#*]/g, '').trim();
    if (!cleanTitle || cleanTitle.length > 50) {
      cleanTitle = message.slice(0, 30).trim() + '...';
    }

    return res.json({ title: cleanTitle });
  } catch (error) {
    console.error('Auto-name error:', error);
    const fallback = (req.body.message || 'Study Session').slice(0, 25).trim();
    return res.json({ title: fallback });
  }
});

// Mode 6: Generate Quiz / Test Questions Directly from Video Content
app.post('/api/ai/generate-quiz-from-video', async (req: Request, res: Response) => {
  try {
    const { videoTitle, videoDescription, channel, topicTitle, subject, grade } = req.body;

    const prompt = `You are Eduvia AI, a master curriculum and exam author.
Create exactly 5 high-yield multiple-choice questions directly assessing the core principles, worked examples, and misconceptions covered in this educational masterclass:
- Video Title: "${videoTitle || 'Educational Masterclass'}"
- Channel: "${channel || 'Curated Educator'}"
- Video Overview: "${videoDescription || 'Comprehensive curriculum walkthrough'}"
- Academic Topic: "${topicTitle || 'Core Science & Humanities'}"
- Subject: "${subject || 'General'}"
- Target Student Level: "${grade || 'High School'}"

Respond strictly with a JSON array containing exactly 5 question objects matching this schema:
[
  {
    "id": "vq-1",
    "text": "Precise question prompt testing the video content?",
    "options": [
      "Option A (e.g. Correct answer or distractor)",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctIndex": 0,
    "explanation": "Clear explanation referencing the principles explained in the video.",
    "topicTag": "${topicTitle || 'Video Key Concept'}"
  }
]
Requirements:
1. Ensure the correctIndex (0, 1, 2, or 3) matches the exact option that is correct.
2. Vary the correctIndex across the 5 questions so it is not always 0.
3. Base each question on the video's specific focus areas, common student pitfalls, or mathematical derivations.
4. Output ONLY the raw JSON array.`;

    const rawText = await callEduviaAI({
      contents: prompt,
      temperature: 0.4
    });

    let questions: any[] = [];
    try {
      const parsed = JSON.parse(cleanJsonString(rawText));
      if (Array.isArray(parsed) && parsed.length > 0) {
        questions = parsed.map((q: any, idx: number) => ({
          id: q.id || `vq-${Date.now()}-${idx + 1}`,
          text: q.text,
          options: Array.isArray(q.options) && q.options.length >= 4 ? q.options.slice(0, 4) : ['Option A', 'Option B', 'Option C', 'Option D'],
          correctIndex: typeof q.correctIndex === 'number' && q.correctIndex >= 0 && q.correctIndex <= 3 ? q.correctIndex : 0,
          explanation: q.explanation || 'Refer to the video lecture for a comprehensive breakdown.',
          topicTag: q.topicTag || topicTitle || 'Video Concept'
        }));
      }
    } catch (parseErr) {
      console.warn('Could not parse generated video questions, falling back:', parseErr);
    }

    return res.json({ questions });
  } catch (error: any) {
    console.error('Generate quiz from video error:', error);
    return res.status(500).json({ error: error?.message || 'Could not generate quiz from video at this time.' });
  }
});

// Mode 7: Snap Photo Solver (Multimodal Vision for homework, textbook pages, equations)
app.post('/api/ai/solve-photo', async (req: Request, res: Response) => {
  try {
    const { imageBase64, mimeType, studentNote, subject, grade } = req.body;
    if (!imageBase64) {
      return res.status(400).json({ error: 'Image data is required' });
    }

    const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, '');

    const promptText = `You are Eduvia AI, a master multimodal academic tutor. A student snapped a photo of their homework, textbook page, diagram, or handwritten problem.
Context:
- Subject: ${subject || 'General Academic'}
- Grade / Level: ${grade || 'High School / University'}
- Student Note: "${studentNote || 'Please help me solve and understand this'}"

Your Task:
1. **Transcribe the Problem**: Carefully extract and state the exact math expression, question text, or diagram prompt visible in the image.
2. **Core Concept & Governing Rule**: State the underlying scientific theorem, math formula, or concept needed.
3. **Step-by-Step Socratic Walkthrough**: Break down the solution with intuitive steps and clear explanations of WHY each step works.
4. **Common Student Trap / Misconception**: Warn the student about the exact pitfall or arithmetic error most often made on this specific problem.
5. **Key Takeaway**: A 1-sentence memorable summary.

Format your response cleanly with markdown bolding, clear equations, and bullet points. Never disclose backend API names or model IDs.`;

    const ai = getGemini();
    const candidateModels = ['gemini-3.1-flash-lite', 'gemini-3.8-flash'];
    let text = '';
    let lastError: any = null;

    for (const model of candidateModels) {
      try {
        const config: any = {
          temperature: 0.4
        };
        if (model === 'gemini-3.8-flash') {
          config.thinkingConfig = { thinkingLevel: ThinkingLevel.LOW };
        }

        const response = await ai.models.generateContent({
          model,
          contents: [
            {
              role: 'user',
              parts: [
                {
                  inlineData: {
                    mimeType: mimeType || 'image/jpeg',
                    data: cleanBase64
                  }
                },
                { text: promptText }
              ]
            }
          ],
          config
        });

        text = response?.text || '';
        if (text) break;
      } catch (err: any) {
        console.warn(`[Solve Photo] Model ${model} failed:`, err?.message || err);
        lastError = err;
      }
    }

    if (!text) {
      throw lastError || new Error('Could not analyze photo at this time');
    }

    return res.json({ text });
  } catch (error: any) {
    console.error('Solve photo error:', error);
    return res.status(500).json({ error: error?.message || 'Could not analyze homework photo.' });
  }
});

// Mode 8: Books Search (Open Library API + curated classics)
app.get('/api/books/search', async (req: Request, res: Response) => {
  const query = (req.query.q as string || '').trim();
  if (!query) {
    // Return curated high school and university books
    return res.json({
      books: [
        {
          id: 'b-gatsby',
          title: 'The Great Gatsby',
          author: 'F. Scott Fitzgerald',
          year: 1925,
          genre: 'Literature & Fiction',
          description: 'A critique of the American Dream set in the Roaring Twenties on Long Island, following Jay Gatsby and Nick Carraway.',
          chaptersCount: 9,
          fullTextAvailable: true,
          coverUrl: 'https://covers.openlibrary.org/b/id/12644262-M.jpg'
        },
        {
          id: 'b-macbeth',
          title: 'Macbeth',
          author: 'William Shakespeare',
          year: 1606,
          genre: 'Drama & Tragedy',
          description: 'A Scottish general receives a prophecy from witches that he will become king, leading to ambition, guilt, and downfall.',
          chaptersCount: 5,
          fullTextAvailable: true,
          coverUrl: 'https://covers.openlibrary.org/b/id/10534246-M.jpg'
        },
        {
          id: 'b-1984',
          title: '1984',
          author: 'George Orwell',
          year: 1949,
          genre: 'Dystopian & Political',
          description: 'A terrifying depiction of totalitarian surveillance under Big Brother and the Ministry of Truth.',
          chaptersCount: 24,
          fullTextAvailable: true,
          coverUrl: 'https://covers.openlibrary.org/b/id/8575736-M.jpg'
        },
        {
          id: 'b-pride',
          title: 'Pride and Prejudice',
          author: 'Jane Austen',
          year: 1813,
          genre: 'Classic Literature',
          description: 'Elizabeth Bennet navigates manners, marriage, and misunderstandings with the enigmatic Mr. Darcy.',
          chaptersCount: 61,
          fullTextAvailable: true,
          coverUrl: 'https://covers.openlibrary.org/b/id/10432328-M.jpg'
        },
        {
          id: 'b-wealth',
          title: 'The Wealth of Nations',
          author: 'Adam Smith',
          year: 1776,
          genre: 'Economics & Philosophy',
          description: 'The foundation of modern economics describing the division of labor, productivity, and free markets.',
          chaptersCount: 32,
          fullTextAvailable: true,
          coverUrl: 'https://covers.openlibrary.org/b/id/12845642-M.jpg'
        },
        {
          id: 'b-frankenstein',
          title: 'Frankenstein',
          author: 'Mary Shelley',
          year: 1818,
          genre: 'Gothic Sci-Fi',
          description: 'Victor Frankenstein creates a sentient monster in an unorthodox scientific experiment, exploring responsibility and hubris.',
          chaptersCount: 24,
          fullTextAvailable: true,
          coverUrl: 'https://covers.openlibrary.org/b/id/8231996-M.jpg'
        }
      ]
    });
  }

  try {
    const olUrl = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=10`;
    const resp = await fetch(olUrl);
    if (resp.ok) {
      const data = await resp.json();
      if (data.docs && data.docs.length > 0) {
        const books = data.docs.slice(0, 10).map((b: any, idx: number) => ({
          id: b.key ? b.key.replace('/works/', '') : `b-search-${idx}`,
          title: b.title,
          author: Array.isArray(b.author_name) ? b.author_name[0] : (b.author_name || 'Unknown Author'),
          year: b.first_publish_year || 2020,
          genre: Array.isArray(b.subject) ? b.subject.slice(0, 2).join(', ') : 'Academic Reading',
          description: b.first_sentence ? (Array.isArray(b.first_sentence) ? b.first_sentence[0] : b.first_sentence) : `A celebrated work by ${Array.isArray(b.author_name) ? b.author_name[0] : 'the author'} studied across high school and university curricula.`,
          chaptersCount: 12,
          fullTextAvailable: true,
          coverUrl: b.cover_i ? `https://covers.openlibrary.org/b/id/${b.cover_i}-M.jpg` : undefined
        }));
        return res.json({ books });
      }
    }
  } catch (err) {
    console.warn('Open Library search failed, using fallback search:', err);
  }

  // Fallback book search
  return res.json({
    books: [
      {
        id: `b-custom-${Date.now()}`,
        title: query,
        author: 'Academic Curriculum Reference',
        year: 2024,
        genre: 'Syllabus Core Reading',
        description: `Comprehensive academic study guide and literary breakdown for "${query}".`,
        chaptersCount: 10,
        fullTextAvailable: true
      }
    ]
  });
});

// Mode 9: Book Deep Chapter Summary & Quiz Prep
app.post('/api/books/summary', async (req: Request, res: Response) => {
  try {
    const { bookTitle, author, chapterNumber } = req.body;
    const chapNum = chapterNumber || 1;

    const prompt = `You are Eduvia AI, a world-class literary and academic scholar.
Provide a deep, chapter-by-chapter summary and quiz preparation guide for:
Book: "${bookTitle}"
Author: "${author || 'Unknown'}"
Chapter: ${chapNum}

Return strictly a valid JSON object matching this schema (no commentary outside the JSON):
{
  "chapterNumber": ${chapNum},
  "title": "Title or descriptive label of Chapter ${chapNum}",
  "keyEvents": [
    "Key event 1 with critical plot or argument detail",
    "Key event 2 with character action or evidence",
    "Key event 3 with turning point or resolution"
  ],
  "coreThemes": [
    "Theme 1 with literary or analytical justification",
    "Theme 2 with symbolism or author's intent"
  ],
  "examCheatSheet": "A high-density 2-3 sentence summary that directly answers standard high school or university exam questions about this chapter.",
  "anticipatedQuizQuestions": [
    {
      "question": "What is the primary motivation or significance of the main event in Chapter ${chapNum}?",
      "answer": "Clear, precise model answer suitable for an A-grade quiz response."
    },
    {
      "question": "How does the author use symbolism, rhetoric, or character contrast in this section?",
      "answer": "Detailed answer highlighting the specific literary or rhetorical device."
    },
    {
      "question": "What key consequence from this chapter sets up future events in the book?",
      "answer": "Direct answer connecting this chapter to the broader work."
    }
  ]
}`;

    const rawText = await callEduviaAI({
      contents: prompt,
      temperature: 0.5
    });

    let parsed: any;
    try {
      parsed = JSON.parse(cleanJsonString(rawText));
    } catch {
      parsed = {
        chapterNumber: chapNum,
        title: `Chapter ${chapNum} Analysis`,
        keyEvents: [
          `Key narrative or argumentative developments occur in Chapter ${chapNum} of ${bookTitle}.`,
          'Major interactions and thematic tensions emerge between primary characters.',
          'Foundational context established for upcoming examination questions.'
        ],
        coreThemes: ['Central thematic tension', 'Rhetorical symbolism and tone'],
        examCheatSheet: `Chapter ${chapNum} of ${bookTitle} establishes core thematic motifs and character motivations frequently tested on midterms.`,
        anticipatedQuizQuestions: [
          {
            question: `What is the central focus of Chapter ${chapNum}?`,
            answer: `It develops the primary thesis and emotional stakes of ${bookTitle}.`
          }
        ]
      };
    }

    return res.json({ summary: parsed });
  } catch (error: any) {
    console.error('Book summary error:', error);
    return res.status(500).json({ error: error?.message || 'Could not generate book summary.' });
  }
});

// Mode 10: BrainFeed — Educated Doom Scrolling (Bite-sized micro-learning feed with interactive polls)
app.get('/api/ai/brainfeed', async (req: Request, res: Response) => {
  const category = (req.query.category as string) || 'All';

  const defaultCards = [
    {
      id: 'feed-1',
      title: 'The Banach-Tarski Paradox',
      category: 'Calculus & Math',
      readTime: '60s read',
      hook: 'Can you cut a solid gold sphere into 5 pieces and reassemble them into TWO identical gold spheres?',
      coreInsight: 'In 1924, mathematicians Stefan Banach and Alfred Tarski proved using the Axiom of Choice that a 3D ball can be decomposed into a finite number of non-measurable point-sets, and purely by rigid rotations and translations, reassembled into two spheres identical in volume to the original.',
      realWorldAnalogy: 'Imagine taking a dense cloud of dust particles that have no solid volume, twisting them, and discovering they pack into two whole dust clouds.',
      quickCheck: {
        question: 'Why can this paradox happen in pure mathematics but never with physical matter?',
        options: [
          'Physical matter is made of finite discrete atoms, not infinitely divisible mathematical points',
          'Gold is too heavy to rotate in 3 dimensions',
          'The Axiom of Choice only works on prime numbers',
          'It is actually possible in modern quantum computing labs'
        ],
        correctIndex: 0,
        explanation: 'The Banach-Tarski paradox relies on non-measurable sets of infinite mathematical points. Real matter consists of discrete quantum atoms that cannot be endlessly subdivided!'
      },
      takeaway: 'Mathematical infinity breaks our daily physical intuition in glorious ways.'
    },
    {
      id: 'feed-2',
      title: 'Action Potentials & The All-or-None Law',
      category: 'Neuroscience & Psychology',
      readTime: '45s read',
      hook: 'Why your brain cannot send a "gentle" electrical nerve impulse.',
      coreInsight: 'Neurons operate on the All-or-None Principle. If a stimulus depolarizes the axonal membrane to the threshold voltage (approx -55mV), voltage-gated Na+ channels snap open, generating an action potential of constant full magnitude (+30mV). If threshold is not reached, no signal fires at all.',
      realWorldAnalogy: 'Pulling the trigger on a gun. Pulling it halfway does not shoot a slower bullet; pulling it hard does not shoot a bigger bullet. Once the threshold is crossed, the full shot releases.',
      quickCheck: {
        question: 'How then does your brain tell the difference between a soft whisper and a loud scream?',
        options: [
          'By the FREQUENCY of action potentials per second, not the height of each spike',
          'By making the electrical spike twice as tall',
          'By changing the color of neurotransmitters',
          'By sending electricity backwards through the dendrites'
        ],
        correctIndex: 0,
        explanation: 'Intensity is frequency-coded! A soft touch fires 5 action potentials per second; a hard pinch fires 150 spikes per second. Each individual spike is the exact same voltage!'
      },
      takeaway: 'Intensity in the nervous system is encoded by frequency, never amplitude.'
    },
    {
      id: 'feed-3',
      title: 'The Cobra Effect (Perverse Incentives)',
      category: 'Economics & Philosophy',
      readTime: '50s read',
      hook: 'How paying citizens to catch dangerous snakes resulted in MORE snakes.',
      coreInsight: 'During British rule in colonial India, authorities placed a cash bounty on dead venomous cobras to reduce snakebites. Enterprising locals responded logically to the incentive: they began breeding cobras at home to kill and turn in for cash. When the government scrapped the bounty, breeders released all their worthless cobras into the streets, leaving Delhi with far more cobras than before.',
      realWorldAnalogy: 'Rewarding software engineers per line of code written leads to bloated, slow 10,000-line loops instead of concise 5-line algorithms.',
      quickCheck: {
        question: 'What is the fundamental law of incentives illustrated by the Cobra Effect?',
        options: [
          'People optimize for the reward metric itself, not the underlying goal you intended',
          'Bounties only work on mammals, not reptiles',
          'Government subsidies always lower population growth',
          'Free markets eliminate animal populations naturally'
        ],
        correctIndex: 0,
        explanation: 'Goodhart\'s Law: When a measure becomes a target, it ceases to be a good measure. People optimize directly for the metric!'
      },
      takeaway: 'Always analyze the second-order unintended consequences of any reward system.'
    },
    {
      id: 'feed-4',
      title: 'Time Dilation & The Hafele-Keating Experiment',
      category: 'Physics & Space',
      readTime: '60s read',
      hook: 'Astronauts and airline pilots age slower than people on the ground.',
      coreInsight: 'Einstein\'s Special and General Relativity prove that time is not universal. Moving at high speeds dilates time (slows your clock relative to a stationary observer), while stronger gravity also slows down time. In 1971, Hafele and Keating flew atomic cesium clocks around the world on commercial airliners and verified they ticked at measurably different rates compared to ground clocks.',
      realWorldAnalogy: 'Your GPS navigation in your phone has to deliberately adjust its satellite clocks by 38 microseconds every day, or Google Maps would drift off by 11 kilometers daily.',
      quickCheck: {
        question: 'What happens to a clock inside a satellite orbiting 20,000 km above Earth?',
        options: [
          'Because gravity is weaker up high, General Relativity makes it tick FASTER than ground clocks',
          'Because it is in space, time completely stops',
          'The vacuum of space freezes the internal quartz crystal',
          'Gravity has no effect on time, only speed does'
        ],
        correctIndex: 0,
        explanation: 'Gravitational time dilation makes clocks tick faster in weaker gravity (higher altitude)! This effect dominates the speed slowdown for high GPS orbits.'
      },
      takeaway: 'Time is relative to where you stand in a gravitational well and how fast you move.'
    },
    {
      id: 'feed-5',
      title: 'Why Binary Search Runs in O(log n)',
      category: 'CS & AI',
      readTime: '45s read',
      hook: 'You can find any word in a 1,000,000-word dictionary in at most 20 checks.',
      coreInsight: 'Instead of scanning sequentially from page 1 to 1,000,000 (linear O(n) search), Binary Search opens the dictionary in the exact middle. If your word is alphabetically after, you discard 500,000 pages in ONE step. Repeating this cuts the search space in half every round ($2^{20} > 1,000,000$).',
      realWorldAnalogy: 'Guessing a number between 1 and 100 with "Higher / Lower" clues. Guessing 50 eliminates half the universe in 1 second.',
      quickCheck: {
        question: 'What prerequisite must a collection satisfy before Binary Search can be used?',
        options: [
          'The data must already be sorted in order',
          'The data must contain only prime numbers',
          'The array size must be an odd number',
          'The elements must be stored in cloud servers'
        ],
        correctIndex: 0,
        explanation: 'Binary search only works on sorted collections! If the elements aren\'t ordered, you cannot know which half to discard.'
      },
      takeaway: 'Halving your problem space logarithmically is the superpower of computer science.'
    }
  ];

  return res.json({ cards: defaultCards });
});

// -------------------------------------------------------------
// MISCONCEPTIONS LOG & RECURRING MISTAKE PATTERNS
// -------------------------------------------------------------

app.post('/api/misconceptions', (req: Request, res: Response) => {
  const { userId, questionText, wrongAnswerText, correctAnswerText, misconception, reasoningFlaw, category, topicTag, subjectId, grade } = req.body;
  if (!userId || !questionText) {
    return res.status(400).json({ error: 'userId and questionText required' });
  }

  const record = {
    id: 'misc-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6),
    userId,
    questionText,
    wrongAnswerText,
    correctAnswerText,
    misconception: misconception || 'Conceptual error identified by Eduvia AI',
    reasoningFlaw: reasoningFlaw || '',
    category: category || 'Conceptual Confusion',
    topicTag: topicTag || 'General',
    subjectId: subjectId || 'math',
    grade: grade || 'grade-10',
    timestamp: new Date().toISOString()
  };

  const list = dbMisconceptions.get(userId) || [];
  list.unshift(record);
  dbMisconceptions.set(userId, list);

  return res.json({ success: true, record });
});

app.get('/api/misconceptions', (req: Request, res: Response) => {
  const userId = (req.query.userId as string) || defaultGuestId;
  const list = dbMisconceptions.get(userId) || [];

  // Calculate recurring patterns
  const categoryCounts: Record<string, number> = {};
  const topicCounts: Record<string, number> = {};

  list.forEach((m) => {
    categoryCounts[m.category] = (categoryCounts[m.category] || 0) + 1;
    topicCounts[m.topicTag] = (topicCounts[m.topicTag] || 0) + 1;
  });

  const topCategory = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1])[0];
  const topTopic = Object.entries(topicCounts).sort((a, b) => b[1] - a[1])[0];

  return res.json({
    records: list,
    patterns: {
      totalLogged: list.length,
      topCategory: topCategory ? { name: topCategory[0], count: topCategory[1] } : null,
      topTopic: topTopic ? { name: topTopic[0], count: topTopic[1] } : null,
      breakdownByCategory: categoryCounts,
      breakdownByTopic: topicCounts
    }
  });
});

// -------------------------------------------------------------
// QUIZ ATTEMPTS & TEST RESULTS
// -------------------------------------------------------------

app.post('/api/quizzes/attempt', (req: Request, res: Response) => {
  const { userId, subjectId, topicId, grade, score, total, answers, diagnoses } = req.body;
  const attempt = {
    id: 'quiz-att-' + Date.now(),
    userId: userId || defaultGuestId,
    subjectId,
    topicId,
    grade,
    score,
    total,
    answers,
    diagnoses,
    completedAt: new Date().toISOString()
  };

  const list = dbQuizAttempts.get(attempt.userId) || [];
  list.unshift(attempt);
  dbQuizAttempts.set(attempt.userId, list);

  return res.json({ success: true, attempt });
});

app.get('/api/quizzes/attempts', (req: Request, res: Response) => {
  const userId = (req.query.userId as string) || defaultGuestId;
  const list = dbQuizAttempts.get(userId) || [];
  return res.json({ attempts: list });
});

app.post('/api/tests/result', (req: Request, res: Response) => {
  const { userId, subjectId, grade, score, totalQuestions, percentage, timeSpentSeconds, topicBreakdown, wrongQuestions } = req.body;
  const testRecord = {
    id: 'test-res-' + Date.now(),
    userId: userId || defaultGuestId,
    subjectId,
    grade,
    score,
    totalQuestions,
    percentage,
    timeSpentSeconds,
    topicBreakdown,
    wrongQuestions,
    completedAt: new Date().toISOString()
  };

  const list = dbTestResults.get(testRecord.userId) || [];
  list.unshift(testRecord);
  dbTestResults.set(testRecord.userId, list);

  return res.json({ success: true, result: testRecord });
});

app.get('/api/tests/results', (req: Request, res: Response) => {
  const userId = (req.query.userId as string) || defaultGuestId;
  const list = dbTestResults.get(userId) || [];
  return res.json({ results: list });
});

// -------------------------------------------------------------
// NOTES & TASKS
// -------------------------------------------------------------

app.get('/api/notes', (req: Request, res: Response) => {
  const userId = (req.query.userId as string) || defaultGuestId;
  const notes = dbNotes.get(userId) || [];
  return res.json({ notes });
});

app.post('/api/notes', (req: Request, res: Response) => {
  const { userId, title, content, subjectId, topicId } = req.body;
  const uId = userId || defaultGuestId;
  const newNote = {
    id: 'note-' + Date.now(),
    userId: uId,
    title: title || 'Untitled Note',
    content: content || '',
    subjectId: subjectId || '',
    topicId: topicId || '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  const notes = dbNotes.get(uId) || [];
  notes.unshift(newNote);
  dbNotes.set(uId, notes);

  return res.json({ success: true, note: newNote });
});

app.put('/api/notes/:id', (req: Request, res: Response) => {
  const noteId = req.params.id;
  const { userId, title, content, subjectId } = req.body;
  const uId = userId || defaultGuestId;
  const notes = dbNotes.get(uId) || [];
  const idx = notes.findIndex((n: any) => n.id === noteId);
  if (idx !== -1) {
    notes[idx] = {
      ...notes[idx],
      title: title !== undefined ? title : notes[idx].title,
      content: content !== undefined ? content : notes[idx].content,
      subjectId: subjectId !== undefined ? subjectId : notes[idx].subjectId,
      updatedAt: new Date().toISOString()
    };
    dbNotes.set(uId, notes);
    return res.json({ success: true, note: notes[idx] });
  }
  return res.status(404).json({ error: 'Note not found' });
});

app.delete('/api/notes/:id', (req: Request, res: Response) => {
  const noteId = req.params.id;
  const userId = (req.query.userId as string) || defaultGuestId;
  const notes = dbNotes.get(userId) || [];
  const filtered = notes.filter((n) => n.id !== noteId);
  dbNotes.set(userId, filtered);
  return res.json({ success: true });
});

app.get('/api/tasks', (req: Request, res: Response) => {
  const userId = (req.query.userId as string) || defaultGuestId;
  const tasks = dbTasks.get(userId) || [];
  return res.json({ tasks });
});

app.post('/api/tasks', (req: Request, res: Response) => {
  const { userId, text, dueDate, dueTime, priority, subjectId } = req.body;
  const uId = userId || defaultGuestId;
  const newTask = {
    id: 'task-' + Date.now(),
    userId: uId,
    text,
    completed: false,
    dueDate,
    dueTime,
    priority: priority || 'medium',
    subjectId: subjectId || '',
    createdAt: new Date().toISOString()
  };

  const tasks = dbTasks.get(uId) || [];
  tasks.unshift(newTask);
  dbTasks.set(uId, tasks);

  return res.json({ success: true, task: newTask });
});

app.patch('/api/tasks/:id', (req: Request, res: Response) => {
  const taskId = req.params.id;
  const userId = (req.body.userId as string) || defaultGuestId;
  const { completed } = req.body;
  const tasks = dbTasks.get(userId) || [];
  const task = tasks.find((t) => t.id === taskId);
  if (task) {
    if (completed !== undefined) task.completed = completed;
    return res.json({ success: true, task });
  }
  return res.status(404).json({ error: 'Task not found' });
});

app.delete('/api/tasks/:id', (req: Request, res: Response) => {
  const taskId = req.params.id;
  const userId = (req.query.userId as string) || defaultGuestId;
  const tasks = dbTasks.get(userId) || [];
  const filtered = tasks.filter((t) => t.id !== taskId);
  dbTasks.set(userId, filtered);
  return res.json({ success: true });
});

// -------------------------------------------------------------
// LIVE YOUTUBE VIDEO SEARCH (YouTube Data API v3 + Live Verification)
// -------------------------------------------------------------

interface YouTubeSearchItem {
  id: string;
  embedId: string;
  title: string;
  channel: string;
  duration: string;
  description: string;
}

const youtubeSearchCache = new Map<string, YouTubeSearchItem[]>();

async function searchLiveYouTubeVideos(query: string): Promise<YouTubeSearchItem[]> {
  const normalizedKey = query.toLowerCase().trim();
  if (youtubeSearchCache.has(normalizedKey)) {
    return youtubeSearchCache.get(normalizedKey)!;
  }

  const apiKey = process.env.YOUTUBE_API_KEY;
  if (apiKey) {
    try {
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoEmbeddable=true&maxResults=3&q=${encodeURIComponent(query)}&key=${apiKey}`;
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        if (data.items && data.items.length > 0) {
          const results: YouTubeSearchItem[] = data.items.map((item: any, idx: number) => ({
            id: `yt-live-${item.id.videoId}-${idx}`,
            embedId: item.id.videoId,
            title: item.snippet.title,
            channel: item.snippet.channelTitle,
            duration: '10:00',
            description: item.snippet.description || `Tutorial on ${query}`
          }));
          youtubeSearchCache.set(normalizedKey, results);
          return results;
        }
      }
    } catch (apiErr) {
      console.warn('[YouTube API] Key failed, using live scrape fallback:', apiErr);
    }
  }

  // Resilient live fallback using YouTube search results + oEmbed verification
  try {
    const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
    const resp = await fetch(searchUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9'
      }
    });
    if (resp.ok) {
      const html = await resp.text();
      const videoIds = [...new Set([...html.matchAll(/"videoId":"([a-zA-Z0-9_-]{11})"/g)].map((m) => m[1]))].slice(0, 3);

      if (videoIds.length > 0) {
        const results = await Promise.all(
          videoIds.map(async (vid, idx) => {
            try {
              const oembedRes = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${vid}&format=json`);
              if (oembedRes.ok) {
                const odata = await oembedRes.json();
                return {
                  id: `yt-live-${vid}-${idx}`,
                  embedId: vid,
                  title: odata.title || query,
                  channel: odata.author_name || 'Educational Channel',
                  duration: '10:00',
                  description: `Curated masterclass for ${query}`
                };
              }
            } catch {}
            return {
              id: `yt-live-${vid}-${idx}`,
              embedId: vid,
              title: query,
              channel: 'Educational Channel',
              duration: '10:00',
              description: `Tutorial lesson on ${query}`
            };
          })
        );
        youtubeSearchCache.set(normalizedKey, results);
        return results;
      }
    }
  } catch (err) {
    console.error('[YouTube Search] Failed to retrieve live videos:', err);
  }

  // Default verified educational fallbacks if network fails entirely
  return [
    {
      id: `yt-fallback-1`,
      embedId: 'sUhPA4CM7BM',
      title: `${query} - Core Concept Masterclass`,
      channel: 'Center Grove Schools / Educational Media',
      duration: '10:00',
      description: `Comprehensive video tutorial for ${query}.`
    },
    {
      id: `yt-fallback-2`,
      embedId: '7J1OkxuyLD0',
      title: `${query} - Worked Examples & Practice`,
      channel: 'Scratch Garden / Academy',
      duration: '12:00',
      description: `Step-by-step guidance on ${query}.`
    },
    {
      id: `yt-fallback-3`,
      embedId: 'wyOTIFQSazw',
      title: `${query} - Deep Dive & Practice`,
      channel: 'Math (and More) in Minutes',
      duration: '14:00',
      description: `Reviewing misconceptions and problem strategies for ${query}.`
    }
  ];
}

app.get('/api/youtube/search', async (req: Request, res: Response) => {
  const queryParam = req.query.query as string;
  const topicTitle = req.query.topicTitle as string;
  const subject = req.query.subject as string;
  const grade = req.query.grade as string;

  const searchQuery = queryParam || `${topicTitle || ''} ${subject || ''} ${grade || ''} tutorial`.trim();
  if (!searchQuery) {
    return res.status(400).json({ error: 'Search query or topicTitle is required' });
  }

  const videos = await searchLiveYouTubeVideos(searchQuery);
  return res.json({ videos });
});

app.post('/api/youtube/search', async (req: Request, res: Response) => {
  const { query, topicTitle, subject, grade } = req.body;
  const searchQuery = query || `${topicTitle || ''} ${subject || ''} ${grade || ''} tutorial`.trim();
  if (!searchQuery) {
    return res.status(400).json({ error: 'Search query or topicTitle is required' });
  }

  const videos = await searchLiveYouTubeVideos(searchQuery);
  return res.json({ videos });
});


// -------------------------------------------------------------
// VITE MIDDLEWARE & STATIC ASSET HANDLER
// -------------------------------------------------------------

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Eduvia server running on port ${PORT}`);
  });
}

startServer();
