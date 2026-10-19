import express, { Request, Response } from 'express';
import path from 'path';
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

// Seed fallback tasks and notes for guest/unauthenticated requests
const defaultGuestId = 'student-guest';
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
