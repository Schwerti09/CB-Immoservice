const path = require('node:path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only mock Google Fonts in CI / test environments to avoid network requests.
  // In production the real fonts are fetched by Next.js at build time.
  ...(process.env.CI || process.env.NODE_ENV === 'test'
    ? {
        env: {
          NEXT_FONT_GOOGLE_MOCKED_RESPONSES: path.join(__dirname, 'google-font-mocks.js'),
        },
      }
    : {}),
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
