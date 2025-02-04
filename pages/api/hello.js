import Cors from 'cors';

// Crea un middleware cors
const cors = Cors({
  methods: ['GET', 'HEAD'],
  origin: 'https://midominio.com', // o '*' si requieres abierto
});

// Helper para correr middlewares
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) =>
      result instanceof Error ? reject(result) : resolve(result)
    );
  });
}

export default async function handler(req, res) {
  // Ejecutar el middleware cors
  await runMiddleware(req, res, cors);

  // Luego tu lógica de la API
  res.status(200).json({ message: 'Hola desde Next API con CORS' });
}
