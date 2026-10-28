"use client";

import { useState } from "react";
import Link from "next/link";
import { Activity, Calendar, Filter, ChevronRight, Star, Clock } from "lucide-react";
import SportLiveNavbar from "@/components/SportLiveNavbar";
import SportLiveFooter from "@/components/SportLiveFooter";
import MatchDetailsDrawer from "@/components/MatchDetailsDrawer";
import SearchModal from "@/components/SearchModal";
import { Match, MATCHES_DATA } from "@/lib/sportsData";

export default function ScoresPage() {
  const [selectedSport, setSelectedSport] = useState("all");
  const [selectedDate, setSelectedDate] = useState("today");
  const [liveOnly, setLiveOnly] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [favorites, setFavorites] = useState<string[]>(["el-clasico"]);

  const dates = [
    { id: "yesterday", label: "Yesterday", date: "Oct 25" },
    { id: "today", label: "Today (Live)", date: "Oct 26" },
    { id: "tomorrow", label: "Tomorrow", date: "Oct 27" },
    { id: "oct28", label: "Tuesday", date: "Oct 28" },
    { id: "oct29", label: "Wednesday", date: "Oct 29" },
  ];

  const sports = [
    { id: "all", label: "All Sports" },
    { id: "football", label: "⚽ Football" },
    { id: "basketball", label: "🏀 Basketball" },
    { id: "tennis", label: "🎾 Tennis" },
  ];

  // Primary fixtures for the page
  const fixtures = [
    {
      id: "el-clasico",
      league: "La Liga EA Sports",
      sport: "football",
      status: "live",
      minute: "78'",
      homeTeam: "Real Madrid",
      homeScore: 2,
      awayTeam: "Barcelona",
      awayScore: 1,
      xG: "2.14 - 1.45",
      time: "20:00",
      featured: true,
    },
    {
      id: "ars-bay",
      league: "UEFA Champions League",
      sport: "football",
      status: "live",
      minute: "82'",
      homeTeam: "Arsenal",
      homeScore: 2,
      awayTeam: "Bayern Munich",
      awayScore: 1,
      xG: "1.92 - 1.30",
      time: "20:00",
      featured: false,
    },
    {
      id: "mci-liv",
      league: "Premier League",
      sport: "football",
      status: "live",
      minute: "HT",
      homeTeam: "Manchester City",
      homeScore: 0,
      awayTeam: "Liverpool",
      awayScore: 0,
      xG: "0.88 - 0.72",
      time: "17:30",
      featured: false,
    },
    {
      id: "bos-gsw",
      league: "NBA Regular Season",
      sport: "basketball",
      status: "live",
      minute: "Q3 03:12",
      homeTeam: "Boston Celtics",
      homeScore: 88,
      awayTeam: "Golden State Warriors",
      awayScore: 82,
      xG: "FG: 48.5% - 45.2%",
      time: "19:00",
      featured: true,
    },
    {
      id: "lal-mil",
      league: "NBA Regular Season",
      sport: "basketball",
      status: "upcoming",
      minute: null,
      homeTeam: "LA Lakers",
      homeScore: null,
      awayTeam: "Milwaukee Bucks",
      awayScore: null,
      xG: "Spread: LAL -2.5",
      time: "22:30",
      featured: false,
    },
    {
      id: "alc-sin",
      league: "ATP Masters 1000",
      sport: "tennis",
      status: "live",
      minute: "Set 3 (5-4)",
      homeTeam: "Carlos Alcaraz",
      homeScore: 2,
      awayTeam: "Jannik Sinner",
      awayScore: 1,
      xG: "Break: 4/7 vs 3/5",
      time: "18:30",
      featured: false,
    },
    {
      id: "int-juv",
      league: "Serie A",
      sport: "football",
      status: "finished",
      minute: "FT",
      homeTeam: "Inter Milan",
      homeScore: 3,
      awayTeam: "Juventus",
      awayScore: 2,
      xG: "2.40 - 1.95",
      time: "15:00",
      featured: false,
    },
  ];

  const filteredFixtures = fixtures.filter((f) => {
    const matchesSport = selectedSport === "all" || f.sport === selectedSport;
    const matchesLive = !liveOnly || f.status === "live";
    return matchesSport && matchesLive;
  });

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleOpenMatch = (f: typeof fixtures[0]) => {
    const found = MATCHES_DATA.find((m) => m.id === f.id) || {
      id: f.id,
      leagueId: "general",
      leagueName: f.league,
      sport: f.sport as any,
      status: f.status as any,
      minute: f.minute || "FT",
      kickoffTime: f.time,
      date: "2026-10-26",
      venue: "Official Arena / Stadium",
      homeTeam: { id: "home", name: f.homeTeam, shortName: f.homeTeam.slice(0, 3).toUpperCase(), crest: "", score: f.homeScore ?? undefined },
      awayTeam: { id: "away", name: f.awayTeam, shortName: f.awayTeam.slice(0, 3).toUpperCase(), crest: "", score: f.awayScore ?? undefined },
      stats: { possession: [54, 46], shotsOnTarget: [7, 4], totalShots: [14, 11], corners: [6, 3], fouls: [8, 11], yellowCards: [2, 1] },
      events: [
        { minute: 24, type: "goal", team: "home", player: "Star Scorer", detail: "Right-footed shot" },
        { minute: 72, type: "goal", team: "away", player: "Counter Goal", detail: "Fast break finish" },
      ],
    };
    setSelectedMatch(found);
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#FAFAFA] text-[#111827] font-body selection:bg-black selection:text-white">
      <SportLiveNavbar activeTab="scores" onOpenSearch={() => setSearchModalOpen(true)} />

      <main className="w-full flex-1 py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-6">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <span className="text-black font-semibold">Scores & Fixtures</span>
          </nav>

          {/* Page Title & Sub-heading */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-neutral-700">
                <Activity className="h-3.5 w-3.5 text-red-500" />
                <span>Live Match Telemetry</span>
              </div>
              <h1 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black">
                Live Scores & Fixtures
              </h1>
              <p className="mt-2 text-sm text-neutral-600">
                Sub-second match updates, shot efficiency metrics, and live telemetry across global competitions.
              </p>
            </div>

            {/* Live Only Filter Toggle */}
            <button
              type="button"
              onClick={() => setLiveOnly(!liveOnly)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all border ${
                liveOnly
                  ? "bg-red-50 border-red-200 text-red-700 shadow-sm"
                  : "bg-white border-neutral-200 text-neutral-600 hover:border-neutral-300 hover:text-black"
              }`}
            >
              <span className={`h-2 w-2 rounded-full ${liveOnly ? "bg-red-500 animate-ping" : "bg-neutral-300"}`} />
              <span>Live Only ({fixtures.filter(f => f.status === "live").length})</span>
            </button>
          </div>

          {/* Date Selector Strip */}
          <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {dates.map((d) => (
              <button
                key={d.id}
                type="button"
                onClick={() => setSelectedDate(d.id)}
                className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                  selectedDate === d.id
                    ? "bg-black text-white shadow-sm"
                    : "bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-300 hover:text-black"
                }`}
              >
                <span>{d.label}</span>
                <span className={`text-[11px] font-mono ${selectedDate === d.id ? "text-neutral-300" : "text-neutral-400"}`}>
                  {d.date}
                </span>
              </button>
            ))}
          </div>

          {/* Sport Selector Pills */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {sports.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSelectedSport(s.id)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                  selectedSport === s.id
                    ? "bg-neutral-900 text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-black"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Fixtures List */}
          <div className="mt-8 space-y-3.5">
            {filteredFixtures.map((f) => {
              const isFav = favorites.includes(f.id);

              return (
                <div
                  key={f.id}
                  onClick={() => handleOpenMatch(f)}
                  className="group flex flex-col md:flex-row md:items-center justify-between rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-all hover:border-neutral-300 hover:shadow-md cursor-pointer gap-4"
                >
                  {/* Left: Star + League + Status */}
                  <div className="flex items-center gap-3 md:w-56 shrink-0">
                    <button
                      type="button"
                      onClick={(e) => toggleFavorite(f.id, e)}
                      className={`p-1 transition-colors ${
                        isFav ? "text-amber-500" : "text-neutral-300 hover:text-neutral-500"
                      }`}
                      title={isFav ? "Favorited" : "Add to favorites"}
                    >
                      <Star className={`h-4 w-4 ${isFav ? "fill-amber-500" : ""}`} />
                    </button>

                    <div>
                      <span className="block text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400">
                        {f.league}
                      </span>
                      {f.status === "live" ? (
                        <span className="inline-flex items-center gap-1 font-mono text-xs font-bold text-red-500">
                          <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-live-pulse" />
                          {f.minute}
                        </span>
                      ) : f.status === "finished" ? (
                        <span className="font-mono text-xs font-bold text-neutral-500">
                          Full Time
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 font-mono text-xs text-neutral-500">
                          <Clock className="h-3 w-3" />
                          {f.time}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Middle: Teams & Scores */}
                  <div className="flex-1 space-y-1.5">
                    <div className="flex items-center justify-between md:max-w-md">
                      <span className="font-heading text-base font-bold text-black group-hover:text-neutral-700 transition-colors">
                        {f.homeTeam}
                      </span>
                      <span className="font-mono text-lg font-bold text-black">
                        {f.homeScore !== null ? f.homeScore : "-"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between md:max-w-md">
                      <span className="font-heading text-base font-bold text-neutral-700 group-hover:text-black transition-colors">
                        {f.awayTeam}
                      </span>
                      <span className="font-mono text-lg font-bold text-neutral-700">
                        {f.awayScore !== null ? f.awayScore : "-"}
                      </span>
                    </div>
                  </div>

                  {/* Right: Telemetry / xG Metric + Match Center CTA */}
                  <div className="flex items-center justify-between md:justify-end gap-5 border-t md:border-t-0 pt-3 md:pt-0 border-neutral-100">
                    <div className="text-left md:text-right">
                      <span className="block text-[10px] font-mono uppercase text-neutral-400">
                        {f.sport === "basketball" ? "Shot Efficiency" : "Expected Goals (xG)"}
                      </span>
                      <span className="font-mono text-xs font-bold text-neutral-800">
                        {f.xG}
                      </span>
                    </div>

                    <button
                      type="button"
                      className="inline-flex items-center gap-1 rounded-lg bg-neutral-100 px-3.5 py-1.5 text-xs font-semibold text-neutral-800 transition-colors group-hover:bg-black group-hover:text-white"
                    >
                      <span>Match Center</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
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
