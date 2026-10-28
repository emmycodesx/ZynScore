"use client";

import { useState } from "react";
import Image from "next/image";
import { Trophy, Activity, ChevronRight } from "lucide-react";

interface FeaturedLiveMatchesProps {
  onSelectMatchCenter?: (matchName: string) => void;
}

export default function FeaturedLiveMatches({
  onSelectMatchCenter,
}: FeaturedLiveMatchesProps) {
  const [selectedSport, setSelectedSport] = useState<string>("all");

  const sports = [
    { id: "all", label: "All Sports" },
    { id: "football", label: "Football" },
    { id: "basketball", label: "Basketball" },
    { id: "tennis", label: "Tennis" },
  ];

  return (
    <div className="w-full space-y-4">
      {/* Header & Filter Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-black">
          Featured Live Matches
        </h2>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          {sports.map((sp) => {
            const isActive = selectedSport === sp.id;
            return (
              <button
                key={sp.id}
                type="button"
                onClick={() => setSelectedSport(sp.id)}
                className={`rounded-full px-3.5 py-1 text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-black text-white shadow-sm"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-black"
                }`}
              >
                {sp.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Match Cards List */}
      <div className="space-y-4">
        
        {/* CARD 1: FOOTBALL (Arsenal vs Chelsea) */}
        {(selectedSport === "all" || selectedSport === "football") && (
          <div className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-xl">
            {/* Top Bar: League & Live Minute */}
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3 text-xs">
              <div className="flex items-center gap-2">
                <Trophy className="h-3.5 w-3.5 text-neutral-400" />
                <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-neutral-600">
                  Premier League • Matchday 28
                </span>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-red-50 border border-red-200/60 px-2 py-0.5 font-mono text-[11px] font-bold text-red-600">
                <span className="relative flex h-2 w-2 items-center justify-center">
                  <span className="absolute h-3 w-3 rounded-full bg-red-400 animate-radar-ring" />
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-live-pulse" />
                </span>
                64&apos;
              </span>
            </div>

            {/* Teams, Telemetry & Odds Grid */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-[1.2fr_1.4fr_1fr] items-center gap-4">
              
              {/* Teams & Scores */}
              <div className="space-y-2">
                <div className="flex items-center justify-between pr-4">
                  <span className="font-heading text-base font-bold text-black">Arsenal</span>
                  <span className="font-heading text-lg font-bold text-black font-mono">2</span>
                </div>
                <div className="flex items-center justify-between pr-4">
                  <span className="font-heading text-base font-bold text-neutral-700">Chelsea</span>
                  <span className="font-heading text-lg font-bold text-neutral-700 font-mono">0</span>
                </div>
              </div>

              {/* Middle Telemetry (Possession & Shots) */}
              <div className="space-y-2 border-y md:border-y-0 md:border-x border-neutral-100 py-3 md:py-0 md:px-5">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 mb-1">
                    <span>Possession</span>
                    <span className="font-bold text-black">61% - 39%</span>
                  </div>
                  {/* Possession Progress Bar */}
                  <div className="flex h-1.5 w-full overflow-hidden rounded-full bg-neutral-200">
                    <div className="h-full bg-black rounded-l-full" style={{ width: "61%" }} />
                    <div className="h-full bg-neutral-400 rounded-r-full" style={{ width: "39%" }} />
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>Total Shots</span>
                  <span className="font-bold text-black">14 - 8</span>
                </div>
              </div>

              {/* Right Side: Odds & Match Center Button */}
              <div className="flex flex-col items-start md:items-end gap-2 text-right">
                <div className="text-[11px] text-neutral-500">
                  <span>Odds (1X2) </span>
                  <span className="font-mono font-bold text-black">1.18 6.50 14.00</span>
                </div>
                <button
                  type="button"
                  onClick={() => onSelectMatchCenter?.("Arsenal vs Chelsea")}
                  className="rounded-lg bg-neutral-100 px-4 py-1.5 text-xs font-semibold text-neutral-800 transition-colors hover:bg-neutral-200 hover:text-black"
                >
                  Match Center
                </button>
              </div>

            </div>
          </div>
        )}

        {/* CARD 2: BASKETBALL (Boston Celtics vs Golden State) */}
        {(selectedSport === "all" || selectedSport === "basketball") && (
          <div className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-xl">
            {/* Top Bar: League & Live Minute */}
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3 text-xs">
              <div className="flex items-center gap-2">
                <svg className="h-3.5 w-3.5 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M4.93 4.93l14.14 14.14" />
                  <path d="M14.83 9.17a6 6 0 0 0-8.49 8.49" />
                  <path d="M9.17 14.83a6 6 0 0 0 8.49-8.49" />
                </svg>
                <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-neutral-600">
                  NBA • Regular Season
                </span>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-red-50 border border-red-200/60 px-2 py-0.5 font-mono text-[11px] font-bold text-red-600">
                <span className="relative flex h-2 w-2 items-center justify-center">
                  <span className="absolute h-3 w-3 rounded-full bg-red-400 animate-radar-ring" />
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-live-pulse" />
                </span>
                Q3 03:12
              </span>
            </div>

            {/* Teams, Telemetry & Line Spread Grid */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-[1.2fr_1.4fr_1fr] items-center gap-4">
              
              {/* Teams & Scores */}
              <div className="space-y-2">
                <div className="flex items-center justify-between pr-4">
                  <span className="font-heading text-base font-bold text-black">Boston Celtics</span>
                  <span className="font-heading text-lg font-bold text-black font-mono">88</span>
                </div>
                <div className="flex items-center justify-between pr-4">
                  <span className="font-heading text-base font-bold text-neutral-700">Golden State</span>
                  <span className="font-heading text-lg font-bold text-neutral-700 font-mono">82</span>
                </div>
              </div>

              {/* Middle Telemetry (Field Goal % & 3-Pointers) */}
              <div className="space-y-2 border-y md:border-y-0 md:border-x border-neutral-100 py-3 md:py-0 md:px-5 text-[11px] font-mono text-neutral-500">
                <div className="flex items-center justify-between">
                  <span>Field Goal %</span>
                  <span className="font-bold text-black">48.5% - 45.2%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>3-Pointers Made</span>
                  <span className="font-bold text-black">12/31 - 14/35</span>
                </div>
              </div>

              {/* Right Side: Line Spread & Match Center Button */}
              <div className="flex flex-col items-start md:items-end gap-2 text-right">
                <div className="text-[11px] text-neutral-500">
                  <span>Live Spread </span>
                  <span className="font-mono font-bold text-black">BOS -5.5</span>
                </div>
                <button
                  type="button"
                  onClick={() => onSelectMatchCenter?.("Boston Celtics vs Golden State")}
                  className="rounded-lg bg-neutral-100 px-4 py-1.5 text-xs font-semibold text-neutral-800 transition-colors hover:bg-neutral-200 hover:text-black"
                >
                  Match Center
                </button>
              </div>

            </div>

            {/* Visual Action Banner for Basketball */}
            <div className="mt-4 relative h-32 sm:h-36 w-full overflow-hidden rounded-xl border border-neutral-100 bg-neutral-900 group">
              <Image
                src="/images/basketball.jpg"
                alt="NBA Court Action: Celtics vs Warriors"
                fill
                sizes="(max-width: 768px) 100vw, 650px"
                className="object-cover object-center opacity-90 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              {/* Shimmer sweep */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between text-white">
                <div className="flex items-center gap-2 text-[11px]">
                  <span className="rounded bg-red-600 px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider">
                    Rim Telemetry
                  </span>
                  <span className="font-heading font-medium text-neutral-100 text-xs">
                    J. Tatum: 28 PTS (10/18 FG) • S. Curry: 26 PTS (6/11 3PT)
                  </span>
                </div>
                <span className="hidden sm:inline-block font-mono text-[10px] text-neutral-300">
                  Pace: 104.2
                </span>
              </div>
            </div>

          </div>
        )}

        {/* CARD 3: TENNIS (C. Alcaraz vs J. Sinner) */}
        {(selectedSport === "all" || selectedSport === "tennis") && (
          <div className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-xl">
            {/* Top Bar: Tournament & Set Score */}
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3 text-xs">
              <div className="flex items-center gap-2">
                <Activity className="h-3.5 w-3.5 text-neutral-400" />
                <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-neutral-600">
                  ATP Masters • Semi-Finals
                </span>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-red-50 border border-red-200/60 px-2 py-0.5 font-mono text-[11px] font-bold text-red-600">
                <span className="relative flex h-2 w-2 items-center justify-center">
                  <span className="absolute h-3 w-3 rounded-full bg-red-400 animate-radar-ring" />
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-live-pulse" />
                </span>
                Set 3 (5-4)
              </span>
            </div>

            {/* Players, Telemetry & Server Grid */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-[1.2fr_1.4fr_1fr] items-center gap-4">
              
              {/* Players & Sets */}
              <div className="space-y-2">
                <div className="flex items-center justify-between pr-4">
                  <span className="font-heading text-base font-bold text-black">C. Alcaraz</span>
                  <span className="font-heading text-base font-bold text-black font-mono">2 (6, 4, 5)</span>
                </div>
                <div className="flex items-center justify-between pr-4">
                  <span className="font-heading text-base font-bold text-neutral-700">J. Sinner</span>
                  <span className="font-heading text-base font-bold text-neutral-700 font-mono">1 (3, 6, 4)</span>
                </div>
              </div>

              {/* Middle Telemetry (Break Points & Aces) */}
              <div className="space-y-2 border-y md:border-y-0 md:border-x border-neutral-100 py-3 md:py-0 md:px-5 text-[11px] font-mono text-neutral-500">
                <div className="flex items-center justify-between">
                  <span>Break Points</span>
                  <span className="font-bold text-black">4/7 - 3/5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Aces / Double Faults</span>
                  <span className="font-bold text-black">12/2 - 9/3</span>
                </div>
              </div>

              {/* Right Side: Serving & Match Center Button */}
              <div className="flex flex-col items-start md:items-end gap-2 text-right">
                <div className="text-[11px] text-neutral-500">
                  <span>Match Point: </span>
                  <span className="font-bold text-black">Serving: Alcaraz</span>
                </div>
                <button
                  type="button"
                  onClick={() => onSelectMatchCenter?.("C. Alcaraz vs J. Sinner")}
                  className="rounded-lg bg-neutral-100 px-4 py-1.5 text-xs font-semibold text-neutral-800 transition-colors hover:bg-neutral-200 hover:text-black"
                >
                  Match Center
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
