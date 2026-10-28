"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DateFilterBarProps {
  selectedDate: string;
  onSelectDate: (date: string) => void;
  statusFilter: "all" | "live" | "finished" | "upcoming";
  onSelectStatus: (status: "all" | "live" | "finished" | "upcoming") => void;
  selectedSport: string;
  onSelectSport: (sport: string) => void;
  liveCount: number;
}

const dates = [
  { label: "Thu", day: "23", full: "2026-10-23" },
  { label: "Fri", day: "24", full: "2026-10-24" },
  { label: "Today", day: "25", full: "2026-10-25", isToday: true },
  { label: "Sun", day: "26", full: "2026-10-26" },
  { label: "Mon", day: "27", full: "2026-10-27" },
  { label: "Tue", day: "28", full: "2026-10-28" },
  { label: "Wed", day: "29", full: "2026-10-29" },
];

export default function DateFilterBar({
  selectedDate,
  onSelectDate,
  statusFilter,
  onSelectStatus,
  selectedSport,
  onSelectSport,
  liveCount,
}: DateFilterBarProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollDates = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const offset = direction === "left" ? -180 : 180;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const statusTabs: { id: "all" | "live" | "finished" | "upcoming"; label: string; badge?: number }[] = [
    { id: "all", label: "All Matches" },
    { id: "live", label: "Live", badge: liveCount },
    { id: "finished", label: "Finished" },
    { id: "upcoming", label: "Upcoming" },
  ];

  return (
    <div className="w-full border-b border-neutral-800 bg-black/95 backdrop-blur-sm sticky top-16 z-40">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          
          {/* Status Tabs - Black, White & Blue */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {statusTabs.map((tab) => {
              const isActive = statusFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onSelectStatus(tab.id)}
                  className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30"
                      : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                  }`}
                >
                  {tab.id === "live" && tab.badge && tab.badge > 0 && (
                    <span className="h-2 w-2 rounded-full bg-red-500 animate-live-pulse" />
                  )}
                  <span>{tab.label}</span>
                  {tab.badge !== undefined && tab.badge > 0 && (
                    <span className={`rounded px-1.5 py-0.2 text-[10px] font-mono ${
                      isActive ? "bg-blue-700 text-white font-bold" : "bg-neutral-800 text-neutral-300"
                    }`}>
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Date Scroller - Black, White & Blue */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollDates("left")}
              className="hidden sm:flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              aria-label="Previous dates"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div
              ref={scrollContainerRef}
              className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5"
            >
              {dates.map((d) => {
                const isSelected = selectedDate === d.full;
                return (
                  <button
                    key={d.full}
                    type="button"
                    onClick={() => onSelectDate(d.full)}
                    className={`flex min-w-[58px] flex-col items-center rounded-xl px-2.5 py-1 text-center transition-all ${
                      isSelected
                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 font-bold border border-blue-500"
                        : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-white border border-neutral-800"
                    }`}
                  >
                    <span className="text-[10px] font-medium tracking-wide uppercase opacity-80">
                      {d.label}
                    </span>
                    <span className="font-heading text-base font-bold leading-tight">
                      {d.day}
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => scrollDates("right")}
              className="hidden sm:flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              aria-label="Next dates"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
