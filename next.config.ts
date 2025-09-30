/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ Matikan dukungan legacy browser → bundle lebih kecil
  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true,
  },

  // ✅ Compression
  compress: true,

  // ✅ HTTP Headers untuk cache & keamanan (optional tapi bagus)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'geolocation=()' }, // disable geolocation
        ],
      },
    ]
  },
}

module.exports = nextConfig
