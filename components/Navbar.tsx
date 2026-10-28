"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Globe,
  User,
  Menu,
  X,
} from "lucide-react";

interface NavbarProps {
  activeSport?: string;
  onSelectSport?: (sport: string) => void;
  onOpenSearch?: () => void;
  liveMatchCount?: number;
}

const sports = [
  { id: "all", label: "All Sports", icon: "🏆" },
  { id: "football", label: "Football", icon: "⚽" },
  { id: "basketball", label: "Basketball", icon: "🏀" },
  { id: "volleyball", label: "Volleyball", icon: "🏐" },
];

const navLinks = [
  { label: "Matches", href: "#matches" },
  { label: "Teams", href: "#teams" },
  { label: "Fixtures", href: "#fixtures" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
  { label: "What's new", href: "/whats-new" },
];

export default function Navbar({
  activeSport = "all",
  onSelectSport,
  onOpenSearch,
  liveMatchCount = 3,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [language, setLanguage] = useState<"EN" | "ES" | "FR">("EN");

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", nextTheme);
      if (nextTheme === "light") {
        document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.add("dark");
      }
    }
  };

  const cycleLanguage = () => {
    const languages: ("EN" | "ES" | "FR")[] = ["EN", "ES", "FR"];
    const nextIdx = (languages.indexOf(language) + 1) % languages.length;
    setLanguage(languages[nextIdx]);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-black/95 backdrop-blur-md transition-colors duration-200">
      {/* Primary Top Bar */}
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">
        
        {/* Left: Brand Logo & Stacked Name with Blue accent */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/"
            className="flex items-center gap-2.5 transition-transform hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
            aria-label="ZynScore Home"
          >
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-900 border border-neutral-800 shadow-sm">
              <Image
                src="/images/image.png"
                alt="ZynScore logo"
                width={32}
                height={32}
                className="h-7 w-7 object-contain"
                priority
              />
            </div>
            <span className="flex flex-col font-heading text-xl font-bold tracking-tight">
              <span className="leading-none text-white tracking-wider">ZYN<span className="text-blue-500">SCORE</span></span>
              <span className="text-[10px] font-sans font-medium tracking-widest text-neutral-400 uppercase">Live Companion</span>
            </span>
          </Link>

          {/* LIVE NOW Counter Pill */}
          <div className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-neutral-900 border border-neutral-800 px-2.5 py-1 text-xs font-semibold text-white">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-live-pulse" />
            <span className="tracking-wide">{liveMatchCount} LIVE NOW</span>
          </div>
        </div>

        {/* Center: Sport Switcher Tabs (Desktop - Blue Active Accent) */}
        <nav aria-label="Sports Categories" className="hidden lg:flex items-center gap-1 rounded-xl bg-neutral-900 p-1 border border-neutral-800">
          {sports.map((sport) => {
            const isActive = activeSport === sport.id;
            return (
              <button
                key={sport.id}
                type="button"
                onClick={() => onSelectSport?.(sport.id)}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                  isActive
                    ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-800"
                }`}
              >
                <span>{sport.icon}</span>
                <span>{sport.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right: Actions, Search, Lang, Theme, Sign In */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Quick Search Button */}
          <button
            type="button"
            onClick={onOpenSearch}
            className="flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-xs text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Search matches and teams"
          >
            <Search className="h-3.5 w-3.5 text-blue-400" />
            <span className="hidden md:inline">Search matches...</span>
            <kbd className="hidden md:inline-block rounded bg-neutral-800 px-1.5 py-0.5 text-[10px] text-neutral-300 border border-neutral-700">⌘K</kbd>
          </button>

          {/* Language Toggle */}
          <button
            type="button"
            onClick={cycleLanguage}
            className="hidden sm:flex h-8 items-center gap-1 rounded-lg border border-neutral-800 bg-neutral-900 px-2 text-xs font-medium text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
            title="Switch Language"
            aria-label="Language selector"
          >
            <Globe className="h-3.5 w-3.5 text-blue-400" />
            <span>{language}</span>
          </button>

          {/* Get App / Sign In button - Royal Blue with White Text */}
          <Link
            href="/app"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-sm shadow-blue-600/30 hover:bg-blue-700 transition-all"
          >
            <User className="h-3.5 w-3.5" />
            <span>Sign In</span>
          </Link>

          {/* Mobile Menu Button (44px touch target) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 text-neutral-200 lg:hidden hover:bg-neutral-800 transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-neutral-800 bg-black px-4 py-4 lg:hidden shadow-xl">
          {/* Mobile Live Badge */}
          <div className="mb-4 flex items-center justify-between rounded-lg bg-neutral-900 p-2.5 border border-neutral-800">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-live-pulse" />
              <span className="text-xs font-bold text-white tracking-wide">{liveMatchCount} Matches In Progress</span>
            </div>
            <span className="text-[11px] font-mono text-neutral-400">Live Telemetry</span>
          </div>

          {/* Mobile Sport Selector Pills */}
          <div className="mb-4">
            <p className="mb-2 text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">Select Sport</p>
            <div className="grid grid-cols-2 gap-2">
              {sports.map((sport) => (
                <button
                  key={sport.id}
                  onClick={() => {
                    onSelectSport?.(sport.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex h-11 items-center gap-2 rounded-lg px-3 text-xs font-medium transition-colors ${
                    activeSport === sport.id
                      ? "bg-blue-600 text-white font-bold"
                      : "bg-neutral-900 text-neutral-300 hover:text-white"
                  }`}
                >
                  <span>{sport.icon}</span>
                  <span>{sport.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Nav Links */}
          <nav className="flex flex-col gap-1 border-t border-neutral-800 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-11 items-center rounded-lg px-3 text-sm font-medium text-neutral-300 hover:bg-neutral-900 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/app"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex h-11 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white shadow-sm hover:bg-blue-700"
            >
              Sign In / Download App
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
