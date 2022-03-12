import '../styles/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title> Primer Digitalax </title>
        <link rel="icon" type="image/png" href="/images/icons/favicon-digitalax.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
