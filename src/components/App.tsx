import React, { useEffect } from 'react';
import { Header } from './Header';
import { printMessage } from '@utils/utils';

import './App.less';

const CLASSES = {
  NETFLIX_APP: 'netflix-app',
  NETFLIX_APP_LOGO: 'netflix-app__logo',
};

export const App = () => {
  useEffect(() => {
    printMessage('called useEffect function');
  });

  return (
    <section className={CLASSES.NETFLIX_APP}>
      <Header title={'React App'} />
      <span>simple text</span>
    </section>
  );
};
