"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/ui/terminal";

export function Preloader({ children }) {
  const [done, setDone] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    // Let the terminal animation play, then reveal the app.
    const timer = setTimeout(() => setDone(true), 5300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait" initial={false}>
      {done ? (
        <motion.div
          key="page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      ) : (
        <motion.div
          key="preloader"
          exit={{ opacity: 0, y: reduceMotion ? 0 : -12 }}
          transition={{ duration: reduceMotion ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex min-h-screen items-center justify-center bg-background px-6 sm:px-0"
        >
          <Terminal className="min-w-0">
            <TypingAnimation>&gt; npm get indubrolk@latest init</TypingAnimation>

            {/* <AnimatedSpan className="text-green-500">
              - Preflight checks.
            </AnimatedSpan> */}

            <AnimatedSpan className="text-green-500">
              - Verifying framework. Found Next.js.
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500">
              - Validating Tailwind CSS.
            </AnimatedSpan>

            {/* <AnimatedSpan className="text-green-500">
              - Validating import alias.
            </AnimatedSpan> */}

            {/* <AnimatedSpan className="text-green-500">
              - Writing components.json.
            </AnimatedSpan> */}

            <AnimatedSpan className="text-green-500">
              - Checking registry.
            </AnimatedSpan>

            {/* <AnimatedSpan className="text-green-500">
              - Updating tailwind.config.ts
            </AnimatedSpan> */}

            {/* <AnimatedSpan className="text-green-500">
              - Updating app/globals.css
            </AnimatedSpan> */}

            {/* <AnimatedSpan className="text-green-500">
              - Installing dependencies.
            </AnimatedSpan> */}

            {/* <AnimatedSpan className="text-blue-500">
              <span>- Updated 1 file:</span>
              <span className="pl-2">lib/utils.ts</span>
            </AnimatedSpan> */}

            {/* <TypingAnimation className="text-muted-foreground">
              Success! Project initialization completed.
            </TypingAnimation> */}

            <TypingAnimation className="text-muted-foreground">
              Welcome! To the indu brolk!
            </TypingAnimation>
          </Terminal>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
