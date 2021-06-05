import React, {useEffect, useState} from 'react';
import type {AppProps} from 'next/app';
import Footer from '../src/components/modules/footer/Footer';
import Head from 'next/head';
import Nav from '../src/components/modules/Nav/Nav';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import styles from '../styles/Home.module.scss';
import {useRouter} from 'next/router';
import FullscreenLoader from '../src/components/elements/FullScreenLoader/FullScreenLoader';
import '../styles/globals.scss';

const App = ({Component, pageProps}: AppProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleRouteChange = (url: string, load: boolean) => {
      const basePath = url.split('/')[1];

      if (basePath === 'province') {
        setLoading(load);
      } else {
        setLoading(false);
      }
      window.scrollTo(0, 0);
    };

    router.events.on('routeChangeStart', (e) => handleRouteChange(e, true));
    router.events.on('routeChangeComplete', (e) => handleRouteChange(e, false));
    router.events.on('routeChangeError', (e) => handleRouteChange(e, false));

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('routeChangeError', handleRouteChange);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Datos vacunación Argentina</title>
        <meta content="Datos de vacunación Covid-19 Argentina " name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <div className={loading ? 'fixed' : ''}>
        {loading && (
          <div className={'full-screen-loader-container'}>
            <FullscreenLoader />
          </div>
        )}
        <Nav />
        <div className={styles.container}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
