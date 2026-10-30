const STEPS = [
  {
    title: 'Tell us about your home',
    text: 'A quick chat about your family, space, and lifestyle helps us match you with the right puppy — not just the first available one.',
  },
  {
    title: 'Meet your match',
    text: 'Real photos, health records, and a video call with the pup. Ask everything you want — temperament, parents, routine.',
  },
  {
    title: 'Welcome them home',
    text: 'Pick up in Austin or schedule delivery. Every puppy goes home with records, a food sample, and a blanket that smells like home.',
  },
];

/** 3-step "how it works" journey. */
export default function Journey() {
  return (
    <section id="journey" className="section" aria-labelledby="journey-title">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2 id="journey-title">Your puppy journey</h2>
          <p>A simple, honest path from first message to first cuddle at home.</p>
        </div>

        <ol className="steps">
          {STEPS.map((s, i) => (
            <li className="step" key={s.title}>
              <span className="step-num" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>

        <p className="steps-cta">
          <a className="btn btn-primary" href="#contact">
            Start step one
          </a>
        </p>
      </div>
    </section>
  );
}
