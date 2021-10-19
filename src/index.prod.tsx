import React from 'react';
import ReactDOM from 'react-dom';
import { Routers } from './ssr/Routers';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.hydrate(
  <BrowserRouter>
    <Routers />
  </BrowserRouter>,
  document.getElementById('app')
);
