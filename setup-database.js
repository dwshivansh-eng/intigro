const mysql = require('mysql2');

// Database connection for setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // XAMPP MySQL has no password by default
    database: 'mysql' // Connect to default MySQL database first
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL server');
    setupDatabase();
});

async function setupDatabase() {
    try {
        // Create database if it doesn't exist
        await db.promise().query('CREATE DATABASE IF NOT EXISTS intigro_db');
        console.log('Database "intigro_db" created/verified');
        
        // Use the database
        await db.promise().query('USE intigro_db');
        console.log('Using database "intigro_db"');
        
        // Create users table
        await db.promise().query(`
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                password_hash VARCHAR(255),
                phone VARCHAR(20),
                google_id VARCHAR(100),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )
        `);
        console.log('Users table created/verified');
        
        // Create user_profiles table
        await db.promise().query(`
            CREATE TABLE IF NOT EXISTS user_profiles (
                id INT AUTO_INCREMENT PRIMARY KEY,
                user_id INT NOT NULL,
                bio TEXT,
                location VARCHAR(100),
                skills TEXT,
                profile_picture VARCHAR(255),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            )
        `);
        console.log('User profiles table created/verified');
        
        console.log('✅ Database setup completed successfully!');
        console.log('You can now start the server with: node server.js');
        
    } catch (error) {
        console.error('❌ Database setup failed:', error);
    } finally {
        db.end();
    }
}
