"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What is ZynScore?",
    answer:
      "ZynScore is a sports platform designed to help fans follow their favorite sports, explore match information, and stay connected to the action in one place.",
  },
  {
    question: "Which sports can I follow on ZynScore?",
    answer:
      "ZynScore is designed for fans of different sports, including football, basketball, hockey, and volleyball. Available sports depend on active tournaments.",
  },
  {
    question: "Can I check live scores and match results?",
    answer:
      "Yes! ZynScore makes live collegiate match scores, real-time possession meters, and instant goal notifications easy to track across campus.",
  },
  {
    question: "Can I see upcoming fixtures?",
    answer:
      "Yes, the platform lets you discover upcoming campus matches, inspect venue locations, and set kickoff notification reminders.",
  },
  {
    question: "Can I follow my favorite teams?",
    answer:
      "Yes, you can star your favorite faculty teams to isolate their fixtures, view their last-5 form records, and see conference standing projections.",
  },
  {
    question: "Is ZynScore free to use?",
    answer:
      "ZynScore is completely free for university students and campus sports enthusiasts without subscription fees.",
  },
  {
    question: "Can I use ZynScore on my phone?",
    answer:
      "Yes, ZynScore is designed mobile-first with responsive layouts, touch-friendly 44px tap targets, and a dedicated mobile bottom navigation bar.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="w-full bg-black py-20 text-white sm:py-28 border-t border-neutral-800"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">

        {/* Left introduction */}
        <div className="self-start lg:sticky lg:top-28">
          <p className="mb-3 font-heading text-xs font-bold uppercase tracking-widest text-blue-500">
            Knowledge Base
          </p>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-[1.05]">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-400">
            Everything you need to know about following campus match scores, player stats, and faculty tournament brackets.
          </p>

          <p className="mt-4 text-xs text-neutral-400">
            Want to learn more?{" "}
            <Link
              href="#matches"
              className="text-blue-400 underline decoration-blue-500/40 underline-offset-4 transition-colors hover:text-blue-300"
            >
              Explore live fixtures & scores
            </Link>
            .
          </p>
        </div>

        {/* Right FAQ accordion - Black, White & Blue */}
        <ul className="divide-y divide-neutral-800 border-y border-neutral-800">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <li key={faq.question}>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="group flex w-full items-start gap-4 py-6 text-left sm:gap-5"
                >
                  {/* Number changes to + when opened */}
                  <span
                    className={`mt-1 flex w-7 shrink-0 items-center justify-center font-mono text-xs tabular-nums transition-colors ${
                      isOpen
                        ? "text-blue-500 font-bold"
                        : "text-neutral-500 group-hover:text-white"
                    }`}
                  >
                    {isOpen ? "+" : String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Question */}
                  <span
                    className={`flex-1 text-base sm:text-lg font-medium leading-snug transition-colors ${
                      isOpen
                        ? "text-white"
                        : "text-neutral-300 group-hover:text-white"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Plus rotates into X */}
                  <span
                    aria-hidden="true"
                    className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-600/30"
                        : "rotate-0 border-neutral-800 bg-neutral-900 text-neutral-400 group-hover:border-neutral-700 group-hover:text-white"
                    }`}
                  >
                    <Plus size={14} strokeWidth={1.8} />
                  </span>
                </button>

                {/* Answer */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="pb-6 pl-11 pr-8 text-sm leading-7 text-neutral-400 sm:pl-12 sm:text-base"
                >
                  {faq.answer}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
