import React, { useState, useEffect } from 'react';
import {
  Award,
  AlertCircle,
  TrendingUp,
  Sparkles,
  BookOpen,
  CheckCircle2,
  XCircle,
  HelpCircle,
  BarChart,
  BrainCircuit,
  Filter
} from 'lucide-react';
import { MisconceptionRecord, QuizAttempt, TestResultRecord, UserProfile } from '../types';
import {
  fetchMisconceptions,
  getLocalQuizAttempts,
  getLocalTestResults
} from '../services/api';
import { SUBJECTS } from '../data/subjects';

interface AchievementsViewProps {
  user: UserProfile;
}

export const AchievementsView: React.FC<AchievementsViewProps> = ({ user }) => {
  const [misconceptions, setMisconceptions] = useState<MisconceptionRecord[]>([]);
  const [patterns, setPatterns] = useState<any>(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [quizAttempts, setQuizAttempts] = useState<QuizAttempt[]>([]);
  const [testResults, setTestResults] = useState<TestResultRecord[]>([]);

  useEffect(() => {
    async function load() {
      const data = await fetchMisconceptions(user.id);
      setMisconceptions(data.records);
      setPatterns(data.patterns);
      setQuizAttempts(getLocalQuizAttempts());
      setTestResults(getLocalTestResults());
    }
    load();
  }, [user.id]);

  const filteredMisconceptions = misconceptions.filter((m) => {
    if (selectedCategoryFilter === 'all') return true;
    return m.category === selectedCategoryFilter;
  });

  const categories = [
    'all',
    'Calculation Slip',
    'Formula Misapplication',
    'Conceptual Confusion',
    'Reading Misinterpretation',
    'Definition Gap',
    'Logical Fallacy'
  ];

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 text-xs font-bold uppercase mb-2">
          <BrainCircuit className="w-3.5 h-3.5" /> Diagnostic Intelligence
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
          Achievements & Misconceptions Log
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
          Eduvia AI diagnoses every error to expose recurring cognitive traps and formula slips, ensuring you never make the same mistake twice on an exam.
        </p>
      </div>

      {/* Recurring Mistake Patterns Card */}
      <div className="bg-gradient-to-r from-purple-700 via-purple-800 to-indigo-900 text-white rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden">
        <div className="relative z-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-purple-200 uppercase tracking-wider">
                Eduvia AI Error Analytics
              </span>
              <h2 className="text-xl font-bold font-['Outfit'] mt-1">
                Your Recurring Reasoning Patterns
              </h2>
            </div>
            <div className="px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-purple-100">
              Total Logged: {misconceptions.length} errors
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
              <span className="text-xs text-purple-200 font-medium block">Most Common Pattern</span>
              <span className="text-lg font-bold text-white block mt-1">
                {patterns?.topCategory?.name || 'No data yet'}
              </span>
              <span className="text-xs text-purple-300">
                {patterns?.topCategory?.count || 0} occurrences diagnosed
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
              <span className="text-xs text-purple-200 font-medium block">Topic Needing Review</span>
              <span className="text-lg font-bold text-white block mt-1">
                {patterns?.topTopic?.name || 'No data yet'}
              </span>
              <span className="text-xs text-purple-300">
                {patterns?.topTopic?.count || 0} errors logged
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
              <span className="text-xs text-purple-200 font-medium block">AI Targeted Recommendation</span>
              <span className="text-xs text-purple-100 block mt-1 leading-relaxed">
                {patterns?.topCategory?.name === 'Formula Misapplication'
                  ? 'Write out variable definitions explicitly before choosing formulas.'
                  : patterns?.topCategory?.name === 'Calculation Slip'
                  ? 'Double-check negative signs and order of operations.'
                  : 'Re-read the question stems carefully to verify what is asked.'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Misconceptions History List */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white font-['Outfit']">
              Complete Misconceptions Archive
            </h3>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategoryFilter(cat)}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategoryFilter === cat
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat === 'all' ? 'All Errors' : cat}
              </button>
            ))}
          </div>
        </div>

        {filteredMisconceptions.length === 0 ? (
          <div className="p-12 text-center bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs">
            No misconceptions logged in this category. Complete quizzes on topic pages to track errors!
          </div>
        ) : (
          <div className="space-y-4">
            {filteredMisconceptions.map((m) => {
              const subj = SUBJECTS.find((s) => s.id === m.subjectId);
              return (
                <div
                  key={m.id}
                  className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-purple-200 dark:hover:border-purple-700 transition-all bg-white dark:bg-slate-850/60 shadow-xs space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-purple-100 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                        {m.category}
                      </span>
                      {subj && (
                        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                          {subj.name} • {m.topicTag}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-slate-400 dark:text-slate-500">
                      {new Date(m.timestamp).toLocaleDateString()}
                    </span>
                  </div>

                  <p className="text-xs font-bold text-slate-900 dark:text-white leading-snug">
                    Q: {m.questionText}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 bg-red-50 dark:bg-red-950/40 rounded-xl border border-red-100 dark:border-red-900/50 text-red-800 dark:text-red-300">
                      <strong className="block text-[10px] uppercase font-bold text-red-600 dark:text-red-400">Your Chosen Answer:</strong>
                      {m.wrongAnswerText}
                    </div>
                    <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-100 dark:border-emerald-900/50 text-emerald-800 dark:text-emerald-300">
                      <strong className="block text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400">Correct Answer:</strong>
                      {m.correctAnswerText}
                    </div>
                  </div>

                  <div className="p-3 bg-purple-50/60 dark:bg-purple-950/30 rounded-xl border border-purple-100 dark:border-purple-900/40 text-xs text-purple-900 dark:text-purple-200 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-purple-700 dark:text-purple-300 text-[11px]">
                      <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                      <span>Eduvia AI Reasoning Diagnosis</span>
                    </div>
                    <p className="leading-relaxed">
                      <strong>Core Misunderstanding: </strong> {m.misconception}
                    </p>
                    {m.reasoningFlaw && (
                      <p className="text-slate-600 dark:text-slate-300">
                        <strong>Reasoning flaw: </strong> {m.reasoningFlaw}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Quiz & Exam Activity Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4 transition-colors">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>Recent Topic Quizzes ({quizAttempts.length})</span>
          </h3>

          {quizAttempts.length === 0 ? (
            <p className="text-xs text-slate-500 dark:text-slate-400">No quiz attempts yet.</p>
          ) : (
            <div className="space-y-2.5">
              {quizAttempts.slice(0, 4).map((qa) => (
                <div key={qa.id} className="p-3 bg-slate-50 dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-800 dark:text-slate-200 block">{qa.topicId}</span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500">{new Date(qa.completedAt).toLocaleDateString()}</span>
                  </div>
                  <span className="font-bold text-purple-700 dark:text-purple-400">
                    {qa.score} / {qa.total} ({Math.round((qa.score / qa.total) * 100)}%)
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4 transition-colors">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Award className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>60-Minute Timed Exam Records ({testResults.length})</span>
          </h3>

          {testResults.length === 0 ? (
            <p className="text-xs text-slate-500 dark:text-slate-400">No timed tests recorded yet.</p>
          ) : (
            <div className="space-y-2.5">
              {testResults.slice(0, 4).map((tr) => (
                <div key={tr.id} className="p-3 bg-slate-50 dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-800 dark:text-slate-200 block capitalize">{tr.subjectId} Exam</span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500">Score: {tr.score}/60 in {Math.floor(tr.timeSpentSeconds / 60)}m</span>
                  </div>
                  <span className="font-bold text-emerald-700 dark:text-emerald-400">
                    {tr.percentage}%
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
