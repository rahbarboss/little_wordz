import { AppDatabase, AppStats, QuizItem, StudentUser } from '../types.ts';

const ADMIN_TOKEN_KEY = 'little_mindz_admin_token';
const STUDENT_USER_KEY = 'little_mindz_active_student';

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
  try {
    const res = await fetch('/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (data.success && data.user) {
      setStoredStudent(data.user);
    }
    return data;
  } catch (err: any) {
    return { success: false, error: err.message || 'Network error logging in' };
  }
}

export async function registerStudent(params: {
  username: string;
  password: string;
  name: string;
  avatar?: string;
  age?: number;
  grade?: string;
}): Promise<{ success: boolean; user?: StudentUser; error?: string }> {
  try {
    const res = await fetch('/api/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    });
    const data = await res.json();
    if (data.success && data.user) {
      setStoredStudent(data.user);
    }
    return data;
  } catch (err: any) {
    return { success: false, error: err.message || 'Network error creating account' };
  }
}

export async function syncStudentStars(username: string, stars: number): Promise<void> {
  try {
    await fetch('/api/users/stars', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, stars }),
    });
  } catch {
    // silently catch offline / local storage handles it
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
  const res = await fetch('/api/data');
  if (!res.ok) {
    throw new Error('Failed to fetch database');
  }
  const data = await res.json();
  const surahs = data.surahs || data.quranSurahs || [];
  const islamicItems = data.islamicItems || data.islamicStudies || [];
  return {
    alphabets: data.alphabets || [],
    words: data.words || [],
    sentences: data.sentences || [],
    surahs,
    quranSurahs: surahs,
    islamicItems,
    islamicStudies: islamicItems,
    mathItems: data.mathItems || [],
    gkItems: data.gkItems || [],
    quizzes: data.quizzes || [],
  };
}

export async function fetchStats(): Promise<AppStats> {
  const res = await fetch('/api/stats');
  if (!res.ok) {
    throw new Error('Failed to fetch stats');
  }
  return res.json();
}

export async function loginAdmin(username: string, password: string): Promise<{ success: boolean; token?: string; error?: string }> {
  const res = await fetch('/api/admin/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  const data = await res.json();
  if (data.success && data.token) {
    setAdminToken(data.token);
  }
  return data;
}

export async function verifyAdminSession(): Promise<boolean> {
  const token = getAdminToken();
  if (!token) return false;
  try {
    const res = await fetch('/api/admin/verify', {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    return Boolean(data.valid);
  } catch {
    return false;
  }
}

export async function createContent(category: string, data: any): Promise<any> {
  const res = await fetch(`/api/content/${category}`, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Request failed' }));
    throw new Error(err.error || 'Failed to create item');
  }
  return res.json();
}

export async function updateContent(category: string, id: string, data: any): Promise<any> {
  const res = await fetch(`/api/content/${category}/${id}`, {
    method: 'PUT',
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Request failed' }));
    throw new Error(err.error || 'Failed to update item');
  }
  return res.json();
}

export async function deleteContent(category: string, id: string): Promise<any> {
  const res = await fetch(`/api/content/${category}/${id}`, {
    method: 'DELETE',
    headers: getAuthHeaders(),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Request failed' }));
    throw new Error(err.error || 'Failed to delete item');
  }
  return res.json();
}

export async function createQuiz(quiz: Partial<QuizItem>): Promise<any> {
  const res = await fetch('/api/quizzes', {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify(quiz),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Failed to create quiz' }));
    throw new Error(err.error || 'Failed to create quiz');
  }
  return res.json();
}

export async function updateQuiz(id: string, quiz: Partial<QuizItem>): Promise<any> {
  const res = await fetch(`/api/quizzes/${id}`, {
    method: 'PUT',
    headers: getAuthHeaders(),
    body: JSON.stringify(quiz),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Failed to update quiz' }));
    throw new Error(err.error || 'Failed to update quiz');
  }
  return res.json();
}

export async function deleteQuiz(id: string): Promise<any> {
  const res = await fetch(`/api/quizzes/${id}`, {
    method: 'DELETE',
    headers: getAuthHeaders(),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Failed to delete quiz' }));
    throw new Error(err.error || 'Failed to delete quiz');
  }
  return res.json();
}

export async function uploadAudioFile(file: File | Blob, filename = 'recording.webm'): Promise<string> {
  const formData = new FormData();
  formData.append('audio', file, filename);
  const token = getAdminToken();

  const res = await fetch('/api/upload/audio', {
    method: 'POST',
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: formData,
  });

  if (!res.ok) {
    throw new Error('Failed to upload audio');
  }
  const data = await res.json();
  return data.url;
}

export async function uploadImageFile(file: File): Promise<string> {
  const formData = new FormData();
  formData.append('image', file);
  const token = getAdminToken();

  const res = await fetch('/api/upload/image', {
    method: 'POST',
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: formData,
  });

  if (!res.ok) {
    throw new Error('Failed to upload image');
  }
  const data = await res.json();
  return data.url;
}

export async function resetDatabaseToDefault(): Promise<AppDatabase> {
  const res = await fetch('/api/admin/reset-database', {
    method: 'POST',
    headers: getAuthHeaders(),
  });
  if (!res.ok) {
    throw new Error('Failed to reset database');
  }
  const data = await res.json();
  return data.data;
}
