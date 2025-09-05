"use client";

import { useEffect, useState, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-is-mobile";

export function CustomCursor() {
  const isMobile = useIsMobile();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Não mostrar cursor personalizado em dispositivos móveis
  if (isMobile) return null;

  const updateMousePosition = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    setIsVisible(true);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  const handleMouseDown = useCallback(() => setIsClicking(true), []);
  const handleMouseUp = useCallback(() => setIsClicking(false), []);
  const handleMouseOut = useCallback(() => setIsVisible(false), []);

  useEffect(() => {
    // Elementos interativos que mudam o cursor
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, .cursor-pointer'
    );

    // Event listeners para movimento do mouse
    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseOut);

    // Event listeners para elementos interativos
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseOut);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [updateMousePosition, handleMouseEnter, handleMouseLeave, handleMouseDown, handleMouseUp, handleMouseOut]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Cursor "luvinha" */}
      <div
        className={`absolute transition-all duration-100 ease-out ${
          isClicking ? 'scale-90' : isHovering ? 'scale-125' : 'scale-100'
        }`}
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 8,
        }}
      >
        <div className="text-2xl filter drop-shadow-lg">
          {isClicking ? '👆' : isHovering ? '👉' : '👆'}
        </div>
      </div>
    </div>
  );
}
