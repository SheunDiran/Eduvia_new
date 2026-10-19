import React from 'react';
import {
  ArrowLeft,
  PlaySquare,
  Clock,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  BookOpen,
  HelpCircle,
  Video,
  Award
} from 'lucide-react';
import { GradeLevel, Subject, SubjectId, Topic, UserProfile } from '../types';
import { SUBJECTS } from '../data/subjects';
import { GRADES } from '../data/grades';
import { getTopicsForSubjectAndGrade } from '../data/curriculum';
import { getLocalQuizAttempts, isTopicCompleted, calculateUserSubjectProgress } from '../services/api';

interface TopicsViewProps {
  subjectId: SubjectId;
  user: UserProfile;
  onBackToSubjects: () => void;
  onSelectTopic: (topic: Topic) => void;
  onStartTimedTest: (subjectId: SubjectId) => void;
}

export const TopicsView: React.FC<TopicsViewProps> = ({
  subjectId,
  user,
  onBackToSubjects,
  onSelectTopic,
  onStartTimedTest
}) => {
  const currentGradeInfo = GRADES.find((g) => g.id === user.grade) || GRADES[9];
  const subject = SUBJECTS.find((s) => s.id === subjectId) || SUBJECTS[0];
  const topics = getTopicsForSubjectAndGrade(subjectId, user.grade);
  const quizAttempts = getLocalQuizAttempts(user.id);
  const subjectProgress = calculateUserSubjectProgress(user.id, subjectId, topics.map((t) => t.id));

  const checkTopicCompleted = (topicId: string) => {
    return isTopicCompleted(user.id, topicId) || quizAttempts.some((a) => a.userId === user.id && a.topicId === topicId && (a.score / a.total) >= 0.6);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 max-w-7xl mx-auto text-slate-900 dark:text-slate-100 transition-colors">
      {/* Top breadcrumb navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button
          type="button"
          onClick={onBackToSubjects}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors cursor-pointer min-h-[40px]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All 15 Subjects</span>
        </button>

        <button
          type="button"
          onClick={() => onStartTimedTest(subjectId)}
          className="px-4 py-2.5 bg-purple-50 dark:bg-purple-950/40 hover:bg-purple-100 dark:hover:bg-purple-900/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer self-start sm:self-auto min-h-[44px]"
        >
          <Clock className="w-3.5 h-3.5" />
          <span>Launch 60-Min {subject.name} Test</span>
        </button>
      </div>

      {/* Subject Header Banner */}
      <div className="bg-gradient-to-br from-purple-700 via-purple-800 to-indigo-900 text-white rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-purple-200 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-300" />
            <span>{currentGradeInfo.label} Curriculum</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] tracking-tight">
            {subject.name}
          </h1>
          <p className="text-purple-100/90 text-xs sm:text-sm mt-1.5 max-w-2xl leading-relaxed">
            {subject.shortDesc}
          </p>

          <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-white/10 text-xs text-purple-200">
            <div>
              <span className="font-bold text-white text-base block">{topics.length}</span>
              <span>Available Topics</span>
            </div>
            <div>
              <span className="font-bold text-white text-base block">{topics.length * 3}</span>
              <span>Curated Videos (3 per topic)</span>
            </div>
            <div>
              <span className="font-bold text-white text-base block">5 Questions</span>
              <span>Post-Video Mastery Quiz</span>
            </div>
            <div className="sm:ml-auto w-full sm:w-48 pt-2 sm:pt-0">
              <div className="flex items-center justify-between text-xs font-semibold text-white mb-1.5">
                <span>Subject Mastery</span>
                <span>{subjectProgress}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-white h-2 rounded-full transition-all duration-500"
                  style={{ width: `${subjectProgress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Topics List */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white font-['Outfit'] flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          <span>Curriculum Modules for {currentGradeInfo.label}</span>
        </h2>

        <div className="grid grid-cols-1 gap-4">
          {topics.map((topic, index) => {
            const completed = checkTopicCompleted(topic.id);

            return (
              <div
                key={topic.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-700 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300">
                      Module {index + 1}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" /> {topic.estimatedMinutes} mins
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 flex items-center gap-1">
                      <Video className="w-3 h-3" /> 3 Curated Videos
                    </span>
                    {completed && (
                      <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-green-100 dark:bg-green-950/60 text-green-700 dark:text-green-300 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Mastered
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {topic.subtitle}
                  </p>

                  {/* Curated Video Channels Preview */}
                  <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-slate-400">
                    <span className="font-semibold text-slate-600 dark:text-slate-300 text-[11px]">Video Creators:</span>
                    {topic.videos.map((v) => (
                      <span key={v.id} className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded border border-slate-200 dark:border-slate-700 text-[11px]">
                        <PlaySquare className="w-3 h-3 text-purple-600 dark:text-purple-400" /> {v.channel} ({v.duration})
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col items-stretch sm:items-center md:items-end justify-between gap-3 shrink-0">
                  <button
                    type="button"
                    id={`btn-open-topic-${topic.id}`}
                    onClick={() => onSelectTopic(topic)}
                    className="w-full sm:w-auto px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl text-xs transition-all flex items-center justify-center gap-2 shadow-sm shadow-purple-600/20 cursor-pointer min-h-[44px]"
                  >
                    <span>Start Learning</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 text-center sm:text-right">
                    Videos + Learn Notes + Quiz
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
