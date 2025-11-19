"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  FileUser,
  Github,
  Mail,
  PlayCircle,
  User,
  FileDown,
} from "lucide-react";

const items = [
  { label: "About", href: "/#about", icon: User },
  // { label: "Content", href: "/content", icon: PlayCircle },
  { label: "Resume", href: "/CV.pdf", icon: FileDown, download: true },
  { label: "Contact", href: "/#contact", icon: Mail },
  { label: "GitHub", href: "https://github.com/indubrolk", icon: Github },
];

export default function Dock() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed right-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-4 rounded-[24px] border border-white/20 bg-white/12 px-4 py-5 shadow-[0_18px_60px_-22px_rgba(0,0,0,0.65)] backdrop-blur-2xl md:flex">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            {...(item.download ? { download: "Indu-CV.pdf" } : {})}
            className="group flex w-24 flex-col items-center gap-2 rounded-2xl px-3 py-3 text-center text-xs font-semibold text-white/80 transition duration-150 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-white/10 hover:text-white"
          >
            <span className="text-2xl drop-shadow-sm" aria-hidden="true">
              <item.icon className="h-7 w-7 text-white" />
            </span>
            <span className="leading-tight">{item.label}</span>
          </a>
        ))}
      </div>

      <div className="fixed right-3 top-1/2 z-20 flex -translate-y-1/2 items-center gap-2 md:hidden">
        <div
          className={`flex flex-col gap-3 rounded-[18px] border border-white/20 bg-white/12 px-3 py-3 shadow-[0_18px_60px_-22px_rgba(0,0,0,0.65)] backdrop-blur-2xl transition-all duration-200 ease-out ${
            isOpen ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0 pointer-events-none"
          }`}
        >
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              {...(item.download ? { download: "Indu-CV.pdf" } : {})}
              className="group flex w-24 flex-col items-center gap-2 rounded-2xl px-3 py-3 text-center text-xs font-semibold text-white/80 transition duration-150 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-white/10 hover:text-white"
            >
              <span className="text-2xl drop-shadow-sm" aria-hidden="true">
                <item.icon className="h-7 w-7 text-white" />
              </span>
              <span className="leading-tight">{item.label}</span>
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 bg-white/20 text-white shadow-[0_18px_60px_-22px_rgba(0,0,0,0.65)] backdrop-blur-2xl transition duration-150 hover:scale-105 active:scale-95"
          aria-label={isOpen ? "Close dock" : "Open dock"}
        >
          {isOpen ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </button>
      </div>
    </>
  );
}
