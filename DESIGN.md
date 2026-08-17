---
name: GiftEasy
description: AI gift-finder landing page — warm parchment paper, serif headlines, amber accents, and soft oversized rounding.
colors:
  primary: "#1c1917"
  primary-foreground: "#fafaf9"
  secondary: "#ede3d3"
  secondary-foreground: "#292524"
  accent: "#f59e0b"
  accent-foreground: "#1c1917"
  accent-on-dark: "#fcd34d"
  background: "#f4efe6"
  surface-card: "#fffdf8"
  surface-card-translucent: "rgba(255,255,255,0.8)"
  surface-inverted: "#0c0a09"
  muted: "#f6efe3"
  muted-foreground: "#57534e"
  destructive: "#dc2626"
  border: "rgba(41,37,36,0.16)"
  ring: "rgba(245,158,11,0.35)"
typography:
  display:
    fontFamily: "Iowan Old Style, Palatino Linotype, Book Antiqua, Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2rem, 7vw, 6.1rem)"
    fontWeight: 400
    lineHeight: 1.03
    letterSpacing: "-0.035em"
  eyebrow:
    fontFamily: "Avenir Next, Segoe UI, Helvetica Neue, Trebuchet MS, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    letterSpacing: "0.24em"
  body:
    fontFamily: "Avenir Next, Segoe UI, Helvetica Neue, Trebuchet MS, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.78
rounded:
  sm: "0.75rem"
  md: "1rem"
  lg: "1.7rem"
  xl: "2.3rem"
  pill: "9999px"
spacing:
  sm: "1rem"
  md: "1.5rem"
  lg: "3.5rem"
  xl: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.pill}"
    padding: "0 1.75rem"
    height: "3.5rem"
  button-primary-hover:
    backgroundColor: "#292524"
  button-outline:
    backgroundColor: "rgba(255,255,255,0.7)"
    textColor: "{colors.primary}"
    rounded: "{rounded.pill}"
    padding: "0 1.75rem"
  card-surface:
    backgroundColor: "{colors.surface-card-translucent}"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: "1.5rem"
  card-inverted:
    backgroundColor: "{colors.surface-inverted}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.xl}"
    padding: "1.5rem"
---

# Design System: GiftEasy

## Overview

**Creative North Star: "The Warm Paper Ledger"**

GiftEasy reads like a well-kept notebook on good paper: a cream-and-parchment canvas, a single warm amber accent used sparingly as a highlighter, and a serif display face reserved for the sentences that matter. Everything else — body copy, labels, buttons — sits in a clean humanist sans so the serif headlines keep their weight. Surfaces are soft and oversized: corners are rounded well past a typical UI radius, shadows are diffuse and warm-toned rather than sharp, and panels of near-black ("stone-950") appear as intentional ink blocks against the paper to hold product previews and social proof.

The system is calm at rest and animates only to reward attention: sections fade and lift into view on scroll, cards lift a few pixels on hover, and the primary CTA gets a light spring bounce. Motion always respects `prefers-reduced-motion`.

**Key Characteristics:**
- Warm parchment background (radial amber glow + cream-to-tan gradient), never stark white or pure black as a base
- Serif display type for headlines only; humanist sans for everything functional
- One accent color (amber) used almost exclusively for eyebrow labels, dots, and focus rings — never as a large fill
- Oversized, consistently soft radii (1.6rem–2.8rem on cards, full pill on buttons/badges)
- Near-black "ink" panels (`stone-950`) as the system's only high-contrast surface, used for product-preview and social-proof blocks
- Diffuse, warm-tinted shadows (`rgba(28,25,23,…)`) — never a hard black or cool-gray shadow

## Colors

A warm, low-saturation neutral palette lit by a single amber accent; the near-black "ink" panels are the only saturated-contrast surface in the system.

### Primary
- **Ink Black** (`#1c1917`): The primary CTA fill, headline text color, and the "product preview" / social-proof panel background (`bg-stone-950`). Doubles as the system's near-black; not a true `#000`.

### Secondary
- **Warm Sand** (`#ede3d3`): Secondary surface fill for lower-emphasis chips and backgrounds.

### Accent
- **Signal Amber** (`#f59e0b`): The system's one accent. Used at ~800-weight tint (`amber-800`, ≈`#92400e`) for eyebrow labels and "+" bullets on the light paper background — darkened from the original `amber-700` to meet WCAG AA contrast (4.5:1) against the parchment gradient — and at ~300-weight tint (`amber-300`, ≈`#fcd34d`) for the same labels when they sit inside an ink-black panel. Also drives the focus ring (`rgba(245,158,11,0.35)`) and a small `size-2` accent dot in the hero stat list.

### Neutral
- **Parchment** (`#f4efe6`): Base page background, layered under a soft radial amber glow at the top of the viewport and a subtle vertical gradient toward a deeper tan (`#ede6da`) at the bottom.
- **Card Cream** (`#fffdf8`): Opaque card/popover background token; in practice most cards use a translucent white (`white/70`–`white/92`) over the parchment gradient instead of this flat token, so the gradient shows through.
- **Stone Ink** (`#57534e`): Muted foreground for secondary body copy and captions.
- **Border Hairline** (`rgba(41,37,36,0.16)`): The system's only border color, used at low opacity on `stone-200`-toned card and pill borders.

### Named Rules
**The One Accent Rule.** Amber never fills a large surface. It appears only as label text, a focus ring, a small dot, or a thin glow blur behind hero art — always a highlight, never a background.

**The Ink Panel Rule.** `stone-950` panels are reserved for two jobs: previewing the product's own dark UI, and holding social proof. They are not used for generic section backgrounds.

## Typography

**Display Font:** Iowan Old Style (with Palatino Linotype, Book Antiqua, Cormorant Garamond, Georgia, serif fallback)
**Body Font:** Avenir Next (with Segoe UI, Helvetica Neue, Trebuchet MS, ui-sans-serif, system-ui, sans-serif fallback)

**Character:** A soft literary serif for anything a reader should feel, paired with a clean geometric-humanist sans for anything a reader should just scan. The pairing keeps the page feeling written rather than assembled.

### Hierarchy
- **Display** (regular weight, `clamp(2rem, 7vw, 6.1rem)`, line-height ~1.03–1.05, tracking −0.03em to −0.04em): The hero H1 and section H2s. Always paired with `text-balance` to avoid ragged wraps.
- **Headline** (regular weight, `clamp(2.15rem, 3.8vw, 3.7rem)`, tracking ~−0.03em): Section-level headings inside cards and CTAs (How It Works, Social Proof, Closing CTA).
- **Body** (regular weight, `1.125rem`/`text-lg`, line-height 1.78/`leading-8`): Section intros and long-form copy, capped with `text-pretty` for cleaner wrapping.
- **Label** (semibold, `0.875rem`/`text-sm`, letter-spacing `0.24em`, uppercase): The eyebrow above every section heading ("Live Demo", "How It Works", "Occasions"), always in amber.

### Named Rules
**The Eyebrow Rule.** Every major section opens with an uppercase, wide-tracked amber label directly above its serif headline. This is the system's primary rhythm device — apply it to any new section rather than inventing a different heading pattern.

## Layout

Content is capped at `max-w-6xl` (hero, most sections) or narrower (`max-w-4xl` for FAQ, `max-w-5xl` for the closing CTA), centered with `mx-auto` and `px-4 sm:px-6 lg:px-8` gutters. Vertical rhythm between sections is generous and consistent: `py-14` on mobile stepping up to `lg:py-24` on desktop. The hero uses a two-column `lg:grid-cols-[1.05fr_0.95fr]` split (copy left, product-preview card right) that collapses to a single stacked column below `lg`. Grids elsewhere (feature/occasion cards) run 1 column on mobile, 2 on tablet, up to 3–4 on desktop, always with `gap-4` to `gap-8`.

## Elevation & Depth

Hybrid: mostly flat, translucent-white cards resting directly on the parchment gradient, with a small number of "lifted" surfaces (hero preview card, ink panels, closing CTA) that carry a large, soft, warm-tinted shadow to read as physically raised paper. There is no hard-edged or cool-gray shadow anywhere in the system — shadows are always tinted toward the ink color (`rgba(28,25,23,…)`) at low opacity and large blur/spread, simulating diffuse light rather than a sharp drop shadow.

### Shadow Vocabulary
- **Card Lift** (`box-shadow: 0 20px 70px rgba(28,25,23,0.08)`): Default elevation for large content wells (How It Works wrapper).
- **Panel Lift** (`box-shadow: 0 30px 80px rgba(28,25,23,0.09–0.13)`): Hero preview card and closing-CTA panel.
- **CTA Lift** (`box-shadow: 0 24px 40px rgba(28,25,23,0.18)`): Primary buttons, giving them a floating, tactile quality.
- **Header Button Lift** (`box-shadow: 0 18px 30px rgba(28,25,23,0.16)`): The sticky header's CTA button.

### Named Rules
**The Warm Shadow Rule.** Shadows are always tinted from the ink color, never neutral gray or black. A cool-toned shadow is a bug, not a variant.

## Shapes

Radius is deliberately oversized and consistent across the whole system — nothing uses the sharp `rounded-md`/`rounded-lg` scale that the CSS token (`--radius: 1rem`) alone would suggest. Cards and panels run from `rounded-[1.6rem]` (accordion items, "occasion" cards) up to `rounded-[2.8rem]` (closing CTA), with the exact value scaling to the surface's size. Buttons, pills, chips, and badges are always fully rounded (`rounded-full`), never radiused-but-square. Borders are hairline (`border` at 1px) in the low-opacity ink tone; there is no double-border or heavy-stroke treatment anywhere.

## Components

### Buttons
- **Shape:** Always `rounded-full` — this overrides the underlying `button.tsx` primitive's default `rounded-md`, so every real CTA in the product is a pill, not a rounded rectangle.
- **Primary:** Ink-black fill (`bg-stone-950`), off-white text (`text-stone-50`), semibold, `h-14` with `px-7` at the largest size; carries the CTA Lift shadow. Hover darkens to `stone-800`.
- **Outline:** `border-stone-300`, translucent white fill (`bg-white/70`), ink text; hover deepens the border to `stone-500` and fills to solid white.
- **Hover / Focus:** Color-only transitions by default; the closing-CTA button additionally gets a Framer Motion spring lift (`scale 1.03`, `y -2`) on hover and a slight press-down (`scale 0.98`) on tap. All interactive elements carry `focus-visible:ring-2 ring-amber-500/60` with a 2px offset.

### Cards / Containers
- **Corner Style:** `rounded-[1.6rem]` to `rounded-[2.3rem]` depending on size (see Shapes).
- **Background:** Translucent white (`white/70`–`white/92`) over the parchment gradient for light cards; solid `stone-950` for ink panels; flat `stone-50` for nested content wells inside a larger card.
- **Shadow Strategy:** See Elevation & Depth — large cards get Panel/Card Lift, nested inner cards typically stay flat (no shadow) to keep hierarchy legible.
- **Border:** 1px hairline, `border-stone-200` (light) or `border-white/65` (on the hero's translucent panel) or `border-white/12` (on ink panels).
- **Internal Padding:** `p-4`–`p-6` on mobile, stepping up to `p-8`–`p-14` on the largest desktop wells.

### Inputs / Fields
No dedicated custom input styling exists in the codebase today (the landing page has no form fields itself — the product form lives in the app at `app.gift-easy.com`). If one is added, match the pill/rounded-large language and hairline border established by buttons and cards rather than the sharper defaults in `card.tsx`.

### Navigation
Single sticky header (`LandingHeader.tsx`): transparent and borderless at the top of the page, transitioning on scroll (`scrollY > 12`) to a blurred, translucent parchment bar (`bg-[#faf6ef]/80 backdrop-blur-xl`) with a hairline white bottom border. Logo + wordmark on the left (wordmark hidden below `sm`), a single pill primary CTA on the right whose label itself is responsive ("Find Gifts" on mobile, "Find Gift Ideas" on larger screens).

### Accordion (FAQ)
Each FAQ item is its own pill-cornered card (`rounded-[1.6rem]`, `border-stone-200`, `bg-white/84`) rather than the primitive's default hairline-divider list style — the underlying `accordion.tsx` component ships a plain bordered-bottom list, but every real usage wraps each item in its own rounded card instead. Chevron rotates 180° on open via `data-state`.

### Eyebrow Label (signature component)
A recurring, unlabeled-in-code but highly consistent pattern: `text-sm font-semibold uppercase tracking-[0.24em] text-amber-800` (or `text-amber-300` inside an ink panel) placed directly above a display headline. This is the system's strongest identity marker and should be reused verbatim for any new section rather than re-derived.

## Do's and Don'ts

### Do:
- **Do** use `rounded-full` for every button, pill, and badge; use the `1.6rem`–`2.8rem` soft-radius family for every card or panel.
- **Do** pair a serif `font-display` headline with an amber eyebrow label above it for any new section.
- **Do** tint all shadows from `rgba(28,25,23,…)`; keep them large-blur and low-opacity rather than tight and dark.
- **Do** respect `prefers-reduced-motion` (via `useReducedMotion`) on any new animated element, matching the existing pattern in `MotionReveal`, `AnimatedClosingCta`, and `AnimatedSocialProof`.
- **Do** keep amber to labels, dots, rings, and small glows — the accent's power comes from its rarity.

### Don't:
- **Don't** introduce a second accent hue; the palette is intentionally single-accent.
- **Don't** use the sharp `rounded-md`/`rounded-lg` Tailwind defaults on any user-facing card or button — they read as off-system next to the oversized radii used everywhere else.
- **Don't** use a pure black, pure white, or cool-gray shadow; it breaks the "warm paper" material.
- **Don't** fill a large surface with amber; reserve solid-color panels for ink black (`stone-950`) only.
- **Don't** revive the unused legacy components (`Hero/HeroSection.tsx`, `WhyChoose.tsx`, `HowItWorks.tsx`, `FAQSection.tsx`, `TestimonialsSection.tsx`, `SocialProofSection.tsx`, `Footer.tsx`) as a styling reference — they predate this system (pink/rose gradients, `zinc`/`indigo` tones, plain `shadow-md` cards) and are not wired into the live page (`LandingPage.tsx` is canonical).
