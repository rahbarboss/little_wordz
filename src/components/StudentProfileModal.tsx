import React from 'react';
import { StudentUser } from '../types.ts';
import {
  X,
  LogOut,
  Star,
  Trophy,
  User,
  GraduationCap,
  Calendar,
  Sparkles,
  Award,
} from 'lucide-react';
import { playSound } from '../utils/audio.ts';

interface StudentProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: StudentUser;
  starsCount: number;
  onOpenStarVault: () => void;
  onLogout: () => void;
}

export const StudentProfileModal: React.FC<StudentProfileModalProps> = ({
  isOpen,
  onClose,
  user,
  starsCount,
  onOpenStarVault,
  onLogout,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 text-center animate-scaleIn overflow-hidden">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Decorative Top Accent */}
        <div className="w-20 h-20 mx-auto mb-3 rounded-3xl bg-gradient-to-tr from-amber-400 via-orange-400 to-indigo-500 p-1 shadow-lg shadow-amber-200/50 flex items-center justify-center">
          <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center text-4xl shadow-inner">
            {user.avatar || '⚡'}
          </div>
        </div>

        {/* Student Name & Username */}
        <h3 className="text-2xl font-black font-fredoka text-slate-800 tracking-tight">
          {user.name}
        </h3>
        <p className="text-xs font-semibold text-slate-400 mb-4">
          @{user.username}
        </p>

        {/* User Stats Card */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200/80 p-4 mb-4 text-left space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-500 fill-amber-400" />
              Golden Stars
            </span>
            <span className="text-sm font-extrabold text-amber-900 font-fredoka">
              {starsCount} ⭐
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-indigo-500" />
              Grade / Level
            </span>
            <span className="text-xs font-bold text-slate-800">
              {user.grade || 'Class 2 (7 yrs)'}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-emerald-500" />
              Status
            </span>
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
              Active Student
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5">
          {/* Star Vault Button */}
          <button
            type="button"
            onClick={() => {
              playSound('star');
              onClose();
              onOpenStarVault();
            }}
            className="w-full py-2.5 px-4 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-2xl font-fredoka font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Trophy className="w-4 h-4 text-amber-600 fill-amber-500" />
            <span>Open Star Vault & Badges</span>
          </button>

          {/* Prominent Logout Button */}
          <button
            type="button"
            id="student-logout-btn"
            onClick={() => {
              playSound('pop');
              onLogout();
            }}
            className="w-full py-3 px-4 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-2xl font-fredoka font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-2 shadow-2xs hover:shadow-sm"
          >
            <LogOut className="w-4 h-4 text-rose-600" />
            <span>Log Out (लॉग आउट / لاگ آؤٹ)</span>
          </button>
        </div>

        <p className="text-[11px] text-slate-400 mt-4">
          You can log back in anytime with username <strong className="text-slate-600">@{user.username}</strong>
        </p>
      </div>
    </div>
  );
};
