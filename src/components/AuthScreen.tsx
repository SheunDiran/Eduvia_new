import React, { useState } from 'react';
import {
  Sparkles,
  GraduationCap,
  Lock,
  Mail,
  User,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Eye,
  EyeOff
} from 'lucide-react';
import { GradeLevel, UserProfile } from '../types';
import { GRADES } from '../data/grades';
import { getRememberedAccount, getRememberedEmail, loginDemoUser, loginUser, signupUser, setStoredUser } from '../services/api';

interface AuthScreenProps {
  onLoginSuccess?: (user: UserProfile) => void;
  onAuthSuccess?: (user: UserProfile) => void;
}

export const AuthScreen: React.FC<AuthScreenProps> = ({ onLoginSuccess, onAuthSuccess }) => {
  const rememberedAccount = getRememberedAccount();
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState(() => rememberedAccount?.email || getRememberedEmail());
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel>(() => rememberedAccount?.grade || 'grade-10');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const triggerLoginSuccess = (user: UserProfile) => {
    if (typeof onLoginSuccess === 'function') {
      onLoginSuccess(user);
    }
    if (typeof onAuthSuccess === 'function') {
      onAuthSuccess(user);
    }
  };

  const handleQuickLoginAsRemembered = async () => {
    if (!rememberedAccount) return;
    setIsLoading(true);
    setErrorMessage(null);
    try {
      // Check if demo user
      if (rememberedAccount.email.includes('student@eduvia.org')) {
        const u = await loginDemoUser('highschool', true);
        triggerLoginSuccess(u);
        return;
      }
      if (rememberedAccount.email.includes('university@eduvia.org')) {
        const u = await loginDemoUser('university', true);
        triggerLoginSuccess(u);
        return;
      }

      // Restore session profile directly
      const restoredUser: UserProfile = {
        id: 'user-remembered-' + Date.now(),
        name: rememberedAccount.name || 'Returning Student',
        email: rememberedAccount.email,
        grade: rememberedAccount.grade || 'grade-10',
        joinedAt: new Date().toISOString()
      };
      setStoredUser(restoredUser, 'token-remembered', true);
      triggerLoginSuccess(restoredUser);
    } catch (err: any) {
      setErrorMessage(err.message || 'Could not resume session. Please enter password.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickDemo = async (type: 'highschool' | 'university') => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const user = await loginDemoUser(type, true);
      triggerLoginSuccess(user);
    } catch (err: any) {
      setErrorMessage(err.message || 'Demo login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsLoading(true);

    try {
      if (isSignUp) {
        if (!name.trim()) {
          setErrorMessage('Please enter your full name.');
          setIsLoading(false);
          return;
        }
        if (password.length < 6) {
          setErrorMessage('Password must be at least 6 characters.');
          setIsLoading(false);
          return;
        }
        const user = await signupUser(name, email, password, selectedGrade, rememberMe);
        triggerLoginSuccess(user);
      } else {
        const user = await loginUser(email, password, rememberMe);
        triggerLoginSuccess(user);
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Authentication error. Please verify credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex items-center justify-center p-4 sm:p-6 md:p-8 transition-colors">
      <div className="w-full max-w-5xl bg-white dark:bg-slate-900 rounded-3xl shadow-xl shadow-purple-900/5 dark:shadow-black/50 border border-purple-100 dark:border-slate-800 overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
        
        {/* Left Brand Panel */}
        <div className="lg:col-span-5 bg-gradient-to-br from-purple-700 via-purple-800 to-indigo-900 text-white p-6 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle Background Rings */}
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-purple-500/20 blur-2xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-indigo-500/20 blur-2xl pointer-events-none" />

          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-purple-100 text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5 text-purple-300" />
              AI-Powered Learning Platform
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-2xl bg-white text-purple-700 flex items-center justify-center shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-3xl font-extrabold tracking-tight font-['Outfit']">Eduvia</span>
            </div>

            <p className="text-purple-100/90 text-sm leading-relaxed mb-8">
              Empowering students with curated 3-video topic libraries, real-time misconception diagnoses powered by Eduvia AI, and timed subject mastery tests.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-purple-200" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Grade-Specific Curriculum</h4>
                  <p className="text-xs text-purple-200/80">Subjects and topics dynamically adapted to your active class level (Grade 1 through 12).</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-purple-200" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">3 Curated YouTube Videos per Topic</h4>
                  <p className="text-xs text-purple-200/80">Top educators (Khan Academy, CrashCourse, Cognito) tailored to your learning pace.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-purple-200" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Eduvia AI Diagnostic Engine</h4>
                  <p className="text-xs text-purple-200/80">Pinpoints why you picked a wrong answer and tracks recurring mistake patterns over time.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 mt-8">
            <p className="text-xs text-purple-200/75">
              Secure Student Learning Environment
            </p>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-center bg-white dark:bg-slate-900 transition-colors">
          <div className="max-w-md w-full mx-auto">
            {/* Tab switch */}
            <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl mb-6">
              <button
                type="button"
                id="tab-login"
                onClick={() => { setIsSignUp(false); setErrorMessage(null); }}
                className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                  !isSignUp
                    ? 'bg-white dark:bg-slate-900 text-purple-700 dark:text-purple-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                id="tab-signup"
                onClick={() => { setIsSignUp(true); setErrorMessage(null); }}
                className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                  isSignUp
                    ? 'bg-white dark:bg-slate-900 text-purple-700 dark:text-purple-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                Create Account
              </button>
            </div>

            {/* Remembered Student Banner for Returning Users */}
            {rememberedAccount && !isSignUp && (
              <div className="mb-5 p-3.5 bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800 rounded-2xl flex items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                    {(rememberedAccount.name || rememberedAccount.email).charAt(0).toUpperCase()}
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs font-bold text-slate-900 dark:text-white block truncate">
                      {rememberedAccount.name || 'Saved Account'}
                    </span>
                    <span className="text-[10px] text-purple-700 dark:text-purple-300 block truncate">
                      {rememberedAccount.email}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  id="btn-quick-login-remembered"
                  onClick={handleQuickLoginAsRemembered}
                  disabled={isLoading}
                  className="px-3 py-1.5 bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white text-xs font-bold rounded-xl shadow-xs transition-all shrink-0 cursor-pointer flex items-center gap-1"
                >
                  <span>Quick Sign In</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            )}

            <div className="mb-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-['Outfit']">
                {isSignUp ? 'Join Eduvia Today' : 'Welcome back, Student'}
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                {isSignUp
                  ? 'Select your grade level to access your tailored curriculum.'
                  : 'Enter your student credentials or use 1-click demo access below.'}
              </p>
            </div>

            {/* 1-Click Instant Demo / Judge Mode Buttons */}
            <div className="mb-5 p-3 rounded-2xl bg-purple-50/60 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/60 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  Instant Access for Judges & Students
                </span>
                <span className="text-[10px] font-semibold text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/60 px-2 py-0.5 rounded-full">
                  1-Click
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  id="btn-demo-highschool"
                  onClick={() => handleQuickDemo('highschool')}
                  disabled={isLoading}
                  className="py-2 px-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white text-xs font-bold shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-60"
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>High School Demo</span>
                </button>
                <button
                  type="button"
                  id="btn-demo-university"
                  onClick={() => handleQuickDemo('university')}
                  disabled={isLoading}
                  className="py-2 px-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-xs font-bold shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-60"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>University Scholar</span>
                </button>
              </div>
            </div>

            {errorMessage && (
              <div id="auth-error-banner" className="mb-5 p-3.5 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 rounded-xl text-xs text-red-700 dark:text-red-300 flex items-start gap-2">
                <span className="font-bold shrink-0">Error:</span>
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && (
                <div>
                  <label htmlFor="input-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="input-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Maya Chen"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white dark:focus:bg-slate-850 transition-all text-slate-800 dark:text-white"
                    />
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="input-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="input-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@school.edu"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white dark:focus:bg-slate-850 transition-all text-slate-800 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="input-password" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="input-password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-11 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white dark:focus:bg-slate-850 transition-all text-slate-800 dark:text-white"
                  />
                  <button
                    type="button"
                    id="btn-toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 p-1.5 rounded-lg cursor-pointer transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {isSignUp && (
                <div>
                  <label htmlFor="select-grade" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Grade / Class Level
                  </label>
                  <div className="relative">
                    <BookOpen className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      id="select-grade"
                      value={selectedGrade}
                      onChange={(e) => setSelectedGrade(e.target.value as GradeLevel)}
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white dark:focus:bg-slate-850 transition-all text-slate-800 dark:text-white appearance-none"
                    >
                      {GRADES.map((g) => (
                        <option key={g.id} value={g.id}>
                          {g.label} — {g.stage}
                        </option>
                      ))}
                    </select>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Content, curriculum topics, and test questions will automatically match this level.
                  </p>
                </div>
              )}

              {/* Remember Login Details */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    id="checkbox-remember-me"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-purple-600 rounded border-slate-300 dark:border-slate-600 focus:ring-purple-500 cursor-pointer accent-purple-600"
                  />
                  <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                    Remember login details
                  </span>
                </label>
                <span className="text-[11px] text-purple-600 dark:text-purple-400 font-medium">
                  {rememberMe ? 'Persistent session' : 'Single session'}
                </span>
              </div>

              <button
                type="submit"
                id="btn-auth-submit"
                disabled={isLoading}
                className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white font-semibold rounded-xl text-sm transition-all shadow-md shadow-purple-600/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 mt-3 min-h-[44px]"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>{isSignUp ? 'Create Student Account' : 'Sign In to Eduvia'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};
