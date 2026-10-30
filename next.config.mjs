/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export a fully static site (HTML/CSS/JS) into /out — deploys as a Render Static Site.
  output: 'export',
  // The classic client-side router cache is off by default in Next 16;
  // keep the experimental cache-components mode disabled for a plain static build.
  cacheComponents: false,
};

export default nextConfig;
