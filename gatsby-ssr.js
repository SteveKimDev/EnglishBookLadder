import * as React from 'react';

export const onRenderBody = ({ setPostBodyComponents, setHeadComponents }) => {
  setPostBodyComponents([
    <script
      key='1'
      type='text/javascript'
      src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'
      integrity='sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM'
      crossOrigin='anonymous'
    />,
  ]);
  setHeadComponents([
    <link
      key='2'
      type='text/css'
      src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
      rel='stylesheet'
      integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC'
      crossOrigin='anonymous'
    />,
  ]);
};
