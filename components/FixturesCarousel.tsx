"use client";

import { useState } from "react";
import Image from "next/image";
import { Match } from "@/lib/sportsData";
import { Bell, BellRing, MapPin, Clock } from "lucide-react";

interface FixturesCarouselProps {
  fixtures: Match[];
}

export default function FixturesCarousel({ fixtures }: FixturesCarouselProps) {
  const [reminders, setReminders] = useState<Record<string, boolean>>({});

  const toggleReminder = (matchId: string) => {
    setReminders((prev) => ({
      ...prev,
      [matchId]: !prev[matchId],
    }));
  };

  const upcomingMatches = fixtures.filter((m) => m.status === "upcoming");
  const displayFixtures = upcomingMatches.length > 0 ? upcomingMatches : fixtures;

  return (
    <section id="fixtures" className="w-full border-b border-neutral-800 bg-black py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">
              Schedule & Broadcast Countdown
            </span>
            <h2 className="mt-1 font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              Upcoming Matchday Fixtures
            </h2>
          </div>
          <p className="text-xs text-neutral-400 max-w-sm">
            Set custom kickoff alarms and stay ahead of key collegiate tournament dates.
          </p>
        </div>

        {/* Fixtures Grid - Black, White & Blue */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {displayFixtures.map((match) => {
            const hasReminder = reminders[match.id];
            return (
              <div
                key={match.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-neutral-800 bg-neutral-900 p-5 transition-all hover:border-blue-500/40 hover:bg-neutral-850 hover:shadow-lg"
              >
                <div>
                  {/* Top Bar: League + Kickoff badge */}
                  <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                    <span className="font-heading text-xs font-bold uppercase tracking-wider text-neutral-400">
                      {match.leagueName}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded bg-blue-500/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-blue-400 border border-blue-500/20">
                      <Clock className="h-3 w-3 text-blue-400" />
                      <span>{match.kickoffTime}</span>
                    </span>
                  </div>

                  {/* Team vs Team Layout */}
                  <div className="py-5 space-y-3">
                    {/* Home Team */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-black p-1 border border-neutral-800 shadow-inner">
                          <Image
                            src={match.homeTeam.crest}
                            alt={match.homeTeam.name}
                            width={28}
                            height={28}
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <span className="font-heading text-base font-bold text-white">
                          {match.homeTeam.name}
                        </span>
                      </div>
                      <span className="text-xs text-neutral-400">Home</span>
                    </div>

                    <div className="flex items-center justify-center">
                      <span className="rounded-full bg-black px-2.5 py-0.5 text-[10px] font-mono text-neutral-400 border border-neutral-800">
                        VS
                      </span>
                    </div>

                    {/* Away Team */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-black p-1 border border-neutral-800 shadow-inner">
                          <Image
                            src={match.awayTeam.crest}
                            alt={match.awayTeam.name}
                            width={28}
                            height={28}
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <span className="font-heading text-base font-bold text-white">
                          {match.awayTeam.name}
                        </span>
                      </div>
                      <span className="text-xs text-neutral-400">Away</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="flex items-center justify-between border-t border-neutral-800 pt-3 text-xs">
                  <div className="flex items-center gap-1.5 text-neutral-400 max-w-[180px] truncate">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-blue-500" />
                    <span className="truncate">{match.venue}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleReminder(match.id)}
                    className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                      hasReminder
                        ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30 border border-blue-500"
                        : "border border-neutral-700 bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700"
                    }`}
                  >
                    {hasReminder ? (
                      <>
                        <BellRing className="h-3.5 w-3.5 text-white" />
                        <span>Alert Set</span>
                      </>
                    ) : (
                      <>
                        <Bell className="h-3.5 w-3.5 text-neutral-400" />
                        <span>Remind Me</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
