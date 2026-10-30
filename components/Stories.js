'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const QUOTES = [
  {
    text: 'Callie settled in on day one — like she already knew where home was. The health records were spotless and every question we had got an answer the same day.',
    who: 'Maya R., Austin TX',
  },
  {
    text: 'We visited twice before deciding, and never felt pushed. Ranger came home socialized, confident, and already sleep-trained. Worth every mile from Round Rock.',
    who: 'Daniel & Priya K., Round Rock TX',
  },
  {
    text: 'Delivery to San Marcos was seamless — photo updates the whole way. Biscuit is the healthest puppy we have ever had, and the support line still answers months later.',
    who: 'Tom B., San Marcos TX',
  },
];

const GALLERY = [
  { src: '/images/puppy-1.jpg', alt: 'Golden retriever puppy with paws on a fence' },
  { src: '/images/showroom.jpg', alt: 'Girl hugging a spaniel puppy' },
  { src: '/images/puppy-3.jpg', alt: 'Corgi standing on hind legs' },
  { src: '/images/family.jpg', alt: 'Child hugging a dog at golden hour' },
  { src: '/images/puppy-2.jpg', alt: 'German shepherd puppy with a stick' },
  { src: '/images/puppy-5.jpg', alt: 'Puppy sleeping on a cushion' },
  { src: '/images/puppy-4.jpg', alt: 'Corgi puppy in a knit sweater' },
  { src: '/images/puppy-6.jpg', alt: 'White fluffy puppy on a lakeside trail' },
];

/**
 * Testimonials + photo gallery with a keyboard-friendly lightbox:
 * Esc closes, ←/→ navigate, focus moves into the dialog and returns on close.
 */
export default function Stories() {
  const [openIdx, setOpenIdx] = useState(null);
  const openerRef = useRef(null);
  const closeRef = useRef(null);
  const dialogRef = useRef(null);

  const isOpen = openIdx !== null;

  const close = useCallback(() => {
    setOpenIdx(null);
    openerRef.current?.focus();
  }, []);

  const step = useCallback((dir) => {
    setOpenIdx((i) => (i === null ? i : (i + dir + GALLERY.length) % GALLERY.length));
  }, []);

  /* Keyboard shortcuts while the lightbox is open */
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'Tab') {
        /* keep Tab cycling inside the dialog */
        const focusables = dialogRef.current?.querySelectorAll('button');
        if (!focusables?.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, close, step]);

  const open = (i, e) => {
    openerRef.current = e.currentTarget;
    setOpenIdx(i);
  };

  return (
    <section id="stories" className="section section-alt" aria-labelledby="stories-title">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Real families</span>
          <h2 id="stories-title">Happy families & puppies</h2>
          <p>
            A few words from families who took a Pawtail pup home — and photos from the weeks that
            followed.
          </p>
        </div>

        <div className="quotes">
          {QUOTES.map((q) => (
            <figure className="quote-card" key={q.who}>
              <div className="stars" aria-hidden="true">
                ★★★★★
              </div>
              <span className="sr-only">Rated 5 out of 5 stars</span>
              <blockquote>“{q.text}”</blockquote>
              <cite>{q.who}</cite>
            </figure>
          ))}
        </div>

        <div className="gallery-subhead">
          <h3>Life with a Pawtail pup</h3>
        </div>

        <div className="gallery-grid">
          {GALLERY.map((g, i) => (
            <button
              type="button"
              className="gallery-item"
              key={g.src + i}
              onClick={(e) => open(i, e)}
              aria-label={`Open photo ${i + 1} of ${GALLERY.length}: ${g.alt}`}
            >
              <img src={g.src} alt={g.alt} width="440" height="440" loading="lazy" decoding="async" />
            </button>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          ref={dialogRef}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <button type="button" className="lb-btn lb-close" onClick={close} ref={closeRef} aria-label="Close photo viewer">
            ✕
          </button>
          <button type="button" className="lb-btn lb-prev" onClick={() => step(-1)} aria-label="Previous photo">
            ‹
          </button>
          <img src={GALLERY[openIdx].src} alt={GALLERY[openIdx].alt} width="1000" height="750" />
          <button type="button" className="lb-btn lb-next" onClick={() => step(1)} aria-label="Next photo">
            ›
          </button>
          <p className="lightbox-caption">
            {GALLERY[openIdx].alt} — {openIdx + 1} / {GALLERY.length}
          </p>
        </div>
      )}
    </section>
  );
}
