import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD
import { store } from './Redux/store';
import { Routers } from './Routers';
=======
import { NetflixAppContextFunction } from './Context';
import { store } from './store/store';
import { Routers } from './Routers';
import { App } from './App';
import { NetflixAppContextFunction } from './Context';
import { store } from './store/store';
>>>>>>> d07ec72 (Task 8: Add React Router to the application)

export const ContextApp = () => {
  return (
    <Provider store={store}>
<<<<<<< HEAD
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
=======
      <NetflixAppContextFunction>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </NetflixAppContextFunction>
>>>>>>> d07ec72 (Task 8: Add React Router to the application)
    </Provider>
  );
};
