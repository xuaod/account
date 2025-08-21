@echo off
title Hello World Batch Script
color 0A
echo.
echo    ===============================
echo        HELLO WORLD SCRIPT
echo    ===============================
echo.
echo    Este arquivo BAT demonstra:
echo    - Como exibir uma mensagem
echo    - Como personalizar a aparência
echo    - Como evitar fechamento automatico
echo.
echo    Hello World!
echo.
echo    Script executado em: %date% %time%
echo.
pause
cls
echo.
echo    Obrigado por usar este script!
echo    Desenvolvido especialmente para você
echo.
timeout /t 3 /nobreak >nul
