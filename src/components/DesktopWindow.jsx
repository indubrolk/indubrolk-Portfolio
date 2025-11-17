export default function DesktopWindow({ children, className = "", ...rest }) {
  return (
    <div
      {...rest}
      className={`relative overflow-hidden rounded-2xl border border-white/12 bg-white/8 backdrop-blur-2xl shadow-[0_18px_60px_-22px_rgba(0,0,0,0.55)] ${className}`}
    >
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}
