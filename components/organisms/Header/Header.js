import React from 'react';

import Head from 'next/head';
import Hero from '../../molecules/Hero/Hero';
import Navigation from '../../molecules/Navigation/Navigation';

const Header = () => {
  return (
    <>
      <Head>
        <title>Nerdistry. Tech site of life</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header>
        <Navigation />
        <Hero />
      </header>
    </>
  );
};

export default Header;
