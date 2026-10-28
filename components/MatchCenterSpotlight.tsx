"use client";

import { useState } from "react";
import Image from "next/image";
import { Match } from "@/lib/sportsData";
import { Activity, Flame, Vote, ChevronRight, Volume2, VolumeX, Radio } from "lucide-react";

interface MatchCenterSpotlightProps {
  match: Match;
  onOpenMatchPreview: (match: Match) => void;
}

export default function MatchCenterSpotlight({
  match,
  onOpenMatchPreview,
}: MatchCenterSpotlightProps) {
  const [activeTab, setActiveTab] = useState<"momentum" | "events" | "telemetry">("momentum");
  const [userVote, setUserVote] = useState<"home" | "draw" | "away" | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Simulated live community prediction votes
  const baseVotes = { home: 184, draw: 56, away: 78 };
  const currentVotes = {
    home: baseVotes.home + (userVote === "home" ? 1 : 0),
    draw: baseVotes.draw + (userVote === "draw" ? 1 : 0),
    away: baseVotes.away + (userVote === "away" ? 1 : 0),
  };
  const totalVotes = currentVotes.home + currentVotes.draw + currentVotes.away;
  const homePct = Math.round((currentVotes.home / totalVotes) * 100);
  const drawPct = Math.round((currentVotes.draw / totalVotes) * 100);
  const awayPct = 100 - homePct - drawPct;

  // Goals scored in this match
  const homeGoals = match.events?.filter((e) => e.type === "goal" && e.team === "home") || [];
  const awayGoals = match.events?.filter((e) => e.type === "goal" && e.team === "away") || [];

  const possessionHome = match.stats?.possession[0] ?? 58;
  const possessionAway = match.stats?.possession[1] ?? 42;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-[#0E0E0E] shadow-2xl transition-all">
      {/* Top Matchday Header Strip */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800/80 bg-black/60 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2.5">
          <span className="flex items-center gap-1.5 rounded-full bg-red-500/10 px-2.5 py-0.5 text-[11px] font-bold text-red-400 border border-red-500/30 uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-live-pulse" />
            LIVE • {match.minute || "68'"}
          </span>
          <span className="hidden sm:inline text-xs text-neutral-400 font-medium">
            {match.leagueName}
          </span>
          <span className="hidden md:inline text-neutral-600">•</span>
          <span className="hidden md:inline text-xs font-mono text-neutral-400">
            {match.venue}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Live broadcast indicator */}
          <div className="flex items-center gap-1.5 rounded-md bg-neutral-900 px-2 py-0.5 text-[11px] font-mono text-neutral-300 border border-neutral-800">
            <Radio className="h-3 w-3 text-blue-500 animate-pulse" />
            <span>Campus Stream 1</span>
          </div>

          {/* Sound alert chime toggle */}
          <button
            type="button"
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`flex h-7 w-7 items-center justify-center rounded-md border transition-colors ${
              soundEnabled
                ? "border-blue-500/40 bg-blue-500/10 text-blue-400"
                : "border-neutral-800 bg-neutral-900 text-neutral-500"
            }`}
            title={soundEnabled ? "Goal Sound Alerts: Enabled" : "Goal Sound Alerts: Muted"}
            aria-label="Toggle match audio alert"
          >
            {soundEnabled ? <Volume2 className="h-3.5 w-3.5" /> : <VolumeX className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>

      {/* Main Confrontation Arena */}
      <div className="p-4 sm:p-6 lg:p-7">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-6">
          
          {/* Home Team */}
          <div className="flex flex-col items-center sm:items-end text-center sm:text-right">
            <div className="relative flex h-14 w-14 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-black border border-neutral-800 p-2.5 shadow-inner">
              <Image
                src={match.homeTeam.crest}
                alt={match.homeTeam.name}
                width={56}
                height={56}
                className="h-full w-full object-contain"
                priority
              />
            </div>
            <h3 className="mt-2.5 font-heading text-lg sm:text-2xl font-black uppercase tracking-tight text-white">
              {match.homeTeam.name}
            </h3>
            <span className="text-[11px] font-semibold text-blue-400">
              Faculty Seed #1 • Home
            </span>

            {/* Goalscorers list */}
            {homeGoals.length > 0 && (
              <div className="mt-2 hidden sm:flex flex-col items-end gap-0.5 text-[11px] text-neutral-400">
                {homeGoals.map((g, i) => (
                  <span key={i} className="flex items-center gap-1 font-mono">
                    <span>{g.player} {g.minute}&apos;</span>
                    <span className="text-white">⚽</span>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Central Scoreboard Display */}
          <div className="flex flex-col items-center px-2 sm:px-6">
            <div className="flex items-center gap-2 sm:gap-4 font-heading text-4xl sm:text-7xl font-black text-white tracking-tighter tabular-nums">
              <span className="min-w-[1.1ch] text-center">{match.homeTeam.score ?? 0}</span>
              <span className="text-neutral-600 text-3xl sm:text-5xl font-light">:</span>
              <span className="min-w-[1.1ch] text-center">{match.awayTeam.score ?? 0}</span>
            </div>

            <span className="mt-1 rounded-full bg-neutral-900 px-3 py-0.5 font-mono text-[11px] font-bold text-neutral-300 border border-neutral-800">
              2nd Half • 68:42
            </span>

            {/* Micro Live Ball Pulse */}
            <div className="mt-2 flex items-center gap-1.5 text-[10px] text-neutral-400">
              <Flame className="h-3 w-3 text-blue-400" />
              <span>High Intensity Match</span>
            </div>
          </div>

          {/* Away Team */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="relative flex h-14 w-14 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-black border border-neutral-800 p-2.5 shadow-inner">
              <Image
                src={match.awayTeam.crest}
                alt={match.awayTeam.name}
                width={56}
                height={56}
                className="h-full w-full object-contain"
                priority
              />
            </div>
            <h3 className="mt-2.5 font-heading text-lg sm:text-2xl font-black uppercase tracking-tight text-white">
              {match.awayTeam.name}
            </h3>
            <span className="text-[11px] font-semibold text-neutral-400">
              Faculty Seed #3 • Away
            </span>

            {/* Goalscorers list */}
            {awayGoals.length > 0 && (
              <div className="mt-2 hidden sm:flex flex-col items-start gap-0.5 text-[11px] text-neutral-400">
                {awayGoals.map((g, i) => (
                  <span key={i} className="flex items-center gap-1 font-mono">
                    <span className="text-white">⚽</span>
                    <span>{g.player} {g.minute}&apos;</span>
                  </span>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Tab Selector: Momentum Wave / Key Incidents / Match Telemetry */}
        <div className="mt-6 flex items-center justify-between border-t border-neutral-800/80 pt-4">
          <div className="flex items-center gap-1.5 rounded-lg bg-black/80 p-1 border border-neutral-800">
            <button
              type="button"
              onClick={() => setActiveTab("momentum")}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-semibold transition-all ${
                activeTab === "momentum"
                  ? "bg-blue-600 text-white font-bold shadow-sm"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Activity className="h-3.5 w-3.5" />
              <span>Pressure Wave</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("events")}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-semibold transition-all ${
                activeTab === "events"
                  ? "bg-blue-600 text-white font-bold shadow-sm"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Flame className="h-3.5 w-3.5" />
              <span>Timeline</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("telemetry")}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-semibold transition-all ${
                activeTab === "telemetry"
                  ? "bg-blue-600 text-white font-bold shadow-sm"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Vote className="h-3.5 w-3.5" />
              <span>Fan Predictor</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => onOpenMatchPreview(match)}
            className="hidden sm:flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>Full Lineups & Tactical Radar</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* TAB 1: SOFASCORE ATTACK MOMENTUM WAVEFORM */}
        {activeTab === "momentum" && (
          <div className="mt-4 rounded-xl border border-neutral-800/80 bg-black/60 p-4">
            <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
              <span className="font-semibold text-blue-400">↑ {match.homeTeam.name} Dominance</span>
              <span className="text-[11px] font-mono">Live Pressure Waveform</span>
              <span className="font-semibold text-neutral-400">↓ {match.awayTeam.name} Counter</span>
            </div>

            {/* SVG Momentum Chart */}
            <div className="relative h-20 w-full overflow-hidden rounded-lg bg-neutral-950/80 border border-neutral-800">
              <svg viewBox="0 0 600 100" preserveAspectRatio="none" className="h-full w-full">
                {/* Center Baseline */}
                <line x1="0" y1="50" x2="600" y2="50" stroke="#333333" strokeDasharray="3 3" strokeWidth="1" />
                
                {/* 15 min timeline grid markers */}
                {[100, 200, 300, 400, 500].map((x, i) => (
                  <line key={i} x1={x} y1="0" x2={x} y2="100" stroke="#222222" strokeWidth="1" />
                ))}

                {/* Home Attacking Peaks (Above Baseline - Blue) */}
                <path
                  d="M0 50 Q 50 15, 100 25 T 200 45 T 300 10 T 400 35 T 500 20 L 500 50 Z"
                  fill="rgba(37, 99, 235, 0.45)"
                  stroke="#2563EB"
                  strokeWidth="2"
                />

                {/* Away Attacking Counter (Below Baseline - Slate/Gray) */}
                <path
                  d="M100 50 Q 150 78, 200 50 T 350 82 T 450 65 L 450 50 Z"
                  fill="rgba(115, 115, 115, 0.35)"
                  stroke="#737373"
                  strokeWidth="1.5"
                />

                {/* Current minute cursor (at ~450px out of 600 = 68th minute) */}
                <line x1="450" y1="0" x2="450" y2="100" stroke="#EF4444" strokeWidth="1.5" />
                <circle cx="450" cy="28" r="4" fill="#EF4444" />
              </svg>

              {/* Minute timeline label indicators */}
              <div className="absolute bottom-1 left-0 right-0 flex justify-between px-3 text-[9px] font-mono text-neutral-500 pointer-events-none">
                <span>0&apos;</span>
                <span>15&apos;</span>
                <span>30&apos;</span>
                <span>HT 45&apos;</span>
                <span>60&apos;</span>
                <span className="text-red-400 font-bold">68&apos; (NOW)</span>
                <span>90&apos;</span>
              </div>
            </div>

            {/* Quick possession split bar */}
            <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-neutral-300">
              <span className="font-bold text-blue-400">{match.homeTeam.shortName} {possessionHome}%</span>
              <span className="text-neutral-500 font-sans">Real-time Ball Possession</span>
              <span className="font-bold text-neutral-400">{match.awayTeam.shortName} {possessionAway}%</span>
            </div>
            <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-neutral-950 flex">
              <div className="h-full bg-blue-600 rounded-l-full" style={{ width: `${possessionHome}%` }} />
              <div className="h-full bg-neutral-700 rounded-r-full" style={{ width: `${possessionAway}%` }} />
            </div>
          </div>
        )}

        {/* TAB 2: LIVE MATCH EVENTS CHRONOLOGY */}
        {activeTab === "events" && (
          <div className="mt-4 rounded-xl border border-neutral-800/80 bg-black/60 p-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
              Chronological Match Incidents
            </h4>
            <div className="space-y-2">
              {match.events && match.events.length > 0 ? (
                match.events.map((evt, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-lg border border-neutral-800/80 bg-neutral-900/60 px-3 py-2 text-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black border border-neutral-700 text-[11px]">
                        {evt.type === "goal" ? "⚽" : evt.type === "yellow_card" ? "🟨" : "🔄"}
                      </span>
                      <span className="font-bold text-white">{evt.player}</span>
                      {evt.detail && (
                        <span className="text-neutral-400 text-[11px]">({evt.detail})</span>
                      )}
                    </div>
                    <span className="font-mono font-bold text-blue-400">{evt.minute}&apos;</span>
                  </div>
                ))
              ) : (
                <div className="text-center text-xs text-neutral-500 py-3">No incidents recorded yet.</div>
              )}
            </div>
          </div>
        )}

        {/* TAB 3: COMMUNITY WIN PREDICTOR POLL */}
        {activeTab === "telemetry" && (
          <div className="mt-4 rounded-xl border border-neutral-800/80 bg-black/60 p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Fan Win Predictor Poll
              </span>
              <span className="text-[11px] font-mono text-neutral-400">
                {totalVotes.toLocaleString()} votes cast
              </span>
            </div>

            {/* Voting buttons */}
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setUserVote("home")}
                className={`flex flex-col items-center justify-center rounded-xl p-2.5 text-center transition-all border ${
                  userVote === "home"
                    ? "border-blue-500 bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30"
                    : "border-neutral-800 bg-neutral-900 text-neutral-300 hover:border-neutral-700 hover:text-white"
                }`}
              >
                <span className="text-[11px] font-medium truncate max-w-full">{match.homeTeam.shortName}</span>
                <span className="font-heading text-lg font-black">{homePct}%</span>
                <span className="text-[9px] uppercase opacity-70">Home Win</span>
              </button>

              <button
                type="button"
                onClick={() => setUserVote("draw")}
                className={`flex flex-col items-center justify-center rounded-xl p-2.5 text-center transition-all border ${
                  userVote === "draw"
                    ? "border-blue-500 bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30"
                    : "border-neutral-800 bg-neutral-900 text-neutral-300 hover:border-neutral-700 hover:text-white"
                }`}
              >
                <span className="text-[11px] font-medium">Draw</span>
                <span className="font-heading text-lg font-black">{drawPct}%</span>
                <span className="text-[9px] uppercase opacity-70">Tie</span>
              </button>

              <button
                type="button"
                onClick={() => setUserVote("away")}
                className={`flex flex-col items-center justify-center rounded-xl p-2.5 text-center transition-all border ${
                  userVote === "away"
                    ? "border-blue-500 bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30"
                    : "border-neutral-800 bg-neutral-900 text-neutral-300 hover:border-neutral-700 hover:text-white"
                }`}
              >
                <span className="text-[11px] font-medium truncate max-w-full">{match.awayTeam.shortName}</span>
                <span className="font-heading text-lg font-black">{awayPct}%</span>
                <span className="text-[9px] uppercase opacity-70">Away Win</span>
              </button>
            </div>

            {/* Voting distribution bar */}
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-neutral-950 flex gap-0.5">
              <div className="h-full bg-blue-600 transition-all duration-500" style={{ width: `${homePct}%` }} />
              <div className="h-full bg-neutral-600 transition-all duration-500" style={{ width: `${drawPct}%` }} />
              <div className="h-full bg-neutral-800 transition-all duration-500" style={{ width: `${awayPct}%` }} />
            </div>

            {userVote && (
              <p className="mt-2 text-center text-[11px] text-blue-400 font-medium">
                ✓ Vote recorded! Live consensus updates in real time.
              </p>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
