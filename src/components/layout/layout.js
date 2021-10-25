import * as React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Layout;
