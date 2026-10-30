'use client';

import { useEffect, useRef, useState } from 'react';
import { WHATSAPP_URL } from './links';

/* Inline paw-print logo mark */
function PawMark() {
  return (
    <svg
      className="brand-mark"
      width="34"
      height="34"
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="64" height="64" rx="14" fill="#F28C28" />
      <g fill="#3B2A20">
        <ellipse cx="20" cy="22" rx="6" ry="8" />
        <ellipse cx="44" cy="22" rx="6" ry="8" />
        <ellipse cx="12" cy="36" rx="5" ry="6.5" />
        <ellipse cx="52" cy="36" rx="5" ry="6.5" />
        <path d="M32 32c8 0 14 7 14 14s-6 10-14 10-14-4-14-10 6-14 14-14z" />
      </g>
    </svg>
  );
}

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#puppies', label: 'Puppies' },
  { href: '#journey', label: 'How it works' },
  { href: '#stories', label: 'Happy families' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Visit & contact' },
];

/**
 * Sticky header with a collapsible mobile menu.
 * - Gains a shadow after scrolling (.is-scrolled)
 * - Hamburger toggles the dropdown (.is-open), closes on link click / Escape
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef(null);

  /* Shadow on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Escape closes the menu and returns focus to the toggle */
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#home" className="brand" aria-label="Pawtail Pups — home">
          <PawMark />
          <span className="brand-name">Pawtail Pups</span>
        </a>

        <nav id="primary-nav" className={`nav${open ? ' is-open' : ''}`} aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
            Say hello
          </a>
        </nav>

        <a className="btn btn-primary header-cta" href={WHATSAPP_URL}>
          WhatsApp us
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
    </header>
  );
}
