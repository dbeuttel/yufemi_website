# Structured data (JSON-LD) templates

Paste the contents of a file inside `<script type="application/ld+json"> … </script>` in the page `<head>`.

Rules:
- Replace every `[bracket]` and every `example.com`. Delete properties you can't fill truthfully.
- Markup must match what people can see on the page.
- Only include `aggregateRating` and `review` if real reviews are displayed on that page.
- Validate with https://search.google.com/test/rich-results and https://validator.schema.org.

| File | Put it on |
|---|---|
| `organization.json` | Homepage (every site) |
| `local-business.json` | Homepage or location page of a business with an address or service area (use instead of organization.json) |
| `product.json` | Each product page |
| `article.json` | Guides, blog posts, news |
| `faq.json` | Pages with a visible FAQ section |
| `breadcrumbs.json` | Any page below the homepage |
| `government-service.json` | Government or nonprofit service pages ("How to apply for X") |
