@echo off
echo ========================================
echo   Starting Frontend Servers
echo ========================================
echo.
echo Starting user frontend on port 5174...
start "User Frontend" cmd /k "npx vite --port 5174"

echo Starting admin frontend on port 5175...
start "Admin Frontend" cmd /k "npx vite --config admin-vite.config.ts"

echo.
echo ========================================
echo   Frontend Servers Started!
echo ========================================
echo.
echo   User Frontend:  http://localhost:5174
echo   Admin Frontend: http://localhost:5175
echo.
echo Both servers are running in separate windows.
echo Close the windows to stop the servers.
pause
