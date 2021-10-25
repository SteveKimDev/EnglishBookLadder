import * as React from 'react';

export const onRenderBody = ({ setPostBodyComponents, setHeadComponents }) => {
  setPostBodyComponents([
    <script
      key='1'
      type='text/javascript'
      src='https://unpkg.com/react/umd/react.production.min.js'
      crossOrigin='anonymous'
    />,
  ]);
  setPostBodyComponents([
    <script
      key='2'
      type='text/javascript'
      src='https://unpkg.com/react-dom/umd/react-dom.production.min.js'
      crossOrigin='anonymous'
    />,
  ]);
  setPostBodyComponents([
    <script
      key='3'
      type='text/javascript'
      src='https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js'
      crossOrigin='anonymous'
    />,
  ]);
  setHeadComponents([
    <link
      key='4'
      type='text/css'
      src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
      rel='stylesheet'
      integrity='sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3'
      crossOrigin='anonymous'
    />,
  ]);
};
