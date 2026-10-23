"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { X, Download, ExternalLink, FileText, ZoomIn, ZoomOut } from "lucide-react";

export default function CVPreviewModal({ isOpen, onClose }) {
  const overlayRef = useRef(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

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
      setIframeLoaded(false);
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
      className="cv-preview-overlay"
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
      </div>

      {/* Top bar */}
      <div className="cv-preview-topbar">
        <div className="cv-preview-title">
          <FileText className="h-5 w-5" />
          <span>Resume Preview</span>
        </div>

        <div className="cv-preview-actions">
          <a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-preview-btn cv-preview-btn-ghost"
            title="Open in new tab"
          >
            <ExternalLink className="h-4 w-4" />
            <span className="cv-preview-btn-label">Open</span>
          </a>
          <a
            href="/CV.pdf"
            download="Indu-CV.pdf"
            className="cv-preview-btn cv-preview-btn-primary"
            title="Download CV"
          >
            <Download className="h-4 w-4" />
            <span className="cv-preview-btn-label">Download</span>
          </a>
          <button
            type="button"
            onClick={onClose}
            className="cv-preview-close"
            aria-label="Close preview"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* PDF viewer */}
      <div className="cv-preview-body">
        {/* Loading skeleton */}
        {!iframeLoaded && (
          <div className="cv-preview-loader">
            <div className="cv-preview-spinner" />
            <span>Loading resume…</span>
          </div>
        )}

        <iframe
          src="/CV.pdf#toolbar=0&navpanes=0"
          title="Resume Preview"
          className="cv-preview-iframe"
          style={{ opacity: iframeLoaded ? 1 : 0 }}
          onLoad={() => setIframeLoaded(true)}
        />
      </div>
    </div>,
    document.body
  );
}
