/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import { ProgramItem } from "../../data/programs";

interface CatalogueDetail {
  label: string;
  value: string;
}

interface CatalogueItem {
  id: string;
  images: string[];
  category: string;
  title: string;
  subtitle?: string;
  description: string;
  details: CatalogueDetail[];
  district?: string;
  reportUrl?: string;
  reportLabel?: string;
}

interface ProgramExperienceClientProps {
  program: ProgramItem;
  otherPrograms?: ProgramItem[];
}

export default function ProgramExperienceClient({ program }: ProgramExperienceClientProps) {
  const slug = program.slug;

  let pageTitle = "GAME SESSIONS";
  let introLine =
    "Casual board game play sessions for all ages and generations, exploring purposeful play and complex systems.";
  let items: CatalogueItem[] = [];

  // =========================================================================
  // 1. GAME SESSIONS
  // =========================================================================
  if (slug === "game-sessions") {
    pageTitle = "GAME SESSIONS";
    introLine =
      "Casual board game play sessions for all ages and generations, exploring purposeful play, municipal governance, and complex systems.";
    items = [
      {
        id: "city-runners",
        images: ["/cr.webp"],
        category: "GAME SESSION",
        title: "CITY RUNNERS",
        subtitle: "THE FLAGSHIP INDIAN URBAN GOVERNANCE BOARD GAME",
        description:
          "A participatory urban governance simulation where players navigate municipal budgets, civic trade-offs and public welfare across interdependent wards.",
        details: [
          { label: "THEME", value: "Urban Livability, Quality of Life, Participatory Governance" },
          { label: "DIFFICULTY", value: "Medium to High" },
          { label: "AGE", value: "12+" },
          { label: "PLAYERS", value: "6 – 12" },
          { label: "DURATION", value: "2 (play) + 1 (reflection) hrs" },
          { label: "FORMAT", value: "Board Game / Urban Governance Simulation" },
        ],
      },
      {
        id: "prospera",
        images: ["/games/prospera_board.jpg"],
        category: "GAME SESSION",
        title: "PROSPERA",
        subtitle: "IMAGINE A CITY. SHAPE ITS FUTURE.",
        description:
          "A collaborative urban-planning game where players come together to imagine and build the city of the future. Through gameplay, participants explore how architecture, geography, and human settlements come together to form a functioning city.",
        details: [
          { label: "THEME", value: "Architecture & Urban Planning, Future of Cities, Systems Thinking" },
          { label: "DIFFICULTY", value: "Low" },
          { label: "AGE", value: "10+" },
          { label: "PLAYERS", value: "4–10" },
          { label: "DURATION", value: "1 hour gameplay + 1 hour reflection" },
          { label: "FORMAT", value: "Board game" },
        ],
      },
      {
        id: "bibo",
        images: ["/games/bibo-game.webp"],
        category: "GAME SESSION",
        title: "BiBo — BUILDING-IN-A-BOX",
        subtitle: "RETHINKING HOW WE DESIGN, BUILD AND MANAGE FUTURE BUILDINGS",
        description:
          "BiBo gamifies the lifecycle of the built environment — from architectural design and engineering to construction and facilities management, exploring trade-offs shaping future buildings.",
        details: [
          { label: "THEME", value: "Architecture, Real Estate, Green Buildings, Net-Zero Buildings" },
          { label: "DIFFICULTY", value: "Low to Medium" },
          { label: "AGE", value: "15+" },
          { label: "PLAYERS", value: "4–10" },
          { label: "DURATION", value: "1 hour gameplay + 1 hour reflection" },
          { label: "FORMAT", value: "Board game + cards" },
        ],
      },
      {
        id: "cascade",
        images: ["/games/cascade.webp"],
        category: "GAME SESSION",
        title: "CASCADE",
        subtitle: "TURN-BASED STRATEGY TABLETOP COOPERATIVE GAME",
        description:
          "A turn-based strategy tabletop, cooperative game. Played ideally among 4-5 players, where players simulate attacks and defences on a contemporary ‘smart’ building across an interconnected IoT network.",
        details: [
          { label: "THEME", value: "Smart Buildings, Cyber-Physical Risks, IoT Networks, Facilities Management" },
          { label: "DIFFICULTY", value: "Medium" },
          { label: "AGE", value: "15+" },
          { label: "PLAYERS", value: "4–5" },
          { label: "DURATION", value: "1 hour gameplay + 1 hour reflection" },
          { label: "FORMAT", value: "Board game + cards" },
        ],
      },
      {
        id: "riskscape",
        images: ["/games/riskscape.webp"],
        category: "GAME SESSION",
        title: "RiskScape",
        subtitle: "CRITICAL INFRASTRUCTURE & ORGANIZATIONAL FRAGILITY SIMULATION",
        description:
          "A compact, intensive strategic simulation modeling institutional fragility during disruptive digital modernization. Designed for focused leadership groups stress-testing adaptive strategies under regulatory, technical, and operational shocks.",
        details: [
          { label: "THEME", value: "Critical Infrastructure, Organizational Risk, Digital Transformation" },
          { label: "DIFFICULTY", value: "Medium to High" },
          { label: "AGE", value: "15+" },
          { label: "PLAYERS", value: "2 – 4" },
          { label: "DURATION", value: "1 (play) + 1 (reflection) hrs" },
          { label: "FORMAT", value: "Executive Command Tabletop" },
        ],
      },
    ];
  }

  // =========================================================================
  // 2. PLAY WORKSHOPS
  // =========================================================================
  else if (slug === "play-workshops") {
    pageTitle = "PLAY WORKSHOPS";
    introLine =
      "Serious board game play sessions curated for targeted cohorts to deliver predefined outcomes using game as a tool and play as a process across districts and premier institutions.";
    items = [
      {
        id: "chennai-good-governance-iitm",
        district: "Chennai, Tamil Nadu",
        images: ["/events_media/workshops/chennai_good_governance_slide.png"],
        category: "PLAY WORKSHOP",
        title: "GAMES FOR GOOD GOVERNANCE",
        subtitle: "JOINTLY WITH SCHOOL OF SUSTAINABILITY AT IIT MADRAS · ICSR CAMPUS",
        description:
          "An intensive multi-stakeholder governance simulation conducted at the ICSR Building, IIT Madras Campus. Bringing together senior government officials from municipal bodies, transport authorities, water boards, policy researchers, and student innovators to explore complex urban infrastructure trade-offs and participatory systems governance through tabletop play.",
        details: [
          { label: "DISTRICT / CITY", value: "Chennai, Tamil Nadu" },
          { label: "DATE", value: "26 APR 2025" },
          { label: "VENUE", value: "ICSR, IIT Madras Campus, Chennai" },
          { label: "PARTNER", value: "School of Sustainability at IIT Madras" },
          { label: "FORMAT", value: "Multi-Agency Urban Governance & Tabletop Policy Simulation" },
          { label: "PARTICIPANTS", value: "CMWSSB, WRD, Municipal Corporations, State Planning Commission, CUMTA, SWRMA, SaciWATERs, World Resources Institute (WRI), NGOs, University Students & Game Developers" },
          { label: "TAKEAWAY", value: "Bridging inter-departmental silos across water, transit, and municipal planning through immersive game-based decision making." },
        ],
        reportUrl: "https://drive.google.com/file/d/1f82S6y0OHGckmu26dh5ky8p6YTjcu408/view?usp=drivesdk",
        reportLabel: "View IIT Madras Workshop Report (PDF)",
      },
      {
        id: "kolkata-green-buildings-iitkgp",
        district: "Kolkata, West Bengal",
        images: ["/events_media/workshops/kolkata_green_buildings_slide.png"],
        category: "PLAY WORKSHOP",
        title: "GREEN BUILDINGS IN RESIDENTIAL SECTOR",
        subtitle: "JOINTLY WITH CENTRE OF EXCELLENCE IN URBAN DESIGN AND PLANNING, IIT KHARAGPUR",
        description:
          "Convened on World Environment Day at the IIT Kharagpur Research Park in Kolkata, this workshop tackled residential decarbonization and circular built environments. Public sector infrastructure heads, commercial bankers, and private developers playtested lifecycle simulation models alongside young scholars to break down complex net-zero trade-offs.",
        details: [
          { label: "DISTRICT / CITY", value: "Kolkata, West Bengal" },
          { label: "DATE", value: "05 JUN 2025" },
          { label: "VENUE", value: "IIT Kharagpur Research Park, Rajarhat, Kolkata" },
          { label: "PARTNER", value: "Centre of Excellence in Urban Design and Planning, IIT Kharagpur" },
          { label: "FORMAT", value: "Built Environment Serious Simulation & Multi-Sector Industry Lab" },
          { label: "PARTICIPANTS", value: "HUDCO, CPWD, State Bank of India (SBI), S. S. Solutions, Ghosh Bose & Associates, Sapnil Developers Pvt. Ltd., EGC Facility Management, Swastic Group, DAV Model School, Master's Students & Research Scholars" },
          { label: "TAKEAWAY", value: "Accelerating green building adoption by engaging banks, public works departments, private developers, and students in tactile lifecycle decision-making." },
        ],
        reportUrl: "https://drive.google.com/file/d/1fPxXn_-rGyEMHY3OfoeVOrJtB8Wg4q2s/view?usp=sharing",
        reportLabel: "View IIT Kharagpur Workshop Report (PDF)",
      },
      {
        id: "hyderabad-gyanotsav-meru",
        district: "Hyderabad, Telangana",
        images: ["/events_media/workshops/hyderabad_gyanotsav_slide.png"],
        category: "PLAY WORKSHOP",
        title: "GYANOTSAV FEST: SERIOUS GAMES FOR EDUCATORS",
        subtitle: "JOINTLY WITH MERU INTERNATIONAL SCHOOL, HYDERABAD & FLAME UNIVERSITY",
        description:
          "Held during the Gyanotsav Fest at Meru International School's Tellapur campus, this educator capacity development lab equipped teachers with serious board game mechanics. Facilitators demonstrated how tabletop systems thinking and gamified reflection can transform classroom teaching across STEM and social sciences without screens.",
        details: [
          { label: "DISTRICT / CITY", value: "Hyderabad (Tellapur), Telangana" },
          { label: "DATE", value: "29 MAY 2025" },
          { label: "VENUE", value: "Meru International School, Tellapur, Hyderabad" },
          { label: "PARTNER", value: "Meru International School & FLAME University" },
          { label: "FORMAT", value: "Pedagogical Capacity Lab & Serious Game Integration for Educators" },
          { label: "PARTICIPANTS", value: "40+ High School Teachers, Subject Educators & School Leadership Team" },
          { label: "TAKEAWAY", value: "Equipping educators with tabletop game mechanics to transform complex curriculum concepts into active, exploratory learning sandboxes." },
        ],
        reportUrl: "https://lnkd.in/p/gqikgysU",
        reportLabel: "View Meru International School Field Report",
      },
      {
        id: "mumbai-summer-school-somaiya",
        district: "Mumbai, Maharashtra",
        images: ["/events_media/workshops/mumbai_summer_school_slide.png"],
        category: "PLAY WORKSHOP",
        title: "SUMMER SCHOOL ON SUSTAINABLE URBAN FUTURES",
        subtitle: "JOINTLY WITH K J SOMAIYA VIDYAVIHAR UNIVERSITY",
        description:
          "A week-long intensive executive play studio held at the School of Management, Somaiya Vidyavihar University in Mumbai. Interdisciplinary professionals, creative filmmakers, and researchers engaged in deep tabletop simulation cycles, unpacking urban fragility, sustainable infrastructure investments, and planetary boundaries.",
        details: [
          { label: "DISTRICT / CITY", value: "Mumbai, Maharashtra" },
          { label: "DATE", value: "02 – 07 JUN 2025" },
          { label: "VENUE", value: "School of Management, Somaiya Vidyavihar University, Mumbai" },
          { label: "PARTNER", value: "K J Somaiya Institute of Management / Somaiya Vidyavihar University" },
          { label: "FORMAT", value: "6-Day Intensive Summer School Studio & Speculative Urban Simulation" },
          { label: "PARTICIPANTS", value: "Learning & Development (L&D) Professionals, Filmmakers, Researchers & Management Scholars" },
          { label: "TAKEAWAY", value: "Connecting corporate L&D leaders, creative filmmakers, and researchers to explore wicked urban challenges through collaborative tabletop gameplay." },
        ],
        reportUrl: "https://kjsim.somaiya.edu/en/view-events/2182",
        reportLabel: "View Somaiya Summer School Documentation",
      },
      {
        id: "pune-urban-futures-flame",
        district: "Pune, Maharashtra",
        images: ["/events_media/workshops/pune_urban_futures_slide.png"],
        category: "PLAY WORKSHOP",
        title: "GAMIFIED URBAN FUTURES LITERACY",
        subtitle: "JOINTLY WITH ONE YOUNG INDIA AT FLAME UNIVERSITY",
        description:
          "A dynamic youth leadership immersion on the FLAME University campus in Pune. ~100 high-school children from across India engaged in tabletop simulations and collaborative counter-mapping worksheets, stepping into roles of civic decision-makers to build futures literacy and urban systems empathy.",
        details: [
          { label: "DISTRICT / CITY", value: "Pune, Maharashtra" },
          { label: "DATE", value: "20 JUN 2025" },
          { label: "VENUE", value: "FLAME University Campus, Pune" },
          { label: "PARTNER", value: "One Young India & FLAME University" },
          { label: "FORMAT", value: "Youth Tabletop Simulation, Collaborative Counter-Mapping & Futures Lab" },
          { label: "PARTICIPANTS", value: "~100 High-School Children from across India" },
          { label: "TAKEAWAY", value: "Nurturing 21st-century civic responsibility and systems literacy among the next generation of Indian leaders through collaborative gameplay." },
        ],
        reportUrl: "https://docs.google.com/presentation/d/1Ao8jKBZBljv_92wVHGupCIIG3qnTTIHI/edit?usp=sharing&ouid=105162873441748821883&rtpof=true&sd=true",
        reportLabel: "View FLAME Workshop Presentation (Slides)",
      },
      {
        id: "quest-alliance-vocational-trainers-bibo",
        district: "Chennai, Tamil Nadu",
        images: ["/events_media/linkedin/bibo_workshop_1.jpg"],
        category: "PLAY WORKSHOP",
        title: "GREEN SKILLS & VOCATIONAL TRAINER CAPACITY",
        subtitle: "BiBo SERIOUS GAME CAPACITY DEVELOPMENT TRAINING",
        description:
          "Co-developed, curated, and facilitated by Bharat Play Innovations in partnership with Quest Alliance (Gujarat) using the BiBo Board Game in Chennai. Educating and inspiring vocational trainers who train youth entering retail, hospitality, BPO/ITES, and wellness sectors to make green skills, climate change, and environmental impact comprehensible, actionable, and aspirational.",
        details: [
          { label: "DISTRICT / CITY", value: "Chennai, Tamil Nadu" },
          { label: "DATE", value: "APR 2026" },
          { label: "VENUE", value: "Quest Alliance Center, Chennai" },
          { label: "PARTNER", value: "Quest Alliance (Gujarat) & City Atlas" },
          { label: "FORMAT", value: "Vocational Trainer Capacity Development & Serious Game Workshop" },
          { label: "PARTICIPANTS", value: "Vocational Trainers, Grassroots Educators & Skilling Leaders" },
          { label: "TAKEAWAY", value: "Using GAME as a TOOL and PLAY as a PROCESS to translate green skills into tangible career pathways." },
        ],
        reportUrl: "https://www.linkedin.com/posts/balajikalluri_bharatplay-greenskills-vocationaltraining-activity-7193237145719328768-vU2M",
        reportLabel: "View Vocational Trainer Lab Dispatch",
      },
      {
        id: "teen-vikas-singapore-workshop",
        district: "Singapore (International)",
        images: ["/events_media/linkedin/singapore_workshop_1.jpg"],
        category: "PLAY WORKSHOP",
        title: "SCIENCE MEETS SPIRITUALITY",
        subtitle: "TEEN VIKAS DISASTER RESILIENCE WORKSHOP · SINGAPORE",
        description:
          "Delivered for Teen Vikas in Singapore, Dr. Balaji Kalluri reframed youth empowerment into a play-based workshop blending spiritual principles with scientific disaster resilience, preparing youth to become ambitious global environmental leaders by honing their critical observations and sadhana.",
        details: [
          { label: "DISTRICT / CITY", value: "Singapore" },
          { label: "DATE", value: "28 FEB 2026" },
          { label: "VENUE", value: "Sri Sathya Sai Vedic Society, Singapore" },
          { label: "PARTNER", value: "Sri Sathya Sai Vedic Society Singapore & Teen Vikas Educare" },
          { label: "FORMAT", value: "Play-Based Spiritual & Systems Workshop on Disaster Resilience" },
          { label: "PARTICIPANTS", value: "Singaporean Youth, Teen Vikas Scholars, Gurus & Community Educators" },
          { label: "TAKEAWAY", value: "Preparing youth to become ambitious global environmental leaders by blending divine values with disaster resilience science." },
        ],
        reportUrl: "https://www.linkedin.com/posts/balajikalluri_teenvikas-singapore-disasterresilience-activity-7170701192568160256-4b2A",
        reportLabel: "View Singapore Youth Workshop Dispatch",
      },
      {
        id: "resilience-starts-at-home",
        district: "Chennai, Tamil Nadu",
        images: ["/events_media/linkedin/resilience_at_home.jpg"],
        category: "PLAY WORKSHOP",
        title: "RESILIENCE STARTS AT HOME",
        subtitle: "INTER-GENERATIONAL GAMEPLAY WORKSHOP | NAVRATRI / VIJAYADASAMI 2026",
        description:
          "Marking solidarity with the UN International Day for Disaster Risk Reduction on Vijayadasami / Navratri, this family play workshop deployed the Master of Disasters (MoD) board game followed by guided community countermapping connecting gameplay intuition with Chennai's real flood, heatwave, and drought topography.",
        details: [
          { label: "DISTRICT / CITY", value: "Chennai (Chrompet), Tamil Nadu" },
          { label: "DATE", value: "20 OCT 2026" },
          { label: "VENUE", value: "Inner Companion Sanctuary, Chrompet, Chennai" },
          { label: "PARTNER", value: "Inner Companion Foundation, ASSIST & Chennai Resilience Centre" },
          { label: "FORMAT", value: "Participatory Family Play Workshop & Community Countermapping" },
          { label: "PARTICIPANTS", value: "Families, Children (Age 8+) & Neighborhood Volunteers" },
          { label: "TAKEAWAY", value: "True disaster preparedness begins at the family dining table, validated through community countermapping." },
        ],
        reportUrl: "https://www.linkedin.com/posts/balajikalluri_resilience-boardgames-navratri-activity-7253303681469075456-jZ_w",
        reportLabel: "View Inter-generational Workshop Dispatch",
      },
    ];
  }

  // =========================================================================
  // 3. PLAY EXHIBITION
  // =========================================================================
  else if (slug === "play-exhibition") {
    pageTitle = "PLAY EXHIBITION";
    introLine =
      "Curated exhibits using unique creative games to spark curiosity across all audiences to see games through a new lens and engage in purposeful gameplays in large halls, campuses, corporate offices, and museums.";
    items = [
      {
        id: "bavdhan-pune-summer-games-exhibition",
        images: [
          "/events_media/linkedin/bavdhan_flyer_1.jpg",
          "/events_media/linkedin/pune_exhibition_2.jpg",
          "/events_media/linkedin/pune_exhibition_3.jpg",
        ],
        category: "PLAY EXHIBITION",
        title: "SUMMER EXPERIENTIAL GAMES EXHIBITION: BAVDHAN, PUNE",
        subtitle: "CURATED SUMMER GAMES SHOWCASE FOR PARENTS, TEACHERS & CHILDREN",
        description:
          "A unique summer experiential games exhibition curated by Dr. Balaji Kalluri for parents, teachers, and children in Bavdhan, Pune. Co-facilitated by Abhijoy Banerjee and Saharsh Kanchan, this open experiential showcase created a welcoming space for families to experience tabletop learning firsthand, fostering screen-free intergenerational bonding, critical thinking, and civic problem-solving.",
        details: [
          { label: "DATE", value: "19 APR 2026" },
          { label: "VENUE", value: "Residential Society Amphitheatre, Bavdhan, Pune" },
          { label: "PARTNER", value: "Play2ProgressIndia & Bharat Play Innovations" },
          { label: "FORMAT", value: "Free Community Experiential Games Exhibition & Interactive Walkthrough" },
          { label: "PARTICIPANTS", value: "Parents, Teachers, Children, Youth & Society Residents" },
          { label: "SIMULATION", value: "City Runner, EnergeticPlay, Master of Disaster, BiBo, Prospera, CybFlash" },
          { label: "TAKEAWAY", value: "Empowering children and inspiring families to move beyond screens through purposeful, joy-filled tabletop play that builds 21st-century citizenship." },
        ],
      },
      {
        id: "pune-housing-society-game-exhibition",
        images: [
          "/events_media/linkedin/pune_exhibition_1.jpg",
          "/events_media/linkedin/pune_exhibition_4.jpg",
          "/events_media/linkedin/pune_exhibition_5.jpg",
        ],
        category: "PLAY EXHIBITION",
        title: "PLAY GAMES TO LEARN, SKILL, AND CHANGE",
        subtitle: "PUBLIC COMMUNITY GAME EXHIBITION · PUNE",
        description:
          "Curated by Dr. Balaji Kalluri and Abhijoy Banerjee on the theme of 'play games to learn, skill, and change' in an enclosed housing society hall in Pune. Featuring guided walkthroughs of popular tabletop games including EnergeticPlay, Master of Disaster, City Runner, Prospera, BiBo, CybFlash, CASCADE, Green Day, Climate Fresk, and student-designed simulations from FLAME University, challenging social norms around gaming and educating about purposeful play.",
        details: [
          { label: "DATE", value: "19 APR 2026" },
          { label: "VENUE", value: "Housing Society Community Hall & Amphitheatre, Pune" },
          { label: "PARTNER", value: "Play2ProgressIndia & KUDOS" },
          { label: "FORMAT", value: "Curated Public Game Exhibition & Guided Tabletop Walk-Through" },
          { label: "PARTICIPANTS", value: "Parents, Children, Youth, Teachers, Volunteers & Community Residents" },
          { label: "SIMULATION", value: "EnergeticPlay, Master of Disaster, City Runner, Prospera, BiBo, CybFlash, CASCADE, Green Day, Climate Fresk" },
          { label: "TAKEAWAY", value: "Challenging social norms around games to shape 21st-century problem-solving, empathy, and responsible citizenship through purposeful play." },
        ],
      },
    ];
  }

  // =========================================================================
  // 4. COURSES
  // =========================================================================
  else if (slug === "courses") {
    pageTitle = "COURSES";
    introLine =
      "Unique PLAY-based interdisciplinary courses for graduates and undergraduates across Policy, Humanities & Social Sciences, Engineering, Business, Art, and Architecture.";
    items = [
      {
        id: "environmental-leadership",
        images: ["/events_media/article_empathize_energy.jpg"],
        category: "INTERDISCIPLINARY COURSE",
        title: "ENVIRONMENTAL LEADERSHIP",
        subtitle: "PLANETARY BOUNDARIES, ESG DECISION-MAKING & CLIMATE SYSTEMS",
        description:
          "An intensive play-based studio exploring environmental diplomacy, carbon budgeting, and net-zero transitions using tactile tabletop models and serious games.",
        details: [
          { label: "DISCIPLINES", value: "Policy, Humanities & Social Sciences, Business, Environmental Studies, Tech" },
          { label: "BENCHMARKS", value: "Cambridge University, FLAME University, DTU RiskLab" },
          { label: "FACULTY", value: "Dr. Balaji Kalluri (Master Instructor) & Guest Faculty from IITM, IITKGP, NUS" },
          { label: "SIMULATION", value: "BiBo, Prospera, & Custom Climate Sandbox Models" },
          { label: "STUDENT PROTOTYPES", value: "Learners design and playtest original simulation tools on heat action plans and ecological tipping points." },
        ],
      },
      {
        id: "disaster-preparedness",
        images: ["/events_media/article_landslides.jpg"],
        category: "INTERDISCIPLINARY COURSE",
        title: "DISASTER PREPAREDNESS & RISK MANAGEMENT",
        subtitle: "NON-LINEAR SHOCKS, HAZARD GOVERNANCE & CRISIS SANDBOXES",
        description:
          "An experiential studio exploring natural and anthropogenic hazards, emergency budget trade-offs, cascading infrastructure failures, and community disaster preparedness through serious tabletop crisis sandboxes.",
        details: [
          { label: "DISCIPLINES", value: "Civil Engineering, Public Admin, Architecture, Social Sciences" },
          { label: "BENCHMARKS", value: "IITs, DTU Denmark, ETH Zurich, FLAME University" },
          { label: "FACULTY", value: "Dr. Balaji Kalluri with guest faculty from CEPT, IISc & DTU" },
          { label: "SIMULATION", value: "Master of Disasters (MoD), Landslide Risk sandboxes, Deluge Dynamics" },
          { label: "STUDENT PROTOTYPES", value: "Students rapid-prototype simulations on Urban Flooding, Landslides, and Air Crashes." },
        ],
      },
      {
        id: "internet-of-things",
        images: ["/events_media/bibo_workshop_photo_1.jpg"],
        category: "INTERDISCIPLINARY COURSE",
        title: "INTERNET-OF-THINGS (IoT)",
        subtitle: "SENSOR NETWORKS, CYBER-PHYSICAL INTERFACES & URBAN TELEMETRY",
        description:
          "A foundational hands-on course introducing the Internet-of-Things (IoT), sensor networks, edge intelligence, connected urban infrastructure, and cyber-physical security simulations.",
        details: [
          { label: "DISCIPLINES", value: "Computer Science, Electrical/ECE, Tech Innovators, Design" },
          { label: "BENCHMARKS", value: "IISc Bangalore, NUS Singapore, DTU RiskLab" },
          { label: "FACULTY", value: "Master Instructor & guest instructors from IITK, NUS & Iowa State" },
          { label: "SIMULATION", value: "CASCADE cyber-physical defense simulation and IoT telemetry sandboxes" },
          { label: "STUDENT PROTOTYPES", value: "Learners design gamified models of SCADA defense and Cyber/Quantum infrastructure risks." },
        ],
      },
      {
        id: "urban-futures",
        images: ["/events_media/article_civictech_toy.jpg"],
        category: "INTERDISCIPLINARY COURSE",
        title: "URBAN FUTURES",
        subtitle: "MUNICIPAL GOVERNANCE, LIVABILITY TRADE-OFFS & CITY SIMULATIONS",
        description:
          "Explore the operational and spatial realities of 21st-century cities. Using City Runners and Prospera, students step into the shoes of commissioners, town planners, and citizen collectives.",
        details: [
          { label: "DISCIPLINES", value: "Urban Planning, Public Policy, Architecture, Sociology, Economics" },
          { label: "BENCHMARKS", value: "IIHS Bengaluru, IIT Madras, CEPT University" },
          { label: "FACULTY", value: "Dr. Balaji Kalluri with practitioners from Greater Chennai Corporation & Janaagraha" },
          { label: "SIMULATION", value: "City Runners (flagship Indian municipal simulation) & Prospera" },
          { label: "STUDENT PROTOTYPES", value: "Learners develop simulations on participatory ward budgeting and urban flood mitigation." },
        ],
      },
    ];
  }

  const isPlayWorkshops = slug === "play-workshops";

  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    [items[0]?.id || ""]: true,
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-brand-navy pt-28 sm:pt-36 pb-32 sm:pb-40 selection:bg-brand-orange selection:text-white">
      <div className="max-w-[1440px] mx-auto w-full px-5 sm:px-8 lg:px-14">
        
        {/* ============================================================ */}
        {/* BREADCRUMB & SWISS TITLE HEADER                              */}
        {/* ============================================================ */}
        <header className="mb-14 sm:mb-20 pb-8 sm:pb-12 border-b border-amber-200/70">
          {/* Subtle Top Navigation Breadcrumb */}
          <div className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-brand-gray mb-4 sm:mb-6 flex items-center gap-2.5 flex-wrap">
            <Link href="/" className="hover:text-brand-orange transition-colors">
              HOME
            </Link>
            <span className="text-amber-200">/</span>
            <Link href="/programs" className="hover:text-brand-orange transition-colors">
              PROGRAMS
            </Link>
            <span className="text-amber-200">/</span>
            <span className="text-brand-orange">{pageTitle}</span>
          </div>

          {/* Large Swiss Page Title */}
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-brand-navy leading-[0.92] mb-5 sm:mb-7">
            {pageTitle}
          </h1>

          {/* Large Bold Introductory Statement */}
          {introLine && (
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-brand-navy/80 max-w-4xl leading-relaxed">
              {introLine}
            </p>
          )}
        </header>

        {/* ============================================================ */}
        {/* MAIN BODY: PAIRED IMAGE & CONTENT SHOWCASE (FULL WIDTH)      */}
        {/* ============================================================ */}
        <div className="w-full">
          <section aria-label={`${pageTitle} Collection`} className="space-y-16 sm:space-y-24">
            {items.map((item) => {
              const hasImages = item.images && item.images.length > 0;
              const primaryImage = item.images[0];

              // SPECIAL CLICK-TO-EXPAND WORKSHOP ACCORDION WITH BULLETIN SYMBOL
              if (isPlayWorkshops) {
                const isExpanded = !!expandedIds[item.id];

                return (
                  <article
                    key={item.id}
                    id={item.id}
                    className="bg-white border-2 border-[#0C2444] rounded-[26px] p-6 sm:p-9 lg:p-11 scroll-mt-32 transition-all duration-300"
                    style={{ boxShadow: isExpanded ? "10px 10px 0px #0C2444" : "5px 5px 0px #0C2444" }}
                  >
                    {/* CLICKABLE HEADER WITH BULLETIN SYMBOL */}
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => toggleExpand(item.id)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggleExpand(item.id);
                        }
                      }}
                      className="w-full text-left cursor-pointer select-none group flex items-start justify-between gap-4 sm:gap-8"
                    >
                      <div className="flex-1">
                        {item.district && (
                          <div className="mb-2 sm:mb-3">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange border border-brand-orange/30 font-mono text-xs font-bold uppercase tracking-wider">
                              <span>📍</span>
                              <span>{item.district}</span>
                            </span>
                          </div>
                        )}

                        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-brand-navy leading-[1.0] group-hover:text-brand-orange transition-colors">
                          {item.title}
                        </h2>

                        {item.subtitle && (
                          <p className="font-mono text-xs sm:text-sm font-bold tracking-wider text-brand-gray uppercase mt-2">
                            {item.subtitle}
                          </p>
                        )}
                      </div>

                      {/* BULLETIN SYMBOL (NO TEXT) */}
                      <div
                        className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border-2 border-[#0C2444] shrink-0 transition-all duration-300 ${
                          isExpanded
                            ? "bg-[#0C2444] text-white rotate-180"
                            : "bg-white text-[#0C2444] group-hover:bg-[#0C2444] group-hover:text-white"
                        }`}
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    {/* EXPANDED CONTENT (AUTHENTIC NEWSPAPER BROADSHEET LAYOUT) */}
                    {isExpanded && (
                      <div className="pt-6 sm:pt-8 mt-5 sm:mt-6 border-t border-amber-200/80 animate-in fade-in duration-300">
                        {/* 1. TOP IMAGE (NEWSPAPER ARCHIVAL PLATE) */}
                        <div className="w-full">
                          <div className="w-full overflow-hidden bg-transparent rounded-xl border border-amber-200/70">
                            <img
                              src={primaryImage}
                              alt={`${item.title} - Archival Plate`}
                              loading="lazy"
                              className="w-full h-auto max-h-[640px] object-contain block mx-auto"
                            />
                          </div>

                          {/* 2. PHOTO CAPTION & REPORT LINK BAR (BELOW IMAGE, ZERO SOLID BACKGROUND) */}
                          <div className="mt-3 py-1 flex flex-wrap items-center justify-between gap-3 text-xs font-mono border-b border-amber-100">
                            {item.district && (
                              <span className="text-brand-gray tracking-wider uppercase font-semibold">
                                ARCHIVAL FIELD DOCUMENTATION · {item.district}
                              </span>
                            )}
                            {item.reportUrl && (
                              <a
                                href={item.reportUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-brand-orange hover:text-brand-navy font-bold uppercase tracking-wider transition-colors duration-200 group/link"
                              >
                                <span className="text-sm leading-none">📄</span>
                                <span className="underline underline-offset-4 decoration-brand-orange/60 group-hover/link:decoration-brand-navy">
                                  {item.reportLabel || "View Workshop Report"}
                                </span>
                                <svg
                                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2.5}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                  />
                                </svg>
                              </a>
                            )}
                          </div>
                        </div>

                        {/* 3. NEWSPAPER EDITORIAL / STORY SECTION (BELOW THE IMAGE) */}
                        <div className="mt-6 space-y-6">
                          {/* Lead Narrative Paragraph */}
                          <p className="text-base sm:text-lg md:text-xl text-brand-navy/90 font-normal leading-relaxed font-sans">
                            {item.description}
                          </p>

                          {/* 4. KEY METADATA & FACT-BOX (2-COLUMN BROADSHEET GRID) */}
                          {item.details && item.details.length > 0 && (
                            <div className="pt-4 border-t-2 border-brand-navy/10">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5">
                                {item.details.map((detail, dIdx) => {
                                  const isFullWidth =
                                    detail.label === "PARTICIPANTS" ||
                                    detail.label === "TAKEAWAY" ||
                                    detail.label === "FORMAT";
                                  return (
                                    <div
                                      key={dIdx}
                                      className={`py-2 border-b border-amber-100 ${
                                        isFullWidth ? "md:col-span-2" : "md:col-span-1"
                                      } flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3`}
                                    >
                                      <span className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-brand-orange shrink-0 sm:w-36">
                                        {detail.label}
                                      </span>
                                      <span className="text-xs sm:text-sm md:text-base font-semibold text-brand-navy leading-snug">
                                        {detail.value}
                                      </span>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </article>
                );
              }

              // SPECIAL AUTHENTIC COURSE LAYOUT (NO IMAGES OR VISUAL PLACEHOLDERS)
              if (!hasImages) {
                const scheduleDetail = item.details.find((d) => d.label === "SCHEDULE");

                return (
                  <article
                    key={item.id}
                    id={item.id}
                    className="bg-white border-2 border-[#C2410C] rounded-[26px] p-7 sm:p-12 scroll-mt-32"
                    style={{ boxShadow: "10px 10px 0px #C2410C" }}
                  >
                    <div className="max-w-5xl space-y-6">
                      {scheduleDetail && (
                        <div className="inline-block">
                          <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-amber-900 bg-amber-50 px-4 py-1.5 border border-amber-200/80 rounded-full shadow-xs">
                            📅 {scheduleDetail.value}
                          </span>
                        </div>
                      )}

                      {/* Large Course Title */}
                      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-brand-navy leading-[0.98]">
                        {item.title}
                      </h2>

                      {/* Department / Subtitle */}
                      {item.subtitle && (
                        <p className="font-mono text-xs sm:text-sm md:text-base font-bold tracking-wider text-brand-gray uppercase">
                          {item.subtitle}
                        </p>
                      )}

                      {/* Concise Authentic Course Summary */}
                      <p className="text-xl sm:text-2xl text-brand-navy/90 font-normal leading-relaxed font-sans pt-1">
                        {item.description}
                      </p>

                      {/* Key-Value Course Details */}
                      {item.details && item.details.length > 0 && (
                        <div className="mt-8 border-t border-amber-200/60 divide-y divide-amber-100">
                          {item.details.map((detail, dIdx) => (
                            <div
                              key={dIdx}
                              className="py-3.5 sm:py-4.5 grid grid-cols-1 sm:grid-cols-12 gap-1.5 sm:gap-4 items-baseline"
                            >
                              <span className="sm:col-span-4 font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-brand-orange">
                                {detail.label}
                              </span>
                              <span className="sm:col-span-8 text-base sm:text-lg md:text-xl font-bold text-brand-navy leading-snug">
                                {detail.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                );
              }

              const hasMultipleImages = item.images.length > 1;
              const secondaryImages = item.images.slice(1);

              return (
                <article
                  key={item.id}
                  id={item.id}
                  className="bg-white border-2 border-[#0C2444] rounded-[26px] p-7 sm:p-10 lg:p-12 scroll-mt-32"
                  style={{ boxShadow: "10px 10px 0px #0C2444" }}
                >
                  <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 items-start">
                    
                    {/* LEFT SUB-COLUMN: IMAGES (ACTUAL SIZE, ZERO PADDING, FULLY RENDERED) */}
                    <div className="xl:col-span-7 space-y-4">
                      {/* Primary Image: unpadded, uses its full natural proportions */}
                      <div className="w-full overflow-hidden bg-brand-navy/[0.02] rounded-2xl border border-amber-100">
                        <img
                          src={primaryImage}
                          alt={`${item.title} - Main Capture`}
                          loading="lazy"
                          className="w-full h-auto max-h-[720px] object-contain block"
                        />
                      </div>

                      {/* Companion Images: clean unpadded grid only if multiple images */}
                      {hasMultipleImages && (
                        <>
                          <div
                            className={`grid gap-3 sm:gap-4 ${
                              secondaryImages.length === 1
                                ? "grid-cols-1"
                                : secondaryImages.length === 2
                                ? "grid-cols-1 sm:grid-cols-2"
                                : "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                            }`}
                          >
                            {secondaryImages.map((imgSrc, imgIdx) => (
                              <div
                                key={imgIdx}
                                className="w-full overflow-hidden bg-brand-navy/[0.02] rounded-2xl border border-amber-100"
                              >
                                <img
                                  src={imgSrc}
                                  alt={`${item.title} - Archival View 0${imgIdx + 2}`}
                                  loading="lazy"
                                  className="w-full h-auto max-h-[360px] object-contain block hover:scale-[1.01] transition-transform duration-300"
                                />
                              </div>
                            ))}
                          </div>

                          {/* Archival count caption */}
                          <div className="pt-2 flex items-center justify-between text-xs font-mono font-semibold tracking-wider text-brand-gray border-t border-amber-100">
                            <span>ARCHIVAL CAPTURES ({item.images.length} IMAGES)</span>
                            <span>100% UNEDITED AUTHENTIC DOCUMENTATION</span>
                          </div>
                        </>
                      )}
                    </div>

                    {/* RIGHT SUB-COLUMN: TEXT PLACED DIRECTLY ALONGSIDE THE IMAGES */}
                    <div className="xl:col-span-5 flex flex-col justify-start">
                      {item.district && (
                        <div className="mb-3">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange border border-brand-orange/30 font-mono text-xs font-bold uppercase tracking-wider">
                            <span>📍</span>
                            <span>{item.district}</span>
                          </span>
                        </div>
                      )}

                      {/* Massive Bold Title */}
                      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black uppercase tracking-tight text-brand-navy leading-[0.95] mb-3 sm:mb-4">
                        {item.title}
                      </h2>

                      {/* Subtitle */}
                      {item.subtitle && (
                        <p className="font-mono text-xs sm:text-sm md:text-base font-bold tracking-wider text-brand-gray uppercase mb-5 sm:mb-6">
                          {item.subtitle}
                        </p>
                      )}

                      {/* Big Readable Description */}
                      <p className="text-lg sm:text-xl md:text-2xl text-brand-navy/90 font-normal leading-relaxed font-sans mb-8 sm:mb-10">
                        {item.description}
                      </p>

                      {/* Swiss Key-Value Details */}
                      {item.details && item.details.length > 0 && (
                        <div className="border-t border-amber-200/60 divide-y divide-amber-100">
                          {item.details.map((detail, dIdx) => (
                            <div
                              key={dIdx}
                              className="py-3.5 sm:py-4.5 grid grid-cols-1 sm:grid-cols-12 gap-1.5 sm:gap-4 items-baseline"
                            >
                              <span className="sm:col-span-4 font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-brand-orange">
                                {detail.label}
                              </span>
                              <span className="sm:col-span-8 text-base sm:text-lg md:text-xl font-bold text-brand-navy leading-snug">
                                {detail.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                  </div>
                </article>
              );
            })}
          </section>
        </div>

      </div>
    </main>
  );
}
