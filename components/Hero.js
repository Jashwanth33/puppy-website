import { WHATSAPP_URL } from './links';

const STRIP = [
  { src: '/images/puppy-1.jpg', alt: 'Golden retriever puppy resting its paws on a garden fence' },
  { src: '/images/puppy-2.jpg', alt: 'German shepherd puppy carrying a stick across the lawn' },
  { src: '/images/puppy-3.jpg', alt: 'Pembroke corgi standing on its hind legs outdoors' },
  { src: '/images/showroom.jpg', alt: 'A girl hugging a spaniel puppy in a garden' },
  { src: '/images/puppy-5.jpg', alt: 'Tan puppy asleep on a soft cushion' },
  { src: '/images/puppy-6.jpg', alt: 'Fluffy white puppy exploring a lakeside trail on a leash' },
];

/**
 * Hero: eyebrow → headline → subcopy → CTAs → auto-scrolling photo strip.
 * The strip is decorative (aria-hidden) and duplicated for a seamless loop.
 */
export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-copy">
          <span className="hero-eyebrow">Raised with love in Austin</span>
          <h1 id="hero-title">
            Puppies you&apos;ll love <em>for life</em>
          </h1>
          <p className="hero-sub">
            Family-raised, vet-checked puppies in Austin, Texas — health-tested, carefully
            socialized, and ready to meet their new family.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#puppies">
              Meet the puppies
            </a>
            <a className="btn btn-outline" href={WHATSAPP_URL}>
              WhatsApp us
            </a>
          </div>
        </div>
      </div>

      <div className="hero-strip" aria-hidden="true">
        <div className="marquee-track">
          {[...STRIP, ...STRIP].map((img, i) => (
            <figure key={i}>
              <img src={img.src} alt="" width="520" height="390" loading={i < 3 ? 'eager' : 'lazy'} decoding="async" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
