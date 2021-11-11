import React from 'react';

import Head from 'next/head';

const Header = () => {
  return (
    <>
      <Head>
        <title>Lorem ipsum</title>
        <meta name="description" content="" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <header>
        <h1>Hello world</h1>
      </header>
    </>
  );
};

export default Header;
