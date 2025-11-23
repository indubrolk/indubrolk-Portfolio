"use client";

import Image from "next/image";
import { useState } from "react";
import GradientText from "@/components/GradientText";

export default function Footer() {
    return (

    <div
        className="relative z-10 mx-auto mt-6 flex max-w-6xl flex-col items-center gap-3 px-6 pb-24 text-center text-sm text-white/70">
        <div className="h-px w-full max-w-4xl bg-white/10"/>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.25em]">
            <GradientText
                colors={["#fd690c", "#d35101", "#ff893a", "#fdc19b"]}
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
    </div>
    )
}