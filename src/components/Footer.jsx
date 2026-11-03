"use client";

import GradientText from "@/components/GradientText";
import { ArrowUp } from "lucide-react";

export default function Footer() {
    return (

    <div
        className="relative z-10 mx-auto mt-6 flex max-w-6xl flex-col items-center gap-3 px-6 pb-24 text-center text-sm text-white/70">
        <div className="h-px w-full max-w-4xl bg-white/10"/>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.25em]">
            <GradientText
                colors={["#94a3b8", "#7dd3fc", "#38bdf8", "#cbd5e1"]}
                animationSpeed={1}
                showBorder={false}
                className="custom-class"
            >
                Your Best Technocract!
            </GradientText>
        </div>
        <div
            className="flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.25em] text-white/60">
            {["Projects", "About", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">
                    {item}
                </a>
            ))}
        </div>

        <p className="text-xs text-white/60">
            &copy; {new Date().getFullYear()} Induwara Jayakody - Crafted with Next.js & Tailwind.
        </p>
        <button
            type="button"
            aria-label="Go to top"
            title="Go to top"
            onClick={() => {
                const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth" });
            }}
            className="go-to-top group mt-3 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-surface-muted text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-sky-300/50 hover:bg-surface-hover active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transform-none motion-reduce:transition-none"
        >
            <ArrowUp
                aria-hidden="true"
                strokeWidth={3}
                className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none"
            />
        </button>
    </div>
    )
};
