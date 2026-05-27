"use client";

import { FileText, PlayCircle, Maximize2 } from "lucide-react";
import DesktopWindow from "./DesktopWindow";
import Footer from "./Footer";
import Articles from "./Articles";
import { toggleFullscreen } from "@/lib/toggleFullscreen";

export default function ContentShowcase({ videos = [], articles = [] }) {
  const handleFullscreenClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleFullscreen(event.currentTarget.closest("[data-card]"));
  };

  return (
    <>
      <DesktopWindow id="content">
        <div className="space-y-4">

            <div className="space-y-3">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-wide text-white/60">
                    <FileText className="h-4 w-4" />
                    <span>Articles</span>
                </div>



                {/*<div className="grid gap-3">*/}
                {/*    {articles.map((article) => (*/}
                {/*        <a*/}
                {/*            key={article.title}*/}
                {/*            href={article.href}*/}
                {/*            target="_blank"*/}
                {/*            rel="noreferrer"*/}
                {/*            className="group flex flex-col gap-1 rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 via-white/5 to-white/2 p-4 text-left shadow-inner shadow-white/5 transition hover:-translate-y-1 hover:border-white/25 hover:from-white/12"*/}
                {/*        >*/}
                {/*            <div className="flex items-start justify-between gap-3">*/}
                {/*                <div>*/}
                {/*                    <h3 className="text-sm font-semibold text-white">{article.title}</h3>*/}
                {/*                    <p className="text-xs text-slate-200">{article.description}</p>*/}
                {/*                </div>*/}
                {/*                <span className="rounded-full border border-white/15 bg-white/10 px-2 py-1 text-[11px] text-white/75 transition group-hover:border-white/25 group-hover:text-white">*/}
                {/*          {article.tag || "Read"}*/}
                {/*        </span>*/}
                {/*            </div>*/}
                {/*            {article.source && (*/}
                {/*                <p className="text-[11px] uppercase tracking-wide text-sky-200/90">{article.source}</p>*/}
                {/*            )}*/}
                {/*        </a>*/}
                {/*    ))}*/}
                {/*</div>*/}
            </div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            <span className="rounded-full border border-white/15 bg-white/10 px-2 py-1">
              Content
            </span>
            <span className="text-white/50">Videos & Articles</span>


          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-wide text-white/60">
                <PlayCircle className="h-4 w-4" />
                <span>YouTube</span>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-3">
                {videos.map((video) => (
                  <div key={video.title} className="relative" data-card>
                    <a
                      href={video.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex flex-col gap-3 rounded-3xl border border-white/15 bg-gradient-to-br from-white/10 via-white/6 to-white/4 backdrop-blur-xl p-5 text-left shadow-inner shadow-white/5 transition hover:-translate-y-1 hover:border-white/25 hover:from-white/12"
                    >
                      <div className="flex items-start justify-between gap-1">
                        <div>
                          <h3 className="text-sm font-semibold text-white">{video.title}</h3>
                          <p className="text-xs text-slate-200">{video.description}</p>
                        </div>
                        <span className="rounded-full border border-white/15 bg-white/10 px-2 py-1 text-[11px] text-white/75 transition group-hover:border-white/25 group-hover:text-white">
                          Watch
                        </span>
                      </div>

                      {video.duration && (
                        <p className="text-[11px] uppercase tracking-wide text-sky-200/90">{video.duration}</p>
                      )}
                    </a>
                    <button
                      type="button"
                      onClick={handleFullscreenClick}
                      className="absolute right-3 top-3 z-10 rounded-full border border-white/20 bg-black/40 p-1.5 text-white/90 backdrop-blur-md transition hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                      aria-label="Toggle full screen"
                      title="Toggle full screen"
                    >
                      <Maximize2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>
      </DesktopWindow>
        <div className="flex-grow">

            <Footer />
        </div>

    </>
  );
}
