import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const barlowCondensed = Barlow_Condensed({
  weight: ["500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZynScore | Live Scores, Unmatched Precision",
  description: "Experience real-time sports statistics, deep tactical analysis, and lightning-fast match telemetry across football, basketball, tennis, and elite global leagues with ZynScore.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FAFAFA] text-[#111827] selection:bg-black selection:text-white antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
