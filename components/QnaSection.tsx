"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus, HelpCircle, MessageSquare, Sparkles, ChevronRight } from "lucide-react";

interface QnAItem {
  id: string;
  category: "telemetry" | "basketball" | "mobile" | "analytics";
  categoryLabel: string;
  question: string;
  answer: string;
}

const QNA_ITEMS: QnAItem[] = [
  {
    id: "q1",
    category: "telemetry",
    categoryLabel: "Live Telemetry",
    question: "How fast is ZynScore's live score and match telemetry?",
    answer:
      "ZynScore delivers sub-second live telemetry (<300ms latency) streaming directly from stadium optical tracking systems and official court sensors via WebSocket pipelines. This ensures you see goal notifications, lead changes, and whistle events before standard television broadcast feeds.",
  },
  {
    id: "q2",
    category: "basketball",
    categoryLabel: "Basketball & NBA",
    question: "What basketball leagues, statistics, and shot charts are covered?",
    answer:
      "We provide in-depth play-by-play coverage for the NBA, EuroLeague, NCAA Division I, WNBA, and FIBA tournaments. Basketball telemetry includes live shot heat maps, true shooting percentage (TS%), fast-break efficiency, rim frequency rates, individual plus/minus (+/-), and real-time line spreads.",
  },
  {
    id: "q3",
    category: "mobile",
    categoryLabel: "Mobile & Alerts",
    question: "Can I customize push alerts for buzzer-beaters and high-leverage moments?",
    answer:
      "Yes. In the ZynScore iOS and Android apps, you can customize granular notifications down to team lineup announcements, clutch 4th-quarter score leads, red cards, penalty kicks, and instant video review verdicts so you never miss a defining match climax.",
  },
  {
    id: "q4",
    category: "analytics",
    categoryLabel: "Analytics & xG",
    question: "How are Expected Goals (xG) and court efficiency metrics calculated?",
    answer:
      "Our analytical engine evaluates over 30 micro-variables per scoring attempt in real time—factoring in shot distance, angle, defensive defender proximity, assist trajectory, and historical conversion frequency to calculate unbiased expected values.",
  },
  {
    id: "q5",
    category: "telemetry",
    categoryLabel: "Platform",
    question: "Is ZynScore free to use, and is there an API for developers?",
    answer:
      "ZynScore is 100% free for individual fans and sports enthusiasts across web and mobile. We also offer dedicated high-throughput REST and WebSocket APIs with flexible rate tiers for developers, fantasy sports platforms, and data analysts.",
  },
  {
    id: "q6",
    category: "basketball",
    categoryLabel: "Basketball & Multi-Sport",
    question: "Can I follow multiple live games simultaneously in a split-screen view?",
    answer:
      "Yes. Using our Match Center multi-view feature, you can pin football, basketball, and tennis matches side-by-side on desktop or toggle seamlessly between live score tickers on mobile with zero page reloads.",
  },
];

export default function QnaSection() {
  const [openId, setOpenId] = useState<string | null>("q1");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "telemetry", label: "Live Telemetry" },
    { id: "basketball", label: "Basketball & NBA" },
    { id: "mobile", label: "Mobile App" },
    { id: "analytics", label: "Analytics & xG" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? QNA_ITEMS
      : QNA_ITEMS.filter((item) => item.category === activeCategory);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="w-full py-16 sm:py-24 border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-700">
            <HelpCircle className="h-3.5 w-3.5 text-neutral-600" />
            <span>Platform Intel & Support</span>
          </div>

          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black">
            Questions & Answers
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-neutral-600">
            Have questions about ZynScore’s real-time match telemetry, basketball shot metrics, or mobile push alerts? Explore the answers below.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-neutral-100 pb-5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-black text-white shadow-sm"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-black"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Main Q&A Grid: Accordion + Side Spotlight Card */}
        <div className="mt-8 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          
          {/* Left Column (8 cols): Accordion list */}
          <div className="lg:col-span-8 space-y-3.5">
            {filteredItems.map((item, idx) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                    isOpen
                      ? "border-neutral-900 bg-neutral-50/60 shadow-sm"
                      : "border-neutral-200 bg-white hover:border-neutral-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between p-5 sm:p-6 text-left"
                  >
                    <div className="flex items-center gap-3.5 pr-4">
                      <span className="font-mono text-xs font-bold text-neutral-400">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-0.5">
                          {item.categoryLabel}
                        </span>
                        <h3 className="font-heading text-base sm:text-lg font-bold text-black leading-snug">
                          {item.question}
                        </h3>
                      </div>
                    </div>

                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 ${
                        isOpen
                          ? "rotate-45 border-black bg-black text-white"
                          : "border-neutral-200 bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 pt-1 sm:px-6 sm:pb-6 border-t border-neutral-100/80 text-sm leading-relaxed text-neutral-600 pl-12 sm:pl-14">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column (4 cols): Basketball Telemetry Spotlight Card */}
          <div className="lg:col-span-4 space-y-5">
            
            {/* Basketball Visual Spotlight Card */}
            <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                <Image
                  src="/images/basket.jpg"
                  alt="ZynScore Basketball Coverage"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover object-top transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3 rounded-md bg-black/85 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                  NBA & Global Basketball
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="font-heading text-sm font-bold block leading-snug">
                    Court-Level Precision Feeds
                  </span>
                  <span className="text-[11px] text-neutral-300 font-mono">
                    Track every possession, line spread & buzzer-beater in real time.
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-800">
                  <Sparkles className="h-4 w-4 text-amber-500" />
                  <span>Looking for more answers?</span>
                </div>
                <p className="mt-1.5 text-xs text-neutral-500 leading-relaxed">
                  Join our official Discord community or check out our developer API documentation to integrate live sports feeds.
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-3">
                  <a
                    href="#editorial"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-black hover:text-neutral-600 transition-colors"
                  >
                    <span>Read sport analysis</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </a>
                  <span className="text-[11px] font-mono text-neutral-400">
                    24/7 Live Feed
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
