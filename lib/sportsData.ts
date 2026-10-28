// TODO: Replace mock sports data with live API integrations (e.g. Sportradar / API-Football / university WebSocket)

export interface Team {
  id: string;
  name: string;
  shortName: string;
  crest: string;
  league: string;
  rank: number;
  form: ("W" | "D" | "L")[];
  nextMatch: string;
  stats: {
    played: number;
    won: number;
    drawn: number;
    lost: number;
    gf: number;
    ga: number;
    gd: number;
    points: number;
  };
}

export interface MatchEvent {
  minute: number;
  type: "goal" | "yellow_card" | "red_card" | "sub";
  team: "home" | "away";
  player: string;
  detail?: string;
}

export interface Match {
  id: string;
  leagueId: string;
  leagueName: string;
  sport: "football" | "basketball" | "volleyball" | "tennis";
  status: "live" | "finished" | "upcoming";
  minute?: string;
  kickoffTime: string;
  date: string; // YYYY-MM-DD
  venue: string;
  homeTeam: {
    id: string;
    name: string;
    shortName: string;
    crest: string;
    score?: number;
  };
  awayTeam: {
    id: string;
    name: string;
    shortName: string;
    crest: string;
    score?: number;
  };
  stats?: {
    possession: [number, number]; // [home, away]
    shotsOnTarget: [number, number];
    totalShots: [number, number];
    corners: [number, number];
    fouls: [number, number];
    yellowCards: [number, number];
    expectedGoals?: [number, number];
  };
  events?: MatchEvent[];
  lineups?: {
    homeFormation: string;
    awayFormation: string;
    homeStarting: string[];
    awayStarting: string[];
  };
  isFavorite?: boolean;
}

export const TEAMS_DATA: Team[] = [
  {
    id: "bowen-fc",
    name: "Bowen FC",
    shortName: "BFC",
    crest: "/brandlogo/bowen.png",
    league: "Collegiate Premier League",
    rank: 1,
    form: ["W", "W", "W", "D", "W"],
    nextMatch: "vs BAMS Kings (Sat 16:00)",
    stats: { played: 14, won: 11, drawn: 2, lost: 1, gf: 32, ga: 10, gd: 22, points: 35 },
  },
  {
    id: "nacos-fc",
    name: "NACOS Tech FC",
    shortName: "NAC",
    crest: "/brandlogo/nacos.png",
    league: "Collegiate Premier League",
    rank: 2,
    form: ["W", "W", "D", "W", "L"],
    nextMatch: "vs BAES United (Today 18:30)",
    stats: { played: 14, won: 9, drawn: 3, lost: 2, gf: 28, ga: 14, gd: 14, points: 30 },
  },
  {
    id: "bams-kings",
    name: "BAMS Kings",
    shortName: "BAM",
    crest: "/brandlogo/bams.png",
    league: "Collegiate Premier League",
    rank: 3,
    form: ["W", "D", "W", "L", "W"],
    nextMatch: "vs Bowen FC (Sat 16:00)",
    stats: { played: 14, won: 8, drawn: 4, lost: 2, gf: 25, ga: 15, gd: 10, points: 28 },
  },
  {
    id: "baes-united",
    name: "BAES United",
    shortName: "BAE",
    crest: "/brandlogo/baes.png",
    league: "Collegiate Premier League",
    rank: 4,
    form: ["L", "W", "D", "W", "D"],
    nextMatch: "vs NACOS Tech FC (Today 18:30)",
    stats: { played: 14, won: 6, drawn: 4, lost: 4, gf: 19, ga: 18, gd: 1, points: 22 },
  },
  {
    id: "bowen-sports",
    name: "Varsity Athletic",
    shortName: "ATH",
    crest: "/brandlogo/bowensport.png",
    league: "Collegiate Premier League",
    rank: 5,
    form: ["D", "L", "W", "L", "W"],
    nextMatch: "vs Lead City (Sun 15:00)",
    stats: { played: 14, won: 5, drawn: 3, lost: 6, gf: 18, ga: 21, gd: -3, points: 18 },
  },
];

export const MATCHES_DATA: Match[] = [
  {
    id: "m-1",
    leagueId: "cpl",
    leagueName: "Collegiate Premier League",
    sport: "football",
    status: "live",
    minute: "68'",
    kickoffTime: "16:00",
    date: "2026-10-25",
    venue: "Main University Stadium",
    homeTeam: {
      id: "bowen-fc",
      name: "Bowen FC",
      shortName: "BFC",
      crest: "/brandlogo/bowen.png",
      score: 2,
    },
    awayTeam: {
      id: "bams-kings",
      name: "BAMS Kings",
      shortName: "BAM",
      crest: "/brandlogo/bams.png",
      score: 1,
    },
    stats: {
      possession: [58, 42],
      shotsOnTarget: [7, 3],
      totalShots: [14, 8],
      corners: [6, 2],
      fouls: [9, 12],
      yellowCards: [1, 2],
      expectedGoals: [1.85, 0.94],
    },
    events: [
      { minute: 18, type: "goal", team: "home", player: "E. Adeleke", detail: "Assist by D. Peters" },
      { minute: 34, type: "yellow_card", team: "away", player: "K. Oladipo", detail: "Tactical foul" },
      { minute: 52, type: "goal", team: "away", player: "S. Alabi", detail: "Header from corner" },
      { minute: 61, type: "goal", team: "home", player: "M. Okon", detail: "Right-footed curler" },
    ],
    lineups: {
      homeFormation: "4-3-3",
      awayFormation: "4-2-3-1",
      homeStarting: [
        "1. J. Daniel (GK)",
        "2. T. James",
        "4. O. Williams",
        "5. C. Nwosu",
        "3. A. Yusuf",
        "6. D. Peters",
        "8. E. Adeleke (C)",
        "10. M. Okon",
        "7. K. Balogun",
        "9. V. Ezekiel",
        "11. B. Collins",
      ],
      awayStarting: [
        "12. F. Bello (GK)",
        "2. S. Alabi",
        "4. K. Oladipo",
        "15. G. Martins",
        "3. L. Davies",
        "6. R. Paul",
        "8. H. Adams (C)",
        "10. Y. Sani",
        "7. I. Thomas",
        "9. Z. Ibrahim",
        "11. N. George",
      ],
    },
    isFavorite: true,
  },
  {
    id: "m-2",
    leagueId: "cpl",
    leagueName: "Collegiate Premier League",
    sport: "football",
    status: "live",
    minute: "38'",
    kickoffTime: "16:30",
    date: "2026-10-25",
    venue: "East Sports Complex",
    homeTeam: {
      id: "nacos-fc",
      name: "NACOS Tech FC",
      shortName: "NAC",
      crest: "/brandlogo/nacos.png",
      score: 1,
    },
    awayTeam: {
      id: "baes-united",
      name: "BAES United",
      shortName: "BAE",
      crest: "/brandlogo/baes.png",
      score: 0,
    },
    stats: {
      possession: [52, 48],
      shotsOnTarget: [4, 2],
      totalShots: [9, 6],
      corners: [4, 3],
      fouls: [5, 7],
      yellowCards: [0, 1],
      expectedGoals: [0.92, 0.45],
    },
    events: [
      { minute: 22, type: "goal", team: "home", player: "T. Ajayi", detail: "Penalty kick" },
    ],
    isFavorite: false,
  },
  {
    id: "m-3",
    leagueId: "vbl",
    leagueName: "Varsity Basketball League",
    sport: "basketball",
    status: "live",
    minute: "Q3 04:18",
    kickoffTime: "17:00",
    date: "2026-10-25",
    venue: "Indoor Sports Dome",
    homeTeam: {
      id: "eagles",
      name: "Faculty Eagles",
      shortName: "EAG",
      crest: "/brandlogo/bowensport.png",
      score: 54,
    },
    awayTeam: {
      id: "wolves",
      name: "Science Wolves",
      shortName: "WLV",
      crest: "/brandlogo/bowen.png",
      score: 49,
    },
    stats: {
      possession: [50, 50],
      shotsOnTarget: [22, 19],
      totalShots: [46, 42],
      corners: [0, 0],
      fouls: [12, 14],
      yellowCards: [0, 0],
    },
    isFavorite: true,
  },
  {
    id: "m-4",
    leagueId: "cpl",
    leagueName: "Collegiate Premier League",
    sport: "football",
    status: "finished",
    minute: "FT",
    kickoffTime: "14:00",
    date: "2026-10-25",
    venue: "Pitch B Arena",
    homeTeam: {
      id: "bowen-sports",
      name: "Varsity Athletic",
      shortName: "ATH",
      crest: "/brandlogo/bowensport.png",
      score: 3,
    },
    awayTeam: {
      id: "medical-strikers",
      name: "Health Strikers",
      shortName: "HLT",
      crest: "/brandlogo/bams.png",
      score: 1,
    },
    stats: {
      possession: [61, 39],
      shotsOnTarget: [8, 3],
      totalShots: [16, 7],
      corners: [7, 2],
      fouls: [11, 10],
      yellowCards: [2, 1],
      expectedGoals: [2.4, 0.8],
    },
    events: [
      { minute: 14, type: "goal", team: "home", player: "O. Benson" },
      { minute: 41, type: "goal", team: "away", player: "M. Kenneth" },
      { minute: 73, type: "goal", team: "home", player: "O. Benson" },
      { minute: 88, type: "goal", team: "home", player: "C. David" },
    ],
    isFavorite: false,
  },
  {
    id: "m-5",
    leagueId: "cpl",
    leagueName: "Collegiate Premier League",
    sport: "football",
    status: "upcoming",
    kickoffTime: "19:00",
    date: "2026-10-25",
    venue: "Main University Stadium",
    homeTeam: {
      id: "law-titans",
      name: "Law Titans",
      shortName: "LAW",
      crest: "/brandlogo/baes.png",
    },
    awayTeam: {
      id: "fms-hawks",
      name: "Management Hawks",
      shortName: "FMS",
      crest: "/brandlogo/nacos.png",
    },
    isFavorite: false,
  },
  {
    id: "m-6",
    leagueId: "vvc",
    leagueName: "Varsity Volleyball Cup",
    sport: "volleyball",
    status: "upcoming",
    kickoffTime: "20:30",
    date: "2026-10-25",
    venue: "Volleyball Court A",
    homeTeam: {
      id: "spikers",
      name: "Varsity Spikers",
      shortName: "SPK",
      crest: "/brandlogo/bowensport.png",
    },
    awayTeam: {
      id: "lead-city",
      name: "Lead Aces",
      shortName: "LDA",
      crest: "/brandlogo/bowen.png",
    },
    isFavorite: false,
  },
];

export const TOP_PERFORMERS = [
  { name: "Emmanuel Adeleke", team: "Bowen FC", stat: "12 Goals", avatar: "⚽" },
  { name: "Michael Okon", team: "Bowen FC", stat: "8 Assists", avatar: "👟" },
  { name: "Samuel Alabi", team: "BAMS Kings", stat: "9 Goals", avatar: "⚽" },
  { name: "Tolani Ajayi", team: "NACOS Tech FC", stat: "6 Clean Sheets", avatar: "🧤" },
];
