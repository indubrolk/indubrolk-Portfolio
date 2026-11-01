"use client";

import { useEffect, useRef } from "react";
import StackIcon from "tech-stack-icons";

/* ── SVG logos rendered in brand colours ── */

const BalllerinaLogo = () => (
  <svg viewBox="0 0 128 128" fill="#20B6B0" className="h-10 w-10">
    <circle cx="64" cy="24" r="12" />
    <path d="M64 42c-6 0-10 4-10 10v24c0 4-2 8-6 10l-20 12c-4 2-6 6-6 10s2 8 6 10c2 1 4 2 6 2s4-1 6-2l20-12c2-1 4-2 4-4V76l20 12c2 1 4 2 6 2s4-1 6-2c4-2 6-6 6-10s-2-8-6-10L76 56c-4-2-6-6-6-10V52c0-6-4-10-6-10z" />
  </svg>
);

const RestAPILogo = () => (
  <svg viewBox="0 0 128 128" fill="#009688" className="h-10 w-10">
    <path d="M64 16c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm0 8c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40z" />
    <path d="M40 56h48v4H40zm0 12h48v4H40z" />
    <circle cx="48" cy="58" r="4" />
    <circle cx="48" cy="70" r="4" />
    <path d="M72 48l16 16-16 16" fill="none" stroke="#009688" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ElectronicsLogo = () => (
  <svg viewBox="0 0 128 128" fill="#F59E0B" className="h-10 w-10">
    <path d="M64 20a8 8 0 00-8 8v24H32a8 8 0 00-8 8v8a8 8 0 008 8h24v24a8 8 0 008 8h8a8 8 0 008-8V76h24a8 8 0 008-8v-8a8 8 0 00-8-8H80V28a8 8 0 00-8-8z" fillOpacity="0.3" />
    <circle cx="64" cy="64" r="8" />
    <circle cx="40" cy="40" r="5" />
    <circle cx="88" cy="40" r="5" />
    <circle cx="40" cy="88" r="5" />
    <circle cx="88" cy="88" r="5" />
    <path d="M40 40h48M40 88h48M40 40v48M88 40v48" fill="none" stroke="#F59E0B" strokeWidth="2" />
  </svg>
);

const UIUXLogo = () => (
  <svg viewBox="0 0 128 128" fill="#EC4899" className="h-10 w-10">
    <rect x="16" y="24" width="96" height="72" rx="8" fill="none" stroke="#EC4899" strokeWidth="6" />
    <circle cx="44" cy="56" r="10" fillOpacity="0.4" />
    <rect x="64" y="46" width="32" height="6" rx="3" fillOpacity="0.5" />
    <rect x="64" y="58" width="24" height="6" rx="3" fillOpacity="0.3" />
    <rect x="28" y="76" width="72" height="6" rx="3" fillOpacity="0.2" />
    <path d="M48 96h32v8H48z" fillOpacity="0.3" />
  </svg>
);


const techItems = [
  { name: "Express", iconName: "expressjs" },
  { name: "MongoDB", iconName: "mongodb" },
  { name: "MySQL", iconName: "mysql" },
  { name: "Python", iconName: "python" },
  { name: "Java", iconName: "java" },
  { name: "HTML5", iconName: "html5" },
  { name: "CSS3", iconName: "css3" },
  { name: "React", iconName: "react" },
  { name: "Next.js", iconName: "nextjs" },
  { name: "Tailwind", iconName: "tailwindcss" },
  { name: "TypeScript", iconName: "typescript" },
  { name: "Node.js", iconName: "nodejs" },
  { name: "Git", iconName: "git" },
  { name: "Figma", iconName: "figma" },
  { name: "VS Code", iconName: "vscode" },
  { name: "Ballerina", Icon: BalllerinaLogo },
  { name: "REST APIs", Icon: RestAPILogo },
  { name: "WebStorm", iconName: "webstorm" },
  { name: "Electronics", Icon: ElectronicsLogo },
  { name: "UI/UX", Icon: UIUXLogo },
];

export default function TechStackMarquee() {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationId;
    let previousTime = 0;
    let offset = viewport.scrollLeft;
    let hovered = false;
    let focused = false;
    let pointerDown = false;
    let drag = null;
    let resumeAfter = 0;

    const step = (time) => {
      const elapsed = previousTime ? Math.min(time - previousTime, 50) : 0;
      previousTime = time;
      if (hovered || focused || pointerDown || time < resumeAfter || reducedMotion.matches) {
        offset = viewport.scrollLeft;
      } else {
        const loopWidth = track.scrollWidth / 2;
        offset = (offset + elapsed * 0.03) % loopWidth;
        viewport.scrollLeft = offset;
      }
      animationId = requestAnimationFrame(step);
    };

    const enter = (event) => { if (event.pointerType === "mouse") hovered = true; };
    const leave = () => { hovered = false; };
    const focus = () => { focused = true; };
    const blur = (event) => { focused = viewport.contains(event.relatedTarget); };
    const down = (event) => {
      if (event.button !== 0) return;
      pointerDown = true;
      if (event.pointerType !== "mouse") return;
      drag = { id: event.pointerId, x: event.clientX, scrollLeft: viewport.scrollLeft };
      viewport.setPointerCapture(event.pointerId);
      event.preventDefault();
    };
    const move = (event) => {
      if (!drag || event.pointerId !== drag.id) return;
      viewport.scrollLeft = drag.scrollLeft - (event.clientX - drag.x);
      offset = viewport.scrollLeft;
    };
    const end = (event) => {
      pointerDown = false;
      offset = viewport.scrollLeft;
      resumeAfter = performance.now() + 1500;
      if (!drag || event.pointerId !== drag.id) return;
      drag = null;
      if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
      hovered = viewport.matches(":hover");
    };
    const wheel = (event) => {
      if (event.ctrlKey) return;
      const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? viewport.clientWidth : 1;
      const next = Math.max(0, Math.min(viewport.scrollWidth - viewport.clientWidth, viewport.scrollLeft + delta * unit));
      if (next === viewport.scrollLeft) return;
      event.preventDefault();
      viewport.scrollLeft = next;
      offset = viewport.scrollLeft;
      resumeAfter = performance.now() + 1500;
    };

    const listeners = [
      ["pointerenter", enter], ["pointerleave", leave],
      ["focusin", focus], ["focusout", blur],
      ["pointerdown", down], ["pointermove", move],
      ["pointerup", end], ["pointercancel", end], ["lostpointercapture", end],
    ];
    listeners.forEach(([name, handler]) => viewport.addEventListener(name, handler));
    viewport.addEventListener("wheel", wheel, { passive: false });
    animationId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationId);
      listeners.forEach(([name, handler]) => viewport.removeEventListener(name, handler));
      viewport.removeEventListener("wheel", wheel);
    };
  }, []);

  return (
    <div
      ref={viewportRef}
      role="region"
      aria-label="Tech stack. Drag or scroll to explore technologies."
      tabIndex={0}
      className="relative w-full overflow-x-auto overscroll-x-contain rounded-2xl border border-white/10 bg-white/[0.04] select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
    >
      <div ref={trackRef} className="flex w-max py-3">
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden={copy === 1 ? true : undefined} className="flex gap-4 pr-4">
            {techItems.map((item) => (
              <div
                key={item.name}
                className="group flex min-w-[100px] shrink-0 flex-col items-center justify-center gap-2 px-4 py-2.5"
              >
                <div className="text-white/80 transition-colors duration-300 group-hover:text-white">
                  {item.iconName ? <StackIcon name={item.iconName} className="h-10 w-10 transition-transform duration-300 group-hover:scale-110" /> : <item.Icon />}
                </div>
                <span className="whitespace-nowrap text-xs font-medium text-white/60 transition-colors duration-300 group-hover:text-white/90">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
