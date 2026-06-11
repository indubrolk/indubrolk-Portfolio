"use client";

import useCanvasCursor from "@/hooks/useCanvasCursor";

export default function CanvasCursor() {
  useCanvasCursor();

  return (
    <canvas
      id="canvas"
      className="pointer-events-none fixed inset-0 z-[9999] h-full w-full"
    />
  );
}
