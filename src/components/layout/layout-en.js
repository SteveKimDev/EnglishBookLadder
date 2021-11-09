import * as React from 'react';
import SSRProvider from 'react-bootstrap/SSRProvider';

import Header from './header-en';
import Footer from './footer-en';

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
