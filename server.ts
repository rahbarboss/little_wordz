import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import multer from 'multer';
import { initialDatabase } from './server/initialData.ts';
import { AppDatabase } from './src/types.ts';

const PORT = 3000;
const rootDir = process.cwd();
const DATA_DIR = path.join(rootDir, 'data');
const DB_FILE = path.join(DATA_DIR, 'db.json');
const USERS_FILE = path.join(DATA_DIR, 'users.json');
const UPLOADS_DIR = path.join(rootDir, 'uploads');

// Ensure data & upload directories exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

interface StoredUser {
  id: string;
  username: string;
  password: string;
  name: string;
  avatar: string;
  age?: number;
  grade?: string;
  stars: number;
  createdAt: string;
}

const defaultUsers: StoredUser[] = [
  {
    id: 'user-ibrahim',
    username: 'ibrahim',
    password: '123',
    name: 'Ibrahim',
    avatar: '⚡',
    age: 7,
    grade: 'Grade 2',
    stars: 16,
    createdAt: new Date().toISOString(),
  },
];

function loadUsers(): StoredUser[] {
  try {
    if (fs.existsSync(USERS_FILE)) {
      const raw = fs.readFileSync(USERS_FILE, 'utf-8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.error('Failed to read users.json:', err);
  }
  saveUsers(defaultUsers);
  return defaultUsers;
}

function saveUsers(users: StoredUser[]) {
  try {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed to save users.json:', err);
  }
}

// Initialize database file if not present
function loadDatabase(): AppDatabase {
  try {
    if (fs.existsSync(DB_FILE)) {
      const raw = fs.readFileSync(DB_FILE, 'utf-8');
      const data = JSON.parse(raw);
      // Ensure we keep the latest comprehensive surahs from initialDatabase if db.json has old subset
      let surahs = data.surahs || data.quranSurahs || initialDatabase.surahs;
      if (initialDatabase.surahs && initialDatabase.surahs.length > surahs.length) {
        surahs = initialDatabase.surahs;
      }
      let islamicItems = data.islamicItems || data.islamicStudies || initialDatabase.islamicItems;
      if (initialDatabase.islamicItems && initialDatabase.islamicItems.length > islamicItems.length) {
        islamicItems = initialDatabase.islamicItems;
      }

      const merged: AppDatabase = {
        alphabets: (data.alphabets && data.alphabets.length >= initialDatabase.alphabets.length) ? data.alphabets : initialDatabase.alphabets,
        words: (data.words && data.words.length >= initialDatabase.words.length) ? data.words : initialDatabase.words,
        sentences: (data.sentences && data.sentences.length >= initialDatabase.sentences.length) ? data.sentences : initialDatabase.sentences,
        surahs,
        quranSurahs: surahs,
        islamicItems,
        islamicStudies: islamicItems,
        mathItems: (data.mathItems && data.mathItems.length >= initialDatabase.mathItems.length) ? data.mathItems : initialDatabase.mathItems,
        gkItems: (data.gkItems && data.gkItems.length >= initialDatabase.gkItems.length) ? data.gkItems : initialDatabase.gkItems,
        quizzes: (data.quizzes && data.quizzes.length >= initialDatabase.quizzes.length) ? data.quizzes : initialDatabase.quizzes,
      };
      saveDatabase(merged);
      return merged;
    }
  } catch (err) {
    console.error('Failed to read db.json, fallback to initial:', err);
  }
  saveDatabase(initialDatabase);
  return {
    ...initialDatabase,
    quranSurahs: initialDatabase.surahs,
    islamicStudies: initialDatabase.islamicItems,
  };
}

function saveDatabase(data: AppDatabase) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed to save db.json:', err);
  }
}

// Multer storage for audio & images
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, UPLOADS_DIR);
  },
  filename: (_req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname) || '.webm';
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  },
});
const upload = multer({
  storage,
  limits: { fileSize: 15 * 1024 * 1024 }, // 15MB limit
});

async function startServer() {
  const app = express();
  let db = loadDatabase();

  app.use(express.json({ limit: '20mb' }));
  app.use(express.urlencoded({ extended: true, limit: '20mb' }));

  // Static uploads directory
  app.use('/uploads', express.static(UPLOADS_DIR));

  // Admin Credentials
  const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'rahbar@786';
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '@rahbar786';
  const AUTH_SECRET = process.env.JWT_SECRET || 'little_mindz_super_secret_session_token_2026';

  // Simple token generation
  const makeToken = (username: string) => {
    return Buffer.from(`${username}:${AUTH_SECRET}:${Date.now()}`).toString('base64');
  };

  const verifyToken = (token?: string) => {
    if (!token) return false;
    try {
      const decoded = Buffer.from(token, 'base64').toString('utf-8');
      const [user, secret] = decoded.split(':');
      return user === ADMIN_USERNAME && secret === AUTH_SECRET;
    } catch {
      return false;
    }
  };

  // Auth Middleware
  const requireAdmin = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const authHeader = req.headers.authorization;
    const token = authHeader?.startsWith('Bearer ') ? authHeader.substring(7) : (req.query.token as string);
    if (!verifyToken(token)) {
      res.status(401).json({ error: 'Unauthorized. Admin credentials required.' });
      return;
    }
    next();
  };

  // ================= API ROUTES =================

  // 1. Health check
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', name: 'LITTLE MINDZ API', time: new Date().toISOString() });
  });

  // 2. Student User Authentication: Login
  app.post('/api/users/login', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).json({ success: false, error: 'Please enter both Username and Password.' });
      return;
    }

    const users = loadUsers();
    const cleanUser = String(username).trim().toLowerCase();
    const cleanPass = String(password).trim();

    const found = users.find(u => u.username.toLowerCase() === cleanUser && u.password === cleanPass);
    if (found) {
      const { password: _, ...safeUser } = found;
      res.json({ success: true, user: safeUser });
    } else {
      // Check if username exists but password wrong
      const userExists = users.some(u => u.username.toLowerCase() === cleanUser);
      if (userExists) {
        res.status(401).json({ success: false, error: 'Incorrect Password. Please check and try again.' });
      } else {
        res.status(404).json({
          success: false,
          error: 'Username not found. Please click "Create New Account" below to register!',
        });
      }
    }
  });

  // 3. Student User Authentication: Register / Create New Account
  app.post('/api/users/register', (req, res) => {
    const { username, password, name, avatar, age, grade } = req.body;
    if (!username || !password || !name) {
      res.status(400).json({ success: false, error: 'Name, Username, and Password are required.' });
      return;
    }

    const cleanUser = String(username).trim().toLowerCase().replace(/\s+/g, '');
    const cleanPass = String(password).trim();
    const cleanName = String(name).trim();

    if (cleanUser.length < 2) {
      res.status(400).json({ success: false, error: 'Username must be at least 2 characters.' });
      return;
    }
    if (cleanPass.length < 2) {
      res.status(400).json({ success: false, error: 'Password must be at least 2 characters.' });
      return;
    }

    const users = loadUsers();
    const alreadyExists = users.some(u => u.username.toLowerCase() === cleanUser);
    if (alreadyExists) {
      res.status(409).json({
        success: false,
        error: `Username "${cleanUser}" is already taken. Please choose another username or log in.`,
      });
      return;
    }

    const newUser: StoredUser = {
      id: `user-${Date.now()}`,
      username: cleanUser,
      password: cleanPass,
      name: cleanName,
      avatar: avatar || '⚡',
      age: Number(age) || 6,
      grade: grade || 'Class 1',
      stars: 10, // Starter bonus stars
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    saveUsers(users);

    const { password: _, ...safeUser } = newUser;
    res.status(201).json({ success: true, user: safeUser, message: 'Account created successfully!' });
  });

  // 4. Update Student User Stars
  app.post('/api/users/stars', (req, res) => {
    const { username, stars } = req.body;
    if (!username || typeof stars !== 'number') {
      res.status(400).json({ success: false, error: 'Invalid parameters' });
      return;
    }
    const users = loadUsers();
    const idx = users.findIndex(u => u.username.toLowerCase() === String(username).trim().toLowerCase());
    if (idx !== -1) {
      users[idx].stars = Math.max(0, stars);
      saveUsers(users);
      res.json({ success: true, stars: users[idx].stars });
    } else {
      res.status(404).json({ success: false, error: 'User not found' });
    }
  });

  // 5. List Student Users (for profiles list/leaderboard)
  app.get('/api/users', (_req, res) => {
    const users = loadUsers().map(({ password: _, ...u }) => u);
    res.json(users);
  });

  // 6. Admin Login
  app.post('/api/admin/login', (req, res) => {
    const { username, password } = req.body;
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      const token = makeToken(username);
      res.json({
        success: true,
        token,
        user: { username: ADMIN_USERNAME, role: 'admin', name: 'Administrator' },
      });
    } else {
      res.status(401).json({ success: false, error: 'Invalid username or password' });
    }
  });

  // 3. Verify Admin Session
  app.get('/api/admin/verify', (req, res) => {
    const authHeader = req.headers.authorization;
    const token = authHeader?.startsWith('Bearer ') ? authHeader.substring(7) : (req.query.token as string);
    if (verifyToken(token)) {
      res.json({ valid: true, username: ADMIN_USERNAME });
    } else {
      res.status(401).json({ valid: false });
    }
  });

  // 4. Get full database & stats
  app.get('/api/data', (_req, res) => {
    db = loadDatabase();
    res.json(db);
  });

  // 5. Get summary stats
  app.get('/api/stats', (_req, res) => {
    db = loadDatabase();
    const alphabets = db.alphabets || [];
    const words = db.words || [];
    const surahs = db.surahs || db.quranSurahs || [];
    const islamic = db.islamicItems || db.islamicStudies || [];
    const mathItems = db.mathItems || [];
    const gkItems = db.gkItems || [];
    const quizzes = db.quizzes || [];

    const stats = {
      totalEnglish: alphabets.filter(a => a.language === 'en').length + words.filter(w => w.language === 'en').length,
      totalUrdu: alphabets.filter(a => a.language === 'ur').length + words.filter(w => w.language === 'ur').length,
      totalArabic: alphabets.filter(a => a.language === 'ar').length + words.filter(w => w.language === 'ar').length,
      totalHindi: alphabets.filter(a => a.language === 'hi').length + words.filter(w => w.language === 'hi').length,
      totalSurahs: surahs.length,
      totalIslamic: islamic.length,
      totalMath: mathItems.length,
      totalGK: gkItems.length,
      totalGames: quizzes.length,
      totalQuestions: quizzes.reduce((acc, q) => acc + (q.questions?.length || 0), 0),
    };
    res.json(stats);
  });

  const getCollectionKey = (category: string): keyof AppDatabase | null => {
    const collectionMap: Record<string, keyof AppDatabase> = {
      alphabets: 'alphabets',
      words: 'words',
      sentences: 'sentences',
      quran: 'surahs',
      surahs: 'surahs',
      quranSurahs: 'surahs',
      islamic: 'islamicItems',
      islamicItems: 'islamicItems',
      islamicStudies: 'islamicItems',
      math: 'mathItems',
      mathItems: 'mathItems',
      gk: 'gkItems',
      gkItems: 'gkItems',
    };
    return collectionMap[category] || null;
  };

  // 6. Generic Content CRUD: Create
  app.post('/api/content/:category', requireAdmin, (req, res) => {
    const { category } = req.params;
    const newItem = req.body;
    db = loadDatabase();

    const key = getCollectionKey(category);
    if (!key || !Array.isArray(db[key])) {
      res.status(400).json({ error: `Invalid collection category: ${category}` });
      return;
    }

    if (!newItem.id) {
      newItem.id = `${category}-${Date.now()}`;
    }
    if (newItem.order === undefined) {
      newItem.order = (db[key] as any[]).length + 1;
    }

    (db[key] as any[]).push(newItem);
    saveDatabase(db);
    res.status(201).json({ success: true, item: newItem });
  });

  // 7. Generic Content CRUD: Update
  app.put('/api/content/:category/:id', requireAdmin, (req, res) => {
    const { category, id } = req.params;
    const updateData = req.body;
    db = loadDatabase();

    const key = getCollectionKey(category);
    if (!key || !Array.isArray(db[key])) {
      res.status(400).json({ error: `Invalid collection category: ${category}` });
      return;
    }

    const items = db[key] as any[];
    const index = items.findIndex(i => String(i.id) === String(id));
    if (index === -1) {
      res.status(404).json({ error: `Item not found with id ${id}` });
      return;
    }

    items[index] = { ...items[index], ...updateData, id: items[index].id };
    saveDatabase(db);
    res.json({ success: true, item: items[index] });
  });

  // 8. Generic Content CRUD: Delete
  app.delete('/api/content/:category/:id', requireAdmin, (req, res) => {
    const { category, id } = req.params;
    db = loadDatabase();

    const key = getCollectionKey(category);
    if (!key || !Array.isArray(db[key])) {
      res.status(400).json({ error: `Invalid collection category: ${category}` });
      return;
    }

    const items = db[key] as any[];
    const initialLen = items.length;
    (db[key] as any[]) = items.filter(i => String(i.id) !== String(id));

    if (db[key].length === initialLen) {
      res.status(404).json({ error: `Item not found with id ${id}` });
      return;
    }

    saveDatabase(db);
    res.json({ success: true, message: 'Item deleted successfully' });
  });

  // 9. Quizzes CRUD
  app.post('/api/quizzes', requireAdmin, (req, res) => {
    const newQuiz = req.body;
    db = loadDatabase();
    if (!newQuiz.id) {
      newQuiz.id = `quiz-${Date.now()}`;
    }
    if (newQuiz.order === undefined) {
      newQuiz.order = db.quizzes.length + 1;
    }
    db.quizzes.push(newQuiz);
    saveDatabase(db);
    res.status(201).json({ success: true, quiz: newQuiz });
  });

  app.put('/api/quizzes/:id', requireAdmin, (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    db = loadDatabase();
    const idx = db.quizzes.findIndex(q => q.id === id);
    if (idx === -1) {
      res.status(404).json({ error: 'Quiz not found' });
      return;
    }
    db.quizzes[idx] = { ...db.quizzes[idx], ...updateData, id };
    saveDatabase(db);
    res.json({ success: true, quiz: db.quizzes[idx] });
  });

  app.delete('/api/quizzes/:id', requireAdmin, (req, res) => {
    const { id } = req.params;
    db = loadDatabase();
    const initialLen = db.quizzes.length;
    db.quizzes = db.quizzes.filter(q => q.id !== id);
    if (db.quizzes.length === initialLen) {
      res.status(404).json({ error: 'Quiz not found' });
      return;
    }
    saveDatabase(db);
    res.json({ success: true, message: 'Quiz deleted successfully' });
  });

  // 10. File & Audio Uploads
  app.post('/api/upload/audio', requireAdmin, upload.single('audio'), (req, res) => {
    if (!req.file) {
      res.status(400).json({ error: 'No audio file uploaded' });
      return;
    }
    const publicUrl = `/uploads/${req.file.filename}`;
    res.json({
      success: true,
      url: publicUrl,
      filename: req.file.filename,
      size: req.file.size,
    });
  });

  app.post('/api/upload/image', requireAdmin, upload.single('image'), (req, res) => {
    if (!req.file) {
      res.status(400).json({ error: 'No image file uploaded' });
      return;
    }
    const publicUrl = `/uploads/${req.file.filename}`;
    res.json({
      success: true,
      url: publicUrl,
      filename: req.file.filename,
    });
  });

  // 11. Reset to Default Initial Database
  app.post('/api/admin/reset-database', requireAdmin, (_req, res) => {
    db = JSON.parse(JSON.stringify(initialDatabase));
    saveDatabase(db);
    res.json({ success: true, message: 'Database reset to default seed data', data: db });
  });

  // ================= VITE MIDDLEWARE SETUP =================
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`LITTLE MINDZ server running on http://localhost:${PORT}`);
  });
}

startServer();
