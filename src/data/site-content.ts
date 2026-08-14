export const siteContent = {
  navigation: [
    { label: "Overview", href: "#overview" },
    { label: "Why Nikoo", href: "#why-nikoo" },
    { label: "Explore", href: "#clarity" },
    { label: "Residences", href: "#residences" },
    { label: "Amenities", href: "#amenities" },
    { label: "Plan Kit", href: "#plan-kit" },
    { label: "Location", href: "#location" },
  ],
  hero: {
    eyebrow: "New-launch residences - North Bengaluru",
    title: "Nikoo Homes 9, North Bengaluru.",
    description:
      "A 15-acre residential community at Huvinayakanahalli, near KIADB Aerospace Park, with homes from Studio to 3.5 BHK.",
    facts: [
      { value: "15 acres", label: "Planned community" },
      { value: "Studio-3.5 BHK", label: "480-1,826 sq ft" },
      { value: "Price on request", label: "Latest cost sheet" },
    ],
    primaryCta: "Get price sheet",
    secondaryCta: "Book site visit",
    reassurance: "Direct project information - Personalised site-visit assistance",
    priceNote:
      "Pricing and inventory are subject to change. Request the latest cost sheet before making a decision.",
  },
  configurations: ["Studio / 1 RK", "1 BHK", "2 BHK", "2.5 BHK", "3 BHK", "3.5 BHK"],
  proofStats: [
    { value: "15", suffix: " acres", label: "Planned community" },
    { value: "8", suffix: " towers", label: "Residential neighbourhood" },
    { value: "480-1,826", suffix: " sq ft", label: "Built-up home range" },
    { value: "6", suffix: " formats", label: "Studio to 3.5 BHK" },
  ],
  usps: [
    {
      number: "01",
      title: "Six home formats",
      description: "From Studio / 1 RK to 3.5 BHK, choose by life stage, family size and budget.",
      proof: "Studio to 3.5 BHK",
    },
    {
      number: "02",
      title: "Airport-side corridor",
      description: "Positioned on KIADB Hardware Park Main Road near the airport employment belt.",
      proof: "New Airport Road - 200 m",
    },
    {
      number: "03",
      title: "15-acre community",
      description: "Eight residential towers are planned together as a connected neighbourhood.",
      proof: "8 towers - 2B + G + 18 floors",
    },
    {
      number: "04",
      title: "Wellness everyday",
      description: "Pools, fitness, spa and walking routes support regular daily routines.",
      proof: "Pools - Gym - Spa - Tracks",
    },
    {
      number: "05",
      title: "Sport and open space",
      description: "Courts, play zones and gardens create active shared spaces close to home.",
      proof: "Sport - Play - Landscape",
    },
    {
      number: "06",
      title: "Clear next steps",
      description: "Request plans, pricing and visit help through one simple enquiry flow.",
      proof: "Plans - Pricing - Visit support",
    },
  ],
  residences: [
    {
      id: "studio",
      name: "Studio / 1 RK",
      builtUp: "480 sq ft",
      carpet: "326 sq ft",
      description: "A compact format for independent living, first ownership or airport-corridor investment.",
    },
    {
      id: "one-bhk",
      name: "1 BHK",
      builtUp: "690 sq ft",
      carpet: "469 sq ft",
      description: "A clearly zoned one-bedroom home for simple, private city living.",
    },
    {
      id: "two-bhk",
      name: "2 BHK",
      builtUp: "1,094-1,170 sq ft",
      carpet: "743-795 sq ft",
      description: "Two area options give small families more flexibility around space and budget.",
    },
    {
      id: "two-half-bhk",
      name: "2.5 BHK",
      builtUp: "1,317-1,386 sq ft",
      carpet: "895-942 sq ft",
      description: "An extra flexible room works as a study, nursery or guest space.",
    },
    {
      id: "three-bhk",
      name: "3 BHK",
      builtUp: "1,610-1,735 sq ft",
      carpet: "1,094-1,179 sq ft",
      description: "A larger family layout with defined shared and private spaces.",
    },
    {
      id: "three-half-bhk",
      name: "3.5 BHK",
      builtUp: "1,826 sq ft",
      carpet: "1,241 sq ft",
      description: "The largest listed format, with a multipurpose room for work or guests.",
    },
  ],
  planKit: {
    eyebrow: "The plan kit",
    title: "Review the master plan.",
    description:
      "Request the current plan kit to review tower placement, access, movement and shared outdoor spaces.",
    facts: [
      { value: "15 acres", label: "Total land parcel" },
      { value: "8 towers", label: "Residential cluster" },
      { value: "2B + G + 18", label: "Current tower structure" },
      { value: "Basement", label: "Listed parking format" },
    ],
    brochureIncludes: [
      "Current project overview",
      "Master-plan reference",
      "Configuration and area summary",
      "Available floor plans",
      "Latest cost-sheet request",
    ],
  },
  amenityGroups: [
    {
      id: "wellness",
      label: "Wellness",
      title: "Wellness and reset",
      description: "Water, fitness and restorative spaces support active and slower routines.",
      amenities: ["Swimming Pool", "Kids Pool", "Gymnasium", "Private Spa"],
    },
    {
      id: "sport",
      label: "Sport",
      title: "Everyday movement",
      description: "Dedicated courts and active routes make training and play easier.",
      amenities: ["Tennis Court", "Basketball Court", "Multi Purpose Court", "Jogging Track"],
    },
    {
      id: "family",
      label: "Family",
      title: "Family-friendly outdoors",
      description: "Play and shared outdoor areas give every generation a reason to step out.",
      amenities: ["Kids Play Area", "Kids Pool", "Walking Track", "Landscaped Garden"],
    },
    {
      id: "landscape",
      label: "Landscape",
      title: "Green daily life",
      description: "Landscaped routes create calmer places for a walk, pause or conversation.",
      amenities: ["Landscaped Garden", "Walking Track", "Jogging Track"],
    },
  ],
  location: {
    address: "KIADB Hardware Park Main Road, Huvinayakanahalli, Aerospace Park, Bengaluru",
    groups: [
      {
        id: "access",
        label: "Road access",
        title: "Immediate access",
        description: "Listed access distances should be verified against the final project entrance.",
        points: [
          { name: "New Airport Road", value: "200 m", note: "Listed road access" },
          { name: "Budigere Main Road", value: "3.9 km", note: "Listed road access" },
          { name: "Bagalur", value: "4.2 km", note: "Listed locality access" },
        ],
      },
      {
        id: "context",
        label: "Address context",
        title: "Employment-led corridor",
        description: "The address sits within the KIADB Hardware and Aerospace Park geography.",
        points: [
          { name: "KIADB Hardware Park Main Road", value: "Project road", note: "Current listed address" },
          { name: "Huvinayakanahalli", value: "Project locality", note: "Current listed address" },
          { name: "Aerospace Park", value: "North Bengaluru", note: "Current micro-market" },
        ],
      },
      {
        id: "visit",
        label: "Plan a visit",
        title: "Easy visit planning",
        description: "Visit assistance and remote presentations help buyers explore with less friction.",
        points: [
          { name: "Site-visit assistance", value: "Complimentary", note: "For scheduled project visits" },
          { name: "Online presentation", value: "Available", note: "Project presentation from home" },
          { name: "Sample flat", value: "Not ready yet", note: "Based on current listing" },
        ],
      },
    ],
  },
  projectVision: {
    eyebrow: "The Nikoo 9 vision",
    title: "A community for everyday life.",
    description:
      "Nikoo Homes 9 brings broad home choices, shared spaces and a North Bengaluru address into one residential community.",
    facts: [
      { value: "15 acres", label: "Planned residential community" },
      { value: "8 towers", label: "Connected neighbourhood scale" },
      { value: "6 formats", label: "Studio through 3.5 BHK" },
    ],
    principles: [
      { number: "01", title: "Choice that evolves", text: "Six formats support independent buyers and growing families." },
      { number: "02", title: "Everyday wellbeing", text: "Fitness, play and landscaped areas support active daily routines." },
      { number: "03", title: "Connected community", text: "Shared spaces extend daily life beyond the apartment." },
    ],
  },
  faqs: [
    {
      question: "Where is Nikoo Homes 9 located?",
      answer:
        "Nikoo Homes 9 is located on KIADB Hardware Park Main Road at Huvinayakanahalli, within the Aerospace Park micro-market of North Bengaluru.",
    },
    {
      question: "Which home configurations are currently listed?",
      answer: "The current residential mix includes Studio / 1 RK, 1 BHK, 2 BHK, 2.5 BHK, 3 BHK and 3.5 BHK homes.",
    },
    {
      question: "What is the currently listed home-size range?",
      answer:
        "Built-up areas currently range from 480 to 1,826 sq ft. Listed carpet areas range from 326 to 1,241 sq ft, depending on the selected configuration.",
    },
    {
      question: "What is the price of a home at Nikoo Homes 9?",
      answer:
        "Pricing is available on request. Submit the project enquiry form to request the latest configuration-wise cost sheet and current inventory information.",
    },
    {
      question: "How large is the planned development?",
      answer:
        "The current project information describes a 15-acre residential community with eight towers planned in a 2B + G + 18-floor structure.",
    },
    {
      question: "Which amenities are currently listed?",
      answer:
        "Currently listed amenities include swimming pools, a gymnasium, private spa, tennis and basketball courts, a multipurpose court, jogging and walking tracks, children's play areas and landscaped gardens.",
    },
    {
      question: "What is the current possession timeline?",
      answer:
        "The currently listed target possession is December 2030. Verify the final committed schedule against regulatory documents before booking.",
    },
    {
      question: "What is the RERA registration number?",
      answer: "RERA Registration: Coming Soon. The project-specific registration number will be added once published.",
    },
  ],
} as const;
