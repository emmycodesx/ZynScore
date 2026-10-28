"use client";

import Image from "next/image";
import { Match } from "@/lib/sportsData";
import { Star, ChevronRight, Clock } from "lucide-react";

interface MatchRowProps {
  match: Match;
  onSelect: (match: Match) => void;
  isFavorite: boolean;
  onToggleFavorite: (e: React.MouseEvent, matchId: string) => void;
}

export default function MatchRow({
  match,
  onSelect,
  isFavorite,
  onToggleFavorite,
}: MatchRowProps) {
  const isLive = match.status === "live";
  const isFinished = match.status === "finished";
  const isUpcoming = match.status === "upcoming";

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onSelect(match)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(match);
        }
      }}
      className={`group relative flex w-full items-center justify-between border-b border-neutral-800/80 px-4 py-3.5 transition-all cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500 ${
        isLive
          ? "bg-neutral-850/80 hover:bg-neutral-800"
          : "bg-neutral-900/40 hover:bg-neutral-850"
      }`}
    >
      {/* Left accent bar for live matches */}
      {isLive && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" />
      )}

      {/* Left Column: Time / Status Indicator */}
      <div className="flex w-20 sm:w-24 shrink-0 flex-col items-start gap-1">
        {isLive && (
          <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-white">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-live-pulse" />
            <span>{match.minute}</span>
          </div>
        )}
        {isFinished && (
          <span className="rounded bg-neutral-800 px-2 py-0.5 text-[11px] font-semibold text-neutral-400 border border-neutral-700">
            FT
          </span>
        )}
        {isUpcoming && (
          <div className="flex items-center gap-1 text-xs font-mono text-neutral-400">
            <Clock className="h-3 w-3 text-neutral-500" />
            <span>{match.kickoffTime}</span>
          </div>
        )}
      </div>

      {/* Middle Column: Teams & Scores */}
      <div className="flex flex-1 flex-col gap-1.5 pr-4">
        {/* Home Team */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-950 border border-neutral-800">
              <Image
                src={match.homeTeam.crest}
                alt={match.homeTeam.name}
                width={20}
                height={20}
                className="h-full w-full object-contain"
              />
            </div>
            <span className={`text-sm font-medium ${
              isLive || (isFinished && (match.homeTeam.score ?? 0) >= (match.awayTeam.score ?? 0))
                ? "text-white font-semibold"
                : "text-neutral-400"
            }`}>
              {match.homeTeam.name}
            </span>
          </div>

          {/* Home Score */}
          <span className={`font-heading text-lg font-bold tabular-nums min-w-[20px] text-right ${
            isLive ? "text-white" : isFinished ? "text-neutral-400" : "text-transparent"
          }`}>
            {match.homeTeam.score ?? "-"}
          </span>
        </div>

        {/* Away Team */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-950 border border-neutral-800">
              <Image
                src={match.awayTeam.crest}
                alt={match.awayTeam.name}
                width={20}
                height={20}
                className="h-full w-full object-contain"
              />
            </div>
            <span className={`text-sm font-medium ${
              isLive || (isFinished && (match.awayTeam.score ?? 0) >= (match.homeTeam.score ?? 0))
                ? "text-white font-semibold"
                : "text-neutral-400"
            }`}>
              {match.awayTeam.name}
            </span>
          </div>

          {/* Away Score */}
          <span className={`font-heading text-lg font-bold tabular-nums min-w-[20px] text-right ${
            isLive ? "text-white" : isFinished ? "text-neutral-400" : "text-transparent"
          }`}>
            {match.awayTeam.score ?? "-"}
          </span>
        </div>
      </div>

      {/* Right Column: Actions (Favorite star + Chevron) */}
      <div className="flex items-center gap-2 shrink-0">
        <button
          type="button"
          onClick={(e) => onToggleFavorite(e, match.id)}
          className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-neutral-800 ${
            isFavorite ? "text-blue-400" : "text-neutral-600 hover:text-white"
          }`}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Star className={`h-4 w-4 ${isFavorite ? "fill-blue-400" : ""}`} />
        </button>
        <ChevronRight className="h-4 w-4 text-neutral-600 transition-transform group-hover:translate-x-0.5 group-hover:text-blue-400" />
      </div>
    </div>
  );
}
