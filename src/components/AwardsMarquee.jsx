"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Award, Search, Eye, ArrowLeft, ExternalLink, X } from "lucide-react";
import CardModal from "./CardModal";

export const certifications = [
  {
    id: "google-sysadmin",
    name: "Foundations of Project Management",
    shortName: "System Admin & IT Infra",
    issuer: "Google",
    year: "2026",
    logo: "/arti1.jpg", // Replace with your actual certificate image
    alt: "System Administration and IT Infrastructure Services Certificate",
  },
  {
    id: "meta-fullstack",
    name: "Full Stack Development",
    shortName: "Full Stack Dev",
    issuer: "Meta",
    year: "2026",
    logo: "/arti2.jpg", // Replace with your actual certificate image
    alt: "Meta Full Stack Certificate",
  },
  {
    id: "google-cloud",
    name: "Google Cloud Fundamentals: Core Infrastructure",
    shortName: "Google Cloud Core Infra",
    issuer: "Google",
    year: "2026",
    logo: "/arti3.jpg", // Replace with your actual certificate image
    alt: "Google Cloud Fundamentals Certificate",
  },
  {
    id: "google-pm",
    name: "Foundations of Project Management",
    shortName: "Project Management",
    issuer: "Google",
    year: "2025",
    logo: "/PM certificate.jpeg", // Replace with your actual certificate image
    alt: "Foundations of Project Management Certificate",
  },
];

export function CertificateViewerContent({ cert, onBack }) {
  if (!cert) return null;

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-4 pr-10">
        <div className="space-y-1">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="mb-2 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-sky-300 transition hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to all certificates
            </button>
          )}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
            <Award className="h-4 w-4" />
            <span>{cert.issuer}</span>
            <span className="text-white/40">•</span>
            <span className="text-white/60">{cert.year}</span>
          </div>
          <h3 className="text-lg font-bold text-white sm:text-xl">{cert.name}</h3>
        </div>

        <a
          href={cert.logo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white/90 transition hover:border-white/30 hover:bg-white/20"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          <span>Open Full Image</span>
        </a>
      </div>

      <div className="relative mx-auto flex h-[50vh] max-h-[520px] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-black/40 p-4">
        <div className="relative h-full w-full">
          <Image
            src={cert.logo}
            alt={cert.alt}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export function AwardsModalView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCert, setSelectedCert] = useState(null);

  const filteredCerts = certifications.filter(
    (cert) =>
      cert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.year.includes(searchQuery)
  );

  if (selectedCert) {
    return (
      <CertificateViewerContent
        cert={selectedCert}
        onBack={() => setSelectedCert(null)}
      />
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-4 border-b border-white/10 pb-4 pr-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1">
              Awards
            </span>
            <span className="text-white/50">&amp; Certifications</span>
          </div>
          <p className="mt-1.5 text-sm text-slate-300">
            Search and click on any certification below to inspect the certificate.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Look for certificate..."
            className="w-full rounded-full border border-white/15 bg-white/10 py-2 pl-9 pr-8 text-sm text-white placeholder-white/40 transition focus:border-white/35 focus:bg-white/15 focus:outline-none"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-0.5 text-white/50 hover:text-white"
              aria-label="Clear search"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {filteredCerts.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 py-12 text-center">
          <Award className="mb-2 h-8 w-8 text-white/40" />
          <p className="text-sm font-medium text-white/80">
            No matching certificates found
          </p>
          <p className="mt-1 text-xs text-white/50">
            Try searching by name, issuer (e.g. Google, Meta), or year.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {filteredCerts.map((cert) => (
            <button
              key={cert.id}
              type="button"
              onClick={() => setSelectedCert(cert)}
              className="group flex flex-col gap-3 rounded-2xl border border-white/15 bg-white/[0.06] p-4 text-left transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.12]"
            >
              <div className="relative h-40 w-full overflow-hidden rounded-xl border border-white/10 bg-black/30 p-2">
                <div className="relative h-full w-full">
                  <Image
                    src={cert.logo}
                    alt={cert.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
                    className="object-contain opacity-90 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition duration-200 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/60 px-3 py-1.5 text-xs font-semibold text-white">
                    <Eye className="h-3.5 w-3.5" />
                    View Certificate
                  </span>
                </div>
              </div>

              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-sky-300">
                    <span>{cert.issuer}</span>
                    <span className="text-white/30">•</span>
                    <span className="text-white/60">{cert.year}</span>
                  </div>
                  <h4 className="mt-0.5 line-clamp-2 text-sm font-semibold text-white group-hover:text-sky-100">
                    {cert.name}
                  </h4>
                </div>
                <span className="shrink-0 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white/80 transition group-hover:border-white/30 group-hover:bg-white/20 group-hover:text-white">
                  View
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function AwardsMarquee() {
  const scrollRef = useRef(null);
  const [activeCert, setActiveCert] = useState(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId;
    let offset = 0;
    const speed = 0.5; // px per frame

    const step = () => {
      offset += speed;
      // reset when we've scrolled past the first set (half the total width)
      const halfWidth = el.scrollWidth / 2;
      if (offset >= halfWidth) offset = 0;
      el.style.transform = `translateX(-${offset}px)`;
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);

    // pause on hover
    const parent = el.parentElement;
    const pause = () => cancelAnimationFrame(animationId);
    const resume = () => {
      animationId = requestAnimationFrame(step);
    };

    if (parent) {
      parent.addEventListener("mouseenter", pause);
      parent.addEventListener("mouseleave", resume);
    }

    return () => {
      cancelAnimationFrame(animationId);
      if (parent) {
        parent.removeEventListener("mouseenter", pause);
        parent.removeEventListener("mouseleave", resume);
      }
    };
  }, []);

  // Quadruple items to ensure seamless loop even on wide screens
  const doubled = [
    ...certifications,
    ...certifications,
    ...certifications,
    ...certifications,
  ];

  return (
    <>
      <div className="relative w-full overflow-hidden">
        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex w-max gap-3 py-1"
            style={{ willChange: "transform" }}
          >
            {doubled.map((cert, idx) => (
              <button
                key={`${cert.id}-${idx}`}
                type="button"
                onClick={() => setActiveCert(cert)}
                className="group relative flex w-[155px] flex-col items-center justify-between gap-2 rounded-2xl border border-white/15 bg-white/[0.06] p-3 text-left transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.12]"
              >
                <div className="relative h-20 w-full overflow-hidden rounded-xl bg-black/20 p-1.5">
                  <div className="relative h-full w-full">
                    <Image
                      src={cert.logo}
                      alt={cert.alt}
                      fill
                      sizes="150px"
                      className="object-contain opacity-85 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
                    />
                  </div>
                </div>
                <div className="w-full min-w-0 text-center">
                  <p className="truncate text-xs font-semibold text-white group-hover:text-sky-200">
                    {cert.shortName || cert.name}
                  </p>
                  <p className="truncate text-[10px] font-medium uppercase tracking-wider text-white/55">
                    {cert.issuer} • {cert.year}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <CardModal isOpen={!!activeCert} onClose={() => setActiveCert(null)}>
        <CertificateViewerContent cert={activeCert} />
      </CardModal>
    </>
  );
}
