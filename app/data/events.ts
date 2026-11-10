export interface EventMediaItem {
  type: "image" | "video";
  url: string;
  poster?: string;
  title: string;
  caption?: string;
}

export interface EventCollaborator {
  name: string;
  logo: string;
  url?: string;
  label?: string;
}

export interface ScheduledEvent {
  id: string;
  date: string; // YYYY-MM-DD
  formattedDate: string; // e.g. "Saturday, 07 Nov 2026"
  time: string;
  title: string;
  category: string;
  game: string;
  venue: string;
  venueAddress: string;
  city: string;
  capacity: string;
  description: string;
  price: string;
  badge?: string;
  ageGroup?: string;
  duration?: string;
  language?: string;
  slots: string[];
  about: string[];
  highlights: string[];
  venueDiscount?: string;
  isEarlyBird?: boolean;
  linkedinUrl?: string;
  instagramUrl?: string;
  mapUrl?: string;
  collaborator?: EventCollaborator;
  media?: EventMediaItem[];
  status: "upcoming" | "conducted";
}

export const EVENTS_DATA: ScheduledEvent[] = [
  // =========================================================================
  // 1. Keep it simple. Saturdays4SocialGames. Time: 5-7pm.
  //    Create a Reservation page to book seats. Venue to be announced closer to the date.
  //    Limited seats to 15. Open for all ages. Game theme is a kept discrete/surprise. Price: 99/pax
  // =========================================================================
  {
    id: "saturdays-4-social-games",
    date: "2026-11-07",
    formattedDate: "Saturday, 07 Nov 2026",
    time: "5-7pm",
    title: "Saturdays4SocialGames",
    category: "Tabletop Social Play",
    game: "Curated Surprise Game Theme",
    venue: "Venue to be announced closer to the date",
    venueAddress: "Venue details will be shared directly with registered participants closer to the date",
    city: "Venue TBA",
    capacity: "Limited to 15 Seats · Open to All Ages",
    price: "₹99 / pax",
    badge: "Limited to 15 Seats · ₹99 / pax",
    ageGroup: "Open for all ages",
    duration: "2 Hours (5:00 PM – 7:00 PM)",
    language: "English & Regional",
    slots: [
      "5:00 PM – 7:00 PM",
    ],
    description: "Join us for Saturdays4SocialGames — an intimate, screen-free evening of thoughtful tabletop play. Open to all ages, with an exciting surprise game theme curated for the session. Limited to 15 seats. Venue details will be announced closer to the date.",
    about: [
      "Saturdays4SocialGames is Bharat Play's community play evening dedicated to screen-free social interaction, strategy, and systems thinking.",
      "Time: 5:00 PM – 7:00 PM · Price: ₹99 per participant.",
      "Open to all ages and experience levels — from curious beginners to seasoned tabletop enthusiasts.",
      "The game theme is kept as an exciting surprise, revealed at the table by our facilitators.",
      "Seats are strictly capped at 15 to ensure an engaging, personalized play experience. Venue details will be shared directly with confirmed participants closer to the date."
    ],
    highlights: [
      "Saturdays4SocialGames Community Tabletop Session",
      "Time: 5:00 PM – 7:00 PM",
      "Capacity: Strictly limited to 15 seats",
      "Open to all ages and experience levels",
      "Curated surprise game theme revealed on game night",
      "Price: ₹99 / pax",
      "Venue details shared directly closer to the event date"
    ],
    instagramUrl: "https://www.instagram.com/p/DdE6Uigk9zS/?utm_source=ig_web_button_share_sheet&stkn=MzRlODBiNWFlZA%3D%3D&img_index=1",
    media: [
      {
        type: "image",
        url: "/events_media/serious_games_saturday/saturday_slide_1.jpg",
        title: "Saturdays4SocialGames · Community Gathering",
        caption: "Screen-free social games in an intimate community setting",
      },
      {
        type: "video",
        url: "/events_media/serious_games_saturday/saturday_video_1.mp4",
        poster: "/events_media/serious_games_saturday/saturday_slide_3.jpg",
        title: "Live Tabletop Gameplay",
        caption: "Participants making tactical turns and social moves",
      },
      {
        type: "image",
        url: "/events_media/serious_games_saturday/saturday_slide_2.jpg",
        title: "Participants Around the Board",
        caption: "Collaborative systems thinking in an engaging, screen-free environment",
      },
      {
        type: "video",
        url: "/events_media/serious_games_saturday/saturday_video_2.mp4",
        poster: "/events_media/serious_games_saturday/saturday_slide_5.jpg",
        title: "Live Facilitation & Systems Debrief",
        caption: "Facilitators explaining rules and playful dynamics",
      },
    ],
    status: "upcoming",
  },

  // =========================================================================
  // 2. 14th Nov : CHILDREN'S DAY PLAY WORKSHOP
  //    A The Board Room x Bharat Play Innovations
  //    Venue: The Board Room, Mylapore. Price: INR 649 / pax (₹500 workshop + ₹149 redeemed on Food & Beverages at cafe)
  // =========================================================================
  {
    id: "childrens-day-play-workshop",
    date: "2026-11-14",
    formattedDate: "Saturday, 14 Nov 2026",
    time: "10:00 AM – 1:00 PM",
    title: "Children's Day Play Workshop: The Board Room × Bharat Play Innovations",
    category: "Children's Day Play Workshop",
    game: "CITY RUNNERS",
    venue: "The Board Room, Mylapore",
    venueAddress: "The Board Room, Mylapore, Chennai, Tamil Nadu",
    city: "Chennai",
    capacity: "6 Players Per Table · Age 12+",
    price: "INR 649 / pax",
    badge: "Children's Day Special · ₹649",
    ageGroup: "12+ (parents and grandparents are encouraged to join the table)",
    duration: "3 Hours (10:00 AM – 1:00 PM)",
    language: "English & Tamil",
    collaborator: {
      name: "The Board Room",
      logo: "/partners/the-board-room.png",
      url: "https://theboardroomindia.com",
      label: "Collaborated with The Board Room",
    },
    slots: [
      "10:00 AM – 1:00 PM",
    ],
    description: "Celebrate Children's Day with an extraordinary, screen-free tabletop workshop at The Board Room, Mylapore. Experience CITY RUNNERS, our cooperative strategy game of livable cities and urban governance. Bring your family and friends for an unforgettable day of playful problem-solving!",
    about: [
      "Celebrate Children's Day with an extraordinary, screen-free tabletop simulation where players take on interconnected civic roles to build a thriving, resilient city.",
      "Date: Saturday, 14 Nov 2026 · Time: 10:00 AM – 1:00 PM · Venue: The Board Room, Mylapore.",
      "Game: CITY RUNNERS — A cooperative strategy game exploring livable cities, urban systems, and collective governance.",
      "Age: 12+ (parents, grandparents, and youth are warmly welcomed to join the table).",
      "Table Pods: 6 players per table for optimal collaboration and immersive play.",
      "Price: INR 649 per participant (includes ₹500 workshop fee + ₹149 voucher redeemable on Food & Beverages at the cafe).",
      "Payment: Scan the UPI QR code and share your payment screenshot on WhatsApp to confirm your reservation.",
      "Bring your friends and family, and experience Children's Day like never before!"
    ],
    highlights: [
      "Date: Saturday, 14 Nov 2026 · 10:00 AM – 1:00 PM",
      "Venue: The Board Room, Mylapore, Chennai",
      "Game: CITY RUNNERS (Cooperative Strategy · Livable Cities · Urban Governance)",
      "Age: 12+ (parents, grandparents & youth warmly welcomed)",
      "Small-table format: 6 players per table",
      "Price: INR 649/pax (₹500 workshop + ₹149 F&B cafe voucher included)",
      "Payment via UPI QR with instant WhatsApp confirmation (+91 82371 32553)",
      "Guided facilitation and debrief by Bharat Play"
    ],
    media: [
      {
        type: "image",
        url: "/cr.webp",
        title: "City Runners · Tabletop Game Board",
        caption: "Cooperative strategy game simulating livable cities & urban governance",
      },
      {
        type: "image",
        url: "/cr2.webp",
        title: "Interactive Classroom & Workshop Play",
        caption: "Multi-player table pods making collective city decisions",
      },
      {
        type: "image",
        url: "/events_media/serious_games_saturday/saturday_slide_1.jpg",
        title: "Screen-Free Community Play",
        caption: "Friends and families collaborating around physical serious games",
      },
      {
        type: "video",
        url: "/events_media/serious_games_saturday/saturday_video_1.mp4",
        poster: "/events_media/serious_games_saturday/saturday_slide_3.jpg",
        title: "Live Tabletop Gameplay",
        caption: "Participants making tactical moves and trade-offs",
      },
    ],
    status: "upcoming",
  },

  // =========================================================================
  // 3. 18th Nov : CITY RUNNERS Workshop @ Alliance Française de Bangalore
  //    Slots: 1. 11 AM - 1 PM, 2. 4 PM - 6 PM | Free Entry
  //    Venue: Alliance Française de Bangalore
  // =========================================================================
  {
    id: "city-runners-workshop-bangalore",
    date: "2026-11-18",
    formattedDate: "Wednesday, 18 Nov 2026",
    time: "Slot 1: 11:00 AM – 1:00 PM · Slot 2: 4:00 PM – 6:00 PM",
    title: "CITY RUNNERS Workshop · Alliance Française de Bangalore",
    category: "Cooperative Strategy & Urban Governance Workshop",
    game: "CITY RUNNERS",
    venue: "Alliance Française de Bangalore",
    venueAddress: "Alliance Française de Bangalore, 108 Thimmaiah Road, Vasanth Nagar, Bengaluru, Karnataka 560052",
    city: "Bengaluru",
    capacity: "2 Dedicated Sessions · Free Entry (Registration Required)",
    price: "Free Entry",
    badge: "Free Entry · Limited Seats",
    ageGroup: "Open for all (Students, Civic Leaders, Families & Urban Enthusiasts)",
    duration: "2 Hours per session",
    language: "English & Kannada",
    collaborator: {
      name: "Alliance Française de Bangalore",
      logo: "/partners/alliance-francaise.svg",
      url: "https://bangalore.afindia.org",
      label: "Collaborated with Alliance Française de Bangalore",
    },
    slots: [
      "11:00 AM – 1:00 PM",
      "4:00 PM – 6:00 PM",
    ],
    description: "CITY RUNNERS Workshop at Alliance Française de Bangalore on 18th Nov 2026. Two sessions: 11 AM - 1 PM & 4 PM - 6 PM. Free Entry — reserve your seat today!",
    about: [
      "Join Bharat Play at Alliance Française de Bangalore on Wednesday, 18th November 2026, for a hands-on guided simulation workshop of our award-winning cooperative strategy game: CITY RUNNERS.",
      "CITY RUNNERS invites players into an immersive simulation of urban governance, public transit, liveability, and civic resource allocation. You'll tackle real-world urban crises together, balancing budgets, citizen happiness, and sustainable infrastructure.",
      "Sessions & Time Slots on 18th Nov 2026:",
      "• Slot 1 (Morning): 11:00 AM – 1:00 PM",
      "• Slot 2 (Evening): 4:00 PM – 6:00 PM",
      "Venue: Alliance Française de Bangalore, 108 Thimmaiah Road, Vasanth Nagar, Bengaluru, Karnataka 560052.",
      "Admission: Free Entry! Seating is strictly limited per table to preserve an engaging, high-interaction tabletop experience. Please register in advance to guarantee your spot."
    ],
    highlights: [
      "Date: Wednesday, 18 Nov 2026",
      "Slot 1: 11:00 AM – 1:00 PM",
      "Slot 2: 4:00 PM – 6:00 PM",
      "Venue: Alliance Française de Bangalore",
      "Price: Free Entry (Pre-registration required)",
      "Game: CITY RUNNERS — Cooperative strategy game | Livable Cities | Urban Governance",
      "Open to students, professionals, designers, civic enthusiasts, and families",
      "Interactive tabletop simulation facilitated live by the Bharat Play team"
    ],
    mapUrl: "https://maps.google.com/?q=Alliance+Française+de+Bangalore+108+Thimmaiah+Rd+Vasanth+Nagar+Bengaluru",
    media: [
      {
        type: "image",
        url: "/cr.webp",
        title: "City Runners · Tabletop Game Board",
        caption: "Cooperative strategy game simulating livable cities & urban governance",
      },
      {
        type: "image",
        url: "/cr2.webp",
        title: "Interactive Classroom & Workshop Play",
        caption: "Multi-player table pods making collective city decisions",
      },
      {
        type: "image",
        url: "/events_media/serious_games_saturday/saturday_slide_1.jpg",
        title: "Screen-Free Community Play",
        caption: "Collaborative systems thinking in an engaging, screen-free environment",
      },
      {
        type: "video",
        url: "/events_media/serious_games_saturday/saturday_video_1.mp4",
        poster: "/events_media/serious_games_saturday/saturday_slide_3.jpg",
        title: "Live Tabletop Gameplay",
        caption: "Participants making tactical moves and trade-offs",
      },
    ],
    status: "upcoming",
  },

  // =========================================================================
  // 3. 26th Nov : Special public play workshop on the occassion of NATIONAL CONSTITUTION DAY.
  //    Venue & Price to be announced soon. Pls open early bird reservations.
  //    Note. Items 2 & 3 are NOT FREE. Ticketed and Priced. We need to ascertain a fee.
  // =========================================================================
  {
    id: "national-constitution-day-workshop",
    date: "2026-11-26",
    formattedDate: "Thursday, 26 Nov 2026",
    time: "Venue & Price to be announced soon",
    title: "National Constitution Day: Special Public Play Workshop",
    category: "Public Play Workshop",
    game: "National Constitution Day Public Play Workshop",
    venue: "Venue to be announced soon",
    venueAddress: "Venue details and ticket price will be announced soon",
    city: "Venue TBA",
    capacity: "Early Bird Reservations Open · Ticketed (Not Free)",
    price: "Ticketed & Priced (Fee TBA)",
    badge: "Early Bird Reservations Open · Ticketed",
    ageGroup: "Open for all ages",
    isEarlyBird: true,
    slots: [
      "Early Bird Reservation",
    ],
    description: "Join us on 26th November for a special public play workshop celebrating National Constitution Day. Explore civic decision-making, democratic deliberation, and constitutional governance through interactive tabletop play. Early bird reservations are open now; venue and ticket details will be announced soon.",
    about: [
      "Mark your calendar for Thursday, 26th November 2026, for a special public play workshop on the occasion of National Constitution Day.",
      "This experiential simulation brings constitutional principles, democratic deliberation, and collaborative civic dilemmas to the game table in a compelling, interactive format.",
      "Early bird reservations are open now to express your interest and secure priority access.",
      "Venue details and ticket pricing will be announced soon. This is a ticketed event with early bird seats available upon announcement."
    ],
    highlights: [
      "Date: Thursday, 26 Nov 2026",
      "Special public play workshop celebrating National Constitution Day",
      "Interactive simulation exploring constitutional values and collective decision-making",
      "Open to students, educators, policy enthusiasts, and the public",
      "Early bird reservation window open now",
      "Venue and ticket pricing to be announced soon"
    ],
    status: "upcoming",
  },

  // =========================================================================
  // 5. 5-6 Dec : CITY RUNNERS Game Exhibition + Guided Play Sessions for our next new upcoming game
  //    at TTOX WINTER CONVENTION 2026. Book your seats. Entry free.
  //    Avail special discount at the venue to buy our games. Venue: Infantry Road.
  // =========================================================================
  {
    id: "ttox-winter-convention-2026",
    date: "2026-12-05",
    formattedDate: "Sat & Sun, 05–06 Dec 2026",
    time: "5–6 Dec 2026",
    title: "TTOX WINTER CONVENTION 2026: CITY RUNNERS Exhibition + Guided Play Sessions",
    category: "Game Exhibition + Guided Play Sessions",
    game: "CITY RUNNERS + Next New Upcoming Game",
    venue: "Infantry Road",
    venueAddress: "Infantry Road, Bengaluru",
    city: "Bengaluru",
    capacity: "Book your seats · Entry free",
    price: "Entry Free",
    badge: "Entry Free · Special Venue Discount",
    venueDiscount: "Avail special discount at the venue to buy our games",
    collaborator: {
      name: "TTOX",
      logo: "/partners/ttox.png",
      url: "https://ttox.in",
      label: "Collaborated with TTOX",
    },
    slots: [
      "05 Dec · Book Your Seat",
      "06 Dec · Book Your Seat",
    ],
    description: "Visit the Bharat Play pavilion at TTOX Winter Convention 2026 on 5–6 December at Infantry Road, Bengaluru. Featuring a live CITY RUNNERS game exhibition and exclusive guided play sessions for our upcoming new tabletop release. Free entry with special venue discounts available on all Bharat Play games!",
    about: [
      "Bharat Play heads to the prestigious TTOX Winter Convention 2026 on 5–6 December 2026 at Infantry Road, Bengaluru.",
      "Explore our full CITY RUNNERS exhibition and be among the first to experience guided play sessions for our upcoming new tabletop game.",
      "Dates: Saturday & Sunday, 5–6 December 2026 · Venue: Infantry Road, Bengaluru.",
      "Admission: Free Entry! Reserve your play session seats in advance to ensure table time with our game designers and facilitators.",
      "Exclusive Convention Offer: Avail special on-venue discounts to purchase Bharat Play games and collector editions."
    ],
    highlights: [
      "Dates: Saturday & Sunday, 05–06 Dec 2026",
      "Venue: Infantry Road, Bengaluru",
      "In collaboration with TTOX (TableTop OdiX)",
      "CITY RUNNERS Live Game Exhibition",
      "Exclusive preview and guided play sessions for our upcoming new tabletop game",
      "Admission: Free Entry (advance seat reservation recommended)",
      "Special venue discounts available to purchase Bharat Play games"
    ],
    status: "upcoming",
  },
];

export function hasConfirmedVenueAndPrice(event: ScheduledEvent): boolean {
  const v = (event.venue || "").trim().toLowerCase();
  const p = (event.price || "").trim().toLowerCase();

  // Venue must be specified and not be a placeholder/TBA
  const hasNoVenue =
    !v ||
    v.includes("to be announced") ||
    v.includes("tba") ||
    v.includes("announced closer") ||
    v.includes("announced soon");

  // Price must be specified and not be a placeholder/TBA
  const hasNoPrice =
    !p ||
    p.includes("to be announced") ||
    p.includes("fee tba") ||
    p.includes("tba") ||
    p.includes("announced soon");

  return !hasNoVenue && !hasNoPrice;
}

export function getUpcomingEvents(): ScheduledEvent[] {
  // Only return upcoming events that have confirmed venue and price
  return EVENTS_DATA.filter(
    (e) => e.status === "upcoming" && hasConfirmedVenueAndPrice(e)
  ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function getConductedEvents(): ScheduledEvent[] {
  return EVENTS_DATA.filter((e) => e.status === "conducted");
}

export function getEventById(id: string): ScheduledEvent | undefined {
  if (id === "serious-games-on-saturdays") {
    return EVENTS_DATA.find((e) => e.id === "saturdays-4-social-games");
  }
  if (id === "special-saturdays-4-social-games") {
    return (
      EVENTS_DATA.find((e) => e.id === "childrens-day-play-workshop") ||
      EVENTS_DATA.find((e) => e.id === "special-saturdays-4-social-games")
    );
  }
  if (
    id === "city-runners-bangalore" ||
    id === "city-runners-workshop" ||
    id === "alliance-francaise-bangalore" ||
    id === "game4change-india-festival-2026"
  ) {
    return (
      EVENTS_DATA.find((e) => e.id === "city-runners-workshop-bangalore") ||
      EVENTS_DATA.find((e) => e.id === "game4change-india-festival-2026")
    );
  }
  return EVENTS_DATA.find((e) => e.id === id);
}

export function getAllEventIds(): string[] {
  const ids = EVENTS_DATA.map((e) => e.id);
  if (!ids.includes("serious-games-on-saturdays")) {
    ids.push("serious-games-on-saturdays");
  }
  if (!ids.includes("special-saturdays-4-social-games")) {
    ids.push("special-saturdays-4-social-games");
  }
  if (!ids.includes("city-runners-bangalore")) {
    ids.push("city-runners-bangalore");
  }
  if (!ids.includes("game4change-india-festival-2026")) {
    ids.push("game4change-india-festival-2026");
  }
  return ids;
}
