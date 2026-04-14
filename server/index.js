// server/index.js
require('dotenv').config()

const express   = require('express')
const cors      = require('cors')
const { body, validationResult } = require('express-validator')
const { init, getPool } = require('./db')

const app  = express()
const PORT = process.env.PORT || 5000

// ── Middleware ────────────────────────────────────────────────
app.use(cors({
  origin:      process.env.CLIENT_ORIGIN || 'http://localhost:5173',
  methods:     ['GET', 'POST'],
  credentials: true,
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ── Helpers ───────────────────────────────────────────────────
function getClientIP(req) {
  return (
    req.headers['x-forwarded-for']?.split(',')[0].trim() ||
    req.socket?.remoteAddress ||
    null
  )
}

// ── Routes ────────────────────────────────────────────────────

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// POST /api/contact  — save form submission
app.post(
  '/api/contact',

  // Validation rules
  [
    body('name')
      .trim()
      .notEmpty().withMessage('Name is required.')
      .isLength({ max: 120 }).withMessage('Name must be under 120 characters.'),

    body('email')
      .trim()
      .notEmpty().withMessage('Email is required.')
      .isEmail().withMessage('Please provide a valid email address.')
      .normalizeEmail(),

    body('subject')
      .trim()
      .notEmpty().withMessage('Subject is required.')
      .isLength({ max: 250 }).withMessage('Subject must be under 250 characters.'),

    body('message')
      .trim()
      .notEmpty().withMessage('Message is required.')
      .isLength({ min: 10 }).withMessage('Message must be at least 10 characters.'),
  ],

  async (req, res) => {
    // Return validation errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({
        success: false,
        errors:  errors.array().map(e => e.msg),
      })
    }

    const { name, email, subject, message } = req.body
    const ip = getClientIP(req)

    try {
      const pool = getPool()
      const [result] = await pool.execute(
        'INSERT INTO contacts (name, email, subject, message, ip_address) VALUES (?, ?, ?, ?, ?)',
        [name, email, subject, message, ip]
      )

      console.log(`📩  New contact #${result.insertId} from ${name} <${email}>`)

      return res.status(201).json({
        success: true,
        message: 'Your message has been received. I\'ll get back to you soon!',
        id:      result.insertId,
      })
    } catch (err) {
      console.error('DB error:', err.message)
      return res.status(500).json({
        success: false,
        errors:  ['Server error. Please try again later.'],
      })
    }
  }
)

// GET /api/contacts  — list all submissions (admin view, no auth for demo)
app.get('/api/contacts', async (req, res) => {
  try {
    const pool = getPool()
    const [rows] = await pool.execute(
      'SELECT id, name, email, subject, LEFT(message,120) AS preview, ip_address, created_at FROM contacts ORDER BY created_at DESC'
    )
    res.json({ success: true, data: rows })
  } catch (err) {
    res.status(500).json({ success: false, errors: [err.message] })
  }
})

// ── Start ─────────────────────────────────────────────────────
;(async () => {
  try {
    await init()                     // create DB + table
    app.listen(PORT, () => {
      console.log(`🚀  Server running at http://localhost:${PORT}`)
      console.log(`📋  Contacts list:   http://localhost:${PORT}/api/contacts`)
    })
  } catch (err) {
    console.error('❌  Failed to start server:', err.message)
    process.exit(1)
  }
})()
