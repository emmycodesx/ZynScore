"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, MessageSquare, Send, CheckCircle2, ShieldAlert, Clock, Sparkles } from "lucide-react";
import SportLiveNavbar from "@/components/SportLiveNavbar";
import SportLiveFooter from "@/components/SportLiveFooter";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const contactChannels = [
    {
      title: "Editorial & News Desk",
      email: "editorial@zynscore.com",
      description: "For sports analysis pitches, press releases, or statistical verification queries.",
    },
    {
      title: "Telemetry & API Partnerships",
      email: "api@zynscore.com",
      description: "For developer access, enterprise data pipelines, or high-volume WebSocket integration.",
    },
    {
      title: "Fan & Mobile Support",
      email: "support@zynscore.com",
      description: "For questions about the mobile app, notifications, or general troubleshooting.",
    },
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
            <span className="text-black font-semibold">Contact</span>
          </nav>

          {/* Header */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-700">
              <Mail className="h-3.5 w-3.5 text-black" />
              <span>Direct Support & Inquiries</span>
            </div>

            <h1 className="mt-5 font-heading text-4xl sm:text-5xl font-black tracking-tight text-black leading-tight">
              Get in Touch with ZynScore.
            </h1>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-neutral-600">
              Have feedback on our match center, want to report a score discrepancy, or explore API partnerships? Send us a message below.
            </p>
          </div>

          {/* Form & Channels Grid */}
          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
            
            {/* Left: Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-10 shadow-sm">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <CheckCircle2 className="h-7 w-7" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-black">
                      Message Dispatched Successfully
                    </h2>
                    <p className="text-sm text-neutral-600 max-w-md mx-auto">
                      Thank you for contacting ZynScore. A member of our support team will review your inquiry and follow up at{" "}
                      <span className="font-bold text-black">{formData.email}</span> within 2 to 4 business hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", subject: "general", message: "" });
                      }}
                      className="mt-4 inline-flex rounded-xl bg-black px-6 py-2.5 text-xs font-bold text-white hover:bg-neutral-800 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Alex Morgan"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-xl border border-neutral-200 bg-neutral-50/50 px-4 py-3 text-sm text-black placeholder:text-neutral-400 focus:border-black focus:bg-white focus:outline-none focus:ring-1 focus:ring-black"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. alex@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-xl border border-neutral-200 bg-neutral-50/50 px-4 py-3 text-sm text-black placeholder:text-neutral-400 focus:border-black focus:bg-white focus:outline-none focus:ring-1 focus:ring-black"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                        Inquiry Topic
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50/50 px-4 py-3 text-sm text-black focus:border-black focus:bg-white focus:outline-none focus:ring-1 focus:ring-black"
                      >
                        <option value="general">General Inquiry or Feedback</option>
                        <option value="telemetry">Live Score / Telemetry Discrepancy</option>
                        <option value="api">Developer API & Enterprise Integration</option>
                        <option value="editorial">Editorial Pitch or Correction</option>
                        <option value="press">Media / Press Relations</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                        Message Details
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Please include relevant match dates, teams, or technical questions..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50/50 p-4 text-sm text-black placeholder:text-neutral-400 focus:border-black focus:bg-white focus:outline-none focus:ring-1 focus:ring-black"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-black py-3.5 text-xs font-bold text-white hover:bg-neutral-800 transition-colors shadow-sm"
                    >
                      <Send className="h-4 w-4" />
                      <span>Transmit Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right: Direct Channels & Status (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Telemetry Status Card */}
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span className="font-heading text-xs font-bold uppercase tracking-wider text-emerald-800">
                    Live Telemetry Network Status
                  </span>
                </div>
                <div className="mt-2 text-sm font-semibold text-emerald-950">
                  All Systems Operational • Edge Latency 242ms
                </div>
                <div className="mt-1 text-xs text-emerald-700">
                  Incident free for 1,480+ consecutive match hours.
                </div>
              </div>

              {/* Channels List */}
              <div className="space-y-4">
                {contactChannels.map((channel) => (
                  <div
                    key={channel.title}
                    className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
                  >
                    <h3 className="font-heading text-base font-bold text-black">
                      {channel.title}
                    </h3>
                    <a
                      href={`mailto:${channel.email}`}
                      className="mt-1 block font-mono text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      {channel.email}
                    </a>
                    <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
                      {channel.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Operating Hours */}
              <div className="rounded-2xl border border-neutral-200 bg-white p-5 text-xs text-neutral-500 flex items-center gap-3">
                <Clock className="h-4 w-4 text-neutral-400 shrink-0" />
                <span>Our global response desk monitors active matches 24/7 across European, American, and Asian timezones.</span>
              </div>

            </div>

          </div>

        </div>
      </main>

      <SportLiveFooter />
    </div>
  );
}
