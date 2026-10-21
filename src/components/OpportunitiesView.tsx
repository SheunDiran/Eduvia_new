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
  AlertCircle,
  Globe,
  CheckSquare,
  Square,
  HelpCircle,
  Plane,
  ShieldCheck
} from 'lucide-react';
import { GradeLevel, UserProfile } from '../types';
import { GRADES } from '../data/grades';
import { Opportunity, OpportunityType, EducationLevel, Region, OPPORTUNITIES } from '../data/opportunities';

interface OpportunitiesViewProps {
  user: UserProfile;
}

export const OpportunitiesView: React.FC<OpportunitiesViewProps> = ({ user }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [onlyMyGrade, setOnlyMyGrade] = useState(false);
  const [sortBy, setSortBy] = useState<'deadline' | 'title'>('deadline');
  
  // Requirement checklist tracking per opportunity
  const [checkedRequirements, setCheckedRequirements] = useState<Record<string, boolean>>(() => {
    try {
      const raw = localStorage.getItem(`eduvia_opp_reqs_${user.id}`);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

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

  useEffect(() => {
    try {
      localStorage.setItem(`eduvia_opp_reqs_${user.id}`, JSON.stringify(checkedRequirements));
    } catch (e) {
      console.error(e);
    }
  }, [checkedRequirements, user.id]);

  const toggleBookmark = (oppId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSavedIds((prev) =>
      prev.includes(oppId) ? prev.filter((id) => id !== oppId) : [...prev, oppId]
    );
  };

  const toggleRequirement = (key: string) => {
    setCheckedRequirements((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const types: string[] = [
    'All',
    'Scholarship',
    'Tech & Innovation',
    'STEM & Science',
    'Debate & Essay',
    'Academic Olympiad'
  ];

  const levels: string[] = [
    'All',
    'Undergraduate',
    'High School',
    'University & Graduate'
  ];

  const regions: string[] = [
    'All',
    'Nigeria & Africa',
    'UK & Europe',
    'Global',
    'North America'
  ];

  // Filtering & Sorting
  const filteredOpportunities = OPPORTUNITIES.filter((opp) => {
    const matchesSearch =
      opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.organizer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.award.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = selectedType === 'All' || opp.type === selectedType;
    const matchesLevel = selectedLevel === 'All' || opp.educationLevel === selectedLevel || opp.educationLevel === 'All Students';
    const matchesRegion = selectedRegion === 'All' || opp.region === selectedRegion || opp.region === 'Global';
    const matchesGrade = !onlyMyGrade || opp.eligibleGrades.includes(user.grade);

    return matchesSearch && matchesType && matchesLevel && matchesRegion && matchesGrade;
  }).sort((a, b) => {
    if (sortBy === 'deadline') {
      const dateA = a.deadlineDate || '9999-99-99';
      const dateB = b.deadlineDate || '9999-99-99';
      return dateA.localeCompare(dateB);
    }
    return a.title.localeCompare(b.title);
  });

  const matchingGradeCount = OPPORTUNITIES.filter((o) =>
    o.eligibleGrades.includes(user.grade)
  ).length;

  const getTypeBadgeColor = (type: OpportunityType) => {
    switch (type) {
      case 'Scholarship':
        return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30';
      case 'Tech & Innovation':
        return 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30';
      case 'STEM & Science':
        return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30';
      case 'Debate & Essay':
        return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30';
      case 'Academic Olympiad':
        return 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30';
      default:
        return 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/30';
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6 max-w-7xl mx-auto text-slate-900 dark:text-slate-100 transition-colors">
      
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white p-6 sm:p-8 shadow-xl shadow-purple-900/10 border border-purple-500/20">
        <div className="absolute -right-10 -bottom-10 w-56 h-56 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-purple-200 text-xs font-semibold mb-3 border border-white/15">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Current & Google-Verified Scholarships Portal</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] tracking-tight">
              Verified Scholarships & Global Student Opportunities
            </h1>
            <p className="text-purple-100/90 text-xs sm:text-sm mt-2 leading-relaxed">
              Never get confused by scam websites or outdated blogs. Access direct official application portals and one-click Google verification for prestigious African (Mastercard, BEA, PTDF, Shell) and Global (Chevening, DAAD, Erasmus Mundus, Gates Cambridge) scholarships.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => setOnlyMyGrade(!onlyMyGrade)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-sm ${
                onlyMyGrade
                  ? 'bg-emerald-500 text-white ring-2 ring-emerald-300'
                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{onlyMyGrade ? 'My Level Only' : `Filter: My Grade (${matchingGradeCount})`}</span>
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
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 block uppercase tracking-wider">Verified Listings</span>
            <span className="text-2xl font-black text-slate-900 dark:text-white font-['Outfit']">{OPPORTUNITIES.length}</span>
            <span className="text-[11px] text-purple-600 dark:text-purple-400 font-medium block">Undergraduate & High School</span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 block uppercase tracking-wider">Eligible For You</span>
            <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-['Outfit']">{matchingGradeCount}</span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium block">Level: {currentGradeInfo.label}</span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
            <Globe className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 block uppercase tracking-wider">Direct Portals</span>
            <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400 font-['Outfit']">100% Free</span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium block">Direct Official Links</span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
            <Bookmark className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 block uppercase tracking-wider">Saved Bookmarks</span>
            <span className="text-2xl font-black text-slate-900 dark:text-white font-['Outfit']">{savedIds.length}</span>
            <span className="text-[11px] text-amber-600 dark:text-amber-400 font-medium block">Track Deadlines</span>
          </div>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by scholarship name, country, university, full tuition, STEM, Nigeria..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 text-slate-900 dark:text-white"
          />
        </div>

        {/* Filter Chips: Level, Region, and Type */}
        <div className="space-y-3">
          {/* Education Level Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="text-slate-400 text-[11px] font-bold uppercase shrink-0">Level:</span>
            {levels.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedLevel === lvl
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>

          {/* Region Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="text-slate-400 text-[11px] font-bold uppercase shrink-0">Region:</span>
            {regions.map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedRegion === reg
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {reg}
              </button>
            ))}
          </div>

          {/* Type Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="text-slate-400 text-[11px] font-bold uppercase shrink-0">Category:</span>
            {types.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedType(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  selectedType === cat
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Opportunities Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOpportunities.map((opp) => {
          const isEligible = opp.eligibleGrades.includes(user.grade);
          const isBookmarked = savedIds.includes(opp.id);

          return (
            <div
              key={opp.id}
              onClick={() => setSelectedOpp(opp)}
              className="group bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-purple-300 dark:hover:border-purple-800/80 transition-all flex flex-col justify-between cursor-pointer relative"
            >
              <div>
                {/* Header Pills & Bookmark Button */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${getTypeBadgeColor(opp.type)}`}>
                      {opp.type}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {opp.region}
                    </span>
                    {isEligible && (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 flex items-center gap-1 border border-emerald-200 dark:border-emerald-800">
                        <Sparkles className="w-2.5 h-2.5" />
                        <span>Eligible</span>
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={(e) => toggleBookmark(opp.id, e)}
                    className="p-1.5 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-950/40 text-slate-400 hover:text-purple-600 transition cursor-pointer"
                    title={isBookmarked ? 'Remove bookmark' : 'Bookmark for later'}
                  >
                    <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-purple-600 text-purple-600' : ''}`} />
                  </button>
                </div>

                <h3 className="text-base font-extrabold text-slate-900 dark:text-white font-['Outfit'] group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2 mb-1">
                  {opp.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-3 font-medium">
                  <Building className="w-3.5 h-3.5 text-purple-500 shrink-0" />
                  <span className="truncate">{opp.organizer}</span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-4">
                  {opp.description}
                </p>

                {/* Coverage Perks */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {opp.coverage.slice(0, 3).map((perk, i) => (
                    <span key={i} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-100 dark:border-purple-900/40">
                      ✓ {perk}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                {/* Award Banner */}
                <div className="p-2.5 rounded-xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/50 text-xs">
                  <span className="text-[10px] font-bold text-purple-900 dark:text-purple-300 uppercase tracking-wider block">
                    Funding Value
                  </span>
                  <span className="text-xs font-bold text-purple-700 dark:text-purple-300 block truncate">
                    {opp.award}
                  </span>
                </div>

                {/* Deadlines & Level */}
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                    <span>{opp.deadline}</span>
                  </div>

                  <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 px-2 py-0.5 rounded-md">
                    {opp.educationLevel}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={`https://www.google.com/search?q=${encodeURIComponent(opp.googleQuery || opp.title + ' official requirements portal')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="py-2 px-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all text-center flex items-center justify-center gap-1 cursor-pointer"
                    title="Verify scholarship details directly on Google"
                  >
                    <Search className="w-3.5 h-3.5 text-blue-500" />
                    <span>Verify on Google</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setSelectedOpp(opp)}
                    className="py-2 px-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-all text-center flex items-center justify-center gap-1 cursor-pointer shadow-xs"
                  >
                    <span>View & Apply</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
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
            Try resetting your search query or switching filters to see all global and African scholarships.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedType('All');
              setSelectedLevel('All');
              setSelectedRegion('All');
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
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-lg border ${getTypeBadgeColor(selectedOpp.type)}`}>
                    {selectedOpp.type}
                  </span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                    {selectedOpp.region}
                  </span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    {selectedOpp.educationLevel}
                  </span>
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
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase block">Award Value</span>
                  <span className="text-xs font-bold text-purple-800 dark:text-purple-300 block mt-0.5">{selectedOpp.award}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase block">Application Deadline</span>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block mt-0.5">{selectedOpp.deadline}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase block">Application Fee</span>
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 block mt-0.5">{selectedOpp.applicationFee}</span>
                </div>
              </div>

              {/* Coverage Perks */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  What This Scholarship Covers
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {selectedOpp.coverage.map((c, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="font-semibold text-slate-800 dark:text-slate-200 text-xs">{c}</span>
                    </div>
                  ))}
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

              {/* Requirements Checklist with Interactive Ticks */}
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Eligibility Checklist (Click to track progress)</span>
                  </h4>
                  <span className="text-[10px] text-slate-400">
                    {selectedOpp.requirements.filter((_, i) => checkedRequirements[`${selectedOpp.id}-${i}`]).length} / {selectedOpp.requirements.length} completed
                  </span>
                </div>
                <div className="space-y-2">
                  {selectedOpp.requirements.map((req, idx) => {
                    const reqKey = `${selectedOpp.id}-${idx}`;
                    const isChecked = !!checkedRequirements[reqKey];

                    return (
                      <div
                        key={idx}
                        onClick={() => toggleRequirement(reqKey)}
                        className={`flex items-start gap-2.5 p-3 rounded-xl border transition-all cursor-pointer ${
                          isChecked
                            ? 'bg-emerald-50/50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                            : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-purple-300'
                        }`}
                      >
                        {isChecked ? (
                          <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        )}
                        <span className={`text-xs ${isChecked ? 'line-through opacity-80' : ''}`}>{req}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Eduvia Strategy Tips */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2.5 flex items-center gap-1.5 text-purple-700 dark:text-purple-400">
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  <span>Eduvia Winning Strategy & Essay Advice</span>
                </h4>
                <div className="space-y-2">
                  {selectedOpp.tips.map((tip, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-purple-50/50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/50">
                      <Sparkles className="w-3.5 h-3.5 text-purple-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 dark:text-slate-200">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sticky bottom-0">
              <div className="flex items-center gap-2">
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
                  <span>{savedIds.includes(selectedOpp.id) ? 'Bookmarked' : 'Save'}</span>
                </button>

                <a
                  href={`https://www.google.com/search?q=${encodeURIComponent(selectedOpp.googleQuery || selectedOpp.title + ' official application requirements portal')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer min-h-[44px]"
                  title="Search and verify official news, deadlines, and guides on Google"
                >
                  <Search className="w-3.5 h-3.5 text-blue-500" />
                  <span>Verify on Google</span>
                </a>
              </div>

              <a
                href={selectedOpp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-purple-600/20 transition-all cursor-pointer min-h-[44px]"
              >
                <span>Official Application Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
