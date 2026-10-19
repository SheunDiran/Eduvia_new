import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  BookOpen,
  Timer,
  CheckSquare,
  Award,
  Settings,
  LogOut,
  GraduationCap,
  Sparkles,
  ChevronDown,
  Trophy,
  PanelLeftClose,
  PanelLeftOpen,
  Sun,
  Moon,
  Menu,
  X
} from 'lucide-react';
import { GradeLevel, UserProfile } from '../types';
import { GRADES } from '../data/grades';
import { getStoredTheme, toggleTheme, Theme } from '../utils/theme';

export type NavTab = 'dashboard' | 'subjects' | 'test' | 'opportunities' | 'notes-tasks' | 'study-timer' | 'achievements' | 'settings';

interface NavigationProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  user: UserProfile;
  onChangeGrade: (grade: GradeLevel) => void;
  onLogout: () => void;
  onOpenEduviaAI?: () => void;
  isSidebarCollapsed?: boolean;
  onToggleSidebar?: () => void;
  onOpenMobileMenu?: () => void;
}

export const Sidebar: React.FC<NavigationProps> = ({
  currentTab,
  onSelectTab,
  user,
  onLogout,
  isSidebarCollapsed = false,
  onToggleSidebar
}) => {
  const currentGradeInfo = GRADES.find((g) => g.id === user.grade) || GRADES[9];

  const navItems = [
    { id: 'dashboard' as NavTab, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'subjects' as NavTab, label: 'Subjects & Topics', icon: BookOpen },
    { id: 'test' as NavTab, label: 'Timed Test (60m)', icon: Timer, badge: 'Exam' },
    { id: 'opportunities' as NavTab, label: 'Opportunities', icon: Trophy, badge: 'New' },
    { id: 'notes-tasks' as NavTab, label: 'Notes & Tasks', icon: CheckSquare },
    { id: 'study-timer' as NavTab, label: 'Study Timer', icon: Timer },
    { id: 'achievements' as NavTab, label: 'Achievements & Log', icon: Award },
    { id: 'settings' as NavTab, label: 'Settings', icon: Settings }
  ];

  if (isSidebarCollapsed) {
    return null;
  }

  return (
    <aside className="hidden md:flex w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex-col justify-between shrink-0 h-screen sticky top-0 transition-colors select-none">
      {/* Brand Header with Eduvia Logo Fullscreen Toggle */}
      <div>
        <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <button
            type="button"
            id="btn-sidebar-logo-toggle"
            onClick={onToggleSidebar}
            title="Press Eduvia logo to hide sidebar (fullscreen distraction-free view)"
            className="flex items-center gap-3 p-1.5 -m-1.5 rounded-2xl hover:bg-purple-50 dark:hover:bg-slate-800 active:scale-98 transition-all cursor-pointer group text-left w-full justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-md shadow-purple-600/20 group-hover:bg-purple-700 group-hover:scale-105 transition-all">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight font-['Outfit'] block leading-none">
                  Eduvia
                </span>
                <span className="text-[10px] font-semibold text-purple-600 dark:text-purple-400 tracking-wide uppercase block mt-1">
                  Click logo to hide
                </span>
              </div>
            </div>
            <div className="p-1 rounded-lg text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-100/60 dark:hover:bg-slate-750 transition-all" title="Hide navigation">
              <PanelLeftClose className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* User Mini Grade Card */}
        <div className="px-4 py-3 mx-4 my-4 bg-purple-50/70 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/60 rounded-xl flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-purple-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
            {currentGradeInfo.number}
          </div>
          <div className="overflow-hidden">
            <span className="text-xs font-bold text-slate-900 dark:text-white block truncate">
              {currentGradeInfo.label}
            </span>
            <span className="text-[10px] text-purple-700 dark:text-purple-300 block truncate font-medium">
              {currentGradeInfo.stage}
            </span>
          </div>
        </div>

        {/* Navigation links */}
        <nav className="px-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => onSelectTab(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer min-h-[44px] ${
                  isActive
                    ? 'bg-purple-600 text-white shadow-sm shadow-purple-600/25 font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold uppercase tracking-wider ${
                      isActive ? 'bg-purple-700 text-white' : 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Footer Area with Student Profile & Logout Button */}
      <div className="p-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
        <div className="flex items-center gap-3 px-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 text-white flex items-center justify-center font-bold text-sm shadow-sm shrink-0">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div className="overflow-hidden">
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block truncate">{user.name}</span>
            <span className="text-[11px] text-slate-400 dark:text-slate-500 block truncate">{user.email}</span>
          </div>
        </div>

        {/* Prompt Requirement: Add a Logout button visible in sidebar on every page */}
        <button
          type="button"
          id="btn-sidebar-logout"
          onClick={onLogout}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/30 hover:bg-red-100 dark:hover:bg-red-950/60 active:bg-red-200 rounded-xl transition-all cursor-pointer min-h-[40px]"
          title="Sign out of your Eduvia account"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
};

export const TopBar: React.FC<NavigationProps> = ({
  user,
  onChangeGrade,
  onLogout,
  onOpenEduviaAI,
  isSidebarCollapsed,
  onToggleSidebar,
  onOpenMobileMenu
}) => {
  const [theme, setTheme] = useState<Theme>(() => getStoredTheme());

  useEffect(() => {
    const handleThemeChange = (e: any) => {
      if (e.detail?.theme) setTheme(e.detail.theme);
    };
    window.addEventListener('eduvia-theme-change', handleThemeChange);
    return () => window.removeEventListener('eduvia-theme-change', handleThemeChange);
  }, []);

  const handleToggleTheme = () => {
    const next = toggleTheme();
    setTheme(next);
  };

  return (
    <header className="h-16 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-3 sm:px-6 flex items-center justify-between sticky top-0 z-30 transition-colors">
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Mobile menu toggle */}
        <button
          type="button"
          id="btn-mobile-menu"
          onClick={onOpenMobileMenu}
          className="md:hidden p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl cursor-pointer"
          aria-label="Open mobile navigation"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Fullscreen view toggle: When desktop sidebar is collapsed, pressing Eduvia logo brings it back */}
        {isSidebarCollapsed && (
          <button
            type="button"
            id="btn-topbar-logo-toggle"
            onClick={onToggleSidebar}
            title="Press Eduvia logo to bring sidebar back"
            className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-purple-600 hover:bg-purple-700 active:scale-95 text-white rounded-xl shadow-md shadow-purple-600/20 transition-all cursor-pointer group"
          >
            <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-white" />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm font-extrabold font-['Outfit'] tracking-tight">Eduvia</span>
              <PanelLeftOpen className="w-3.5 h-3.5 text-purple-200 group-hover:text-white" />
            </div>
            <span className="text-[10px] font-semibold bg-purple-800/80 text-purple-100 px-1.5 py-0.5 rounded">
              Show Nav
            </span>
          </button>
        )}

        {/* Mobile Brand (if sidebar is hidden) */}
        <div className="flex md:hidden items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center shadow-sm">
            <GraduationCap className="w-4 h-4" />
          </div>
          <span className="font-extrabold text-base text-slate-900 dark:text-white font-['Outfit']">Eduvia</span>
        </div>

        {/* Grade/Class Selector Dropdown (Accessible app-wide) */}
        <div className="flex items-center gap-1.5 sm:gap-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200/80 dark:hover:bg-slate-750 transition-all rounded-xl px-2.5 sm:px-3 py-1.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
          <span className="hidden sm:inline text-slate-400 dark:text-slate-500 text-[11px] font-semibold uppercase">Grade:</span>
          <div className="relative">
            <select
              id="topbar-grade-selector"
              value={user.grade}
              onChange={(e) => onChangeGrade(e.target.value as GradeLevel)}
              className="bg-transparent font-bold text-purple-700 dark:text-purple-400 focus:outline-none cursor-pointer pr-4 appearance-none text-xs"
            >
              {GRADES.map((g) => (
                <option key={g.id} value={g.id} className="dark:bg-slate-900 dark:text-white">
                  {g.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-purple-700 dark:text-purple-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <button
          type="button"
          onClick={onOpenEduviaAI}
          className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold cursor-pointer transition-all active:scale-95"
          title="Open Fullscreen Eduvia AI"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Eduvia AI Online</span>
        </button>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        {/* Dark / Light Theme Toggle in Top Bar */}
        <button
          type="button"
          id="btn-topbar-theme-toggle"
          onClick={handleToggleTheme}
          className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer min-h-[38px] min-w-[38px] flex items-center justify-center"
          title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
          aria-label="Toggle dark/light theme"
        >
          {theme === 'dark' ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-purple-600" />
          )}
        </button>

        {/* Quick User summary */}
        <div className="hidden xl:flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 bg-purple-50/60 dark:bg-purple-950/30 px-3 py-1.5 rounded-lg border border-purple-100 dark:border-purple-900/40">
          <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
          <span>Logged in as <strong className="text-slate-800 dark:text-slate-200">{user.name}</strong></span>
        </div>

        {/* Logout button visible in top bar on every page once logged in */}
        <button
          type="button"
          id="btn-topbar-logout"
          onClick={onLogout}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-red-50 dark:hover:bg-red-950/40 hover:text-red-600 dark:hover:text-red-400 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700 hover:border-red-200 dark:hover:border-red-800 transition-all cursor-pointer min-h-[38px]"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </header>
  );
};

interface NavigationLayoutProps {
  user: UserProfile;
  activeView: string;
  onNavigate: (view: string) => void;
  onLogout: () => void;
  onChangeGrade: (grade: GradeLevel) => void;
  onOpenEduviaAI?: () => void;
  children: React.ReactNode;
}

export const Navigation: React.FC<NavigationLayoutProps> = ({
  user,
  activeView,
  onNavigate,
  onLogout,
  onChangeGrade,
  onOpenEduviaAI,
  children
}) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(() => {
    try {
      return localStorage.getItem('eduvia_sidebar_collapsed') === 'true';
    } catch {
      return false;
    }
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentGradeInfo = GRADES.find((g) => g.id === user.grade) || GRADES[9];

  const navItems = [
    { id: 'dashboard' as NavTab, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'subjects' as NavTab, label: 'Subjects & Topics', icon: BookOpen },
    { id: 'test' as NavTab, label: 'Timed Test (60m)', icon: Timer, badge: 'Exam' },
    { id: 'opportunities' as NavTab, label: 'Opportunities', icon: Trophy, badge: 'New' },
    { id: 'notes-tasks' as NavTab, label: 'Notes & Tasks', icon: CheckSquare },
    { id: 'study-timer' as NavTab, label: 'Study Timer', icon: Timer },
    { id: 'achievements' as NavTab, label: 'Achievements & Log', icon: Award },
    { id: 'settings' as NavTab, label: 'Settings', icon: Settings }
  ];

  const handleToggleSidebar = () => {
    setIsSidebarCollapsed((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('eduvia_sidebar_collapsed', String(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const handleSelectTabMobile = (tab: NavTab) => {
    onNavigate(tab);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex w-full h-full overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* Desktop Sidebar */}
      <Sidebar
        currentTab={activeView as NavTab}
        onSelectTab={(tab) => onNavigate(tab)}
        user={user}
        onChangeGrade={onChangeGrade}
        onLogout={onLogout}
        onOpenEduviaAI={onOpenEduviaAI}
        isSidebarCollapsed={isSidebarCollapsed}
        onToggleSidebar={handleToggleSidebar}
      />

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative w-4/5 max-w-xs bg-white dark:bg-slate-900 h-full shadow-2xl flex flex-col justify-between p-4 z-10 overflow-y-auto">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <span className="font-extrabold text-lg text-slate-900 dark:text-white font-['Outfit']">
                    Eduvia
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                  aria-label="Close mobile navigation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Grade info */}
              <div className="my-4 p-3 bg-purple-50 dark:bg-purple-950/50 rounded-xl border border-purple-100 dark:border-purple-900/50 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-purple-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  {currentGradeInfo.number}
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white block">
                    {currentGradeInfo.label}
                  </span>
                  <span className="text-[10px] text-purple-700 dark:text-purple-300 font-medium block">
                    {currentGradeInfo.stage}
                  </span>
                </div>
              </div>

              {/* Nav links */}
              <nav className="space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeView === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelectTabMobile(item.id)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer min-h-[44px] ${
                        isActive
                          ? 'bg-purple-600 text-white font-bold'
                          : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                        <span>{item.label}</span>
                      </div>
                      {item.badge && (
                        <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase ${
                          isActive ? 'bg-purple-700 text-white' : 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Footer */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <div className="text-xs text-slate-500 dark:text-slate-400">
                <strong className="text-slate-800 dark:text-slate-200">{user.name}</strong>
                <p className="text-[11px] truncate">{user.email}</p>
              </div>
              <button
                type="button"
                onClick={() => { setIsMobileMenuOpen(false); onLogout(); }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/40 rounded-xl min-h-[44px]"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Log Out</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Column */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        <TopBar
          currentTab={activeView as NavTab}
          onSelectTab={(tab) => onNavigate(tab)}
          user={user}
          onChangeGrade={onChangeGrade}
          onLogout={onLogout}
          onOpenEduviaAI={onOpenEduviaAI}
          isSidebarCollapsed={isSidebarCollapsed}
          onToggleSidebar={handleToggleSidebar}
          onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        />
        {children}
      </div>
    </div>
  );
};

