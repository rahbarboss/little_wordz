import React, { useState } from 'react';
import {
  Volume2,
  Play,
  Pause,
  Sparkles,
  ChevronRight,
  Calculator,
  Compass,
  Award,
  BookOpen,
} from 'lucide-react';
import { motion } from 'motion/react';
import { playSound, speakText, playItemAudio } from '../utils/audio.ts';

interface StudentHomeProps {
  onSelectSection: (section: string) => void;
  stats?: {
    totalSurahs: number;
    totalGames: number;
  };
}

export const StudentHome: React.FC<StudentHomeProps> = ({ onSelectSection, stats }) => {
  const [isPlayingDua, setIsPlayingDua] = useState(false);
  const [activeTableNum, setActiveTableNum] = useState<number>(2);
  const [isPlayingTable, setIsPlayingTable] = useState(false);

  // 8 Main Cards matching the screenshot perfectly
  const heroCards = [
    {
      id: 'alphabet-en',
      section: 'alphabet',
      title: 'English ABC',
      subtitle: 'Learn A to Z with phonics & audio tracing',
      tag: '4 LANGUAGES',
      iconText: 'abc',
      iconBg: 'bg-sky-100 text-sky-700',
      bottomBorder: 'border-b-amber-400',
      glowClass: 'group-hover:shadow-amber-200/50',
    },
    {
      id: 'alphabet-ur',
      section: 'alphabet',
      title: 'Urdu Alif-Bay',
      subtitle: 'Urdu Nastaliq & native pronunciation',
      tag: 'ا - ے',
      iconText: 'ا',
      iconBg: 'bg-emerald-100 text-emerald-700 font-urdu',
      bottomBorder: 'border-b-emerald-400',
      glowClass: 'group-hover:shadow-emerald-200/50',
    },
    {
      id: 'quran',
      section: 'quran',
      title: 'Holy Quran Recitation',
      subtitle: 'Ayah-by-Ayah audio & Ayat al-Kursi',
      tag: `${stats?.totalSurahs || 9} SURAHS`,
      iconEmoji: '📖',
      iconBg: 'bg-rose-100 text-rose-700',
      bottomBorder: 'border-b-rose-400',
      glowClass: 'group-hover:shadow-rose-200/50',
    },
    {
      id: 'alphabet-hi',
      section: 'alphabet',
      title: 'Hindi Varnamala',
      subtitle: 'Akshar, Swar & Vyanjan with audio',
      tag: 'स्वर-व्यंजन',
      iconText: 'क',
      iconBg: 'bg-indigo-100 text-indigo-700 font-hindi',
      bottomBorder: 'border-b-sky-400',
      glowClass: 'group-hover:shadow-sky-200/50',
    },
    {
      id: 'math-numbers',
      section: 'math',
      title: 'Numbers 1-100',
      subtitle: 'Counting matrix & interactive voice',
      tag: '1 TO 100',
      iconMatrix: ['1', '2', '3', '4'],
      iconBg: 'bg-amber-100 text-amber-700',
      bottomBorder: 'border-b-amber-400',
      glowClass: 'group-hover:shadow-amber-200/50',
    },
    {
      id: 'math-tables',
      section: 'math',
      title: 'Math Tables 2-20',
      subtitle: 'Voice recitation & multiplication practice',
      tag: 'TABLES 2-20',
      iconEmoji: '✖️',
      iconBg: 'bg-teal-100 text-teal-700',
      bottomBorder: 'border-b-teal-400',
      glowClass: 'group-hover:shadow-teal-200/50',
    },
    {
      id: 'islamic-kalimas',
      section: 'islamic',
      title: '6 Kalimas & Salah',
      subtitle: 'Wudu, Namaz postures & Daily Duas',
      tag: 'KALIMAS & DUAS',
      iconEmoji: '🕌',
      iconBg: 'bg-pink-100 text-pink-700',
      bottomBorder: 'border-b-pink-400',
      glowClass: 'group-hover:shadow-pink-200/50',
    },
    {
      id: 'gk-india',
      section: 'gk',
      title: 'India & World GK',
      subtitle: 'Continents, planets & national symbols',
      tag: 'SOLAR & INDIA',
      iconText: 'IN',
      iconBg: 'bg-cyan-100 text-cyan-700 font-black',
      bottomBorder: 'border-b-cyan-400',
      glowClass: 'group-hover:shadow-cyan-200/50',
    },
  ];

  const handlePlayDua = () => {
    playSound('star');
    setIsPlayingDua(true);
    speakText('Rabbi Zidni Ilma. O my Lord, increase me in knowledge.', 'ar');
    setTimeout(() => {
      speakText('O my Lord! Advance me in knowledge.', 'en');
      setIsPlayingDua(false);
    }, 2800);
  };

  const handlePlayTable = (num: number) => {
    playSound('pop');
    setActiveTableNum(num);
    setIsPlayingTable(true);
    const tableText = `${num} ones are ${num * 1}. ${num} twos are ${num * 2}. ${num} threes are ${num * 3}. ${num} fours are ${num * 4}. ${num} fives are ${num * 5}.`;
    speakText(tableText, 'en');
    setTimeout(() => {
      setIsPlayingTable(false);
    }, 4500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
      {/* 8 Primary Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8"
      >
        {heroCards.map(card => (
          <motion.div
            key={card.id}
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              playSound('pop');
              onSelectSection(card.section);
            }}
            id={`card-${card.id}`}
            className={`group bg-white hover:bg-slate-50/70 active:bg-slate-100 rounded-3xl p-6 sm:p-7 border border-slate-200/90 border-b-[6px] ${card.bottomBorder} shadow-sm hover:shadow-xl ${card.glowClass} transition-all duration-300 flex flex-col items-center text-center cursor-pointer relative select-none`}
          >
            {/* Top Center Icon Box */}
            <div className="relative z-10 mb-4">
              <div
                className={`w-14 h-14 ${card.iconBg} rounded-2xl flex items-center justify-center text-2xl shadow-xs group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300`}
              >
                {card.iconText && <span className="font-extrabold">{card.iconText}</span>}
                {card.iconEmoji && <span>{card.iconEmoji}</span>}
                {card.iconMatrix && (
                  <div className="grid grid-cols-2 gap-0.5 text-[10px] font-black leading-tight">
                    <span>{card.iconMatrix[0]}</span>
                    <span>{card.iconMatrix[1]}</span>
                    <span>{card.iconMatrix[2]}</span>
                    <span>{card.iconMatrix[3]}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Title - Stays dark slate with vivid indigo on hover, never white */}
            <h3 className="relative z-10 font-extrabold text-slate-900 group-hover:text-indigo-600 group-active:text-indigo-700 text-lg sm:text-xl tracking-tight mb-1.5 transition-colors duration-200">
              {card.title}
            </h3>

            {/* Subtitle / Description - Crisp dark slate-600 */}
            <p className="relative z-10 text-xs sm:text-sm text-slate-600 group-hover:text-slate-700 font-medium leading-relaxed mb-5 min-h-[2.5rem] line-clamp-2 transition-colors">
              {card.subtitle}
            </p>

            {/* Bottom Subtle Pill Badge */}
            <div className="relative z-10 mt-auto">
              <span className="inline-block px-3.5 py-1 bg-slate-100 group-hover:bg-slate-200/90 group-hover:text-slate-800 text-slate-600 text-[11px] font-extrabold tracking-wider uppercase rounded-full border border-slate-200 transition-colors">
                {card.tag}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Two Cinematic Interactive Feature Widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
        {/* Left Widget: Dua For Increasing Knowledge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 border-b-[6px] border-b-emerald-400 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
        >
          <div>
            {/* Header with Title & Audio Icon */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">🤲</span>
                <h4 className="text-xs sm:text-sm font-extrabold text-emerald-800 uppercase tracking-wider">
                  DUA FOR INCREASING KNOWLEDGE
                </h4>
              </div>

              <button
                type="button"
                onClick={handlePlayDua}
                className={`w-9 h-9 flex items-center justify-center rounded-full border transition-all cursor-pointer ${
                  isPlayingDua
                    ? 'bg-emerald-500 text-white border-emerald-600 animate-pulse shadow-md'
                    : 'bg-emerald-50 text-emerald-600 border-emerald-200 hover:bg-emerald-100'
                }`}
                title="Recite Dua in Arabic & English"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            {/* Large Arabic Calligraphy */}
            <div className="text-center py-5">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-arabic font-bold text-slate-800 tracking-wide text-emerald-950">
                رَّبِّ زِدْنِي عِلْمًا
              </div>
              <div className="text-xs sm:text-sm font-bold text-emerald-700 mt-2">
                "Rabbi Zidni 'Ilma"
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 text-center italic mt-1 font-medium">
              "O my Lord! Advance me in knowledge."
            </p>
            <div className="text-[11px] text-slate-400 text-center mt-1">
              Surah Ta-Ha (20:114)
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">Essential Daily Supplication</span>
            <button
              type="button"
              onClick={() => {
                playSound('pop');
                onSelectSection('islamic');
              }}
              className="text-xs font-bold text-emerald-600 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
            >
              <span>Explore All Duas</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

        {/* Right Widget: Multiplication Tables (2 - 20) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 border-b-[6px] border-b-indigo-400 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
        >
          <div>
            {/* Header with Title & Badge */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">🔢</span>
                <h4 className="text-xs sm:text-sm font-extrabold text-indigo-900 uppercase tracking-wider">
                  MULTIPLICATION TABLES (2 - 20)
                </h4>
              </div>

              <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-[11px] font-extrabold rounded-full border border-indigo-200/80">
                Voice Reciter
              </span>
            </div>

            {/* Title & Description */}
            <h3 className="text-base sm:text-lg font-extrabold text-slate-800 tracking-tight mt-1">
              Master table rhythms with skip-counting!
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 mb-4 leading-relaxed">
              Listen to multiplication tables row-by-row with interactive rhythm pills and practice quizzes.
            </p>

            {/* Quick Table Selector Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar">
              {[2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20].map(num => (
                <button
                  key={num}
                  type="button"
                  onClick={() => handlePlayTable(num)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    activeTableNum === num
                      ? 'bg-indigo-600 text-white shadow-sm scale-105'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {num}x
                </button>
              ))}
            </div>

            {/* Skip Counting Preview */}
            <div className="bg-slate-50 rounded-2xl p-3 mt-3 border border-slate-200/80 flex items-center justify-between">
              <div className="flex items-center gap-2 overflow-x-auto text-xs font-bold text-slate-700">
                <span className="text-indigo-600 font-extrabold text-xs">Table of {activeTableNum}:</span>
                <span>{activeTableNum * 1}</span> •
                <span>{activeTableNum * 2}</span> •
                <span>{activeTableNum * 3}</span> •
                <span>{activeTableNum * 4}</span> •
                <span>{activeTableNum * 5}</span> •
                <span>{activeTableNum * 6}</span>
              </div>

              <button
                type="button"
                onClick={() => handlePlayTable(activeTableNum)}
                className={`p-2 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${
                  isPlayingTable
                    ? 'bg-indigo-600 text-white animate-pulse'
                    : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                }`}
                title="Recite Table with Voice"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">Interactive Math Soundboard</span>
            <button
              type="button"
              onClick={() => {
                playSound('pop');
                onSelectSection('math');
              }}
              className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
            >
              <span>Full Math Lab</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
