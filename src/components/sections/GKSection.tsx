import React, { useState } from 'react';
import { GKItem } from '../../types.ts';
import { AudioButton } from '../AudioButton.tsx';
import { Sparkles, MapPin, Users, Award, Flag, Search, Filter } from 'lucide-react';
import { playSound } from '../../utils/audio.ts';

interface GKSectionProps {
  items: GKItem[];
}

export const GKSection: React.FC<GKSectionProps> = ({ items = [] }) => {
  const [activeCategory, setActiveCategory] = useState<string>('states');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'hi' | 'ur'>('en');

  const defaultCategories: Record<string, { label: string; icon: string; desc: string }> = {
    states: { label: 'States & Capitals', icon: '🗺️', desc: 'Indian geography' },
    pms: { label: 'Prime Ministers', icon: '🏛️', desc: 'Leaders of India' },
    presidents: { label: 'Presidents', icon: '🇮🇳', desc: 'Heads of State' },
    ministers: { label: 'Key Ministers', icon: '📚', desc: 'Ministers & Governance' },
    symbols: { label: 'National Symbols', icon: '🦚', desc: 'Emblems & Icons' },
    monuments: { label: 'Monuments', icon: '🏰', desc: 'Historic Wonders' },
    festivals: { label: 'Festivals', icon: '🪔', desc: 'Culture & Celebrations' },
    space: { label: 'Planets & Space', icon: '🚀', desc: 'Solar System & Cosmos' },
    animals: { label: 'Animals & Birds', icon: '🦁', desc: 'Wildlife & Nature' },
    general: { label: 'General GK', icon: '💡', desc: 'Everyday Knowledge' },
  };

  const safeItems = items || [];
  const presentCategories = Array.from(new Set([...Object.keys(defaultCategories).slice(0, 5), ...safeItems.map(i => i.category)]));

  const categories = presentCategories.map(cat => {
    const info = defaultCategories[cat] || {
      label: cat.charAt(0).toUpperCase() + cat.slice(1).replace(/_/g, ' '),
      icon: '🇮🇳',
      desc: `${cat.replace(/_/g, ' ')} topics`,
    };
    return {
      id: cat,
      label: info.label,
      icon: info.icon,
      desc: info.desc,
    };
  });

  const filteredItems = safeItems
    .filter(it => it.category === activeCategory)
    .filter(it => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        it.titleEn.toLowerCase().includes(q) ||
        it.titleHi.toLowerCase().includes(q) ||
        it.titleUr.toLowerCase().includes(q) ||
        (it.capitalEn && it.capitalEn.toLowerCase().includes(q))
      );
    })
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-100 text-teal-900 rounded-full text-xs font-bold font-fredoka uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            Incredible India GK Academy
          </div>
          <h1 className="text-3xl font-black font-fredoka text-slate-800 tracking-tight">
            General Knowledge (India Special)
          </h1>
          <p className="text-slate-500 text-sm">
            Learn Indian States, Capitals, Great Leaders, and National Symbols in English, Hindi, and Urdu!
          </p>
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            id="search-gk-input"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search state, leader, symbol..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-teal-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-xs"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2.5 mb-6">
        {categories.map(cat => (
          <button
            key={cat.id}
            type="button"
            id={`btn-gk-tab-${cat.id}`}
            onClick={() => {
              playSound('pop');
              setActiveCategory(cat.id);
            }}
            className={`flex-1 min-w-[130px] p-3 rounded-2xl text-center border-2 transition-all cursor-pointer flex flex-col items-center justify-center ${
              activeCategory === cat.id
                ? 'bg-teal-600 text-white border-teal-600 shadow-md scale-102'
                : 'bg-white text-slate-700 hover:bg-teal-50 border-slate-200'
            }`}
          >
            <span className="text-2xl mb-1">{cat.icon}</span>
            <span className="font-fredoka font-bold text-sm">{cat.label}</span>
            <span
              className={`text-[10px] font-medium mt-0.5 truncate w-full ${
                activeCategory === cat.id ? 'text-teal-100' : 'text-slate-400'
              }`}
            >
              {cat.desc}
            </span>
          </button>
        ))}
      </div>

      {/* Language Switcher for GK Content */}
      <div className="flex items-center justify-between mb-6 bg-teal-50 p-2.5 rounded-2xl border border-teal-200">
        <span className="text-xs font-bold font-fredoka text-teal-900 ml-2">Language Display & Voice:</span>
        <div className="flex gap-2">
          {(['en', 'hi', 'ur'] as const).map(l => (
            <button
              key={l}
              type="button"
              id={`btn-gk-lang-${l}`}
              onClick={() => {
                playSound('pop');
                setSelectedLanguage(l);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold font-fredoka uppercase transition-all ${
                selectedLanguage === l
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-teal-100'
              }`}
            >
              {l === 'en' ? '🇬🇧 English' : l === 'hi' ? '🇮🇳 Hindi' : '🇵🇰 Urdu'}
            </button>
          ))}
        </div>
      </div>

      {/* GK Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(item => {
          const displayTitle =
            selectedLanguage === 'hi'
              ? item.titleHi || item.titleEn
              : selectedLanguage === 'ur'
              ? item.titleUr || item.titleEn
              : item.titleEn;

          const displayCapital =
            selectedLanguage === 'hi'
              ? item.capitalHi || item.capitalEn
              : selectedLanguage === 'ur'
              ? item.capitalUr || item.capitalEn
              : item.capitalEn;

          const displayDetail =
            selectedLanguage === 'hi'
              ? item.detailHi || item.detailEn
              : selectedLanguage === 'ur'
              ? item.detailUr || item.detailEn
              : item.detailEn;

          const audioSpeech = `${displayTitle}. ${
            displayCapital ? `Capital is ${displayCapital}. ` : ''
          }${displayDetail}`;

          return (
            <div
              key={item.id}
              id={`gk-card-${item.id}`}
              className="bg-white rounded-3xl border-2 border-teal-100 p-6 shadow-sm hover:shadow-xl hover:border-teal-300 transition-all duration-300 flex flex-col justify-between"
              dir={selectedLanguage === 'ur' ? 'rtl' : 'ltr'}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl p-2 bg-teal-50 rounded-2xl border border-teal-100">
                    {item.imageUrl || '🇮🇳'}
                  </span>
                  {item.tenure && (
                    <span className="px-2.5 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold font-mono">
                      {item.tenure}
                    </span>
                  )}
                </div>

                <h3
                  className={`text-xl font-bold text-slate-900 ${
                    selectedLanguage === 'ur'
                      ? 'font-urdu text-2xl'
                      : selectedLanguage === 'hi'
                      ? 'font-hindi'
                      : 'font-fredoka'
                  }`}
                >
                  {displayTitle}
                </h3>

                {displayCapital && (
                  <div className="mt-2 p-2.5 bg-teal-50/70 rounded-xl border border-teal-200">
                    <span className="text-xs font-bold text-teal-800 uppercase block">Capital:</span>
                    <span
                      className={`text-base font-bold text-slate-800 ${
                        selectedLanguage === 'ur'
                          ? 'font-urdu'
                          : selectedLanguage === 'hi'
                          ? 'font-hindi'
                          : 'font-fredoka'
                      }`}
                    >
                      {displayCapital}
                    </span>
                  </div>
                )}

                <p className="text-xs text-slate-600 mt-3 leading-relaxed font-sans">{displayDetail}</p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex justify-end">
                <AudioButton
                  audioUrl={item.audioUrl}
                  audioText={audioSpeech}
                  language={selectedLanguage}
                  size="sm"
                  variant="primary"
                  label="Listen Fact"
                  className="w-full justify-center"
                />
              </div>
            </div>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12 bg-white rounded-3xl border border-teal-100 p-6">
          <p className="text-slate-500 font-fredoka text-lg">No GK items found in this section.</p>
        </div>
      )}
    </div>
  );
};
