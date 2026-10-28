"use client";

import Image from "next/image";

export default function EditorialSection() {
  return (
    <div className="w-full space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-black">
          Editorial & Analysis
        </h2>
      </div>

      <div className="space-y-5">
        
        {/* ARTICLE 1: TACTICAL ANALYSIS */}
        <article className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-neutral-300 hover:shadow-xl cursor-pointer">
          {/* Action Image with Badge */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100">
            <Image
              src="/images/real_klopp_manager.jpg"
              alt="Jürgen Klopp Tactical Coaching on the Sideline"
              fill
              sizes="(max-width: 768px) 100vw, 450px"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            {/* Shimmer sweep */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
            <div className="absolute top-3 left-3 rounded-md bg-black/85 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-white backdrop-blur-sm border border-white/10">
              Tactical Analysis
            </div>
          </div>

          {/* Text Content */}
          <div className="p-4 sm:p-5">
            <span className="text-[11px] font-mono text-neutral-400">
              2 hours ago • By Martin Tyler
            </span>
            <h3 className="mt-1.5 font-heading text-lg font-bold leading-snug text-black group-hover:text-neutral-700 transition-colors">
              The Tactical Evolution of High-Press Defenses in Modern European Football
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-neutral-600 line-clamp-2">
              An in-depth statistical look at how elite managers are redefining defensive blocks through synchronized wing-backs, zone pressing, and turnover traps.
            </p>
          </div>
        </article>

        {/* ARTICLE 2: BASKETBALL NBA ANALYTICS */}
        <article className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-neutral-300 hover:shadow-xl cursor-pointer">
          {/* Action Image with Badge */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100">
            <Image
              src="/images/real_lebron_dunk.jpg"
              alt="LeBron James Slam Dunk in NBA Game Action"
              fill
              sizes="(max-width: 768px) 100vw, 450px"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            {/* Shimmer sweep */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
            <div className="absolute top-3 left-3 rounded-md bg-black/85 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-white backdrop-blur-sm border border-white/10">
              Basketball • NBA Analytics
            </div>
          </div>

          {/* Text Content */}
          <div className="p-4 sm:p-5">
            <span className="text-[11px] font-mono text-neutral-400">
              3 hours ago • By Marcus Hayes
            </span>
            <h3 className="mt-1.5 font-heading text-lg font-bold leading-snug text-black group-hover:text-neutral-700 transition-colors">
              Beyond the Arc: How Pace, Space & Shot-Quality Metrics Are Deciding the Championship Race
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-neutral-600 line-clamp-2">
              Breaking down offensive rating spikes, paint frequency rates, and true shooting efficiency in high-velocity transition offenses.
            </p>
          </div>
        </article>

        {/* ARTICLE 3: TENNIS GRAND SLAM */}
        <article className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-neutral-300 hover:shadow-xl cursor-pointer">
          {/* Action Image with Badge */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100">
            <Image
              src="/images/real_alcaraz_tennis.jpg"
              alt="Carlos Alcaraz Next-Gen Tennis Action"
              fill
              sizes="(max-width: 768px) 100vw, 450px"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            {/* Shimmer sweep */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
            <div className="absolute top-3 left-3 rounded-md bg-black/85 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-white backdrop-blur-sm border border-white/10">
              Tennis
            </div>
          </div>

          {/* Text Content */}
          <div className="p-4 sm:p-5">
            <span className="text-[11px] font-mono text-neutral-400">
              5 hours ago • By Elena Rostova
            </span>
            <h3 className="mt-1.5 font-heading text-lg font-bold leading-snug text-black group-hover:text-neutral-700 transition-colors">
              Next-Gen Rivalries: Redefining the Pinnacle of Grand Slam Tennis
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-neutral-600 line-clamp-2">
              Examining the psychological resilience and physical conditioning required to dominate the baseline exchanges in five-set modern championship epics.
            </p>
          </div>
        </article>

        {/* ARTICLE 4: TEXT-BASED TRANSFER REPORT */}
        <article className="group rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg cursor-pointer">
          <span className="text-[11px] font-mono text-neutral-400">
            6 hours ago • Transfer Market
          </span>
          <h3 className="mt-1 font-heading text-base font-bold leading-snug text-black group-hover:text-neutral-700 transition-colors">
            Summer Transfer Window Early Preview: Top 10 Target Profiles
          </h3>
          <p className="mt-1.5 text-xs leading-relaxed text-neutral-600 line-clamp-2">
            Scouting reports and data metrics on the most sought-after young prospects across South America and continental academies entering contract renewal periods.
          </p>
        </article>

      </div>
    </div>
  );
}
