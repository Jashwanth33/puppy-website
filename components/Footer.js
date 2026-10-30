const EXPLORE = [
  { href: '#puppies', label: 'Available puppies' },
  { href: '#journey', label: 'How it works' },
  { href: '#stories', label: 'Happy families' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Visit & contact' },
];

/* TODO: swap these placeholders for the brand's real social profiles. */
const SOCIALS = [
  { label: 'Pawtail Pups on Instagram', href: '#' },
  { label: 'Pawtail Pups on Facebook', href: '#' },
  { label: 'Pawtail Pups on TikTok', href: '#' },
];

/**
 * Photo credits (Wikimedia Commons, placeholders until brand photos arrive):
 * - "Callie the golden retriever puppy" — MichaelMcPhee, CC BY 3.0
 * - "German Shepard dog puppy 3151" — Jakub Halun, CC BY-SA 4.0
 * - "Welsh Corgi puppy … tongue" — Huoadg5888, CC0
 * - "Corgi puppy wearing Dog Sweater" — Rasik, CC BY 4.0
 * - "A puppy sleeps" — Jami430, CC BY-SA 4.0
 * - "Central Asian Shepherd Puppy" — Darbui, CC BY-SA 4.0
 * - "Cute Girl with cite puppy" — smlp.co.uk, CC BY 2.0
 * - "girl hugging her dog at golden hour in Laos" — Wikimedia Commons, CC BY-SA
 */
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="brand">
            <svg className="brand-mark" width="34" height="34" viewBox="0 0 64 64" aria-hidden="true">
              <rect width="64" height="64" rx="14" fill="#F28C28" />
              <g fill="#3B2A20">
                <ellipse cx="20" cy="22" rx="6" ry="8" />
                <ellipse cx="44" cy="22" rx="6" ry="8" />
                <ellipse cx="12" cy="36" rx="5" ry="6.5" />
                <ellipse cx="52" cy="36" rx="5" ry="6.5" />
                <path d="M32 32c8 0 14 7 14 14s-6 10-14 10-14-4-14-10 6-14 14-14z" />
              </g>
            </svg>
            <span className="brand-name">Pawtail Pups</span>
          </span>
          <p>
            Family-raised puppies in Austin, Texas. Vet-checked, well-socialized, and matched to the
            right home — with support that outlasts the drive home.
          </p>
          <div className="socials">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer">
          <h3>Explore</h3>
          <ul className="footer-links">
            {EXPLORE.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3>Say hello</h3>
          <ul className="footer-links">
            <li>
              <a href="tel:+15125550147">Call (512) 555-0147</a>
            </li>
            <li>
              <a href="mailto:hello@pawtailpups.com">hello@pawtailpups.com</a>
            </li>
            <li>1420 Oak Ridge Ln, Austin, TX 78704</li>
            <li>Sat &amp; Sun, 10am – 5pm</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Pawtail Pups · Austin, TX</span>
        <span>Every puppy is family.</span>
      </div>
    </footer>
  );
}
