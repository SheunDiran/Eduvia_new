import React, { useState, useEffect } from 'react';
import {
  Flame,
  Sparkles,
  BookOpen,
  Share2,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Bookmark,
  Check,
  Zap,
  Compass
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
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [savedNotes, setSavedNotes] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadFeed(selectedCategory);
  }, [selectedCategory]);

  const loadFeed = async (category: string) => {
    setIsLoading(true);
    try {
      const data = await fetchBrainFeed(category);
      if (data.cards) {
        setCards(data.cards);
        setCurrentIndex(0);
      }
    } catch (err) {
      console.warn('Failed to load brainfeed:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const currentCard = cards[currentIndex];

  const handleSelectAnswer = (cardId: string, optIndex: number, correctIndex: number) => {
    if (selectedAnswers[cardId] !== undefined) return;
    setSelectedAnswers((prev) => ({ ...prev, [cardId]: optIndex }));

    if (optIndex === correctIndex) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    }
  };

  const handleSaveToNotes = (card: BrainFeedCard) => {
    saveNote(user.id, {
      title: `BrainFeed: ${card.title}`,
      content: `**Core Insight:**\n${card.coreInsight}\n\n**Analogy:**\n${card.realWorldAnalogy}\n\n**Key Takeaway:**\n${card.takeaway}`,
      subjectId: 'science'
    });
    setSavedNotes((prev) => ({ ...prev, [card.id]: true }));
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'j') {
        handleNext();
      } else if (e.key === 'ArrowUp' || e.key === 'k') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, cards.length]);

  const categories = [
    'All',
    'Calculus & Math',
    'Neuroscience & Psychology',
    'Physics & Space',
    'Economics & Philosophy',
    'CS & AI'
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl mx-auto flex flex-col min-h-[calc(100vh-5rem)] justify-between text-slate-900 dark:text-slate-100 transition-colors">
      
      {/* Feed Category Filter Bar */}
      <div className="space-y-4 mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-rose-500 text-white flex items-center justify-center shadow-md">
              <Flame className="w-4 h-4" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
                BrainFeed • Educated Doom Scrolling
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Replace mindless scrolling with 60-second intellectual breakthroughs and live interactive mini-polls.
              </p>
            </div>
          </div>

          <div className="text-xs text-slate-400 font-medium self-end sm:self-auto">
            Card {cards.length ? currentIndex + 1 : 0} of {cards.length}
          </div>
        </div>

        {/* Categories Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Single-Card Viewport (Swipeable / Stacked Card) */}
      <div className="flex-1 flex flex-col justify-center my-2">
        {currentCard ? (
          <div className="w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-200 animate-in fade-in slide-in-from-bottom-4">
            
            {/* Card Header & Hook */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider">
                  {currentCard.category}
                </span>
                <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  {currentCard.readTime}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-['Outfit'] leading-tight">
                {currentCard.title}
              </h2>

              <p className="text-base sm:text-lg font-semibold text-purple-600 dark:text-purple-400 leading-snug">
                "{currentCard.hook}"
              </p>
            </div>

            {/* Core Insight & Analogy */}
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-800/80 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-wider text-[10px]">
                  The Intellectual Breakdown
                </p>
                {currentCard.coreInsight}
              </div>

              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm leading-relaxed text-amber-900 dark:text-amber-200">
                <p className="font-bold uppercase tracking-wider text-[10px] text-amber-700 dark:text-amber-300 mb-1">
                  💡 Intuitive Real-World Analogy
                </p>
                {currentCard.realWorldAnalogy}
              </div>
            </div>

            {/* Interactive Quick Poll */}
            <div className="p-5 rounded-2xl bg-purple-500/5 dark:bg-purple-900/10 border border-purple-200/80 dark:border-purple-800/40 space-y-3">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-900 dark:text-purple-200">
                  Instant Concept Verification Poll
                </h4>
              </div>

              <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                {currentCard.quickCheck.question}
              </p>

              <div className="space-y-2">
                {currentCard.quickCheck.options.map((opt, oIdx) => {
                  const answered = selectedAnswers[currentCard.id] !== undefined;
                  const isSelected = selectedAnswers[currentCard.id] === oIdx;
                  const isCorrect = oIdx === currentCard.quickCheck.correctIndex;

                  let btnStyle = 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-purple-400';
                  if (answered) {
                    if (isCorrect) {
                      btnStyle = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-400 text-emerald-800 dark:text-emerald-200 font-bold';
                    } else if (isSelected) {
                      btnStyle = 'bg-red-50 dark:bg-red-950/60 border-red-400 text-red-800 dark:text-red-200';
                    } else {
                      btnStyle = 'opacity-40 bg-slate-100 dark:bg-slate-800 border-slate-200';
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      type="button"
                      disabled={answered}
                      onClick={() => handleSelectAnswer(currentCard.id, oIdx, currentCard.quickCheck.correctIndex)}
                      className={`w-full p-3 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                    >
                      <span>{opt}</span>
                      {answered && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />}
                      {answered && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-red-500 shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {selectedAnswers[currentCard.id] !== undefined && (
                <div className="p-3 rounded-xl bg-purple-100/70 dark:bg-purple-950/80 text-xs text-purple-900 dark:text-purple-200 leading-relaxed animate-in fade-in">
                  <span className="font-bold">Why: </span>
                  {currentCard.quickCheck.explanation}
                </div>
              )}
            </div>

            {/* Bottom Actions Bar */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800">
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                🎯 <strong>Takeaway:</strong> {currentCard.takeaway}
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  type="button"
                  onClick={() => handleSaveToNotes(currentCard)}
                  disabled={savedNotes[currentCard.id]}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer ${
                    savedNotes[currentCard.id]
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                      : 'border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {savedNotes[currentCard.id] ? <Check className="w-3.5 h-3.5" /> : <Bookmark className="w-3.5 h-3.5" />}
                  <span>{savedNotes[currentCard.id] ? 'Saved' : 'Save Note'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (onOpenEduviaAIWithQuery) {
                      onOpenEduviaAIWithQuery(`Explain the deep mechanics behind "${currentCard.title}" and give me more real-world examples.`);
                    }
                  }}
                  className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ask AI</span>
                </button>
              </div>
            </div>

          </div>
        ) : (
          <div className="p-12 text-center text-slate-500">
            No cards found for this category.
          </div>
        )}
      </div>

      {/* Navigation Controls: Previous / Next Card (or Keyboard Up/Down) */}
      <div className="flex items-center justify-between pt-4">
        <button
          type="button"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 disabled:opacity-30 transition flex items-center gap-1.5 cursor-pointer"
        >
          <ChevronUp className="w-4 h-4" />
          <span>Previous Insight (↑)</span>
        </button>

        <span className="text-xs text-slate-400 hidden sm:inline">
          Use keyboard arrows (↑ / ↓) to doom-scroll intelligently
        </span>

        <button
          type="button"
          onClick={handleNext}
          disabled={currentIndex >= cards.length - 1}
          className="px-5 py-2.5 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold disabled:opacity-30 transition flex items-center gap-1.5 cursor-pointer shadow-md shadow-purple-600/20"
        >
          <span>Next Insight (↓)</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
