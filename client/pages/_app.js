import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/Head';
import Layout from '../componets/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"></link>
    </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}


export default MyApp
