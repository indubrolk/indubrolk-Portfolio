"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const certifications = [
  {
    id: "aws",
    logo: "/arti1.jpg", // Replace with your actual certificate logo (e.g. /aws-badge.png)
    alt: "AWS Certificate",
  },
  {
    id: "meta",
    logo: "/arti2.jpg", // Replace with your actual certificate logo
    alt: "Meta Certificate",
  },
  {
    id: "ibm",
    logo: "/arti3.jpg", // Replace with your actual certificate logo
    alt: "IBM Certificate",
  },
];

export default function AwardsMarquee() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId;
    let offset = 0;
    const speed = 0.5; // px per frame

    const step = () => {
      offset += speed;
      // reset when we've scrolled past the first set (which is half the total width since we duplicate)
      const halfWidth = el.scrollWidth / 2;
      if (offset >= halfWidth) offset = 0;
      el.style.transform = `translateX(-${offset}px)`;
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);

    // pause on hover
    const parent = el.parentElement;
    const pause = () => cancelAnimationFrame(animationId);
    const resume = () => {
      animationId = requestAnimationFrame(step);
    };

    if (parent) {
      parent.addEventListener("mouseenter", pause);
      parent.addEventListener("mouseleave", resume);
    }

    return () => {
      cancelAnimationFrame(animationId);
      if (parent) {
        parent.removeEventListener("mouseenter", pause);
        parent.removeEventListener("mouseleave", resume);
      }
    };
  }, []);

  // Quadruple items to ensure seamless loop even on wide screens with few items
  const doubled = [...certifications, ...certifications, ...certifications, ...certifications];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="overflow-hidden">
        <div ref={scrollRef} className="flex w-max gap-3" style={{ willChange: "transform" }}>
          {doubled.map((cert, idx) => (
            <div
              key={`${cert.id}-${idx}`}
              className="group relative flex h-24 w-[120px] items-center justify-center rounded-2xl border border-white/15 bg-white/5 p-3 backdrop-blur-xl transition hover:border-white/25 hover:bg-white/10"
            >
              <div className="relative h-full w-full">
                <Image
                  src={cert.logo}
                  alt={cert.alt}
                  fill
                  sizes="120px"
                  className="object-contain opacity-80 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
