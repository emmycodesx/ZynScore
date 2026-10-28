"use client";

import { useState } from "react";
import { Bell, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export default function AlertBanner() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section className="w-full border-b border-neutral-800 bg-black py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 p-8 sm:p-12 shadow-xl">
          
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-400">
              <Bell className="h-3.5 w-3.5 text-blue-400" />
              <span>Campus Live Notifications</span>
            </div>

            <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              Follow your teams. <br className="hidden sm:inline" />
              <span className="text-blue-500">Get instant live alerts.</span>
            </h2>

            <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed">
              Never miss a kickoff, buzzer-beater, or crucial goal. Receive real-time push alerts and matchday summaries tailored to your faculty club.
            </p>

            {subscribed ? (
              <div className="mt-6 flex items-center gap-3 rounded-2xl border border-blue-500/40 bg-blue-500/10 p-4 text-white">
                <CheckCircle2 className="h-6 w-6 text-blue-400 shrink-0" />
                <div>
                  <h4 className="font-heading text-base font-bold text-white">You&apos;re on the broadcast list!</h4>
                  <p className="text-xs text-neutral-400">We&apos;ll send live alerts for your favorite campus fixtures directly to {email}.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row items-center gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your student email..."
                  required
                  className="h-12 w-full sm:flex-1 rounded-xl border border-neutral-800 bg-black px-4 text-sm text-white placeholder-neutral-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                />
                <button
                  type="submit"
                  className="flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-bold text-white shadow-md shadow-blue-600/30 hover:bg-blue-700 transition-colors"
                >
                  <span>Activate Alerts</span>
                  <ArrowRight className="h-4 w-4 text-white" />
                </button>
              </form>
            )}

            <div className="mt-4 flex items-center gap-2 text-xs text-neutral-500">
              <ShieldCheck className="h-4 w-4 text-blue-400" />
              <span>Zero spam. Free for university students & sports fans.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
