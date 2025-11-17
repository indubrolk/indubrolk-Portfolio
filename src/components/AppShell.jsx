"use client";

import { useEffect, useState } from "react";
// import ColorBends from "./ColorBends";
import { Ripples } from 'ldrs/react'
import 'ldrs/react/Ripples.css'

// Default values shown


export default function AppShell({ children }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const markReady = () => setReady(true);

    if (document.readyState === "complete") {
      setReady(true);
    } else {
      window.addEventListener("load", markReady);
    }

    // Keep the loader visible a bit longer as a fallback
    const fallback = setTimeout(markReady, 10000);

    return () => {
      window.removeEventListener("load", markReady);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <div
        className={`relative z-10 transition-opacity duration-500 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>

      {!ready && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-slate-950">
          <Ripples size="72" speed="0.1" color="white" />
        </div>
      )}
    </div>
  );
}
