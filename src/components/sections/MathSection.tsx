import React, { useState, useMemo } from 'react';
import { MathItem, MathTableRow } from '../../types.ts';
import { AudioButton } from '../AudioButton.tsx';
import { Sparkles, Calculator, CheckCircle, XCircle, ArrowRight, ArrowLeft, RefreshCw, Volume2, Award, Zap, Star } from 'lucide-react';
import { playSound, speakText } from '../../utils/audio.ts';

interface MathSectionProps {
  items: MathItem[];
}

export const MathSection: React.FC<MathSectionProps> = ({ items }) => {
  const [activeTab, setActiveTab] = useState<'numbers' | 'tables' | 'arithmetic'>('arithmetic');
  const [selectedTable, setSelectedTable] = useState<number>(2);
  const [tableVoiceLang, setTableVoiceLang] = useState<'en' | 'hi' | 'ur'>('en');

  // Interactive Arithmetic Quiz state
  const [selectedLevel, setSelectedLevel] = useState<number | 'all'>('all');
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [mathScore, setMathScore] = useState(0);
  const [answeredMap, setAnsweredMap] = useState<Record<string, { selected: number; isCorrect: boolean }>>({});

  const tabs = [
    { id: 'arithmetic' as const, label: 'Basic Math Practice', icon: '➕➖', desc: '50 Visual & Arithmetic MCQ Problems' },
    { id: 'numbers' as const, label: 'Numbers 1 to 100', icon: '🔢', desc: 'Interactive counting board' },
    { id: 'tables' as const, label: 'Tables (2 to 20)', icon: '✖️', desc: 'Multiplication chant in 3 languages' },
  ];

  // Helper to generate full 1-100 numbers dynamically if not all seeded
  const numbersList = Array.from({ length: 100 }, (_, i) => {
    const num = i + 1;
    const existing = items.find(it => it.type === 'number' && it.number === num);
    if (existing) return existing;

    const enNames = [
      '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
      'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty'
    ];
    return {
      id: `num-${num}`,
      type: 'number' as const,
      number: num,
      nameEn: enNames[num] || `Number ${num}`,
      nameHi: `संख्या ${num}`,
      nameUr: `نمبر ${num}`,
      order: num,
    };
  });

  // Multiplication table data generator for 2 to 20
  const generateTableRows = (tableNum: number): MathTableRow[] => {
    const custom = items.find(it => it.type === 'table' && it.tableNumber === tableNum);
    if (custom && custom.tableRows) return custom.tableRows;

    return Array.from({ length: 10 }, (_, i) => {
      const factor = i + 1;
      const result = tableNum * factor;
      return {
        factor,
        result,
        audioEn: `${tableNum} times ${factor} is ${result}`,
        audioHi: `${tableNum} गुना ${factor} बराबर ${result}`,
        audioUr: `${tableNum} ضرب ${factor} برابر ${result}`,
      };
    });
  };

  const allArithmeticProblems = useMemo(() => {
    return items.filter(it => it.type === 'arithmetic');
  }, [items]);

  const filteredProblems = useMemo(() => {
    if (selectedLevel === 'all') return allArithmeticProblems;
    return allArithmeticProblems.filter(p => p.level === selectedLevel);
  }, [allArithmeticProblems, selectedLevel]);

  const currentProblem = filteredProblems[currentProblemIndex] || filteredProblems[0] || allArithmeticProblems[0];

  // Robust answer calculation
  const problemAnswer = currentProblem ? (
    currentProblem.answer !== undefined && currentProblem.answer !== null
      ? Number(currentProblem.answer)
      : (currentProblem.num1 !== undefined && currentProblem.num2 !== undefined
        ? (currentProblem.operator === '+' ? currentProblem.num1 + currentProblem.num2
          : currentProblem.operator === '-' ? currentProblem.num1 - currentProblem.num2
          : currentProblem.operator === '×' || currentProblem.operator === '*' || currentProblem.operator === 'x' ? currentProblem.num1 * currentProblem.num2
          : currentProblem.operator === '÷' || currentProblem.operator === '/' ? Math.floor(currentProblem.num1 / (currentProblem.num2 || 1))
          : 0)
        : 0)
  ) : 0;

  // Options resolution ensuring the correct answer is always among the 4 choices
  const problemOptions: number[] = (() => {
    if (!currentProblem) return [];
    const rawOpts = currentProblem.options;
    if (Array.isArray(rawOpts) && rawOpts.length >= 2 && rawOpts.map(Number).includes(problemAnswer)) {
      return rawOpts.map(Number);
    }
    const optSet = new Set<number>([problemAnswer]);
    const offsets = [-2, 2, 4, -1, 1, 3, -3, 5, 6, -4];
    for (const off of offsets) {
      if (optSet.size >= 4) break;
      const val = problemAnswer + off;
      if (val >= 0) optSet.add(val);
    }
    let extra = 1;
    while (optSet.size < 4) {
      optSet.add(problemAnswer + extra);
      extra++;
    }
    return Array.from(optSet).sort((a, b) => a - b);
  })();

  const handleSelectAnswer = (opt: number) => {
    if (isAnswerChecked || !currentProblem) return;
    const isCorrect = opt === problemAnswer;
    setSelectedAnswer(opt);
    setIsAnswerChecked(true);

    setAnsweredMap(prev => ({
      ...prev,
      [currentProblem.id]: { selected: opt, isCorrect }
    }));

    if (isCorrect) {
      playSound('correct');
      setMathScore(prev => prev + 1);
    } else {
      playSound('wrong');
    }
  };

  const handleJumpToProblem = (index: number) => {
    playSound('pop');
    setCurrentProblemIndex(index);
    const targetProb = filteredProblems[index];
    if (targetProb && answeredMap[targetProb.id]) {
      setSelectedAnswer(answeredMap[targetProb.id].selected);
      setIsAnswerChecked(true);
    } else {
      setSelectedAnswer(null);
      setIsAnswerChecked(false);
    }
  };

  const handleNextProblem = () => {
    playSound('pop');
    if (currentProblemIndex < filteredProblems.length - 1) {
      const nextIndex = currentProblemIndex + 1;
      setCurrentProblemIndex(nextIndex);
      const nextProb = filteredProblems[nextIndex];
      if (nextProb && answeredMap[nextProb.id]) {
        setSelectedAnswer(answeredMap[nextProb.id].selected);
        setIsAnswerChecked(true);
      } else {
        setSelectedAnswer(null);
        setIsAnswerChecked(false);
      }
    } else {
      setCurrentProblemIndex(0);
      setSelectedAnswer(null);
      setIsAnswerChecked(false);
    }
  };

  const handlePrevProblem = () => {
    playSound('pop');
    if (currentProblemIndex > 0) {
      const prevIndex = currentProblemIndex - 1;
      setCurrentProblemIndex(prevIndex);
      const prevProb = filteredProblems[prevIndex];
      if (prevProb && answeredMap[prevProb.id]) {
        setSelectedAnswer(answeredMap[prevProb.id].selected);
        setIsAnswerChecked(true);
      } else {
        setSelectedAnswer(null);
        setIsAnswerChecked(false);
      }
    }
  };

  const handleResetPractice = () => {
    playSound('pop');
    setCurrentProblemIndex(0);
    setSelectedAnswer(null);
    setIsAnswerChecked(false);
    setMathScore(0);
    setAnsweredMap({});
  };

  const levelBadges: Record<number, { name: string; color: string; bg: string; border: string }> = {
    1: { name: 'Level 1: Easy (Single Digits)', color: 'text-emerald-800', bg: 'bg-emerald-100', border: 'border-emerald-300' },
    2: { name: 'Level 2: Medium (Double Digits)', color: 'text-amber-800', bg: 'bg-amber-100', border: 'border-amber-300' },
    3: { name: 'Level 3: Medium-Hard (Crossing 100s)', color: 'text-orange-800', bg: 'bg-orange-100', border: 'border-orange-300' },
    4: { name: 'Level 4: Hard (Heavier Math)', color: 'text-rose-800', bg: 'bg-rose-100', border: 'border-rose-300' },
    5: { name: 'Level 5: Expert (Large Numbers)', color: 'text-purple-800', bg: 'bg-purple-100', border: 'border-purple-300' },
  };

  const currentLevelInfo = currentProblem?.level ? levelBadges[currentProblem.level] : levelBadges[1];

  const getAudioNarrationText = () => {
    if (!currentProblem) return '';
    const op = currentProblem.operator === '+' ? 'plus'
      : currentProblem.operator === '-' ? 'minus'
      : currentProblem.operator === '×' || currentProblem.operator === 'x' || currentProblem.operator === '*' ? 'times'
      : 'divided by';
    return `What is ${currentProblem.num1} ${op} ${currentProblem.num2}?`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 text-yellow-900 rounded-full text-xs font-bold font-fredoka uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5 text-yellow-600" />
            Little Mathematician Fun Lab
          </div>
          <h1 className="text-3xl font-black font-fredoka text-slate-800 tracking-tight">
            Mathematics & Arithmetic Practice
          </h1>
          <p className="text-slate-500 text-sm">
            Interactive Numbers 1-100, Multiplication Tables 2-20, and 50 Guided Arithmetic Problems!
          </p>
        </div>
      </div>

      {/* Primary Category Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        {tabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            id={`btn-math-tab-${tab.id}`}
            onClick={() => {
              playSound('pop');
              setActiveTab(tab.id);
            }}
            className={`p-4 rounded-2xl text-center border-2 transition-all cursor-pointer flex flex-col items-center justify-center ${
              activeTab === tab.id
                ? 'bg-amber-500 text-white border-amber-500 shadow-md scale-102'
                : 'bg-white text-slate-700 hover:bg-yellow-50 border-slate-200'
            }`}
          >
            <span className="text-3xl mb-1">{tab.icon}</span>
            <span className="font-fredoka font-bold text-base">{tab.label}</span>
            <span
              className={`text-xs mt-0.5 ${
                activeTab === tab.id ? 'text-amber-100' : 'text-slate-400'
              }`}
            >
              {tab.desc}
            </span>
          </button>
        ))}
      </div>

      {/* Tab 1: Basic Arithmetic Practice (50 Questions) */}
      {activeTab === 'arithmetic' && (
        <div className="space-y-6">
          {/* Level Filter Selector */}
          <div className="bg-white p-3 sm:p-4 rounded-2xl border-2 border-yellow-200 shadow-xs flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-bold font-fredoka text-slate-500 uppercase mr-1">Select Level:</span>
            {[
              { id: 'all' as const, label: 'All 50 Questions', icon: '🌟', count: allArithmeticProblems.length },
              { id: 1 as const, label: 'Level 1: Easy', icon: '🟢', count: allArithmeticProblems.filter(p => p.level === 1).length || 10 },
              { id: 2 as const, label: 'Level 2: Medium', icon: '🟡', count: allArithmeticProblems.filter(p => p.level === 2).length || 10 },
              { id: 3 as const, label: 'Level 3: Med-Hard', icon: '🟠', count: allArithmeticProblems.filter(p => p.level === 3).length || 10 },
              { id: 4 as const, label: 'Level 4: Hard', icon: '🔴', count: allArithmeticProblems.filter(p => p.level === 4).length || 10 },
              { id: 5 as const, label: 'Level 5: Expert', icon: '🔥', count: allArithmeticProblems.filter(p => p.level === 5).length || 10 },
            ].map(lvl => (
              <button
                key={lvl.id}
                type="button"
                id={`btn-math-level-${lvl.id}`}
                onClick={() => {
                  playSound('pop');
                  setSelectedLevel(lvl.id);
                  setCurrentProblemIndex(0);
                  setSelectedAnswer(null);
                  setIsAnswerChecked(false);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-fredoka font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedLevel === lvl.id
                    ? 'bg-amber-500 text-white shadow-sm scale-105'
                    : 'bg-slate-100 hover:bg-yellow-100 text-slate-700'
                }`}
              >
                <span>{lvl.icon}</span>
                <span>{lvl.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${selectedLevel === lvl.id ? 'bg-amber-700 text-amber-100' : 'bg-slate-200 text-slate-600'}`}>
                  {lvl.count}
                </span>
              </button>
            ))}
          </div>

          {/* Quick Problem Pagination Jump Ribbon */}
          {filteredProblems.length > 1 && (
            <div className="bg-amber-50/70 p-3 rounded-2xl border border-amber-200 flex items-center gap-1.5 overflow-x-auto scrollbar-thin">
              <span className="text-xs font-bold text-amber-800 whitespace-nowrap mr-2">Q#:</span>
              {filteredProblems.map((prob, idx) => {
                const isCurrent = idx === currentProblemIndex;
                const status = answeredMap[prob.id];
                let badgeClass = 'bg-white text-slate-600 border-slate-200 hover:bg-amber-100';
                if (status) {
                  badgeClass = status.isCorrect
                    ? 'bg-emerald-500 text-white border-emerald-600 font-bold'
                    : 'bg-rose-500 text-white border-rose-600 font-bold';
                }
                if (isCurrent) {
                  badgeClass += ' ring-2 ring-amber-500 ring-offset-1 scale-110 shadow';
                }
                return (
                  <button
                    key={prob.id}
                    type="button"
                    onClick={() => handleJumpToProblem(idx)}
                    className={`min-w-[32px] h-8 rounded-lg border text-xs font-fredoka font-bold flex items-center justify-center transition-all cursor-pointer shrink-0 ${badgeClass}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          )}

          {/* Active Math Problem Card */}
          <div className="bg-white rounded-3xl border-2 border-yellow-200 p-6 sm:p-10 shadow-md max-w-2xl mx-auto text-center relative overflow-hidden">
            {/* Top Bar with Level Badge & Score */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-900 rounded-full text-xs font-bold font-fredoka">
                  Question {currentProblemIndex + 1} of {filteredProblems.length || 1}
                </span>
                {currentLevelInfo && (
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold font-fredoka border ${currentLevelInfo.bg} ${currentLevelInfo.color} ${currentLevelInfo.border}`}>
                    {currentLevelInfo.name}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-sm font-bold text-amber-700">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-400" />
                  <span>Score:</span>
                  <span className="px-2 py-0.5 bg-amber-100 rounded-md font-mono">{mathScore}</span>
                </div>
                <button
                  type="button"
                  onClick={handleResetPractice}
                  title="Reset Practice"
                  className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-all cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {currentProblem ? (
              <div>
                {/* Visual Object / Topic Banner */}
                <div className="my-3 p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-100 flex items-center justify-between px-4">
                  <div className="flex items-center gap-2 text-sm font-bold font-fredoka text-slate-700">
                    <span className="text-2xl">{currentProblem.visualObject || '🍎'}</span>
                    <span>{currentProblem.visualName || 'Visual Arithmetic'}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      playSound('pop');
                      speakText(getAudioNarrationText(), 'en');
                    }}
                    className="p-2 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-full transition-all cursor-pointer flex items-center gap-1 text-xs font-bold"
                  >
                    <Volume2 className="w-4 h-4 text-amber-700" />
                    <span>Listen</span>
                  </button>
                </div>

                {/* Visual Counting Objects for smaller single digits */}
                {currentProblem.num1 !== undefined && currentProblem.num2 !== undefined && currentProblem.num1 <= 10 && currentProblem.num2 <= 10 && currentProblem.visualObject && (
                  <div className="my-3 p-3 bg-yellow-50/70 rounded-2xl border border-yellow-100 flex flex-col items-center gap-1.5">
                    <div className="text-[11px] font-semibold text-slate-500">Visual Count:</div>
                    <div className="flex items-center justify-center gap-3 flex-wrap text-2xl">
                      <div className="flex gap-1">
                        {Array.from({ length: currentProblem.num1 }).map((_, i) => (
                          <span key={`a-${i}`} className="animate-bounce" style={{ animationDelay: `${i * 0.08}s` }}>
                            {currentProblem.visualObject}
                          </span>
                        ))}
                      </div>
                      <span className="font-black text-2xl text-amber-600">{currentProblem.operator}</span>
                      <div className="flex gap-1">
                        {Array.from({ length: currentProblem.num2 }).map((_, i) => (
                          <span key={`b-${i}`} className="animate-bounce" style={{ animationDelay: `${i * 0.08}s` }}>
                            {currentProblem.visualObject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Big Math Expression Display */}
                <div className="text-4xl sm:text-5xl md:text-6xl font-black font-fredoka text-slate-900 my-6 tracking-wide drop-shadow-xs">
                  {currentProblem.question}
                </div>

                {/* 4 MCQ Options Grid with A, B, C, D badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-md mx-auto my-6">
                  {problemOptions.map((opt, idx) => {
                    const isSelected = selectedAnswer === opt;
                    const isCorrect = opt === problemAnswer;
                    const letter = ['A', 'B', 'C', 'D'][idx] || String(idx + 1);

                    let btnStyle = 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-yellow-100 hover:border-yellow-400';
                    let letterBadge = 'bg-slate-200 text-slate-700';

                    if (isAnswerChecked) {
                      if (isCorrect) {
                        btnStyle = 'bg-emerald-500 border-emerald-600 text-white scale-102 shadow-md';
                        letterBadge = 'bg-emerald-700 text-emerald-100';
                      } else if (isSelected) {
                        btnStyle = 'bg-rose-500 border-rose-600 text-white';
                        letterBadge = 'bg-rose-700 text-rose-100';
                      }
                    }

                    return (
                      <button
                        key={opt}
                        type="button"
                        id={`btn-math-opt-${opt}`}
                        disabled={isAnswerChecked}
                        onClick={() => handleSelectAnswer(opt)}
                        className={`p-4 rounded-2xl border-2 font-black font-fredoka text-2xl transition-all cursor-pointer flex items-center justify-between ${btnStyle}`}
                      >
                        <span className={`text-xs px-2.5 py-1 rounded-lg font-bold ${letterBadge}`}>
                          {letter}
                        </span>
                        <span className="text-3xl flex-1 text-center font-mono">{opt}</span>
                        <div className="w-6 flex justify-end">
                          {isAnswerChecked && isCorrect && <CheckCircle className="w-5 h-5 text-emerald-200" />}
                          {isAnswerChecked && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-200" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Instant Feedback Box */}
                {isAnswerChecked && (
                  <div className="mt-4 p-4 rounded-2xl bg-amber-50 border border-amber-200 animate-fadeIn">
                    {selectedAnswer === problemAnswer ? (
                      <div className="flex flex-col items-center justify-center gap-1 text-emerald-700 font-bold font-fredoka text-lg">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-6 h-6 text-emerald-500" />
                          <span>🎉 SHABASH! Correct Answer is {problemAnswer}</span>
                        </div>
                        <p className="text-xs font-normal text-slate-600 mt-1 font-sans">
                          {currentProblem.num1} {currentProblem.operator} {currentProblem.num2} = {problemAnswer}
                        </p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-1 text-rose-700 font-bold font-fredoka text-lg">
                        <div className="flex items-center gap-2">
                          <XCircle className="w-6 h-6 text-rose-500" />
                          <span>Nice try! The correct answer is {problemAnswer}</span>
                        </div>
                        <p className="text-xs font-normal text-slate-600 mt-1 font-sans">
                          {currentProblem.num1} {currentProblem.operator} {currentProblem.num2} = {problemAnswer}
                        </p>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-center gap-3 mt-4">
                      {currentProblemIndex > 0 && (
                        <button
                          type="button"
                          id="btn-prev-math-problem"
                          onClick={handlePrevProblem}
                          className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full font-fredoka font-bold text-sm transition-all cursor-pointer flex items-center gap-1.5"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          Previous
                        </button>
                      )}

                      <button
                        type="button"
                        id="btn-next-math-problem"
                        onClick={handleNextProblem}
                        className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-full font-fredoka font-bold text-sm shadow hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-1.5"
                      >
                        <span>{currentProblemIndex < filteredProblems.length - 1 ? 'Next Question' : 'Start Over'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-slate-500 font-fredoka">No arithmetic problems available.</p>
            )}
          </div>
        </div>
      )}

      {/* Tab 2: Numbers 1 to 100 Grid */}
      {activeTab === 'numbers' && (
        <div className="bg-white rounded-3xl border-2 border-yellow-200 p-6 sm:p-8 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold font-fredoka text-slate-900">Numbers 1 to 100 Sound Board</h2>
              <p className="text-xs text-slate-500">Click any number to hear its pronunciation</p>
            </div>
          </div>

          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2.5">
            {numbersList.map(numItem => (
              <button
                key={numItem.id}
                type="button"
                id={`btn-num-${numItem.number}`}
                onClick={() => {
                  playSound('pop');
                  speakText(String(numItem.number), 'en');
                }}
                className="group p-3 bg-amber-50/70 hover:bg-amber-200/80 active:bg-amber-300 border border-amber-200 hover:border-amber-400 rounded-2xl flex flex-col items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer shadow-xs"
              >
                <span className="text-xl sm:text-2xl font-black font-fredoka text-slate-900 group-hover:text-amber-950">
                  {numItem.number}
                </span>
                <span className="text-[10px] font-bold text-amber-700 truncate w-full text-center">
                  {numItem.nameEn}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Tables (2 to 20) */}
      {activeTab === 'tables' && (
        <div className="space-y-6">
          {/* Table Selector Pills */}
          <div className="bg-white p-4 rounded-3xl border-2 border-yellow-200 shadow-sm">
            <div className="text-xs font-bold font-fredoka text-slate-400 uppercase tracking-wider mb-2">
              Select Table to Learn:
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
              {Array.from({ length: 19 }, (_, i) => i + 2).map(tbl => (
                <button
                  key={tbl}
                  type="button"
                  id={`btn-select-table-${tbl}`}
                  onClick={() => {
                    playSound('pop');
                    setSelectedTable(tbl);
                  }}
                  className={`min-w-[48px] h-12 rounded-2xl font-fredoka font-black text-lg flex items-center justify-center border-2 transition-all cursor-pointer shrink-0 ${
                    selectedTable === tbl
                      ? 'bg-amber-500 text-white border-amber-500 shadow-md scale-105'
                      : 'bg-amber-50/80 text-slate-700 border-amber-200 hover:bg-amber-100'
                  }`}
                >
                  {tbl}
                </button>
              ))}
            </div>
          </div>

          {/* Active Table Display */}
          <div className="bg-white rounded-3xl border-2 border-yellow-200 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
              <div>
                <h2 className="text-3xl font-black font-fredoka text-slate-900">
                  Table of {selectedTable}
                </h2>
                <p className="text-xs text-slate-500">Listen, repeat, and memorize</p>
              </div>

              {/* Language Voice Selector */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500 font-fredoka">Language:</span>
                <div className="inline-flex rounded-xl bg-amber-100 p-1">
                  {(['en', 'hi', 'ur'] as const).map(lang => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => {
                        playSound('pop');
                        setTableVoiceLang(lang);
                      }}
                      className={`px-3 py-1 rounded-lg text-xs font-bold font-fredoka cursor-pointer transition-all ${
                        tableVoiceLang === lang
                          ? 'bg-amber-500 text-white shadow-xs'
                          : 'text-amber-900 hover:text-amber-950'
                      }`}
                    >
                      {lang === 'en' ? 'English' : lang === 'hi' ? 'Hindi' : 'Urdu'}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                id="btn-play-full-table"
                onClick={() => {
                  playSound('pop');
                  const rows = generateTableRows(selectedTable);
                  const fullChant = rows.map(r => `${selectedTable} times ${r.factor} is ${r.result}`).join('. ');
                  speakText(fullChant, tableVoiceLang);
                }}
                className="px-4 py-2 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-slate-900 rounded-2xl font-fredoka font-bold text-sm shadow cursor-pointer transition-all hover:scale-105"
              >
                🔊 Read Full Table
              </button>
            </div>

            {/* Table Rows Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {generateTableRows(selectedTable).map(row => {
                const speechText =
                  tableVoiceLang === 'hi'
                    ? row.audioHi || `${selectedTable} गुना ${row.factor} बराबर ${row.result}`
                    : tableVoiceLang === 'ur'
                    ? row.audioUr || `${selectedTable} ضرب ${row.factor} برابر ${row.result}`
                    : row.audioEn || `${selectedTable} times ${row.factor} is ${row.result}`;

                return (
                  <div
                    key={row.factor}
                    onClick={() => {
                      playSound('pop');
                      speakText(speechText, tableVoiceLang);
                    }}
                    className="p-4 bg-amber-50/60 hover:bg-amber-100 border border-amber-200 rounded-2xl flex items-center justify-between transition-all hover:scale-102 cursor-pointer shadow-xs group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl sm:text-2xl font-black font-fredoka text-slate-900">
                        {selectedTable} × {row.factor} ={' '}
                        <span className="text-amber-600 font-bold">{row.result}</span>
                      </span>
                    </div>

                    <AudioButton
                      audioText={speechText}
                      language={tableVoiceLang}
                      size="sm"
                      variant="primary"
                      label=""
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
