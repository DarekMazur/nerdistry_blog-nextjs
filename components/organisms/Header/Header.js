import React from 'react';

import Head from 'next/head';
import Hero from '../../molecules/Hero/Hero';

const Header = () => {
  return (
    <>
      <Head>
        <title>Lorem ipsum</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header>
        <Hero />
      </header>
    </>
  );
};

export default Header;
