const ITEMS = [
  { q: 'Are your puppies vaccinated and health-checked?', a: 'Yes. Every puppy goes home with a vet health certificate, first vaccinations, deworming, and a microchip. We also send the full vet record with you.' },
  { q: 'Can I meet a puppy before I decide?', a: 'Absolutely. We invite you to our Austin home to spend real time with the litter — play, hold, and talk with us about temperament before committing.' },
  { q: 'Can I take my puppy home the same day?', a: 'If the puppy is fully weaned, vet-cleared, and already reserved-for-you ready, yes. Otherwise we hold a small deposit and schedule a go-home day that works for both sides.' },
  { q: 'What comes home with the puppy?', a: 'Health records, a food sample for a stress-free transition, a blanket that smells like the litter, and our lifetime support line for any question that pops up.' },
  { q: 'Do you deliver outside Austin?', a: 'We hand-deliver anywhere in Texas and work with licensed flight nannies for other states. Delivery is quoted up front — no surprises after you reserve.' },
];

/** FAQ accordion using native <details>/<summary>: keyboard accessible for free. */
export default function Faq() {
  return (
    <section id="faq" className="section" aria-labelledby="faq-title">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Good to know</span>
          <h2 id="faq-title">Questions, answered</h2>
          <p>The things every family asks us — answered honestly.</p>
        </div>

        <div className="faq-list">
          {ITEMS.map((item, i) => (
            <details className="faq-item" key={i} name="faq" open={i === 0}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
