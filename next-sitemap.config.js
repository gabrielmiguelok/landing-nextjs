// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://synara.tech',
  generateRobotsTxt: true, // Genera robots.txt automáticamente
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/admin/**', '/api/**', '/login', '/register'], // Rutas que deseas excluir
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      }
    ],
  },
};
