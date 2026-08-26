import { AppDatabase, AppStats, QuizItem, StudentUser } from '../types.ts';
import { initialDatabase } from '../../server/initialData.ts';

const ADMIN_TOKEN_KEY = 'little_mindz_admin_token';
const STUDENT_USER_KEY = 'little_mindz_active_student';
const LOCAL_DB_KEY = 'little_mindz_local_db';
const LOCAL_USERS_KEY = 'little_mindz_local_users';

const defaultLocalUsers: Array<StudentUser & { password?: string }> = [
  {
    id: 'user-ibrahim',
    username: 'ibrahim',
    password: '123',
    name: 'Ibrahim',
    avatar: '⚡',
    age: 7,
    grade: 'Grade 2',
    stars: 16,
  },
];

function getLocalUsers(): Array<StudentUser & { password?: string }> {
  if (typeof window === 'undefined') return defaultLocalUsers;
  try {
    const raw = localStorage.getItem(LOCAL_USERS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {
    // ignore
  }
  return defaultLocalUsers;
}

function saveLocalUsers(users: Array<StudentUser & { password?: string }>) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(users));
  }
}

function getLocalDatabase(): AppDatabase {
  if (typeof window === 'undefined') return initialDatabase;
  try {
    const raw = localStorage.getItem(LOCAL_DB_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.alphabets && parsed.alphabets.length > 0) {
        return {
          ...initialDatabase,
          ...parsed,
          surahs: parsed.surahs || parsed.quranSurahs || initialDatabase.surahs,
          quranSurahs: parsed.surahs || parsed.quranSurahs || initialDatabase.quranSurahs,
          islamicItems: parsed.islamicItems || parsed.islamicStudies || initialDatabase.islamicItems,
          islamicStudies: parsed.islamicItems || parsed.islamicStudies || initialDatabase.islamicStudies,
        };
      }
    }
  } catch {
    // ignore
  }
  return initialDatabase;
}

function saveLocalDatabase(db: AppDatabase) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(LOCAL_DB_KEY, JSON.stringify(db));
  }
}

export function getAdminToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(ADMIN_TOKEN_KEY);
}

export function setAdminToken(token: string) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(ADMIN_TOKEN_KEY, token);
  }
}

export function clearAdminToken() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(ADMIN_TOKEN_KEY);
  }
}

// Student User Session
export function getStoredStudent(): StudentUser | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STUDENT_USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function setStoredStudent(user: StudentUser) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STUDENT_USER_KEY, JSON.stringify(user));
  }
}

export function clearStoredStudent() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STUDENT_USER_KEY);
  }
}

export async function loginStudent(
  username: string,
  password: string
): Promise<{ success: boolean; user?: StudentUser; error?: string }> {
  const cleanUser = String(username).trim().toLowerCase();
  const cleanPass = String(password).trim();

  try {
    const res = await fetch('/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: cleanUser, password: cleanPass }),
    });
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.user) {
        setStoredStudent(data.user);
        return data;
      }
    }
  } catch {
    // Fallback to client-side storage if server is unavailable (e.g. Vercel static)
  }

  // Local fallback
  const users = getLocalUsers();
  const found = users.find(u => u.username.toLowerCase() === cleanUser && u.password === cleanPass);
  if (found) {
    const { password: _, ...safeUser } = found;
    setStoredStudent(safeUser);
    return { success: true, user: safeUser };
  }

  const userExists = users.some(u => u.username.toLowerCase() === cleanUser);
  if (userExists) {
    return { success: false, error: 'Incorrect Password. Please try again.' };
  }

  return {
    success: false,
    error: 'Username not found. Please click "Create New Account" below to register!',
  };
}

export async function registerStudent(params: {
  username: string;
  password: string;
  name: string;
  avatar?: string;
  age?: number;
  grade?: string;
}): Promise<{ success: boolean; user?: StudentUser; error?: string }> {
  const cleanUser = String(params.username).trim().toLowerCase().replace(/\s+/g, '');
  const cleanPass = String(params.password).trim();
  const cleanName = String(params.name).trim();

  try {
    const res = await fetch('/api/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...params, username: cleanUser, password: cleanPass, name: cleanName }),
    });
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.user) {
        setStoredStudent(data.user);
        return data;
      }
    }
  } catch {
    // Fallback to client-side storage
  }

  const users = getLocalUsers();
  if (users.some(u => u.username.toLowerCase() === cleanUser)) {
    return {
      success: false,
      error: `Username "${cleanUser}" is already taken. Please choose another username.`,
    };
  }

  const newUser: StudentUser & { password?: string } = {
    id: `user-${Date.now()}`,
    username: cleanUser,
    password: cleanPass,
    name: cleanName,
    avatar: params.avatar || '⚡',
    age: params.age || 6,
    grade: params.grade || 'Class 1',
    stars: 10,
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  saveLocalUsers(users);

  const { password: _, ...safeUser } = newUser;
  setStoredStudent(safeUser);
  return { success: true, user: safeUser };
}

export async function syncStudentStars(username: string, stars: number): Promise<void> {
  const cleanUser = String(username).trim().toLowerCase();
  try {
    await fetch('/api/users/stars', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: cleanUser, stars }),
    });
  } catch {
    // Local fallback
    const users = getLocalUsers();
    const idx = users.findIndex(u => u.username.toLowerCase() === cleanUser);
    if (idx !== -1) {
      users[idx].stars = Math.max(0, stars);
      saveLocalUsers(users);
    }
  }
}

function getAuthHeaders() {
  const token = getAdminToken();
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

export async function fetchDatabase(): Promise<AppDatabase> {
  try {
    const res = await fetch('/api/data');
    if (res.ok) {
      const data = await res.json();
      if (data && (data.alphabets || data.words || data.surahs)) {
        const surahs = data.surahs || data.quranSurahs || initialDatabase.surahs;
        const islamicItems = data.islamicItems || data.islamicStudies || initialDatabase.islamicItems;
        const formatted: AppDatabase = {
          alphabets: data.alphabets || initialDatabase.alphabets,
          words: data.words || initialDatabase.words,
          sentences: data.sentences || initialDatabase.sentences,
          surahs,
          quranSurahs: surahs,
          islamicItems,
          islamicStudies: islamicItems,
          mathItems: data.mathItems || initialDatabase.mathItems,
          gkItems: data.gkItems || initialDatabase.gkItems,
          quizzes: data.quizzes || initialDatabase.quizzes,
        };
        saveLocalDatabase(formatted);
        return formatted;
      }
    }
  } catch {
    // Handled by local fallback
  }

  // Gracefully fallback to localStorage or embedded initialDatabase so Vercel never crashes
  return getLocalDatabase();
}

export async function fetchStats(): Promise<AppStats> {
  try {
    const res = await fetch('/api/stats');
    if (res.ok) {
      return await res.json();
    }
  } catch {
    // Fallback
  }

  const db = getLocalDatabase();
  return {
    totalEnglish: db.alphabets.filter(a => a.language === 'en').length,
    totalUrdu: db.alphabets.filter(a => a.language === 'ur').length,
    totalArabic: db.alphabets.filter(a => a.language === 'ar').length,
    totalHindi: db.alphabets.filter(a => a.language === 'hi').length,
    totalSurahs: (db.surahs || db.quranSurahs || []).length,
    totalIslamic: (db.islamicItems || db.islamicStudies || []).length,
    totalMath: (db.mathItems || []).length,
    totalGK: (db.gkItems || []).length,
    totalGames: 4,
    totalQuestions: (db.quizzes || []).reduce((acc, q) => acc + (q.questions ? q.questions.length : 0), 0),
  };
}

export async function loginAdmin(username: string, password: string): Promise<{ success: boolean; token?: string; error?: string }> {
  try {
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.token) {
        setAdminToken(data.token);
        return data;
      }
    }
  } catch {
    // Fallback for static hosts
  }

  // Direct check fallback (admin / 123)
  if (username === 'admin' && password === '123') {
    const localToken = `local-token-${Date.now()}`;
    setAdminToken(localToken);
    return { success: true, token: localToken };
  }

  return { success: false, error: 'Invalid admin credentials' };
}

export async function verifyAdminSession(): Promise<boolean> {
  const token = getAdminToken();
  if (!token) return false;
  if (token.startsWith('local-token-')) return true;

  try {
    const res = await fetch('/api/admin/verify', {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    return Boolean(data.valid);
  } catch {
    return true; // Keep local session active
  }
}

export async function createContent(category: string, data: any): Promise<any> {
  try {
    const res = await fetch(`/api/content/${category}`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data),
    });
    if (res.ok) return await res.json();
  } catch {
    // local fallback
  }

  const db = getLocalDatabase();
  const key = category as keyof AppDatabase;
  if (Array.isArray(db[key])) {
    const newItem = { id: `item-${Date.now()}`, ...data };
    (db[key] as any[]).push(newItem);
    saveLocalDatabase(db);
    return { success: true, item: newItem };
  }
  return { success: true, item: data };
}

export async function updateContent(category: string, id: string, data: any): Promise<any> {
  try {
    const res = await fetch(`/api/content/${category}/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(data),
    });
    if (res.ok) return await res.json();
  } catch {
    // local fallback
  }

  const db = getLocalDatabase();
  const key = category as keyof AppDatabase;
  if (Array.isArray(db[key])) {
    const list = db[key] as any[];
    const idx = list.findIndex(i => i.id === id);
    if (idx !== -1) {
      list[idx] = { ...list[idx], ...data };
      saveLocalDatabase(db);
    }
  }
  return { success: true };
}

export async function deleteContent(category: string, id: string): Promise<any> {
  try {
    const res = await fetch(`/api/content/${category}/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
    if (res.ok) return await res.json();
  } catch {
    // local fallback
  }

  const db = getLocalDatabase();
  const key = category as keyof AppDatabase;
  if (Array.isArray(db[key])) {
    (db as any)[key] = (db[key] as any[]).filter(i => i.id !== id);
    saveLocalDatabase(db);
  }
  return { success: true };
}

export async function createQuiz(quiz: Partial<QuizItem>): Promise<any> {
  try {
    const res = await fetch('/api/quizzes', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(quiz),
    });
    if (res.ok) return await res.json();
  } catch {
    // local fallback
  }

  const db = getLocalDatabase();
  const newQuiz = { id: `quiz-${Date.now()}`, ...quiz };
  db.quizzes.push(newQuiz as QuizItem);
  saveLocalDatabase(db);
  return { success: true, quiz: newQuiz };
}

export async function updateQuiz(id: string, quiz: Partial<QuizItem>): Promise<any> {
  try {
    const res = await fetch(`/api/quizzes/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(quiz),
    });
    if (res.ok) return await res.json();
  } catch {
    // local fallback
  }

  const db = getLocalDatabase();
  const idx = db.quizzes.findIndex(q => q.id === id);
  if (idx !== -1) {
    db.quizzes[idx] = { ...db.quizzes[idx], ...quiz } as QuizItem;
    saveLocalDatabase(db);
  }
  return { success: true };
}

export async function deleteQuiz(id: string): Promise<any> {
  try {
    const res = await fetch(`/api/quizzes/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
    if (res.ok) return await res.json();
  } catch {
    // local fallback
  }

  const db = getLocalDatabase();
  db.quizzes = db.quizzes.filter(q => q.id !== id);
  saveLocalDatabase(db);
  return { success: true };
}

export async function uploadAudioFile(file: File | Blob, filename = 'recording.webm'): Promise<string> {
  const formData = new FormData();
  formData.append('audio', file, filename);
  const token = getAdminToken();

  try {
    const res = await fetch('/api/upload/audio', {
      method: 'POST',
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: formData,
    });
    if (res.ok) {
      const data = await res.json();
      return data.url;
    }
  } catch {
    // ignore
  }

  // Client-side Blob URL fallback
  return URL.createObjectURL(file);
}

export async function uploadImageFile(file: File): Promise<string> {
  const formData = new FormData();
  formData.append('image', file);
  const token = getAdminToken();

  try {
    const res = await fetch('/api/upload/image', {
      method: 'POST',
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: formData,
    });
    if (res.ok) {
      const data = await res.json();
      return data.url;
    }
  } catch {
    // ignore
  }

  // Client-side Data URL / Blob URL fallback
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.readAsDataURL(file);
  });
}

export async function resetDatabaseToDefault(): Promise<AppDatabase> {
  try {
    const res = await fetch('/api/admin/reset-database', {
      method: 'POST',
      headers: getAuthHeaders(),
    });
    if (res.ok) {
      const data = await res.json();
      saveLocalDatabase(data.data);
      return data.data;
    }
  } catch {
    // ignore
  }

  saveLocalDatabase(initialDatabase);
  return initialDatabase;
}

