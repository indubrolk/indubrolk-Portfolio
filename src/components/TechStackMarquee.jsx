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
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId;
    let offset = 0;
    const speed = 0.5; // px per frame

    const step = () => {
      offset += speed;
      // reset when we've scrolled past the first set
      const halfWidth = el.scrollWidth / 2;
      if (offset >= halfWidth) offset = 0;
      el.style.transform = `translateX(-${offset}px)`;
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);

    // pause on hover
    const parent = el.parentElement;
    const pause = () => cancelAnimationFrame(animationId);
    const resume = () => {
      animationId = requestAnimationFrame(step);
    };

    parent.addEventListener("mouseenter", pause);
    parent.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animationId);
      parent.removeEventListener("mouseenter", pause);
      parent.removeEventListener("mouseleave", resume);
    };
  }, []);

  // Double the items for seamless loop
  const doubled = [...techItems, ...techItems];

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
      <div className="overflow-hidden">
        <div ref={scrollRef} className="flex w-max gap-4 py-3 px-2" style={{ willChange: "transform" }}>
          {doubled.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="group flex flex-col items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.06] px-5 py-2.5 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.1] hover:scale-105 min-w-[100px]"
            >
              <div className="text-white/80 transition-colors duration-300 group-hover:text-white">
                {item.iconName ? <StackIcon name={item.iconName} className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" /> : <item.Icon />}
              </div>
              <span className="text-xs font-medium text-white/60 transition-colors duration-300 group-hover:text-white/90 whitespace-nowrap">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
