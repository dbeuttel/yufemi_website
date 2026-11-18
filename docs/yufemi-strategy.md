# Yufemi Wellness: Business, Brand & Website Strategy

_Prepared November 18, 2026 · Draft for internal review_

> **How this was researched.** I crawled yufemi.com directly on Nov 18, 2026: the homepage, all 11 URLs in the Yoast sitemap, the WooCommerce Store API (product catalog), robots.txt, and response headers. I also took desktop and mobile screenshots and measured load in headless Chromium. Competitor pricing comes from public retailer listings (Walmart, Vitacost) and should be re-checked before quoting.
>
> _An earlier version of this document wrongly treated Yufemi as a consulting firm. That error came from search-engine snippets of the leftover template pages described in §4.1. It's a useful illustration of how much damage those pages do._

---

## 1. Business analysis

### 1.1 What Yufemi is today (observed)

| Attribute | Finding |
|---|---|
| Brand | **Yufemi Wellness**, operated by Yufemi Consulting Group LLC (NC, formed Jan 2024). The LLC name appears inside the logo lockup. |
| Positioning (site copy) | "Revolutionizing Wellness With More Than Just Sea Moss." Wellness, nutrition and skincare for **busy professionals**, built on sea moss. Culture of "growth, self-improvement, and action." Rallying line: **"DO YUFEMI."** |
| Live product | **Elderberry Ginger Sea Moss** gel, 16 oz, **$30**. Ingredients: sea moss, elderberry, ginger, spring water. Label: "Wildcrafted · Organic · Immune Support Blend · Keep Refrigerated." |
| Pipeline (site copy) | Blends for beauty, energy, gut health and mental health; Skincare/Beauty and Apparel categories (currently a single $0 "COMING SOON" placeholder product). |
| Platform | WordPress + Divi 4.27 + WooCommerce (WooPayments, PayPal, UPS shipping), Yoast SEO, WP Rocket, TranslatePress, Complianz. Bluehost shared hosting. Built via "The Free Website Guys." |
| Social proof | 0 product reviews; no testimonials; Instagram icon in footer. |
| Contact | `info.yufemi@gmail.com` + 919 phone on Contact page; homepage "Contact Us" button opens `mailto:` to a different, personal Gmail address. |

### 1.2 The opportunity

- **Category is mature but fragmented.** Analyst estimates put the global sea moss market around **$2.6–3.3B (2025)** growing ~2–5%/yr. Growth is slow overall, but demand is driven by social media and the "natural supplement" trend, and the shelf is full of small makers.
- **Price parity with national brands.** Comparable 16 oz gels: TrueSeaMoss ~$29.74–$34.99, EverSmith Organics ~$29.99 (Walmart/Vitacost listings). At $30, Yufemi is priced right; it must win on **freshness, local trust, flavor and community**, not price.
- **Yufemi's real differentiators** (to lean into):
  1. **Small-batch and local.** A North Carolina maker vs. Amazon warehouses (verify and state where it's made).
  2. **Functional blends** (beauty / energy / gut / mood) as a clear product architecture, rather than a random flavor list.
  3. **"DO YUFEMI"**: a lifestyle and community brand (the logo is literally a circle of people), not only a supplement jar.
  4. **Busy-professional focus.** Ready-to-use, no prep, a spoonful a day.

### 1.3 SWOT

| Strengths | Weaknesses |
|---|---|
| Distinctive, warm logo (circle of people) with real meaning | Store has **one** real product; the rest is "Coming Soon" |
| Product exists, is photographed, labeled and priced competitively | Template leftovers make the site read as a consulting firm (see §4) |
| Clear audience (busy professionals) and a memorable rallying line ("DO YUFEMI") | No reviews, no founder story, no "why us" |
| Store already wired (WooCommerce + payments + shipping) | Brand mixes "Consulting Group LLC" into consumer packaging and logo |

| Opportunities | Threats |
|---|---|
| Local retail and farmers markets (Raleigh, Durham, Cary) where fresh gel beats shelf-stable imports | Health-claim and labeling compliance risk (§1.5) |
| Subscriptions: gel lasts 3–4 weeks, a natural monthly reorder | Cold-chain shipping of a refrigerated product (spoilage → refunds, reviews) |
| Bundles & flavor sampler; gifting (holiday season is now) | Amazon/Walmart brands with thousands of reviews |
| Instagram/TikTok "how I use it" content; UGC from first customers | Category fatigue/skepticism around exaggerated sea moss claims |

### 1.4 Recommended positioning

> **Yufemi makes sea moss easy for busy people. Small-batch gels blended for how you want to feel, made in North Carolina, from a brand built around community.**

- **Hero product:** Elderberry Ginger Sea Moss Gel (the "Immune Support Blend").
- **Product architecture** (already promised on the site): one jar per goal: _Beauty · Energy · Gut · Mood_. Each blend gets a color from the palette.
- **Model:** one-time purchase + **subscribe & save** (every 4 weeks) + local pickup/markets.
- **Brand architecture:** Consumer brand = **YUFEMI Wellness**. Keep "Yufemi Consulting Group LLC" in the legal footer only.

### 1.5 Compliance flags (not legal advice; verify with NCDA&CS / an attorney)

| Item | Why it matters | Suggested action |
|---|---|---|
| **"Organic"** on the label | Products sold as organic generally need USDA organic certification. Small-operation exemptions exist, but they restrict how the term and seal can be used. | Confirm certification status or change to "made with organic ___" / remove. |
| **"Immune Support," thyroid, gut and mood claims** | These are structure/function-style claims. They need substantiation and the FDA disclaimer (present on site). Disease claims are not allowed. | Keep claims modest; the draft homepage avoids specific health promises. |
| **"92 of the 102 minerals"** (homepage FAQ) | Widely repeated online but not well substantiated. | Remove (removed in the draft). |
| **Refrigerated food product, shipped via UPS** | Selling a perishable food typically needs state food-safety registration/inspection, plus cold-chain handling. A competitor was reported to have had a 2026 FDA-posted recall over temperature-monitoring records. | Confirm NCDA&CS requirements; ship insulated with ice packs, Mon–Wed only; state the shipping policy on the site. |
| **Pregnancy/thyroid guidance** | Good that it's there. | Keep, and add "consult your healthcare provider" on product pages too. |

---

## 2. Competitive landscape

| Competitor | Type | Pricing (16 oz) | What they do well | Where Yufemi can win |
|---|---|---|---|---|
| **TrueSeaMoss** | National, Amazon/Walmart/Whole Foods leader | ~$29.74–$34.99 | Huge flavor range incl. **Elderberry**; massive review count; retail distribution | Fresher, local, a human story; community |
| **EverSmith Organics** | National DTC + wholesale (Pod Foods) | ~$29.99 | Organic positioning; 16 oz elderberry; clean site | Functional blend story; local presence |
| **ACEYO** | Amazon brand | verify | Multi-ingredient "4-in-1" ginger blends (digestion angle) | Real food ingredients, no capsule-y feel |
| **Biolore** | National | verify | — | Reported 2026 FDA-posted recall over temperature records shows why food-safety process is a trust lever |
| **Local/Instagram makers** (e.g. farmers-market and Big Cartel sellers) | Micro | $20–35 typical | Freshness, personal relationships | Better brand, better site, subscriptions, wider line |
| **Premium retail** (e.g. Erewhon's Cosmic Berry gel) | Prestige grocery | premium | Aspirational branding | Shows there's room for a "beautiful" sea moss brand |

**Takeaways**
1. **Elderberry is table stakes.** National brands sell it too. Yufemi's elderberry **plus ginger** is a small, real differentiator, and the functional-blend system is a bigger one.
2. **Reviews are the moat.** Competitors win on volume of social proof. Yufemi needs a review engine from order #1 (post-purchase email + incentive for photo reviews).
3. **Nobody local owns "the Triangle's sea moss brand."** Farmers markets and local stores are an open lane, and local SEO is cheap to win.

---

## 3. Brand kit

The existing logo is strong and meaningful, so the kit **evolves** the identity rather than replacing it.

### 3.1 Logo

- **Mark:** six figures holding hands in a circle that also forms a flower, with a green center. Meaning to tell on the site: _community, growth, wholeness. Wellness you do together_.
- **Wordmark:** "YUFEMI" in a classical caps serif (purple). Drop **"CONSULTING GROUP LLC"** from all consumer-facing lockups and replace with **"WELLNESS"** in small tracked caps.
- **Lockups:** horizontal (mark + YUFEMI / WELLNESS), stacked (for jars and social avatars), mark-only (favicon, stickers, jar lid).
- **Clear space:** the diameter of the green center dot × 2. **Minimum size:** mark 24px; horizontal lockup 120px wide.
- **Files in repo:** `public/assets/yufemi-mark-*.png|webp` (mark extracted from the current logo file). **Ask the designer for the original vector (AI/SVG/PDF).** The site file is a raster, and production needs vectors.

**Don'ts:** no "Consulting Group LLC" on consumer touchpoints, no recoloring the people (always Sun Gold), no drop shadows/outer glows, never on busy photo backgrounds without a cream or night plate.

### 3.2 Color

Derived from the logo and label (sampled from the actual files):

| Token | Hex | Source / Role | Contrast |
|---|---|---|---|
| `--sun` (Sun Gold) | `#F0B038` | Logo figures. Primary brand color, primary buttons (with Night text), highlights | Night text on Sun 8.7:1 |
| `--plum` (Yufemi Plum) | `#402868` | Wordmark. Headings, body accents | 11.3:1 on Cream |
| `--night` (Deep Plum) | `#241640` | Dark sections, footer, body text | 15.4:1 on Cream |
| `--moss` (Sea Moss Green) | `#28A858` | Logo center dot. **Decorative or on Night only** | 5.4:1 on Night · ✗ on light bg |
| `--leaf` (Leaf Green) | `#1E7A41` | Accessible green for links, badges, success states on light bg | 5.0:1 on Cream · white on Leaf 5.4:1 |
| `--cream` | `#FBF6EC` | Primary background (warm, food-friendly) | — |
| `--sand` | `#F5E9D2` | Alternate section background, cards | Night 13.8:1 |
| `--mute` | `#5E5470` | Secondary text | 6.6:1 on Cream |

**Blend colors** (for future SKUs, labels and product cards): Immune = Elderberry `#5B2A6E` · Beauty = Hibiscus `#D9577A` · Energy = Citrus `#F08A24` · Gut = Mint `#4FA37F` · Mood = Lavender `#8F7BC8` (decorative; pair text with Night).

Proportion guide: 55% Cream/Sand, 25% Night/Plum, 15% Sun Gold, 5% Moss/Leaf.

### 3.3 Typography

| Use | Typeface | Notes |
|---|---|---|
| Wordmark / logotype accents | **Cinzel** (Google Fonts) | Closest free match to the existing caps serif wordmark. Use only for "YUFEMI", eyebrows and labels. |
| Headlines | **Fraunces** (soft, 600) | Warm, organic, editorial; pairs well with food photography |
| Body / UI | **DM Sans** (400/500/700) | Friendly, highly legible at small sizes on mobile |

Scale: H1 2.6→4.75rem (fluid) · H2 2→3.25rem · Body 1.0625rem/1.65 · Eyebrow 0.8rem Cinzel caps, 0.18em tracking.

### 3.4 Voice

**Warm, encouraging, honest. Like a friend who's into wellness, not a lab coat or an influencer.**

| Do | Don't |
|---|---|
| "A spoonful a day, in whatever you're already drinking." | "Unlock 92 minerals to supercharge your immunity!!!" |
| "Start small and see how you feel." | "Cures / heals / detoxes / treats" (disease claims) |
| "DO YUFEMI: show up for yourself today." | Corporate filler ("innovative solutions tailored to your unique challenges") |

### 3.5 Photography & graphics

- **Reshoot the jar:** currently on flat gray. Shoot on cream/sand surfaces with real ingredients (elderberries, sliced ginger, a spoon of gel), in daylight, from the 3/4 angle plus top-down. Add lifestyle shots (smoothie, tea, desk at 7 a.m.) to match "busy professionals."
- **Graphic motif:** soft organic "moss" squiggles and circular forms echoing the logo ring. Thin lines in Sun Gold or Leaf.
- **Label system:** keep the dark label (it matches Night), with each blend's color as the band.
- **The two stock-style "heart of sea moss" photos** on the current site: confirm they're licensed; replace with original photography.

---

## 4. Website issues (observed Nov 18, 2026)

### 4.1 Critical: fix this week

| # | Issue | Evidence | Fix |
|---|---|---|---|
| 1 | **About Us page is a consulting-firm template.** It says "At consulting firm, we are committed to being your strategic partner…", has a "Business Strategy Consulting" values section with a typo ("Execllence"), and lists "James Gatabaki" four times as CEO / Head of Department / Manager / Associate. | `/about-us/` | Rewrite as the founder and brand story (why sea moss, why "DO YUFEMI", the logo meaning), or remove it. |
| 2 | **Contact page talks about "our consultancy services."** | `/contact/` | Rewrite for customers: orders, wholesale, events. |
| 3 | **`/service-1/` is live Lorem Ipsum** ("Business Strategy Consulting… Get A Free Consultation") and is in the sitemap. | `/service-1/`, `page-sitemap.xml` | Delete and 301 to home. |
| 4 | **"Hello world!" default post** (with the default WordPress comment) and a blog page whose newsletter signup still has Lorem Ipsum ("Quis blandit erat…"). | `/hello-world/`, `/blog/` | Delete post; remove/redo blog; 301. |
| 5 | **Google indexes the site as a consulting firm** because of #1–#3. Search results for "Yufemi" return "Yufemi … consultancy" snippets. | Search results | Fixing #1–#4, then requesting re-indexing in Search Console. |
| 6 | **"COMING SOON" product at $0, in stock**, in Apparel and Skincare. It can likely be added to the cart, and it's in the product sitemap. | Store API: `price 0, is_in_stock true` | Unpublish it; use a waitlist signup instead. |
| 7 | **The main CTA "Click Here to DO YUFEMI" isn't a link.** It's a plain `<h4>`. | Homepage HTML | Make it a button to the product. |
| 8 | **The homepage never shows the product or a price or an "Add to cart."** The only product is buried under Products → Health & Wellness. | Homepage | Put the hero product with price and Add to cart above the fold. |
| 9 | **Two different contact emails**, both Gmail: `info.yufemi@gmail.com` (Contact page) and a personal Gmail on the homepage button. | Homepage + Contact | One branded address: `hello@yufemi.com`. Remove the personal address from the public site. |

### 4.2 High: SEO and trust

| # | Issue | Fix |
|---|---|---|
| 10 | **Homepage `<title>` is just "Yufemi"; no meta descriptions anywhere.** OG title is the template's "Landing / Home." | Titles like `Sea Moss Gel – Elderberry Ginger, Small-Batch \| Yufemi Wellness` + unique meta descriptions per page (Yoast is installed, just unfilled). |
| 11 | **No Product structured data** on the homepage; only a generic WebPage graph. | Product + Offer + Organization + FAQPage schema (the draft includes it). |
| 12 | **All content images have empty `alt`** (sea moss photos, jar, logo duplicates). | Descriptive alt text. |
| 13 | **Zero reviews**; no testimonials. | Post-purchase review request emails; seed with first customers/friends-and-family (honest reviews only). |
| 14 | **Logo/OG/favicon file is the full lockup incl. "Consulting Group LLC."** Shared links show it. | Dedicated 1200×630 social image (draft includes one). |
| 15 | **Product page is thin:** one-line description, "SKU: N/A," no usage, storage, shipping or sourcing info. | Full product page: how to use, storage (3–4 wks fridge / 6 mo freezer), ingredients, shipping/cold-pack policy, FAQ. |
| 16 | **Heading structure is out of order** (H1 → H3 → H4 → H5); the brand mission sits in H3/H4. | One H1, then H2 sections. |

### 4.3 Medium: UX, performance, hygiene

| # | Issue | Fix |
|---|---|---|
| 17 | **Viewport disables zoom** (`maximum-scale=1.0, user-scalable=0`). This is an accessibility failure (WCAG 1.4.4). | Remove those parameters (Divi setting). |
| 18 | **Language switcher floats over content** (TranslatePress) although the site is English-only. | Remove TranslatePress unless Spanish is coming. |
| 19 | **Huge empty sections** on the homepage where lazy-loaded image modules render as blank blocks until scrolled; lots of dead space. | Tighten layout; explicit image sizes. |
| 20 | **Heavy page:** about 2.6 MB transferred and 40 requests on desktop. Load around 3.0s desktop, 1.9s mobile; LCP about 2.0s (headless test, single run). The original jar photo is 1.4 MB at 1536×2048, and the logo is a 2172px file displayed at 218px. | Compress images (WebP ≤ 150 KB), right-size the logo, drop unused plugins. |
| 21 | **Bulleted list uses the letter "o" as bullets** ("o Perfect for busy lifestyles"). | Real list markup. |
| 22 | **Footer "Quick Links" points to "Services / Products"** (`/services/` redirects to `/products/`). | Rename "Shop." |
| 23 | **Footer credit "Website built by The Free Website Guys 🚀"** is more prominent than the brand. | Move to a small credit or remove. |
| 24 | **Sitemap lastmod for home is Feb 2026.** The site hasn't been updated in 9 months. | Regular updates (new blends, posts). |

### 4.4 To verify manually

- [ ] Does adding "COMING SOON" ($0) to the cart allow a $0 checkout?
- [ ] Footer Instagram icon: does it link to the right profile?
- [ ] Shipping settings: do UPS rates allow ground shipping of a refrigerated product to distant zones? Is there a cold-pack option and policy?
- [ ] Checkout works end to end with WooPayments + PayPal (place a real $30 order and refund it).
- [ ] Complianz cookie banner behaves correctly (no analytics before consent if targeting EU; otherwise simplify).
- [ ] Where is the gel made (home kitchen, commissary kitchen)? This affects both compliance and the "made in NC" story.

---

## 5. SEO plan

### 5.1 Goals (6 months)

1. Brand query "yufemi" shows **wellness**, not consulting (within 4–6 weeks of cleanup).
2. Top-10 locally for "sea moss gel Raleigh" / "sea moss near me" (Triangle).
3. 25+ product reviews with Product rich results (stars) in Google.
4. Organic + Instagram = 40% of orders.

### 5.2 Keyword targets

| Cluster | Primary | Supporting | Intent | Page |
|---|---|---|---|---|
| Local commercial | sea moss gel Raleigh | sea moss near me, sea moss Durham / Cary, buy sea moss NC | Buy | Home + Google Business Profile |
| Product | elderberry ginger sea moss gel | elderberry sea moss, sea moss with ginger, immune support sea moss | Buy | Product page |
| Category | sea moss gel | wildcrafted sea moss gel, small batch sea moss, fresh sea moss gel | Buy | Shop |
| How-to | how to use sea moss gel | how much sea moss gel per day, sea moss gel in smoothie, sea moss gel recipes | Learn | Guides |
| Storage | how long does sea moss gel last | can you freeze sea moss gel, how to tell if sea moss gel is bad | Learn | Guide + FAQ |
| Safety | sea moss side effects | sea moss and thyroid, sea moss during pregnancy | Learn | Guide (careful, cite sources, "consult your provider") |
| Future blends | sea moss for skin / sea moss face mask, sea moss energy | — | Learn/Buy | Blend pages when launched |

_Validate volumes in Google Keyword Planner / Ahrefs before writing. Informational sea moss queries are high-volume and competitive; local + product queries are where a small brand can win fastest._

### 5.3 Technical (weeks 1–2)

- [ ] **Delete/redirect** `/service-1/`, `/hello-world/`, `/blog/` (until real posts exist), and the COMING SOON product. Rewrite `/about-us/` and `/contact/`.
- [ ] Fill Yoast titles and meta descriptions for every page/product.
- [ ] Product schema with price, availability, brand, and later aggregateRating.
- [ ] Alt text on all images; compress images to WebP.
- [ ] Remove `user-scalable=0`; remove TranslatePress if not needed.
- [ ] Google Search Console + Bing: verify, submit `sitemap_index.xml`, request re-indexing of the homepage, About and Contact.
- [ ] **Google Merchant Center** free listings, so the jar shows in Google Shopping for free.
- [ ] Analytics with e-commerce events (view_item, add_to_cart, purchase).

### 5.4 Content (weeks 3–12): 2 guides/month

1. How to use sea moss gel: 9 easy ways (smoothies, tea, oatmeal, dressings…)
2. How long does sea moss gel last? Storage, freezing, and signs it's gone bad
3. Elderberry, ginger and sea moss: what's in our Immune Support Blend and why
4. Sea moss for busy mornings: a 2-minute smoothie routine
5. Wildcrafted vs. pool-grown sea moss: what's the difference?
6. Sea moss and your thyroid: what to know before you start (with medical-source citations)

Each guide links to the product, includes a recipe card (Recipe schema), and gets repurposed into 3 Instagram/TikTok posts.

### 5.5 Local (weeks 1–4)

- **Google Business Profile:** category "Health food store" or "Food products supplier" (pick what's accurate), as a service-area business if there's no storefront. Add products, photos, weekly posts.
- **Farmers markets & pop-ups:** e.g. Raleigh, Durham and Cary markets. Each vendor page = a local backlink and an event to post about.
- **Local retail & wholesale:** juice bars, gyms, yoga studios, natural grocers. Create a `/wholesale` page.

### 5.6 Off-page

- Instagram/TikTok: "DO YUFEMI" morning-routine series; customer reposts.
- Micro-influencers in the Triangle (fitness, moms, Black-owned business communities): product seeding, affiliate codes.
- Directories: Black-owned business directories if applicable, NC "Got to Be NC" program (NCDA&CS) if eligible, local Chambers.

### 5.7 Measurement

| KPI | Tool | Cadence |
|---|---|---|
| Brand query results & clicks; non-brand impressions | Search Console | Monthly |
| Conversion rate, AOV, repeat rate, subscription count | WooCommerce / analytics | Monthly |
| Reviews count & rating | WooCommerce + Google | Monthly |
| GBP views, direction/website clicks | GBP | Monthly |
| Core Web Vitals | Search Console / PageSpeed | Monthly |

### 5.8 AI assistant visibility (ChatGPT, Perplexity, Gemini, Claude)

AI answers are grounded in web search (ChatGPT/Copilot lean on Bing; Gemini/AI Overviews on Google), and they favor third-party consensus over brand claims. Plan:

1. **Crawlability:** `robots.txt` explicitly allows OAI-SearchBot, ChatGPT-User, GPTBot, PerplexityBot, Perplexity-User, ClaudeBot, Claude-SearchBot, Claude-User, Google-Extended, Applebot-Extended and Bingbot. `llms.txt` summarizes brand facts (low expected impact; cheap).
2. **Indexes:** Bing Webmaster Tools + Google Search Console; sitemap submitted to both.
3. **Product feeds:** Google Merchant Center; OpenAI merchant program (chatgpt.com/merchants). Shopify catalogs are reportedly connected automatically.
4. **Entity consistency:** identical name, price, ingredients and size across site, schema, GBP, directories and social.
5. **Third-party mentions:** reviews, roundup articles, local press, directories, Reddit (disclosed), creators.
6. **Answer-shaped content:** Q&A structure, specific facts, sources (Sea Moss 101 is the template).
7. **Measurement:** monthly fixed prompt set across ChatGPT, Perplexity, Gemini and Claude; log mentions, accuracy and cited domains.
8. **Avoid:** hidden prompt-injection text, fake reviews (FTC rule), mass AI content, inflated health claims.

---

## 6. Animation & motion concepts

Principle: **"Gentle, organic, alive."** Motion should feel like water and growth: slow, soft easing, never jumpy. Everything respects `prefers-reduced-motion`, animates only `transform`/`opacity`/`stroke-dashoffset`, and never delays the Add to cart button.

| # | Concept | Where | How | In draft |
|---|---|---|---|---|
| 1 | **Living logo.** The circle of figures slowly rotates (60s/turn) and gently "breathes"; the green center pulses once on load | Hero, behind the jar | CSS `rotate` + `scale` keyframes on the mark | ✅ |
| 2 | **Floating jar.** Product photo bobs a few pixels like it's in water; shadow scales with it | Hero | CSS keyframes | ✅ |
| 3 | **Drawn sea-moss strands.** Wavy gold/green lines draw themselves around the hero, then drift | Hero | SVG `stroke-dashoffset` + slow `translate` | ✅ |
| 4 | **Headline word rise** | Hero H1 | Staggered spans | ✅ |
| 5 | **Ingredient chips pop in** one by one (sea moss → elderberry → ginger → spring water) | Product section | IntersectionObserver + stagger | ✅ |
| 6 | **"Add to cart" success micro-interaction:** the button morphs into a check and a mini jar drops into the cart icon | Product CTA | CSS + small JS | 💡 Future (needs real cart) |
| 7 | **Scroll reveals** for sections and cards | Site-wide | IntersectionObserver | ✅ |
| 8 | **"DO YUFEMI" marquee:** slow ticker of verbs: _DO MORE · DO BETTER · DO YOU · DO YUFEMI_ | Community band | CSS marquee, pauses on hover | ✅ |
| 9 | **Blend picker.** Hovering/tapping a goal (Beauty / Energy / Gut / Mood) shifts the accent color and swaps the illustration | "Coming soon" blends | CSS custom-property swap | ✅ (color shift) |
| 10 | **FAQ accordion easing** | FAQ | `<details>` + `interpolate-size` | ✅ |
| 11 | **Pour/drip loader** for page transitions or the waitlist submit state | Forms | SVG | 💡 Future |

Avoid: auto-playing video backgrounds, parallax-heavy sections, carousels for the hero, confetti.

---

## 7. Homepage draft: structure

Built in `public/index.html` (static, deployed on Vercel). Order follows the buyer's questions:

1. **Announcement bar:** "Small-batch sea moss gel · DO YUFEMI"
2. **Nav:** logo, Shop, How to use, Our story, FAQ, cart/shop button
3. **Hero:** H1 "Sea moss, made easy." Sub-line for busy people, price, primary CTA "Shop Elderberry Ginger – $30", secondary "How to use it." Visual: floating jar inside the rotating logo ring with drawn strands.
4. **Value strip:** Wildcrafted sea moss · 4 simple ingredients · Ready to use · Lasts 3–4 weeks in the fridge
5. **Featured product:** photo, ingredient chips, size, price, Add to cart, storage note
6. **How to use:** 3 steps (Stir · Sip · Repeat) with simple serving ideas
7. **Blends coming soon:** Beauty / Energy / Gut / Mood + Skincare & Apparel, with a waitlist CTA
8. **DO YUFEMI:** community/brand story with the logo meaning + marquee
9. **FAQ:** cleaned-up versions of the current FAQ (storage, side effects, pregnancy, how to use) with FAQPage schema
10. **Footer:** FDA disclaimer, contact, Instagram, legal entity

### Before launch: confirm

- [ ] **Checkout plan:** the static Vercel site can't run WooCommerce. Choose one:
  - **(a)** Keep WooCommerce on a subdomain (`shop.yufemi.com`) and link Buy buttons there.
  - **(b)** Move the store to Shopify (Buy Button or full theme).
  - **(c)** Use Stripe Payment Links (simplest for 1–3 SKUs; no cart).
  
  Buy buttons in the draft currently point to the existing WooCommerce product URL, which **will stop working if the domain moves to Vercel** before checkout is moved.
- [ ] Where the gel is made (the draft avoids a location claim; add "Made in North Carolina" once confirmed).
- [ ] "Wildcrafted" and "Organic" claims (draft says "wildcrafted" and avoids "certified organic").
- [ ] `hello@yufemi.com` mailbox (draft uses it).
- [ ] Instagram handle (footer has a TODO where the link goes).
- [ ] Waitlist form provider (Mailchimp/Klaviyo/Kit). Draft uses a `mailto:` fallback.
- [ ] No reviews or testimonials were invented for this draft.

---

## Sources

- yufemi.com, crawled Nov 18, 2026 (homepage, `/about-us/`, `/contact/`, `/products/`, `/product/elderberry-ginger-sea-moss/`, `/product/coming-soon/`, `/service-1/`, `/hello-world/`, `/blog/`, `sitemap_index.xml`, `robots.txt`, `/wp-json/wc/store/v1/products`)
- Market size: [Fortune Business Insights](https://www.fortunebusinessinsights.com/sea-moss-market-118641), [Market.us](https://market.us/report/sea-moss-market/), [Ken Research](https://www.kenresearch.com/industry-reports/global-sea-moss-supplement-market.md)
- Competitor pricing: [TrueSeaMoss Elderberry – Walmart](https://www.walmart.com/ip/934075247), [True Sea Moss – Vitacost](https://www.vitacost.com/products/true-sea-moss-sea-moss-gel-superfood-elderberry-16-fl-oz-473-ml-144568), [EverSmith Organics – Walmart](https://www.walmart.com/ip/982446933), [EverSmith Organics](https://www.eversmithorganics.com/)
- Competitor roundups (editorial, incl. Biolore recall mention, verify on fda.gov): [Medilabzone](https://medilabzone.com/best-sea-moss-gel-brands/), [Bunny Eating](https://bunnyeating.com/best-seamoss-gels/)
- Premium retail example: [Erewhon Cosmic Berry Sea Moss Gel](https://ship.erewhon.com/products/cosmic-berry-sea-moss-gel)
