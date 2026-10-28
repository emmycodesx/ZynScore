"use client";

import Link from "next/link";
import { ShieldCheck, Lock, Eye, Database, Bell, ArrowRight } from "lucide-react";
import SportLiveNavbar from "@/components/SportLiveNavbar";
import SportLiveFooter from "@/components/SportLiveFooter";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: Eye,
      title: "1. Information We Collect",
      content:
        "When you use ZynScore, we collect minimal data required to deliver real-time scores: anonymous device identifiers, push notification tokens (if you opt-in to goal alerts), starred teams and tournaments stored locally in your browser, and anonymized telemetry performance metrics (such as WebSocket latency and network round-trip times). We do not require account registration or store sensitive financial details.",
    },
    {
      icon: Database,
      title: "2. How We Utilize Collected Information",
      content:
        "Your data is used exclusively to: (a) route real-time match events and buzzer-beater push notifications to your device via Apple APNs or Google FCM; (b) remember your pinned sports and favorite clubs; and (c) optimize our global edge server routing to ensure sub-second score delivery in your region.",
    },
    {
      icon: Lock,
      title: "3. No Commercial Sale of Personal Information",
      content:
        "ZynScore maintains a strict zero-resale policy. We do not sell, rent, or trade your personal information, notification tokens, or usage patterns to third-party advertising networks, data brokers, or commercial sports gambling platforms.",
    },
    {
      icon: Bell,
      title: "4. Push Notifications & Local Storage",
      content:
        "You retain absolute control over push notifications. You can toggle match kickoff, halftime, goal, or red-card notifications on or off at any moment in your browser or device settings. Starred matches and theme settings (dark/light mode) are stored locally in your browser's localStorage.",
    },
    {
      icon: ShieldCheck,
      title: "5. Security & Edge Encryption",
      content:
        "All telemetry communication between your browser and ZynScore is encrypted via Transport Layer Security (TLS 1.3). Our distributed edge nodes are hosted on SOC2 Type II and ISO 27001 certified infrastructure.",
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
            <span className="text-black font-semibold">Privacy Policy</span>
          </nav>

          {/* Header */}
          <div className="border-b border-neutral-200 pb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-700">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              <span>Data Protection & Privacy</span>
            </div>

            <h1 className="mt-5 font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black leading-tight">
              ZynScore Privacy Policy
            </h1>

            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              Your privacy is fundamental to our engineering ethics. We believe in transparent telemetry, minimal data footprints, and complete user sovereignty.
            </p>

            <div className="mt-4 flex items-center gap-4 text-xs font-mono text-neutral-400">
              <span>Effective: October 2026</span>
              <span>•</span>
              <span>GDPR & CCPA Compliant</span>
            </div>
          </div>

          {/* Policy Sections */}
          <div className="mt-10 space-y-8">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <div
                  key={section.title}
                  className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100 text-black">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h2 className="font-heading text-lg sm:text-xl font-bold text-black">
                      {section.title}
                    </h2>
                  </div>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-600">
                    {section.content}
                  </p>
                </div>
              );
            })}
          </div>

          {/* DPO Contact Info */}
          <div className="mt-12 rounded-2xl border border-neutral-300 bg-neutral-100/70 p-6 sm:p-8">
            <h3 className="font-heading text-base font-bold text-black">
              Data Protection Officer Contact
            </h3>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-600">
              If you have any questions regarding how your data is handled or wish to execute your data deletion rights under GDPR/CCPA, please email our Data Protection Officer directly at{" "}
              <a
                href="mailto:privacy@zynscore.com"
                className="font-medium text-black underline underline-offset-4 hover:text-neutral-700"
              >
                privacy@zynscore.com
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
