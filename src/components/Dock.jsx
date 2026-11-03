"use client";

import { useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Github,
  Mail,
  User,
  FileDown,
} from "lucide-react";
import CVPreviewModal from "./DownloadButton";

const items = [
  { label: "About", href: "/#about", icon: User },
  // { label: "Content", href: "/content", icon: PlayCircle },
  { label: "Resume", href: "/CV.pdf", icon: FileDown, preview: true },
  { label: "Contact", href: "/#contact", icon: Mail },
  { label: "GitHub", href: "https://github.com/indubrolk", icon: Github },
];

const BASE_HEIGHT = 70;
const GAP = 16;
const RADIUS = 120;
const spring = { mass: 0.25, stiffness: 240, damping: 24 };

function DockItem({ item, index, pointer, focused, reduceMotion, active, onSelect }) {
  const center = index * (BASE_HEIGHT + GAP) + BASE_HEIGHT / 2;
  const targetHeight = useTransform([pointer, focused], ([position, focusIndex]) => {
    if (reduceMotion || !active) return BASE_HEIGHT;
    const distance = focusIndex >= 0
      ? (index - focusIndex) * (BASE_HEIGHT + GAP)
      : center - position;
    const proximity = Math.max(0, 1 - Math.abs(distance) / RADIUS);
    const influence = (1 - Math.cos(proximity * Math.PI)) / 2;
    return BASE_HEIGHT + influence * 32;
  });
  const height = useSpring(targetHeight, spring);
  const lift = useTransform(height, [BASE_HEIGHT, BASE_HEIGHT + 32], [0, -10]);
  const iconSize = useTransform(height, [BASE_HEIGHT, BASE_HEIGHT + 32], [28, 40]);
  const Component = item.preview ? motion.button : motion.a;

  return (
    <Component
      href={item.preview ? undefined : item.href}
      type={item.preview ? "button" : undefined}
      onClick={() => onSelect(item)}
      onFocus={() => focused.set(index)}
      onBlur={() => focused.set(-1)}
      style={{ height, x: lift }}
      className="relative flex w-24 shrink-0 flex-col items-center justify-center gap-2 rounded-2xl px-3 text-center text-xs font-semibold text-white/80 transition-colors duration-150 hover:bg-surface-hover hover:text-white focus-visible:bg-surface-hover focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/80"
    >
      <motion.span className="block shrink-0 text-white" style={{ width: iconSize, height: iconSize }} aria-hidden="true">
        <item.icon className="h-full w-full" />
      </motion.span>
      <span className="leading-tight">{item.label}</span>
    </Component>
  );
}

function DockItems({ active = true, onSelect }) {
  const pointer = useMotionValue(Infinity);
  const focused = useMotionValue(-1);
  const reduceMotion = useReducedMotion();
  const baseHeight = items.length * BASE_HEIGHT + (items.length - 1) * GAP;

  return (
    <div
      className="flex flex-col gap-4"
      onPointerMove={(event) => {
        if (!active || (event.pointerType !== "mouse" && event.pointerType !== "pen")) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        // Map the expanded column back to its resting height, just like the menu bar.
        if (bounds.height > 0) pointer.set((event.clientY - bounds.top) * baseHeight / bounds.height);
      }}
      onPointerLeave={() => pointer.set(Infinity)}
      onPointerCancel={() => pointer.set(Infinity)}
    >
      {items.map((item, index) => (
        <DockItem
          key={item.label}
          item={item}
          index={index}
          pointer={pointer}
          focused={focused}
          reduceMotion={reduceMotion}
          active={active}
          onSelect={(selected) => {
            pointer.set(Infinity);
            focused.set(-1);
            onSelect(selected);
          }}
        />
      ))}
    </div>
  );
}

export default function Dock() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <>
      <div className="fixed right-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-4 rounded-[24px] border border-white/10 bg-surface px-4 py-5 shadow-[0_18px_60px_-22px_rgba(0,0,0,0.65)] backdrop-blur-2xl xl:flex">
        <DockItems onSelect={(item) => { if (item.preview) setIsCVOpen(true); }} />
      </div>

      <div className="fixed right-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-20 flex items-end gap-2 xl:hidden">
        <div
          inert={!isOpen}
          className={`flex flex-col gap-3 rounded-[18px] border border-white/10 bg-surface px-3 py-3 shadow-[0_18px_60px_-22px_rgba(0,0,0,0.65)] backdrop-blur-2xl transition-all duration-200 ease-out ${
            isOpen ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0 pointer-events-none"
          }`}
        >
          <DockItems
            active={isOpen}
            onSelect={(item) => {
              if (item.preview) setIsCVOpen(true);
              setIsOpen(false);
            }}
          />
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 bg-surface text-white shadow-[0_18px_60px_-22px_rgba(0,0,0,0.65)] backdrop-blur-2xl transition duration-150 hover:scale-105 active:scale-95"
          aria-label={isOpen ? "Close dock" : "Open dock"}
        >
          {isOpen ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </button>
      </div>

      {/* CV Preview Modal */}
      <CVPreviewModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </>
  );
}
