const menuItems = ["Finder", "File", "Edit", "View", "Go", "Window", "Help"];

export default function MenuBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 border-b border-white/10 bg-white/7 backdrop-blur-2xl text-xs text-slate-100">
      <div className="mx-auto flex max-w-6xl items-center gap-5 px-4 py-2">
        <div className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase">Mac Desktop</span>
          <span className="hidden text-white/80 sm:inline">Portfolio</span>
        </div>
        <nav className="hidden items-center gap-4 text-[11px] text-white/70 sm:flex">
          {menuItems.map((item) => (
            <span key={item} className="transition-colors hover:text-white">
              {item}
            </span>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-3 text-[11px] text-white/80">
          <span className="hidden rounded-full border border-white/15 bg-white/10 px-2 py-1 sm:inline">
            Desktop
          </span>
          <span className="rounded-full border border-white/15 bg-white/10 px-2 py-1">
            10:24 AM
          </span>
        </div>
      </div>
    </header>
  );
}
