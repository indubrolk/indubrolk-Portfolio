import { FileText, Home, PlayCircle } from "lucide-react";
import ContentShowcase from "../../components/ContentShowcase";
import DesktopWindow from "../../components/DesktopWindow";
import Dock from "../../components/Dock";
import Articles from "../../components/Articles";

const videoItems = [
  {
    title: "Building a Modern Portfolio with Next.js",
    description: "End-to-end walkthrough of the layout, gradients, and interactive touches I use.",
    href: "#",
    duration: "12:48",
  },
  {
    title: "Tailwind UI Tricks for Clean Dashboards",
    description: "Practical spacing, blur, and shadow patterns that stay consistent across breakpoints.",
    href: "#",
    duration: "9:17",
  },
];

const articleItems = [
  {
    title: "Designing Resilient UI Systems in React",
    description: "How I approach component APIs, tokens, and guardrails for fast iterations.",
    href: "#",
    source: "Personal Blog",
    tag: "Read",
  },
  {
    title: "Shipping Faster with Component Playbooks",
    description: "Notes on building repeatable patterns for hero sections, cards, and nav bars.",
    href: "#",
    source: "Medium",
    tag: "Article",
  },
];

const menuIcons = [
  { label: "Home", href: "/", icon: Home },
  { label: "Content", href: "#content", icon: FileText },
];

export default function ContentPage() {
  return (
    <div className="relative min-h-screen overflow-hidden text-slate-50">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="desktops-grid absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/4 via-transparent to-black/50" />
      </div>

      <nav className="fixed inset-x-0 top-0 z-20 mx-auto flex max-w-5xl items-center justify-center gap-4 px-6 pt-6">
        <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/12 px-5 py-3 backdrop-blur-xl shadow-lg shadow-black/20">
          {menuIcons.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex h-11 w-11 items-center justify-center rounded-full text-base font-semibold text-white/80 transition hover:-translate-y-0.5 hover:bg-white/20 hover:text-white"
              aria-label={item.label}
            >
              <item.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </nav>

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-4 pt-32 pb-32">
        <DesktopWindow>
          <Articles />
        </DesktopWindow>

        <ContentShowcase videos={videoItems} articles={articleItems} />
      </main>

      <Dock />
    </div>
  );
}