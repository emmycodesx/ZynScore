"use client";

import { Activity, Trophy, Star, Search } from "lucide-react";

interface MobileBottomNavProps {
  activeTab: "matches" | "standings" | "favorites";
  onSelectTab: (tab: "matches" | "standings" | "favorites") => void;
  onOpenSearch: () => void;
  hasLiveMatches?: boolean;
  favoritesCount?: number;
}

export default function MobileBottomNav({
  activeTab,
  onSelectTab,
  onOpenSearch,
  hasLiveMatches = true,
  favoritesCount = 0,
}: MobileBottomNavProps) {
  return (
    <nav
      aria-label="Mobile Navigation"
      className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t border-neutral-800 bg-black/95 px-2 backdrop-blur-md md:hidden"
    >
      {/* Tab 1: Matches */}
      <button
        type="button"
        onClick={() => onSelectTab("matches")}
        className={`relative flex min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-1 rounded-xl px-3 py-1 text-xs transition-colors ${
          activeTab === "matches"
            ? "font-bold text-blue-500"
            : "text-neutral-500 hover:text-white"
        }`}
      >
        <div className="relative">
          <Activity className="h-5 w-5" />
          {hasLiveMatches && (
            <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500 animate-live-pulse" />
          )}
        </div>
        <span className="text-[10px]">Matches</span>
      </button>

      {/* Tab 2: Standings */}
      <button
        type="button"
        onClick={() => onSelectTab("standings")}
        className={`flex min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-1 rounded-xl px-3 py-1 text-xs transition-colors ${
          activeTab === "standings"
            ? "font-bold text-blue-500"
            : "text-neutral-500 hover:text-white"
        }`}
      >
        <Trophy className="h-5 w-5" />
        <span className="text-[10px]">Standings</span>
      </button>

      {/* Tab 3: Favorites */}
      <button
        type="button"
        onClick={() => onSelectTab("favorites")}
        className={`relative flex min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-1 rounded-xl px-3 py-1 text-xs transition-colors ${
          activeTab === "favorites"
            ? "font-bold text-blue-500"
            : "text-neutral-500 hover:text-white"
        }`}
      >
        <Star className={`h-5 w-5 ${activeTab === "favorites" ? "fill-blue-500 text-blue-500" : ""}`} />
        <span className="text-[10px]">Favorites</span>
        {favoritesCount > 0 && (
          <span className="absolute top-1 right-2 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-blue-600 text-[9px] font-mono text-white font-bold">
            {favoritesCount}
          </span>
        )}
      </button>

      {/* Tab 4: Search Trigger */}
      <button
        type="button"
        onClick={onOpenSearch}
        className="flex min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-1 rounded-xl px-3 py-1 text-xs text-neutral-500 hover:text-white transition-colors"
      >
        <Search className="h-5 w-5" />
        <span className="text-[10px]">Search</span>
      </button>
    </nav>
  );
}
