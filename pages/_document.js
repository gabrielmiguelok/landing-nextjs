// ./pages/_document.js

import { Html, Head, Main, NextScript } from 'next/document';

export default function MyDocument() {
  return (
    <Html lang="es">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/*
          Permitir que recursos de orígenes externos se carguen
          sin ser bloqueados por COEP/COOP.
          "unsafe-none" = desactiva dichas restricciones.
          Ajusta según tus necesidades de seguridad.
        */}
        <meta httpEquiv="Cross-Origin-Opener-Policy" content="unsafe-none" />
        <meta httpEquiv="Cross-Origin-Embedder-Policy" content="unsafe-none" />

        {/*
          Preconnect y dns-prefetch a Unsplash
          (o cualquier otro host) para acelerar la carga.
        */}
        <link rel="preconnect" href="https://source.unsplash.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://source.unsplash.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
