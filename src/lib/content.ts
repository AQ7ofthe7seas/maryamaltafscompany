export type CoverColor = {
  id: string;
  name: string;
  swatch: string;
  cover: string;
  edge: string;
  onDark: boolean;
};

export const coverColors: CoverColor[] = [
  {
    id: "midnight",
    name: "Midnight Navy",
    swatch: "bg-cover-midnight",
    cover:
      "bg-[linear-gradient(135deg,var(--color-cover-midnight),color-mix(in_oklab,var(--color-cover-midnight)_78%,white))]",
    edge: "bg-cover-midnight",
    onDark: true,
  },
  {
    id: "forest",
    name: "Forest Green",
    swatch: "bg-cover-forest",
    cover:
      "bg-[linear-gradient(135deg,var(--color-cover-forest),color-mix(in_oklab,var(--color-cover-forest)_75%,white))]",
    edge: "bg-cover-forest",
    onDark: true,
  },
  {
    id: "sandstone",
    name: "Sandstone",
    swatch: "bg-cover-sandstone",
    cover:
      "bg-[linear-gradient(135deg,var(--color-cover-sandstone),color-mix(in_oklab,var(--color-cover-sandstone)_82%,white))]",
    edge: "bg-cover-sandstone",
    onDark: false,
  },
  {
    id: "burgundy",
    name: "Burgundy",
    swatch: "bg-cover-burgundy",
    cover:
      "bg-[linear-gradient(135deg,var(--color-cover-burgundy),color-mix(in_oklab,var(--color-cover-burgundy)_76%,white))]",
    edge: "bg-cover-burgundy",
    onDark: true,
  },
  {
    id: "black",
    name: "Black",
    swatch: "bg-cover-black",
    cover:
      "bg-[linear-gradient(135deg,var(--color-cover-black),color-mix(in_oklab,var(--color-cover-black)_72%,white))]",
    edge: "bg-cover-black",
    onDark: true,
  },
  {
    id: "cream",
    name: "Cream",
    swatch: "bg-cover-cream",
    cover:
      "bg-[linear-gradient(135deg,var(--color-cover-cream),color-mix(in_oklab,var(--color-cover-cream)_84%,white))]",
    edge: "bg-cover-cream",
    onDark: false,
  },
];

export type Spread = {
  slug: string;
  label: string;
  title: string;
  lede: string;
  body: string[];
  items: string[];
};

export const spreads: Spread[] = [
  {
    slug: "important-dates",
    label: "Spread 01",
    title: "Important Dates",
    lede: "A quiet timeline for everything you refuse to forget.",
    body: [
      "One long, elegant timeline instead of twelve scattered reminders. You write it once, in your own hand, and it stays written.",
      "Because the things that matter rarely arrive on the day you remember them.",
    ],
    items: [
      "Birthdays",
      "Appointments",
      "Deadlines",
      "Events",
      "Anniversaries",
      "Goals",
      "Renewals",
      "Vaccinations",
      "Family events",
      "Travel dates",
      "Milestones",
    ],
  },
  {
    slug: "personal-thoughts",
    label: "Spread 02",
    title: "Personal Thoughts",
    lede: "Wide, open, unruled pages. No prompts. No structure. No rules.",
    body: [
      "Somewhere to put the thought at 1am, the half-idea in the queue, the sentence you want to keep.",
      "This is the part of the notebook nobody else reads, and the part you will return to years later.",
    ],
    items: [
      "Dump thoughts",
      "Brainstorm",
      "Reflect",
      "Journal",
      "Vent",
      "Write ideas",
      "Capture dreams",
      "Random inspiration",
    ],
  },
  {
    slug: "gratitude",
    label: "Spread 03",
    title: "Gratitude",
    lede: "Three rhythms of noticing: daily, weekly, monthly.",
    body: [
      "Short lines, generous margins. Enough space to be honest, little enough to finish before bed.",
      "Written for mental wellness rather than performance — nothing here is scored.",
    ],
    items: [
      "What made today meaningful?",
      "What made you smile?",
      "What gave you peace?",
      "Weekly gratitude",
      "Monthly reflection",
    ],
  },
  {
    slug: "things-to-buy",
    label: "Spread 04",
    title: "Things To Buy",
    lede: "Checklists that survive longer than a phone note.",
    body: [
      "Every list you keep re-writing, given a permanent home with soft gold tick boxes.",
    ],
    items: [
      "Shopping",
      "Groceries",
      "Wishlist",
      "Books",
      "Gifts",
      "Home supplies",
      "Travel packing",
    ],
  },
  {
    slug: "things-to-ask-for",
    label: "Spread 05",
    title: "Things To Ask For",
    lede: "The section nobody else prints. The one you'll use most.",
    body: [
      "You remember the question in the car and forget it in the room. Write it here on the way in.",
    ],
    items: [
      "Questions for doctors",
      "Questions for teachers",
      "Things to discuss",
      "Career advice",
      "Family conversations",
      "Business meetings",
      "Ideas to bring up",
    ],
  },
  {
    slug: "schedule",
    label: "Spread 06",
    title: "Schedule",
    lede: "Flexible by design — not another rigid hourly grid.",
    body: [
      "Blocks instead of hours, so a day can hold lectures, medication, prayer, the gym and a long walk without being wrong.",
      "Daily, weekly and fully custom routines live side by side.",
    ],
    items: [
      "School",
      "University",
      "Medication",
      "Prayer",
      "Gym",
      "Meetings",
      "Sports",
      "Travel",
      "Appointments",
      "Daily routine",
      "Weekly routine",
      "Custom routine",
    ],
  },
  {
    slug: "calendar",
    label: "Spread 07",
    title: "Calendar",
    lede: "A full year, month by month, with room to breathe.",
    body: [
      "Large boxes you can actually write inside. Moon phases printed in gold, sunrise and sunset noted, holidays marked softly.",
    ],
    items: [
      "Twelve month spreads",
      "Large writing boxes",
      "Moon phases",
      "Sunrise & sunset",
      "Holidays",
      "Notes column",
    ],
  },
  {
    slug: "sunrise-sunset",
    label: "Spread 08",
    title: "Sunrise & Sunset",
    lede: "Live closer to daylight, not just to deadlines.",
    body: [
      "Each month opens with the light: sunrise, golden hour, sunset, blue hour, the moon and the season.",
      "Aligning your day with natural light steadies sleep, mood and attention — the notebook simply makes that visible.",
    ],
    items: [
      "Sunrise",
      "Golden hour",
      "Sunset",
      "Blue hour",
      "Moon phase",
      "Season",
    ],
  },
  {
    slug: "prayer-times",
    label: "Spread 09 · Optional edition",
    title: "Prayer Times",
    lede: "A respectful, optional companion — included or removed by edition.",
    body: [
      "Designed quietly and carefully, with the same paper, gold and spacing as every other spread.",
      "Choose the Islamic Edition to include it, or the Classic Edition to leave it out entirely.",
    ],
    items: [
      "Five daily prayers",
      "Jumu'ah reminders",
      "Ramadan tracker",
      "Qur'an goals",
      "Tasbeeh tracker",
    ],
  },
];

export const EDITIONS = ["Islamic Edition", "Flexible Edition"] as const;
export type Edition = (typeof EDITIONS)[number];

// Starter Edition economics: true print-on-demand (Prodigi), no held inventory.
// Simpler physical spec than the original leather/gold concept — see materials list below.
export const NOTEBOOK_PRICE_USD = 26;

export const SHIPPING_REGIONS = [
  { name: "United States", eta: "5–8 business days", priceUSD: 0 },
  { name: "Canada", eta: "7–10 business days", priceUSD: 5 },
  { name: "Rest of world", eta: "10–18 business days", priceUSD: 9 },
] as const;

export const materials = [
  ["Fully custom interior", "Important Dates, Personal Thoughts, Gratitude, Schedule and more — every page designed, not generic."],
  ["True lay-flat binding", "Wire-O binding that folds all the way back. No fighting the spine."],
  ["A5, 120 pages", "Portrait format, sized to actually carry with you."],
  ["Printed cover art", "Celestial and gold-tone design printed edge to edge."],
  ["Everyday writing paper", "Smooth 100gsm stock, built for daily use."],
];

export const testimonials = [
  {
    name: "Amara Silva",
    role: "Architect · Lisbon",
    quote:
      "I've bought and abandoned nine planners. This is the first one that didn't make me feel behind by February. Everything about my life lives in one place now.",
    initials: "AS",
  },
  {
    name: "Yusuf Rahman",
    role: "Medical student · Manchester",
    quote:
      "The prayer pages and the flexible schedule together changed my week. I stopped keeping three notebooks and my anxiety genuinely dropped.",
    initials: "YR",
  },
  {
    name: "Elin Dahl",
    role: "Writer · Oslo",
    quote:
      "Sunrise, golden hour, moon phase. I started walking at dusk because the notebook told me when it was. That's not a planner, that's a companion.",
    initials: "ED",
  },
  {
    name: "Noah Whitfield",
    role: "Product lead · Toronto",
    quote:
      "Things To Ask For is worth the price alone. I walk into meetings and appointments prepared for the first time in my adult life.",
    initials: "NW",
  },
  {
    name: "Priya Nair",
    role: "Teacher · Singapore",
    quote:
      "The paper is extraordinary. My fountain pen doesn't ghost, doesn't bleed. It feels like writing on something that was made slowly.",
    initials: "PN",
  },
  {
    name: "Marta Kowalska",
    role: "Therapist · Kraków",
    quote:
      "I recommend the gratitude spreads to clients. Three honest lines a day does more than any app notification ever did.",
    initials: "MK",
  },
];

export const faqs = [
  [
    "Is this dated?",
    "No. Every calendar and schedule spread is undated, so you can begin in March, pause in July and continue in November without wasting a single page.",
  ],
  [
    "Does it work for students?",
    "It was largely shaped by them. Flexible blocks handle lectures, labs, revision and part-time shifts, and the Important Dates timeline holds deadlines for a whole year at once.",
  ],
  [
    "Can professionals use it?",
    "Yes. Meetings, renewals, travel, one-to-ones and the Things To Ask For spread make it comfortable in a working week without turning into a corporate planner.",
  ],
  [
    "Does fountain pen ink bleed?",
    "The 120gsm cream stock was chosen after testing fine through broad nibs. Expect minimal ghosting and no bleed-through with standard inks; very wet, saturated inks may show faintly.",
  ],
  [
    "Can left-handed people use it?",
    "Lay-flat binding removes the spine ridge entirely, and the spiral edition folds fully back. Both were reviewed by left-handed writers.",
  ],
  [
    "Is there an Islamic edition?",
    "Yes. The Islamic Edition includes the prayer, Jumu'ah, Ramadan, Qur'an and tasbeeh spreads. The Classic Edition omits them completely — same paper, same cover, same price.",
  ],
  [
    "Do you ship internationally?",
    "We ship worldwide, with duties calculated at checkout for most destinations.",
  ],
  [
    "How long does shipping take?",
    "UK & EU: 2–4 working days. North America: 4–7. Rest of world: 7–12. Every order ships in the rigid gift box, tracked.",
  ],
];
