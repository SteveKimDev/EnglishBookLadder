import * as React from 'react';
import SSRProvider from 'react-bootstrap/SSRProvider';
import Seo from '../../components/seo';

import Header from './header-ko';
import Footer from './footer-ko';

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <SSRProvider>
      <Seo name='naver-site-verification' content='' />
      <Header />
      <main>{children}</main>
      <Footer />
    </SSRProvider>
  );
};

export default Layout;
