# Exploration: Keep the Custom Site + Shopify as Checkout (Shop Pay & Shop App)

_Research notes, November 18, 2026. Separate from the WordPress plan (`MOVE-TO-WP-PLAN.md`); kept here for reference while alternatives are being evaluated._

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

### How it compares to the WordPress plan (Route B)

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
