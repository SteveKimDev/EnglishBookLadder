import * as React from 'react';

import Header from './header-ko';
import Footer from './footer-ko';

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
