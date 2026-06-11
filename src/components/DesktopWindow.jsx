"use client";

import { useState } from "react";
import { Maximize2 } from "lucide-react";
import CardModal from "./CardModal";
import ColorBends from "./ColorBends";

export default function DesktopWindow({ children, className = "", ...rest }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        {...rest}
        data-card
        className={`relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-3xl shadow-[0_22px_70px_-32px_rgba(0,0,0,0.65)] ${className}`}
      >
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            setIsModalOpen(true);
          }}
          className="absolute right-3 top-3 z-10 rounded-full border border-white/20 bg-black/40 p-2 text-white/90 backdrop-blur-md transition hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          aria-label="Expand card"
          title="Expand card"
        >
          <Maximize2 className="h-4 w-4" />
        </button>
        {/* <ColorBends
          className="absolute inset-0 -z-10 pointer-events-none opacity-50"
          colors={["#0ea5e9", "#6366f1", "#a855f7", "#22d3ee", "#f472b6"]}
          speed={0.12}
          autoRotate={4}
          warpStrength={0.9}
          frequency={1}
          noise={0.02}
          scale={1}
        /> */}
        <div className="relative p-6 sm:p-8">{children}</div>
      </div>

      <CardModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {children}
      </CardModal>
    </>
  );
}
