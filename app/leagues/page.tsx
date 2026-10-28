"use client";

import { useState } from "react";
import Link from "next/link";
import { Trophy, ChevronRight, Award, Shield, Flame, Activity } from "lucide-react";
import SportLiveNavbar from "@/components/SportLiveNavbar";
import SportLiveFooter from "@/components/SportLiveFooter";

interface TableRow {
  pos: number;
  team: string;
  shortName: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  gf: number;
  ga: number;
  gd: number;
  pts: number;
  form: ("W" | "D" | "L")[];
}

const PREMIER_LEAGUE_STANDINGS: TableRow[] = [
  { pos: 1, team: "Manchester City", shortName: "MCI", played: 28, won: 20, drawn: 5, lost: 3, gf: 68, ga: 24, gd: 44, pts: 65, form: ["W", "W", "W", "D", "W"] },
  { pos: 2, team: "Arsenal", shortName: "ARS", played: 28, won: 20, drawn: 4, lost: 4, gf: 65, ga: 23, gd: 42, pts: 64, form: ["W", "W", "L", "W", "W"] },
  { pos: 3, team: "Liverpool", shortName: "LIV", played: 28, won: 19, drawn: 6, lost: 3, gf: 62, ga: 26, gd: 36, pts: 63, form: ["W", "D", "W", "W", "D"] },
  { pos: 4, team: "Aston Villa", shortName: "AVL", played: 28, won: 17, drawn: 4, lost: 7, gf: 56, ga: 38, gd: 18, pts: 55, form: ["L", "W", "W", "D", "W"] },
  { pos: 5, team: "Tottenham Hotspur", shortName: "TOT", played: 28, won: 16, drawn: 5, lost: 7, gf: 55, ga: 39, gd: 16, pts: 53, form: ["W", "L", "W", "W", "L"] },
  { pos: 6, team: "Manchester United", shortName: "MUN", played: 28, won: 15, drawn: 2, lost: 11, gf: 41, ga: 40, gd: 1, pts: 47, form: ["W", "W", "L", "L", "W"] },
  { pos: 7, team: "Newcastle United", shortName: "NEW", played: 28, won: 13, drawn: 5, lost: 10, gf: 57, ga: 45, gd: 12, pts: 44, form: ["D", "W", "L", "W", "D"] },
  { pos: 8, team: "Chelsea", shortName: "CHE", played: 28, won: 11, drawn: 7, lost: 10, gf: 47, ga: 45, gd: 2, pts: 40, form: ["D", "W", "D", "L", "W"] },
  { pos: 18, team: "Luton Town", shortName: "LUT", played: 28, won: 5, drawn: 7, lost: 16, gf: 38, ga: 55, gd: -17, pts: 22, form: ["L", "L", "D", "L", "D"] },
  { pos: 19, team: "Burnley", shortName: "BUR", played: 28, won: 3, drawn: 5, lost: 20, gf: 27, ga: 62, gd: -35, pts: 14, form: ["L", "D", "L", "L", "L"] },
  { pos: 20, team: "Sheffield United", shortName: "SHU", played: 28, won: 3, drawn: 5, lost: 20, gf: 24, ga: 74, gd: -50, pts: 14, form: ["D", "L", "L", "L", "D"] },
];

const LA_LIGA_STANDINGS: TableRow[] = [
  { pos: 1, team: "Real Madrid", shortName: "RMA", played: 28, won: 21, drawn: 6, lost: 1, gf: 64, ga: 20, gd: 44, pts: 69, form: ["W", "W", "D", "W", "W"] },
  { pos: 2, team: "Barcelona", shortName: "FCB", played: 28, won: 19, drawn: 4, lost: 5, gf: 58, ga: 28, gd: 30, pts: 61, form: ["W", "W", "W", "L", "W"] },
  { pos: 3, team: "Girona", shortName: "GIR", played: 28, won: 18, drawn: 5, lost: 5, gf: 56, ga: 33, gd: 23, pts: 59, form: ["L", "W", "L", "W", "D"] },
  { pos: 4, team: "Atlético Madrid", shortName: "ATM", played: 28, won: 17, drawn: 4, lost: 7, gf: 54, ga: 31, gd: 23, pts: 55, form: ["W", "L", "W", "D", "W"] },
  { pos: 5, team: "Athletic Club", shortName: "ATH", played: 28, won: 15, drawn: 8, lost: 5, gf: 48, ga: 26, gd: 22, pts: 53, form: ["D", "W", "W", "D", "W"] },
];

const NBA_STANDINGS: TableRow[] = [
  { pos: 1, team: "Boston Celtics", shortName: "BOS", played: 64, won: 51, drawn: 0, lost: 13, gf: 121, ga: 109, gd: 12, pts: 102, form: ["W", "W", "W", "W", "L"] },
  { pos: 2, team: "Milwaukee Bucks", shortName: "MIL", played: 64, won: 42, drawn: 0, lost: 22, gf: 119, ga: 116, gd: 3, pts: 84, form: ["W", "L", "W", "W", "W"] },
  { pos: 3, team: "Denver Nuggets", shortName: "DEN", played: 64, won: 43, drawn: 0, lost: 21, gf: 114, ga: 110, gd: 4, pts: 86, form: ["W", "W", "W", "W", "W"] },
  { pos: 4, team: "Golden State Warriors", shortName: "GSW", played: 63, won: 34, drawn: 0, lost: 29, gf: 118, ga: 117, gd: 1, pts: 68, form: ["L", "W", "W", "L", "W"] },
];

export default function LeaguesPage() {
  const [selectedLeague, setSelectedLeague] = useState<"premier-league" | "la-liga" | "nba">("premier-league");

  const leagues = [
    { id: "premier-league", name: "Premier League", country: "England", badge: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
    { id: "la-liga", name: "La Liga EA Sports", country: "Spain", badge: "🇪🇸" },
    { id: "nba", name: "NBA", country: "USA", badge: "🇺🇸" },
  ];

  const currentStandings =
    selectedLeague === "premier-league"
      ? PREMIER_LEAGUE_STANDINGS
      : selectedLeague === "la-liga"
      ? LA_LIGA_STANDINGS
      : NBA_STANDINGS;

  const topScorers = [
    { name: "Erling Haaland", team: "Man City", goals: 22, xG: "20.4", penalty: 4 },
    { name: "Jude Bellingham", team: "Real Madrid", goals: 18, xG: "15.2", penalty: 1 },
    { name: "Harry Kane", team: "Bayern Munich", goals: 17, xG: "16.8", penalty: 3 },
    { name: "Mohamed Salah", team: "Liverpool", goals: 16, xG: "15.1", penalty: 5 },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#FAFAFA] text-[#111827] font-body selection:bg-black selection:text-white">
      <SportLiveNavbar activeTab="leagues" />

      <main className="w-full flex-1 py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-6">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <span className="text-black font-semibold">Leagues & Competitions</span>
          </nav>

          {/* Title Header */}
          <div className="border-b border-neutral-200 pb-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-neutral-700">
              <Trophy className="h-3.5 w-3.5 text-amber-500" />
              <span>Official Global Standings</span>
            </div>
            <h1 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black">
              Leagues & Standings Hub
            </h1>
            <p className="mt-2 text-sm text-neutral-600">
              Real-time table standings, goal differences, form badges, and statistical leaderboards.
            </p>
          </div>

          {/* League Selector Tabs */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {leagues.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => setSelectedLeague(l.id as any)}
                className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold transition-all shadow-sm ${
                  selectedLeague === l.id
                    ? "bg-black text-white"
                    : "bg-white border border-neutral-200 text-neutral-700 hover:border-neutral-300"
                }`}
              >
                <span>{l.badge}</span>
                <span>{l.name}</span>
              </button>
            ))}
          </div>

          {/* Main Grid: Standings Table (8 cols) + Top Scorers Rail (4 cols) */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Standings Table (8 cols) */}
            <div className="lg:col-span-8 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
              <div className="p-5 border-b border-neutral-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-heading text-base font-bold text-black">
                    {leagues.find((l) => l.id === selectedLeague)?.name} Table
                  </span>
                  <span className="text-xs font-mono text-neutral-400">2026 Season</span>
                </div>
                <div className="flex items-center gap-4 text-[11px] font-mono text-neutral-500">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-blue-600" /> Champions League
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-500" /> Relegation
                  </span>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-neutral-100 bg-neutral-50/60 font-mono text-[11px] text-neutral-400 uppercase">
                      <th className="py-3 pl-5 pr-2 w-10">Pos</th>
                      <th className="py-3 px-3">Team</th>
                      <th className="py-3 px-2 text-center">P</th>
                      <th className="py-3 px-2 text-center">W</th>
                      <th className="py-3 px-2 text-center">D</th>
                      <th className="py-3 px-2 text-center">L</th>
                      <th className="py-3 px-2 text-center hidden sm:table-cell">GD</th>
                      <th className="py-3 px-3 text-center font-bold text-black">PTS</th>
                      <th className="py-3 pr-5 pl-3 text-right">Last 5</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    {currentStandings.map((row) => {
                      const isUCL = row.pos <= 4;
                      const isRelegation = row.pos >= 18;

                      return (
                        <tr
                          key={row.team}
                          className="hover:bg-neutral-50/80 transition-colors group"
                        >
                          {/* Pos with border accent */}
                          <td className="py-3.5 pl-5 pr-2 font-mono font-bold text-xs relative">
                            {isUCL && (
                              <span className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600" />
                            )}
                            {isRelegation && (
                              <span className="absolute left-0 top-0 bottom-0 w-1 bg-red-500" />
                            )}
                            <span className={isUCL ? "text-blue-600" : isRelegation ? "text-red-500" : "text-neutral-500"}>
                              {row.pos}
                            </span>
                          </td>

                          {/* Team Name */}
                          <td className="py-3.5 px-3">
                            <span className="font-heading font-bold text-black group-hover:text-neutral-700 transition-colors">
                              {row.team}
                            </span>
                          </td>

                          {/* Played, Won, Drawn, Lost */}
                          <td className="py-3.5 px-2 text-center font-mono text-neutral-600">{row.played}</td>
                          <td className="py-3.5 px-2 text-center font-mono text-neutral-600">{row.won}</td>
                          <td className="py-3.5 px-2 text-center font-mono text-neutral-600">{row.drawn}</td>
                          <td className="py-3.5 px-2 text-center font-mono text-neutral-600">{row.lost}</td>

                          {/* Goal Difference */}
                          <td className="py-3.5 px-2 text-center font-mono hidden sm:table-cell text-neutral-600">
                            {row.gd > 0 ? `+${row.gd}` : row.gd}
                          </td>

                          {/* Points */}
                          <td className="py-3.5 px-3 text-center font-mono font-extrabold text-black text-sm">
                            {row.pts}
                          </td>

                          {/* Form Badges */}
                          <td className="py-3.5 pr-5 pl-3 text-right">
                            <div className="flex items-center justify-end gap-1">
                              {row.form.map((res, i) => (
                                <span
                                  key={i}
                                  className={`flex h-5 w-5 items-center justify-center rounded font-mono text-[10px] font-bold text-white ${
                                    res === "W"
                                      ? "bg-emerald-500"
                                      : res === "D"
                                      ? "bg-neutral-400"
                                      : "bg-red-500"
                                  }`}
                                >
                                  {res}
                                </span>
                              ))}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Rail: Stat Leaders & Live Spotlight (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Top Scorers Card */}
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                  <div className="flex items-center gap-2">
                    <Flame className="h-4 w-4 text-amber-500" />
                    <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-black">
                      Golden Boot Race
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-neutral-400">Goals (xG)</span>
                </div>

                <div className="mt-4 space-y-3.5">
                  {topScorers.map((scorer, i) => (
                    <div
                      key={scorer.name}
                      className="flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-bold text-neutral-400 w-4">
                          {i + 1}
                        </span>
                        <div>
                          <span className="font-heading font-bold text-black block leading-tight">
                            {scorer.name}
                          </span>
                          <span className="text-[11px] text-neutral-500 font-mono">
                            {scorer.team}
                          </span>
                        </div>
                      </div>

                      <div className="text-right font-mono">
                        <span className="font-bold text-black text-sm block">
                          {scorer.goals}
                        </span>
                        <span className="text-[10px] text-neutral-400">
                          xG: {scorer.xG}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tournament Telemetry Card */}
              <div className="rounded-2xl border border-neutral-800 bg-[#0B0F19] p-6 text-white shadow-xl">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span className="uppercase tracking-wider">Predictive Index</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <Activity className="h-3 w-3" /> 98.4% Confidence
                  </span>
                </div>
                <h4 className="mt-3 font-heading text-lg font-bold text-white">
                  Title Probability Model
                </h4>
                <p className="mt-1 text-xs text-neutral-300 leading-relaxed">
                  Based on remaining strength of schedule, xG differentials, and injury regression simulations.
                </p>
                <div className="mt-4 space-y-2 text-xs font-mono">
                  <div className="flex justify-between items-center">
                    <span>Man City</span>
                    <span className="font-bold text-emerald-400">46.8%</span>
                  </div>
                  <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 w-[46.8%]" />
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <span>Arsenal</span>
                    <span className="font-bold text-blue-400">32.1%</span>
                  </div>
                  <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-400 w-[32.1%]" />
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </main>

      <SportLiveFooter />
    </div>
  );
}
