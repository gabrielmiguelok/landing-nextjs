/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  images: {
    // Permitimos el dominio de Unsplash, donde se alojan las fotos
    domains: ['images.unsplash.com'],
    // Desactivamos la optimización interna de Next para evitar
    // cualquier bloqueo o cabeceras complicadas:
    unoptimized: true,
  },

  // Relajamos cabeceras COOP/COEP para no bloquear contenido externo
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'unsafe-none',
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'unsafe-none',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
