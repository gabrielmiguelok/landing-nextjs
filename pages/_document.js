// pages/_document.js

import { Html, Head, Main, NextScript } from 'next/document';

/**
 * Documento personalizado para Next.js
 * Incluye metaetiquetas básicas para SEO y accesibilidad.
 */
export default function MyDocument() {
  return (
    <Html lang="es">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* Agrega aquí otras metaetiquetas o recursos necesarios */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
