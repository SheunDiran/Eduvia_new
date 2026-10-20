import React, { useEffect, useState } from 'react';
import {
  Sparkles,
  BookOpen,
  Timer,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  Clock,
  CheckSquare,
  Award,
  Calendar,
  Layers,
  GraduationCap,
  Bookmark,
  Camera,
  Flame,
  Volume2
} from 'lucide-react';
import { GradeLevel, Subject, SubjectId, TaskItem, UserProfile } from '../types';
import { getSubjectsForGrade } from '../data/subjects';
import { GRADES } from '../data/grades';
import { OPPORTUNITIES, Opportunity } from '../data/opportunities';
import {
  fetchTasks,
  getLocalQuizAttempts,
  getLocalTestResults,
  toggleTaskCompletion,
  calculateUserSubjectProgress,
  getSavedOpportunityIds
} from '../services/api';

interface DashboardViewProps {
  user: UserProfile;
  onNavigateTab?: (tab: any) => void;
  onNavigate?: (tab: any) => void;
  onSelectSubject: (subjectId: SubjectId) => void;
  onLaunchTimedTest?: (subjectId: SubjectId) => void;
  onChangeGrade?: (grade: GradeLevel) => void;
  onOpenEduviaAI?: () => void;
  onOpenPhotoSolver?: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  user,
  onNavigateTab,
  onNavigate,
  onSelectSubject,
  onLaunchTimedTest,
  onChangeGrade,
  onOpenEduviaAI,
  onOpenPhotoSolver
}) => {
  const navigate = onNavigate || onNavigateTab || (() => {});
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [savedOpportunities, setSavedOpportunities] = useState<Opportunity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const currentGradeInfo = GRADES.find((g) => g.id === user.grade) || GRADES[9];
  const gradeSubjects = getSubjectsForGrade(user.grade);
  const quizAttempts = getLocalQuizAttempts(user.id);
  const testResults = getLocalTestResults(user.id);

  useEffect(() => {
    async function loadData() {
      try {
        const taskList = await fetchTasks(user.id);
        setTasks(taskList);

        const savedIds = getSavedOpportunityIds(user.id);
        const savedList = OPPORTUNITIES.filter((opp) => savedIds.includes(opp.id));
        setSavedOpportunities(savedList);
      } catch (err) {
        console.error('Error loading dashboard data:', err);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, [user.id]);

  const handleToggleTask = async (taskId: string, currentStatus: boolean) => {
    await toggleTaskCompletion(taskId, !currentStatus, user.id);
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, completed: !currentStatus } : t))
    );
  };

  const todayStr = new Date().toISOString().split('T')[0];
  const dueTodayTasks = tasks.filter((t) => t.dueDate === todayStr);
  const upcomingTasks = tasks.filter((t) => t.dueDate && t.dueDate > todayStr && !t.completed);

  // Subject completion estimate based on real user progress (0% for new users)
  const getSubjectProgress = (subjId: SubjectId) => {
    return calculateUserSubjectProgress(user.id, subjId);
  };

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-700 via-purple-800 to-indigo-900 text-white p-6 sm:p-8 shadow-lg shadow-purple-900/10">
        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-purple-200 text-xs font-semibold mb-3 border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-purple-300" />
              <span>{currentGradeInfo.label} Academic Dashboard</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] tracking-tight">
              Welcome back, {user.name}! 👋
            </h1>
            <p className="text-purple-100/90 text-sm mt-1.5 max-w-2xl leading-relaxed">
              Curated YouTube masterclasses, 60-minute subject test simulations, customizable study timer, and Eduvia AI learning assistant.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              id="btn-dash-eduvia-ai"
              onClick={() => {
                if (onOpenEduviaAI) {
                  onOpenEduviaAI();
                } else {
                  navigate('eduvia-ai');
                }
              }}
              className="px-4 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-lg shadow-amber-500/25 flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-slate-950 animate-pulse" />
              <span>Ask Eduvia AI</span>
            </button>
            <button
              type="button"
              id="btn-dash-snap-photo"
              onClick={onOpenPhotoSolver}
              className="px-4 py-2.5 bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <Camera className="w-4 h-4 text-slate-950" />
              <span>Snap Homework</span>
            </button>
            <button
              type="button"
              id="btn-dash-read"
              onClick={() => navigate('read')}
              className="px-4 py-2.5 bg-white text-purple-800 hover:bg-purple-50 font-bold rounded-xl text-sm transition-all shadow-sm flex items-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-purple-700" />
              <span>Read Any Book</span>
            </button>
            <button
              type="button"
              id="btn-dash-brainfeed"
              onClick={() => navigate('brainfeed')}
              className="px-4 py-2.5 bg-purple-600/70 hover:bg-purple-600/90 border border-white/20 text-white font-bold rounded-xl text-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <Flame className="w-4 h-4 text-amber-300" />
              <span>EduScroll Bites</span>
            </button>
            <button
              type="button"
              id="btn-dash-subjects"
              onClick={() => navigate('subjects')}
              className="px-4 py-2.5 bg-purple-900/40 hover:bg-purple-900/60 border border-white/10 text-purple-100 font-semibold rounded-xl text-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Subjects</span>
            </button>
          </div>
        </div>
      </div>

      {/* Flagship Hackathon Feature Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {/* Feature 1: Snap Photo Solver */}
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/40 dark:to-indigo-950/30 p-5 rounded-2xl border border-purple-200 dark:border-purple-800/60 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-xs">
                <Camera className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-200 dark:bg-purple-900 text-purple-800 dark:text-purple-200">
                Multimodal AI
              </span>
            </div>
            <h3 className="text-base font-extrabold text-slate-900 dark:text-white font-['Outfit'] mb-1">
              Snap Homework Problem
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Take a photo of any math equation, science diagram, or textbook exercise. Eduvia AI extracts the prompt, shows step-by-step derivation, and diagnoses common trap mistakes.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenPhotoSolver}
            className="w-full py-2 px-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs active:scale-98"
          >
            <span>Snap or Upload Problem</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Feature 2: Books Reader & Audio */}
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/40 dark:to-blue-950/30 p-5 rounded-2xl border border-indigo-200 dark:border-indigo-800/60 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-200 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
                Audio & Quiz Prep
              </span>
            </div>
            <h3 className="text-base font-extrabold text-slate-900 dark:text-white font-['Outfit'] mb-1">
              Read Any Book in the World
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Search millions of books, listen with AI text-to-speech audio narration, and get chapter deep summaries with anticipated quiz answers so you ace every exam.
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate('read')}
            className="w-full py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs active:scale-98"
          >
            <span>Explore Books & Audio</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Feature 3: EduScroll (Brain Bites) */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/30 p-5 rounded-2xl border border-amber-200 dark:border-amber-800/60 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shadow-xs">
                <Flame className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-200">
                Brain Bites
              </span>
            </div>
            <h3 className="text-base font-extrabold text-slate-900 dark:text-white font-['Outfit'] mb-1">
              EduScroll: Educated Doom Scrolling
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Replace mindless scrolling with high-yield 60-second micro-learning cards, counterintuitive science paradoxes, and quick interactive 10-second quiz polls.
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate('brainfeed')}
            className="w-full py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs active:scale-98"
          >
            <span>Start EduScrolling</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 block uppercase tracking-wider">Curriculum Subjects</span>
            <span className="text-2xl font-black text-slate-900 dark:text-white font-['Outfit']">{gradeSubjects.length}</span>
            <span className="text-[11px] text-purple-600 dark:text-purple-400 font-medium block">Covering {currentGradeInfo.label}</span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 block uppercase tracking-wider">Curated Videos</span>
            <span className="text-2xl font-black text-slate-900 dark:text-white font-['Outfit']">3 per Topic</span>
            <span className="text-[11px] text-indigo-600 dark:text-indigo-400 font-medium block">Khan, CrashCourse, Cognito</span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
            <Timer className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 block uppercase tracking-wider">Timed Tests Taken</span>
            <span className="text-2xl font-black text-slate-900 dark:text-white font-['Outfit']">{testResults.length}</span>
            <span className="text-[11px] text-purple-600 dark:text-purple-400 font-medium block">60-Min Exam Simulations</span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <CheckSquare className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 block uppercase tracking-wider">Tasks Due Today</span>
            <span className="text-2xl font-black text-slate-900 dark:text-white font-['Outfit']">
              {dueTodayTasks.filter((t) => !t.completed).length}
            </span>
            <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium block">
              {dueTodayTasks.length > 0 ? 'Action items pending' : 'All clear for today!'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Grid: Reminders & Subject Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Reminders & Study Planner */}
        <div className="lg:col-span-5 space-y-6">
          {/* Prompt Feature: Reminders / Upcoming Tasks Section */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-['Outfit']">
                  Upcoming & Due Today
                </h3>
              </div>
              <button
                id="btn-open-notes-tasks"
                onClick={() => navigate('notes-tasks')}
                className="text-xs font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 flex items-center gap-1 cursor-pointer"
              >
                <span>Manage</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {dueTodayTasks.length === 0 && upcomingTasks.length === 0 ? (
              <div className="p-4 text-center bg-slate-50 dark:bg-slate-800/60 rounded-xl text-slate-500 dark:text-slate-400 text-xs">
                No pending homework due today. Add assignment deadlines in Notes & Tasks!
              </div>
            ) : (
              <div className="space-y-2.5">
                {dueTodayTasks.map((t) => (
                  <div
                    key={t.id}
                    className="p-3 bg-purple-50/50 dark:bg-purple-950/30 hover:bg-purple-50 dark:hover:bg-purple-950/50 border border-purple-100 dark:border-purple-900/50 rounded-xl flex items-start gap-3 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={t.completed}
                      onChange={() => handleToggleTask(t.id, t.completed)}
                      className="mt-1 w-4 h-4 rounded text-purple-600 focus:ring-purple-500 cursor-pointer accent-purple-600"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300">
                          Due Today
                        </span>
                        {t.dueTime && (
                          <span className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {t.dueTime}
                          </span>
                        )}
                      </div>
                      <p className={`text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1 ${t.completed ? 'line-through text-slate-400 dark:text-slate-500' : ''}`}>
                        {t.text}
                      </p>
                    </div>
                  </div>
                ))}

                {upcomingTasks.slice(0, 3).map((t) => (
                  <div
                    key={t.id}
                    className="p-3 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100/80 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl flex items-start gap-3 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={t.completed}
                      onChange={() => handleToggleTask(t.id, t.completed)}
                      className="mt-1 w-4 h-4 rounded text-purple-600 focus:ring-purple-500 cursor-pointer accent-purple-600"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                          Due {t.dueDate}
                        </span>
                        {t.priority === 'high' && (
                          <span className="text-[10px] text-amber-600 dark:text-amber-400 font-bold">High Priority</span>
                        )}
                      </div>
                      <p className={`text-xs font-medium text-slate-800 dark:text-slate-200 mt-1 ${t.completed ? 'line-through text-slate-400 dark:text-slate-500' : ''}`}>
                        {t.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Saved Opportunities Section */}
            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span className="text-xs font-bold text-slate-900 dark:text-white font-['Outfit']">
                    Saved Scholarships & Competitions ({savedOpportunities.length})
                  </span>
                </div>
                <button
                  type="button"
                  id="btn-view-all-opportunities"
                  onClick={() => navigate('opportunities')}
                  className="text-[11px] font-semibold text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore All</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {savedOpportunities.length === 0 ? (
                <div className="p-3.5 bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 rounded-xl text-center space-y-2">
                  <p className="text-xs text-amber-900/80 dark:text-amber-200">
                    No scholarships or competitions tracked yet.
                  </p>
                  <button
                    type="button"
                    onClick={() => navigate('opportunities')}
                    className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer shadow-sm transition-all min-h-[36px]"
                  >
                    <Bookmark className="w-3 h-3" />
                    <span>Browse High School Opportunities</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  {savedOpportunities.map((opp) => (
                    <div
                      key={opp.id}
                      onClick={() => navigate('opportunities')}
                      className="p-3 bg-gradient-to-r from-amber-50/40 to-orange-50/30 dark:from-amber-950/20 dark:to-orange-950/20 hover:from-amber-50 dark:hover:from-amber-950/40 border border-amber-200/70 dark:border-amber-900/40 rounded-xl cursor-pointer transition-all flex items-start justify-between gap-3 group"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-200/80 dark:bg-amber-900 text-amber-900 dark:text-amber-200">
                            {opp.type}
                          </span>
                          <span className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                            <Clock className="w-3 h-3 text-slate-400" /> Deadline: {opp.deadline}
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors line-clamp-1">
                          {opp.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5 font-medium">
                          {opp.award} • {opp.organizer}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 shrink-0 mt-2 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Study & Break Timer Card */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Timer className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-['Outfit']">
                  Study & Break Timer
                </h3>
              </div>
              <button
                id="btn-open-study-timer"
                onClick={() => navigate('study-timer')}
                className="text-xs font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 flex items-center gap-1 cursor-pointer"
              >
                <span>Open Timer</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="p-4 bg-gradient-to-r from-purple-50 to-indigo-50/60 dark:from-purple-950/30 dark:to-indigo-950/30 border border-purple-100 dark:border-purple-900/40 rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Customizable Focus & Breaks</span>
                </div>
                <span className="text-[10px] font-bold text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-950 px-2 py-0.5 rounded-full">
                  Return Alerts
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Choose custom focus durations, pick 5m or 15m breaks, and receive desktop notifications reminding you to return when your break ends.
              </p>
              <button
                type="button"
                id="btn-dash-start-study-session"
                onClick={() => navigate('study-timer')}
                className="w-full py-2.5 px-3 bg-purple-600 hover:bg-purple-700 active:scale-98 text-white rounded-xl text-xs font-bold transition-all shadow-sm shadow-purple-600/20 flex items-center justify-center gap-1.5 cursor-pointer min-h-[44px]"
              >
                <Timer className="w-3.5 h-3.5" />
                <span>Start Study Session</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Grade Subjects Progress Overview */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white font-['Outfit']">
                Subject Curriculum Progress
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {gradeSubjects.length} subjects adapted for {currentGradeInfo.label}
              </p>
            </div>
            <button
              id="btn-view-all-subjects"
              onClick={() => navigate('subjects')}
              className="text-xs font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 flex items-center gap-1 cursor-pointer"
            >
              <span>Explore All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {gradeSubjects.slice(0, 8).map((subject) => {
              const progress = getSubjectProgress(subject.id);
              return (
                <div
                  key={subject.id}
                  onClick={() => onSelectSubject(subject.id)}
                  className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-600 hover:bg-purple-50/30 dark:hover:bg-slate-800/60 transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                      {subject.name}
                    </span>
                    <span className="text-xs font-bold text-purple-600 dark:text-purple-400">
                      {progress}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-purple-600 dark:bg-purple-500 rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between mt-2 text-[11px] text-slate-400 dark:text-slate-500">
                    <span>{subject.category}</span>
                    <span className="text-purple-600 dark:text-purple-400 font-medium group-hover:underline">Open Topics →</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
            <span>Showing {Math.min(8, gradeSubjects.length)} of {gradeSubjects.length} curriculum subjects</span>
            <button
              onClick={() => navigate('subjects')}
              className="text-purple-700 dark:text-purple-400 font-bold hover:underline cursor-pointer min-h-[40px] flex items-center"
            >
              View all {gradeSubjects.length} subjects →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
