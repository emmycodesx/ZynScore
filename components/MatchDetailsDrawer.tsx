"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Match, TEAMS_DATA } from "@/lib/sportsData";
import { X, Trophy, Shield, Clock, Activity, Users, History, Table, Star } from "lucide-react";

interface MatchDetailsDrawerProps {
  match: Match | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (e: React.MouseEvent, matchId: string) => void;
}

type TabType = "overview" | "stats" | "lineups" | "timeline" | "h2h" | "standings";

export default function MatchDetailsDrawer({
  match,
  onClose,
  isFavorite,
  onToggleFavorite,
}: MatchDetailsDrawerProps) {
  const [activeTab, setActiveTab] = useState<TabType>("overview");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (match) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [match, onClose]);

  if (!match) return null;

  const isLive = match.status === "live";
  const stats = match.stats || {
    possession: [50, 50],
    shotsOnTarget: [4, 4],
    totalShots: [10, 10],
    corners: [5, 4],
    fouls: [8, 9],
    yellowCards: [1, 1],
    expectedGoals: [1.2, 1.1],
  };

  const statItems = [
    { label: "Ball Possession", home: `${stats.possession[0]}%`, away: `${stats.possession[1]}%`, homeVal: stats.possession[0], awayVal: stats.possession[1] },
    { label: "Expected Goals (xG)", home: stats.expectedGoals?.[0]?.toFixed(2) ?? "1.45", away: stats.expectedGoals?.[1]?.toFixed(2) ?? "0.95", homeVal: (stats.expectedGoals?.[0] ?? 1.45) * 20, awayVal: (stats.expectedGoals?.[1] ?? 0.95) * 20 },
    { label: "Shots on Target", home: stats.shotsOnTarget[0], away: stats.shotsOnTarget[1], homeVal: stats.shotsOnTarget[0], awayVal: stats.shotsOnTarget[1] },
    { label: "Total Shots", home: stats.totalShots[0], away: stats.totalShots[1], homeVal: stats.totalShots[0], awayVal: stats.totalShots[1] },
    { label: "Corner Kicks", home: stats.corners[0], away: stats.corners[1], homeVal: stats.corners[0], awayVal: stats.corners[1] },
    { label: "Fouls Committed", home: stats.fouls[0], away: stats.fouls[1], homeVal: stats.fouls[0], awayVal: stats.fouls[1] },
    { label: "Yellow Cards", home: stats.yellowCards[0], away: stats.yellowCards[1], homeVal: stats.yellowCards[0], awayVal: stats.yellowCards[1] },
  ];

  const tabs: { id: TabType; label: string; icon: any }[] = [
    { id: "overview", label: "Overview", icon: Activity },
    { id: "stats", label: "Stats", icon: Shield },
    { id: "timeline", label: "Timeline", icon: Clock },
    { id: "lineups", label: "Lineups", icon: Users },
    { id: "h2h", label: "H2H", icon: History },
    { id: "standings", label: "Standings", icon: Table },
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm transition-opacity">
      {/* Drawer Container - Monochrome */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Match Details Panel"
        className="flex h-full w-full max-w-xl flex-col bg-black border-l border-neutral-800 shadow-2xl overflow-y-auto"
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-neutral-800 bg-black/95 px-5 py-4 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-blue-500" />
            <span className="font-heading text-xs font-bold uppercase tracking-wider text-neutral-400">
              {match.leagueName}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={(e) => onToggleFavorite(e, match.id)}
              className={`flex h-8 w-8 items-center justify-center rounded-lg border transition-colors ${
                isFavorite ? "bg-blue-600 text-white font-bold border-blue-500 shadow-sm shadow-blue-600/30" : "border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-900"
              }`}
              aria-label={isFavorite ? "Remove favorite" : "Save favorite"}
            >
              <Star className={`h-4 w-4 ${isFavorite ? "fill-white" : ""}`} />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-800 text-neutral-400 hover:bg-neutral-900 hover:text-white transition-colors"
              aria-label="Close match details"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Scoreboard Banner */}
        <div className="bg-neutral-950 px-6 py-6 border-b border-neutral-800">
          <div className="mb-4 flex items-center justify-center">
            {isLive ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 px-3 py-1 font-mono text-xs font-bold text-white border border-neutral-800">
                <span className="h-2 w-2 rounded-full bg-red-500 animate-live-pulse" />
                LIVE • {match.minute}
              </span>
            ) : match.status === "finished" ? (
              <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold text-neutral-300 border border-neutral-800">
                Full Time
              </span>
            ) : (
              <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold text-neutral-300 border border-neutral-800">
                Kickoff {match.kickoffTime}
              </span>
            )}
          </div>

          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 text-center">
            {/* Home */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-black border border-neutral-800 p-2 shadow-inner">
                <Image
                  src={match.homeTeam.crest}
                  alt={match.homeTeam.name}
                  width={44}
                  height={44}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-heading text-base font-bold text-white max-w-[120px] truncate">
                {match.homeTeam.name}
              </span>
            </div>

            {/* Score */}
            <div className="flex flex-col items-center">
              <div className="font-heading text-5xl font-black text-white tracking-tight">
                <span>{match.homeTeam.score ?? 0}</span>
                <span className="text-neutral-600 mx-2">:</span>
                <span>{match.awayTeam.score ?? 0}</span>
              </div>
              <span className="mt-1 text-[11px] font-mono text-neutral-400">
                {match.venue}
              </span>
            </div>

            {/* Away */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-black border border-neutral-800 p-2 shadow-inner">
                <Image
                  src={match.awayTeam.crest}
                  alt={match.awayTeam.name}
                  width={44}
                  height={44}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-heading text-base font-bold text-white max-w-[120px] truncate">
                {match.awayTeam.name}
              </span>
            </div>
          </div>
        </div>

        {/* Tab Navigation - Black & White */}
        <div className="flex border-b border-neutral-800 bg-neutral-900 px-2 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex shrink-0 items-center gap-1.5 border-b-2 px-3.5 py-3 text-xs font-semibold transition-all ${
                  isActive
                    ? "border-blue-500 text-blue-400 font-bold"
                    : "border-transparent text-neutral-400 hover:text-white"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Panels */}
        <div className="flex-1 p-5">
          {/* TAB 1: OVERVIEW & STATS */}
          {(activeTab === "overview" || activeTab === "stats") && (
            <div className="space-y-4">
              <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-neutral-400">
                Match Telemetry Comparison
              </h4>
              <div className="space-y-3.5 rounded-xl border border-neutral-800 bg-neutral-900 p-4">
                {statItems.map((s, idx) => {
                  const total = (Number(s.homeVal) || 1) + (Number(s.awayVal) || 1);
                  const homePercent = Math.max(15, Math.min(85, ((Number(s.homeVal) || 1) / total) * 100));

                  return (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-medium">
                        <span className="font-mono font-bold text-white">{s.home}</span>
                        <span className="text-neutral-400">{s.label}</span>
                        <span className="font-mono font-bold text-neutral-400">{s.away}</span>
                      </div>
                      <div className="flex h-1.5 w-full overflow-hidden rounded-full bg-neutral-950">
                        <div
                          className="h-full bg-blue-600 rounded-l-full"
                          style={{ width: `${homePercent}%` }}
                        />
                        <div
                          className="h-full bg-neutral-700 rounded-r-full"
                          style={{ width: `${100 - homePercent}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: TIMELINE */}
          {activeTab === "timeline" && (
            <div className="space-y-4">
              <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-neutral-400">
                Key Match Events
              </h4>
              {match.events && match.events.length > 0 ? (
                <div className="relative border-l border-neutral-800 pl-4 ml-3 space-y-4">
                  {match.events.map((event, idx) => (
                    <div key={idx} className="relative flex items-start gap-3">
                      <div className="absolute -left-[23px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-black border border-blue-500 text-[10px]">
                        {event.type === "goal" ? "⚽" : event.type === "yellow_card" ? "🟨" : "🔄"}
                      </div>
                      <div className="flex-1 rounded-lg border border-neutral-800 bg-neutral-900 p-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-white">
                            {event.player}
                          </span>
                          <span className="font-mono text-xs font-bold text-white">
                            {event.minute}&apos;
                          </span>
                        </div>
                        {event.detail && (
                          <p className="mt-0.5 text-[11px] text-neutral-400">
                            {event.detail}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 text-center text-xs text-neutral-400">
                  No major incidents recorded yet in this match.
                </div>
              )}
            </div>
          )}

          {/* TAB 3: LINEUPS */}
          {activeTab === "lineups" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-neutral-400">Home Formation:</span>
                  <span className="ml-1 font-mono font-bold text-white">{match.lineups?.homeFormation || "4-3-3"}</span>
                </div>
                <div>
                  <span className="text-xs text-neutral-400">Away Formation:</span>
                  <span className="ml-1 font-mono font-bold text-neutral-400">{match.lineups?.awayFormation || "4-2-3-1"}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Home Starting 11 */}
                <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-3">
                  <h5 className="font-heading text-xs font-bold uppercase text-white mb-2 border-b border-neutral-800 pb-1">
                    {match.homeTeam.name}
                  </h5>
                  <ul className="space-y-1.5 text-xs text-neutral-200">
                    {(match.lineups?.homeStarting || [
                      "1. J. Daniel (GK)",
                      "4. O. Williams",
                      "5. C. Nwosu",
                      "8. E. Adeleke (C)",
                      "10. M. Okon",
                    ]).map((player, i) => (
                      <li key={i} className="flex items-center gap-1.5 py-0.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                        <span>{player}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Away Starting 11 */}
                <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-3">
                  <h5 className="font-heading text-xs font-bold uppercase text-neutral-400 mb-2 border-b border-neutral-800 pb-1">
                    {match.awayTeam.name}
                  </h5>
                  <ul className="space-y-1.5 text-xs text-neutral-300">
                    {(match.lineups?.awayStarting || [
                      "12. F. Bello (GK)",
                      "4. K. Oladipo",
                      "8. H. Adams (C)",
                      "9. Z. Ibrahim",
                      "11. N. George",
                    ]).map((player, i) => (
                      <li key={i} className="flex items-center gap-1.5 py-0.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-neutral-500" />
                        <span>{player}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: H2H & TAB 5: STANDINGS */}
          {(activeTab === "h2h" || activeTab === "standings") && (
            <div className="space-y-4">
              <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-neutral-400">
                Live Conference Standings
              </h4>
              <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-neutral-800 bg-neutral-950 text-neutral-400">
                    <tr>
                      <th className="px-3 py-2">#</th>
                      <th className="px-3 py-2">Team</th>
                      <th className="px-2 py-2 text-center">P</th>
                      <th className="px-2 py-2 text-center">GD</th>
                      <th className="px-3 py-2 text-right">PTS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-850">
                    {TEAMS_DATA.map((team) => (
                      <tr
                        key={team.id}
                        className={`transition-colors ${
                          team.name === match.homeTeam.name || team.name === match.awayTeam.name
                            ? "bg-blue-600/15 font-bold text-white border-l-2 border-blue-500"
                            : "text-neutral-300 hover:bg-neutral-800"
                        }`}
                      >
                        <td className="px-3 py-2.5 font-mono">{team.rank}</td>
                        <td className="px-3 py-2.5 flex items-center gap-2">
                          <Image src={team.crest} alt={team.name} width={16} height={16} className="h-4 w-4 object-contain" />
                          <span>{team.name}</span>
                        </td>
                        <td className="px-2 py-2.5 text-center font-mono">{team.stats.played}</td>
                        <td className="px-2 py-2.5 text-center font-mono text-white">{team.stats.gd > 0 ? `+${team.stats.gd}` : team.stats.gd}</td>
                        <td className="px-3 py-2.5 text-right font-mono font-bold text-white">{team.stats.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
