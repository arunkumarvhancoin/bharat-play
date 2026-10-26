export interface GameGalleryItem {
  src: string;
  caption: string;
  alt: string;
  aspect: "landscape" | "portrait" | "square" | "panoramic";
}

export interface GameMechanic {
  number: string;
  title: string;
  description: string;
  tag: string;
}

export interface GameScenario {
  number: string;
  title: string;
  description: string;
  crisisLevel: string;
}

export interface GameOutcome {
  title: string;
  description: string;
}

export interface GameAudience {
  title: string;
  description: string;
}

export interface GameItem {
  id: string;
  gameNumber: number;
  displayNumber: string;
  name: string;
  subtitle: string;
  theme: string;
  themes: string[];
  difficulty: "Low" | "Low to Medium" | "Medium" | "Medium to High";
  age: string;
  format: string;
  players: {
    min: number;
    max: number;
    label: string;
  };
  duration: {
    playHours: number;
    reflectionHours: number;
    label: string;
    badge: string;
  };
  approxDuration: string;
  tagline: string;
  shortDescription: string;
  description: string;
  academicOrigin: string;
  institutionalBadge: string;
  leadArchitect: string;
  keyLearning: string;
  bestFor: string[];
  image: string;
  gallery: GameGalleryItem[];
  premise: {
    challenge: string;
    tension: string;
    experience: string;
  };
  mechanics: GameMechanic[];
  scenarios: GameScenario[];
  outcomes: GameOutcome[];
  audiences: GameAudience[];
  fieldDeployments: string[];
  marketContext?: string;
  learningObjectives?: string[];
  targetAudience?: {
    primary: string;
    secondary: string;
  };
  validation?: string;
}

export const GAMES: GameItem[] = [
  {
    id: "city-runners",
    gameNumber: 1,
    displayNumber: "01",
    name: "City Runners",
    subtitle: "THE FLAGSHIP INDIAN URBAN GOVERNANCE BOARD GAME",
    theme: "Urban Livability, Quality of Life, Participatory Governance",
    themes: [
      "Urban Livability",
      "Quality of Life",
      "Participatory Governance",
      "Civic Infrastructure",
      "Climate Deluge Response"
    ],
    difficulty: "Medium to High",
    age: "12+",
    format: "Board Game / Urban Governance Simulation",
    players: {
      min: 6,
      max: 12,
      label: "6 – 12"
    },
    duration: {
      playHours: 2,
      reflectionHours: 1,
      label: "2 (play) + 1 (reflection) hrs",
      badge: "2h play + 1h debrief"
    },
    approxDuration: "Approx. 3 hours",
    tagline: "A participatory urban governance simulation where players navigate municipal budgets, civic trade-offs and public welfare.",
    shortDescription: "A participatory urban governance simulation where players navigate municipal budgets, civic trade-offs and public welfare.",
    academicOrigin: "Officially launched on August 15, 2026, by Bharat Play Innovations under the leadership of Dr. Balaji Kalluri. Developed as an interactive tabletop pedagogical tool to unpack the operational complexities of municipal governance and participatory citizenship in Indian cities.",
    institutionalBadge: "Bharat Play Flagship · Launched Aug 15, 2026",
    leadArchitect: "Dr. Balaji Kalluri, PhD (Bharat Play Innovations)",
    description: "City Runners immerses players into the high-stakes, interdependent world of Indian municipal governance. Players experience contrasting civic personas, institutional constraints, municipal decision-making and competing priorities. Balancing municipal tax coffers against urgent public demands, teams must navigate sudden monsoon deluges, negotiate cross-ward resource sharing, and build political coalitions to ensure long-term city livability.",
    keyLearning: "Collaborative governance, trade-off optimization under fiscal scarcity, and multi-stakeholder consensus building.",
    bestFor: [
      "Municipal Engineers & Urban Planners",
      "University Urban Studies & Policy Departments",
      "Civic Groups & Community Advocates",
      "High School & Undergraduate Leadership Labs"
    ],
    image: "/cr.webp",
    gallery: [
      {
        src: "/cr.webp",
        caption: "Official City Runners board featuring interdependent ward maps, budget ledgers, and civic resource conduits.",
        alt: "City Runners Game Board & Resource Decks",
        aspect: "landscape"
      },
      {
        src: "/cr1.webp",
        caption: "Participants deliberating cross-ward budget allocations and policy coalitions during a facilitated workshop.",
        alt: "Live Tabletop Gameplay Session",
        aspect: "landscape"
      },
      {
        src: "/cr2.webp",
        caption: "Close-up view of municipal event cards, crisis markers, and ward infrastructure tokens.",
        alt: "Board Components & Event Cards",
        aspect: "square"
      }
    ],
    premise: {
      challenge: "Cities are complex systems.",
      tension: "Different stakeholders have different priorities.",
      experience: "Players must make decisions, negotiate trade-offs and deal with consequences."
    },
    mechanics: [
      {
        number: "01",
        title: "INTERDEPENDENT WARD BOARD",
        description: "Contiguous ward maps with shared infrastructure conduits where decisions in one ward ripple into neighboring wards.",
        tag: "Spatial Systems"
      },
      {
        number: "02",
        title: "DYNAMIC MUNICIPAL FISCAL LEDGER",
        description: "Fiscal tracking requiring tactical trade-offs between capital investments, public welfare, and emergency reserves.",
        tag: "Budget Trade-offs"
      },
      {
        number: "03",
        title: "MONSOON & CLIMATE DELUGE DECKS",
        description: "Unanticipated crisis events like urban flash flooding and infrastructure failures that stress collective preparedness.",
        tag: "Crisis Inundation"
      },
      {
        number: "04",
        title: "MULTI-ROLE COALITION BARGAINING",
        description: "No single actor can resolve challenges unilaterally; survival and prosperity require cross-ward consensus.",
        tag: "Collaborative Agency"
      }
    ],
    scenarios: [
      {
        number: "01",
        title: "MONSOON INUNDATION & STORMWATER CRISIS",
        description: "Managing rapid stormwater surges across interconnected drainage basins without overflowing downstream low-income neighborhoods.",
        crisisLevel: "High Stakes"
      },
      {
        number: "02",
        title: "THE ANNUAL CIVIC BUDGET DEADLOCK",
        description: "Reconciling conflicting ward demands between healthcare primary centers, arterial road repairs, and green public parks under a 30% fiscal deficit.",
        crisisLevel: "Fiscal Tensions"
      },
      {
        number: "03",
        title: "CITIZEN GRIEVANCE & WARD COALITION FORMATION",
        description: "Forming multi-stakeholder neighborhood compacts to resolve illegal waste dumping and drinking water pipeline disruptions.",
        crisisLevel: "Civic Consensus"
      }
    ],
    outcomes: [
      {
        title: "SEE SYSTEMS",
        description: "Understand how urban decisions are interconnected across sectors and geography."
      },
      {
        title: "EXPERIENCE TRADE-OFFS",
        description: "Navigate competing priorities and limited resources without easy answers."
      },
      {
        title: "THINK COLLABORATIVELY",
        description: "Work across different civic roles, conflicting mandates, and perspectives."
      },
      {
        title: "MAKE DECISIONS",
        description: "Experience firsthand how municipal choices create long-term real consequences."
      }
    ],
    audiences: [
      {
        title: "URBAN & CIVIC PROFESSIONALS",
        description: "Municipal engineers, planners and public-sector professionals navigating city delivery."
      },
      {
        title: "STUDENTS & LEARNERS",
        description: "People exploring cities, governance, geography, public policy, and complex systems."
      },
      {
        title: "CIVIC / COMMUNITY GROUPS",
        description: "Citizen collectives and neighborhood associations interested in understanding urban challenges."
      },
      {
        title: "ACADEMIC / INSTITUTIONAL SETTINGS",
        description: "Universities, administrative training academies, and institutional leadership workshops."
      }
    ],
    fieldDeployments: [
      "Shiv Nadar University (SNU Chennai) — Tabletop Innovation Showcase",
      "BITSAA Chennai — Gandhi Jayanti Intergenerational Gathering",
      "FLAME University, Pune — Experiential Public Policy & Environmental Studies",
      "IIT BHU — Complex Systems Simulation & Engineering Showcase",
      "Saturdays4SeriousSocialGames — Weekly community gameplay series in Chennai",
      "Weekly Host Venues — Quest @ Besant Nagar & Falling Apple, Adyar (Chennai)"
    ]
  },
  {
    id: "prospera",
    gameNumber: 4,
    displayNumber: "02",
    name: "PROSPERA",
    subtitle: "IMAGINE A CITY. SHAPE ITS FUTURE.",
    theme: "Architecture & Urban Planning · Future of Cities & Human Settlements · Systems Thinking · Geography & Spatial Intelligence",
    themes: [
      "Architecture & Urban Planning",
      "Future of Cities & Human Settlements",
      "Systems Thinking",
      "Geography & Spatial Intelligence"
    ],
    difficulty: "Low",
    age: "10+",
    format: "Board game",
    players: {
      min: 4,
      max: 10,
      label: "4–10"
    },
    duration: {
      playHours: 1,
      reflectionHours: 1,
      label: "1 hour gameplay + 1 hour reflection",
      badge: "1h play + 1h reflection"
    },
    approxDuration: "1 hour gameplay + 1 hour reflection",
    tagline: "Imagine a city. Shape its future.",
    shortDescription: "PROSPERA is a collaborative urban-planning game where players come together to imagine and build the city of the future.",
    academicOrigin: "Developed under the Urban eXperiential Learning (UrbanXL) suite by Dr. Balaji Kalluri. Deployed internationally in the Environmental Leadership curriculum at the University of Cambridge, United Kingdom.",
    institutionalBadge: "Deployed at University of Cambridge, UK",
    leadArchitect: "Dr. Balaji Kalluri, PhD (UrbanXL Suite)",
    description: "PROSPERA is a collaborative urban-planning game where players come together to imagine and build the city of the future.\n\nThrough gameplay, participants explore how architecture, geography, infrastructure and human settlements come together to form a functioning city. Every decision affects the wider system, encouraging players to think spatially, recognise connections and understand the consequences of planning choices.\n\nPROSPERA turns the complexity of cities into an accessible, hands-on experience — helping players develop systems thinking, spatial intelligence and a deeper understanding of how the places we live in take shape.",
    keyLearning: "Spatial thinking, systems recognition, and understanding the consequences of planning choices on the wider urban system.",
    bestFor: [
      "Secondary & High School Science and Geography Students",
      "Foundational Architecture & Planning Foundations",
      "Youth Environmental & Sustainability Programs",
      "Introductory Systems-Thinking Workshops"
    ],
    image: "/games/prospera_board.jpg",
    gallery: [
      {
        src: "/games/prospera_board.jpg",
        caption: "Prospera spatial intelligence simulation board depicting Pune Metropolitan topography, land zoning, and urban settlements.",
        alt: "Prospera Simulation Board - Pune Metropolitan Map",
        aspect: "landscape"
      }
    ],
    premise: {
      challenge: "Human settlements need space, water, and resources to thrive.",
      tension: "Rapid population expansion constantly encroaches upon fragile ecological biomes.",
      experience: "Players design compact, connected layouts that protect nature while providing housing and transit."
    },
    mechanics: [
      {
        number: "01",
        title: "MODULAR ZONING GRID",
        description: "Physical map tiles depicting topographical landforms, wetlands, and built-up urban centers.",
        tag: "Territorial Layout"
      },
      {
        number: "02",
        title: "DEMOGRAPHIC EXPANSION WAVES",
        description: "Turn-based population arrivals requiring immediate provision of basic utilities without urban sprawl.",
        tag: "Growth Pressures"
      },
      {
        number: "03",
        title: "SPATIAL ADJACENCY RULES",
        description: "Proximity constraints between industrial zones, residential neighborhoods, and natural green buffers.",
        tag: "Zoning Constraints"
      },
      {
        number: "04",
        title: "ECOLOGICAL THRESHOLD METERS",
        description: "Tracking water table depletion and biodiversity loss that trigger systemic penalties if exceeded.",
        tag: "Biome Limits"
      }
    ],
    scenarios: [
      {
        number: "01",
        title: "POPULATION SURGE ON RIVER BASIN",
        description: "Accommodating sudden migration without destroying natural stormwater retention wetlands.",
        crisisLevel: "Ecological Risk"
      },
      {
        number: "02",
        title: "TRANSIT CORRIDOR CONNECTIVITY",
        description: "Linking annexed residential zones to commercial hubs without causing vehicular gridlock.",
        crisisLevel: "Mobility Deadlock"
      },
      {
        number: "03",
        title: "CLEAN MICROGRID INTEGRATION",
        description: "Deploying localized clean solar microgrids across high-density neighborhoods.",
        crisisLevel: "Energy Transition"
      }
    ],
    outcomes: [
      {
        title: "SEE SYSTEMS",
        description: "Discover how settlement design directly alters local ecology and resource loops."
      },
      {
        title: "EXPERIENCE TRADE-OFFS",
        description: "Balance immediate housing demands with long-term ecological conservation."
      },
      {
        title: "THINK COLLABORATIVELY",
        description: "Co-design mixed-use communities through consensus rather than fragmented zoning."
      },
      {
        title: "MAKE DECISIONS",
        description: "Experience why compact, walkable settlement planning prevents suburban decay."
      }
    ],
    audiences: [
      {
        title: "YOUNG LEARNERS & SCHOOLS",
        description: "Foundational geography, urban planning, and environmental studies students."
      },
      {
        title: "DESIGN & ARCHITECTURE STUDENTS",
        description: "Undergraduate cohorts learning spatial reasoning and land-use balance."
      },
      {
        title: "COMMUNITY CENTRES",
        description: "Youth groups and neighborhood centers exploring future sustainable habitats."
      },
      {
        title: "SYSTEMS THINKING WORKSHOPS",
        description: "Introductory experiential simulation groups learning multi-variable balancing."
      }
    ],
    fieldDeployments: [
      "University of Cambridge, UK — Environmental Leadership Course",
      "FLAME University Center for Environment & Sustainability",
      "Bharat Play Innovation Center, Chennai"
    ]
  },
  {
    id: "bibo",
    gameNumber: 5,
    displayNumber: "03",
    name: "BiBo — Building-in-a-Box",
    subtitle: "A SERIOUS GAME FOR RETHINKING HOW WE DESIGN, BUILD AND MANAGE THE BUILDINGS OF TOMORROW.",
    theme: "Architecture · Real Estate · Green Buildings · Construction Management · Engineering · Risk & Innovation Management · Net-Zero Buildings",
    themes: [
      "Architecture",
      "Real Estate",
      "Green Buildings",
      "Construction Management",
      "Engineering",
      "Risk & Innovation Management",
      "Net-Zero Buildings"
    ],
    difficulty: "Low to Medium",
    age: "15+",
    format: "Board game + cards",
    players: {
      min: 4,
      max: 10,
      label: "4–10"
    },
    duration: {
      playHours: 1,
      reflectionHours: 1,
      label: "1 hour gameplay + 1 hour reflection",
      badge: "1h play + 1h reflection"
    },
    approxDuration: "1 hour gameplay + 1 hour reflection",
    tagline: "A serious game for rethinking how we design, build and manage the buildings of tomorrow.",
    shortDescription: "BiBo gamifies the lifecycle of the built environment — from architectural design and engineering to construction and facilities management.",
    academicOrigin: "Awarded official Copyright by the Government of India to Dr. Balaji Kalluri. Featured in published peer-reviewed building science research (MDPI) and academic studies on net-zero energy design with researchers Priya Vishnu, Pandarasamy Arjunan, and Jay Dhariwal.",
    institutionalBadge: "Government of India Copyright · Published in MDPI",
    leadArchitect: "Dr. Balaji Kalluri & Research Collaborators",
    description: "BiBo gamifies the lifecycle of the built environment — from architectural design and engineering to construction and facilities management. Players navigate real-world challenges around urbanisation, climate action, technology, risk and energy transition, while exploring the decisions and trade-offs that shape future buildings.\n\nThrough role-play, collaboration and reflection, BiBo encourages participants to think beyond conventional practices, experiment with alternative solutions and explore pathways towards more resilient, inclusive and net-zero buildings.",
    keyLearning: "Lifecycle of the built environment, trade-offs shaping future buildings, and pathways towards resilient, net-zero buildings.",
    bestFor: [
      "Civil Engineering & Architecture Colleges",
      "Real Estate Developers & Built Environment Executives",
      "Corporate Sustainability, ESG & Facilities Teams",
      "Construction Project Managers & MEP Consultants"
    ],
    image: "/games/bibo.webp",
    gallery: [
      {
        src: "/games/bibo.webp",
        caption: "BiBo (Building-in-a-Box) educational green building and sustainable construction lab components.",
        alt: "BiBo Game Lab",
        aspect: "square"
      }
    ],
    premise: {
      challenge: "The built environment accounts for nearly 40% of global carbon emissions.",
      tension: "Green building upgrades cost money upfront, while conventional methods lock in long-term emissions.",
      experience: "Teams navigate financial budgets, embodied carbon accounting, and delivery schedules to achieve certified net-zero buildings."
    },
    mechanics: [
      {
        number: "01",
        title: "EMBODIED CARBON LEDGER",
        description: "Tracking carbon footprints across structural concrete, timber, steel, and low-carbon alternatives.",
        tag: "Carbon Accounting"
      },
      {
        number: "02",
        title: "ENVELOPE & HVAC BENCHMARKS",
        description: "Balancing window-to-wall ratios, thermal insulation, and high-efficiency cooling against heat gain.",
        tag: "Energy Performance"
      },
      {
        number: "03",
        title: "GREEN RATING VERIFICATION",
        description: "Scoring certification criteria across LEED and GRIHA frameworks to boost project market value.",
        tag: "Rating Systems"
      },
      {
        number: "04",
        title: "SUPPLY CHAIN BOTTLENECK CARDS",
        description: "Navigating material shortages, contractor delays, and municipal compliance deadlines under cost caps.",
        tag: "Project Delivery"
      }
    ],
    scenarios: [
      {
        number: "01",
        title: "NET-ZERO UNDER A HARD BUDGET CAP",
        description: "Achieving net-zero energy standards without exceeding commercial investor return hurdles.",
        crisisLevel: "Financial Tension"
      },
      {
        number: "02",
        title: "CRITICAL MATERIAL EMBARGO",
        description: "Pivoting from delayed imported glass-facades to regional low-carbon shading materials on short notice.",
        crisisLevel: "Supply Bottleneck"
      },
      {
        number: "03",
        title: "INDOOR AIR QUALITY VS COOLING LOADS",
        description: "Optimizing fresh-air ventilation in a dense office tower while controlling summer peak electricity demand.",
        crisisLevel: "Performance Trade-off"
      }
    ],
    outcomes: [
      {
        title: "SEE SYSTEMS",
        description: "Understand how early architectural decisions dictate 30 years of operational building emissions."
      },
      {
        title: "EXPERIENCE TRADE-OFFS",
        description: "Weigh initial capital investments against long-term operational savings and green rent premiums."
      },
      {
        title: "THINK COLLABORATIVELY",
        description: "Coordinate across architects, structural engineers, and contractors before ground is broken."
      },
      {
        title: "MAKE DECISIONS",
        description: "Master real-world trade-offs in sustainable construction management and net-zero engineering."
      }
    ],
    audiences: [
      {
        title: "CIVIL & ARCHITECTURE STUDENTS",
        description: "University students mastering building science, sustainable design, and project management."
      },
      {
        title: "REAL ESTATE DEVELOPERS",
        description: "Property executives assessing ESG viability, green certifications, and market returns."
      },
      {
        title: "CORPORATE ESG & FACILITIES",
        description: "Workplace managers planning corporate decarbonization and sustainable campus retrofits."
      },
      {
        title: "CONSTRUCTION PROJECT MANAGERS",
        description: "General contractors and MEP consultants balancing delivery speed, cost, and green compliance."
      }
    ],
    fieldDeployments: [
      "FLAME Summer School, Pune — Net-Zero Energy Campus Design",
      "Civil Engineering Academic Forums across South India",
      "Bharat Play Built Environment Lab, Chennai"
    ]
  },
  {
    id: "cascade",
    gameNumber: 6,
    displayNumber: "04",
    name: "CASCADE",
    subtitle: "TURN-BASED STRATEGY TABLETOP COOPERATIVE GAME",
    theme: "Smart Buildings · Cyber-Physical Risks · Internet-of-Things (IoT) · Facilities Management · AEC Sector",
    themes: [
      "Smart Buildings",
      "Cyber-Physical Risks",
      "IoT Networks",
      "Facilities Management",
      "AEC Sector Risk"
    ],
    difficulty: "Medium",
    age: "15+",
    format: "Board game + cards",
    players: {
      min: 4,
      max: 5,
      label: "4–5"
    },
    duration: {
      playHours: 1,
      reflectionHours: 1,
      label: "1 hour gameplay + 1 hour reflection",
      badge: "1h play + 1h reflection"
    },
    approxDuration: "1 hour gameplay + 1 hour reflection",
    tagline: "A turn-based strategy tabletop, cooperative game simulating attacks and defences on a contemporary ‘smart’ building.",
    shortDescription: "Cascade is a turn-based strategy tabletop, cooperative game. Played ideally among 4-5 players, where players simulate attacks and defences on a contemporary ‘smart’ building.",
    academicOrigin: "Directly grounded in Dr. Balaji Kalluri's cyber-physical systems research conducted in collaboration with the Technical University of Denmark (DTU / DTU RiskLab) and the Danish Institute of Fire and Security Technology (DBI), published in the ASCE-ASME Journal of Risk and Uncertainty in Engineering Systems.",
    institutionalBadge: "Validated with experts from Smart Buildings, Cybersecurity, IT & Network Infrastructure",
    leadArchitect: "Dr. Balaji Kalluri, PhD",
    marketContext: "The global smart building market is projected to grow to $548.5 Billion by 2032. 4 out of 10 smart, intelligent, and interconnected buildings are at risk of cyberattacks due to increasing intergration of digital technologies for improved facilities management. However, awareness of these risks remains limited within the Architecture, Engineering, and Construction (AEC) sector.",
    description: "Cascade is a turn-based strategy tabletop, cooperative game. Played ideally among 4-5 players, where players simulate attacks and defences on a contemporary ‘smart’ building.\n\nThe game board represents 10 building systems & services typical to smart buildings which are interconnected through Internet-of-Things network. During the game, one player acts as the attacker, attempting to compromise interconnected building systems & services. All other players act as defenders, collaborating to protect the building. The attacker sequentially launches attacks on systems (guided by the cards), which may cascade to the connected systems if the threshold for any crosses 2. The defenders must collaboratively use limited resources and strategies to intercept an attack by responding with defences that overpower the damage from an Attack card.",
    keyLearning: "The players will identify cyber-physical risks in interconnected systems comprising smart buildings, understand the need for collaboration between stakeholders to mitigate cascading hazards & systemic failures, and recall key cybersecurity strategies required to protect buildings, facilities, businesses and people.",
    learningObjectives: [
      "The players will identify cyber-physical risks in interconnected systems comprising smart buildings.",
      "The players understand need for collaboration between stakeholders to mitigate cascading hazards & systemic failures.",
      "The players shall recall key cybersecurity strategies required to protect buildings, facilities, businesses and people."
    ],
    targetAudience: {
      primary: "Professionals of smart buildings & facilities such as Cybersecurity professionals, Building operators, MEP consultants, System Integrators, Facilities Manager and Building Occupants.",
      secondary: "Educators, trainers and aspiring building professionals."
    },
    validation: "* The game was validated with experts from the Smart Buildings, Cybersecurity, IT and Network Infrastructure, and received critical acclaim to advance the building industry globally.",
    bestFor: [
      "Cybersecurity Professionals & Building Operators",
      "MEP Consultants & System Integrators",
      "Facilities Managers & Building Occupants",
      "Educators, Trainers & Aspiring Building Professionals"
    ],
    image: "/games/cascade.webp",
    gallery: [
      {
        src: "/games/cascade.webp",
        caption: "CASCADE game board representing 10 building systems & services interconnected through IoT network.",
        alt: "CASCADE Game Components & Board",
        aspect: "landscape"
      }
    ],
    premise: {
      challenge: "4 out of 10 smart, intelligent, and interconnected buildings are at risk of cyberattacks due to increasing integration of digital technologies.",
      tension: "Attacks on one system may cascade to connected systems if the threshold crosses 2.",
      experience: "Defenders collaboratively use limited resources and strategies to overpower Attack cards and protect the building."
    },
    mechanics: [
      {
        number: "01",
        title: "10 INTERCONNECTED BUILDING SYSTEMS",
        description: "The game board represents 10 building systems & services typical to smart buildings which are interconnected through Internet-of-Things network.",
        tag: "System Model"
      },
      {
        number: "02",
        title: "ATTACKER VS DEFENDERS",
        description: "During the game, one player acts as the attacker, attempting to compromise interconnected building systems & services. All other players act as defenders, collaborating to protect the building.",
        tag: "Turn-based Roles"
      },
      {
        number: "03",
        title: "SEQUENTIAL ATTACKS & CASCADING THRESHOLD",
        description: "The attacker sequentially launches attacks on systems (guided by the cards), which may cascade to the connected systems if the threshold for any crosses 2.",
        tag: "Cascade Rule"
      },
      {
        number: "04",
        title: "COLLABORATIVE RESOURCE DEFENCE",
        description: "The defenders must collaboratively use limited resources and strategies to intercept an attack by responding with defences that overpower the damage from an Attack card.",
        tag: "Cooperative Triage"
      }
    ],
    scenarios: [
      {
        number: "01",
        title: "SEQUENTIAL ATTACK INTERCEPTION",
        description: "Collaborating with limited defensive resources to overpower incoming attack cards targeting facility systems.",
        crisisLevel: "Direct Threat"
      },
      {
        number: "02",
        title: "THRESHOLD 2 CASCADE BREACH",
        description: "Preventing damage on any interconnected system from crossing threshold 2 to stop cascading failures across connected services.",
        crisisLevel: "System Cascade"
      },
      {
        number: "03",
        title: "STAKEHOLDER RESILIENCE COMMAND",
        description: "Coordinating response between operators, facilities managers, and cybersecurity specialists under attack.",
        crisisLevel: "Collaborative Command"
      }
    ],
    outcomes: [
      {
        title: "IDENTIFY CYBER-PHYSICAL RISKS",
        description: "The players will identify cyber-physical risks in interconnected systems comprising smart buildings."
      },
      {
        title: "STAKEHOLDER COLLABORATION",
        description: "The players understand need for collaboration between stakeholders to mitigate cascading hazards & systemic failures."
      },
      {
        title: "RECALL CYBERSECURITY STRATEGIES",
        description: "The players shall recall key cybersecurity strategies required to protect buildings, facilities, businesses and people."
      }
    ],
    audiences: [
      {
        title: "PRIMARY AUDIENCE",
        description: "Professionals of smart buildings & facilities such as Cybersecurity professionals, Building operators, MEP consultants, System Integrators, Facilities Manager and Building Occupants."
      },
      {
        title: "SECONDARY AUDIENCE",
        description: "Educators, trainers and aspiring building professionals."
      }
    ],
    fieldDeployments: [
      "Validated with experts from Smart Buildings, Cybersecurity, IT and Network Infrastructure",
      "DTU RiskLab / DBI Fire & Security Framework Workshops",
      "Bharat Play Critical Infrastructure Simulation Lab"
    ]
  },
  {
    id: "riskscape",
    gameNumber: 7,
    displayNumber: "05",
    name: "RiskScape",
    subtitle: "CRITICAL INFRASTRUCTURE & ORGANIZATIONAL FRAGILITY SIMULATION",
    theme: "Critical Infrastructure, Organizational Risk, Innovation Management, Digital Transformation",
    themes: [
      "Critical Infrastructure",
      "Organizational Fragility",
      "Innovation Management",
      "Digital Transformation",
      "Crisis Leadership"
    ],
    difficulty: "Medium to High",
    age: "15+",
    format: "Executive Command Tabletop / Strategic Risk Lab",
    players: {
      min: 2,
      max: 4,
      label: "2 – 4"
    },
    duration: {
      playHours: 1,
      reflectionHours: 1,
      label: "1 (play) + 1 (reflection) hrs",
      badge: "1h play + 1h debrief"
    },
    approxDuration: "Approx. 2 hours",
    tagline: "High-intensity tabletop simulation of critical infrastructure fragility, organizational risk, and digital transition.",
    shortDescription: "A compact, intensive strategic simulation modeling institutional fragility during disruptive digital modernization.",
    academicOrigin: "Informed by Dr. Balaji Kalluri's research on socio-technical risk modeling, technology governance advisory for public-sector transitions (including advisory with the Tamil Nadu e-Governance Agency), and decision-making under deep uncertainty.",
    institutionalBadge: "Socio-Technical Risk Research · Public-Sector Advisory",
    leadArchitect: "Dr. Balaji Kalluri, PhD (Socio-Technical Risk Lab)",
    description: "Designed for focused, strategic groups of 2 to 4 participants, RiskScape models the acute pressures confronting leaders of essential infrastructure during disruptive digital modernization. Players test adaptive leadership strategies under sudden regulatory, technical, and operational shocks.",
    keyLearning: "Strategic resilience modeling, crisis risk communication, and change management during rapid transformation.",
    bestFor: [
      "C-Suite & Executive Leadership Cohorts",
      "Enterprise Risk & Management Consultants",
      "Public Policy Think Tanks & Regulatory Officers",
      "Operations & Digital Transformation Directors"
    ],
    image: "/games/riskscape.webp",
    gallery: [
      {
        src: "/games/riskscape.webp",
        caption: "RiskScape 84-card strategic system, tracking sheet, and multi-layered critical infrastructure defense.",
        alt: "RiskScape Game Components & Cards",
        aspect: "landscape"
      }
    ],
    premise: {
      challenge: "Essential infrastructure must modernize without disrupting everyday public operations.",
      tension: "Pushing rapid digital upgrades introduces operational fragility and public backlash.",
      experience: "Executive leaders navigate market shocks, regulatory audits, and legacy tech failures under intense scrutiny."
    },
    mechanics: [
      {
        number: "01",
        title: "HIGH-DENSITY COMMAND BOARD",
        description: "Compact 2–4 player board where each decision directly impacts the organizational fragility index.",
        tag: "Executive Decisions"
      },
      {
        number: "02",
        title: "EXOGENOUS DISRUPTIVE SHOCKS",
        description: "Surprise event cards introducing regulatory crackdowns, supply boycotts, and legacy outages.",
        tag: "Unforeseen Shocks"
      },
      {
        number: "03",
        title: "MODERNIZE VS LEAPFROG BRANCHING",
        description: "Choosing between incrementally patching legacy systems vs committing capital to bold digital migrations.",
        tag: "Strategy Branching"
      },
      {
        number: "04",
        title: "PUBLIC TRUST & CAPITAL METERS",
        description: "Tracking stakeholder credibility and cash reserves; failure occurs if either reaches zero.",
        tag: "Institutional Survival"
      }
    ],
    scenarios: [
      {
        number: "01",
        title: "CORE DATABASE CLOUD OUTAGE",
        description: "Managing unexpected service downtime during a multi-tier cloud migration under public scrutiny.",
        crisisLevel: "Reputational Crisis"
      },
      {
        number: "02",
        title: "SWEEPING REGULATORY MANDATE",
        description: "Reallocating 40% of capital expenditure to comply with immediate national data protection mandates.",
        crisisLevel: "Regulatory Shock"
      },
      {
        number: "03",
        title: "MULTI-TIER VENDOR INSOLVENCY",
        description: "Rebuilding critical supplier networks within 48 hours without halting public service delivery.",
        crisisLevel: "Supply Fragility"
      }
    ],
    outcomes: [
      {
        title: "SEE SYSTEMS",
        description: "Trace hidden interdependencies between legacy hardware, regulation, and employee culture."
      },
      {
        title: "EXPERIENCE TRADE-OFFS",
        description: "Navigate the razor-thin margin between speed of modernization and operational stability."
      },
      {
        title: "THINK COLLABORATIVELY",
        description: "Unify strategy, compliance, finance, and IT under a singular crisis governance command."
      },
      {
        title: "MAKE DECISIONS",
        description: "Experience the real-world pressures confronting leaders of essential infrastructure."
      }
    ],
    audiences: [
      {
        title: "EXECUTIVE LEADERSHIP & C-SUITE",
        description: "CEOs, COOs, and Chief Risk Officers stress-testing institutional transformation."
      },
      {
        title: "STRATEGY & RISK CONSULTANTS",
        description: "Advisors guiding clients through high-risk digital restructuring and supply-chain resilience."
      },
      {
        title: "PUBLIC POLICY & REGULATORY LEADERS",
        description: "Government agencies and think tanks crafting policy for essential utilities."
      },
      {
        title: "DIGITAL TRANSFORMATION DIRECTORS",
        description: "Leaders overseeing complex enterprise system overhauls and operational change."
      }
    ],
    fieldDeployments: [
      "Executive Strategic Risk Retreats",
      "Public Sector e-Governance Leadership Seminars",
      "FLAME University Policy Masterclasses",
      "Bharat Play Innovation Suite"
    ]
  }
];

export function getGameById(id: string): GameItem | undefined {
  return GAMES.find((g) => g.id === id);
}

export function getAllGameSlugs(): string[] {
  return GAMES.map((g) => g.id);
}
