@echo off
chcp 65001 >nul
echo 🚀 Iniciando Herramienta de Asistencia Steal a Brainrot...
echo.

cd steal-brainrot-es

echo 📁 Directorio actual: %CD%
echo.

echo 🔧 Verificando dependencias...
npm install

echo.
echo 🚀 Iniciando servidor de desarrollo...
echo.
echo 📱 El sitio web estará disponible en:
echo   Acceso local: http://localhost:3002
echo   Acceso de red: http://192.168.1.3:3002
echo.
echo 💡 Presiona Ctrl+C para detener el servidor
echo.

npm run dev

pause 