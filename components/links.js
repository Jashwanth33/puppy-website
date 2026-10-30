/**
 * Contact & social destinations — kept identical to the live reference site
 * (https://puppy.instabizweb.com/) so every hyperlink resolves to the same place.
 * One import point: update here to change them everywhere.
 */

/* WhatsApp deep link (opens the app on mobile) */
export const WHATSAPP_URL =
  'https://wa.me/971541676733?text=' +
  encodeURIComponent("Hi Pawtail Pups! I'd love to know more about your puppies.");

/* Phone — same number as the reference */
export const PHONE_TEL = 'tel:+971541676733';
export const PHONE_DISPLAY = '+971 54 167 6733';

/* Email (placeholder — reference hides theirs behind Cloudflare) */
export const EMAIL_HREF = 'mailto:hello@pawtailpups.com';
export const EMAIL_DISPLAY = 'hello@pawtailpups.com';

/* Social profiles — same as the reference */
export const SOCIALS = [
  {
    label: 'Pawtail Pups on Instagram',
    short: 'Instagram',
    href: 'https://www.instagram.com/teddypups.worldwide/',
    icon: 'instagram',
  },
  {
    label: 'Pawtail Pups on TikTok',
    short: 'TikTok',
    href: 'https://www.tiktok.com/@teddypupsuae',
    icon: 'tiktok',
  },
  {
    label: 'Pawtail Pups on Facebook',
    short: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61567496944539',
    icon: 'facebook',
  },
];
