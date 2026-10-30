import { WHATSAPP_URL, PHONE_TEL, PHONE_DISPLAY, EMAIL_HREF, EMAIL_DISPLAY, SOCIALS } from './links';

const EXPLORE = [
  { href: '#puppies', label: 'Available puppies' },
  { href: '#journey', label: 'How it works' },
  { href: '#stories', label: 'Happy families' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Visit & contact' },
];

/* Inline social icons — one per network, no icon-font requests. */
function SocialIcon({ name }) {
  const p = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };
  if (name === 'facebook') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5H16.6V4.4A21 21 0 0014.4 4c-2.3 0-3.9 1.4-3.9 4v2.5H8v3h2.5V21h3z" />
      </svg>
    );
  }
  if (name === 'tiktok') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16.2 3c.4 2.3 1.8 3.7 4.1 3.9v2.9c-1.5.1-3-.3-4.2-1.2v6.3a6.1 6.1 0 11-6.1-6.1c.3 0 .7 0 1 .1v3a3.1 3.1 0 102.1 3V3h3.1z" />
      </svg>
    );
  }
  return (
    <svg {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

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
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
              >
                <SocialIcon name={s.icon} />
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
              <a href={WHATSAPP_URL}>WhatsApp {PHONE_DISPLAY}</a>
            </li>
            <li>
              <a href={PHONE_TEL}>Call {PHONE_DISPLAY}</a>
            </li>
            <li>
              <a href={EMAIL_HREF}>{EMAIL_DISPLAY}</a>
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
