"use client";

import Image from "next/image";
import { TEAMS_DATA } from "@/lib/sportsData";
import { Calendar, ArrowRight } from "lucide-react";

interface TeamsSectionProps {
  onSelectTeam?: (teamId: string) => void;
}

const partnerLogos = [
  { name: "Bowen University", logo: "/brandlogo/bowen.png" },
  { name: "Bowen Sports", logo: "/brandlogo/bowensport.png" },
  { name: "BAES", logo: "/brandlogo/baes.png" },
  { name: "NACOSBOWEN", logo: "/brandlogo/nacos.png" },
  { name: "BAMS", logo: "/brandlogo/bams.png" },
];

export default function TeamsSection({ onSelectTeam }: TeamsSectionProps) {
  return (
    <section id="teams" className="w-full border-b border-neutral-800 bg-black py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Partner Logos Strip - Monochromatic */}
        <div className="mb-14 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-neutral-400 shrink-0">
              Official University Tournament Partners:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              {partnerLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex items-center gap-2 opacity-70 transition-all hover:opacity-100 hover:scale-105"
                  title={logo.name}
                >
                  <div className="relative h-9 w-9">
                    <Image
                      src={logo.logo}
                      alt={logo.name}
                      width={36}
                      height={36}
                      className="h-full w-full object-contain filter grayscale"
                    />
                  </div>
                  <span className="text-xs font-medium text-neutral-300 hidden md:inline">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">
              Collegiate Power Rankings
            </span>
            <h2 className="mt-1 font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              Faculty Teams & Current Form
            </h2>
          </div>
          <p className="text-xs text-neutral-400 max-w-sm">
            Live standings, last-5 form trajectories, and scheduled fixtures across all university faculties.
          </p>
        </div>

        {/* Teams Grid - Black, White & Blue */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TEAMS_DATA.map((team) => (
            <div
              key={team.id}
              onClick={() => onSelectTeam?.(team.id)}
              className="group relative flex flex-col justify-between rounded-2xl border border-neutral-800 bg-neutral-900 p-5 transition-all duration-200 hover:border-blue-500/40 hover:bg-neutral-850 hover:shadow-lg cursor-pointer"
            >
              <div>
                {/* Team Top Row */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-black border border-neutral-800 p-2 shadow-inner">
                      <Image
                        src={team.crest}
                        alt={team.name}
                        width={36}
                        height={36}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                        {team.name}
                      </h3>
                      <span className="text-xs text-neutral-400">{team.league}</span>
                    </div>
                  </div>

                  <span className={`rounded-lg px-2.5 py-1 font-heading text-xs font-bold ${
                    team.rank === 1
                      ? "bg-blue-600 text-white border border-blue-500 shadow-sm shadow-blue-600/30"
                      : "bg-black text-white border border-neutral-700"
                  }`}>
                    #{team.rank}
                  </span>
                </div>

                {/* Form Dots: Win (White), Draw (Gray), Loss (Black/Border) */}
                <div className="mt-4 flex items-center justify-between border-t border-neutral-800 pt-3">
                  <span className="text-xs font-medium text-neutral-400">Last 5 Form:</span>
                  <div className="flex items-center gap-1.5" aria-label={`Form: ${team.form.join(", ")}`}>
                    {team.form.map((res, i) => (
                      <span
                        key={i}
                        className={`flex h-5 w-5 items-center justify-center rounded text-[10px] font-extrabold ${
                          res === "W"
                            ? "bg-white text-black font-black"
                            : res === "D"
                            ? "bg-neutral-600 text-white"
                            : "bg-neutral-950 border border-neutral-700 text-neutral-400"
                        }`}
                        title={res === "W" ? "Win" : res === "D" ? "Draw" : "Loss"}
                      >
                        {res}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Team Record Numbers */}
                <div className="mt-3 grid grid-cols-4 gap-2 rounded-xl bg-black p-2.5 text-center text-xs border border-neutral-800">
                  <div>
                    <span className="block text-[10px] uppercase text-neutral-500">P</span>
                    <span className="font-mono font-bold text-white">{team.stats.played}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-neutral-500">W</span>
                    <span className="font-mono font-bold text-white">{team.stats.won}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-neutral-500">GD</span>
                    <span className="font-mono font-bold text-neutral-300">+{team.stats.gd}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-neutral-500">PTS</span>
                    <span className="font-mono font-bold text-white">{team.stats.points}</span>
                  </div>
                </div>
              </div>

              {/* Next Fixture Row */}
              <div className="mt-4 flex items-center justify-between border-t border-neutral-800 pt-3 text-xs">
                <div className="flex items-center gap-1.5 text-neutral-400">
                  <Calendar className="h-3.5 w-3.5 text-blue-500" />
                  <span>{team.nextMatch}</span>
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-neutral-500 transition-transform group-hover:translate-x-1 group-hover:text-blue-400" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
