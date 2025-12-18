# Portfolio build context for Codex (Cursor)

## Context and objective

We are building a premium personal portfolio for **Juan M. Rodriguez** at **juanmrodriguez.dev**. The portfolio is designed to win **contract and white label work** from **marketing agencies and startups** in Adelaide and remote. The site must feel like an Awwwards level marketing site: minimalist, monochrome, high contrast, strong typography, excellent spacing, and purposeful motion.

Primary goal:
- Convert visitors into inquiries for contract and white label delivery.

Secondary goals:
- Showcase 3 case studies and demonstrate senior delivery standards.
- Communicate an agency friendly workflow (fast ramp up, PR friendly, clean handoffs).

Constraints:
- Monochrome, minimal, premium feel.
- Motion should be present and intentional, not flashy or noisy.
- Fast performance and strong Lighthouse scores.
- Respect accessibility and `prefers-reduced-motion`.
- NDA friendly, willing to sign NDAs.

Rate baseline:
- 35 AUD per hour. Other estimates can be derived from this baseline.

## Target audience and positioning

Target audience:
- Marketing agencies needing overflow development, fast ramp up, consistent quality, and PR friendly delivery.
- Startups needing a premium marketing site and later web app UI.

Positioning statement:
- White label contract developer for agencies and product teams. Premium front end, GSAP motion, clean handoffs, flexible stack.

## Visual style

Overall style:
- Minimal monochrome premium.
- Strong large typography.
- High whitespace.
- Subtle grain and optional grid.
- No colorful gradients. If needed, only a very subtle graphite or slate accent for hover and focus states.

Typography (selected fonts):
- Sans: `--font-sans: "Satoshi", sans-serif;`
- Display: `--font-display: "Clash Display", sans-serif;`

Guidance:
- Use Clash Display for hero headline and major section headings.
- Use Satoshi for body copy, labels, cards, and UI text.
- Keep typography editorial and technical, not playful.
- Avoid heavy text effects (strong blur, glow, or noisy shadows).

## Color palette

Background:
- Primary: `#FFFFFF`
- Optional soft background tint: `#FAFAFA`

Text:
- Primary: `#18181B` (rgb 24 24 27)
- Secondary: `#3F3F46`
- Muted: `#71717A`

Borders and dividers:
- `rgba(24,24,27,0.08)` to `rgba(24,24,27,0.12)`

Mesh or geometric background:
- Base ink: `rgb(24, 24, 27)` with alpha layers:
  - Dots: `rgba(24,24,27,0.18)` (up to `0.22` if too subtle)
  - Lines: `rgba(24,24,27,0.06)` to `0.09`
  - Soft distant dots: `rgba(24,24,27,0.10)`
  - Cursor halo: `rgba(24,24,27,0.05)` to `0.06`

Focus state:
- Monochrome focus ring with accessible contrast.

## Site structure

Single page structure with optional case study pages.

### 1 Hero
- Availability pill: `Booking Q1 2026 projects`
- Headline: `ADVICE, DESIGN, DELIVERY. FROM ADELAIDE.`
- Subheadline: short positioning line about white label contract dev, premium front end, GSAP motion, clean handoffs, flexible stack.
- Primary CTA: `Request availability` (mailto short)
- Secondary CTA: `See selected work` (scroll to work section)

### 2 Selected Work
- 3 featured projects:
  - Brigette
  - Metro Jets
  - House of Carnivore
- Each card includes:
  - Cover image
  - One line summary
  - Stack tags
  - Link to a case study page

### 3 Capabilities
Six capability tiles with one sentence value each:
- Marketing sites and landing pages
- Web apps and dashboards
- Motion and interaction (GSAP)
- Integrations and automations
- Performance and technical SEO
- White label delivery and handoff

### 4 How I plug into your team
Agency friendly section:
- Fast ramp up
- PR friendly workflow (Git, Jira, code reviews)
- Clean delivery (components, docs)
- NDA ready

### 5 Engagement models
- Hourly: 35 AUD per hour
- Fixed scope: based on estimate
- Sprint support: 1 to 2 weeks overflow support

### 6 About (compact)
- Short bio focused on delivery, quality, systems, and adaptability.
- Emphasise Astro first but flexible stack.

### 7 Contact
Goal: minimal friction.
- Primary button: `Request availability` opens mailto with a short template.
- Short contact form: Name, Email, Message.
- Small link: `Optional brief template` opens a longer email template but is not required.
- Microcopy: Reply within 24h. Adelaide time. NDA friendly.

Mailto short template:
- Subject: `Availability check | Project | Timeline`
- Body:
  - Hi Juan,
  - We need help with: [one line]
  - Timeline: [date or week]
  - Best contact: [email or phone]

### 8 Footer
- Minimal links: LinkedIn, GitHub, Email.
- Location: Adelaide, AU
- Closing line: Built for delivery.

## Content requirements

Hero subheadline should avoid generic phrases and should mention:
- White label contractor
- Agencies and product teams
- Premium front end
- GSAP motion
- Clean handoffs
- Flexible stack

CTA wording should avoid generic phrases like Get in touch. Use:
- Request availability
- Send a quick message
- Share scope

## Case studies format (MDX)

We have 3 MDX files in `src/content/work/`. Use Astro content collections with typed frontmatter.

Recommended frontmatter fields:
- title
- client
- publishDate
- cover
- coverAlt
- liveUrl
- isFeatured
- role
- engagement (white label or direct)
- timeframe
- team
- responsibilities (list)
- results (list, qualitative is fine)
- tags (list)
- stack object: frontend, backend, tooling
- nda (boolean)

Inside each MDX, use consistent sections:
- Overview
- Challenge
- Constraints
- Solution
- Highlights
- Results
- Next improvements

Important:
- Ensure each case study content matches its own project and does not contain unrelated placeholder text.

## Motion and GSAP plan (purposeful, not saturated)

Principles:
- Motion mainly on initial load and on user interaction, avoid constant loops on headline text.
- Animate transforms and opacity, avoid layout properties.
- Support `prefers-reduced-motion` and disable intensive motion for those users.

### Hero motion
Use a GSAP timeline for entry:
1) Availability pill: short fade + slight y
2) Headline lines: reveal line by line using overflow hidden mask, y from 28 to 0, opacity 0 to 1, stagger
3) Grey block reveal (DIGITAL CAPABILITIES) uses a wipe reveal (wrapper mask or clip path) slightly later
4) Subheadline and CTAs appear last

Implementation detail:
- Use `.reveal-text` for headline lines and `.late-reveal` for elements that appear after.
- Use `gsap.timeline()` to sequence instead of separate `gsap.from()` calls.
- Avoid very long durations. Prefer 0.8 to 1.1 seconds. Use timeline offsets for delays.

### Background mesh motion
Geometric mesh should be more noticeable but still subtle:
- Slow drift for dots and lines
- Cursor proximity effect: nearby nodes shift slightly and lines intensify
- Very subtle cursor halo
- Optional short line draw effect on initial load only

### Micro interactions
- CTA hover: underline wipe or border growth from one corner
- Work card hover: image reveal with clip and slight scale
- Scroll cue: minimal scroll indicator in hero

Do not:
- animate letter spacing
- bounce eases
- rotate headline
- loop headline animations

## Technical requirements

- Astro + Tailwind.
- Use content collections for case studies.
- Strong performance: lazy load images, use modern formats, avoid heavy JS.
- Implement reduced motion support for all key animations.
- Ensure animations do not block content visibility (avoid immediateRender issues with `gsap.from` when not in a timeline).
- Keep animation code organised (hero animation logic separated into a small module or component script).
- Use clean class naming: `.reveal-text` for headline lines and `.late-reveal` for late elements.

## Deliverables expected from the agent

1) Implement the page structure sections listed above in the Astro project.
2) Implement hero copy with the headline and agency focused subheadline.
3) Implement CTA behaviour: mailto short template and optional brief link.
4) Implement work cards and link to case study pages.
5) Implement content collection schema and update MDX frontmatter structure.
6) Implement GSAP motion system:
   - entry timeline for hero
   - background mesh enhancement (drift + cursor proximity)
   - micro interactions for CTAs and cards
   - reduced motion support
7) Keep the site monochrome, minimal, premium, and performance friendly.
