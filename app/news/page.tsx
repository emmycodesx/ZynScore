"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Newspaper, Clock, ArrowRight, Bookmark, Share2, Sparkles } from "lucide-react";
import SportLiveNavbar from "@/components/SportLiveNavbar";
import SportLiveFooter from "@/components/SportLiveFooter";

export default function NewsPage() {
  const [selectedTag, setSelectedTag] = useState("all");

  const tags = [
    { id: "all", label: "All News" },
    { id: "tactical", label: "Tactical Analysis" },
    { id: "basketball", label: "Basketball & NBA" },
    { id: "football", label: "European Football" },
    { id: "transfers", label: "Transfers & Scouting" },
    { id: "tennis", label: "Tennis" },
  ];

  const articles = [
    {
      id: "a-1",
      tag: "tactical",
      category: "Tactical Analysis",
      title: "The Tactical Evolution of High-Press Defenses in Modern European Football",
      subtitle: "An in-depth statistical look at how elite managers are redefining defensive blocks through synchronized wing-backs, zone pressing, and turnover traps.",
      image: "/images/real_klopp_manager.jpg",
      author: "Martin Tyler",
      date: "2 hours ago",
      readTime: "5 min read",
      featured: false,
    },
    {
      id: "a-2",
      tag: "basketball",
      category: "Basketball • NBA Analytics",
      title: "Beyond the Arc: How Pace, Space & Shot-Quality Metrics Are Deciding the Championship Race",
      subtitle: "Breaking down offensive rating spikes, paint frequency rates, and true shooting efficiency in high-velocity transition offenses.",
      image: "/images/real_lebron_dunk.jpg",
      author: "Marcus Hayes",
      date: "3 hours ago",
      readTime: "4 min read",
      featured: false,
    },
    {
      id: "a-3",
      tag: "tennis",
      category: "Tennis Grand Slam",
      title: "Next-Gen Rivalries: Redefining the Pinnacle of Grand Slam Tennis",
      subtitle: "Examining the psychological resilience and physical conditioning required to dominate the baseline exchanges in five-set modern championship epics.",
      image: "/images/real_alcaraz_tennis.jpg",
      author: "Elena Rostova",
      date: "5 hours ago",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: "a-4",
      tag: "basketball",
      category: "Basketball • EuroLeague",
      title: "Rim Protection & Vertical Spacing: Continental Defense at the Highest Level",
      subtitle: "How European big men are adapting to switch-heavy perimeter schemes without surrendering paint control.",
      image: "/images/basketball.jpg",
      author: "Nikos Spanoulis",
      date: "7 hours ago",
      readTime: "4 min read",
      featured: false,
    },
    {
      id: "a-5",
      tag: "transfers",
      category: "Transfer Market",
      title: "Summer Transfer Window Early Preview: Top 10 Target Profiles & Data Scouting",
      subtitle: "Scouting reports and data metrics on the most sought-after young prospects across South America and continental academies entering contract renewal periods.",
      image: "/images/soccer.jpg",
      author: "Fabrizio Romano Desk",
      date: "8 hours ago",
      readTime: "7 min read",
      featured: false,
    },
  ];

  const filteredArticles =
    selectedTag === "all"
      ? articles
      : articles.filter((a) => a.tag === selectedTag);

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#FAFAFA] text-[#111827] font-body selection:bg-black selection:text-white">
      <SportLiveNavbar activeTab="news" />

      <main className="w-full flex-1 py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-6">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <span className="text-black font-semibold">News & Analysis</span>
          </nav>

          {/* Header */}
          <div className="border-b border-neutral-200 pb-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-neutral-700">
              <Newspaper className="h-3.5 w-3.5 text-black" />
              <span>ZynScore Editorial Desk</span>
            </div>
            <h1 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black">
              News & Tactical Analysis
            </h1>
            <p className="mt-2 text-sm text-neutral-600">
              Data-backed sports journalism, scouting breakdowns, and optical telemetry insights.
            </p>
          </div>

          {/* Featured Headline Story Card */}
          <div className="mt-8 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition-all hover:shadow-md cursor-pointer">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[300px] overflow-hidden bg-neutral-900">
                <Image
                  src="/images/real_el_clasico.jpg"
                  alt="Real Madrid vs Barcelona El Clasico"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 left-4 rounded-md bg-black/85 px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                  Cover Story • Tactical Deep Dive
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
                    <span>Just Now</span>
                    <span>•</span>
                    <span>By Senior Tactical Staff</span>
                  </div>
                  <h2 className="mt-3 font-heading text-2xl sm:text-3xl font-black tracking-tight text-black leading-tight hover:text-neutral-700 transition-colors">
                    El Clásico Telemetry Breakdown: How High-Zone Overloads Won the Midfield Battle
                  </h2>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-neutral-600">
                    A comprehensive inspection of the 78th-minute counter-attack that fractured Barcelona&apos;s defensive offside trap, powered by real-time optical velocity tracking and expected threat (xT) metrics.
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-4 text-xs">
                  <span className="font-mono text-neutral-500">8 min read • 14 Data Visuals</span>
                  <span className="inline-flex items-center gap-1 font-bold text-black hover:text-neutral-600">
                    Read Analysis <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-10 flex flex-wrap items-center gap-2 border-b border-neutral-200 pb-5">
            {tags.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setSelectedTag(t.id)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                  selectedTag === t.id
                    ? "bg-black text-white shadow-sm"
                    : "bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-300 hover:text-black"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all hover:border-neutral-300 hover:shadow-md cursor-pointer"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 rounded-md bg-black/85 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                      {article.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-400">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="mt-2 font-heading text-lg font-bold leading-snug text-black group-hover:text-neutral-700 transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-neutral-600 line-clamp-3">
                      {article.subtitle}
                    </p>
                  </div>
                </div>

                {/* Footer Byline */}
                <div className="px-5 pb-5 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-mono">
                  <span>By {article.author}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-neutral-400 group-hover:text-black transition-colors" />
                </div>
              </article>
            ))}
          </div>

        </div>
      </main>

      <SportLiveFooter />
    </div>
  );
}
