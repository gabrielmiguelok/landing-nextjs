// pages/_app.js

import '../styles/globals.css';
import Head from 'next/head';

/**
 * Componente principal de la aplicación
 * Carga estilos globales y renderiza la página solicitada.
 * Mantiene metaetiquetas básicas para SEO y accesibilidad.
 */
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Synara - Optimización de Ventas B2B</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
