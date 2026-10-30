'use client';

import { useState } from 'react';
import { WHATSAPP_URL, PHONE_TEL, PHONE_DISPLAY, EMAIL_HREF, EMAIL_DISPLAY } from './links';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[0-9\s()+\-]{7,20}$/;

const INITIAL = { name: '', email: '', phone: '', interest: '', message: '' };

function validate(values) {
  const errs = {};
  if (values.name.trim().length < 2) errs.name = 'Please tell us your name.';
  if (!EMAIL_RE.test(values.email.trim())) errs.email = 'Enter a valid email address.';
  if (values.phone.trim() && !PHONE_RE.test(values.phone.trim()))
    errs.phone = 'Use digits, spaces, +, ( ) or - only.';
  if (!values.interest) errs.interest = 'Pick what you are interested in.';
  if (values.message.trim().length < 10) errs.message = 'A few more words please (10+ characters).';
  return errs;
}

/**
 * Contact form with client-side validation (inline errors + aria wiring).
 * Static site: submit is simulated. To go live, POST to a form service
 * (Formspree/Basin) inside handleSubmit — see TODO below.
 */
export default function Contact() {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [sent, setSent] = useState(false);

  const set = (field) => (e) => {
    const next = { ...values, [field]: e.target.value };
    setValues(next);
    if (touched[field]) setErrors(validate(next));
  };

  const blur = (field) => () => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate(values));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    setTouched({ name: true, email: true, phone: true, interest: true, message: true });
    if (Object.keys(errs).length) {
      document.querySelector('.has-error input, .has-error select, .has-error textarea')?.focus();
      return;
    }
    // TODO: replace with a real request, e.g.
    //   await fetch('https://formspree.io/f/XXXX', { method: 'POST', body: new FormData(e.target) })
    setSent(true);
    setValues(INITIAL);
    setTouched({});
  };

  const err = (field) =>
    touched[field] && errors[field] ? (
      <span className="field-error" id={`${field}-error`} role="alert">
        {errors[field]}
      </span>
    ) : null;

  const invalid = (field) => (touched[field] && errors[field] ? 'true' : undefined);

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Visit & contact</span>
          <h2 id="contact-title">Come say hello</h2>
          <p>Visits are by appointment so the puppies keep their routine — weekends fill up fast.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <h3>Where we are</h3>
              <p>1420 Oak Ridge Ln, Austin, TX 78704</p>
            </div>
            <div className="info-card">
              <h3>Visit hours</h3>
              <p>Sat & Sun, 10am – 5pm (by appointment)</p>
            </div>
            <div className="info-card">
              <h3>WhatsApp, call or text</h3>
              <p>
                <a href={WHATSAPP_URL}>WhatsApp us</a>
                <br />
                <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
                <br />
                <a href={EMAIL_HREF}>{EMAIL_DISPLAY}</a>
              </p>
            </div>
          </div>

          <form className="contact-form" onSubmit={onSubmit} noValidate>
            {sent && (
              <p className="form-success" role="status">
                Thanks! Your message is on its way — we reply within one business day.
              </p>
            )}

            <div className={`form-row${errors.name && touched.name ? ' has-error' : ''}`}>
              <label htmlFor="name">
                Your name <span className="req" aria-hidden="true">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={set('name')}
                onBlur={blur('name')}
                aria-invalid={invalid('name')}
                aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
                required
              />
              {err('name')}
            </div>

            <div className={`form-row${errors.email && touched.email ? ' has-error' : ''}`}>
              <label htmlFor="email">
                Email <span className="req" aria-hidden="true">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={set('email')}
                onBlur={blur('email')}
                aria-invalid={invalid('email')}
                aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
                required
              />
              {err('email')}
            </div>

            <div className={`form-row${errors.phone && touched.phone ? ' has-error' : ''}`}>
              <label htmlFor="phone">Phone (optional)</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={values.phone}
                onChange={set('phone')}
                onBlur={blur('phone')}
                aria-invalid={invalid('phone')}
                aria-describedby={errors.phone && touched.phone ? 'phone-error' : 'phone-hint'}
              />
              {errors.phone && touched.phone ? err('phone') : <span className="form-hint" id="phone-hint">So we can text you back about visits</span>}
            </div>

            <div className={`form-row${errors.interest && touched.interest ? ' has-error' : ''}`}>
              <label htmlFor="interest">
                I&apos;m interested in <span className="req" aria-hidden="true">*</span>
              </label>
              <select
                id="interest"
                name="interest"
                value={values.interest}
                onChange={set('interest')}
                onBlur={blur('interest')}
                aria-invalid={invalid('interest')}
                aria-describedby={errors.interest && touched.interest ? 'interest-error' : undefined}
                required
              >
                <option value="">Choose an option…</option>
                <option>Just browsing</option>
                <option>Golden Retriever</option>
                <option>German Shepherd</option>
                <option>Corgi</option>
                <option>Labrador</option>
                <option>Delivery question</option>
              </select>
              {err('interest')}
            </div>

            <div className={`form-row${errors.message && touched.message ? ' has-error' : ''}`}>
              <label htmlFor="message">
                Message <span className="req" aria-hidden="true">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={values.message}
                onChange={set('message')}
                onBlur={blur('message')}
                aria-invalid={invalid('message')}
                aria-describedby={errors.message && touched.message ? 'message-error' : undefined}
                placeholder="Tell us about your home, your schedule, or the puppy you keep thinking about…"
                required
              />
              {err('message')}
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
