import { Poppins, Playfair_Display } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBar from '@/components/MobileBar';
import './globals.css';

/* ---------------- Fonts (self-hosted at build time, no 3rd-party requests) ---------------- */
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const playfair = Playfair_Display({
  weight: ['600', '700'],
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

/* ---------------- SEO metadata ---------------- */
export const metadata = {
  metadataBase: new URL('https://pawtail-pups.onrender.com'), // TODO: your final domain
  title: 'Pawtail Pups — Healthy, Family-Raised Puppies in Austin, TX',
  description:
    'Pawtail Pups raises healthy, socialized puppies in Austin, Texas. Vet-checked, vaccinated, and ready to meet their new family. Book a visit or ask about an available puppy.',
  keywords: [
    'puppies Austin TX',
    'puppy breeder Austin',
    'golden retriever puppies',
    'corgi puppies Texas',
    'family-raised puppies',
  ],
  openGraph: {
    title: 'Pawtail Pups — Healthy, Family-Raised Puppies in Austin, TX',
    description:
      'Vet-checked, well-socialized puppies raised underfoot in Austin, Texas. Meet the litter and book a visit.',
    type: 'website',
    locale: 'en_US',
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

/* ---------------- App shell ---------------- */
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body>
        {/* Skip link for keyboard users */}
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
