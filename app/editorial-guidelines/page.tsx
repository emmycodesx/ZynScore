"use client";

import Link from "next/link";
import { BookOpen, CheckCircle2, ShieldAlert, Scale, RefreshCw, FileText } from "lucide-react";
import SportLiveNavbar from "@/components/SportLiveNavbar";
import SportLiveFooter from "@/components/SportLiveFooter";

export default function EditorialGuidelinesPage() {
  const guidelines = [
    {
      icon: CheckCircle2,
      title: "Data Sourcing & Direct Telemetry Verification",
      description:
        "Every match statistic, player coordinate, shot speed, and live event published on ZynScore is validated against official league optical systems and calibrated sensor streams. We do not aggregate unverified social media claims or unconfirmed rumors.",
    },
    {
      icon: Scale,
      title: "Statistical Impartiality & Objective Commentary",
      description:
        "Our tactical analysis is rooted strictly in mathematical models, film study, and objective match data. Analysts are prohibited from letting club fandom, commercial sponsorships, or regional biases influence match evaluations or player ratings.",
    },
    {
      icon: FileText,
      title: "Transparency in Analytical Formulations",
      description:
        "When referencing advanced metrics such as Expected Goals (xG), Possession Value, True Shooting Percentage (TS%), or Court Defensive Ratings, we make the methodology transparent so fans understand the contextual variables behind the numbers.",
    },
    {
      icon: RefreshCw,
      title: "Rapid Corrections & Transparent Audit Trails",
      description:
        "Sports telemetry moves at millisecond speeds. When official league scoring adjustments occur (e.g., deflection accreditation, assist revisions, or VAR overturned goals), we update statistics instantly and note significant editorial revisions with transparent timestamps.",
    },
    {
      icon: ShieldAlert,
      title: "Commercial Independence & Betting Separation",
      description:
        "ZynScore maintains strict church-and-state separation between statistical reporting and sports gambling. We do not provide financial gambling advice, nor do bookmakers or commercial sponsors dictate our match center telemetry or editorial rankings.",
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
            <span className="text-black font-semibold">Editorial Guidelines</span>
          </nav>

          {/* Header */}
          <div className="border-b border-neutral-200 pb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-700">
              <BookOpen className="h-3.5 w-3.5 text-blue-600" />
              <span>Editorial Integrity & Standards</span>
            </div>

            <h1 className="mt-5 font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black leading-tight">
              ZynScore Editorial & Data Guidelines
            </h1>

            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              Our code of ethics, statistical verification standards, and editorial policies governing every article, match breakdown, and live telemetry metric.
            </p>

            <div className="mt-4 flex items-center gap-4 text-xs font-mono text-neutral-400">
              <span>Last Revised: October 2026</span>
              <span>•</span>
              <span>Version 2.4</span>
            </div>
          </div>

          {/* Core Guidelines List */}
          <div className="mt-10 space-y-8">
            {guidelines.map((g, index) => {
              const Icon = g.icon;
              return (
                <div
                  key={g.title}
                  className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm transition-all hover:border-neutral-300"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100 font-mono text-xs font-bold text-black">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-heading text-lg sm:text-xl font-bold text-black">
                      {g.title}
                    </h2>
                  </div>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-600 pl-11">
                    {g.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Feedback & Corrections Callout */}
          <div className="mt-12 rounded-2xl border border-neutral-300 bg-neutral-100/70 p-6 sm:p-8">
            <h3 className="font-heading text-base font-bold text-black">
              Questions or Correction Inquiries?
            </h3>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-600">
              If you detect a statistical discrepancy or factual inaccuracy in any ZynScore editorial piece or match record, our senior standards desk is reachable at{" "}
              <a
                href="mailto:editorial@zynscore.com"
                className="font-medium text-black underline underline-offset-4 hover:text-neutral-700"
              >
                editorial@zynscore.com
              </a>
              . All verified corrections are published promptly with clear revision notices.
            </p>
          </div>

        </div>
      </main>

      <SportLiveFooter />
    </div>
  );
}
