// server/db.js
// Creates the `portfolio` database and `contacts` table automatically
// if they don't exist yet — no manual SQL setup required.
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YourStrongPassword123!';
const mysql  = require('mysql2/promise')
require('dotenv').config()

const {
  DB_HOST = 'localhost',
  DB_PORT = 3306,
  DB_USER = 'root',
  DB_PASSWORD = 'YourStrongPassword123!',
  DB_NAME = 'portfolio',
} = process.env

let pool

async function init() {
  // 1. Connect without specifying a database so we can create it
  const root = await mysql.createConnection({
    host:     DB_HOST,
    port:     Number(DB_PORT),
    user:     DB_USER,
    password: DB_PASSWORD,
  })

  // 2. Create database if not exists
  await root.execute(
    `CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`
  )
  await root.end()
  console.log(`✅  Database "${DB_NAME}" ready`)

  // 3. Create pool connected to the portfolio database
  pool = mysql.createPool({
    host:               DB_HOST,
    port:               Number(DB_PORT),
    user:               DB_USER,
    password:           DB_PASSWORD,
    database:           DB_NAME,
    waitForConnections: true,
    connectionLimit:    10,
    queueLimit:         0,
  })

  // 4. Create contacts table if not exists
  await pool.execute(`
    CREATE TABLE IF NOT EXISTS contacts (
      id         INT AUTO_INCREMENT PRIMARY KEY,
      name       VARCHAR(120)  NOT NULL,
      email      VARCHAR(180)  NOT NULL,
      subject    VARCHAR(250)  NOT NULL,
      message    TEXT          NOT NULL,
      ip_address VARCHAR(45)   DEFAULT NULL,
      created_at TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `)
  console.log('✅  Table "contacts" ready')
}

function getPool() {
  if (!pool) throw new Error('DB not initialised — call init() first')
  return pool
}

module.exports = { init, getPool }
