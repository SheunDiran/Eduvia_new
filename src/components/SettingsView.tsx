import React, { useState, useEffect } from 'react';
import {
  User,
  GraduationCap,
  Sparkles,
  LogOut,
  Save,
  CheckCircle,
  Shield,
  BookOpen,
  Sun,
  Moon,
  RotateCcw,
  AlertTriangle,
  Download
} from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';
import { GradeLevel, UserProfile } from '../types';
import { GRADES } from '../data/grades';
import { resetGradeProgress, updateUserGrade } from '../services/api';
import { getStoredTheme, toggleTheme, applyTheme, Theme } from '../utils/theme';

interface SettingsViewProps {
  user: UserProfile;
  onChangeGrade: (grade: GradeLevel) => void;
  onLogout: () => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({
  user,
  onChangeGrade,
  onLogout
}) => {
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel>(user.grade);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => getStoredTheme());

  useEffect(() => {
    setSelectedGrade(user.grade);
  }, [user.grade]);

  useEffect(() => {
    const handleThemeChange = (e: any) => {
      if (e.detail && e.detail.theme) {
        setCurrentTheme(e.detail.theme);
      }
    };
    window.addEventListener('eduvia-theme-change', handleThemeChange);
    return () => window.removeEventListener('eduvia-theme-change', handleThemeChange);
  }, []);

  const handleSelectTheme = (theme: Theme) => {
    applyTheme(theme);
    setCurrentTheme(theme);
  };

  const handleSaveGrade = async () => {
    const isGradeChanged = selectedGrade !== user.grade;
    await updateUserGrade(user.id, selectedGrade);
    
    // When student changes grade, previous grade progress does not carry over
    // and the new grade will have fresh progress
    onChangeGrade(selectedGrade);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3500);
  };

  const handleResetCurrentGradeProgress = () => {
    if (
      window.confirm(
        `Are you sure you want to reset all quiz attempts and completion progress for ${GRADES.find(g => g.id === user.grade)?.label || 'your grade'}? Your notes and tasks will remain untouched.`
      )
    ) {
      resetGradeProgress(user.id, user.grade);
      setResetSuccess(true);
      setTimeout(() => setResetSuccess(false), 3500);
    }
  };

  const handleLogoutWithConfirm = () => {
    if (window.confirm('Are you sure you want to log out of your Eduvia account?')) {
      onLogout();
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 max-w-4xl mx-auto text-slate-900 dark:text-slate-100 transition-colors">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
          Student Profile & Settings
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Manage your academic grade level, theme display preferences, and account session.
        </p>
      </div>

      {/* Theme / Appearance Preferences Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-7 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 font-['Outfit']">
              {currentTheme === 'dark' ? (
                <Moon className="w-5 h-5 text-purple-400" />
              ) : (
                <Sun className="w-5 h-5 text-amber-500" />
              )}
              <span>Theme & Display Mode</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Switch between Light Mode and Dark Mode. Your preference is remembered across sessions.
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 capitalize border border-purple-200 dark:border-purple-800">
            {currentTheme} Mode
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {/* Light Theme Button */}
          <button
            type="button"
            id="btn-select-light-theme"
            onClick={() => handleSelectTheme('light')}
            className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between min-h-[44px] ${
              currentTheme === 'light'
                ? 'border-purple-600 bg-purple-50/70 ring-2 ring-purple-600/30 text-purple-900 font-bold'
                : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <Sun className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm block font-semibold">Light Theme</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Clean, bright academic aesthetic
                </span>
              </div>
            </div>
            {currentTheme === 'light' && <CheckCircle className="w-5 h-5 text-purple-600" />}
          </button>

          {/* Dark Theme Button */}
          <button
            type="button"
            id="btn-select-dark-theme"
            onClick={() => handleSelectTheme('dark')}
            className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between min-h-[44px] ${
              currentTheme === 'dark'
                ? 'border-purple-500 bg-purple-950/40 ring-2 ring-purple-500/30 text-purple-200 font-bold'
                : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-900/60 text-purple-300 flex items-center justify-center">
                <Moon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm block font-semibold">Dark Theme</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Eye-safe twilight contrast for night study
                </span>
              </div>
            </div>
            {currentTheme === 'dark' && <CheckCircle className="w-5 h-5 text-purple-400" />}
          </button>
        </div>
      </div>

      {/* Profile Overview Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center font-extrabold text-2xl shadow-md font-['Outfit'] shrink-0">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">{user.name}</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">{user.email}</p>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 px-2.5 py-0.5 rounded-md mt-1.5 border border-purple-200 dark:border-purple-800">
              <Sparkles className="w-3 h-3 text-purple-600 dark:text-purple-400" /> Active Student
            </span>
          </div>
        </div>

        {/* Grade Selector Section */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
          <div>
            <label className="block text-sm font-bold text-slate-900 dark:text-white mb-1">
              Active Grade / Class Curriculum Level:
            </label>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
              Adjusting your grade dynamically tailors curriculum subjects, topics, and quiz difficulty. Progress for your previous grade does not carry over to the new grade.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {GRADES.map((g) => {
                const isSelected = selectedGrade === g.id;
                return (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setSelectedGrade(g.id)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between min-h-[44px] ${
                      isSelected
                        ? 'border-purple-600 bg-purple-50/60 dark:bg-purple-950/50 ring-2 ring-purple-600/20 text-purple-900 dark:text-purple-200 font-bold'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div>
                      <span className="text-xs block">{g.label}</span>
                      <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium block">
                        {g.stage}
                      </span>
                    </div>
                    {isSelected && <CheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-400" />}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              id="btn-save-settings-grade"
              onClick={handleSaveGrade}
              className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white rounded-xl text-xs font-semibold flex items-center gap-2 cursor-pointer shadow-sm transition-all min-h-[44px]"
            >
              <Save className="w-4 h-4" />
              <span>Update Grade Level</span>
            </button>
            {savedSuccess && (
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1 animate-in fade-in">
                <CheckCircle className="w-4 h-4" /> Grade updated! Curriculum re-calibrated.
              </span>
            )}
          </div>
        </div>

        {/* Grade Progress Reset Control */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                <span>Reset Current Grade Progress</span>
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                Restart your topic quiz completions for {GRADES.find(g => g.id === user.grade)?.label || 'your grade'} back to 0%.
              </p>
            </div>
            <button
              type="button"
              id="btn-reset-grade-progress"
              onClick={handleResetCurrentGradeProgress}
              className="px-3 py-1.5 border border-slate-300 dark:border-slate-700 hover:border-amber-400 dark:hover:border-amber-500 hover:text-amber-700 dark:hover:text-amber-400 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-lg cursor-pointer transition-colors min-h-[36px]"
            >
              Reset to 0%
            </button>
          </div>
          {resetSuccess && (
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1 animate-in fade-in">
              <CheckCircle className="w-4 h-4" /> Grade progress reset to 0%.
            </span>
          )}
        </div>
      </div>

      {/* Progressive Web App (PWA) & Offline Access */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-8 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Download className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>Progressive Web App (PWA) & Offline Mode</span>
          </h3>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
            Offline Ready
          </span>
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          Install Eduvia directly onto your mobile home screen (iOS / Android) or PC desktop (Chrome / Edge / Safari). Enjoy distraction-free fullscreen study, instant offline revision, and native app speeds without any browser tabs.
        </p>
        <PWAInstallButton variant="banner" />
      </div>

      {/* Platform Information */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-8 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span>About Eduvia</span>
        </h3>
        <div className="text-xs text-slate-600 dark:text-slate-400 space-y-2 leading-relaxed">
          <p>
            <strong>Eduvia</strong> is a comprehensive school learning platform featuring universal subjects, 3 curated YouTube masterclasses per topic, quick info summaries, diagnostic topic quizzes, and 60-minute subject test simulations.
          </p>
          <p>
            Curriculum content strictly aligns with Grade 1 through Grade 12 educational standards.
          </p>
        </div>
      </div>

      {/* Logout Danger Zone */}
      <div className="bg-red-50/50 dark:bg-red-950/20 rounded-3xl border border-red-200 dark:border-red-900/50 p-5 sm:p-8 space-y-3">
        <h3 className="text-sm font-bold text-red-900 dark:text-red-300 flex items-center gap-2">
          <LogOut className="w-4 h-4 text-red-600 dark:text-red-400" />
          <span>Account Session</span>
        </h3>
        <p className="text-xs text-red-700 dark:text-red-300">
          Sign out of your active Eduvia account. You will be returned immediately to the student login screen.
        </p>
        <button
          type="button"
          id="btn-settings-logout"
          onClick={handleLogoutWithConfirm}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold rounded-xl text-xs flex items-center gap-2 cursor-pointer transition-all shadow-sm shadow-red-600/20 min-h-[44px]"
        >
          <LogOut className="w-4 h-4" />
          <span>Log Out of Eduvia</span>
        </button>
      </div>
    </div>
  );
};
