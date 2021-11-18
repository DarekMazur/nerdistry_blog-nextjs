import React from 'react';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';
import ContentPovider from '../../../providers/ContentProvider';

const Layout = ({ children }) => {
  return (
    <ContentPovider>
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    </ContentPovider>
  );
};

export default Layout;
