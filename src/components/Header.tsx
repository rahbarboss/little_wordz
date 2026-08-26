import React, { useState } from 'react';
import { KidLogo } from './KidLogo.tsx';
import {
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  Sparkles,
  Shield,
  Star,
  Home,
  BookOpen,
  Plus,
  Globe,
  Trophy,
  Moon,
  Compass,
} from 'lucide-react';
import { playSound, speakText } from '../utils/audio.ts';

interface HeaderProps {
  currentSection: string;
  onNavigate: (section: string) => void;
  isAdminLoggedIn: boolean;
  onOpenAdminModal: () => void;
  starsCount: number;
  onOpenStarVault: () => void;
  studentName?: string;
  studentAvatar?: string;
  onOpenProfile?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSection,
  onNavigate,
  isAdminLoggedIn,
  onOpenAdminModal,
  starsCount,
  onOpenStarVault,
  studentName = 'Ibrahim',
  studentAvatar = '⚡',
  onOpenProfile,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [mClickCount, setMClickCount] = useState(0);
  const [lastMClickTime, setLastMClickTime] = useState(0);

  const handleMBoxClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const now = Date.now();
    // Allow clicks within 2 seconds of each other
    if (now - lastMClickTime < 2000) {
      const nextCount = mClickCount + 1;
      if (nextCount >= 3) {
        playSound('star');
        setMClickCount(0);
        onOpenAdminModal();
      } else {
        playSound('pop');
        setMClickCount(nextCount);
      }
    } else {
      playSound('pop');
      setMClickCount(1);
    }
    setLastMClickTime(now);
  };

  const toggleFullscreen = () => {
    playSound('pop');
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  const toggleSound = () => {
    if (isMuted) {
      setIsMuted(false);
      playSound('star');
      speakText('Sound enabled!', 'en');
    } else {
      setIsMuted(true);
      playSound('pop');
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'alphabet', label: 'Alphabets', icon: '🔤' },
    { id: 'sentences', label: 'Daily Sentences', icon: '💬' },
    { id: 'quran', label: 'Holy Quran', icon: '📖' },
    { id: 'islamic', label: 'Islamic Studies', icon: '🕌' },
    { id: 'math', label: 'Mathematics', icon: '➕' },
    { id: 'gk', label: 'General Knowledge', icon: '🌍' },
    { id: 'games', label: 'Quiz Games', icon: '🏆' },
    { id: 'vault', label: 'Star Vault', icon: '⭐', isVault: true },
  ];

  return (
    <header className="sticky top-0 z-40 bg-transparent pt-3 px-3 sm:px-6 mb-2">
      {/* Top Floating Announcement Ticker */}
      <div className="max-w-7xl mx-auto mb-2.5 px-4 py-1.5 bg-gradient-to-r from-amber-500/10 via-indigo-500/10 to-emerald-500/10 rounded-full border border-slate-200/80 backdrop-blur-xs flex items-center justify-between text-[11px] font-semibold text-slate-700 overflow-hidden shadow-2xs">
        <div className="flex items-center gap-2 truncate">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span className="text-amber-700 font-bold uppercase tracking-wider text-[10px]">Daily Wisdom:</span>
          <span className="truncate italic">"Smiling at your brother or sister is charity." — Prophet Muhammad (ﷺ)</span>
        </div>
        <div className="hidden md:flex items-center gap-2 shrink-0 text-slate-500 text-[10px] uppercase font-bold tracking-wider">
          <Sparkles className="w-3 h-3 text-amber-500" />
          <span>Interactive Multilingual Studio</span>
        </div>
      </div>

      {/* Main Glassmorphic & Geometric Header Container */}
      <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200 shadow-md p-3 sm:p-4 transition-all">
        {/* Top Row: Logo & High-Tier Tools */}
        <div className="flex items-center justify-between gap-4 pb-3 border-b border-slate-100">
          {/* Logo Brand */}
          <div
            className="cursor-pointer"
            onClick={() => {
              playSound('pop');
              onNavigate('home');
            }}
          >
            <KidLogo size="md" onMClick={handleMBoxClick} />
          </div>

          {/* Right Action Icons: Star Counter, Sound, Fullscreen, Profile */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Stars Counter Pill */}
            <button
              type="button"
              id="header-stars-pill"
              onClick={() => {
                playSound('star');
                onOpenStarVault();
              }}
              className="flex items-center gap-2 px-3.5 py-1.5 bg-amber-50 hover:bg-amber-100 border border-amber-300 rounded-full shadow-2xs text-amber-900 font-extrabold text-xs sm:text-sm cursor-pointer transition-all hover:scale-105"
              title="Open Star Vault & Badges"
            >
              <Star className="w-4 h-4 text-amber-500 fill-amber-400 animate-pulse" />
              <span>{starsCount} Stars</span>
            </button>

            {/* Sound Toggle Button */}
            <button
              type="button"
              onClick={toggleSound}
              className="w-9 h-9 flex items-center justify-center bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200 rounded-full transition-all cursor-pointer shadow-2xs hover:scale-105"
              title={isMuted ? 'Unmute voice' : 'Mute voice'}
              aria-label="Toggle Sound"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-rose-500" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Fullscreen Button */}
            <button
              type="button"
              onClick={toggleFullscreen}
              className="w-9 h-9 hidden xs:flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 rounded-full transition-all cursor-pointer shadow-2xs hover:scale-105"
              title="Toggle Fullscreen"
              aria-label="Toggle Fullscreen"
            >
              {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
            </button>

            {/* Student Profile Pill with Logout Menu Trigger */}
            <div
              id="header-student-profile-pill"
              onClick={() => {
                playSound('pop');
                if (onOpenProfile) {
                  onOpenProfile();
                } else {
                  onOpenStarVault();
                }
              }}
              className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 hover:border-slate-300 border border-slate-200 rounded-full cursor-pointer transition-all shadow-2xs hover:scale-105"
              title="Click for Student Profile & Logout"
            >
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-400 to-indigo-500 flex items-center justify-center text-white text-[12px] font-black shadow-inner">
                {studentAvatar}
              </div>
              <span className="text-xs font-bold text-slate-800 max-w-[100px] truncate">{studentName}</span>
            </div>

            {/* Logged in Admin indicator if active */}
            {isAdminLoggedIn && (
              <button
                type="button"
                onClick={() => {
                  playSound('pop');
                  onOpenAdminModal();
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 rounded-full text-xs font-bold transition-all cursor-pointer shadow-2xs"
                title="Admin Active • Click to open Dashboard"
              >
                <Shield className="w-3.5 h-3.5 text-emerald-600" />
                <span className="hidden xs:inline">Admin Mode</span>
              </button>
            )}
          </div>
        </div>

        {/* Bottom Subnav Ribbon Pills */}
        <div className="flex items-center gap-2 pt-2.5 overflow-x-auto no-scrollbar">
          {navItems.map(item => {
            const isActive = currentSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                id={`nav-pill-${item.id}`}
                onClick={() => {
                  playSound('pop');
                  if (item.isVault) {
                    onOpenStarVault();
                  } else {
                    onNavigate(item.id);
                  }
                }}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 scale-102 border border-indigo-500'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 hover:border-slate-300'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
