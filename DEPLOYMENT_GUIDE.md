# Production Deployment Plan & Guide: Delhi NCR Home Services Directory

This guide provides an end-to-end deployment strategy for the **HomeServ NCR** static programmatic SEO directory built with Astro 5, Tailwind CSS v4, and Lucide icons.

---

## 1. Architecture & Deployment Profile

| Property | Details |
| :--- | :--- |
| **Framework** | Astro 5 (Pure Static Site Generation — SSG) |
| **Output Directory** | `dist/` |
| **Current Page Count** | 193 static HTML pages (Homepage, Search, 10 Regions, 180+ Localities, Listings, About, Contact, Admin) |
| **Build Time** | ~2.3 seconds |
| **Client-side JS** | Zero on public pages; minimal vanilla JS on Search & Admin |
| **Target Geography** | Delhi, Gurgaon, Noida, Faridabad, Ghaziabad & surrounding NCR hubs |
| **Primary Need** | Sub-30ms Time to First Byte (TTFB) in North India, unlimited bandwidth for SEO crawlers, and zero hosting cost |

---

## 2. Platform Comparison: Where to Deploy

| Feature | 🥇 Cloudflare Pages (Recommended) | 🥈 Vercel | 🥉 Netlify | GitHub Pages |
| :--- | :--- | :--- | :--- | :--- |
| **Cost** | **100% Free** | Free (Hobby tier) | Free (Starter tier) | Free |
| **Bandwidth Limit** | **Unlimited** | 100 GB / month | 100 GB / month | 100 GB / month |
| **India Edge POPs** | **Delhi, Mumbai, Chennai, Kolkata, Bangalore, Hyderabad** | Mumbai (BOM) | Mumbai | Generic CDN |
| **Delhi NCR TTFB** | **10–25ms** (New Delhi node) | 25–45ms | 30–60ms | 80–150ms |
| **Build Limits** | 500 builds / month (Free) | 6,000 build min/mo | 300 build min/mo | Limited actions |
| **Deploy Hooks (API)** | Yes (Free) | Yes (Free) | Yes (Free) | Complex setup |
| **Custom Domain & SSL** | Free auto-renewing SSL | Free auto-renewing SSL | Free auto-renewing SSL | Free SSL |
| **DDoS Protection** | Cloudflare Enterprise-grade | Cloudflare-backed | Standard | Basic |

### Why Cloudflare Pages is the #1 Choice:
1. **Direct Delhi POP (Point of Presence):** Cloudflare operates high-capacity data center clusters directly in New Delhi. Residents in Delhi, Gurgaon, and Noida fetch pages within 10–25 milliseconds.
2. **Unlimited Bandwidth:** Programmatic SEO sites generate thousands of crawler hits from Googlebot, Bingbot, and localized search engines. Platforms with 100 GB caps risk surprise charges or sudden suspensions. Cloudflare Pages has **no bandwidth limit** on its free tier.
3. **Instant Deploy Hooks:** When new listings or locality overrides are published via the Admin Dashboard, a single webhook call rebuilds the entire 193-page site in under 3 seconds.

---

## 3. Pre-Deployment Configuration Checklist

Before initiating deployment, verify these project configurations:

### A. Confirm Site URL in `astro.config.mjs`
Ensure your target production domain is configured so that canonical tags, sitemaps, and OpenGraph URLs generate correctly:

```javascript
// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://yourdomain.com", // Replace with your actual domain
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/admin"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: "auto",
  },
});
```

### B. Verify Clean Local Build
Run the build locally to ensure all 193 pages generate without errors:
```bash
npm run build
```
Verify `dist/index.html` and `dist/sitemap-index.xml` exist.

---

## 4. Method 1: Deploying via Cloudflare Pages (Recommended)

### Step 1: Push Code to GitHub / GitLab
1. Initialize Git and commit the workspace:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Delhi NCR home services directory with Lucide icons"
   ```
2. Create a private or public repository on GitHub (e.g., `homeserv-ncr`).
3. Connect and push your code:
   ```bash
   git remote add origin https://github.com/<your-username>/homeserv-ncr.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Connect Repository in Cloudflare Dashboard
1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the left navigation, select **Workers & Pages** → **Create application** → **Pages** tab.
3. Click **Connect to Git** and authorize your GitHub/GitLab account.
4. Select the `homeserv-ncr` repository.

### Step 3: Configure Build Settings
Fill in the build configuration:
- **Project Name:** `homeserv-ncr` (or your preferred name)
- **Production Branch:** `main`
- **Framework Preset:** `Astro`
- **Build Command:** `npm run build`
- **Build Output Directory:** `dist`
- **Deploy Command:** **LEAVE COMPLETELY EMPTY / BLANK** (⚠️ Do NOT enter `npx wrangler deploy` or any deploy command! Cloudflare Pages automatically serves the `dist` directory. Entering `wrangler deploy` triggers a Worker build which will fail.)
- **Environment Variables:**
  - `NODE_VERSION`: `22` (or `24`)

### Step 4: Deploy
Click **Save and Deploy**. Cloudflare Pages will clone your repository, run `npm run build`, and deploy your 193 static pages to `https://homeserv-ncr.pages.dev` in ~30 seconds.

---

## 5. Alternative: Direct CLI Deployment (No GitHub Required)

If you prefer to deploy directly from your local terminal without Git integration:

1. Install the Cloudflare Wrangler CLI:
   ```bash
   npm install -g wrangler
   ```
2. Authenticate Wrangler with your Cloudflare account:
   ```bash
   wrangler login
   ```
3. Build the site:
   ```bash
   npm run build
   ```
4. Deploy the `dist` folder:
   ```bash
   wrangler pages deploy dist --project-name=homeserv-ncr
   ```

---

## 6. Method 2: Deploying via Vercel (Secondary Option)

If you already use Vercel for other projects:

### Via Vercel Web Dashboard:
1. Push your project to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel automatically detects **Astro**:
   - **Build Command:** `astro build` or `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Click **Deploy**.

### Via Vercel CLI:
```bash
npm install -g vercel
vercel
# Follow the interactive prompts and choose default settings
vercel --prod
```

---

## 7. Connecting Your Custom Domain & DNS Setup

To attach your brand domain (e.g., `delhincrhomeservices.com`):

### In Cloudflare Pages:
1. Inside your Cloudflare Pages project, go to **Custom domains** → **Set up a custom domain**.
2. Enter your domain: `delhincrhomeservices.com` (and `www.delhincrhomeservices.com`).
3. If your domain is already registered on Cloudflare, DNS records are configured automatically.
4. If registered on GoDaddy / Namecheap / Google Domains:
   - Point your DNS Nameservers to Cloudflare (recommended for instant caching & SSL).
   - Alternatively, add a `CNAME` record:
     - **Host:** `@` (or `www`)
     - **Target:** `homeserv-ncr.pages.dev`
     - **Proxy status:** Proxied (Orange cloud)

### SSL/TLS Configuration:
- In Cloudflare Dashboard → **SSL/TLS** → Set encryption mode to **Full (Strict)**.
- Enable **Always Use HTTPS** and **Automatic HTTPS Rewrites**.

---

## 8. Setting Up Automated Rebuilds (Deploy Hooks)

When you update listings or SEO metadata via `/admin/`, trigger an automated rebuild without touching code:

1. In Cloudflare Pages → **Settings** → **Builds & deployments** → **Deploy hooks**.
2. Click **Add deploy hook**:
   - **Hook Name:** `Admin Rebuild Hook`
   - **Branch:** `main`
3. Copy the generated URL:
   `https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/xxxx-xxxx-xxxx`
4. Paste this hook into your Admin Settings panel in [`src/pages/admin/settings/index.astro`](file:///home/avinash-sharma/Desktop/Research/call/src/pages/admin/settings/index.astro) or wire it to your "Trigger Rebuild" button.
5. Making a `POST` request to this webhook automatically triggers an instant rebuild of all 193 pages on Cloudflare.

---

## 9. Post-Launch Search Engine Optimization (SEO) Roadmap

Once live on your custom domain, execute these launch steps:

1. **Verify `robots.txt`:**
   Ensure `https://yourdomain.com/robots.txt` serves:
   ```txt
   User-agent: *
   Allow: /
   Disallow: /admin/
   Disallow: /admin/*

   Sitemap: https://yourdomain.com/sitemap-index.xml
   ```

2. **Submit Sitemap to Google Search Console (GSC):**
   - Add property: `https://yourdomain.com`
   - Go to **Sitemaps** → Add `sitemap-index.xml`.
   - Google will discover and queue all 193 URLs for indexing.

3. **Submit to Bing Webmaster Tools:**
   - Import your GSC property directly into Bing Webmaster Tools for fast indexing in India.

4. **Verify Schema.org Rich Snippets:**
   - Test your homepage and listing pages on [Google Rich Results Test](https://search.google.com/test/rich-results).
   - Confirm valid detection of `FAQPage` and `LocalBusiness` structured data.

5. **Set Up Privacy-First Analytics:**
   - Enable Cloudflare Web Analytics (free, 1-click, no cookies, zero speed impact).

---

## 10. Cost & Maintenance Summary

- **Hosting Cost:** **₹0 / month** ($0 USD) indefinitely on Cloudflare Pages free tier.
- **Domain Cost:** ~₹800 – ₹1,200 / year (standard `.com` or `.in` registration).
- **SSL Certificate:** Free and automatically renewed.
- **Maintenance:** Pure static files eliminate server patches, database downtime, and backend security vulnerabilities.

---

## 11. Troubleshooting Common Deployment Errors

### ❌ Error: `Executing user deploy command: npx wrangler deploy` / `Failed to get static paths from Cloudflare prerender server (500)`

**What went wrong:**
Your build succeeded completely:
```
13:35:59 [build] 193 page(s) built in 2.53s
13:35:59 [build] Complete!
Success: Build command completed
```
However, Cloudflare then attempted to run:
```
Executing user deploy command: npx wrangler deploy
...
Configuring project for Astro with "astro add cloudflare"
```
`npx wrangler deploy` is meant for **Cloudflare Workers** (serverless functions), NOT **Cloudflare Pages** (static sites). Running this causes Wrangler to auto-install `@astrojs/cloudflare` SSR adapter and fail during miniflare prerendering.

**How to Fix:**
1. Go to your project in the **Cloudflare Dashboard**.
2. Navigate to **Settings** → **Builds & deployments** (or **Build configuration**).
3. Find the **Deploy command** field.
4. **Delete / Clear the Deploy command completely** so it is empty.
5. Ensure your settings are:
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Deploy command:** *(Leave empty / blank)*
6. Re-trigger the build. Cloudflare Pages will build the 193 pages and deploy them instantly.

