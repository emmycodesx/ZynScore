"use client";

import Image from "next/image";
import { TEAMS_DATA, TOP_PERFORMERS } from "@/lib/sportsData";
import { Trophy, Award, TrendingUp, BellRing, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface SportsRightRailProps {
  onSelectTeam?: (teamId: string) => void;
}

export default function SportsRightRail({ onSelectTeam }: SportsRightRailProps) {
  const [alertsEnabled, setAlertsEnabled] = useState(false);

  return (
    <aside className="w-full space-y-4">
      {/* 1. Live Conference Standings (Mini Table) */}
      <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-[#0E0E0E] shadow-sm">
        <div className="flex items-center justify-between border-b border-neutral-800/80 px-4 py-3">
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-blue-500" />
            <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-white">
              Live Conference Table
            </h3>
          </div>
          <span className="rounded bg-blue-500/10 px-2 py-0.5 text-[10px] font-mono font-bold text-blue-400 border border-blue-500/20">
            Championship
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-neutral-800/80 bg-black/60 text-[10px] font-mono uppercase text-neutral-500">
              <tr>
                <th className="px-3 py-2">#</th>
                <th className="px-3 py-2">Club</th>
                <th className="px-2 py-2 text-center">P</th>
                <th className="px-2 py-2 text-center">GD</th>
                <th className="px-3 py-2 text-right">PTS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/50">
              {TEAMS_DATA.map((team, idx) => (
                <tr
                  key={team.id}
                  onClick={() => onSelectTeam?.(team.id)}
                  className={`transition-colors hover:bg-neutral-900 cursor-pointer ${
                    idx === 0 ? "bg-blue-600/[0.08]" : ""
                  }`}
                >
                  <td className="px-3 py-2 font-mono font-bold">
                    <span
                      className={`inline-flex h-4 w-4 items-center justify-center rounded text-[10px] ${
                        idx === 0
                          ? "bg-blue-600 text-white font-black"
                          : idx < 2
                          ? "bg-neutral-800 text-neutral-300"
                          : "text-neutral-500"
                      }`}
                    >
                      {team.rank}
                    </span>
                  </td>
                  <td className="px-3 py-2">
                    <div className="flex items-center gap-2 truncate max-w-[130px]">
                      <Image
                        src={team.crest}
                        alt=""
                        width={18}
                        height={18}
                        className="h-4 w-4 object-contain shrink-0"
                      />
                      <span className="font-medium text-white truncate text-xs">
                        {team.shortName || team.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-2 py-2 text-center font-mono text-neutral-400">{team.stats.played}</td>
                  <td className="px-2 py-2 text-center font-mono text-neutral-300">
                    {team.stats.gd > 0 ? `+${team.stats.gd}` : team.stats.gd}
                  </td>
                  <td className="px-3 py-2 text-right font-mono font-bold text-white">
                    {team.stats.points}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between border-t border-neutral-800/80 bg-black/40 px-3.5 py-2 text-[10px] text-neutral-400">
          <div className="flex items-center gap-1.5 text-blue-400 font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span>Top 2 Playoff Cutoff</span>
          </div>
          <span className="font-mono text-neutral-500">Round 14 / 18</span>
        </div>
      </div>

      {/* 2. Golden Boot & Tournament Leaders */}
      <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-[#0E0E0E] p-4 shadow-sm">
        <div className="flex items-center gap-2 border-b border-neutral-800/80 pb-2.5">
          <Award className="h-4 w-4 text-blue-500" />
          <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-white">
            Golden Boot & Leaders
          </h3>
        </div>

        <div className="mt-3 space-y-2">
          {TOP_PERFORMERS.map((star, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-xl border border-neutral-800/80 bg-black/40 p-2.5 transition-colors hover:border-blue-500/30"
            >
              <div className="flex items-center gap-2.5 truncate">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800 text-sm shrink-0">
                  {star.avatar}
                </span>
                <div className="truncate">
                  <h4 className="text-xs font-bold text-white truncate">{star.name}</h4>
                  <span className="text-[10px] text-neutral-400 block truncate">{star.team}</span>
                </div>
              </div>
              <span className="rounded-md bg-blue-500/10 px-2 py-0.5 font-mono text-[11px] font-bold text-blue-400 border border-blue-500/20 shrink-0">
                {star.stat}
              </span>
            </div>
          ))}
        </div>

        {/* Player of the Week Box */}
        <div className="mt-3.5 rounded-xl border border-neutral-800 bg-black/60 p-3 text-xs">
          <div className="flex items-center gap-1.5 font-bold text-white mb-1">
            <TrendingUp className="h-3.5 w-3.5 text-blue-500" />
            <span className="text-[11px] uppercase tracking-wide">Player of the Week</span>
          </div>
          <p className="text-[11px] text-neutral-400 leading-relaxed">
            <strong className="text-white">Emmanuel Adeleke (Bowen FC)</strong> with 4 consecutive matchday goals and an 88% shooting conversion rate.
          </p>
        </div>
      </div>

      {/* 3. Live Campus Matchday Broadcast Feed / Notifications Toggle */}
      <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-[#0E0E0E] p-4 shadow-sm">
        <div className="flex items-center gap-2 pb-2 border-b border-neutral-800/80">
          <BellRing className="h-4 w-4 text-blue-400" />
          <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white">
            Instant Goal Broadcasts
          </h4>
        </div>

        <p className="mt-2.5 text-[11px] text-neutral-400 leading-relaxed">
          Enable real-time audio goal chimes and campus matchday whistle alerts right in your browser.
        </p>

        <button
          type="button"
          onClick={() => setAlertsEnabled(!alertsEnabled)}
          className={`mt-3 flex w-full items-center justify-center gap-2 rounded-xl py-2 px-3 text-xs font-bold transition-all ${
            alertsEnabled
              ? "bg-blue-600/20 border border-blue-500 text-blue-400"
              : "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/30"
          }`}
        >
          {alertsEnabled ? (
            <>
              <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
              <span>Campus Alerts Active</span>
            </>
          ) : (
            <>
              <BellRing className="h-3.5 w-3.5 text-white" />
              <span>Turn On Live Alerts</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
