import React, { useState } from 'react';
import {
  Search,
  BookOpen,
  ArrowRight,
  Filter,
  CheckCircle,
  Sparkles,
  Calculator,
  PenTool,
  Dna,
  FlaskConical,
  Atom,
  TrendingUp,
  Scale,
  Landmark,
  Globe,
  Code2,
  FileSpreadsheet,
  Sprout,
  Binary,
  Languages,
  Music,
  Activity,
  Shield,
  Wrench,
  Palette,
  ShoppingBag,
  Briefcase
} from 'lucide-react';
import { Subject, SubjectCategory, SubjectId, UserProfile } from '../types';
import { getSubjectsForGrade } from '../data/subjects';
import { GRADES } from '../data/grades';
import { getLocalQuizAttempts, calculateUserSubjectProgress } from '../services/api';

interface SubjectsViewProps {
  user: UserProfile;
  onSelectSubject: (subjectId: SubjectId) => void;
  onStartTimedTest: (subjectId: SubjectId) => void;
}

export const SubjectsView: React.FC<SubjectsViewProps> = ({
  user,
  onSelectSubject,
  onStartTimedTest
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const currentGradeInfo = GRADES.find((g) => g.id === user.grade) || GRADES[9];
  const quizAttempts = getLocalQuizAttempts(user.id);
  const gradeSubjects = getSubjectsForGrade(user.grade);

  const categories = ['All', 'Sciences', 'Languages', 'Humanities', 'Business & Social', 'Tech & Applied'];

  const filteredSubjects = gradeSubjects.filter((s) => {
    const matchesQuery = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         s.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === 'All' || s.category === selectedCategory;
    return matchesQuery && matchesCat;
  });

  const getSubjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calculator': return Calculator;
      case 'PenTool': return PenTool;
      case 'BookOpen': return BookOpen;
      case 'Dna': return Dna;
      case 'FlaskConical': return FlaskConical;
      case 'Atom': return Atom;
      case 'TrendingUp': return TrendingUp;
      case 'Scale': return Scale;
      case 'Landmark': return Landmark;
      case 'Globe': return Globe;
      case 'Code2': return Code2;
      case 'FileSpreadsheet': return FileSpreadsheet;
      case 'Sprout': return Sprout;
      case 'Binary': return Binary;
      case 'Languages': return Languages;
      case 'Music': return Music;
      case 'Activity': return Activity;
      case 'Shield': return Shield;
      case 'Wrench': return Wrench;
      case 'Palette': return Palette;
      case 'ShoppingBag': return ShoppingBag;
      case 'Briefcase': return Briefcase;
      default: return BookOpen;
    }
  };

  // Subject completion estimate based on real user achievements (0% for new users)
  const getSubjectProgress = (subjId: SubjectId) => {
    return calculateUserSubjectProgress(user.id, subjId);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 max-w-7xl mx-auto text-slate-900 dark:text-slate-100 transition-colors">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Grade Curriculum Catalog</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
            Curriculum Subjects ({filteredSubjects.length} of {gradeSubjects.length})
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-3xl leading-relaxed">
            Official subjects prescribed for <strong>{currentGradeInfo.label}</strong>. Every topic includes 3 curated YouTube masterclasses, quick notes, and post-video diagnostic quizzes.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search subjects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-slate-800 dark:text-white placeholder-slate-400 min-h-[44px]"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer min-h-[38px] ${
              selectedCategory === cat
                ? 'bg-purple-600 text-white shadow-sm shadow-purple-600/20'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 15 Flat Subjects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {filteredSubjects.map((subject) => {
          const Icon = getSubjectIcon(subject.iconName);
          const progress = getSubjectProgress(subject.id);

          return (
            <div
              key={subject.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-700 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {subject.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                  {subject.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                  {subject.shortDesc}
                </p>

                {/* Progress bar */}
                <div className="mt-5 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-400 dark:text-slate-500 text-[11px]">Mastery Status</span>
                    <span className="text-purple-600 dark:text-purple-400">{progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-purple-600 dark:bg-purple-500 rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 py-3.5 bg-slate-50/80 dark:bg-slate-800/60 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                <button
                  type="button"
                  id={`btn-subject-topics-${subject.id}`}
                  onClick={() => onSelectSubject(subject.id)}
                  className="flex-1 py-2.5 px-3 bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm min-h-[44px]"
                >
                  <span>Explore Topics</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  id={`btn-subject-test-${subject.id}`}
                  onClick={() => onStartTimedTest(subject.id)}
                  className="py-2.5 px-3 bg-white dark:bg-slate-900 hover:bg-purple-50 dark:hover:bg-slate-800 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-800/80 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap min-h-[44px]"
                  title="Take 60-min timed test for this subject"
                >
                  Timed Test
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
