import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { NetflixAppContextFunction } from './Context';
import { store } from './store/store';
import { Routers } from './Routers';
import { App } from './App';

export const ContextApp = () => {
  return (
    <Provider store={store}>
      <NetflixAppContextFunction>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </NetflixAppContextFunction>
    </Provider>
  );
};
