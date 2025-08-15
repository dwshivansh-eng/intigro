@echo off
echo ========================================
echo    Intigro Website - XAMPP Version
echo ========================================
echo.

echo Checking if XAMPP MySQL is running...
netstat -an | findstr :3306 >nul
if %errorlevel% equ 0 (
    echo ✅ MySQL is running on port 3306
) else (
    echo ❌ MySQL is NOT running!
    echo.
    echo Please start XAMPP Control Panel and:
    echo 1. Click "Start" next to MySQL
    echo 2. Wait for it to turn GREEN
    echo 3. Run this script again
    echo.
    pause
    exit /b 1
)

echo.
echo Step 1: Setting up database...
node setup-database.js

echo.
echo Step 2: Starting the server...
echo Server will be available at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

node server.js

pause
