const PUPPIES = [
  {
    name: 'Callie',
    img: '/images/puppy-1.jpg',
    alt: 'Golden retriever puppy with its paws up on a wooden fence',
    breed: 'Golden Retriever',
    meta: 'girl · 9 weeks · first vaccines done',
  },
  {
    name: 'Ranger',
    img: '/images/puppy-2.jpg',
    alt: 'German shepherd puppy playing with a stick on green grass',
    breed: 'German Shepherd',
    meta: 'boy · 10 weeks · microchipped',
  },
  {
    name: 'Biscuit',
    img: '/images/puppy-3.jpg',
    alt: 'Fawn and white corgi standing on hind legs with tongue out',
    breed: 'Pembroke Welsh Corgi',
    meta: 'boy · 11 weeks · dewormed',
  },
  {
    name: 'Maple',
    img: '/images/puppy-4.jpg',
    alt: 'Young corgi puppy in a knit sweater sitting on a wooden floor',
    breed: 'Pembroke Welsh Corgi',
    meta: 'girl · 8 weeks · first vaccines done',
  },
  {
    name: 'Cocoa',
    img: '/images/puppy-5.jpg',
    alt: 'Tan Labrador mix puppy asleep on a pillow',
    breed: 'Labrador mix',
    meta: 'girl · 9 weeks · health certificate',
  },
  {
    name: 'Snow',
    img: '/images/puppy-6.jpg',
    alt: 'Fluffy white great pyrenees puppy on a leash by a lake',
    breed: 'Great Pyrenees mix',
    meta: 'boy · 10 weeks · microchipped',
  },
];

/** Available-puppies card grid with hover lift + image zoom. */
export default function Puppies() {
  return (
    <section id="puppies" className="section" aria-labelledby="puppies-title">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Available now</span>
          <h2 id="puppies-title">Meet the pups</h2>
          <p>Real photos of our current litter — updated every week. What you see is who you meet.</p>
        </div>

        <div className="puppy-grid">
          {PUPPIES.map((p) => (
            <article className="puppy-card" key={p.name}>
              <span className="badge">Available</span>
              <div className="puppy-media">
                <img src={p.img} alt={p.alt} width="640" height="480" loading="lazy" decoding="async" />
              </div>
              <div className="puppy-body">
                <h3>{p.name}</h3>
                <p className="puppy-meta">
                  {p.breed}
                  <br />
                  {p.meta}
                </p>
                <a className="card-link" href="#contact" aria-label={`Ask about ${p.name}`}>
                  Ask about {p.name} →
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="puppies-more">
          <a className="btn btn-outline" href="#contact">
            Ask about the whole litter
          </a>
        </p>
      </div>
    </section>
  );
}
