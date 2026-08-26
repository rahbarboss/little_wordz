import React, { useState, useEffect } from 'react';
import { AppDatabase, StudentUser } from './types.ts';
import {
  fetchDatabase,
  verifyAdminSession,
  getAdminToken,
  clearAdminToken,
  getStoredStudent,
  clearStoredStudent,
  syncStudentStars,
} from './utils/api.ts';
import { Header } from './components/Header.tsx';
import { StudentHome } from './components/StudentHome.tsx';
import { AlphabetSection } from './components/sections/AlphabetSection.tsx';
import { WordsSection } from './components/sections/WordsSection.tsx';
import { SentencesSection } from './components/sections/SentencesSection.tsx';
import { QuranSection } from './components/sections/QuranSection.tsx';
import { IslamicSection } from './components/sections/IslamicSection.tsx';
import { MathSection } from './components/sections/MathSection.tsx';
import { GKSection } from './components/sections/GKSection.tsx';
import { GamesSection } from './components/sections/GamesSection.tsx';
import { AdminDashboard } from './components/admin/AdminDashboard.tsx';
import { AdminLoginModal } from './components/admin/AdminLoginModal.tsx';
import { StarVaultModal } from './components/StarVaultModal.tsx';
import { StudentProfileModal } from './components/StudentProfileModal.tsx';
import { StudentAuthScreen } from './components/auth/StudentAuthScreen.tsx';
import { KidLogo } from './components/KidLogo.tsx';
import { Loader2, Sparkles, AlertCircle, RefreshCw } from 'lucide-react';
import { playSound } from './utils/audio.ts';

const STARS_STORAGE_KEY = 'little_mindz_kid_stars';

export default function App() {
  const [currentSection, setCurrentSection] = useState<string>('home');
  const [database, setDatabase] = useState<AppDatabase | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  // Student User Session State
  const [studentUser, setStudentUser] = useState<StudentUser | null>(() => getStoredStudent());
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  // Admin states
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isStarVaultOpen, setIsStarVaultOpen] = useState(false);

  // Kid stars reward tracker
  const [starsCount, setStarsCount] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STARS_STORAGE_KEY);
      if (saved) return parseInt(saved, 10);
    }
    const current = getStoredStudent();
    return current?.stars || 10;
  });

  const loadData = async () => {
    try {
      setIsLoading(true);
      setLoadError(null);
      const data = await fetchDatabase();
      setDatabase(data);
    } catch (err: any) {
      setLoadError(err.message || 'Failed to load educational data');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();

    // Check if admin is already logged in
    verifyAdminSession().then(isValid => {
      setIsAdminLoggedIn(isValid);
    });
  }, []);

  const handleEarnStars = (amount: number) => {
    setStarsCount(prev => {
      const updated = prev + amount;
      if (typeof window !== 'undefined') {
        localStorage.setItem(STARS_STORAGE_KEY, String(updated));
      }
      if (studentUser) {
        syncStudentStars(studentUser.username, updated);
      }
      return updated;
    });
  };

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStudentLoginSuccess = (user: StudentUser) => {
    setStudentUser(user);
    if (user.stars !== undefined) {
      setStarsCount(user.stars);
      if (typeof window !== 'undefined') {
        localStorage.setItem(STARS_STORAGE_KEY, String(user.stars));
      }
    }
    setCurrentSection('home');
  };

  const handleStudentLogout = () => {
    clearStoredStudent();
    setStudentUser(null);
    setIsProfileModalOpen(false);
    setCurrentSection('home');
    playSound('pop');
  };

  const handleAdminLoginSuccess = () => {
    setIsAdminLoggedIn(true);
    setCurrentSection('admin');
  };

  const handleAdminLogout = () => {
    clearAdminToken();
    setIsAdminLoggedIn(false);
    setCurrentSection('home');
  };

  if (isLoading && !database) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 flex flex-col items-center justify-center p-6 text-center">
        <KidLogo size="xl" className="mb-6 animate-pulse" />
        <div className="flex items-center gap-3 text-amber-900 font-fredoka font-bold text-xl">
          <Loader2 className="w-6 h-6 animate-spin text-amber-500" />
          <span>Opening Little Mindz Academy...</span>
        </div>
        <p className="text-xs text-slate-500 mt-2">Loading Alphabets, Quran, Math & GK Curriculum</p>
      </div>
    );
  }

  if (loadError && !database) {
    return (
      <div className="min-h-screen bg-rose-50 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mb-4">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold font-fredoka text-slate-900 mb-2">Unable to Connect</h2>
        <p className="text-sm text-slate-600 max-w-md mb-6">{loadError}</p>
        <button
          type="button"
          onClick={loadData}
          className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-full font-fredoka font-bold text-sm shadow cursor-pointer flex items-center gap-2"
        >
          <RefreshCw className="w-4 h-4" />
          Try Again
        </button>
      </div>
    );
  }

  // If user is not logged in, show initial Welcome / Login / Register Screen
  if (!studentUser) {
    return (
      <>
        <StudentAuthScreen
          onLoginSuccess={handleStudentLoginSuccess}
          onOpenAdminModal={() => {
            setIsAdminModalOpen(true);
          }}
        />

        {/* Admin Login Dialog when triggered from start screen */}
        <AdminLoginModal
          isOpen={isAdminModalOpen}
          onClose={() => setIsAdminModalOpen(false)}
          onLoginSuccess={() => {
            handleAdminLoginSuccess();
            setStudentUser({
              id: 'admin-preview',
              username: 'admin',
              name: 'Administrator',
              avatar: '👑',
              stars: 100,
            });
          }}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-900 flex flex-col selection:bg-amber-200">
      {/* Universal Header */}
      <Header
        currentSection={currentSection}
        onNavigate={handleNavigate}
        isAdminLoggedIn={isAdminLoggedIn}
        onOpenAdminModal={() => {
          setIsAdminModalOpen(true);
        }}
        starsCount={starsCount}
        onOpenStarVault={() => setIsStarVaultOpen(true)}
        studentName={studentUser.name}
        studentAvatar={studentUser.avatar || '⚡'}
        onOpenProfile={() => setIsProfileModalOpen(true)}
      />

      {/* Main Dynamic Viewport */}
      <main className="flex-1 pb-16">
        {database && (
          <>
            {currentSection === 'home' && (
              <StudentHome
                onSelectSection={handleNavigate}
                stats={{
                  totalSurahs: (database.surahs || database.quranSurahs || []).length,
                  totalGames: (database.quizzes || []).length,
                }}
              />
            )}

            {currentSection === 'alphabet' && (
              <AlphabetSection alphabets={database.alphabets || []} />
            )}

            {currentSection === 'words' && (
              <WordsSection words={database.words || []} />
            )}

            {currentSection === 'sentences' && (
              <SentencesSection sentences={database.sentences || []} />
            )}

            {currentSection === 'quran' && (
              <QuranSection surahs={database.surahs || database.quranSurahs || []} />
            )}

            {currentSection === 'islamic' && (
              <IslamicSection items={database.islamicItems || database.islamicStudies || []} />
            )}

            {currentSection === 'math' && (
              <MathSection items={database.mathItems || []} />
            )}

            {currentSection === 'gk' && (
              <GKSection items={database.gkItems || []} />
            )}

            {currentSection === 'games' && (
              <GamesSection quizzes={database.quizzes || []} onEarnStars={handleEarnStars} />
            )}

            {currentSection === 'admin' && (
              <AdminDashboard
                database={database}
                onRefreshData={loadData}
                onLogout={handleAdminLogout}
              />
            )}
          </>
        )}
      </main>

      {/* Student Profile & Logout Modal */}
      <StudentProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        user={studentUser}
        starsCount={starsCount}
        onOpenStarVault={() => {
          setIsProfileModalOpen(false);
          setIsStarVaultOpen(true);
        }}
        onLogout={handleStudentLogout}
      />

      {/* Star Vault Badges Modal */}
      <StarVaultModal
        isOpen={isStarVaultOpen}
        onClose={() => setIsStarVaultOpen(false)}
        starsCount={starsCount}
        userName={studentUser.name}
      />

      {/* Admin Login Dialog */}
      <AdminLoginModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        onLoginSuccess={handleAdminLoginSuccess}
      />

      {/* Cheerful Footer */}
      <footer className="bg-white border-t border-amber-100 py-8 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <KidLogo size="sm" />
          <p className="text-xs text-slate-500 font-medium">
            LITTLE MINDZ &copy; {new Date().getFullYear()} • Educational Platform for Smart Kids
          </p>
          <div className="flex items-center gap-3 text-xs font-semibold text-amber-700">
            <button
              type="button"
              onClick={() => {
                playSound('pop');
                if (isAdminLoggedIn) {
                  handleNavigate('admin');
                } else {
                  setIsAdminModalOpen(true);
                }
              }}
              className="hover:underline cursor-pointer"
            >
              Admin Portal
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => {
                playSound('pop');
                handleNavigate('games');
              }}
              className="hover:underline cursor-pointer"
            >
              Quiz Arena
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

