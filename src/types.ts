export type LanguageCode = 'en' | 'ur' | 'ar' | 'hi';

export interface AlphabetItem {
  id: string;
  language: LanguageCode;
  letter: string;
  phonics: string;
  exampleWord: string;
  exampleWordTranslation: string;
  meaning?: string;
  imageUrl?: string;
  audioUrl?: string;
  audioText?: string;
  order: number;
}

export interface WordItem {
  id: string;
  language: LanguageCode;
  letter: string;
  word: string;
  meaning: string;
  phonetic: string;
  category: string;
  imageUrl?: string;
  audioUrl?: string;
  order: number;
}

export interface SentenceItem {
  id: string;
  category: 'daily' | 'manners' | 'school' | 'feelings' | 'questions' | 'greetings';
  english: string;
  urdu: string;
  arabic: string;
  hindi: string;
  audioEn?: string;
  audioUr?: string;
  audioAr?: string;
  audioHi?: string;
  order: number;
}

export interface QuranAyah {
  numberInSurah: number;
  textArabic: string;
  textUrdu: string;
  textEnglish: string;
  audioUrl?: string;
}

export interface QuranSurah {
  id: string;
  number: number;
  nameArabic: string;
  nameEnglish: string;
  nameUrdu: string;
  meaningEnglish: string;
  versesCount: number;
  revelationType: 'Meccan' | 'Medinan';
  audioUrl?: string;
  ayahs: QuranAyah[];
  order: number;
}

export interface IslamicStep {
  stepNumber: number;
  title: string;
  description: string;
  arabicText?: string;
  audioUrl?: string;
  imageUrl?: string;
}

export interface IslamicItem {
  id: string;
  category: 'kalimas' | 'wudu' | 'salah' | 'duas' | 'pillars' | 'names_of_allah' | 'prophets' | 'manners' | 'general' | string;
  title: string;
  titleArabic?: string;
  arabicText?: string;
  pronunciation?: string;
  translationEnglish?: string;
  translationUrdu?: string;
  translationHindi?: string;
  explanation?: string;
  audioUrl?: string;
  imageUrl?: string;
  steps?: IslamicStep[];
  order: number;
}

export interface MathTableRow {
  factor: number;
  result: number;
  audioEn?: string;
  audioHi?: string;
  audioUr?: string;
}

export interface MathItem {
  id: string;
  type: 'number' | 'table' | 'arithmetic';
  number?: number;
  nameEn?: string;
  nameHi?: string;
  nameUr?: string;
  tableNumber?: number;
  tableRows?: MathTableRow[];
  question?: string;
  num1?: number;
  num2?: number;
  operator?: '+' | '-' | '×' | '÷' | string;
  answer?: number;
  options?: number[];
  visualObject?: string;
  visualName?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced' | 'easy' | 'medium' | 'hard' | 'expert' | string;
  level?: number;
  topicType?: string;
  audioUrl?: string;
  order: number;
}

export interface GKItem {
  id: string;
  category: 'states' | 'pms' | 'presidents' | 'ministers' | 'symbols' | 'monuments' | 'festivals' | 'space' | 'animals' | 'general' | string;
  titleEn: string;
  titleHi: string;
  titleUr: string;
  detailEn: string;
  detailHi: string;
  detailUr: string;
  capitalEn?: string;
  capitalHi?: string;
  capitalUr?: string;
  tenure?: string;
  imageUrl?: string;
  audioUrl?: string;
  order: number;
}

export interface QuizQuestion {
  id: string;
  questionText: string;
  questionTextUrdu?: string;
  questionTextHindi?: string;
  questionTextArabic?: string;
  options: string[];
  correctOptionIndex: number;
  explanation?: string;
  imageUrl?: string;
  audioUrl?: string;
}

export interface QuizItem {
  id: string;
  title: string;
  category: 'english' | 'urdu' | 'arabic' | 'hindi' | 'words' | 'sentences' | 'quran' | 'islamic' | 'math' | 'gk';
  subsection: string;
  iconName?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  isPublished: boolean;
  questions: QuizQuestion[];
  order: number;
}

export interface AppDatabase {
  alphabets: AlphabetItem[];
  words: WordItem[];
  sentences: SentenceItem[];
  surahs: QuranSurah[];
  quranSurahs?: QuranSurah[];
  islamicItems: IslamicItem[];
  islamicStudies?: IslamicItem[];
  mathItems: MathItem[];
  gkItems: GKItem[];
  quizzes: QuizItem[];
}

export interface AppStats {
  totalEnglish: number;
  totalUrdu: number;
  totalArabic: number;
  totalHindi: number;
  totalSurahs: number;
  totalIslamic: number;
  totalMath: number;
  totalGK: number;
  totalGames: number;
  totalQuestions: number;
}

export interface StudentUser {
  id: string;
  username: string;
  name: string;
  avatar: string;
  age?: number;
  grade?: string;
  stars: number;
  createdAt?: string;
}
