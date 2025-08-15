const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'intigro-secret-key-2024';

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Shivansh@2003', // XAMPP MySQL has no password by default
    database: 'intigro_db'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// User Registration
app.post('/api/register', async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;
        
        // Check if user already exists
        const [existingUsers] = await db.promise().query(
            'SELECT * FROM users WHERE email = ?',
            [email]
        );
        
        if (existingUsers.length > 0) {
            return res.status(400).json({ error: 'User already exists' });
        }
        
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Insert user
        const [result] = await db.promise().query(
            'INSERT INTO users (name, email, password_hash, phone, created_at) VALUES (?, ?, ?, ?, NOW())',
            [name, email, hashedPassword, phone]
        );
        
        // Create user profile
        await db.promise().query(
            'INSERT INTO user_profiles (user_id, bio, location, skills) VALUES (?, ?, ?, ?)',
            [result.insertId, '', '', '']
        );
        
        res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// User Login
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Find user
        const [users] = await db.promise().query(
            'SELECT * FROM users WHERE email = ?',
            [email]
        );
        
        if (users.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        
        const user = users[0];
        
        // Check password
        const isValidPassword = await bcrypt.compare(password, user.password_hash);
        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        
        // Generate JWT token
        const token = jwt.sign(
            { userId: user.id, email: user.email },
            JWT_SECRET,
            { expiresIn: '24h' }
        );
        
        res.json({
            message: 'Login successful',
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                phone: user.phone
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Google OAuth Login (Simulated)
app.post('/api/google-login', async (req, res) => {
    try {
        const { email, name, googleId } = req.body;
        
        // Check if user exists
        let [users] = await db.promise().query(
            'SELECT * FROM users WHERE email = ?',
            [email]
        );
        
        let userId;
        
        if (users.length === 0) {
            // Create new user
            const [result] = await db.promise().query(
                'INSERT INTO users (name, email, google_id, created_at) VALUES (?, ?, ?, NOW())',
                [name, email, googleId]
            );
            userId = result.insertId;
            
            // Create user profile
            await db.promise().query(
                'INSERT INTO user_profiles (user_id, bio, location, skills) VALUES (?, ?, ?, ?)',
                [userId, '', '', '']
            );
        } else {
            userId = users[0].id;
            // Update Google ID if not set
            if (!users[0].google_id) {
                await db.promise().query(
                    'UPDATE users SET google_id = ? WHERE id = ?',
                    [googleId, userId]
                );
            }
        }
        
        // Generate JWT token
        const token = jwt.sign(
            { userId, email },
            JWT_SECRET,
            { expiresIn: '24h' }
        );
        
        res.json({
            message: 'Google login successful',
            token,
            user: {
                id: userId,
                name,
                email
            }
        });
    } catch (error) {
        console.error('Google login error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Protected route - Get user profile
app.get('/api/profile', authenticateToken, async (req, res) => {
    try {
        const [users] = await db.promise().query(
            'SELECT u.*, up.* FROM users u LEFT JOIN user_profiles up ON u.id = up.user_id WHERE u.id = ?',
            [req.user.userId]
        );
        
        if (users.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        
        const user = users[0];
        res.json({
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            bio: user.bio,
            location: user.location,
            skills: user.skills,
            created_at: user.created_at
        });
    } catch (error) {
        console.error('Profile error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Update user profile
app.put('/api/profile', authenticateToken, async (req, res) => {
    try {
        const { bio, location, skills } = req.body;
        
        await db.promise().query(
            'UPDATE user_profiles SET bio = ?, location = ?, skills = ? WHERE user_id = ?',
            [bio, location, skills, req.user.userId]
        );
        
        res.json({ message: 'Profile updated successfully' });
    } catch (error) {
        console.error('Profile update error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Middleware to authenticate JWT token
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ error: 'Access token required' });
    }
    
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid or expired token' });
        }
        req.user = user;
        next();
    });
}

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Open http://localhost:${PORT} in your browser`);
});
