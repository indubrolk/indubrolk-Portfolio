import ColorBends from "./ColorBends";

export default function DesktopWindow({ children, className = "", ...rest }) {
  return (
    <div
      {...rest}
      className={`relative overflow-hidden rounded-2xl border border-white/12 bg-white/8 backdrop-blur-2xl shadow-[0_18px_60px_-22px_rgba(0,0,0,0.55)] ${className}`}
    >
      {/* <ColorBends
        className="absolute inset-0 -z-10 pointer-events-none opacity-50"
        colors={["#0ea5e9", "#6366f1", "#a855f7", "#22d3ee", "#f472b6"]}
        speed={0.12}
        autoRotate={4}
        warpStrength={0.9}
        frequency={1}
        noise={0.02}
        scale={1}
      /> */}
      <div className="relative p-5 sm:p-6">{children}</div>
    </div>
  );
}
