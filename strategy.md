# Strategic Roadmap: The Full-Stack Chameleon

## 1. Executive Summary & Positioning

**Target Audience:** Agency Directors & CTOs in Adelaide.
**Core Identity:** Senior "Chameleon" Developer & Technical Strategist.
**The "Hook":** "I don't just code websites; I solve complex data problems and adapt to any business domain instantly."

### The "Chameleon" Value Proposition
Unlike generic freelancers who only know one stack, you offer **Rapid Domain Adaptation (Plasticity)** backed by heavy enterprise engineering.

*   **Evidence:**
    *   **Enterprise Scale:** Experience with **Amadeus** (Global Aviation), handling high-availability booking flows and complex logic.
    *   **Government & Security:** Built secure portals for the transportation sector in Colombia.
    *   **The Promise:** "Whether your client is in Aviation, Gov, or Retail, I understand the business rules immediately."

---

## 2. Technical Case Studies (The "Work" Section)

Your portfolio must prove versatility. Each project highlights a distinct superpower.

### Project A: Birgette.co.au (The Data Engineer)
*   **Headline:** "Modernizing Real Estate Data: From Legacy FTP to Modern Web."
*   **The Challenge:** Client received massive REAXML files daily via FTP. Existing tools couldn't parse the volume or complexity reliably.
*   **The Tech Stack:** Python, REAXML, FTP, Custom SQL DB, WordPress API.
*   **The Solution:**
    *   Built a custom **Python ETL pipeline** to monitor the FTP server.
    *   Parsed complex REAXML standards and consolidated data.
    *   Synced clean data to the WordPress frontend via REST API.
*   **Key Takeaway:** "I build robust pipelines connecting legacy systems to modern interfaces."

### Project B: Metrojets (The Frontend Ninja)
*   **Headline:** "Breaking the SaaS Ceiling: Custom GSAP on GoHighLevel."
*   **The Challenge:** A sports club needed a high-end "Awwwards" feel but was locked into the GoHighLevel (GHL) ecosystem.
*   **The Tech Stack:** GoHighLevel, GSAP (ScrollTrigger), Custom JS Modules.
*   **The Solution:**
    *   Bypassed GHL builder limitations by injecting custom JS modules.
    *   Implemented high-performance GSAP animations.
*   **Key Takeaway:** "I can make a cookie-cutter SaaS platform feel like a bespoke custom build."

### Project C: House of Carnivore (The Performance Obsessive)
*   **Headline:** "E-Commerce Speed: 100/100 Core Web Vitals."
*   **The Challenge:** Delivering a rich e-commerce experience without bloating load times.
*   **The Tech Stack:** Astro, Tailwind CSS.
*   **The Solution:**
    *   Zero-JS-by-default architecture using Astro.
    *   Aggressive image optimization and critical CSS inlining.
*   **Key Takeaway:** "Obsession with performance and green Lighthouse scores."

---

## 3. The "Killer Feature": Client Support Portal

**Concept:** A "Jira-Killer" built directly into your portfolio to streamline client requests and prove integration skills.

**The Workflow:**
1.  **UI:** Client visits `juanmrodriguez.dev/support`.
2.  **Input:** Fills a structured form (Bug/Feature, Priority, Screenshot).
3.  **Processing:** Astro Action / Serverless Function validates the request.
4.  **Integration:** Function calls the **GitHub API**.
5.  **Output:** Automatically creates a **GitHub Issue** in your private project repo.
6.  **Notification:** Sends a confirmation email to the client (via Resend/SendGrid).

**Strategic Value:** It demonstrates you don't just build static pages; you build **automated business workflows**.

---

## 4. Content Architecture (Astro Content Collections)

We will use strict **Zod Schemas** to enforce high-quality data structure.

### `src/content/config.ts` Specification

```typescript
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    
    // Dynamic Theming
    accentColor: z.string(), // e.g., '#FF5733' - Used for GSAP reveals/backgrounds
    
    // The Narrative
    challenge: z.string(), // The business problem
    technicalChallenge: z.string(), // The engineering hurdle (e.g., "Parsing 5GB XML files")
    solution: z.string(),
    
    // Tech Stack Classification
    category: z.enum(['Data Engineering', 'Frontend Creative', 'Full Stack Performance']),
    backendStack: z.array(z.string()), // ['Python', 'SQL', 'Node.js', 'FTP']
    frontendStack: z.array(z.string()), // ['Astro', 'GSAP', 'Tailwind']
    
    // Metrics
    kpi: z.string().optional(), // e.g., "60% Faster Load Time"
    
    // Links & Media
    repoUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    coverImage: z.string(),
  }),
});

export const collections = { projects };
```

---

## 5. Next Steps (Implementation)

1.  **Initialize Project:** `npm create astro@latest` (Empty template).
2.  **Install Core Deps:** `astro add tailwind`, `gsap`, `zod`.
3.  **Scaffold Collections:** Implement the schema above.
4.  **Build Layouts:** Create the base layout with the new "Chameleon" branding.

