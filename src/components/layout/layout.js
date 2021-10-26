import * as React from 'react';

import Header from './header';
import Footer from './footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
