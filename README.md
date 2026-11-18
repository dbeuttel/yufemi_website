# yufemi.com: website redesign

Draft homepage and strategy for **Yufemi Wellness** (small-batch sea moss gel; a brand of Yufemi Consulting Group LLC).

| Path | What it is |
|---|---|
| [`docs/yufemi-strategy.md`](docs/yufemi-strategy.md) | Business & competitor analysis, brand kit, site issues, SEO plan, animation concepts |
| `public/` | The static site Vercel serves (HTML/CSS/JS, no build step) |
| `public/assets/` | Logo mark (extracted from the current logo file), product photo, social share image (`og-image.png`) |
| `vercel.json` | Output directory, clean URLs, 301 redirects from the old WordPress URLs, security headers |

## Run locally

```bash
cd public && python3 -m http.server 4173
# open http://localhost:4173
```

## Deploy to Vercel

The repo is ready to import. There's no framework and no build command; Vercel serves `public/` as-is.

**Option A: Dashboard (recommended)**
1. Go to <https://vercel.com/new> and import the `dbeuttel/yufemi_website` GitHub repo.
2. Framework preset: **Other**. Leave build command empty; output directory is set by `vercel.json` (`public`).
3. Deploy. Every push to a branch gets a preview URL; pushes to the production branch go live.

**Option B: CLI**
```bash
npm i -g vercel
vercel          # first run links the project; creates a preview deployment
vercel --prod   # production
```

**Custom domain:** Project → Settings → Domains → add `yufemi.com` and `www.yufemi.com` (set `www` to redirect to the apex). Update DNS at the registrar as Vercel instructs. **Important:** if the current WordPress site's email/MX records live at the same DNS host, change only the `A`/`CNAME` web records, not MX.

**After launch:**
- Enable Vercel Web Analytics + Speed Insights (Project → Analytics).
- Verify the domain in Google Search Console and submit `https://yufemi.com/sitemap.xml`.

## Before going live: content to confirm

Search for `TODO` in `public/index.html`.

- [ ] **Checkout:** this static site can't run WooCommerce. Buy buttons currently link to the existing WooCommerce product page, which stops working if `yufemi.com` is pointed at Vercel. Choose WooCommerce on `shop.yufemi.com`, Shopify, or Stripe Payment Links first (see `docs/yufemi-strategy.md` §7).
- [ ] `hello@yufemi.com` mailbox exists (replaces both Gmail addresses)
- [ ] Instagram profile URL in the footer
- [ ] Waitlist provider (Klaviyo / Mailchimp / Kit) instead of `mailto:`
- [ ] "Wildcrafted" / "Organic" claims and where the gel is made
- [ ] Original vector logo from the designer (the site uses a raster extracted from the current logo)
- [ ] No reviews or testimonials were invented for this draft
