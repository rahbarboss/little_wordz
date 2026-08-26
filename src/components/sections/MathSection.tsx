import React, { useState } from 'react';
import { MathItem, MathTableRow } from '../../types.ts';
import { AudioButton } from '../AudioButton.tsx';
import { Sparkles, Calculator, Grid, HelpCircle, CheckCircle, XCircle, ArrowRight, RefreshCw } from 'lucide-react';
import { playSound, speakText } from '../../utils/audio.ts';

interface MathSectionProps {
  items: MathItem[];
}

export const MathSection: React.FC<MathSectionProps> = ({ items }) => {
  const [activeTab, setActiveTab] = useState<'numbers' | 'tables' | 'arithmetic'>('numbers');
  const [selectedTable, setSelectedTable] = useState<number>(2);
  const [tableVoiceLang, setTableVoiceLang] = useState<'en' | 'hi' | 'ur'>('en');

  // Interactive Arithmetic Quiz state
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [mathScore, setMathScore] = useState(0);

  const tabs = [
    { id: 'numbers' as const, label: 'Numbers 1 to 100', icon: '🔢', desc: 'Interactive sound board' },
    { id: 'tables' as const, label: 'Tables (2 to 20)', icon: '✖️', desc: 'Chant in 3 languages' },
    { id: 'arithmetic' as const, label: 'Basic Math Practice', icon: '➕➖', desc: 'Visual addition & subtraction' },
  ];

  // Helper to generate full 1-100 numbers dynamically if not all seeded
  const numbersList = Array.from({ length: 100 }, (_, i) => {
    const num = i + 1;
    const existing = items.find(it => it.type === 'number' && it.number === num);
    if (existing) return existing;

    // English names
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

  const arithmeticProblems = items.filter(it => it.type === 'arithmetic');
  const currentProblem = arithmeticProblems[currentProblemIndex] || arithmeticProblems[0];

  // Robust answer calculation
  const problemAnswer = currentProblem ? (
    currentProblem.answer !== undefined && currentProblem.answer !== null
      ? Number(currentProblem.answer)
      : (currentProblem.num1 !== undefined && currentProblem.num2 !== undefined
        ? (currentProblem.operator === '+' ? currentProblem.num1 + currentProblem.num2
          : currentProblem.operator === '-' ? currentProblem.num1 - currentProblem.num2
          : currentProblem.operator === '×' || currentProblem.operator === '*' ? currentProblem.num1 * currentProblem.num2
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
    if (isAnswerChecked) return;
    setSelectedAnswer(opt);
    setIsAnswerChecked(true);

    if (opt === problemAnswer) {
      playSound('correct');
      setMathScore(prev => prev + 1);
    } else {
      playSound('wrong');
    }
  };

  const handleNextProblem = () => {
    playSound('pop');
    setSelectedAnswer(null);
    setIsAnswerChecked(false);
    if (currentProblemIndex < arithmeticProblems.length - 1) {
      setCurrentProblemIndex(prev => prev + 1);
    } else {
      setCurrentProblemIndex(0);
    }
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
            Numbers, Tables & Arithmetic
          </h1>
          <p className="text-slate-500 text-sm">
            Learn to count 1 to 100, master multiplication tables 2 to 20, and solve fun visual math problems!
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
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

      {/* Tab 1: Numbers 1 to 100 Grid */}
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
                <span className="text-[10px] font-bold text-slate-600 group-hover:text-amber-900 truncate w-full text-center">
                  {numItem.nameEn}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Multiplication Tables (2 to 20) */}
      {activeTab === 'tables' && (
        <div className="space-y-6">
          {/* Table Selector Pills */}
          <div className="bg-white rounded-3xl border-2 border-yellow-200 p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="font-bold font-fredoka text-slate-900 text-lg">Select Multiplication Table (2–20):</h3>
                <p className="text-xs text-slate-500">Pick any table number to chant and memorize</p>
              </div>

              {/* Language Switcher for Tables */}
              <div className="flex items-center gap-1.5 bg-yellow-50 p-1.5 rounded-xl border border-yellow-200">
                <span className="text-xs font-bold text-slate-500 mr-1">Sound Lang:</span>
                {(['en', 'hi', 'ur'] as const).map(l => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => {
                      playSound('pop');
                      setTableVoiceLang(l);
                    }}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold font-fredoka uppercase transition-colors ${
                      tableVoiceLang === l ? 'bg-amber-500 text-white shadow-xs' : 'text-slate-600 hover:bg-white'
                    }`}
                  >
                    {l === 'en' ? 'English' : l === 'hi' ? 'Hindi' : 'Urdu'}
                  </button>
                ))}
              </div>
            </div>

            {/* Numbers 2 to 20 selector */}
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 19 }, (_, i) => i + 2).map(n => (
                <button
                  key={n}
                  type="button"
                  id={`btn-select-table-${n}`}
                  onClick={() => {
                    playSound('pop');
                    setSelectedTable(n);
                  }}
                  className={`w-11 h-11 rounded-2xl font-black font-fredoka text-base transition-all cursor-pointer ${
                    selectedTable === n
                      ? 'bg-amber-500 text-white shadow-md scale-110'
                      : 'bg-slate-100 hover:bg-amber-100 text-slate-700'
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          {/* Active Table Card */}
          <div className="bg-white rounded-3xl border-2 border-amber-200 p-6 sm:p-8 shadow-md">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-amber-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white font-black font-fredoka text-2xl flex items-center justify-center shadow-md">
                  {selectedTable}
                </div>
                <div>
                  <h2 className="text-2xl font-black font-fredoka text-slate-900">
                    Table of {selectedTable} (Multiplication Chart)
                  </h2>
                  <p className="text-xs text-slate-500">Tap any row to hear audio chant</p>
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

      {/* Tab 3: Basic Arithmetic Practice */}
      {activeTab === 'arithmetic' && (
        <div className="bg-white rounded-3xl border-2 border-yellow-200 p-6 sm:p-10 shadow-md max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
            <span className="px-3 py-1 bg-yellow-100 text-yellow-900 rounded-full text-xs font-bold font-fredoka">
              Problem {currentProblemIndex + 1} of {arithmeticProblems.length || 1}
            </span>
            <div className="flex items-center gap-1 text-sm font-bold text-amber-700">
              <span>Score:</span>
              <span className="px-2 py-0.5 bg-amber-100 rounded-md">{mathScore}</span>
            </div>
          </div>

          {currentProblem ? (
            <div>
              {/* Visual Counting Objects */}
              {currentProblem.visualObject && (
                <div className="my-4 p-4 bg-yellow-50 rounded-2xl border border-yellow-100 flex flex-col items-center gap-2">
                  <div className="text-xs font-semibold text-slate-500">Count the items:</div>
                  <div className="flex items-center justify-center gap-3 flex-wrap text-2xl">
                    <div className="flex gap-1">
                      {Array.from({ length: currentProblem.num1 || 1 }).map((_, i) => (
                        <span key={`a-${i}`} className="animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>
                          {currentProblem.visualObject}
                        </span>
                      ))}
                    </div>
                    <span className="font-black text-2xl text-amber-600">{currentProblem.operator}</span>
                    <div className="flex gap-1">
                      {Array.from({ length: currentProblem.num2 || 1 }).map((_, i) => (
                        <span key={`b-${i}`} className="animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>
                          {currentProblem.visualObject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Big Math Expression */}
              <div className="text-5xl sm:text-6xl font-black font-fredoka text-slate-900 my-6">
                {currentProblem.question}
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto my-6">
                {problemOptions.map(opt => {
                  const isSelected = selectedAnswer === opt;
                  const isCorrect = opt === problemAnswer;

                  let btnStyle = 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-yellow-100';
                  if (isAnswerChecked) {
                    if (isCorrect) {
                      btnStyle = 'bg-emerald-500 border-emerald-600 text-white scale-105 shadow-md';
                    } else if (isSelected) {
                      btnStyle = 'bg-rose-500 border-rose-600 text-white';
                    }
                  }

                  return (
                    <button
                      key={opt}
                      type="button"
                      id={`btn-math-opt-${opt}`}
                      disabled={isAnswerChecked}
                      onClick={() => handleSelectAnswer(opt)}
                      className={`p-5 rounded-2xl border-2 font-black font-fredoka text-3xl transition-all cursor-pointer ${btnStyle}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {/* Instant Feedback */}
              {isAnswerChecked && (
                <div className="mt-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 animate-fadeIn">
                  {selectedAnswer === problemAnswer ? (
                    <div className="flex items-center justify-center gap-2 text-emerald-700 font-bold font-fredoka text-xl">
                      <CheckCircle className="w-6 h-6 text-emerald-500" />
                      <span>🎉 CONGRATULATIONS! Correct Answer is {problemAnswer}</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2 text-rose-700 font-bold font-fredoka text-xl">
                      <XCircle className="w-6 h-6 text-rose-500" />
                      <span>Nice try! The correct answer is {problemAnswer}</span>
                    </div>
                  )}

                  <button
                    type="button"
                    id="btn-next-math-problem"
                    onClick={handleNextProblem}
                    className="mt-4 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full font-fredoka font-bold text-base shadow hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    Next Question →
                  </button>
                </div>
              )}
            </div>
          ) : (
            <p className="text-slate-500 font-fredoka">No arithmetic problems available.</p>
          )}
        </div>
      )}
    </div>
  );
};
