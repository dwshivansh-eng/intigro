# Intigro Full Login System Setup Guide

## 🚀 Complete Setup Instructions

This guide will help you set up a full login system with Node.js backend, MySQL database, and frontend authentication for your Intigro website.

## 📋 Prerequisites

1. **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
2. **MySQL** (v8.0 or higher) - [Download here](https://dev.mysql.com/downloads/)
3. **Git** (optional) - [Download here](https://git-scm.com/)

## 🗄️ Database Setup

### 1. Install MySQL
- Download and install MySQL from the official website
- Remember your root password during installation
- Start MySQL service

### 2. Create Database
```bash
# Open MySQL command line or MySQL Workbench
mysql -u root -p

# Run the setup script
source database/setup.sql
```

**OR manually:**
```sql
CREATE DATABASE intigro_db;
USE intigro_db;
-- Then run all the CREATE TABLE statements from database/setup.sql
```

## 🔧 Backend Setup

### 1. Install Dependencies
```bash
# In your project directory
npm install
```

### 2. Configure Database Connection
Edit `server.js` and update the database connection:
```javascript
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'YOUR_MYSQL_PASSWORD', // Update this
    database: 'intigro_db'
});
```

### 3. Start the Server
```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:3000`

## 🌐 Frontend Setup

### 1. Open the Website
- Navigate to `http://localhost:3000` in your browser
- The login system is already integrated into your HTML

### 2. Test the System
- Click "Login" button in the navigation
- Try registering a new account
- Test login with your credentials
- Access the user dashboard

## 🔐 Features Included

### ✅ **User Authentication**
- User registration with email/password
- Secure login system
- JWT token-based authentication
- Password hashing with bcrypt

### ✅ **Google OAuth (Simulated)**
- Google login button (demo mode)
- Creates user account automatically
- Links to existing accounts

### ✅ **User Management**
- User profiles with bio, location, skills
- Profile updates
- Secure session management

### ✅ **Database Schema**
- Users table with secure password storage
- User profiles table
- Course structure tables
- Progress tracking tables
- Contact submissions

### ✅ **Security Features**
- Password hashing (bcrypt)
- JWT tokens with expiration
- Protected API routes
- Input validation
- SQL injection prevention

## 🚨 Troubleshooting

### Common Issues:

1. **"Cannot connect to MySQL"**
   - Check if MySQL service is running
   - Verify password in `server.js`
   - Ensure database `intigro_db` exists

2. **"Module not found" errors**
   - Run `npm install` to install dependencies
   - Check Node.js version (should be 14+)

3. **"Port already in use"**
   - Change port in `server.js` (line 18)
   - Or kill process using port 3000

4. **Login not working**
   - Check browser console for errors
   - Verify server is running
   - Check database connection

### Database Connection Issues:
```bash
# Test MySQL connection
mysql -u root -p

# Check if database exists
SHOW DATABASES;

# Check if tables exist
USE intigro_db;
SHOW TABLES;
```

## 🔧 Customization

### Change Port:
```javascript
// In server.js, line 18
const PORT = process.env.PORT || 5000; // Change 3000 to any port
```

### Change JWT Secret:
```javascript
// In server.js, line 19
const JWT_SECRET = process.env.JWT_SECRET || 'your-custom-secret-key';
```

### Add Environment Variables:
Create `.env` file:
```env
PORT=3000
JWT_SECRET=your-super-secret-key
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your-password
DB_NAME=intigro_db
```

## 📱 Testing the System

### 1. **Registration Test**
- Click "Login" → "Sign up"
- Fill in: Name, Email, Phone, Password
- Submit and verify success message

### 2. **Login Test**
- Use your registered email/password
- Verify JWT token is stored
- Check if "Login" button changes to "Dashboard"

### 3. **Dashboard Test**
- Click "Dashboard" after login
- Verify user information displays
- Test logout functionality

### 4. **Google Login Test**
- Click "Continue with Google"
- Verify demo user creation
- Check dashboard access

## 🚀 Deployment

### Local Development:
```bash
npm run dev
```

### Production:
```bash
npm start
```

### Environment Variables:
Set these for production:
- `JWT_SECRET` - Strong secret key
- `DB_PASSWORD` - Database password
- `PORT` - Server port

## 📞 Support

If you encounter issues:
1. Check the browser console for errors
2. Check the server console for backend errors
3. Verify database connection
4. Ensure all dependencies are installed

## 🎯 Next Steps

After setup, you can:
1. **Customize the UI** - Modify colors, fonts, layout
2. **Add more features** - Course enrollment, progress tracking
3. **Deploy online** - Use services like Heroku, DigitalOcean, or AWS
4. **Add real Google OAuth** - Replace simulated version with actual Google API

---

**🎉 Congratulations!** You now have a fully functional login system for your Intigro website!
