import React from 'react';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';
import SearchBar from '../../organisms/Searchbar/Searchbar';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <SearchBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
