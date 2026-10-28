"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Globe } from "lucide-react";
import ZynScoreLogo from "./ZynScoreLogo";

interface SportLiveNavbarProps {
  activeTab?: string;
  onSelectTab?: (tab: string) => void;
  onOpenSearch?: () => void;
}

export default function SportLiveNavbar({
  activeTab = "scores",
  onSelectTab,
  onOpenSearch,
}: SportLiveNavbarProps) {
  const pathname = usePathname();
  const [active, setActive] = useState(activeTab);

  const navLinks = [
    { id: "scores", label: "Scores", href: "/scores" },
    { id: "leagues", label: "Leagues", href: "/leagues" },
    { id: "news", label: "News", href: "/news" },
    { id: "live", label: "Live Matches", href: "/live" },
    { id: "qna", label: "Q&A", href: "/faq" },
  ];

  const handleTabClick = (id: string) => {
    setActive(id);
    onSelectTab?.(id);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left Side: Brand Logo & Main Nav Links */}
        <div className="flex items-center gap-8 lg:gap-10">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-1 group">
            <ZynScoreLogo size="md" />
          </Link>

          {/* Navigation links with underline for active state */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => {
              const isCurrent =
                pathname === link.href ||
                (link.href === "/scores" && (pathname === "/" || pathname === "/scores")) ||
                (link.href === "/faq" && pathname === "/qna");
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => handleTabClick(link.id)}
                  className={`relative py-5 transition-colors ${
                    isCurrent
                      ? "text-black font-semibold"
                      : "text-neutral-500 hover:text-black"
                  }`}
                >
                  <span>{link.label}</span>
                  {isCurrent && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right Side: Search Input, Locale & Download App CTA */}
        <div className="flex items-center gap-3 sm:gap-4">
          
          {/* Search Box Input */}
          <div
            onClick={onOpenSearch}
            className="hidden sm:flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs text-neutral-400 hover:border-neutral-300 cursor-pointer w-48 md:w-60 transition-colors"
          >
            <Search className="h-3.5 w-3.5 text-neutral-400" />
            <span className="truncate">Search teams, leagues...</span>
            <kbd className="ml-auto hidden lg:inline-block rounded bg-white px-1.5 py-0.5 text-[10px] text-neutral-400 border border-neutral-200 font-mono">
              ⌘K
            </kbd>
          </div>

          {/* Language / Region indicator */}
          <button
            type="button"
            className="hidden md:flex items-center gap-1 text-xs font-semibold text-neutral-600 hover:text-black px-2 py-1.5 rounded-md hover:bg-neutral-100 transition-colors"
            title="Language: English"
          >
            <Globe className="h-3.5 w-3.5 text-neutral-500" />
            <span>EN</span>
          </button>

          {/* Sign In Link */}
          <Link
            href="/login"
            className="hidden sm:inline-flex items-center text-xs font-bold text-neutral-700 hover:text-black px-2.5 py-1.5 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            Sign In
          </Link>

          {/* Sign Up CTA Button */}
          <Link
            href="/signup"
            className="flex items-center gap-1.5 rounded-lg bg-black px-4 py-2 text-xs font-bold text-white transition-all hover:bg-neutral-800 shadow-sm"
          >
            <span>Sign Up</span>
          </Link>
        </div>

      </div>
    </header>
  );
}
