"use client";

import { useState } from "react";
import Link from "next/link";
import { Activity, Radio, ChevronRight, Star, Flame, ShieldAlert, ArrowRight } from "lucide-react";
import SportLiveNavbar from "@/components/SportLiveNavbar";
import SportLiveFooter from "@/components/SportLiveFooter";
import MatchDetailsDrawer from "@/components/MatchDetailsDrawer";
import SearchModal from "@/components/SearchModal";
import { Match, MATCHES_DATA } from "@/lib/sportsData";

export default function LiveMatchesPage() {
  const [selectedSport, setSelectedSport] = useState("all");
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [favorites, setFavorites] = useState<string[]>(["el-clasico"]);

  const liveMatches = [
    {
      id: "el-clasico",
      league: "La Liga EA Sports",
      sport: "football",
      minute: "78'",
      homeTeam: "Real Madrid",
      homeScore: 2,
      awayTeam: "Barcelona",
      awayScore: 1,
      possession: [54, 46],
      shots: "7 (14) - 4 (11)",
      recentEvent: "72' GOAL: J. Bellingham (Right-footed curler)",
      xG: "2.14 vs 1.45",
      momentum: "Real Madrid pressing in final third",
    },
    {
      id: "ars-bay",
      league: "UEFA Champions League",
      sport: "football",
      minute: "82'",
      homeTeam: "Arsenal",
      homeScore: 2,
      awayTeam: "Bayern Munich",
      awayScore: 1,
      possession: [51, 49],
      shots: "6 (12) - 5 (10)",
      recentEvent: "79' Substitution: G. Jesus ON for K. Havertz",
      xG: "1.92 vs 1.30",
      momentum: "Bayern pushing for late equalizer",
    },
    {
      id: "mci-liv",
      league: "Premier League",
      sport: "football",
      minute: "HT",
      homeTeam: "Manchester City",
      homeScore: 0,
      awayTeam: "Liverpool",
      awayScore: 0,
      possession: [59, 41],
      shots: "4 (9) - 2 (5)",
      recentEvent: "44' Yellow Card: Rodri (Tactical foul)",
      xG: "0.88 vs 0.72",
      momentum: "City dominating midfield turnover territory",
    },
    {
      id: "bos-gsw",
      league: "NBA Regular Season",
      sport: "basketball",
      minute: "Q3 03:12",
      homeTeam: "Boston Celtics",
      homeScore: 88,
      awayTeam: "Golden State Warriors",
      awayScore: 82,
      possession: [50, 50],
      shots: "FG: 48.5% - 45.2%",
      recentEvent: "Q3 03:40 3PT Made: S. Curry (Fast break)",
      xG: "Pace: 104.2",
      momentum: "Warriors on a 9-2 scoring run",
    },
    {
      id: "alc-sin",
      league: "ATP Masters 1000",
      sport: "tennis",
      minute: "Set 3 (5-4)",
      homeTeam: "Carlos Alcaraz",
      homeScore: 2,
      awayTeam: "Jannik Sinner",
      awayScore: 1,
      possession: [50, 50],
      shots: "Break Points: 4/7 vs 3/5",
      recentEvent: "Game 9: Sinner holds serve at love (40-0)",
      xG: "Aces: 12 vs 9",
      momentum: "Alcaraz serving for the championship",
    },
  ];

  const sports = [
    { id: "all", label: "All In-Play (5)" },
    { id: "football", label: "⚽ Football (3)" },
    { id: "basketball", label: "🏀 Basketball (1)" },
    { id: "tennis", label: "🎾 Tennis (1)" },
  ];

  const filtered = liveMatches.filter(
    (m) => selectedSport === "all" || m.sport === selectedSport
  );

  const handleOpenMatch = (item: typeof liveMatches[0]) => {
    const found = MATCHES_DATA.find((m) => m.id === item.id) || {
      id: item.id,
      leagueId: "live",
      leagueName: item.league,
      sport: item.sport as any,
      status: "live",
      minute: item.minute,
      kickoffTime: "20:00",
      date: "2026-10-26",
      venue: "Live Stadium",
      homeTeam: { id: "home", name: item.homeTeam, shortName: item.homeTeam.slice(0, 3).toUpperCase(), crest: "", score: item.homeScore },
      awayTeam: { id: "away", name: item.awayTeam, shortName: item.awayTeam.slice(0, 3).toUpperCase(), crest: "", score: item.awayScore },
      stats: { possession: item.possession as [number, number], shotsOnTarget: [7, 4], totalShots: [14, 10], corners: [6, 3], fouls: [9, 11], yellowCards: [1, 2] },
      events: [
        { minute: 72, type: "goal", team: "home", player: "Star Scorer", detail: item.recentEvent },
      ],
    };
    setSelectedMatch(found);
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#FAFAFA] text-[#111827] font-body selection:bg-black selection:text-white">
      <SportLiveNavbar activeTab="live" onOpenSearch={() => setSearchModalOpen(true)} />

      <main className="w-full flex-1 py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-6">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <span className="text-black font-semibold">Live In-Play Matches</span>
          </nav>

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-700">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                </span>
                <span>Live Stadium Telemetry Center</span>
              </div>
              <h1 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black">
                Matches In Play Right Now
              </h1>
              <p className="mt-2 text-sm text-neutral-600">
                Direct WebSocket telemetry streaming live minutes, dangerous attacks, and sub-second shot telemetry.
              </p>
            </div>

            {/* Stream Health Indicator */}
            <div className="rounded-xl border border-neutral-200 bg-white p-3.5 shadow-sm text-right shrink-0">
              <span className="block text-[10px] font-mono uppercase text-neutral-400">
                Optical Feed Latency
              </span>
              <div className="font-mono text-sm font-bold text-emerald-600 flex items-center justify-end gap-1.5">
                <Radio className="h-3.5 w-3.5 animate-pulse" />
                <span>184ms • WebSocket Sync</span>
              </div>
            </div>
          </div>

          {/* Sport Filters */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {sports.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSelectedSport(s.id)}
                className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
                  selectedSport === s.id
                    ? "bg-black text-white shadow-sm"
                    : "bg-white border border-neutral-200 text-neutral-700 hover:border-neutral-300"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Live Match Cards Grid */}
          <div className="mt-8 space-y-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => handleOpenMatch(item)}
                className="group rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 shadow-sm transition-all hover:border-neutral-300 hover:shadow-md cursor-pointer"
              >
                {/* Top Info Bar */}
                <div className="flex items-center justify-between border-b border-neutral-100 pb-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                      {item.league}
                    </span>
                  </div>

                  <span className="flex items-center gap-1.5 font-mono text-xs font-bold text-red-500">
                    <span className="h-2 w-2 rounded-full bg-red-500 animate-live-pulse" />
                    <span>{item.minute}</span>
                  </span>
                </div>

                {/* Score & Telemetry Row */}
                <div className="mt-4 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Teams and Big Score (5 cols) */}
                  <div className="md:col-span-5 space-y-2">
                    <div className="flex items-center justify-between pr-4">
                      <span className="font-heading text-lg sm:text-xl font-bold text-black group-hover:text-neutral-700 transition-colors">
                        {item.homeTeam}
                      </span>
                      <span className="font-mono text-xl sm:text-2xl font-bold text-black">
                        {item.homeScore}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pr-4">
                      <span className="font-heading text-lg sm:text-xl font-bold text-neutral-700 group-hover:text-black transition-colors">
                        {item.awayTeam}
                      </span>
                      <span className="font-mono text-xl sm:text-2xl font-bold text-neutral-700">
                        {item.awayScore}
                      </span>
                    </div>
                  </div>

                  {/* Possession & Momentum Bar (4 cols) */}
                  <div className="md:col-span-4 border-y md:border-y-0 md:border-x border-neutral-100 py-3 md:py-0 md:px-5 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-neutral-500">Possession</span>
                      <span className="font-bold text-black">
                        {item.possession[0]}% - {item.possession[1]}%
                      </span>
                    </div>

                    {/* Possession Progress Bar */}
                    <div className="flex h-2 w-full overflow-hidden rounded-full bg-neutral-200">
                      <div
                        className="bg-black transition-all duration-500"
                        style={{ width: `${item.possession[0]}%` }}
                      />
                      <div
                        className="bg-neutral-400 transition-all duration-500"
                        style={{ width: `${item.possession[1]}%` }}
                      />
                    </div>

                    <div className="text-[11px] font-mono text-neutral-500 truncate">
                      {item.momentum}
                    </div>
                  </div>

                  {/* Recent Match Event & CTA (3 cols) */}
                  <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between gap-3 text-right">
                    <div className="text-left md:text-right">
                      <span className="block text-[10px] font-mono uppercase text-neutral-400">
                        Last Match Event
                      </span>
                      <span className="text-xs font-semibold text-neutral-800 line-clamp-1">
                        {item.recentEvent}
                      </span>
                    </div>

                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-neutral-100 px-4 py-2 text-xs font-bold text-neutral-800 transition-all group-hover:bg-black group-hover:text-white"
                    >
                      <span>Match Center</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </main>

      <SportLiveFooter />

      {/* Slide-Over Match Details Panel */}
      <MatchDetailsDrawer
        match={selectedMatch}
        onClose={() => setSelectedMatch(null)}
        isFavorite={selectedMatch ? favorites.includes(selectedMatch.id) : false}
        onToggleFavorite={(id) => setFavorites(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectMatch={(m) => setSelectedMatch(m)}
      />
    </div>
  );
}
