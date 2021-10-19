import React, { useEffect, useState } from 'react';
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
import { getData, searchMovie } from './store/ajaxActions';
import { showIdleSpinner, setQueryParams } from './store/rootReducer';
import { ErrorModal } from './components/containers/ErrorModal';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';

import './App.less';

const TestHOCFunction = HandleLoading<{ title: string }>(Header);
const HEADER_TITLE = 'find your movie';

const CLASSES = {
  NETFLIX_APP: 'netflix-app',
  NETFLIX_APP_LOGO: 'netflix-app__logo',
  NETFLIX_APP_FOOTER: 'netflix-app__footer',
};

export const App = () => {
  const location = useLocation();
  let [searchParams] = useSearchParams();
  const genre = searchParams.get('genre');
  const searchQuery = searchParams.get('searchQuery');
  const sortBy = searchParams.get('sortBy');
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
    if (location.pathname !== '/search') {
      dispatch(showIdleSpinner());
      dispatch(getData(20));
    }
  }, [location.pathname]);

  useEffect(() => {
    const params = {
      genre: genre || '',
      query: searchQuery || '',
      sortBy: sortBy || '',
    };
    dispatch(setQueryParams(params));
    dispatch(searchMovie(params));
  }, [searchQuery, genre, sortBy]);

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
