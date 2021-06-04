import React from 'react';
import '../styles/globals.css';
import type {AppProps} from 'next/app';
import Footer from '../src/components/modules/footer/Footer';
import Head from 'next/head';
import Nav from '../src/components/modules/Nav/Nav';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import styles from '../styles/Home.module.scss';

const MyApp = ({Component, pageProps}: AppProps) => {
  return (
    <div>
      <Head>
        <title>Datos vacunación Argentina</title>
        <meta content="Datos de vacunación Covid-19 Argentina " name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Nav />
      <div className={styles.container}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
};

export default MyApp;
