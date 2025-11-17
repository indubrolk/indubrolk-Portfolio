"use client";

import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// Merge Tailwind classes while handling conditional inputs
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

