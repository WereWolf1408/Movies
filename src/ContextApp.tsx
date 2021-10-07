import React from 'react';
import { NetflixAppContextFunction } from './Context';
import { App } from './App';

export const ContextApp = () => (
  <NetflixAppContextFunction>
    <App />
  </NetflixAppContextFunction>
);
