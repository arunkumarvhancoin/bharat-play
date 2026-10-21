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
  linkedinUrl?: string;
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
    name: "Game Sessions",
    slug: "game-sessions",
    subtitle: "FACILITATED TABLETOP SIMULATIONS FOR TEAMS & COHORTS",
    tag: "FACILITATED GAMEPLAY",
    tagline: "Experience complex systems through direct, high-stakes tabletop play.",
    shortDescription: "High-intensity tabletop simulation sessions powered by Bharat Play's serious game suite (City Runners, Prospera, BiBo, CASCADE, RiskScape), guided by certified game masters.",
    description: "Our Game Sessions bring groups together around the physical tabletop to experience the visceral reality of complex systems. Rather than passively listening to lectures or slide decks, participants are thrust into multi-stakeholder roles—balancing municipal budgets, responding to sudden climate deluges, managing supply chain shocks, and negotiating under scarce resources. Every session is facilitated by certified Bharat Play Game Masters and concludes with a structured cognitive debrief.",
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
        answer: "Yes! We run sessions either at our Bharat Play Experience Center in Chennai or travel directly to your institution anywhere in India and internationally."
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
    subtitle: "DEEP-DIVE PARTICIPATORY WORKSHOPS & SYSTEMS INTERVENTIONS",
    tag: "IMMERSIVE WORKSHOP",
    tagline: "Collaborative design labs that blend serious play with actionable policy innovation.",
    shortDescription: "Half-day and full-day participatory workshops blending serious tabletop simulation with systems mapping, causal loop diagrams, and speculative policy prototyping.",
    description: "Play Workshops are intensive, multi-hour co-creation labs designed for organizations grappling with wicked problems. Moving beyond traditional hackathons or committee brainstorming, we deploy purpose-built simulation sandboxes where participants stress-test hypotheses, prototype civic policies, and stress-test strategic roadmaps. Led by Dr. Balaji Kalluri and interdisciplinary systems architects, these workshops turn abstract complexity into tangible, testable scenarios.",
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
        title: "UN DISASTER RISK REDUCTION: RESILIENCE STARTS AT HOME",
        subtitle: "Family Disaster Preparedness, Master of Disasters (MoD) & Countermapping Chennai",
        date: "20 OCT 2026",
        venue: "Inner Companion Sanctuary, Chrompet, Chennai",
        partner: "Inner Companion Alternative Learning & Research Foundation, ASSIST & Chennai Resilience Centre",
        format: "Participatory Family Play Workshop & Community Countermapping",
        participants: "Families, Children (Age 8+) & Neighborhood Volunteers",
        description: "Marking solidarity with the UN International Day for Disaster Risk Reduction on the auspicious occasion of Vijayadasami, Bharat Play curated an immersive family play workshop in Chrompet, Chennai. Grounded in the cultural theme of Maa Shailaputri (inner resilience), the workshop deployed the Master of Disasters (MoD) board game followed by a guided countermapping activity connecting gameplay intuition with Chennai's real flood, heatwave, and drought topography.",
        takeaway: "Resilience starts at home: true disaster preparedness begins at the family dining table, validated through playful community countermapping.",
        tag: "DISASTER RESILIENCE",
        image: "/events_media/linkedin/resilience_at_home.jpg",
        galleryImages: [
          "/events_media/linkedin/resilience_at_home.jpg"
        ],
        linkedinUrl: "https://lnkd.in/p/gM6Vv_Bc",
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
      }
    ]
  },
  {
    id: "play-exhibition",
    programNumber: 3,
    displayNumber: "03",
    name: "Play Exhibition",
    slug: "play-exhibition",
    subtitle: "INTERACTIVE PUBLIC INSTALLATIONS & CULTURAL PAVILIONS",
    tag: "PUBLIC EXHIBITION",
    tagline: "Transform public spaces and institutions into living, playable urban ecosystems.",
    shortDescription: "Immersive walk-through exhibitions and interactive pavilions featuring life-sized game boards, playable civic artifacts, and participatory spatial displays.",
    description: "Play Exhibitions transform galleries, university atriums, design festivals, and municipal summits into dynamic public arenas of purposeful play. Featuring scaled-up interactive game boards, tactile civic data installations, playable spatial models, and guided walkthroughs, the exhibition invites citizens, families, students, and professionals to directly experience the mechanics of sustainable cities. It democratizes complex urban planning and climate science into an unforgettable cultural encounter.",
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
      }
    ]
  },
  {
    id: "courses",
    programNumber: 4,
    displayNumber: "04",
    name: "Courses",
    slug: "courses",
    subtitle: "FLAME UNIVERSITY & NUS SPOTLIGHTED TEACHING COURSES",
    tag: "ACADEMY & UNIVERSITY COURSES",
    tagline: "FLAME University & NUS Spotlighted Courses: Disasters – Natural & Man-Made (ENVS102) and Energy, Environment & Economics.",
    shortDescription: "University and experiential courses taught by Dr. Balaji Kalluri: Disasters – Natural & Man-Made (ENVS102) and Energy, Environment & Economics (NUS Spotlight).",
    description: "Academic and experiential courses taught and conducted by Dr. Balaji Kalluri, PhD. Drawing from his university teaching at FLAME University and his work spotlighted by the National University of Singapore (NUS 'Game Changers: Innovating Education for a Sustainable Future'), these courses utilize serious games and spatial simulations to educate future leaders across environmental systems and disaster management.",
    format: "University Semester Studios + Experiential Tabletop Labs",
    duration: {
      label: "Semester & Studio Formats",
      badge: "UNIVERSITY & CERTIFICATE",
      details: "Full semester university studios (FLAME University) and focused experiential masterclasses"
    },
    cohortSize: {
      min: 15,
      max: 45,
      label: "15 – 45 Learners / Cohort"
    },
    targetAudience: "Undergraduate & postgraduate students, higher ed faculty, environmental leaders",
    focusAreas: [
      "Natural & Man-Made Disaster Simulations (ENVS102)",
      "Energy, Environment & Economic Trade-Offs (NUS Spotlight)",
      "Serious Game Prototyping & Student-Created Simulations"
    ],
    keyHighlights: [
      "Taught directly by Dr. Balaji Kalluri, PhD (FLAME University faculty & Cambridge / DTU RiskLab alumnus)",
      "Experiential approach: students learn complex dilemmas by playing, testing, and designing their own games",
      "Documented in NUS Spotlight as preparing future environmental leaders through purposeful play"
    ],
    image: "",
    leadFacilitator: "Dr. Balaji Kalluri, PhD (Systems Engineer & Urban Innovator)",
    institutionalBacking: "Accredited FLAME University curriculum, published in ASCE-ASME & spotlighted by NUS AlumNet.",
    ctaText: "INQUIRE ABOUT COURSES",
    whatsappMessage: "Hi Bharat Play! I would like to learn more about the courses taught by Dr. Balaji Kalluri (ENVS102, Energy & Environment).",
    modules: [
      {
        number: "01",
        title: "Disasters – Natural & Man-Made (ENVS102)",
        duration: "Semester Studio / 14 Weeks",
        tag: "FLAME UNIVERSITY",
        description: "One of his premier FLAME University courses. Students learn about natural and man-made hazards through serious games, risk simulations, and experiential activities, culminating in student teams creating and playtesting their own serious disaster simulations."
      },
      {
        number: "02",
        title: "Energy, Environment & Economics",
        duration: "Experiential Lab / 8 Weeks",
        tag: "NUS SPOTLIGHT",
        description: "Taught using game-based and experiential learning methods to prepare future environmental leaders. Students explore grid dispatch, carbon economics, and environmental trade-offs through purposeful play, as documented by NUS Alumni Spotlight."
      },
      {
        number: "03",
        title: "Serious Game Prototyping & Capstone Facilitation",
        duration: "Weeks 11–14",
        tag: "CAPSTONE STUDIO",
        description: "Students translate systemic insights into physical tabletop mechanics, conduct rigorous playtesting rounds, and showcase original game prototypes to academic and practitioner juries."
      }
    ],
    outcomes: [
      {
        title: "Experiential Systems Mastery",
        description: "Move beyond dry textbook theory to grasp non-linear trade-offs in disaster response and energy transition."
      },
      {
        title: "Student-Created Serious Games",
        description: "Every cohort designs, balances, and prototypes functional tabletop simulations modeling real-world systemic dilemmas."
      }
    ],
    audiences: [
      {
        title: "Undergraduate & Graduate Scholars",
        description: "Students in environmental studies, public policy, computer science, economics, and design."
      },
      {
        title: "Higher Education Faculty & Educators",
        description: "Professors seeking to convert lecture-heavy curriculum into experiential, game-based learning studios."
      },
      {
        title: "Sustainability Leaders",
        description: "Professionals looking to apply serious simulations to clean energy transitions and environmental stewardship."
      }
    ],
    deliverables: [
      {
        title: "Complete Course Readers & Case Studies",
        description: "Curated research papers, FLAME University syllabus materials, and simulation design templates."
      },
      {
        title: "Physical Prototyping Kits & Game Assets",
        description: "Tabletop boards, risk markers, resource tokens, and custom print-and-play simulation decks."
      },
      {
        title: "Academic Credential & Verified Portfolio",
        description: "Documentation of completed coursework, playable game prototypes, and systems debrief design."
      }
    ],
    faqs: [
      {
        question: "Where are these courses conducted?",
        answer: "Dr. Balaji Kalluri teaches ENVS102 as part of the academic curriculum at FLAME University in Pune, alongside guest workshops and masterclasses with university and institutional partners."
      },
      {
        question: "How does the game-based learning methodology work in the classroom?",
        answer: "Rather than memorizing definitions from slides, students role-play city commissioners, utility heads, or disaster response units on tactile boards. In the final phase, students design their own games to prove mastery of the underlying science."
      },
      {
        question: "Can these courses be adapted for other universities or executive cohorts?",
        answer: "Yes, Bharat Play adapts these proven academic syllabi into intensive multi-day masterclasses and faculty development programs."
      }
    ],
    conductedSessions: [
      {
        id: "disasters-natural-man-made-envs102",
        number: "01",
        title: "DISASTERS – NATURAL & MAN-MADE (ENVS102)",
        subtitle: "FLAME University Undergrad Studio · Serious Games, Risk Simulations & Game Design Capstone",
        date: "ACADEMIC SEMESTER COURSE",
        venue: "FLAME University Campus, Pune",
        partner: "FLAME University Department of Environmental Studies",
        format: "Full-Semester University Course & Experiential Play Lab",
        participants: "Undergraduate Students across Liberal Arts, Sciences & Economics",
        description: "Disasters – Natural & Man-Made (ENVS102) is Dr. Balaji Kalluri's foundational university course at FLAME University. His pedagogical approach immerses students into learning about complex natural hazards and anthropogenic emergencies through serious games, physical tabletop simulations, and experiential activities—culminating in student teams prototyping and playtesting their own serious disaster games.",
        takeaway: "Students don't just memorize hazard definitions—they experience the panic, delayed response, and resource trade-offs of disasters by designing and playtesting simulations.",
        tag: "FLAME ENVS102",
        image: "",
        galleryImages: [],
        contextChallenge: "Moving disaster education beyond passive textbook case studies into visceral decision-making environments where students feel the cascade of infrastructural and human failure.",
        simulationDeployed: "Master of Disasters (MoD) and hazard mitigation sandboxes, leading into a semester-long capstone where student pods create original serious games on flood, drought, and industrial risk response.",
        keyInsights: [
          "100% of enrolled students successfully conceived, balanced, and physically prototyped original serious disaster board games.",
          "Students reported a profound shift from abstract climate anxiety to proactive systemic risk awareness.",
          "Institutional peer reviews highlighted the game-design capstone as a benchmark for interdisciplinary experiential pedagogy."
        ],
        testimonialQuote: {
          speaker: "Course Alum",
          role: "FLAME University Environmental Studies Student",
          quote: "ENVS102 completely transformed how I think about risk. Designing our own disaster game forced us to confront messy trade-offs between emergency budgets, evacuation time, and public trust."
        }
      },
      {
        id: "energy-environment-economics-nus",
        number: "02",
        title: "ENERGY, ENVIRONMENT & ECONOMICS: PREPARING ENVIRONMENTAL LEADERS",
        subtitle: "Game-Based Pedagogy for Future Environmental Leaders · NUS Alumni Spotlight",
        date: "CONTINUING ACADEMIC & EXECUTIVE",
        venue: "National University of Singapore (NUS) AlumNet & Environmental Networks",
        partner: "NUS Spotlight: Game Changers — Innovating Education for a Sustainable Future",
        format: "Experiential Game-Based Learning & Environmental Pedagogy",
        participants: "Future Environmental Leaders, Sustainability Scholars & Educators",
        description: "Dr. Balaji Kalluri has taught energy and environment subjects using cutting-edge game-based and experiential learning methods. Spotlighted in NUS AlumNet ('Game Changers: Innovating Education for a Sustainable Future'), his broader teaching work deploys games to prepare future environmental leaders to tackle the climate crisis with visceral comprehension of energy grids, clean energy transitions, and market economics.",
        takeaway: "Preparing future environmental leaders requires purposeful play that bridges abstract thermodynamics, economics, and ecological survival into tangible decisions.",
        tag: "NUS SPOTLIGHT",
        image: "",
        galleryImages: [],
        linkedinUrl: "https://nus.edu.sg/alumnet/thealumnus/story/people/spotlight/game-changers-innovating-education-for-a-sustainable-future?utm_source=chatgpt.com",
        contextChallenge: "Bridging the gap between high-level macroeconomic energy policies and grassroots ecological realities without losing learners in dry spreadsheets.",
        simulationDeployed: "Multi-tiered energy dispatch and decarbonization tabletop simulations where students balance power reliability, industrial growth, consumer costs, and emission caps.",
        keyInsights: [
          "Featured in NUS AlumNet Spotlight as an innovative educator pioneering purposeful play for environmental leadership.",
          "Demonstrated that students grasp complex tariff structures and grid latencies 3x faster through simulation than conventional lecture slides.",
          "Created enduring learning artifacts that students take forward into corporate sustainability and public policy careers."
        ],
        testimonialQuote: {
          speaker: "NUS AlumNet Spotlight",
          role: "Feature: Innovating Education for a Sustainable Future",
          quote: "Dr. Balaji Kalluri uses game-based learning to demystify complex environmental problems, preparing the next generation of leaders to navigate the delicate balance between energy, environment, and economics."
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
