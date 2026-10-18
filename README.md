# 🏠 HomeServ NCR — Delhi-NCR Home Services Directory

> **A high-performance, SEO-optimized local services directory built to rank #1 on Google for Delhi-NCR home service searches. Monetized through listing rentals — service providers pay monthly to rent their spot with their WhatsApp & phone number.**

---

## 📋 Table of Contents

- [Business Model — How You Make Money](#-business-model--how-you-make-money)
- [How the Site Works](#-how-the-site-works)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started (Local Development)](#-getting-started-local-development)
- [Connecting the Database (Supabase)](#-connecting-the-database-supabase)
- [Deployment (Cloudflare Pages)](#-deployment-cloudflare-pages)
- [SEO Strategy — How to Rank #1 on Google](#-seo-strategy--how-to-rank-1-on-google)
- [Renting Out Listings — How to Onboard Clients](#-renting-out-listings--how-to-onboard-clients)
- [Admin Dashboard Guide](#-admin-dashboard-guide)
- [Revenue Projections](#-revenue-projections)
- [Roadmap](#-roadmap)

---

## 💰 Business Model — How You Make Money

This is a **directory rental business**. Here's how it works:

```
Step 1: Build the site (✅ DONE)
Step 2: Deploy & get it indexed on Google
Step 3: Pages start ranking for "plumber in Dwarka", "AC repair Gurgaon", etc.
Step 4: Service providers (plumbers, electricians, etc.) find YOUR site on Google
Step 5: They contact YOU to get listed (or you cold-call them)
Step 6: You add their WhatsApp number + phone number to a listing
Step 7: They pay you ₹500–₹3,000/month for the listing
Step 8: All customer calls/WhatsApp go DIRECTLY to them
```

### 💡 Your Role is Simple:
- **You do NOT provide any service yourself**
- **You do NOT handle payments between customers and providers**
- **You only rent out the listing spots** — like renting a billboard on the internet
- When someone rents a spot, you just add their:
  - ✅ Business/Provider name
  - ✅ WhatsApp number
  - ✅ Mobile phone number
  - ✅ Description of their service
  - ✅ Their area/locality

### 💰 Pricing Model (Suggested):

| Listing Type | Monthly Rent | Features |
|---|---|---|
| **Basic Listing** | ₹500/month | Name + phone + WhatsApp + description |
| **Verified Listing** | ₹1,000/month | Basic + ✓ Verified badge + priority in area |
| **Premium Listing** | ₹2,000–₹3,000/month | Verified + ⭐ Premium badge + top of page + highlighted card |

---

## ⚙️ How the Site Works

```
┌─────────────────────────────────────────────────────┐
│                    YOUR SITE                         │
│                                                      │
│   Google Search User                                 │
│   searches "plumber in Hauz Khas Delhi"             │
│              │                                       │
│              ▼                                       │
│   YOUR PAGE ranks on Google                          │
│   /delhi/hauz-khas/                                  │
│              │                                       │
│              ▼                                       │
│   User sees listing card:                            │
│   "Rajesh Kumar — Expert Plumber"                   │
│   [📞 Call Now] [💬 WhatsApp]                       │
│              │                                       │
│              ▼                                       │
│   Call/WhatsApp goes DIRECTLY to                    │
│   the renter's personal number                       │
│                                                      │
│   YOU get paid ₹500-₹3000/month                     │
│   for hosting their listing                          │
└─────────────────────────────────────────────────────┘
```

### What Makes This Work:
1. **109+ static HTML pages** pre-built for every locality in Delhi-NCR
2. Each page targets **hyperlocal keywords** like "electrician in Cyber City Gurgaon"
3. Google **loves static HTML** — fast loading = higher rankings
4. **Zero client JavaScript** = 100/100 PageSpeed score
5. All calls/WhatsApp go **directly to the renter** — you're just the middleman

---

## 🛠️ Tech Stack

| Layer | Technology | Why |
|---|---|---|
| **Framework** | Astro 5.x (Static Site Generation) | Generates pure HTML, zero JS, fastest possible loading |
| **Styling** | Tailwind CSS v4 | Purged to <10KB, utility-first CSS |
| **Database** | Supabase (PostgreSQL + PostGIS) | Free tier, real-time, row-level security |
| **Auth** | Supabase Auth | Email OTP, 2FA for admin access |
| **Hosting** | Cloudflare Pages | Free, global CDN, edge servers in Delhi & Mumbai |
| **Domain** | Any (.com / .in recommended) | Use exact-match domain for SEO boost |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── SEOHead.astro           # Schema.org JSON-LD, meta tags, OpenGraph
│   ├── SearchBar.astro         # Category + city search bar
│   └── ListingCard.astro       # Listing card with Call/WhatsApp buttons
├── data/
│   ├── regions.ts              # 6 NCR regions, 91 localities (lat/lng/PIN)
│   ├── categories.ts           # 10 service categories
│   └── listings.ts             # Seed listings (→ replaced by Supabase in production)
├── layouts/
│   ├── BaseLayout.astro        # Public site layout (header + footer)
│   └── AdminLayout.astro       # Admin panel layout (sidebar + topbar)
├── pages/
│   ├── index.astro             # Homepage
│   ├── post-your-ad.astro      # Lead capture form
│   ├── [region]/
│   │   ├── index.astro         # Region page (Delhi, Gurgaon, etc.)
│   │   └── [locality]/
│   │       └── index.astro     # Locality page — the SEO workhorse
│   ├── listing/
│   │   └── [slug].astro        # Individual listing detail page
│   └── admin/
│       ├── login.astro         # Admin login
│       ├── index.astro         # Dashboard overview
│       ├── listings/           # Manage listings (CRUD)
│       ├── localities/         # Manage localities
│       ├── categories/         # Manage categories
│       ├── seo/                # SEO title/meta/FAQ overrides
│       └── settings/           # Site settings, deploy triggers
├── styles/
│   └── global.css              # Tailwind + custom design tokens
public/
├── favicon.svg
└── robots.txt
```

---

## 🚀 Getting Started (Local Development)

### Prerequisites
- **Node.js 18+** (download from [nodejs.org](https://nodejs.org))
- **npm** (comes with Node.js)

### Install & Run

```bash
# 1. Clone or navigate to the project
cd /path/to/call

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# Public site:  http://localhost:4321
# Admin panel:  http://localhost:4321/admin/login
# Demo login:   admin@homeservncr.com / admin123
```

### Build for Production

```bash
# Generate all static HTML pages
npm run build

# Preview the production build
npm run preview
```

---

## 🗄️ Connecting the Database (Supabase)

Currently, listings are stored in `src/data/listings.ts` (static file). To make the site dynamic (add/edit/delete listings from admin panel), connect **Supabase**.

### Step 1: Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up (free tier available)
2. Click **"New Project"**
3. Choose a name (e.g., `homeserv-ncr`)
4. Select region: **South Asia (Mumbai)** for lowest latency
5. Set a database password (save this!)
6. Wait for the project to be created (~2 minutes)

### Step 2: Create Database Tables

Go to **SQL Editor** in your Supabase dashboard and run these queries:

```sql
-- Enable PostGIS for geo-queries (optional but recommended)
CREATE EXTENSION IF NOT EXISTS postgis;

-- ============================================
-- REGIONS TABLE
-- ============================================
CREATE TABLE regions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  state TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- LOCALITIES TABLE
-- ============================================
CREATE TABLE localities (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  region_id UUID REFERENCES regions(id) ON DELETE CASCADE,
  slug TEXT NOT NULL,
  name TEXT NOT NULL,
  pin_codes TEXT[] DEFAULT '{}',
  lat DOUBLE PRECISION,
  lng DOUBLE PRECISION,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(region_id, slug)
);

-- Create index for faster lookups
CREATE INDEX idx_localities_region ON localities(region_id);

-- ============================================
-- CATEGORIES TABLE
-- ============================================
CREATE TABLE categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  icon TEXT DEFAULT '🔧',
  description TEXT,
  keywords TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- LISTINGS TABLE (This is where renters go)
-- ============================================
CREATE TABLE listings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  category_id UUID REFERENCES categories(id),
  region_id UUID REFERENCES regions(id),
  locality_id UUID REFERENCES localities(id),
  description TEXT,
  provider_name TEXT NOT NULL,
  phone TEXT NOT NULL,                    -- Renter's phone number
  whatsapp TEXT,                          -- Renter's WhatsApp number
  rating DECIMAL(2,1) DEFAULT 4.5,
  review_count INTEGER DEFAULT 0,
  price TEXT,                             -- e.g., "₹300 - ₹1,500"
  experience TEXT,                        -- e.g., "10 years"
  verified BOOLEAN DEFAULT false,
  premium BOOLEAN DEFAULT false,          -- Premium = paid more = higher placement
  available_24x7 BOOLEAN DEFAULT false,
  tags TEXT[] DEFAULT '{}',
  status TEXT DEFAULT 'active',           -- active, paused, expired
  rental_amount INTEGER DEFAULT 500,      -- Monthly rent in ₹
  rental_start DATE,
  rental_end DATE,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Indexes for fast filtering
CREATE INDEX idx_listings_region ON listings(region_id);
CREATE INDEX idx_listings_locality ON listings(locality_id);
CREATE INDEX idx_listings_category ON listings(category_id);
CREATE INDEX idx_listings_status ON listings(status);
CREATE INDEX idx_listings_premium ON listings(premium) WHERE premium = true;

-- ============================================
-- SEO OVERRIDES TABLE
-- ============================================
CREATE TABLE seo_overrides (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page_path TEXT UNIQUE NOT NULL,         -- e.g., "/delhi/connaught-place/"
  custom_title TEXT,
  custom_description TEXT,
  custom_h1 TEXT,
  custom_faq JSONB DEFAULT '[]',          -- Array of {question, answer}
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- RENTAL PAYMENTS TABLE (Track who paid what)
-- ============================================
CREATE TABLE rental_payments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  listing_id UUID REFERENCES listings(id) ON DELETE CASCADE,
  amount INTEGER NOT NULL,                -- Amount in ₹
  payment_method TEXT DEFAULT 'upi',      -- upi, bank_transfer, cash
  payment_date DATE NOT NULL,
  period_start DATE NOT NULL,
  period_end DATE NOT NULL,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);
```

### Step 3: Get Your Supabase Credentials

1. In Supabase dashboard, go to **Settings → API**
2. Copy these values:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **anon/public key** (safe for client-side)
   - **service_role key** (for server-side only, keep SECRET)

### Step 4: Add Environment Variables

Create a `.env` file in your project root:

```env
# Supabase Connection
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=eyJhbG...your-anon-key
SUPABASE_SERVICE_KEY=eyJhbG...your-service-role-key

# Site
SITE_URL=https://delhincrhomeservices.com
```

### Step 5: Install Supabase Client

```bash
npm install @supabase/supabase-js
```

### Step 6: Create Supabase Client Helper

Create `src/lib/supabase.ts`:

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_SERVICE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
```

### Step 7: Replace Static Data with Database Queries

In your page files (e.g., `[region]/[locality]/index.astro`), replace:

```typescript
// OLD: Static data
import { getListings } from "../../../data/listings";
const localListings = getListings({ region: region.slug });

// NEW: Database query
import { supabase } from "../../../lib/supabase";
const { data: localListings } = await supabase
  .from("listings")
  .select("*, categories(*), regions(*), localities(*)")
  .eq("region.slug", region.slug)
  .eq("status", "active")
  .order("premium", { ascending: false })
  .order("created_at", { ascending: false });
```

---

## 🌐 Deployment (Cloudflare Pages)

Cloudflare Pages is **free** and has edge servers in **Delhi and Mumbai** — meaning your site loads in <50ms for NCR users.

### Option A: Deploy via GitHub (Recommended)

```bash
# 1. Push your code to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/homeserv-ncr.git
git push -u origin main
```

Then:
1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Click **Workers & Pages → Create Application → Pages**
3. Connect your GitHub repository
4. Set build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Add **Environment Variables** (from Step 4 above)
6. Click **Save and Deploy**

Every time you push to GitHub, the site automatically rebuilds.

### Option B: Deploy via CLI (Quick)

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build the site
npm run build

# Deploy
wrangler pages deploy dist --project-name=homeserv-ncr
```

### Custom Domain Setup

1. Buy a domain (recommended: `delhincrhomeservices.com` or `homeservncr.in`)
2. In Cloudflare Pages → Custom Domains → Add domain
3. Update DNS records as instructed
4. SSL is automatic and free

---

## 🔍 SEO Strategy — How to Rank #1 on Google

This site is **architecturally built for SEO**. Here's the step-by-step plan:

### Phase 1: Technical SEO (✅ Already Done)

- [x] **Static HTML** — zero client JS, instant loading
- [x] **Schema.org JSON-LD** — BreadcrumbList, FAQPage, LocalBusiness on every page
- [x] **Canonical URLs** — self-referencing canonical on every page
- [x] **OpenGraph + Twitter Cards** — for social sharing
- [x] **robots.txt** — allows crawlers, blocks admin
- [x] **Geo-targeting meta tags** — `geo.region=IN-DL`, `geo.placename=Delhi NCR`
- [x] **URL geo-silo hierarchy** — `/delhi/hauz-khas/`, `/gurgaon/cyber-city/`
- [x] **Mobile-first responsive design** — works perfectly on phones
- [x] **Internal linking** — every locality page links to nearby areas

### Phase 2: Google Indexing (Do This After Deploy)

```bash
# 1. Install @astrojs/sitemap
npm install @astrojs/sitemap
```

Add to `astro.config.mjs`:
```javascript
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://delhincrhomeservices.com',
  integrations: [sitemap()],
  // ... rest of config
});
```

Then:
1. **Google Search Console** — [search.google.com/search-console](https://search.google.com/search-console)
   - Add your domain
   - Verify ownership (DNS TXT record)
   - Submit `sitemap-index.xml`
2. **Google Business Profile** — Create one for your directory
3. **Bing Webmaster Tools** — Submit there too for extra traffic

### Phase 3: Content + Backlinks (Ongoing)

| Action | Why | Timeline |
|---|---|---|
| Add 50+ listings with real content | Google needs content density | Week 1–2 |
| Write 5 blog posts (e.g., "How to Find a Plumber in Delhi") | Long-tail keyword targeting | Week 2–4 |
| Submit to local directories (Justdial, Sulekha) | Backlinks from Indian domains | Week 3–4 |
| Create Google My Business listing | Local pack ranking | Week 1 |
| Post on social media (Facebook Delhi groups) | Traffic signals to Google | Ongoing |
| Collect reviews/testimonials | Trust signals | Ongoing |

### Expected Timeline to Rank:

| Timeframe | Expected Result |
|---|---|
| **Month 1** | Google discovers and indexes all 117 pages |
| **Month 2–3** | Long-tail pages start appearing (page 2–3 of Google) |
| **Month 3–6** | Locality pages climb to page 1 for hyperlocal queries |
| **Month 6–12** | Region pages start ranking for broader terms |
| **Month 12+** | Homepage competes for "home services Delhi NCR" |

---

## 🤝 Renting Out Listings — How to Onboard Clients

### How to Find Renters (Your Clients):

1. **Wait for inbound leads** — Once you rank, service providers will find YOUR site and contact you wanting to be listed
2. **Cold outreach** — Search "plumber in Delhi" on Google, call businesses on page 2–3 and offer them a spot on YOUR site (which is ranking higher)
3. **Visit local markets** — Go to local markets in Dwarka, Rohini, Noida and hand out cards
4. **WhatsApp groups** — Join Delhi-NCR service provider groups and post your offer
5. **Facebook/Instagram ads** — Run cheap ads targeting "plumber Delhi" audiences

### How to Add a New Renter:

When someone wants to rent a listing spot, here's exactly what you do:

#### Quick Method (Admin Dashboard):

1. Go to `https://yoursite.com/admin/login`
2. Login with admin credentials
3. Click **"Add New Listing"**
4. Fill in:
   - **Provider Name:** Their business name (e.g., "Rajesh Kumar Plumbing")
   - **Phone:** Their mobile number (e.g., +91 98765 43210)
   - **WhatsApp:** Their WhatsApp number
   - **Category:** Plumber / Electrician / AC Repair / etc.
   - **Region:** Delhi / Gurgaon / Noida / etc.
   - **Locality:** Connaught Place / Cyber City / Sector 62 / etc.
   - **Description:** What services they offer
   - **Price Range:** Their service charges
   - **Verified:** ✓ (if they paid for verified tier)
   - **Premium:** ⭐ (if they paid for premium tier)
5. Click **"Save Listing"**
6. Rebuild the site (click "Trigger Rebuild" in Settings)
7. Their listing is now live with their phone & WhatsApp!

#### What the Renter Gets:

```
┌────────────────────────────────────────────┐
│  ⭐ PREMIUM                                │
│  🔧 Rajesh Kumar — Expert Plumber          │
│     Connaught Place, Delhi                  │
│                                             │
│  15+ years experienced plumber...           │
│                                             │
│  ✓ Verified  |  24/7 Available             │
│  ★★★★★ 4.8 (234 reviews)  ₹300–₹1,500    │
│                                             │
│  [📞 Call Now]  [💬 WhatsApp]              │
│                                             │
│  Both buttons dial THEIR personal number    │
└────────────────────────────────────────────┘
```

- **All calls go to THEM** — you never handle customer queries
- **All WhatsApp messages go to THEM** — pre-filled with their listing info
- **They show up on Google** — on YOUR high-ranking page
- **You collect rent monthly** — ₹500 to ₹3,000/month per listing

### Tracking Rentals:

Use the `rental_payments` table in Supabase to track:
- Who paid
- How much
- For which month
- Payment method (UPI/bank/cash)
- When their rental expires

---

## 🖥️ Admin Dashboard Guide

Access at: `https://yoursite.com/admin/login`

| Section | What It Does |
|---|---|
| **Dashboard** | Overview stats — total listings, verified, premium, page counts |
| **Listings** | Add/edit/delete listings. Filter by category, region, status |
| **Localities** | Manage all 91 NCR localities. Add new areas as needed |
| **Categories** | Manage service categories. Add new ones (e.g., CCTV, Interior Design) |
| **SEO Overrides** | Manually set custom title/meta/H1/FAQ for high-value pages |
| **Settings** | Site name, contact info, password, spam filters, deploy triggers |

---

## 📊 Revenue Projections

### Conservative Estimate:

| Month | Active Rentals | Avg. Rent | Monthly Revenue |
|---|---|---|---|
| Month 3 | 5 listings | ₹750 | ₹3,750 |
| Month 6 | 20 listings | ₹1,000 | ₹20,000 |
| Month 9 | 50 listings | ₹1,200 | ₹60,000 |
| Month 12 | 100 listings | ₹1,500 | ₹1,50,000 |

### Your Costs:

| Item | Cost |
|---|---|
| Cloudflare Pages hosting | **FREE** |
| Supabase (free tier) | **FREE** |
| Domain (.com) | ₹800/year |
| **Total monthly cost** | **~₹70/month** |

**Profit margin: ~99%** — almost zero operating costs.

---

## 🗺️ Roadmap

### Phase 1 — Launch (Current) ✅
- [x] Static site with 117 pre-rendered pages
- [x] Admin dashboard with listing management
- [x] SEO-optimized with Schema.org JSON-LD
- [x] Call + WhatsApp CTA on every listing

### Phase 2 — Go Dynamic
- [ ] Connect Supabase database
- [ ] Add/edit listings from admin without touching code
- [ ] Auto-rebuild on listing changes (Cloudflare webhook)
- [ ] Rental payment tracking

### Phase 3 — Scale
- [ ] Add more localities (aim for 200+)
- [ ] Add more categories (CCTV, Interior Design, Gardener, etc.)
- [ ] Blog section for long-tail SEO content
- [ ] WhatsApp Business API integration for auto-responses
- [ ] Multi-language support (Hindi pages for even more traffic)

### Phase 4 — Monetize Hard
- [ ] Self-service listing portal (providers sign up and pay online)
- [ ] Razorpay/Cashfree integration for auto-payments
- [ ] Listing analytics (show renters how many calls they got)
- [ ] Expand to other NCR services (wedding, events, tutors)
- [ ] Clone the model for other cities (Mumbai, Bangalore, etc.)

---

## 🧞 Commands

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site (generates all static pages) |
| `npm run preview` | Preview production build locally |

---

## 📄 License

Private project. All rights reserved.

---

> **Built for ranking. Built for renting. Built for revenue.** 🚀
