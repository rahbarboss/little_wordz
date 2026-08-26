import React from 'react';
import { Star, X, Trophy, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playSound } from '../utils/audio.ts';

interface StarVaultModalProps {
  isOpen: boolean;
  onClose: () => void;
  starsCount: number;
  userName: string;
}

export const StarVaultModal: React.FC<StarVaultModalProps> = ({
  isOpen,
  onClose,
  starsCount,
  userName,
}) => {
  if (!isOpen) return null;

  const triggerConfetti = () => {
    playSound('fanfare');
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const badges = [
    { title: 'Alphabet Explorer', icon: '🔤', desc: 'Read English, Urdu, Arabic & Hindi', req: 10, unlocked: starsCount >= 10 },
    { title: 'Quran Reciter', icon: '📖', desc: 'Listened to Holy Surahs', req: 25, unlocked: starsCount >= 25 },
    { title: 'Salah & Kalima Star', icon: '🕌', desc: 'Learned Daily Duas & Kalimas', req: 40, unlocked: starsCount >= 40 },
    { title: 'Math Genius', icon: '➕', desc: 'Practiced 1-100 Numbers & Tables', req: 60, unlocked: starsCount >= 60 },
    { title: 'India & World Champion', icon: '🇮🇳', desc: 'Mastered 28 States & Symbols', req: 80, unlocked: starsCount >= 80 },
    { title: 'Grand Scholar', icon: '🏆', desc: 'Ultimate Little Mindz Master', req: 100, unlocked: starsCount >= 100 },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 text-center animate-scaleIn">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Trophy & Sparks */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-3xl text-amber-600 mb-3 shadow-inner">
          <Trophy className="w-8 h-8 fill-amber-400 text-amber-500" />
        </div>

        <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight">
          {userName}'s Star Vault
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Collect golden stars by solving quizzes, reciting surahs, and exploring lessons!
        </p>

        {/* Stars Counter Display */}
        <div className="my-6 bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 rounded-2xl p-5 border border-amber-200 flex items-center justify-around">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-amber-400 text-white rounded-2xl shadow-md">
              <Star className="w-8 h-8 fill-white" />
            </div>
            <div className="text-left">
              <div className="text-3xl font-black text-amber-900">{starsCount}</div>
              <div className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">Total Golden Stars</div>
            </div>
          </div>

          <button
            type="button"
            onClick={triggerConfetti}
            className="px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl shadow-sm hover:shadow transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4" />
            <span>Celebrate!</span>
          </button>
        </div>

        {/* Achievement Badges */}
        <div className="text-left mb-4">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Learning Badges & Milestones
          </div>
          <div className="grid grid-cols-2 gap-2.5 max-h-56 overflow-y-auto pr-1">
            {badges.map((b, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-2xl border flex items-start gap-2.5 transition-all ${
                  b.unlocked
                    ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900'
                    : 'bg-slate-50/80 border-slate-200 text-slate-400 opacity-70'
                }`}
              >
                <div className="text-2xl shrink-0">{b.icon}</div>
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-xs flex items-center justify-between">
                    <span className="truncate">{b.title}</span>
                    {b.unlocked && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />}
                  </div>
                  <div className="text-[10px] text-slate-500 leading-tight mt-0.5 line-clamp-1">
                    {b.desc}
                  </div>
                  <div className="text-[9px] font-bold mt-1 text-amber-600">
                    {b.unlocked ? 'Unlocked' : `Requires ${b.req} Stars`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl transition-colors cursor-pointer"
        >
          Keep Learning & Earning
        </button>
      </div>
    </div>
  );
};
