/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/college-nursing', destination: '/colleges/nursing', permanent: true },
      { source: '/college-physio', destination: '/colleges/physiotherapy', permanent: true },
      { source: '/college-physiotherapy', destination: '/colleges/physiotherapy', permanent: true },
      { source: '/colleges/allied-health-sciences', destination: '/colleges/allied-health', permanent: true },
      { source: '/college-allied', destination: '/colleges/allied-health', permanent: true },
      { source: '/hospital-legacy', destination: '/hospital', permanent: true },
      { source: '/our-history', destination: '/hospital', permanent: true },
      { source: '/legacy', destination: '/hospital', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/careers', destination: '/career', permanent: true },
    ];
  },
};

export default nextConfig;
