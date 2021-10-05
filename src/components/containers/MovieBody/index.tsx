import React from 'react';
import { BreadCrumb } from '../BreadCrumb';
import MovieList from '../MovieList';
import { movies } from '@utils/utils';

import './style.less';

const CLASSES = {
  NETFLIX_APP_MOVIE_BODY: 'netflix-app__movie-body',
  NETFLIX_APP_MOVIE_BODY_SEARCH_RESULT: 'netflix-app__movie-body-search-result',
  NETFLIX_APP_MOVIE_BODY_LOGO: 'netflix-app__movie-body-logo',
};

const MovieBody = () => {
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

export default MovieBody;
