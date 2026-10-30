/* Final CTA banner — dark brown panel with the star puppy photo. */
export default function CtaBanner() {
  return (
    <section className="section" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta-banner">
          <div className="cta-copy">
            <span className="eyebrow">Waiting list open</span>
            <h2 id="cta-title">Ready to meet your new best friend?</h2>
            <p>
              Tell us a little about your home and we will introduce you to the puppy that fits it —
              health records, honest advice, and no pressure.
            </p>
            <div className="cta-actions">
              <a className="btn btn-primary" href="#contact">
                Start a conversation
              </a>
              <a className="btn btn-light" href="tel:+15125550147">
                Call (512) 555-0147
              </a>
            </div>
          </div>
          <div className="cta-media">
            <img
              src="/images/puppy-1.jpg"
              alt="Golden retriever puppy peering over a fence"
              width="800"
              height="640"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
