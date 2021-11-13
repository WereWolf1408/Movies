import React from 'react';
import { BreadCrumb } from '../BreadCrumb';
import { MovieList } from '../MovieList/MovieList';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

import './MovieBody.less';

const CLASSES = {
  NETFLIX_APP_MOVIE_BODY: 'netflix-app__movie-body',
  NETFLIX_APP_MOVIE_BODY_SEARCH_RESULT: 'netflix-app__movie-body-search-result',
  NETFLIX_APP_MOVIE_BODY_LOGO: 'netflix-app__movie-body-logo',
};

export const MovieBody = () => {
  const movies = useSelector((state: RootState) => {
    return state.movies.data;
  });

  return (
    <section className={CLASSES.NETFLIX_APP_MOVIE_BODY}>
      <BreadCrumb />
      <div className={CLASSES.NETFLIX_APP_MOVIE_BODY_SEARCH_RESULT}>
        <span>39 movies found</span>
      </div>
      <MovieList items={movies} />
    </section>
  );
};
