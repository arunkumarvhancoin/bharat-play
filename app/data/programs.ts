export interface ProgramModule {
  number: string;
  title: string;
  description: string;
  duration?: string;
  tag: string;
}

export interface ProgramOutcome {
  title: string;
  description: string;
}

export interface ProgramAudience {
  title: string;
  description: string;
}

export interface ProgramDeliverable {
  title: string;
  description: string;
}

export interface ProgramConductedSession {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  date: string;
  venue: string;
  partner?: string;
  format: string;
  participants: string;
  description: string;
  takeaway: string;
  tag: string;
  image: string;
  galleryImages?: string[];
  videoSrc?: string;
  youtubeUrl?: string;
  youtubeEmbedUrl?: string;
  linkedinUrl?: string;
  culturalStory?: string;
  contextChallenge?: string;
  simulationDeployed?: string;
  keyInsights?: string[];
  testimonialQuote?: {
    speaker: string;
    role: string;
    quote: string;
  };
}

export interface ProgramItem {
  id: string;
  programNumber: number;
  displayNumber: string;
  name: string;
  slug: string;
  subtitle: string;
  tag: string;
  tagline: string;
  shortDescription: string;
  description: string;
  format: string;
  duration: {
    label: string;
    badge: string;
    details: string;
  };
  cohortSize: {
    min: number;
    max: number;
    label: string;
  };
  targetAudience: string;
  focusAreas: string[];
  keyHighlights: string[];
  image: string;
  leadFacilitator: string;
  institutionalBacking: string;
  ctaText: string;
  whatsappMessage: string;
  modules: ProgramModule[];
  outcomes: ProgramOutcome[];
  audiences: ProgramAudience[];
  deliverables: ProgramDeliverable[];
  faqs: { question: string; answer: string }[];
  conductedSessions: ProgramConductedSession[];
}

export const PROGRAMS: ProgramItem[] = [
  {
    id: "game-sessions",
    programNumber: 1,
    displayNumber: "01",
    name: "Game Session",
    slug: "game-sessions",
    subtitle: "CASUAL BOARD GAME PLAY SESSIONS FOR ALL AGES & GENERATIONS",
    tag: "CASUAL & PURPOSEFUL PLAY",
    tagline: "Casual board game sessions for all ages, exploring purposeful play and complex systems.",
    shortDescription: "Casual board game play sessions for all ages and generations (1 to 3 hours). Similar to typical board game cafe play, but differing in the purposeful systems nature of the games.",
    description: "Gameplay Sessions are casual board game play sessions for all ages and generations. Typically lasting anywhere between 1 hour to 3 hours, they are similar to typical board game cafe play, but differ in the purposeful, systems-driven nature of games they all engage with.",
    format: "Tabletop Simulation + Facilitated Debrief",
    duration: {
      label: "2 – 3.5 Hours",
      badge: "HALF-DAY SESSION",
      details: "90–120 mins gameplay + 45–60 mins structured cognitive debrief"
    },
    cohortSize: {
      min: 6,
      max: 36,
      label: "6 – 36 Participants (Multi-table pods)"
    },
    targetAudience: "Universities, corporate teams, civic NGOs, youth leadership cohorts, policy think tanks",
    focusAreas: [
      "Urban Livability & Governance",
      "Decision-Making under Deep Uncertainty",
      "Multi-Stakeholder Negotiation",
      "Crisis Response & Resource Allocation",
      "Systems Empathy & Civic Accountability"
    ],
    keyHighlights: [
      "Guided by certified Bharat Play Game Masters with extensive pedagogical training",
      "Customizable scenario parameters tailored to your organization's specific challenges",
      "Physical high-grade game boards, custom tokens, and live crisis card decks",
      "Rigorous debrief methodology connecting gameplay choices to organizational reality"
    ],
    image: "",
    leadFacilitator: "Dr. Balaji Kalluri, PhD & Certified Game Masters",
    institutionalBacking: "Tested across FLAME University, BITSAA Chennai, and youth civic forums.",
    ctaText: "BOOK A GAME SESSION",
    whatsappMessage: "Hi Bharat Play! I would like to book or inquire about a Game Session for our organization.",
    modules: [
      {
        number: "01",
        title: "Systems Framing & Role Allocation",
        duration: "20 Mins",
        tag: "BRIEFING",
        description: "Participants are onboarded into the simulation sandbox. Roles are assigned (Ward Commissioners, Infrastructure Engineers, Civil Society Advocates, Finance Ministers) with conflicting objectives and shared vulnerabilities."
      },
      {
        number: "02",
        title: "Active Simulation Rounds & Emergent Shocks",
        duration: "90–110 Mins",
        tag: "SIMULATION",
        description: "Teams play through multi-year strategic cycles. Unforeseen crisis cards trigger deluges, civic unrest, or fiscal droughts, forcing immediate cross-silo negotiation, trade-offs, and decisive resource deployment."
      },
      {
        number: "03",
        title: "The Cognitive Debrief & Decision Archaeology",
        duration: "45 Mins",
        tag: "DEBRIEF",
        description: "The game master leads an analytical post-mortem: Why did bottlenecks form? Who was left behind? How did cognitive biases and risk-aversion shape collective outcomes?"
      },
      {
        number: "04",
        title: "Real-World Translation & Action Map",
        duration: "25 Mins",
        tag: "SYNTHESIS",
        description: "Translating tabletop realizations into everyday team dynamics, leadership strategies, and institutional workflows."
      }
    ],
    outcomes: [
      {
        title: "Break Down Functional Silos",
        description: "Forces participants across departments or disciplines to understand interdependencies and overcome zero-sum thinking."
      },
      {
        title: "Comfort with High Uncertainty",
        description: "Builds psychological safety and muscle memory for making calculated decisions when information is incomplete."
      },
      {
        title: "Enhanced Strategic Empathy",
        description: "Experiencing the constraints of opposing stakeholders transforms adversarial mindsets into collaborative problem-solving."
      }
    ],
    audiences: [
      {
        title: "University Classrooms & B-Schools",
        description: "Public Policy, Urban Planning, Sustainability, Business Management, and Social Sciences departments."
      },
      {
        title: "Corporate Strategy & Leadership Teams",
        description: "Executive retreats, cross-functional onboarding, and risk management capability training."
      },
      {
        title: "Civic Organizations & Public Agencies",
        description: "Municipal leaders, town planners, and community organizers addressing local urban challenges."
      }
    ],
    deliverables: [
      {
        title: "Complete Game Kit Deployment",
        description: "Full tournament-grade boards, card decks, wooden tokens, and player dashboards supplied on-site."
      },
      {
        title: "Facilitator & Debrief Guide",
        description: "Printed reflection workbooks and systems thinking matrices for every attendee."
      },
      {
        title: "Post-Session Synthesis Brief",
        description: "A documented diagnostic summary capturing cohort decisions, systemic bottlenecks, and leadership insights."
      }
    ],
    faqs: [
      {
        question: "Do participants need prior board game experience?",
        answer: "Not at all. Our game masters introduce mechanics progressively in the first 15 minutes. The rules are intuitive, highly tactile, and accessible to players of all backgrounds."
      },
      {
        question: "Can sessions be conducted on-site at our campus or office?",
        answer: "Yes! We run regular sessions across our weekly community host venues (Quest @ Besant Nagar, Falling Apple, Adyar, and our Bharat Play Experience Center in Kolathur), or travel directly to your institution anywhere in India and internationally."
      },
      {
        question: "What is the ideal group size?",
        answer: "A single game table seats 6 to 12 players. For larger groups up to 36 players, we run parallel synchronized pods with dedicated game masters."
      }
    ],
    conductedSessions: [
      {
        id: "city-runners-play",
        number: "01",
        title: "CITY RUNNERS PLAY",
        subtitle: "The Flagship Indian Urban Governance Board Game Session",
        date: "03 OCT 2026",
        venue: "ATRIBS Shield Skill Hub, Chennai",
        partner: "BITSAA Chennai (BITS Pilani Alumni) & ATRIBS Global Technology",
        format: "Tabletop Urban Governance Simulation & Cognitive Debrief",
        participants: "32 Participants · Parents, Youth & BITS Alumni",
        description: "Bharat Play Innovations curated a high-impact City Runners Play session for intergenerational alumni and youth on the occasion of Gandhi Jayanti. Hosted at ATRIBS Shield Skill Hub in Chennai, the gathering brought together BITS alumni leaders and their teenage wards around the physical City Runners board to explore urban complexity without screens or digital distractions.",
        takeaway: "Less screen time. More meaningful connections. Better thinking. Collective action.",
        tag: "URBAN LIVABILITY",
        image: "",
        galleryImages: [],
        contextChallenge: "Bridging the generational disconnect between experienced corporate alumni leaders and digital-native youth when conceptualizing public infrastructure, tax allocations, municipal trade-offs, and civic responsibilities without digital screens.",
        simulationDeployed: "Full physical City Runners deployment across synchronized table pods. Each participant took on interconnected civic roles: Citizen, Mayor, MLA, Municipal Commissioner, and Contractor with conflicting scorecards, managing ward-level water, transport, healthcare, and budget crises.",
        keyInsights: [
          "Systems Thinking in Action: Participants realized within 1 round that no decision exists in isolation—an MLA's political allocation directly constrained the Mayor's flood budget and citizen health.",
          "Gadget-Free Intergenerational Deliberation: Stepping away from smartphones allowed parents and teenage wards to engage in face-to-face negotiation, debate, and collaborative problem-solving.",
          "Youth participants (Dharshini Sriram, Karan Easwar, Harish Siddharth Sriram, Jr Srivathsan) demonstrated spontaneous systems empathy toward municipal engineers and ward administrators."
        ],
        testimonialQuote: {
          speaker: "Dharshini Sriram",
          role: "BITS Pilani Graduate & Youth Participant",
          quote: "I went in expecting a debate. I came out thinking about how our cities work. All thanks to a game! What seemed like a breezy board game soon became a whole different world of power, privilege, responsibilities, protocols and of course, budgets! It clicked: this was Systems Thinking in Action."
        }
      }
    ]
  },
  {
    id: "play-workshops",
    programNumber: 2,
    displayNumber: "02",
    name: "Play Workshops",
    slug: "play-workshops",
    subtitle: "SERIOUS BOARD GAME SESSIONS · GAME AS TOOL, PLAY AS PROCESS",
    tag: "TARGETED COHORT WORKSHOPS",
    tagline: "Serious board game sessions curated for targeted audiences to deliver predefined goals.",
    shortDescription: "Serious board game play sessions curated for targeted cohorts to deliver predefined outcomes using GAME as a TOOL and PLAY as a PROCESS.",
    description: "Gameplay Workshops are serious board game play sessions curated for targeted audiences (e.g. Vocational/Industrial Trainers, Alumni members, Teachers, Learners, Public Administrators, Researchers) to deliver predefined goals and objectives for the session. It is different from any other workshop by using GAME as a TOOL, and PLAY as a PROCESS.",
    format: "Half-Day (4h) or Full-Day (7h) Intensive Lab",
    duration: {
      label: "4 to 7 Hours",
      badge: "INTENSIVE LAB",
      details: "Available as half-day immersion (4h) or comprehensive full-day intervention (7h)"
    },
    cohortSize: {
      min: 12,
      max: 60,
      label: "12 – 60 Participants"
    },
    targetAudience: "Urban planners, policy makers, enterprise sustainability heads, academic faculty, design strategists",
    focusAreas: [
      "Systems Thinking & Causal Loop Mapping",
      "Speculative Urban Futures & Horizon Scanning",
      "Participatory Policy Prototyping",
      "Climate Deluge & Disaster Resilience Roadmaps",
      "Organizational Transition & Risk Governance"
    ],
    keyHighlights: [
      "Customized workshop curriculum tailored to your sector's specific regulatory or spatial bottlenecks",
      "Integration of academic research methodologies from DTU RiskLab, Cambridge, and FLAME KUDOS",
      "Hands-on policy canvases, scenario stress-testing cards, and systems mapping artifacts",
      "Actionable executive roadmap delivered post-workshop summarizing participant outputs"
    ],
    image: "",
    leadFacilitator: "Dr. Balaji Kalluri, PhD (Systems Architect & Urban Innovator)",
    institutionalBacking: "Informed by research collaborations with Technical University of Denmark (DTU) and DBI.",
    ctaText: "INQUIRE ABOUT WORKSHOPS",
    whatsappMessage: "Hi Bharat Play! I would like to explore organizing a customized Play Workshop for our team.",
    modules: [
      {
        number: "01",
        title: "Wicked Problem Deconstruction",
        duration: "60 Mins",
        tag: "SYSTEMS MAPPING",
        description: "Mapping the operational ecosystem: identifying hidden feedback loops, perverse incentives, resource bottlenecks, and unexpressed stakeholder needs."
      },
      {
        number: "02",
        title: "Simulation Stress-Testing & Shock Scenarios",
        duration: "120 Mins",
        tag: "TABLETOP SANDBOX",
        description: "Participants enter a customized Bharat Play simulation configured with extreme stress vectors (infrastructure collapse, regulatory shifts, environmental crises)."
      },
      {
        number: "03",
        title: "Coalition Bargaining & Policy Prototyping",
        duration: "90 Mins",
        tag: "PROTOTYPING",
        description: "Working in agile cross-functional pods to draft policy cards, investment allocations, and governance compacts that withstand simulated shocks."
      },
      {
        number: "04",
        title: "Institutional Roadmap & Synthesis",
        duration: "60 Mins",
        tag: "ACTION PLAN",
        description: "Consolidating emergent insights into concrete institutional priorities, pilot proposals, and monitoring metrics."
      }
    ],
    outcomes: [
      {
        title: "Evidence-Based Consensus",
        description: "Aligns diverse stakeholders around tested solutions rather than theoretical opinions."
      },
      {
        title: "Stress-Tested Policy Roadmaps",
        description: "Exposes systemic flaws and unintended consequences before real-world capital is deployed."
      },
      {
        title: "Institutional Capacity Building",
        description: "Leaves teams with reusable systems thinking canvases, mental models, and decision rubrics."
      }
    ],
    audiences: [
      {
        title: "Municipal Agencies & Urban Development Authorities",
        description: "Smart city missions, water management boards, disaster management authorities."
      },
      {
        title: "Corporate ESG & Sustainability Teams",
        description: "Decarbonization roadmaps, supply chain circularity, and environmental risk mitigation."
      },
      {
        title: "Research Centers & Higher Education Faculty",
        description: "Curriculum co-design, interdisciplinary research alignment, and pedagogical innovation."
      }
    ],
    deliverables: [
      {
        title: "Customized Scenario Matrix",
        description: "Sector-specific simulation modules tailored to your institutional challenge."
      },
      {
        title: "Physical Workshop Canvases & Toolkits",
        description: "Reusable printed systems mapping templates, stakeholder cards, and decision journals."
      },
      {
        title: "Executive Synthesis Whitepaper",
        description: "A high-level formal briefing document outlining key findings, emergent models, and next steps."
      }
    ],
    faqs: [
      {
        question: "Can the workshop address our company's proprietary data or challenges?",
        answer: "Yes. In our preparatory phase, we conduct pre-workshop scoping interviews to tailor the scenario mechanics to your exact operational reality under NDA."
      },
      {
        question: "How long in advance should we schedule a workshop?",
        answer: "We typically recommend booking 3 to 4 weeks in advance to allow for contextual customization and participant briefing materials."
      },
      {
        question: "What is the recommended participant mix?",
        answer: "We strongly encourage an interdisciplinary mix: engineers, planners, finance, HR, and field operators. The magic happens across silos."
      }
    ],
    conductedSessions: [
      {
        id: "carnival-games-for-good",
        number: "01",
        title: "CARNIVAL OF GAMES FOR GOOD: 5-DAY SERIOUS GAME DESIGN BOOTCAMP",
        subtitle: "Navaratri Serious Game Design & Youth Leadership · 8 Play Sessions · 6 Thematic Games",
        date: "16 – 20 OCT 2026",
        venue: "The Learning Community at Quest, Besant Nagar, Chennai",
        partner: "Mission Play2ProgressIndia & Young Designers Network",
        format: "5-Day Serious Game Design & Youth Leadership Bootcamp",
        participants: "12 Young Leaders (Ages 12–16) · ₹6,500",
        description: "What if games could do more than entertain? What if they could help children understand the world, make better decisions, and imagine positive change? Carnival of Games for Good is a 5-day purposeful learning and development bootcamp designed with a purpose beyond winning. Over 5 intensive days in Besant Nagar, Chennai, children aged 12–16 explore four Global Grand Challenges—Just & Inclusive Planning, Disasters & Resilience, Clean Energy Transition, and Waste & Circular Economy—through IMAGINE • PLAY • CREATE • SOLVE.",
        takeaway: "Games that are fun to play. Ideas that matter. Strengthening youth intellectual power to edge past AI through purposeful play.",
        tag: "SERIOUS GAME BOOTCAMP",
        image: "",
        galleryImages: [],
        linkedinUrl: "https://www.linkedin.com/events/7512524011445317632/",
        contextChallenge: "Combating digital distraction and passive screen addiction during festival holidays by immersing teenagers into real-world complex systems and collaborative game design.",
        simulationDeployed: "Rapid-cycle prototyping labs across 6 thematic tabletop games, including City Runners micro-scenarios, energy dispatch boards, and disaster response decks, teaching youth systems thinking to edge past AI.",
        keyInsights: [
          "12 aspirational young leaders aged 12–16 collaborated over 15 hours to unpack wicked problems concerning the future of human settlements.",
          "Children moved from passive players to creative game designers, creating playable artifacts that embed empathy and civic stewardship.",
          "Directly connected to Dr. Balaji Kalluri's mission under Play2ProgressIndia to position play at the heart of 21st-century youth capability."
        ],
        testimonialQuote: {
          speaker: "Harika Sriram Anantha",
          role: "Creative Designer & Collaborator",
          quote: "It was a genuinely wonderful experience working with young minds on serious game design, and inspiring to see the thought and effort Dr. Balaji Kalluri puts into building something that creates real impact in society through play."
        }
      },
      {
        id: "resilience-starts-at-home",
        number: "02",
        title: "NAVRATRI / VIJAYADASAMI: RESILIENCE STARTS AT HOME",
        subtitle: "Inter-generational Gameplay Workshop | Navratri / Vijayadasami 2026 · Chrompet, Chennai",
        date: "20 OCT 2026",
        venue: "Inner Companion Sanctuary, Chrompet, Chennai",
        partner: "Inner Companion Alternative Learning & Research Foundation, ASSIST & Chennai Resilience Centre",
        format: "Participatory Family Play Workshop & Community Countermapping",
        participants: "Families, Children (Age 8+) & Neighborhood Volunteers",
        description: "Marking solidarity with the UN International Day for Disaster Risk Reduction on the auspicious occasion of Vijayadasami / Navratri, Bharat Play curated an immersive family play workshop in Chrompet, Chennai. Grounded in the cultural theme of Maa Shailaputri (inner resilience), the workshop deployed the Master of Disasters (MoD) board game followed by a guided countermapping activity connecting gameplay intuition with Chennai's real flood, heatwave, and drought topography.",
        takeaway: "Resilience starts at home: true disaster preparedness begins at the family dining table, validated through playful community countermapping.",
        tag: "NAVRATRI WORKSHOP",
        image: "/events_media/linkedin/resilience_at_home.jpg",
        galleryImages: [
          "/events_media/linkedin/resilience_at_home.jpg"
        ],
        youtubeUrl: "https://www.youtube.com/watch?v=wSgVKx3J54w",
        youtubeEmbedUrl: "https://www.youtube.com/embed/wSgVKx3J54w",
        linkedinUrl: "https://lnkd.in/p/gM6Vv_Bc",
        culturalStory: "On Vijayadashami, we celebrate Durga's nine superpowers. The very first is Shailaputri — her name means daughter of the mountain. 🏔️ When storms come, a mountain doesn't move. It stands steady, and when the rain passes, it is still there.\n\nShe holds a lotus 🪷, a flower that grows right out of floodwater and rises above it.\n\nThat is what resilience means: staying steady when trouble comes, and bouncing back after. And just like Shailaputri is where the nine powers begin, resilience begins at home — with your own family.\n\nSo let's find our mountain-strength together, by playing! 🎲",
        contextChallenge: "Making disaster preparedness actionable and anxiety-free for urban families living in Chennai's high-risk flood and drought basins, moving beyond government alerts into household resilience routines.",
        simulationDeployed: "Master of Disasters (MoD) serious simulation coupled with physical spatial counter-mapping worksheets where parents and children jointly plotted micro-level flood inundation points, neighborhood water assets, and decentralized community emergency hubs.",
        keyInsights: [
          "Families uncovered 8 critical household vulnerability points (open electrical mains, medicine storage, drinking water reserves) during simulated heatwave and flash flood cards.",
          "Pioneered a 'Pay From Your Heart' solidarity model: participants contributed what felt right for what they received and for the next family.",
          "Participants bridged ancient cultural metaphors of Shailaputri with cutting-edge UN Sendai Framework disaster risk reduction benchmarks."
        ],
        testimonialQuote: {
          speaker: "Arasu Gunasekaran",
          role: "Community Coordinator & Facilitator, ASSIST / Inner Companion",
          quote: "The workshop nurtured the ability to unlock the power of resilience within us. Blending Master of Disasters with Chennai's lived risk landscape made preparedness a shared family habit rather than a government circular."
        }
      },
      {
        id: "quest-alliance-vocational-trainers-bibo",
        number: "03",
        title: "GREEN SKILLS & VOCATIONAL TRAINER CAPACITY: BiBo WORKSHOP",
        subtitle: "BiBo Serious Game Capacity Development Training for Vocational Trainers · Chennai",
        date: "APR 2026",
        venue: "Quest Alliance Center, Chennai",
        partner: "Quest Alliance (Gujarat) & City Atlas",
        format: "Vocational Trainer Capacity Development & Serious Game Workshop",
        participants: "Vocational Trainers, Grassroots Educators & Skilling Leaders",
        description: "Co-developed, curated, and facilitated by Bharat Play Innovations in partnership with Quest Alliance (Gujarat) using the BiBo Board Game in Chennai. Educating and inspiring vocational trainers who train youth entering retail, hospitality, BPO/ITES, and wellness sectors to make green skills, climate change, and environmental impact comprehensible, actionable, and aspirational within planetary boundaries.",
        takeaway: "Using GAME as a TOOL and PLAY as a PROCESS to translate green skills and planetary boundaries into tangible career pathways for vocational trainers and grassroots youth.",
        tag: "VOCATIONAL TRAINING",
        image: "/events_media/linkedin/bibo_workshop_1.jpg",
        galleryImages: [
          "/events_media/linkedin/bibo_workshop_1.jpg",
          "/events_media/linkedin/bibo_workshop_2.jpg",
          "/events_media/linkedin/bibo_workshop_4.jpg",
          "/events_media/linkedin/bibo_workshop_5.jpg"
        ],
        linkedinUrl: "https://lnkd.in/p/gd2GD9Gx",
        contextChallenge: "Making #Green and #EnvironmentalImpact comprehensible and practicable for grassroots vocational learners and trainers, transforming complex climate concepts into dignified green career advancement.",
        simulationDeployed: "BiBo (Building-in-a-Box) serious board game and green skills experiential capacity canvas.",
        keyInsights: [
          "Fostered vocational trainers with an experiential understanding of #GREEN in the Anthropocene through BiBo tabletop simulation.",
          "Built aptitude for #GreenSkills and #GreenCareer pathways in retail, hospitality, ITES, and services.",
          "Demonstrated how play-based pedagogy catalyzes paradigm shifts in mindset and behavior within planetary boundaries."
        ],
        testimonialQuote: {
          speaker: "Dr. Balaji Kalluri, PhD",
          role: "Founder & Instructional Designer, Bharat Play Innovations",
          quote: "Making green concepts comprehensible, easily digestible, and seeding inspiration to practise them regularly—not only to meet career aspirations, but to reduce environmental impact—is what makes serious play so powerful."
        }
      },
      {
        id: "teen-vikas-singapore-workshop",
        number: "04",
        title: "SCIENCE MEETS SPIRITUALITY: TEEN VIKAS DISASTER RESILIENCE WORKSHOP",
        subtitle: "Preparing Singaporean Youth as Global Environmental Leaders & Disaster Resilient Pioneers",
        date: "28 FEB 2026",
        venue: "Sri Sathya Sai Vedic Society, Singapore",
        partner: "Sri Sathya Sai Vedic Society Singapore & Teen Vikas Educare",
        format: "Play-Based Spiritual & Systems Workshop on Disaster Resilience",
        participants: "Singaporean Youth, Teen Vikas Scholars, Gurus & Community Educators",
        description: "Delivered for Teen Vikas—a voluntary educare program for Singaporean youth by Sri Sathya Sai Vedic Society Singapore. Dr. Balaji Kalluri reframed youth empowerment into a play-based workshop blending Bhagwan Sri Sathya Sai Baba's divine principles and values with scientific disaster resilience. The workshop prepared youth to become ambitious global environmental leaders by honing their critical observations and developing the right mindset to contribute to a disaster-resilient world through sadhana and spiritual awakening.",
        takeaway: "Preparing youth to become ambitious global environmental leaders by blending divine spiritual values with critical observations and disaster resilience science.",
        tag: "TEEN VIKAS SINGAPORE",
        image: "/events_media/linkedin/singapore_workshop_1.jpg",
        galleryImages: [
          "/events_media/linkedin/singapore_workshop_1.jpg",
          "/events_media/linkedin/singapore_workshop_2.jpg",
          "/events_media/linkedin/singapore_workshop_3.jpg"
        ],
        linkedinUrl: "https://lnkd.in/p/gutcsFJZ",
        contextChallenge: "Preparing next-generation urban youth to confront existential planetary crises, climate anxiety, and disaster vulnerabilities with spiritual grounding, critical thinking, and proactive collective action.",
        simulationDeployed: "Interactive disaster resilience tabletop simulations, critical observation drills, and spiritual sadhana values frameworks aligned with NDMA, UNDRR, and CDRI benchmarks.",
        keyInsights: [
          "Honed critical observation skills among Singaporean youth to analyze systemic and climate vulnerabilities without fear or helplessness.",
          "Connected spiritual sadhana and inner values directly to community disaster preparedness and collective action.",
          "Collaborated with regional leadership including co-guru Ramoo Thiruppathi (RT) and drew upon frameworks aligned with National Disaster Management Authority (NDMA), UNDRR, and Coalition for Disaster Resilient Infrastructure (CDRI)."
        ],
        testimonialQuote: {
          speaker: "Dr. Balaji Kalluri, PhD",
          role: "Guru & Systems Facilitator, Bharat Play Innovations",
          quote: "This is my first attempt at preparing youth to become ambitious global environmental leaders by honing their critical observations and developing the right mindset to contribute to a disaster-resilient world through rigorous sadhana guided by spiritual awakening from deep within."
        }
      }
    ]
  },
  {
    id: "play-exhibition",
    programNumber: 3,
    displayNumber: "03",
    name: "Play Exhibition",
    slug: "play-exhibition",
    subtitle: "CURATED EXHIBITS SPARKING CURIOSITY ACROSS ALL AUDIENCES",
    tag: "PUBLIC EXHIBITION",
    tagline: "See games through a different lens and engage in purposeful gameplays in public and civic spaces.",
    shortDescription: "Curated exhibits using unique creative games to spark curiosity across all audiences to see games through a new lens and engage in purposeful gameplays in large halls, campuses, corporate offices, and museums.",
    description: "Game Exhibitions are similar to any other art, craft, book, or toy exhibitions. However, our exhibitions are curated differently using our unique collection of creative games to spark curiosity among all audiences (learned or commons) to see GAMES through a different lens, and intrigue them to ENGAGE IN PURPOSEFUL GAMEPLAYS. Typically, our exhibits are conducted in large enclosed halls in educational institutions, housing societies, corporate offices, science parks, museums, and public events.",
    format: "Multi-Day Pop-up or Semi-Permanent Installation",
    duration: {
      label: "1 to 7+ Days",
      badge: "PUBLIC INSTALLATION",
      details: "Configurable as weekend pop-up, conference pavilion, or multi-week museum installation"
    },
    cohortSize: {
      min: 50,
      max: 2500,
      label: "50 – 2,500+ Visitors / Day (Open Access)"
    },
    targetAudience: "Cultural festivals, design biennales, smart city expos, universities, science centers, public plazas",
    focusAreas: [
      "Civic Awareness & Public Participation",
      "Democratizing Urban Infrastructure & Climate Science",
      "Intergenerational Dialogue (Youth & Elders)",
      "Playable Cities & Cultural Placemaking",
      "Interactive Citizen Voting & Data Walls"
    ],
    keyHighlights: [
      "Oversized life-size game elements: giant city maps, physical crisis markers, and touchable infrastructure tokens",
      "Trained student docents and Bharat Play facilitators providing continuous gameplay walkthroughs",
      "Curated exhibition narrative tracing the transition from Kudos research to Bharat Play Innovations",
      "Interactive citizen feedback wall generating crowdsourced data on local neighborhood priorities"
    ],
    image: "/events_media/linkedin/exhibition_launch.jpg",
    leadFacilitator: "Curatorial Team & Bharat Play Experience Guild",
    institutionalBacking: "Featured across public civic gatherings, BITSAA celebrations, and university festivals.",
    ctaText: "HOST A PLAY EXHIBITION",
    whatsappMessage: "Hi Bharat Play! We are interested in hosting or curating a Play Exhibition at our venue/event.",
    modules: [
      {
        number: "01",
        title: "The Urban Sandbox (Walk-Through Zone)",
        duration: "Self-Paced",
        tag: "SPATIAL EXHIBIT",
        description: "Visitors navigate a large-scale spatial grid representing an interconnected Indian megacity, exploring real-time tension between economic growth and ecological limits."
      },
      {
        number: "02",
        title: "Live Play Pods (Micro-Simulations)",
        duration: "15–30 Mins",
        tag: "HANDS-ON PLAY",
        description: "Continuous 20-minute rapid play sessions where visitors drop in, resolve a sudden municipal deluge or energy blackout, and experience collective consequence."
      },
      {
        number: "03",
        title: "The Citizen Deliberation Wall",
        duration: "Interactive",
        tag: "CIVIC DATA",
        description: "An analog voting and ideation wall where visitors cast token votes on real urban policies, creating a visual heat map of public sentiment."
      },
      {
        number: "04",
        title: "Curator Talks & Fireside Discussions",
        duration: "Scheduled",
        tag: "PUBLIC TALKS",
        description: "Keynote talks by Dr. Balaji Kalluri and guest urbanists exploring purposeful play, climate resilience, and participatory democracy."
      }
    ],
    outcomes: [
      {
        title: "Mass Civic Engagement",
        description: "Engages thousands of citizens of all ages in serious civic and climate themes without textbook jargon."
      },
      {
        title: "High-Visibility Cultural Impact",
        description: "Creates striking visual, photo-worthy, and media-friendly cultural moments for host institutions."
      },
      {
        title: "Crowdsourced Urban Insights",
        description: "Collects authentic public opinions and community aspirations through participatory voting artifacts."
      }
    ],
    audiences: [
      {
        title: "Architecture & Design Biennales",
        description: "Interactive showcase of speculative urbanism, game aesthetics, and spatial participatory tools."
      },
      {
        title: "Universities & Academic Conclaves",
        description: "Campus-wide festivals, orientation weeks, and international academic symposia."
      },
      {
        title: "Government Summits & Urban Expos",
        description: "Public engagement pavilions showcasing citizen-centric smart governance and green infrastructure."
      }
    ],
    deliverables: [
      {
        title: "Complete Pavilion Architecture",
        description: "Modular exhibition stands, custom signage, interactive game tables, and lighting elements."
      },
      {
        title: "On-Site Facilitation Crew",
        description: "Trained experience guides and game masters managing visitor flow and interactive sessions."
      },
      {
        title: "Visitor Activity Passports",
        description: "Custom printed citizen gameplay passports and educational takeaways for every guest."
      }
    ],
    faqs: [
      {
        question: "What physical space is needed for a Play Exhibition?",
        answer: "We offer modular setups: from compact 400 sq.ft atrium pavilions to sprawling 2,500+ sq.ft multi-zone exhibitions."
      },
      {
        question: "Can the exhibition be held outdoors?",
        answer: "Yes, provided there is covered pavilion or canopy protection from direct rain and extreme sun."
      },
      {
        question: "How long does setup and dismantling take?",
        answer: "Our modular kits are designed for rapid deployment: typically 4 to 6 hours for setup and 3 hours for takedown."
      }
    ],
    conductedSessions: [
      {
        id: "bharat-play-launch-exhibition",
        number: "01",
        title: "BHARAT PLAY INNOVATIONS: INAUGURATION & SYSTEMS EXHIBITION",
        subtitle: "Official Launch of Bharat Play Innovations · Pioneering the Future of Learning & Play",
        date: "16 JUL 2026",
        venue: "KUDOS Innovation Studio & Bharat Play Headquarters, Pune",
        partner: "Bharat Play Innovations International Pvt Ltd",
        format: "Inaugural Systems Exhibition & Experiential Play Showcase",
        participants: "Founding Advisors, University Leadership, Civic Collaborators & Guests",
        description: "Joyous celebration and official launch of Bharat Play Innovations International Private Limited. Unveiling our foundational suite of uniquely crafted interdisciplinary playful games and experiential learning programs designed to shape the future of learning, civic empathy, and skill development across all ages and segments.",
        takeaway: "Shaping the future of learning and skill development through uniquely crafted, interdisciplinary play for all ages.",
        tag: "OFFICIAL LAUNCH",
        image: "/events_media/linkedin/exhibition_launch.jpg",
        galleryImages: [
          "/events_media/linkedin/exhibition_launch.jpg"
        ],
        linkedinUrl: "https://lnkd.in/p/gYbZRDkf",
        contextChallenge: "Breaking free from passive, siloed academic training by pioneering inter- and multi-disciplinary tabletop games that turn complex social, urban, and ecological systems into joyful, participatory encounters.",
        simulationDeployed: "Inaugural exhibition showcase of Bharat Play's physical serious games suite, foundational curriculum roadmaps, and experiential learning toolkits for institutions and communities.",
        keyInsights: [
          "Officially incorporated and celebrated the launch of Bharat Play Innovations International Private Limited on 16th July.",
          "Received widespread congratulations and validation from academic and industry leaders across India.",
          "Set the foundational roadmap for nation-wide deployment across schools, universities, civic bodies, and enterprises."
        ],
        testimonialQuote: {
          speaker: "Dr. Balaji Kalluri, PhD",
          role: "Founder & Managing Director, Bharat Play Innovations",
          quote: "We pioneer in shaping the future of learning and skill development through our uniquely crafted inter-and-multi disciplinary playful games, and experiential programs for all ages and all segments."
        }
      },
      {
        id: "bavdhan-pune-summer-games-exhibition",
        number: "02",
        title: "SUMMER EXPERIENTIAL GAMES EXHIBITION: BAVDHAN, PUNE",
        subtitle: "Curated Summer Experiential Games Showcase for Parents, Teachers & Children",
        date: "19 APR 2026",
        venue: "Residential Society Amphitheatre, Bavdhan, Pune",
        partner: "Play2ProgressIndia & Bharat Play Innovations",
        format: "Free Community Experiential Games Exhibition & Interactive Walkthrough",
        participants: "Parents, Teachers, Children, Youth & Society Residents",
        description: "A unique summer experiential games exhibition curated by Dr. Balaji Kalluri for parents, teachers, and children in Bavdhan, Pune. Co-facilitated by Abhijoy Banerjee and Saharsh Kanchan, this open experiential showcase created a welcoming space for families to experience tabletop learning firsthand, fostering screen-free intergenerational bonding, critical thinking, and civic problem-solving.",
        takeaway: "Empowering children and inspiring families to move beyond screens through purposeful, joy-filled tabletop play that builds 21st-century citizenship.",
        tag: "BAVDHAN EXHIBITION",
        image: "/events_media/linkedin/bavdhan_flyer_1.jpg",
        galleryImages: [
          "/events_media/linkedin/bavdhan_flyer_1.jpg",
          "/events_media/linkedin/pune_exhibition_1.jpg",
          "/events_media/linkedin/pune_exhibition_2.jpg",
          "/events_media/linkedin/pune_exhibition_3.jpg",
          "/events_media/linkedin/pune_exhibition_4.jpg"
        ],
        linkedinUrl: "https://lnkd.in/p/gMYN-CfX",
        contextChallenge: "Breaking digital screen addiction among children during summer vacations and helping parents and educators discover how games can be tools for character building, systems empathy, and creative problem-solving.",
        simulationDeployed: "Interactive walk-through of foundational civic and ecological tabletop simulations: City Runner, EnergeticPlay, Master of Disaster, BiBo, Prospera, CybFlash, and student-designed serious games.",
        keyInsights: [
          "Curated specifically for parents, teachers, and children in Bavdhan, Pune by Dr. Balaji Kalluri with co-facilitators Abhijoy Banerjee and Saharsh Kanchan.",
          "Provided parents with tangible alternatives to smartphone entertainment, proving that physical tabletop games foster deeper attention spans and collaboration.",
          "Community feedback highlighted the transformative potential of neighborhood-level game exhibitions for social cohesion and civic education."
        ],
        testimonialQuote: {
          speaker: "Dr. Balaji Kalluri, PhD",
          role: "Curator, Host & Play Evangelist",
          quote: "I'm writing to extend a warm invitation to a unique summer experiential games exhibition curated for parents, teachers, and children. Looking forward to seeing as many of you with your little ones to experience the power of purposeful play."
        }
      },
      {
        id: "pune-housing-society-game-exhibition",
        number: "03",
        title: "PLAY GAMES TO LEARN, SKILL, AND CHANGE",
        subtitle: "Curated Public Community Game Exhibition on Good Play, Purposeful Play & Civic Futures",
        date: "19 APR 2026",
        venue: "Housing Society Community Hall & Amphitheatre, Pune",
        partner: "Play2ProgressIndia & KUDOS (Kalluri's Urban Design & Open Innovation Studio)",
        format: "Curated Public Game Exhibition & Guided Tabletop Walk-Through",
        participants: "Parents, Children, Youth, Teachers, Volunteers & Community Residents",
        description: "Curated by Dr. Balaji Kalluri and Abhijoy Banerjee on the theme of 'play games to learn, skill, and change' in an enclosed housing society hall in Pune. Featuring guided walkthroughs of popular tabletop games including EnergeticPlay, Master of Disaster, City Runner, Prospera, BiBo, CybFlash, CASCADE, Green Day, Climate Fresk, and student-designed simulations from FLAME University. The exhibition challenged social norms around gaming, educating parents and teachers about #GoodPlay, fostering #PurposefulPlay, and building a community of #GoodGamers and #ResponsibleCitizens.",
        takeaway: "Challenging social norms around games to shape 21st-century problem-solving, empathy, and responsible citizenship through purposeful play.",
        tag: "COMMUNITY EXHIBITION",
        image: "/events_media/linkedin/pune_exhibition_1.jpg",
        galleryImages: [
          "/events_media/linkedin/pune_exhibition_1.jpg",
          "/events_media/linkedin/pune_exhibition_2.jpg",
          "/events_media/linkedin/pune_exhibition_3.jpg",
          "/events_media/linkedin/pune_exhibition_4.jpg",
          "/events_media/linkedin/pune_exhibition_5.jpg"
        ],
        linkedinUrl: "https://lnkd.in/p/gNqGd_F6",
        contextChallenge: "Challenging the social norm and changing public perception (especially among parents and teachers) about playing games, educating about #GoodPlay, and moving beyond narrow career fears to raise #GoodCitizens.",
        simulationDeployed: "Guided walk-through of popular tabletop games: EnergeticPlay, Master of Disaster, City Runner, Prospera, BiBo, CybFlash, CASCADE, Green Day, Climate Fresk, and creative simulations designed by FLAME University students.",
        keyInsights: [
          "Posed 5 self-reflective questions to parents, children, and teachers about gaming perceptions, societal fears for 2047, and educational adequacy.",
          "Demonstrated how serious play empowers children with grit, compassion, and ambition to solve wicked 21st-century urban and ecological challenges.",
          "Overwhelming consensus from parents that engaging children in purposeful play co-creates a better future for both child and society."
        ],
        testimonialQuote: {
          speaker: "Dr. Balaji Kalluri & Abhijoy Banerjee",
          role: "Curators, Play2ProgressIndia & KUDOS",
          quote: "The open, free walkthrough exhibition not only aroused curiosity among children to play, but opened parents' minds to think beyond careers—understanding their role in raising a good citizen by engaging in purposeful play."
        }
      }
    ]
  },
  {
    id: "courses",
    programNumber: 4,
    displayNumber: "04",
    name: "Courses",
    slug: "courses",
    subtitle: "PLAY-BASED INTERDISCIPLINARY ACADEMIC COURSES",
    tag: "INTERDISCIPLINARY COHORT COURSES",
    tagline: "Unique play-based interdisciplinary courses for graduates and undergraduates across Policy, Humanities, Engineering, Business, and Design.",
    shortDescription: "Play-based interdisciplinary courses for graduates & undergraduates: Environmental Leadership, Disaster Preparedness & Risk Management, Internet-of-Things (IoT), and Urban Futures.",
    description: "Bharat Play offers unique, simulation-driven academic courses for undergraduate and graduate students across Policy, Humanities & Social Sciences, Engineering & Technology, Business & Entrepreneurship, and Art, Architecture, and Design. Courses cover Environmental Leadership, Disaster Preparedness & Risk Management, Internet-of-Things, and Urban Futures, benchmarked against institutions such as FLAME, IITs, ETH Zurich, DTU Denmark, NUS, and IIHS.",
    format: "Experiential Studios & Tabletop Systems Labs",
    duration: {
      label: "Semester Studios & Intensive Cohorts",
      badge: "ACADEMIC & COHORT",
      details: "Full-semester 2-4 credit courses or intensive multi-day studios"
    },
    cohortSize: {
      min: 15,
      max: 45,
      label: "15 – 45 Learners / Cohort"
    },
    targetAudience: "Undergraduate & postgraduate students across Policy, Humanities, Engineering, Business, Art & Architecture",
    focusAreas: [
      "Environmental Leadership (Planetary Boundaries & Net-Zero Transitions)",
      "Disaster Preparedness & Risk Management (Hazard Modeling & Crisis Sandboxes)",
      "Internet-of-Things (IoT) (Sensor Grids, Telemetry & Cyber-Physical Security)",
      "Urban Futures (Municipal Governance & City Simulation)"
    ],
    keyHighlights: [
      "Taught by Master Instructor Dr. Balaji Kalluri, PhD (IISc Top-100 Design Educator, NUS & DTU Alumnus)",
      "Accompanied by guest instructors from IITM, IITK, IITKGP, NUS, DTU, Iowa State, FLAME, CEPT, and IISc",
      "Students rapid-prototype real gamified simulations on Urban Flooding, Landslides, Air Crashes, Heat Action Plans, and Cyber Risks",
      "Rigorous academic curriculum benchmarked against FLAME, IITs, ETH Zurich, DTU Denmark, NUS, and IIHS"
    ],
    image: "",
    leadFacilitator: "Dr. Balaji Kalluri, PhD (Master Instructor) & Global Guest Instructors",
    institutionalBacking: "Benchmarked with FLAME, IITs, ETH Zurich, DTU Denmark, NUS, and IIHS.",
    ctaText: "ENROLL / INQUIRE ABOUT COURSES",
    whatsappMessage: "Hi Bharat Play! I would like to enroll/inquire about the interdisciplinary courses (Environmental Leadership, Disaster Preparedness, IoT, and Urban Futures).",
    modules: [
      {
        number: "01",
        title: "Environmental Leadership",
        duration: "Core Vertical",
        tag: "ENV401 · INTERDISCIPLINARY",
        description: "An intensive play-based studio exploring planetary boundaries, ecological dilemmas, carbon budgeting, and green transition trade-offs using tabletop models."
      },
      {
        number: "02",
        title: "Disaster Preparedness & Risk Management",
        duration: "Core Vertical",
        tag: "DRR301 · INTERDISCIPLINARY",
        description: "An experiential studio exploring natural and anthropogenic hazards, emergency budget trade-offs, cascading infrastructure failures, and community disaster preparedness through serious tabletop crisis sandboxes."
      },
      {
        number: "03",
        title: "Internet-of-Things (IoT)",
        duration: "Core Vertical",
        tag: "IOT201 · INTERDISCIPLINARY",
        description: "A foundational hands-on course introducing sensor networks, edge intelligence, connected urban infrastructure, and cyber-physical security simulations (CASCADE)."
      },
      {
        number: "04",
        title: "Urban Futures",
        duration: "Core Vertical",
        tag: "URB501 · INTERDISCIPLINARY",
        description: "Explore the operational and spatial realities of 21st-century cities. Using City Runners and Prospera, students step into the shoes of commissioners, town planners, and citizen collectives."
      }
    ],
    outcomes: [
      {
        title: "Experiential Systems Mastery",
        description: "Move beyond dry textbook theory to grasp non-linear trade-offs in disaster mitigation and connected IoT infrastructure."
      },
      {
        title: "Student-Created Serious Games & Prototypes",
        description: "Learners design, balance, and test physical tabletop models representing real-world systemic trade-offs."
      }
    ],
    audiences: [
      {
        title: "Undergraduate & Graduate Scholars",
        description: "Students in environmental studies, public policy, computer science, information technology, and design."
      },
      {
        title: "Higher Education Faculty & Educators",
        description: "Professors seeking to convert lecture-heavy curriculum into experiential, game-based learning studios."
      },
      {
        title: "Civic & Technology Leaders",
        description: "Professionals looking to apply serious simulations to smart city infrastructure and disaster risk reduction."
      }
    ],
    deliverables: [
      {
        title: "Complete Course Syllabus & Case Readers",
        description: "Curated research papers, FLAME University syllabus materials, and simulation design templates."
      },
      {
        title: "Physical Prototyping Kits & Game Assets",
        description: "Tabletop boards, risk markers, resource tokens, and custom print-and-play simulation decks."
      },
      {
        title: "Academic Credential & Systems Thinking Certificate",
        description: "Documentation of completed coursework, playable game prototypes, and systems debrief design."
      }
    ],
    faqs: [
      {
        question: "Where and when are these courses conducted?",
        answer: "ENVS102 (Disasters-Natural & Man-Made) takes place on 25th April, Sat. CSIT122 (Introduction to Internet-of-Things) takes place on 23rd April, Thur. Sessions are held in dedicated experiential studio environments with physical tabletop simulations."
      },
      {
        question: "Who can enroll in ENVS102 and CSIT122?",
        answer: "Both courses are open to university students, higher education scholars, corporate practitioners, urban professionals, and civic enthusiasts looking to build practical systems thinking and technical literacy through purposeful play."
      },
      {
        question: "Can these courses be adapted for custom university cohorts or corporate teams?",
        answer: "Yes. In addition to our scheduled public cohorts on April 23rd and April 25th, Bharat Play customizes and delivers both courses directly on campus or at institutional training facilities."
      }
    ],
    conductedSessions: [
      {
        id: "disasters-natural-man-made-envs102",
        number: "01",
        title: "ENVS102 : DISASTERS-NATURAL & MAN-MADE",
        subtitle: "Play-Based Hazard Mitigation & Disaster Risk Governance Studio",
        date: "25th April, Sat",
        venue: "FLAME University Campus & Bharat Play Learning Centers",
        partner: "Department of Environmental Studies & Bharat Play Innovations",
        format: "Experiential Studio & Tabletop Hazard Simulation",
        participants: "Undergraduate & Graduate Scholars, Civic Leaders & Aspiring Civil Servants",
        description: "Disasters-Natural & Man-Made (ENVS102) is Dr. Balaji Kalluri's premier course exploring natural and anthropogenic hazards through serious games, risk simulations, and experiential activities. Scheduled on 25th April (Sat), the course immerses learners in emergency budget trade-offs, warning dissemination latencies, cascading infrastructural failures, and community disaster response without relying on dry textbook slides.",
        takeaway: "Students don't just memorize hazard definitions—they experience the panic, delayed response, and resource trade-offs of disasters by designing and playtesting simulations.",
        tag: "ENVS102 · 25 APR SAT",
        image: "",
        galleryImages: [],
        contextChallenge: "Moving disaster education beyond passive textbook case studies into visceral decision-making environments where students feel the cascade of infrastructural and human failure.",
        simulationDeployed: "Master of Disasters (MoD), RiskScape crisis scenarios, and hazard mitigation sandboxes.",
        keyInsights: [
          "Visceral trade-off comprehension: balance emergency shelter budgets against floodwall reinforcement in real time.",
          "Cross-functional communication under extreme crisis latency and incomplete information.",
          "Prototyping community-first disaster response playbooks."
        ],
        testimonialQuote: {
          speaker: "Course Alum",
          role: "FLAME University Environmental Studies Student",
          quote: "ENVS102 completely transformed how I think about risk. Designing our own disaster game forced us to confront messy trade-offs between emergency budgets, evacuation time, and public trust."
        }
      },
      {
        id: "intro-to-iot-csit122",
        number: "02",
        title: "CSIT122 : INTRODUCTION TO INTERNET-OF-THINGS",
        subtitle: "Connected Systems, Sensor Networks & Smart Infrastructure Lab",
        date: "23rd April, Thur",
        venue: "Bharat Play Technology & Innovation Lab",
        partner: "Computer Science & Information Technology Faculty",
        format: "Interactive Playful Systems Lab & Cyber-Physical Prototyping",
        participants: "Engineering Students, Tech Enthusiasts & Urban Systems Innovators",
        description: "Introduction to Internet-of-Things (CSIT122) explores networked sensors, telemetry protocols, edge compute, and smart infrastructure through playful systems modeling. Scheduled on 23rd April (Thur), learners explore how physical devices interface with digital networks, experiencing feedback loops, device telemetry, and cyber-physical security through tactile simulation.",
        takeaway: "Understand how smart cities, telemetry streams, and interconnected sensors actually function together—and how to diagnose systemic failures before they occur.",
        tag: "CSIT122 · 23 APR THUR",
        image: "",
        galleryImages: [],
        contextChallenge: "Demystifying complex IoT architectures, latency issues, and cyber-physical vulnerabilities without getting bogged down in opaque digital abstraction.",
        simulationDeployed: "CASCADE cyber-physical defense simulation and IoT sensor telemetry tabletop sandbox.",
        keyInsights: [
          "Hardware-software interconnectivity: grasping sensor latency, packet integrity, and mesh architectures playfully.",
          "Smart urban infrastructure: deploying IoT for traffic, flood monitoring, and clean energy microgrids.",
          "Cyber-physical security: experiencing vulnerability mitigation and failure cascading in interconnected systems."
        ],
        testimonialQuote: {
          speaker: "Dr. Balaji Kalluri",
          role: "Lead Facilitator & Systems Engineer",
          quote: "In CSIT122, we peel back the complexity of IoT devices. Students discover that the hardest part of connected systems isn't just the code—it's managing latency, power constraints, and cascading security vulnerabilities in the physical world."
        }
      }
    ]
  }
];

export function getProgramById(id: string): ProgramItem | undefined {
  return PROGRAMS.find((p) => p.id === id || p.slug === id);
}

export function getAllProgramSlugs(): string[] {
  return PROGRAMS.map((p) => p.slug);
}
