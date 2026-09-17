/** @type {import('next').NextConfig} */
const nextConfig = {
  // The old GoDaddy URLs are indexed today. Without these they 404 on launch day.
  async redirects() {
    return [
      { source: "/combat-training-center", destination: "/combat", permanent: true },
      { source: "/combat-trainers", destination: "/combat/coaches", permanent: true },
      { source: "/combat-pricing", destination: "/combat/membership", permanent: true },
    ];
  },
};

module.exports = nextConfig;
