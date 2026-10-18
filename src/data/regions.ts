/**
 * Delhi-NCR Regions & Localities Database
 * Complete geo-silo data for programmatic SEO pages
 */

export interface Locality {
  slug: string;
  name: string;
  pinCodes: string[];
  lat: number;
  lng: number;
}

export interface Region {
  slug: string;
  name: string;
  state: string;
  description: string;
  localities: Locality[];
}

export const regions: Region[] = [
  {
    slug: "delhi",
    name: "Delhi",
    state: "Delhi",
    description:
      "Find trusted home service professionals across all areas of Delhi. From plumbers and electricians in Connaught Place to AC repair technicians in Dwarka — verified local experts at your doorstep.",
    localities: [
      { slug: "connaught-place", name: "Connaught Place", pinCodes: ["110001"], lat: 28.6315, lng: 77.2167 },
      { slug: "hauz-khas", name: "Hauz Khas", pinCodes: ["110016"], lat: 28.5494, lng: 77.2001 },
      { slug: "karol-bagh", name: "Karol Bagh", pinCodes: ["110005"], lat: 28.6514, lng: 77.1907 },
      { slug: "dwarka", name: "Dwarka", pinCodes: ["110075", "110077", "110078"], lat: 28.5921, lng: 77.0460 },
      { slug: "rohini", name: "Rohini", pinCodes: ["110085", "110086", "110089"], lat: 28.7495, lng: 77.0565 },
      { slug: "saket", name: "Saket", pinCodes: ["110017"], lat: 28.5244, lng: 77.2066 },
      { slug: "lajpat-nagar", name: "Lajpat Nagar", pinCodes: ["110024"], lat: 28.5700, lng: 77.2373 },
      { slug: "janakpuri", name: "Janakpuri", pinCodes: ["110058"], lat: 28.6219, lng: 77.0813 },
      { slug: "pitampura", name: "Pitampura", pinCodes: ["110034", "110088"], lat: 28.7019, lng: 77.1315 },
      { slug: "rajouri-garden", name: "Rajouri Garden", pinCodes: ["110027"], lat: 28.6493, lng: 77.1222 },
      { slug: "mayur-vihar", name: "Mayur Vihar", pinCodes: ["110091", "110096"], lat: 28.5935, lng: 77.2934 },
      { slug: "vasant-kunj", name: "Vasant Kunj", pinCodes: ["110070"], lat: 28.5196, lng: 77.1568 },
      { slug: "nehru-place", name: "Nehru Place", pinCodes: ["110019"], lat: 28.5491, lng: 77.2533 },
      { slug: "greater-kailash", name: "Greater Kailash", pinCodes: ["110048"], lat: 28.5398, lng: 77.2427 },
      { slug: "defence-colony", name: "Defence Colony", pinCodes: ["110024"], lat: 28.5726, lng: 77.2305 },
      { slug: "south-extension", name: "South Extension", pinCodes: ["110049"], lat: 28.5735, lng: 77.2209 },
      { slug: "green-park", name: "Green Park", pinCodes: ["110016"], lat: 28.5598, lng: 77.2070 },
      { slug: "patel-nagar", name: "Patel Nagar", pinCodes: ["110008"], lat: 28.6506, lng: 77.1665 },
      { slug: "tilak-nagar", name: "Tilak Nagar", pinCodes: ["110018"], lat: 28.6413, lng: 77.0962 },
      { slug: "uttam-nagar", name: "Uttam Nagar", pinCodes: ["110059"], lat: 28.6219, lng: 77.0613 },
      { slug: "east-of-kailash", name: "East of Kailash", pinCodes: ["110065"], lat: 28.5575, lng: 77.2507 },
      { slug: "malviya-nagar", name: "Malviya Nagar", pinCodes: ["110017"], lat: 28.5341, lng: 77.2109 },
      { slug: "paschim-vihar", name: "Paschim Vihar", pinCodes: ["110063", "110087"], lat: 28.6697, lng: 77.0983 },
      { slug: "shahdara", name: "Shahdara", pinCodes: ["110032"], lat: 28.6731, lng: 77.2895 },
      { slug: "chandni-chowk", name: "Chandni Chowk", pinCodes: ["110006"], lat: 28.6507, lng: 77.2334 },
    ],
  },
  {
    slug: "gurgaon",
    name: "Gurgaon",
    state: "Haryana",
    description:
      "Book verified home service providers in Gurgaon — Cyber City, Golf Course Road, Sohna Road, and all DLF phases. Trusted plumbers, electricians, AC technicians & more.",
    localities: [
      { slug: "cyber-city", name: "Cyber City", pinCodes: ["122002"], lat: 28.4949, lng: 77.0887 },
      { slug: "golf-course-road", name: "Golf Course Road", pinCodes: ["122002", "122018"], lat: 28.4428, lng: 77.1010 },
      { slug: "sohna-road", name: "Sohna Road", pinCodes: ["122018"], lat: 28.4189, lng: 77.0571 },
      { slug: "mg-road", name: "MG Road", pinCodes: ["122001", "122002"], lat: 28.4798, lng: 77.0740 },
      { slug: "dlf-phase-1", name: "DLF Phase 1", pinCodes: ["122002"], lat: 28.4724, lng: 77.0928 },
      { slug: "dlf-phase-2", name: "DLF Phase 2", pinCodes: ["122002"], lat: 28.4780, lng: 77.0940 },
      { slug: "dlf-phase-3", name: "DLF Phase 3", pinCodes: ["122002"], lat: 28.4830, lng: 77.1010 },
      { slug: "dlf-phase-4", name: "DLF Phase 4", pinCodes: ["122009"], lat: 28.4610, lng: 77.0870 },
      { slug: "dlf-phase-5", name: "DLF Phase 5", pinCodes: ["122009"], lat: 28.4550, lng: 77.0960 },
      { slug: "sector-14", name: "Sector 14", pinCodes: ["122001"], lat: 28.4665, lng: 77.0400 },
      { slug: "sector-29", name: "Sector 29", pinCodes: ["122001"], lat: 28.4618, lng: 77.0370 },
      { slug: "sector-40", name: "Sector 40", pinCodes: ["122001"], lat: 28.4503, lng: 77.0425 },
      { slug: "sector-49", name: "Sector 49", pinCodes: ["122018"], lat: 28.4125, lng: 77.0470 },
      { slug: "sector-56", name: "Sector 56", pinCodes: ["122011"], lat: 28.4284, lng: 77.0905 },
      { slug: "sector-57", name: "Sector 57", pinCodes: ["122011"], lat: 28.4206, lng: 77.0816 },
      { slug: "manesar", name: "Manesar", pinCodes: ["122051"], lat: 28.3595, lng: 76.9347 },
      { slug: "palam-vihar", name: "Palam Vihar", pinCodes: ["122017"], lat: 28.5045, lng: 77.0371 },
      { slug: "south-city", name: "South City", pinCodes: ["122018"], lat: 28.4315, lng: 77.0580 },
      { slug: "nirvana-country", name: "Nirvana Country", pinCodes: ["122018"], lat: 28.4143, lng: 77.0599 },
      { slug: "udyog-vihar", name: "Udyog Vihar", pinCodes: ["122016"], lat: 28.5050, lng: 77.0785 },
    ],
  },
  {
    slug: "noida",
    name: "Noida",
    state: "Uttar Pradesh",
    description:
      "Reliable home services in Noida — from Sector 18 to Sector 168. Licensed plumbers, certified electricians, expert AC repair, and professional movers & packers.",
    localities: [
      { slug: "sector-15", name: "Sector 15", pinCodes: ["201301"], lat: 28.5855, lng: 77.3130 },
      { slug: "sector-18", name: "Sector 18", pinCodes: ["201301"], lat: 28.5693, lng: 77.3210 },
      { slug: "sector-62", name: "Sector 62", pinCodes: ["201301", "201309"], lat: 28.6267, lng: 77.3637 },
      { slug: "sector-63", name: "Sector 63", pinCodes: ["201301"], lat: 28.6213, lng: 77.3740 },
      { slug: "sector-44", name: "Sector 44", pinCodes: ["201303"], lat: 28.5521, lng: 77.3541 },
      { slug: "sector-50", name: "Sector 50", pinCodes: ["201301"], lat: 28.5718, lng: 77.3570 },
      { slug: "sector-76", name: "Sector 76", pinCodes: ["201301"], lat: 28.5734, lng: 77.3908 },
      { slug: "sector-104", name: "Sector 104", pinCodes: ["201304"], lat: 28.5680, lng: 77.3940 },
      { slug: "sector-120", name: "Sector 120", pinCodes: ["201301"], lat: 28.5893, lng: 77.3927 },
      { slug: "sector-128", name: "Sector 128", pinCodes: ["201304"], lat: 28.5268, lng: 77.3770 },
      { slug: "sector-137", name: "Sector 137", pinCodes: ["201305"], lat: 28.5590, lng: 77.4010 },
      { slug: "sector-143", name: "Sector 143", pinCodes: ["201305"], lat: 28.5380, lng: 77.4161 },
      { slug: "sector-168", name: "Sector 168", pinCodes: ["201305"], lat: 28.5100, lng: 77.4300 },
      { slug: "noida-extension", name: "Noida Extension (Greater Noida West)", pinCodes: ["201306"], lat: 28.5700, lng: 77.4500 },
    ],
  },
  {
    slug: "greater-noida",
    name: "Greater Noida",
    state: "Uttar Pradesh",
    description:
      "Home service professionals in Greater Noida — Alpha, Beta, Gamma, Knowledge Park, and Pari Chowk areas. Verified and affordable local experts.",
    localities: [
      { slug: "alpha-1", name: "Alpha 1", pinCodes: ["201310"], lat: 28.4747, lng: 77.5040 },
      { slug: "alpha-2", name: "Alpha 2", pinCodes: ["201310"], lat: 28.4690, lng: 77.5091 },
      { slug: "beta-1", name: "Beta 1", pinCodes: ["201310"], lat: 28.4649, lng: 77.5154 },
      { slug: "beta-2", name: "Beta 2", pinCodes: ["201310"], lat: 28.4700, lng: 77.5200 },
      { slug: "gamma-1", name: "Gamma 1", pinCodes: ["201310"], lat: 28.4572, lng: 77.5238 },
      { slug: "gamma-2", name: "Gamma 2", pinCodes: ["201310"], lat: 28.4520, lng: 77.5280 },
      { slug: "knowledge-park-1", name: "Knowledge Park 1", pinCodes: ["201310"], lat: 28.4595, lng: 77.4918 },
      { slug: "knowledge-park-2", name: "Knowledge Park 2", pinCodes: ["201310"], lat: 28.4630, lng: 77.4960 },
      { slug: "knowledge-park-3", name: "Knowledge Park 3", pinCodes: ["201310"], lat: 28.4650, lng: 77.5020 },
      { slug: "pari-chowk", name: "Pari Chowk", pinCodes: ["201310"], lat: 28.4700, lng: 77.4858 },
      { slug: "omega-1", name: "Omega 1", pinCodes: ["201310"], lat: 28.4760, lng: 77.5100 },
      { slug: "delta-1", name: "Delta 1", pinCodes: ["201310"], lat: 28.4600, lng: 77.5100 },
    ],
  },
  {
    slug: "faridabad",
    name: "Faridabad",
    state: "Haryana",
    description:
      "Trusted home service professionals in Faridabad — NIT, Ballabgarh, Sector 15-88, and all major colonies. Licensed, affordable, and available 24/7.",
    localities: [
      { slug: "nit-faridabad", name: "NIT Faridabad", pinCodes: ["121001"], lat: 28.4089, lng: 77.3178 },
      { slug: "sector-15-faridabad", name: "Sector 15", pinCodes: ["121007"], lat: 28.3858, lng: 77.3052 },
      { slug: "sector-16-faridabad", name: "Sector 16", pinCodes: ["121002"], lat: 28.3891, lng: 77.3102 },
      { slug: "sector-21c-faridabad", name: "Sector 21C", pinCodes: ["121012"], lat: 28.3973, lng: 77.3252 },
      { slug: "sector-28-faridabad", name: "Sector 28", pinCodes: ["121008"], lat: 28.3730, lng: 77.3200 },
      { slug: "sector-37-faridabad", name: "Sector 37", pinCodes: ["121003"], lat: 28.3612, lng: 77.3152 },
      { slug: "ballabgarh", name: "Ballabgarh", pinCodes: ["121004"], lat: 28.3430, lng: 77.3264 },
      { slug: "sector-62-faridabad", name: "Sector 62", pinCodes: ["121004"], lat: 28.3500, lng: 77.3350 },
      { slug: "sector-81-faridabad", name: "Sector 81", pinCodes: ["121002"], lat: 28.3672, lng: 77.3550 },
      { slug: "sector-88-faridabad", name: "Sector 88", pinCodes: ["121002"], lat: 28.3600, lng: 77.3400 },
    ],
  },
  {
    slug: "ghaziabad",
    name: "Ghaziabad",
    state: "Uttar Pradesh",
    description:
      "Professional home services in Ghaziabad — Indirapuram, Vaishali, Kaushambi, Raj Nagar Extension, and Crossing Republik. Verified plumbers, electricians & more.",
    localities: [
      { slug: "indirapuram", name: "Indirapuram", pinCodes: ["201014"], lat: 28.6412, lng: 77.3617 },
      { slug: "vaishali", name: "Vaishali", pinCodes: ["201010"], lat: 28.6416, lng: 77.3372 },
      { slug: "kaushambi", name: "Kaushambi", pinCodes: ["201010"], lat: 28.6369, lng: 77.3237 },
      { slug: "raj-nagar-extension", name: "Raj Nagar Extension", pinCodes: ["201017"], lat: 28.6909, lng: 77.4382 },
      { slug: "crossing-republik", name: "Crossing Republik", pinCodes: ["201016"], lat: 28.6234, lng: 77.4223 },
      { slug: "loni", name: "Loni", pinCodes: ["201102"], lat: 28.7339, lng: 77.2918 },
      { slug: "vasundhara", name: "Vasundhara", pinCodes: ["201012"], lat: 28.6604, lng: 77.3575 },
      { slug: "sahibabad", name: "Sahibabad", pinCodes: ["201005"], lat: 28.6858, lng: 77.3443 },
      { slug: "govindpuram", name: "Govindpuram", pinCodes: ["201013"], lat: 28.6939, lng: 77.4286 },
      { slug: "wave-city", name: "Wave City", pinCodes: ["201015"], lat: 28.5968, lng: 77.4460 },
    ],
  },
  {
    slug: "sonipat",
    name: "Sonipat",
    state: "Haryana",
    description:
      "Find verified home service professionals in Sonipat — Kundli, Murthal, Rai, Model Town, and Sectors 14-15. Trusted plumbers, electricians, AC repair, and carpenters.",
    localities: [
      { slug: "kundli", name: "Kundli", pinCodes: ["131028"], lat: 28.8745, lng: 77.1215 },
      { slug: "murthal", name: "Murthal", pinCodes: ["131027"], lat: 29.0267, lng: 77.0708 },
      { slug: "model-town-sonipat", name: "Model Town", pinCodes: ["131001"], lat: 28.9850, lng: 77.0180 },
      { slug: "sector-14-sonipat", name: "Sector 14", pinCodes: ["131001"], lat: 28.9912, lng: 77.0254 },
      { slug: "sector-15-sonipat", name: "Sector 15", pinCodes: ["131001"], lat: 28.9950, lng: 77.0310 },
      { slug: "rai", name: "Rai", pinCodes: ["131029"], lat: 28.9242, lng: 77.0984 },
      { slug: "subhash-chowk-sonipat", name: "Subhash Chowk", pinCodes: ["131001"], lat: 28.9900, lng: 77.0150 },
      { slug: "omaxe-city-sonipat", name: "Omaxe City", pinCodes: ["131028"], lat: 28.9050, lng: 77.1050 },
    ],
  },
  {
    slug: "panipat",
    name: "Panipat",
    state: "Haryana",
    description:
      "Reliable home services in Panipat — Model Town, Sectors 11-12, Sector 25, and Samalkha. Expert plumbers, electricians, painters, and appliance technicians near you.",
    localities: [
      { slug: "model-town-panipat", name: "Model Town", pinCodes: ["132103"], lat: 29.3875, lng: 76.9680 },
      { slug: "sector-11-12-panipat", name: "Sector 11-12", pinCodes: ["132103"], lat: 29.3950, lng: 76.9800 },
      { slug: "sector-25-panipat", name: "Sector 25", pinCodes: ["132103"], lat: 29.4120, lng: 76.9950 },
      { slug: "samalkha", name: "Samalkha", pinCodes: ["132101"], lat: 29.2384, lng: 77.0116 },
      { slug: "gt-road-panipat", name: "GT Road Corridor", pinCodes: ["132103"], lat: 29.3900, lng: 76.9700 },
      { slug: "chandni-bagh", name: "Chandni Bagh", pinCodes: ["132103"], lat: 29.3820, lng: 76.9620 },
      { slug: "ansal-city-panipat", name: "Ansal Sushant City", pinCodes: ["132103"], lat: 29.3650, lng: 76.9850 },
    ],
  },
  {
    slug: "rohtak",
    name: "Rohtak",
    state: "Haryana",
    description:
      "Licensed home service technicians in Rohtak — Model Town, Sectors 1-4, Delhi Road, and Subhash Nagar. Affordable plumbing, electrical, and AC repairs.",
    localities: [
      { slug: "model-town-rohtak", name: "Model Town", pinCodes: ["124001"], lat: 28.8920, lng: 76.6020 },
      { slug: "sector-1-rohtak", name: "Sector 1", pinCodes: ["124001"], lat: 28.8850, lng: 76.6200 },
      { slug: "sector-2-3-rohtak", name: "Sector 2 & 3", pinCodes: ["124001"], lat: 28.8810, lng: 76.6280 },
      { slug: "delhi-road-rohtak", name: "Delhi Road", pinCodes: ["124001"], lat: 28.8980, lng: 76.6150 },
      { slug: "subhash-nagar-rohtak", name: "Subhash Nagar", pinCodes: ["124001"], lat: 28.9040, lng: 76.5980 },
      { slug: "mansarover-park", name: "Mansarover Park", pinCodes: ["124001"], lat: 28.8900, lng: 76.5920 },
      { slug: "sampla", name: "Sampla", pinCodes: ["124501"], lat: 28.7750, lng: 76.7720 },
    ],
  },
  {
    slug: "bahadurgarh",
    name: "Bahadurgarh",
    state: "Haryana",
    description:
      "Home service professionals in Bahadurgarh — Sectors 6 & 9, Omaxe City, Line Par, and MIE. Direct call & WhatsApp with verified local technicians.",
    localities: [
      { slug: "sector-6-bahadurgarh", name: "Sector 6", pinCodes: ["124507"], lat: 28.6850, lng: 76.9180 },
      { slug: "sector-9-bahadurgarh", name: "Sector 9", pinCodes: ["124507"], lat: 28.6780, lng: 76.9250 },
      { slug: "omaxe-city-bahadurgarh", name: "Omaxe City", pinCodes: ["124507"], lat: 28.6980, lng: 76.8950 },
      { slug: "line-par", name: "Line Par", pinCodes: ["124507"], lat: 28.7050, lng: 76.9320 },
      { slug: "mie-bahadurgarh", name: "Modern Industrial Estate (MIE)", pinCodes: ["124507"], lat: 28.6880, lng: 76.9450 },
      { slug: "sector-2-bahadurgarh", name: "Sector 2", pinCodes: ["124507"], lat: 28.6920, lng: 76.9100 },
    ],
  },
  {
    slug: "meerut",
    name: "Meerut",
    state: "Uttar Pradesh",
    description:
      "Top-rated home services in Meerut — Shastri Nagar, Modipuram, Ganga Nagar, Pallavpuram, and Partapur. Verified plumbers, AC mechanics, electricians, and painters.",
    localities: [
      { slug: "shastri-nagar-meerut", name: "Shastri Nagar", pinCodes: ["250004"], lat: 28.9690, lng: 77.7250 },
      { slug: "modipuram", name: "Modipuram", pinCodes: ["250110"], lat: 29.0650, lng: 77.7120 },
      { slug: "ganga-nagar-meerut", name: "Ganga Nagar", pinCodes: ["250001"], lat: 28.9950, lng: 77.7550 },
      { slug: "pallavpuram", name: "Pallavpuram", pinCodes: ["250110"], lat: 29.0480, lng: 77.7080 },
      { slug: "partapur", name: "Partapur (Delhi Road)", pinCodes: ["250103"], lat: 28.9150, lng: 77.6650 },
      { slug: "cantt-meerut", name: "Meerut Cantt", pinCodes: ["250001"], lat: 28.9920, lng: 77.7050 },
      { slug: "saket-meerut", name: "Saket", pinCodes: ["250003"], lat: 28.9780, lng: 77.7180 },
      { slug: "kankerkhera", name: "Kankerkhera", pinCodes: ["250001"], lat: 29.0150, lng: 77.6850 },
    ],
  },
  {
    slug: "bhiwadi",
    name: "Bhiwadi",
    state: "Rajasthan",
    description:
      "Trusted home service technicians in Bhiwadi NCR — Alwar Bypass Road, Ashiana, Phoolbagh, and Neemrana. Professional plumbers, electricians, AC repair, and deep cleaning.",
    localities: [
      { slug: "alwar-bypass-road", name: "Alwar Bypass Road", pinCodes: ["301019"], lat: 28.2050, lng: 76.8450 },
      { slug: "ashiana-bhiwadi", name: "Ashiana Town", pinCodes: ["301019"], lat: 28.1980, lng: 76.8520 },
      { slug: "sector-1-bhiwadi", name: "Sectors 1-5", pinCodes: ["301019"], lat: 28.2120, lng: 76.8620 },
      { slug: "phoolbagh", name: "Phoolbagh", pinCodes: ["301019"], lat: 28.2180, lng: 76.8710 },
      { slug: "riico-industrial-area", name: "RIICO Industrial Area", pinCodes: ["301019"], lat: 28.2250, lng: 76.8850 },
      { slug: "neemrana", name: "Neemrana (Japanese Zone)", pinCodes: ["301705"], lat: 27.9880, lng: 76.3880 },
      { slug: "tapukara", name: "Tapukara", pinCodes: ["301018"], lat: 28.1250, lng: 76.8200 },
    ],
  },
  {
    slug: "rewari",
    name: "Rewari",
    state: "Haryana",
    description:
      "Verified local home service professionals in Rewari & Dharuhera — Model Town, Brass Market, Bawal, and NH-48 corridor. Fast emergency service.",
    localities: [
      { slug: "model-town-rewari", name: "Model Town", pinCodes: ["123401"], lat: 28.1880, lng: 76.6250 },
      { slug: "dharuhera-sector-1-6", name: "Dharuhera (Sectors 1-6)", pinCodes: ["123106"], lat: 28.2090, lng: 76.7910 },
      { slug: "brass-market-rewari", name: "Brass Market", pinCodes: ["123401"], lat: 28.1920, lng: 76.6180 },
      { slug: "bawal", name: "Bawal", pinCodes: ["123501"], lat: 28.0820, lng: 76.5860 },
      { slug: "circular-road-rewari", name: "Circular Road", pinCodes: ["123401"], lat: 28.1810, lng: 76.6120 },
    ],
  },
  {
    slug: "hapur",
    name: "Hapur",
    state: "Uttar Pradesh",
    description:
      "Find reliable home services in Hapur — Pilkhuwa, Delhi Road, Railway Road, and Anand Vihar. Verified plumbers, electricians, painters & carpenters.",
    localities: [
      { slug: "pilkhuwa", name: "Pilkhuwa", pinCodes: ["245304"], lat: 28.7120, lng: 77.6980 },
      { slug: "delhi-road-hapur", name: "Delhi Road", pinCodes: ["245101"], lat: 28.7280, lng: 77.7650 },
      { slug: "railway-road-hapur", name: "Railway Road", pinCodes: ["245101"], lat: 28.7320, lng: 77.7810 },
      { slug: "anand-vihar-hapur", name: "Anand Vihar", pinCodes: ["245101"], lat: 28.7360, lng: 77.7720 },
      { slug: "modinagar-road", name: "Modinagar Road", pinCodes: ["245101"], lat: 28.7450, lng: 77.7600 },
    ],
  },
];

/** Flat helper for quick lookups */
export function getRegionBySlug(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug);
}

export function getLocalityBySlug(
  regionSlug: string,
  localitySlug: string
): Locality | undefined {
  const region = getRegionBySlug(regionSlug);
  return region?.localities.find((l) => l.slug === localitySlug);
}

/** Get all region slugs */
export function getAllRegionSlugs(): string[] {
  return regions.map((r) => r.slug);
}

/** Get all locality paths for static generation */
export function getAllLocalityPaths(): { region: string; locality: string }[] {
  const paths: { region: string; locality: string }[] = [];
  for (const region of regions) {
    for (const locality of region.localities) {
      paths.push({ region: region.slug, locality: locality.slug });
    }
  }
  return paths;
}
