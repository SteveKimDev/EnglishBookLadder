import * as React from 'react';
import SSRProvider from 'react-bootstrap/SSRProvider';

import Header from './header-ko';
import Footer from './footer-ko';

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <SSRProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </SSRProvider>
  );
};

export default Layout;
