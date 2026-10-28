"use client";

interface TickerMatch {
  league: string;
  home: string;
  away: string;
  scoreHome: number;
  scoreAway: number;
  time: string;
  isRedTime?: boolean;
}

const tickerMatches: TickerMatch[] = [
  { league: "UCL", home: "ARS", away: "BAY", scoreHome: 2, scoreAway: 1, time: "82'", isRedTime: true },
  { league: "PRL", home: "MCI", away: "LIV", scoreHome: 0, scoreAway: 0, time: "HT", isRedTime: true },
  { league: "ITA", home: "INT", away: "JUV", scoreHome: 3, scoreAway: 2, time: "90'+4'", isRedTime: true },
  { league: "ESP", home: "ATM", away: "VAL", scoreHome: 1, scoreAway: 0, time: "65'", isRedTime: false },
  { league: "GER", home: "BVB", away: "RBL", scoreHome: 1, scoreAway: 1, time: "54'", isRedTime: true },
  { league: "NBA", home: "BOS", away: "GSW", scoreHome: 88, scoreAway: 82, time: "Q3", isRedTime: true },
];

export default function SportLiveTicker() {
  const fullItems = [...tickerMatches, ...tickerMatches];

  return (
    <div className="w-full border-b border-neutral-200 bg-[#F9FAFB] py-2 text-xs">
      <div className="mx-auto flex max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        
        {/* Left Badge: LIVE TICKER */}
        <div className="flex shrink-0 items-center gap-1.5 pr-4 border-r border-neutral-200">
          <span className="h-2 w-2 rounded-full bg-red-500 animate-live-pulse" />
          <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-black">
            Live Ticker
          </span>
        </div>

        {/* Scrolling or Flex Match Items */}
        <div className="flex flex-1 items-center gap-5 sm:gap-8 overflow-x-auto no-scrollbar pl-4">
          {fullItems.map((m, idx) => (
            <div
              key={idx}
              className="flex shrink-0 items-center gap-2 text-xs transition-colors hover:text-black cursor-pointer"
            >
              <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wide">
                {m.league}
              </span>
              <div className="flex items-center gap-1.5 font-medium text-neutral-800">
                <span className="font-semibold text-black">{m.home}</span>
                <span className="font-mono font-bold text-black">{m.scoreHome} - {m.scoreAway}</span>
                <span className="font-semibold text-black">{m.away}</span>
              </div>
              <span className={`font-mono text-[11px] font-bold ${
                m.isRedTime ? "text-red-500" : "text-neutral-500"
              }`}>
                • {m.time}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
