/* Two ways to meet your puppy — feature cards side by side from 768px. */
export default function WaysToMeet() {
  return (
    <section className="section section-alt" aria-labelledby="ways-title">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Visit or delivery</span>
          <h2 id="ways-title">Two ways to meet your puppy</h2>
          <p>Some families drop by; some prefer we bring the puppy home to them. Both are welcome.</p>
        </div>

        <div className="ways-grid">
          <article className="way-card">
            <div className="way-media">
              <img
                src="/images/showroom.jpg"
                alt="A girl hugging a brown and white spaniel puppy outdoors"
                width="960"
                height="600"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="way-body">
              <span className="way-tag">At our home</span>
              <h3>Visit our Austin home</h3>
              <p>
                Meet the litter where they were born — no showroom pressure, just puppy time. Visits
                are relaxed, unhurried, and always by appointment so the pups keep their routine.
              </p>
              <a className="btn btn-primary" href="#contact">
                Book a visit
              </a>
            </div>
          </article>

          <article className="way-card">
            <div className="way-media">
              <img
                src="/images/family.jpg"
                alt="A smiling child hugging a happy dog at golden hour"
                width="960"
                height="600"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="way-body">
              <span className="way-tag">To your door</span>
              <h3>Home delivery</h3>
              <p>
                Too far to visit? We hand-deliver across Texas and work with licensed flight nannies
                nationwide. You get photo updates from pickup to arrival, every step.
              </p>
              <a className="btn btn-primary" href="#contact">
                Ask about delivery
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
