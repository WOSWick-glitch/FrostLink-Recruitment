export const MOCK_STATES = [
  {
    id: 1,
    stateNumber: 1042,
    recruitingStatus: "Open",
    playstyle: "Competitive",
    language: "English",
    powerCapNotes: "Max 150M Power, 30M kills min",
    description: "Highly competitive state looking for strong leads. Won last 3 SvS.",
    lastUpdated: "2 hours ago",
    topAlliancesCount: 5,
    politics: "Council Led (Top 3)",
    napStability: "High (Top 10 NAP)",
    svsCoordination: "Excellent",
    dramaLevel: "Low"
  },
  {
    id: 2,
    stateNumber: 998,
    recruitingStatus: "Open",
    playstyle: "Casual",
    language: "Multilingual",
    powerCapNotes: "No cap, looking for active friendly players",
    description: "Peaceful state with NAP across top 10. Drama-free zone.",
    lastUpdated: "1 day ago",
    topAlliancesCount: 3,
    politics: "Dictatorship (Top 1)",
    napStability: "Medium (Top 5 NAP)",
    svsCoordination: "Average",
    dramaLevel: "Medium"
  }
];

export const MOCK_ALLIANCES = [
  {
    id: "vng",
    slug: "vng-vanguard",
    name: "[VNG] Vanguard",
    stateNumber: 1042,
    recruitingStatus: "Open",
    requirements: "FC3+, 100M+ Power",
    lookingFor: ["Garrison Lead", "Rally Lead", "Active Filler"],
    openSlotsEstimate: 12,
    description: "Top 1 alliance in 1042. Looking for dedicated fighters for the upcoming SvS. Must be on Discord.",
    lastUpdated: "5 hours ago",
    isSponsored: true,
    logo: "VNG"
  },
  {
    id: "awK",
    slug: "awk-awakened",
    name: "[AwK] Awakened",
    stateNumber: 998,
    recruitingStatus: "Limited",
    requirements: "FC1+, Active daily",
    lookingFor: ["Event Organizer", "Active Filler"],
    openSlotsEstimate: 3,
    description: "Friendly community focused on growth and events.",
    lastUpdated: "2 days ago",
    logo: "AwK"
  }
];

export const MOCK_PLAYERS = [
  {
    id: "player1",
    slug: "frost-king",
    displayName: "FrostKing",
    currentStateNumber: 1105,
    powerBucket: "100M - 150M",
    furnaceLevel: "FC 4",
    roles: ["Garrison Lead", "Whale"],
    transferStatus: "Ready",
    language: "English",
    playstyle: "Hardcore",
    notesPublic: "Looking for a competitive state to lead garrisons. Maxed out exclusive gear on top 3 heroes.",
    visibility: true,
    lastUpdated: "10 mins ago",
    statsStatus: "Up to Date",
    isPremium: true,
    discord: "FrostKing#1234",
    reputation: 98,
    endorsements: [
      { id: 1, type: "verified_recruiter", tag: "Reliable Lead" },
      { id: 2, type: "state_staff", tag: "SvS MVP" }
    ],
    stats: {
      highestPower: "142,500,000",
      kills: "45,000,000",
      deaths: "5,200,000",
      marchCapacity: "285,000"
    }
  },
  {
    id: "player2",
    slug: "snow-queen",
    displayName: "SnowQueen",
    currentStateNumber: 885,
    powerBucket: "50M - 100M",
    furnaceLevel: "FC 2",
    roles: ["Active Filler", "Diplomat"],
    transferStatus: "Browsing",
    language: "Spanish",
    playstyle: "Casual",
    notesPublic: "Looking for a peaceful drama-free state to grow.",
    visibility: true,
    lastUpdated: "1 day ago",
    statsStatus: "Up to Date",
    isPremium: false,
    discord: "SnowQueen#5678",
    reputation: 85,
    endorsements: [
      { id: 3, type: "verified_recruiter", tag: "Friendly" }
    ],
    stats: {
      highestPower: "68,200,000",
      kills: "12,000,000",
      deaths: "1,100,000",
      marchCapacity: "210,000"
    }
  },
  {
    id: "player3",
    slug: "shadow-blade",
    displayName: "ShadowBlade",
    currentStateNumber: 1042,
    powerBucket: "150M+",
    furnaceLevel: "FC 5",
    roles: ["Rally Lead"],
    transferStatus: "Ready",
    language: "English",
    playstyle: "Hardcore",
    notesPublic: "Looking for a competitive SvS state. Will bring my own rally fillers.",
    visibility: false,
    lastUpdated: "3 weeks ago",
    statsStatus: "Update Required",
    isPremium: false,
    discord: "Shadow#9999",
    reputation: 92,
    endorsements: [],
    stats: {
      highestPower: "185,000,000",
      kills: "95,000,000",
      deaths: "12,200,000",
      marchCapacity: "315,000"
    }
  }
];
