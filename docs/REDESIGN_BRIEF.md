# Redesign brief — denisantonov.com

A brief for Claude Code to integrate new copy and give the existing Astro site a modern facelift. Read the whole thing before changing anything, and **start by inspecting the current project structure** (`src/`, `astro.config.*`, existing layouts/components, how the page is currently built) so changes fit what's already there rather than rewriting blindly.

The guiding principle for everything below is **restraint**. This is a senior engineer's professional-presence site. Clean, typographic, fast, a little personality. No flashy hero animations, no gradients-for-the-sake-of-it, no bloat.

---

## 1. Structural changes

- **Merge "Case studies" and "Writing" into a single Blog.** Each post is distinguished by a type tag (`Case Study`, `Article`, …) shown as a small label/pill. There is only one content section to maintain.
- Implement the blog with **Astro Content Collections** (`src/content/blog/`) and a typed schema. Suggested frontmatter:
  ```ts
  // src/content/config.ts
  import { defineCollection, z } from 'astro:content';
  const blog = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),        // used as the teaser line
      type: z.enum(['case-study', 'article']),
      pubDate: z.date(),
      draft: z.boolean().default(false),
    }),
  });
  export const collections = { blog };
  ```
- **Front page** stays lean and shows the latest 1–2 posts as teasers (title + type tag + description), each linking to its full post page. Don't render full posts on the home page.
- **Blog index page** (`/blog`) lists all posts with their type tag.
- **Post page** (`/blog/[slug]`) renders the full post in a comfortable reading layout.
- Add the included case study (section 5) as the **first post**, `type: case-study`.

## 2. Copy changes (exact text in section 5)

- **Hero:** name + role + links only. **Remove any subline/tagline from the hero.**
- **About:** new headline + single paragraph. Remove the old three-card block entirely.
- **Experience:** leave the two existing entries as they are.
- **Contact:** replace the old heading with **"Find me online"** and the three links. **No call-to-action, no supporting sentence.**

## 3. Design system

**Typography** (self-host via `@fontsource` packages or Astro's font handling — no render-blocking external requests):
- UI + headings: **Geist** (clean modern grotesque). Fallback: Inter.
- Mono accent for eyebrows, nav, and the blog **type tags**: **Geist Mono** (or JetBrains Mono). The type tags as small mono pills tie the "engineer" texture together.
- Long-form post body: **Newsreader** (serif) for an editorial, readable feel on the case study and articles. Optional but recommended — it makes the essays feel like something to read.
- Scale: fluid with `clamp()`. Hero heading large but not shouty (~`clamp(2rem, 5vw, 3.25rem)`). Body 16–18px, `line-height: 1.65` for UI, 1.7+ for post bodies. Tight tracking on big sans headings (`letter-spacing: -0.02em`), normal on serif.

**Color — keep the existing theme. Do not introduce a new palette.**
- First, locate where the current colors live (e.g. `tailwind.config.*` theme tokens, a `global.css`/`:root` with CSS custom properties, or wherever the existing palette is defined) and **reuse those exact values**. The facelift is typography, spacing, and motion — not a recolor.
- If the site already has light/dark handling, preserve it. Keep the existing accent color; apply it to links/hover/active where appropriate.
- Only if the current palette is genuinely incomplete (e.g. no defined hover or border tone) may you derive a new shade from the *existing* colors — never bring in unrelated new ones. If you think a color genuinely needs to change, ask first rather than changing it.

**Layout & spacing:**
- Reading column max-width ~680–720px. Generous vertical rhythm; separate sections with space, not heavy rules.
- Lots of whitespace. Let the content breathe.

## 4. Motion — tasteful, opt-out by default

- **Scroll reveal:** subtle fade + ~8–12px `translateY` on sections and list items as they enter, lightly staggered, ~400–500ms ease-out, runs once. Use IntersectionObserver, not a heavy library.
- **Hover:** small, fast transitions on links and post cards (color, underline growth, or a few-px lift). Nothing bouncy.
- **Page transitions:** use Astro's built-in View Transitions (`astro:transitions`) for navigating into and out of blog posts — native, smooth, modern.
- **Always wrap motion in `@media (prefers-reduced-motion: no-preference)`** and ensure the site is fully usable and good-looking with motion disabled. Animate only `transform` and `opacity`.

## 5. Final copy (use verbatim)

### Hero
> **Denis Antonov**
> Software Engineer at Financial Times — Sofia
> Links: Email · LinkedIn · Résumé

### About
> **I'm at my best somewhere between a tangle and a clean line.**
>
> I like understanding complexity — following the line all the way through — and then making it accessible. Not simple; the good ideas rarely are. But complexity can be made clean: something the next person can pick up and reason about without carrying the whole weight of it. I like owning systems and evolving them over time, making decisions and outgrowing the ones that turn out wrong, and learning from the people I work with. I care about outcomes, but not at the cost of shipping something I'd be embarrassed by.

### Experience (unchanged)
> **Financial Times** — Software Engineer · Jul 2025 – Present
> Modernising legacy frontend services, designing event-driven architecture, centralising domain logic, and owning platform capabilities from discovery through rollout guidance.
> *TypeScript · Express.js · React.js · Payload CMS · AWS*
>
> **Intermedia** — Software Engineer · Aug 2023 – Jul 2025
> Developed backend services and APIs for data-intensive platforms, designed SQL database structures, and built responsive client-side applications.
> *JavaScript · Fastify · React.js · Next.js · PostgreSQL*

### Blog — first post teaser
> **[Case Study] Multitenancy: a case for deep modules**
> How a sprawl of per-product configuration became a single deep module.

### Contact
> **Find me online**
> Email · LinkedIn · Résumé

### First blog post body
Use the separate case study file (`case-study-eighty-four-files.md`) as the post content. Frontmatter:
```yaml
---
title: "Multitenancy: a case for deep modules"
description: "How a sprawl of per-product configuration became a single deep module."
type: case-study
pubDate: 2026-06-12
---
```

## 6. Constraints

- Keep it **fast** — this is a static Astro site; don't pull in heavy client JS. Prefer zero/minimal hydration; the scroll-reveal is a tiny vanilla script.
- **Accessibility:** semantic landmarks, visible focus styles, sufficient contrast in both themes, reduced-motion honored.
- Don't break existing routing, the résumé PDF, or the email-protection link without checking what's there first.
- Show me a plan and the list of files you intend to add/change before doing a large rewrite.
