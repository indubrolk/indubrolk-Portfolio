"use client";
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils"

export function WordRotate({
  words,
  duration = 2500,

  motionProps = {
    initial: { opacity: 0, y: -12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 12 },
    transition: { duration: 0.6, ease: "easeOut" },
  },

  className
}) {
  const [index, setIndex] = useState(0)
  const hasWords = Array.isArray(words) && words.length > 0;

  useEffect(() => {
    if (!hasWords) return;

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, duration)

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [hasWords, words, duration])

  if (!hasWords) return null;

  return (
    <span className="inline-block overflow-hidden align-middle">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          className={cn("inline-block", className)}
          {...motionProps}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
