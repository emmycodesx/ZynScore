"use client";

import Image from "next/image";
import { TEAMS_DATA, TOP_PERFORMERS } from "@/lib/sportsData";
import { Trophy, Award, TrendingUp } from "lucide-react";

export default function StandingsWidget() {
  return (
    <section className="w-full border-b border-neutral-800 bg-black py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">
              Leaderboard & Statistics
            </span>
            <h2 className="mt-1 font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              Conference Standings & Top Stars
            </h2>
          </div>
          <p className="text-xs text-neutral-400 max-w-sm">
            Live-calculated points table updated with each match goal, plus tournament individual leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          
          {/* Left 2 Columns: Standings Table - Black, White & Blue */}
          <div className="lg:col-span-2 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-sm">
            <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-900 px-5 py-3.5">
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-blue-500" />
                <span className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                  Collegiate Premier League Table
                </span>
              </div>
              <span className="rounded bg-black px-2.5 py-0.5 text-[10px] font-bold text-neutral-300 border border-neutral-800">
                Championship Round
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="border-b border-neutral-800 bg-neutral-950 text-neutral-400">
                  <tr>
                    <th className="px-4 py-3 font-semibold">#</th>
                    <th className="px-4 py-3 font-semibold">Club</th>
                    <th className="px-2.5 py-3 text-center font-semibold">P</th>
                    <th className="px-2.5 py-3 text-center font-semibold">W</th>
                    <th className="px-2.5 py-3 text-center font-semibold">D</th>
                    <th className="px-2.5 py-3 text-center font-semibold">L</th>
                    <th className="px-3 py-3 text-center font-semibold">GD</th>
                    <th className="px-4 py-3 text-right font-semibold">PTS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800/80">
                  {TEAMS_DATA.map((team, idx) => (
                    <tr
                      key={team.id}
                      className={`transition-colors hover:bg-neutral-850 ${
                        idx < 2 ? "bg-white/[0.03]" : ""
                      }`}
                    >
                      <td className="px-4 py-3 font-mono font-bold text-neutral-400">
                        <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full text-xs ${
                          idx === 0 ? "bg-blue-600 text-white font-extrabold shadow-sm shadow-blue-600/30" : idx === 1 ? "bg-neutral-800 text-white font-bold" : ""
                        }`}>
                          {team.rank}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2.5">
                          <div className="relative h-6 w-6 shrink-0">
                            <Image
                              src={team.crest}
                              alt={team.name}
                              width={24}
                              height={24}
                              className="h-full w-full object-contain"
                            />
                          </div>
                          <span className="font-medium text-white">
                            {team.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-2.5 py-3 text-center font-mono text-neutral-400">{team.stats.played}</td>
                      <td className="px-2.5 py-3 text-center font-mono text-neutral-400">{team.stats.won}</td>
                      <td className="px-2.5 py-3 text-center font-mono text-neutral-400">{team.stats.drawn}</td>
                      <td className="px-2.5 py-3 text-center font-mono text-neutral-400">{team.stats.lost}</td>
                      <td className="px-3 py-3 text-center font-mono text-white">
                        {team.stats.gd > 0 ? `+${team.stats.gd}` : team.stats.gd}
                      </td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-white">
                        {team.stats.points}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between border-t border-neutral-800 bg-neutral-950 px-4 py-2.5 text-[11px] text-neutral-400">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-blue-400 font-semibold">
                  <span className="h-2 w-2 rounded-full bg-blue-500" /> Top Seed
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-neutral-600" /> Playoff Qualifier
                </span>
              </div>
              <span>Updated Live</span>
            </div>
          </div>

          {/* Right Column: Top Performers - Black, White & Blue */}
          <div className="flex flex-col justify-between rounded-2xl border border-neutral-800 bg-neutral-900 p-5 shadow-sm">
            <div>
              <div className="flex items-center gap-2 border-b border-neutral-800 pb-3">
                <Award className="h-4 w-4 text-blue-500" />
                <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                  Tournament Leaders
                </h3>
              </div>

              <div className="mt-4 space-y-3">
                {TOP_PERFORMERS.map((star, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-950 p-3 transition-colors hover:border-blue-500/30"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{star.avatar}</span>
                      <div>
                        <h4 className="font-heading text-sm font-bold text-white">
                          {star.name}
                        </h4>
                        <span className="text-xs text-neutral-400">{star.team}</span>
                      </div>
                    </div>
                    <span className="rounded-lg bg-blue-500/10 px-2.5 py-1 font-heading text-xs font-bold text-blue-400 border border-blue-500/20">
                      {star.stat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Insight Card */}
            <div className="mt-6 rounded-xl border border-neutral-800 bg-neutral-950 p-3.5 text-xs text-neutral-300">
              <div className="flex items-center gap-1.5 font-bold text-white mb-1">
                <TrendingUp className="h-3.5 w-3.5 text-blue-500" />
                <span>Player of the Week</span>
              </div>
              <p className="text-neutral-400 leading-relaxed">
                Emmanuel Adeleke has scored in 4 consecutive matches with an 88% shot accuracy rating.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
