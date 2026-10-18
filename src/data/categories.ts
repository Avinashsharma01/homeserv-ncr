/**
 * Service Categories for the Home Services Directory
 */

export interface ServiceCategory {
  slug: string;
  name: string;
  icon: string;
  description: string;
  keywords: string[];
}

export const categories: ServiceCategory[] = [
  {
    slug: "plumber",
    name: "Plumber",
    icon: "Wrench",
    description: "Licensed plumbers for pipe fitting, leak repair, bathroom installation, water tank cleaning, and all plumbing emergencies.",
    keywords: ["plumber", "plumbing", "pipe repair", "leak repair", "bathroom fitting", "water tank", "nalkewala"],
  },
  {
    slug: "electrician",
    name: "Electrician",
    icon: "Zap",
    description: "Certified electricians for wiring, switchboard repair, inverter installation, MCB fitting, and electrical emergencies.",
    keywords: ["electrician", "electrical", "wiring", "switchboard", "inverter", "MCB", "bijli mistri"],
  },
  {
    slug: "ac-repair",
    name: "AC Repair & Service",
    icon: "Snowflake",
    description: "Expert AC technicians for split & window AC installation, gas refilling, deep cleaning, and annual maintenance.",
    keywords: ["AC repair", "AC service", "AC installation", "AC gas filling", "air conditioner", "AC mechanic"],
  },
  {
    slug: "carpenter",
    name: "Carpenter",
    icon: "Hammer",
    description: "Skilled carpenters for furniture repair, modular kitchen installation, wardrobe fitting, and custom woodwork.",
    keywords: ["carpenter", "carpentry", "furniture repair", "modular kitchen", "wardrobe", "mistri"],
  },
  {
    slug: "painter",
    name: "Painter",
    icon: "Paintbrush",
    description: "Professional painters for home painting, wall texturing, waterproofing, POP ceiling, and exterior paint work.",
    keywords: ["painter", "house painting", "wall painting", "waterproofing", "POP", "texture painting"],
  },
  {
    slug: "movers-packers",
    name: "Movers & Packers",
    icon: "Truck",
    description: "Trusted movers and packers for local shifting, intercity relocation, office moving, and vehicle transport across NCR.",
    keywords: ["movers packers", "shifting", "relocation", "house shifting", "office shifting", "transport"],
  },
  {
    slug: "pest-control",
    name: "Pest Control",
    icon: "Bug",
    description: "Professional pest control services for termite treatment, cockroach control, bed bug removal, and fumigation.",
    keywords: ["pest control", "termite", "cockroach", "bed bug", "fumigation", "keede makode"],
  },
  {
    slug: "cleaning",
    name: "Home Cleaning",
    icon: "Sparkles",
    description: "Deep cleaning, sofa shampooing, bathroom cleaning, kitchen chimney cleaning, and full home sanitization.",
    keywords: ["cleaning", "deep cleaning", "sofa cleaning", "bathroom cleaning", "sanitization", "safai"],
  },
  {
    slug: "ro-water-purifier",
    name: "RO & Water Purifier",
    icon: "Droplet",
    description: "RO water purifier installation, filter replacement, AMC services, and water purifier repair for all brands.",
    keywords: ["RO repair", "water purifier", "RO service", "filter change", "water purifier installation"],
  },
  {
    slug: "appliance-repair",
    name: "Appliance Repair",
    icon: "WashingMachine",
    description: "Repair services for washing machines, refrigerators, microwaves, geysers, and all home appliances.",
    keywords: ["appliance repair", "washing machine", "refrigerator", "microwave", "geyser", "repair"],
  },
];

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return categories.map((c) => c.slug);
}
