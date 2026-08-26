import React, { useState } from 'react';
import { IslamicItem } from '../../types.ts';
import { AudioButton } from '../AudioButton.tsx';
import { Sparkles, Moon, Star, Droplets, Heart, Bookmark, CheckCircle2, Search, X } from 'lucide-react';
import { playSound } from '../../utils/audio.ts';

interface IslamicSectionProps {
  items: IslamicItem[];
}

export const IslamicSection: React.FC<IslamicSectionProps> = ({ items = [] }) => {
  const [activeTab, setActiveTab] = useState<string>('kalimas');
  const [duaSearchQuery, setDuaSearchQuery] = useState<string>('');

  const defaultTabs: Record<string, { label: string; icon: string; subtitle: string }> = {
    kalimas: { label: 'Six Kalimas', icon: '⭐', subtitle: 'The 6 Pillars of Islamic Creed' },
    wudu: { label: 'Wudu Guide', icon: '💧', subtitle: 'Step-by-Step Cleanliness' },
    salah: { label: 'Salah (Namaz)', icon: '🕌', subtitle: 'How to Pray Five Daily Prayers' },
    duas: { label: 'Daily Duas', icon: '🤲', subtitle: '34+ Daily Duas & Supplications' },
    pillars: { label: 'Pillars of Islam', icon: '🕋', subtitle: '5 Pillars of Faith' },
    names_of_allah: { label: 'Names of Allah', icon: '✨', subtitle: '99 Beautiful Names' },
    prophets: { label: 'Stories of Prophets', icon: '📜', subtitle: 'Lessons from Prophets' },
    manners: { label: 'Islamic Manners', icon: '🌸', subtitle: 'Etiquette & Adab' },
    general: { label: 'General Knowledge', icon: '💡', subtitle: 'Islamic Essentials' },
  };

  const safeItems = items || [];
  
  // Extract all unique categories present in items plus default tabs
  const presentCategories = Array.from(new Set([...Object.keys(defaultTabs).slice(0, 4), ...safeItems.map(i => i.category)]));

  const tabs = presentCategories.map(cat => {
    const info = defaultTabs[cat] || {
      label: cat.charAt(0).toUpperCase() + cat.slice(1).replace(/_/g, ' '),
      icon: '📖',
      subtitle: `${cat.replace(/_/g, ' ')} lessons`,
    };
    return {
      id: cat,
      label: info.label,
      icon: info.icon,
      subtitle: info.subtitle,
    };
  });

  const filteredItems = safeItems.filter(item => item.category === activeTab).sort((a, b) => (a.order || 0) - (b.order || 0));

  const filteredDuas = filteredItems.filter(item => {
    if (!duaSearchQuery.trim()) return true;
    const q = duaSearchQuery.toLowerCase();
    return (
      (item.title && item.title.toLowerCase().includes(q)) ||
      (item.titleArabic && item.titleArabic.toLowerCase().includes(q)) ||
      (item.arabicText && item.arabicText.includes(duaSearchQuery)) ||
      (item.translationUrdu && item.translationUrdu.includes(duaSearchQuery)) ||
      (item.translationEnglish && item.translationEnglish.toLowerCase().includes(q))
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-900 rounded-full text-xs font-bold font-fredoka uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            Deen & Islamic Knowledge Academy
          </div>
          <h1 className="text-3xl font-black font-fredoka text-slate-800 tracking-tight">
            Islamic Studies for Kids
          </h1>
          <p className="text-slate-500 text-sm">
            Learn the 6 Kalimas, practical step-by-step Wudu & Salah, and beautiful daily Masnoon Duas.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-8">
        {tabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            id={`btn-islamic-tab-${tab.id}`}
            onClick={() => {
              playSound('pop');
              setActiveTab(tab.id);
            }}
            className={`flex-1 min-w-[130px] p-3.5 rounded-2xl text-center border-2 transition-all cursor-pointer flex flex-col items-center justify-center ${
              activeTab === tab.id
                ? 'bg-purple-600 text-white border-purple-600 shadow-md scale-102'
                : 'bg-white text-slate-700 hover:bg-purple-50 border-slate-200'
            }`}
          >
            <span className="text-2xl mb-1">{tab.icon}</span>
            <span className="font-fredoka font-bold text-sm sm:text-base">{tab.label}</span>
            <span
              className={`text-[10px] font-medium mt-0.5 truncate w-full ${
                activeTab === tab.id ? 'text-purple-100' : 'text-slate-400'
              }`}
            >
              {tab.subtitle}
            </span>
          </button>
        ))}
      </div>

      {/* Content Rendering by Active Tab */}

      {/* 1. Six Kalimas */}
      {activeTab === 'kalimas' && (
        <div className="space-y-6">
          {filteredItems.map((kalima, idx) => (
            <div
              key={kalima.id}
              id={`kalima-card-${kalima.id}`}
              className="bg-white rounded-3xl border-2 border-purple-100 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-purple-50">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-2xl bg-purple-600 text-white font-fredoka font-bold text-base flex items-center justify-center shadow-xs">
                    {idx + 1}
                  </span>
                  <div>
                    <h2 className="text-xl font-bold font-fredoka text-slate-900">{kalima.title}</h2>
                    {kalima.titleArabic && (
                      <span className="text-sm font-arabic font-bold text-purple-700">{kalima.titleArabic}</span>
                    )}
                  </div>
                </div>

                <AudioButton
                  audioUrl={kalima.audioUrl}
                  audioText={kalima.arabicText}
                  language="ar"
                  size="md"
                  variant="primary"
                  label="Recite Kalima"
                />
              </div>

              {/* Large Arabic Text */}
              <div className="bg-purple-50/60 rounded-2xl p-6 my-4 text-center border border-purple-100" dir="rtl">
                <p className="text-3xl sm:text-4xl font-arabic text-purple-950 font-bold leading-loose">
                  {kalima.arabicText}
                </p>
              </div>

              {/* Pronunciation & Meaning */}
              <div className="space-y-3 mt-4 text-sm">
                {kalima.pronunciation && (
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                    <span className="font-bold text-slate-500 uppercase text-xs block mb-1">Pronunciation:</span>
                    <p className="font-mono text-slate-800 italic">{kalima.pronunciation}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {kalima.translationEnglish && (
                    <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200/60">
                      <span className="font-bold text-amber-800 uppercase text-xs block mb-1">English Meaning:</span>
                      <p className="text-slate-700 leading-relaxed">{kalima.translationEnglish}</p>
                    </div>
                  )}

                  {kalima.translationUrdu && (
                    <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200/60 text-right" dir="rtl">
                      <span className="font-bold text-emerald-800 uppercase text-xs block mb-1 font-sans">اردو ترجمہ:</span>
                      <p className="font-urdu text-emerald-950 text-base leading-relaxed">{kalima.translationUrdu}</p>
                    </div>
                  )}
                </div>

                {kalima.translationHindi && (
                  <div className="p-3.5 bg-orange-50/60 rounded-xl border border-orange-200/60">
                    <span className="font-bold text-orange-800 uppercase text-xs block mb-1">हिंदी अर्थ:</span>
                    <p className="font-hindi text-slate-800 leading-relaxed">{kalima.translationHindi}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 2. Wudu Step-by-Step */}
      {activeTab === 'wudu' && (
        <div className="space-y-6">
          {filteredItems.map(wuduItem => (
            <div key={wuduItem.id} className="bg-white rounded-3xl border-2 border-sky-100 p-6 sm:p-8 shadow-sm">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <div className="text-5xl mb-2">💧</div>
                <h2 className="text-2xl sm:text-3xl font-black font-fredoka text-slate-900">{wuduItem.title}</h2>
                <p className="text-sm text-slate-500 mt-2">{wuduItem.translationEnglish}</p>
              </div>

              {/* Step cards grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {wuduItem.steps?.map(step => (
                  <div
                    key={step.stepNumber}
                    className="bg-sky-50/70 rounded-2xl p-5 border-2 border-sky-200 hover:border-sky-400 transition-all flex gap-4 items-start"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-sky-600 text-white font-fredoka font-bold text-lg flex items-center justify-center shrink-0 shadow-sm">
                      {step.stepNumber}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold font-fredoka text-slate-900 text-base">{step.title}</h3>
                        {step.arabicText && (
                          <span className="font-arabic font-bold text-sm text-sky-800">{step.arabicText}</span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{step.description}</p>
                      <div className="mt-3 flex justify-end">
                        <AudioButton
                          audioText={`${step.title}. ${step.description}`}
                          language="en"
                          size="sm"
                          variant="secondary"
                          label="Listen Step"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 3. Salah (Namaz) Guide */}
      {activeTab === 'salah' && (
        <div className="space-y-6">
          {filteredItems.map(salahItem => (
            <div key={salahItem.id} className="bg-white rounded-3xl border-2 border-purple-100 p-6 sm:p-8 shadow-sm">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <div className="text-5xl mb-2">🕌</div>
                <h2 className="text-2xl sm:text-3xl font-black font-fredoka text-slate-900">{salahItem.title}</h2>
                <p className="text-sm text-slate-500 mt-2">{salahItem.translationEnglish}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {salahItem.steps?.map(step => (
                  <div
                    key={step.stepNumber}
                    className="bg-purple-50/60 rounded-2xl p-5 border-2 border-purple-200 hover:border-purple-400 transition-all flex gap-4 items-start"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-purple-600 text-white font-fredoka font-bold text-lg flex items-center justify-center shrink-0 shadow-sm">
                      {step.stepNumber}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold font-fredoka text-slate-900 text-base">{step.title}</h3>
                      </div>
                      {step.arabicText && (
                        <p className="font-arabic font-bold text-purple-900 text-lg my-1.5" dir="rtl">
                          {step.arabicText}
                        </p>
                      )}
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{step.description}</p>
                      <div className="mt-3 flex justify-end">
                        <AudioButton
                          audioText={`${step.title}. ${step.description}`}
                          language="en"
                          size="sm"
                          variant="secondary"
                          label="Listen Step"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 4. Daily Duas */}
      {activeTab === 'duas' && (
        <div className="space-y-6">
          {/* Duas Search & Counter Header */}
          <div className="bg-white rounded-3xl p-4 sm:p-5 border-2 border-amber-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <span className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center text-xl shadow-inner">
                🤲
              </span>
              <div>
                <h2 className="text-base font-bold font-fredoka text-slate-800">
                  Comprehensive Daily Duas & Supplications
                </h2>
                <p className="text-xs text-slate-500">
                  {filteredItems.length} Masnoon Duas, Salah Supplications & Essential Prayers
                </p>
              </div>
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={duaSearchQuery}
                onChange={e => setDuaSearchQuery(e.target.value)}
                placeholder="Search dua (e.g. house, سفر, rain)..."
                className="w-full pl-9 pr-8 py-2 text-xs rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white text-slate-700"
              />
              {duaSearchQuery && (
                <button
                  onClick={() => setDuaSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {filteredDuas.length === 0 ? (
            <div className="bg-white rounded-3xl p-10 text-center border-2 border-dashed border-amber-200 text-slate-400">
              <Search className="w-10 h-10 mx-auto mb-2 text-amber-300" />
              <p className="font-bold text-sm text-slate-600">No Dua matching "{duaSearchQuery}" found</p>
              <button
                onClick={() => setDuaSearchQuery('')}
                className="mt-3 px-4 py-1.5 bg-amber-100 text-amber-800 rounded-xl text-xs font-bold font-fredoka hover:bg-amber-200"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredDuas.map((dua, index) => (
                <div
                  key={dua.id}
                  id={`dua-card-${dua.id}`}
                  className="bg-white rounded-3xl border-2 border-amber-100 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="w-7 h-7 rounded-xl bg-amber-500 text-white font-fredoka font-bold text-xs flex items-center justify-center shadow-sm">
                          {index + 1}
                        </span>
                        <h3 className="font-bold font-fredoka text-slate-900 text-base leading-snug">
                          {dua.title}
                        </h3>
                      </div>
                      <span className="text-xl">🤲</span>
                    </div>

                    <div className="bg-amber-50/70 rounded-2xl p-4 my-3 text-center border border-amber-200/60" dir="rtl">
                      <p className="text-2xl font-arabic text-amber-950 font-bold leading-relaxed">{dua.arabicText}</p>
                    </div>

                    {dua.pronunciation && (
                      <p className="text-xs font-mono text-slate-500 italic mb-2">"{dua.pronunciation}"</p>
                    )}

                    <div className="space-y-2 text-xs">
                      {dua.translationEnglish && (
                        <p className="text-slate-700 leading-normal">
                          <span className="font-bold text-amber-900">Meaning: </span>
                          {dua.translationEnglish}
                        </p>
                      )}
                      {dua.translationUrdu && (
                        <p className="font-urdu text-emerald-900 text-sm text-right leading-relaxed" dir="rtl">
                          {dua.translationUrdu}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex justify-end">
                    <AudioButton
                      audioUrl={dua.audioUrl}
                      audioText={dua.arabicText}
                      language="ar"
                      size="sm"
                      variant="primary"
                      label="Recite Dua"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 5. Additional / Custom Islamic Categories */}
      {activeTab !== 'kalimas' && activeTab !== 'wudu' && activeTab !== 'salah' && activeTab !== 'duas' && (
        <div className="space-y-6">
          {filteredItems.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border-2 border-dashed border-purple-200 text-slate-400">
              <Moon className="w-12 h-12 mx-auto mb-3 text-purple-300" />
              <p className="font-bold text-base text-slate-600">No lessons added in this category yet.</p>
              <p className="text-xs text-slate-400 mt-1">Admin can add lessons in this category from the Admin Portal.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredItems.map((item, idx) => (
                <div
                  key={item.id}
                  id={`custom-islamic-card-${item.id}`}
                  className="bg-white rounded-3xl border-2 border-purple-100 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="w-7 h-7 rounded-xl bg-purple-600 text-white font-fredoka font-bold text-xs flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <h3 className="font-bold font-fredoka text-slate-900 text-lg">{item.title}</h3>
                      </div>
                      {item.titleArabic && (
                        <span className="text-sm font-arabic font-bold text-purple-700">{item.titleArabic}</span>
                      )}
                    </div>

                    {item.arabicText && (
                      <div className="bg-purple-50/50 rounded-2xl p-4 my-3 text-center border border-purple-100/70" dir="rtl">
                        <p className="text-2xl font-arabic text-purple-950 font-bold leading-relaxed">
                          {item.arabicText}
                        </p>
                      </div>
                    )}

                    {item.pronunciation && (
                      <p className="text-xs font-mono text-slate-500 italic mb-2">"{item.pronunciation}"</p>
                    )}

                    <div className="space-y-2 text-xs">
                      {item.translationEnglish && (
                        <p className="text-slate-700 leading-normal">
                          <span className="font-bold text-purple-900">English: </span>
                          {item.translationEnglish}
                        </p>
                      )}
                      {item.translationUrdu && (
                        <p className="font-urdu text-emerald-900 text-sm text-right leading-relaxed" dir="rtl">
                          {item.translationUrdu}
                        </p>
                      )}
                      {item.translationHindi && (
                        <p className="font-hindi text-amber-900 text-xs mt-1">
                          {item.translationHindi}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex justify-end">
                    <AudioButton
                      audioUrl={item.audioUrl}
                      audioText={item.arabicText || item.title}
                      language="ar"
                      size="sm"
                      variant="primary"
                      label="Listen"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
