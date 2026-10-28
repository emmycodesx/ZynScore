"use client";
import "@/app/globals.css";

export default function AnimatedHeroPitch() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <svg
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        className="pitch-svg absolute right-[-15%] top-1/2 w-[1000px] max-w-none -translate-y-1/2 md:right-[-5%] md:w-[1200px]"
        fill="none"
      >
        {/* Main circle */}
        <circle
          className="pitch-draw pitch-circle"
          pathLength="1"
          cx="720"
          cy="400"
          r="220"
        />

        {/* Vertical axis */}
        <path
          className="pitch-draw pitch-line pitch-delay-1"
          pathLength="1"
          d="M720 -40V840"
        />

        {/* Horizontal axis */}
        <path
          className="pitch-draw pitch-line pitch-delay-2"
          pathLength="1"
          d="M720 400h520"
        />

        {/* Right-side technical frame */}
        <path
          className="pitch-draw pitch-line pitch-delay-3"
          pathLength="1"
          d="M1040 130v540M1200 130H1040M1200 670H1040"
        />
      </svg>
    </div>
  );
}
