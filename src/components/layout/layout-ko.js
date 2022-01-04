import * as React from 'react';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { Helmet } from 'react-helmet';

import Header from './header-ko';
import Footer from './footer-ko';

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
