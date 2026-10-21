import React, { useState } from 'react';
import { Download, Share2, PlusSquare, X, Smartphone, Sparkles, CheckCircle2 } from 'lucide-react';
import { usePWAInstall } from '../utils/usePWAInstall';

interface PWAInstallButtonProps {
  variant?: 'navbar' | 'compact' | 'banner' | 'card';
  className?: string;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  variant = 'navbar',
  className = ''
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showGuide, setShowGuide] = useState(false);
  const [justInstalled, setJustInstalled] = useState(false);

  // If already running as standalone PWA
  if (isInstalled) {
    if (variant === 'banner' || variant === 'card') {
      return (
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>Eduvia App is installed on this device</span>
        </div>
      );
    }
    return null;
  }

  const handleTrigger = async () => {
    if (isInstallable) {
      const outcome = await install();
      if (outcome) {
        setJustInstalled(true);
      }
    } else {
      setShowGuide(true);
    }
  };

  // Banner variant for Dashboard or Top notices
  if (variant === 'banner') {
    return (
      <>
        <div className={`p-4 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-700 text-white shadow-lg shadow-purple-600/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${className}`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
              <Download className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold font-['Outfit']">Install Eduvia on Mobile & PC</h4>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-white/20 tracking-wider uppercase">
                  PWA App
                </span>
              </div>
              <p className="text-xs text-purple-100 mt-0.5">
                Download to your home screen for fullscreen study, offline revision, and zero browser tabs.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleTrigger}
            className="px-4 py-2 rounded-xl bg-white text-purple-700 hover:bg-purple-50 active:scale-95 text-xs font-extrabold shadow-md transition-all cursor-pointer shrink-0 self-start sm:self-auto min-h-[38px] flex items-center gap-2"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{isInstallable ? '1-Click Install' : 'Download App'}</span>
          </button>
        </div>

        {/* Modal Guide */}
        {showGuide && renderGuideModal(() => setShowGuide(false), isIOS)}
      </>
    );
  }

  // Compact variant
  if (variant === 'compact') {
    return (
      <>
        <button
          type="button"
          onClick={handleTrigger}
          title="Install Eduvia app"
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold shadow-xs transition-all cursor-pointer ${className}`}
        >
          <Download className="w-3.5 h-3.5" />
          <span>Install App</span>
        </button>
        {showGuide && renderGuideModal(() => setShowGuide(false), isIOS)}
      </>
    );
  }

  // Default Navbar variant
  return (
    <>
      <button
        type="button"
        id="btn-install-pwa"
        onClick={handleTrigger}
        title="Download Eduvia PWA app to your device"
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-600/10 hover:bg-purple-600/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 text-xs font-semibold transition-all cursor-pointer min-h-[36px] ${className}`}
      >
        <Download className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Install App</span>
        <span className="sm:hidden">Install</span>
      </button>

      {showGuide && renderGuideModal(() => setShowGuide(false), isIOS)}
    </>
  );
};

function renderGuideModal(onClose: () => void, isIOS: boolean) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-sm rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-2xl border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-purple-600/20">
              <Smartphone className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Install Eduvia App</h3>
              <p className="text-[11px] text-purple-600 dark:text-purple-400 font-medium">Standalone PWA Mobile Experience</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            aria-label="Close install modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
          <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/40">
            <p className="font-bold text-purple-900 dark:text-purple-200 mb-1 flex items-center gap-1.5">
              <span>Android & Chrome:</span>
            </p>
            <p className="leading-relaxed">
              1. Tap the <strong>three dots (⋮)</strong> menu in top-right of Chrome.<br />
              2. Tap <strong>"Install app"</strong> or <strong>"Add to Home screen"</strong>.<br />
              3. The Eduvia icon will appear on your phone home screen!
            </p>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <p className="font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-1.5">
              <span>iPhone & iPad (Safari):</span>
            </p>
            <div className="space-y-1.5 mt-1.5">
              <div className="flex items-start gap-2">
                <Share2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                <span>1. Tap the <strong>Share</strong> button at bottom toolbar.</span>
              </div>
              <div className="flex items-start gap-2">
                <PlusSquare className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                <span>2. Scroll down and tap <strong>Add to Home Screen</strong>.</span>
              </div>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-[11px] text-amber-800 dark:text-amber-300">
            ⚡ Runs offline, launches instantly like a native app, and uses 95% less data than app stores!
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-4 w-full rounded-xl bg-purple-600 hover:bg-purple-700 py-2.5 text-xs font-bold text-white transition cursor-pointer"
        >
          Got It, Thanks!
        </button>
      </div>
    </div>
  );
}
