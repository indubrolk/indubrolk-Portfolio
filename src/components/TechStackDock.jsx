"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
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

const spring = { mass: 0.25, stiffness: 240, damping: 24 };
const restingPointer = { x: Infinity, y: Infinity };

function TechStackDockItem({ item, pointer, reduceMotion }) {
  const itemRef = useRef(null);
  const focused = useMotionValue(false);
  const targetScale = useTransform([pointer, focused], ([position, isFocused]) => {
    if (reduceMotion) return 1;
    if (isFocused) return 1.25;
    const bounds = itemRef.current?.getBoundingClientRect();
    if (!bounds) return 1;
    const distance = Math.hypot(
      position.x - (bounds.left + bounds.width / 2),
      position.y - (bounds.top + bounds.height / 2),
    );
    const proximity = Math.max(0, 1 - distance / 120);
    return 1 + ((1 - Math.cos(proximity * Math.PI)) / 2) * 0.25;
  });
  const scale = useSpring(targetScale, spring);
  const lift = useTransform(scale, [1, 1.25], [0, -10]);

  return (
    <li
      ref={itemRef}
      tabIndex={0}
      onFocus={() => focused.set(true)}
      onBlur={() => focused.set(false)}
      className="group relative flex w-20 shrink-0 flex-col items-center gap-3 rounded-2xl py-2 text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
    >
      <motion.span
        aria-hidden="true"
        style={reduceMotion ? undefined : { scale, y: lift }}
        className="flex h-14 w-14 items-center justify-center"
      >
        {item.iconName ? <StackIcon name={item.iconName} className="h-10 w-10" /> : <item.Icon />}
      </motion.span>
      <span className="text-xs font-medium leading-4 text-white/70 transition-colors group-hover:text-white group-focus-visible:text-white">
        {item.name}
      </span>
    </li>
  );
}

export default function TechStackDock() {
  const pointer = useMotionValue(restingPointer);
  const reduceMotion = useReducedMotion();

  return (
    <ul
      aria-label="Tech stack"
      className="relative mx-auto flex w-full flex-wrap justify-center gap-x-2 gap-y-4 rounded-3xl border border-white/[0.08] bg-white/[0.015] px-2 py-6 shadow-[0_18px_60px_-22px_rgba(0,0,0,0.65)] backdrop-blur-2xl sm:gap-x-4 sm:px-4"
      onPointerMove={(event) => {
        if (reduceMotion || (event.pointerType !== "mouse" && event.pointerType !== "pen")) return;
        pointer.set({ x: event.clientX, y: event.clientY });
      }}
      onPointerLeave={() => pointer.set(restingPointer)}
      onPointerCancel={() => pointer.set(restingPointer)}
    >
      {techItems.map((item) => (
        <TechStackDockItem key={item.name} item={item} pointer={pointer} reduceMotion={reduceMotion} />
      ))}
    </ul>
  );
}
