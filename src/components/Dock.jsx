import { Github, FileUser, Mail, PlayCircle, User } from "lucide-react";

const items = [
  { label: "About", href: "/#about", icon: User },
  // { label: "Content", href: "/content", icon: PlayCircle },
  { label: "Resume", href: "/#projects", icon: FileUser },
  { label: "Contact", href: "/#contact", icon: Mail },
  { label: "GitHub", href: "#", icon: Github },
];

export default function Dock() {
  return (
    <div className="fixed right-6 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-4 rounded-[24px] border border-white/20 bg-white/12 px-4 py-5 shadow-[0_18px_60px_-22px_rgba(0,0,0,0.65)] backdrop-blur-2xl">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="group flex w-24 flex-col items-center gap-2 rounded-2xl px-3 py-3 text-center text-xs font-semibold text-white/80 transition duration-150 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-white/10 hover:text-white"
        >
          <span className="text-2xl drop-shadow-sm" aria-hidden="true">
            <item.icon className="h-7 w-7 text-white" />
          </span>
          <span className="leading-tight">{item.label}</span>
        </a>
      ))}
    </div>
  );
}
