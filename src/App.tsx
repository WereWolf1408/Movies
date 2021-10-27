import React, { useContext, useEffect, useState } from 'react';
import { Header } from './components/containers/Header';
import { HandleLoading } from './components/HOC/HandleLoading';
import { MovieBody } from './components/containers/MovieBody';
import { Footer } from './components/containers/Footer';
import { AddMovieModal } from './components/containers/AddMovieModal';
import { EditMovieModal } from './components/containers/EditMovieModal';
import { DeleteMovieModal } from './components/containers/DeleteMovieModal';
import { MovieDetails } from './components/containers/MovieDetails';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';
import { getData } from './store/ajaxActions';
import { showIdleSpinner } from './store/rootReducer';
import { ErrorModal } from './components/containers/ErrorModal';

import './App.less';

const TestHOCFunction = HandleLoading<{ title: string }>(Header);
const MovieBodyLoading = HandleLoading<{}>(MovieBody);
const HEADER_TITLE = 'find your movie';

const CLASSES = {
  NETFLIX_APP: 'netflix-app',
  NETFLIX_APP_LOGO: 'netflix-app__logo',
  NETFLIX_APP_FOOTER: 'netflix-app__footer',
};

export const App = () => {
  const state = useSelector((state: RootState) => {
    return {
      showAddMovieModal: state.mainStore.showAddMovieModal,
      errorMessage: state.mainStore.errorMessage,
      showError: state.mainStore.showError,
      showEditMovieModal: state.mainStore.showEditMovieModal,
      showMovieDetails: state.additionalStore.showMovieDetails,
      isLoading: state.mainStore.isLoading,
    };
  });
  const dispatch = useDispatch();
  const [showDeleteMovieModal, setShowDeleteMovieModal] = useState(false);

  useEffect(() => {
    //i am not sure, but something like that should exist
    //or maybe there is another way how to dispatch 2 actions one after another
    dispatch(showIdleSpinner());
    dispatch(getData(20));
  }, []);

  return (
    <section className={CLASSES.NETFLIX_APP}>
      {state.showMovieDetails ? <MovieDetails /> : <Header title={HEADER_TITLE} />}
      <TestHOCFunction
        isLoading
        props={{
          title: 'test HOC Component',
        }}
      />
      <MovieBody />
      <Footer />
      {state.showAddMovieModal && <AddMovieModal />}
      {state.showEditMovieModal && <EditMovieModal />}
      {showDeleteMovieModal && <DeleteMovieModal />}
      {state.showError && <ErrorModal text={state.errorMessage} />}
    </section>
  );
};
