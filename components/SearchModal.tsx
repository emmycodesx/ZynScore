"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Match, MATCHES_DATA, TEAMS_DATA } from "@/lib/sportsData";
import { Search, X } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMatch: (match: Match) => void;
}

export default function SearchModal({
  isOpen,
  onClose,
  onSelectMatch,
}: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredMatches = query.trim()
    ? MATCHES_DATA.filter(
        (m) =>
          m.homeTeam.name.toLowerCase().includes(query.toLowerCase()) ||
          m.awayTeam.name.toLowerCase().includes(query.toLowerCase()) ||
          m.leagueName.toLowerCase().includes(query.toLowerCase())
      )
    : MATCHES_DATA.slice(0, 4);

  const filteredTeams = query.trim()
    ? TEAMS_DATA.filter((t) => t.name.toLowerCase().includes(query.toLowerCase()))
    : TEAMS_DATA.slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/80 p-4 pt-16 sm:pt-24 backdrop-blur-sm">
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search Matches & Teams"
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl animate-fade-in"
      >
        {/* Search Input Bar - Black, White & Blue */}
        <div className="relative flex items-center border-b border-neutral-800 bg-black px-4 py-3.5">
          <Search className="h-5 w-5 text-blue-500 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search teams, matches, or tournaments..."
            autoFocus
            className="ml-3 w-full bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="mr-2 text-xs text-neutral-400 hover:text-white"
            >
              Clear
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-neutral-800 text-neutral-400 hover:bg-neutral-800 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Search Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          
          {/* Matches Category */}
          <div>
            <span className="font-heading text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">
              Matches
            </span>
            <div className="space-y-1.5">
              {filteredMatches.map((match) => (
                <button
                  key={match.id}
                  type="button"
                  onClick={() => {
                    onSelectMatch(match);
                    onClose();
                  }}
                  className="flex w-full items-center justify-between rounded-xl border border-neutral-800 bg-neutral-950 p-2.5 text-left transition-colors hover:border-blue-500/40 hover:bg-neutral-850"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-1">
                      <Image src={match.homeTeam.crest} alt="" width={20} height={20} className="h-5 w-5 object-contain" />
                      <Image src={match.awayTeam.crest} alt="" width={20} height={20} className="h-5 w-5 object-contain" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-white block">
                        {match.homeTeam.name} vs {match.awayTeam.name}
                      </span>
                      <span className="text-[10px] text-neutral-400">{match.leagueName}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    {match.status === "live" ? (
                      <span className="font-mono text-xs font-bold text-blue-400">{match.minute}</span>
                    ) : match.status === "finished" ? (
                      <span className="font-mono text-xs text-neutral-400">{match.homeTeam.score} - {match.awayTeam.score}</span>
                    ) : (
                      <span className="font-mono text-xs text-neutral-400">{match.kickoffTime}</span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Teams Category */}
          <div>
            <span className="font-heading text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">
              Teams
            </span>
            <div className="grid grid-cols-2 gap-2">
              {filteredTeams.map((team) => (
                <div
                  key={team.id}
                  className="flex items-center gap-2.5 rounded-xl border border-neutral-800 bg-neutral-950 p-2.5 transition-colors hover:border-blue-500/40"
                >
                  <Image src={team.crest} alt="" width={22} height={22} className="h-5 w-5 object-contain" />
                  <div className="truncate">
                    <span className="text-xs font-semibold text-white block truncate">{team.name}</span>
                    <span className="text-[10px] text-blue-400 font-mono font-medium">Rank #{team.rank}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Shortcut Tip */}
        <div className="border-t border-neutral-800 bg-black px-4 py-2.5 text-[11px] text-neutral-400 flex items-center justify-between">
          <span>Press <kbd className="rounded bg-neutral-900 px-1 py-0.5 text-[10px] border border-neutral-800">ESC</kbd> to exit</span>
          <span className="text-blue-400 font-semibold">Fast 2-Click Navigation</span>
        </div>
      </div>
    </div>
  );
}
