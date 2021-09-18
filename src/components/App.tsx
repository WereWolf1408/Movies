import React, { useEffect } from 'react';
import { Header } from './Header';
import { Example, Example1 } from './example';
/** @ts-ignore */
import { exampleFunction } from '@utils/utils';

import './App.less';

const title = 'React App';

const CLASSES = {
  NETFLIX_APP: 'netflix-app',
  NETFLIX_APP_LOGO: 'netflix-app__logo',
};

export const App = () => {
  useEffect(() => {
    exampleFunction();
  });
  return (
    <section className={CLASSES.NETFLIX_APP}>
      <Header title={'React App'} />
      <span>simple text</span>
      <Example />
      <Example1 />
    </section>
  );
};
