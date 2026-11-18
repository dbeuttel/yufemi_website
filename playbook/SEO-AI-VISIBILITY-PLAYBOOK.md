# Website Visibility Playbook: Search Engines + AI Assistants

_A reusable plan for every website we build. Version 1.0, November 2026._

**Goal:** make each site easy to **find**, easy to **understand**, and worth **recommending**, by people, search engines (Google, Bing) and AI assistants (ChatGPT, Gemini, Perplexity, Claude, Copilot).

**Use it like this:** copy the `playbook/` folder into a new project. Work through Phases 0–6 in order; each has a checklist. Copy-paste templates are in [`templates/`](templates/). The one-page [`LAUNCH-CHECKLIST.md`](LAUNCH-CHECKLIST.md) is for launch day.

---

## The principles: exposure for the right reasons

Every tactic in this playbook follows these rules. If a tactic breaks one, don't use it.

1. **Be genuinely useful.** Rank because the page is the best answer, not because you tricked a system. Both Google and AI assistants are built to reward pages that help people, and they're getting better at spotting pages that don't.
2. **Be accurate and consistent.** One set of facts (name, address, prices, hours, claims) used identically everywhere. AI assistants lose confidence in a brand whose details conflict across the web.
3. **Show who's behind it.** Real people, real contact details, real credentials, real sources. This is what Google calls E-E-A-T (Experience, Expertise, Authoritativeness, Trust), and AI assistants lean on the same signals.
4. **Earn mentions, don't buy or fake them.** AI assistants mostly repeat what *other* trusted sources say. Earn those through quality, outreach and community, never through fake reviews, paid links or sock puppets.
5. **Same content for everyone.** Never show bots something different from what people see (no hidden text, no "instructions to AI").
6. **Be careful with "Your Money or Your Life" topics.** Health, finance, legal and safety content is held to a much higher standard. Cite sources, avoid overclaiming, add disclaimers, and have an expert review it.
7. **Respect users.** Fast, accessible, private by default. Good user experience is a ranking signal and the right thing to do.

---

## How discovery works now (the 60-second version)

| Channel | How it finds and chooses content | What you control |
|---|---|---|
| **Google Search** | Crawls → indexes → ranks on relevance, quality, links, experience | Technical health, content quality, structured data, links you earn |
| **Google AI Overviews / Gemini** | Pulls from Google's index, usually pages already ranking well | Everything above. There is no separate "AI Overview SEO." |
| **Bing / Copilot** | Bing's own index and ranking | Bing Webmaster Tools, IndexNow, the same quality signals |
| **ChatGPT search & shopping** | Runs web searches (leaning heavily on Bing) plus OpenAI's own crawler, then summarizes trusted sources | Allow `OAI-SearchBot`, be in Bing, product feeds, third-party mentions |
| **Perplexity** | Live web search; cites sources visibly | Allow `PerplexityBot`; clear, quotable, well-sourced pages |
| **Claude** | Web search plus Anthropic's crawlers | Allow `Claude-SearchBot` / `Claude-User`; same quality signals |
| **AI "memory"** (answers with no search) | What the model learned in training from the public web | Allow training crawlers if you want to be known long-term; be widely and consistently mentioned |

**The takeaway:** classic SEO is still the foundation. AI visibility is mostly (1) letting AI crawlers in, (2) being in Bing *and* Google, (3) writing answer-shaped content, and (4) being talked about elsewhere.

---

## Phase 0: Strategy (before you design anything)

**Outcome:** you know who the site is for, what they ask, and the facts you'll repeat everywhere.

- [ ] **Define the audience and their top tasks.** Who visits, what do they need to do or know, and what should they do next (buy, call, apply, sign up)?
- [ ] **Collect the questions people actually ask.** Sources: customer emails and calls, Google's "People also ask," autocomplete, Reddit and forums, competitors' FAQs, and ask ChatGPT/Perplexity "what do people want to know about X?"
- [ ] **Map questions to pages.** One main topic per page; each important question gets a clear answer somewhere. Avoid two pages competing for the same topic.
- [ ] **Do light keyword research.** Use Google Keyword Planner, Search Console (for existing sites), or Ahrefs/Semrush. Prioritize **specific, high-intent** phrases ("sea moss gel Raleigh") over broad, competitive ones ("sea moss").
- [ ] **Look at who's winning today.** Search your top 5 questions in Google *and* ChatGPT/Perplexity. Note who ranks and who gets cited, and why (depth? reviews? authority?).
- [ ] **Write the Facts Sheet** ([template](templates/facts-sheet.md)). This is the single source of truth: official name, short description, address or service area, phone, email, hours, products and prices, founding date, key people, social profiles, approved claims. Everything else (site, schema, directories, social bios, `llms.txt`) copies from this.

---

## Phase 1: Technical foundation (while building)

**Outcome:** every page can be crawled, rendered, indexed and loads fast.

### Crawlability & indexing
- [ ] **Important content is in the HTML**, not only loaded by JavaScript after the page opens. Many AI crawlers don't run JavaScript; if your text isn't in the page source, they can't see it. Prefer static or server-rendered pages.
- [ ] `robots.txt` allows search and AI crawlers ([template](templates/robots.txt)) and links the sitemap.
- [ ] **Check your CDN/host bot settings.** Some services (e.g. Cloudflare's AI-bot blocking, firewall "bot fight" modes, aggressive security plugins) block AI crawlers by default. Turn that off for crawlers you want.
- [ ] `sitemap.xml` lists every page you want indexed, with accurate `lastmod` dates. No redirected, broken or `noindex` URLs in it.
- [ ] One canonical URL per page (`<link rel="canonical">`). Pick www or non-www, and HTTPS; redirect everything else to it.
- [ ] Clean, readable URLs (`/services/tax-prep`, not `/?p=123`).
- [ ] No accidental `noindex` on live pages (a classic launch-day mistake when copying from staging).
- [ ] Custom 404 page that helps people find their way; real 404 status code.
- [ ] **Redesign or migration?** Map every old URL to its new home with permanent (301) redirects. Never let old, linked-to pages die.

### Performance & experience (Core Web Vitals)
- [ ] Largest Contentful Paint (main content visible) **< 2.5 s** on mobile.
- [ ] Interaction to Next Paint (responds to taps) **< 200 ms**.
- [ ] Cumulative Layout Shift (nothing jumps around) **< 0.1**: set width/height on images and embeds.
- [ ] Images: modern formats (WebP/AVIF), sized to how they're displayed, lazy-loaded below the fold, the main hero image preloaded.
- [ ] Minimal third-party scripts (each chat widget, tracker and font costs speed).
- [ ] Test with PageSpeed Insights (mobile) before launch.

### Mobile & accessibility
- [ ] Responsive at 360px wide; no sideways scrolling; tap targets ≥ 44px.
- [ ] Never disable zoom (`user-scalable=no` or `maximum-scale=1`).
- [ ] One `<h1>` per page; headings in order (h2 → h3), used for structure not styling.
- [ ] Meaningful `alt` text on informative images; empty `alt=""` on decorative ones.
- [ ] Color contrast ≥ 4.5:1 for text; visible keyboard focus; skip link; labeled form fields.
- [ ] Respect `prefers-reduced-motion` for animations.
- [ ] Run an accessibility checker (axe DevTools or WAVE). Accessible pages are also easier for machines to read.

### Security & trust
- [ ] HTTPS everywhere with a valid certificate; HSTS header.
- [ ] Basic security headers (`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options` or CSP).
- [ ] Privacy policy (and cookie consent where legally required); terms for e-commerce.
- [ ] Business email on the site's own domain, with SPF/DKIM/DMARC set up (not Gmail/Yahoo).

---

## Phase 2: Content & on-page

**Outcome:** each page clearly answers its question and proves it can be trusted.

### Every page
- [ ] **Title tag:** unique, ≤ 60 characters, main topic first, brand last. `Tax Preparation in Durham, NC | Brand`.
- [ ] **Meta description:** unique, ≤ 155 characters, says what the page offers and why to click.
- [ ] **One clear H1** that matches the page's purpose.
- [ ] **Open Graph + Twitter tags** with a 1200×630 share image, so links look good in chats, social posts and messaging apps.
- [ ] **Internal links** with descriptive text ("see our pricing," not "click here"); every page reachable within ~3 clicks.
- [ ] **Visible "last updated" date** on informational content, kept honest.

### Write answer-first (good for people, Google and AI)
- [ ] **Lead with the answer.** The first 1–2 sentences under a heading should directly answer the question in that heading. Details follow.
- [ ] **Use question-style headings** that match how people ask ("How long does X last?").
- [ ] **Be specific:** numbers, prices, dates, steps, comparisons, named sources. Vague marketing copy ("innovative solutions tailored to your needs") is invisible to both people and AI.
- [ ] **Make facts quotable:** short, self-contained statements that still make sense when lifted out of the page.
- [ ] **Use structure:** short paragraphs, bullet lists, tables for comparisons, step lists for processes, an FAQ section for common questions.
- [ ] **Cite sources** for claims, especially health, finance, legal or statistics. Link to primary sources (government, academic, official).
- [ ] **Be honest about limits.** "Evidence is early" or "it depends" builds more trust (and gets cited more) than overclaiming.
- [ ] **Original value:** your own experience, data, photos, prices, examples or opinions. That's what makes a page worth citing over the 50 similar ones.

### Trust pages (E-E-A-T)
- [ ] **About page:** who you are, why you exist, real names and photos, credentials and experience.
- [ ] **Contact page:** email, phone, address or service area, hours, response expectations.
- [ ] **Author info** on articles (name, short bio, why they're qualified).
- [ ] **Policies:** privacy, returns, shipping, editorial or medical-review policy where relevant.
- [ ] **Reviews/testimonials:** real, attributable, never invented.

### AI-assisted writing (allowed, with care)
- [ ] AI can draft, but **a knowledgeable human must edit, fact-check and add original insight**.
- [ ] No mass-produced pages that just rephrase what's already out there ("scaled content abuse" is a Google spam policy violation).

---

## Phase 3: Structured data (machine-readable labels)

**Outcome:** search engines and AI assistants can read the key facts without guessing.

Use **JSON-LD** in the page `<head>` ([templates](templates/schema/)). Rules:
- Schema **must match what's visible** on the page. Never mark up content people can't see, and never fake ratings.
- Validate with Google's **Rich Results Test** and the **Schema.org validator**.

| Site / page type | Recommended schema |
|---|---|
| Every site (homepage) | `Organization` (or `LocalBusiness` subtype), `WebSite` |
| Local business | `LocalBusiness` subtype (e.g. `Dentist`, `Restaurant`, `ProfessionalService`) with address/area served, hours, phone, `geo` |
| Product pages | `Product` + `Offer` (price, currency, availability), `AggregateRating`/`Review` **only if real reviews are shown**, shipping and return policy |
| Articles / guides | `Article` (headline, author, dates, publisher), `BreadcrumbList` |
| FAQ sections | `FAQPage` (Google now only shows FAQ rich results for some authoritative sites, but the markup still helps machines understand Q&A) |
| Events | `Event` (date, location, offers) |
| Government / nonprofit | `GovernmentOrganization` / `NGO`, `GovernmentService`, `SpecialAnnouncement` for urgent notices |
| Software / apps | `SoftwareApplication` |

Also add `sameAs` links on the Organization to official profiles (LinkedIn, Instagram, Facebook, Google Business Profile, Wikipedia/Wikidata if they exist). This ties your "entity" together across the web.

---

## Phase 4: The AI assistant layer

**Outcome:** AI assistants can access the site, understand the brand, and find reasons to mention it.

### 4.1 Decide your crawler policy
Two kinds of AI crawler: **search/answer crawlers** (fetch pages to answer a question *now*, usually with a link back) and **training crawlers** (collect data to train future models).

| Company | Search / user-triggered (allow for visibility) | Training (your choice) |
|---|---|---|
| OpenAI (ChatGPT) | `OAI-SearchBot`, `ChatGPT-User` | `GPTBot` |
| Anthropic (Claude) | `Claude-SearchBot`, `Claude-User` | `ClaudeBot` |
| Perplexity | `PerplexityBot`, `Perplexity-User` | (none separate) |
| Google (Gemini) | `Googlebot` (powers Search *and* AI Overviews) | `Google-Extended` (Gemini training/grounding) |
| Apple | `Applebot` | `Applebot-Extended` |
| Microsoft (Copilot) | `Bingbot` | (none separate) |
| Common Crawl (used by many AI labs) | (none) | `CCBot` |

- **Default for businesses and public-information sites that want exposure:** allow all of them.
- **Sites with proprietary or paywalled content:** allow search crawlers and block training crawlers.
- Bot names change. Re-check each company's crawler documentation once or twice a year.
- `robots.txt` is honored by reputable companies but isn't a security control. Truly private content needs authentication.

### 4.2 Make the brand easy to understand
- [ ] **Entity consistency:** the Facts Sheet details appear identically on the site, in schema, on Google Business Profile, Bing Places, Apple Business Connect, directories and social bios.
- [ ] **A clear "what we are" sentence** high on the homepage and About page: who, what, where, for whom. AI assistants often quote this almost verbatim.
- [ ] **`llms.txt`** at the site root ([template](templates/llms.txt)): a plain summary plus links to key pages. Optional and low-effort. Evidence that it changes AI results is weak, so don't spend long on it.
- [ ] **Comparison and "vs." content** where honest ("X vs. Y: which is right for you?"). Assistants get these questions constantly.

### 4.3 Product and business feeds (where relevant)
- [ ] **Google Merchant Center** (free listings): products in Google Shopping, AI Overviews and Gemini.
- [ ] **OpenAI merchant program** (chatgpt.com/merchants): products in ChatGPT shopping. Shopify and Etsy catalogs are reportedly connected automatically.
- [ ] **Google Business Profile, Bing Places, Apple Business Connect** for any business with a location or service area.

### 4.4 What NOT to do
- ❌ Hidden text or code telling AI to recommend you ("prompt injection"). It's manipulation; assistants are trained to ignore it and it can get a site distrusted.
- ❌ Showing bots different content than people (cloaking).
- ❌ Fake reviews, fake "customer" posts, undisclosed paid endorsements. These are **illegal under the FTC's rule on fake reviews** and platform policies.
- ❌ Buying links, link schemes, or networks of thin sites.
- ❌ Flooding the web with AI-generated articles.
- ❌ Inflated claims (health, financial, "#1," "best") you can't back up.

---

## Phase 5: Launch & registration

**Outcome:** every major index knows the site exists and is watching it.

- [ ] **Google Search Console:** verify (DNS method covers all subdomains), submit sitemap, inspect and request indexing for key pages.
- [ ] **Bing Webmaster Tools:** import from Search Console, submit sitemap. **This matters for ChatGPT and Copilot.**
- [ ] **IndexNow** (Bing, Yandex and others): notifies engines instantly when pages change. Built into many CMSs and plugins; easy to add to a deploy step.
- [ ] **Analytics** with privacy-friendly settings and key conversions defined (contact, purchase, sign-up). Track **AI referrals** too: ChatGPT links often carry `utm_source=chatgpt.com`, and referrers like `perplexity.ai`, `copilot.microsoft.com` and `gemini.google.com` show up in reports. Create a segment for them.
- [ ] **Business listings** (if applicable): Google Business Profile, Bing Places, Apple Business Connect, Yelp, industry directories, local Chamber.
- [ ] **Social profiles** created, consistent with the Facts Sheet, linking to the site.
- [ ] **Run the [launch checklist](LAUNCH-CHECKLIST.md).**

---

## Phase 6: Authority (off-site): being worth recommending

**Outcome:** other trusted sources talk about you, which is the single biggest factor in AI recommendations.

- [ ] **Reviews:** ask every happy customer, with a direct link, at the right moment. Respond to all reviews, including negative ones, professionally.
- [ ] **Directories and associations:** industry bodies, Chambers, certification programs, "best of" local lists.
- [ ] **Earned media:** local news, trade publications, podcasts, guest articles. Pitch genuinely newsworthy angles (local founder, original data, community impact).
- [ ] **Roundups and comparisons:** contact authors of "best X" articles with honest information and samples or demos.
- [ ] **Partnerships:** suppliers, partners and community organizations linking to you naturally.
- [ ] **Community participation:** Reddit, forums, Q&A sites, Facebook groups. Be helpful, **always disclose affiliation**, and don't spam links.
- [ ] **Video and social:** YouTube, TikTok and Instagram explanations and how-tos; transcripts and descriptions are indexed and quoted.
- [ ] **Original data or tools:** a survey, price index, calculator or checklist others will cite. Citations from others are the best links.
- [ ] **Wikipedia/Wikidata:** only if the organization is genuinely notable by Wikipedia's rules, and never self-written promotional entries.

---

## Phase 7: Measure & maintain

**Outcome:** you know what's working and the site stays accurate.

| Cadence | Task |
|---|---|
| **Weekly** (first month after launch) | Search Console & Bing: indexing errors, coverage; fix broken links |
| **Monthly** | Traffic, rankings and conversions; AI referral traffic; new reviews; **AI prompt check** ([log template](templates/ai-visibility-log.md)): ask ChatGPT, Perplexity, Gemini, Claude and Copilot your 5–10 key questions; record whether you're mentioned, whether facts are right, and which sources are cited |
| **Quarterly** | Refresh top pages (facts, prices, dates); add content for new questions found in Search Console queries and customer contact; Core Web Vitals; check listings match the Facts Sheet; competitor check |
| **Twice a year** | Review the robots.txt AI-bot list against current crawler docs; full accessibility check; schema validation; review this playbook |
| **Whenever facts change** | Update the Facts Sheet **first**, then site, schema, `llms.txt`, listings and social, in the same week |

**If an AI assistant gets something wrong:** find the source it's citing (or the most prominent page saying the wrong thing), fix that source or publish a clear correction on your own site, and make sure your listings agree. There's no direct "edit" button for AI answers. Some assistants have feedback buttons; use them, but fixing the sources is what lasts.

---

## Addenda by site type

**Local business:** Google Business Profile is priority #1 (categories, hours, photos, weekly posts, Q&A, reviews). Put the city or service area in titles and H1s naturally. Create location pages only when each has genuinely unique content. Keep name, address and phone identical everywhere.

**E-commerce:** Unique product descriptions (never the manufacturer's copy), real photos, price and availability in schema, shipping and returns clearly stated, reviews with schema, Merchant Center and ChatGPT merchant feeds, buying guides and comparisons.

**Content / blog / publisher:** Author bios with expertise, update dates, original reporting or data, topic clusters (a pillar guide linking to detailed sub-articles), and a decision on training crawlers.

**SaaS / tech:** Comparison and alternatives pages (honest), documentation that's public and crawlable (AI assistants quote docs constantly), pricing page in HTML, changelog, integration pages.

**Government / public sector / nonprofit:** Plain-language content (aim for a grade 6–8 reading level), accessibility to WCAG 2.1 AA at minimum (often legally required), `GovernmentOrganization`/`GovernmentService` schema, clear service pages ("How to apply for X") that answer one task each, contact info and hours on every service page, and allowing AI crawlers so assistants give residents *correct* information instead of outdated third-party copies. Keep official facts (fees, deadlines, hours) in one place and update all pages when they change.

**Health / finance / legal (YMYL):** Expert authorship or review shown on the page, sources cited, conservative claims, required disclaimers, regular review dates. Never let marketing copy outrun the evidence.

---

## Templates in this folder

| File | Use |
|---|---|
| [`LAUNCH-CHECKLIST.md`](LAUNCH-CHECKLIST.md) | One-page pre-launch and launch-day checklist |
| [`templates/facts-sheet.md`](templates/facts-sheet.md) | The single source of truth for brand facts |
| [`templates/robots.txt`](templates/robots.txt) | Crawler rules incl. AI bots (two versions) |
| [`templates/llms.txt`](templates/llms.txt) | AI-readable site summary |
| [`templates/head-meta.html`](templates/head-meta.html) | Title, description, canonical, Open Graph, icons |
| [`templates/schema/`](templates/schema/) | JSON-LD for Organization, LocalBusiness, Product, Article, FAQ, Breadcrumbs, Government service |
| [`templates/ai-visibility-log.md`](templates/ai-visibility-log.md) | Monthly AI-assistant check log |

---

_Caveat: search and AI products change quickly. Crawler names, feed programs and rich-result eligibility in this playbook were current as of November 2026. Verify against each provider's official documentation when you apply it, and update this file when things change._
