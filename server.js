// ./server.js

require('dotenv').config(); // Carga las variables de entorno desde .env

const express = require('express');
const next = require('next');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';

// Iniciar Next.js
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Configuración de seguridad básica con Helmet
  server.use(
    helmet({
      contentSecurityPolicy: dev ? false : undefined,
      crossOriginEmbedderPolicy: true,
    })
  );

  // Habilitar CORS para dominios específicos (configurables via .env)
  const allowedOrigins = process.env.CORS_ORIGINS
    ? process.env.CORS_ORIGINS.split(',')
    : ['http://localhost:3000']; // Dominio por defecto en desarrollo

  server.use(
    cors({
      origin: allowedOrigins,
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    })
  );


  // Habilitar compresión GZIP
  server.use(compression());

  // Parsing JSON
  server.use(express.json());


  // Manejo de rutas de Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Manejo de errores
  server.use((err, req, res, next) => {
    // logger.error('Error en el servidor:', err.stack); // Opcional: Registro de errores
    console.error('Error en el servidor:', err.stack);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Ocurrió un error interno en el servidor' });
    }
  });

  // Escuchar en 0.0.0.0 para aceptar conexiones IPv4
  server.listen(port, '0.0.0.0', (err) => {
    if (err) {
      // logger.error('Error al iniciar el servidor:', err); // Opcional: Registro de errores
      console.error('Error al iniciar el servidor:', err);
      throw err;
    }
    console.log(`> Servidor listo en http://localhost:${port}`);
  });
});
