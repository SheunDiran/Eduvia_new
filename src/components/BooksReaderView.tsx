import React, { useState, useEffect, useRef } from 'react';
import {
  BookOpen,
  Search,
  Volume2,
  VolumeX,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  ChevronRight,
  HelpCircle,
  FileText,
  X,
  Layers,
  ArrowLeft,
  CheckCircle2,
  Loader2,
  Bookmark
} from 'lucide-react';
import { BookChapterSummary, BookItem, UserProfile } from '../types';
import { getBookChapterSummary, searchBooks } from '../services/api';

interface BooksReaderViewProps {
  user: UserProfile;
}

export const BooksReaderView: React.FC<BooksReaderViewProps> = ({ user }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState<BookItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isLoadingBooks, setIsLoadingBooks] = useState(false);

  // Active Reader View
  const [activeReadingBook, setActiveReadingBook] = useState<BookItem | null>(null);
  const [activeChapterNumber, setActiveChapterNumber] = useState<number>(1);
  const [readerTheme, setReaderTheme] = useState<'dark' | 'sepia' | 'light'>('dark');
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg' | 'xl'>('base');

  // Text-to-Speech Audio Reader State
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [speechRate, setSpeechRate] = useState<number>(1.0);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Deep Chapter Summary & Quiz Prep State
  const [activeSummaryBook, setActiveSummaryBook] = useState<BookItem | null>(null);
  const [summaryChapterNum, setSummaryChapterNum] = useState<number>(1);
  const [chapterSummary, setChapterSummary] = useState<BookChapterSummary | null>(null);
  const [isLoadingSummary, setIsLoadingSummary] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((curr) => (curr === msg ? null : curr));
    }, 4000);
  };

  // Initial load
  useEffect(() => {
    fetchInitialBooks('');
  }, []);

  const fetchInitialBooks = async (query: string) => {
    setIsLoadingBooks(true);
    try {
      const data = await searchBooks(query);
      if (data.books) {
        setBooks(data.books);
      }
    } catch (err) {
      console.warn('Failed to load books:', err);
    } finally {
      setIsLoadingBooks(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchInitialBooks(searchQuery.trim());
  };

  // -------------------------------------------------------------
  // TEXT-TO-SPEECH (AI READS TO STUDENT)
  // -------------------------------------------------------------
  const startAudioReading = (text: string) => {
    if (!('speechSynthesis' in window)) {
      showToast('Text-to-speech audio is not supported in this browser environment.');
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = speechRate;
    utterance.pitch = 1.0;

    // Pick best English voice
    const voices = window.speechSynthesis.getVoices();
    const naturalVoice = voices.find((v) => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha')));
    if (naturalVoice) utterance.voice = naturalVoice;

    utterance.onend = () => {
      setIsPlayingAudio(false);
    };

    utterance.onerror = () => {
      setIsPlayingAudio(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsPlayingAudio(true);
  };

  const pauseAudioReading = () => {
    if ('speechSynthesis' in window) {
      if (window.speechSynthesis.speaking) {
        if (isPlayingAudio) {
          window.speechSynthesis.pause();
          setIsPlayingAudio(false);
        } else {
          window.speechSynthesis.resume();
          setIsPlayingAudio(true);
        }
      }
    }
  };

  const stopAudioReading = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    }
  };

  // -------------------------------------------------------------
  // CHAPTER SUMMARY & QUIZ PREP
  // -------------------------------------------------------------
  const loadChapterSummary = async (book: BookItem, chapNum: number) => {
    setActiveSummaryBook(book);
    setSummaryChapterNum(chapNum);
    setIsLoadingSummary(true);
    setChapterSummary(null);

    try {
      const data = await getBookChapterSummary({
        bookTitle: book.title,
        author: book.author,
        chapterNumber: chapNum
      });
      if (data.summary) {
        setChapterSummary(data.summary);
      }
    } catch (err: any) {
      console.warn('Error loading chapter summary:', err);
    } finally {
      setIsLoadingSummary(false);
    }
  };

  // Sample reading passage for in-app reader
  const getBookPassage = (book: BookItem, chapter: number) => {
    if (book.title.includes('Gatsby')) {
      return `In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. "Whenever you feel like criticizing any one," he told me, "just remember that all the people in this world haven't had the advantages that you've had."

He didn't say any more, but we've always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that. In consequence, I'm inclined to reserve all judgements, a habit that has opened up many curious natures to me and also made me the victim of not a few veteran bores.

The abnormal mind is quick to detect and attach itself to this quality when it appears in a normal person, and so it came about that in college I was unjustly accused of being a politician, because I was privy to the secret griefs of wild, unknown men. Most of the confidences were unsought—frequently I have feigned sleep, preoccupation, or a hostile levity when I realized by some unmistakable sign that an intimate revelation was quivering on the horizon...`;
    }

    if (book.title.includes('Macbeth')) {
      return `SCENE I. An open place.
Thunder and lightning. Enter three Witches.

First Witch:
When shall we three meet again
In thunder, lightning, or in rain?

Second Witch:
When the hurlyburly's done,
When the battle's lost and won.

Third Witch:
That will be ere the set of sun.

First Witch:
Where the place?

Second Witch:
Upon the heath.

Third Witch:
There to meet with Macbeth.

First Witch:
I come, Graymalkin!

Second Witch:
Paddock calls.

Third Witch:
Anon.

ALL:
Fair is foul, and foul is fair:
Hover through the fog and filthy air.`;
    }

    return `Chapter ${chapter} of ${book.title} explores the foundational relationships, sociopolitical setting, and primary ethical conflicts of the work.

As the central figures confront the central dilemma of their society, questions of moral agency, duty, and consequence are scrutinized with forensic literary precision. The author utilizes rhythmic prose and heightened symbolic staging to invite the reader to question standard conventions.

Every passage serves a double function: establishing the psychological interiority of the protagonist while foreshadowing the decisive turning point that defines the conclusion of the text.`;
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6 max-w-7xl mx-auto text-slate-900 dark:text-slate-100 transition-colors">
      {toastMessage && (
        <div className="p-3.5 bg-purple-500/10 border border-purple-500/30 text-purple-700 dark:text-purple-300 rounded-xl text-xs font-medium flex items-center justify-between animate-fadeIn shadow-xs">
          <span>{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} className="p-1 hover:text-purple-900 dark:hover:text-white cursor-pointer">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-purple-900/40 via-indigo-900/30 to-slate-900/50 p-6 sm:p-8 rounded-3xl border border-purple-500/20 backdrop-blur-md relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase tracking-wider mb-2">
            <BookOpen className="w-4 h-4" />
            <span>Eduvia Global Library & Audio Reader</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Read Any Book in the World. Let AI Narrate or Summarize It.
          </h1>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            Search millions of books, listen to AI narration with synchronized speech, and access deep chapter summaries with anticipated exam quiz questions so you never fall behind.
          </p>
        </div>

        {/* Search Bar inside Header */}
        <div className="relative z-10 w-full md:w-80">
          <form onSubmit={handleSearchSubmit} className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search title, author, or ISBN..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-950/80 border border-slate-700/80 text-white rounded-xl text-xs focus:ring-2 focus:ring-purple-500 outline-none placeholder:text-slate-500"
            />
          </form>
        </div>
      </div>

      {/* Book Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-['Outfit']">
            Curated High School & University Texts
          </h2>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {books.length} Available Texts
          </span>
        </div>

        {isLoadingBooks ? (
          <div className="p-12 text-center space-y-3">
            <Loader2 className="w-8 h-8 text-purple-600 animate-spin mx-auto" />
            <p className="text-xs text-slate-500">Retrieving book records from global catalog...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {books.map((book) => (
              <div
                key={book.id}
                className="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-purple-300 dark:hover:border-purple-700/60 transition-all flex flex-col justify-between"
              >
                <div className="flex items-start gap-4">
                  {book.coverUrl ? (
                    <img
                      src={book.coverUrl}
                      alt={book.title}
                      className="w-16 h-24 rounded-lg object-cover shadow-md shrink-0 bg-slate-800"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-16 h-24 rounded-lg bg-gradient-to-br from-purple-800 to-indigo-900 text-white flex flex-col items-center justify-center shrink-0 p-2 text-center shadow-md">
                      <BookOpen className="w-6 h-6 text-purple-300 mb-1" />
                      <span className="text-[9px] font-bold line-clamp-2">{book.title}</span>
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                      {book.genre}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white truncate mt-0.5 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                      {book.author} {book.year ? `• ${book.year}` : ''}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                      {book.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveReadingBook(book);
                      setActiveChapterNumber(1);
                    }}
                    className="flex-1 py-2 px-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer shadow-sm shadow-purple-600/20"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Read Book</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => loadChapterSummary(book, 1)}
                    className="py-2 px-3 rounded-xl border border-purple-200 dark:border-purple-800/60 hover:bg-purple-50 dark:hover:bg-purple-950/40 text-purple-700 dark:text-purple-300 text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer"
                    title="Deep Chapter Summaries & Anticipated Quiz Questions"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-purple-500" />
                    <span>Summary & Quiz</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ================= FULLSCREEN READER MODAL ================= */}
      {activeReadingBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-2 sm:p-6">
          <div
            className={`w-full max-w-4xl h-[94vh] rounded-3xl shadow-2xl border flex flex-col overflow-hidden transition-colors ${
              readerTheme === 'dark'
                ? 'bg-[#0b0f19] text-slate-100 border-slate-800'
                : readerTheme === 'sepia'
                ? 'bg-[#fbf0d9] text-[#433422] border-[#ecd9b5]'
                : 'bg-white text-slate-900 border-slate-200'
            }`}
          >
            {/* Reader Controls Toolbar */}
            <div className="p-4 border-b border-inherit flex items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    stopAudioReading();
                    setActiveReadingBook(null);
                  }}
                  className="p-1.5 rounded-xl hover:bg-black/10 dark:hover:bg-white/10 transition cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <div>
                  <h3 className="text-sm font-bold truncate max-w-[200px] sm:max-w-xs">
                    {activeReadingBook.title}
                  </h3>
                  <p className="text-[11px] opacity-70">
                    Chapter {activeChapterNumber} • {activeReadingBook.author}
                  </p>
                </div>
              </div>

              {/* Center Audio Reader Player */}
              <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-inherit">
                <button
                  type="button"
                  onClick={() => {
                    if (isPlayingAudio) {
                      pauseAudioReading();
                    } else {
                      startAudioReading(getBookPassage(activeReadingBook, activeChapterNumber));
                    }
                  }}
                  className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-sm transition"
                >
                  {isPlayingAudio ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{isPlayingAudio ? 'Pause Narration' : 'Read to Me'}</span>
                </button>

                {isPlayingAudio && (
                  <button
                    type="button"
                    onClick={stopAudioReading}
                    className="p-1.5 rounded-xl hover:bg-black/10 dark:hover:bg-white/10 text-xs font-semibold"
                    title="Stop Audio"
                  >
                    <VolumeX className="w-4 h-4 text-red-400" />
                  </button>
                )}

                <div className="hidden sm:flex items-center gap-1 text-[11px] px-2 opacity-80">
                  <span>Speed:</span>
                  <select
                    value={speechRate}
                    onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
                    className="bg-transparent font-bold cursor-pointer outline-none"
                  >
                    <option value="0.8">0.8x</option>
                    <option value="1.0">1.0x</option>
                    <option value="1.25">1.25x</option>
                    <option value="1.5">1.5x</option>
                  </select>
                </div>
              </div>

              {/* Theme & Font Customizer */}
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center gap-1 p-1 rounded-xl border border-inherit">
                  <button
                    type="button"
                    onClick={() => setReaderTheme('dark')}
                    className={`w-6 h-6 rounded-lg text-xs font-bold ${readerTheme === 'dark' ? 'bg-purple-600 text-white' : 'opacity-60'}`}
                  >
                    D
                  </button>
                  <button
                    type="button"
                    onClick={() => setReaderTheme('sepia')}
                    className={`w-6 h-6 rounded-lg text-xs font-bold ${readerTheme === 'sepia' ? 'bg-[#c8aa74] text-white' : 'opacity-60'}`}
                  >
                    S
                  </button>
                  <button
                    type="button"
                    onClick={() => setReaderTheme('light')}
                    className={`w-6 h-6 rounded-lg text-xs font-bold ${readerTheme === 'light' ? 'bg-slate-300 text-black' : 'opacity-60'}`}
                  >
                    L
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    stopAudioReading();
                    setActiveReadingBook(null);
                  }}
                  className="p-2 rounded-xl hover:bg-black/10 dark:hover:bg-white/10"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Reading Content Area */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-12 md:p-16 max-w-3xl mx-auto w-full leading-relaxed font-['Newsreader',serif]">
              <div className="text-center mb-8 border-b border-inherit pb-6">
                <p className="text-xs uppercase tracking-widest font-sans opacity-60 mb-1">
                  {activeReadingBook.title}
                </p>
                <h1 className="text-2xl sm:text-3xl font-bold font-serif">
                  Chapter {activeChapterNumber}
                </h1>
              </div>

              <div
                className={`whitespace-pre-line ${
                  fontSize === 'sm'
                    ? 'text-sm leading-7'
                    : fontSize === 'base'
                    ? 'text-base sm:text-lg leading-8'
                    : fontSize === 'lg'
                    ? 'text-lg sm:text-xl leading-9'
                    : 'text-xl sm:text-2xl leading-10'
                }`}
              >
                {getBookPassage(activeReadingBook, activeChapterNumber)}
              </div>

              {/* Bottom Chapter Switcher */}
              <div className="mt-12 pt-8 border-t border-inherit flex items-center justify-between font-sans">
                <button
                  type="button"
                  disabled={activeChapterNumber <= 1}
                  onClick={() => {
                    stopAudioReading();
                    setActiveChapterNumber((c) => Math.max(1, c - 1));
                  }}
                  className="px-4 py-2 rounded-xl border border-inherit text-xs font-bold disabled:opacity-30 cursor-pointer"
                >
                  ← Previous Chapter
                </button>

                <button
                  type="button"
                  onClick={() => loadChapterSummary(activeReadingBook, activeChapterNumber)}
                  className="px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-md"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Chapter {activeChapterNumber} Quiz Prep</span>
                </button>

                <button
                  type="button"
                  disabled={activeChapterNumber >= (activeReadingBook.chaptersCount || 10)}
                  onClick={() => {
                    stopAudioReading();
                    setActiveChapterNumber((c) => c + 1);
                  }}
                  className="px-4 py-2 rounded-xl border border-inherit text-xs font-bold disabled:opacity-30 cursor-pointer"
                >
                  Next Chapter →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= CHAPTER SUMMARY & QUIZ PREP DRAWER ================= */}
      {activeSummaryBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-3 sm:p-6 overflow-y-auto">
          <div className="w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-purple-200 dark:border-purple-800/60 overflow-hidden flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-150">
            {/* Header */}
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 bg-gradient-to-r from-purple-50 via-white to-indigo-50 dark:from-purple-950/40 dark:via-slate-900 dark:to-indigo-950/30 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                  Academic Exam & Quiz Prep
                </span>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-['Outfit']">
                  {activeSummaryBook.title} — Chapter {summaryChapterNum} Breakdown
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setActiveSummaryBook(null)}
                className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Chapter Select Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
                {Array.from({ length: activeSummaryBook.chaptersCount || 10 }, (_, i) => i + 1).map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => loadChapterSummary(activeSummaryBook, num)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                      summaryChapterNum === num
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                    }`}
                  >
                    Ch. {num}
                  </button>
                ))}
              </div>

              {isLoadingSummary ? (
                <div className="p-16 text-center space-y-3">
                  <Loader2 className="w-8 h-8 text-purple-600 animate-spin mx-auto" />
                  <p className="text-xs text-slate-500">
                    Eduvia AI is dissecting Chapter {summaryChapterNum}, key events, and anticipated quiz questions...
                  </p>
                </div>
              ) : chapterSummary ? (
                <div className="space-y-6">
                  {/* High Density Exam Cheat Sheet */}
                  <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/60">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300 flex items-center gap-1.5 mb-1.5">
                      <Bookmark className="w-4 h-4" />
                      Exam Cheat Sheet (High-Yield Summary)
                    </h4>
                    <p className="text-xs sm:text-sm text-purple-900 dark:text-purple-100 leading-relaxed font-medium">
                      {chapterSummary.examCheatSheet}
                    </p>
                  </div>

                  {/* Key Events */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                      Key Narrative & Argumentative Events
                    </h4>
                    <div className="space-y-2">
                      {chapterSummary.keyEvents.map((evt, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-200 flex items-start gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300 flex items-center justify-center shrink-0 font-bold text-[11px] mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="leading-relaxed">{evt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Core Themes */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Core Themes & Symbolism
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {chapterSummary.coreThemes.map((th, idx) => (
                        <div key={idx} className="px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
                          {th}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Anticipated Quiz Questions */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                      <HelpCircle className="w-4 h-4 text-purple-500" />
                      Anticipated Quiz Questions (What Professors & Teachers Ask)
                    </h4>
                    <div className="space-y-3">
                      {chapterSummary.anticipatedQuizQuestions.map((q, idx) => (
                        <div key={idx} className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 space-y-2">
                          <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                            Q{idx + 1}: {q.question}
                          </p>
                          <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-200 leading-relaxed">
                            <span className="font-bold">Model Answer: </span>
                            {q.answer}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
