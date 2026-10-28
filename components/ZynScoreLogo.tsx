"use client";

interface ZynScoreLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  theme?: "light" | "dark";
}

export default function ZynScoreLogo({
  className = "",
  size = "md",
  showText = true,
  theme = "light",
}: ZynScoreLogoProps) {
  const iconSize =
    size === "sm" ? "h-7 w-7" : size === "lg" ? "h-10 w-10" : "h-8 w-8";
  const textSize =
    size === "sm" ? "text-xl" : size === "lg" ? "text-3xl" : "text-2xl";

  const isDark = theme === "dark";

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* High-Tech Geometric 'Z' Emblem with Live Telemetry Pulse */}
      <div
        className={`relative flex ${iconSize} shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 shadow-sm ${
          isDark
            ? "bg-white text-black shadow-white/10"
            : "bg-black text-white shadow-black/10"
        }`}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
        >
          {/* Geometric Angular 'Z' Path */}
          <path
            d="M7 8.5C7 7.67157 7.67157 7 8.5 7H23.5C24.3284 7 25 7.67157 25 8.5C25 9.02013 24.7303 9.50298 24.2869 9.7744L12.4418 17H23.5C24.3284 17 25 17.6716 25 18.5V23.5C25 24.3284 24.3284 25 23.5 25H8.5C7.67157 25 7 24.3284 7 23.5C7 22.9799 7.26972 22.497 7.71313 22.2256L19.5582 15H8.5C7.67157 15 7 14.3284 7 13.5V8.5Z"
            fill="currentColor"
          />
          {/* Precision Red Live Telemetry Dot */}
          <circle cx="23.5" cy="8.5" r="2.2" fill="#EF4444" />
        </svg>

        {/* Subtle Live Pulse Ring */}
        <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
        </span>
      </div>

      {/* Modern Typographic Wordmark */}
      {showText && (
        <span
          className={`font-heading ${textSize} font-black tracking-tight leading-none ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          ZYN<span className={isDark ? "text-neutral-400 font-semibold" : "text-neutral-600 font-semibold"}>SCORE</span>
        </span>
      )}
    </div>
  );
}
