# Pawtail Pups — Puppy Business Website

A production-ready, single-page puppy business website for **Pawtail Pups** (placeholder brand — Austin, TX), built with **Next.js 16 + React 19** (the same stack as the reference site) and exported as a fully static site.

> Original content, layout-inspired design: no text, images, or code was copied from the reference site. Photos are CC-licensed placeholders from Wikimedia Commons (credits below) — swap in your own.

---

## File tree

```
puppy-site/
├── app/
│   ├── layout.js           # App shell: fonts, SEO metadata, header/footer, skip link
│   ├── page.js             # Single page — assembles all sections
│   ├── globals.css         # All styles (mobile-first, breakpoints 480/768/1024)
│   ├── icon.svg            # Paw-print favicon (auto-wired by Next)
├── components/
│   ├── Header.js           # Sticky navbar + collapsible mobile menu (client)
│   ├── Hero.js             # Headline, CTAs, auto-scrolling photo strip
│   ├── Puppies.js          # 6 available-puppy cards (hover lift/zoom)
│   ├── WaysToMeet.js       # 2 feature cards: visit vs. delivery
│   ├── Journey.js          # 3-step "how it works"
│   ├── WhyUs.js            # 4 trust features with inline SVG icons
│   ├── Stories.js          # Testimonials + gallery + keyboard lightbox (client)
│   ├── Faq.js              # Accordion (native <details>, a11y built-in)
│   ├── CtaBanner.js        # Final conversion banner
│   ├── Contact.js          # Validated contact form (client)
│   ├── Footer.js           # Brand, explore links, contact, socials
│   └── MobileBar.js        # Sticky call/email bar (≤480px)
├── public/images/          # 8 local photos (fast, no 3rd-party requests)
├── next.config.mjs         # output: 'export' → static build in /out
├── package.json
└── README.md
```

## Section-by-section breakdown (reference structure)

| # | Section | Purpose / behavior |
|---|---------|--------------------|
| 1 | **Header / nav** | Sticky, gains shadow on scroll; hamburger collapses to a dropdown ≤768px (closes on link click/Escape); desktop shows all links + "Book a visit" CTA |
| 2 | **Hero** (`#home`) | Eyebrow chip → serif headline → subcopy → 2 CTAs → seamless auto-scrolling photo strip (pauses on hover, honors `prefers-reduced-motion`) |
| 3 | **Puppies** (`#puppies`) | 6-card grid (1→2→3 cols), "Available" badge, hover lift + image zoom, per-card "Ask about X" CTA |
| 4 | **Two ways to meet** | Side-by-side feature cards: home visits vs. home delivery |
| 5 | **Journey** (`#journey`) | Numbered 3-step process |
| 6 | **Why trust us** | 4 feature cards with inline SVG icons (no icon font) |
| 7 | **Stories** (`#stories`) | 3 testimonial quotes (★ ratings with SR text) + photo gallery → **lightbox** (Esc / ← / → keys, focus trap, focus restore) |
| 8 | **FAQ** (`#faq`) | Exclusive accordion via `<details name>` — keyboard accessible out of the box |
| 9 | **CTA banner** | Dark-brown conversion panel + photo |
| 10 | **Contact** (`#contact`) | Business info cards + validated form (inline errors, `aria-invalid`, `role="alert"`, success `role="status"`) |
| 11 | **Footer** | Brand blurb, explore links, contact details, socials, copyright |
| 12 | **Mobile bar** | Fixed Call/Email action bar ≤480px |

**Design system:** warm orange `#F28C28` · cream `#FFF7EC` · dark brown `#3B2A20` (AA-checked: buttons use brown-on-orange), Poppins + Playfair Display self-hosted via `next/font`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build (static export)

```bash
npm run build    # → ./out (plain HTML/CSS/JS, loads in <2s)
```

## Deploy on Render

1. Push this folder to a GitHub repo.
2. Render → **New → Static Site** → connect the repo.
3. Build command: `npm install && npm run build` · Publish directory: `out`
4. Deploy — site is live at `https://<name>.onrender.com` (no server, no cold starts).

## Customizing

- **Name/city/phone/email:** search `Pawtail Pups`, `Austin`, `512) 555-0147`, `hello@pawtailpups.com` across `app/` + `components/`.
- **Colors:** CSS variables at the top of `app/globals.css`.
- **Contact form:** currently simulates submit — point `handleSubmit` at Formspree/Basin (TODO comment in `Contact.js`).
- **Photos:** drop files into `public/images/` with the same names to keep references.

## Photo credits (Wikimedia Commons placeholders)

| File | Author | License |
|------|--------|---------|
| Callie the golden retriever puppy | MichaelMcPhee | CC BY 3.0 |
| German shepherd puppy (stick) | Jakub Halun | CC BY-SA 4.0 |
| Welsh corgi puppy (tongue) | Huoadg5888 | CC0 |
| Corgi puppy in sweater | Rasik | CC BY 4.0 |
| A puppy sleeps | Jami430 | CC BY-SA 4.0 |
| Central Asian Shepherd puppy | Darbui | CC BY-SA 4.0 |
| Cute girl with puppy | smlp.co.uk | CC BY 2.0 |
| Girl hugging dog at golden hour | Wikimedia Commons | CC BY-SA |
