import React, { useState, useEffect, useRef } from 'react';
import { QuranSurah, QuranAyah } from '../../types.ts';
import { AudioButton } from '../AudioButton.tsx';
import { Sparkles, BookOpen, Play, Pause, Volume2, Search, CheckCircle2, ChevronDown } from 'lucide-react';
import { playSound, stopCurrentAudio } from '../../utils/audio.ts';

interface QuranSectionProps {
  surahs: QuranSurah[];
}

export const QuranSection: React.FC<QuranSectionProps> = ({ surahs = [] }) => {
  const safeSurahs = surahs || [];
  const [selectedSurahId, setSelectedSurahId] = useState<string>(safeSurahs[0]?.id || '');
  const [searchQuery, setSearchQuery] = useState('');
  const [isPlayingSurah, setIsPlayingSurah] = useState(false);
  const [activeAyahIndex, setActiveAyahIndex] = useState<number | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const activeSurah = safeSurahs.find(s => s.id === selectedSurahId) || safeSurahs[0];

  useEffect(() => {
    // Reset playing state when switching surah
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setIsPlayingSurah(false);
    setActiveAyahIndex(null);
  }, [selectedSurahId]);

  const handleToggleSurahAudio = () => {
    playSound('pop');
    if (!activeSurah?.audioUrl) return;

    if (isPlayingSurah) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlayingSurah(false);
    } else {
      stopCurrentAudio();
      const audio = new Audio(activeSurah.audioUrl);
      audioRef.current = audio;
      audio.play().then(() => {
        setIsPlayingSurah(true);
      }).catch(err => {
        console.warn('Surah audio playback error:', err);
      });

      audio.onended = () => {
        setIsPlayingSurah(false);
        setActiveAyahIndex(null);
      };
    }
  };

  const filteredSurahs = safeSurahs.filter(s => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      s.nameEnglish.toLowerCase().includes(q) ||
      s.nameUrdu.toLowerCase().includes(q) ||
      s.nameArabic.includes(q) ||
      String(s.number).includes(q)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-900 rounded-full text-xs font-bold font-fredoka uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Holy Quran Reading Sanctuary
          </div>
          <h1 className="text-3xl font-black font-fredoka text-slate-800 tracking-tight">
            Read & Listen to the Holy Quran
          </h1>
          <p className="text-slate-500 text-sm">
            Crystal clear Arabic Uthmani text with Ayah translations and beautiful audio recitations.
          </p>
        </div>

        {/* Search Surahs */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            id="search-quran-input"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search Surah name or number..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-emerald-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-xs"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Column: Surah List / Selector */}
        <div className="lg:col-span-1 space-y-2 max-h-[700px] overflow-y-auto pr-2">
          <h3 className="font-fredoka font-bold text-sm text-slate-500 uppercase tracking-wider mb-3">
            Select Surah ({filteredSurahs.length})
          </h3>
          {filteredSurahs.map(surah => (
            <button
              key={surah.id}
              type="button"
              id={`btn-surah-select-${surah.number}`}
              onClick={() => {
                playSound('pop');
                setSelectedSurahId(surah.id);
              }}
              className={`w-full flex items-center justify-between p-3.5 rounded-2xl text-left transition-all cursor-pointer border ${
                selectedSurahId === surah.id
                  ? 'bg-emerald-600 text-white shadow-md border-emerald-600 scale-102'
                  : 'bg-white text-slate-700 hover:bg-emerald-50 border-slate-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-8 h-8 rounded-xl font-fredoka font-bold text-xs flex items-center justify-center ${
                    selectedSurahId === surah.id ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-800'
                  }`}
                >
                  {surah.number}
                </span>
                <div>
                  <div className="font-bold text-sm font-fredoka">{surah.nameEnglish}</div>
                  <div
                    className={`text-[11px] ${
                      selectedSurahId === surah.id ? 'text-emerald-100' : 'text-slate-400'
                    }`}
                  >
                    {surah.versesCount} Ayahs • {surah.revelationType}
                  </div>
                </div>
              </div>

              <span className={`font-arabic text-lg font-bold ${selectedSurahId === surah.id ? 'text-white' : 'text-emerald-900'}`}>
                {surah.nameArabic}
              </span>
            </button>
          ))}
        </div>

        {/* Right Column: Quran Reading Sheet */}
        <div className="lg:col-span-3">
          {activeSurah ? (
            <div className="bg-white rounded-3xl border-2 border-emerald-200 shadow-md overflow-hidden">
              {/* Surah Header Banner */}
              <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 p-6 sm:p-8 text-white text-center relative">
                <div className="max-w-xl mx-auto">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold font-fredoka uppercase tracking-widest">
                    Surah #{activeSurah.number} • {activeSurah.revelationType} • {activeSurah.versesCount} Verses
                  </span>
                  <h2 className="text-4xl sm:text-5xl font-arabic font-bold my-3 drop-shadow-sm">
                    {activeSurah.nameArabic}
                  </h2>
                  <div className="text-xl font-bold font-fredoka text-emerald-100">{activeSurah.nameEnglish} ({activeSurah.meaningEnglish})</div>
                  <div className="text-sm font-urdu mt-1 text-emerald-200">{activeSurah.nameUrdu}</div>

                  {/* Play Entire Surah Button */}
                  <div className="mt-5 flex justify-center">
                    <button
                      type="button"
                      id="btn-play-full-surah"
                      onClick={handleToggleSurahAudio}
                      className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-fredoka font-bold shadow-lg transition-all cursor-pointer ${
                        isPlayingSurah
                          ? 'bg-rose-500 hover:bg-rose-600 text-white animate-pulse'
                          : 'bg-amber-400 hover:bg-amber-500 text-slate-900 hover:scale-105'
                      }`}
                    >
                      {isPlayingSurah ? (
                        <>
                          <Pause className="w-5 h-5" />
                          <span>Pause Surah Recitation</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-5 h-5 fill-slate-900" />
                          <span>Play Full Surah Recitation 🔊</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Bismillah Header (Except Surah 9) */}
              {activeSurah.number !== 9 && (
                <div className="text-center py-6 border-b border-emerald-100 bg-emerald-50/40">
                  <p className="text-3xl sm:text-4xl font-arabic text-emerald-950 font-bold leading-loose">
                    بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                  </p>
                  <p className="text-xs text-slate-500 mt-1 font-sans">
                    In the name of Allah, the Entirely Merciful, the Especially Merciful.
                  </p>
                </div>
              )}

              {/* Ayahs Stream */}
              <div className="p-6 sm:p-8 space-y-6">
                {(activeSurah.ayahs || []).map((ayah, idx) => (
                  <div
                    key={ayah.numberInSurah}
                    id={`ayah-card-${ayah.numberInSurah}`}
                    className={`rounded-2xl p-5 border transition-all ${
                      activeAyahIndex === idx
                        ? 'bg-emerald-50 border-emerald-400 shadow-md'
                        : 'bg-slate-50/70 hover:bg-emerald-50/40 border-slate-200'
                    }`}
                  >
                    {/* Top Row: Ayah Number + Audio Button */}
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200/60">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-fredoka font-bold text-xs flex items-center justify-center">
                          {ayah.numberInSurah}
                        </span>
                        <span className="text-xs font-semibold text-slate-400 font-mono">
                          Ayah {ayah.numberInSurah}
                        </span>
                      </div>

                      <AudioButton
                        audioUrl={ayah.audioUrl}
                        audioText={ayah.textArabic}
                        language="ar"
                        size="sm"
                        variant="secondary"
                        label="Play Ayah"
                      />
                    </div>

                    {/* Arabic Verse Text */}
                    <div className="text-right py-2" dir="rtl">
                      <p className="text-3xl sm:text-4xl font-arabic text-slate-900 font-bold leading-loose">
                        {ayah.textArabic}{' '}
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-emerald-400 text-emerald-700 text-sm font-sans mx-1">
                          ﴿{ayah.numberInSurah}﴾
                        </span>
                      </p>
                    </div>

                    {/* Urdu Translation */}
                    <div className="text-right mt-3 pt-2 border-t border-slate-200/40" dir="rtl">
                      <p className="text-base font-urdu text-emerald-900 leading-relaxed">
                        {ayah.textUrdu}
                      </p>
                    </div>

                    {/* English Translation */}
                    <div className="text-left mt-2" dir="ltr">
                      <p className="text-xs sm:text-sm text-slate-600 font-sans leading-normal">
                        {ayah.textEnglish}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
              <BookOpen className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
              <p className="font-fredoka text-lg text-slate-600">Please select a Surah to read.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
