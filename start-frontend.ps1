Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Starting Frontend Servers" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Starting user frontend on port 5174..." -ForegroundColor Yellow
$userProcess = Start-Process -FilePath "npx" -ArgumentList "vite", "--port", "5174" -PassThru -NoNewWindow

Write-Host "Starting admin frontend on port 5175..." -ForegroundColor Yellow
$adminProcess = Start-Process -FilePath "npx" -ArgumentList "vite", "--config", "admin-vite.config.ts" -PassThru -NoNewWindow

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  Frontend Servers Started!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "  User Frontend:  " -NoNewline
Write-Host "http://localhost:5174" -ForegroundColor Cyan
Write-Host "  Admin Frontend: " -NoNewline
Write-Host "http://localhost:5175" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop all servers" -ForegroundColor Gray
Write-Host ""

# 等待任一进程退出
$userProcess.WaitForExit()
$adminProcess.WaitForExit()
