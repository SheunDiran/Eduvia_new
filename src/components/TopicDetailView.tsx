import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  ArrowLeft,
  Play,
  Sparkles,
  BookOpen,
  HelpCircle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  MessageSquare,
  Lightbulb,
  AlertTriangle,
  ChevronRight,
  Send,
  Video,
  ExternalLink,
  ShieldAlert,
  Loader2
} from 'lucide-react';
import { MisconceptionDiagnosis, Question, SubjectId, Topic, UserProfile, YouTubeVideo } from '../types';
import { SUBJECTS, ALL_SUBJECTS_MAP } from '../data/subjects';
import {
  aiDiagnoseMisconception,
  aiExplainTopic,
  aiGeneralChat,
  aiStreamGeneralChat,
  aiSocraticSolve,
  aiGenerateQuizFromVideo,
  logMisconceptionRecord,
  saveQuizAttempt,
  isTopicCompleted,
  markTopicCompleted,
  unmarkTopicCompleted
} from '../services/api';
import { MarkdownRenderer } from './MarkdownRenderer';

interface TopicDetailViewProps {
  topic: Topic;
  user: UserProfile;
  onBack: () => void;
  onOpenNotesWithTopic: (topic: Topic) => void;
}

export const TopicDetailView: React.FC<TopicDetailViewProps> = ({
  topic,
  user,
  onBack,
  onOpenNotesWithTopic
}) => {
  // Video state (3 curated video options)
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number>(0);
  const currentVideo: YouTubeVideo = topic.videos[selectedVideoIndex] || topic.videos[0];
  const [isCompleted, setIsCompleted] = useState<boolean>(() => isTopicCompleted(user.id, topic.id));

  // Active Main Tab: 'learn' | 'videos' | 'quiz' | 'ai-tutor'
  const [activeTab, setActiveTab] = useState<'learn' | 'videos' | 'quiz' | 'ai-tutor'>('videos');

  // Dynamic / Video Quiz State
  const [activeQuizQuestions, setActiveQuizQuestions] = useState<Question[]>(topic.quizQuestions || []);
  const [isGeneratingVideoQuiz, setIsGeneratingVideoQuiz] = useState<boolean>(false);
  const [quizSource, setQuizSource] = useState<'curated' | 'video-generated'>('curated');
  const [videoQuizNote, setVideoQuizNote] = useState<string | null>(null);

  // Quiz State
  // Requirement: exactly 5 questions, no timer, answers NOT marked correct/wrong until all 5 are answered
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [diagnosingQuestionId, setDiagnosingQuestionId] = useState<string | null>(null);
  const [diagnoses, setDiagnoses] = useState<Record<string, MisconceptionDiagnosis>>({});

  // Eduvia AI Panel State
  const [aiMode, setAiMode] = useState<'explain' | 'solve' | 'diagnose' | 'chat'>('explain');
  const [aiQuery, setAiQuery] = useState('');
  const [aiStudentAttempt, setAiStudentAttempt] = useState('');
  const [aiQuestionForSolve, setAiQuestionForSolve] = useState('');
  const [aiDiagQuestion, setAiDiagQuestion] = useState('');
  const [aiDiagWrong, setAiDiagWrong] = useState('');
  const [aiDiagCorrect, setAiDiagCorrect] = useState('');
  const [aiOutput, setAiOutput] = useState<string | null>(null);
  const [aiOutputDiagnosis, setAiOutputDiagnosis] = useState<MisconceptionDiagnosis | null>(null);
  const [isAiLoading, setIsAiLoading] = useState<boolean>(false);

  // General chat messages inside AI tab
  const [chatMessages, setChatMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    {
      role: 'assistant',
      content: `Hello ${user.name}! I am Eduvia AI. How can I help you master "${topic.title}" today? Feel free to ask for step-by-step explanations, formulas, or homework hints!`
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((curr) => (curr === msg ? null : curr));
    }, 4500);
  };

  const subject = ALL_SUBJECTS_MAP[topic.subjectId] || SUBJECTS.find((s) => s.id === topic.subjectId);

  useEffect(() => {
    setActiveQuizQuestions(topic.quizQuestions || []);
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setQuizScore(0);
    setDiagnoses({});
    setSelectedVideoIndex(0);
    setQuizSource('curated');
    setVideoQuizNote(null);
    setIsCompleted(isTopicCompleted(user.id, topic.id));
    setChatMessages([
      {
        role: 'assistant',
        content: `Hello ${user.name}! I am Eduvia AI. How can I help you master "${topic.title}" today? Feel free to ask for step-by-step explanations, formulas, or homework hints!`
      }
    ]);
  }, [topic.id, user.id, user.name]);

  // -------------------------------------------------------------
  // QUIZ LOGIC
  // -------------------------------------------------------------

  const handleSelectOption = (questionIndex: number, optionIndex: number) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionIndex]: optionIndex }));
  };

  const handleGenerateQuizFromVideo = async () => {
    setIsGeneratingVideoQuiz(true);
    try {
      const generated = await aiGenerateQuizFromVideo({
        videoTitle: currentVideo.title,
        videoDescription: currentVideo.description || topic.subtitle,
        channel: currentVideo.channel,
        topicTitle: topic.title,
        subject: subject?.name || 'General',
        grade: user.grade
      });

      if (generated && generated.length > 0) {
        setActiveQuizQuestions(generated);
        setQuizSource('video-generated');
        setVideoQuizNote(`Generated 5 questions directly from "${currentVideo.title}" (${currentVideo.channel})`);
        setSelectedAnswers({});
        setQuizSubmitted(false);
        setQuizScore(0);
        setDiagnoses({});
        setActiveTab('quiz');
      } else {
        showToast('Could not generate new quiz questions from this video right now. You can try another video option or use the curated topic quiz.');
      }
    } catch (err: any) {
      showToast('Error generating quiz from video: ' + (err.message || 'Unknown error'));
    } finally {
      setIsGeneratingVideoQuiz(false);
    }
  };

  const handleResetToCuratedQuiz = () => {
    setActiveQuizQuestions(topic.quizQuestions);
    setQuizSource('curated');
    setVideoQuizNote(null);
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setQuizScore(0);
    setDiagnoses({});
  };

  const handleSubmitQuiz = async () => {
    if (Object.keys(selectedAnswers).length < activeQuizQuestions.length) {
      showToast(`Please answer all ${activeQuizQuestions.length} questions before submitting!`);
      return;
    }

    let calculatedScore = 0;
    const wrongQuestions: { q: Question; selectedOpt: string; correctOpt: string }[] = [];

    activeQuizQuestions.forEach((q, idx) => {
      const chosen = selectedAnswers[idx];
      if (chosen === q.correctIndex) {
        calculatedScore++;
      } else {
        wrongQuestions.push({
          q,
          selectedOpt: q.options[chosen] || 'Option ' + chosen,
          correctOpt: q.options[q.correctIndex]
        });
      }
    });

    setQuizScore(calculatedScore);
    setQuizSubmitted(true);

    // Trigger celebration if >= 80%
    if (calculatedScore >= 4) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }

    // Save quiz attempt
    await saveQuizAttempt({
      userId: user.id,
      subjectId: topic.subjectId,
      topicId: topic.id,
      grade: user.grade,
      score: calculatedScore,
      total: activeQuizQuestions.length,
      answers: selectedAnswers
    });

    if (calculatedScore >= 3) {
      markTopicCompleted(user.id, topic.id, topic.subjectId);
      setIsCompleted(true);
    }

    // Automatically trigger Eduvia AI diagnosis for wrong answers in background
    if (wrongQuestions.length > 0) {
      for (const item of wrongQuestions) {
        try {
          const diag = await aiDiagnoseMisconception({
            question: item.q.text,
            correct_answer: item.correctOpt,
            wrong_answer: item.selectedOpt,
            subject: subject?.name || 'General',
            grade: user.grade,
            topic: topic.title
          });

          setDiagnoses((prev) => ({ ...prev, [item.q.id]: diag }));

          // Save to persistent misconceptions log
          await logMisconceptionRecord({
            userId: user.id,
            questionText: item.q.text,
            wrongAnswerText: item.selectedOpt,
            correctAnswerText: item.correctOpt,
            misconception: diag.misconception,
            reasoningFlaw: diag.reasoningFlaw,
            category: diag.category,
            topicTag: item.q.topicTag || topic.title,
            subjectId: topic.subjectId,
            grade: user.grade
          });
        } catch (e) {
          console.error('Auto-diagnosis error:', e);
        }
      }
    }
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setQuizScore(0);
    setDiagnoses({});
  };

  const handleManualDiagnose = async (q: Question, wrongIndex: number) => {
    setDiagnosingQuestionId(q.id);
    try {
      const diag = await aiDiagnoseMisconception({
        question: q.text,
        correct_answer: q.options[q.correctIndex],
        wrong_answer: q.options[wrongIndex],
        subject: subject?.name || 'General',
        grade: user.grade,
        topic: topic.title
      });
      setDiagnoses((prev) => ({ ...prev, [q.id]: diag }));
    } catch (e) {
      console.error(e);
    } finally {
      setDiagnosingQuestionId(null);
    }
  };

  // -------------------------------------------------------------
  // EDUVIA AI MODES HANDLERS
  // -------------------------------------------------------------

  const handleRunAiExplain = async () => {
    setIsAiLoading(true);
    setAiOutput(null);
    try {
      const res = await aiExplainTopic({
        subject: subject?.name || 'General',
        grade: user.grade,
        topic: topic.title,
        learnSummary: topic.learnContent.summary,
        query: aiQuery.trim() || undefined
      });
      setAiOutput(res);
    } catch (e: any) {
      setAiOutput('Error communicating with Eduvia AI: ' + e.message);
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleRunAiSolve = async () => {
    if (!aiQuestionForSolve.trim()) {
      showToast('Please enter the question or problem you are stuck on.');
      return;
    }
    setIsAiLoading(true);
    setAiOutput(null);
    try {
      const res = await aiSocraticSolve({
        subject: subject?.name || 'General',
        grade: user.grade,
        topic: topic.title,
        questionText: aiQuestionForSolve,
        studentAttempt: aiStudentAttempt
      });
      setAiOutput(res);
    } catch (e: any) {
      setAiOutput('Error generating Socratic hint: ' + e.message);
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleRunAiDiagnose = async () => {
    if (!aiDiagQuestion || !aiDiagWrong) {
      showToast('Please fill in both the question and your chosen wrong answer.');
      return;
    }
    setIsAiLoading(true);
    setAiOutputDiagnosis(null);
    try {
      const diag = await aiDiagnoseMisconception({
        question: aiDiagQuestion,
        wrong_answer: aiDiagWrong,
        correct_answer: aiDiagCorrect || 'Correct answer from syllabus',
        subject: subject?.name || 'General',
        grade: user.grade,
        topic: topic.title
      });
      setAiOutputDiagnosis(diag);
    } catch (e: any) {
      showToast('Failed to diagnose: ' + e.message);
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleSendChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || isAiLoading) return;

    const userMsg = { role: 'user' as const, content: chatInput.trim() };
    const updated = [...chatMessages, userMsg];
    setChatMessages(updated);
    setChatInput('');
    setIsAiLoading(true);

    let fullReply = '';
    const tempAssistantMsg = { role: 'assistant' as const, content: '' };
    setChatMessages([...updated, tempAssistantMsg]);

    try {
      await aiStreamGeneralChat(
        {
          messages: updated,
          context: {
            subject: subject?.name,
            grade: user.grade,
            topic: topic.title
          }
        },
        (chunkText) => {
          fullReply = chunkText;
          setIsAiLoading(false);
          setChatMessages([...updated, { role: 'assistant', content: chunkText }]);
        }
      );
    } catch (e: any) {
      if (!fullReply) {
        setChatMessages([
          ...updated,
          { role: 'assistant', content: 'Sorry, I encountered an issue: ' + e.message }
        ]);
      }
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6 max-w-7xl mx-auto text-slate-900 dark:text-slate-100 transition-colors">
      {toastMessage && (
        <div className="p-3.5 bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-200 rounded-xl text-xs font-medium flex items-center justify-between gap-3 shadow-sm">
          <span>{toastMessage}</span>
          <button
            type="button"
            onClick={() => setToastMessage(null)}
            className="text-amber-700 dark:text-amber-300 hover:opacity-80 font-bold px-1.5 py-0.5 cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}
      {/* Top Header with Back Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button
          type="button"
          id="btn-back-to-topics"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors cursor-pointer min-h-[40px]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to {subject?.name || 'Topics'}</span>
        </button>

        <div className="flex items-center gap-2 self-start sm:self-auto flex-wrap">
          <button
            type="button"
            id="btn-toggle-topic-completion"
            onClick={() => {
              if (isCompleted) {
                unmarkTopicCompleted(user.id, topic.id);
                setIsCompleted(false);
              } else {
                markTopicCompleted(user.id, topic.id, topic.subjectId);
                setIsCompleted(true);
                confetti({
                  particleCount: 60,
                  spread: 60,
                  origin: { y: 0.6 }
                });
              }
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer border min-h-[40px] ${
              isCompleted
                ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800 hover:bg-emerald-100'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-700 hover:text-purple-700 dark:hover:text-purple-300'
            }`}
          >
            <CheckCircle2 className={`w-3.5 h-3.5 ${isCompleted ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`} />
            <span>{isCompleted ? 'Topic Completed' : 'Mark as Completed'}</span>
          </button>

          <button
            type="button"
            onClick={() => onOpenNotesWithTopic(topic)}
            className="px-3.5 py-2 bg-purple-50 dark:bg-purple-950/40 hover:bg-purple-100 dark:hover:bg-purple-900/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer min-h-[40px]"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Save Notes</span>
          </button>
        </div>
      </div>

      {/* Topic Title Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-sm transition-colors">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
            {subject?.name}
          </span>
          <span className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
            Grade {user.grade.replace('grade-', '')}
          </span>
          <span className="px-2.5 py-0.5 rounded-md text-xs font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50">
            {topic.videos.length} YouTube Video Options
          </span>
        </div>

        <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
          {topic.title}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          {topic.subtitle}
        </p>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 scrollbar-none">
          <button
            id="tab-videos"
            onClick={() => setActiveTab('videos')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap min-h-[42px] ${
              activeTab === 'videos'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Video className="w-4 h-4" />
            <span>3 Curated Videos</span>
          </button>

          <button
            id="tab-learn"
            onClick={() => setActiveTab('learn')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap min-h-[42px] ${
              activeTab === 'learn'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Learn & Notes</span>
          </button>

          <button
            id="tab-quiz"
            onClick={() => setActiveTab('quiz')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap min-h-[42px] ${
              activeTab === 'quiz'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Post-Video Quiz (5 Qs)</span>
            {quizSubmitted && (
              <span className="ml-1 px-1.5 py-0.2 rounded bg-white/20 text-[10px]">
                {quizScore}/5
              </span>
            )}
          </button>

          <button
            id="tab-ai-tutor"
            onClick={() => setActiveTab('ai-tutor')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap min-h-[42px] ${
              activeTab === 'ai-tutor'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span>Eduvia AI Tutor</span>
          </button>
        </div>
      </div>

      {/* ================= TAB 1: 3 CURATED YOUTUBE VIDEOS ================= */}
      {activeTab === 'videos' && (
        <div className="space-y-6">
          {/* 3-Video Switcher Tabs */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                Select Your Preferred Video Explanation (Option 1, 2, or 3):
              </span>
              <span className="text-[11px] text-purple-600 dark:text-purple-400 font-semibold">
                Eduvia Curated Playlist
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {topic.videos.map((vid, idx) => (
                <button
                  key={vid.id}
                  onClick={() => setSelectedVideoIndex(idx)}
                  className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    selectedVideoIndex === idx
                      ? 'border-purple-600 bg-purple-50/60 dark:bg-purple-950/40 ring-2 ring-purple-600/20'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 hover:bg-slate-100/60 dark:hover:bg-slate-800'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-bold mb-1">
                      <span className={selectedVideoIndex === idx ? 'text-purple-700 dark:text-purple-300' : 'text-slate-500 dark:text-slate-400'}>
                        Option {idx + 1}
                      </span>
                      <span className="text-slate-400 dark:text-slate-500">{vid.duration}</span>
                    </div>
                    <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 line-clamp-1">{vid.title}</h4>
                  </div>
                  <span className="text-[11px] text-purple-600 dark:text-purple-400 font-medium mt-2 block">
                    {vid.channel}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* YouTube Video Player */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-colors">
            <div className="relative aspect-video w-full bg-slate-950">
              <iframe
                key={currentVideo.embedId || currentVideo.id}
                src={`https://www.youtube.com/embed/${currentVideo.embedId}?rel=0&modestbranding=1&enablejsapi=1`}
                title={currentVideo.title}
                className="w-full h-full border-0 absolute inset-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            <div className="p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 px-2 py-0.5 rounded">
                    {currentVideo.channel}
                  </span>
                  <span className="text-xs text-slate-400 dark:text-slate-500">• {currentVideo.duration}</span>
                  <a
                    href={`https://www.youtube.com/watch?v=${currentVideo.embedId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors ml-2"
                    title="Open directly on YouTube in new tab"
                  >
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={`https://www.youtube.com/results?search_query=${encodeURIComponent(`${topic.title} ${subject?.name || ''} high school lesson`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors ml-1"
                    title="Search alternative lessons on YouTube"
                  >
                    <span>Alternative Lessons</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{currentVideo.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-3xl leading-relaxed">
                  {currentVideo.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <button
                  type="button"
                  id="btn-generate-video-quiz"
                  onClick={handleGenerateQuizFromVideo}
                  disabled={isGeneratingVideoQuiz}
                  className="px-4 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl text-xs font-semibold transition-all flex items-center gap-2 shadow-sm cursor-pointer disabled:opacity-50 min-h-[44px]"
                  title="Generate a 5-question multiple choice test based on this video lecture"
                >
                  {isGeneratingVideoQuiz ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Generating Video Quiz...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-purple-200" />
                      <span>Generate Quiz from this Video</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('quiz')}
                  className="px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer min-h-[44px]"
                >
                  <span>Go to Quiz</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 2: LEARN CONTENT ================= */}
      {activeTab === 'learn' && (
        <div className="space-y-6">
          {/* Summary */}
          <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span>Core Summary</span>
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {topic.learnContent.summary}
            </p>
          </div>

          {/* Key Concepts */}
          <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-500" />
              <span>Key Concepts to Remember</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {topic.learnContent.keyConcepts.map((kc, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-purple-50/50 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/50">
                  <span className="text-xs font-bold text-purple-700 dark:text-purple-300 block mb-1">
                    {kc.title}
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {kc.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Worked Examples */}
          <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>Worked Step-by-Step Examples</span>
            </h3>

            <div className="space-y-4">
              {topic.learnContent.workedExamples.map((ex, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                    Example {idx + 1}: {ex.problem}
                  </span>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-mono">
                    <strong className="text-slate-900 dark:text-white block font-sans mb-1 font-semibold">Solution:</strong>
                    {ex.solution}
                  </div>
                  <p className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span>💡 Exam Takeaway:</span> {ex.takeaway}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 text-red-600 dark:text-red-400">
              <AlertTriangle className="w-5 h-5" />
              <span>Common Examination Traps & Mistakes</span>
            </h3>

            <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
              {topic.learnContent.commonMistakes.map((mistake, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-red-50/50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/50">
                  <XCircle className="w-4 h-4 text-red-500 dark:text-red-400 shrink-0 mt-0.5" />
                  <span>{mistake}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* ================= TAB 3: POST-VIDEO QUIZ (5 QUESTIONS) ================= */}
      {activeTab === 'quiz' && (
        <div className="space-y-6">
          {/* Quiz Header Rules & Source Toggle */}
          <div className="bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors">
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-sm font-bold text-purple-900 dark:text-purple-200">
                  Topic Quiz ({activeQuizQuestions.length} Questions)
                </h3>
                {quizSource === 'video-generated' ? (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-600 text-white flex items-center gap-1 shadow-xs">
                    <Sparkles className="w-3 h-3" />
                    AI Generated from Video
                  </span>
                ) : (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300">
                    Curated Syllabus Questions
                  </span>
                )}
              </div>
              <p className="text-xs text-purple-700 dark:text-purple-300">
                {videoQuizNote ||
                  'No timer. Take your time! Answers are not revealed until all 5 are submitted. Eduvia AI will diagnose any incorrect answers.'}
              </p>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {quizSource === 'video-generated' ? (
                <button
                  type="button"
                  onClick={handleResetToCuratedQuiz}
                  className="px-3.5 py-2 bg-white dark:bg-slate-800 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-slate-700 rounded-xl text-xs font-semibold cursor-pointer transition-all min-h-[40px]"
                >
                  Standard Syllabus Quiz
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleGenerateQuizFromVideo}
                  disabled={isGeneratingVideoQuiz}
                  className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold cursor-pointer transition-all flex items-center gap-1.5 disabled:opacity-50 min-h-[40px]"
                  title="Generate quiz based on the selected video"
                >
                  {isGeneratingVideoQuiz ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Generate Quiz from Video</span>
                    </>
                  )}
                </button>
              )}

              {quizSubmitted && (
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1.5 rounded-xl bg-purple-600 text-white text-xs font-bold">
                    Score: {quizScore} / {activeQuizQuestions.length} ({Math.round((quizScore / activeQuizQuestions.length) * 100)}%)
                  </div>
                  <button
                    type="button"
                    onClick={handleResetQuiz}
                    className="p-2 text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-semibold cursor-pointer"
                    title="Re-attempt Quiz"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Questions Container */}
          <div className="space-y-5">
            {activeQuizQuestions.map((q, qIndex) => {
              const selectedOpt = selectedAnswers[qIndex];
              const isCorrect = selectedOpt === q.correctIndex;
              const hasDiag = diagnoses[q.id];

              return (
                <div
                  key={q.id}
                  className={`bg-white dark:bg-slate-900 rounded-2xl border p-5 sm:p-6 shadow-sm transition-all ${
                    quizSubmitted
                      ? isCorrect
                        ? 'border-emerald-300 dark:border-emerald-800 bg-emerald-50/10 dark:bg-emerald-950/20'
                        : 'border-red-200 dark:border-red-800 bg-red-50/10 dark:bg-red-950/20'
                      : 'border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                      Question {qIndex + 1} of {activeQuizQuestions.length}
                    </span>
                    {quizSubmitted && (
                      <span
                        className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${
                          isCorrect
                            ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                            : 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300'
                        }`}
                      >
                        {isCorrect ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                          </>
                        ) : (
                          <>
                            <XCircle className="w-3.5 h-3.5" /> Incorrect
                          </>
                        )}
                      </span>
                    )}
                  </div>

                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-4 leading-relaxed">
                    {q.text}
                  </p>

                  {/* 4 Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {q.options.map((opt, optIndex) => {
                      const isChosen = selectedOpt === optIndex;
                      const isTargetCorrect = optIndex === q.correctIndex;

                      let btnStyle = 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300';

                      if (!quizSubmitted) {
                        if (isChosen) {
                          btnStyle = 'border-purple-600 bg-purple-50 dark:bg-purple-950/50 text-purple-900 dark:text-purple-200 font-bold ring-2 ring-purple-600/20';
                        }
                      } else {
                        if (isTargetCorrect) {
                          btnStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 font-bold';
                        } else if (isChosen && !isCorrect) {
                          btnStyle = 'border-red-500 bg-red-50 dark:bg-red-950/60 text-red-800 dark:text-red-200 font-bold';
                        } else {
                          btnStyle = 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 opacity-50 text-slate-500 dark:text-slate-400';
                        }
                      }

                      return (
                        <button
                          key={optIndex}
                          type="button"
                          disabled={quizSubmitted}
                          onClick={() => handleSelectOption(qIndex, optIndex)}
                          className={`p-3.5 rounded-xl border text-xs text-left transition-all cursor-pointer flex items-start gap-2.5 min-h-[44px] ${btnStyle}`}
                        >
                          <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center shrink-0 font-bold text-[10px]">
                            {String.fromCharCode(65 + optIndex)}
                          </span>
                          <span className="flex-1 leading-snug">{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Post-submission feedback & Eduvia AI Diagnosis for wrong answers */}
                  {quizSubmitted && (
                    <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        <strong className="text-slate-800 dark:text-slate-200">Explanation: </strong>
                        {q.explanation}
                      </div>

                      {/* Prompt Requirement: Eduvia AI diagnoses why the student got this wrong */}
                      {!isCorrect && (
                        <div className="mt-3 p-4 bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-xl space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-purple-900 dark:text-purple-200 flex items-center gap-1.5">
                              <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                              Eduvia AI Misconception Diagnosis
                            </span>
                            {hasDiag && (
                              <span className="text-[10px] px-2 py-0.5 rounded bg-purple-200 dark:bg-purple-900 text-purple-800 dark:text-purple-200 font-bold uppercase">
                                {hasDiag.category}
                              </span>
                            )}
                          </div>

                          {hasDiag ? (
                            <div className="text-xs space-y-1.5 text-slate-700 dark:text-slate-300">
                              <p>
                                <strong className="text-purple-900 dark:text-purple-200">Why you chose this: </strong>
                                {hasDiag.reasoningFlaw}
                              </p>
                              <p className="text-emerald-800 dark:text-emerald-300 font-semibold">
                                💡 <strong>Mental Correction: </strong>
                                {hasDiag.correctionTip}
                              </p>
                              <p className="text-[11px] text-purple-600 dark:text-purple-400 italic">
                                "{hasDiag.encouragement}"
                              </p>
                            </div>
                          ) : (
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-xs text-slate-500 dark:text-slate-400">
                                Diagnosing your specific choice...
                              </span>
                              <button
                                type="button"
                                onClick={() => handleManualDiagnose(q, selectedOpt)}
                                disabled={diagnosingQuestionId === q.id}
                                className="px-3.5 py-1.5 bg-purple-600 text-white rounded-lg text-xs font-semibold hover:bg-purple-700 cursor-pointer min-h-[36px]"
                              >
                                {diagnosingQuestionId === q.id ? 'Diagnosing...' : 'Ask Eduvia AI'}
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Submit / Action button */}
          {!quizSubmitted ? (
            <div className="sticky bottom-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-4 rounded-2xl border border-purple-100 dark:border-purple-900 shadow-lg flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                Answered {Object.keys(selectedAnswers).length} of {activeQuizQuestions.length}
              </span>
              <button
                type="button"
                id="btn-submit-topic-quiz"
                onClick={handleSubmitQuiz}
                className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl text-xs shadow-md shadow-purple-600/20 cursor-pointer transition-all min-h-[44px]"
              >
                Submit & Reveal Answers
              </button>
            </div>
          ) : (
            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-center space-y-4 shadow-sm transition-colors">
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                {quizScore >= 4 ? '🎉 Outstanding Mastery!' : 'Keep Practicing!'}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                Any wrong answers were diagnosed by Eduvia AI and logged into your <strong>Achievements & Misconceptions Log</strong> to target future test practice.
              </p>
              <div className="flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTab('videos')}
                  className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-xl cursor-pointer min-h-[40px]"
                >
                  Review 3 Videos Again
                </button>
                <button
                  type="button"
                  onClick={handleResetQuiz}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold rounded-xl cursor-pointer min-h-[40px]"
                >
                  Retake Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ================= TAB 4: EDUVIA AI TUTOR (ALL 4 MODES) ================= */}
      {activeTab === 'ai-tutor' && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition-colors">
          {/* Mode Switcher */}
          <div className="p-4 bg-purple-50/50 dark:bg-purple-950/30 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white font-['Outfit']">
                  Eduvia AI Academic Tutor
                </h3>
                <span className="text-[11px] text-purple-700 dark:text-purple-300 font-medium">
                  Focused on: {topic.title}
                </span>
              </div>
            </div>

            {/* 4 Mode Pills */}
            <div className="flex items-center gap-1.5 p-1 bg-white dark:bg-slate-800 rounded-xl border border-purple-100 dark:border-purple-900/50 text-xs font-semibold overflow-x-auto max-w-full">
              <button
                type="button"
                onClick={() => { setAiMode('explain'); setAiOutput(null); }}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap min-h-[36px] ${
                  aiMode === 'explain' ? 'bg-purple-600 text-white' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                1. Explain
              </button>
              <button
                type="button"
                onClick={() => { setAiMode('solve'); setAiOutput(null); }}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap min-h-[36px] ${
                  aiMode === 'solve' ? 'bg-purple-600 text-white' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                2. Help Me Solve
              </button>
              <button
                type="button"
                onClick={() => { setAiMode('diagnose'); setAiOutput(null); setAiOutputDiagnosis(null); }}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap min-h-[36px] ${
                  aiMode === 'diagnose' ? 'bg-purple-600 text-white' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                3. Why Am I Wrong?
              </button>
              <button
                type="button"
                onClick={() => { setAiMode('chat'); setAiOutput(null); }}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap min-h-[36px] ${
                  aiMode === 'chat' ? 'bg-purple-600 text-white' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                4. General Help
              </button>
            </div>
          </div>

          {/* Mode 1: Explain */}
          {aiMode === 'explain' && (
            <div className="p-5 sm:p-6 space-y-4">
              <div className="p-4 bg-purple-50/60 dark:bg-purple-950/40 rounded-xl text-xs text-purple-900 dark:text-purple-200 leading-relaxed border border-purple-100 dark:border-purple-900/50">
                <strong>Mode 1: Explain.</strong> Eduvia AI breaks down "{topic.title}" into clear, student-friendly analogies, highlighting the top rules and examination takeaways.
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Specific concept or question (Optional):
                </label>
                <input
                  type="text"
                  placeholder="e.g. Can you explain the discriminant using a sports analogy?"
                  value={aiQuery}
                  onChange={(e) => setAiQuery(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white dark:focus:bg-slate-900"
                />
              </div>

              <button
                type="button"
                id="btn-ai-explain"
                onClick={handleRunAiExplain}
                disabled={isAiLoading}
                className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer shadow-sm disabled:opacity-60 min-h-[42px]"
              >
                {isAiLoading ? 'Eduvia AI is thinking...' : 'Generate Explanation'}
              </button>

              {aiOutput && (
                <div className="mt-4 p-5 bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
                  <MarkdownRenderer content={aiOutput} />
                </div>
              )}
            </div>
          )}

          {/* Mode 2: Help Me Solve (Socratic Hints) */}
          {aiMode === 'solve' && (
            <div className="p-5 sm:p-6 space-y-4">
              <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl text-xs text-amber-900 dark:text-amber-200 leading-relaxed border border-amber-200 dark:border-amber-900/50">
                <strong>Mode 2: Help Me Solve (Socratic Coaching).</strong> Eduvia AI will NEVER give you the direct answer. Instead, it provides step-by-step hints and leading questions to help you solve it yourself!
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  The Problem you are trying to solve:
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. 2x² - 4x - 6 = 0, but I don't know what to do with the negative 4."
                  value={aiQuestionForSolve}
                  onChange={(e) => setAiQuestionForSolve(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white dark:focus:bg-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Your current attempt or thought so far:
                </label>
                <input
                  type="text"
                  placeholder="e.g. I know a=2, b=-4, c=-6, but when I square b do I get -16?"
                  value={aiStudentAttempt}
                  onChange={(e) => setAiStudentAttempt(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white dark:focus:bg-slate-900"
                />
              </div>

              <button
                type="button"
                id="btn-ai-solve"
                onClick={handleRunAiSolve}
                disabled={isAiLoading}
                className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer shadow-sm disabled:opacity-60 min-h-[42px]"
              >
                {isAiLoading ? 'Generating Socratic Hint...' : 'Give Me a Hint (Don’t spoil answer)'}
              </button>

              {aiOutput && (
                <div className="mt-4 p-5 bg-purple-50/50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 rounded-xl text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
                  <MarkdownRenderer content={aiOutput} />
                </div>
              )}
            </div>
          )}

          {/* Mode 3: Why Am I Getting This Wrong? */}
          {aiMode === 'diagnose' && (
            <div className="p-5 sm:p-6 space-y-4">
              <div className="p-4 bg-purple-50/60 dark:bg-purple-950/40 rounded-xl text-xs text-purple-900 dark:text-purple-200 leading-relaxed border border-purple-200 dark:border-purple-800">
                <strong>Mode 3: Why Am I Getting This Wrong?</strong> Enter any question, your wrong answer, and the correct answer. Eduvia AI will dissect your reasoning and reveal the underlying misconception.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    The Exam Question:
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. For 3x² - 6x + 2 = 0, what is the value of the discriminant?"
                    value={aiDiagQuestion}
                    onChange={(e) => setAiDiagQuestion(e.target.value)}
                    className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Wrong Answer:
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. -12"
                    value={aiDiagWrong}
                    onChange={(e) => setAiDiagWrong(e.target.value)}
                    className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    The Correct Answer (if known):
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. +12"
                    value={aiDiagCorrect}
                    onChange={(e) => setAiDiagCorrect(e.target.value)}
                    className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
              </div>

              <button
                type="button"
                id="btn-ai-diagnose"
                onClick={handleRunAiDiagnose}
                disabled={isAiLoading}
                className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer shadow-sm disabled:opacity-60 min-h-[42px]"
              >
                {isAiLoading ? 'Diagnosing Misconception...' : 'Analyze My Error'}
              </button>

              {aiOutputDiagnosis && (
                <div className="mt-4 p-5 bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800 rounded-xl shadow-sm space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 dark:text-white">Diagnosis Report</span>
                    <span className="px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 font-bold">
                      {aiOutputDiagnosis.category}
                    </span>
                  </div>
                  <p className="text-slate-800 dark:text-slate-200">
                    <strong>Misconception: </strong>
                    {aiOutputDiagnosis.misconception}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    <strong>Reasoning flaw: </strong>
                    {aiOutputDiagnosis.reasoningFlaw}
                  </p>
                  <p className="text-emerald-700 dark:text-emerald-400 font-semibold">
                    💡 <strong>Correction Tip: </strong>
                    {aiOutputDiagnosis.correctionTip}
                  </p>
                  <p className="text-purple-600 dark:text-purple-400 italic">
                    "{aiOutputDiagnosis.encouragement}"
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Mode 4: General Help Chat */}
          {aiMode === 'chat' && (
            <div className="p-5 sm:p-6 flex flex-col h-[480px]">
              <div className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-none">
                {chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-2.5 ${
                      msg.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {msg.role === 'assistant' && (
                      <div className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center shrink-0 mt-1">
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>
                    )}
                    <div
                      className={`max-w-lg p-3.5 rounded-2xl text-xs leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-purple-600 text-white rounded-tr-none'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none'
                      }`}
                    >
                      {msg.role === 'user' ? (
                        <div className="whitespace-pre-line">{msg.content}</div>
                      ) : (
                        <MarkdownRenderer content={msg.content} isUser={false} />
                      )}
                    </div>
                  </div>
                ))}
                {isAiLoading && (
                  <div className="flex items-center gap-2 text-xs text-purple-600 dark:text-purple-400">
                    <Sparkles className="w-3.5 h-3.5 animate-spin" />
                    <span>Eduvia AI is typing...</span>
                  </div>
                )}
              </div>

              <form onSubmit={handleSendChat} className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Ask Eduvia AI anything about this topic or homework..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  className="flex-1 px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white dark:focus:bg-slate-900"
                />
                <button
                  type="submit"
                  disabled={!chatInput.trim() || isAiLoading}
                  className="px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-semibold cursor-pointer disabled:opacity-50 flex items-center gap-1 min-h-[40px]"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
