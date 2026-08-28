import React, { useState } from 'react';
import { GKItem } from '../../types.ts';
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
    home_ministers: { label: 'Home Affairs', icon: '🛡️', desc: 'Home Ministers (1947–2026)' },
    education_ministers: { label: 'Education', icon: '🎓', desc: 'Education Ministers (1947–2026)' },
    finance_ministers: { label: 'Finance', icon: '💰', desc: 'Finance Ministers (1947–2026)' },
    defence_ministers: { label: 'Defence', icon: '⚔️', desc: 'Defence Ministers (1947–2026)' },
    external_affairs_ministers: { label: 'External Affairs', icon: '🌐', desc: 'External Ministers (1947–2026)' },
    symbols: { label: 'National Symbols', icon: '🦚', desc: 'Emblems & Icons' },
    monuments: { label: 'Monuments', icon: '🏰', desc: 'Historic Wonders' },
    festivals: { label: 'Festivals', icon: '🪔', desc: 'Culture & Celebrations' },
    space: { label: 'Planets & Space', icon: '🚀', desc: 'Solar System & Cosmos' },
    animals: { label: 'Animals & Birds', icon: '🦁', desc: 'Wildlife & Nature' },
    general: { label: 'General GK', icon: '💡', desc: 'Everyday Knowledge' },
  };

  const safeItems = items || [];
  const primaryKeys = [
    'states',
    'pms',
    'presidents',
    'home_ministers',
    'education_ministers',
    'finance_ministers',
    'defence_ministers',
    'external_affairs_ministers',
    'symbols',
  ];
  const otherKeys = Array.from(new Set(safeItems.map(i => i.category))).filter(c => !primaryKeys.includes(c) && c !== 'ministers');
  const presentCategories = [...primaryKeys, ...otherKeys].filter(cat => {
    return safeItems.some(i => i.category === cat) || Object.keys(defaultCategories).includes(cat);
  });

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
        <span className="text-xs font-bold font-fredoka text-teal-900 ml-2">Language Display:</span>
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

      {/* Active Section Info Banner */}
      {(() => {
        const currentCat = categories.find(c => c.id === activeCategory);
        return (
          <div className="flex items-center justify-between bg-gradient-to-r from-teal-700 to-emerald-800 text-white px-5 py-3.5 rounded-2xl mb-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="text-3xl p-1.5 bg-white/10 rounded-xl">{currentCat?.icon || '🇮🇳'}</span>
              <div>
                <h2 className="text-lg font-bold font-fredoka tracking-tight">{currentCat?.label} (1947–2026)</h2>
                <p className="text-teal-100 text-xs">{currentCat?.desc} • {filteredItems.length} Leaders & Items</p>
              </div>
            </div>
            <span className="hidden sm:inline-block px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold font-fredoka">
              {filteredItems.length} Recorded
            </span>
          </div>
        );
      })()}

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

          const isLeaderCategory =
            item.category === 'pms' ||
            item.category === 'presidents' ||
            item.category.includes('minister');

          const isSymbolCategory = item.category === 'symbols';

          const subtitleLabel = isLeaderCategory
            ? selectedLanguage === 'hi'
              ? 'कार्यकाल'
              : selectedLanguage === 'ur'
              ? 'مدتِ خدمت'
              : 'Tenure / Period'
            : isSymbolCategory
            ? selectedLanguage === 'hi'
              ? 'राष्ट्रीय पहचान / नाम'
              : selectedLanguage === 'ur'
              ? 'قومی پہچان / نام'
              : 'Official Name / Identity'
            : selectedLanguage === 'hi'
            ? 'राजधानी'
            : selectedLanguage === 'ur'
            ? 'دارالحکومت'
            : 'Capital';

          const hasValidImageUrl =
            item.imageUrl &&
            (item.imageUrl.startsWith('http://') ||
              item.imageUrl.startsWith('https://') ||
              item.imageUrl.startsWith('/') ||
              item.imageUrl.startsWith('data:'));

          return (
            <div
              key={item.id}
              id={`gk-card-${item.id}`}
              className="bg-white rounded-3xl border-2 border-teal-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-teal-300 transition-all duration-300 flex flex-col justify-between"
              dir={selectedLanguage === 'ur' ? 'rtl' : 'ltr'}
            >
              <div>
                {hasValidImageUrl && (
                  <div className="relative w-full h-52 bg-slate-100 overflow-hidden border-b border-teal-100 group">
                    <img
                      src={item.imageUrl}
                      alt={displayTitle}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="absolute top-3 right-3 flex items-center gap-2">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-teal-900 rounded-full text-xs font-bold font-fredoka shadow-sm">
                        #{item.order || 1}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    {!hasValidImageUrl ? (
                      <span className="text-3xl p-2 bg-teal-50 rounded-2xl border border-teal-100">
                        {item.imageUrl || '🇮🇳'}
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-teal-50 text-teal-800 rounded-full text-xs font-bold font-fredoka border border-teal-100">
                        {selectedLanguage === 'hi'
                          ? 'राष्ट्रीय प्रतीक'
                          : selectedLanguage === 'ur'
                          ? 'قومی علامت'
                          : 'National Symbol'}
                      </span>
                    )}
                    {item.tenure && (
                      <span className="px-2.5 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold font-mono">
                        {item.tenure}
                      </span>
                    )}
                  </div>

                  <h3
                    className={`text-xl font-bold text-slate-900 ${
                      selectedLanguage === 'ur'
                        ? 'font-urdu text-2xl leading-normal'
                        : selectedLanguage === 'hi'
                        ? 'font-hindi text-xl'
                        : 'font-fredoka'
                    }`}
                  >
                    {displayTitle}
                  </h3>

                  {displayCapital && (
                    <div className="mt-3 p-3 bg-teal-50/80 rounded-2xl border border-teal-200">
                      <span className="text-xs font-bold text-teal-800 uppercase tracking-wide block">
                        {subtitleLabel}:
                      </span>
                      <span
                        className={`text-base font-bold text-slate-800 ${
                          selectedLanguage === 'ur'
                            ? 'font-urdu text-lg'
                            : selectedLanguage === 'hi'
                            ? 'font-hindi'
                            : 'font-fredoka'
                        }`}
                      >
                        {displayCapital}
                      </span>
                    </div>
                  )}

                  <p className="text-sm text-slate-600 mt-3.5 leading-relaxed font-sans">{displayDetail}</p>
                </div>
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
