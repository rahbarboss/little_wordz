import React, { useState } from 'react';
import { KidLogo } from '../KidLogo.tsx';
import { StudentUser } from '../../types.ts';
import { loginStudent, registerStudent } from '../../utils/api.ts';
import { playSound, speakText } from '../../utils/audio.ts';
import {
  User,
  Lock,
  Sparkles,
  ArrowRight,
  UserPlus,
  LogIn,
  AlertCircle,
  CheckCircle2,
  Eye,
  EyeOff,
  Shield,
  Star,
  BookOpen,
  GraduationCap,
  Smile,
} from 'lucide-react';

interface StudentAuthScreenProps {
  onLoginSuccess: (user: StudentUser) => void;
  onOpenAdminModal: () => void;
}

const AVATAR_OPTIONS = [
  { emoji: '⚡', label: 'Bolt' },
  { emoji: '🚀', label: 'Rocket' },
  { emoji: '🦁', label: 'Lion' },
  { emoji: '🌸', label: 'Flower' },
  { emoji: '👑', label: 'Crown' },
  { emoji: '⭐', label: 'Star' },
  { emoji: '🎨', label: 'Artist' },
  { emoji: '🏎️', label: 'Racer' },
  { emoji: '🐬', label: 'Dolphin' },
  { emoji: '🌙', label: 'Moon' },
  { emoji: '🕌', label: 'Mosque' },
  { emoji: '📚', label: 'Scholar' },
  { emoji: '🐯', label: 'Tiger' },
  { emoji: '🦄', label: 'Unicorn' },
];

const GRADE_OPTIONS = [
  'Nursery / LKG (3-4 yrs)',
  'UKG / Kindergarten (5 yrs)',
  'Class 1 (6 yrs)',
  'Class 2 (7 yrs)',
  'Class 3 (8 yrs)',
  'Class 4 (9 yrs)',
  'Class 5+ (10+ yrs)',
];

export const StudentAuthScreen: React.FC<StudentAuthScreenProps> = ({
  onLoginSuccess,
  onOpenAdminModal,
}) => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Login Form State
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Register Form State
  const [regName, setRegName] = useState('');
  const [regUsername, setRegUsername] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regAvatar, setRegAvatar] = useState('⚡');
  const [regGrade, setRegGrade] = useState('Class 2 (7 yrs)');
  const [regAge, setRegAge] = useState(7);

  // Secret 3-click on M logo
  const [mClickCount, setMClickCount] = useState(0);
  const [lastMClickTime, setLastMClickTime] = useState(0);

  const handleMBoxClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const now = Date.now();
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

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!loginUsername.trim() || !loginPassword.trim()) {
      setErrorMessage('Please enter both your Username and Password.');
      playSound('wrong');
      return;
    }

    try {
      setIsLoading(true);
      const res = await loginStudent(loginUsername.trim(), loginPassword.trim());
      if (res.success && res.user) {
        playSound('cheer');
        setSuccessMessage(`Welcome back, ${res.user.name}!`);
        speakText(`Welcome back ${res.user.name}! Let's learn!`, 'en');
        setTimeout(() => {
          onLoginSuccess(res.user!);
        }, 350);
      } else {
        playSound('wrong');
        setErrorMessage(res.error || 'Invalid username or password. Please try again or create an account.');
      }
    } catch (err: any) {
      playSound('wrong');
      setErrorMessage(err.message || 'Login failed. Please check network.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!regName.trim() || !regUsername.trim() || !regPassword.trim()) {
      setErrorMessage('Please fill in Name, Username, and Password.');
      playSound('wrong');
      return;
    }

    try {
      setIsLoading(true);
      const res = await registerStudent({
        name: regName.trim(),
        username: regUsername.trim(),
        password: regPassword.trim(),
        avatar: regAvatar,
        age: regAge,
        grade: regGrade,
      });

      if (res.success && res.user) {
        playSound('fanfare');
        setSuccessMessage(`Account created! Welcome, ${res.user.name}! 🌟`);
        speakText(`Welcome to Little Mindz, ${res.user.name}!`, 'en');
        setTimeout(() => {
          onLoginSuccess(res.user!);
        }, 400);
      } else {
        playSound('wrong');
        setErrorMessage(res.error || 'Could not create account.');
      }
    } catch (err: any) {
      playSound('wrong');
      setErrorMessage(err.message || 'Registration failed.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickDemoLogin = async () => {
    playSound('pop');
    setLoginUsername('ibrahim');
    setLoginPassword('123');
    setErrorMessage(null);
    try {
      setIsLoading(true);
      const res = await loginStudent('ibrahim', '123');
      if (res.success && res.user) {
        playSound('cheer');
        onLoginSuccess(res.user);
      } else {
        // Fallback demo user
        const demoUser: StudentUser = {
          id: 'user-ibrahim',
          username: 'ibrahim',
          name: 'Ibrahim',
          avatar: '⚡',
          age: 7,
          grade: 'Grade 2',
          stars: 16,
        };
        onLoginSuccess(demoUser);
      }
    } catch {
      const demoUser: StudentUser = {
        id: 'user-ibrahim',
        username: 'ibrahim',
        name: 'Ibrahim',
        avatar: '⚡',
        age: 7,
        grade: 'Grade 2',
        stars: 16,
      };
      onLoginSuccess(demoUser);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/70 via-indigo-50/40 to-emerald-50/50 flex flex-col justify-between p-4 sm:p-6 selection:bg-amber-200">
      {/* Main Centered Card */}
      <main className="max-w-md w-full mx-auto my-auto py-6">
        <div className="bg-white rounded-3xl border-2 border-amber-100 shadow-xl p-6 sm:p-8 text-center relative overflow-hidden backdrop-blur-md">
          {/* Subtle playful top decoration */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-amber-200/40 to-orange-200/40 rounded-full blur-xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-tr from-indigo-200/40 to-purple-200/40 rounded-full blur-xl pointer-events-none" />

          {/* 1. App Logo & Brand Name */}
          <div className="flex flex-col items-center mb-6">
            <div className="transform transition-transform hover:scale-105">
              <KidLogo size="lg" onMClick={handleMBoxClick} />
            </div>
            <p className="text-xs text-slate-500 font-medium mt-2 max-w-xs">
              Islamic Studies • Holy Quran • 4-Language Alphabets • Math & General Knowledge
            </p>
          </div>

          {/* 2. Login vs Create Account Toggle Tabs */}
          <div className="grid grid-cols-2 p-1 bg-slate-100/90 rounded-2xl mb-6 border border-slate-200 shadow-inner">
            <button
              type="button"
              id="auth-tab-login"
              onClick={() => {
                playSound('pop');
                setMode('login');
                setErrorMessage(null);
              }}
              className={`py-2.5 px-3 rounded-xl font-fredoka font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                mode === 'login'
                  ? 'bg-white text-indigo-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LogIn className="w-4 h-4" />
              <span>Login / प्रवेश</span>
            </button>
            <button
              type="button"
              id="auth-tab-register"
              onClick={() => {
                playSound('pop');
                setMode('register');
                setErrorMessage(null);
              }}
              className={`py-2.5 px-3 rounded-xl font-fredoka font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                mode === 'register'
                  ? 'bg-white text-amber-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <UserPlus className="w-4 h-4" />
              <span>Create Account</span>
            </button>
          </div>

          {/* Alert Messages */}
          {errorMessage && (
            <div className="mb-4 p-3 bg-rose-50 border border-rose-200 rounded-2xl text-xs text-rose-700 flex items-center gap-2 text-left animate-shake">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
              <span>{errorMessage}</span>
            </div>
          )}
          {successMessage && (
            <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-700 flex items-center gap-2 text-left">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* ================= MODE 1: LOGIN FORM ================= */}
          {mode === 'login' && (
            <form onSubmit={handleLoginSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-bold font-fredoka text-slate-700 uppercase tracking-wide mb-1">
                  Username (उपयोगकर्ता नाम / صارف نام)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="student-login-username"
                    required
                    value={loginUsername}
                    onChange={e => setLoginUsername(e.target.value)}
                    placeholder="e.g. ibrahim"
                    className="w-full pl-9 pr-3 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold text-slate-800 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold font-fredoka text-slate-700 uppercase tracking-wide mb-1">
                  Password (पासवर्ड / پاس ورڈ)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="student-login-password"
                    required
                    value={loginPassword}
                    onChange={e => setLoginPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full pl-9 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold text-slate-800 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                id="student-login-btn"
                disabled={isLoading}
                className="w-full py-3.5 px-4 bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-2xl font-fredoka font-bold text-base shadow-md shadow-indigo-200 hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50"
              >
                {isLoading ? (
                  <span>Logging in...</span>
                ) : (
                  <>
                    <span>🚀 Login & Start Learning</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Quick Demo Login Option for Fast Access */}
              <div className="pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={handleQuickDemoLogin}
                  className="w-full py-2.5 px-3 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>⚡ Quick 1-Click Login as <strong>Ibrahim</strong> (Demo)</span>
                </button>
              </div>

              <div className="text-center pt-2">
                <p className="text-xs text-slate-500">
                  New student?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      playSound('pop');
                      setMode('register');
                    }}
                    className="font-bold text-amber-600 hover:underline cursor-pointer"
                  >
                    Create a new account here
                  </button>
                </p>
              </div>
            </form>
          )}

          {/* ================= MODE 2: CREATE NEW ACCOUNT ================= */}
          {mode === 'register' && (
            <form onSubmit={handleRegisterSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-bold font-fredoka text-slate-700 uppercase tracking-wide mb-1">
                  Full Name (नाम / نام) *
                </label>
                <input
                  type="text"
                  id="student-register-name"
                  required
                  value={regName}
                  onChange={e => {
                    setRegName(e.target.value);
                    if (!regUsername) {
                      setRegUsername(e.target.value.toLowerCase().replace(/[^a-z0-9]/g, ''));
                    }
                  }}
                  placeholder="e.g. Ibrahim or Ayesha"
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold text-slate-800 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-100 outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold font-fredoka text-slate-700 uppercase tracking-wide mb-1">
                    Username *
                  </label>
                  <input
                    type="text"
                    id="student-register-username"
                    required
                    value={regUsername}
                    onChange={e => setRegUsername(e.target.value.toLowerCase().replace(/\s+/g, ''))}
                    placeholder="e.g. ibrahim"
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold text-slate-800 focus:bg-white focus:border-amber-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold font-fredoka text-slate-700 uppercase tracking-wide mb-1">
                    Password *
                  </label>
                  <input
                    type="text"
                    id="student-register-password"
                    required
                    value={regPassword}
                    onChange={e => setRegPassword(e.target.value)}
                    placeholder="Create password"
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold text-slate-800 focus:bg-white focus:border-amber-500 outline-none"
                  />
                </div>
              </div>

              {/* Avatar Selector */}
              <div>
                <label className="block text-xs font-bold font-fredoka text-slate-700 uppercase tracking-wide mb-1.5 flex items-center justify-between">
                  <span>Choose Your Avatar (अवतार चुनें)</span>
                  <span className="text-amber-700 font-normal">Selected: {regAvatar}</span>
                </label>
                <div className="grid grid-cols-7 gap-1.5 p-2 bg-slate-50 border border-slate-200 rounded-2xl">
                  {AVATAR_OPTIONS.map(opt => (
                    <button
                      key={opt.emoji}
                      type="button"
                      onClick={() => {
                        playSound('pop');
                        setRegAvatar(opt.emoji);
                      }}
                      className={`h-9 flex items-center justify-center text-lg rounded-xl transition-all cursor-pointer ${
                        regAvatar === opt.emoji
                          ? 'bg-amber-400 shadow-md scale-110 ring-2 ring-amber-300'
                          : 'hover:bg-slate-200 text-slate-700'
                      }`}
                      title={opt.label}
                    >
                      {opt.emoji}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grade / Age Selection */}
              <div>
                <label className="block text-xs font-bold font-fredoka text-slate-700 uppercase tracking-wide mb-1">
                  Grade / Age Level (कक्षा / उम्र)
                </label>
                <select
                  value={regGrade}
                  onChange={e => {
                    setRegGrade(e.target.value);
                    const match = e.target.value.match(/(\d+)\s*yrs/);
                    if (match) setRegAge(parseInt(match[1], 10));
                  }}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold text-slate-800 focus:bg-white focus:border-amber-500 outline-none cursor-pointer"
                >
                  {GRADE_OPTIONS.map(g => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </div>

              {/* Create Account Submit Button */}
              <button
                type="submit"
                id="student-register-btn"
                disabled={isLoading}
                className="w-full py-3.5 px-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-slate-950 rounded-2xl font-fredoka font-bold text-base shadow-md shadow-amber-200 hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50"
              >
                {isLoading ? (
                  <span>Creating Account...</span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 fill-amber-300" />
                    <span>Create Account & Start (+10 Stars ⭐)</span>
                  </>
                )}
              </button>

              <div className="text-center pt-2">
                <p className="text-xs text-slate-500">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      playSound('pop');
                      setMode('login');
                    }}
                    className="font-bold text-indigo-600 hover:underline cursor-pointer"
                  >
                    Login here
                  </button>
                </p>
              </div>
            </form>
          )}
        </div>
      </main>

      {/* Footer info */}
      <footer className="max-w-4xl mx-auto w-full py-3 text-center text-xs text-slate-400">
        <p>LITTLE MINDZ &copy; {new Date().getFullYear()} • Geometric Balance Learning</p>
      </footer>
    </div>
  );
};
