import { WHATSAPP_URL } from './links';

/* Sticky bottom action bar on small phones (≤480px) — matches the reference:
   "WhatsApp us" + "Call". */
export default function MobileBar() {
  return (
    <div className="mobile-bar">
      <a href={WHATSAPP_URL}>WhatsApp us</a>
      <a href="tel:+971541676733">Call</a>
    </div>
  );
}
