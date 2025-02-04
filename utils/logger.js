const { createLogger, format, transports } = require('winston');

const { combine, timestamp, printf, colorize } = format;

// Verificar si está en el servidor
const isServer = typeof window === 'undefined';

let logger = null;

if (isServer) {
  // Definir el formato para los logs
  const logFormat = printf(({ level, message, timestamp }) => {
    return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
  });

  // Crear el logger
  logger = createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: combine(
      timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      logFormat
    ),
    transports: [
      new transports.Console({
        format: combine(
          colorize({ all: process.env.NODE_ENV !== 'production' }),
          logFormat
        ),
      }),
    ],
  });
}

module.exports = isServer
  ? logger
  : {
      info: () => {},
      debug: () => {},
      warn: () => {},
      error: () => {},
    };
