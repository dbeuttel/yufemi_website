# Plan: Move the New Yufemi Design onto the WordPress Site (Route B)

_Draft, November 18, 2026. Nothing has been built or changed yet._

**Goal:** bring the new design (homepage, Sea Moss 101, brand kit, animations, SEO/AI work) onto the existing WordPress + WooCommerce site. The non-technical owner must be able to edit content, layout and animations himself, with guardrails, and without an AI agent or developer.

> **Decision still open (see §10):** we could instead keep the custom (Vercel) project and use **Shopify only as a checkout back end** (Shop Pay plus a listing in the Shop app), retiring WordPress entirely. Read §10 before starting the WordPress build.

---

## 1. Routes considered

| | Route A: Refresh inside Divi | **Route B: Lightweight block theme (chosen)** |
|---|---|---|
| What it is | Keep Divi; rebuild pages in it with our design + custom CSS | Replace Divi with a slim custom theme; our sections become reusable WordPress blocks |
| Match to the new design | ~85–90% | ~100% (reuses our HTML/CSS/JS) |
| Speed | Better than today, still heavy | Close to the static site |
| Owner editing | Divi visual builder; lots of freedom, few guardrails | Block editor with locked, pre-designed sections and menus |
| Animations | Divi built-ins + custom CSS classes | Our exact animations, chosen from a menu per section |
| Effort | ~1–2 weeks | ~3–4 weeks |

**Why Route B:** best speed, exact design match, real guardrails for the owner, and no page-builder lock-in. The code lives in GitHub.

---

## 2. How it works

1. **Build** a custom WordPress theme in this repo (`wordpress/yufemi-theme/`).
2. **Test** it in a temporary WordPress + WooCommerce install inside the development environment, so it arrives already working.
3. **Package** it as a `.zip`, plus an import file that creates the new pages.
4. **Install** it on a **staging copy** of the live site (step-by-step guide), review, test-order, then publish.

The developer/AI cannot log into the live WordPress site, and passwords must never be shared in chat. Steps on the site are done by the owner or a trusted helper, guided by the install document.

---

## 3. What gets built (`wordpress/yufemi-theme/`)

### Brand lock
- Editor color palette limited to the brand colors: Sun Gold `#F0B038`, Plum `#402868`, Deep Plum `#241640`, Leaf `#1E7A41`, Cream `#FBF6EC`, Sand `#F5E9D2`.
- Fonts fixed (Fraunces, DM Sans, Cinzel) and **self-hosted** (faster, no third-party tracking).
- Spacing and button styles preset.

### Header & footer
- Logo ("YUFEMI WELLNESS" lockup), menu, cart icon, announcement bar.
- Footer with links, contact, legal line, and an **editable FDA disclaimer and safety note**. Editing or deleting them shows a confirmation warning ("Recommended for supplement sellers; check with an advisor before removing") but **does not block** the owner.

### Custom blocks (one per section)
Each block has a simple side panel: **content fields, variant, background (brand colors only), spacing, Entrance effect (None / Fade / Rise / Pop / Draw), Speed (Gentle / Normal), Moving details (on/off)**.

| Homepage blocks | Sea Moss 101 blocks |
|---|---|
| Announcement bar | Fact card |
| Hero (floating jar, rotating logo, drifting strands) | Two-column comparison (species) |
| Value strip | Journey steps (ocean → fridge) |
| Featured product (pulls price, photo, ingredients from WooCommerce) | History timeline |
| Teaser facts ("New to sea moss?") | Evidence scorecard |
| Steps (how to use) | Myth box |
| Blend grid + waitlist | Safety list + "check with a doctor" card |
| Story / DO YUFEMI + scrolling ticker | Sources list |
| FAQ (generates FAQ data for Google/AI) | Shore illustration (animated) |
| Call-to-action band | |

### Site-wide settings
- **Motion level:** Full / Subtle / Off (one switch for the whole site).
- Visitors' "reduce motion" device setting is **always** respected.

### Templates & ready-made layouts
- Templates: front page, standard page, Sea Moss 101, WooCommerce product, shop, cart, checkout, 404.
- One-click page layouts: Home, Sea Moss 101, About, Contact, Shipping & Returns.

### SEO & AI
- AI-crawler rules added to WordPress's robots.txt (ChatGPT, Perplexity, Claude, Gemini, Apple, Bing).
- `llms.txt` (via Yoast if available in the installed version, otherwise served by the theme).
- Alt-text reminders on images; one H1 per page by design.
- Product and Organization structured data left to Yoast + WooCommerce (no duplicates). FAQ data from the FAQ block.
- Pre-written Yoast titles and descriptions for each page.

### Import files & docs
- Page import file (Tools → Import).
- Redirects list for the Redirection plugin.
- **Install guide** (click-by-click, with screenshots).
- **Owner's manual** for the block editor: change a price, add an FAQ, add a product, make a page, change an animation, undo a mistake.

### Technical choice: native blocks (recommended) vs. ACF Pro
- **Native WordPress blocks:** no paid plugin, no extra dependency. Recommended.
- **ACF Pro (~$49/yr):** faster to build blocks, but adds a paid dependency.

---

## 4. What we need from you

### Before the build starts
1. **Go-ahead** to build in this repo under `wordpress/`.
2. **Native blocks** (recommended) or **ACF Pro**?
3. **Versions:** in WordPress, **Tools → Site Health → Info**: WordPress, WooCommerce and PHP versions.
4. **The Vercel version:** keep as a design preview, or retire? (Depends on §10.)

### Owner answers (before launch)
- `hello@yufemi.com` mailbox created?
- Instagram handle
- Sea moss species and origin; is "Organic" allowed on the label?
- Shipping policy for a refrigerated product (cold packs, ship days, zones)
- Subscriptions now (Woo Subscriptions, ~$279/yr) or later?
- Reviews: built-in WooCommerce reviews or a plugin (e.g. Judge.me)?

### Access (owner or trusted helper)
- Bluehost login, for backup and staging.
- WordPress admin on staging, to upload the theme.
- If a developer helps, create **their own** admin account; never share the owner's.

---

## 5. Shared groundwork

### 5.1 Safety first
- Full backup (files + database) via Bluehost or a backup plugin; download a copy.
- Create a **staging copy** (Bluehost → Website → Staging). All work happens there.
- Note the current plugins, settings and payment setup.

### 5.2 Clean up leftovers (OUTSTANDING-ISSUES items 9–13, 20)
- Delete "Service 1," "Hello world!" (and its sample comment), and the placeholder blog page.
- Unpublish the $0 "COMING SOON" product.
- Replace About Us (founder and brand story) and Contact (orders, wholesale, events).
- Remove the personal Gmail address; use `hello@yufemi.com`.
- Remove or shrink the "The Free Website Guys" footer credit.

### 5.3 Plugins
- **Remove:** TranslatePress (English only), and anything unused.
- **Keep:** WooCommerce, WooPayments, Yoast SEO, WP Rocket, Complianz, the UPS shipping plugin.
- **Add:** an image optimizer (ShortPixel or Imagify), Redirection (free), a backup plugin (if the host doesn't do daily backups), Woo Subscriptions (optional).

### 5.4 Hosting (recommended, optional)
Move from Bluehost shared hosting to managed WooCommerce hosting (~$25–35/mo) for speed, automatic updates, backups and security. Can happen after launch.

---

## 6. Migration steps

| # | Step | Who | Time |
|---|---|---|---|
| 1 | **Back up** the live site (Bluehost backup + download) | Owner/helper | 15 min |
| 2 | **Create a staging copy** | Owner/helper | 10 min |
| 3 | **Plugins on staging:** remove TranslatePress; add Redirection, image optimizer, backups | Owner/helper (guided) | 15 min |
| 4 | **Upload and activate** the Yufemi theme (Appearance → Themes → Add New → Upload) | Owner/helper | 5 min |
| 5 | **Import the new pages** (Tools → Import → provided file) | Owner/helper | 5 min |
| 6 | **Settings:** new Home as the front page (Settings → Reading), menus, permalinks, paste Yoast titles | Owner/helper (guided) | 30 min |
| 7 | **Update the product:** description, ingredients, photos, alt text (copy provided) | Owner | 15 min |
| 8 | **Import redirects** (old Divi and template URLs → new pages) | Owner/helper | 5 min |
| 9 | **Review and test:** phone + desktop, a real $30 order (card + PayPal) then refund, shipping options, contact links | Owner + helper | 1 hr |
| 10 | **Publish:** Bluehost → Staging → push to live | Owner/helper | 10 min |
| 11 | **After launch:** Search Console + Bing sitemaps and re-indexing; **deactivate** Divi, then **delete** it after ~30 days | Owner/helper | 20 min |

**Important: Divi pages.** When Divi is deactivated, old Divi-built pages display raw code. That's why this plan **replaces** Home, About and Contact with new pages rather than editing the old ones. Keep Divi installed but inactive for 30 days as a fallback.

**Owner/helper time:** ~3–4 hours total across install, review and launch, plus a training session.

---

## 7. Risks and safeguards

| Risk | Safeguard |
|---|---|
| Live store breaks | All work on staging; live untouched until publish |
| Need to roll back | Full backup + Divi kept inactive for 30 days |
| Plugin/version conflicts | Build targets the exact versions from Site Health; tested with WooCommerce before delivery |
| Checkout problems | Real test order on staging before publishing |
| SEO dip from URL changes | Redirects imported before launch; re-indexing requested |
| Owner goes off-brand | Brand-locked palette and fonts, pre-designed blocks, manual + style card |

---

## 8. Owner handoff

- **Owner's manual** (step-by-step recipes) + short screen-recorded videos.
- **Two training sessions:** walkthrough, then hands-on a week later.
- **One-page cheat sheet** and **content style card** (brand voice, careful health wording, photo guidelines).
- **WordPress upkeep rules:** auto-update minor versions; test major updates on staging first (or use managed hosting); keep plugins minimal.
- **Optional monthly health check:** broken links, speed, Search Console/Bing, AI visibility log.

---

## 9. Effort & running costs (approximate; verify current pricing)

- **Build:** ~3–4 weeks of developer time.
- **Running:** ~$17–26/mo on current Bluehost (hosting, Divi license until removed, WP Rocket), rising to ~$30–60/mo with managed hosting and Woo Subscriptions. Card fees ~2.9% + 30¢ (PayPal higher).

---

## 10. Open alternative: keep the custom project + Shopify as checkout only

**Question raised:** can we keep the site we already built (Vercel), skip WordPress, and use Shop Pay / Shop Pay links? Can products go into the **Shop app** without building a store in Shopify?

### What's possible (as of November 2026; verify with Shopify)

| Option | How it works | Shop Pay | Shop app listing | Effort | Fit |
|---|---|---|---|---|---|
| **A. Shopify as checkout back end** (recommended if going this way) | Products are entered in a basic Shopify account (no Shopify theme or storefront design). Our site's "Buy" buttons send shoppers to Shopify's hosted checkout, using **cart/checkout permalinks** (simple links) or the **Storefront API** (a real cart on our site). | ✅ Built into Shopify checkout, along with Apple/Google Pay | ✅ **Likely**: Shop listing requires an active Shopify plan, business details, at least one fulfilled order and other criteria. Stores using other payment providers can now appear too, but Shop *Campaigns* (paid promotion) need Shopify Payments. | Low–medium | Strong |
| **B. Shop Pay Wallet API** (Shop Pay button inside *our own* checkout) | Shopify's off-platform Shop Pay component; payments run through a **dedicated new Shopify account** with Shopify Payments and the Shop channel. Our site must handle the rest of checkout itself. | ✅ | Via the same Shop channel | **High** (developer integration; aimed at larger merchants; eligibility to confirm with Shopify) | Poor for Yufemi's size |

**"Shop Pay links" = cart/checkout permalinks:** a link that opens Shopify checkout with the chosen product already in the cart. Simplest possible integration. Limits: one link creates a fresh cart, and some features (e.g. subscription "selling plans") may not pass through permalinks. Use the Storefront API cart if subscriptions are needed.

### What Option A gives and costs

**Gives:**
- Shop Pay, Shopify's order admin and mobile app
- Sales tax, shipping and labels, discount codes, abandoned-checkout emails
- Shop app eligibility, and Shopify's other sales channels (Google, Meta, and reportedly ChatGPT Shopping)
- **No WordPress at all:** our design, TinaCMS editing and animations stay exactly as built

**Costs:**
- A Shopify plan: Starter ~$5/mo, or Basic ~$29–39/mo
- Starter's transaction fees and Shop app eligibility are **unconfirmed**; Basic is the safe choice
- Subscriptions need Shopify's subscription app and the Storefront API cart

**Lock-in:** limited to checkout and order history (exportable). The website itself stays ours; switching to Stripe later means changing the Buy buttons only.

**Not "building in Shopify":** no Shopify theme or storefront design. The products just live in Shopify's back office, which is the same data entry any store needs.

### How it compares to Route B (WordPress)

| | Route B (WordPress) | Custom site + Shopify checkout |
|---|---|---|
| WordPress to maintain | Yes | **None** |
| Design & animations | Rebuilt as WP blocks | **Already built** |
| Owner editing | Block editor | TinaCMS visual editor (same guardrail approach) |
| Checkout | WooCommerce (existing) | Shopify checkout + **Shop Pay** |
| Shop app | ❌ | ✅ (eligibility permitting) |
| Build effort | ~3–4 weeks | ~2–3 weeks (TinaCMS + Shopify cart; design done) |
| Monthly (approx.) | ~$17–60 | Vercel Pro $20 + Shopify $5–39 + TinaCMS free tier |
| Existing orders/customers | Stay in WooCommerce | Export from WooCommerce; import to Shopify |

**Recommendation:** since the priorities are no WordPress, the Shop app and Shop Pay, **custom site + Shopify-as-checkout (Option A) beats Route B**. It reuses the work already done, removes WordPress upkeep, and adds Shop Pay and the Shop app. Route B remains the right call only if staying on WordPress/WooCommerce is required.

### Before deciding, confirm with Shopify (15-minute check)
1. Shop app eligibility requirements for the chosen plan (Starter vs. Basic): open the **Shop channel** in Shopify admin and read its eligibility status.
2. Starter plan transaction fees with Shopify Payments.
3. Cart/checkout permalink support on the chosen plan, and subscription (selling plan) support via the Storefront API.
4. Shopify Payments eligibility for a sea moss food/supplement business (some product categories are restricted).

### Sources
- [Shopify Changelog: Updated eligibility requirements for Shop](https://changelog.shopify.com/posts/updated-eligibility-requirements-for-shop)
- [Shopify.dev: Shop Pay Wallet API](https://shopify-dev.shopifycloud.com/docs/api/commerce-components/pay)
- [Shopify.dev: Cart permalinks](https://shopify.dev/docs/apps/checkout/cart-permalinks) · [Cart and checkout permalinks](https://shopify.dev/docs/agents/carts-and-checkout/permalinks)
- [Shopify.dev: Build a mobile storefront (checkout URLs)](https://shopify.dev/docs/storefronts/mobile/build-mobile-storefront)
- [ecommerceparadise: Shop opens to stores without Shopify Payments](https://ecommerceparadise.com/shop-opens-stores-without-shopify-payments/)
- [Mastroke: How shoppers find you on the Shop app (2026)](https://blog.mastroke.com/store-setup-management/inside-the-shop-app-how-shoppers-actually-discover-products-and-what-it-means-for-your-shopify-store-2026-update/)
- [Ambaum: Shop Pay off Shopify](https://ambaum.com/insights/shop-pay-off-shopify) · [folio3: Shop Pay for non-Shopify stores](https://ecommerce.folio3.com/blog/shop-pay-for-non-shopify-stores/)
