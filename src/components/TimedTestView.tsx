import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import {
  Clock,
  CheckCircle2,
  AlertTriangle,
  Flag,
  RotateCcw,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Award,
  XCircle,
  HelpCircle,
  BarChart3
} from 'lucide-react';
import { Question, Subject, SubjectId, TestResultRecord, UserProfile } from '../types';
import { SUBJECTS } from '../data/subjects';
import { GRADES } from '../data/grades';
import { generateSubjectTestQuestionBank } from '../data/curriculum';
import { aiDiagnoseMisconception, logMisconceptionRecord, saveTestResult } from '../services/api';

interface TimedTestViewProps {
  initialSubjectId?: SubjectId;
  user: UserProfile;
  onBackToDashboard: () => void;
}

export const TimedTestView: React.FC<TimedTestViewProps> = ({
  initialSubjectId,
  user,
  onBackToDashboard
}) => {
  const [selectedSubjectId, setSelectedSubjectId] = useState<SubjectId>(initialSubjectId || 'math');
  const [isTestActive, setIsTestActive] = useState<boolean>(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [flagged, setFlagged] = useState<Record<number, boolean>>({});
  const [secondsRemaining, setSecondsRemaining] = useState<number>(60 * 60); // 60 minutes = 3600 seconds
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [testResult, setTestResult] = useState<TestResultRecord | null>(null);
  const [diagnosingQId, setDiagnosingQId] = useState<string | null>(null);
  const [diagnoses, setDiagnoses] = useState<Record<string, any>>({});

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const currentGradeInfo = GRADES.find((g) => g.id === user.grade) || GRADES[9];
  const subject = SUBJECTS.find((s) => s.id === selectedSubjectId) || SUBJECTS[0];

  // Start the 60-question 60-minute test
  const handleStartTest = () => {
    const qBank = generateSubjectTestQuestionBank(selectedSubjectId, user.grade);
    setQuestions(qBank);
    setAnswers({});
    setFlagged({});
    setCurrentQuestionIndex(0);
    setSecondsRemaining(60 * 60);
    setIsTestActive(true);
    setIsFinished(false);
    setTestResult(null);
  };

  // Timer effect
  useEffect(() => {
    if (isTestActive && !isFinished) {
      timerRef.current = setInterval(() => {
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            handleCompleteTest(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTestActive, isFinished, answers, questions]);

  const handleSelectAnswer = (qIdx: number, optIdx: number) => {
    if (isFinished) return;
    setAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleToggleFlag = (qIdx: number) => {
    setFlagged((prev) => ({ ...prev, [qIdx]: !prev[qIdx] }));
  };

  const handleCompleteTest = async (autoSubmit: boolean = false) => {
    if (timerRef.current) clearInterval(timerRef.current);

    const answeredCount = Object.keys(answers).length;
    if (!autoSubmit && answeredCount < questions.length) {
      const confirm = window.confirm(
        `You have answered ${answeredCount} of ${questions.length} questions. Are you sure you want to submit?`
      );
      if (!confirm) return;
    }

    let score = 0;
    const topicBreakdown: Record<string, { correct: number; total: number }> = {};
    const wrongQuestions: any[] = [];

    questions.forEach((q, idx) => {
      const tag = q.topicTag || 'Core Topics';
      if (!topicBreakdown[tag]) {
        topicBreakdown[tag] = { correct: 0, total: 0 };
      }
      topicBreakdown[tag].total++;

      const chosen = answers[idx];
      if (chosen === q.correctIndex) {
        score++;
        topicBreakdown[tag].correct++;
      } else {
        wrongQuestions.push({
          questionId: q.id,
          questionText: q.text,
          chosenAnswer: chosen !== undefined ? q.options[chosen] : 'Unanswered',
          correctAnswer: q.options[q.correctIndex],
          topicTag: tag
        });
      }
    });

    const timeSpent = 3600 - secondsRemaining;
    const percentage = Math.round((score / questions.length) * 100);

    const record = await saveTestResult({
      userId: user.id,
      subjectId: selectedSubjectId,
      grade: user.grade,
      score,
      totalQuestions: questions.length,
      percentage,
      timeSpentSeconds: timeSpent,
      topicBreakdown,
      wrongQuestions
    });

    setTestResult(record);
    setIsFinished(true);
    setIsTestActive(false);

    if (percentage >= 70) {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(mins).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const handleDiagnoseWrongQuestion = async (item: any) => {
    setDiagnosingQId(item.questionId);
    try {
      const diag = await aiDiagnoseMisconception({
        question: item.questionText,
        correct_answer: item.correctAnswer,
        wrong_answer: item.chosenAnswer,
        subject: subject.name,
        grade: user.grade,
        topic: item.topicTag
      });
      setDiagnoses((prev) => ({ ...prev, [item.questionId]: diag }));

      // Save to student misconceptions log
      await logMisconceptionRecord({
        userId: user.id,
        questionText: item.questionText,
        wrongAnswerText: item.chosenAnswer,
        correctAnswerText: item.correctAnswer,
        misconception: diag.misconception,
        reasoningFlaw: diag.reasoningFlaw,
        category: diag.category,
        topicTag: item.topicTag,
        subjectId: selectedSubjectId,
        grade: user.grade
      });
    } catch (e) {
      console.error(e);
    } finally {
      setDiagnosingQId(null);
    }
  };

  // -------------------------------------------------------------
  // PRE-TEST SETUP SCREEN
  // -------------------------------------------------------------
  if (!isTestActive && !isFinished) {
    return (
      <div className="p-6 md:p-8 space-y-8 max-w-4xl mx-auto">
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center shadow-md shadow-purple-600/20">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                Full-Length Exam Simulation
              </span>
              <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
                60 Questions in 60 Minutes
              </h1>
            </div>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Experience realistic high school exam conditions. You have exactly <strong>60 minutes</strong> to answer <strong>60 cumulative questions</strong> covering your selected curriculum subject.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                Select Test Subject:
              </label>
              <select
                id="select-test-subject"
                value={selectedSubjectId}
                onChange={(e) => setSelectedSubjectId(e.target.value as SubjectId)}
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              >
                {SUBJECTS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} ({s.category})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                Active Student Grade Level:
              </label>
              <div className="px-4 py-2.5 bg-purple-50 dark:bg-purple-950/60 rounded-xl border border-purple-100 dark:border-purple-800 text-xs font-bold text-purple-700 dark:text-purple-300">
                {currentGradeInfo.label} — {currentGradeInfo.stage}
              </div>
            </div>
          </div>

          {/* Test Rules */}
          <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2 text-xs text-slate-600 dark:text-slate-300">
            <h4 className="font-bold text-slate-800 dark:text-white">Exam Instructions & Rules:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Exactly 60 multiple-choice questions. 1 point each.</li>
              <li>Countdown timer starts immediately at 60:00. The exam auto-submits when time expires.</li>
              <li>You can jump between questions at any time using the Question Palette.</li>
              <li>Use the "Mark for Review" flag to revisit uncertain questions before submitting.</li>
              <li>At completion, Eduvia AI automatically analyzes wrong answers and produces topic breakdowns.</li>
            </ul>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={onBackToDashboard}
              className="text-xs font-bold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 cursor-pointer"
            >
              Cancel & Return to Dashboard
            </button>
            <button
              type="button"
              id="btn-launch-timed-test"
              onClick={handleStartTest}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-xs shadow-md shadow-purple-600/20 flex items-center gap-2 cursor-pointer transition-all"
            >
              <Clock className="w-4 h-4" />
              <span>Begin 60-Minute Test</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // TEST IN PROGRESS SCREEN
  // -------------------------------------------------------------
  if (isTestActive && questions.length > 0) {
    const currentQ = questions[currentQuestionIndex];
    const isUnder5Mins = secondsRemaining < 300;
    const isUnder10Mins = secondsRemaining < 600;

    return (
      <div className="p-4 sm:p-6 md:p-8 space-y-6 max-w-7xl mx-auto">
        {/* Test Header with Sticky Countdown Timer */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 sticky top-16 z-20">
          <div>
            <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase">
              {subject.name} • {currentGradeInfo.label} Exam
            </span>
            <h2 className="text-base font-extrabold text-slate-900 dark:text-white font-['Outfit']">
              Question {currentQuestionIndex + 1} of {questions.length}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {/* Countdown Badge */}
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-xl border font-mono font-bold text-sm ${
                isUnder5Mins
                  ? 'bg-red-50 dark:bg-red-950/60 border-red-300 dark:border-red-800 text-red-700 dark:text-red-300 animate-pulse'
                  : isUnder10Mins
                  ? 'bg-amber-50 dark:bg-amber-950/60 border-amber-300 dark:border-amber-800 text-amber-700 dark:text-amber-300'
                  : 'bg-purple-50 dark:bg-purple-950/60 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>{formatTime(secondsRemaining)}</span>
            </div>

            <button
              type="button"
              id="btn-finish-test"
              onClick={() => handleCompleteTest(false)}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold cursor-pointer transition-all shadow-sm"
            >
              Submit Exam
            </button>
          </div>
        </div>

        {/* Main Test Layout: Question & Question Palette */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Question Box */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300">
                {currentQ.topicTag || 'Curriculum Question'}
              </span>

              <button
                type="button"
                onClick={() => handleToggleFlag(currentQuestionIndex)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                  flagged[currentQuestionIndex]
                    ? 'bg-amber-50 dark:bg-amber-950/60 border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300'
                    : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <Flag className="w-3.5 h-3.5" />
                <span>{flagged[currentQuestionIndex] ? 'Flagged for Review' : 'Flag Question'}</span>
              </button>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
              {currentQ.text}
            </h3>

            {/* Options */}
            <div className="space-y-3">
              {currentQ.options.map((option, optIdx) => {
                const isSelected = answers[currentQuestionIndex] === optIdx;
                return (
                  <button
                    key={optIdx}
                    type="button"
                    onClick={() => handleSelectAnswer(currentQuestionIndex, optIdx)}
                    className={`w-full p-4 rounded-xl border text-xs text-left transition-all cursor-pointer flex items-start gap-3 ${
                      isSelected
                        ? 'border-purple-600 bg-purple-50 dark:bg-purple-950/50 text-purple-900 dark:text-purple-200 font-bold ring-2 ring-purple-600/20'
                        : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200'
                    }`}
                  >
                    <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center shrink-0 font-bold text-xs">
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span className="flex-1 mt-0.5 leading-snug">{option}</span>
                  </button>
                );
              })}
            </div>

            {/* Prev / Next controls */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                disabled={currentQuestionIndex === 0}
                onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-40 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <span className="text-xs text-slate-400 dark:text-slate-500">
                {Object.keys(answers).length} of {questions.length} answered
              </span>

              <button
                type="button"
                disabled={currentQuestionIndex === questions.length - 1}
                onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-40 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Question Palette (1 to 60) */}
          <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm space-y-4">
            <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
              Question Navigator (1 – 60)
            </h4>

            <div className="flex items-center gap-4 text-[11px] text-slate-500 dark:text-slate-400 pb-2 border-b border-slate-100 dark:border-slate-800">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-600" /> Answered
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> Flagged
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700" /> Unanswered
              </span>
            </div>

            <div className="grid grid-cols-6 sm:grid-cols-10 lg:grid-cols-6 gap-2 max-h-[380px] overflow-y-auto pr-1">
              {questions.map((_, idx) => {
                const isAnswered = answers[idx] !== undefined;
                const isFlagged = flagged[idx];
                const isCurrent = currentQuestionIndex === idx;

                let color = 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700';
                if (isAnswered) color = 'bg-purple-600 text-white font-bold';
                if (isFlagged) color = 'bg-amber-400 text-slate-900 font-bold';

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={`h-8 rounded-lg text-xs transition-all cursor-pointer flex items-center justify-center relative ${color} ${
                      isCurrent ? 'ring-2 ring-purple-950 dark:ring-purple-400 scale-105 shadow-sm' : ''
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // TEST RESULTS SCREEN
  // -------------------------------------------------------------
  if (isFinished && testResult) {
    return (
      <div className="p-6 md:p-8 space-y-8 max-w-5xl mx-auto">
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase">
              <Award className="w-4 h-4" /> Exam Report Card
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
              {subject.name} Timed Test Complete
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Exam completed in {Math.floor(testResult.timeSpentSeconds / 60)} minutes {testResult.timeSpentSeconds % 60} seconds.
            </p>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/50 text-center">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Final Score</span>
              <span className="text-3xl font-black text-purple-700 dark:text-purple-300 block mt-1 font-['Outfit']">
                {testResult.score} / {testResult.totalQuestions}
              </span>
              <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold">{testResult.percentage}% Accuracy</span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Time Used</span>
              <span className="text-3xl font-black text-slate-800 dark:text-white block mt-1 font-['Outfit']">
                {formatTime(testResult.timeSpentSeconds)}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">out of 60:00 allocated</span>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/50 text-center">
              <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase">Grade Rating</span>
              <span className="text-3xl font-black text-emerald-700 dark:text-emerald-300 block mt-1 font-['Outfit']">
                {testResult.percentage >= 80 ? 'A (Excellent)' : testResult.percentage >= 65 ? 'B (Proficient)' : 'C (Needs Review)'}
              </span>
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                {testResult.percentage >= 70 ? 'Target Achieved' : 'Review Diagnoses Below'}
              </span>
            </div>
          </div>

          {/* Topic-by-Topic Breakdown */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>Topic-by-Topic Performance Breakdown</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.entries(testResult.topicBreakdown).map(([tag, stats]: any) => {
                const pct = Math.round((stats.correct / stats.total) * 100);
                return (
                  <div key={tag} className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-slate-800 dark:text-slate-200">{tag}</span>
                      <span className={pct >= 70 ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}>{pct}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${pct >= 70 ? 'bg-emerald-500' : 'bg-amber-500'}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 block">
                      {stats.correct} of {stats.total} correct
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Missed Questions & Eduvia AI Diagnosis */}
          {testResult.wrongQuestions && testResult.wrongQuestions.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Review Missed Questions & Ask Eduvia AI</span>
              </h3>

              <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
                {testResult.wrongQuestions.map((item: any, idx: number) => {
                  const diag = diagnoses[item.questionId];

                  return (
                    <div key={idx} className="p-4 rounded-xl border border-red-200 dark:border-red-900/60 bg-red-50/20 dark:bg-red-950/20 space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-red-700 dark:text-red-400">Question {idx + 1}</span>
                        <span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-600 dark:text-slate-300">
                          {item.topicTag}
                        </span>
                      </div>
                      <p className="font-semibold text-slate-800 dark:text-slate-200">{item.questionText}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <div className="p-2 bg-red-50 dark:bg-red-950/40 rounded border border-red-100 dark:border-red-900/50 text-red-800 dark:text-red-300">
                          <strong>Your answer: </strong> {item.chosenAnswer}
                        </div>
                        <div className="p-2 bg-emerald-50 dark:bg-emerald-950/40 rounded border border-emerald-100 dark:border-emerald-900/50 text-emerald-800 dark:text-emerald-300">
                          <strong>Correct answer: </strong> {item.correctAnswer}
                        </div>
                      </div>

                      {/* Eduvia AI Diagnose Button */}
                      {diag ? (
                        <div className="p-3 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800 space-y-1 mt-2 text-purple-900 dark:text-purple-200">
                          <span className="font-bold block text-[11px] uppercase">
                            Eduvia AI Diagnosis: {diag.category}
                          </span>
                          <p><strong>Misconception: </strong>{diag.misconception}</p>
                          <p><strong>Tip: </strong>{diag.correctionTip}</p>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => handleDiagnoseWrongQuestion(item)}
                          disabled={diagnosingQId === item.questionId}
                          className="mt-2 px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-xs font-semibold cursor-pointer flex items-center gap-1.5"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>{diagnosingQId === item.questionId ? 'Diagnosing...' : 'Diagnose Reason with Eduvia AI'}</span>
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Bottom Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={onBackToDashboard}
              className="px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-semibold cursor-pointer"
            >
              Return to Dashboard
            </button>
            <button
              type="button"
              onClick={handleStartTest}
              className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-semibold cursor-pointer flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake 60-Min Test</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
