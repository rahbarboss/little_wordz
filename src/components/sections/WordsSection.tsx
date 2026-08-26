import React, { useState } from 'react';
import { WordItem, LanguageCode } from '../../types.ts';
import { AudioButton } from '../AudioButton.tsx';
import { Sparkles, Search, Filter } from 'lucide-react';
import { playSound } from '../../utils/audio.ts';

interface WordsSectionProps {
  words: WordItem[];
}

export const WordsSection: React.FC<WordsSectionProps> = ({ words = [] }) => {
  const [selectedLang, setSelectedLang] = useState<LanguageCode>('en');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const languages = [
    { code: 'en' as LanguageCode, label: 'English Words', icon: '🇬🇧', isRtl: false },
    { code: 'ur' as LanguageCode, label: 'اردو الفاظ', icon: '🇵🇰', isRtl: true },
    { code: 'ar' as LanguageCode, label: 'كَلِمَات عَرَبِيَّة', icon: '🇸🇦', isRtl: true },
    { code: 'hi' as LanguageCode, label: 'हिंदी शब्द', icon: '🇮🇳', isRtl: false },
  ];

  const currentLangConfig = languages.find(l => l.code === selectedLang) || languages[0];

  const categories = ['all', 'Fruits', 'Animals', 'School', 'Nature', 'Places', 'Vehicles', 'Everyday'];

  const safeWords = words || [];
  const filteredWords = safeWords
    .filter(w => w.language === selectedLang)
    .filter(w => (selectedCategory === 'all' ? true : w.category?.toLowerCase() === selectedCategory.toLowerCase()))
    .filter(w => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        w.word.toLowerCase().includes(q) ||
        w.meaning.toLowerCase().includes(q) ||
        w.letter.toLowerCase().includes(q)
      );
    })
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-100 text-rose-900 rounded-full text-xs font-bold font-fredoka uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            Vocabulary Flashcards
          </div>
          <h1 className="text-3xl font-black font-fredoka text-slate-800 tracking-tight">
            Word Exploration in 4 Languages
          </h1>
          <p className="text-slate-500 text-sm">Discover words, spellings, and meanings with sound pronunciation.</p>
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            id="search-words-input"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search word or meaning..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-rose-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 shadow-xs"
          />
        </div>
      </div>

      {/* Language Switcher */}
      <div className="flex flex-wrap gap-2 mb-6 bg-rose-50/80 p-2 rounded-2xl border border-rose-200">
        {languages.map(lang => (
          <button
            key={lang.code}
            type="button"
            id={`btn-words-lang-${lang.code}`}
            onClick={() => {
              playSound('pop');
              setSelectedLang(lang.code);
            }}
            className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-fredoka font-bold text-sm transition-all cursor-pointer ${
              selectedLang === lang.code
                ? 'bg-white text-rose-900 shadow-md scale-102 border border-rose-200'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <span className="text-lg">{lang.icon}</span>
            <span>{lang.label}</span>
          </button>
        ))}
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-8 overflow-x-auto pb-2">
        <Filter className="w-4 h-4 text-slate-400 mr-1" />
        {categories.map(cat => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              playSound('pop');
              setSelectedCategory(cat);
            }}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold font-fredoka capitalize transition-all cursor-pointer ${
              selectedCategory.toLowerCase() === cat.toLowerCase()
                ? 'bg-rose-500 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-rose-50'
            }`}
          >
            {cat === 'all' ? 'All Categories' : cat}
          </button>
        ))}
      </div>

      {/* Words Grid */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${
          currentLangConfig.isRtl ? 'direction-rtl' : 'direction-ltr'
        }`}
        dir={currentLangConfig.isRtl ? 'rtl' : 'ltr'}
      >
        {filteredWords.map(item => (
          <div
            key={item.id}
            id={`word-card-${item.id}`}
            className="group bg-white rounded-3xl border-2 border-rose-100 p-6 shadow-sm hover:shadow-xl hover:border-rose-300 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 bg-rose-100 text-rose-800 rounded-lg text-xs font-bold font-fredoka">
                  Letter: {item.letter}
                </span>
                <span className="text-xs text-slate-400 font-medium">{item.category}</span>
              </div>

              <div className="text-center py-4 bg-rose-50/50 rounded-2xl my-2 border border-rose-100">
                <div className="text-6xl mb-2 group-hover:scale-110 transition-transform">
                  {item.imageUrl || '🌟'}
                </div>
                <h3
                  className={`text-2xl font-black text-slate-900 ${
                    selectedLang === 'ur'
                      ? 'font-urdu'
                      : selectedLang === 'ar'
                      ? 'font-arabic'
                      : selectedLang === 'hi'
                      ? 'font-hindi'
                      : 'font-fredoka'
                  }`}
                >
                  {item.word}
                </h3>
                {item.phonetic && (
                  <p className="text-xs font-mono text-rose-600 mt-0.5">{item.phonetic}</p>
                )}
              </div>

              <p className="text-xs text-slate-600 mt-2 line-clamp-2">{item.meaning}</p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100">
              <AudioButton
                audioUrl={item.audioUrl}
                audioText={item.word}
                language={item.language}
                size="md"
                variant="primary"
                label="Listen Word"
                className="w-full justify-center"
              />
            </div>
          </div>
        ))}
      </div>

      {filteredWords.length === 0 && (
        <div className="text-center py-12 bg-white rounded-3xl border border-rose-100 p-6">
          <p className="text-slate-500 font-fredoka text-lg">No words found in this category or search.</p>
        </div>
      )}
    </div>
  );
};
