import React from 'react';
import { Provider } from 'react-redux';
import { App } from './App';
import { NetflixAppContextFunction } from './Context';
import { store } from './store/store';

export const ContextApp = () => (
  <Provider store={store}>
    <NetflixAppContextFunction>
      <App />
    </NetflixAppContextFunction>
  </Provider>
);
