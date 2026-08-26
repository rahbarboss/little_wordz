import React, { useState } from 'react';
import { QuizItem, QuizQuestion } from '../../types.ts';
import { AudioButton } from '../AudioButton.tsx';
import { Sparkles, Gamepad2, Trophy, Star, CheckCircle2, XCircle, ArrowRight, RotateCcw, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playSound, speakText } from '../../utils/audio.ts';

interface GamesSectionProps {
  quizzes: QuizItem[];
  onEarnStars: (amount: number) => void;
}

export const GamesSection: React.FC<GamesSectionProps> = ({ quizzes = [], onEarnStars }) => {
  const [selectedQuiz, setSelectedQuiz] = useState<QuizItem | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Games' },
    { id: 'english', label: 'English' },
    { id: 'urdu', label: 'Urdu' },
    { id: 'arabic', label: 'Arabic' },
    { id: 'hindi', label: 'Hindi' },
    { id: 'quran', label: 'Quran' },
    { id: 'islamic', label: 'Islamic Studies' },
    { id: 'math', label: 'Math' },
    { id: 'gk', label: 'General Knowledge' },
  ];

  const safeQuizzes = quizzes || [];
  const publishedQuizzes = safeQuizzes.filter(q => q.isPublished !== false);
  const filteredQuizzes = publishedQuizzes.filter(q =>
    activeCategoryFilter === 'all' ? true : q.category === activeCategoryFilter
  );

  const startQuiz = (quiz: QuizItem) => {
    playSound('pop');
    setSelectedQuiz(quiz);
    setCurrentQuestionIndex(0);
    setSelectedOptionIndex(null);
    setIsAnswerChecked(false);
    setScore(0);
    setIsQuizCompleted(false);
  };

  const handleSelectOption = (index: number) => {
    if (isAnswerChecked || !selectedQuiz) return;
    setSelectedOptionIndex(index);
    setIsAnswerChecked(true);

    const question = selectedQuiz.questions[currentQuestionIndex];
    if (index === question.correctOptionIndex) {
      playSound('correct');
      setScore(prev => prev + 1);
      onEarnStars(1);

      // Trigger colorful kid confetti!
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#f59e0b', '#10b981', '#3b82f6', '#ec4899', '#8b5cf6'],
        });
      } catch {}
    } else {
      playSound('wrong');
    }
  };

  const handleNextQuestion = () => {
    playSound('pop');
    if (!selectedQuiz) return;

    if (currentQuestionIndex < selectedQuiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOptionIndex(null);
      setIsAnswerChecked(false);
    } else {
      setIsQuizCompleted(true);
      playSound('fanfare');
      onEarnStars(2); // bonus stars for finishing
      try {
        confetti({
          particleCount: 150,
          spread: 100,
          origin: { y: 0.5 },
        });
      } catch {}
    }
  };

  const restartCurrentQuiz = () => {
    if (selectedQuiz) {
      startQuiz(selectedQuiz);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-fuchsia-100 text-fuchsia-900 rounded-full text-xs font-bold font-fredoka uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5 text-fuchsia-600" />
            Little Mindz Champion Arena
          </div>
          <h1 className="text-3xl font-black font-fredoka text-slate-800 tracking-tight">
            MCQ Games & Quizzes
          </h1>
          <p className="text-slate-500 text-sm">
            Play fun quizzes for all subjects, earn stars, and see friendly explanations!
          </p>
        </div>

        {selectedQuiz && (
          <button
            type="button"
            onClick={() => {
              playSound('pop');
              setSelectedQuiz(null);
            }}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-fredoka font-semibold text-sm transition-colors cursor-pointer"
          >
            ← Back to All Games
          </button>
        )}
      </div>

      {!selectedQuiz ? (
        /* Quiz Catalog Screen */
        <div>
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-8 overflow-x-auto pb-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                type="button"
                id={`btn-game-cat-${cat.id}`}
                onClick={() => {
                  playSound('pop');
                  setActiveCategoryFilter(cat.id);
                }}
                className={`px-4 py-2 rounded-2xl text-xs font-bold font-fredoka transition-all cursor-pointer ${
                  activeCategoryFilter === cat.id
                    ? 'bg-fuchsia-600 text-white shadow-md scale-105'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-fuchsia-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quizzes Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredQuizzes.map(quiz => (
              <div
                key={quiz.id}
                id={`quiz-card-${quiz.id}`}
                onClick={() => startQuiz(quiz)}
                className="group bg-white rounded-3xl border-2 border-fuchsia-100 p-6 shadow-sm hover:shadow-xl hover:border-fuchsia-300 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-fuchsia-50 text-fuchsia-600 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                      🎮
                    </div>
                    <span className="px-3 py-1 bg-fuchsia-50 text-fuchsia-700 rounded-full text-xs font-bold uppercase tracking-wider font-fredoka">
                      {quiz.questions.length} Questions
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-fredoka text-slate-900 mb-1 group-hover:text-fuchsia-600 transition-colors">
                    {quiz.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-400 mb-2">{quiz.subsection}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-fuchsia-600">Start Quiz 🚀</span>
                  <div className="w-8 h-8 rounded-full bg-fuchsia-600 text-white flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredQuizzes.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
              <Gamepad2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="font-fredoka text-lg text-slate-500">No quizzes found in this category.</p>
            </div>
          )}
        </div>
      ) : isQuizCompleted ? (
        /* Final Score & Celebration Screen */
        <div className="max-w-xl mx-auto bg-white rounded-3xl border-4 border-amber-300 p-8 text-center shadow-2xl animate-scaleIn">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 text-amber-900 mx-auto flex items-center justify-center text-5xl shadow-lg mb-4 animate-bounce">
            🏆
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Quiz Completed</span>
          <h2 className="text-3xl sm:text-4xl font-black font-fredoka text-slate-900 mt-1 mb-2">
            Outstanding Job! 🎉
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            You completed <strong>{selectedQuiz.title}</strong>
          </p>

          <div className="p-6 bg-amber-50 rounded-2xl border border-amber-200 my-6">
            <div className="text-sm font-semibold text-amber-800 mb-1">Your Final Score</div>
            <div className="text-5xl font-black font-fredoka text-amber-600">
              {score} / {selectedQuiz.questions.length}
            </div>
            <div className="flex items-center justify-center gap-1 mt-3 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-7 h-7 ${
                    i < Math.round((score / selectedQuiz.questions.length) * 5)
                      ? 'fill-amber-400 text-amber-500'
                      : 'text-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              type="button"
              id="btn-retry-quiz"
              onClick={restartCurrentQuiz}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-full font-fredoka font-bold text-sm transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" /> Play Again
            </button>
            <button
              type="button"
              id="btn-choose-other-quiz"
              onClick={() => {
                playSound('pop');
                setSelectedQuiz(null);
              }}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded-full font-fredoka font-bold text-sm shadow-md transition-all cursor-pointer hover:scale-105"
            >
              Explore More Games →
            </button>
          </div>
        </div>
      ) : (
        /* Active Question Gameplay Screen */
        <div className="max-w-2xl mx-auto bg-white rounded-3xl border-2 border-fuchsia-200 p-6 sm:p-8 shadow-lg">
          {/* Progress Indicator */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-fuchsia-600">
                {selectedQuiz.title}
              </span>
              <div className="text-sm font-bold text-slate-700 font-fredoka">
                Question {currentQuestionIndex + 1} of {selectedQuiz.questions.length}
              </div>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-800 rounded-full text-xs font-bold border border-amber-200">
              <Star className="w-4 h-4 text-amber-500 fill-amber-400" />
              <span>Score: {score}</span>
            </div>
          </div>

          {/* Question Box */}
          {selectedQuiz.questions[currentQuestionIndex] && (
            <div>
              {/* Question Text */}
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-black font-fredoka text-slate-900 leading-tight">
                  {selectedQuiz.questions[currentQuestionIndex].questionText}
                </h2>

                {/* Multilingual question subtitles if present */}
                {selectedQuiz.questions[currentQuestionIndex].questionTextUrdu && (
                  <p className="text-xl font-urdu text-emerald-900 mt-2 text-right" dir="rtl">
                    {selectedQuiz.questions[currentQuestionIndex].questionTextUrdu}
                  </p>
                )}
                {selectedQuiz.questions[currentQuestionIndex].questionTextHindi && (
                  <p className="text-base font-hindi text-orange-900 mt-1">
                    {selectedQuiz.questions[currentQuestionIndex].questionTextHindi}
                  </p>
                )}
                {selectedQuiz.questions[currentQuestionIndex].questionTextArabic && (
                  <p className="text-2xl font-arabic text-teal-900 mt-2 text-right" dir="rtl">
                    {selectedQuiz.questions[currentQuestionIndex].questionTextArabic}
                  </p>
                )}

                {/* Listen Question Button */}
                <div className="mt-3 flex">
                  <AudioButton
                    audioText={selectedQuiz.questions[currentQuestionIndex].questionText}
                    language="en"
                    size="sm"
                    variant="pill"
                    label="Listen Question"
                  />
                </div>
              </div>

              {/* Options List (A, B, C, D) */}
              <div className="space-y-3 my-6">
                {selectedQuiz.questions[currentQuestionIndex].options.map((opt, idx) => {
                  const optionLetters = ['A', 'B', 'C', 'D'];
                  const isSelected = selectedOptionIndex === idx;
                  const isCorrect = idx === selectedQuiz.questions[currentQuestionIndex].correctOptionIndex;

                  let cardStyle =
                    'bg-slate-50 border-slate-200 text-slate-800 hover:bg-fuchsia-50 hover:border-fuchsia-300';
                  if (isAnswerChecked) {
                    if (isCorrect) {
                      cardStyle =
                        'bg-emerald-500 border-emerald-600 text-white font-bold shadow-md scale-102';
                    } else if (isSelected) {
                      cardStyle = 'bg-rose-500 border-rose-600 text-white';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      id={`btn-quiz-opt-${idx}`}
                      disabled={isAnswerChecked}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full p-4 rounded-2xl border-2 text-left flex items-center justify-between transition-all cursor-pointer ${cardStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-8 h-8 rounded-xl font-fredoka font-bold text-sm flex items-center justify-center ${
                            isAnswerChecked && (isCorrect || isSelected)
                              ? 'bg-white/20 text-white'
                              : 'bg-white text-slate-700 border border-slate-200'
                          }`}
                        >
                          {optionLetters[idx]}
                        </span>
                        <span className="text-lg font-bold font-fredoka">{opt}</span>
                      </div>

                      {isAnswerChecked && isCorrect && (
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      )}
                      {isAnswerChecked && isSelected && !isCorrect && (
                        <XCircle className="w-6 h-6 text-white" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Immediate Feedback Box & Next Question Button */}
              {isAnswerChecked && (
                <div className="p-5 rounded-2xl bg-fuchsia-50 border-2 border-fuchsia-200 animate-fadeIn">
                  {selectedOptionIndex ===
                  selectedQuiz.questions[currentQuestionIndex].correctOptionIndex ? (
                    <div className="flex items-center gap-2 text-emerald-700 font-black font-fredoka text-xl mb-2">
                      <span className="text-2xl">🎉</span>
                      <span>CONGRATULATIONS! That is Correct!</span>
                    </div>
                  ) : (
                    <div className="text-rose-700 font-bold font-fredoka text-lg mb-2">
                      <span>
                        Great effort! Correct answer is:{' '}
                        <strong>
                          {
                            selectedQuiz.questions[currentQuestionIndex].options[
                              selectedQuiz.questions[currentQuestionIndex].correctOptionIndex
                            ]
                          }
                        </strong>
                      </span>
                    </div>
                  )}

                  {selectedQuiz.questions[currentQuestionIndex].explanation && (
                    <p className="text-xs text-slate-700 font-sans mt-1">
                      💡 {selectedQuiz.questions[currentQuestionIndex].explanation}
                    </p>
                  )}

                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      id="btn-next-quiz-question"
                      onClick={handleNextQuestion}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded-full font-fredoka font-bold text-base shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    >
                      <span>NEXT QUESTION</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
