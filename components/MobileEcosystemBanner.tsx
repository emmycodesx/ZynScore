"use client";

import { Bell, Smartphone } from "lucide-react";

import ZynScoreLogo from "./ZynScoreLogo";

export default function MobileEcosystemBanner() {
  return (
    <section id="mobile-app" className="w-full py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-[#0B0F19] p-8 sm:p-12 lg:p-14 text-white shadow-2xl">
          
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              {/* Title */}
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                Never miss a goal. Get real-time push alerts.
              </h2>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-400 max-w-xl">
                Download the ZynScore app for iOS and Android to customize match notifications, track live odds, and read insider editorial pieces wherever you go.
              </p>

              {/* Download Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {/* App Store */}
                <button
                  type="button"
                  className="flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-xs font-bold text-black transition-all hover:bg-neutral-200 shadow-sm"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 1.01-2.87-.9.04-1.99.6-2.64 1.35-.58.65-1.09 1.71-1.01 2.76 1.01.08 2.02-.49 2.64-1.24z"/>
                  </svg>
                  <div className="text-left">
                    <span className="block text-[9px] font-normal leading-none opacity-70">Download on the</span>
                    <span className="text-xs font-bold leading-tight">App Store</span>
                  </div>
                </button>

                {/* Google Play */}
                <button
                  type="button"
                  className="flex items-center gap-3 rounded-xl border border-neutral-700 bg-neutral-900 px-5 py-3 text-xs font-bold text-white transition-all hover:bg-neutral-800 shadow-sm"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.03 2.03 0 0 1-.61-.924V2.738c.15-.357.367-.674.609-.924zm11.238 11.24l2.122 2.122-12.02 6.94 9.898-9.062zm0-2.108L4.949 1.884l12.02 6.94-2.122 2.122zm1.092 1.054l3.155 1.822c.983.568.983 1.492 0 2.06l-3.155 1.822-2.164-2.164 2.164-2.164z"/>
                  </svg>
                  <div className="text-left">
                    <span className="block text-[9px] font-normal leading-none text-neutral-400">GET IT ON</span>
                    <span className="text-xs font-bold leading-tight">Google Play</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Phone Mockup Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-sm rounded-2xl border border-neutral-800 bg-[#111827] p-5 shadow-2xl backdrop-blur-sm">
                
                {/* Phone Header */}
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                  <ZynScoreLogo size="sm" theme="dark" />
                  <span className="h-2 w-2 rounded-full bg-red-500 animate-live-pulse" />
                </div>

                {/* Simulated Push Notifications */}
                <div className="mt-3.5 space-y-2.5">
                  {/* Notification 1 */}
                  <div className="rounded-xl border border-neutral-700/60 bg-neutral-800/60 p-3 shadow-inner">
                    <div className="flex items-center justify-between text-[11px] text-neutral-400">
                      <span className="font-semibold text-emerald-400">Goal Alert • 82&apos;</span>
                      <span className="font-mono text-[10px]">Just Now</span>
                    </div>
                    <div className="mt-1 font-heading text-sm font-bold text-white">
                      Real Madrid 2 - 1 Barcelona
                    </div>
                  </div>

                  {/* Notification 2 */}
                  <div className="rounded-xl border border-neutral-700/60 bg-neutral-800/60 p-3 shadow-inner">
                    <div className="flex items-center justify-between text-[11px] text-neutral-400">
                      <span className="font-semibold text-neutral-300">Full Time</span>
                      <span className="font-mono text-[10px]">12m ago</span>
                    </div>
                    <div className="mt-1 font-heading text-sm font-bold text-white">
                      Arsenal 2 - 1 Bayern Munich
                    </div>
                  </div>
                </div>

                {/* Bottom link inside mockup */}
                <div className="mt-4 text-center">
                  <span className="text-[11px] font-mono text-neutral-500">
                    Tap to open live match center
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
