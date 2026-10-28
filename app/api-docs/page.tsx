"use client";

import { useState } from "react";
import Link from "next/link";
import { Terminal, Copy, Check, Zap, Server, Code2, Globe, Shield, ArrowRight } from "lucide-react";
import SportLiveNavbar from "@/components/SportLiveNavbar";
import SportLiveFooter from "@/components/SportLiveFooter";

export default function ApiDocsPage() {
  const [copiedKey, setCopiedKey] = useState(false);
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<"curl" | "js" | "python">("curl");
  const [activeEndpoint, setActiveEndpoint] = useState<string>("matches-live");

  const demoApiKey = "zyn_live_99f381ad740cb4e892ef6";

  const handleCopyKey = () => {
    navigator.clipboard.writeText(demoApiKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const handleCopySnippet = (snippet: string, id: string) => {
    navigator.clipboard.writeText(snippet);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  const codeSnippets = {
    curl: `curl -X GET "https://api.zynscore.com/v1/matches/live?sport=football" \\
  -H "Authorization: Bearer ${demoApiKey}" \\
  -H "Accept: application/json"`,
    js: `import { ZynScoreClient } from "@zynscore/sdk";

const client = new ZynScoreClient({
  apiKey: "${demoApiKey}",
});

// Stream real-time match telemetry
client.telemetry.subscribe("el-clasico", (event) => {
  console.log("Live Event:", event.type, event.minute, event.xG);
});`,
    python: `from zynscore import ZynScore

client = ZynScore(api_key="${demoApiKey}")

# Fetch active live matches with sub-second latency
live_matches = client.matches.list(status="live", sport="basketball")
for match in live_matches:
    print(f"{match.home_team} vs {match.away_team}: {match.score}")`,
  };

  const endpoints = [
    {
      id: "matches-live",
      method: "GET",
      path: "/v1/matches/live",
      desc: "Retrieve all active matches across football, basketball, and tennis with sub-second scores.",
      response: `{
  "status": "success",
  "data": [
    {
      "id": "el-clasico",
      "league": "La Liga",
      "sport": "football",
      "minute": "78'",
      "score": { "home": 2, "away": 1 },
      "home_team": { "name": "Real Madrid", "xG": 2.14 },
      "away_team": { "name": "Barcelona", "xG": 1.45 }
    }
  ],
  "latency_ms": 142
}`,
    },
    {
      id: "basketball-boxscore",
      method: "GET",
      path: "/v1/basketball/boxscore/{id}",
      desc: "Get full NBA & EuroLeague quarter splits, shot heat maps, True Shooting %, and rim telemetry.",
      response: `{
  "id": "bos-gsw",
  "period": "Q3",
  "clock": "03:12",
  "score": { "celtics": 88, "warriors": 82 },
  "leaders": {
    "points": { "player": "J. Tatum", "value": 28 },
    "threes": { "player": "S. Curry", "value": 6 }
  },
  "team_stats": {
    "field_goal_pct": "48.5%",
    "pace": 104.2
  }
}`,
    },
    {
      id: "wss-stream",
      method: "WSS",
      path: "wss://stream.zynscore.com/v1/telemetry",
      desc: "Persistent low-overhead WebSocket stream delivering ball coordinates and event ticks in <250ms.",
      response: `{
  "event": "GOAL",
  "match_id": "el-clasico",
  "minute": 72,
  "player": "J. Bellingham",
  "coordinates": { "x": 104.2, "y": 34.5 },
  "shot_velocity_kmh": 108.4,
  "xG_value": 0.42
}`,
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
            <span className="text-black font-semibold">API Documentation</span>
          </nav>

          {/* Hero */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-700">
              <Terminal className="h-3.5 w-3.5 text-black" />
              <span>Developer Telemetry API</span>
            </div>

            <h1 className="mt-5 font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-black leading-tight">
              Sub-Second Sports Telemetry API.
            </h1>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-neutral-600">
              Power your sports application, fantasy league, or analytical models with direct stadium optical sensor feeds and WebSocket pipelines streaming at &lt;300ms latency.
            </p>
          </div>

          {/* Quickstart API Key Card */}
          <div className="mt-10 rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="font-heading text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Instant Sandbox Token
                </span>
                <div className="mt-1 font-mono text-sm sm:text-base font-bold text-black break-all">
                  {demoApiKey}
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyKey}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-black px-5 py-2.5 text-xs font-bold text-white hover:bg-neutral-800 transition-colors shadow-sm"
              >
                {copiedKey ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                <span>{copiedKey ? "Copied Token!" : "Copy Sandbox Key"}</span>
              </button>
            </div>
          </div>

          {/* Interactive Code Playground */}
          <div className="mt-10 rounded-3xl border border-neutral-800 bg-[#0B0F19] text-white p-6 sm:p-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-neutral-800 pb-4 gap-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-amber-500" />
                <span className="h-3 w-3 rounded-full bg-emerald-500" />
                <span className="ml-3 font-mono text-xs text-neutral-400">
                  Quickstart Integration
                </span>
              </div>

              {/* Language Selector */}
              <div className="flex items-center gap-1 rounded-xl bg-neutral-900 p-1 border border-neutral-800">
                {(["curl", "js", "python"] as const).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setSelectedLanguage(lang)}
                    className={`rounded-lg px-3 py-1 text-xs font-mono font-bold transition-colors ${
                      selectedLanguage === lang
                        ? "bg-white text-black"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Code Body */}
            <div className="relative mt-4">
              <pre className="overflow-x-auto p-4 text-xs sm:text-sm font-mono text-emerald-400 leading-relaxed">
                <code>{codeSnippets[selectedLanguage]}</code>
              </pre>
              <button
                type="button"
                onClick={() => handleCopySnippet(codeSnippets[selectedLanguage], "playground")}
                className="absolute top-2 right-2 rounded-lg bg-neutral-800/80 p-2 text-neutral-300 hover:bg-neutral-700 hover:text-white transition-colors"
                title="Copy Code"
              >
                {copiedSnippet === "playground" ? (
                  <Check className="h-4 w-4 text-emerald-400" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Endpoints Catalog */}
          <div className="mt-16">
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-black">
              Featured API Endpoints
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              Explore primary REST routes and persistent telemetry WebSocket connections.
            </p>

            <div className="mt-8 space-y-6">
              {endpoints.map((ep) => (
                <div
                  key={ep.id}
                  className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`rounded-md px-2.5 py-1 font-mono text-xs font-extrabold ${
                        ep.method === "WSS"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-emerald-100 text-emerald-700"
                      }`}
                    >
                      {ep.method}
                    </span>
                    <span className="font-mono text-sm sm:text-base font-bold text-black">
                      {ep.path}
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-neutral-600">
                    {ep.desc}
                  </p>

                  <div className="mt-4 rounded-xl border border-neutral-800 bg-[#111827] p-4 text-white">
                    <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 pb-2 border-b border-neutral-800">
                      <span>Response Payload (200 OK)</span>
                      <button
                        type="button"
                        onClick={() => handleCopySnippet(ep.response, ep.id)}
                        className="hover:text-white transition-colors flex items-center gap-1"
                      >
                        {copiedSnippet === ep.id ? (
                          <Check className="h-3.5 w-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="h-3.5 w-3.5" />
                        )}
                        <span>{copiedSnippet === ep.id ? "Copied" : "Copy JSON"}</span>
                      </button>
                    </div>
                    <pre className="mt-2 overflow-x-auto text-xs font-mono text-neutral-200 leading-relaxed">
                      <code>{ep.response}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing / Tiers Table */}
          <div className="mt-16 rounded-3xl border border-neutral-200 bg-white p-8 sm:p-10 shadow-sm">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-black">
              Rate Limits & Enterprise Tiers
            </h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-neutral-200 text-neutral-400 font-mono">
                    <th className="pb-3 font-semibold">Tier</th>
                    <th className="pb-3 font-semibold">Rate Limit</th>
                    <th className="pb-3 font-semibold">WebSocket Latency</th>
                    <th className="pb-3 font-semibold">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr>
                    <td className="py-4 font-bold text-black">Sandbox (Free)</td>
                    <td className="py-4 font-mono text-neutral-600">120 requests / min</td>
                    <td className="py-4 font-mono text-neutral-600">&lt; 500ms</td>
                    <td className="py-4 font-bold text-emerald-600">$0 / month</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-bold text-black">Pro Developer</td>
                    <td className="py-4 font-mono text-neutral-600">2,500 requests / min</td>
                    <td className="py-4 font-mono text-neutral-600">&lt; 300ms</td>
                    <td className="py-4 font-bold text-black">$89 / month</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-bold text-black">Enterprise Stream</td>
                    <td className="py-4 font-mono text-neutral-600">Unlimited persistent tick</td>
                    <td className="py-4 font-mono text-neutral-600">&lt; 200ms dedicated edge</td>
                    <td className="py-4 font-bold text-black">Custom Agreement</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>

      <SportLiveFooter />
    </div>
  );
}
