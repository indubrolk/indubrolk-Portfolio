"use client";

import { useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export default function CardModal({ isOpen, onClose, children }) {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  const handleEscape = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return createPortal(
    <div
      ref={overlayRef}
      className="card-modal-overlay"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      {/* Bokeh particles */}
      <div className="bokeh-container" aria-hidden="true">
        <div className="bokeh-circle bokeh-1" />
        <div className="bokeh-circle bokeh-2" />
        <div className="bokeh-circle bokeh-3" />
        <div className="bokeh-circle bokeh-4" />
        <div className="bokeh-circle bokeh-5" />
        <div className="bokeh-circle bokeh-6" />
        <div className="bokeh-circle bokeh-7" />
        <div className="bokeh-circle bokeh-8" />
      </div>

      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="card-modal-close"
        aria-label="Close modal"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Modal card content */}
      <div ref={contentRef} className="card-modal-content">
        {children}
      </div>
    </div>,
    document.body
  );
}
