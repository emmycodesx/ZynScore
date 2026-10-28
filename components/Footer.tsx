"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white overflow-hidden border-t border-neutral-900">
      
      {/* 1. TOP HERO: Massive Knockout Masked Typography (zynscore) */}
      <div className="relative w-full overflow-hidden text-center select-none pt-12 sm:pt-16 pb-10 sm:pb-14 border-b border-neutral-900/80 px-2">
        {/* Subtle Ambient Backlight Glow for maximum vibrance */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none -z-0">
          <div className="w-5/6 h-36 sm:h-52 bg-gradient-to-r from-blue-500/15 via-purple-500/20 to-emerald-500/15 blur-3xl rounded-full" />
        </div>

        <span
          className="relative z-10 block font-heading font-black tracking-[-0.03em] lowercase leading-[0.8] text-[21vw] sm:text-[20.5vw] lg:text-[20vw] transition-transform duration-700 hover:scale-[1.01]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.38) 0%, rgba(200, 220, 255, 0.22) 50%, rgba(255, 255, 255, 0.32) 100%), url('/images/basketball.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "46% 36%",
            backgroundRepeat: "no-repeat",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.45)",
            filter:
              "brightness(1.22) contrast(1.08) saturate(1.15) drop-shadow(0 4px 24px rgba(0,0,0,0.85))",
            display: "block",
            width: "100%",
          }}
        >
          zynscore
        </span>
      </div>

      {/* 2. MIDDLE & BOTTOM CONTAINER: Links, Socials & Baseline Copyright */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 pb-10">
        
        {/* Navigation Grid: Brand Statement & Columns */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8 items-start">
          
          {/* Left Column: Description & Social Icons */}
          <div className="md:col-span-6 lg:col-span-6 flex flex-col items-start">
            <p className="text-sm sm:text-base leading-relaxed text-neutral-400 max-w-md font-normal">
              Your world of sports, all in one place. Stay updated with the latest news, features, and everything happening in sports.
            </p>

            {/* Social Icons Row */}
            <div className="mt-8 flex items-center gap-6 text-neutral-400">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-white"
                aria-label="Instagram"
              >
                <svg
                  className="h-5 w-5 fill-none stroke-current"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-white"
                aria-label="Facebook"
              >
                <svg
                  className="h-5 w-5 fill-none stroke-current"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-white"
                aria-label="YouTube"
              >
                <svg
                  className="h-5 w-5 fill-none stroke-current"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
                </svg>
              </a>

              {/* X (formerly Twitter) */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-white"
                aria-label="X (Twitter)"
              >
                <svg
                  className="h-4 w-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Area: Explore & Company Columns */}
          <div className="md:col-span-6 lg:col-span-6 grid grid-cols-2 gap-8 md:pl-12 lg:pl-20">
            
            {/* EXPLORE Column */}
            <div>
              <h4 className="font-heading text-xs font-black uppercase tracking-widest text-white mb-5">
                EXPLORE
              </h4>
              <ul className="space-y-3.5 text-xs sm:text-sm">
                <li>
                  <Link
                    href="/news"
                    className="text-neutral-400 transition-colors hover:text-white"
                  >
                    What&apos;s New
                  </Link>
                </li>
                <li>
                  <Link
                    href="/scores"
                    className="text-neutral-400 transition-colors hover:text-white"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-neutral-400 transition-colors hover:text-white"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    className="text-neutral-400 transition-colors hover:text-white"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* COMPANY Column */}
            <div>
              <h4 className="font-heading text-xs font-black uppercase tracking-widest text-white mb-5">
                COMPANY
              </h4>
              <ul className="space-y-3.5 text-xs sm:text-sm">
                <li>
                  <Link
                    href="/privacy"
                    className="text-neutral-400 transition-colors hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-neutral-400 transition-colors hover:text-white"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-neutral-400 transition-colors hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-neutral-400 transition-colors hover:text-white"
                  >
                    Donate
                  </Link>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* 3. BASELINE: Divider & Copyright Row */}
        <div className="mt-14 pt-8 border-t border-neutral-900/90 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500 font-normal">
          <span>© 2026 ZynScore | All rights reserved.</span>
          <span>Built for the love of sports.</span>
        </div>

      </div>

    </footer>
  );
}
