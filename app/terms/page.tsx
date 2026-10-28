"use client";

import Link from "next/link";
import { Scale, AlertCircle, FileCheck, Ban, ShieldCheck, Terminal } from "lucide-react";
import SportLiveNavbar from "@/components/SportLiveNavbar";
import SportLiveFooter from "@/components/SportLiveFooter";

export default function TermsOfServicePage() {
  const clauses = [
    {
      icon: FileCheck,
      title: "1. Acceptance of Terms",
      text:
        "By accessing ZynScore, downloading the mobile applications, or connecting to our live telemetry APIs, you agree to be bound by these Terms of Service and all applicable sports broadcasting and digital regulations.",
    },
    {
      icon: AlertCircle,
      title: "2. Informational & Statistical Purpose Only",
      text:
        "ZynScore is an independent sports analytics and telemetry platform. We are NOT a sportsbook, bookmaker, or gambling operator. Any odds, line spreads, or match probabilities displayed on the platform are provided purely for informational and editorial context. We accept no liability for financial decisions made by users on external third-party wagering platforms.",
    },
    {
      icon: Scale,
      title: "3. Proprietary Intellectual Property",
      text:
        "All visual designs, telemetry widgets, match center algorithms, Expected Goals (xG) predictive formulations, and the ZynScore logo and brand marks are the exclusive intellectual property of the ZynScore Platform. Unauthorized duplication or trademark infringement is strictly prohibited.",
    },
    {
      icon: Ban,
      title: "4. Scraping & Automated Feed Restrictions",
      text:
        "Users may not scrape, mirror, or employ automated crawlers against our WebSocket streams or web endpoints without an authorized enterprise API license. Exceeding fair-use thresholds may result in instant IP throttling and permanent telemetry blacklisting.",
    },
    {
      icon: ShieldCheck,
      title: "5. Telemetry Accuracy & Service Availability",
      text:
        "While we aim for 99.99% uptime and sub-second accuracy, live sports events are subject to official league sensor interruptions, VAR reviews, and third-party stadium optical recalibrations. Data is provided on an 'as-is' and 'as-available' basis.",
    },
    {
      icon: Terminal,
      title: "6. Developer API Terms",
      text:
        "Developers utilizing our API keys must adhere to designated rate tiers, refrain from reselling raw telemetry packets to unauthorized third parties, and clearly attribute ZynScore as the source of live match statistics.",
    },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#FAFAFA] text-[#111827] font-body selection:bg-black selection:text-white">
      <SportLiveNavbar />

      <main className="w-full flex-1 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-8">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <span className="text-black font-semibold">Terms of Service</span>
          </nav>

          {/* Header */}
          <div className="border-b border-neutral-200 pb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-700">
              <Scale className="h-3.5 w-3.5 text-neutral-800" />
              <span>Platform Legal Terms</span>
            </div>

            <h1 className="mt-5 font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black leading-tight">
              ZynScore Terms of Service
            </h1>

            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              Please review these terms carefully before accessing ZynScore match centers, statistical feeds, or developer telemetry APIs.
            </p>

            <div className="mt-4 flex items-center gap-4 text-xs font-mono text-neutral-400">
              <span>Last Updated: October 2026</span>
              <span>•</span>
              <span>Version 3.1</span>
            </div>
          </div>

          {/* Terms Clauses List */}
          <div className="mt-10 space-y-8">
            {clauses.map((clause) => {
              const Icon = clause.icon;
              return (
                <div
                  key={clause.title}
                  className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100 text-black">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h2 className="font-heading text-lg sm:text-xl font-bold text-black">
                      {clause.title}
                    </h2>
                  </div>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-600">
                    {clause.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Legal Counsel Contact */}
          <div className="mt-12 rounded-2xl border border-neutral-300 bg-neutral-100/70 p-6 sm:p-8">
            <h3 className="font-heading text-base font-bold text-black">
              Legal Inquiries & Rights Clearance
            </h3>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-600">
              For trademark authorization, commercial licensing agreements, or terms clarification, contact our legal counsel at{" "}
              <a
                href="mailto:legal@zynscore.com"
                className="font-medium text-black underline underline-offset-4 hover:text-neutral-700"
              >
                legal@zynscore.com
              </a>
              .
            </p>
          </div>

        </div>
      </main>

      <SportLiveFooter />
    </div>
  );
}
