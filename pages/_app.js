/* /pages/_app.js */
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MedMarketing - Agencia de Marketing Médico</title>
        <meta
          name="description"
          content="Agencia especializada en marketing para profesionales de la salud. Impulsa tu clínica o consultorio con estrategias digitales."
        />
        <meta
          name="keywords"
          content="marketing médico, doctor, clínica, consultorio, publicidad médica, SEO médico, branding médico"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="MedMarketing - Agencia de Marketing Médico" />
        <meta
          property="og:description"
          content="Impulsa tu presencia en línea con estrategias de marketing para profesionales de la salud."
        />
        <meta property="og:image" content="/muestra.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tudominio.com/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MedMarketing - Agencia de Marketing Médico" />
        <meta
          name="twitter:description"
          content="Impulsa tu presencia en línea con estrategias de marketing para profesionales de la salud."
        />
        <meta name="twitter:image" content="/muestra.png" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
