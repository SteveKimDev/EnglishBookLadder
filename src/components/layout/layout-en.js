import * as React from 'react';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { Helmet } from 'react-helmet';

import Header from './header-en';
import Footer from './footer-en';

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <SSRProvider>
      <Helmet name='naver-site-verification' content='' />
      <Header />
      <main>{children}</main>
      <Footer />
    </SSRProvider>
  );
};

export default Layout;
