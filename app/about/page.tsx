"use client";

import Link from "next/link";
import Image from "next/image";
import { Activity, ShieldCheck, Zap, Globe, Cpu, Award, ChevronRight, ArrowRight } from "lucide-react";
import SportLiveNavbar from "@/components/SportLiveNavbar";
import SportLiveFooter from "@/components/SportLiveFooter";

export default function AboutPage() {
  const pillars = [
    {
      icon: Zap,
      title: "Sub-Second Telemetry",
      description:
        "Direct WebSocket integration with stadium tracking sensors and official on-court optical hardware, delivering live event data in under 300ms—faster than standard TV broadcasts.",
    },
    {
      icon: Cpu,
      title: "Predictive Analytics & xG",
      description:
        "Proprietary mathematical models computing live Expected Goals (xG), shot quality maps, true shooting percentages, and win probability matrices updated on every play.",
    },
    {
      icon: Globe,
      title: "Global Multi-Sport Depth",
      description:
        "Comprehensive live tracking across 40+ international leagues spanning European football, the NBA, ATP/WTA tennis, NCAA, and continental tournaments.",
    },
    {
      icon: ShieldCheck,
      title: "Data Integrity & Independence",
      description:
        "Zero influence from commercial sportsbooks or betting syndicates. Our editorial analysis and statistical telemetry are unbiased, independent, and verified.",
    },
  ];

  const stats = [
    { value: "< 280ms", label: "Average Telemetry Latency" },
    { value: "40+", label: "Elite Leagues Covered" },
    { value: "99.99%", label: "Live System Uptime" },
    { value: "50M+", label: "Monthly Live Events Processed" },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#FAFAFA] text-[#111827] font-body selection:bg-black selection:text-white">
      <SportLiveNavbar />

      <main className="w-full flex-1 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-8">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <span className="text-black font-semibold">About Us</span>
          </nav>

          {/* Hero Section */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-700">
              <Activity className="h-3.5 w-3.5 text-red-500" />
              <span>About ZynScore</span>
            </div>

            <h1 className="mt-5 font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-black leading-tight">
              Architecting the Future of Real-Time Sports Intelligence.
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-neutral-600">
              ZynScore was founded to eliminate the latency between live stadium action and the digital fan experience. We combine court-level optical tracking, sub-second telemetry streams, and deep tactical analytics into a singular, high-precision platform.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm text-center sm:text-left"
              >
                <div className="font-heading text-3xl sm:text-4xl font-extrabold text-black font-mono">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs font-medium text-neutral-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Visual Showcase Card */}
          <div className="mt-12 relative overflow-hidden rounded-3xl border border-neutral-800 bg-[#0B0F19] text-white p-8 sm:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
                  Engineering Philosophy
                </span>
                <h2 className="mt-3 font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-snug">
                  Milliseconds matter when champions are crowned.
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-300">
                  Whether it is an 89th-minute curling strike in El Clásico or a fourth-quarter buzzer beater in the NBA Finals, our distributed edge infrastructure ingests official stadium feeds, synthesizes tactical events, and broadcasts instantaneous telemetry to millions worldwide.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="/#scores"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-black hover:bg-neutral-200 transition-colors"
                  >
                    <span>View Live Scores</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/api-docs"
                    className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900 px-5 py-2.5 text-xs font-bold text-white hover:bg-neutral-800 transition-colors"
                  >
                    <span>Explore Telemetry API</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-64 sm:h-72 w-full overflow-hidden rounded-2xl border border-neutral-700/60 bg-neutral-900">
                <Image
                  src="/images/real_lebron_dunk.jpg"
                  alt="ZynScore Live Telemetry in Action"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-center opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-red-400">
                    Live Optical Sensor Sync
                  </span>
                  <div className="text-sm font-heading font-bold text-white">
                    Synchronized across 12,000 global edge nodes
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="mt-16">
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-black">
              The Four Pillars of ZynScore
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm transition-all hover:border-neutral-300 hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-black">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-heading text-lg font-bold text-black">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </main>

      <SportLiveFooter />
    </div>
  );
}
