"use client";

import { useState } from "react";
import Link from "next/link";
import { HelpCircle, Search, Plus, MessageCircle, ArrowRight } from "lucide-react";
import SportLiveNavbar from "@/components/SportLiveNavbar";
import SportLiveFooter from "@/components/SportLiveFooter";

interface QnAItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const ALL_QUESTIONS: QnAItem[] = [
  {
    id: "q1",
    category: "Telemetry & Performance",
    question: "How fast is ZynScore's live score and match telemetry?",
    answer:
      "ZynScore delivers sub-second live telemetry (<300ms latency) streaming directly from stadium optical tracking systems and official court sensors via WebSocket pipelines. This ensures you see goal notifications, lead changes, and whistle events before standard television broadcast feeds.",
  },
  {
    id: "q2",
    category: "Basketball & NBA",
    question: "What basketball leagues, statistics, and shot charts are covered?",
    answer:
      "We provide in-depth play-by-play coverage for the NBA, EuroLeague, NCAA Division I, WNBA, and FIBA tournaments. Basketball telemetry includes live shot heat maps, true shooting percentage (TS%), fast-break efficiency, rim frequency rates, individual plus/minus (+/-), and real-time line spreads.",
  },
  {
    id: "q3",
    category: "Mobile & Alerts",
    question: "Can I customize push alerts for buzzer-beaters and high-leverage moments?",
    answer:
      "Yes. In the ZynScore iOS and Android apps, you can customize granular notifications down to team lineup announcements, clutch 4th-quarter score leads, red cards, penalty kicks, and instant video review verdicts so you never miss a defining match climax.",
  },
  {
    id: "q4",
    category: "Analytics & xG",
    question: "How are Expected Goals (xG) and court efficiency metrics calculated?",
    answer:
      "Our analytical engine evaluates over 30 micro-variables per scoring attempt in real time—factoring in shot distance, angle, defensive defender proximity, assist trajectory, and historical conversion frequency to calculate unbiased expected values.",
  },
  {
    id: "q5",
    category: "Platform & Pricing",
    question: "Is ZynScore free to use, and is there an API for developers?",
    answer:
      "ZynScore is 100% free for individual fans and sports enthusiasts across web and mobile. We also offer dedicated high-throughput REST and WebSocket APIs with flexible rate tiers for developers, fantasy sports platforms, and data analysts.",
  },
  {
    id: "q6",
    category: "Multi-Sport Tracking",
    question: "Can I follow multiple live games simultaneously in a split-screen view?",
    answer:
      "Yes. Using our Match Center multi-view feature, you can pin football, basketball, and tennis matches side-by-side on desktop or toggle seamlessly between live score tickers on mobile with zero page reloads.",
  },
  {
    id: "q7",
    category: "Telemetry & Performance",
    question: "What should I do if a live score appears delayed on a weak connection?",
    answer:
      "Our telemetry client automatically negotiates adaptive data compression and falls back to lightweight polling if WebSocket connections degrade, maintaining score fidelity even on cellular 3G/4G networks.",
  },
  {
    id: "q8",
    category: "Analytics & xG",
    question: "How frequently are player ratings and form tables recalculated?",
    answer:
      "Player performance indexes are updated continuously during match play based on every recorded touch, tackle, pass completion, turnover, and defensive contest.",
  },
];

export default function FaqPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openIds, setOpenIds] = useState<string[]>(["q1"]);

  const categories = [
    "All",
    "Telemetry & Performance",
    "Basketball & NBA",
    "Mobile & Alerts",
    "Analytics & xG",
    "Platform & Pricing",
  ];

  const filtered = ALL_QUESTIONS.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#FAFAFA] text-[#111827] font-body selection:bg-black selection:text-white">
      <SportLiveNavbar />

      <main className="w-full flex-1 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-8">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <span className="text-black font-semibold">Q&A</span>
          </nav>

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-700">
              <HelpCircle className="h-3.5 w-3.5 text-neutral-600" />
              <span>Support & Knowledge Center</span>
            </div>

            <h1 className="mt-5 font-heading text-4xl sm:text-5xl font-black tracking-tight text-black">
              Questions & Answers (Q&A)
            </h1>

            <p className="mt-3 text-sm sm:text-base leading-relaxed text-neutral-600">
              Instant answers about ZynScore live sports telemetry, basketball shot metrics, expected goals (xG), and API integrations.
            </p>

            {/* Live Search Bar */}
            <div className="mt-6 relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search questions or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-2xl border border-neutral-200 bg-white py-3 pl-11 pr-4 text-sm text-black placeholder:text-neutral-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black shadow-sm"
              />
            </div>
          </div>

          {/* Category Pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 border-b border-neutral-200 pb-5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-black text-white shadow-sm"
                    : "bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-300 hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion Questions */}
          <div className="mt-8 space-y-3.5">
            {filtered.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-neutral-300 p-12 text-center">
                <HelpCircle className="mx-auto h-8 w-8 text-neutral-400" />
                <h3 className="mt-3 font-heading text-base font-bold text-black">
                  No matching questions found
                </h3>
                <p className="mt-1 text-xs text-neutral-500">
                  Try adjusting your keywords or clearing the category filter.
                </p>
              </div>
            ) : (
              filtered.map((item, idx) => {
                const isOpen = openIds.includes(item.id);

                return (
                  <div
                    key={item.id}
                    className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                      isOpen
                        ? "border-neutral-900 bg-white shadow-sm"
                        : "border-neutral-200 bg-white hover:border-neutral-300"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(item.id)}
                      className="flex w-full items-center justify-between p-5 sm:p-6 text-left"
                    >
                      <div className="flex items-center gap-4 pr-4">
                        <span className="font-mono text-xs font-bold text-neutral-400">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-0.5">
                            {item.category}
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
                            : "border-neutral-200 bg-neutral-100 text-neutral-700"
                        }`}
                      >
                        <Plus className="h-4 w-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-6 pt-1 sm:px-6 sm:pb-6 border-t border-neutral-100 text-sm leading-relaxed text-neutral-600 pl-12 sm:pl-14">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Need More Help Card */}
          <div className="mt-14 rounded-3xl border border-neutral-200 bg-white p-8 sm:p-10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">
                <MessageCircle className="h-4 w-4 text-black" />
                <span>Can&apos;t find what you&apos;re looking for?</span>
              </div>
              <h3 className="mt-1 font-heading text-xl font-bold text-black">
                Our support desk is on standby 24/7.
              </h3>
              <p className="mt-1.5 text-xs text-neutral-500 max-w-lg">
                Reach out to our engineering and editorial support team for custom telemetry inquiries, bug reports, or partnership opportunities.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-black px-6 py-3 text-xs font-bold text-white hover:bg-neutral-800 transition-colors shadow-sm"
            >
              <span>Contact Us</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

        </div>
      </main>

      <SportLiveFooter />
    </div>
  );
}
