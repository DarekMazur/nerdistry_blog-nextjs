import React from 'react';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik } from 'formik';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        {' '}
        {/* wrapper */}
        <div>
          {' '}
          {/* searcher */}
          <Formik>
            <>
              <input></input>
              <button>Search</button>
            </>
          </Formik>
          <Formik>
            <>
              <input type="checkbox"></input>
              <input type="checkbox"></input>
              <input type="checkbox"></input>
              <input type="checkbox"></input>
              <input type="checkbox"></input>
            </>
          </Formik>
        </div>
        <div>
          {' '}
          {/* icon wrapper */}
          <FontAwesomeIcon icon={['fas', 'search']} /> {/* icon */}
        </div>
      </div>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
