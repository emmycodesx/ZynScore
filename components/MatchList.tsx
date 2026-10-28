"use client";

import { useState } from "react";
import { Match } from "@/lib/sportsData";
import MatchRow from "./MatchRow";
import { Trophy, ChevronDown, ChevronUp, AlertCircle } from "lucide-react";

interface MatchListProps {
  matches: Match[];
  onSelectMatch: (match: Match) => void;
  favorites: string[];
  onToggleFavorite: (e: React.MouseEvent, matchId: string) => void;
  isLoading?: boolean;
}

export default function MatchList({
  matches,
  onSelectMatch,
  favorites,
  onToggleFavorite,
  isLoading = false,
}: MatchListProps) {
  const [collapsedLeagues, setCollapsedLeagues] = useState<Record<string, boolean>>({});

  const toggleLeagueCollapse = (leagueId: string) => {
    setCollapsedLeagues((prev) => ({
      ...prev,
      [leagueId]: !prev[leagueId],
    }));
  };

  const leaguesMap: Record<string, { name: string; sport: string; matches: Match[] }> = {};
  matches.forEach((m) => {
    if (!leaguesMap[m.leagueId]) {
      leaguesMap[m.leagueId] = {
        name: m.leagueName,
        sport: m.sport,
        matches: [],
      };
    }
    leaguesMap[m.leagueId].matches.push(m);
  });

  const leagueEntries = Object.entries(leaguesMap);

  if (isLoading) {
    return (
      <div className="w-full space-y-4" aria-busy="true" aria-label="Loading matches">
        {[1, 2].map((i) => (
          <div key={i} className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 animate-pulse">
            <div className="h-10 bg-neutral-800" />
            <div className="space-y-2 p-4">
              <div className="h-12 rounded bg-neutral-800/60" />
              <div className="h-12 rounded bg-neutral-800/60" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (leagueEntries.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900/60 p-12 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 mb-3 border border-blue-500/20">
          <AlertCircle className="h-6 w-6 text-blue-400" />
        </div>
        <h3 className="font-heading text-lg font-bold text-white">No Matches Found</h3>
        <p className="mt-1 text-sm text-neutral-400 max-w-sm">
          No matches match your current filters. Try selecting a different date or switching to &ldquo;All Matches&rdquo;.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full space-y-4">
      {leagueEntries.map(([leagueId, { name, matches: leagueMatches }]) => {
        const isCollapsed = collapsedLeagues[leagueId];
        const liveCountInLeague = leagueMatches.filter((m) => m.status === "live").length;

        return (
          <div
            key={leagueId}
            className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 shadow-sm"
          >
            {/* League Header - Black, White & Blue */}
            <button
              type="button"
              onClick={() => toggleLeagueCollapse(leagueId)}
              className="flex w-full items-center justify-between border-b border-neutral-800 bg-neutral-900 px-4 py-3 text-left transition-colors hover:bg-neutral-850 focus:outline-none focus:ring-1 focus:ring-blue-500"
              aria-expanded={!isCollapsed}
            >
              <div className="flex items-center gap-2.5">
                <Trophy className="h-4 w-4 text-blue-500" />
                <span className="font-heading text-sm sm:text-base font-bold uppercase tracking-wider text-white">
                  {name}
                </span>
                {liveCountInLeague > 0 && (
                  <span className="flex items-center gap-1 rounded bg-neutral-800 px-2 py-0.5 text-[10px] font-bold text-white border border-neutral-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-live-pulse" />
                    {liveCountInLeague} LIVE
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <span>{leagueMatches.length} {leagueMatches.length === 1 ? "match" : "matches"}</span>
                {isCollapsed ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronUp className="h-4 w-4" />
                )}
              </div>
            </button>

            {/* League Match Rows */}
            {!isCollapsed && (
              <div className="divide-y divide-neutral-800/80">
                {leagueMatches.map((match) => (
                  <MatchRow
                    key={match.id}
                    match={match}
                    onSelect={onSelectMatch}
                    isFavorite={favorites.includes(match.id)}
                    onToggleFavorite={onToggleFavorite}
                  />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
