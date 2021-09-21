import React, { useEffect } from 'react';
import { Header } from './components/containers/Header';
import { HandleLoading } from './components/common/HandleLoading';
import { ErrorBoundary } from './components/containers/ErrorBoundary';
import { BuggyCounter } from './components/common/BuggyCounter';
import { MovieBody } from './components/containers/MovieBody';
import { Footer } from './components/containers/Footer';

import './App.less';

const CLASSES = {
  NETFLIX_APP: 'netflix-app',
  NETFLIX_APP_LOGO: 'netflix-app__logo',
  NETFLIX_APP_FOOTER: 'netflix-app__footer',
};

const HEADER_TITLE = 'find your movie';

export const App = () => {
  useEffect(() => {});
  const TestHOCFunction = HandleLoading(Header);

  return (
    <section className={CLASSES.NETFLIX_APP}>
      <Header title={HEADER_TITLE} />
      <TestHOCFunction isLoading props={{ title: 'test HOC Component' }} />
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <MovieBody />
      <Footer />
    </section>
  );
};
