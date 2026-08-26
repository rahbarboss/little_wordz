import React, { useState } from 'react';
import { AlphabetItem, LanguageCode } from '../../types.ts';
import { AudioButton } from '../AudioButton.tsx';
import { Sparkles, Search, Volume2, Maximize2, X, ChevronRight, ChevronLeft } from 'lucide-react';
import { playSound, speakText } from '../../utils/audio.ts';

interface AlphabetSectionProps {
  alphabets: AlphabetItem[];
}

export const AlphabetSection: React.FC<AlphabetSectionProps> = ({ alphabets = [] }) => {
  const [selectedLang, setSelectedLang] = useState<LanguageCode>('en');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalItem, setActiveModalItem] = useState<AlphabetItem | null>(null);

  const languages = [
    { code: 'en' as LanguageCode, label: 'English (A–Z)', icon: '🇬🇧', fontClass: 'font-fredoka', isRtl: false },
    { code: 'ur' as LanguageCode, label: 'اردو حروف تہجی', icon: '🇵🇰', fontClass: 'font-urdu', isRtl: true },
    { code: 'ar' as LanguageCode, label: 'الْحُرُوفُ الْعَرَبِيَّة', icon: '🇸🇦', fontClass: 'font-arabic', isRtl: true },
    { code: 'hi' as LanguageCode, label: 'हिंदी वर्णमाला', icon: '🇮🇳', fontClass: 'font-hindi', isRtl: false },
  ];

  const currentLangConfig = languages.find(l => l.code === selectedLang) || languages[0];

  const safeAlphabets = alphabets || [];
  const filteredItems = safeAlphabets
    .filter(a => a.language === selectedLang)
    .filter(a => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        a.letter.toLowerCase().includes(q) ||
        a.exampleWord.toLowerCase().includes(q) ||
        (a.phonics && a.phonics.toLowerCase().includes(q))
      );
    })
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  const handleNextModal = () => {
    if (!activeModalItem) return;
    const currentIdx = filteredItems.findIndex(i => i.id === activeModalItem.id);
    if (currentIdx !== -1 && currentIdx < filteredItems.length - 1) {
      setActiveModalItem(filteredItems[currentIdx + 1]);
    }
  };

  const handlePrevModal = () => {
    if (!activeModalItem) return;
    const currentIdx = filteredItems.findIndex(i => i.id === activeModalItem.id);
    if (currentIdx > 0) {
      setActiveModalItem(filteredItems[currentIdx - 1]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-md text-[11px] font-semibold uppercase tracking-wider mb-1">
            <Sparkles className="w-3 h-3 text-indigo-600" />
            Alphabet & Phonics Lab
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Learn Letters in 4 Languages
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-0.5">Select a character card to hear human pronunciation and explore phonetic examples.</p>
        </div>

        {/* Search Bar */}
        <div className="relative min-w-[240px]">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            id="search-alphabet-input"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search letter or word..."
            className="w-full pl-8 pr-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-xs"
          />
        </div>
      </div>

      {/* Language Switcher Tabs */}
      <div className="flex flex-wrap gap-1.5 mb-6 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
        {languages.map(lang => (
          <button
            key={lang.code}
            type="button"
            id={`btn-lang-tab-${lang.code}`}
            onClick={() => {
              playSound('pop');
              setSelectedLang(lang.code);
            }}
            className={`flex-1 min-w-[130px] flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              selectedLang === lang.code
                ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <span className="text-base">{lang.icon}</span>
            <span className={lang.fontClass}>{lang.label}</span>
          </button>
        ))}
      </div>

      {/* Grid of Letters */}
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 ${
          currentLangConfig.isRtl ? 'direction-rtl' : 'direction-ltr'
        }`}
        dir={currentLangConfig.isRtl ? 'rtl' : 'ltr'}
      >
        {filteredItems.map(item => (
          <div
            key={item.id}
            id={`alphabet-card-${item.id}`}
            onClick={() => {
              playSound('pop');
              setActiveModalItem(item);
            }}
            className="group relative bg-white rounded-xl border border-slate-200 p-4 shadow-xs hover:shadow-sm hover:border-indigo-400 transition-all duration-200 cursor-pointer flex flex-col items-center justify-between text-center"
          >
            {/* Letter Symbol */}
            <div className="w-full flex justify-between items-start mb-1">
              <span className="text-[10px] font-bold text-slate-400 font-mono">#{item.order}</span>
              <button
                type="button"
                onClick={e => {
                  e.stopPropagation();
                  setActiveModalItem(item);
                }}
                className="opacity-0 group-hover:opacity-100 p-1 text-slate-400 hover:text-indigo-600 rounded-md transition-opacity"
                title="Expand fullscreen view"
              >
                <Maximize2 className="w-3 h-3" />
              </button>
            </div>

            <div
              className={`text-5xl font-bold my-2 group-hover:scale-105 transition-transform ${
                selectedLang === 'ur'
                  ? 'font-urdu text-emerald-800'
                  : selectedLang === 'ar'
                  ? 'font-arabic text-teal-800'
                  : selectedLang === 'hi'
                  ? 'font-hindi text-rose-800'
                  : 'text-indigo-600'
              }`}
            >
              {item.letter}
            </div>

            {/* Phonics & Example Word */}
            <div className="w-full mt-2 pt-2 border-t border-slate-100">
              <div className="text-2xl mb-1">{item.imageUrl || '🌟'}</div>
              <div className="font-bold text-xs text-slate-800 truncate">{item.exampleWord}</div>
              <div className="text-[10px] text-slate-400 truncate font-sans">{item.exampleWordTranslation}</div>
            </div>

            {/* Audio Pronunciation Button */}
            <div className="mt-3 w-full" onClick={e => e.stopPropagation()}>
              <AudioButton
                audioUrl={item.audioUrl}
                audioText={item.audioText || `${item.letter} for ${item.exampleWord}`}
                language={item.language}
                size="sm"
                variant="primary"
                label="Listen"
                className="w-full text-xs py-1"
              />
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border border-slate-200 p-6">
          <p className="text-slate-500 text-sm">No alphabet items found matching "{searchQuery}".</p>
        </div>
      )}

      {/* Large Focus Modal for classroom teaching / inspection */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div
            className="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 text-center"
            dir={currentLangConfig.isRtl ? 'rtl' : 'ltr'}
          >
            <button
              type="button"
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-[11px] uppercase font-semibold text-indigo-600 tracking-wider mb-2">
              Character Details
            </div>

            {/* Huge Letter */}
            <div
              className={`text-8xl font-bold my-3 text-slate-900 ${
                selectedLang === 'ur'
                  ? 'font-urdu'
                  : selectedLang === 'ar'
                  ? 'font-arabic'
                  : selectedLang === 'hi'
                  ? 'font-hindi'
                  : ''
              }`}
            >
              {activeModalItem.letter}
            </div>

            {/* Word Display with Illustration */}
            <div className="bg-slate-50 rounded-xl p-4 my-4 border border-slate-200">
              <div className="text-4xl mb-2">{activeModalItem.imageUrl || '🌟'}</div>
              <h2 className="text-xl font-bold text-slate-900">
                {activeModalItem.letter} for {activeModalItem.exampleWord}
              </h2>
              <p className="text-xs font-semibold text-indigo-600 mt-1">{activeModalItem.exampleWordTranslation}</p>
              {activeModalItem.meaning && (
                <p className="text-xs text-slate-500 mt-1">{activeModalItem.meaning}</p>
              )}
            </div>

            {/* Big Audio Trigger */}
            <div className="my-5">
              <AudioButton
                audioUrl={activeModalItem.audioUrl}
                audioText={activeModalItem.audioText || `${activeModalItem.letter} for ${activeModalItem.exampleWord}`}
                language={activeModalItem.language}
                size="hero"
                variant="primary"
                label="Listen Audio Pronunciation"
                className="w-full justify-center"
              />
            </div>

            {/* Next / Previous Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={handlePrevModal}
                className="flex items-center gap-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-colors cursor-pointer border border-slate-200"
              >
                <ChevronLeft className="w-3.5 h-3.5" /> Previous
              </button>
              <span className="text-xs font-medium text-slate-400 font-mono">
                Order #{activeModalItem.order}
              </span>
              <button
                type="button"
                onClick={handleNextModal}
                className="flex items-center gap-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-colors cursor-pointer border border-slate-200"
              >
                Next <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
