"use client";

import Image from "next/image";
import { Check, Smartphone, ArrowRight, Shield } from "lucide-react";

interface SportLiveHeroProps {
  onOpenMatch?: () => void;
  onExploreMatches?: () => void;
}

export default function SportLiveHero({
  onOpenMatch,
  onExploreMatches,
}: SportLiveHeroProps) {
  return (
    <section className="w-full py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          
          {/* Left Column: Headlines & Action CTAs */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start">
            
            {/* Main Headline */}
            <h1 className="font-heading text-5xl sm:text-6xl xl:text-7xl font-extrabold leading-[0.98] tracking-tight text-black">
              Live Scores,<br />
              Unmatched<br />
              Precision.
            </h1>

            {/* Subtitle Description */}
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-neutral-600 max-w-lg">
              Experience real-time sports statistics, deep tactical analysis, and lightning-fast match telemetry across football, basketball, tennis, and elite global leagues.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("mobile-app");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-neutral-800 shadow-sm"
              >
                <Smartphone className="h-4 w-4" />
                <span>Get Mobile App</span>
              </button>

              <button
                type="button"
                onClick={onExploreMatches}
                className="flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-6 py-3.5 text-sm font-semibold text-neutral-800 transition-all hover:bg-neutral-50 hover:border-neutral-400 shadow-sm"
              >
                <span>Explore Matches</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs font-semibold text-neutral-600">
              <div className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full border border-amber-500 text-amber-600 text-[10px]">
                  ✓
                </span>
                <span>Instant Push Alerts</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full border border-amber-500 text-amber-600 text-[10px]">
                  ✓
                </span>
                <span>Zero Latency Stats</span>
              </div>
            </div>

          </div>

          {/* Right Column: The Dark Hero Featured Match Card */}
          <div className="lg:col-span-7 xl:col-span-7 relative">
            {/* Ambient Background Breathing Glow */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-emerald-500/15 via-blue-500/15 to-purple-600/15 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 animate-ambient-glow -z-10" />

            {/* Floating Telemetry Sync Chip */}
            <div className="absolute -top-3.5 right-4 hidden sm:flex items-center gap-2 rounded-full bg-neutral-950/90 border border-emerald-500/40 px-3.5 py-1 shadow-xl backdrop-blur-md text-[11px] font-mono text-emerald-400 animate-float-slow z-20">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-bold tracking-wider">99.4% TELEMETRY SYNC</span>
            </div>

            <div
              onClick={onOpenMatch}
              className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-[#0B0F19] p-5 sm:p-6 text-white shadow-2xl transition-all duration-300 hover:border-neutral-600 hover:shadow-emerald-500/10 cursor-pointer"
            >
              
              {/* Card Top Row: Live Indicator & Competition Venue */}
              <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="flex items-center gap-2 rounded-md bg-red-600 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-sm shadow-red-600/40">
                    <span className="relative flex h-2 w-2 items-center justify-center">
                      <span className="absolute h-3.5 w-3.5 rounded-full bg-white/70 animate-radar-ring" />
                      <span className="relative h-1.5 w-1.5 rounded-full bg-white animate-live-pulse" />
                    </span>
                    LIVE
                  </span>
                  <span className="text-xs font-medium text-neutral-300">
                    La Liga • Santiago Bernabéu
                  </span>

                  {/* Equalizer Wave Telemetry Bars */}
                  <div className="hidden sm:flex items-center gap-0.5 pl-2.5 border-l border-neutral-700/60" title="Telemetry stream: 60 FPS">
                    <span className="w-1 rounded-full bg-emerald-400 animate-telemetry-1" />
                    <span className="w-1 rounded-full bg-emerald-400 animate-telemetry-2" />
                    <span className="w-1 rounded-full bg-emerald-400 animate-telemetry-3" />
                    <span className="w-1 rounded-full bg-emerald-400 animate-telemetry-4" />
                    <span className="text-[10px] font-mono text-emerald-400 font-bold pl-1.5 tracking-wider">
                      60 FPS
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-heading text-sm font-bold text-white tracking-wider">
                    78&apos;
                  </span>
                </div>
              </div>

              {/* Middle Scoreboard Confrontation */}
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 py-5 text-center">
                {/* Home: Real Madrid */}
                <div className="flex flex-col items-center">
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 border border-white/15 p-2.5 shadow-inner transition-transform group-hover:scale-105">
                    <Image
                      src="/images/real_madrid.svg"
                      alt="Real Madrid CF Crest"
                      width={44}
                      height={44}
                      className="object-contain drop-shadow"
                    />
                  </div>
                  <h3 className="mt-2 font-heading text-base sm:text-lg font-bold text-white">
                    Real Madrid
                  </h3>
                  <span className="text-[11px] text-neutral-400">Home</span>
                </div>

                {/* Center Score & Aggregate */}
                <div className="flex flex-col items-center px-2">
                  <div className="flex items-center gap-2 sm:gap-3 font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
                    <span>2</span>
                    <span className="text-neutral-500 font-light">-</span>
                    <span>1</span>
                  </div>
                  <span className="mt-1 font-mono text-[11px] text-neutral-400">
                    Agg : 4-3
                  </span>
                </div>

                {/* Away: Barcelona */}
                <div className="flex flex-col items-center">
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 border border-white/15 p-2.5 shadow-inner transition-transform group-hover:scale-105">
                    <Image
                      src="/images/barcelona.svg"
                      alt="FC Barcelona Crest"
                      width={44}
                      height={44}
                      className="object-contain drop-shadow"
                    />
                  </div>
                  <h3 className="mt-2 font-heading text-base sm:text-lg font-bold text-white">
                    Barcelona
                  </h3>
                  <span className="text-[11px] text-neutral-400">Away</span>
                </div>
              </div>

              {/* Match Action Photo Banner with Overlay Pills */}
              <div className="relative aspect-[16/8] sm:aspect-[16/7] w-full overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="/images/real_el_clasico.jpg"
                  alt="Real Madrid vs Barcelona El Clásico Match Action"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover object-center brightness-90 group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />

                {/* Shimmer sweep effect on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-10" />

                {/* Overlay Bottom Left: Recent Goal Info */}
                <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-lg bg-black/85 px-2.5 py-1 backdrop-blur-md border border-emerald-500/40 text-xs shadow-lg">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
                    RECENT GOAL
                  </span>
                  <span className="text-white font-medium text-[11px] truncate max-w-[200px] sm:max-w-xs">
                    C. Ronaldo (72&apos;) - Volley strike
                  </span>
                </div>

                {/* Overlay Bottom Right: Possession */}
                <div className="absolute bottom-3 right-3 rounded-lg bg-black/85 px-2.5 py-1 backdrop-blur-md border border-white/10 text-[11px] font-mono font-semibold text-neutral-300">
                  Possession: 54% - 46%
                </div>
              </div>

              {/* Live Match Dynamic Momentum Bar */}
              <div className="mt-4 px-1">
                <div className="flex items-center justify-between text-[10px] font-mono font-semibold text-neutral-400 mb-1">
                  <span className="text-white">Real Madrid (54%)</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    MOMENTUM
                  </span>
                  <span className="text-neutral-300">Barcelona (46%)</span>
                </div>
                <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-neutral-800">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 rounded-full transition-all duration-1000"
                    style={{ width: "54%" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                </div>
              </div>

              {/* Bottom 3-Column Telemetry Row with Interactive Hover Lift */}
              <div className="mt-4 grid grid-cols-3 gap-2 border-t border-neutral-800/80 pt-3 text-center">
                <div className="rounded-lg p-1.5 transition-colors hover:bg-white/5">
                  <span className="block text-[11px] text-neutral-400">Shots on Target</span>
                  <span className="mt-0.5 font-heading text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    7 vs 4
                  </span>
                </div>
                <div className="rounded-lg p-1.5 transition-colors hover:bg-white/5">
                  <span className="block text-[11px] text-neutral-400">Corner Kicks</span>
                  <span className="mt-0.5 font-heading text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    6 vs 3
                  </span>
                </div>
                <div className="rounded-lg p-1.5 transition-colors hover:bg-white/5">
                  <span className="block text-[11px] text-neutral-400">Expected Goals (xG)</span>
                  <span className="mt-0.5 font-heading text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    2.14 vs 1.45
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
