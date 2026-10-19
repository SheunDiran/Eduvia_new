import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import {
  Play,
  Pause,
  RotateCcw,
  Timer,
  Coffee,
  Sparkles,
  CheckCircle,
  Clock,
  Bell,
  BellRing,
  BellOff,
  AlertCircle,
  X,
  ArrowRight,
  Plus,
  Minus,
  Sliders,
  Settings2,
  Volume2,
  Check
} from 'lucide-react';
import { SubjectId, UserProfile } from '../types';
import { SUBJECTS } from '../data/subjects';

interface StudyTimerViewProps {
  user: UserProfile;
}

type TimerMode = 'pomodoro' | 'short-break' | 'long-break' | 'custom';

interface TimerDurations {
  pomodoro: number; // in seconds
  'short-break': number;
  'long-break': number;
  custom: number;
}

const DEFAULT_DURATIONS: TimerDurations = {
  pomodoro: 25 * 60,
  'short-break': 5 * 60,
  'long-break': 15 * 60,
  custom: 20 * 60
};

const STORAGE_KEY_TIMER_SETTINGS = 'eduvia_study_timer_durations_v2';

function loadSavedDurations(): TimerDurations {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_TIMER_SETTINGS);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        pomodoro: parsed.pomodoro ? Number(parsed.pomodoro) * 60 : DEFAULT_DURATIONS.pomodoro,
        'short-break': parsed['short-break'] ? Number(parsed['short-break']) * 60 : DEFAULT_DURATIONS['short-break'],
        'long-break': parsed['long-break'] ? Number(parsed['long-break']) * 60 : DEFAULT_DURATIONS['long-break'],
        custom: parsed.custom ? Number(parsed.custom) * 60 : DEFAULT_DURATIONS.custom
      };
    }
  } catch {
    // Fallback to default
  }
  return DEFAULT_DURATIONS;
}

function saveDurations(durations: TimerDurations) {
  try {
    localStorage.setItem(
      STORAGE_KEY_TIMER_SETTINGS,
      JSON.stringify({
        pomodoro: Math.round(durations.pomodoro / 60),
        'short-break': Math.round(durations['short-break'] / 60),
        'long-break': Math.round(durations['long-break'] / 60),
        custom: Math.round(durations.custom / 60)
      })
    );
  } catch (err) {
    console.warn('Could not save timer preferences:', err);
  }
}

function playNotificationChime() {
  try {
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }
    const now = ctx.currentTime;

    // Pleasant multi-tone alert chime
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const osc3 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(587.33, now); // D5
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(880, now + 0.15); // A5
    osc3.type = 'sine';
    osc3.frequency.setValueAtTime(1174.66, now + 0.3); // D6

    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

    osc1.connect(gain);
    osc2.connect(gain);
    osc3.connect(gain);
    gain.connect(ctx.destination);

    osc1.start(now);
    osc1.stop(now + 0.3);
    osc2.start(now + 0.15);
    osc2.stop(now + 0.6);
    osc3.start(now + 0.3);
    osc3.stop(now + 1.2);

    if (navigator.vibrate) {
      navigator.vibrate([250, 100, 250, 100, 400]);
    }
  } catch (e) {
    console.warn('Audio chime skipped:', e);
  }
}

export const StudyTimerView: React.FC<StudyTimerViewProps> = ({ user }) => {
  const [durations, setDurations] = useState<TimerDurations>(loadSavedDurations);
  const [timerMode, setTimerMode] = useState<TimerMode>('pomodoro');
  const [selectedSubject, setSelectedSubject] = useState<SubjectId>('math');
  const [secondsLeft, setSecondsLeft] = useState<number>(() => loadSavedDurations().pomodoro);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [completedSessions, setCompletedSessions] = useState<number>(0);

  // Notification Permission State
  const [notificationPermission, setNotificationPermission] = useState<NotificationPermission | 'unsupported'>(() => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      return Notification.permission;
    }
    return 'unsupported';
  });
  const [hasDismissedPrompt, setHasDismissedPrompt] = useState<boolean>(false);
  const [testNotificationSent, setTestNotificationSent] = useState<boolean>(false);

  // Customizer Settings Drawer / Drawer State
  const [isCustomizingSettings, setIsCustomizingSettings] = useState<boolean>(false);
  const [customInputMinutes, setCustomInputMinutes] = useState<number>(() => Math.round(durations[timerMode] / 60));

  // Break Alert State
  const [breakAlert, setBreakAlert] = useState<{
    title: string;
    message: string;
    mode: TimerMode;
  } | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const titleFlashIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const originalTitleRef = useRef<string>(typeof document !== 'undefined' ? document.title : '');

  // Synchronize notification permission status
  useEffect(() => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      setNotificationPermission(Notification.permission);
    }
  }, []);

  // Update custom input minutes when mode changes
  useEffect(() => {
    setCustomInputMinutes(Math.round(durations[timerMode] / 60));
  }, [timerMode, durations]);

  // Handle Tab Title Flashing when break ends
  const startTabFlashing = () => {
    if (titleFlashIntervalRef.current) clearInterval(titleFlashIntervalRef.current);
    originalTitleRef.current = document.title;
    let isAlert = true;

    titleFlashIntervalRef.current = setInterval(() => {
      document.title = isAlert ? '☕ (Break Over!) Return to Eduvia' : '📚 Time to Study - Eduvia';
      isAlert = !isAlert;
    }, 1000);
  };

  const stopTabFlashing = () => {
    if (titleFlashIntervalRef.current) {
      clearInterval(titleFlashIntervalRef.current);
      titleFlashIntervalRef.current = null;
    }
    if (originalTitleRef.current) {
      document.title = originalTitleRef.current;
    }
  };

  useEffect(() => {
    const handleFocus = () => {
      if (!breakAlert) {
        stopTabFlashing();
      }
    };
    window.addEventListener('focus', handleFocus);
    return () => {
      window.removeEventListener('focus', handleFocus);
      stopTabFlashing();
    };
  }, [breakAlert]);

  // Main Timer Countdown Loop
  useEffect(() => {
    if (isActive) {
      timerRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            setIsActive(false);

            if (timerMode === 'pomodoro') {
              // Focus session completed
              setCompletedSessions((c) => c + 1);
              confetti({
                particleCount: 60,
                spread: 70,
                origin: { y: 0.6 }
              });
              playNotificationChime();
              setBreakAlert({
                title: '🎉 Focus Session Complete!',
                message: `Outstanding focus! You just completed your ${Math.round(
                  durations.pomodoro / 60
                )}-minute study block. Time to start a rest break to refresh your brain.`,
                mode: 'pomodoro'
              });
            } else {
              // Break period (5m, 15m, or custom break) ended!
              playNotificationChime();
              startTabFlashing();

              // Send native Web Notification to return back to website
              if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
                try {
                  const notification = new Notification('☕ Break is Over! Return to Eduvia', {
                    body: 'Your break has finished. Return back to the website to continue your study session and stay on track!',
                    icon: '/favicon.ico',
                    requireInteraction: true,
                    tag: 'eduvia-break-over-notification'
                  });

                  notification.onclick = () => {
                    window.focus();
                    stopTabFlashing();
                    notification.close();
                  };
                } catch (e) {
                  console.warn('Native notification failed:', e);
                }
              }

              const breakDurationMin = Math.round(durations[timerMode] / 60);
              setBreakAlert({
                title: '☕ Break Period Ended! Return to Eduvia',
                message: `Your ${breakDurationMin}-minute break is over. Great job letting your brain recharge! Click below to return back to your study session and dive into your next focus block.`,
                mode: timerMode
              });
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, timerMode, durations]);

  // Notification Permission Request Handler
  const requestNotificationPermission = async () => {
    if (typeof window === 'undefined' || !('Notification' in window)) {
      setNotificationPermission('unsupported');
      return;
    }
    try {
      const permission = await Notification.requestPermission();
      setNotificationPermission(permission);

      if (permission === 'granted') {
        playNotificationChime();
        try {
          const testNotif = new Notification('🔔 Eduvia Break Notifications Enabled', {
            body: 'You will receive an alert like this when your 5m or 15m break ends, reminding you to return back to the website!',
            icon: '/favicon.ico',
            tag: 'eduvia-notif-welcome'
          });
          setTimeout(() => testNotif.close(), 5000);
        } catch {
          // Ignore
        }
      }
    } catch (e) {
      console.warn('Notification permission error:', e);
    }
  };

  // Test Notification Trigger
  const triggerTestNotification = () => {
    playNotificationChime();
    setTestNotificationSent(true);
    setTimeout(() => setTestNotificationSent(false), 4000);

    if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
      try {
        const notif = new Notification('☕ Break is Over! Return to Eduvia (Test Alert)', {
          body: 'Your break has finished. Return back to the website to continue your study session!',
          icon: '/favicon.ico',
          tag: 'eduvia-test-break-notif'
        });
        notif.onclick = () => {
          window.focus();
          notif.close();
        };
      } catch (e) {
        console.warn('Error sending test notification:', e);
      }
    }

    setBreakAlert({
      title: '☕ Break Period Ended! (Preview Alert)',
      message:
        'This is how you will be alerted when your 5-min, 15-min, or custom break is over so you never forget to return back to the website.',
      mode: 'short-break'
    });
  };

  // Switch Mode Handler
  const handleSwitchMode = (mode: TimerMode) => {
    setIsActive(false);
    setTimerMode(mode);
    setSecondsLeft(durations[mode]);
    setBreakAlert(null);
    stopTabFlashing();
  };

  // Select exact minutes for current mode
  const handleSelectMinutes = (minutes: number) => {
    const clamped = Math.max(1, Math.min(180, minutes));
    const newSeconds = clamped * 60;
    const updated = {
      ...durations,
      [timerMode]: newSeconds
    };
    setDurations(updated);
    saveDurations(updated);
    setCustomInputMinutes(clamped);

    if (!isActive) {
      setSecondsLeft(newSeconds);
    }
  };

  // Adjust time on the fly (-/+ minutes)
  const handleAdjustMinutes = (deltaMinutes: number) => {
    if (isActive) return;
    const currentMins = Math.floor(secondsLeft / 60);
    const newMins = Math.max(1, Math.min(180, currentMins + deltaMinutes));
    const newSeconds = newMins * 60;
    setSecondsLeft(newSeconds);

    const updated = {
      ...durations,
      [timerMode]: newSeconds
    };
    setDurations(updated);
    saveDurations(updated);
    setCustomInputMinutes(newMins);
  };

  const toggleStartPause = () => {
    setIsActive((prev) => !prev);
    setBreakAlert(null);
    stopTabFlashing();
  };

  const resetTimer = () => {
    setIsActive(false);
    setSecondsLeft(durations[timerMode]);
    setBreakAlert(null);
    stopTabFlashing();
  };

  const startNextFocusSession = () => {
    setBreakAlert(null);
    stopTabFlashing();
    setTimerMode('pomodoro');
    setSecondsLeft(durations.pomodoro);
    setIsActive(true);
  };

  const startNextBreakSession = (mode: 'short-break' | 'long-break') => {
    setBreakAlert(null);
    stopTabFlashing();
    setTimerMode(mode);
    setSecondsLeft(durations[mode]);
    setIsActive(true);
  };

  const formatDisplayTime = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const totalModeDuration = durations[timerMode] || 25 * 60;
  const progressPct = Math.min(100, Math.max(0, ((totalModeDuration - secondsLeft) / totalModeDuration) * 100));
  const activeSubj = SUBJECTS.find((s) => s.id === selectedSubject);

  // Preset Chips for Current Mode
  const modePresets: Record<TimerMode, number[]> = {
    pomodoro: [15, 20, 25, 30, 45, 50, 60],
    'short-break': [3, 5, 8, 10, 15],
    'long-break': [10, 15, 20, 25, 30],
    custom: [10, 20, 30, 40, 60, 90]
  };

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider">
          <Timer className="w-3.5 h-3.5" /> Pomodoro Focus & Break Engine
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
          Study Session Timer
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
          Customize your study and break timers. Get desktop alerts when your 5-min or 15-min break ends so you return back to the website on time.
        </p>
      </div>

      {/* Requirement 1: Ask if Notifications Can Be Sent (Permission Banner / Status) */}
      {notificationPermission === 'default' && !hasDismissedPrompt && (
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-800 text-white shadow-lg shadow-purple-900/15 border border-purple-700/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-purple-500/30 border border-purple-400/40 flex items-center justify-center text-purple-200 shrink-0 mt-0.5">
              <BellRing className="w-5 h-5 animate-pulse text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-white font-['Outfit']">
                  Enable Break Return Notifications?
                </h4>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-400 text-slate-950 uppercase tracking-wider">
                  Recommended
                </span>
              </div>
              <p className="text-xs text-purple-200 mt-1 max-w-xl leading-relaxed">
                Allow browser notifications so Eduvia can alert you to return back to the website as soon as your 5-minute or 15-minute break ends — even if you switch tabs or step away.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
            <button
              type="button"
              id="btn-allow-notifications"
              onClick={requestNotificationPermission}
              className="flex-1 sm:flex-none px-4 py-2.5 bg-amber-400 hover:bg-amber-300 active:scale-95 text-slate-950 text-xs font-bold rounded-xl transition-all shadow-md shadow-amber-400/20 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Bell className="w-4 h-4" />
              <span>Allow Notifications</span>
            </button>
            <button
              type="button"
              onClick={() => setHasDismissedPrompt(true)}
              className="p-2 text-purple-300 hover:text-white hover:bg-purple-800/50 rounded-xl text-xs transition-colors cursor-pointer"
              title="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Notification Status Row */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs">
        <div className="flex items-center gap-2.5">
          {notificationPermission === 'granted' ? (
            <>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                Break Notifications: <strong className="text-emerald-600 dark:text-emerald-400">Active</strong>
              </span>
              <span className="text-slate-400 dark:text-slate-500 hidden sm:inline">
                • You will be notified when your break ends to return back to Eduvia
              </span>
            </>
          ) : notificationPermission === 'denied' ? (
            <>
              <BellOff className="w-4 h-4 text-amber-500" />
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                Notifications Blocked in Browser
              </span>
              <span className="text-slate-400 dark:text-slate-500 hidden sm:inline">
                (Audio chime & visual alerts will still remind you)
              </span>
            </>
          ) : (
            <>
              <Bell className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                Break Return Notifications: Not Enabled Yet
              </span>
            </>
          )}
        </div>

        <div className="flex items-center gap-2">
          {notificationPermission !== 'granted' ? (
            <button
              type="button"
              id="btn-ask-notifications-inline"
              onClick={requestNotificationPermission}
              className="px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Bell className="w-3.5 h-3.5" />
              <span>Enable Notifications</span>
            </button>
          ) : (
            <button
              type="button"
              id="btn-send-test-notification"
              onClick={triggerTestNotification}
              className="px-3 py-1.5 bg-purple-50 dark:bg-purple-950/40 hover:bg-purple-100 dark:hover:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-lg font-semibold text-xs flex items-center gap-1.5 cursor-pointer border border-purple-200 dark:border-purple-800 transition-colors"
            >
              {testNotificationSent ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 dark:text-emerald-400">Test Alert Sent!</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Test Break Alert</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Main Timer Box */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6 text-center">
        {/* Mode Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-slate-100/90 dark:bg-slate-800/90 rounded-2xl max-w-xl mx-auto">
          <button
            type="button"
            id="tab-mode-pomodoro"
            onClick={() => handleSwitchMode('pomodoro')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              timerMode === 'pomodoro'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Timer className="w-3.5 h-3.5" />
            <span>Focus ({Math.round(durations.pomodoro / 60)}m)</span>
          </button>

          <button
            type="button"
            id="tab-mode-short-break"
            onClick={() => handleSwitchMode('short-break')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              timerMode === 'short-break'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Coffee className="w-3.5 h-3.5" />
            <span>5m Short Break ({Math.round(durations['short-break'] / 60)}m)</span>
          </button>

          <button
            type="button"
            id="tab-mode-long-break"
            onClick={() => handleSwitchMode('long-break')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              timerMode === 'long-break'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Coffee className="w-3.5 h-3.5" />
            <span>15m Long Break ({Math.round(durations['long-break'] / 60)}m)</span>
          </button>

          <button
            type="button"
            id="tab-mode-custom"
            onClick={() => handleSwitchMode('custom')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              timerMode === 'custom'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Custom ({Math.round(durations.custom / 60)}m)</span>
          </button>
        </div>

        {/* Requirement 2: Allow User to Change/Select the Timer Themselves */}
        <div className="space-y-2 pt-1">
          <div className="flex items-center justify-between max-w-md mx-auto text-xs text-slate-500 dark:text-slate-400 px-1">
            <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1">
              <Sliders className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              <span>Select {timerMode === 'pomodoro' ? 'Focus' : 'Break'} Duration:</span>
            </span>
            <button
              type="button"
              id="btn-toggle-customizer"
              onClick={() => setIsCustomizingSettings(!isCustomizingSettings)}
              className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-bold flex items-center gap-1 cursor-pointer transition-colors"
            >
              <Settings2 className="w-3.5 h-3.5" />
              <span>{isCustomizingSettings ? 'Close Settings' : 'Custom Minutes'}</span>
            </button>
          </div>

          {/* Quick Preset Duration Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-lg mx-auto">
            {modePresets[timerMode].map((mins) => {
              const isSelected = Math.round(durations[timerMode] / 60) === mins;
              return (
                <button
                  key={mins}
                  type="button"
                  id={`btn-preset-${mins}m`}
                  onClick={() => handleSelectMinutes(mins)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 border-2 border-purple-600 shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {mins} min
                </button>
              );
            })}
          </div>

          {/* Expandable Custom Minutes Settings Drawer */}
          {isCustomizingSettings && (
            <div className="p-4 bg-purple-50/70 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-800 rounded-2xl max-w-md mx-auto space-y-3 mt-3 animate-in fade-in zoom-in-95 duration-200">
              <div className="text-left">
                <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                  Enter Exact Minutes for this {timerMode === 'pomodoro' ? 'Focus' : 'Break'} Mode:
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    id="input-custom-minutes"
                    min={1}
                    max={180}
                    value={customInputMinutes}
                    onChange={(e) => setCustomInputMinutes(Number(e.target.value))}
                    className="flex-1 px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="e.g. 20"
                  />
                  <button
                    type="button"
                    id="btn-apply-custom-minutes"
                    onClick={() => {
                      handleSelectMinutes(customInputMinutes);
                      setIsCustomizingSettings(false);
                    }}
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow-sm cursor-pointer"
                  >
                    Apply Duration
                  </button>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 text-left">
                Your selected duration will be saved and remembered for future study sessions.
              </p>
            </div>
          )}
        </div>

        {/* Digital Countdown & Stepper Buttons */}
        <div className="py-2">
          <div className="flex items-center justify-center gap-3">
            {/* Quick Decrement Steppers */}
            <button
              type="button"
              disabled={isActive}
              onClick={() => handleAdjustMinutes(-5)}
              className="hidden sm:inline-flex px-2.5 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl text-[11px] font-bold text-slate-600 dark:text-slate-300 cursor-pointer"
              title="Subtract 5 minutes"
            >
              -5m
            </button>
            <button
              type="button"
              disabled={isActive}
              onClick={() => handleAdjustMinutes(-1)}
              className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl text-slate-600 dark:text-slate-300 cursor-pointer"
              title="Subtract 1 minute"
            >
              <Minus className="w-4 h-4" />
            </button>

            {/* Display digits */}
            <div className="text-6xl sm:text-7xl font-black text-slate-900 dark:text-white font-mono tracking-tight font-['Outfit'] select-none">
              {formatDisplayTime(secondsLeft)}
            </div>

            {/* Quick Increment Steppers */}
            <button
              type="button"
              disabled={isActive}
              onClick={() => handleAdjustMinutes(1)}
              className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl text-slate-600 dark:text-slate-300 cursor-pointer"
              title="Add 1 minute"
            >
              <Plus className="w-4 h-4" />
            </button>
            <button
              type="button"
              disabled={isActive}
              onClick={() => handleAdjustMinutes(5)}
              className="hidden sm:inline-flex px-2.5 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl text-[11px] font-bold text-slate-600 dark:text-slate-300 cursor-pointer"
              title="Add 5 minutes"
            >
              +5m
            </button>
          </div>

          <div className="text-xs font-semibold text-purple-600 dark:text-purple-400 mt-2 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              {isActive
                ? timerMode === 'pomodoro'
                  ? `Focusing on ${activeSubj?.name || 'Studies'}`
                  : timerMode === 'short-break'
                  ? '5-Min Rest Break • Alert will notify you to return'
                  : timerMode === 'long-break'
                  ? '15-Min Long Rest Break • Alert will notify you to return'
                  : 'Custom Break in progress • Alert will notify you to return'
                : 'Ready to begin when you are'}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full max-w-md mx-auto h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-5">
            <div
              className="h-full bg-purple-600 rounded-full transition-all duration-300"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        {/* Current Subject Tag (Focus Mode) */}
        {timerMode === 'pomodoro' && (
          <div className="max-w-xs mx-auto text-left">
            <label className="block text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5">
              Subject Focus:
            </label>
            <select
              value={selectedSubject}
              disabled={isActive}
              onChange={(e) => setSelectedSubject(e.target.value as SubjectId)}
              className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              {SUBJECTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Controls: Start/Pause, Reset */}
        <div className="flex items-center justify-center gap-4 pt-1">
          <button
            type="button"
            id="btn-timer-toggle"
            onClick={toggleStartPause}
            className={`px-8 py-3.5 rounded-2xl text-sm font-bold text-white transition-all shadow-md flex items-center gap-2 cursor-pointer ${
              isActive
                ? 'bg-amber-600 hover:bg-amber-700 shadow-amber-600/20 active:scale-98'
                : 'bg-purple-600 hover:bg-purple-700 shadow-purple-600/20 active:scale-98'
            }`}
          >
            {isActive ? (
              <>
                <Pause className="w-4 h-4" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>
                  {timerMode === 'pomodoro' ? 'Start Focus' : 'Start Break Timer'}
                </span>
              </>
            )}
          </button>

          <button
            type="button"
            id="btn-timer-reset"
            onClick={resetTimer}
            className="p-3.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-2xl text-xs font-semibold transition-all cursor-pointer"
            title="Reset to selected duration"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Sessions Completed Stat */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-2">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>
              Completed today: <strong className="text-slate-700 dark:text-slate-200">{completedSessions} focus sessions</strong> ({completedSessions * Math.round(durations.pomodoro / 60)} mins)
            </span>
          </div>

          <span className="text-[11px] text-purple-600 dark:text-purple-400 font-medium">
            💡 Eduvia automatically alerts you to return when your break ends
          </span>
        </div>
      </div>

      {/* Break Completion / Return to Website Notification Modal */}
      {breakAlert && (
        <div
          role="alert"
          aria-live="assertive"
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div className="bg-white dark:bg-slate-900 max-w-md w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-purple-200 dark:border-purple-800 text-center space-y-5 animate-in zoom-in-95 duration-200 relative">
            <button
              type="button"
              onClick={() => {
                setBreakAlert(null);
                stopTabFlashing();
              }}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              title="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-purple-600/30">
              <Bell className="w-8 h-8 animate-bounce text-amber-300" />
            </div>

            <div>
              <span className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                {breakAlert.mode === 'pomodoro' ? 'Session Complete' : 'Break Is Over'}
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
                {breakAlert.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {breakAlert.message}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              {breakAlert.mode === 'pomodoro' ? (
                <>
                  <button
                    type="button"
                    id="btn-alert-start-short-break"
                    onClick={() => startNextBreakSession('short-break')}
                    className="w-full sm:flex-1 py-3 px-4 bg-purple-600 hover:bg-purple-700 active:scale-98 text-white text-xs font-bold rounded-xl shadow-md shadow-purple-600/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <Coffee className="w-4 h-4" />
                    <span>Start {Math.round(durations['short-break'] / 60)}m Break</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setBreakAlert(null);
                      stopTabFlashing();
                    }}
                    className="w-full sm:w-auto py-3 px-4 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl cursor-pointer"
                  >
                    Dismiss
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    id="btn-alert-return-to-study"
                    onClick={startNextFocusSession}
                    className="w-full sm:flex-1 py-3 px-4 bg-purple-600 hover:bg-purple-700 active:scale-98 text-white text-xs font-bold rounded-xl shadow-md shadow-purple-600/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <span>Return to Study Session (Start Focus)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setBreakAlert(null);
                      stopTabFlashing();
                    }}
                    className="w-full sm:w-auto py-3 px-4 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl cursor-pointer"
                  >
                    Dismiss
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
