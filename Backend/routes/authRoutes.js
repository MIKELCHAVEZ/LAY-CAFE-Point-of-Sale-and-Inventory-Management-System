import { Router } from 'express';
import db from '../config/db.js';
import { makeToken, requireAuth, verifyPassword } from '../middleware/auth.js';
import ValidationError from '../utils/ValidationError.js';
const router = Router();
router.post('/login', async (req, res, next) => {
  try {
    const username = String(req.body?.username || '').trim();
    const password = String(req.body?.password || '');
    if (!username || !password)
      throw new ValidationError(400, 'Enter your username and password.');
    const [rows] = await db.query('SELECT id, username, full_name, role, password_hash FROM users WHERE username = ? LIMIT 1', [username]);
    if (!rows[0] || !verifyPassword(password, rows[0].password_hash))
      throw new ValidationError(401, 'Incorrect username or password.');
    const { id, full_name: name, role } = rows[0];
    res.json({ token: makeToken(rows[0]), user: { id, username, name, role } });
  }
  catch (err) {
    next(err);
  }
});
router.get('/me', requireAuth(), (req, res) => res.json({ user: req.user }));
export default router;
