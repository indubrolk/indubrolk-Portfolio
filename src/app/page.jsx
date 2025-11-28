"use client";

import Image from "next/image";
import { useState } from "react";
import {FileDown, FileText, FolderGit2, Github, Home, Linkedin, Mail, PlayCircle, User, ArrowUpRight,InstagramIcon,TwitterIcon,FacebookIcon, Menu, X } from "lucide-react";
import DesktopWindow from "../components/DesktopWindow";
import Dock from "../components/Dock";
import { WordRotate } from "@/components/ui/word-rotate";
import GradientText from "@/components/GradientText";
import Footer from "@/components/Footer";


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
    link: "https://github.com/indubrolk/SUSARAElectronics",
  },
  {
    title: "Study Companion App",
    description:
      "This project helps students improve their productivity by providing tools.",
    tech: "React Js / Ballerina / Rest API",
    link: "https://github.com/indubrolk/Study-Companion-Bot",
  },
  {
    title: "Simple ML Chat Bot",
    description:
      "Simple chat-bot using python",
    tech: "Python / Machine Learning ",
    link: "https://github.com/indubrolk/Simple-ML-chatbot#",
  },
];

const galleryItems = [
  {
    title: "UI Shots",
    description: "Selected screens from recent dashboard and landing page explorations.",
    tag: "Web",
    accent: "from-sky-400/25 via-blue-500/15 to-indigo-500/10",
  },
  {
    title: "Brand Frames",
    description: "Hero banners, thumbnails, and cover art crafted for my content work.",
    tag: "Branding",
    accent: "from-orange-400/25 via-amber-400/15 to-pink-500/10",
  },
  {
    title: "Hardware Lab",
    description: "Photos of micro:bit sessions, IoT builds, and maker experiments.",
    tag: "Maker",
    accent: "from-emerald-400/25 via-teal-400/15 to-sky-400/10",
  },
  {
    title: "Motion & Media",
    description: "Short reels, motion studies, and behind-the-scenes captures.",
    tag: "Content",
    accent: "from-fuchsia-400/25 via-purple-500/15 to-slate-800/60",
  },
];
const quickLinks = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const contactItems = [
  {
    //label: "Email",
    //value: "indubro.lk@example.com",
    href: "mailto:indubro.lk@example.com",
    icon: Mail,
  },
  {
    //label: "LinkedIn",
    //value: "linkedin.com/in/indu-jay",
    href: "https://www.linkedin.com/in/indu-jay/",
    icon: Linkedin,
  },
  {
    //label: "Instagram",
    //value: "instagram.com/indu_brolk",
    href: "https://www.instagram.com/indu_brolk/",
    icon: InstagramIcon,
  },
  {
    //label: "Facebook",
    //value: "facebook.com/indu.brolk",
    href: "https://facebook.com/indu.brolk",
    icon: FacebookIcon,
  },
  {
    //label: "X",
    //value: "x.com/indu_brolk",
    href: "https://x.com/indu_brolk",
    icon: TwitterIcon,
  },
];

const techStack = {
  frontend: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  backend: ["Node.js", "REST APIs", "Ballerina"],
  tools: ["Git & GitHub", "VS Code", "Figma","WebStorm"],
};

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("projects");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden text-slate-50">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="desktops-grid absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/4 via-transparent to-black/50" />
      </div>

      <nav className="fixed inset-x-0 top-0 z-20 px-4 pt-6">
        <div className="mx-auto flex max-w-5xl flex-col gap-3">
          <div className="flex items-center gap-3">
            {/* <a
              href="#home"
              className="flex backdrop-blur-xl items-center gap-3 h-15 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-semibold text-white/90 transition hover:border-white/40 hover:bg-white/10"
            > */}
              {/* <span className="relative h-10 w-10 overflow-hidden rounded-2xl bg-white/5"> */}
                <Image
                  src="/indu2.png"
                  alt="Indu logo"
                  width={40}
                  height={40}
                  className="h-13 w-20 object-cover"
                  priority
                />
              {/* </span> */}
              {/* <span className="leading-tight">
                Indu
                <span className="ml-1 text-xs font-medium text-white/60">Portfolio</span>
              </span> */}
            {/* </a> */}
            {/*menu bar*/}
            <div className="flex flex-1 items-center justify-end gap-3 md:justify-center ">
              <div className="hidden items-center backdrop-blur-xl gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 md:flex ">
                {menuIcons.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group relative flex h-11 w-11 items-center justify-center rounded-full text-base font-semibold text-white/80 transition hover:-translate-y-0.5 hover:bg-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    aria-label={item.label}
                  >
                    <item.icon className="h-6 w-6" />
                    <span className="pointer-events-none absolute left-1/2 top-12 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-900 opacity-0 shadow-lg shadow-black/20 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                      {item.label}
                    </span>
                  </a>
                ))}
              </div>
              <button
                type="button"
                className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 md:hidden"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-nav"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                <span>{isMenuOpen ? "Close" : "Menu"}</span>
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div
              id="mobile-nav"
              className="rounded-3xl border border-white/15 bg-black/60 px-4 py-3 backdrop-blur-xl shadow-xl shadow-black/30 md:hidden"
            >
              <div className="flex flex-col divide-y divide-white/10">
                {menuIcons.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between gap-3 px-2 py-3 text-sm font-semibold text-white/80 transition hover:text-white"
                  >
                    <span className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      {item.label}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-white/60" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-4 pt-28 pb-32">
        
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

        <div className="grid gap-5 lg:grid-cols-1">
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
                    Hello! I' m Chamod Induwara, a passionate tech enthusiast, YouTuber, Tech Article Writer and IT undergraduate at the Sabaragamuwa University of Sri Lanka. I enjoy exploring the latest in technology and sharing insights through my YouTube channel and engaging tech articles. Whether it's diving into software, gadgets, or creative tech solutions, I�m dedicated to making tech accessible and enjoyable for everyone. Join me on my journey as I explore, learn, and share everything tech from the heart of Sri Lanka!
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
                  <WordRotate
                    words={["Developer", "Designer","Content Creator"]}
                    className="font-semibold text-white"
                  />
                </div>
                <div className="rounded-xl border border-white/10 bg-white/6 px-3 py-3">
                  <p className="text-[11px] uppercase tracking-wide text-white/60">Location</p>
                  <WordRotate
                    words={["Kurunegala","Sri Lanka", "Remote-friendly"]}
                    className="font-semibold text-white"
                  />
                </div>
                <div className="rounded-xl border border-white/10 bg-white/6 px-3 py-3">
                  <p className="text-[11px] uppercase tracking-wide text-white/60">Focus</p>
                  <WordRotate
                    words={["Web Apps", "UI Systems", "Product Design","Graphic Design","Full-Stack Development","Cloud Technologies","Machine Learning"]}
                    className="font-semibold text-white"
                  />
                </div>
                {/* <div className="rounded-xl border border-white/10 bg-white/6 px-3 py-3">
                  <p className="text-[11px] uppercase tracking-wide text-white/60">Stack</p>
                  <p className="font-semibold text-white">Next.js, React, Tailwind</p>
                </div> */}
              </div>
            </div>
          </DesktopWindow>

          <DesktopWindow>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                <span className="rounded-full border border-white/15 bg-white/10 px-2 py-1">Tech</span>
                <span className="text-white/50">Stack</span>
              </div>

              <div className="grid gap-3 text-sm text-slate-200 sm:grid-cols-1">
                <div className="rounded-xl border border-white/10 bg-white/6 px-3 py-3">
                  <p className="text-[11px] uppercase tracking-wide text-white/60">Frontend</p>
                  <ul className="mt-2 space-y-1">
                    {techStack.frontend.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/6 px-3 py-3">
                  <p className="text-[11px] uppercase tracking-wide text-white/60">Backend</p>
                  <ul className="mt-2 space-y-1">
                    {techStack.backend.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/6 px-3 py-3 sm:col-span-2">
                  <p className="text-[11px] uppercase tracking-wide text-white/60">Tools</p>
                  <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                    {techStack.tools.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </DesktopWindow>
        </div>

        <div className="grid gap-5 lg:grid-cols-3" id="projects">
          <DesktopWindow className="lg:col-span-2">
            <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              {["projects", "gallery"].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full border px-3 py-1 transition ${
                    activeTab === tab
                      ? "border-white/60 bg-white/20 text-white"
                      : "border-white/15 bg-white/8 text-white/60 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {tab === "projects" ? "Projects" : "Gallery"}
                </button>
              ))}
            </div>

            {activeTab === "projects" ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {projects.map((project) => (
                  <button
                    key={project.title}
                    type="button"
                    onClick={() => window.open(project.link, "_blank", "noopener,noreferrer")}
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
                  </button>
                ))}
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {galleryItems.map((item) => (
                  <div
                    key={item.title}
                    className={`group flex flex-col gap-3 rounded-2xl border border-white/10 bg-gradient-to-br ${item.accent} p-4 text-left shadow-inner shadow-white/5 transition hover:-translate-y-1 hover:border-white/25 hover:from-white/20`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-base font-semibold text-white">{item.title}</h3>
                        <p className="text-sm text-slate-200">{item.description}</p>
                      </div>
                      <span className="rounded-full border border-white/20 bg-white/15 px-2 py-1 text-[11px] text-white/80">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-[12px] uppercase tracking-wide text-white/70">Snapshots &amp; Media</p>
                  </div>
                ))}
              </div>
            )}
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
                  <button
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-center rounded-xl border border-white/10 bg-white/8 px-3 py-3 transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/12"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                        <item.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-[11px] uppercase tracking-wide text-white/60">{item.label}</p>
                        <p className="font-semibold text-white group-hover:text-sky-200">{item.value}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-white/60 transition group-hover:text-white" />
                  </button>
                ))}
              </div>
            </div>
          </DesktopWindow>
        </div>
      </main>

        <Footer/>

{/*      <footer className="relative z-10 mx-auto mt-6 flex max-w-6xl flex-col items-center gap-3 px-6 pb-24 text-center text-sm text-white/70">*/}
{/*        <div className="h-px w-full max-w-4xl bg-white/10" />*/}
{/*        <div className="flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.25em]">*/}
{/*        <GradientText*/}
{/*  colors={["#fd690c", "#d35101", "#ff893a", "#fdc19b"]}*/}
{/*  animationSpeed={1}*/}
{/*  showBorder={false}*/}
{/*  className="custom-class"*/}
{/*>*/}
{/*  Your Best Technocract!*/}
{/*</GradientText>*/}
{/*</div>*/}
{/*        <div className="flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.25em] text-white/60">*/}
{/*          {["Projects", "About", "Contact"].map((item) => (*/}
{/*            <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">*/}
{/*              {item}*/}
{/*            </a>*/}
{/*          ))}*/}
{/*        </div>*/}
{/*        */}
{/*        <p className="text-xs text-white/60">*/}
{/*          &copy; {new Date().getFullYear()} Induwara Jayakody - Crafted with Next.js & Tailwind.*/}
{/*        </p>*/}
{/*      </footer>*/}
      <Dock />
    </div>
  );
}
