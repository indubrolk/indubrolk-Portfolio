"use client";

export default function ExpandableCard({ children, className = "" }) {
  return (
    <div className={`relative min-w-0 max-w-full ${className}`} data-card>
      {children}
    </div>
  );
}
