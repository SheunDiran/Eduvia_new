import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Flame,
  Sparkles,
  Share2,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Bookmark,
  Check,
  Zap,
  Search,
  Volume2,
  VolumeX,
  X,
  RotateCcw,
  Trophy,
  ArrowRight,
  BookOpen,
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BrainFeedCard, UserProfile } from '../types';
import { fetchBrainFeed, saveNote } from '../services/api';

interface BrainFeedViewProps {
  user: UserProfile;
  onOpenEduviaAIWithQuery?: (query: string) => void;
}

export const BrainFeedView: React.FC<BrainFeedViewProps> = ({
  user,
  onOpenEduviaAIWithQuery
}) => {
  const [cards, setCards] = useState<BrainFeedCard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSearch, setActiveSearch] = useState('');
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [savedNotes, setSavedNotes] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isGeneratingAi, setIsGeneratingAi] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Audio Speech state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Streak & Brain XP state (persisted per student)
  const [streak, setStreak] = useState<number>(() => {
    try {
      return parseInt(localStorage.getItem(`eduvia_feed_streak_${user.id}`) || '3', 10);
    } catch {
      return 3;
    }
  });

  const [brainXp, setBrainXp] = useState<number>(() => {
    try {
      return parseInt(localStorage.getItem(`eduvia_feed_xp_${user.id}`) || '140', 10);
    } catch {
      return 140;
    }
  });

  // Touch gesture tracking for mobile reels doom scrolling
  const touchStartY = useRef<number | null>(null);
  const wheelTimeout = useRef<NodeJS.Timeout | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((curr) => (curr === msg ? null : curr));
    }, 3500);
  };

  // Load feed on mount, category change, or search trigger
  const loadFeed = useCallback(async (cat: string, search: string, generate = false) => {
    if (generate) {
      setIsGeneratingAi(true);
    } else {
      setIsLoading(true);
    }

    try {
      const data = await fetchBrainFeed(cat, search, generate);
      if (data.cards) {
        setCards(data.cards);
        setCurrentIndex(0);
      }
    } catch (err: any) {
      console.warn('Failed to load brainfeed:', err);
      showToast(err?.message || 'Could not load Brain Bites.');
    } finally {
      setIsLoading(false);
      setIsGeneratingAi(false);
    }
  }, []);

  useEffect(() => {
    loadFeed(selectedCategory, activeSearch);
  }, [selectedCategory, activeSearch, loadFeed]);

  // Handle Search Submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveSearch(searchQuery.trim());
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setActiveSearch('');
  };

  const handleGenerateCustomCard = () => {
    if (!searchQuery.trim()) {
      showToast('Type a topic in the search bar first!');
      return;
    }
    loadFeed(selectedCategory, searchQuery.trim(), true);
  };

  const currentCard = cards[currentIndex];

  // Stop audio when card changes
  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    }
  }, [currentIndex]);

  // Audio Narration
  const toggleAudioNarration = () => {
    if (!('speechSynthesis' in window)) {
      showToast('Text-to-speech audio is not supported in this browser.');
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    if (!currentCard) return;

    window.speechSynthesis.cancel();
    const narrationText = `${currentCard.title}. ${currentCard.hook}. The intellectual breakdown: ${currentCard.coreInsight}. Key Takeaway: ${currentCard.takeaway}`;
    const utterance = new SpeechSynthesisUtterance(narrationText);
    utterance.rate = 1.05;
    utterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const naturalVoice = voices.find(
      (v) =>
        v.lang.startsWith('en') &&
        (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha'))
    );
    if (naturalVoice) utterance.voice = naturalVoice;

    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsPlayingAudio(true);
  };

  // Poll Answer Handling with Streak & XP
  const handleSelectAnswer = (cardId: string, optIndex: number, correctIndex: number) => {
    if (selectedAnswers[cardId] !== undefined) return;
    setSelectedAnswers((prev) => ({ ...prev, [cardId]: optIndex }));

    if (optIndex === correctIndex) {
      const newStreak = streak + 1;
      const newXp = brainXp + 20;
      setStreak(newStreak);
      setBrainXp(newXp);
      try {
        localStorage.setItem(`eduvia_feed_streak_${user.id}`, String(newStreak));
        localStorage.setItem(`eduvia_feed_xp_${user.id}`, String(newXp));
      } catch {
        // ignore
      }

      confetti({
        particleCount: 55,
        spread: 60,
        origin: { y: 0.65 }
      });
      showToast('🎉 Brilliant! +20 Brain XP awarded!');
    }
  };

  // Save Card to Notes in Eduvia
  const handleSaveToNotes = async (card: BrainFeedCard) => {
    try {
      await saveNote(user.id, {
        title: `BrainFeed: ${card.title}`,
        content: `**Core Insight:**\n${card.coreInsight}\n\n**Intuitive Analogy:**\n${card.realWorldAnalogy}\n\n**Key Takeaway:**\n${card.takeaway}\n\n*Saved from EduScroll Brain Bites.*`,
        subjectId: 'science'
      });
      setSavedNotes((prev) => ({ ...prev, [card.id]: true }));
      showToast('Saved to your Eduvia Study Notes!');
    } catch {
      showToast('Could not save note right now.');
    }
  };

  // Copy card link/insight to clipboard
  const handleCopyCard = (card: BrainFeedCard) => {
    const textToCopy = `🧠 ${card.title}\n"${card.hook}"\n\n💡 Core Insight: ${card.coreInsight}\n\n🎯 Takeaway: ${card.takeaway}\n\n— via Eduvia`;
    navigator.clipboard.writeText(textToCopy);
    showToast('Copied Brain Bite to clipboard!');
  };

  const handleNext = useCallback(() => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, cards.length]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  // Keyboard navigation (Up/Down, J/K, Spacebar)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't hijack if user is typing in input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }
      if (e.key === 'ArrowDown' || e.key === 'j' || e.key === ' ') {
        if (e.key === ' ') e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowUp' || e.key === 'k') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Touch Swipe navigation (Mobile Reels style)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return;
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY.current - touchEndY;

    // Threshold of 50px for deliberate swipe
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext(); // Swipe Up -> Next
      } else {
        handlePrev(); // Swipe Down -> Prev
      }
    }
    touchStartY.current = null;
  };

  // Mouse wheel scroll cooldown
  const handleWheel = (e: React.WheelEvent) => {
    if (wheelTimeout.current) return;
    if (Math.abs(e.deltaY) > 30) {
      if (e.deltaY > 0) {
        handleNext();
      } else {
        handlePrev();
      }
      wheelTimeout.current = setTimeout(() => {
        wheelTimeout.current = null;
      }, 400);
    }
  };

  const categories = [
    'All',
    'Calculus & Math',
    'Neuroscience & Psychology',
    'Physics & Space',
    'Economics & Philosophy',
    'CS & AI',
    'Chemistry & Biology'
  ];

  return (
    <div
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="p-3 sm:p-6 md:p-8 max-w-4xl mx-auto flex flex-col min-h-[calc(100vh-4.5rem)] justify-between text-slate-900 dark:text-slate-100 transition-colors select-none"
    >
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 p-3.5 bg-slate-900 dark:bg-purple-950 text-white border border-purple-500/40 rounded-2xl text-xs font-bold shadow-xl flex items-center gap-2 animate-in fade-in slide-in-from-top-4">
          <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
          <span>{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="p-1 hover:text-purple-300 cursor-pointer ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Top Header & Search Bar */}
      <div className="space-y-3 mb-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-amber-500/20">
              <Flame className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-['Outfit'] tracking-tight">
                  EduScroll Brain Bites
                </h1>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                  Educated Doom Scrolling
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Swipe through 60-second academic breakthroughs, paradoxes, and interactive mini-quizzes.
              </p>
            </div>
          </div>

          {/* Gamified Streak & XP Badges */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/60 text-amber-800 dark:text-amber-300 text-xs font-bold">
              <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>{streak} Streak</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/60 text-purple-800 dark:text-purple-300 text-xs font-bold">
              <Trophy className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              <span>{brainXp} XP</span>
            </div>
          </div>
        </div>

        {/* Rigorous Search Bar & Custom AI Generator */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <form onSubmit={handleSearchSubmit} className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              id="input-brainfeed-search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search any topic (e.g. quantum superposition, ATP synthase, limits, game theory)..."
              className="w-full pl-10 pr-10 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-2xl text-xs focus:ring-2 focus:ring-purple-500 outline-none placeholder:text-slate-400 shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={handleClearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </form>

          {/* AI Generator Button for arbitrary search queries */}
          <button
            type="button"
            onClick={handleGenerateCustomCard}
            disabled={isGeneratingAi || !searchQuery.trim()}
            className="px-4 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 active:scale-98 disabled:opacity-40 text-white rounded-2xl text-xs font-bold shadow-xs transition-all flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
            title="Generate a custom 60-second Brain Bite with Gemini AI"
          >
            <Sparkles className={`w-3.5 h-3.5 ${isGeneratingAi ? 'animate-spin' : ''}`} />
            <span>{isGeneratingAi ? 'Generating Bite...' : '⚡ Generate with AI'}</span>
          </button>
        </div>

        {/* Categories Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setSelectedCategory(cat);
                handleClearSearch();
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                selectedCategory === cat && !activeSearch
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Feed Progress Bar */}
        {cards.length > 0 && (
          <div className="space-y-1 pt-1">
            <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold">
              <span>
                Card {currentIndex + 1} of {cards.length}
                {activeSearch && <span className="ml-1 text-purple-600 dark:text-purple-400">• Filtering by "{activeSearch}"</span>}
              </span>
              <span className="hidden sm:inline">Use ↑ / ↓ arrow keys or swipe to doom-scroll</span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 transition-all duration-300 rounded-full"
                style={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Main Single-Card Viewport (Swipeable / Stacked Card) */}
      <div className="flex-1 flex flex-col justify-center my-2">
        {isLoading || isGeneratingAi ? (
          <div className="p-16 text-center space-y-3 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <Sparkles className="w-8 h-8 text-purple-600 dark:text-purple-400 animate-spin mx-auto" />
            <p className="text-sm font-bold text-slate-900 dark:text-white font-['Outfit']">
              {isGeneratingAi ? 'Gemini AI is crafting your high-yield Brain Bite...' : 'Curating intellectual doom-scroll feed...'}
            </p>
            <p className="text-xs text-slate-500">Formulating core mechanics, real-world analogies, and concept verification polls.</p>
          </div>
        ) : currentCard ? (
          <div className="w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden p-5 sm:p-7 md:p-8 flex flex-col justify-between space-y-5 transition-all duration-200 animate-in fade-in slide-in-from-bottom-3">
            
            {/* Card Header & Hook */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider border border-purple-200 dark:border-purple-800/60">
                  {currentCard.category}
                </span>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                    {currentCard.readTime || '60s read'}
                  </span>

                  {/* Audio Narration Toggle */}
                  <button
                    type="button"
                    onClick={toggleAudioNarration}
                    className={`p-2 rounded-xl transition cursor-pointer flex items-center gap-1 text-xs font-bold ${
                      isPlayingAudio
                        ? 'bg-purple-600 text-white animate-pulse shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                    title={isPlayingAudio ? 'Stop audio' : 'Listen to AI narration'}
                  >
                    {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    <span className="hidden sm:inline">{isPlayingAudio ? 'Stop' : 'Listen'}</span>
                  </button>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white font-['Outfit'] leading-tight">
                {currentCard.title}
              </h2>

              <p className="text-sm sm:text-base font-bold text-purple-600 dark:text-purple-400 leading-snug">
                "{currentCard.hook}"
              </p>
            </div>

            {/* Core Insight & Analogy */}
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                <p className="font-extrabold text-slate-900 dark:text-white mb-1.5 uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  The Academic Principle
                </p>
                {currentCard.coreInsight}
              </div>

              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm leading-relaxed text-amber-950 dark:text-amber-200">
                <p className="font-extrabold uppercase tracking-wider text-[10px] text-amber-700 dark:text-amber-300 mb-1 flex items-center gap-1.5">
                  <span>💡</span> Intuitive Mental Model
                </p>
                {currentCard.realWorldAnalogy}
              </div>
            </div>

            {/* Interactive Concept Verification Poll */}
            {currentCard.quickCheck && (
              <div className="p-4 sm:p-5 rounded-2xl bg-purple-500/5 dark:bg-purple-900/10 border border-purple-200 dark:border-purple-800/60 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-purple-900 dark:text-purple-200">
                      10-Second Concept Poll (+20 XP)
                    </h4>
                  </div>
                  {selectedAnswers[currentCard.id] !== undefined && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300">
                      Answered
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  {currentCard.quickCheck.question}
                </p>

                <div className="grid grid-cols-1 gap-2">
                  {currentCard.quickCheck.options.map((opt, oIdx) => {
                    const answered = selectedAnswers[currentCard.id] !== undefined;
                    const isSelected = selectedAnswers[currentCard.id] === oIdx;
                    const isCorrect = oIdx === currentCard.quickCheck.correctIndex;

                    let btnStyle =
                      'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-purple-400 active:scale-99';
                    if (answered) {
                      if (isCorrect) {
                        btnStyle =
                          'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-400 text-emerald-900 dark:text-emerald-100 font-bold';
                      } else if (isSelected) {
                        btnStyle =
                          'bg-rose-50 dark:bg-rose-950/60 border-rose-400 text-rose-900 dark:text-rose-100 font-bold';
                      } else {
                        btnStyle =
                          'opacity-40 bg-slate-100 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800 text-slate-400';
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        type="button"
                        disabled={answered}
                        onClick={() =>
                          handleSelectAnswer(
                            currentCard.id,
                            oIdx,
                            currentCard.quickCheck.correctIndex
                          )
                        }
                        className={`w-full p-3 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                      >
                        <span className="pr-2">{opt}</span>
                        {answered && isCorrect && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        )}
                        {answered && isSelected && !isCorrect && (
                          <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {selectedAnswers[currentCard.id] !== undefined && (
                  <div className="p-3 rounded-xl bg-purple-100/70 dark:bg-purple-950/80 text-xs text-purple-900 dark:text-purple-200 leading-relaxed animate-in fade-in">
                    <span className="font-extrabold">Why this is true: </span>
                    {currentCard.quickCheck.explanation}
                  </div>
                )}
              </div>
            )}

            {/* Bottom Actions Bar */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800">
              <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                🎯 <strong>Takeaway:</strong> {currentCard.takeaway}
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                {/* Share / Copy button */}
                <button
                  type="button"
                  onClick={() => handleCopyCard(currentCard)}
                  className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold transition cursor-pointer"
                  title="Copy to clipboard"
                >
                  <Share2 className="w-3.5 h-3.5" />
                </button>

                {/* Save to Notes */}
                <button
                  type="button"
                  onClick={() => handleSaveToNotes(currentCard)}
                  disabled={savedNotes[currentCard.id]}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer ${
                    savedNotes[currentCard.id]
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                      : 'border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {savedNotes[currentCard.id] ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Bookmark className="w-3.5 h-3.5" />
                  )}
                  <span>{savedNotes[currentCard.id] ? 'Saved' : 'Save Note'}</span>
                </button>

                {/* Deep Dive with Eduvia AI */}
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenEduviaAIWithQuery) {
                      onOpenEduviaAIWithQuery(
                        `Deep dive: Can you explain the foundational mechanics of "${currentCard.title}" in greater depth with mathematical or scientific rigor, and show common student misconceptions?`
                      );
                    }
                  }}
                  className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 active:scale-95 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Deep Dive AI</span>
                </button>
              </div>
            </div>

          </div>
        ) : (
          <div className="p-12 text-center space-y-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white font-['Outfit']">
                No Brain Bites found for "{activeSearch || selectedCategory}"
              </h3>
              <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                Would you like Eduvia's Gemini AI to instantly formulate a brand-new 60-second micro-lesson on this exact topic?
              </p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleGenerateCustomCard}
                disabled={isGeneratingAi}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Generate Brain Bite on "{searchQuery || activeSearch}"</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  handleClearSearch();
                }}
                className="px-3.5 py-2 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                Reset Filter
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Reel Controls: Previous / Next Card */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800/80">
        <button
          type="button"
          id="btn-feed-prev"
          onClick={handlePrev}
          disabled={currentIndex === 0 || cards.length === 0}
          className="px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 disabled:opacity-30 transition flex items-center gap-1.5 cursor-pointer"
        >
          <ChevronUp className="w-4 h-4" />
          <span>Previous Bite (↑)</span>
        </button>

        <span className="text-xs text-slate-400 hidden sm:inline font-medium">
          Swipe or press <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono text-[10px]">↓</kbd> or <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono text-[10px]">Space</kbd> to doom-scroll
        </span>

        <button
          type="button"
          id="btn-feed-next"
          onClick={handleNext}
          disabled={currentIndex >= cards.length - 1 || cards.length === 0}
          className="px-5 py-2.5 rounded-2xl bg-purple-600 hover:bg-purple-700 active:scale-98 text-white text-xs font-bold disabled:opacity-30 transition flex items-center gap-1.5 cursor-pointer shadow-md shadow-purple-600/20"
        >
          <span>Next Bite (↓)</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
