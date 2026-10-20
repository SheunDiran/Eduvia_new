import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  Plus,
  Trash2,
  MessageSquare,
  Send,
  ArrowLeft,
  X,
  Bot,
  User,
  Copy,
  Check,
  BookOpen,
  Lightbulb,
  Clock,
  RotateCcw,
  GraduationCap,
  Camera
} from 'lucide-react';
import { AIChatMessage, AIChatSession, UserProfile } from '../types';
import { MarkdownRenderer } from './MarkdownRenderer';
import {
  aiAutoNameChat,
  aiGeneralChat,
  aiStreamGeneralChat,
  deleteChatSession,
  getChatSessions,
  saveChatSession
} from '../services/api';

interface EduviaAIFullscreenProps {
  user: UserProfile;
  isOpen: boolean;
  onClose: () => void;
  initialTopicContext?: {
    subject?: string;
    topic?: string;
  };
  onOpenPhotoSolver?: () => void;
}

export const EduviaAIFullscreen: React.FC<EduviaAIFullscreenProps> = ({
  user,
  isOpen,
  onClose,
  initialTopicContext,
  onOpenPhotoSolver
}) => {
  const [sessions, setSessions] = useState<AIChatSession[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<AIChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedMsgId, setCopiedMsgId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  // Load chat sessions from storage on open
  useEffect(() => {
    if (isOpen) {
      const saved = getChatSessions(user.id);
      setSessions(saved);

      if (saved.length > 0) {
        // Select the most recent session
        setActiveSessionId(saved[0].id);
        setMessages(saved[0].messages);
      } else {
        // Start a fresh new session
        startNewChatSession([]);
      }
    }
  }, [isOpen, user.id]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Focus input on mount/open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, activeSessionId]);

  if (!isOpen) return null;

  const startNewChatSession = (existingSessions: AIChatSession[] = sessions) => {
    const defaultWelcome = initialTopicContext?.topic
      ? `Hello ${user.name}! 👋 I am **Eduvia AI**, your 24/7 personal tutor.\n\nI see you are studying **${initialTopicContext.topic}** (${initialTopicContext.subject || 'General'}). How can I assist you with this topic today? Ask for step-by-step solutions, key definitions, or exam strategies!`
      : `Hello ${user.name}! 👋 I am **Eduvia AI**, your high-school academic assistant.\n\nAsk me anything: homework walkthroughs, math derivations, essay critique, chemistry mechanisms, or study schedules!`;

    const initialMsg: AIChatMessage = {
      id: 'msg-' + Date.now(),
      role: 'assistant',
      content: defaultWelcome,
      timestamp: new Date().toISOString()
    };

    const newSession: AIChatSession = {
      id: 'session-' + Date.now(),
      userId: user.id,
      title: 'New Study Conversation',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      messages: [initialMsg]
    };

    const updated = [newSession, ...existingSessions];
    setSessions(updated);
    setActiveSessionId(newSession.id);
    setMessages([initialMsg]);
    saveChatSession(user.id, newSession);
  };

  const handleSelectSession = (sessionId: string) => {
    const session = sessions.find((s) => s.id === sessionId);
    if (session) {
      setActiveSessionId(session.id);
      setMessages(session.messages);
    }
  };

  const handleDeleteSession = (e: React.MouseEvent, sessionId: string) => {
    e.stopPropagation();
    deleteChatSession(user.id, sessionId);
    const updated = sessions.filter((s) => s.id !== sessionId);
    setSessions(updated);

    if (activeSessionId === sessionId) {
      if (updated.length > 0) {
        setActiveSessionId(updated[0].id);
        setMessages(updated[0].messages);
      } else {
        startNewChatSession([]);
      }
    }
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');

    const userMsg: AIChatMessage = {
      id: 'msg-' + Date.now(),
      role: 'user',
      content: userText,
      timestamp: new Date().toISOString()
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setIsLoading(true);

    const currentSession = sessions.find((s) => s.id === activeSessionId) || {
      id: 'session-' + Date.now(),
      userId: user.id,
      title: 'New Study Conversation',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      messages: []
    };

    const isFirstUserMessage =
      messages.filter((m) => m.role === 'user').length === 0;

    const assistantMsgId = 'msg-' + (Date.now() + 1);
    let fullResponse = '';

    try {
      // 1. Fetch AI reply via real-time stream (ChatGPT / Claude style)
      await aiStreamGeneralChat(
        {
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
          context: {
            grade: user.grade,
            subject: initialTopicContext?.subject,
            topic: initialTopicContext?.topic
          }
        },
        (chunkText) => {
          fullResponse = chunkText;
          setIsLoading(false); // Clear typing indicator as soon as first token arrives
          setMessages((prev) => {
            const existingIdx = prev.findIndex((m) => m.id === assistantMsgId);
            if (existingIdx !== -1) {
              const copy = [...prev];
              copy[existingIdx] = {
                ...copy[existingIdx],
                content: chunkText
              };
              return copy;
            } else {
              return [
                ...prev,
                {
                  id: assistantMsgId,
                  role: 'assistant',
                  content: chunkText,
                  timestamp: new Date().toISOString()
                }
              ];
            }
          });
        }
      );

      // Save final state
      const finalAssistantMsg: AIChatMessage = {
        id: assistantMsgId,
        role: 'assistant',
        content: fullResponse,
        timestamp: new Date().toISOString()
      };
      const finalMessages = [...newMessages, finalAssistantMsg];

      // 2. Background Auto-naming logic (runs non-blocking, like ChatGPT/Claude)
      let initialTitle = currentSession.title;
      if (isFirstUserMessage || currentSession.title === 'New Study Conversation') {
        const clean = userText.replace(/[^a-zA-Z0-9 ]/g, '').trim();
        const words = clean.split(/\s+/).slice(0, 4).join(' ');
        initialTitle = words ? words.charAt(0).toUpperCase() + words.slice(1) : 'Academic Inquiry';
      }

      const updatedSession: AIChatSession = {
        ...currentSession,
        title: initialTitle,
        updatedAt: new Date().toISOString(),
        messages: finalMessages
      };

      saveChatSession(user.id, updatedSession);
      setSessions((prev) =>
        prev.map((s) => (s.id === updatedSession.id ? updatedSession : s))
      );

      // Async AI title refinement (never blocks user UI or keeps loading indicator active)
      if (isFirstUserMessage || currentSession.title === 'New Study Conversation') {
        aiAutoNameChat(userText).then((refinedTitle) => {
          if (refinedTitle && refinedTitle !== initialTitle) {
            setSessions((prev) =>
              prev.map((s) => (s.id === updatedSession.id ? { ...s, title: refinedTitle } : s))
            );
            saveChatSession(user.id, { ...updatedSession, title: refinedTitle });
          }
        }).catch(() => {});
      }
    } catch (err: any) {
      if (!fullResponse) {
        const errorMsg: AIChatMessage = {
          id: assistantMsgId,
          role: 'assistant',
          content: err?.message || 'I encountered an issue connecting to Eduvia AI. Please check your network and try again.',
          timestamp: new Date().toISOString()
        };
        setMessages((prev) => {
          const filtered = prev.filter((m) => m.id !== assistantMsgId);
          return [...filtered, errorMsg];
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedMsgId(id);
    setTimeout(() => setCopiedMsgId(null), 2000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickPrompts = [
    { label: 'Explain a Concept', prompt: 'Can you explain the core concepts of cellular respiration step by step?' },
    { label: 'Math Derivation', prompt: 'How do you solve 2x² - 4x - 6 = 0 using the quadratic formula with steps?' },
    { label: 'Essay Thesis', prompt: 'Help me draft a strong thesis statement for an essay about the causes of World War I.' },
    { label: 'Error Diagnosis', prompt: 'Why is (-4)² equal to positive 16 and not negative 16?' }
  ];

  const currentSession = sessions.find((s) => s.id === activeSessionId);

  return (
    <div className="fixed inset-0 z-50 bg-slate-900 flex text-slate-100 font-['Plus_Jakarta_Sans'] overflow-hidden animate-in fade-in duration-200">
      {/* ================= LEFT SIDEBAR: CHAT HISTORY ================= */}
      <div
        className={`${
          isSidebarOpen ? 'w-72 sm:w-80' : 'w-0 -translate-x-full'
        } transition-all duration-200 ease-in-out bg-slate-950 border-r border-slate-800 flex flex-col h-full shrink-0 overflow-hidden`}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-purple-600/30 border border-purple-500/40 text-purple-400 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white font-['Outfit']">Eduvia AI</h2>
              <span className="text-[11px] text-slate-400">Conversations</span>
            </div>
          </div>

          <button
            type="button"
            id="btn-new-chat"
            onClick={() => startNewChatSession()}
            className="p-2 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
            title="Start New Chat"
          >
            <Plus className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[11px]">New Chat</span>
          </button>
        </div>

        {/* Chat History List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1.5">
          <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Recent Conversations
          </div>

          {sessions.length === 0 ? (
            <div className="p-4 text-center text-xs text-slate-500">
              No saved conversations yet. Start a new chat below!
            </div>
          ) : (
            sessions.map((s) => {
              const isActive = s.id === activeSessionId;
              const formattedDate = new Date(s.updatedAt).toLocaleDateString(undefined, {
                month: 'short',
                day: 'numeric'
              });

              return (
                <div
                  key={s.id}
                  onClick={() => handleSelectSession(s.id)}
                  className={`group relative p-2.5 rounded-xl text-xs font-medium cursor-pointer transition-all flex items-center justify-between gap-2 ${
                    isActive
                      ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
                      : 'hover:bg-slate-900 text-slate-300 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    <MessageSquare
                      className={`w-3.5 h-3.5 shrink-0 ${
                        isActive ? 'text-purple-400' : 'text-slate-500'
                      }`}
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-semibold text-slate-200">
                        {s.title}
                      </p>
                      <span className="text-[10px] text-slate-500 block">
                        {formattedDate} • {s.messages.length} msgs
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => handleDeleteSession(e, s.id)}
                    className="opacity-0 group-hover:opacity-100 p-1.5 text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-lg transition-all cursor-pointer"
                    title="Delete Chat"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Sidebar Footer */}
        <div className="p-3 border-t border-slate-800 bg-slate-950/50 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-purple-900/60 text-purple-300 flex items-center justify-center font-bold text-[10px]">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <span className="truncate max-w-[130px] font-medium text-slate-300">
              {user.name}
            </span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-semibold uppercase">
            {user.grade.replace('grade-', 'G')}
          </span>
        </div>
      </div>

      {/* ================= MAIN FULLSCREEN CHAT AREA ================= */}
      <div className="flex-1 flex flex-col h-full bg-slate-900 overflow-hidden relative">
        {/* Top Fullscreen Bar */}
        <div className="p-4 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 flex items-center justify-between shrink-0 z-10">
          <div className="flex items-center gap-3">
            <button
              type="button"
              id="btn-toggle-ai-sidebar"
              onClick={() => setIsSidebarOpen((prev) => !prev)}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              title={isSidebarOpen ? 'Hide History' : 'Show History'}
            >
              <MessageSquare className="w-4 h-4" />
            </button>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-sm sm:text-base font-bold text-white font-['Outfit'] truncate max-w-xs sm:max-w-md">
                  {currentSession?.title || 'Eduvia AI Academic Tutor'}
                </h1>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                Auto-saved conversation • Socratic tutoring & misconception diagnosis
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              id="btn-close-eduvia-ai"
              onClick={onClose}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-xs flex items-center gap-2 transition-all border border-slate-700 cursor-pointer shadow-sm"
              title="Close Eduvia AI and return to Dashboard"
            >
              <ArrowLeft className="w-4 h-4 text-purple-400" />
              <span className="hidden sm:inline font-medium">Exit to Dashboard</span>
              <span className="sm:hidden font-medium">Exit</span>
            </button>
          </div>
        </div>

        {/* Message Stream */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6 max-w-4xl mx-auto w-full">
          {messages.map((m) => {
            const isUser = m.role === 'user';
            const isCopied = copiedMsgId === m.id;

            return (
              <div
                key={m.id}
                className={`flex items-start gap-3 sm:gap-4 ${
                  isUser ? 'justify-end' : 'justify-start'
                }`}
              >
                {!isUser && (
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-purple-900/30 mt-1">
                    <Sparkles className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`group relative max-w-[85%] sm:max-w-[78%] rounded-2xl p-4 sm:p-5 text-xs sm:text-sm leading-relaxed ${
                    isUser
                      ? 'bg-purple-600 text-white rounded-tr-none shadow-md shadow-purple-900/20'
                      : 'bg-slate-800/90 text-slate-200 rounded-tl-none border border-slate-700/70 shadow-sm'
                  }`}
                >
                  {isUser ? (
                    <div className="whitespace-pre-line leading-relaxed font-normal">
                      {m.content}
                    </div>
                  ) : m.content ? (
                    <MarkdownRenderer content={m.content} isUser={false} />
                  ) : (
                    <div className="flex items-center gap-1.5 py-1 text-slate-400 text-xs">
                      <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                      <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse delay-100" />
                      <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse delay-200" />
                      <span className="ml-1 text-xs">Thinking...</span>
                    </div>
                  )}

                  {/* Copy Button for Assistant Message */}
                  {!isUser && m.content && (
                    <div className="mt-3 pt-2 border-t border-slate-700/50 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="text-[10px] text-slate-500">
                        Eduvia AI • Socratic Guidance
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopyText(m.id, m.content)}
                        className="hover:text-purple-300 flex items-center gap-1 cursor-pointer transition-colors"
                        title="Copy Answer"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>

                {isUser && (
                  <div className="w-8 h-8 rounded-xl bg-slate-700 text-slate-200 flex items-center justify-center shrink-0 mt-1 font-bold text-xs">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
            );
          })}

          {/* AI Typing Indicator only when waiting for the first token */}
          {isLoading && (!messages.length || messages[messages.length - 1].role === 'user') && (
            <div className="flex items-start gap-3 max-w-[75%]">
              <div className="w-8 h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 animate-spin" />
              </div>
              <div className="bg-slate-800 text-slate-300 p-4 rounded-2xl rounded-tl-none border border-slate-700 text-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse delay-100" />
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse delay-200" />
                <span className="ml-1 text-slate-400">Eduvia AI is thinking...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Chips (when 1 message in session) */}
        {messages.length <= 1 && (
          <div className="max-w-4xl mx-auto w-full px-4 pb-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {quickPrompts.map((qp, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setInput(qp.prompt);
                    inputRef.current?.focus();
                  }}
                  className="p-3 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-purple-500/50 rounded-xl text-left transition-all cursor-pointer group"
                >
                  <span className="text-[11px] font-bold text-purple-400 block mb-0.5 group-hover:text-purple-300">
                    {qp.label}
                  </span>
                  <p className="text-xs text-slate-300 line-clamp-1">
                    "{qp.prompt}"
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Input Area */}
        <div className="p-4 bg-slate-950/90 border-t border-slate-800 shrink-0">
          <div className="max-w-4xl mx-auto w-full">
            <form
              onSubmit={handleSendMessage}
              className="relative bg-slate-900 border border-slate-700 focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-500/20 rounded-2xl transition-all shadow-lg"
            >
              <textarea
                ref={inputRef}
                id="input-fullscreen-ai-chat"
                name="chatPrompt"
                rows={2}
                placeholder="Ask Eduvia AI anything... (Press Enter to send, Shift+Enter for newline)"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent px-4 py-3 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none resize-none leading-relaxed"
              />

              <div className="flex items-center justify-between px-3 py-2 border-t border-slate-800/60 bg-slate-900/50 rounded-b-2xl">
                <span className="text-[11px] text-slate-500">
                  Eduvia AI v2.5 • Curriculum Grounded
                </span>

                <div className="flex items-center gap-2">
                  {onOpenPhotoSolver && (
                    <button
                      type="button"
                      id="btn-ai-fullscreen-snap-photo"
                      onClick={() => {
                        onClose();
                        onOpenPhotoSolver();
                      }}
                      className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 active:scale-95 text-purple-300 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer border border-slate-700"
                      title="Snap homework photo or diagram for Eduvia AI to analyze"
                    >
                      <Camera className="w-3.5 h-3.5 text-purple-400" />
                      <span className="hidden sm:inline">Snap Problem</span>
                    </button>
                  )}

                  <button
                    type="submit"
                    id="btn-send-fullscreen-ai"
                    disabled={!input.trim() || isLoading}
                    className="px-4 py-1.5 bg-purple-600 hover:bg-purple-500 disabled:opacity-40 disabled:hover:bg-purple-600 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm shadow-purple-600/20"
                  >
                    <span>Send</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
