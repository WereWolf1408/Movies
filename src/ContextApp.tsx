import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { NetflixAppContextFunction } from './Context';
import ConnectApp from './ConnectApp';
import { rootReducer } from './store/reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export const ContextApp = () => (
  <Provider store={store}>
    <NetflixAppContextFunction>
      <ConnectApp />
    </NetflixAppContextFunction>
  </Provider>
);
