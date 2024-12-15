const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  transpilePackages: ['@mui/material', '@mui/system', '@mui/icons-material'],
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        ignored: [
          '**/node_modules',
          path.resolve(__dirname, 'node_modules/**'),
          path.resolve(__dirname, '.next/**'),
        ],
        poll: 1000, // Verifica cambios cada segundo
        aggregateTimeout: 300, // Retraso antes de reconstruir
      };
    }

    // Configuración de alias
    config.resolve.alias['@components'] = path.join(__dirname, 'components');
    config.resolve.alias['@utils'] = path.join(__dirname, 'utils');
    config.resolve.alias['@hooks'] = path.join(__dirname, 'hooks');
    config.resolve.alias['@pages'] = path.join(__dirname, 'pages');
    config.resolve.alias['@public'] = path.join(__dirname, 'public');
    config.resolve.alias['@styles'] = path.join(__dirname, 'styles');

    return config;
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.weatherapi.com',
        pathname: '/weather/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Evita bloquear iframes/pantalla completa
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' }, // Si necesitas DENY, quita esto
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=(), fullscreen=(self)',
          },
        ],
      },
    ];
  },
});
