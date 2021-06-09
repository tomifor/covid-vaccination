import React from 'react';
import styles from '../../../../styles/Home.module.scss';
import Image from 'next/image';

const Footer = () => {
  const version = '1.1.0';

  return (
    <footer className={styles.footer}>
      <a href="https://twitter.com/tomifor" rel="noopener noreferrer" target="_blank">
        Developed by @tomifor - V {version}
      </a>
      <a href="https://covidstats.com.ar/" rel="noopener noreferrer" target="_blank">
        Data by covidstats.com.ar
      </a>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        rel="noopener noreferrer"
        target="_blank"
      >
        Powered by{' '}
        <span className={styles.logo}>
          <Image alt="Vercel Logo" height={16} src="/vercel.svg" width={72} />
        </span>
      </a>
    </footer>
  );
};

export default Footer;
