export interface EventMediaItem {
  type: "image" | "video";
  url: string;
  poster?: string;
  title: string;
  caption?: string;
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
    game: "Discrete / Surprise Game Theme",
    venue: "Venue to be announced closer to the date",
    venueAddress: "Venue details will be shared directly with registered participants closer to the date",
    city: "Venue TBA",
    capacity: "Limited seats to 15 · Open for all ages",
    price: "₹99 / pax",
    badge: "Limited seats to 15 · ₹99/pax",
    ageGroup: "Open for all ages",
    duration: "2 Hours (5-7pm)",
    language: "English & Regional",
    slots: [
      "5:00 PM – 7:00 PM",
    ],
    description: "Keep it simple. Saturdays4SocialGames. Time: 5-7pm. Create a Reservation page to book seats. Venue to be announced closer to the date. Limited seats to 15. Open for all ages. Game theme is a kept discrete/surprise. Price: 99/pax",
    about: [
      "Keep it simple. Saturdays4SocialGames. Time: 5-7pm. Create a Reservation page to book seats. Venue to be announced closer to the date. Limited seats to 15. Open for all ages. Game theme is kept discrete/surprise. Price: 99/pax."
    ],
    highlights: [
      "Keep it simple — Saturdays4SocialGames",
      "Time: 5-7pm",
      "Limited seats to 15",
      "Open for all ages",
      "Game theme is kept discrete/surprise",
      "Price: 99/pax",
      "Venue to be announced closer to the date"
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
  //    Venue: The Board Room, Mylapore. Price: INR 499/pax
  // =========================================================================
  {
    id: "childrens-day-play-workshop",
    date: "2026-11-14",
    formattedDate: "Saturday, 14 Nov 2026",
    time: "10:00 AM – 1:00 PM",
    title: "CHILDREN'S DAY PLAY WORKSHOP : A The Board Room x Bharat Play Innovations",
    category: "Children's Day Play Workshop",
    game: "CITY RUNNERS",
    venue: "The Board Room, Mylapore",
    venueAddress: "The Board Room, Mylapore, Chennai, Tamil Nadu",
    city: "Chennai",
    capacity: "6 Players Per Table · Age 12+",
    price: "INR 499/pax",
    badge: "Children's Day Special · ₹499/pax",
    ageGroup: "12+ (parents and grandparents are encouraged to join the table)",
    duration: "3 Hours (10:00 AM – 1:00 PM)",
    language: "English & Tamil",
    slots: [
      "10:00 AM – 1:00 PM",
    ],
    description: "CHILDREN'S DAY PLAY WORKSHOP : A The Board Room x Bharat Play Innovations. Game Title: CITY RUNNERS. Cooperative strategy game | Livable Cities | Urban Governance. Bring your family and friends, and enjoy children's day like no other !",
    about: [
      "CHILDREN'S DAY PLAY WORKSHOP : A The Board Room x Bharat Play Innovations.",
      "Celebrate Children's Day with an extraordinary, screen-free tabletop simulation where players take on interconnected civic roles.",
      "Date : 14 Nov · Time : 10am to 1pm · Venue : The Board Room, Mylapore.",
      "Age: 12+ (parents and grandparents are encouraged to join the table).",
      "Game Title: CITY RUNNERS — Cooperative strategy game | Livable Cities | Urban Governance.",
      "No. of Players : 6 per table · Price: INR 499/pax.",
      "Bring your family and friends, and enjoy children's day like no other !"
    ],
    highlights: [
      "Date: 14 Nov 2026",
      "Time: 10am to 1pm",
      "Venue: The Board Room, Mylapore",
      "Age: 12+ (parents and grandparents are encouraged to join the table)",
      "Game Title: CITY RUNNERS",
      "Game Theme: Cooperative strategy game | Livable Cities | Urban Governance",
      "No. of Players: 6 per table",
      "Price: INR 499/pax",
      "Bring your family and friends, and enjoy children's day like no other !"
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
    description: "26th Nov : Special public play workshop on the occassion of NATIONAL CONSTITUTION DAY. Venue & Price to be announced soon. Pls open early bird reservations. Note: Ticketed and Priced (not free). Fee to be ascertained soon.",
    about: [
      "26th Nov : Special public play workshop on the occassion of NATIONAL CONSTITUTION DAY. Venue & Price to be announced soon. Early bird reservations are open now.",
      "Note: This event is NOT FREE. It is ticketed and priced — fee to be ascertained soon."
    ],
    highlights: [
      "26th Nov 2026",
      "Special public play workshop on the occassion of NATIONAL CONSTITUTION DAY",
      "Venue & Price to be announced soon",
      "Early bird reservations open now",
      "Ticketed and Priced (Not Free — fee to be ascertained)"
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
    slots: [
      "05 Dec · Book Your Seat",
      "06 Dec · Book Your Seat",
    ],
    description: "5-6 Dec : CITY RUNNERS Game Exhibition + Guided Play Sessions for our next new upcoming game at TTOX WINTER CONVENTION 2026. Book your seats. Entry free. Avail special discount at the venue to buy our games. Venue: Infantry Road.",
    about: [
      "5-6 Dec : CITY RUNNERS Game Exhibition + Guided Play Sessions for our next new upcoming game at TTOX WINTER CONVENTION 2026. Book your seats. Entry free. Avail special discount at the venue to buy our games. Venue: Infantry Road."
    ],
    highlights: [
      "5-6 Dec 2026",
      "CITY RUNNERS Game Exhibition",
      "Guided Play Sessions for our next new upcoming game",
      "TTOX WINTER CONVENTION 2026",
      "Book your seats — Entry free",
      "Avail special discount at the venue to buy our games",
      "Venue: Infantry Road"
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
