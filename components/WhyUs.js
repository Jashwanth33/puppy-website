/* Small stroke icons — inline SVG so there are no icon-font requests. */
const iconProps = {
  width: 26,
  height: 26,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

const FEATURES = [
  {
    title: 'Vet-checked & guaranteed',
    text: 'Every puppy leaves with a health certificate, first vaccines, deworming, and a written health guarantee.',
    icon: (
      <svg {...iconProps}>
        <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Raised underfoot',
    text: 'Our puppies grow up in the house with kids, cats, and everyday noises — so day one at your home feels familiar.',
    icon: (
      <svg {...iconProps}>
        <path d="M4 11l8-7 8 7" />
        <path d="M6 10v9h12v-9" />
        <path d="M10 19v-5h4v5" />
      </svg>
    ),
  },
  {
    title: 'Austin-born & local',
    text: 'Born and raised in Austin, Texas. Visit us on the weekend or arrange pickup — no shipping stress for local families.',
    icon: (
      <svg {...iconProps}>
        <path d="M12 21s-7-5.2-7-11a7 7 0 1114 0c0 5.8-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'Support for life',
    text: 'Training tips, food transitions, vet introductions — call or text us anytime, years after your puppy comes home.',
    icon: (
      <svg {...iconProps}>
        <path d="M20.8 6.6a5 5 0 00-7.1 0L12 8.3l-1.7-1.7a5 5 0 10-7.1 7.1L12 21l8.8-7.3a5 5 0 000-7.1z" />
      </svg>
    ),
  },
];

/** "Why families trust us" — 4 feature cards. */
export default function WhyUs() {
  return (
    <section className="section section-alt" aria-labelledby="why-title">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Why Pawtail</span>
          <h2 id="why-title">Why families trust us</h2>
          <p>Four promises we put in writing for every family that takes a puppy home.</p>
        </div>

        <div className="why-grid">
          {FEATURES.map((f) => (
            <article className="why-item" key={f.title}>
              <span className="why-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
