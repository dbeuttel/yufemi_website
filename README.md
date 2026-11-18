# yufemi.com: website redesign

Draft homepage and strategy for **Yufemi Consulting Group** (Raleigh, NC).

| Path | What it is |
|---|---|
| [`docs/yufemi-strategy.md`](docs/yufemi-strategy.md) | Business & competitor analysis, brand kit, site issues, SEO plan, animation concepts |
| `public/` | The static site Vercel serves (HTML/CSS/JS, no build step) |
| `public/assets/` | Logo (`logo.svg`, `logo-mark.svg`) and social share image (`og-image.png`) |
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

- [ ] Service names/descriptions match what Yufemi actually sells
- [ ] Clarity Sprint price ("from $2,500" is a placeholder)
- [ ] `hello@yufemi.com` mailbox exists (replace the Gmail address)
- [ ] Booking link (Calendly / Cal.com / Microsoft Bookings) replaces `mailto:`
- [ ] Business phone (`tel:` link) and LinkedIn URL in the footer + JSON-LD `sameAs`
- [ ] Real testimonials / client logos when available (none were invented for this draft)
- [ ] Convert the wordmark in `assets/logo.svg` to outlines for production use
