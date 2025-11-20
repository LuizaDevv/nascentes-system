```batch
@echo off
REM Script para criar estrutura do APP PWA

cd /d C:\Users\User\Documents\nascentes-system\frontend\app

echo Criando arquivos do APP PWA...

REM Criar index.html
echo. > index.html

REM Criar pastas
mkdir styles
mkdir js
mkdir icons

REM Criar arquivos CSS
echo. > styles/main.css

REM Criar arquivos JS
echo. > js/app.js
echo. > js/db.js
echo. > js/camera.js
echo. > js/gps.js
echo. > js/sync.js

REM Criar manifest.json
echo. > manifest.json

REM Criar service-worker.js
echo. > service-worker.js

echo Arquivos criados com sucesso!
pause
```
