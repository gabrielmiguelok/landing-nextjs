//config.js

const dev = process.env.NODE_ENV !== 'production';

module.exports = {
  env: {
    // Puedes definir variables de entorno aquí que Next.js puede utilizar.
    API_URL: dev ? 'http://localhost:3000' : 'https://synara.tech',
  },
  isDev: dev,
  logLevel: dev ? 'debug' : 'info',
  dateFormat: 'YYYY-MM-DD HH:mm:ss',  // Formato de fecha útil para los logs
};
