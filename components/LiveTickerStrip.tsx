"use client";

import Image from "next/image";
import { Match } from "@/lib/sportsData";

interface LiveTickerStripProps {
  matches: Match[];
  onSelectMatch: (match: Match) => void;
}

export default function LiveTickerStrip({
  matches,
  onSelectMatch,
}: LiveTickerStripProps) {
  const liveMatches = matches.filter((m) => m.status === "live");
  const displayMatches = liveMatches.length > 0 ? liveMatches : matches;
  const tickerItems = [...displayMatches, ...displayMatches, ...displayMatches];

  return (
    <div
      className="relative w-full overflow-hidden border-b border-neutral-800 bg-black py-2.5"
      aria-label="Live Match Scores Ticker"
    >
      {/* Left fixed label */}
      <div className="absolute left-0 top-0 bottom-0 z-10 flex items-center bg-gradient-to-r from-black via-black to-transparent pl-4 pr-6">
        <div className="flex items-center gap-1.5 rounded-full bg-neutral-900 px-2.5 py-0.5 text-[11px] font-bold text-white border border-neutral-800 uppercase tracking-wider">
          <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-live-pulse" />
          <span>Live Scores</span>
        </div>
      </div>

      {/* Right gradient fade */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-black to-transparent" />

      {/* Scrolling Track */}
      <div className="ticker-track flex items-center gap-3 pl-36">
        {tickerItems.map((match, idx) => (
          <button
            key={`${match.id}-${idx}`}
            type="button"
            onClick={() => onSelectMatch(match)}
            className="group flex shrink-0 items-center gap-3 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-xs transition-all hover:border-blue-500/40 hover:bg-neutral-850 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {/* Minute / Status badge */}
            <span className="flex items-center gap-1 font-mono text-[11px] font-bold text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
              {match.minute || match.status}
            </span>

            {/* Teams & Scores */}
            <div className="flex items-center gap-2">
              {/* Home Team */}
              <div className="flex items-center gap-1.5">
                <div className="relative h-4 w-4 shrink-0 overflow-hidden rounded-full bg-neutral-950">
                  <Image
                    src={match.homeTeam.crest}
                    alt={match.homeTeam.name}
                    width={16}
                    height={16}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="font-medium text-white max-w-[80px] truncate">
                  {match.homeTeam.shortName || match.homeTeam.name}
                </span>
              </div>

              {/* Score digits in bold tabular heading font */}
              <div className="flex items-center gap-1 rounded bg-black px-1.5 py-0.5 font-heading text-sm font-bold tracking-tight text-white border border-neutral-700">
                <span>{match.homeTeam.score ?? 0}</span>
                <span className="text-neutral-500">:</span>
                <span>{match.awayTeam.score ?? 0}</span>
              </div>

              {/* Away Team */}
              <div className="flex items-center gap-1.5">
                <span className="font-medium text-white max-w-[80px] truncate">
                  {match.awayTeam.shortName || match.awayTeam.name}
                </span>
                <div className="relative h-4 w-4 shrink-0 overflow-hidden rounded-full bg-neutral-950">
                  <Image
                    src={match.awayTeam.crest}
                    alt={match.awayTeam.name}
                    width={16}
                    height={16}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
