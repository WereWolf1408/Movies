import React, { useState } from 'react';
import {Header} from './components/containers/Header';
import {HandleLoading} from './components/HOC/HandleLoading';
import BuggyCounter from './components/common/BuggyCounter';
import {MovieBody} from './components/containers/MovieBody';
import {Footer} from './components/containers/Footer';
import {FormModal} from './components/containers/FormModal';
import {DeleteMovieModal} from './components/containers/DeleteMovieModal';
import { formDataReceived, HeaderComponentProps } from '@utils/interfaces';

import './App.less';

const CLASSES = {
  NETFLIX_APP: 'netflix-app',
  NETFLIX_APP_LOGO: 'netflix-app__logo',
  NETFLIX_APP_FOOTER: 'netflix-app__footer',
};

const HEADER_TITLE = 'find your movie';

export const App = () => {
  const TestHOCFunction =
    HandleLoading<{ title: string; addMovieClickHandler: () => void }>(Header);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showDeleteMovieModal, setShowDeleteMovieModal] = useState(false);

  const addMovieClickHandler = () => {
    setShowModal(true);
  };

  const resetButtonClickHandler = () => {
    setShowModal(false);
  };

  const sendButtonClick = (opt: formDataReceived) => {};

  const addMovieButtonClickHandler = () => {
    console.log('add movie button was clicked');
  };

  return (
    <section className={CLASSES.NETFLIX_APP}>
      <Header title={HEADER_TITLE} addMovieClickHandler={addMovieClickHandler} />
      <TestHOCFunction
        isLoading
        props={{
          title: 'test HOC Component',
          addMovieClickHandler: addMovieButtonClickHandler,
        }}
      />
      <MovieBody />
      <Footer />
      {showModal && (
        <FormModal
          resetClickHandler={resetButtonClickHandler}
          sendButtonClick={sendButtonClick}
        />
      )}
      {showDeleteMovieModal && <DeleteMovieModal />}
    </section>
  );
};
