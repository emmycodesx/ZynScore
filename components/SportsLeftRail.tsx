"use client";

import Image from "next/image";
import { TEAMS_DATA } from "@/lib/sportsData";
import { Trophy, Star, Shield, MapPin, Radio, BellRing, Sparkles } from "lucide-react";

interface SportsLeftRailProps {
  selectedSport: string;
  onSelectSport: (sport: string) => void;
  favorites: string[];
  onSelectTeamMatch?: (teamId: string) => void;
  liveMatchCount: number;
}

export default function SportsLeftRail({
  selectedSport,
  onSelectSport,
  favorites,
  onSelectTeamMatch,
  liveMatchCount,
}: SportsLeftRailProps) {
  const sports = [
    { id: "all", label: "All Sports", icon: "⚡", liveCount: liveMatchCount },
    { id: "football", label: "Football", icon: "⚽", liveCount: 2 },
    { id: "basketball", label: "Basketball", icon: "🏀", liveCount: 1 },
    { id: "volleyball", label: "Volleyball", icon: "🏐", liveCount: 0 },
  ];

  const leagues = [
    { id: "cpl", name: "Collegiate Premier League", count: 4, isLive: true },
    { id: "vbl", name: "Varsity Basketball Cup", count: 1, isLive: true },
    { id: "vvc", name: "Varsity Volleyball Cup", count: 1, isLive: false },
  ];

  const pinnedClubs = TEAMS_DATA.slice(0, 3);

  return (
    <aside className="w-full space-y-4">
      {/* 1. Sports Selector Card */}
      <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-[#0E0E0E] p-3.5 shadow-sm">
        <div className="flex items-center justify-between px-2 pb-2.5 border-b border-neutral-800/80">
          <span className="font-heading text-xs font-bold uppercase tracking-wider text-neutral-400">
            Disciplines
          </span>
          <span className="flex items-center gap-1 rounded bg-blue-500/10 px-2 py-0.5 text-[10px] font-mono font-bold text-blue-400 border border-blue-500/20">
            {liveMatchCount} LIVE NOW
          </span>
        </div>

        <div className="mt-2 space-y-1">
          {sports.map((sp) => {
            const isActive = selectedSport === sp.id;
            return (
              <button
                key={sp.id}
                type="button"
                onClick={() => onSelectSport(sp.id)}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30"
                    : "text-neutral-300 hover:bg-neutral-900 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-sm">{sp.icon}</span>
                  <span>{sp.label}</span>
                </div>
                {sp.liveCount > 0 && (
                  <span
                    className={`flex items-center gap-1 rounded px-1.5 py-0.5 text-[10px] font-mono ${
                      isActive
                        ? "bg-black/30 text-white font-bold"
                        : "bg-red-500/10 text-red-400 border border-red-500/20"
                    }`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-live-pulse" />
                    {sp.liveCount}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Featured Tournaments */}
      <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-[#0E0E0E] p-3.5 shadow-sm">
        <div className="flex items-center justify-between px-2 pb-2.5 border-b border-neutral-800/80">
          <div className="flex items-center gap-2">
            <Trophy className="h-3.5 w-3.5 text-blue-500" />
            <span className="font-heading text-xs font-bold uppercase tracking-wider text-neutral-400">
              Campus Competitions
            </span>
          </div>
        </div>

        <div className="mt-2 space-y-1.5">
          {leagues.map((lg) => (
            <div
              key={lg.id}
              className="group flex items-center justify-between rounded-xl border border-neutral-800/80 bg-black/40 px-3 py-2 text-xs transition-colors hover:border-blue-500/30 hover:bg-neutral-900 cursor-pointer"
            >
              <div className="flex items-center gap-2 truncate">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                <span className="font-medium text-white truncate max-w-[150px]">{lg.name}</span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                {lg.isLive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-live-pulse" />
                )}
                <span className="font-mono text-[10px] text-neutral-500">{lg.count} fixtures</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Pinned Faculty Clubs */}
      <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-[#0E0E0E] p-3.5 shadow-sm">
        <div className="flex items-center justify-between px-2 pb-2.5 border-b border-neutral-800/80">
          <div className="flex items-center gap-2">
            <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
            <span className="font-heading text-xs font-bold uppercase tracking-wider text-neutral-400">
              Pinned Faculty Clubs
            </span>
          </div>
          <span className="text-[10px] font-mono text-neutral-500">Form</span>
        </div>

        <div className="mt-2.5 space-y-2">
          {pinnedClubs.map((club) => (
            <div
              key={club.id}
              onClick={() => onSelectTeamMatch?.(club.id)}
              className="flex items-center justify-between rounded-xl border border-neutral-800/80 bg-black/40 p-2.5 transition-colors hover:border-blue-500/40 hover:bg-neutral-900 cursor-pointer"
            >
              <div className="flex items-center gap-2.5 truncate">
                <div className="relative h-7 w-7 shrink-0 rounded-lg bg-black border border-neutral-800 p-1">
                  <Image src={club.crest} alt={club.name} width={22} height={22} className="h-full w-full object-contain" />
                </div>
                <div className="truncate">
                  <span className="text-xs font-bold text-white block truncate">{club.name}</span>
                  <span className="text-[10px] text-blue-400 font-mono">Rank #{club.rank} • {club.stats.points} pts</span>
                </div>
              </div>

              {/* Form bubbles */}
              <div className="flex items-center gap-0.5 shrink-0">
                {club.form.slice(-3).map((f, i) => (
                  <span
                    key={i}
                    className={`flex h-4 w-4 items-center justify-center rounded text-[9px] font-black ${
                      f === "W"
                        ? "bg-blue-600 text-white"
                        : f === "D"
                        ? "bg-neutral-700 text-white"
                        : "bg-neutral-900 border border-neutral-700 text-neutral-400"
                    }`}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Campus Pitch & Stadium Telemetry */}
      <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-[#0E0E0E] p-3.5 text-xs shadow-sm">
        <div className="flex items-center gap-2 px-1 pb-2 border-b border-neutral-800/80 text-white font-bold">
          <MapPin className="h-3.5 w-3.5 text-blue-500" />
          <span className="font-heading text-xs uppercase tracking-wider text-neutral-300">
            Campus Venue Conditions
          </span>
        </div>

        <div className="mt-2.5 space-y-2 text-neutral-400 text-[11px]">
          <div className="flex items-center justify-between rounded-lg bg-black/40 px-2.5 py-1.5 border border-neutral-800">
            <span>Main Stadium Pitch</span>
            <span className="font-mono text-white font-bold">28°C • Dry Fast Grass</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-black/40 px-2.5 py-1.5 border border-neutral-800">
            <span>Turnstile Attendance</span>
            <span className="font-mono text-blue-400 font-bold">2,450 Campus Fans</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-black/40 px-2.5 py-1.5 border border-neutral-800">
            <span>Tournament Official</span>
            <span className="font-medium text-white">Dr. A. Adebayo (FIFA Ref)</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
