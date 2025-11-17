import Image from "next/image";
import { FileText, FolderGit2, Home, Mail, User,PlayCircle } from "lucide-react";
import DesktopWindow from "../components/DesktopWindow";
import Dock from "../components/Dock";
import { WordRotate } from "@/components/ui/word-rotate";


const menuIcons = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Projects", href: "#projects", icon: FolderGit2 },
  { label: "About", href: "#about", icon: User },
  { label: "Contact", href: "#contact", icon: Mail },
  { label: "Content", href: "/content", icon: PlayCircle },
];

const desktopIcons = [
  { label: "About", href: "#about", icon: User },
  { label: "Projects", href: "#projects", icon: FolderGit2 },
  { label: "Contact", href: "#contact", icon: Mail },
  { label: "Resume", href: "#", icon: FileText },
];

const projects = [
  {
    title: "Susara Electronics Website",
    description:
      "E-commerce-style experience with responsive product browsing and a clean, minimal interface.",
    tech: "React / Vite / Tailwind",
    link: "https://github.com/yourusername/susara-electronics",
  },
  {
    title: "Smart Parking App",
    description:
      "Concept app to discover, reserve, and navigate to parking spots in real time with live availability.",
    tech: "Next.js / REST APIs",
    link: "#",
  },
  {
    title: "Micro:bit Workshop",
    description:
      "Interactive lessons and demos that help kids learn programming fundamentals with micro:bit.",
    tech: "Micro:bit / MakeCode / STEM",
    link: "#",
  },
];

const quickLinks = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const contactItems = [
  {
    label: "Email",
    value: "youremail@example.com",
    href: "mailto:youremail@example.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/your-profile",
    href: "https://www.linkedin.com/in/your-profile/",
  },
  {
    label: "GitHub",
    value: "github.com/yourusername",
    href: "https://github.com/yourusername",
  },
];

export default function HomePage() {
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

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-4 pt-24 pb-32">
        
        {/* <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {desktopIcons.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group flex flex-col items-center gap-2 text-sm font-semibold text-white/90"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-base shadow-inner shadow-white/5 transition group-hover:-translate-y-1 group-hover:border-white/30 group-hover:bg-white/14">
                <item.icon className="h-6 w-6" />
              </span>
              <span className="text-xs uppercase tracking-wide text-white/70 group-hover:text-white">
                {item.label}
              </span>
            </a>
          ))}
        </section> */}

        <div className="grid gap-5 lg:grid-cols-3">
          <DesktopWindow className="lg:col-span-2">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-2" id="home">
                <p className="text-xl font-mono uppercase tracking-[0.35em] text-slate-300">
                  Hi, I&apos;m
                </p>
                <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                  {/* <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
                    Induwara Jayakody
                  </span>{" "} */}
                  <WordRotate
                    className="bg-gradient-to-r from-orange-100 via-orange-300 to-orange-600 bg-clip-text text-transparent"
                    words={[
                      "Induwara Jayakody",
                      "indu brolk",
                      "Youtuber",
                      "Technology Enthusiast",
                      "FullStack Developer",
                    ]}
                  />
                </h1>
                <p className="max-w-2xl text-sm text-slate-200 sm:text-base">
                    Hello! I’m Chamod Induwara, a passionate tech enthusiast, YouTuber, Tech Article Writer and IT undergraduate at the Sabaragamuwa University of Sri Lanka. I enjoy exploring the latest in technology and sharing insights through my YouTube channel and engaging tech articles. Whether it's diving into software, gadgets, or creative tech solutions, I’m dedicated to making tech accessible and enjoyable for everyone. Join me on my journey as I explore, learn, and share everything tech from the heart of Sri Lanka!
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Next.js", "React", "Tailwind", "UI/UX", "Electronics"].map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs font-medium text-slate-100"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative mx-auto h-40 w-40 shrink-0 overflow-hidden rounded-full border border-black/15 bg-gradient-to-br from-white/10 via-white/5 to-white/0 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.65)]">
                <Image
                  src="/profile pic.jpeg"
                  alt="Induwara Jayakody"
                  fill
                  sizes="160px"
                  className="object-cover"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/5" />
              </div>

              {/* <div className="grid gap-3 sm:grid-cols-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm font-semibold text-white/90 shadow-inner shadow-white/5 transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
                  >
                    <div className="flex items-center justify-between">
                      <span>{link.label}</span>
                      <span className="text-xs text-white/60 transition group-hover:text-white"></span>
                    </div>
                  </a>
                ))}
              </div> */}
            </div>
          </DesktopWindow>

          <DesktopWindow id="about">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                <span className="rounded-full border border-white/15 bg-white/10 px-2 py-1">About</span>
                <span className="text-white/50">Overview</span>
              </div>
              <p className="text-sm text-slate-200">
                I&apos;m a frontend-focused developer based in Sri Lanka, turning ideas into elegant web products.
                I enjoy collaborating with teams, sketching interfaces, and building dependable experiences.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-200">
                <div className="rounded-xl border border-white/10 bg-white/6 px-3 py-3">
                  <p className="text-[11px] uppercase tracking-wide text-white/60">Role</p>
                  <p className="font-semibold text-white">Developer / Designer</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/6 px-3 py-3">
                  <p className="text-[11px] uppercase tracking-wide text-white/60">Location</p>
                  <p className="font-semibold text-white">Sri Lanka</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/6 px-3 py-3">
                  <p className="text-[11px] uppercase tracking-wide text-white/60">Focus</p>
                  <p className="font-semibold text-white">Web Apps, UI Systems</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/6 px-3 py-3">
                  <p className="text-[11px] uppercase tracking-wide text-white/60">Stack</p>
                  <p className="font-semibold text-white">Next.js, React, Tailwind</p>
                </div>
              </div>
            </div>
          </DesktopWindow>
        </div>

        <div className="grid gap-5 lg:grid-cols-3" id="projects">
          <DesktopWindow className="lg:col-span-2">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              <span className="rounded-full border border-white/15 bg-white/10 px-2 py-1">Projects</span>
              <span className="text-white/50">Gallery</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {projects.map((project) => (
                <a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col gap-2 rounded-2xl border border-white/10 bg-gradient-to-br from-white/6 via-white/4 to-white/2 p-4 text-left shadow-inner shadow-white/5 transition hover:-translate-y-1 hover:border-white/25 hover:from-white/10"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-semibold text-white">{project.title}</h3>
                      <p className="text-sm text-slate-200">{project.description}</p>
                    </div>
                    <span className="rounded-full border border-white/15 bg-white/10 px-2 py-1 text-[11px] text-white/80">
                      Open
                    </span>
                  </div>
                  <p className="text-[12px] font-medium uppercase tracking-wide text-sky-200/90">
                    {project.tech}
                  </p>
                </a>
              ))}
            </div>
          </DesktopWindow>

          <DesktopWindow id="contact">
            <div className="space-y-3">
              <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                <span className="rounded-full border border-white/15 bg-white/10 px-2 py-1">Contact</span>
                <span className="text-white/50">Reach Out</span>
              </div>
              <p className="text-sm text-slate-200">
                Want to collaborate, ask a question, or just say hi? I&apos;m always open to a quick chat.
              </p>
              <div className="space-y-2 text-sm text-slate-100">
                {contactItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/6 px-3 py-2"
                  >
                    <div>
                      <p className="text-[11px] uppercase tracking-wide text-white/60">{item.label}</p>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-white hover:text-sky-200"
                      >
                        {item.value}
                      </a>
                    </div>
                    <span className="text-xs text-white/60"></span>
                  </div>
                ))}
              </div>
            </div>
          </DesktopWindow>
        </div>
      </main>

      <Dock />
    </div>
  );
}
