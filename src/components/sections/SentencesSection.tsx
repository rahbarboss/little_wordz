import React, { useState } from 'react';
import { SentenceItem } from '../../types.ts';
import { AudioButton } from '../AudioButton.tsx';
import { Sparkles, MessageSquare, Search, Filter } from 'lucide-react';
import { playSound } from '../../utils/audio.ts';

interface SentencesSectionProps {
  sentences: SentenceItem[];
}

export const SentencesSection: React.FC<SentencesSectionProps> = ({ sentences = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

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
    .filter(s => (selectedCategory === 'all' ? true : s.category === selectedCategory))
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-100 text-sky-900 rounded-full text-xs font-bold font-fredoka uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
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
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-sky-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 shadow-xs"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-8 overflow-x-auto pb-2">
        <Filter className="w-4 h-4 text-slate-400 mr-1" />
        {categories.map(cat => (
          <button
            key={cat.id}
            type="button"
            onClick={() => {
              playSound('pop');
              setSelectedCategory(cat.id);
            }}
            className={`px-4 py-2 rounded-2xl text-xs font-bold font-fredoka transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-sky-500 text-white shadow-md'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-sky-50'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Sentences List */}
      <div className="space-y-6">
        {filteredSentences.map((item, idx) => (
          <div
            key={item.id}
            id={`sentence-row-${item.id}`}
            className="bg-white rounded-3xl border-2 border-sky-100 p-6 shadow-sm hover:shadow-md transition-all hover:border-sky-300"
          >
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
              <span className="text-xs font-bold text-sky-700 bg-sky-50 px-3 py-1 rounded-full uppercase tracking-wider">
                Phrase #{idx + 1} • {item.category}
              </span>
            </div>

            {/* 4 Multi-Language Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 1. English */}
              <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm">🇬🇧</span>
                    <span className="text-xs font-bold text-slate-500 uppercase">English</span>
                  </div>
                  <p className="text-lg font-bold text-slate-900 font-fredoka">{item.english}</p>
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
                className="bg-emerald-50/70 rounded-2xl p-4 border border-emerald-200 flex flex-col justify-between"
                dir="rtl"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm">🇵🇰</span>
                    <span className="text-xs font-bold text-emerald-800 uppercase font-sans">اردو (Urdu)</span>
                  </div>
                  <p className="text-xl font-bold text-emerald-950 font-urdu leading-relaxed">{item.urdu}</p>
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
                className="bg-teal-50/70 rounded-2xl p-4 border border-teal-200 flex flex-col justify-between"
                dir="rtl"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm">🇸🇦</span>
                    <span className="text-xs font-bold text-teal-800 uppercase font-sans">العربية (Arabic)</span>
                  </div>
                  <p className="text-2xl font-bold text-teal-950 font-arabic leading-loose">{item.arabic}</p>
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
              <div className="bg-orange-50/70 rounded-2xl p-4 border border-orange-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm">🇮🇳</span>
                    <span className="text-xs font-bold text-orange-800 uppercase">हिंदी (Hindi)</span>
                  </div>
                  <p className="text-lg font-bold text-orange-950 font-hindi leading-relaxed">{item.hindi}</p>
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
        ))}
      </div>
    </div>
  );
};
