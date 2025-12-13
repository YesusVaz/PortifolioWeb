"use client";

import { useEffect } from "react";

// SVGs do Figma convertidos para Base64 para carregamento instantâneo
// Seta padrão - Hotspot na ponta (0, 0)
const cursorDefault = `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNS42NTM3NiAxMi4zNjczSDUuNDYwMjZMNS4zMTcxNyAxMi40OTc2TDAuNTAwMDAyIDE2Ljg4MjlMMC41MDAwMDIgMS4xOTg0MUwxMS43ODQxIDEyLjM2NzNINS42NTM3NloiIGZpbGw9ImJsYWNrIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=') 0 0, auto`;

// Mãozinha - Hotspot ajustado para a ponta do dedo (8, 0)
const cursorPointer = `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOS41IDEwLjVDOS41IDEwLjUgOC41IDEwLjUgOC41IDExLjVWMTAuNUg3LjVWMTYuNUw1IDE0TDQuNSAxNC41TDEwIDIwTDE1LjUgMTRMMTQuNSAxMy41TDEyLjUgMTUuNVY1QzEyLjUgNSAxMS41IDUgMTEuNSA1VjEwLjVIOS41WiIgZmlsbD0iYmxhY2siIHN0cm9rZT0id2hpdGUiLz48L3N2Zz4=') 8 0, pointer`;

export function CustomCursor() {
  useEffect(() => {
    // 1. Verificação robusta de touch
    const isTouchDevice = 
      typeof window !== 'undefined' && 
      ('ontouchstart' in window || navigator.maxTouchPoints > 0);
    
    if (isTouchDevice) return;

    // 2. Criação do estilo
    const style = document.createElement('style');
    style.innerHTML = `
      @media (hover: hover) and (pointer: fine) {
        /* Padrão para tudo */
        html, body, * {
          cursor: ${cursorDefault} !important;
        }
        
        /* Links e botões interativos - Com hotspot calibrado */
        a, 
        button, 
        [role="button"],
        input[type="submit"],
        input[type="button"],
        input[type="checkbox"], 
        input[type="radio"],
        select,
        label,
        .cursor-pointer,
        [onclick] {
          cursor: ${cursorPointer} !important;
        }
        
        /* Inputs de texto - Mantém o cursor de texto nativo */
        input[type="text"],
        input[type="email"],
        input[type="password"],
        input[type="number"],
        input[type="search"],
        input[type="tel"],
        input[type="url"],
        textarea,
        [contenteditable="true"] {
          cursor: text !important; 
        }

        /* Cursor de "não permitido" */
        button:disabled,
        input:disabled,
        .cursor-not-allowed {
          cursor: not-allowed !important;
        }
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      // Cleanup seguro
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return null;
}
