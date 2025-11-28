"use client";

import { useEffect, useState } from "react";

import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/ui/terminal";

export function Preloader({ children }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Let the terminal animation play, then reveal the app.
    const timer = setTimeout(() => setDone(true), 5300);
    return () => clearTimeout(timer);
  }, []);

  if (done) return children;

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950">
      <Terminal>
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
    </div>
  );
}
