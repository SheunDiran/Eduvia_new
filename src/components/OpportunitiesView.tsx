import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  Trophy,
  Search,
  Filter,
  Calendar,
  DollarSign,
  ExternalLink,
  Sparkles,
  Bookmark,
  CheckCircle,
  Clock,
  MapPin,
  Building,
  Lightbulb,
  CheckCircle2,
  X,
  Share2,
  AlertCircle
} from 'lucide-react';
import { GradeLevel, UserProfile } from '../types';
import { GRADES } from '../data/grades';
import { Opportunity, OpportunityType, OPPORTUNITIES } from '../data/opportunities';

interface OpportunitiesViewProps {
  user: UserProfile;
}

export const OpportunitiesView: React.FC<OpportunitiesViewProps> = ({ user }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [onlyMyGrade, setOnlyMyGrade] = useState(false);
  const [sortBy, setSortBy] = useState<'deadline' | 'title' | 'award'>('deadline');
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem(`eduvia_saved_opps_${user.id}`);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [selectedOpp, setSelectedOpp] = useState<Opportunity | null>(null);

  const currentGradeInfo = GRADES.find((g) => g.id === user.grade) || GRADES[9];

  useEffect(() => {
    try {
      localStorage.setItem(`eduvia_saved_opps_${user.id}`, JSON.stringify(savedIds));
    } catch (e) {
      console.error(e);
    }
  }, [savedIds, user.id]);

  const toggleBookmark = (oppId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSavedIds((prev) =>
      prev.includes(oppId) ? prev.filter((id) => id !== oppId) : [...prev, oppId]
    );
  };

  const categories: string[] = [
    'All',
    'Scholarship',
    'Debate Competition',
    'STEM & Science',
    'Essay Contest',
    'Academic Olympiad',
    'Arts & Leadership'
  ];

  // Filtering & Sorting
  const filteredOpportunities = OPPORTUNITIES.filter((opp) => {
    const matchesSearch =
      opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.organizer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.award.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = selectedType === 'All' || opp.type === selectedType;
    const matchesGrade = !onlyMyGrade || opp.eligibleGrades.includes(user.grade);

    return matchesSearch && matchesType && matchesGrade;
  }).sort((a, b) => {
    if (sortBy === 'deadline') {
      const dateA = a.deadlineDate || '9999-99-99';
      const dateB = b.deadlineDate || '9999-99-99';
      return dateA.localeCompare(dateB);
    }
    if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  const matchingGradeCount = OPPORTUNITIES.filter((o) =>
    o.eligibleGrades.includes(user.grade)
  ).length;

  const getTypeBadgeColor = (type: OpportunityType) => {
    switch (type) {
      case 'Scholarship':
        return 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
      case 'Debate Competition':
        return 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800';
      case 'STEM & Science':
        return 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      case 'Essay Contest':
        return 'bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800';
      case 'Academic Olympiad':
        return 'bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800';
      case 'Arts & Leadership':
        return 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800';
      default:
        return 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700';
    }
  };

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-800 via-indigo-900 to-slate-900 text-white p-6 sm:p-8 shadow-xl shadow-purple-900/10">
        <div className="absolute -right-10 -bottom-10 w-56 h-56 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-purple-200 text-xs font-semibold mb-3 border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-purple-300" />
              <span>Academic Competitions & Scholarships</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] tracking-tight">
              Opportunities for High School Students
            </h1>
            <p className="text-purple-100/90 text-sm mt-1.5 max-w-2xl leading-relaxed">
              Curated national & global scholarships, debate tournaments, STEM olympiads, and essay competitions. Listings matching your grade (<strong>{currentGradeInfo.label}</strong>) are automatically highlighted!
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setOnlyMyGrade(!onlyMyGrade)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-sm ${
                onlyMyGrade
                  ? 'bg-emerald-500 text-white ring-2 ring-emerald-300'
                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{onlyMyGrade ? 'Showing My Grade Only' : `Filter: My Grade (${matchingGradeCount})`}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 block uppercase tracking-wider">Total Listings</span>
            <span className="text-2xl font-black text-slate-900 dark:text-white font-['Outfit']">{OPPORTUNITIES.length}</span>
            <span className="text-[11px] text-purple-600 dark:text-purple-400 font-medium block">All High School Categories</span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 block uppercase tracking-wider">Matches Your Grade</span>
            <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-['Outfit']">{matchingGradeCount}</span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium block">Eligible for {currentGradeInfo.label}</span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 block uppercase tracking-wider">Top Prize Pool</span>
            <span className="text-2xl font-black text-slate-900 dark:text-white font-['Outfit']">$400k+</span>
            <span className="text-[11px] text-amber-600 dark:text-amber-400 font-medium block">Cash, Labs & Fellowships</span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
            <Bookmark className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 block uppercase tracking-wider">Your Bookmarks</span>
            <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400 font-['Outfit']">{savedIds.length}</span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium block">Saved for application</span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 transition-colors">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by scholarship title, competition name, organizer, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white dark:focus:bg-slate-850 transition-all"
            />
          </div>

          {/* Sort selector */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e: any) => setSortBy(e.target.value)}
              className="px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              <option value="deadline">Upcoming Deadline</option>
              <option value="title">Alphabetical Title</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedType(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                selectedType === cat
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Opportunities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOpportunities.map((opp) => {
          const isEligible = opp.eligibleGrades.includes(user.grade);
          const isSaved = savedIds.includes(opp.id);

          return (
            <div
              key={opp.id}
              onClick={() => setSelectedOpp(opp)}
              className={`relative bg-white dark:bg-slate-900 rounded-2xl border transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between cursor-pointer p-6 group ${
                isEligible
                  ? 'border-purple-200 dark:border-purple-800/80 hover:border-purple-400 dark:hover:border-purple-600 ring-1 ring-purple-100 dark:ring-purple-900/40'
                  : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {/* Card Header & Badges */}
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span
                    className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border ${getTypeBadgeColor(
                      opp.type
                    )}`}
                  >
                    {opp.type}
                  </span>

                  <div className="flex items-center gap-1.5">
                    {isEligible && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5 text-emerald-600 dark:text-emerald-400" />
                        <span>Matches Your Grade</span>
                      </span>
                    )}

                    <button
                      type="button"
                      onClick={(e) => toggleBookmark(opp.id, e)}
                      className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                        isSaved
                          ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60'
                          : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                      title={isSaved ? 'Remove Bookmark' : 'Bookmark this opportunity'}
                    >
                      <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors font-['Outfit'] mb-1.5 leading-snug">
                  {opp.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-3 font-medium">
                  <Building className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
                  <span className="truncate">{opp.organizer}</span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-4">
                  {opp.description}
                </p>
              </div>

              {/* Card Footer Details */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                {/* Award Banner */}
                <div className="p-2.5 rounded-xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/50 text-xs">
                  <span className="text-[10px] font-bold text-purple-900 dark:text-purple-300 uppercase tracking-wider block">
                    Award & Recognition
                  </span>
                  <span className="text-xs font-bold text-purple-700 dark:text-purple-300 block truncate">
                    {opp.award}
                  </span>
                </div>

                {/* Deadlines & Grades */}
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                    <span>{opp.deadline}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">Grades:</span>
                    <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                      {opp.eligibleGrades.map((g) => g.replace('grade-', '')).join(', ')}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedOpp(opp)}
                  className="w-full mt-2 py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 group-hover:bg-purple-600 group-hover:text-white text-slate-700 dark:text-slate-200 text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer min-h-[38px]"
                >
                  <span>View Requirements & Apply</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredOpportunities.length === 0 && (
        <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
          <AlertCircle className="w-10 h-10 text-slate-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">No matching opportunities found</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            Try resetting your search query, switching category filters, or toggling off the "My Grade Only" filter.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedType('All');
              setOnlyMyGrade(false);
            }}
            className="px-4 py-2 bg-purple-600 text-white rounded-xl text-xs font-semibold hover:bg-purple-700 cursor-pointer min-h-[40px]"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Opportunity Detail Modal */}
      {selectedOpp && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-purple-100 dark:border-slate-800 flex flex-col">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-start justify-between gap-4 sticky top-0 bg-white dark:bg-slate-900 z-10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-lg border ${getTypeBadgeColor(
                      selectedOpp.type
                    )}`}
                  >
                    {selectedOpp.type}
                  </span>
                  {selectedOpp.eligibleGrades.includes(user.grade) && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Eligible for your grade ({currentGradeInfo.label})</span>
                    </span>
                  )}
                </div>
                <h2 className="text-xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
                  {selectedOpp.title}
                </h2>
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-1">
                  <Building className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  <span>{selectedOpp.organizer}</span>
                  <span>•</span>
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{selectedOpp.location}</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedOpp(null)}
                className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 text-xs text-slate-700 dark:text-slate-300">
              {/* Highlights Card */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-purple-50/60 dark:bg-purple-950/40 rounded-2xl border border-purple-100 dark:border-purple-900/50">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase block">Grand Award</span>
                  <span className="text-xs font-bold text-purple-800 dark:text-purple-300 block mt-0.5">{selectedOpp.award}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase block">Deadline</span>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block mt-0.5">{selectedOpp.deadline}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase block">Entry Fee</span>
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 block mt-0.5">{selectedOpp.applicationFee}</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  About the Opportunity
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedOpp.description}
                </p>
              </div>

              {/* Requirements */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Eligibility & Application Requirements</span>
                </h4>
                <ul className="space-y-2">
                  {selectedOpp.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 dark:text-slate-200">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Eduvia Strategy Tips */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2.5 flex items-center gap-1.5 text-purple-700 dark:text-purple-400">
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  <span>Eduvia Preparation Tips</span>
                </h4>
                <ul className="space-y-2">
                  {selectedOpp.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-purple-50/50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/50">
                      <Sparkles className="w-3.5 h-3.5 text-purple-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 dark:text-slate-200">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sticky bottom-0">
              <button
                type="button"
                onClick={() => toggleBookmark(selectedOpp.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer min-h-[44px] ${
                  savedIds.includes(selectedOpp.id)
                    ? 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Bookmark className={`w-4 h-4 ${savedIds.includes(selectedOpp.id) ? 'fill-current' : ''}`} />
                <span>{savedIds.includes(selectedOpp.id) ? 'Bookmarked' : 'Save for Later'}</span>
              </button>

              <a
                href={selectedOpp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-purple-600/20 transition-all cursor-pointer min-h-[44px]"
              >
                <span>Visit Official Application Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
