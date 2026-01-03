# Juan M. Rodriguez Portfolio

A modern, high-performance personal portfolio website built with **Astro 5**, **Tailwind CSS 4**, and **GSAP**. This project is open source and designed to be a template for developers looking for a fast, static website with dynamic serverless capabilities.

## 🚀 Tech Stack

- **Framework**: [Astro 5](https://astro.build/) - Static Site Generation (SSG) for fast performance.
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework.
- **Content**: [MDX](https://mdxjs.com/) & Astro Content Collections - Type-safe content management for case studies.
- **Animations**:
  - [GSAP](https://greensock.com/gsap/) - Advanced animations.
  - [Lenis](https://github.com/studio-freight/lenis) - Smooth scrolling.
- **Backend**: [Vercel Serverless Functions](https://vercel.com/docs/functions) - Handles form submissions.
- **Email**: [Resend](https://resend.com/) - Email delivery API.

## 📂 Project Structure

```bash
├── api/                # Serverless functions (Vercel)
│   └── contact.js      # Contact form handler using Resend
├── public/             # Static assets (fonts, images, videos)
├── src/
│   ├── components/     # Reusable UI components
│   ├── content/        # Content collections (MDX files)
│   │   └── work/       # Portfolio case studies
│   ├── layouts/        # Page layouts
│   ├── pages/          # Astro pages & routes
│   └── styles/         # Global styles
└── astro.config.mjs    # Astro configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/juanmrodriguez.dev.git
   cd juanmrodriguez.dev
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## 🔐 Environment Variables

To make the contact form work, you need to set up environment variables. This project uses **Resend** for sending emails via a **Vercel Serverless Function**.

Create a `.env` file in the root directory (for local dev, you might need `vercel dev` to test functions, or mock the response):

```env
RESEND_API_KEY=re_123456789
CONTACT_TO=your-email@example.com
CONTACT_FROM=onboarding@resend.dev
```

| Variable | Description |
| --- | --- |
| `RESEND_API_KEY` | Your API key from [Resend](https://resend.com). |
| `CONTACT_TO` | The email address that will receive the contact form submissions. |
| `CONTACT_FROM` | The sender address (must be verified in Resend). |

## 🌐 Deployment & Serverless Functions

This project is optimized for deployment on **Vercel**.

### How it works:
1. **Static Build**: Astro builds the frontend into static HTML/CSS/JS files.
2. **Serverless Functions**: The `api/` directory is automatically detected by Vercel and deployed as serverless functions.
3. **Contact Form**: When a user submits the form, it POSTs to `/api/contact`. The function validates the input, checks for spam (honeypot), and sends an email via Resend.

### Deploying to Vercel:

1. Push your code to a Git repository (GitHub/GitLab/Bitbucket).
2. Import the project into Vercel.
3. Vercel will detect Astro automatically.
4. **Important**: Add the Environment Variables (`RESEND_API_KEY`, etc.) in the Vercel Project Settings.
5. Deploy!

## 📝 Managing Content

The portfolio work items are managed using **Astro Content Collections**.

1. Navigate to `src/content/work/`.
2. Create a new `.mdx` file.
3. Use the following frontmatter schema:

```mdx
---
title: "Project Title"
client: "Client Name"
publishDate: 2023-10-01
cover: "/assets/project-cover.webp"
coverAlt: "Description of cover image"
role: "Lead Developer"
engagement: "Direct" # White Label, Direct, Contract, Full-time
responsibilities:
  - "Frontend Development"
  - "UI/UX Implementation"
results:
  - "Improved load time by 40%"
tags: ["Astro", "React", "GSAP"]
stack:
  frontend: ["Astro", "React", "Tailwind"]
  tooling: ["Vercel", "Git"]
isFeatured: true
---

# Project Content

Write your case study here using Markdown and React/Astro components.
```

## ✨ Key Features Explained

### ⚡ Static Astro & MDX
The site is statically generated for maximum performance and SEO. MDX allows writing content in Markdown while importing interactive components.

### 📧 Serverless Contact Form
Instead of needing a full backend server, we use a single file `api/contact.js`. This runs only when requested.
- **Honeypot Strategy**: The form includes a hidden `company` field. If a bot fills it out, the request is silently ignored to prevent spam.
- **Resend**: A modern email API used to send the actual email reliably.

### 🎨 Design & Animation
- **Clash Display & Satoshi Fonts**: Custom fonts loaded locally for privacy and performance.
- **Geometric Animations**: Interactive HTML5 Canvas animations with particle effects.
- **Smooth Scroll**: Implemented with Lenis for a premium feel.

## 📄 License

This project is open for public use.
