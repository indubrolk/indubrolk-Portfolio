"use client";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "motion/react";

import React, {
  createContext,
  useState,
  useContext,
  useRef,
} from "react";

const MouseEnterContext = createContext(undefined);

export const CardContainer = ({
  children,
  className,
  containerClassName
}) => {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const reduceMotion = useReducedMotion();

  const handleMouseMove = (e) => {
    if (!containerRef.current || reduceMotion || e.pointerType === "touch") return;
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = Math.max(-8, Math.min(8, ((e.clientX - left) / width - 0.5) * 16));
    const y = Math.max(-8, Math.min(8, -((e.clientY - top) / height - 0.5) * 16));
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = (e) => {
    if (reduceMotion || e.pointerType === "touch") return;
    setIsMouseEntered(true);
  };

  const handleMouseLeave = (e) => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };
  return (
    <MouseEnterContext.Provider value={[isMouseEntered && !reduceMotion, setIsMouseEntered]}>
      <div
        onPointerEnter={handleMouseEnter}
        onPointerMove={handleMouseMove}
        onPointerLeave={handleMouseLeave}
        onPointerCancel={handleMouseLeave}
        className={cn(
          "py-20 flex items-center justify-center",
          containerClassName
        )}
        style={{
          perspective: "1000px",
        }}
      >
        <div
          ref={containerRef}
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear",
            className
          )}
          style={{
            transformStyle: "preserve-3d",
            ...(reduceMotion ? { transform: "none", transition: "none" } : {}),
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({
  as: Tag = "div",
  children,
  className,
  ...rest
}) => {
  return (
    <Tag
      {...rest}
      className={cn(
        "h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </Tag>
  );
};

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  style,
  ...rest
}) => {
  const [isMouseEntered] = useMouseEnter();
  const reduceMotion = useReducedMotion();

  return (
    <Tag
      className={cn("w-fit transition duration-200 ease-linear", className)}
      style={{
        ...style,
        transform: isMouseEntered
          ? `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
          : "translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) rotateZ(0deg)",
        ...(reduceMotion ? { transition: "none" } : {}),
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

// Create a hook to use the context
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};
