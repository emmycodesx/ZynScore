"use client";

import Image from "next/image";
import { Match } from "@/lib/sportsData";
import { ChevronRight, Activity } from "lucide-react";

interface SofaHeroProps {
  spotlightMatch: Match;
  activeChip: string;
  onSelectChip: (chip: string) => void;
  onOpenMatchPreview: (match: Match) => void;
}

export default function SofaHero({
  spotlightMatch,
  activeChip,
  onSelectChip,
  onOpenMatchPreview,
}: SofaHeroProps) {
  const possessionHome = spotlightMatch.stats?.possession[0] ?? 58;
  const possessionAway = spotlightMatch.stats?.possession[1] ?? 42;

  const chips = [
    { id: "live", label: "Live Now", count: 3, isLive: true },
    { id: "today", label: "Today", count: 12 },
    { id: "tomorrow", label: "Tomorrow", count: 8 },
    { id: "favorites", label: "Favorites", count: 2 },
  ];

  return (
    <section className="relative w-full overflow-hidden border-b border-neutral-800 bg-black pt-6 pb-12 sm:pt-8 sm:pb-16 lg:py-16">
      {/* Background Stadium Photo - High Contrast Grayscale with Deep Blue Mood */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-20">
        <Image
          src="/images/soccer.jpg"
          alt="Stadium background"
          fill
          priority
          className="object-cover object-center filter grayscale contrast-150 brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow Badge - Blue Accent */}
        <div className="mb-4 flex items-center justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-400 shadow-sm">
            <Activity className="h-3.5 w-3.5 text-blue-500" />
            <span>Collegiate Live Sports Network</span>
          </div>
        </div>

        {/* Hero Headline & Subtitle */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white">
            Every Match. <span className="text-blue-500">Every Moment.</span> Live.
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Real-time campus scores, live possession meters, instant goal alerts, and in-depth tactical telemetry across every faculty tournament.
          </p>

          {/* Quick Filter Chips (Blue Accent) */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {chips.map((chip) => {
              const isActive = activeChip === chip.id;
              return (
                <button
                  key={chip.id}
                  type="button"
                  onClick={() => onSelectChip(chip.id)}
                  className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium transition-all border ${
                    isActive
                      ? "border-blue-600 bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30"
                      : "border-neutral-800 bg-neutral-900 text-neutral-300 hover:text-white hover:border-neutral-700"
                  }`}
                >
                  {chip.isLive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-live-pulse" />
                  )}
                  <span>{chip.label}</span>
                  <span className={`ml-0.5 rounded px-1.5 py-0.2 text-[10px] font-mono ${
                    isActive ? "bg-black/20 text-white font-bold" : "bg-neutral-800 text-neutral-400"
                  }`}>
                    {chip.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Spotlight Card */}
        <div className="mt-10 mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 p-5 sm:p-6 shadow-2xl">
            {/* Top Bar inside card */}
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-red-500 animate-live-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Match of the Moment
                </span>
                <span className="text-xs text-neutral-400 font-mono">• {spotlightMatch.leagueName}</span>
              </div>
              <span className="rounded bg-neutral-800 px-2.5 py-0.5 font-mono text-xs font-semibold text-white border border-neutral-700">
                {spotlightMatch.minute}
              </span>
            </div>

            {/* Scoreboard Arena */}
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 py-5 sm:py-6">
              {/* Home Team */}
              <div className="flex flex-col items-center sm:flex-row sm:justify-end gap-3 text-center sm:text-right">
                <div className="order-2 sm:order-1">
                  <h3 className="font-heading text-lg sm:text-2xl font-bold text-white leading-tight">
                    {spotlightMatch.homeTeam.name}
                  </h3>
                  <span className="text-xs text-blue-400 font-medium">1st in League</span>
                </div>
                <div className="relative order-1 sm:order-2 flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-black border border-neutral-800 p-2 shadow-inner">
                  <Image
                    src={spotlightMatch.homeTeam.crest}
                    alt={spotlightMatch.homeTeam.name}
                    width={48}
                    height={48}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>

              {/* Center Score Digits */}
              <div className="flex flex-col items-center px-2 sm:px-6">
                <div className="flex items-center gap-2 sm:gap-3 font-heading text-4xl sm:text-6xl font-black text-white tracking-tight">
                  <span className="min-w-[1.2ch] text-center">{spotlightMatch.homeTeam.score ?? 0}</span>
                  <span className="text-neutral-600 text-2xl sm:text-4xl">:</span>
                  <span className="min-w-[1.2ch] text-center">{spotlightMatch.awayTeam.score ?? 0}</span>
                </div>
                <span className="mt-1 text-[11px] font-mono text-blue-400">
                  {spotlightMatch.venue}
                </span>
              </div>

              {/* Away Team */}
              <div className="flex flex-col items-center sm:flex-row sm:justify-start gap-3 text-center sm:text-left">
                <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-black border border-neutral-800 p-2 shadow-inner">
                  <Image
                    src={spotlightMatch.awayTeam.crest}
                    alt={spotlightMatch.awayTeam.name}
                    width={48}
                    height={48}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-lg sm:text-2xl font-bold text-white leading-tight">
                    {spotlightMatch.awayTeam.name}
                  </h3>
                  <span className="text-xs text-neutral-400 font-medium">3rd in League</span>
                </div>
              </div>
            </div>

            {/* Blue & Neutral Possession Bar */}
            <div className="border-t border-neutral-800 pt-3.5">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-300 mb-1.5">
                <span className="font-semibold text-blue-400">Possession: {possessionHome}%</span>
                <span className="font-semibold text-neutral-400">{possessionAway}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-950 p-0.5 border border-neutral-800 flex">
                <div
                  className="h-full rounded-l-full bg-blue-600 transition-all duration-700"
                  style={{ width: `${possessionHome}%` }}
                />
                <div
                  className="h-full rounded-r-full bg-neutral-700 transition-all duration-700"
                  style={{ width: `${possessionAway}%` }}
                />
              </div>
            </div>

            {/* Bottom Card Actions */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-neutral-800 pt-3">
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <span className="text-blue-400 font-bold">Latest:</span>
                <span>61&apos; Goal by M. Okon (Right-footed curler)</span>
              </div>
              <button
                type="button"
                onClick={() => onOpenMatchPreview(spotlightMatch)}
                className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow-sm shadow-blue-600/30 hover:bg-blue-700 transition-all"
              >
                <span>Full Match Telemetry & Lineups</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
