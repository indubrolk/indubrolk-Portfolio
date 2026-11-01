"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";

const BASE_SIZE = 44;
const GAP = 12;
const RADIUS = 120;
const spring = { mass: 0.25, stiffness: 240, damping: 24 };

function NavigationDockItem({ item, index, pointer, focused, reduceMotion }) {
  const center = index * (BASE_SIZE + GAP) + BASE_SIZE / 2;
  const targetSize = useTransform([pointer, focused], ([position, focusIndex]) => {
    if (reduceMotion) return BASE_SIZE;
    const distance = focusIndex >= 0
      ? (index - focusIndex) * (BASE_SIZE + GAP)
      : center - position;
    const proximity = Math.max(0, 1 - Math.abs(distance) / RADIUS);
    // A cosine curve eases both the edge of the effect and its peak.
    const influence = (1 - Math.cos(proximity * Math.PI)) / 2;
    return BASE_SIZE + influence * 32;
  });
  const size = useSpring(targetSize, spring);
  const lift = useTransform(size, [44, 76], [0, -10]);
  const iconSize = useTransform(size, [44, 76], [24, 36]);

  return (
    <motion.a
      href={item.href}
      className="navigation-dock-item"
      aria-label={item.label}
      style={{ width: size }}
      onFocus={() => focused.set(index)}
      onBlur={() => focused.set(-1)}
    >
      <motion.span
        className="navigation-dock-icon"
        aria-hidden="true"
        style={{ height: size, y: lift }}
      >
        <motion.span className="navigation-dock-glyph" style={{ width: iconSize, height: iconSize }}>
          <item.icon />
        </motion.span>
      </motion.span>
      <span className="navigation-dock-label" aria-hidden="true">{item.label}</span>
    </motion.a>
  );
}

export default function NavigationDock({ items }) {
  const pointer = useMotionValue(Infinity);
  const focused = useMotionValue(-1);
  const reduceMotion = useReducedMotion();
  const baseWidth = items.length * BASE_SIZE + (items.length - 1) * GAP;

  return (
    <div
      className="navigation-dock relative isolate hidden items-center gap-3 rounded-full border border-white/10 px-5 py-2 md:flex"
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;
        const bounds = event.currentTarget.getBoundingClientRect();
        // Normalize to the unexpanded row, avoiding feedback from moving icon edges.
        const innerWidth = bounds.width - 42;
        if (innerWidth > 0) pointer.set((event.clientX - bounds.left - 21) * baseWidth / innerWidth);
      }}
      onPointerLeave={() => pointer.set(Infinity)}
      onPointerCancel={() => pointer.set(Infinity)}
    >
      {items.map((item, index) => (
        <NavigationDockItem
          key={item.label}
          item={item}
          index={index}
          pointer={pointer}
          focused={focused}
          reduceMotion={reduceMotion}
        />
      ))}
    </div>
  );
}
