# 🔧 Registration Issues Troubleshooting Guide

## 🚨 **Why You Can't Register - Common Issues & Solutions**

### Issue 1: "Cannot connect to MySQL" Error
**Symptoms:** Server won't start, database connection errors
**Solution:** 
1. Make sure MySQL is running
2. Check password in `server.js` (line 26)
3. Run: `node setup-database.js`

### Issue 2: "Module not found" Errors
**Symptoms:** npm errors, missing dependencies
**Solution:**
```bash
npm install
```

### Issue 3: Server Not Running
**Symptoms:** Registration form submits but nothing happens
**Solution:**
1. Start server: `node server.js`
2. Check if port 3000 is available
3. Look for server console messages

### Issue 4: Database Tables Missing
**Symptoms:** Server starts but registration fails
**Solution:**
1. Run: `node setup-database.js`
2. Check if tables exist in MySQL

## 🚀 **Quick Fix Steps:**

### Step 1: Setup Database
```bash
node setup-database.js
```

### Step 2: Start Server
```bash
node server.js
```

### Step 3: Test Registration
1. Open http://localhost:3000
2. Click "Login" → "Sign up"
3. Fill form and submit

## 🔍 **Check These Files:**

1. **server.js** - Database password correct?
2. **setup-database.js** - Run this first
3. **MySQL service** - Is it running?
4. **Port 3000** - Is it free?

## 📞 **Still Having Issues?**

1. Check browser console (F12) for errors
2. Check server console for backend errors
3. Verify MySQL is running
4. Ensure database `intigro_db` exists

## ✅ **Success Indicators:**

- Server shows "Connected to MySQL database"
- Server shows "Server running on port 3000"
- Registration form submits without errors
- Success message appears after registration
