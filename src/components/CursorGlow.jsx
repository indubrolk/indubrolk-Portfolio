"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef(null);
  const targetRef = useRef({ x: 0, y: 0, opacity: 0 });
  const currentRef = useRef({ x: 0, y: 0, opacity: 0 });
  const rafRef = useRef(null);
  const idleTimerRef = useRef(null);

  useEffect(() => {
    const glowEl = glowRef.current;
    if (!glowEl) return;

    const handlePointerMove = (event) => {
      targetRef.current.x = event.clientX;
      targetRef.current.y = event.clientY;
      targetRef.current.opacity = 1;

      if (idleTimerRef.current) {
        window.clearTimeout(idleTimerRef.current);
      }

      idleTimerRef.current = window.setTimeout(() => {
        targetRef.current.opacity = 0;
      }, 120);
    };

    const animate = () => {
      const current = currentRef.current;
      const target = targetRef.current;

      current.x += (target.x - current.x) * 0.18;
      current.y += (target.y - current.y) * 0.18;
      current.opacity += (target.opacity - current.opacity) * 0.2;

      glowEl.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      glowEl.style.opacity = current.opacity.toFixed(3);

      rafRef.current = window.requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", handlePointerMove);
    rafRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      if (idleTimerRef.current) window.clearTimeout(idleTimerRef.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed left-0 top-0 z-50 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/10 blur-3xl mix-blend-screen"
      style={{ opacity: 0 }}
      aria-hidden="true"
    />
  );
}

