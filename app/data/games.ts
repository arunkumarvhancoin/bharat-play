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
      "Saturdays4SeriousSocialGames — Weekly community gameplay series in Chennai"
    ]
  },
  {
    id: "prospera",
    gameNumber: 4,
    displayNumber: "02",
    name: "Prospera",
    subtitle: "SPATIAL INTELLIGENCE & HUMAN SETTLEMENTS SIMULATION",
    theme: "Architecture and Urban Planning, Future of Cities and Human Settlements, Systems-thinking, Geography and Spatial Intelligence",
    themes: [
      "Architecture & Planning",
      "Future of Cities",
      "Systems-thinking",
      "Geography & Spatial Intelligence",
      "Ecological Thresholds"
    ],
    difficulty: "Low",
    age: "10+",
    format: "Tabletop Spatial Simulation / Planning Board Game",
    players: {
      min: 4,
      max: 10,
      label: "4 – 10"
    },
    duration: {
      playHours: 1,
      reflectionHours: 1,
      label: "1 (play) + 1 (reflection) hrs",
      badge: "1h play + 1h debrief"
    },
    approxDuration: "Approx. 2 hours",
    tagline: "Spatial intelligence and architecture game exploring future human settlements and balanced growth.",
    shortDescription: "An intuitive territorial simulation where players plan resilient human settlements within non-negotiable ecological limits.",
    academicOrigin: "Developed under the Urban eXperiential Learning (UrbanXL) suite by Dr. Balaji Kalluri. Deployed internationally in the Environmental Leadership curriculum at the University of Cambridge, United Kingdom.",
    institutionalBadge: "Deployed at University of Cambridge, UK",
    leadArchitect: "Dr. Balaji Kalluri, PhD (UrbanXL Suite)",
    description: "Prospera invites players to envision and plan sustainable human settlements. Players navigate territorial geography, zoning demands, ecological boundaries, and demographic expansion, cultivating spatial reasoning and systemic awareness for the cities of tomorrow.",
    keyLearning: "Spatial thinking, urban layout dynamics, and balancing rapid population expansion with environmental preservation.",
    bestFor: [
      "Secondary & High School Science and Geography Students",
      "Foundational Architecture & Planning Foundations",
      "Youth Environmental & Sustainability Programs",
      "Introductory Systems-Thinking Workshops"
    ],
    image: "",
    gallery: [],
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
    name: "BiBo",
    subtitle: "BUILDING-IN-A-BOX · SUSTAINABLE REAL ESTATE & AEC SIMULATION",
    theme: "Architecture, Real Estate, Green Buildings, Construction Management, Engineering, Risk and Innovation Management, Net-zero Buildings",
    themes: [
      "Architecture & Real Estate",
      "Green Buildings (LEED / GRIHA)",
      "Construction Management",
      "Engineering & Embodied Carbon",
      "Net-Zero Built Environments"
    ],
    difficulty: "Low to Medium",
    age: "15+",
    format: "Educational Board Game / Sustainable Building Lab",
    players: {
      min: 4,
      max: 10,
      label: "4 – 10"
    },
    duration: {
      playHours: 1,
      reflectionHours: 1,
      label: "1 (play) + 1 (reflection) hrs",
      badge: "1h play + 1h debrief"
    },
    approxDuration: "Approx. 2 hours",
    tagline: "Green building and construction management simulation advancing net-zero architecture and real estate innovation.",
    shortDescription: "A hands-on AEC simulation balancing embodied carbon, capital costs, and green certifications in property development.",
    academicOrigin: "Awarded official Copyright by the Government of India to Dr. Balaji Kalluri. Featured in published peer-reviewed building science research (MDPI) and academic studies on net-zero energy design with researchers Priya Vishnu, Pandarasamy Arjunan, and Jay Dhariwal.",
    institutionalBadge: "Government of India Copyright · Published in MDPI",
    leadArchitect: "Dr. Balaji Kalluri & Research Collaborators",
    description: "BiBo (Building-in-a-Box) immerses participants into the complexities of modern property development and sustainable engineering. Participants act as project leads balancing capital expenditure, material selection, embodied carbon, energy efficiency benchmarks, and execution deadlines to deliver resilient, net-zero structures.",
    keyLearning: "Lifecycle carbon accounting, green building certification economics, and cross-functional engineering decision-making.",
    bestFor: [
      "Civil Engineering & Architecture Colleges",
      "Real Estate Developers & Built Environment Executives",
      "Corporate Sustainability, ESG & Facilities Teams",
      "Construction Project Managers & MEP Consultants"
    ],
    image: "",
    gallery: [],
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
    subtitle: "CYBER-PHYSICAL SAFETY & SMART BUILDING RESILIENCE SIMULATION",
    theme: "High-performance Architecture, Smart Buildings, Real Estate, Cyber Security, Risk and Innovation Management, Business Continuity",
    themes: [
      "High-Performance Architecture",
      "Smart Buildings & IoT",
      "Cyber-Physical Hazards",
      "Critical Facility Security",
      "Business Continuity"
    ],
    difficulty: "Medium",
    age: "15+",
    format: "Tabletop Cyber-Physical Incident Simulation",
    players: {
      min: 4,
      max: 8,
      label: "4 – 8"
    },
    duration: {
      playHours: 1,
      reflectionHours: 1,
      label: "1 (play) + 1 (reflection) hrs",
      badge: "1h play + 1h debrief"
    },
    approxDuration: "Approx. 2 hours",
    tagline: "Smart building resilience game dissecting cascading infrastructure failures and cyber-physical continuity.",
    shortDescription: "A high-stakes command simulation where digital BMS breaches trigger cascading physical infrastructure failures.",
    academicOrigin: "Directly grounded in Dr. Balaji Kalluri's cyber-physical systems research conducted in collaboration with the Technical University of Denmark (DTU / DTU RiskLab) and the Danish Institute of Fire and Security Technology (DBI), published in the ASCE-ASME Journal of Risk and Uncertainty in Engineering Systems.",
    institutionalBadge: "Research Collab: DTU Denmark & DBI Fire/Security Lab",
    leadArchitect: "Dr. Balaji Kalluri, PhD (DTU / DBI Collaboration)",
    description: "CASCADE explores what happens when modern intelligent building systems face interconnected operational failures, power grid disruptions, and cyber threats. Teams must coordinate real-time defense, incident response, and business continuity protocols before small glitches cascade into systemic crises.",
    keyLearning: "Cascading failure mitigation, cyber-physical threat assessment, and mission-critical incident command.",
    bestFor: [
      "Corporate Facilities & Information Security (CISO) Teams",
      "Smart City Infrastructure & Building Automation Engineers",
      "Hospital & Airport Operations Management",
      "Executive Risk, Audit & Business Continuity Committees"
    ],
    image: "",
    gallery: [],
    premise: {
      challenge: "Smart buildings connect physical life-safety systems directly to digital networks.",
      tension: "Isolating a digital breach by shutting systems down can trigger immediate physical life-safety emergencies.",
      experience: "Incident command teams coordinate under ticking clocks to stop cascading failures across power, cooling, and security."
    },
    mechanics: [
      {
        number: "01",
        title: "CYBER-PHYSICAL NODE TOPOLOGY",
        description: "Mapping physical building zones (substations, elevators, fire dampers) to their underlying IP networks.",
        tag: "System Mapping"
      },
      {
        number: "02",
        title: "CASCADING FAILURE CLOCK",
        description: "A ticking timer mechanism where uncontained initial faults cascade exponentially into adjacent systems.",
        tag: "Fault Propagation"
      },
      {
        number: "03",
        title: "ASYMMETRIC COMMAND ROLES",
        description: "Distinct roles for Facility Manager, CISO, Safety Officer, and Operations Lead with differing information access.",
        tag: "Incident Command"
      },
      {
        number: "04",
        title: "CONTAINMENT VS CONTINUITY",
        description: "High-stakes trade-offs between pulling systems offline to halt breaches vs keeping operations active.",
        tag: "Critical Triage"
      }
    ],
    scenarios: [
      {
        number: "01",
        title: "BMS RANSOMWARE DURING AMBIENT HEATWAVE",
        description: "Responding to malicious firmware hijacking of cooling towers and access control in an occupied high-rise.",
        crisisLevel: "Life-Safety Threat"
      },
      {
        number: "02",
        title: "GRID TRANSIENT & AUXILIARY OVERLOAD",
        description: "Preventing transformer trip and cascading blackout across critical laboratory research facilities.",
        crisisLevel: "Grid Cascade"
      },
      {
        number: "03",
        title: "FIRE DAMPER & VENTILATION TELEMETRY ANOMALY",
        description: "Overriding automated smoke evacuation protocols when sensor network telemetry becomes erratic.",
        crisisLevel: "Systemic Desynchronization"
      }
    ],
    outcomes: [
      {
        title: "SEE SYSTEMS",
        description: "Understand how software flaws manifest as physical hazards in modern smart buildings."
      },
      {
        title: "EXPERIENCE TRADE-OFFS",
        description: "Decide whether to isolate compromised networks or keep building utilities functioning."
      },
      {
        title: "THINK COLLABORATIVELY",
        description: "Bridge the communication barrier between IT cybersecurity teams and physical facility engineers."
      },
      {
        title: "MAKE DECISIONS",
        description: "Master rapid crisis triage and containment before localized failures trigger systemic shutdowns."
      }
    ],
    audiences: [
      {
        title: "FACILITIES & IT SECURITY TEAMS",
        description: "Building managers and CISOs establishing joint cyber-physical incident response protocols."
      },
      {
        title: "SMART CITY INFRASTRUCTURE ENGINEERS",
        description: "Engineers designing IoT-enabled building automation and urban microgrids."
      },
      {
        title: "CRITICAL FACILITY DIRECTORS",
        description: "Operations managers in hospitals, airports, data centers, and corporate headquarters."
      },
      {
        title: "EXECUTIVE RISK COMMITTEES",
        description: "Board members and risk executives auditing business continuity and physical vulnerability."
      }
    ],
    fieldDeployments: [
      "DTU RiskLab / DBI Fire & Security Framework Workshops",
      "Smart City Facilities Management Leadership Forums",
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
    image: "",
    gallery: [],
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
