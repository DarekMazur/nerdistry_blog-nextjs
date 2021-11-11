import React from 'react';

import Head from 'next/head';
import Hero from '../../Hero/Hero';

const Header = () => {
  return (
    <>
      <Head>
        <title>Lorem ipsum</title>
        <meta name="description" content="" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <header>
        <Hero />
      </header>
    </>
  );
};

export default Header;
