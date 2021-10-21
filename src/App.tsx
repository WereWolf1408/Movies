import React, { useContext, useEffect, useState } from 'react';
import { Header } from './components/containers/Header';
import { HandleLoading } from './components/HOC/HandleLoading';
import { MovieBody } from './components/containers/MovieBody';
import { Footer } from './components/containers/Footer';
import { AddMovieModal } from './components/containers/AddMovieModal';
import { EditMovieModal } from './components/containers/EditMovieModal';
import { DeleteMovieModal } from './components/containers/DeleteMovieModal';
import { NetflixAppContext } from './Context/Context';
import { MovieDetails } from './components/containers/MovieDetails';

import './App.less';

const TestHOCFunction = HandleLoading<{ title: string }>(Header);
const HEADER_TITLE = 'find your movie';

const CLASSES = {
  NETFLIX_APP: 'netflix-app',
  NETFLIX_APP_LOGO: 'netflix-app__logo',
  NETFLIX_APP_FOOTER: 'netflix-app__footer',
};

interface AppProps {
  (props: { store: Array<string>; fetchData: () => void }): JSX.Element;
}

export const App: AppProps = (props) => {
  const { store, fetchData } = props;
  const { showAddMovieModal, showDetails, showEditMoviePopup } =
    useContext(NetflixAppContext);
  const [showDeleteMovieModal, setShowDeleteMovieModal] = useState(false);

  useEffect(() => {
    console.log(`---> useEffect inside App Component`);
    console.log(props);
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className={CLASSES.NETFLIX_APP}>
      {showDetails.value ? <MovieDetails /> : <Header title={HEADER_TITLE} />}
      <TestHOCFunction
        isLoading
        props={{
          title: 'test HOC Component',
        }}
      />
      <MovieBody />
      <Footer />
      {showAddMovieModal.value && <AddMovieModal />}
      {showEditMoviePopup.value && <EditMovieModal />}
      {showDeleteMovieModal && <DeleteMovieModal />}
    </section>
  );
};
