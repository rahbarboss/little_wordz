import React, { useState } from 'react';
import { SentenceItem } from '../../types.ts';
import { AudioButton } from '../AudioButton.tsx';
import { Sparkles, MessageSquare, Search, Filter, Volume2, Play } from 'lucide-react';
import { playSound, speakText } from '../../utils/audio.ts';

interface SentencesSectionProps {
  sentences: SentenceItem[];
}

export const SentencesSection: React.FC<SentencesSectionProps> = ({ sentences = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRecitingId, setActiveRecitingId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Sentences' },
    { id: 'daily', label: 'Daily Life' },
    { id: 'school', label: 'School & Study' },
    { id: 'greetings', label: 'Greetings' },
    { id: 'manners', label: 'Polite Manners' },
    { id: 'feelings', label: 'Feelings' },
  ];

  const safeSentences = sentences || [];
  const filteredSentences = safeSentences
    .filter(s => {
      if (selectedCategory === 'all') return true;
      if (selectedCategory === 'manners') return s.category === 'manners' || (s.category as string) === 'polite';
      return s.category === selectedCategory;
    })
    .filter(s => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        s.english.toLowerCase().includes(q) ||
        s.urdu.toLowerCase().includes(q) ||
        s.arabic.toLowerCase().includes(q) ||
        s.hindi.toLowerCase().includes(q)
      );
    })
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  const handleReciteAllLanguages = (item: SentenceItem) => {
    playSound('pop');
    setActiveRecitingId(item.id);
    speakText(item.english, 'en');
    setTimeout(() => {
      speakText(item.urdu, 'ur');
    }, 2000);
    setTimeout(() => {
      speakText(item.arabic, 'ar');
    }, 4000);
    setTimeout(() => {
      speakText(item.hindi, 'hi');
      setActiveRecitingId(null);
    }, 6000);
  };

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'daily':
        return 'bg-violet-100 text-violet-800 border-violet-200';
      case 'school':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'greetings':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'manners':
      case 'polite':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'feelings':
        return 'bg-rose-100 text-rose-800 border-rose-200';
      default:
        return 'bg-sky-100 text-sky-800 border-sky-200';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-violet-100 text-violet-900 rounded-full text-xs font-bold font-fredoka uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5 text-violet-600" />
            Multilingual Conversation Lab
          </div>
          <h1 className="text-3xl font-black font-fredoka text-slate-800 tracking-tight">
            Daily Life Sentences in 4 Languages
          </h1>
          <p className="text-slate-500 text-sm">
            Learn and listen to common phrases in English, Urdu, Arabic, and Hindi with crystal clear audio!
          </p>
        </div>

        {/* Search */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            id="search-sentences-input"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search phrases..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 shadow-xs"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-8 overflow-x-auto pb-2">
        <Filter className="w-4 h-4 text-slate-400 mr-1" />
        {categories.map(cat => {
          const count =
            cat.id === 'all'
              ? safeSentences.length
              : safeSentences.filter(s =>
                  cat.id === 'manners'
                    ? s.category === 'manners' || (s.category as string) === 'polite'
                    : s.category === cat.id
                ).length;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                playSound('pop');
                setSelectedCategory(cat.id);
              }}
              className={`px-4 py-2 rounded-2xl text-xs font-bold font-fredoka transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? 'bg-violet-600 text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-violet-50'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  selectedCategory === cat.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Sentences List */}
      <div className="space-y-6">
        {filteredSentences.map((item, idx) => {
          const isReciting = activeRecitingId === item.id;

          return (
            <div
              key={item.id}
              id={`sentence-row-${item.id}`}
              className="bg-white rounded-3xl border-2 border-slate-100 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all hover:border-violet-200"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black text-slate-700 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider">
                    Phrase #{idx + 1}
                  </span>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full border uppercase tracking-wider ${getCategoryBadgeClass(
                      item.category
                    )}`}
                  >
                    {item.category}
                  </span>
                </div>

                {/* Recite All 4 Sequential Button */}
                <button
                  type="button"
                  onClick={() => handleReciteAllLanguages(item)}
                  disabled={isReciting}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                    isReciting
                      ? 'bg-violet-600 text-white animate-pulse shadow-md'
                      : 'bg-violet-50 hover:bg-violet-100 text-violet-700 border border-violet-200'
                  }`}
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>{isReciting ? 'Reciting in 4 Languages...' : 'Recite All 4 Languages'}</span>
                </button>
              </div>

              {/* 4 Multi-Language Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 1. English */}
                <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-colors">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm">🇬🇧</span>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">English</span>
                    </div>
                    <p className="text-base sm:text-lg font-bold text-slate-900 font-fredoka leading-snug">
                      {item.english}
                    </p>
                  </div>
                  <div className="mt-4 pt-2 flex justify-end">
                    <AudioButton
                      audioUrl={item.audioEn}
                      audioText={item.english}
                      language="en"
                      size="sm"
                      variant="primary"
                      label="English Audio"
                    />
                  </div>
                </div>

                {/* 2. Urdu */}
                <div
                  className="bg-emerald-50/70 rounded-2xl p-4 border border-emerald-200 flex flex-col justify-between hover:border-emerald-300 transition-colors"
                  dir="rtl"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm">🇵🇰</span>
                      <span className="text-xs font-bold text-emerald-800 uppercase font-sans tracking-wider">
                        اردو (Urdu)
                      </span>
                    </div>
                    <p className="text-lg sm:text-xl font-bold text-emerald-950 font-urdu leading-relaxed">
                      {item.urdu}
                    </p>
                  </div>
                  <div className="mt-4 pt-2 flex justify-start">
                    <AudioButton
                      audioUrl={item.audioUr}
                      audioText={item.urdu}
                      language="ur"
                      size="sm"
                      variant="secondary"
                      label="Urdu Audio"
                    />
                  </div>
                </div>

                {/* 3. Arabic */}
                <div
                  className="bg-teal-50/70 rounded-2xl p-4 border border-teal-200 flex flex-col justify-between hover:border-teal-300 transition-colors"
                  dir="rtl"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm">🇸🇦</span>
                      <span className="text-xs font-bold text-teal-800 uppercase font-sans tracking-wider">
                        العربية (Arabic)
                      </span>
                    </div>
                    <p className="text-xl sm:text-2xl font-bold text-teal-950 font-arabic leading-loose">
                      {item.arabic}
                    </p>
                  </div>
                  <div className="mt-4 pt-2 flex justify-start">
                    <AudioButton
                      audioUrl={item.audioAr}
                      audioText={item.arabic}
                      language="ar"
                      size="sm"
                      variant="secondary"
                      label="Arabic Audio"
                    />
                  </div>
                </div>

                {/* 4. Hindi */}
                <div className="bg-orange-50/70 rounded-2xl p-4 border border-orange-200 flex flex-col justify-between hover:border-orange-300 transition-colors">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm">🇮🇳</span>
                      <span className="text-xs font-bold text-orange-800 uppercase tracking-wider">
                        हिंदी (Hindi)
                      </span>
                    </div>
                    <p className="text-base sm:text-lg font-bold text-orange-950 font-hindi leading-relaxed">
                      {item.hindi}
                    </p>
                  </div>
                  <div className="mt-4 pt-2 flex justify-end">
                    <AudioButton
                      audioUrl={item.audioHi}
                      audioText={item.hindi}
                      language="hi"
                      size="sm"
                      variant="primary"
                      label="Hindi Audio"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

