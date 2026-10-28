"use client";

import { useState } from "react";
import SportLiveNavbar from "@/components/SportLiveNavbar";
import SportLiveHero from "@/components/SportLiveHero";
import FeaturedLiveMatches from "@/components/FeaturedLiveMatches";
import EditorialSection from "@/components/EditorialSection";
import MobileEcosystemBanner from "@/components/MobileEcosystemBanner";
import QnaSection from "@/components/QnaSection";
import SportLiveFooter from "@/components/SportLiveFooter";
import MatchDetailsDrawer from "@/components/MatchDetailsDrawer";
import SearchModal from "@/components/SearchModal";
import { Match, MATCHES_DATA } from "@/lib/sportsData";

// Featured El Clásico match details for drawer
const elClasicoMatch: Match = {
  id: "el-clasico",
  leagueId: "laliga",
  leagueName: "La Liga • Santiago Bernabéu",
  sport: "football",
  status: "live",
  minute: "78'",
  kickoffTime: "20:00",
  date: "2026-10-26",
  venue: "Santiago Bernabéu, Madrid",
  homeTeam: {
    id: "real-madrid",
    name: "Real Madrid",
    shortName: "RMA",
    crest: "/images/real_madrid.svg",
    score: 2,
  },
  awayTeam: {
    id: "barcelona",
    name: "Barcelona",
    shortName: "BAR",
    crest: "/images/barcelona.svg",
    score: 1,
  },
  stats: {
    possession: [54, 46],
    shotsOnTarget: [7, 4],
    totalShots: [16, 11],
    corners: [6, 3],
    fouls: [10, 12],
    yellowCards: [2, 3],
    expectedGoals: [2.14, 1.45],
  },
  events: [
    { minute: 32, type: "goal", team: "away", player: "R. Lewandowski", detail: "Header from corner" },
    { minute: 54, type: "goal", team: "home", player: "Vinícius Jr.", detail: "Fast break counter" },
    { minute: 72, type: "goal", team: "home", player: "J. Bellingham", detail: "Right-footed shot" },
  ],
  lineups: {
    homeFormation: "4-3-1-2",
    awayFormation: "4-3-3",
    homeStarting: [
      "1. T. Courtois (GK)",
      "2. D. Carvajal",
      "3. É. Militão",
      "22. A. Rüdiger",
      "23. F. Mendy",
      "15. F. Valverde",
      "14. A. Tchouaméni",
      "10. L. Modrić (C)",
      "5. J. Bellingham",
      "7. Vinícius Jr.",
      "11. Rodrygo",
    ],
    awayStarting: [
      "1. M. ter Stegen (GK)",
      "23. J. Koundé",
      "4. R. Araújo",
      "15. A. Christensen",
      "3. A. Balde",
      "21. F. de Jong",
      "8. Pedri",
      "6. Gavi",
      "27. L. Yamal",
      "9. R. Lewandowski",
      "11. Raphinha",
    ],
  },
};

export default function Home() {
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [favorites, setFavorites] = useState<string[]>(["m-1"]);

  const handleToggleFavorite = (e: React.MouseEvent, matchId: string) => {
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(matchId) ? prev.filter((id) => id !== matchId) : [...prev, matchId]
    );
  };

  const handleOpenFeaturedMatch = () => {
    setSelectedMatch(elClasicoMatch);
  };

  const handleSelectMatchCenter = (matchName: string) => {
    const found = MATCHES_DATA.find(
      (m) =>
        `${m.homeTeam.name} vs ${m.awayTeam.name}`.toLowerCase() === matchName.toLowerCase()
    );
    setSelectedMatch(found || elClasicoMatch);
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#FAFAFA] text-[#111827] font-body selection:bg-black selection:text-white">
      
      {/* 1. Top Navbar */}
      <SportLiveNavbar
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* 2. Hero Section: Headline + Featured Live El Clásico Card */}
      <SportLiveHero
        onOpenMatch={handleOpenFeaturedMatch}
        onExploreMatches={() => {
          const el = document.getElementById("featured-matches");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* 4. Main Two-Column Content: Featured Live Matches & Editorial & Analysis */}
      <main id="featured-matches" className="w-full py-6 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
            
            {/* Left Column (7 cols): Featured Live Matches */}
            <div className="lg:col-span-7 xl:col-span-7">
              <FeaturedLiveMatches
                onSelectMatchCenter={handleSelectMatchCenter}
              />
            </div>

            {/* Right Column (5 cols): Editorial & Analysis */}
            <div id="editorial" className="lg:col-span-5 xl:col-span-5">
              <EditorialSection />
            </div>

          </div>
        </div>
      </main>

      {/* 5. Promotional Mobile Ecosystem Banner */}
      <MobileEcosystemBanner />

      {/* 6. Questions & Answers (Q&A / FAQ) Section */}
      <QnaSection />

      {/* 7. Clean Minimalist Footer */}
      <SportLiveFooter />

      {/* 7. Interactive Slide-Over Match Details Panel */}
      <MatchDetailsDrawer
        match={selectedMatch}
        onClose={() => setSelectedMatch(null)}
        isFavorite={selectedMatch ? favorites.includes(selectedMatch.id) : false}
        onToggleFavorite={handleToggleFavorite}
      />

      {/* 8. Search Modal (⌘K) */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectMatch={(m) => setSelectedMatch(m)}
      />

    </div>
  );
}
