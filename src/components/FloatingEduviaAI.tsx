import React from 'react';
import { Sparkles } from 'lucide-react';
import { UserProfile } from '../types';

interface FloatingEduviaAIProps {
  user: UserProfile;
  onOpenFullscreen?: () => void;
}

export const FloatingEduviaAI: React.FC<FloatingEduviaAIProps> = ({
  user,
  onOpenFullscreen
}) => {
  return (
    <button
      type="button"
      id="btn-floating-eduvia-ai"
      onClick={onOpenFullscreen}
      className="fixed bottom-6 right-6 z-40 px-4 py-3 bg-purple-600 hover:bg-purple-700 active:scale-95 text-white rounded-full shadow-lg shadow-purple-900/20 flex items-center gap-2.5 cursor-pointer transition-all hover:scale-105 group"
      title="Open Fullscreen Eduvia AI Study Partner"
    >
      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
        <Sparkles className="w-3.5 h-3.5 text-white animate-pulse" />
      </div>
      <span className="text-xs font-bold font-['Outfit'] tracking-wide">
        Ask Eduvia AI
      </span>
      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
    </button>
  );
};
