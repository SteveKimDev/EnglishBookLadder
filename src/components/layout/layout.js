import * as React from 'react';
import Footer from './footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
