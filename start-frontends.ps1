Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Starting Frontend Servers" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Starting user frontend on port 5174..." -ForegroundColor Yellow
$userJob = Start-Job -ScriptBlock { npx vite --port 5174 }

Write-Host "Starting admin frontend on port 5175..." -ForegroundColor Yellow
$adminJob = Start-Job -ScriptBlock { npx vite --config admin-vite.config.ts }

Start-Sleep -Seconds 5

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  Frontend Servers Started!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "  User Frontend:  http://localhost:5174" -ForegroundColor Cyan
Write-Host "  Admin Frontend: http://localhost:5175" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop all servers" -ForegroundColor Gray
Write-Host ""

while ($true) {
    if ($userJob.State -eq "Failed") {
        Write-Host "User frontend failed!" -ForegroundColor Red
        break
    }
    if ($adminJob.State -eq "Failed") {
        Write-Host "Admin frontend failed!" -ForegroundColor Red
        break
    }
    if ($userJob.State -eq "Stopped" -or $adminJob.State -eq "Stopped") {
        Write-Host "One or more servers stopped" -ForegroundColor Yellow
        break
    }
    Start-Sleep -Seconds 1
}

Write-Host ""
Write-Host "Stopping all servers..." -ForegroundColor Yellow
Remove-Job -Job $userJob -Force -ErrorAction SilentlyContinue
Remove-Job -Job $adminJob -Force -ErrorAction SilentlyContinue
Write-Host "All servers stopped" -ForegroundColor Green
