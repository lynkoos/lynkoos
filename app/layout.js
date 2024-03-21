import Head from 'next/head';

export const metadata = {
  title: 'lynkoos',
  description: '¡Bienvenido a lynkoos! Aquí es donde comienza tu historia. Conéctate con otros, comparte tus gustos y experiencias, mientras nosotros te ayudamos a crear tu portafolio. En lynkoos, compartir te conecta.',
}

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />

        <meta name="author" content="Tu Nombre" />
        <meta name="keywords" content="lynkoos, compartir, redes sociales, portafolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Metadatos de Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lynkoos.com/" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="../public/banner-red.png" />

        {/* Metadatos de Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://lynkoos.com/" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="../public/banner-red.png" />
      </Head>
      <html lang="es">
        <body>{children}</body>
      </html>
    </>
  );
}
