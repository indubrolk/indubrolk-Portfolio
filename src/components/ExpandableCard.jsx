"use client";

import { useState } from "react";
import { Maximize2 } from "lucide-react";
import CardModal from "./CardModal";

export default function ExpandableCard({ children, className = "" }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={`relative ${className}`} data-card>
        {children}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsModalOpen(true);
          }}
          className="absolute right-3 top-3 z-10 rounded-full border border-white/20 bg-black/40 p-1.5 text-white/90 backdrop-blur-md transition hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          aria-label="Expand card"
          title="Expand card"
        >
          <Maximize2 className="h-3.5 w-3.5" />
        </button>
      </div>

      <CardModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {children}
      </CardModal>
    </>
  );
}
