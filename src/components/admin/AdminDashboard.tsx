import React, { useState } from 'react';
import {
  AppDatabase,
  AlphabetItem,
  WordItem,
  SentenceItem,
  QuranSurah,
  IslamicItem,
  MathItem,
  GKItem,
  QuizItem,
  QuizQuestion,
} from '../../types.ts';
import {
  createContent,
  updateContent,
  deleteContent,
  createQuiz,
  updateQuiz,
  deleteQuiz,
  uploadAudioFile,
  uploadImageFile,
  resetDatabaseToDefault,
  clearAdminToken,
} from '../../utils/api.ts';
import { AudioButton } from '../AudioButton.tsx';
import { IconPicker } from './IconPicker.tsx';
import {
  Shield,
  Plus,
  Edit2,
  Trash2,
  Upload,
  Mic,
  Square,
  Search,
  Check,
  X,
  AlertTriangle,
  LogOut,
  RefreshCw,
  Sparkles,
  Layers,
  FileText,
  Volume2,
  Image as ImageIcon,
} from 'lucide-react';
import { playSound } from '../../utils/audio.ts';

interface AdminDashboardProps {
  database: AppDatabase;
  onRefreshData: () => Promise<void>;
  onLogout: () => void;
}

type AdminTab = 'alphabets' | 'words' | 'sentences' | 'quran' | 'islamic' | 'math' | 'gk' | 'quizzes';

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  database,
  onRefreshData,
  onLogout,
}) => {
  const [activeTab, setActiveTab] = useState<AdminTab>('alphabets');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Edit/Add modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any | null>(null);
  const [formData, setFormData] = useState<any>({});

  // Audio recording state
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);

  // Delete confirmation modal state
  const [itemToDelete, setItemToDelete] = useState<{ category: string; id: string; name: string } | null>(null);

  const alphabetsList = database.alphabets || [];
  const wordsList = database.words || [];
  const sentencesList = database.sentences || [];
  const surahsList = database.surahs || database.quranSurahs || [];
  const islamicList = database.islamicItems || database.islamicStudies || [];
  const mathList = database.mathItems || [];
  const gkList = database.gkItems || [];
  const quizzesList = database.quizzes || [];

  const tabs = [
    { id: 'alphabets' as const, label: 'Alphabets', icon: '🔤', count: alphabetsList.length },
    { id: 'words' as const, label: 'Words & Flashcards', icon: '🍎', count: wordsList.length },
    { id: 'sentences' as const, label: 'Daily Sentences', icon: '💬', count: sentencesList.length },
    { id: 'quran' as const, label: 'Holy Quran', icon: '📖', count: surahsList.length },
    { id: 'islamic' as const, label: 'Islamic Studies', icon: '☪️', count: islamicList.length },
    { id: 'math' as const, label: 'Mathematics', icon: '➕', count: mathList.length },
    { id: 'gk' as const, label: 'General Knowledge', icon: '🇮🇳', count: gkList.length },
    { id: 'quizzes' as const, label: 'MCQ Quizzes', icon: '🎮', count: quizzesList.length },
  ];

  const showStatus = (type: 'success' | 'error', text: string) => {
    setStatusMessage({ type, text });
    setTimeout(() => {
      setStatusMessage(null);
    }, 4000);
  };

  // Open modal for Adding a new item
  const handleOpenAddModal = () => {
    playSound('pop');
    setEditingItem(null);

    // Initial default form values depending on active tab
    if (activeTab === 'alphabets') {
      setFormData({
        language: 'en',
        letter: '',
        phonics: '',
        exampleWord: '',
        exampleWordTranslation: '',
        audioText: '',
        imageUrl: '🌟',
        order: alphabetsList.length + 1,
      });
    } else if (activeTab === 'words') {
      setFormData({
        language: 'en',
        letter: 'A',
        word: '',
        phonetic: '',
        meaning: '',
        category: 'Everyday',
        imageUrl: '🍎',
        order: wordsList.length + 1,
      });
    } else if (activeTab === 'sentences') {
      setFormData({
        english: '',
        urdu: '',
        arabic: '',
        hindi: '',
        category: 'daily',
        order: sentencesList.length + 1,
      });
    } else if (activeTab === 'quran') {
      setFormData({
        number: surahsList.length + 1,
        nameArabic: '',
        nameEnglish: '',
        nameUrdu: '',
        meaningEnglish: '',
        revelationType: 'Meccan',
        versesCount: 3,
        audioUrl: '',
        ayahs: [
          { numberInSurah: 1, textArabic: '', textEnglish: '', textUrdu: '' },
        ],
      });
    } else if (activeTab === 'islamic') {
      setFormData({
        category: 'kalimas',
        title: '',
        titleArabic: '',
        arabicText: '',
        pronunciation: '',
        translationEnglish: '',
        translationUrdu: '',
        translationHindi: '',
        order: islamicList.length + 1,
      });
    } else if (activeTab === 'math') {
      setFormData({
        type: 'arithmetic',
        question: '3 + 4 = ?',
        operator: '+',
        num1: 3,
        num2: 4,
        options: [5, 6, 7, 8],
        answer: 7,
        visualObject: '🍎',
        difficulty: 'easy',
        order: mathList.length + 1,
      });
    } else if (activeTab === 'gk') {
      setFormData({
        category: 'states',
        titleEn: '',
        titleHi: '',
        titleUr: '',
        capitalEn: '',
        capitalHi: '',
        capitalUr: '',
        detailEn: '',
        detailHi: '',
        detailUr: '',
        imageUrl: '🇮🇳',
        order: gkList.length + 1,
      });
    } else if (activeTab === 'quizzes') {
      setFormData({
        title: 'New Quiz',
        category: 'english',
        subsection: 'Basics',
        isPublished: true,
        questions: [
          {
            id: 'q1',
            questionText: 'What is the first letter of the English Alphabet?',
            options: ['A', 'B', 'C', 'D'],
            correctOptionIndex: 0,
            explanation: 'A is the first letter of the alphabet.',
          },
        ],
      });
    }

    setIsModalOpen(true);
  };

  // Open modal for Editing an item
  const handleOpenEditModal = (item: any) => {
    playSound('pop');
    setEditingItem(item);
    const cloned = JSON.parse(JSON.stringify(item));
    if (activeTab === 'math') {
      if (!Array.isArray(cloned.options) || cloned.options.length < 4) {
        const ans = cloned.answer ?? 7;
        const optSet = new Set<number>([ans]);
        const offsets = [-2, 2, 4, -1, 1, 3];
        for (const off of offsets) {
          if (optSet.size >= 4) break;
          const val = ans + off;
          if (val >= 0) optSet.add(val);
        }
        let extra = 1;
        while (optSet.size < 4) {
          optSet.add(ans + extra);
          extra++;
        }
        cloned.options = Array.from(optSet).sort((a, b) => a - b);
      }
    }
    if (activeTab === 'quizzes') {
      if (Array.isArray(cloned.questions)) {
        cloned.questions = cloned.questions.map((q: any) => {
          let opts = Array.isArray(q.options) ? [...q.options] : [];
          while (opts.length < 4) {
            opts.push(`Option ${String.fromCharCode(65 + opts.length)}`);
          }
          return {
            ...q,
            options: opts,
            correctOptionIndex: typeof q.correctOptionIndex === 'number' ? q.correctOptionIndex : 0,
          };
        });
      }
    }
    setFormData(cloned);
    setIsModalOpen(true);
  };

  // Handle Form Submit (Add or Edit)
  const handleSaveFormData = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (activeTab === 'quizzes') {
        if (editingItem) {
          await updateQuiz(editingItem.id, formData);
          showStatus('success', 'Quiz updated successfully!');
        } else {
          await createQuiz(formData);
          showStatus('success', 'New Quiz created successfully!');
        }
      } else {
        if (editingItem) {
          await updateContent(activeTab, editingItem.id, formData);
          showStatus('success', `Item in ${activeTab} updated successfully!`);
        } else {
          await createContent(activeTab, formData);
          showStatus('success', `New item added to ${activeTab} successfully!`);
        }
      }

      await onRefreshData();
      setIsModalOpen(false);
      playSound('correct');
    } catch (err: any) {
      playSound('wrong');
      showStatus('error', err.message || 'Operation failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle Delete Confirmation
  const handleConfirmDelete = async () => {
    if (!itemToDelete) return;
    setIsSubmitting(true);

    try {
      if (itemToDelete.category === 'quizzes') {
        await deleteQuiz(itemToDelete.id);
      } else {
        await deleteContent(itemToDelete.category, itemToDelete.id);
      }
      playSound('pop');
      showStatus('success', `Deleted "${itemToDelete.name}" successfully!`);
      await onRefreshData();
      setItemToDelete(null);
    } catch (err: any) {
      playSound('wrong');
      showStatus('error', err.message || 'Failed to delete item');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle Audio File Upload
  const handleAudioUpload = async (e: React.ChangeEvent<HTMLInputElement>, targetField: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      showStatus('success', 'Uploading audio file...');
      const url = await uploadAudioFile(file, file.name);
      setFormData((prev: any) => ({ ...prev, [targetField]: url }));
      showStatus('success', 'Audio uploaded successfully!');
    } catch (err: any) {
      showStatus('error', err.message || 'Audio upload failed');
    }
  };

  // Handle Audio Recording via browser microphone
  const startRecordingAudio = async (targetField: string) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const chunks: Blob[] = [];

      recorder.ondataavailable = e => {
        if (e.data.size > 0) chunks.push(e.data);
      };

      recorder.onstop = async () => {
        const audioBlob = new Blob(chunks, { type: 'audio/webm' });
        try {
          const url = await uploadAudioFile(audioBlob, `recorded-${Date.now()}.webm`);
          setFormData((prev: any) => ({ ...prev, [targetField]: url }));
          showStatus('success', 'Voice recorded and attached successfully!');
        } catch {
          showStatus('error', 'Failed to upload recorded voice');
        }
      };

      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
    } catch (err) {
      showStatus('error', 'Microphone permission denied or unavailable');
    }
  };

  const stopRecordingAudio = () => {
    if (mediaRecorder && isRecording) {
      mediaRecorder.stop();
      mediaRecorder.stream.getTracks().forEach(t => t.stop());
      setIsRecording(false);
      setMediaRecorder(null);
    }
  };

  // Handle Image File Upload
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      showStatus('success', 'Uploading image...');
      const url = await uploadImageFile(file);
      setFormData((prev: any) => ({ ...prev, imageUrl: url }));
      showStatus('success', 'Image uploaded successfully!');
    } catch (err: any) {
      showStatus('error', err.message || 'Image upload failed');
    }
  };

  // Ayah Array Handlers for Quran Surah
  const handleAddAyah = () => {
    const currentAyahs = formData.ayahs || [];
    const nextNum = currentAyahs.length + 1;
    const newAyah = {
      numberInSurah: nextNum,
      textArabic: '',
      textEnglish: '',
      textUrdu: '',
      audioUrl: '',
    };
    setFormData({
      ...formData,
      ayahs: [...currentAyahs, newAyah],
      versesCount: nextNum,
    });
  };

  const handleUpdateAyah = (index: number, field: string, value: any) => {
    const currentAyahs = [...(formData.ayahs || [])];
    currentAyahs[index] = {
      ...currentAyahs[index],
      [field]: value,
    };
    setFormData({
      ...formData,
      ayahs: currentAyahs,
    });
  };

  const handleRemoveAyah = (index: number) => {
    const currentAyahs = (formData.ayahs || []).filter((_: any, i: number) => i !== index);
    const reindexed = currentAyahs.map((a: any, i: number) => ({
      ...a,
      numberInSurah: i + 1,
    }));
    setFormData({
      ...formData,
      ayahs: reindexed,
      versesCount: reindexed.length,
    });
  };

  // Quiz Question Handlers
  const handleAddQuestion = () => {
    const currentQuestions = formData.questions || [];
    const nextId = `q-${Date.now()}-${currentQuestions.length + 1}`;
    const newQuestion = {
      id: nextId,
      questionText: '',
      options: ['', '', '', ''],
      correctOptionIndex: 0,
      explanation: '',
    };
    setFormData({
      ...formData,
      questions: [...currentQuestions, newQuestion],
    });
  };

  const handleUpdateQuestion = (qIndex: number, field: string, value: any) => {
    const currentQuestions = [...(formData.questions || [])];
    currentQuestions[qIndex] = {
      ...currentQuestions[qIndex],
      [field]: value,
    };
    setFormData({
      ...formData,
      questions: currentQuestions,
    });
  };

  const handleUpdateOption = (qIndex: number, optIndex: number, value: string) => {
    const currentQuestions = [...(formData.questions || [])];
    const options = [...(currentQuestions[qIndex]?.options || ['', '', '', ''])];
    options[optIndex] = value;
    currentQuestions[qIndex] = {
      ...currentQuestions[qIndex],
      options,
    };
    setFormData({
      ...formData,
      questions: currentQuestions,
    });
  };

  const handleRemoveQuestion = (qIndex: number) => {
    const currentQuestions = (formData.questions || []).filter((_: any, i: number) => i !== qIndex);
    setFormData({
      ...formData,
      questions: currentQuestions,
    });
  };

  // Reset database handler
  const handleResetDatabase = async () => {
    if (window.confirm('Are you sure you want to reset all data back to the default seed curriculum?')) {
      try {
        await resetDatabaseToDefault();
        await onRefreshData();
        showStatus('success', 'Curriculum database reset to default!');
      } catch (err: any) {
        showStatus('error', 'Failed to reset database');
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Top Admin Bar */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-sm mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-slate-800">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs font-bold text-xl border border-indigo-500">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-indigo-950 text-indigo-300 border border-indigo-800 rounded-md text-[11px] font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-3 h-3 text-indigo-400" />
              Management Center
            </div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              LittleMindz Content Studio
            </h1>
            <p className="text-xs text-slate-400 mt-0.5">
              Add, edit, and delete curriculum records, audio tracks, and quiz questions.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={handleResetDatabase}
            className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-medium text-xs border border-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Reset Data
          </button>
          <button
            type="button"
            onClick={() => {
              clearAdminToken();
              onLogout();
            }}
            className="px-3.5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
          >
            <LogOut className="w-3.5 h-3.5" />
            Sign Out
          </button>
        </div>
      </div>

      {/* Status Feedback Toast */}
      {statusMessage && (
        <div
          className={`mb-6 p-3.5 rounded-xl flex items-center gap-3 text-xs font-semibold shadow-xs animate-fadeIn border ${
            statusMessage.type === 'success'
              ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
              : 'bg-red-50 text-red-800 border-red-200'
          }`}
        >
          {statusMessage.type === 'success' ? <Check className="w-4 h-4 text-emerald-600" /> : <AlertTriangle className="w-4 h-4 text-red-600" />}
          <span>{statusMessage.text}</span>
        </div>
      )}

      {/* Category Navigation Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-8">
        {tabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            id={`btn-admin-tab-${tab.id}`}
            onClick={() => {
              playSound('pop');
              setActiveTab(tab.id);
            }}
            className={`p-3 rounded-xl text-center border transition-all cursor-pointer flex flex-col items-center justify-center ${
              activeTab === tab.id
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs font-semibold'
                : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
            }`}
          >
            <span className="text-xl mb-1">{tab.icon}</span>
            <span className="text-xs font-medium truncate w-full">{tab.label}</span>
            <span
              className={`text-[10px] font-semibold mt-1 px-1.5 py-0.2 rounded ${
                activeTab === tab.id ? 'bg-indigo-700 text-indigo-100' : 'bg-slate-100 text-slate-500'
              }`}
            >
              {tab.count} items
            </span>
          </button>
        ))}
      </div>

      {/* Management Toolbar */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 mb-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-slate-900 capitalize tracking-tight">
              Active {activeTab} Records
            </h2>
            <span className="px-2.5 py-0.5 bg-slate-100 text-slate-600 border border-slate-200 rounded text-[11px] font-mono font-medium">
              Section: {activeTab}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search records..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1.5 bg-slate-100 border border-slate-200 rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="button"
              id="btn-admin-add-new"
              onClick={handleOpenAddModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold text-xs shadow-xs transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Record</span>
            </button>
          </div>
        </div>

        {/* Content Table / Card List */}
        <div className="mt-5 overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600 border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-semibold uppercase tracking-wider text-[11px]">
                <th className="py-2.5 px-4">#</th>
                <th className="py-2.5 px-4">Primary Content</th>
                <th className="py-2.5 px-4">Language / Type</th>
                <th className="py-2.5 px-4">Media</th>
                <th className="py-2.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {/* 1. Alphabets Table Rows */}
              {activeTab === 'alphabets' &&
                alphabetsList
                  .filter(
                    a =>
                      !searchQuery ||
                      a.letter.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      a.exampleWord.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((item, idx) => (
                    <tr key={item.id} className="hover:bg-amber-50/50 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-slate-400">{idx + 1}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-bold font-fredoka text-amber-600">{item.letter}</span>
                          <span className="font-bold text-slate-900">{item.exampleWord}</span>
                          <span className="text-slate-400">({item.exampleWordTranslation})</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 uppercase font-bold text-slate-500">{item.language}</td>
                      <td className="py-3 px-4">
                        <AudioButton
                          audioUrl={item.audioUrl}
                          audioText={item.audioText || `${item.letter} for ${item.exampleWord}`}
                          language={item.language}
                          size="sm"
                          variant="minimal"
                        />
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => handleOpenEditModal(item)}
                            className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                            title="Edit"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              setItemToDelete({ category: 'alphabets', id: item.id, name: item.letter })
                            }
                            className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}

              {/* 2. Words Table Rows */}
              {activeTab === 'words' &&
                wordsList
                  .filter(
                    w =>
                      !searchQuery ||
                      w.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      w.meaning.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((item, idx) => (
                    <tr key={item.id} className="hover:bg-rose-50/50 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-slate-400">{idx + 1}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{item.imageUrl || '🍎'}</span>
                          <span className="font-bold text-slate-900 text-sm">{item.word}</span>
                          <span className="text-slate-400">({item.meaning})</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-bold uppercase text-rose-700">{item.language}</span> •{' '}
                        <span>{item.category}</span>
                      </td>
                      <td className="py-3 px-4">
                        <AudioButton audioUrl={item.audioUrl} audioText={item.word} language={item.language} size="sm" variant="minimal" />
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => handleOpenEditModal(item)}
                            className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setItemToDelete({ category: 'words', id: item.id, name: item.word })}
                            className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}

              {/* 3. Daily Sentences Table Rows */}
              {activeTab === 'sentences' &&
                sentencesList
                  .filter(
                    s =>
                      !searchQuery ||
                      s.english.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      s.urdu.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((item, idx) => (
                    <tr key={item.id} className="hover:bg-sky-50/50 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-slate-400">{idx + 1}</td>
                      <td className="py-3 px-4">
                        <div className="space-y-0.5">
                          <div className="font-bold text-slate-900">{item.english}</div>
                          <div className="text-emerald-800 font-urdu text-sm" dir="rtl">{item.urdu}</div>
                        </div>
                      </td>
                      <td className="py-3 px-4 uppercase font-bold text-sky-700">{item.category}</td>
                      <td className="py-3 px-4">
                        <AudioButton audioUrl={item.audioEn} audioText={item.english} language="en" size="sm" variant="minimal" />
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => handleOpenEditModal(item)}
                            className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              setItemToDelete({ category: 'sentences', id: item.id, name: item.english })
                            }
                            className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}

              {/* 4. Quran Surahs Table Rows */}
              {activeTab === 'quran' &&
                surahsList
                  .filter(
                    q =>
                      !searchQuery ||
                      q.nameEnglish.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      q.nameArabic.includes(searchQuery)
                  )
                  .map((item, idx) => (
                    <tr key={item.id} className="hover:bg-emerald-50/50 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-slate-400">#{item.number}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <span className="font-arabic font-bold text-xl text-emerald-900">{item.nameArabic}</span>
                          <div>
                            <span className="font-bold text-slate-900">{item.nameEnglish}</span>
                            <span className="text-slate-400 ml-1">({item.meaningEnglish})</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-bold text-emerald-800">{item.versesCount} Ayahs</span> •{' '}
                        <span>{item.revelationType}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-xs text-slate-500 font-mono">
                          {item.audioUrl ? '🔊 Audio linked' : 'TTS Fallback'}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => handleOpenEditModal(item)}
                            className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              setItemToDelete({ category: 'surahs', id: item.id, name: item.nameEnglish })
                            }
                            className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}

              {/* 5. Islamic Studies Table Rows */}
              {activeTab === 'islamic' &&
                islamicList
                  .filter(
                    i =>
                      !searchQuery ||
                      i.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      i.arabicText.includes(searchQuery)
                  )
                  .map((item, idx) => (
                    <tr key={item.id} className="hover:bg-purple-50/50 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-slate-400">{idx + 1}</td>
                      <td className="py-3 px-4">
                        <div className="font-bold text-slate-900">{item.title}</div>
                        <div className="text-xs text-purple-800 font-arabic truncate max-w-md" dir="rtl">
                          {item.arabicText}
                        </div>
                      </td>
                      <td className="py-3 px-4 uppercase font-bold text-purple-700">{item.category}</td>
                      <td className="py-3 px-4">
                        <AudioButton audioUrl={item.audioUrl} audioText={item.arabicText} language="ar" size="sm" variant="minimal" />
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => handleOpenEditModal(item)}
                            className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              setItemToDelete({ category: 'islamicItems', id: item.id, name: item.title })
                            }
                            className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}

              {/* 6. Math Table Rows */}
              {activeTab === 'math' &&
                mathList
                  .filter(
                    m =>
                      !searchQuery ||
                      (m.question && m.question.toLowerCase().includes(searchQuery.toLowerCase())) ||
                      (m.nameEn && m.nameEn.toLowerCase().includes(searchQuery.toLowerCase()))
                  )
                  .map((item, idx) => (
                    <tr key={item.id} className="hover:bg-yellow-50/50 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-slate-400">{idx + 1}</td>
                      <td className="py-3 px-4">
                        <div className="font-bold text-slate-900">
                          {item.type === 'number'
                            ? `Number ${item.number} (${item.nameEn})`
                            : item.type === 'table'
                            ? `Multiplication Table of ${item.tableNumber}`
                            : `Arithmetic: ${item.question} = ${item.answer}`}
                        </div>
                      </td>
                      <td className="py-3 px-4 uppercase font-bold text-amber-700">{item.type}</td>
                      <td className="py-3 px-4">
                        <span className="text-xs text-slate-400 font-mono">Dynamic Audio</span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => handleOpenEditModal(item)}
                            className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              setItemToDelete({
                                category: 'mathItems',
                                id: item.id,
                                name: item.question || String(item.number),
                              })
                            }
                            className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}

              {/* 7. GK Table Rows */}
              {activeTab === 'gk' &&
                gkList
                  .filter(
                    g =>
                      !searchQuery ||
                      g.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      (g.capitalEn && g.capitalEn.toLowerCase().includes(searchQuery.toLowerCase()))
                  )
                  .map((item, idx) => (
                    <tr key={item.id} className="hover:bg-teal-50/50 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-slate-400">{idx + 1}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <span>{item.imageUrl || '🇮🇳'}</span>
                          <span className="font-bold text-slate-900">{item.titleEn}</span>
                          {item.capitalEn && <span className="text-slate-400">({item.capitalEn})</span>}
                        </div>
                      </td>
                      <td className="py-3 px-4 uppercase font-bold text-teal-700">{item.category}</td>
                      <td className="py-3 px-4">
                        <AudioButton audioUrl={item.audioUrl} audioText={item.titleEn} language="en" size="sm" variant="minimal" />
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => handleOpenEditModal(item)}
                            className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setItemToDelete({ category: 'gkItems', id: item.id, name: item.titleEn })}
                            className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}

              {/* 8. MCQ Quizzes Table Rows */}
              {activeTab === 'quizzes' &&
                quizzesList
                  .filter(
                    q =>
                      !searchQuery ||
                      q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      q.category.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((item, idx) => (
                    <tr key={item.id} className="hover:bg-fuchsia-50/50 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-slate-400">{idx + 1}</td>
                      <td className="py-3 px-4">
                        <div className="font-bold text-slate-900 text-sm">{item.title}</div>
                        <div className="text-xs text-slate-400">{item.questions?.length || 0} questions</div>
                      </td>
                      <td className="py-3 px-4 uppercase font-bold text-fuchsia-700">{item.category}</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full text-[10px] font-bold">
                          {item.isPublished !== false ? 'Published' : 'Draft'}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => handleOpenEditModal(item)}
                            className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setItemToDelete({ category: 'quizzes', id: item.id, name: item.title })}
                            className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit / Add Modal with Schema-Driven Controls */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border-4 border-amber-300 my-8 max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold">
                {editingItem ? <Edit2 className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </div>
              <div>
                <h2 className="text-xl font-bold font-fredoka text-slate-900">
                  {editingItem ? `Edit Item in ${activeTab}` : `Add New Item to ${activeTab}`}
                </h2>
                <p className="text-xs text-slate-400">Fill in the fields below and save changes</p>
              </div>
            </div>

            <form onSubmit={handleSaveFormData} className="space-y-4">
              {/* Dynamic form inputs based on active tab */}

              {/* ALPHABETS FORM */}
              {activeTab === 'alphabets' && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Language</label>
                      <select
                        value={formData.language}
                        onChange={e => setFormData({ ...formData, language: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm"
                      >
                        <option value="en">English (en)</option>
                        <option value="ur">Urdu (ur)</option>
                        <option value="ar">Arabic (ar)</option>
                        <option value="hi">Hindi (hi)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Letter / Symbol</label>
                      <input
                        type="text"
                        required
                        value={formData.letter || ''}
                        onChange={e => setFormData({ ...formData, letter: e.target.value })}
                        placeholder="e.g. A or ب"
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Example Word</label>
                      <input
                        type="text"
                        required
                        value={formData.exampleWord || ''}
                        onChange={e => setFormData({ ...formData, exampleWord: e.target.value })}
                        placeholder="e.g. Apple or انار"
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Translation / Meaning</label>
                      <input
                        type="text"
                        value={formData.exampleWordTranslation || ''}
                        onChange={e => setFormData({ ...formData, exampleWordTranslation: e.target.value })}
                        placeholder="e.g. Seb (Apple)"
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <IconPicker
                      value={formData.imageUrl || ''}
                      onChange={icon => setFormData({ ...formData, imageUrl: icon })}
                      label="Letter Icon / Emoji / Image"
                      helperText="Choose an icon or enter custom image URL"
                    />
                  </div>
                </>
              )}

              {/* WORDS FORM */}
              {activeTab === 'words' && (
                <>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Language</label>
                      <select
                        value={formData.language}
                        onChange={e => setFormData({ ...formData, language: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm"
                      >
                        <option value="en">English</option>
                        <option value="ur">Urdu</option>
                        <option value="ar">Arabic</option>
                        <option value="hi">Hindi</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Letter</label>
                      <input
                        type="text"
                        value={formData.letter || ''}
                        onChange={e => setFormData({ ...formData, letter: e.target.value })}
                        placeholder="A"
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Category</label>
                      <input
                        type="text"
                        value={formData.category || ''}
                        onChange={e => setFormData({ ...formData, category: e.target.value })}
                        placeholder="Fruits, Animals..."
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Word</label>
                    <input
                      type="text"
                      required
                      value={formData.word || ''}
                      onChange={e => setFormData({ ...formData, word: e.target.value })}
                      placeholder="e.g. Mango"
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Meaning / Definition</label>
                    <input
                      type="text"
                      value={formData.meaning || ''}
                      onChange={e => setFormData({ ...formData, meaning: e.target.value })}
                      placeholder="e.g. A sweet tropical fruit"
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm"
                    />
                  </div>

                  <div>
                    <IconPicker
                      value={formData.imageUrl || ''}
                      onChange={icon => setFormData({ ...formData, imageUrl: icon })}
                      label="Word Icon / Emoji / Image"
                      helperText="Click an icon below or enter custom emoji/URL"
                    />
                  </div>
                </>
              )}

              {/* SENTENCES FORM */}
              {activeTab === 'sentences' && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Category</label>
                      <select
                        value={formData.category || 'daily'}
                        onChange={e => setFormData({ ...formData, category: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold"
                      >
                        <option value="daily">Daily Life (روزمرہ زندگی / दैनिक जीवन)</option>
                        <option value="school">School & Study (تعلیم و اسکول / स्कूल और पढ़ाई)</option>
                        <option value="greetings">Greetings (ملاقات و آداب / अभिवादन)</option>
                        <option value="manners">Polite Manners (شائستگی / शिष्टाचार)</option>
                        <option value="feelings">Feelings & Emotions (احساسات و جذبات / भावनाएं)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Display Order #</label>
                      <input
                        type="number"
                        value={formData.order || 1}
                        onChange={e => setFormData({ ...formData, order: Number(e.target.value) })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">English Sentence</label>
                    <input
                      type="text"
                      required
                      value={formData.english || ''}
                      onChange={e => setFormData({ ...formData, english: e.target.value })}
                      placeholder="e.g. I am reading a book"
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Urdu Sentence (اردو)</label>
                    <input
                      type="text"
                      value={formData.urdu || ''}
                      onChange={e => setFormData({ ...formData, urdu: e.target.value })}
                      placeholder="e.g. میں کتاب پڑھ رہا ہوں"
                      dir="rtl"
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-base font-urdu"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Arabic Sentence (العربية)</label>
                    <input
                      type="text"
                      value={formData.arabic || ''}
                      onChange={e => setFormData({ ...formData, arabic: e.target.value })}
                      placeholder="e.g. أنا أقرأ كتاباً"
                      dir="rtl"
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-lg font-arabic"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Hindi Sentence (हिंदी)</label>
                    <input
                      type="text"
                      value={formData.hindi || ''}
                      onChange={e => setFormData({ ...formData, hindi: e.target.value })}
                      placeholder="e.g. मैं किताब पढ़ रहा हूँ"
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-hindi"
                    />
                  </div>
                </>
              )}

              {/* QURAN FORM WITH AYAH-BY-AYAH EDITOR */}
              {activeTab === 'quran' && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Surah Number</label>
                      <input
                        type="number"
                        required
                        value={formData.number || 1}
                        onChange={e => setFormData({ ...formData, number: Number(e.target.value) })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Name (Arabic)</label>
                      <input
                        type="text"
                        required
                        value={formData.nameArabic || ''}
                        onChange={e => setFormData({ ...formData, nameArabic: e.target.value })}
                        placeholder="سُورَةُ الفَاتِحَة"
                        dir="rtl"
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-base font-arabic font-bold text-right"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Name (English)</label>
                      <input
                        type="text"
                        required
                        value={formData.nameEnglish || ''}
                        onChange={e => setFormData({ ...formData, nameEnglish: e.target.value })}
                        placeholder="Al-Fatihah"
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Name (Urdu)</label>
                      <input
                        type="text"
                        value={formData.nameUrdu || ''}
                        onChange={e => setFormData({ ...formData, nameUrdu: e.target.value })}
                        placeholder="سورۃ الفاتحہ"
                        dir="rtl"
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-urdu text-right"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">English Meaning</label>
                      <input
                        type="text"
                        value={formData.meaningEnglish || ''}
                        onChange={e => setFormData({ ...formData, meaningEnglish: e.target.value })}
                        placeholder="The Opening"
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Revelation Type</label>
                      <select
                        value={formData.revelationType || 'Meccan'}
                        onChange={e => setFormData({ ...formData, revelationType: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold"
                      >
                        <option value="Meccan">Meccan (مكية)</option>
                        <option value="Medinan">Medinan (مدنية)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Surah Audio URL (MP3)</label>
                    <input
                      type="url"
                      value={formData.audioUrl || ''}
                      onChange={e => setFormData({ ...formData, audioUrl: e.target.value })}
                      placeholder="https://cdn.islamic.network/quran/audio/128/ar.alafasy/1.mp3"
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono"
                    />
                  </div>

                  {/* SURAH AYAHS & TRANSLATIONS BUILDER */}
                  <div className="p-4 bg-emerald-50/70 rounded-2xl border-2 border-emerald-200 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-fredoka font-bold text-xs flex items-center justify-center">
                          {formData.ayahs?.length || 0}
                        </span>
                        <span className="text-sm font-bold font-fredoka text-emerald-900 uppercase">
                          Surah Ayahs & Translations
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={handleAddAyah}
                        className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add Ayah</span>
                      </button>
                    </div>

                    <div className="space-y-4 max-h-96 overflow-y-auto pr-1">
                      {(formData.ayahs || []).map((ayah: any, aIdx: number) => (
                        <div
                          key={aIdx}
                          className="bg-white rounded-2xl p-4 border border-emerald-200 shadow-xs space-y-3"
                        >
                          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                            <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold font-fredoka">
                              Ayah #{ayah.numberInSurah || aIdx + 1}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleRemoveAyah(aIdx)}
                              className="p-1 text-rose-600 hover:bg-rose-50 rounded-lg text-xs font-semibold flex items-center gap-1 cursor-pointer"
                              title="Delete Ayah"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                              <span>Remove</span>
                            </button>
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                              Arabic Verse Text (العربية)
                            </label>
                            <input
                              type="text"
                              required
                              value={ayah.textArabic || ''}
                              onChange={e => handleUpdateAyah(aIdx, 'textArabic', e.target.value)}
                              placeholder="بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"
                              dir="rtl"
                              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-lg font-arabic font-bold text-right"
                            />
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                                Urdu Translation (اردو ترجمہ)
                              </label>
                              <input
                                type="text"
                                value={ayah.textUrdu || ''}
                                onChange={e => handleUpdateAyah(aIdx, 'textUrdu', e.target.value)}
                                placeholder="شروع اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے"
                                dir="rtl"
                                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-urdu text-right"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                                English Translation
                              </label>
                              <input
                                type="text"
                                value={ayah.textEnglish || ''}
                                onChange={e => handleUpdateAyah(aIdx, 'textEnglish', e.target.value)}
                                placeholder="In the name of Allah, the Entirely Merciful..."
                                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                              Individual Ayah Audio URL (Optional MP3)
                            </label>
                            <input
                              type="url"
                              value={ayah.audioUrl || ''}
                              onChange={e => handleUpdateAyah(aIdx, 'audioUrl', e.target.value)}
                              placeholder="https://cdn.islamic.network/quran/audio/128/ar.alafasy/1.mp3"
                              className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono"
                            />
                          </div>
                        </div>
                      ))}

                      {(!formData.ayahs || formData.ayahs.length === 0) && (
                        <div className="text-center py-6 text-xs text-slate-500 bg-white rounded-xl border border-dashed border-emerald-300">
                          No ayahs added yet. Click "+ Add Ayah" above to add verses.
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}

              {/* ISLAMIC STUDIES FORM */}
              {activeTab === 'islamic' && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Category</label>
                      <select
                        value={formData.category || 'kalimas'}
                        onChange={e => setFormData({ ...formData, category: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold"
                      >
                        <option value="kalimas">Six Kalimas (چھ کلمے)</option>
                        <option value="wudu">Wudu Guide (وضو کا طریقہ)</option>
                        <option value="salah">Salah (Namaz / نماز)</option>
                        <option value="duas">Daily Duas (مسنون دعائیں)</option>
                        <option value="pillars">Pillars of Islam (ارکان اسلام)</option>
                        <option value="names_of_allah">99 Names of Allah (اسماء الحسنیٰ)</option>
                        <option value="prophets">Stories of Prophets (انبیاء کرام)</option>
                        <option value="manners">Islamic Manners & Ethics (اسلامی آداب)</option>
                        <option value="general">General Islamic Knowledge (عام معلومات)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Title</label>
                      <input
                        type="text"
                        required
                        value={formData.title || ''}
                        onChange={e => setFormData({ ...formData, title: e.target.value })}
                        placeholder="e.g. First Kalima Tayyab"
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Arabic Text</label>
                    <textarea
                      rows={2}
                      value={formData.arabicText || ''}
                      onChange={e => setFormData({ ...formData, arabicText: e.target.value })}
                      placeholder="لَا إِلٰهَ إِلَّا الله مُحَمَّدٌ رَّسُولُ الله"
                      dir="rtl"
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-lg font-arabic font-bold text-right"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Urdu Translation (اردو ترجمہ)</label>
                    <textarea
                      rows={2}
                      value={formData.translationUrdu || ''}
                      onChange={e => setFormData({ ...formData, translationUrdu: e.target.value })}
                      placeholder="اللہ کے سوا کوئی معبود نہیں، محمد ﷺ اللہ کے رسول ہیں"
                      dir="rtl"
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-urdu text-right"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">English Meaning</label>
                      <textarea
                        rows={2}
                        value={formData.translationEnglish || ''}
                        onChange={e => setFormData({ ...formData, translationEnglish: e.target.value })}
                        placeholder="There is no deity except Allah, Muhammad (PBUH) is the messenger of Allah."
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Hindi Translation / Pronunciation</label>
                      <textarea
                        rows={2}
                        value={formData.translationHindi || formData.pronunciation || ''}
                        onChange={e => setFormData({ ...formData, translationHindi: e.target.value, pronunciation: e.target.value })}
                        placeholder="अल्लाह के सिवा कोई इबादत के लायक नहीं..."
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-hindi"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* GK FORM */}
              {activeTab === 'gk' && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">GK Category</label>
                      <select
                        value={formData.category || 'states'}
                        onChange={e => setFormData({ ...formData, category: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold"
                      >
                        <option value="states">States & Capitals (राज्य और राजधानियाँ)</option>
                        <option value="pms">Prime Ministers (प्रधानमंत्री)</option>
                        <option value="presidents">Presidents (राष्ट्रपति)</option>
                        <option value="ministers">Key Ministers (केंद्रीय मंत्री)</option>
                        <option value="symbols">National Symbols (राष्ट्रीय प्रतीक)</option>
                        <option value="monuments">Monuments & Wonders (ऐतिहासिक स्मारक)</option>
                        <option value="festivals">Festivals & Culture (त्योहार और संस्कृति)</option>
                        <option value="space">Planets & Space (सौर मंडल व अंतरिक्ष)</option>
                        <option value="animals">Animals & Birds (पशु-पक्षी)</option>
                        <option value="general">General Knowledge (सामान्य ज्ञान)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Title (English)</label>
                      <input
                        type="text"
                        required
                        value={formData.titleEn || ''}
                        onChange={e => setFormData({ ...formData, titleEn: e.target.value })}
                        placeholder="e.g. Maharashtra"
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Capital / Subtitle (English)</label>
                      <input
                        type="text"
                        value={formData.capitalEn || ''}
                        onChange={e => setFormData({ ...formData, capitalEn: e.target.value })}
                        placeholder="e.g. Mumbai"
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm"
                      />
                    </div>
                    <div>
                      <IconPicker
                        value={formData.imageUrl || ''}
                        onChange={icon => setFormData({ ...formData, imageUrl: icon })}
                        label="GK Icon / Emoji / Flag"
                        helperText="Pick emoji or state/country emblem"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Detail / Fact (English)</label>
                    <textarea
                      rows={2}
                      value={formData.detailEn || ''}
                      onChange={e => setFormData({ ...formData, detailEn: e.target.value })}
                      placeholder="Financial capital of India, known for Gateway of India and Bollywood."
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Hindi Title & Detail</label>
                      <input
                        type="text"
                        value={formData.titleHi || ''}
                        onChange={e => setFormData({ ...formData, titleHi: e.target.value })}
                        placeholder="महाराष्ट्र"
                        className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-hindi mb-2"
                      />
                      <textarea
                        rows={2}
                        value={formData.detailHi || ''}
                        onChange={e => setFormData({ ...formData, detailHi: e.target.value })}
                        placeholder="भारत की आर्थिक राजधानी..."
                        className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-hindi"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Urdu Title & Detail</label>
                      <input
                        type="text"
                        value={formData.titleUr || ''}
                        onChange={e => setFormData({ ...formData, titleUr: e.target.value })}
                        placeholder="مہاراشٹر"
                        dir="rtl"
                        className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-urdu mb-2"
                      />
                      <textarea
                        rows={2}
                        value={formData.detailUr || ''}
                        onChange={e => setFormData({ ...formData, detailUr: e.target.value })}
                        placeholder="ہندوستان کا معاشی دارالحکومت..."
                        dir="rtl"
                        className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-urdu"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* MATH FORM */}
              {activeTab === 'math' && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Topic Type</label>
                      <select
                        value={formData.type || 'arithmetic'}
                        onChange={e => setFormData({ ...formData, type: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold"
                      >
                        <option value="arithmetic">Arithmetic (+ - × ÷)</option>
                        <option value="counting">Counting Objects</option>
                        <option value="shapes">Geometric Shapes</option>
                        <option value="clock">Clock & Time</option>
                        <option value="money">Money & Coins</option>
                        <option value="tables">Multiplication Tables</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Difficulty</label>
                      <select
                        value={formData.difficulty || 'easy'}
                        onChange={e => setFormData({ ...formData, difficulty: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm"
                      >
                        <option value="easy">Easy (Level 1)</option>
                        <option value="medium">Medium (Level 2)</option>
                        <option value="hard">Hard (Level 3 & 4)</option>
                        <option value="expert">Expert (Level 5)</option>
                      </select>
                    </div>
                    <div>
                      <IconPicker
                        value={formData.visualObject || '🍎'}
                        onChange={icon => setFormData({ ...formData, visualObject: icon })}
                        label="Visual Object / Shape Icon"
                        helperText="Object to display for kids"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Math Question</label>
                    <input
                      type="text"
                      required
                      value={formData.question || ''}
                      onChange={e => setFormData({ ...formData, question: e.target.value })}
                      placeholder="e.g. 5 + 3 = ?"
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-base font-fredoka font-bold"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Number 1</label>
                      <input
                        type="number"
                        value={formData.num1 ?? 5}
                        onChange={e => setFormData({ ...formData, num1: Number(e.target.value) })}
                        className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl text-sm text-center font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Operator</label>
                      <select
                        value={formData.operator || '+'}
                        onChange={e => setFormData({ ...formData, operator: e.target.value })}
                        className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-center"
                      >
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">×</option>
                        <option value="/">÷</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Number 2</label>
                      <input
                        type="number"
                        value={formData.num2 ?? 3}
                        onChange={e => setFormData({ ...formData, num2: Number(e.target.value) })}
                        className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl text-sm text-center font-bold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Correct Answer</label>
                    <input
                      type="number"
                      required
                      value={formData.answer ?? 8}
                      onChange={e => {
                        const newAns = Number(e.target.value);
                        let opts = Array.isArray(formData.options) ? [...formData.options] : [];
                        if (opts.length === 0 || !opts.includes(newAns)) {
                          opts = [newAns - 2 >= 0 ? newAns - 2 : 0, newAns - 1 >= 0 ? newAns - 1 : 1, newAns, newAns + 2];
                        }
                        setFormData({ ...formData, answer: newAns, options: opts });
                      }}
                      placeholder="8"
                      className="w-full p-2.5 bg-emerald-50 border-2 border-emerald-400 rounded-xl text-lg font-bold text-emerald-900"
                    />
                  </div>

                  {/* Math 4 Multiple Choice Options (MCQ) Builder */}
                  <div className="p-4 bg-amber-50/80 rounded-2xl border-2 border-amber-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold font-fredoka text-amber-900 uppercase">
                          4 Multiple Choice Options (MCQ)
                        </span>
                        <p className="text-[11px] text-slate-500">Select which option is the correct answer</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          playSound('pop');
                          const ans = Number(formData.answer ?? 0);
                          const optSet = new Set<number>([ans]);
                          const offsets = [-2, 2, 4, -1, 1, 3, -3, 5];
                          for (const off of offsets) {
                            if (optSet.size >= 4) break;
                            const val = ans + off;
                            if (val >= 0) optSet.add(val);
                          }
                          let extra = 1;
                          while (optSet.size < 4) {
                            optSet.add(ans + extra);
                            extra++;
                          }
                          const newOpts = Array.from(optSet).sort((a, b) => a - b);
                          setFormData({ ...formData, options: newOpts });
                        }}
                        className="px-2.5 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold cursor-pointer transition-colors shadow-xs flex items-center gap-1"
                      >
                        <span>⚡ Auto-Generate Options</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {['A', 'B', 'C', 'D'].map((label, idx) => {
                        const currentOpts = Array.isArray(formData.options) && formData.options.length >= 4 
                          ? formData.options 
                          : [
                              Number(formData.answer ?? 0) - 2 >= 0 ? Number(formData.answer ?? 0) - 2 : 0,
                              Number(formData.answer ?? 0) - 1 >= 0 ? Number(formData.answer ?? 0) - 1 : 1,
                              Number(formData.answer ?? 0),
                              Number(formData.answer ?? 0) + 2
                            ];
                        const optVal = currentOpts[idx] ?? '';
                        const isCorrect = Number(optVal) === Number(formData.answer);

                        return (
                          <div
                            key={idx}
                            className={`p-3 rounded-2xl border transition-all ${
                              isCorrect
                                ? 'bg-emerald-50 border-emerald-400 ring-2 ring-emerald-300'
                                : 'bg-white border-slate-200'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center ${
                                isCorrect ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'
                              }`}>
                                {label}
                              </span>
                              <label className="flex items-center gap-1 text-[11px] font-bold cursor-pointer text-slate-700">
                                <input
                                  type="radio"
                                  name="math-correct-opt"
                                  checked={isCorrect}
                                  onChange={() => {
                                    if (optVal !== '') {
                                      setFormData({ ...formData, answer: Number(optVal) });
                                    }
                                  }}
                                  className="w-4 h-4 text-emerald-600 cursor-pointer"
                                />
                                <span className={isCorrect ? 'text-emerald-700 font-extrabold' : 'text-slate-500'}>
                                  {isCorrect ? 'Correct ✓' : 'Select'}
                                </span>
                              </label>
                            </div>
                            <input
                              type="number"
                              value={optVal}
                              onChange={e => {
                                const val = Number(e.target.value);
                                const nextOpts = [...currentOpts];
                                nextOpts[idx] = val;
                                setFormData({ ...formData, options: nextOpts });
                              }}
                              placeholder={`Option ${label}`}
                              className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl text-base font-bold text-center"
                            />
                          </div>
                        );
                      })}
                    </div>

                    {/* Status hint */}
                    {Array.isArray(formData.options) && formData.options.map(Number).includes(Number(formData.answer)) ? (
                      <div className="text-xs text-emerald-800 bg-emerald-100/80 p-2 rounded-xl flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Option <strong>{formData.answer}</strong> is confirmed as the correct answer and will appear in children quizzes.</span>
                      </div>
                    ) : (
                      <div className="text-xs text-amber-800 bg-amber-100 p-2 rounded-xl flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4 text-amber-600" />
                        <span>Warning: Correct answer ({formData.answer}) is not one of the 4 options. Click "⚡ Auto-Generate Options" to sync!</span>
                      </div>
                    )}
                  </div>
                </>
              )}

              {/* MCQ QUIZZES FORM & QUESTIONS BUILDER */}
              {activeTab === 'quizzes' && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Quiz Title</label>
                      <input
                        type="text"
                        required
                        value={formData.title || ''}
                        onChange={e => setFormData({ ...formData, title: e.target.value })}
                        placeholder="e.g. English Alphabet Master Quiz"
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Category</label>
                      <select
                        value={formData.category || 'english'}
                        onChange={e => setFormData({ ...formData, category: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold"
                      >
                        <option value="english">English (अंग्रेजी / انگریزی)</option>
                        <option value="urdu">Urdu (اردو)</option>
                        <option value="arabic">Arabic (العربية)</option>
                        <option value="hindi">Hindi (हिंदी)</option>
                        <option value="quran">Holy Quran (القرآن الكريم)</option>
                        <option value="islamic">Islamic Studies (اسلامیات)</option>
                        <option value="math">Mathematics (गणित / ریاضی)</option>
                        <option value="gk">General Knowledge (सामान्य ज्ञान / معلومات عامہ)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Subsection / Topic</label>
                      <input
                        type="text"
                        value={formData.subsection || ''}
                        onChange={e => setFormData({ ...formData, subsection: e.target.value })}
                        placeholder="Alphabet A to Z, Surahs..."
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Difficulty</label>
                      <select
                        value={formData.difficulty || 'beginner'}
                        onChange={e => setFormData({ ...formData, difficulty: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm"
                      >
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                      </select>
                    </div>
                    <div className="flex items-center pt-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.isPublished !== false}
                          onChange={e => setFormData({ ...formData, isPublished: e.target.checked })}
                          className="w-4 h-4 text-fuchsia-600 rounded"
                        />
                        <span className="text-xs font-bold text-slate-700">Publish Quiz Live</span>
                      </label>
                    </div>
                  </div>

                  {/* QUIZ QUESTIONS BUILDER */}
                  <div className="p-4 bg-fuchsia-50/70 rounded-2xl border-2 border-fuchsia-200 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-fuchsia-600 text-white font-fredoka font-bold text-xs flex items-center justify-center">
                          {formData.questions?.length || 0}
                        </span>
                        <span className="text-sm font-bold font-fredoka text-fuchsia-900 uppercase">
                          Quiz Questions & Answers
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={handleAddQuestion}
                        className="px-3 py-1.5 bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add Question</span>
                      </button>
                    </div>

                    <div className="space-y-4 max-h-96 overflow-y-auto pr-1">
                      {(formData.questions || []).map((q: any, qIdx: number) => (
                        <div
                          key={q.id || qIdx}
                          className="bg-white rounded-2xl p-4 border border-fuchsia-200 shadow-xs space-y-3"
                        >
                          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                            <span className="px-2.5 py-0.5 bg-fuchsia-100 text-fuchsia-800 rounded-full text-xs font-bold font-fredoka">
                              Question #{qIdx + 1}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleRemoveQuestion(qIdx)}
                              className="p-1 text-rose-600 hover:bg-rose-50 rounded-lg text-xs font-semibold flex items-center gap-1 cursor-pointer"
                              title="Delete Question"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                              <span>Remove</span>
                            </button>
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                              Question Text (English / Main)
                            </label>
                            <input
                              type="text"
                              required
                              value={q.questionText || ''}
                              onChange={e => handleUpdateQuestion(qIdx, 'questionText', e.target.value)}
                              placeholder="e.g. What comes after letter A?"
                              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold"
                            />
                          </div>

                          {/* 4 Multiple Choice Options */}
                          <div>
                            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-2">
                              4 Options & Correct Answer Selector
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              {['A', 'B', 'C', 'D'].map((optLabel, optIdx) => {
                                const isCorrect = q.correctOptionIndex === optIdx;
                                return (
                                  <div
                                    key={optIdx}
                                    className={`flex items-center gap-2 p-2 rounded-xl border transition-all ${
                                      isCorrect
                                        ? 'bg-emerald-50 border-emerald-400 ring-2 ring-emerald-300'
                                        : 'bg-slate-50 border-slate-200'
                                    }`}
                                  >
                                    <label className="flex items-center gap-1.5 cursor-pointer">
                                      <input
                                        type="radio"
                                        name={`correct-opt-${qIdx}`}
                                        checked={isCorrect}
                                        onChange={() => handleUpdateQuestion(qIdx, 'correctOptionIndex', optIdx)}
                                        className="w-4 h-4 text-emerald-600 cursor-pointer"
                                      />
                                      <span
                                        className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center ${
                                          isCorrect
                                            ? 'bg-emerald-600 text-white'
                                            : 'bg-slate-200 text-slate-700'
                                        }`}
                                      >
                                        {optLabel}
                                      </span>
                                    </label>
                                    <input
                                      type="text"
                                      required
                                      value={q.options?.[optIdx] ?? ''}
                                      onChange={e => handleUpdateOption(qIdx, optIdx, e.target.value)}
                                      placeholder={`Option ${optLabel}`}
                                      className="flex-1 p-1.5 bg-transparent border-0 text-xs font-semibold focus:outline-none"
                                    />
                                    {isCorrect && (
                                      <span className="text-[10px] font-bold text-emerald-700 uppercase px-1.5 py-0.5 bg-emerald-100 rounded">
                                        Correct
                                      </span>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                              Explanation / Learning Tip for Kids
                            </label>
                            <input
                              type="text"
                              value={q.explanation || ''}
                              onChange={e => handleUpdateQuestion(qIdx, 'explanation', e.target.value)}
                              placeholder="e.g. Great job! Letter B comes after A in the alphabet."
                              className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                            />
                          </div>
                        </div>
                      ))}

                      {(!formData.questions || formData.questions.length === 0) && (
                        <div className="text-center py-6 text-xs text-slate-500 bg-white rounded-xl border border-dashed border-fuchsia-300">
                          No questions added yet. Click "+ Add Question" above to add quiz questions.
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}

              {/* Audio & Media Attachment Controls in CMS Modal */}
              <div className="p-4 bg-amber-50/70 rounded-2xl border border-amber-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-fredoka text-amber-900 uppercase">
                    Audio & Voice Media Control
                  </span>
                  {formData.audioUrl && (
                    <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Audio Attached
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {/* Record Voice Button */}
                  {isRecording ? (
                    <button
                      type="button"
                      onClick={stopRecordingAudio}
                      className="px-3.5 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold flex items-center gap-2 animate-pulse cursor-pointer"
                    >
                      <Square className="w-3.5 h-3.5" />
                      <span>Stop Recording</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => startRecordingAudio('audioUrl')}
                      className="px-3.5 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer shadow-xs"
                    >
                      <Mic className="w-3.5 h-3.5" />
                      <span>Record Microphone</span>
                    </button>
                  )}

                  {/* Upload Audio File */}
                  <label className="px-3.5 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer shadow-xs">
                    <Upload className="w-3.5 h-3.5 text-slate-500" />
                    <span>Upload Audio (MP3/WAV)</span>
                    <input
                      type="file"
                      accept="audio/*"
                      onChange={e => handleAudioUpload(e, 'audioUrl')}
                      className="hidden"
                    />
                  </label>
                </div>

                {formData.audioUrl && (
                  <div className="text-[11px] font-mono text-slate-600 truncate">
                    URL: {formData.audioUrl}
                  </div>
                )}
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-fredoka font-semibold text-sm cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  id="btn-admin-save-item"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl font-fredoka font-bold text-sm shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  <span>{editingItem ? 'Save Changes' : 'Create Item'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {itemToDelete && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 text-center shadow-2xl border-2 border-rose-200 animate-scaleIn">
            <div className="w-14 h-14 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto mb-3">
              <Trash2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold font-fredoka text-slate-900">Delete Content Item?</h3>
            <p className="text-xs text-slate-500 mt-1 mb-6">
              Are you sure you want to permanently delete <strong>"{itemToDelete.name}"</strong>?
            </p>

            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setItemToDelete(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-fredoka font-semibold text-xs cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                id="btn-confirm-delete"
                onClick={handleConfirmDelete}
                className="px-5 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-fredoka font-bold text-xs shadow cursor-pointer"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
