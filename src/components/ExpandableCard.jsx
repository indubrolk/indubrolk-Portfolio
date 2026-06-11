"use client";

export default function ExpandableCard({ children, className = "" }) {
  return (
    <div className={`relative ${className}`} data-card>
      {children}
    </div>
  );
}
